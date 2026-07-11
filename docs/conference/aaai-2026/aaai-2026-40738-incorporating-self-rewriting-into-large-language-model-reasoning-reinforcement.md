---
title: Incorporating Self-Rewriting into Large Language Model Reasoning Reinforcement
title_zh: 将自改写融入大语言模型推理强化
authors: "Jiashu Yao, Heyan Huang, Shuang Zeng, Chuwei Luo, Wangjie You, Jie Tang, Qingsong Liu, Yuhang Guo, Yangyang Kang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40738/44699"
tags: ["query:mlr"]
score: 6.0
evidence: 自改写框架改进大语言模型推理强化
tldr: 针对大推理模型仅依赖最终正确性奖励导致内部推理质量差的问题，提出自改写框架，让模型改写自身推理过程并从中学习，结合强化学习优化中间思考步骤。在数学推理任务上减少了过度思考等不良现象，提升了效率。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 仅基于最终正确性的强化奖励无法有效监督内部推理过程，导致过度思考等问题。
method: 提出自改写框架，模型先改写自身推理文本，再利用强化学习从改写的推理中学习，改进内部思维链。
result: 在多个推理基准上减少了过思考，提升了推理准确率。
conclusion: 自改写策略可有效改善强化学习训练的推理质量。
---

## Abstract
Through reinforcement learning (RL) with outcome correctness rewards, large reasoning models (LRMs) with scaled inference computation have demonstrated substantial success on complex reasoning tasks. However, the one-sided reward, focused solely on final correctness, limits its ability to provide detailed supervision over internal reasoning process. This deficiency leads to suboptimal internal reasoning quality, manifesting as issues like over-thinking, under-thinking, redundant-thinking, and disordered-thinking. Inspired by the recent progress in LRM self-rewarding, we introduce self-rewriting framework, where a model rewrites its own reasoning texts, and subsequently learns from the rewritten reasoning to improve the internal thought process quality. For algorithm design, we propose a selective rewriting approach wherein only "simple" samples, defined by the model's consistent correctness, are rewritten, thereby preserving all original reward signals of GRPO. For practical implementation, we compile rewriting and vanilla generation within one single batch, maintaining the scalability of the RL algorithm and introducing only 10% overhead. Extensive experiments on diverse tasks with different model sizes validate the effectiveness of self-rewriting. In terms of the accuracy-length tradeoff, the self-rewriting approach achieves improved accuracy (+0.6) with substantially shorter reasoning (-46%) even without explicit instructions in rewriting prompts to reduce reasoning length, outperforming existing strong baselines. In terms of internal reasoning quality, self-rewriting achieves significantly higher scores (+7.2) under the LLM-as-a-judge metric, successfully mitigating internal reasoning flaws.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义

- **研究动机**：当前大规模推理模型（LRM）通过强化学习（RL）仅依赖最终正确性奖励进行训练，这一单一面奖励无法对内部推理过程提供细粒度监督，导致推理文本出现多种内部缺陷：过度思考（over-thinking）、思考不足（under-thinking）、冗余思考（redundant-thinking）和混乱思考（disordered-thinking）。这些缺陷损害了推理的可解释性、效率乃至最终准确性。
- **整体含义**：论文提出一种**自改写（Self-Rewriting）框架**，让模型改写自己生成的推理文本，并从中学习，以改进内部思维过程质量。该方法在保持RL扩展性的同时，有效缓解上述内部推理缺陷，实现了更短的推理长度和更高的准确性。

## 2. 论文提出的方法论

### 核心思想
- 将模型自身生成的推理文本进行**选择性改写**（仅对模型已完全正确回答的“简单”样本进行改写），然后将改写后的推理文本作为更高奖励的候选，通过GRPO（Group Relative Policy Optimization）进行强化学习优化。
- 核心创新：用**生成式自改进**替代传统的基于数值奖励的自我奖励，使模型能从更高质量的推理文本中学习。

### 关键技术细节
1. **选择性改写策略**：
   - 对于每个问题，先生成前 \( G/2 \) 个响应（\( G \) 为组大小）。如果这 \( G/2 \) 个响应的答案全部正确，则对其中一个推理文本进行改写，并将改写的文本与原问题拼接继续生成最终答案；否则，后 \( G/2 \) 个响应按正常方式采样。
   - 优点：仅利用原本可能无用的“简单”样本进行改写，不干扰对困难样本的探索；保持GRPO原始奖励信号的完整性。
2. **奖励设计**：
   - 对于改写后的样本，如果组内所有原始响应都正确，则改写样本获得最高奖励（1），原始正确响应奖励设为1，其他（错误或未被改写的）设为0；如果组内存在错误响应，则保持原GRPO的正确性奖励。
3. **高效实现**：
   - 将改写过程与正常生成编译到同一批次中：先完成前一半批次的生成，然后将“未全部正确”问题的正常生成样本和“全部正确”问题的改写样本合并为一个批次进行联合推理；改写后的推理段单独批次进行后续生成（仅生成`</think>`之后的内容）。总时间开销仅增加约10%。

### 算法流程（文字描述）
- 输入：问题集 \( Q \)，模型 \( M \)，验证器 \( R \)，组大小 \( G \)。
- 对每个问题 \( q \)：
  1. 生成前 \( G/2 \) 个响应及其推理文本、答案。
  2. 验证这些答案的正确性。
  3. 如果全部正确，则模型对推理文本进行改写，并基于改写后的推理继续生成答案；否则正常生成后 \( G/2 \) 个响应。
  4. 计算所有响应的最终奖励（根据式(2)调整）。
  5. 使用GRPO优化目标（式(3)）更新模型参数。
- 输出：适应后的模型。

## 3. 实验设计

### 使用的数据集
- **训练**：从 DeepMath-103K 中随机采样 10K 条（数学推理）。
- **测试**：四个不同领域的基准：
  - MATH-500（数学推理）
  - GPQA-Diamond（科学推理）
  - ARC-Challenge（逻辑推理）
  - MMLU-Pro（知识推理）

### 基准方法
- **Original**：原始模型，无RL训练。
- **GRPO**：仅使用正确性奖励的在线RL。
- **LenPen1 / LenPen2**：在正确性奖励基础上添加启发式长度惩罚（在线RL）。
- **ShorterBetter**：偏好长度最接近正确最短响应的样本（在线RL）。
- **LPO**：离线RL，偏好较短正确响应。
- **TOPS**：离线RL，通过推理努力水平条件生成多样长度的响应，偏好最短正确响应。

### 模型
- Qwen3-1.7B、Qwen3-4B、Qwen3-8B（三种参数规模）。

### 评估指标
- **准确率-长度权衡**：Pass@1 准确率、平均推理 token 数（4次采样，温度0.6，最大长度32K）。
- **内部推理质量**：使用更强LLM（DeepSeek-V3）作为裁判，对每个推理文本在过思考、思考不足、冗余思考、混乱思考四个维度上打分（1-5分），最后缩放至100分。

### 实验充分性
- 主实验覆盖3种模型 × 4个数据集 × 7种对比方法（加上本方共8种），结果如表1所示。
- 消融实验：改变训练数据规模（5K/10K/15K/20K样本），对比不同长度压缩尺度下的表现（图4）。
- 选择性改写策略的消融：对比普通改写（随机选择50%或100%样本改写）与选择性改写（表2）。
- 分析实验：
  - 长度比率分布（图5）：对比自改写与vanilla长度偏好方法在训练中偏好/拒绝样本的长度比分布。
  - 细粒度裁判分数（表3）：在DeepMath和MMLU训练集上分析改写前后四个维度的分数变化。

## 4. 资源与算力

- 论文未明确说明使用的具体GPU型号、数量或训练时长。
- 仅提到训练超参数：所有方法训练1个epoch，batch size=256。
- 强调实现高效性：自改写仅增加约10%的时间开销，但由于主要用于后训练而非大规模预训练，该开销可接受。

## 5. 实验数量与充分性评估

- **实验数量充足**：包括3种模型规模、4个数据集、7种对比方法、多项消融和分析，总计至少30余组对比数据点。
- **实验公平性**：
  - 所有方法使用相同的训练数据、超参数（如学习率、rollout size等），控制变量良好。
  - 在线RL方法与离线RL方法分开比较，并承认两者本质差异，分析公平。
  - 使用强LLM裁判进行内部质量评估，并报告了裁判的一致性信息（附录D提及但未详细展示），确保评估客观。
- **实验充分性**：覆盖了主要任务、多种规模、多种基线、消融和分析，实验设计较为严谨。

## 6. 论文的主要结论与发现

1. **自改写在准确率-长度权衡上显著优于现有强基线**：在平均准确率提升0.6%的同时，推理长度减少46%（对8B模型），且无需在改写提示中明确要求缩短长度。
2. **内部推理质量显著提升**：LLM裁判评分相比最佳基线提高7.2分（8B模型），有效缓解了过思考、思考不足、冗余思考和混乱思考等问题。
3. **选择性改写至关重要**：随机选择样本改写会导致性能下降，仅在“简单”样本（全部正确）上改写能保留原GRPO的探索信号，同时提升推理质量。
4. **在线RL方法优于离线RL**：在线动态调整比静态偏好数据集更灵活，尤其在跨域长度控制上表现更佳。
5. **自改写的长度控制具有多样性**：改写后长度比率分布呈双峰分布，部分样本反而变长，表明模型能根据问题特性动态调整简洁度，而非简单压缩。

## 7. 优点

- **方法新颖性**：首次将“自改写”作为一种生成式自我改进机制融入LRM的RL训练，区别于以往的数值自我奖励（self-rewarding）。
- **选择性策略设计巧妙**：仅改写“简单”样本，最小化对原有RL流程的干扰，同时利用原本无用的样本进行质量提升，避免对困难样本的过度干预。
- **高效实现**：通过批次编译仅增加10%开销，具有实际部署价值。
- **全面评估**：不仅关注准确率-长度权衡，还首次系统评估了四种具体推理缺陷，并使用LLM裁判进行细粒度评分，评估维度丰富。
- **实验严谨**：在多个模型大小、多个任务上验证，并与多种基线（在线/离线）公平比较，消融充分。

## 8. 不足与局限

- **算力信息缺失**：未提供训练所需的具体GPU类型、数量或时间，不利于其他研究者复现或预估成本。
- **改写指令简单**：仅使用“提升整体质量”的通用改写指令，未探索针对特定应用场景的定向改写（如强制缩短、保持语言风格等），论文也承认这留待未来研究。
- **内部质量评估依赖强LLM裁判**：虽然使用了DeepSeek-V3，但裁判本身的偏差和一致性未充分讨论（仅附录提及，但未提供具体数据），可能存在主观性。
- **训练数据单一**：仅使用DeepMath-103K中的10K数学样本进行训练，跨域泛化能力仅在测试集上验证，未在更多领域进行调参或迁移实验。
- **模型规模受限**：仅实验了1.7B、4B、8B模型，未验证在更大模型（如70B）上的表现，结论的规模化迁移性未知。
- **选择性改写可能限制提升空间**：仅对“简单”样本改写，对困难样本的推理质量改善有限，论文未探讨如何逐步将改写范围扩展到较难样本。

（完）

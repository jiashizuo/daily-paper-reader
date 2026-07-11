---
title: "P2S: Probabilistic Process Supervision for General-Domain Reasoning Question Answering"
title_zh: P2S：面向通用领域推理问答的概率过程监督
authors: "Wenlin Zhong, Chengyuan Liu, Yiquan Wu, Bovin Tan, Changlong Sun, Yi Wang, Xiaozhong Liu, Kun Kuang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40813/44774"
tags: ["query:mlr"]
score: 7.0
evidence: 基于过程奖励的强化学习微调
tldr: 通用领域推理问答中缺乏细粒度过程奖励信号。P2S框架通过概率过程监督，利用可验证奖励的强化学习提供逐步骤的过程奖励，无需额外奖励模型。实验表明该方法在多个基准上提升了推理准确性和逻辑一致性，为强化学习微调提供了新思路。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有RLVR方法在通用领域缺乏可验证奖励，且忽略过程监督。
method: 提出概率过程监督框架，利用参考概率作为过程奖励，进行细粒度步骤级监督。
result: 在多个推理基准上相比基线方法显著提升推理准确性和过程一致性。
conclusion: P2S为通用领域推理问答提供了一种有效的自我监督过程奖励方法。
---

## Abstract
While reinforcement learning with verifiable rewards (RLVR) has advanced LLM reasoning in structured domains like mathematics and programming, its application to general-domain reasoning tasks remains challenging due to the absence of verifiable reward signals. To this end, methods like Reinforcement Learning with Reference Probability Reward (RLPR) have emerged, leveraging the probability of generating the final answer as a reward signal. However, these outcome-focused approaches neglect crucial step-by-step supervision of the reasoning process itself. To address this gap, we introduce Probabilistic Process Supervision (P2S), a novel self-supervision framework that provides fine-grained process rewards without requiring a separate reward model or human-annotated reasoning steps. During reinforcement learning, P2S synthesizes and filters a high-quality reference reasoning chain (gold-CoT). The core of our method is to calculate a Path Faithfulness Reward (PFR) for each reasoning step, which is derived from the conditional probability of generating the gold-CoT's suffix, given the model's current reasoning prefix. Crucially, this PFR can be flexibly integrated with any outcome-based reward, directly tackling the reward sparsity problem by providing dense guidance. Extensive experiments on reading comprehension and medical Question Answering benchmarks show that P2S significantly outperforms strong baselines.

---

## 论文详细总结（自动生成）

# P2S：面向通用领域推理问答的概率过程监督

## 1. 核心问题与整体含义（研究动机和背景）
- **背景**：基于可验证奖励的强化学习（RLVR）在数学、编程等结构化领域显著提升了 LLM 的推理能力，但在通用领域（如开放式问答、医学推理）中，答案风格多样、难以设计确定性的验证信号，因此 RLVR 难以直接应用。
- **现有方法的不足**：
  - 人工设计奖励函数不可扩展。
  - 训练外部验证器需要大量标注数据且成本高。
  - 基于参考概率的奖励方法（RLPR）虽然避免了外部模型，但仅关注**最终答案的概率**，忽略了**逐步推理过程的监督**，导致奖励稀疏且易使模型走“捷径”。
- **本文的切入**：提出一个自我引导、细粒度的过程监督框架 P2S，利用模型自身生成的概率来评估每一步推理路径的“忠实度”，无需外部奖励模型或人工标注。

## 2. 方法论：核心思想与关键技术细节
- **总体架构**：P2S 在 GRPO（组相对策略优化）框架内运行，包含两个核心组件：动态金链合成（Dynamic Gold-CoT Synthesis）和路径忠实奖励（Path Faithfulness Reward, PFR）。
- **动态金链合成（Gold-CoT）**：
  - 每轮训练中，用当前策略模型 πθ 在问题 q 和正确答案 y* 的引导下生成 K 个候选推理路径。
  - 过滤掉格式错误的路径，并按条件概率 log πθ(y* | q, z_k) 选出质量最高的一个作为金链 o*。
  - 金链会随模型迭代动态更新，形成自增强循环。
- **路径忠实奖励（PFR）**：
  - 将生成路径 z 切分为 m 步（等长，上限 MAX_STEP_NUM）。
  - 对第 i 步（i < m），定义前缀 p_i = z[:i]，后缀 s_t 为金链 o* 中从第 t 步开始的部分。
  - 奖励计算为信息增益：`r_step(zi) = max_t [ log πθ(s_t | q, p_i) – log πθ(s_t | q, p_masked) ]`，其中 p_masked 是对 p_i 做掩码后的基线，用于消除后缀本身概率的影响。
  - 对最后一步（zm），奖励直接为生成正确答案的条件概率：`r_step(zm) = log πθ(y* | q, z)`。
- **奖励加权与整合**：
  - 步骤权重采用单调递增的 Sigmoid 函数，越靠后的步骤权重越大，鼓励模型在后期收敛正确。
  - 层级整合策略(HRI)：格式错误的轨迹得 -1；若组内有正确轨迹则用该正确轨迹的奖励；若无正确轨迹，则用 PFR 奖励作为密集信号。
- **冷启动**：训练初期仅使用格式奖励，若干步后再启用完整 P2S 奖励机制。

## 3. 实验设计
### 数据集
- **DROP**：离散推理型阅读理解基准，需从维基百科文本中进行算术、排序等推理。
- **Medical QA**：基于医学考试数据的开放问答，风格多样。
- 均构建为问答格式，筛选长度限制后拆分训练/测试（各约 10k/2k 条）。

### 评估指标
- **ROUGE-1 F1**：词汇重叠度。
- **ACC (ACC_Claude, ACC_GPT, ACC_Verifier)**：分别由 Claude-4 Sonnet、GPT-4o、一个 1.5B 通用验证器判断语义等价，最后取三者平均（ACC_Avg）作为最终正确性指标。

### 对比基线
- **Prompt-based**：CoT、Self-Consistency（无微调）。
- **Fine-tuning & RL**：Full-SFT、GRPO（以 ROUGE-1 F1 为奖励）、GRPO+SFT-loss、SFT+GRPO、General Reasoner（使用 1.5B 外部验证器）。
- **RLPR 方法**：DRO、RLPR、VeriFree（均基于模型自身概率）。
- 所有基于 RL 的方法（包括 P2S）在 RL 阶段前均进行相同的冷启动 SFT 微调，确保公平。

## 4. 资源与算力
- **论文未明确说明** GPU 型号、具体数量或训练时长。仅提及方法基于 Qwen2.5-1.5B-Instruct（及 3B 扩展），计算开销约为 O((K + m²) · C_fwd) 次前向传播，但未给出实际训练资源细节。

## 5. 实验数量与充分性
- **主要实验**：在 DROP 和 Medical QA 两个数据集上进行，对比 10+ 种基线，报告多种指标。
- **消融实验**（表2）：验证 Gold-CoT 过滤（GCF）、路径忠实奖励（PFR）、奖励加权（RS）、层级整合（HRI）四个组件，均显示正向贡献，降幅明显。
- **模型规模实验**（表3）：在 1.5B 和 3B 上验证 P2S 优于 SFT+GRPO，且 1.5B P2S 超过 3B 基模型。
- **可验证子集分析**（图3）：在可单字回答的子集上，P2S 优于 RLPR 和 RLVR，证明其优势并非限于稀疏奖励场景。
- **案例研究**（图4）：展示 PFR 如何对部分正确的步骤分配高且合理的奖励。
- **总体评价**：实验设计较为全面，覆盖主要对比、消融、规模扩展和机制分析，基线设置合理，消融实验充分，公平性通过统一冷启动保证。

## 6. 主要结论与发现
- P2S 在 DROP 和 Medical QA 上显著超过所有基线，ACC_Avg 分别提升至 70.70（超最佳基线 2.3%）和 24.28（超 1.3%）。
- 过程监督（PFR）比单纯结果奖励（RLVR）或结果概率奖励（RLPR）更有效，能缓解奖励稀疏并引导模型产生形式上和质量上都更好的答案。
- P2S 甚至优于使用 1.5B 外部验证器的 General Reasoner，表明内部自监督过程奖励比外部验证器更可靠，且验证器在跨域时存在偏见（如 Medical QA 上 ACC_Verifier 偏高）。
- 模型扩展实验表明 P2S 在更大模型上仍保持优势，且小模型 + 过程监督可超越大模型无监督。

## 7. 优点
- **无需外部模型或人工标注**：完全基于策略模型自身生成进行计算，成本低，易于部署。
- **密集过程监督**：PFR 为中间步骤提供连续信号，克服了奖励稀疏问题，即使在所有样本都错误时也能提供有效梯度。
- **动态自适应**：Gold-CoT 随模型进化而更新，形成自增强循环。
- **灵活集成**：PFR 可与任意结果奖励组合，采用层级策略自动切换，适应不同训练阶段。
- **计算可接受**：复杂度 O((K + m²) · C_fwd)，且并行化友好。

## 8. 不足与局限
- **算力资源未披露**：未说明实际训练开销，难以评估在更大模型或更多数据集上的可行性。
- **领域覆盖有限**：仅在 DROP（阅读推理）和 Medical QA（医学）上验证，未在更多通用推理任务（如常识问答、科学推理）上测试，泛化性存疑。
- **对模型自身质量依赖**：如果策略模型初始推理能力极差，合成的 Gold-CoT 可能质量不高，影响 PFR 有效性。
- **步骤切割方式简单**：按相等 token 数切割成固定步数，对逻辑上自然成段的推理可能有损。
- **基线中未包含更强的 RL 方法**：如 DeepSeek-R1 等使用更复杂奖励或更大模型的方法未直接对比（但作者基于较小模型实验）。
- **可能存在奖励偏差**：PFR 最大化信息增益可能导致模型偏好与 Gold-CoT 更接近的路径，而非真正多样化的正确推理方式。

（完）

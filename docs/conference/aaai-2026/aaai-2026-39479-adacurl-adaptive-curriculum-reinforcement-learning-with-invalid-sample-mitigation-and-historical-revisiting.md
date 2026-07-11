---
title: "AdaCuRL: Adaptive Curriculum Reinforcement Learning with Invalid Sample Mitigation and Historical Revisiting"
title_zh: AdaCuRL：自适应课程强化学习，结合无效样本缓解和历史重访
authors: "Renda Li, Hailang Huang, Fei Wei, Feng Xiong, Yong Wang, Xiangxiang Chu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/39479/43440"
tags: ["query:mlr"]
score: 7.0
evidence: 自适应课程强化学习用于LLM推理微调
tldr: 现有强化学习微调在混合难度样本上训练导致梯度饥饿和策略退化。AdaCuRL提出自适应课程强化学习框架，通过动态调整样本难度和重访历史有效样本，缓解这些问题。在数学和推理基准上，AdaCuRL显著提升了LLM的推理准确性和训练稳定性，避免了手动课程设计和灾难性遗忘。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 混合难度样本训练导致梯度饥饿和策略退化。
method: 提出自适应课程强化学习，动态调整样本难度并重访历史有效样本。
result: 在推理基准上提升准确性和训练稳定性。
conclusion: 自适应课程是改进LLM推理微调的有效策略。
---

## Abstract
Reinforcement learning (RL) has demonstrated considerable potential for enhancing reasoning in large language models (LLMs). 
However, existing methods suffer from Gradient Starvation and Policy Degradation when training directly on samples with mixed difficulty. To mitigate this, prior approaches leverage Chain-of-Thought (CoT) data, but the construction of high-quality CoT annotations remains labor-intensive. Alternatively, curriculum learning strategies have been explored but frequently encounter challenges, such as difficulty mismatch, reliance on manual curriculum design, and catastrophic forgetting.
To address these issues, we propose AdaCuRL, a Adaptive Curriculum Reinforcement Learning framework that integrates coarse-to-fine difficulty estimation with adaptive curriculum scheduling. This approach dynamically aligns data difficulty with model capability and incorporates a data revisitation mechanism to mitigate catastrophic forgetting. Furthermore, AdaCuRL employs adaptive reference and sparse KL strategies to prevent Policy Degradation. Extensive experiments across diverse reasoning benchmarks demonstrate that AdaCuRL consistently achieves significant performance improvements on both LLMs and MLLMs.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **问题背景**：强化学习（RL）用于增强大语言模型（LLMs）和多模态大模型（MLLMs）的推理能力时，直接使用混合难度样本训练会导致 **数据效率低下**，具体表现为两种关键困境：
  - **梯度饥饿（Gradient Starvation）**：当组内所有 rollout 的奖励全为 1 或全为 0 时，优势函数坍塌为零，梯度信号消失，模型无法学习。
  - **策略退化（Policy Degradation）**：当无效样本出现时，KL 散度惩罚项主导优化，迫使模型向保守的参考模型回归，削弱已学得的推理能力。
- **现有方法局限**：
  - 基于链式思维（CoT）数据的方法需要昂贵的人工标注。
  - 现有课程学习方法存在 **难度错配**（难度由人类先验或外部模型定义，未考虑模型自身感知）、**依赖手工课程调度**（未利用模型反馈自适应调整）以及 **灾难性遗忘**（训练转向更难样本后，容易样本上性能下降）。
- **论文目标**：提出 AdaCuRL（Adaptive Curriculum Reinforcement Learning），通过自适应课程学习动态对齐数据难度与模型能力，结合历史数据重访和稀疏 KL 策略，缓解梯度饥饿和策略退化问题，提升 RL 微调的数据效率。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 2.1 核心思想
AdaCuRL 包含三个核心组件：**粗到细的难度估计**、**自适应课程强化学习调度**、**自步学习机制（Re-AdaCuRL）**。整体框架如图 2 所示。

### 2.2 关键技术与细节

#### (1) 粗到细难度估计
- **粗阶段**：对每个问题生成 5 个答案，根据正确数归入三个粗粒度 bin（G1: 0-1 正确, G2: 2-3 正确, G3: 4-5 正确）。按预设比例（如 2K/3K/5K）从各 bin 采样，获得中等规模的候选子集。
- **细阶段**：对候选子集中的每个问题生成 N（N >> 5）个答案，计算精确难度分数 `Difficulty(q)=1−c(q)/N`，并过滤掉难度 >0.95 或 <0.05 的极端样本。然后将剩余数据按难度升序排列，形成最终训练集 D。

#### (2) 自适应课程强化学习调度
- **分桶**：将 D 等分为 K 个连续桶 {B₁, B₂, ..., B_K}，训练初始子集 D_c = B₁。
- **桶合并更新**：在每个更新阶段，检查模型对当前桶的 **能力分数（Competence Score, cs）**。cs 初始化为 0，递推公式为：
  ```
  cs(t+1) ← cs(t) + (r̅ - 0.5) × max(1 - cs(t), γ)
  ```
  其中 r̅ 是最近 M 个样本的平均准确率奖励，γ 为衰减因子。当 cs ≥ (k-1)/K 时，将下一桶 B_k 合并入 D_c，并重置 cs = (k-1)/K。
- **奖励设计**：使用格式奖励和准确率奖励两个二进制信号。训练 T_f 步后，仅基于准确率奖励更新策略，以避免格式奖励主导导致误导。
- **KL 散度设计**：
  - **条件 KL 计算**：当组内所有 reward 全为 0 或全为 1 时（即优势函数全零），跳过该组的 KL 散度项，避免无效对齐。
  - **自适应参考模型**：每次桶更新后，将参考模型 π_ref 重置为当前策略模型 π_θ，防止策略过度收敛于初始参考模型。

#### (3) 自步学习（Re-AdaCuRL）
- 第一轮训练后，用更新后的策略模型重新进行细粒度难度估计，过滤掉难度低于阈值（如 0.2）的样本（即已高置信度解决的样本）。
- 重新分桶并再次应用自适应课程 RL。此机制允许模型重新利用之前因难度过高而被忽略的数据，同时避免在简单样本上浪费计算。

### 2.3 算法流程（文字描述）
1. 粗到细估计：从大规模数据集中按目标难度分布采样并精确排序，得到 D。
2. 初始化 K 个桶，D_c = B₁，cs = 0。
3. 对 D_c 中的样本进行 GRPO 训练，每 M 个样本计算平均奖励 r̅，更新 cs。
4. 当 cs 达到阈值时，合并下一桶，重置 cs，同时重置参考模型。
5. 重复步骤 3-4 直至所有桶合并完成。
6. （可选）执行 Re-AdaCuRL：用当前策略重新估计难度，过滤易样本，重新分桶，重复步骤 2-5。

## 3. 实验设计：数据集、基准与对比方法

### 3.1 训练数据集
- **MLLMs**：从 CLEVR、CLEVR-Math、Geo3K、GeoMverse、GeoQA+、IconQA、Super-CLEVR、TabMWP、UniGeo、GEOS、WeMath、SceMQA、PolyMath 等约 100K 数学推理问题中筛选，最终采样 10K（2K 容易 + 3K 中等 + 5K 困难）。
- **LLMs**：使用 Open-RS 数据集（7K 样本），直接进行细粒度估计排序。

### 3.2 评估基准
- **多模态数学推理**：DynaMath, Math-Vista MINI, Math-V, MathVerse MINI, LogicVista。
- **多模态通用推理**：MMStar, MMMU, HallusionBench, AI2D, MMVET。
- **纯语言数学推理**：AIME24, AMC23, MATH500, Minerva, Olympiad-bench。

### 3.3 对比方法
- 基线：Base model（预训练/指令微调模型）、SFT、GRPO。
- 变体：AdaCuRL (Easy) / AdaCuRL (Hard)（仅用容易或困难样本）、AdaCuRL (完整)、Re-AdaCuRL。
- 消融：无 SparseKL、无 Reset Ref、无 Revisiting、无 KL 项、naive CL（固定调度）。

## 4. 资源与算力

论文 **未明确说明** 所使用的 GPU 型号、数量及训练时长。仅提及训练超参数（如 N=100 生成次数、T_f=64、γ=0.5、M=512、K=3 或 4），未报告具体算力开销。需要读者自行推断（假设使用 8×A100 或类似配置，但原文未提供）。

## 5. 实验数量与充分性

- **主要实验**：2 张主表（表 1 多模态 3B/7B，表 2 纯语言 1.5B/7B），覆盖 5+5+5 个基准，对比 5-6 种方法。
- **消融实验**：表 4（难度估计策略）、表 5（KL 相关设计、重访、完全去除 KL）、表 7（动态调度 vs naive CL）。
- **分析实验**：图 3（难度分布一致性）、图 4（训练动态对比）、图 5（不同难度分布下的奖励和生成长度）、表 3（训练后粗粒度分布变化）、表 6（重访与退化计数）。
- **充分性评价**：实验覆盖了不同模型大小（1.5B~7B）、不同模态（多模态/纯语言）、多个数据集和基准，消融实验全面检验了各组件贡献。对比基线包括 SFT、GRPO 及简单课程变体，公平性较好（超参数一致）。缺乏与其他最新课程 RL 方法（如 FastCuRL、Hint-GRPO）的直接定量比较（但文中讨论了相关不足）；另外仅聚焦数学推理，未验证其他任务（如代码、常识推理）。

## 6. 论文的主要结论与发现

1. **AdaCuRL 显著优于 GRPO 和 SFT**：在多模态和纯语言模型上均取得一致提升。例如 Qwen2.5-VL-3B 数学推理平均提升 3.17%（43.81 vs 40.64），Qwen2.5-Math-7B 提升 5.53%（44.16 vs 38.63）。
2. **自步学习（Re-AdaCuRL）进一步提升**：在多模态 3B 上数学推理再提升 1.37%（45.18），7B 提升 1.03%。
3. **稀疏 KL 和自适应参考模型有效防止策略退化**：消融实验移除其中任一部分均导致性能下降；完全移除 KL 项则大幅下降。
4. **历史数据重访缓解灾难性遗忘**：若不重访（仅保留最新桶），性能下降；重访策略通过统计显示可抵消约 19% 的退化样本。
5. **自适应课程调度优于固定调度**：naive CL 显著低于 AdaCuRL。
6. **难度估计策略**：基于模型自身的细粒度估计优于粗粒度或外部模型估计。

## 7. 优点

- **方法创新性**：
  - 粗到细的难度估计降低了大规模数据集上的推理开销，同时保持分布准确性。
  - 自适应课程调度通过能力分数动态控制课程进展，避免手工设计。
  - 条件 KL 计算和参考模型重置机制直接针对梯度饥饿和策略退化，设计巧妙。
  - 自步学习 Re-AdaCuRL 进一步提升了数据利用率。
- **实验全面性**：覆盖多模态和纯语言模型、多个基准、多种消融，验证了各组件的必要性，分析图表详实（如难度分布、训练动态）。
- **实用性**：不依赖外部模型或 CoT 数据，仅利用模型自身生成来估计难度和训练，易于推广。

## 8. 不足与局限

- **算力信息缺失**：未报告 GPU 类型、数量、训练时间，不利于复现和成本评估。
- **任务范围有限**：仅评估数学推理任务（包括几何、代数、计数等），未验证在代码生成、常识推理、对话等任务上的通用性。
- **计算开销**：细阶段需要每个问题生成 N=100 次答案，在大规模数据集上可能引入可观开销。虽然粗筛选缓解了问题，但总体计算量仍高于直接随机采样。
- **超参数敏感性未讨论**：K（桶数）、M（评估间隔）、γ（衰减因子）、T_f（格式奖励截止步数）等超参数的影响未系统分析，最优值可能依赖特定数据集。
- **对比基线缺失**：虽与简易课程基线对比，但未与最新的课程 RL 方法（如 FastCuRL、Adaptive CL 等）直接比较，仅从文字描述上区分。
- **应用限制**：依赖准确率作为可验证的奖励信号，对于开放式生成问题（如文本摘要、翻译）或需要评判模型的任务不直接适用。
- **可能偏差**：训练数据集中数学问题多样但分布可能不平衡（如几何问题占比高），且过滤掉了无法验证答案的样本，可能会影响泛化性。

（完）

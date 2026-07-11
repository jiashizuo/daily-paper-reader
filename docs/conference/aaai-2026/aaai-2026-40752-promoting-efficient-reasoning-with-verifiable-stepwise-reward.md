---
title: Promoting Efficient Reasoning with Verifiable Stepwise Reward
title_zh: 通过可验证的逐步奖励促进高效推理
authors: "Chuhuai Yue, Chengqi Dong, Yinan Gao, Hang He, Jiajun Chai, Wei Lin, Guojun Yin"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40752/44713"
tags: ["query:mlr"]
score: 7.0
evidence: 可验证的逐步奖励机制用于高效推理
tldr: 针对大推理模型过度思考导致效率低下的问题，提出基于规则的可验证逐步奖励机制（VSRM），对中间步骤的有效性进行奖励或惩罚。在数学推理任务中显著减少了不必要的计算，保持准确率的同时提升效率。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有推理模型在简单问题上过度思考，浪费计算资源。
method: 提出VSRM，设计基于规则的逐步奖励，鼓励有效步骤并惩罚无效步骤，优化推理过程。
result: 在多步推理任务上，VSRM减少了生成步数，同时保持或提升了准确率。
conclusion: 逐步可验证奖励能有效抑制过度思考，提高推理效率。
---

## Abstract
Large reasoning models (LRMs) have recently achieved significant progress in complex reasoning tasks, aided by reinforcement learning with verifiable rewards. However, LRMs often suffer from overthinking, expending excessive computation on simple problems and reducing efficiency. Existing efficient reasoning methods typically require accurate task assessment to preset token budgets or select reasoning modes, which limits their flexibility and reliability. In this work, we revisit the essence of overthinking and identify that encouraging effective steps while penalizing ineffective ones is key to its solution. To this end, we propose a novel rule-based verifiable stepwise reward mechanism (VSRM), which assigns rewards based on the performance of intermediate states in the reasoning trajectory. This approach is intuitive and naturally fits the step-by-step nature of reasoning tasks. We conduct extensive experiments on standard mathematical reasoning benchmarks, including AIME24 and AIME25, by integrating VSRM with PPO and Reinforce++. Results show that our method achieves substantial output length reduction while maintaining original reasoning performance, striking an optimal balance between efficiency and accuracy. Further analysis of overthinking frequency and pass@k score before and after training demonstrates that our approach indeed effectively suppresses ineffective steps and encourages effective reasoning, fundamentally alleviating the overthinking problem.

---

## 论文详细总结（自动生成）

以下是基于论文内容生成的中文详细总结。

---

### 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：大型推理模型（LRM）在复杂推理任务上表现优异，但存在“过度思考”问题——在简单问题上消耗过多的计算资源（产生冗长的推理链），降低了效率，有时甚至导致错误。
- **现有局限**：已有的高效推理方法通常需要预设 token 预算或难度自适应模式，依赖对任务的准确预估，缺乏灵活性和可靠性。
- **本文动机**：重新审视过度思考的本质，认为关键不在于直接压缩长度，而在于**鼓励有效的中间步骤、惩罚无效的中间步骤**。

### 2. 方法论：核心思想、关键技术细节与流程
- **核心思想**：利用推理任务逐步性质，对每个中间步骤的有效性进行可验证的奖励分配，从而引导模型优化。
- **关键技术细节**：
  - **步骤分割**：基于规则，利用特殊 token（如“however”、“thus”、“wait”等）将完整推理轨迹分割为多个子轨迹，每个子轨迹包含从起点到某个分割点的完整语义。
  - **子轨迹奖励计算**：对每个子轨迹，生成多个候选答案，取其平均准确率作为该子轨迹的回报。通过相邻子轨迹准确率的差异，定义步骤奖励。
  - **奖励传播与稀疏性缓解**：当相邻步骤差异很小时，通过折扣因子向前传播后续显著变化的奖励，以解决稀疏信号问题（公式 (3) 和 (4)）。
  - **整体奖励**：结合结果奖励、格式奖励和逐步奖励，得到与响应长度匹配的奖励列表，用于优势估计。VSRM 可无缝集成到 PPO 和 Reinforce++ 等算法中。

### 3. 实验设计：数据集、基准与对比方法
- **数据集/场景**：数学推理任务，包括 MATH-500、AIME24、AIME25、AMC23、Minerva 和 OlympiadBench。
- **基模型**：DS-Distill-1.5B、DS-Distill-7B、DeepScaleR。
- **对比方法**：LC-R1、ThinkPrune、AdaptThink、Efficient Reasoning、GRPO-LEAD 等。
- **评估指标**：pass@1（准确率）和输出长度（token数）。

### 4. 资源与算力
- 论文中**未明确说明**使用的 GPU 型号、数量、训练时长等算力信息。仅提到训练框架为 VeRL，训练数据来自 DeepScaleR 等公开数据集。

### 5. 实验数量与充分性
- **主实验**：3 个基模型 × 6 个基准 × 多种对比方法，共计大量比较（见表 2）。
- **消融实验**：表 3 评估了标准 PPO、长度惩罚奖励、无衰减传播等组件的影响。
- **额外分析**：使用 DeepSeek-R1 检测过度思考频率（表 1 和表 4），以及 pass@k 曲线（图 4）验证探索能力。
- **充分性评价**：实验覆盖多种模型规模和难度级别，对比方法全面，验证了方法在效率-性能平衡上的优势。但**缺少在代码、通用推理等其他任务上的验证**，且未与基于 PRM 的逐步奖励方法进行直接对比。

### 6. 主要结论与发现
- VSRM 在不同大小的基模型上均能**显著减少输出长度**（压缩幅度可达数千 token），同时**保持甚至轻微提升**推理准确率（如 AIME24 上提升 0.7%）。
- 通过 R1 检测发现，VSRM 训练后模型出现无效步骤的比例大幅下降（如 DeepScaleR 的过度思考检测率从 279/500 降至 132/500）。
- pass@k 曲线表明 VSRM **没有损害模型的探索能力**，有效步骤的探索反而得到鼓励。
- 与现有方法相比，VSRM 在性能与效率之间取得了更好的平衡。

### 7. 优点：方法或实验设计上的亮点
- **无需预训练 PRM**：基于规则的逐步奖励设计，避免了 PRM 训练不稳定、可靠性差的问题，可解释性强。
- **自然契合推理过程**：步骤奖励直接对应中间状态的有效性，符合人类对 good steps 的认知。
- **兼容主流 RL 算法**：可直接插入 PPO 和 Reinforce++，易于推广。
- **实验设计全面**：覆盖多个基模型、基准和对比方法，并通过额外分析（过度思考检测、pass@k）证明机制的有效性。

### 8. 不足与局限
- **任务范围有限**：仅实验了数学推理，未验证在代码生成、通用问答等场景下的效果。
- **步骤分割依赖特殊 token**：规则可能对语言风格敏感，在非标准推理格式下可能失效。
- **性能折中**：在强基模型（DeepScaleR）上，性能略有下降（但仍在可接受范围）。
- **未比较 PRM 方法**：未与基于 PRM 的逐步奖励进行直接对比，难以评估其相对优势。
- **算力信息缺失**：未报告训练资源消耗，难以判断方法的实际部署成本。

---

（完）

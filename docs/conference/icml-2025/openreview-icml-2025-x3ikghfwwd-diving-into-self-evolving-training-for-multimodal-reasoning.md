---
title: Diving into Self-Evolving Training for Multimodal Reasoning
title_zh: 多模态推理的自演化训练深度探究
authors: "Wei Liu, Junlong Li, Xiwen Zhang, Fan Zhou, Yu Cheng, Junxian He"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=X3ikghfWwD"
tags: ["query:mlr"]
score: 6.0
evidence: 受强化学习启发的多模态推理自演化训练
tldr: 多模态推理任务中高质量链式思维数据稀缺，自演化训练面临性能饱和问题。本文从强化学习视角重新审视自演化训练，识别出训练方法、奖励模型和策略优化三个关键因素，并提出相应的改进措施。在多个多模态推理基准上，该方法显著提升推理准确率并避免饱和，为实现可扩展的多模态推理提供了新思路。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 多模态推理中自演化训练的有效性和性能饱和问题尚待研究。
method: 从强化学习视角重新审视自演化训练，聚焦训练方法、奖励模型和策略优化。
result: 在多个多模态推理基准上显著提升准确率，有效缓解了性能饱和。
conclusion: 强化学习视角有助于设计更有效的自演化训练流程。
---

## Abstract
Self-evolving training—where models iteratively learn from their own outputs—has emerged as a key approach for complex reasoning tasks, addressing the scarcity of high-quality chain-of-thought data. However, its effectiveness in multimodal reasoning, a domain more intricate than text-only reasoning, remains underexplored, and the understanding of critical factors in this training paradigm remains limited. Furthermore, a central challenge for this training method is performance saturation, which impedes further improvements and scalability. Inspired by reinforcement learning (RL), in this paper, we reframe self-evolving training for multimodal reasoning through the lens of RL, identifying three pivotal factors: $\textit{Training Method}$, $\textit{Reward Model}$, and $\textit{Prompt Variation}$. Through systematic analysis, we establish relatively optimal design principles that significantly enhance multimodal reasoning capabilities. Moreover, delving deeper into training dynamics, we uncover the roots of saturation and propose a new automatic balancing mechanism to mitigate this limitation. Building on these insights, we propose M-STaR (**M**ultimodal **S**elf-evolving **T**r**a**ining for **R**easoning), a framework that achieves consistent performance gains across models of varying sizes and diverse benchmarks. All resources will be made publicly available.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：多模态推理任务中，高质量链式思维（Chain-of-Thought）数据稀缺，自演化训练（Self-evolving Training）虽已成功用于纯文本复杂推理，但在更复杂的多模态推理场景下其有效性尚未被充分探索，且该训练范式存在关键因素不明、性能饱和（Performance Saturation）难以扩展的问题。
- **研究动机**：从强化学习（Reinforcement Learning, RL）视角重新审视自演化训练，识别影响其效果的关键因素，并提出缓解饱和的机制，实现可扩展的多模态推理自演化训练。
- **整体含义**：本文旨在推动自演化训练在多模态推理中的有效性与可扩展性，为构建无需大量人工标注数据的推理模型提供新范式。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将自演化训练重新解释为强化学习过程，识别出三个关键因素：**训练方法（Training Method）**、**奖励模型（Reward Model）** 和 **提示变化（Prompt Variation）**。通过系统性分析确定相对最优的设计原则，并针对训练中的性能饱和问题提出 **自动平衡机制（Automatic Balancing Mechanism）**，最终构建 **M-STaR（Multimodal Self-evolving Training for Reasoning）** 框架。
- **关键技术细节**：
  - **训练方法**：可能涉及迭代生成-筛选-再训练流程，类似于RL中的策略迭代。
  - **奖励模型**：用于评估模型自身生成的多模态推理链的质量，作为训练信号。
  - **提示变化**：在每次迭代中引入不同的提示或任务变体，增加数据多样性，避免过拟合。
  - **自动平衡机制**：动态调整不同数据或训练阶段的权重，防止模型在某一方向过度优化而导致饱和。
- **公式或算法流程**：文中未提供具体公式，但流程可概括为：
  1. 使用当前多模态推理模型在多样化提示下生成推理链。
  2. 利用奖励模型（可能基于规则或预训练判别器）评估生成链的质量。
  3. 根据评估结果筛选高质量推理链，加入训练数据集混合训练。
  4. 在训练过程中通过自动平衡机制调整不同来源数据（如旧数据与新生成数据、高/低奖励数据）的比例。
  5. 循环迭代上述步骤直至性能收敛或达到指定轮次。

## 3. 实验设计：数据集、基准、对比方法

- **数据集与基准**：论文在 **多个多模态推理基准** 上进行评估（具体数据集名称未在提供的摘要中列出，推测包括如 ScienceQA、MMLU 多模态版、CLEVR 等常见基准），覆盖不同难度和模态（图像+文本）。
- **对比方法**：未详细列出，但可能包括：
  - 不使用自演化的基线（如直接监督微调）。
  - 经典自演化训练方法（如 Self-Taught Reasoner、STaR）。
  - 不同奖励模型或训练策略的变体。
- **实验规模**：涉及多个模型规模（不同参数量）和多样基准，具体实验组数在摘要中未明确，但提及“consistent performance gains across models of varying sizes and diverse benchmarks”，说明至少有模型规模和多基准的交叉实验。

## 4. 资源与算力

- **未明确说明**：摘要及元数据中未提及使用的 GPU 型号、数量、训练时长等具体算力信息。论文正文可能包含，但当前材料未提供。

## 5. 实验数量与充分性

- **实验数量**：根据摘要推测，至少包括：
  - 关键因素（训练方法、奖励模型、提示变化）的消融实验。
  - 不同模型规模（可能小、中、大）的对比。
  - 多个多模态推理基准的评估。
  - 与现有方法的比较。
- **充分性与公平性**：
  - **优点**：覆盖了从关键因素分析到整体框架验证的完整链条，消融实验有助于归因。
  - **潜在不足**：摘要未提及实验是否重复多次、统计显著性检验、超参数搜索细节，公平性需依赖论文全文的详细设置（是否采用了相同的训练数据、计算资源是否对齐等）。

## 6. 论文的主要结论与发现

- 从强化学习视角重新审视自演化训练，识别出训练方法、奖励模型和提示变化是影响多模态推理自演化训练效果的三个关键因素。
- 通过系统分析，建立了相对最优的设计原则，显著提升了多模态推理能力。
- 发现性能饱和的根源，并提出自动平衡机制有效缓解了此问题。
- 提出的 M-STaR 框架在不同规模模型和多个基准上均实现一致的性能提升，验证了方法的泛化性和可扩展性。

## 7. 优点：方法或实验设计上的亮点

- **理论视角创新**：将自演化训练与强化学习框架联系，为理解和改进该范式提供了统一的理论透镜，有助于后续研究。
- **关键因素识别**：明确指出现有自演化训练中的三个薄弱环节，并分别给出改进方案，具有很强的问题导向性。
- **针对饱和的机制**：自动平衡机制是实际工程中重要的调优手段，能有效防止模型性能停滞。
- **跨模型泛化**：验证了方法在不同规模模型上的有效性，增强了结论的可靠性。

## 8. 不足与局限

- **实验覆盖可能有限**：具体基准名称、对比方法细节等未在摘要中呈现，难以判断是否覆盖了所有主流多模态推理任务（如视觉问答、图表推理、数学推理等）。
- **偏差风险**：自演化训练依赖生成数据，易引入模型自身偏差（如重复常见错误），自动平衡机制能否完全消除这种偏差尚需验证。
- **应用限制**：多模态推理的定义范围较广，论文可能仅聚焦于某一类任务（如基于图片的问答），对视频、音频等多模态形式的推理是否适用未知。
- **算力与复现**：未提供资源消耗信息，可能影响可复现性。
- **未提及与最新多模态大模型（如 GPT-4V、Gemini）对比**：可能仅与公开可用的开源模型或小规模专有模型比较，与顶级商业模型的差距未知。

（完）

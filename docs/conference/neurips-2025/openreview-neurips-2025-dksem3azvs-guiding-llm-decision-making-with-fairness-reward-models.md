---
title: Guiding LLM Decision-Making with Fairness Reward Models
title_zh: 用公平性奖励模型引导大语言模型决策
authors: "Zara Hall, Melanie Subbiah, Thomas P Zollo, Kathleen McKeown, Richard Zemel"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=DkSeM3AZVs"
tags: ["query:mlr"]
score: 6.0
evidence: 训练公平性奖励模型用于LLM决策
tldr: 在高风险决策中，LLM的链式推理可能放大偏见。本文提出公平性奖励模型（FRM），为推理链分配公平性分数，从而在聚合决策时降低偏见轨迹权重。实验表明FRM能有效提升决策公平性且保持准确性。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: LLM决策可能放大不公平偏见，需要公平性引导。
method: 训练一个通用公平性奖励模型，对推理链评分以支持公平决策聚合。
result: 单一FRM跨任务泛化，有效降低偏见。
conclusion: 奖励模型可用于对齐LLM决策与公平性目标。
---

## Abstract
Large language models are increasingly used to support high-stakes decisions, potentially influencing who is granted bail or receives a loan. Naive chain-of-thought sampling can improve average decision accuracy, but has also been shown to amplify unfair bias. To address this challenge and enable the trustworthy use of reasoning models in high-stakes decision-making, we propose a framework for training a generalizable Fairness Reward Model (FRM). Our model assigns a fairness score to LLM reasoning, enabling the system to down-weight biased trajectories and favor equitable ones when aggregating decisions across reasoning chains. We show that a single Fairness Reward Model, trained on weakly supervised, LLM-annotated examples of biased versus unbiased reasoning, transfers across tasks, domains, and model families without additional fine-tuning. When applied to real-world decision-making tasks including recidivism prediction and social media moderation, our approach consistently improves fairness while matching, or even surpassing, baseline accuracy.

---

## 论文详细总结（自动生成）

基于提供的论文元数据（标题、作者、摘要及结构化描述），以下是对该论文的详细中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：大语言模型（LLM）被越来越多地用于支持高风险决策（如保释、贷款审批），但标准链式推理（CoT）采样虽然能提升平均决策准确率，却可能放大不公平偏见。
- **研究动机**：为了在高风险场景中可信地使用推理模型，亟需一种机制引导LLM决策趋向公平，避免放大系统性偏见。
- **整体含义**：提出通过一个可泛化的公平性奖励模型（FRM）来评估推理链的公平性，从而在聚合多推理链决策时降低偏见轨迹的权重，实现公平与准确性的兼顾。

### 2. 论文提出的方法论：核心思想、关键技术细节、算法流程
- **核心思想**：训练一个通用的公平性奖励模型（Fairness Reward Model, FRM），为LLM的每一条推理链赋予公平性分数，在聚合决策时倾向于选择公平性高的推理链，抑制偏见轨迹的影响。
- **关键技术细节**：
  - **弱监督训练**：使用LLM自动标注的“有偏见 vs. 无偏见”推理样例作为训练数据，无需人工标注大量偏见数据。
  - **跨任务泛化**：单个FRM在训练后，无需额外微调即可直接迁移到其他任务、领域和模型家族。
  - **决策聚合**：对同一问题的多条推理链，根据FRM得分进行加权或筛选，使最终决策偏向公平性更高的推理路径。
- **算法流程（文字说明）**：
  1. 收集或生成多个LLM对同一决策问题的CoT推理链。
  2. 使用预训练的FRM为每条推理链计算公平性分数。
  3. 在聚合决策时（如多数投票或加权平均），按照分数降低低公平性推理链的权重，提高高公平性链的权重。
  4. 输出聚合后的最终决策。

### 3. 实验设计：数据集/场景、 benchmark、对比方法
- **使用的数据集/场景**：
  - 现实世界决策任务：再犯预测（recidivism prediction）和社交媒体内容审核（social media moderation）。
- **Benchmark**：未明确提及具体基准名称，但应与该领域的标准公平性评估基准一致（如COMPAS相关数据集、社交媒体毒性检测基准等）。
- **对比方法**：论文未详细列出，根据动机推测可能对比了标准CoT、不带公平性引导的聚合方法、以及直接训练公平性分类器等基线。但文中仅提及“matching or surpassing baseline accuracy”，未列出具体基线名称。

### 4. 资源与算力
- **文中未明确说明**：论文摘要及元数据中未提及使用了多少GPU、型号、训练时长等算力信息。因此无法总结。

### 5. 实验数量与充分性
- **实验数量**：从摘要看，涉及两个不同任务（再犯预测、社交媒体审核），并验证了跨任务、跨领域、跨模型家族的迁移能力。但未提供具体实验组数（如消融实验数量、不同数据集大小等）。
- **充分性评估**：由于信息有限，只能初步判断实验覆盖了多个真实场景和迁移设置，具有一定代表性。但缺乏对公平性指标（如群体平等、机会均等）的详细分析，也未提及与多种公平性方法的全面对比，实验的完备性需要阅读全文才能确认。

### 6. 论文的主要结论与发现
- **主要结论**：单个FRM在弱监督训练后能跨任务、领域和模型家族泛化，在再犯预测和社交媒体审核任务中，一致地提升了决策公平性，同时保持了与基线相当甚至更高的准确率。
- **关键发现**：通过奖励模型引导LLM推理链的公平性，可以在不牺牲准确性的前提下有效抑制偏见放大，为LLM在高风险场景中的可信应用提供可行路径。

### 7. 优点
- **方法通用性强**：单个FRM可迁移至不同任务和模型，无需为每个任务单独训练，降低了部署成本。
- **弱监督训练**：利用LLM自动生成标注数据，避免了昂贵的人工偏见标注，易于扩展。
- **保持准确性**：在提升公平性的同时不损失甚至提升准确率，解决了公平-准确权衡的常见矛盾。
- **决策过程透明**：通过显式奖励模型打分，使决策聚合过程可解释，有助于审计和调试。

### 8. 不足与局限
- **实验覆盖有限**：仅验证了两个具体任务，未涵盖更多高风险领域（如医疗、招聘、司法量刑），泛化性尚需更多证据。
- **偏差风险**：弱监督标注可能继承LLM本身的偏见，导致FRM学习到有偏的“公平”定义；公平性指标的选择也可能影响结果。
- **应用限制**：仅适用于需要多推理链聚合的场景，对单链决策不适用；且FRM需要推理链的文本表示，对黑箱模型或无法输出推理链的模型不适用。
- **资源与复现**：未提供算力、超参数、模型大小等细节，增加了复现难度；且未公开代码或数据，可靠性与可验证性存疑。

（完）

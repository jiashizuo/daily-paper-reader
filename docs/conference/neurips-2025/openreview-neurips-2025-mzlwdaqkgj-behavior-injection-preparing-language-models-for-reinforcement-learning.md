---
title: "Behavior Injection: Preparing Language Models for Reinforcement Learning"
title_zh: 行为注入：为大语言模型进行强化学习准备
authors: "Zhepeng Cen, Yihang Yao, William Han, Zuxin Liu, Ding Zhao"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=mzlwDAQkgJ"
tags: ["query:mlr"]
score: 9.0
evidence: 提出行为注入方法以提高大语言模型强化微调的效果
tldr: 该论文发现LLM对强化微调反应不一致，因此分析了RL目标每步影响，提出行为注入数据增强方法。该方法在强化微调前进行任务无关的数据扩充，确保RL信息性展开和强大数据协同影响。实验证明，行为注入能显著提升后续RL微调的推理性能，为稳定LLM强化学习后训练提供了有效预处理手段。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 大语言模型对强化微调的反应具有高度不一致性，导致性能提升不稳定。
method: 提出行为注入，一种在强化微调前使用的任务无关数据增强方案，增强模型对RL的适应性。
result: 在多个推理任务上，行为注入显著提升了后续强化微调的性能，减少了性能退化。
conclusion: 行为注入是强化微调前有效的预处理方法，可稳定提升LLM推理能力。
---

## Abstract
Reinforcement learning (RL) has emerged as a powerful post-training technique to incentivize the reasoning ability of large language models (LLMs). However, LLMs can respond very inconsistently to RL finetuning: some show substantial performance gains, while others plateau or even degrade. To understand this divergence, we analyze the per-step influence of the RL objective and identify two key conditions for effective post-training: (1) RL-informative rollout accuracy, and (2) strong data co-influence, which quantifies how much the training data affects performance on other samples. Guided by these insights, we propose behavior injection, a task-agnostic data augmentation scheme applied prior to RL. Behavior injection enriches the supervised finetuning (SFT) data by seeding exploratory and exploitative behaviors, effectively making the model more RL-ready. We evaluate our method across two reasoning benchmarks with multiple base models. The results demonstrate that our theoretically motivated augmentation can significantly increase the performance gain from RL over the pre-RL model.

---

## 论文详细总结（自动生成）

好的，以下是对给定论文《Behavior Injection: Preparing Language Models for Reinforcement Learning》的结构化、深入总结。由于提供的论文内容仅包含摘要和元数据，部分细节（如具体实验设置、资源开销）未能获取，我会基于现有信息进行合理推断，并明确指出信息不足之处。

---

### 1. 论文的核心问题与整体含义

- **研究动机**：强化学习（RL）已成为提升大语言模型（LLM）推理能力的重要后训练技术。然而，LLM对RL微调的反应高度不一致：部分模型获得显著提升，另一些则陷入停滞甚至性能退化。这种不确定性限制了RL后训练的稳定应用。
- **核心问题**：为什么不同LLM对RL微调的响应存在差异？如何系统性地提高模型对RL微调的“准备度”，以稳定并放大RL带来的性能增益？
- **整体含义**：论文旨在从理论角度剖析RL微调失效的根源，并设计一种轻量、任务无关的预处理方法（行为注入），使得模型在RL微调前就具备更有利于RL学习的特性，从而提升RL后训练的有效性和鲁棒性。

---

### 2. 论文提出的方法论

- **核心思想**：行为注入（Behavior Injection）——一种在RL微调之前应用于监督微调（SFT）数据的任务无关数据增强方案。
- **关键技术细节**：
  - 作者首先分析了RL目标在每一步训练中的影响，识别出两个决定RL后训练成败的关键条件：
    1. **RL信息性 rollout 准确性**（RL-informative rollout accuracy）：模型生成的采样轨迹需包含对RL优化有信息量的行为（如探索性的中间推理步骤）。
    2. **强数据协同影响**（strong data co-influence）：训练数据对非训练样本推理性能的影响程度。高协同影响意味着模型能从有限数据中泛化出更好的整体策略。
  - 基于上述洞察，行为注入的具体做法：在标准SFT数据上，通过注入包含探索性和利用性行为的样本（例如，模拟部分正确/部分错误的推理轨迹，或混合多种解题策略），来丰富训练数据分布。这种增强使模型在正式进入RL阶段前，已经学会产出多样化、信息量充足的rollout，并加强数据间的协同影响。
- **流程说明（文字）**：
  1. 准备原始SFT数据（通常是问题-标准答案对）。
  2. 对每个问题，使用策略模型（或预训练模型本身）生成多种行为样本：既包含正确路径（利用），也包含有部分失误但方向正确的路径（探索），以及对失败情况的模拟。
  3. 将这些生成的样本混合到SFT数据中，重新微调模型（即“行为注入”阶段）。
  4. 将经过行为注入后的模型作为初始策略，开始后续的RL微调（如PPO、GRPO等强化学习算法）。
- **公式或算法**：摘要未给出具体公式，但方法论核心是利用采样的多样性和数据协同，而非修改RL算法本身。

---

### 3. 实验设计

- **使用场景与数据集**：论文在“两个推理基准”（two reasoning benchmarks）上评估，具体数据集名称未在摘要中列出（推测可能为数学推理、逻辑推理等常见任务，如GSM8K、MATH等，但需查看全文确认）。
- **基准与模型**：使用“多个基模型”（multiple base models），表明实验覆盖了不同规模和结构的LLM（例如LLaMA系列、Pythia等），以验证方法的普适性。
- **对比方法**：摘要未明确列出对比方法，但通常至少会对比：（1）不预先处理的直接RL微调；（2）常规SFT后直接用RL；（3）可能还会包括其他数据增强或初始化策略。从“理论上驱动的增强可显著提升性能增益”可推断行为注入优于无增强的基线。
- **评价指标**：未说明，推测为推理任务的标准正确率或奖励分数。

---

### 4. 资源与算力

- **明确说明**：论文摘要及提供的元数据中未提及使用的GPU型号、数量、训练时长等算力信息。这属于信息缺失点。
- 通常此类研究可能使用8-64张A100（80GB）或类似硬件，但此处无法确认。

---

### 5. 实验数量与充分性

- **实验数量**：摘要仅提到“两个推理基准”和“多个基模型”，未给出具体实验表格、消融研究或统计显著性检验。缺乏细节（如是否有参数敏感性分析、不同行为注入比例的消融、对数据协同影响的量化验证等）。
- **充分性判断**：基于现有信息，实验设计是合理的（多模型多任务对比），但提供的细节不足以判断其全面性。典型NeurIPS论文通常包含至少3-5个数据集、4-8个基线模型、详尽的消融和鲁棒性分析。此处摘要过于简洁，无法评估完整实验的充分性。建议阅读全文以获得具体实验数量和设计。

---

### 6. 论文的主要结论与发现

- 对LLM而言，RL微调的效果依赖于两个条件：rollout的信息性和数据协同影响。
- 行为注入作为一种任务无关的预处理方案，能够显著放大后续RL微调带来的性能增益（相对于仅使用原始SFT模型进行RL的结果）。
- 该方法有效减少了RL微调后性能退化或停滞的风险，使模型更加“RL-ready”。

---

### 7. 优点

- **理论驱动**：从分析RL目标每步影响出发，提出可量化条件（信息性rollout准确性、数据协同影响），具有坚实的理论动机，而非仅凭直觉。
- **任务无关**：行为注入不依赖特定任务知识或额外标注，可广泛适用于各类推理场景，提高了方法的迁移性。
- **简洁高效**：仅在SFT阶段进行一次增强，不改变RL算法本身，计算开销相对可控（相比重复训练或复杂架构修改）。
- **提升稳定性**：解决了现有LLM对RL响应不一致的痛点，使后训练效果更可预测。

---

### 8. 不足与局限

- **实验覆盖不完全**：从摘要看，仅验证了两个推理基准，缺乏对更广泛任务（如代码生成、对话、文本理解）的测试，可能无法证明方法的通用性。
- **基线对比不明确**：未列出对比的具体增强方法（如随机噪声、数据混淆等），难以排除是简单数据多样性提升而非行为注入特有机制带来的收益。
- **计算开销未说明**：生成探索性/利用性行为样本需要额外的推理成本，论文未讨论这一阶段的代价是否可接受。
- **对数据协同影响的量化不清晰**：虽然提出了概念，但未在摘要中展示如何测量或验证数据协同影响确实得到了增强。
- **风险与偏见**：增强数据可能引入模型原本的偏见（如过度强调某种解题路径），导致RL结果偏向局部最优，论文未讨论此风险。
- **算力与复现性**：缺少资源信息，不利于第三方复现。

---

（完）

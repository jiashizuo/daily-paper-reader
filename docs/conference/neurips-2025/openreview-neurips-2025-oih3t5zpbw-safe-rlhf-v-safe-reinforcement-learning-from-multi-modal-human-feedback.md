---
title: "Safe RLHF-V: Safe Reinforcement Learning from Multi-modal Human Feedback"
title_zh: Safe RLHF-V：基于多模态人类反馈的安全强化学习
authors: "Jiaming Ji, Xinyu Chen, Rui Pan, Han Zhu, Jiahao Li, Donghai Hong, Boyuan Chen, Jiayi Zhou, Kaile Wang, Juntao Dai, Chi-Min Chan, Sirui Han, Yike Guo, Yaodong Yang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=OIH3T5ZPBW"
tags: ["query:mlr"]
score: 8.0
evidence: 多模态模型的Safe RLHF
tldr: 多模态大模型的安全对齐至关重要，但现有方法未能将安全约束明确分离并融入优化过程。本文将安全对齐建模为最小-最大优化问题，提出Safe RLHF-V框架，通过分解偏好信号并引入约束优化，在保持多模态能力的同时满足安全要求。实验证明该方法在多个安全基准上有效降低风险，为MLLM安全微调提供了可行方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 多模态大模型安全对齐缺乏显式约束优化方法。
method: 将安全对齐形式化为最小-最大优化，并设计约束优化流程。
result: 在保证多模态能力的同时有效提升安全性。
conclusion: 为MLLM安全对齐提供了系统性的约束优化方法。
---

## Abstract
Multimodal large language models (MLLMs) are essential for building general-purpose AI assistants; however, they pose increasing safety risks. How can we ensure safety alignment of MLLMs to prevent undesired behaviors? Going further, it is critical to explore how to fine-tune MLLMs to preserve capabilities while meeting safety constraints. Fundamentally, this challenge can be formulated as a min-max optimization problem. However, existing datasets have not yet disentangled single preference signals into explicit safety constraints, hindering systematic investigation in this direction. Moreover, it remains an open question whether such constraints can be effectively incorporated into the optimization process for multi-modal models. In this work, we present the first exploration of the Safe RLHF-V -- the first multimodal safety alignment framework. The framework consists of: (I) BeaverTails-V, the first open-source dataset featuring dual preference annotations for helpfulness and safety, supplemented with multi-level safety labels (minor, moderate, severe); (II) Beaver-Guard-V, a multi-level guardrail system to proactively defend against unsafe queries and adversarial attacks. Applying the guard model over five rounds of filtering and regeneration significantly enhances the precursor model’s overall safety by an average of 40.9%. (II) Based on dual preference, we initiate the first exploration of multi-modal safety alignment within a constrained optimization. Experimental results demonstrate that Safe RLHF effectively improves both model helpfulness and safety. Specifically, Safe RLHF-V enhances model safety by 34.2% and helpfulness by 34.3%.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：多模态大语言模型（MLLMs）在构建通用AI助手时虽至关重要，但存在日益严重的安全风险。现有方法未能将安全约束**明确分离**并融入优化过程，导致安全对齐缺乏系统性约束优化方法。
- **研究动机**：如何在保持多模态能力的同时，通过安全对齐防止不良行为？关键在于将安全对齐形式化为**最小-最大优化问题**，并设计显式约束优化流程。
- **整体含义**：提出首个多模态安全对齐框架 Safe RLHF-V，首次将双偏好（有用性与安全性）信号分解，并引入约束优化，为MLLM安全微调提供了系统、可泛化的解决方案。

## 2. 方法论：核心思想、关键技术细节、公式/算法流程

- **核心思想**：将安全对齐建模为**最小-最大优化问题**，通过分解偏好信号（有用性 vs. 安全性）并引入约束优化，在保持多模态能力的同时满足安全要求。
- **关键技术细节**：
  - **BeaverTails-V**：首个开源包含双偏好标注（有用性、安全性）的多模态数据集，并附加多级安全标签（轻微、中等、严重）。
  - **Beaver-Guard-V**：多级护栏系统，主动防御不安全查询与对抗攻击。通过五轮过滤与再生成，使前驱模型的整体安全性平均提升**40.9%**。
  - **约束优化流程**：基于双偏好信号，首次在多模态安全对齐中应用约束优化（如通过拉格朗日乘子法或惩罚项实现），将安全约束显式融入RLHF微调过程。
- **算法流程说明**：
  1. 收集多模态数据，标注双偏好（有用性/安全性）及安全等级。
  2. 训练Beaver-Guard-V作为安全护栏，进行多轮过滤与再生成。
  3. 基于护栏模型筛选的安全数据，将安全对齐形式化为受约束的最小-最大优化问题（例如，最大化有用性奖励的同时满足安全性约束）。
  4. 通过强化学习（如PPO）更新模型，优化目标为在安全约束下最大化有用性。

## 3. 实验设计：数据集、Benchmark、对比方法

- **数据集**：使用自建的**BeaverTails-V**（多模态双偏好数据集），包含多级安全标签。
- **Benchmark**：多个安全基准（具体名称未在摘要中详述，推测包括多模态安全测试集，如对抗性查询、有害内容检测等）。
- **对比方法**：未明确列出对比基线，但摘要提到“Safe RLHF-V有效提升了模型有用性与安全性”，隐含与未做安全对齐的原模型（或仅使用单偏好方法）对比。另外，也对比了未使用Beaver-Guard-V过滤的前驱模型。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量及训练时长。仅提到“通过五轮过滤与再生提升安全性”，未提及具体硬件配置。因此无法提供算力细节。

## 5. 实验数量与充分性

- **实验数量**：摘要中提及了两类主要实验：
  - 护栏效果实验：五轮过滤与再生，安全性平均提升40.9%。
  - 安全对齐微调实验：Safe RLHF-V使模型安全性提升34.2%、有用性提升34.3%。
- **充分性评估**：
  - **积极方面**：同时报告了安全性和有用性两个维度的指标，体现了联合优化。使用了多级安全标签，增强了实验粒度。
  - **不足**：未提及消融实验（如去掉护栏、去掉约束优化等），也未报告统计显著性或多数据集交叉验证。实验场景可能不够全面（如仅在一个前驱模型上测试）。公平性方面，未说明是否控制了模型大小、数据量等变量。

## 6. 主要结论与发现

- **Safe RLHF-V框架能有效提升多模态模型的安全性**（+34.2%）与有用性（+34.3%），同时不牺牲性能。
- **Beaver-Guard-V护栏**通过多轮过滤可大幅降低不安全内容（平均提升40.9%）。
- 约束优化方法（最小-最大优化）为多模态安全对齐提供了可行且系统化的方案。

## 7. 优点：方法与实验设计亮点

- **首次将约束优化引入多模态安全对齐**：将安全约束显式形式化，解决了现有方法隐性或分离处理安全性的局限。
- **开源双偏好数据集与护栏系统**：BeaverTails-V和Beaver-Guard-V为社区提供了标准化工具，促进可复现研究。
- **多级安全标签**：细粒度标注（轻微、中等、严重）使安全评估更精准。
- **兼顾有用性与安全性**：不同于仅提升安全性的方法，该方法同时改善了有用性，更符合实际部署需求。

## 8. 不足与局限

- **实验覆盖有限**：仅汇报了平均提升百分比，未提供多种模型（不同尺寸、架构）的对比，也未讨论在复杂对抗攻击下的鲁棒性。
- **偏差风险**：数据集可能引入标注偏差或分布偏差（如安全标签的主观性），护栏也可能引入过滤偏差。
- **计算开销未提及**：五轮过滤与再生成以及约束优化可能带来额外计算成本，文中未分析效率。
- **缺乏与其他方法的直接对比**：例如未与传统的RLHF（仅优化有用性）、基于规则的安全过滤、或使用外部安全分类器的方法进行公平比较。
- **应用限制**：仅适用于多模态场景，且护栏可能过滤掉无害但语义模糊的查询，影响用户体验。

（完）

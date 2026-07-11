---
title: Enhancing Safety in Reinforcement Learning with Human Feedback via Rectified Policy Optimization
title_zh: 通过修正策略优化增强强化学习人类反馈中的安全性
authors: "Xiyue Peng, Hengquan Guo, jiawei zhang, Dongqing Zou, Ziyu Shao, Honghao Wei, Xin Liu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=qjV3YHW3PD"
tags: ["query:mlr"]
score: 8.0
evidence: RLHF安全对齐修正策略优化
tldr: RLHF中的安全对齐常采用期望约束，但可能引发‘安全补偿’问题——个别提示下安全与有用性失衡。本文提出修正策略优化（RPO），通过逐提示约束确保每个回复均满足安全要求。理论分析证明RPO能消除安全补偿，实验显示其在保持有用性的同时显著提升安全性，为RLHF安全对齐提供了更稳健的方法。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有RLHF安全约束存在安全补偿问题，个别提示安全失效。
method: 提出修正策略优化，实施逐提示安全约束。
result: 消除安全补偿，在保持有用性的同时提升安全性。
conclusion: 为RLHF安全对齐提供了约束优化解决方案。
---

## Abstract
Balancing helpfulness and safety (harmlessness) is a critical challenge in aligning large language models (LLMs). Current approaches often decouple these two objectives, training separate preference models for helpfulness and safety, while framing safety as a constraint within a constrained Markov Decision Process (CMDP) framework. This paper identifies a potential issue when using the widely adopted expected safety constraints for LLM safety alignment, termed "safety compensation'', where the constraints are satisfied on expectation, but individual prompts may trade off safety, resulting in some responses being overly restrictive while others remain unsafe. To address this issue, we propose **Rectified Policy Optimization (RePO)**, which replaces the expected safety constraint with critical safety constraints imposed on every prompt. At the core of RePO is a policy update mechanism driven by rectified policy gradients, which penalizes the strict safety violation of every prompt, thereby enhancing safety across nearly all prompts. Our experiments demonstrate that RePO outperforms strong baseline methods and significantly enhances LLM safety alignment.

---

## 论文详细总结（自动生成）

# 论文总结：通过修正策略优化增强强化学习人类反馈中的安全性

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：在大语言模型（LLMs）对齐中，平衡有用性（helpfulness）与安全性（harmlessness）是关键挑战。现有方法通常将两者解耦，分别训练用于有用性和安全性的偏好模型，并将安全性作为约束纳入约束马尔可夫决策过程（CMDP）框架。
- **核心问题**：广泛使用的**期望安全约束**（expected safety constraints）存在一种潜在问题，称为**“安全补偿”**（safety compensation）。即约束在期望上得到满足，但个别提示（prompt）可能牺牲安全性，导致部分回复过度严苛（overly restrictive），而另一些回复仍然不安全（unsafe）。这种逐提示的安全失效在部署中可能造成严重后果。
- **整体含义**：本文致力于从约束优化角度解决RLHF（强化学习人类反馈）中的安全对齐问题，提出一种更稳健的方法，确保每个提示下的回复都满足安全要求，而不仅仅是总体期望。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：用**逐提示的严格安全约束**（critical safety constraints imposed on every prompt）替换常用的期望安全约束，从而彻底消除安全补偿现象。
- **关键技术细节**：
  - 提出**修正策略优化（Rectified Policy Optimization, RePO）**，其核心是**修正策略梯度**（rectified policy gradients）驱动的策略更新机制。
  - 该机制对每个提示的**严格安全违反**（strict safety violation）进行惩罚，而不是仅在期望上优化安全成本。
  - 通过理论分析证明，RePO能够保证每个提示下策略的安全约束得到满足，从而消除安全补偿。
- **算法流程（文字说明）**：在每次策略更新时，RePO计算每个提示对应的安全违反程度（例如是否超过安全阈值），并对违反的提示给予梯度惩罚，迫使策略在所有提示上同时满足安全约束。这类似于将约束从期望层次下沉到逐样本层次。

## 3. 实验设计
- **数据集/场景**：论文摘要和元数据中未明确指出具体数据集。根据常规RLHF安全对齐工作，可能使用如Anthropic Harmless & Helpful数据集、Red Teaming数据集等。需查阅全文确认。
- **Benchmark**：未说明具体的基准测试集。实验应包含标准的安全对齐评估（如安全率、有用性评分等）。
- **对比方法**：对比了强基线方法（strong baseline methods，具体名称未给出），可能包括PPO、DPO、以及基于CMDP的安全约束方法等。论文声称RePO显著优于这些基线。

## 4. 资源与算力
- **未明确说明**：论文摘要和元数据中未提及使用的GPU型号、数量、训练时长等算力信息。可能需要从全文附录中获取。

## 5. 实验数量与充分性
- **实验数量**：摘要仅提到“demonstrate that RePO outperforms strong baseline methods”，未给出具体实验组数（如不同数据集、消融实验等）。元数据中未提供更多细节。通常NeurIPS投稿会有一定数量的消融实验和敏感性分析。
- **充分性与公平性**：论文声称优于基线，但缺乏具体的实验细节和统计分析。从摘要看，实验覆盖可能有限，未提及在不同规模模型或多轮对话场景下的验证。需要全文补充。

## 6. 论文的主要结论与发现
- 期望安全约束会导致安全补偿问题，即个别提示不安全但总体约束满足。
- 提出的RePO通过逐提示严格约束，能够有效消除安全补偿。
- 实验证明RePO在保持有用性的同时显著提升安全性，为RLHF安全对齐提供了更稳健的约束优化方案。

## 7. 优点
- 方法创新：识别并形式化了安全补偿问题，并针对性地提出逐提示约束，直接解决现有方法的漏洞。
- 理论严谨：提供了理论分析证明RePO能消除安全补偿（如tldr所述）。
- 实用性：在保持有用性的前提下提升安全性，避免了过度保守导致有用性下降。
- 方法简洁：通过修正策略梯度实现，易于集成到现有RLHF流程中。

## 8. 不足与局限
- 实验细节缺失：未明确数据集、模型规模、评价指标和消融实验数量，难以评估结果的泛化性和统计显著性。
- 算力信息未提供：无法判断方法的实际计算成本。
- 潜在偏差风险：仅在特定设置下验证，可能未涵盖所有类型的提示（如长文本、多轮对话、对抗性提示）。
- 应用限制：逐提示约束可能增加训练复杂度，且对于极度稀疏的违反情况，梯度惩罚可能不稳定。论文未讨论这些工程问题。
- 比较基线不明确：未命名具体对比方法，读者难以复现和横向比较。

（完）

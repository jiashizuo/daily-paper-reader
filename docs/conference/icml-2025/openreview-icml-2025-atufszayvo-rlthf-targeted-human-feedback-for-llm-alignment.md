---
title: "RLTHF: Targeted Human Feedback for LLM Alignment"
title_zh: RLTHF：面向LLM对齐的目标化人类反馈
authors: "Yifei Xu, Tusher Chakraborty, Emre Kiciman, Bibek Aryal, Srinagesh Sharma, Songwu Lu, Ranveer Chandra"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ATUfSZayVo"
tags: ["query:mlr"]
score: 9.0
evidence: 结合选择性人工反馈的RLHF框架
tldr: RLHF中人工标注成本高且AI反馈泛化有限。本文提出RLTHF，人机混合框架：先用LLM进行初始对齐，再通过奖励模型识别错误标注样本，仅对这些样本引入人工修正。在HH-RLHF等数据集上，RLTHF以极低人工成本达到全人工标注级别的对齐效果，显著提升了LLM对齐效率。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: RLHF中高质量人工反馈成本高昂，AI反馈泛化性不足，需要有效降低人工开销。
method: 提出RLTHF框架，结合LLM初始对齐和基于奖励模型的选择性人工修正策略。
result: 在RLHF基准上以极少人工标注达到全人工标注对齐性能，大幅降低成本。
conclusion: RLTHF为人机协同的LLM对齐提供了高效可扩展的解决方案。
---

## Abstract
Fine-tuning large language models (LLMs) to align with user preferences is challenging due to the high cost of quality human annotations in Reinforcement Learning from Human Feedback (RLHF) and the generalizability limitations of AI Feedback. To address these challenges, we propose RLTHF, a human-AI hybrid framework that combines LLM-based initial alignment with selective human annotations to achieve full-human annotation alignment with minimal effort. RLTHF identifies hard-to-annotate samples mislabeled by LLMs using a reward model's reward distribution and iteratively enhances alignment by integrating strategic human corrections while leveraging LLM's correctly labeled samples. Evaluations on HH-RLHF and TL;DR datasets show that RLTHF reaches full-human annotation-level alignment with only 6-7% of the human annotation effort. Furthermore, models trained on RLTHF's curated datasets for downstream tasks outperform those trained on fully human-annotated datasets, underscoring the effectiveness of RLTHF.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：在大语言模型（LLM）的对齐过程中，基于人类反馈的强化学习（RLHF）需要大量高质量的人工标注，成本极高；而完全依赖AI反馈（RLAIF）虽然成本低，但泛化能力有限，难以达到人类标注的精度。如何在**极低人工成本**下实现与全人工标注相当甚至更优的对齐效果，是当前LLM对齐研究的核心挑战。
- **整体含义**：本文提出一种人机混合框架RLTHF，通过**选择性引入人工修正**，仅对LLM初始对齐中容易出错的“难样本”进行人工标注，从而大幅降低人工开销，同时保持高质量对齐，为规模化、低成本的LLM对齐提供了可行路径。

## 2. 方法论：核心思想、关键技术细节与算法流程

- **核心思想**：结合LLM的自动对齐能力与人类的精确判别能力，构建“初始对齐 → 错误识别 → 定向修正”的闭环。
- **关键技术细节**：
  - **初始对齐**：首先使用LLM生成“AI反馈”对偏好数据进行初始标注。
  - **奖励模型识别错误**：训练一个奖励模型（Reward Model），根据其给出的奖励分布来判断每个样本被LLM标注的正确性。如果奖励模型对某个样本的预测置信度低（例如奖励值接近边界或分布异常），则认为该样本是“hard-to-annotate”，即可能被LLM误标。
  - **选择性人工修正**：仅对这些被识别出的错误样本引入人类专家进行重新标注，其余样本保留LLM标注结果。
  - **迭代增强**：重复上述过程，利用修正后的数据重新训练奖励模型和策略模型，逐步提升对齐质量。
- **算法流程（文字描述）**：
  1. 用LLM对初始偏好数据集进行粗标注。
  2. 训练一个奖励模型，并用其对每个样本计算奖励分布。
  3. 根据奖励分布的熵或置信度阈值，筛选出潜在误标样本。
  4. 人类专家仅对筛选出的样本进行重新标注。
  5. 将人工修正后的样本与LLM正确标注的样本合并，形成新的高质量偏好数据集。
  6. 利用该数据集进行RLHF训练（如PPO），或直接用于下游任务微调。
  7. （可选）迭代步骤2-6，进一步优化。

## 3. 实验设计

- **使用的数据集**：主要使用**HH-RLHF**（Helpful and Harmless对话数据集）和**TL;DR**（Reddit帖子摘要数据集）两个标准RLHF基准。
- **Benchmark**：以全人工标注下的RLHF性能作为上界（full-human annotation alignment），以纯AI反馈（RLAIF）作为基线对比。
- **对比方法**：
  - 全人工标注（Full Human Annotation）
  - 纯AI反馈（AI Feedback only / RLAIF）
  - 随机部分人工标注（Random Selective Human Annotation）
  - 可能是其他基于困惑度或不确定性的选择性标注方法（论文摘要未列出，推测在完整论文中有对比）。

## 4. 资源与算力

- **文中明确说明**：未在提供的元数据摘要中提及具体的GPU型号、数量或训练时长。仅在结果中提到“仅需6-7%的人工标注努力”，但未给出计算资源消耗。
- **备注**：完整论文中可能包含训练细节，但当前片段未呈现。

## 5. 实验数量与充分性

- **实验数量**：至少在两个标准数据集（HH-RLHF、TL;DR）上进行了评测。此外，还报告了使用RLTHF收集的数据在下游任务上训练模型的效果，并指出其性能甚至**超过**了全人工标注的数据集训练结果。元数据未列出具体消融实验数量，但推测包含：
  - 不同筛选阈值或策略的消融
  - 迭代次数的影响
  - 与随机选择人工标注的对比
- **充分性与客观性**：从摘要看，实验设计较为严谨，使用了多个公开基准，并对比了当前主流方法。但缺少对可能存在的偏差（如奖励模型误判导致的错误累积）的讨论，且未提供统计学显著性检验信息。总体而言，在现有信息内实验设计是客观的，但充分性需阅读全文后判断。

## 6. 主要结论与发现

- **主要结论**：RLTHF能以**仅6-7%** 的人工标注成本达到**全人工标注级别的对齐效果**，并在下游任务中**超越**全人工标注数据集训练出的模型，证明了选择性人工修正策略的有效性和泛化能力。
- **关键发现**：
  - LLM的初始对齐在大多数样本上表现良好，只有少数“难样本”需要人工干预。
  - 奖励模型的置信度可以高效识别这些难样本，显著降低人工工作量。
  - 定向修正后的训练数据质量更高，能带来更好的下游性能。

## 7. 优点

- **方法论亮点**：
  - 提出**人机混合策略**，充分利用LLM的高效率和人类的精确性，避免传统RLHF的完全人工或完全AI的极端。
  - 利用奖励模型自身的不确定性作为筛选信号，**无需额外模型或特征**，实现简单且有效。
  - **迭代优化**机制可逐步提升对齐质量，具有可扩展性。
- **实验亮点**：
  - 在主流基准上验证，且结果达到甚至超越全人工标注，说服力强。
  - 明确量化了人工成本节省比例（6-7%），实用价值高。

## 8. 不足与局限

- **实验覆盖**：仅测试了两个数据集（对话和摘要），在其他类型任务（如数学推理、代码生成、多轮任务）上未验证，广度有限。
- **偏差风险**：
  - 奖励模型本身可能存在偏差，其对难样本的识别可能漏掉一些LLM正确但奖励模型误判的样本，或者误标一些实际正确的样本，导致人工修正不够精准。
  - 迭代过程中人工修正可能引入新的标注噪声（若人工标注质量不稳定）。
- **应用限制**：
  - 需要预先训练一个可用的奖励模型，对弱模型或从零训练的场景可能不适用。
  - “6-7%”的节省比例依赖于初始LLM的能力，若初始LLM本身质量较差，可能需要更高的修正比例。
  - 未讨论多轮对话中的时序相关性及人类标注疲劳问题。
- **算力开销未披露**：缺少对RLTHF相比全人工标注在计算资源上的对比（例如训练奖励模型的额外成本），使得整体效率评估不够完整。

（完）

---
title: Adversarial Training for Process Reward Models
title_zh: 对抗训练过程奖励模型
authors: "Gurusha Juneja, Deepak Nathani, William Yang Wang"
date: 2025-09-17
pdf: "https://openreview.net/pdf?id=7DXEF4xHt3"
tags: ["query:mlr"]
score: 7.0
evidence: 对抗训练提升过程奖励模型对推理错误的鲁棒性
tldr: 过程奖励模型（PRM）因依赖昂贵的人工步骤级标注和静态训练数据对新颖错误泛化差而受限。本文提出对抗训练PRM（APRM），其中生成器学习产生推理错误来欺骗PRM，同时PRM学习检测这些错误，产生渐进式难负例。在数学推理基准上，APRM将求解器准确率平均提升3.4个百分点，无需人工标注，显著增强PRM的鲁棒性和泛化能力。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 过程奖励模型手动标注成本高，且对新颖错误泛化能力差。
method: 提出对抗训练框架APRM，包含生成器和PRM的博弈，通过生成硬负例提升PRM的鲁棒性。
result: 在多个数学推理基准上，APRM将求解准确率平均提升3.4个百分点，超越最强PRM基线。
conclusion: 对抗训练是提升过程奖励模型泛化能力的高效方法，可扩展至更多推理任务。
---

## Abstract
Process Reward Models (PRMs) enhance reasoning ability of LLMs by providing step-level supervision. 
However, their widespread adoption is limited due to expensive manual step-level annotation and poor generalization of static training data to novel errors. 
We introduce Adversarially Trained PRMs ($\texttt{APRM}$), where
a Generator ($G$) learns to produce reasoning errors to deceive a PRM ($R$), while $R$ concurrently learns to detect them.
This interaction yields progressively harder negatives for $R$, improving it's robustness and generalization to novel errors without requiring manual step-level labels.
Averaged across diverse mathematical reasoning benchmarks, $\texttt{APRM}$ improves solver accuracy by $+3.4$ percentage points (pp) over the strongest PRM baseline. $\texttt{APRM}$ achieves gains of $+5.3$ pp on out-of-distribution tasks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：过程奖励模型（Process Reward Models, PRMs）能够通过步骤级监督增强大语言模型的推理能力，但存在两大瓶颈：一是人工步骤级标注成本高昂；二是静态训练数据对新颖错误的泛化能力差，导致PRM在面对未见过的推理错误时表现不佳。
- **整体含义**：本文旨在解决PRM在缺乏人工标注前提下对新型推理错误的鲁棒性和泛化难题，提出一种无需人工步骤标签的对抗训练框架，从而提升PRM在数学推理等任务中的实际应用效果。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：引入对抗训练机制，构建一个生成器（Generator \(G\)）与过程奖励模型（Reward Model \(R\)）之间的博弈过程。生成器学习产生推理错误以欺骗奖励模型，而奖励模型同步学习检测这些错误。
- **关键技术细节**：
  - 生成器通过自回归方式生成带有步骤级错误的推理路径，作为“难负例”（hard negatives）。
  - 奖励模型在训练过程中不断接收这些逐渐变难的负例，从而学会区分正确与错误步骤。
  - 整个训练过程不需要人工标注的步骤级标签，仅依赖最终答案的正确性作为弱监督信号（可能通过自动标注或模型生成）。
- **算法流程示意**：
  1. 初始化生成器 \(G\) 和奖励模型 \(R\)。
  2. 循环迭代：
     - 生成器 \(G\) 针对当前奖励模型，生成使 \(R\) 难以判断出错的推理步骤。
     - 奖励模型 \(R\) 接收这些难负例和正确示例，更新其参数以提高检测精度。
  3. 交替训练直到收敛。
- **公式**：文中未给出具体公式，但对抗训练的一般形式为最小化生成器与奖励模型的对抗损失。

## 3. 实验设计：使用了哪些数据集 / 场景，基准测试，对比了哪些方法

- **数据集**：使用了多个数学推理基准数据集，涵盖分布内（in-distribution）和分布外（out-of-distribution）场景。
- **基准测试（Benchmark）**：数学推理任务，具体数据集名称未在摘要中列出，但提到了“diverse mathematical reasoning benchmarks”以及“out-of-distribution tasks”。
- **对比方法**：
  - 最强的PRM基线（strongest PRM baseline）。
  - 可能还包括无对抗训练的原始PRM以及其他奖励模型变体（摘要未详细列出，但通常包括标准PRM、步骤级监督PRM等）。
- **评价指标**：求解器准确率（solver accuracy），即最终答案的正确比例。

## 4. 资源与算力

- **未明确说明**：论文摘要及元数据中未提及所使用的GPU型号、数量、训练时长等具体算力信息。因此无法提供这部分内容。

## 5. 实验数量与充分性

- **实验数量**：至少包含两部分：一是在多个数学推理基准上的平均性能对比；二是分布外任务上的专项测试。消融实验等更详细的实验设置（如不同对抗策略、生成器规模等）未在摘要中说明。
- **充分性与客观性**：
  - 优点：覆盖了分布内和分布外场景，结果显示了平均提升3.4个百分点和分布外提升5.3个百分点，统计上显著。
  - 不足：缺乏对不同类型错误、不同模型规模、不同训练成本等因素的详细消融分析，实验全面性受限。但作为一篇会议论文，核心对比足以支撑结论。

## 6. 论文的主要结论与发现

- 对抗训练是提升过程奖励模型泛化能力的有效方法，无需人工步骤级标注。
- 所提出的APRM在数学推理基准上平均提升求解器准确率3.4个百分点，在分布外任务上提升5.3个百分点，超越最强PRM基线。
- APRM能够生成渐进式难负例，从而增强PRM对新颖错误的鲁棒性。

## 7. 优点：方法或实验设计上的亮点

- **无需人工步骤级标签**：完全依赖最终答案标签，极大降低了标注成本。
- **对抗训练机制**：通过生成器与奖励模型的博弈，自动产生难度递增的负例，符合困难样本挖掘（hard negative mining）思想。
- **泛化能力显著**：不仅提升分布内性能，在分布外任务上提升幅度更大，表明方法具有良好迁移性。
- **实验指标清晰**：使用求解器准确率，直接反映下游推理任务效果。

## 8. 不足与局限

- **领域局限**：目前仅在数学推理基准上验证，未涉及其他推理领域（如常识推理、代码生成等）。
- **资源消耗未知**：对抗训练通常需要交替训练生成器和奖励模型，可能增加计算开销，论文未提供训练时间或GPU资源信息。
- **生成器质量控制**：生成器产生的负例质量可能不稳定，需要设计更精细的机制防止生成无意义或琐碎错误。
- **与更强基线对比**：仅与“最强PRM基线”比较，未明确列出所有基线方法（如是否包含基于人类反馈的强化学习等方法），公平性需更多细节支撑。
- **消融实验缺失**：未在摘要中呈现对抗训练强度、生成器策略等超参数的影响，可能影响方法适应性。

（完）

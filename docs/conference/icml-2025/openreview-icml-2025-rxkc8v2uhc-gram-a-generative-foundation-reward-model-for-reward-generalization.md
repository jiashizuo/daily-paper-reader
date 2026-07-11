---
title: "GRAM: A Generative Foundation Reward Model for Reward Generalization"
title_zh: GRAM：面向奖励泛化的生成式基础奖励模型
authors: "Chenglong Wang, Yang Gan, Yifu Huo, Yongyu Mu, Qiaozhi He, MuRun Yang, Bei Li, Tong Xiao, Chunliang Zhang, Tongran Liu, JingBo Zhu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=rxKC8v2uHc"
tags: ["query:mlr"]
score: 8.0
evidence: 利用无标签数据预训练的生成式奖励模型以提升泛化性
tldr: 标准奖励模型仅依赖标注偏好数据，泛化能力受限。本文提出生成式奖励模型GRAM，先通过大规模无监督学习预训练，再监督微调。理论和实验表明，使用标签平滑实际上优化了正则化的成对排序损失，统一了生成式和判别式奖励模型的训练目标。GRAM在奖励泛化任务上表现优越，为奖励模型训练开辟了新范式。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 标准奖励模型仅用标注数据，缺乏泛化性。
method: 利用大型语言模型的生成能力，先用无标签数据预训练奖励模型，再用标签平滑进行微调。
result: 在奖励泛化基准上优于标准判别式奖励模型。
conclusion: GRAM证明了生成式预训练对奖励模型泛化的重要性，并建立了与判别式目标的联系。
---

## Abstract
In aligning large language models (LLMs), reward models have played an important role, but are standardly trained as discriminative models and rely only on labeled human preference data.  In this paper, we explore methods that train reward models using both unlabeled and labeled data.  Building on the generative models in LLMs, we develop a generative reward model that is first trained via large-scale unsupervised learning and then fine-tuned via supervised learning.  We also show that by using label smoothing, we are in fact optimizing a regularized pairwise ranking loss.  This result, in turn, provides a new view of training reward models, which links generative models and discriminative models under the same class of training objectives.  The outcome of these techniques is a foundation reward model, which can be applied to a wide range of tasks with little or no further fine-tuning effort.  Extensive experiments show that this model generalizes well across several tasks, including response ranking, reinforcement learning from human feedback, and task adaptation with fine-tuning, achieving significant performance improvements over several strong baseline models.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大型语言模型（LLM）的对齐过程中，奖励模型（reward model）通常作为判别式模型，仅依赖标注的人类偏好数据进行训练，导致其泛化能力受限。当面对分布外或新任务时，标准奖励模型表现不佳。
- **研究动机**：探索如何利用大量无标签数据提升奖励模型的泛化性，从而在更广泛的任务上实现有效对齐，减少对昂贵人工标注的依赖。
- **整体含义**：论文提出了一种生成式奖励模型（GRAM），通过无监督预训练和监督微调相结合，构建基础奖励模型，能够直接用于多个任务或仅需少量微调即可适配，为奖励模型训练提供了新范式。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用LLM本身具备的生成能力，将奖励模型构建为生成式模型，而非传统的判别式模型。通过大规模无监督学习（无标签数据）进行预训练，使模型学习到通用的偏好知识；再通过有监督微调（使用人类偏好标签数据）进一步优化。
- **关键技术细节**：
    - **生成式奖励模型架构**：基于现有LLM（如GPT风格）的生成式架构，输出评分或偏好判断。
    - **无监督预训练**：使用大量无标签文本数据，设计自监督任务（如比较句子质量、排序学习等）让模型学习内在偏好。
    - **监督微调**：使用标准的人类偏好数据对（chosen/rejected response）进行微调，但采用**标签平滑（label smoothing）** 技术。
    - **理论贡献**：证明在生成式奖励模型中使用标签平滑，实际上等价于优化一个带有正则化项的成对排序损失（regularized pairwise ranking loss）。这一结论统一了生成式和判别式奖励模型的训练目标，二者可在同一类损失函数下被解释。
- **公式/算法流程（文字说明）**：
    - 预训练阶段：在大量无标签数据上，模型通过预测文本片段之间的相对优劣（如根据连贯性、有用性等隐式信号）进行自监督学习。
    - 微调阶段：给定偏好数据对 $(x, y_w, y_l)$（x为输入，$y_w$为更优回答，$y_l$为较差回答），使用交叉熵损失，并对标签进行平滑处理（如将硬标签转化为软标签：$1-\epsilon$ 和 $\epsilon$）。这等效于在标准的成对排序损失上附加一个正则项，防止过拟合并提升泛化。
    - 最终模型可直接用于响应排序、RLHF奖励信号、或通过少量微调迁移到新任务。

## 3. 实验设计：数据集、基准、对比方法

- **数据集/场景**：
    - 响应排序（response ranking）
    - 从人类反馈的强化学习（RLHF）
    - 任务自适应微调（task adaptation with fine-tuning）
- **基准**：在多个奖励泛化基准上进行评估，具体数据集名称未在元数据中列出，但摘要指出覆盖了上述三大类场景。
- **对比方法**：
    - 标准判别式奖励模型（baseline）
    - 其他强基线模型（论文实验部分包含多个对比基线，但具体名称未在元数据中提及，需要查看全文细节；摘要中称“显著优于多个强基线模型”）。

## 4. 资源与算力

- **未明确说明**：论文元数据和摘要中未提及所使用的GPU型号、数量、训练时长等具体算力信息。若需完整细节，需查阅论文正文。

## 5. 实验数量与充分性

- **实验数量**：从摘要判断，至少包含三组主要任务（响应排序、RLHF、任务自适应微调），每组任务下可能包含多个数据集或子实验。此外应有消融实验（例如比较有无预训练、标签平滑效果等），但具体数量未给出。
- **充分性评估**：
    - **正面**：覆盖了奖励模型的核心应用场景（排序、RL对齐、迁移学习），实验设计较为全面。
    - **公平性**：与标准判别式奖励模型及多个强基线对比，能够体现方法优势。但缺乏对实验随机性、显著性检验的说明（需原文确认）。
    - **潜在不足**：可能缺少在极端分布外场景或低资源语言上的测试，泛化性的边界未充分探讨。

## 6. 论文的主要结论与发现

- 生成式奖励模型GRAM通过无监督预训练和标签平滑微调，显著提升了奖励模型的泛化能力，在响应排序、RLHF和任务自适应微调上均优于标准判别式奖励模型。
- 标签平滑的引入不仅提升了性能，还建立了生成式与判别式奖励模型训练目标之间的理论联系，证明二者本质上是同一类优化问题的不同实现。
- 该模型可作为基础奖励模型（foundation reward model），适用于广泛任务，减少对任务特定微调的需求。

## 7. 优点：方法或实验设计上的亮点

- **方法创新**：首次将生成式预训练范式引入奖励模型训练，充分利用无标签数据，突破了传统奖励模型对标注数据的依赖。
- **理论深度**：证明标签平滑与正则化成对排序损失的等价性，提供了统一的理论视角，有助于理解奖励模型训练的本质。
- **实用价值**：训练出的基础奖励模型可直接应用于多任务，降低下游部署成本。
- **实验全面**：覆盖主流奖励模型应用场景，并在多个基线上取得显著提升。

## 8. 不足与局限

- **实验细节缺失**：摘要中未给出具体数据集名称、实验规模、性能数字，以及与其他最新方法（如直接偏好优化DPO等）的比较，需要查阅全文评估。
- **算力与复现成本**：未报告训练资源，可能因大规模无监督预训练需要较高计算成本，对资源有限的团队不友好。
- **泛化边界未明确**：仅提到“广泛任务”，但未具体说明在何种分布偏移或弱相关任务上失效，可能存在过拟合预训练数据分布的风险。
- **理论部分**：虽然建立了生成式与判别式的联系，但未深入探讨这种等价性在实际优化中的数值稳定性或收敛性影响。
- **偏差风险**：无监督预训练数据可能隐含了人类偏见，而标签平滑可能无法完全消除，需额外审计。

（完）

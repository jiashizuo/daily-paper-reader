---
title: "Generative RLHF-V: Learning Principles from Multi-modal Human Preference"
title_zh: 生成式RLHF-V：从多模态人类偏好中学习原则
authors: "Jiayi Zhou, Jiaming Ji, Boyuan Chen, Jiapeng Sun, Wenqi Chen, Donghai Hong, Sirui Han, Yike Guo, Yaodong Yang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Evz0xPema0"
tags: ["query:mlr"]
score: 8.0
evidence: 多模态RLHF结合生成式奖励模型
tldr: 针对多模态大模型对齐问题，提出生成式RLHF-V框架，将生成式奖励模型与多模态强化学习从人类反馈相结合，通过两阶段训练提升对齐精度。实验表明该方法在多项多模态对齐任务上优于传统评分奖励模型，为医疗多模态模型的对齐提供了可迁移方法。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 传统评分奖励模型在多模态对齐中精度低、可解释性差。
method: 提出两阶段生成式RLHF-V，先用RL引导生成式奖励模型学习，再用于多模态RLHF对齐。
result: 在多项多模态对齐评测中，生成式RLHF-V显著优于基线方法。
conclusion: 生成式奖励模型能有效增强多模态RLHF的对齐效果。
---

## Abstract
Training multi-modal large language models (MLLMs) that align with human intentions is a long-term challenge. Traditional score-only reward models for alignment suffer from low accuracy, weak generalization, and poor interpretability, blocking the progress of alignment methods, \textit{e.g.,} reinforcement learning from human feedback (RLHF). Generative reward models (GRMs) leverage MLLMs' intrinsic reasoning capabilities to discriminate pair-wise responses, but their pair-wise paradigm makes it hard to generalize to learnable rewards. We introduce Generative RLHF-V, a novel alignment framework that integrates GRMs with multi-modal RLHF. We propose a two-stage pipeline: \textbf{multi-modal generative reward modeling from RL}, where RL guides GRMs to actively capture human intention, then predict the correct pair-wise scores; and \textbf{RL optimization from grouped comparison}, which enhances multi-modal RL scoring precision by grouped responses comparison. Experimental results demonstrate that, besides out-of-distribution generalization of RM discrimination, our framework improves 4 MLLMs' performance across 7 benchmarks by 18.1\%, while the baseline RLHF is only 5.3\%. We further validate that Generative RLHF-V achieves a near-linear improvement with an increasing number of candidate responses.

---

## 论文详细总结（自动生成）

## 详细中文总结

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：多模态大语言模型（MLLMs）与人类意图的对齐是一个长期挑战。传统的评分奖励模型（score-only reward models）在对齐中存在精度低、泛化弱、可解释性差等问题，限制了RLHF等对齐方法的发展。
- **背景**：生成式奖励模型（GRM）利用MLLMs自身的推理能力区分成对响应，但成对范式难以泛化到可学习的奖励信号。
- **整体目标**：提出一种将生成式奖励模型与多模态RLHF有机结合的新框架——Generative RLHF-V，旨在提升多模态模型的对齐精度和可解释性。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：通过两阶段流水线，让生成式奖励模型主动捕捉人类偏好，并利用分组对比增强RL评分精度。
- **两阶段流程**：
  1. **多模态生成式奖励模型的RL引导训练**：利用强化学习（RL）引导生成式奖励模型（GRM）主动学习人类意图，进而正确预测成对响应的分数。
  2. **基于分组对比的RL优化**：通过分组响应对比（grouped responses comparison）增强多模态RL评分精度，避免传统成对评分范式的局限。
- **关键技术细节**：GRM利用MLLMs自身的推理能力进行判别，RL作用使其从被动判别变为主动学习；分组对比机制允许在多个候选响应中更精细地学习偏好。
- **公式或算法**：文中未给出具体公式，仅描述了概念性流程。

### 3. 实验设计：使用了哪些数据集/场景、benchmark、对比方法
- **数据集/场景**：未详细列出具体数据集名称，但提及在7个基准测试（7 benchmarks）上进行评估，涵盖多模态对齐任务。
- **benchmark**：包括4种不同的MLLMs（多模态大语言模型）在7个基准上的表现。
- **对比方法**：
  - 基线RLHF方法（传统评分奖励模型），其平均提升仅为5.3%。
  - 本框架（Generative RLHF-V）提升达到18.1%。
  - 此外还验证了随着候选响应数量增加，性能呈近线性提升。

### 4. 资源与算力
- **文中未明确说明**：未提及GPU型号、数量、训练时长等具体算力信息。仅从“NeurIPS-2025-Accepted”推断可能使用大规模GPU集群，但无详细数据。

### 5. 实验数量与充分性
- **实验数量**：论文在4种不同的MLLMs、7个基准上进行了完整评估，并报告了对比结果。还进行了扩展性实验（候选响应数量对性能的影响）。
- **充分性与公平性**：
  - 实验覆盖了多种模型和多个基准，表明泛化性。
  - 对比了标准RLHF基线，结果提升显著（18.1% vs 5.3%），客观性较好。
  - 但未披露详细消融实验（如仅使用GRM或仅使用分组对比的效果），也未说明是否在相同条件下重复多次实验。可能不够充分。

### 6. 论文的主要结论与发现
- 生成式奖励模型能有效增强多模态RLHF的对齐效果，显著优于传统评分奖励模型。
- Generative RLHF-V在4种MLLMs、7个基准上平均提升18.1%，而基线RLHF仅提升5.3%。
- 随着候选响应数量增加，性能呈近线性改善，表明框架具有良好的扩展性。

### 7. 优点：方法或实验设计上的亮点
- **方法创新**：首次将生成式奖励模型与多模态RLHF结合，通过两阶段训练解决GRM难以泛化到可学习奖励的问题。
- **高可解释性**：GRM利用MLLMs的推理能力生成文本判断，比纯分数更易理解。
- **强泛化性**：在分布外（out-of-distribution）奖励判别上表现良好。
- **扩展性好**：候选响应越多，性能提升越稳定，适合实际应用。

### 8. 不足与局限
- **实验覆盖有限**：未提供具体数据集名称，也未进行多角度消融实验（如仅对比GRM vs 评分RM，或不同RL超参数的影响）。
- **泛化风险**：仅在4种MLLMs上验证，未覆盖更多开源/闭源模型，可能存在偏差。
- **应用限制**：需要多轮RL训练，计算成本较高；生成式奖励模型可能引入额外推理延迟。
- **可复现性**：未提供完整训练代码、超参数、计算资源等细节，复现难度较大。

（完）

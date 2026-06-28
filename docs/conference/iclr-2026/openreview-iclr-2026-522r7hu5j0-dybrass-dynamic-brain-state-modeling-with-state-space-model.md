---
title: "DyBraSS: Dynamic Brain State Modeling with State-Space Model"
authors: "Ah-Yeong Jeong, Seungwoo Jeong, Da-Woon Heo, Heung-Il Suk"
date: 2025-09-17
pdf: "https://openreview.net/pdf?id=522R7hU5J0"
score: 0.8
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Brain states, observable through resting-state functional magnetic resonance imaging (rs-fMRI), represent dynamic transitions between recurring connectivity patterns and are closely linked to neurological and psychiatric conditions. Therefore, developing a computational model for dynamic brain state estimation has been a long-lasting research interest. Among existing approaches, state-space models (SSMs) provide a principled framework for modeling these dynamics. However, existing methods face key limitations: they fail to preserve the brain's spatial architecture, and they model temporal dynamics without considering co-evolving spatial patterns.
To address these limitations, we propose $\textbf{DyBraSS}$ ($\textbf{Dy}$namic $\textbf{Bra}$in $\textbf{S}$tate-$\textbf{S}$pace model), a novel structured SSM that unifies spatial and temporal modeling within a single framework, enhancing ROI-level modeling capacity and interpretability through a clustering-based global aggregation module.
This module respects the brain's network topology by integrating information from all regions during each local update, and represents evolving brain states as interpretable clusters.
Comprehensive experiments on multiple fMRI datasets demonstrate that our method consistently outperforms state-of-the-art baselines in diagnostic performance across diverse metrics. 
Additionally, individual- and group-level brain state analyses reveal that the learned dynamics align with known neurobiological alterations, providing clinically relevant insights for understanding neural dysfunction and developing diagnostic biomarkers.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Brain states, observable through resting-state functional magnetic resonance imaging (rs-fMRI), represent dynamic transitions between recurring connectivity patterns and are closely linked to neurological and psychiatric conditions.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=522R7hU5J0](https://openreview.net/forum?id=522R7hU5J0)

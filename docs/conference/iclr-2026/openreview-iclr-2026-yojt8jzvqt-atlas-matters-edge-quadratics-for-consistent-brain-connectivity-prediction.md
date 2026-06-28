---
title: "Atlas Matters: Edge Quadratics for Consistent Brain Connectivity Prediction"
authors: "Sai Karthik Navuluru, Surbhi Kumar, Lakshman Tamil, Baris Coskunuzer"
date: 2025-09-06
pdf: "https://openreview.net/pdf?id=YojT8JZvqT"
score: 1.0
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Functional connectivity from resting-state fMRI is a strong substrate for subject-level prediction, yet progress is held back by two issues. First, most architectures ingest FC via node-centric propagation or global attention, leaving higher-order edge interactions implicit. Second, evaluations are inconsistent across seeds, atlas choice, preprocessing, and hyperparameter budgets, which obscures true gains.

We propose a simple edge-image encoder that applies dual atrous spatial pyramid pooling to features and connectivity, coupled with a low-rank quadratic block that makes edge-edge effects explicit and efficient. Beyond design, we introduce a unified protocol with five fixed seeds, harmonized preprocessing, and multiple standard atlases, and we re-run recent GNN and transformer baselines under identical settings. Under this protocol, our model **EdgeQuad** attains the best mean performance on curated functional atlases for ABIDE and ADNI, while on unsupervised parcellations such as Ward and KMeans rankings are mixed, highlighting sensitivity to atlas construction. The quadratic block realizes localized degree-2 interactions with provable stability, explaining robustness. The model is lightweight and computationally efficient. To facilitate rigorous comparison, we release code, exact configs, and per-seed logs via an anonymous link.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Functional connectivity from resting-state fMRI is a strong substrate for subject-level prediction, yet progress is held back by two issues.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=YojT8JZvqT](https://openreview.net/forum?id=YojT8JZvqT)

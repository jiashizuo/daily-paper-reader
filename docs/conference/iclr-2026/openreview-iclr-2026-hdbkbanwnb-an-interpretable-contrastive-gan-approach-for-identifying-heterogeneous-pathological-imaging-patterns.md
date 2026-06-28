---
title: An Interpretable Contrastive GAN Approach for Identifying Heterogeneous Pathological Imaging Patterns
authors: "Mingquan Zhang, Wenjian Bi"
date: 2025-09-17
pdf: "https://openreview.net/pdf?id=HDBkBANWNb"
score: 0.6
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Despite the rapid development of representation learning applied to neuroimaging, accurately disentangling the heterogeneity of neurological diseases remains a significant challenge. Typically, unsupervised approaches may capture disease heterogeneity that is dominated by confounding factors rather than pathological changes in brain structure or function. Existing semi-supervised methods can reveal disease-specific subtypes or dimensions by contrasting with a background population, but they usually rely on the assumption that non-pathological variations are identically distributed between background and target datasets—a condition often unmet in real-world data. To address this, we introduce InfoSepGAN, a contrastive generative framework designed to separate context (non-pathological) and attribute (pathological) factors between background and target datasets, reducing biases in learned disease-related representations when the assumption is violated. Furthermore, we regularize the learned imaging patterns for continuity, sparsity, and monotonicity, ensuring distinct and interpretable disease-related patterns along each dimension. Finally, InfoSepGAN employs a "synthetic twin" mechanism to perform subject-level counterfactual reconstruction, generating non-pathological counterparts for each patient and providing visualizations of disease-related regions. Experiments on both synthetic and real-world Alzheimer's disease datasets demonstrate that InfoSepGAN effectively extracts pathological imaging patterns while adjusting for potential confounders, outperforming recent baseline methods in both accuracy and interpretability.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Despite the rapid development of representation learning applied to neuroimaging, accurately disentangling the heterogeneity of neurological diseases remains a significant challenge.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=HDBkBANWNb](https://openreview.net/forum?id=HDBkBANWNb)

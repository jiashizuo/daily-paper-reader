---
title: Reservoir Computing with Spatial Filtering and Manifold Learning for fMRI Classification
authors: "Artem Badarin, Nikita Kulagin, Andrey Andreev, Kurkin Semyon, Alexander E. Hramov"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=e4KSeTmjAe"
score: 0.8
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
We introduce a parametric framework that couples discriminative spatial filtering with  reservoir computing to distinguish spatiotemporal structure in resting-state fMRI in two classes. Temporal dependencies are encoded in a reservoir, while supervised spatial filtering on reservoir states isolates condition-specific patterns; parametric Uniform Manifold Approximation and Projection (UMAP) then yields compact nonlinear embeddings fit on training data and evaluated with cross-subject validation. On 163 participants (97 healthy controls, 66 major depressive disorder), the method reaches 87\% accuracy, outperforming network-feature pipelines using LDA, SVM, kNN, and GNN. The framework also generalizes to autism spectrum disorder classification, achieving competitive accuracy on the ABIDE (NYU) benchmark and ranking among top state-of-the-art methods. Interpretability combines spatial-pattern maps with Shapley-value attribution, providing coherent, region-level explanations that consistently implicate cortical and subcortical areas associated with both major depressive disorder and autism spectrum disorder. The framework offers an interpretable route to modeling spatiotemporal organization in clinical and cognitive fMRI.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
We introduce a parametric framework that couples discriminative spatial filtering with reservoir computing to distinguish spatiotemporal structure in resting-state fMRI in two classes.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=e4KSeTmjAe](https://openreview.net/forum?id=e4KSeTmjAe)

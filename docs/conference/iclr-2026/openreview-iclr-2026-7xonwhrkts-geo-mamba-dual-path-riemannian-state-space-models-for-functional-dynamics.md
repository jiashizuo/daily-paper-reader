---
title: "Geo-Mamba: Dual-Path Riemannian State-Space Models for Functional Dynamics"
authors: "Yuwei Cao, Tingting Dan, Yang Yang, Guorong Wu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=7XonwHRkTS"
score: 0.8
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Functional magnetic resonance imaging (fMRI)–derived functional connectivity (FC) is represented as graphs and as correlation/covariance matrices that live on non-Euclidean spaces—cortical graphs and the Riemannian manifold of symmetric positive-definite (SPD) matrices—so conventional Euclidean sequence models are misspecified. To this end, we introduce *Geo-Mamba*, a geometric variant of Mamba formulated on Riemannian manifolds. *Geo-Mamba* employs a dual-path selective state-space design: *a stacked path* performs hierarchical spatial modeling by aggregating pyramid multi-scale features to capture local and global dependencies, while *a embedding path* combats redundancy in high-dimensional SPD inputs via progressive, geometry-aware dimensionality reduction (operating in the appropriate manifold spaces) to produce compact states without violating Riemannian constraints. Their complementary outputs are fused through the tailored *GeoMix* operator to yield a compact, discriminative SPD representation. *Geo-Mamba* is evaluated on six public fMRI datasets—ADNI, OASIS, PPMI, Taowu, Neurocon, and Mātai—spanning Alzheimer’s and Parkinson’s cohorts as well as multi-site normative populations with diverse acquisition protocols. Across these benchmarks, it delivers consistently competitive accuracy and robustness, supporting the value of dual-path manifold modeling for neuroimaging and its potential for clinical translation.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Functional magnetic resonance imaging (fMRI)–derived functional connectivity (FC) is represented as graphs and as correlation/covariance matrices that live on non-Euclidean spaces—cortical graphs and the Riemannian manifold of symmetric positive-definite (SPD) matrices—so conventional Euclidean sequence models are misspecified.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=7XonwHRkTS](https://openreview.net/forum?id=7XonwHRkTS)

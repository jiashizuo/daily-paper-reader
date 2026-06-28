---
title: "BACE: Behavior-Adaptive Connectivity Estimation for Interpretable Graphs of Neural Dynamics"
authors: "Mehrnaz Asadi, Sina Javadzadeh, Rahil Soroushmojdehi, S. Alireza Seyyed Mousavi, Terence Sanger"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=5iepz5XeW4"
score: 0.8
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Understanding how distributed brain regions coordinate to produce behavior requires
models that are both predictive and interpretable. We introduce Behavior-
Adaptive Connectivity Estimation (BACE), an end-to-end framework that learns
context-specific, directed inter-regional connectivity directly from multi-region intracranial
local field potentials (LFP). BACE aggregates many micro-contacts
within each anatomical region via per-region temporal encoders, applies a learnable
adjacency specific to each behavioral context, and is trained on a forecasting
objective. On synthetic multivariate time series with known graphs, BACE accurately
recovers ground-truth directed interactions while achieving forecasting
performance comparable to state-of-the-art baselines. Applied to human subcortical
LFP recorded simultaneously from eight regions during a cued reaching task,
BACE yields an explicit 8×8 connectivity matrix for each within-trial behavioral
context. The resulting behavioral context-specific graphs reveal behavior-aligned reconfiguration
of inter-regional influence and provide compact, interpretable adjacency
matrices for comparing network organization across behavioral contexts. By
linking predictive success to explicit connectivity estimates, BACE offers a practical
tool for generating data-driven hypotheses about the dynamic coordination
of subcortical regions during behavior.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Understanding how distributed brain regions coordinate to produce behavior requires models that are both predictive and interpretable.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=5iepz5XeW4](https://openreview.net/forum?id=5iepz5XeW4)

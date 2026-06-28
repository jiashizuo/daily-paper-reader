---
title: Causal Graph Recovery in Neuroimaging through Answer Set Programming
authors: "Mohammadsajad Abavisani, Kseniya Solovyeva, David Danks, Vince D. Calhoun, Sergey Plis"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=ZAcUiIwUwu"
score: 0.5
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Learning directed causal graphs from time-series data poses significant challenges, especially in fMRI where slow sampling rate obscures fast neural interactions. This temporal mismatch leads to undersampling, which can make multiple graphs equally plausible. We address this problem by explicitly modeling undersampling effects when recovering causal graphs. Our approach employs answer set programming (ASP) to enforce domain-specific constraints and optimize soft observational constraints, thereby identifying a Markov equivalence class for the resulting graph solutions. By customizing an ASP solver to collect multiple near-optimal solutions, we obtain not only the single best-fitting graph but an equivalence class of high-scoring graphs for expert consideration. This method, called Real-world noisy RASL (RnR), can also act as a meta-solver: it refines the output of other causal discovery algorithms by accounting for undersampling biases. In simulations and empirical brain network data, RnR produces more accurate causal graphs than state-of-the-art methods, improving F1-scores by an average of 12\% by reducing false connections. We demonstrate that RnR is robust to varying undersampling rates – maintaining high precision and recall even as sampling becomes more sparse – whereas baseline methods degrade significantly. Finally we test RnR on open-ended questions without know ground truth like human brain fRMI data, showing that incorporating undersampling-aware constraints via ASP yields more reliable and interpretable brain connectivity estimates from fMRI time series, bridging the gap between neural dynamics and observational data.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Learning directed causal graphs from time-series data poses significant challenges, especially in fMRI where slow sampling rate obscures fast neural interactions.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=ZAcUiIwUwu](https://openreview.net/forum?id=ZAcUiIwUwu)

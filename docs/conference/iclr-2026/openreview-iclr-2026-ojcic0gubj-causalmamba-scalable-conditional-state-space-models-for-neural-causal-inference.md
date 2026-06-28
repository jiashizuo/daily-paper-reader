---
title: "CAUSALMAMBA: SCALABLE CONDITIONAL STATE SPACE MODELS FOR NEURAL CAUSAL INFERENCE"
authors: "Sangyoon Bae, Jiook Cha"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=OJcic0GUBj"
score: 0.5
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
We introduce CausalMamba, a scalable framework that addresses fundamental limitations in fMRI-based causal inference: the ill-posed nature of inferring neural causality from hemodynamically-distorted BOLD signals and the computational intractability of existing methods like Dynamic Causal Modeling (DCM). Our approach decomposes this complex inverse problem into two tractable stages: BOLD deconvolution to recover latent neural activity, followed by causal graph inference using a novel Conditional Mamba architecture. On simulated data, CausalMamba achieves 37\% higher accuracy than DCM. Critically, when applied to real task fMRI data, our method recovers well-established neural pathways with 88\% fidelity, whereas conventional approaches fail to identify these canonical circuits in over 99\% of subjects. Furthermore, our network analysis of working memory data reveals that the brain strategically shifts its primary causal hub—recruiting executive or salience networks depending on the stimulus—a sophisticated reconfiguration that remains undetected by traditional methods. This work provides neuroscientists with a practical tool for large-scale causal inference that captures both fundamental circuit motifs and flexible network dynamics underlying cognitive function.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
We introduce CausalMamba, a scalable framework that addresses fundamental limitations in fMRI-based causal inference: the ill-posed nature of inferring neural causality from hemodynamically-distorted BOLD signals and the computational intractability of existing methods like Dynamic Causal Modeling (DCM).

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=OJcic0GUBj](https://openreview.net/forum?id=OJcic0GUBj)

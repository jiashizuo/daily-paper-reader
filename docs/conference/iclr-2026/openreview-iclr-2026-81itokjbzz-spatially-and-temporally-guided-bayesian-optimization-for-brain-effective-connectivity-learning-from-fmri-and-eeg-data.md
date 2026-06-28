---
title: Spatially and Temporally Guided Bayesian Optimization for Brain Effective Connectivity Learning from fMRI and EEG Data
authors: "Zhihao Su, Junzhong Ji, Minqi Yu, Wen Xiong, Jinduo Liu"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=81iTOKJbzZ"
score: 1.0
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Brain effective connectivity (EC) characterizes the causal and directional interactions among brain regions and plays a central role in understanding cognition and neurological disorders. Constructing EC networks from multimodal neuroimaging such as functional Magnetic Resonance Imaging (fMRI) and electroencephalography (EEG) is challenging, since most existing methods rely on feature concatenation or linear mapping, neglecting structural consistency and nonlinear cross-modal dynamics. In this work, we propose STBO-EC, a spatially and temporally guided framework for multimodal EC learning. First, we develop an anatomy-informed spatial alignment strategy that leverages known brain region coordinates to establish structurally consistent correspondences between EEG electrodes and fMRI regions. Second, we design a time-slice-based alignment and fusion mechanism to effectively bridge the temporal resolution gap between fast EEG activity and slow fMRI signals. Finally, to tackle the high dimensionality and nonlinear dependencies of fused multimodal data, we employ a low-rank parameterized Bayesian optimization method (DrBO), which enables efficient exploration of the exponential EC search space while providing uncertainty-aware inference. Experiments on two real EEG–fMRI datasets demonstrate that STBO-EC consistently outperforms state-of-the-art baselines across multiple evaluation metrics.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Brain effective connectivity (EC) characterizes the causal and directional interactions among brain regions and plays a central role in understanding cognition and neurological disorders.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=81iTOKJbzZ](https://openreview.net/forum?id=81iTOKJbzZ)

---
title: Online Fitting Connectome-constrained Drosophila Whole-brain Model Reproduces Critical Resting-state Dynamics
authors: "Qianzhu Li, Minghao Wang, Xinzhu Liao, KeZhang, Chaoming Wang"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=wCBNxp1qWe"
score: 0.7
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
The rapid growth of large-scale synaptic connectome maps and neural activity datasets has created an urgent need for connectome-constrained whole-brain models that can fit and interpret experimentally recorded neural data. A promising approach to bridge this gap is to train biologically inspired models using backpropagation through time (BPTT), which enables data-driven optimization of unknown model parameters. However, BPTT is inherently an offline method, with memory requirements that grow linearly with simulation time, making it impractical for training large-scale whole-brain networks over biologically relevant timescales. To address this challenge, we introduce an online learning framework for fitting whole-brain models using online gradient-based optimization. By updating parameters in a strictly forward-time manner, our method reduces memory consumption to a single time step, scaling only with the number of parameters rather than the entire temporal sequence. Using this framework, we construct a Drosophila whole-brain network comprising over 130,000 neurons and millions of synapses, where the network topology is fixed from the FlyWire connectome, and unknown parameters such as synaptic weights and cellular time constants are optimized to match in vivo resting-state neural activity. Our results show that this approach enables the training of large-scale Drosophila models over experimental timescales on a single GPU, a feat that is computationally prohibitive with BPTT. Remarkably, the optimization not only captures target dynamics but also spontaneously produces synaptic weight distributions that closely match empirical connectome statistics and drives the network toward a hallmark feature of resting state -- critical dynamics. Together, this work establishes an online, scalable, and data-driven framework for integrating anatomical and functional datasets, paving the way toward mechanistic whole-brain models at unprecedented scales.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
The rapid growth of large-scale synaptic connectome maps and neural activity datasets has created an urgent need for connectome-constrained whole-brain models that can fit and interpret experimentally recorded neural data.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=wCBNxp1qWe](https://openreview.net/forum?id=wCBNxp1qWe)

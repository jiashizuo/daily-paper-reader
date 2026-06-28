---
title: Directed Semi-Simplicial Learning with Applications to Brain Activity Decoding
authors: "Manuel Lecha, Andrea Cavallo, Francesca Dominici, Ran Levi, Alessio Del Bue, Elvin Isufi, Pietro Morerio, Claudio Battiloro"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=YR3CNvFfCr"
score: 0.7
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Graph Neural Networks (GNNs) excel at learning from pairwise interactions but often overlook multi-way and hierarchical relationships. Topological Deep Learning (TDL) addresses this limitation by leveraging combinatorial topological spaces, such as simplicial or cell complexes. However, existing TDL models are restricted to undirected settings and fail to capture the higher-order directed patterns prevalent in many complex systems, e.g., brain networks, where such interactions are both abundant and functionally significant. To fill this gap, we introduce Semi-Simplicial Neural Networks (SSNs), a principled class of TDL models that operate on semi-simplicial sets---combinatorial structures that encode directed higher-order motifs and their directional relationships. To enhance scalability, we propose Routing-SSNs, which dynamically select the most informative relations in a learnable manner. We theoretically characterize SSNs by proving they are strictly more expressive than standard graph and TDL models, and they are able to recover several topological descriptors. Building on previous evidence that such descriptors are critical for characterizing brain activity, we then introduce a new principled framework for brain dynamics representation learning centered on SSNs. Empirically, we test SSNs on 4 distinct tasks across 13 datasets, spanning from brain dynamics to node classification, showing competitive performance. Notably, SSNs consistently achieve state-of-the-art performance on brain dynamics classification tasks, outperforming the second-best model by up to 27\%, and message passing GNNs by up to 50\% in accuracy.  Our results highlight the potential of topological models for learning from structured brain data, establishing a unique real-world case study for TDL. Code and data are uploaded as supplementary material.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Graph Neural Networks (GNNs) excel at learning from pairwise interactions but often overlook multi-way and hierarchical relationships.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=YR3CNvFfCr](https://openreview.net/forum?id=YR3CNvFfCr)

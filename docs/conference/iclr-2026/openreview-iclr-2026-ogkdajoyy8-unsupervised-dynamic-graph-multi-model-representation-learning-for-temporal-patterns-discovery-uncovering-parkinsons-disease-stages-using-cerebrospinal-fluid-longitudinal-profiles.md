---
title: "Unsupervised Dynamic Graph Multi-Model Representation Learning for Temporal Patterns Discovery: Uncovering Parkinson’s Disease Stages Using Cerebrospinal Fluid Longitudinal Profiles"
authors: "Lubna Mahmoud Abu Zohair, Hind Zantout, Marta Vallejo, Md Azher Uddin, John R. Woodward"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=ogKDAjoyy8"
score: 0.6
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Dynamic graph learning methods typically capture local structural information
and short-range temporal dependencies at each time step. In this work, we introduce a dynamic graph learning architecture that generates time-step embeddings capturing both local structural context and progression-trajectory patterns for each node across an entire longitudinal sequence. Unlike existing approaches, our framework clusters fused embeddings that integrate (i) the global temporal trajectory of each node and (ii) its local spatial context at every graph snapshot to discover meaningful temporal patterns in longitudinal datasets. We
evaluate the proposed model in the context of Parkinson’s disease (PD) progression using six years of longitudinal cerebrospinal fluid (CSF) profiles from 24 patients. Visit-based graphs were constructed by representing patients as nodes enriched with peptide-abundance features, and by connecting patients with similar features profiles. A Graph Convolutional Network (GCN) captures visit-specific spatial relationships, while a sequential model learns global temporal representations. A fusion module integrates both sources of information to produce enriched node embeddings that reflect inter- and intra-patient molecular dynamics.
Clustering the learned embeddings reveals four distinct PD progression stages, supported by strong validity indices (Davies–Bouldin: 0.169; Calinski–Harabasz: 1264.24). Significant differences in motor severity (UPDRS 2 and UPDRS 3; p < 0.05) were observed across clusters, whereas non-motor scores showed a more diffuse pattern (p = 0.11). Compared with PCA, autoencoders, GCN, T-GCN, and GC-LSTM, the proposed architecture yields more clinically discriminative representations of disease severity. These findings demonstrate the potential of the proposed dynamic graph learning for data-driven disease staging and offer a generalizable framework for uncovering latent temporal patterns in longitudinal datasets.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Dynamic graph learning methods typically capture local structural information and short-range temporal dependencies at each time step.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=ogKDAjoyy8](https://openreview.net/forum?id=ogKDAjoyy8)

---
title: "SSL-BN: Self-Supervised Learning Based on Structural Similarities in Brain Networks"
authors: "Yicheng Leng, Eungjoo Lee"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=Yz3mfmNOt2"
score: 1.0
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Functional magnetic resonance imaging (fMRI) data provide critical information for the diagnosis of neurological disorders, as correlations among features of different regions of interest (ROIs) capture functional characteristics of the brain. Brain networks are an effective modeling paradigm for fMRI data, and recent works have explored GNN-based and Transformer-based approaches for brain network analysis. However, the dense and weighted edge structure of brain networks poses challenges for GNN-based methods, while Transformer-based methods typically require large amounts of labeled data. To address these issues, we propose a **S**elf-**S**upervised **L**earning framework for **B**rain **N**etworks (SSL-BN). Our approach pretrains a Brain Network Transformer by dispersing sample embeddings and refining them with a fixed, non-trainable matrix derived from a novel structural similarity measure, enabling contrastive representation learning without data augmentation. To our knowledge, SSL-BN is the first self-supervised framework specifically designed for brain networks. It employs a simple loss function, eliminates the need for augmentation, and significantly improves model performance on limited labeled data. Extensive experiments on the publicly available ABIDE dataset demonstrate that SSL-BN achieves state-of-the-art performance compared to prior methods.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Functional magnetic resonance imaging (fMRI) data provide critical information for the diagnosis of neurological disorders, as correlations among features of different regions of interest (ROIs) capture functional characteristics of the brain.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=Yz3mfmNOt2](https://openreview.net/forum?id=Yz3mfmNOt2)

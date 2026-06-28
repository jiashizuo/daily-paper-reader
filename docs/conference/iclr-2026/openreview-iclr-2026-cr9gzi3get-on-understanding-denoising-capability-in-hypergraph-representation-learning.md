---
title: On Understanding Denoising Capability in Hypergraph Representation Learning
authors: "Detian Zhang, Chengqiang Zhang, Jingsong Lv, Li Qing, Chunjiang Zhu"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=CR9GzI3GeT"
score: 0.7
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Hypergraphs are a powerful model for high-order relations and group interactions among entities. While many real-world network instances modeled by hypergraphs, e.g., social networks, brain connectome networks, and online question-answering communities, are rich in noise and error-prone, existing hypergraph representation learning methods often assume that hypergraphs contain limited or no noise. We reveal that even a small amount of Gaussian noise can deteriorate the performance in node classification and hyperedge prediction.
In this paper, we study the problem of alleviating the impact of noises present in node features on hypergraph representation learning. We first establish the connection between receptive fields and denoising capabilities, showing increasing receptive fields may enhance the denoising ability and robustness. We then develop a four-stage message-passing method that can increase the receptive fields within a single neural network layer, which is applicable to any existing two-stage SOTA methods. We demonstrate the increase in receptive fields both theoretically and empirically. 
We have performed extensive experiments, including analysis of convergence time, an ablation study, and visualization of node embeddings to verify that our four-stage enhanced models achieve superior performance in node classification and hyperedge prediction under various noise settings.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Hypergraphs are a powerful model for high-order relations and group interactions among entities.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=CR9GzI3GeT](https://openreview.net/forum?id=CR9GzI3GeT)

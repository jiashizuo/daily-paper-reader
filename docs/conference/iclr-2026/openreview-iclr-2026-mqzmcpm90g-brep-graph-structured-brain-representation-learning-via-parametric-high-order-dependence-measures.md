---
title: "BRep: Graph-structured Brain Representation Learning via Parametric High-order Dependence Measures"
authors: "Liang Yang, Shuai Zhai, Ziyi Ma, Jiaming Zhuo, Di Jin, Chuan Wang, Zhen Wang, Xiaochun Cao"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=MqzMcpM90G"
score: 1.0
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
The brain network plays an important role in diagnosing neurological disorders. Brain functional network construction often follows the hand-crafted Correlation Coefficients of blood-oxygen-level-dependent (BOLD) time series without any learnable components. At the same time, most efforts are made to the models that predict individual neurological disorders with the constructed brain network as input, such as graph neural networks. Unfortunately, the fixed brain network may lose critical information during construction and lead to difficulty in performance improvement, even with deliberately designed graph models. From this perspective, the current situation is similar to the machine learning community, i.e., hand-crafted features and learnable predictors, before the advent of representation learning.
In fact, the brain network can be regarded as a graph-structured learnable representation of the brain.  By drawing on representation learning, this paper presents the Brain Representation (BRep) learning problem. To this end, the widely used linear and nonlinear correlations are enhanced to be high-order, parametric, and learnable. The flexible brain representation makes the following predictor simple and leads the framework to possess an end-to-end characteristic. The framework is implemented by combining the parametric correlation and a TopK sparsification. Extensive evaluations demonstrate that the proposed BRep possesses superior performance, high efficiency, and interpretability. The source code is publicly available at https://anonymous.4open.science/r/BRep-demo/

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
The brain network plays an important role in diagnosing neurological disorders.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=MqzMcpM90G](https://openreview.net/forum?id=MqzMcpM90G)

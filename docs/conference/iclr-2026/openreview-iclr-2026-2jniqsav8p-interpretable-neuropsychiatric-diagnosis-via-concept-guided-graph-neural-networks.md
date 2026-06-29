---
title: Interpretable Neuropsychiatric Diagnosis via Concept-Guided Graph Neural Networks
authors: "Song Wang, Zhenyu Lei, Zhen Tan, Jundong Li, Javier Rasero, Aiying Zhang, Chirag Agarwal"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=2jNIqSav8p"
score: 1.0
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Nearly one in five adolescents currently live with a diagnosed mental or behavioral health condition, such as anxiety, depression, or conduct disorder, underscoring the urgency of developing accurate and interpretable diagnostic tools. Resting-state functional magnetic resonance imaging (rs-fMRI) provides a powerful lens into large-scale functional connectivity, where brain regions are modeled as nodes and inter-regional synchrony as edges, offering clinically relevant biomarkers for psychiatric disorders. While prior works use graph neural network (GNN) approaches for disorder prediction, they remain complex black-boxes, limiting their reliability and clinical translation. In this work, we propose CONCEPTNEURO, a concept-based diagnosis framework that leverages large language models (LLMs) and neurobiological domain knowledge to automatically generate, filter, and encode interpretable functional connectivity concepts. Each concept is represented as a structured subgraph linking specific brain regions, which are then passed through a concept classifier. Our design ensures predictions through clinically meaningful connectivity patterns, enabling both interpretability and strong predictive performance. Extensive experiments across multiple psychiatric disorder datasets demonstrate that CONCEPTNEURO-augmented GNNs consistently outperform their vanilla counterparts, improving accuracy while providing transparent, clinically aligned explanations. Furthermore, concept analyses highlight disorder-specific connectivity patterns that align with expert knowledge and suggest new hypotheses for future investigation, establishing CONCEPTNEURO as an interpretable, domain-informed framework for psychiatric disorder diagnosis.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Nearly one in five adolescents currently live with a diagnosed mental or behavioral health condition, such as anxiety, depression, or conduct disorder, underscoring the urgency of developing accurate and interpretable diagnostic tools.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=2jNIqSav8p](https://openreview.net/forum?id=2jNIqSav8p)

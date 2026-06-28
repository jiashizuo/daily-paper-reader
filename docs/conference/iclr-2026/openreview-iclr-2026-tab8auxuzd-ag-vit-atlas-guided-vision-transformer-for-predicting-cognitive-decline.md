---
title: "AG-ViT: Atlas-Guided Vision Transformer for Predicting Cognitive Decline"
authors: "Sagi Nathan, Gregory Peters-Founshtein, Yossi Gandelsman, Ariel Jaffe"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=tAb8aUxuzd"
score: 1.0
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
The use of resting state fMRI (rs-fMRI) to improve the diagnosis and treatment of neurodegenerative diseases has increased dramatically in recent years. Despite evident progress, producing accurate predictions from rs-fMRI scans remains challenging due to the data's high dimensionality and the limited number of samples. In this work, our aim is to estimate the probability of cognitive decline within a given time frame based on rs-fMRI scans of Alzheimer’s patients. Accurate predictions of disease trajectory can guide medical decision-making and contribute to personalized medicine. To this end, we design a vision transformer to obtain low-dimensional embeddings of rs-fMRI scans. These embeddings are used to train a network that estimates the probability of cognitive decline. By testing our approach on scans from the Alzheimer's Disease Neuroimaging Initiative, we show that models trained on our transformer-based features outperform those trained on handcrafted connectivity features by 15\%–26\% in F1-score.
For interpretability, we develop a simple yet effective method to identify brain regions whose fMRI-derived signal significantly impacted model predictions. The results identified a set of brain regions, some recognized for their early involvement in AD and others for their relative resilience to AD pathology.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
The use of resting state fMRI (rs-fMRI) to improve the diagnosis and treatment of neurodegenerative diseases has increased dramatically in recent years.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Public
- OpenReview：[https://openreview.net/forum?id=tAb8aUxuzd](https://openreview.net/forum?id=tAb8aUxuzd)

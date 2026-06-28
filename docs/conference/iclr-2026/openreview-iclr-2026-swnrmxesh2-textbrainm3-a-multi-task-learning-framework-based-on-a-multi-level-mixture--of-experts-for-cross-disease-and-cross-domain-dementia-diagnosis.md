---
title: "$\\text{BrainM}^3$: A Multi-Task Learning Framework Based on A Multi-Level Mixture- of-Experts for Cross-Disease and Cross-Domain Dementia Diagnosis"
authors: "Jing Zhang, Minheng Chen, Tong Chen, Xiaowei Yu, Chao Cao, Li Su, Tianming Liu, Dajiang Zhu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=SwNrMxesH2"
score: 0.6
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Accurate differential diagnosis of dementia subtypes is crucial due to their distinct clinical trajectories and treatment responses. However, rare subtypes such as Lewy Body Dementia (LBD) suffer from data scarcity, and domain shifts across institutions further hinder model generalization. To address these challenges, we propose $\text{BrainM}^3$, a Multi-task learning framework based on a Multi-level Mixture-of-Experts (MoE) architecture for cross-domain and cross-disease Brain modeling. Our model jointly learns Alzheimer’s disease (AD), mild cognitive impairment (MCI), and LBD diagnosis by disentangling disease-shared and specific brain connectivity features. At the domain level, a domain-aware Soft-MoE combined with adversarial training captures domain-invariant foundation brain representations, effectively mitigating scanner and cohort variability. At the task level, task-shared and task-specific Soft-MoEs enable mutual knowledge transfer and facilitate fine-grained pathological feature modeling. Experiments on multi-institutional datasets demonstrate that $\text{BrainM}^3$ consistently outperforms baselines under data heterogeneity. Moreover, our model offers interpretable insights into disease-relevant brain networks, offering potential clinical utility. Our work highlights the promise of an accurate and interpretable model for robust dementia diagnosis in real-world, cross-institution settings. Our code will be published based on acceptance.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Accurate differential diagnosis of dementia subtypes is crucial due to their distinct clinical trajectories and treatment responses.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=SwNrMxesH2](https://openreview.net/forum?id=SwNrMxesH2)

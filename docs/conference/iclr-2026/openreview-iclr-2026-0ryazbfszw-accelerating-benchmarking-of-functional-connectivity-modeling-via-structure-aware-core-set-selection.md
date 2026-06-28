---
title: Accelerating Benchmarking of Functional Connectivity Modeling via Structure-aware Core-set Selection
authors: "Ling Zhan, Zhen Li, Junjie Huang, Tao Jia"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=0RYazbfSzW"
score: 0.7
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Benchmarking the hundreds of functional connectivity (FC) modeling methods on large-scale fMRI datasets is critical for reproducible neuroscience. However, the combinatorial explosion of model–data pairings makes exhaustive evaluation computationally prohibitive, preventing such assessments from becoming a routine pre-analysis step. To break this bottleneck, we reframe the challenge of FC benchmarking by selecting a small, representative *core-set* whose sole purpose is to preserve the relative performance ranking of FC operators. 
We formalize this as a ranking-preserving subset selection problem and propose **S**tructure-aware **C**ontrastive **L**earning for **C**ore-set **S**election (**SCLCS**), a self-supervised framework to select these core-sets. **SCLCS** first uses an adaptive Transformer to learn each sample's unique FC structure. It then introduces a novel **S**tructural **P**erturbation **S**core (**SPS**) to quantify the stability of these learned structures during training, identifying samples that represent foundational connectivity archetypes. 
Finally, while **SCLCS** identifies stable samples via a top-$k$ ranking, we further introduce a **density-balanced sampling strategy** as a necessary correction to promote diversity, ensuring the final core-set is both structurally robust and distributionally representative. On the large-scale REST-meta-MDD dataset, **SCLCS** preserves the ground-truth model ranking with just 10% of the data, outperforming state-of-the-art (SOTA) core-set selection methods by up to 23.2% in ranking consistency (nDCG@k). To our knowledge, this is the first work to formalize core-set selection for FC operator benchmarking, thereby making large-scale operators comparisons a feasible and integral part of computational neuroscience. Code is publicly available on: [https://github.com/lzhan94swu/SCLCS](https://github.com/lzhan94swu/SCLCS)

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Benchmarking the hundreds of functional connectivity (FC) modeling methods on large-scale fMRI datasets is critical for reproducible neuroscience.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=0RYazbfSzW](https://openreview.net/forum?id=0RYazbfSzW)

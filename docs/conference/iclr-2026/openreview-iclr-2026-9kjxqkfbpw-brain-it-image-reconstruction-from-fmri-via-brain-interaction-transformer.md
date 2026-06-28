---
title: "Brain-IT: Image Reconstruction from fMRI via Brain-Interaction Transformer"
authors: "Roman Beliy, Amit Zalcher, Jonathan Kogman, navve wasserman, michal Irani"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=9KjXqkfbPw"
score: 0.9
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Reconstructing images seen by people from their fMRI brain recordings provides a non-invasive window into the human brain. Despite recent progress enabled by diffusion models, current methods often lack faithfulness to the actual seen images. We present ``Brain-IT'', a brain-inspired approach that addresses this challenge through a Brain Interaction Transformer (BIT), allowing effective interactions between clusters of functionally-similar brain-voxels. These functional-clusters are shared by all subjects, serving as building blocks for integrating information both within and across brains. All model components are shared by all clusters \& subjects, allowing efficient training with limited amount of data. To guide the image reconstruction, BIT predicts two complementary localized patch-level image features: (i) high-level semantic features which steer the diffusion model toward the correct semantic content of the image; and (ii) low-level  structural features which help to initialize the diffusion process with the correct coarse layout of the image. BIT's design enables direct flow of information from brain-voxel clusters to localized image features. Through these principles, our method achieves image reconstructions from fMRI that faithfully reconstruct the seen images, and surpass current SotA approaches both visually and by standard objective metrics.  Moreover, with only 1-hour of fMRI data from a new subject, we achieve results comparable to current methods trained on full 40-hour recordings.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Reconstructing images seen by people from their fMRI brain recordings provides a non-invasive window into the human brain.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Accepted
- OpenReview：[https://openreview.net/forum?id=9KjXqkfbPw](https://openreview.net/forum?id=9KjXqkfbPw)

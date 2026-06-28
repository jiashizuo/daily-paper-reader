---
title: Harmonizing Multi-Site Multi-Sequence Brain MRI via Semantic-Guided Conditional Diffusion
authors: "Mengqi Wu, Minhui Yu, Hongtu Zhu, Pew-Thian Yap, Mingxia Liu"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=bbUJcgBDWx"
score: 0.6
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 本文关注会议检索需求中的相关研究问题。
method: 方法细节请参考摘要与 OpenReview 原文。
result: 结果与实验结论请参考摘要与原文。
conclusion: 该论文与当前会议检索需求相关。
---

## Abstract
Training robust AI models for brain MRI analysis typically requires large datasets, prompting many studies to aggregate multi-site data. However, this introduces unwanted variations due to differences in scanners and/or acquisition protocols. These non-biological variations (known as site effects) can significantly compromise the performance and generalizability of downstream deep learning models. While image-level harmonization has emerged as a promising solution, existing methods frequently demand paired data (e.g., scans of the same subject at different sites) or costly encoder-decoder networks to disentangle anatomical content from predefined imaging style (e.g., intensity and contrast), which struggle to comprehensively capture diverse image styles. Moreover, existing methods cannot readily adapt across different MRI sequences, limiting their scalability. This paper proposes a semantic-guided conditional diffusion (SGCD) framework for unpaired 3D multi-sequence MRI harmonization. SGCD first trains a conditional diffusion model (CDM) to align multi-site, multi-sequence MRIs into a unified, sequence-specific domain, reducing global site-related variations. It then fine-tunes the CDM for target-specific harmonization using a style loss derived from BiomedCLIP, trained on medical imaging data. By capturing differences in disentangled semantic image style between the harmonized and target MRIs, this loss enables effective harmonization that preserves anatomical structure and does not require paired training data. We evaluate SGCD on 4,163 T1-/T2-weighted MRIs from three multi-site datasets, with results suggesting its superiority over several state-of-the-art methods across voxel-level comparison, downstream classification, and brain tissue segmentation tasks.

---

## 论文详细总结（自动生成）

### 1. 检索相关性
该论文由会议检索链路召回，具体相关性可结合检索需求和原文进一步判断。

### 2. 核心内容
Training robust AI models for brain MRI analysis typically requires large datasets, prompting many studies to aggregate multi-site data.

### 3. 对应检索需求
当前结果未记录具体命中的检索需求。

### 4. 来源与原文
- Source：ICLR-2026-Rejected-Public
- OpenReview：[https://openreview.net/forum?id=bbUJcgBDWx](https://openreview.net/forum?id=bbUJcgBDWx)

---
title: Precision Functional Parcellation of the Human Cortex via Rest-Task fMRI Fusion
title_zh: 通过静息态与任务态fMRI融合实现人类皮层精确功能分区
authors: "Zhi, D., Du, J., Whitfield-Gabrieli, S., Diedrichsen, J., Ge, T."
date: 2026-06-16
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.11.731643v2.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: fMRI脑分区，人工智能方法
tldr: 现有皮层分区方法多依赖静息态fMRI，忽略了任务态数据提供的功能特化信息。本文提出mRBM-HBP框架，通过多类别受限玻尔兹曼机融合静息态与任务态fMRI，实现高效灵活的个体和群体皮层分区。结果表明，融合分区在准确性和个体特异性上优于单一模态方法，尤其当个体数据有限时。该工作为精准脑功能图谱构建提供了新途径。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有皮层分区方法主要依赖静息态fMRI，未能充分利用任务态数据提供的互补功能特化信息，且难以整合异质数据集。
method: 提出mRBM-HBP，一种可扩展的层次贝叶斯框架，利用多类别受限玻尔兹曼机建模空间依赖，融合静息态与任务态fMRI进行皮层分区。
result: mRBM-HBP在降低计算成本的同时达到与现有方法相当的性能；融合分区提高了准确性和个体特异性，尤其在个体数据有限时。
conclusion: 融合静息态与任务态fMRI可增强皮层功能分区的精度，为个体化脑图谱构建提供有效方案。
---

## 摘要
个体特异性皮层分区能够表征常被群体图谱掩盖的脑网络组织，对基础神经科学和转化应用具有广泛意义。然而，现有方法主要依赖静息态fMRI，未能充分利用任务诱发数据——后者提供了关于功能特化的互补信息。这一局限性部分源于整合任务设计、样本量和皮层覆盖范围各异的异质性数据集的挑战。本文提出mRBM-HBP，一种可扩展的分层贝叶斯框架，通过引入多项受限玻尔兹曼机建模空间依赖性，实现了跨不同数据集对静息态和任务态fMRI的高效灵活整合，并推断出群体水平和个体水平的皮层分区。我们证明，mRBM-HBP在显著降低计算成本的同时，达到了与最先进的基于静息态的分区方法相当的性能。通过整合大规模任务态fMRI数据集，我们推导出基于任务的分区，并表明静息态和任务条件揭示了基本一致的宏观网络，而任务数据则提供了功能边界的状态特异性细化。此外，融合静息-任务的群体图谱提高了推断分区的准确性、可靠性和个体特异性，尤其在个体水平数据有限时。这些结果表明，整合静息态和任务态fMRI可增强脑功能组织的精确映射。

## Abstract
Individual-specific cortical parcellations enable the characterization of brain network organization that is often obscured by population-level atlases, with broad implications for both basic neuroscience and translational applications. However, existing methods rely primarily on resting-state fMRI and underutilize task-evoked data, which provide complementary information about functional specialization. This limitation partly reflects the challenge of integrating heterogeneous datasets that differ in task design, sample size, and cortical coverage. Here, we present mRBM-HBP, a scalable hierarchical Bayesian framework that incorporates a multinomial restricted Boltzmann machine to model spatial dependencies, enabling efficient and flexible integration of resting-state and task fMRI across diverse datasets and inference of both group-level and individual-level cortical parcellations. We show that mRBM-HBP achieves performance comparable to state-of-the-art resting-state-based parcellation methods while substantially reducing computational cost. By integrating large-scale task-fMRI datasets, we derive a task-based parcellation and demonstrate that resting-state and task conditions reveal largely consistent macroscopic networks, while task data provide state-specific refinements of functional boundaries. Moreover, a fused rest-task group-level atlas improves the accuracy, reliability, and individual specificity of inferred parcellations, particularly when individual-level data are limited. These results indicate that integrating resting-state and task fMRI enhances precision mapping of functional brain organization.
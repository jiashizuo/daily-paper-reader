---
title: Temporal structure of task engagement reorganizes infra-slow BOLD dynamics
title_zh: 任务参与的时间结构重组了超慢BOLD动力学
authors: "Ao, Y., Chi, M., Catal, Y., Huang, Z., Wang, C., Song, X. M., Liu, Z., Zuo, X.-N., Wang, Y., Northoff, G."
date: 2026-06-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.27.727996v2.full.pdf"
tags: ["query:fmri-brain-network"]
score: 6.0
evidence: 任务态fMRI，BOLD动力学，频率分析
tldr: 传统任务态fMRI主要关注BOLD信号的空间激活模式，但任务是否沿频率维度组织活动尚不清楚。本研究通过三个独立数据集发现，任务时序会系统性地重塑BOLD功率谱：周期性刺激在特定频率产生峰值，同时伴随内在慢波范围（0.01-0.04 Hz）功率降低，表明能量再分布而非简单叠加。这种频率特异性组织无法完全归因于GLM建模的激活，并能有效区分认知状态、预测反应时。Jansen-Rit模拟表明，该现象依赖于兴奋-抑制平衡和滤波增益。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究任务态fMRI中，时间结构化的任务是否通过重新分配BOLD功率谱而非简单叠加来组织大脑活动。
method: 分析三个独立fMRI数据集（视觉注意、听觉、视觉运动），采用频谱分析、GLM残差分析、Jansen-Rit模型模拟。
result: 任务时序在特定频率产生峰值，同时降低内在慢波功率；该效应跨模态泛化，且不能完全由GLM激活解释。
conclusion: 任务fMRI不仅揭示认知定位，还显示时间结构化任务如何跨时间尺度重新分配慢波动态。
---

## 摘要
基于任务的fMRI传统上通过BOLD激活的空间模式来表征认知参与，但任务是否也沿频率维度组织活动尚不清楚。本文测试了时间结构化的任务参与是否重塑超慢BOLD动力学，探究任务响应是简单地叠加在持续活动上，还是重新分配超慢频谱上的功率。在三个独立的fMRI数据集中，任务时序系统地重组了BOLD功率谱。在主要视觉注意数据集中，周期性刺激在0.083和0.125 Hz处产生了尖锐的刺激锁定峰值；关键的是，这些增益伴随着集中在主导内在超慢范围（0.01-0.04 Hz）内的功率降低，表明这是一种重新分配而非简单的局部增加。独立的听觉和视觉运动数据集在其各自的时间尺度上显示出类似的任务频率响应，表明这种重组跨模态和刺激频率具有普遍性。这些峰值在空间上与GLM导出的激活相关，但在移除GLM建模的响应后仍然存在，表明这种频率特异性组织不能完全还原为传统的任务诱发激活。这些特征在功能上具有信息性：任务施加的频率比更宽的频谱范围或GLM导出的特征更有效地区分认知状态、预测个体反应时间，并在不同运行中保留受试者特异性特征。最后，耦合到Balloon-Windkessel模型的Jansen-Rit模拟重现了这些峰值，表明它们的表达依赖于平衡的兴奋性、抑制性和滤波器增益机制，而非输入的简单放大。总之，这些发现表明任务fMRI不仅揭示了认知的定位，还揭示了时间结构化的参与如何跨时间尺度重新分配超慢动力学。

## Abstract
Task-based fMRI has traditionally characterized cognitive engagement through spatial patterns of BOLD activation, leaving open whether tasks also organize activity along the frequency dimension. Here we tested whether temporally structured task engagement reshapes infra-slow BOLD dynamics, asking whether task responses are simply superimposed onto ongoing activity or instead redistribute power across the infra-slow spectrum. Across three independent fMRI datasets, task timing systematically reorganized the BOLD power spectrum. In the main visual attention dataset, periodic stimulation produced sharp stimulus-locked peaks at 0.083 and 0.125 Hz; critically, these gains were matched by a reduction concentrated within the dominant intrinsic infra-slow range (0.01-0.04 Hz), indicating redistribution rather than a simple local increase. Independent auditory and visual-motion datasets showed analogous task-frequency responses at their respective timescales, indicating that this reorganization generalizes across modalities and stimulation frequencies. The peaks were spatially related to GLM-derived activation but persisted after removal of the GLM-modeled response, indicating that this frequency-specific organization is not fully reducible to conventional task-evoked activation. These features were functionally informative: task-imposed frequencies distinguished cognitive states, predicted individual reaction time, and preserved subject-specific signatures across runs more effectively than broader spectral ranges or GLM-derived features. Finally, Jansen-Rit simulations coupled to a Balloon-Windkessel model reproduced the peaks, showing that their expression depends on balanced excitatory, inhibitory, and filter-gain regimes rather than simple amplification of input. Together, these findings indicate that task-fMRI reveals not only where cognition is localized, but how temporally structured engagement redistributes infra-slow dynamics across timescales.
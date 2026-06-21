---
title: "EPICURUS: E-field-based spatial filtering procedure for an accurate estimation of local EEG activity evoked by Transcranial Magnetic Stimulation"
title_zh: EPICURUS：基于电场的空间滤波方法用于精确估计经颅磁刺激诱发的局部脑电活动
authors: "Corominas-Teruel, X., Mutanen, T., Leto, C., Colomina, M. T., Gallea, C., Bracco, M., Cabre, A. V."
date: 2026-06-15
pdf: "https://www.biorxiv.org/content/10.1101/2025.02.16.638512v2.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: EEG信号分析与计算方法
tldr: TMS-EEG中，从靶点分离局部诱发电位受远源污染。EPICURUS利用个体化MRI模拟TMS电场，定义局部活动空间范围，指导信号重建。仿真和真实数据表明，该方法保留早期局部成分，抑制后期非局部活动。该工具提升TMS-EEG时空分辨率，增强局部响应特异性。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有TMS-EEG方法难以可靠分离靶点局部诱发电位，受远源污染严重。
method: 基于个体化MRI模拟TMS电场，定义局部活动空间范围，指导空间滤波重建。
result: 仿真和人类数据中，EPICURUS保留早期局部活动，显著衰减后期非局部成分。
conclusion: EPICURUS通过电场建模提升EEG信号重建特异性，改善TMS诱发局部响应的时空分辨率。
---

## 摘要
背景经颅磁刺激与脑电图（TMS-EEG）的联合使用正越来越多地融入研究和临床方案中。然而，可靠地分离出由TMS在目标皮层部位局部诱发的、不受污染源影响的EEG反应仍然具有挑战性。方法本文介绍了一种新颖的TMS-EEG空间滤波方法EPICURUS，该方法利用基于个体化MRI的TMS感应电场（E场）模拟来定义局部诱发活动的空间范围。该方法指导从直接刺激部位重建EEG信号，同时最小化来自远处非目标源的串扰。结果在合成模拟和人类TMS-EEG数据集中，EPICURUS保留了早期潜伏期的TMS诱发局部活动，同时显著衰减了后期成分，这与抑制非局部活动一致。结论通过利用个体化电场建模的空间精度，EPICURUS可能增强EEG信号重建的特异性，为改善由TMS直接诱发的局部早期和晚期皮层局部反应的时空分辨率提供了一种有前景的工具。

## Abstract
BackgroundThe concurrent use of Transcranial magnetic stimulation and electroencephalography (TMS-EEG) is increasingly integrated into research and clinical protocols. However, a reliable isolation of EEG responses that are locally evoked by TMS at the targeted cortical sites independent from contaminating sources, remains challenging.

MethodsHere we introduce EPICURUS, a novel spatial filtering approach for TMS-EEG that uses individualized MRI-based simulations of the TMS-induced electric field (E-field) to define the spatial extent of locally evoked activity. This method guides the reconstruction of EEG signals originating from the direct stimulation site while minimizing crosstalk from distant, non-targeted sources.

ResultsIn synthetic simulations and a human TMS-EEG dataset, EPICURUS preserved early-latency TMS-evoked local activity while substantially attenuating later components, consistent with suppression of non-local activity.

ConclusionBy leveraging the spatial precision of individualized E-field modeling, EPICURUS may enhance the specificity of EEG signal reconstruction, offering a promising tool for improving the spatiotemporal resolution of local early and late cortical local responses directly elicited by TMS.
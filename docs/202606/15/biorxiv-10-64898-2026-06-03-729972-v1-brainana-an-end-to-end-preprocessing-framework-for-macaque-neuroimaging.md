---
title: "Brainana: an end-to-end preprocessing framework for macaque neuroimaging"
title_zh: Brainana：一种用于猕猴神经影像的端到端预处理框架
authors: "Liu, X., Zhang, Y., Yin, Z., Zhen, Z., Arcaro, M. J."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.03.729972v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 6.0
evidence: 猕猴神经影像预处理框架，包含深度学习模型
tldr: 猕猴MRI连接非侵入性系统神经科学与细胞环路机制，但预处理工具碎片化且难以适配非人灵长类数据。Brainana是一个自动化、BIDS兼容的预处理框架，集成结构/功能预处理、皮层表面重建、质量控制及图谱投影，并内置猕猴训练的深度学习模型。在23个站点、130只猴子的数据上验证，实现了跨扫描仪、协议和物种的准确解剖对应，可靠皮层表面重建及可重复的脑功能连接。该框架支持可重复、可扩展的猕猴MRI预处理，促进跨研究比较与多模态整合。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有猕猴MRI预处理工具碎片化、难以集成且不适应非人灵长类数据，亟需统一、可重复的自动化框架。
method: Brainana整合结构/功能预处理、皮层表面重建、质量控制与图谱投影，采用容器化部署和云端访问，内置猕猴训练的深度学习模型。
result: 在23个站点、130只猴子的数据上，实现跨扫描仪和物种的准确解剖对应、可靠皮层表面及可重复脑功能连接。
conclusion: Brainana提供可重复、可扩展的猕猴MRI预处理，支持跨研究比较与从神经元到网络的多模态整合。
---

## 摘要
猕猴MRI桥接了非侵入性系统神经科学与细胞及回路水平机制，但预处理仍然分散在难以整合、适应非人灵长类采集以及可重复部署的工具中。我们提出了Brainana，一个自动化的、兼容BIDS的猕猴神经影像预处理框架。Brainana在一个容器化包中整合了结构和功能预处理、皮层表面重建、质量控制、变换追踪和脑图谱投影，并为没有本地计算资源的用户提供云访问。它包含了针对猕猴训练的深度学习模型用于脑提取和组织分割，标准化可变采集的构象，以及针对猕猴神经解剖学的表面重建优化。在23个成像站点中，Brainana处理了涵盖不同扫描仪、协议、物种和分辨率的数据，在130只猴子中产生了准确的解剖对应、可靠的本地空间皮层表面、局部任务诱发的激活以及可重复的全脑静息态相关结构。Brainana实现了可重复、可扩展且易于访问的猕猴MRI预处理，支持跨研究比较和跨空间尺度（从神经元到网络）的多模态整合。

## Abstract
Macaque MRI bridges non-invasive systems neuroscience with cellular and circuit-level mechanisms, but preprocessing remains fragmented across tools that are difficult to integrate, adapt to non-human primate acquisitions, and deploy reproducibly. We present Brainana, an automated, BIDS-compatible preprocessing framework for macaque neuroimaging. Brainana integrates structural and functional preprocessing, cortical surface reconstruction, quality control, transform tracking, and atlas projection within a containerized package, with cloud access for users without local compute. It incorporates macaque-trained deep learning models for brain extraction and tissue segmentation, conformation to standardize variable acquisitions, and surface reconstruction optimizations for macaque neuroanatomy. Across 23 imaging sites, Brainana processed data spanning heterogeneous scanners, protocols, species, and resolutions, yielding accurate anatomical correspondence across 130 monkeys, reliable native-space cortical surfaces, localized task-evoked activations, and reproducible brain-wide resting-state correlation structure. Brainana enables reproducible, scalable, and accessible macaque MRI preprocessing that supports cross-study comparison and multimodal integration across spatial scales, from neurons to networks.
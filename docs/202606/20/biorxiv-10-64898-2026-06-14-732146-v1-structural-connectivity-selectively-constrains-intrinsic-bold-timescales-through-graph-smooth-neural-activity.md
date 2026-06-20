---
title: Structural Connectivity Selectively Constrains Intrinsic BOLD Timescales through Graph-Smooth Neural Activity
title_zh: 结构连接通过图平滑神经活动选择性约束内在BOLD时间尺度
authors: "Soltanian-Zadeh, H., Bashirgonbadi, A., salehi, m."
date: 2026-06-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.732146v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: 静息态fMRI，结构连接，图信号处理，BOLD时间尺度
tldr: 结构连接如何约束大脑BOLD信号的内在时间尺度尚不明确。本文采用图信号处理框架，将BOLD信号分解为结构耦合与结构解耦成分，发现结构耦合信号的时间尺度与连接强度正相关，而结构解耦信号关联较弱。结果表明网络拓扑通过图平滑活动选择性约束时间统计特性。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究结构连接如何约束BOLD信号内在时间尺度，并明确驱动该关系的信号成分。
method: 采用图信号处理，将BOLD信号分解为结构耦合与结构解耦成分，分析其时间尺度与连接强度的关系。
result: 结构耦合信号的时间尺度与连接强度正相关，结构解耦信号关联较弱，且慢速解耦活动优先出现在高级联合皮层。
conclusion: 网络拓扑通过图平滑活动选择性约束时间统计特性，为结构-时间尺度耦合提供图谱解释。
---

## 摘要
结构连接定义了支撑大规模脑动力学的网络架构，然而该网络如何约束其上信号的时间统计特性仍知之甚少。先前研究报道了静息态fMRI的内在时间尺度与结构连接强度之间的关联，但尚不清楚哪些信号成分主要驱动这种关系。本文采用图信号处理框架分析网络化脑信号的内在时间特性。将区域血氧水平依赖（BOLD）活动建模为结构连接组支持的图信号，并通过图谱滤波分解为低频（结构耦合）和高频（结构解耦）成分。利用来自人类连接组计划100名无关参与者的弥散MRI结构连接和静息态fMRI数据，通过相对低频功率量化内在时间尺度，并在控制区域体积的同时将其与节点结构连接强度相关联。我们发现，源自结构耦合信号的内在时间尺度在群体和个体间水平均与结构连接强度呈稳健正相关，而结构解耦信号则表现出显著较弱的耦合。值得注意的是，缓慢的结构解耦动态优先表达于高级联合皮层。图谱零模型进一步表明，这些效应关键依赖于结构网络的经验组织。综上，这些结果建立了结构-时间尺度耦合的图谱谱解释，表明网络拓扑选择性约束图平滑神经活动的时间统计特性。

## Abstract
Structural connectivity defines the network architecture supporting large scale brain dynamics, yet how this network constrains the temporal statistics of signals defined on it remains poorly understood. Prior work has reported associations between intrinsic timescales of resting-state fMRI and structural connectivity strength, but it is unclear which signal components primarily drive this relationship. Here, we adopt a graph signal processing framework to analyze intrinsic temporal properties of networked brain signals. Regional Blood Oxygenation Level Dependent (BOLD) activity is modeled as a graph signal supported on the structural connectome and decomposed via graph spectral filtering into low-frequency (structure-coupled) and high-frequency (structure-decoupled) components. Using diffusion MRI derived structural connectivity and resting-state fMRI from 100 unrelated participants of the Human Connectome Project, intrinsic timescales are quantified using relatively low-frequency power and related to node-wise structural connectivity strength while controlling for regional volume. We show that intrinsic timescales derived from structure-coupled signals exhibit robust positive associations with structural connectivity strength at both group and inter individual levels, whereas structure decoupled signals display substantially weaker coupling. Notably, slow structure decoupled dynamics are preferentially expressed in higher order association cortex. Graph spectral null models further demonstrate that these effects critically depend on the empirical organization of the structural network. Together, these results establish a graph spectral interpretation of structure timescale coupling, showing that network topology selectively constrains the temporal statistics of graph smooth neural activity.
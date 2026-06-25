---
title: Source-space precision charts for lifespan EEG connectomics
title_zh: 用于寿命脑电图连接组的源空间精度图
authors: "Jin, Y., Reyes, R. G., Wang, Y., Bringas Vega, M. L. L., Valdes-Sosa, P. A."
date: 2026-06-24
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.19.732815v1.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 7.0
evidence: EEG连接组学，源空间精度估计
tldr: 源空间脑电图连接组学面临信号混合和泄漏等挑战。本文提出JSPACE框架，通过频率域逆建模从头皮互谱估计源精度矩阵，结合稀疏频率平滑正则化和随机主动集优化。在模拟中降低了相干性膨胀，实现了高精度支持恢复。应用于1935名参与者数据，构建了全生命周期脑图谱，揭示了连续的非对角形态景观和与感觉运动-关联皮层组织对齐的delta频段梯度。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有源空间EEG连接组学方法难以从混合头皮信号中准确估计条件依赖的源交互，且缺乏适用于大规模队列的频域框架。
method: 提出JSPACE，一种频率域逆框架，通过后验源互谱估计、标准化精度拟合、稀疏频率平滑解剖正则化和随机主动集优化，从头皮互谱估计多频源精度矩阵。
result: "模拟中JSPACE降低了相干性膨胀，实现了最高精确支持恢复；在1935名参与者数据中构建了360个脑区和64,620个源对的全生命周期年龄-频率图谱，揭示了连续的非对角形态和与S-A组织对齐的delta梯度。"
conclusion: JSPACE为全生命周期EEG源精度图谱绘制提供了可扩展框架，揭示了脑连接随年龄和频率变化的连续形态，而非离散类别。
---

## 摘要
源空间脑电图连接组学旨在从由头部和导联场混合的传感器互谱中估计皮层发生器之间的相互作用。这一任务具有挑战性，因为边际源协方差或相干性可能保留泄漏、共同驱动和间接中介，而发育映射需要条件相互作用，这些相互作用可以在大型队列中重复估计。我们开发了JSPACE（联合源空间精度和互谱估计），这是一种频域逆框架，用于从头皮互谱中估计多频源精度矩阵。JSPACE将后验源互谱估计与标准化精度拟合、稀疏频率平滑解剖正则化、随机主动集优化和后选择重拟合相结合。在模拟中，其优势具有目标特异性：JSPACE减少了相干性膨胀，并在前向神经质量基准中实现了最低的虚部相干性和峰值频率误差。当真实精度矩阵已知时，它实现了最高的精确、边折叠和泄漏感知支持恢复。我们将JSPACE应用于来自1935名年龄在5.17至97.00岁之间的参与者的HarMNqEEG互谱数据，涵盖47个频率区间和360个皮层分区。仿射不变Karcher切向调和将受试者水平估计重建为包含360个对角和64,620个源对年龄-频率曲面的寿命图谱。该图谱揭示了一个连续的非对角形态景观，其中年龄方向、频率偏好和相互作用强度作为重叠轴而非离散边类别变化。相比之下，对角精度曲面在各分区中共享一个保守的α波谷形态。代表性的真实精度路径捕获了后顶叶、感觉运动-顶叶、额极和视觉-顶叶模式。从儿童期到成年晚期，δ频带梯度与皮层的感觉运动-联合组织适度对齐，在最稀疏的年龄范围内存在候选的最老-old偏差。JSPACE为寿命脑电图中的频率分辨源精度绘图提供了一个可扩展的框架。

## Abstract
Source-space electroencephalography (EEG) connectomics aims to estimate interactions among cortical generators from sensor cross-spectra that are mixed by the head and lead field. This task is difficult because marginal source covariance or coherence can retain leakage, common drive and indirect mediation, whereas developmental mapping requires conditional interactions that can be estimated repeatedly across large cohorts. We developed JSPACE (Joint Source-space Precision And Cross-spectral Estimation), a frequency-domain inverse framework for estimating multi-frequency source precision matrices from scalp cross-spectra. JSPACE couples posterior source cross-spectral estimation with standardized precision fitting, sparse frequency-smooth anatomical regularization, stochastic active-set optimization and post-selection refitting. In simulations, its advantage was target-specific: JSPACE reduced coherence inflation and achieved the lowest imaginary-coherence and peak-frequency errors in a forward neural-mass benchmark. When the ground-truth precision matrix was known, it achieved the highest exact, edge-collapsed and leakage-aware support recovery. We applied JSPACE to HarMNqEEG cross-spectral data from 1,935 participants aged 5.17--97.00 years, spanning 47 frequency bins and 360 cortical parcels. Affine-invariant Karcher tangent harmonization reconstructed subject-level estimates into a lifespan atlas of 360 diagonal and 64,620 source-pair age-frequency surfaces. The atlas revealed a continuous off-diagonal morphology landscape, in which age direction, frequency preference and interaction strength varied as overlapping axes rather than discrete edge classes. In contrast, diagonal precision surfaces shared a conserved alpha-trough morphology across parcels. Representative real-precision pathways captured posterior parietal, sensorimotor-parietal, frontopolar and visual-parietal motifs. Delta-band gradients were moderately aligned with the sensorimotor-association (S-A) organization of cortex from childhood through late adulthood, with a candidate oldest-old deviation in the sparsest age range. JSPACE provides a scalable framework for frequency-resolved source-precision charting in lifespan EEG.
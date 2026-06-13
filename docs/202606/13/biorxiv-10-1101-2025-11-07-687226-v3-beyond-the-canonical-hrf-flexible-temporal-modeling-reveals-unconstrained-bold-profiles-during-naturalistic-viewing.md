---
title: "Beyond the Canonical HRF: Flexible Temporal Modeling Reveals Unconstrained BOLD Profiles During Naturalistic Viewing"
title_zh: 超越经典HRF：灵活的时间建模揭示自然观看中无约束的BOLD特征
authors: "Di, X., Hanna, G. B., Biswal, B. B."
date: 2026-06-10
pdf: "https://www.biorxiv.org/content/10.1101/2025.11.07.687226v3.full.pdf"
tags: ["query:fmri-brain-network"]
score: 7.0
evidence: fMRI功能连接建模中的灵活时间分析
tldr: 自然刺激fMRI研究中，标准HRF模型无法准确捕捉视觉、听觉、瞳孔及心理理论等特征与BOLD信号间的复杂时间延迟。本文通过互相关和有限脉冲响应反卷积分析三个电影观看数据集，发现标准HRF对基本感觉特征有效，但会引入系统性的时间错位，尤其对固有延迟信号产生“双重延迟”。无约束FIR模型揭示了皮层区域间的时间层级结构，强调灵活、可靠性检验的时间建模对自然观看研究的重要性。
source: biorxiv
selection_source: fresh_fetch
motivation: 自然刺激fMRI中，标准HRF模型无法准确对齐多模态特征与BOLD信号的时间延迟，导致系统性偏差。
method: 采用互相关和有限脉冲响应反卷积，分析三个电影观看数据集，比较标准HRF与无约束模型对视觉、听觉、瞳孔及心理理论特征的拟合。
result: 标准HRF对基本感觉特征有效，但对固有延迟信号（如瞳孔、心理理论）引入“双重延迟”；无约束FIR模型揭示皮层区域间的时间层级结构。
conclusion: 自然刺激研究需采用灵活、可靠性检验的时间建模方法，以准确映射复杂处理时间尺度。
---

## 摘要
自然刺激（如电影和叙事）越来越多地被用于认知神经科学，以将认知和情感过程映射到功能性磁共振成像（fMRI）测量的脑活动上。从电影中提取的特征涵盖多个层次，从计算视觉和听觉输入到生理信号和主观评分。然而，这些特征与血氧水平依赖（BOLD）反应之间的时间对齐差异很大，常用的带有时间导数的经典血流动力学响应函数（HRF）可能无法充分捕捉这些延迟。在本研究中，我们分析了三个电影观看数据集，使用互相关和有限脉冲响应（FIR）反卷积来映射视觉、听觉、瞳孔和心理理论（ToM）特征在全脑的无约束时间动态。我们的结果表明，虽然经典HRF能有效捕捉基本感觉特征，但它会为固有延迟信号引入系统性错位。由于生理标记（瞳孔大小）和受试者报告（ToM）本质上滞后于潜在的神经事件，标准HRF卷积过度补偿了它们的生物延迟，引入了冗余的相位失配或“双重延迟”。此外，我们的无约束FIR模型揭示了皮层上不同的区域间时间层级。认识到现实世界刺激的固有共线性，这些估计的特征反映了自然处理中捆绑的多维动态，而非完全孤立的特征效应。最终，这些发现强调了采用灵活且经过可靠性测试的时间建模的必要性，以准确映射自然观看中涉及的复杂处理时间尺度。

## Abstract
Naturalistic stimuli, such as movies and narratives, are increasingly used in cognitive neuroscience to map cognitive and affective processes onto brain activity measured with functional MRI (fMRI). Features extracted from movies span multiple levels, from computational visual and auditory inputs to physiological signals and subjective ratings. However, the temporal alignment between these features and the blood-oxygen-level-dependent (BOLD) response varies considerably, and the commonly used canonical hemodynamic response function (HRF) with temporal derivatives may not adequately capture these delays. In this study, we analyzed three movie-watching datasets using cross-correlation and finite impulse response (FIR) deconvolution to map the unconstrained temporal dynamics of visual, auditory, pupillary, and Theory of Mind (ToM) features across the brain. Our results demonstrate that while the canonical HRF effectively captures basic sensory features, it introduces systematic misalignments for inherently delayed signals. Because physiological markers (pupil size) and subject reports (ToM) intrinsically lag the underlying neural events, standard HRF convolution overcompensates for their biological latency, introducing a redundant phase mismatch or "double-delay." Furthermore, our unconstrained FIR models revealed distinct inter-regional temporal hierarchies across the cortex. Recognizing the inherent collinearity of real-world stimuli, these estimated profiles capture the bundled, multi-dimensional dynamics of naturalistic processing rather than perfectly isolated feature effects. Ultimately, these findings highlight the necessity of flexible, reliability-tested temporal modeling to accurately map the complex processing timescales engaged during naturalistic viewing.
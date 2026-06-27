---
title: BAYESIAN STATE-SPACE MODEL FOR JOINT INFERENCE OF OSCILLATORY DYNAMICS AND POINT-PROCESS COUPLING
title_zh: 贝叶斯状态空间模型用于振荡动力学与点过程耦合的联合推断
authors: "Zheng, B., Brincat, S., Donoghue, J., Miller, E., Brown, E."
date: 2026-06-19
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.15.732402v1.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: EEG信号分析，贝叶斯状态空间模型用于神经振荡
tldr: 针对传统方法独立估计LFP频谱与尖峰-场耦合的问题，提出贝叶斯状态空间模型Joint SSMT，联合推断LFP时频谱和耦合强度。模型将窄带LFP视为连续时间潜过程，通过伯努利-逻辑斯蒂模型链接尖峰序列。仿真准确恢复耦合强度并去噪，在丙泊酚麻醉数据中识别出特定慢振荡频率耦合，优于经典方法。扩展至试验结构数据，揭示海马和前额叶皮层的频率特异性耦合，并提供不确定性量化。
source: biorxiv
selection_source: fresh_fetch
motivation: 经典方法如SFC和PLV独立估计LFP频谱与尖峰-场耦合，忽略了尖峰时序对LFP时频结构的约束。
method: 构建贝叶斯状态空间模型，将窄带LFP视为连续时间潜过程，通过伯努利-逻辑斯蒂模型将尖峰序列与复频谱状态关联。
result: 仿真中准确恢复耦合强度并去噪；丙泊酚麻醉数据识别出特定慢振荡频率耦合；学习任务数据揭示海马和前额叶皮层的频率特异性耦合。
conclusion: Joint SSMT提供比PLV和SFC更频率特异的耦合估计，并具有原理性不确定性量化。
---

## 摘要
在一系列行为和生理条件下，尖峰时间和局部场电位（LFP）振荡在特定频带内表现出相位耦合。经典度量如尖峰-场相干性（SFC）和相位锁定值（PLV）量化了这种耦合，但独立于尖峰时序估计LFP频谱。我们提出了Joint SSMT，一种贝叶斯状态空间框架，联合推断LFP频谱图和尖峰-场耦合强度。该模型将窄带LFP活动视为在连续时间中演化的潜在过程，通过伯努利-逻辑斯蒂模型将尖峰序列与复频谱状态相关联。在模拟中，Joint SSMT准确恢复了耦合强度，去除了频谱图的噪声，并利用尖峰时序解析LFP中的精细时间结构。应用于丙泊酚麻醉数据时，该模型识别出特定慢振荡频率处的耦合，而SFC和PLV仅报告宽频低频耦合。我们将Joint SSMT扩展到试验结构实验，并应用于联想学习任务中的灵长类记录，揭示了海马和前额叶皮层中的频率特异性耦合。我们还推导了SFC和PLV作为生成模型参数函数的闭式表达式。在模拟和两个灵长类数据集中，Joint SSMT提供了比经典PLV和SFC更具频率特异性的耦合估计，并具有原则性的不确定性量化。

## Abstract
Under a range of behavioral and physiological conditions, spike times and local field potential (LFP) oscillations exhibit phase coupling within specific frequency bands. Classical measures such as spike-field coherence (SFC) and the phase-locking value (PLV) quantify this coupling but estimate the LFP spectrum independently of spike timing. We introduce Joint SSMT, a Bayesian state-space framework that jointly infers LFP spectrograms and spike-field coupling strength. The model treats narrowband LFP activity as a latent process evolving in continuous time, with spike trains linked to the complex spectral state through a Bernoulli-logistic model. In simulations, Joint SSMT accurately recovers coupling strength, denoises the spectrogram, and uses spike timing to resolve fine temporal structure in the LFP. Applied to propofol anesthesia data, the model identifies coupling at a specific slow-oscillation frequency where SFC and PLV report only broad low-frequency coupling. We extend Joint SSMT to trial-structured experiments and apply it to primate recordings during an associative learning task, revealing frequency-specific coupling in hippocampus and prefrontal cortex. We also derive closed-form expressions for SFC and PLV as functions of the generative model parameters. Across simulations and two primate datasets, Joint SSMT provides more frequency-specific coupling estimates with principled uncertainty quantification than classical PLV and SFC.
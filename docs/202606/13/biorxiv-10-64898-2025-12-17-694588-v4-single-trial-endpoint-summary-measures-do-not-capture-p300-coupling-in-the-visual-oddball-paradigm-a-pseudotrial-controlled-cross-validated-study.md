---
title: "Single-trial Endpoint-summary Measures do not Capture P300 Coupling in the Visual Oddball Paradigm: a Pseudotrial-controlled, Cross-validated Study"
title_zh: 单次试验终点汇总测量无法捕捉视觉 oddball 范式中的 P300 耦合：一项伪试验控制、交叉验证研究
authors: "Biber, E."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.64898/2025.12.17.694588v4.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: EEG单试次分析与信号复杂度度量
tldr: 单试次ERP分析中，早期窗口的端点汇总指标（如平均幅值、复杂度）常被认为与P300幅值耦合。本研究通过伪试次控制与交叉验证，发现这种耦合主要源于EEG时间自相关而非刺激锁时加工。复杂度指标虽存在个体特异性耦合，但在群体水平上相互抵消。结果表明，端点汇总指标无法捕捉真实的P300耦合，需采用对个体差异敏感的分析方法。
source: biorxiv
selection_source: fresh_fetch
motivation: 验证单试次ERP分析中早期窗口端点汇总指标与P300幅值的耦合是否源于EEG时间自相关，而非刺激锁时加工。
method: 分析ERP CORE视觉P3数据集，将早期窗口（0-150ms）各指标与Pz处P300幅值建模，并在同一记录的随机延迟伪试次上重新估计模型，以方向变化为诊断标准。
result: 同通道耦合在伪试次替代后不变且存在于所有电极，表明是试次内时间连续性；复杂度指标群体耦合近零但个体方向分裂。独立数据集复现了结果。
conclusion: 端点汇总指标无法在控制自相关后捕捉群体水平的P300耦合，复杂度指标存在个体特异性耦合，需采用对个体差异敏感的分析设计。
---

## 摘要
事件相关电位的单次试验分析有望获取平均处理所丢弃的逐次试验变异性，许多研究报告了早期窗口的汇总测量与后期成分振幅的协变关系。然而，这种耦合可能源于连续脑电的时间自相关，而非刺激锁定的处理过程。我们探究了传统的终点汇总测量家族——包括平均振幅、均方根、方差、信号复杂度测量（排列熵、样本熵、Lempel-Ziv 复杂度）以及 Hjorth 参数——在控制自相关后，是否能在主动视觉 oddball 范式中捕捉到关于 P300 振幅的真实刺激锁定信息。通过分析 ERP CORE 视觉 P3 数据集（N=27；1084 次试验，213 次靶刺激和 871 次标准刺激，以实验条件作为协变量），我们将每个早期窗口（0-150 毫秒）测量与 Pz 处的 P300 振幅相关联，并在同一记录中随机延迟的伪试验上重新估计每个模型；诊断标准是这种替换下变化的方向，而非原始效应量。跨通道的振幅和能量耦合在伪试验替换后增强，表明依赖于背景结构。大的同通道耦合（R² ≈ 0.31）在替换后保持不变，且出现在每个电极（包括眼电通道），表明这是试验内的一般时间连续性，而非 P300 特异性过程。复杂度测量携带接近零的群体水平耦合，但每个被试的斜率方向分裂且较大。一个独立数据集（不同实验室和硬件；相同范式）重复了同通道连续性结果（N=90 名参与者；83 名用于伪试验拟合）以及复杂度测量中方向分裂的个体模式。因此，一旦控制自相关，终点汇总测量无法捕捉一致的群体水平 P300 耦合；复杂度家族携带个体特异性耦合，在群体水平上相互抵消，这促使采用对个体差异敏感的分析设计。

## Abstract
Single-trial analysis of event-related potentials promises access to the trial-to-trial variability that averaging discards, and many studies report early-window summary measures that covary with later component amplitudes. Such couplings can, however, arise from the temporal autocorrelation of continuous EEG rather than from stimulus-locked processing. We asked whether the conventional family of endpoint-summary measures those that collapse a time window to a single value, including mean amplitude, root-mean-square, variance, signal-complexity measures (permutation entropy, sample entropy, Lempel-Ziv complexity), and Hjorth parameters, captures genuine stimulus-locked information about P300 amplitude in the active visual oddball once autocorrelation is controlled. Analyzing the ERP CORE visual P3 dataset (N = 27; 1,084 trials, 213 target and 871 standard, with experimental condition as a covariate), we related each early-window (0-150 ms) measure to P300 amplitude at Pz and re-estimated every model on pseudotrials placed at random latencies in the same recording; the direction of change under this substitution, not the raw effect size, is the diagnostic. Cross-channel amplitude and energy couplings strengthened under pseudotrial substitution, indicating dependence on background structure. Large same-channel coupling (R2 {approx} 0.31) was unchanged under substitution and present at every electrode, including the eye channels, identifying it as general within-trial temporal continuity rather than a P300-specific process. Complexity measures carried near-zero population-level coupling but large, directionally split per-subject slopes. An independent dataset (different laboratory and hardware; same paradigm) reproduced the same-channel continuity result (N = 90 participants; 83 for pseudotrial fits) and the directionally split per-subject pattern across complexity measures. Endpoint-summary measures therefore do not capture consistent population-level P300 coupling once autocorrelation is controlled; the complexity family carries person-specific coupling that cancels at the population level, motivating analytic designs sensitive to individual differences.
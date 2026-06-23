---
title: Next-Generation Neural Mass Models Reproduce Features of Speech Processing
title_zh: 下一代神经群体模型再现语音处理特征
authors: "Shannon, A. J., Barton, D. A. W., Homer, M., Houghton, C. J."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.1101/2025.10.20.683434v2.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: EEG分析，神经质量模型，语音处理
tldr: 神经语音追踪是语音处理的关键步骤，涉及相位重置和诱发响应两种假说。本文使用生物物理的下一代神经群模型，结合现象学模型作为基线，模拟了语音追踪特征。模型通过阈值相位重置机制，在连续语音包络中产生跨频率嵌套振荡，复现了实验观察到的双峰相干性。结果表明，该模型为皮层振荡动力学与语音追踪认知计算之间提供了机制性桥梁。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有现象学模型虽能模拟语音追踪，但缺乏对底层皮层电路机制的理解，需要生物物理模型来揭示神经群动态如何实现语音处理。
method: 采用下一代神经群模型，与相位重置和诱发响应现象学模型对比，通过四项测试（EEG实验复现、相位集中度、音节率效应、事件间相位相干性）评估模型性能。
result: 所有模型均复现了锐度调谐的节律性语音追踪，但神经群模型通过阈值相位重置机制，在连续语音包络中产生跨频率嵌套振荡，匹配实验中的双峰相干性特征。
conclusion: 生物物理神经群模型为皮层振荡动态与语音追踪认知计算提供了机制性解释，揭示了峰值率事件表征如何从连续声学输入中产生。
---

## 摘要
将语音分割成音节是神经语音处理的关键步骤，它依赖于神经活动与语音节奏结构的对齐。两种相互竞争的假说解释了这种“神经语音跟踪”：相位重置和诱发反应。虽然这些假说的现象学建模已取得成功，但我们仍缺乏对底层皮层回路的理解。为了探究这些机制，我们评估了一个生物物理的下一代神经群体模型能否再现神经语音跟踪的若干特征，并以竞争假说的现象学模型作为算法基线。我们通过四项测试研究模型的动态：在计算机上重现一项脑电图实验（该实验发现跟踪强度与音素清晰度之间的相关性）、计算相位集中度指标、测试不同音节速率的影响，以及评估音素起始间的跨事件相位相干性。尽管我们研究的所有模型都再现了清晰度调谐的节奏性语音跟踪，但诱发模型需要预处理的声学边缘脉冲刺激。我们证明，神经群体模型执行了由连续语音包络中清晰起始触发的阈值化相位重置。这产生了跨频率嵌套振荡，在跨事件相位相干性中定性地匹配了实验观察到的双峰特征。我们的结果表明，生物物理神经群体模型在皮层群体的通用振荡动力学与语音跟踪的认知计算之间提供了机制性桥梁。实际上，神经群体模型的非线性动力学解释了听觉皮层活动中的峰值率事件表征如何响应连续声学输入而产生。

## Abstract
Segregation of speech into syllables is a key step in neural speech processing. It relies on the alignment of neural activity with the rhythmic structure of speech. Two competing hypotheses explain this `neural speech tracking', phase-resetting and evoked responses. While phenomenological modelling of these hypotheses has been successful, we still lack understanding of the underlying cortical circuits. To investigate these mechanisms, we evaluate whether a biophysical next-generation neural mass model can reproduce several features of neural speech tracking, using phenomenological models of the competing hypotheses as algorithmic baselines. We investigate the models' dynamics with four tests: recreating in-silico an EEG experiment that identified a correlation between tracking strength and phoneme sharpness, computing the Phase Concentration Metric, testing the effect of varying syllabic rates, and evaluating the Inter Event Phase Coherence across phoneme onsets. While all of the models that we study reproduce the sharpness-tuned rhythmic speech tracking, the evoked model requires a pre-processed acoustic edge impulse stimulus. We demonstrate that the neural mass model is performing thresholded phase-resetting triggered by sharp onsets in the continuous speech envelope. This produces cross-frequency nested oscillations that qualitatively match an experimentally-observed dual-peak signature in the Inter Event Phase Coherence. Our results indicate that the biophysical neural mass model provides a mechanistic bridge between generic oscillatory dynamics in cortical populations and the cognitive computations of speech tracking. Indeed, the nonlinear dynamics of the neural mass model offer an explanation for how peak-rate event representations in auditory cortex activity arise in response to continuous acoustic input.
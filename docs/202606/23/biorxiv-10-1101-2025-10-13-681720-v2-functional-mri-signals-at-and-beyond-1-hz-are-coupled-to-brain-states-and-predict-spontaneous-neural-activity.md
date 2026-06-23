---
title: Functional MRI signals at and beyond 1 Hz are coupled to brain states and predict spontaneous neural activity
title_zh: 1 Hz及以上频率的功能磁共振信号与脑状态耦合并预测自发神经活动
authors: "Jacob, L. P. L., Bailes, S. M., Williams, S. D., Stringer, C., Rosen, B. R., Polimeni, J. R., Lewis, L. D."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.1101/2025.10.13.681720v2.full.pdf"
tags: ["query:fmri-brain-network"]
score: 7.0
evidence: fMRI功能连接与脑状态
tldr: 快速fMRI（TR=378ms）信号中高达1.3Hz的成分与睡眠-觉醒状态及EEG节律（α、δ波）相关。通过机器学习，可从高频fMRI信号解码个体EEG功率，表明这些信号包含可泛化的神经耦合信息，为利用快速fMRI精确量化自发神经活动提供了依据。
source: biorxiv
selection_source: fresh_fetch
motivation: 快速fMRI的高时间分辨率潜力尚未被充分挖掘，其高频信号与自发神经活动的关系不明，限制了从快速数据推断神经过程的能力。
method: 采集27名被试的快速fMRI（TR=378ms）与同步EEG，分析不同频率fMRI功率在睡眠与清醒状态下的差异，并利用机器学习解码EEG节律功率。
result: NREM睡眠期间fMRI功率在高达1.3Hz频率上增加，且高频fMRI功率与α、δ波相关；解码模型能在留出被试中预测EEG功率。
conclusion: 高频fMRI信号与动态变化的脑状态耦合，快速fMRI可实现对自发神经活动的时间精确量化。
---

## 摘要
技术进步使得高时间分辨率的功能磁共振成像（fMRI）采集成为可能，能够在短短几百毫秒内实现全脑成像。然而，在静息状态下，快速血流动力学信号与自发神经活动之间的关系尚不明确，这限制了我们从这些快速数据中推断神经过程的能力。我们假设高频fMRI信号与警觉状态相关的自发神经活动有关，并且这些高频信号可用于推断由脑电图（EEG）神经节律指示的神经活动的动态变化。通过使用快速fMRI（重复时间TR=378毫秒）和同步EEG对27名在睡眠和清醒之间漂移的人类受试者进行研究，我们发现，在非快速眼动（NREM）睡眠期间（与清醒相比），频率高达1.3 Hz的fMRI功率增加。高频fMRI功率还与经典的警觉相关EEG节律（α和δ）相关，其时空互相关模式既反映了共享的警觉动态，也反映了节律特异性特征。通过机器学习，我们发现，在训练集中未包含的受试者中，可以从高频fMRI信号解码出EEG α和δ功率，这表明fMRI信号的高频成分包含足够稳健的神经耦合信息，能够跨个体泛化。这些结果揭示了高频fMRI信号与动态变化的脑状态耦合，并且快速fMRI能够实现自发神经活动的时间精确量化。

## Abstract
Technological advances have enabled fMRI acquisition with high temporal resolution, enabling brainwide imaging in just a few hundreds of milliseconds. However, the relationship between fast hemodynamic signals and spontaneous neural activity in the resting state is not yet well understood, limiting our ability to infer neural processes from these fast data. We hypothesized that high-frequency fMRI signals are linked to spontaneous neural activity tied to vigilance states, and that these high-frequency signals could be used to infer the dynamic variations in neuronal activity indexed by EEG neural rhythms. Using fast fMRI (TR=378 ms) and simultaneous EEG in 27 humans drifting between sleep and wakefulness, we found that fMRI power increased during NREM sleep (compared to wakefulness) in frequencies up to 1.3 Hz. High-frequency fMRI power was also correlated to canonical arousal-linked EEG rhythms (alpha and delta), with spatiotemporal cross-correlation patterns reflecting both shared arousal dynamics and rhythm-specific signatures. Using machine learning, we found that EEG alpha and delta power can be decoded from high-frequency fMRI signals in subjects held-out from the training set, showing that the high-frequency components of fMRI signals contain neurally-coupled information robust enough to generalize across individuals. These results reveal that high-frequency fMRI signals are coupled to dynamically varying brain states, and that fast fMRI allows for temporally precise quantification of spontaneous neural activity.
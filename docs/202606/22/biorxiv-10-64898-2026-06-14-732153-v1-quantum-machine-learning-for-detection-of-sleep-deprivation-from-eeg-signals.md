---
title: Quantum machine learning for detection of sleep deprivation from EEG signals
title_zh: 基于量子机器学习的脑电图信号睡眠剥夺检测
authors: "Sarma-Sarkar, P., Saini, R., Roy, P. P."
date: 2026-06-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.732153v1.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 7.0
evidence: 使用机器学习进行自动化EEG分析
tldr: "针对印度约50%人口受睡眠障碍影响的问题，本研究利用静息态EEG信号，通过提取频谱功率、Hjorth参数和功能连接等特征，采用量子支持向量机和混合量子神经网络检测睡眠剥夺。混合量子神经网络在epoch级和subject级评估中分别达到96.88%和81.25%的准确率，优于此前报道的结果，展示了量子机器学习在EEG分析中的潜力。"
source: biorxiv
selection_source: fresh_fetch
motivation: 睡眠剥夺影响认知和健康，EEG可客观捕捉神经变化，但传统机器学习方法性能有限，需探索更高效的检测技术。
method: 提取EEG频谱功率、频带比、Hjorth参数和功能连接特征，编码为量子态构建量子核，使用QSVM和HQNN进行分类。
result: "HQNN在epoch级和subject级准确率达96.88%和81.25%，QSVM为93.75%和75.00%，均优于此前最佳结果。"
conclusion: 量子机器学习在EEG睡眠剥夺检测中表现优异，具有实际生物医学应用的潜力。
---

## 摘要
据估计，印度约有50%的人口存在睡眠相关障碍。睡眠剥夺是一种普遍状况，会对认知表现、神经功能和整体健康产生不利影响。脑电图（EEG）提供了一种客观捕捉与睡眠缺失相关的神经变化的手段，因此非常适合用于自动化检测框架。在本研究中，我们探索了量子支持向量机和混合量子神经网络在利用静息态脑电图信号分类睡眠剥夺与充分休息状态中的应用。

我们采用了一个全面的特征提取流程，包括频谱带功率、频带比率、Hjorth参数和功能连接性度量。这些特征随后被编码为量子态以构建量子核，并用于分类。模型性能在epoch级和受试者级数据划分方案下进行评估。

混合量子神经网络（HQNN）在两种评估设置下均取得了最高性能，在epoch级达到96.88%的准确率，在受试者级达到81.25%的准确率。QSVM模型在epoch级和受试者级评估中分别达到93.75%和75.00%的准确率。在受试者级和epoch级评估中，HQNN优于先前报道的结果（68.23%和95.72%）。总体而言，这些发现凸显了量子机器学习作为基于脑电图的睡眠剥夺检测的一种有竞争力方法的潜力，并对现实世界的生物医学应用具有前景。

## Abstract
Approximately 50% of the population in India is estimated to experience sleep-related disorders. Sleep deprivation is a prevalent condition that adversely impacts cognitive performance, neural functioning, and overall health. Electroencephalography (EEG) offers an objective means of capturing neural alterations associated with sleep loss, making it well-suited for automated detection frameworks. In this study, we explore the application of a Quantum Support Vector Machine and Hybrid Quantum Neural Networks to classify sleep-deprived and well-rested states using resting-state EEG signals.

A comprehensive feature extraction pipeline is employed, incorporating spectral band power, band ratios, Hjorth parameters, and functional connectivity measures. These features are subsequently encoded into quantum states to construct a quantum kernel, which is then utilized for classification. Model performance is evaluated under both epoch-level and subject-level data partitioning schemes.

The Hybrid Quantum Neural Network (HQNN) achieves the highest performance across both evaluation settings, attaining an accuracy of 96.88% at the epoch level and 81.25% at the subject level. The QSVM model achieves accuracies of 93.75% and 75.00% for epoch-level and subject-level evaluations, respectively. At subject-level and epoch -level evaluation, HQNN outperforms previously reported results (68.23% and 95.72%). Overall, these findings highlight the potential of quantum machine learning as a competitive approach for EEG-based sleep deprivation detection, with promising implications for real-world biomedical applications.
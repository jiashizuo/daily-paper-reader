---
title: "Source-space EEG functional connectivity and prediction of cognition in Parkinsons disease: No added benefit of individualized head models over standard templates"
title_zh: 源空间脑电图功能连接与帕金森病认知预测：个体化头模型相比标准模板无额外优势
authors: "Tetereva, A., Hall-McMaster, G., Slater, N., Harris, A., Shoorangiz, R., Le Heron, C., Keenan, R., Myall, D., Pitcher, T., Kirk, I., Meissner, W., Anderson, T., Melzer, T., Pat, N., Dalrymple-Alford, J."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.07.723671v2.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: 源空间EEG功能连接用于帕金森病认知预测
tldr: 帕金森病认知衰退缺乏便捷生物标志物。本研究比较了个性化MRI头模型与标准模板在源空间EEG功能连接预测认知中的效果。结果发现theta、alpha、beta频段连接预测效果最佳，且两种头模型性能相当。表明标准模板足以支持临床可及的EEG生物标志物。
source: biorxiv
selection_source: fresh_fetch
motivation: 评估个性化头模型是否比标准模板更能提升源空间EEG功能连接对帕金森病认知的预测能力。
method: 分析136名PD患者和51名对照的静息态EEG，使用HCP-MMP1图谱提取AEC和dwPLI，结合六种机器学习回归算法进行嵌套交叉验证。
result: theta、alpha、beta频段功能连接预测认知最佳（最大R²=0.170），标准与个性化头模型预测性能几乎一致。
conclusion: 标准模板头模型足以用于源空间EEG功能连接预测帕金森病认知，支持临床可及的生物标志物开发。
---

## 摘要
引言：认知衰退是帕金森病（PD）的主要非运动特征，但可靠且易获取的生物标志物仍然有限。静息态脑电图（EEG）因其低成本、便携且适合重复评估而成为有前景的候选方法。近年来越来越多的研究关注源空间功能连接（FC）用于认知预测。然而，基于个体化MRI头模型与基于标准模板模型的源建模对认知预测的影响尚不清楚。方法：为比较这两种源空间EEG FC方法，我们分析了新西兰帕金森病进展项目的EEG数据，包括136名PD患者和51名年龄匹配的对照组。使用HCP-MMP1图谱划分的源空间静息态EEG，在六个典型频带中提取振幅包络相关（AEC）和去偏加权相位滞后指数（dwPLI）。在嵌套交叉验证框架内，使用六种机器学习回归算法评估所得的24种FC模态。结果：θ、α和β频带FC对整体认知的预测最为一致。θ和α频带的AEC和dwPLI特征表现最强（最大R²=0.170，95% CI=0.067-0.262；最大r=0.439，95% CI=0.328-0.537）。标准头模型和个体化头模型在几乎所有模态中显示出可比的预测性能。两种头模型选项的Cole-Anticevic网络特征重要性神经解剖模式也相似。结论：我们发现源空间静息态EEG FC可以预测PD的认知表现。两种头模型的可比性表明，更用户友好且资源消耗更少的标准模板头模型足以满足此目的。这支持了基于EEG的FC作为PD认知生物标志物的可行性、可扩展性和临床可及性。

## Abstract
Introduction: Cognitive decline is a major non-motor feature of Parkinson s disease (PD), but reliable and accessible biomarkers remain limited. Resting-state electroencephalography (EEG) is a promising candidate because it is low-cost, portable, and well suited to repeated assessment. Recent work has increasingly focused on source-space functional connectivity (FC) for the prediction of cognition. However, the influence of source modelling based on an individualized MRI-based head model relative to that based on standard template model is unknown. Methods: To compare these two source-space EEG FC methods, we analysed EEG data from the New Zealand Parkinson s Progression Programme, including 136 people with PD and 51 age-similar controls. Source space resting-state EEG, parcellated with the HCP-MMP1 atlas, was used to derive amplitude envelope correlation (AEC) and debiased weighted phase lag index (dwPLI) across six canonical frequency bands. The resulting twenty-four FC modalities were evaluated using six machine-learning regression algorithms within a nested cross-validation framework. Results: Theta-, alpha-, and beta-band FC showed the most consistent prediction of global cognition. The strongest performance was observed for theta- and alpha-band AEC and dwPLI features (max R2 = 0.170, 95% CI = 0.067-0.262; max r = 0.439, 95% CI = 0.328-0.537). Standard and individualized head models showed comparable predictive performance across nearly all modalities. The feature-importance neuroanatomical patterns for Cole-Anticevic networks were also similar between the two head-model options. Conclusions: We found that source-space resting-state EEG FC can predict cognitive performance in PD. The comparability of the two head models suggests that the more user-friendly and less resource-intensive standard template head model is sufficient for this purpose. This supports feasible, scalable, and clinically accessible EEG-based FC biomarkers of cognition in PD.
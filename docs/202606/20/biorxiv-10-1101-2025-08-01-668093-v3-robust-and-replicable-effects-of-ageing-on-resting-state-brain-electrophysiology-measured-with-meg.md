---
title: Robust and replicable effects of ageing on resting state brain electrophysiology measured with MEG.
title_zh: 衰老对静息态脑磁图脑电生理学的稳健且可重复的影响
authors: "Quinn, A. J., Pitt, J., Kohl, O., Gohil, C., van Es, M. W. J., Nobre, A. C., Woolrich, M. W."
date: 2026-06-12
pdf: "https://www.biorxiv.org/content/10.1101/2025.08.01.668093v3.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: 静息态脑电生理学（MEG/EEG）
tldr: 衰老对静息态脑电生理信号有显著影响，但研究间的方法差异阻碍了共识。本研究使用GLM-Spectrum方法分析MEG数据，发现全频段年龄效应在多个开放数据集中可重复，且对常见协变量稳健。不同频率和脑区的效应量不同，影响样本量规划。该框架有助于候选脑健康标志物的比较与评估。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有研究因方法差异难以形成衰老对脑电生理影响的共识，需要可重复、稳健的分析框架。
method: 采用GLM-Spectrum方法估计闭眼静息态MEG的全频全脑年龄效应谱，并在多个开放数据集上验证可重复性。
result: 年龄效应在多个数据集中可重复，对常见协变量稳健，但效应量随频率和脑区变化，且与灰质体积部分相关。
conclusion: 该框架为衰老脑电标志物的比较和评估提供了途径，并提示研究设计需考虑效应量的异质性。
---

## 摘要
利用脑电生理学进行无创记录为年龄相关的神经元功能衰退提供了可信的见解。需要新的方法将这些结果转化为令人信服的临床指标，并应对老龄化中保持大脑健康的全球挑战。在脑电图和脑磁图记录的功率谱中可以观察到神经元动力学随年龄的变化。已识别出非常有潜力的电生理标志物候选，但不同研究间方法学的显著差异阻碍了进展。这使得在大量研究中就任何单一报告效应的频率、位置和方向达成明确共识变得困难。我们使用GLM-谱估计了闭眼静息态脑磁图中衰老效应的全频率全头分布。这种数据表示易于共享，便于荟萃分析，并为未来研究规划中估计年龄效应的统计功效提供了框架。我们利用此方法表明，年龄效应在开放获取的脑磁图数据集中是可重复的，并且对常见协变量的建模具有稳健性。全频率分布中的不同成分具有不同的效应量，表明针对年龄效应的样本量规划必须考虑特定的感兴趣特征。衰老的频率分布对一系列常见协变量非常稳健，并对灰质体积的建模部分稳健。我们确定，当分析目标是与年龄相关协变量（如灰质体积）线性可分的年龄效应时，原本看似功效充足的研究可能变得功效不足。这些结果为正式比较和评估衰老中大脑健康的候选标志物提供了途径。

图形摘要

O_FIG O_LINKSMALLFIG WIDTH=200 HEIGHT=151 SRC="FIGDIR/small/668093v3_ufig1.gif" ALT="图1">
查看大图 (37K):
org.highwire.dtl.DTLVardef@1a9c351org.highwire.dtl.DTLVardef@563837org.highwire.dtl.DTLVardef@84b898org.highwire.dtl.DTLVardef@1730472_HPS_FORMAT_FIGEXP  M_FIG C_FIG 亮点
O_LI在整个成年寿命中，衰老对一系列频率和空间位置的神经元振荡有强烈影响。
C_LI该效应在多个开放获取数据集中是可重复的。
C_LI该效应对一系列受试者间变异来源具有稳健性。
C_LI年龄效应在空间和频率上具有异质性效应量，对未来研究规划有影响。
C_LI

## Abstract
Non-invasive recordings using brain electrophysiology provide credible insights into decline in neuronal functioning with age. New approaches are required to translate these results into compelling clinical metrics and meet the global challenge of preserving brain health in ageing. Changes in neuronal dynamics with ageing are observable in the power spectra of EEG and MEG recordings. Highly promising candidates for electrophysiological markers have been identified, but progress is hindered by substantial methodological variability across studies. This makes it challenging to establish a clear consensus on the frequency, location, and direction of any single reported effect within the larger body of research. We estimate a full-frequency whole-head profile of the ageing effect on eyes-closed resting-state MEG using the GLM-Spectrum. This data representation is easily sharable, facilitates meta-analyses and provides a framework for estimating statistical power of age effects for future study planning. We use this to show that the effect of age replicates across open-access MEG datasets and is robust to modelling of common covariates. Distinct components within the full frequency profile have different effect sizes, indicating that sample-size planning for ageing effects must consider the specific features of interest. The frequency profile of ageing is strongly robust to a range of common covariates and partially robust to modelling of grey matter volume. We establish that what seems a well-powered study may become underpowered when analyses target an age effect that is linearly separable from an age-relevant covariate such as grey matter volume. These results provide a pathway towards formal comparison and assessment of candidate markers for brain health in ageing.

Graphical Abstract

O_FIG O_LINKSMALLFIG WIDTH=200 HEIGHT=151 SRC="FIGDIR/small/668093v3_ufig1.gif" ALT="Figure 1">
View larger version (37K):
org.highwire.dtl.DTLVardef@1a9c351org.highwire.dtl.DTLVardef@563837org.highwire.dtl.DTLVardef@84b898org.highwire.dtl.DTLVardef@1730472_HPS_FORMAT_FIGEXP  M_FIG C_FIG HighlightsO_LIThere is a strong effect of ageing across the adult lifespan on neuronal oscillations across a range of frequencies and spatial locations.
C_LIO_LIThe effect is replicable across multiple open-access datasets.
C_LIO_LIThe effect is robust to a range of sources of inter-subject variability.
C_LIO_LIThe age effect has heterogeneous effect size across space and frequency with implications for future study planning.
C_LI
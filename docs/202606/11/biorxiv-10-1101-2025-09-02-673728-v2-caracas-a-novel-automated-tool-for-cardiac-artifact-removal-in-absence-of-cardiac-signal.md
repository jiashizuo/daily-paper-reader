---
title: "CARACAS, a novel automated tool for Cardiac Artifact Removal in Absence of CArdiac Signal"
title_zh: CARACAS：一种在无心电信号情况下自动去除心脏伪影的新型工具
authors: "Champetier, P., Oudiette, D., Andrillon, T., Chaumon, M."
date: 2026-06-03
pdf: "https://www.biorxiv.org/content/10.1101/2025.09.02.673728v2.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 8.0
evidence: 自动化EEG伪迹去除工具
tldr: EEG记录常受心脏伪影干扰，ICA后去除心脏独立成分是常用校正方法，但现有自动识别方法多需同步ECG。本文提出CARACAS，仅利用IC时间序列即可识别心脏IC，无需ECG。在375个EEG-ECG数据集上，CARACAS灵敏度0.960、特异度0.976，显著优于IClabel，接近ECG相关法。该工具已集成于SASICA工具箱，为无ECG场景提供可靠解决方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有自动识别心脏IC的方法大多需要同步ECG，但ECG并非总是可用，因此需要开发仅依赖IC时间序列的ECG-free方法。
method: 利用现有ECG中R波检测工具，将其应用于每个IC时间序列，通过分析检测到的事件特征区分心脏IC与非心脏IC。
result: "在21,375个IC上，CARACAS灵敏度0.960、特异度0.976，优于IClabel（0.210/0.999），接近ECG相关法（0.975/0.998）。"
conclusion: CARACAS是一种可靠的ECG-free心脏IC检测方法，为无ECG的EEG数据提供实用解决方案，已集成于SASICA工具箱。
---

## 摘要
背景：脑电图（EEG）记录可能包含心脏相关伪影。独立成分分析（ICA）后去除心脏独立成分（IC）是一种强大且广泛使用的伪影校正策略。现有的大多数自动标记心脏IC的方法需要同时记录心电图（ECG）（例如，计算与IC时间过程的相关性）。然而，ECG并不总是可用。为解决这一限制，我们开发了CARACAS（在无心电信号情况下去除心脏伪影），这是一种仅使用IC时间过程识别心脏IC的新型工具。

新方法：由于心脏IC的时间特征与ECG信号高度相似，我们使用了一种现有的用于检测ECG中心脏事件（R波）的工具，并将其应用于每个IC时间过程。对检测到的事件进行分析能够区分心脏IC和非心脏IC，其中非心脏IC中不相关的信号变化会被错误识别为心脏事件。利用开源数据集OpenNeuro ds003690中的375个EEG-ECG记录，我们比较了三种算法的性能：CARACAS、IClabel（一种不需要ECG的通用IC分类器）以及与ECG通道的相关性。

结果（与现有方法比较）：共对21,375个IC进行了人工和自动分类。CARACAS实现了高性能（灵敏度=0.960，特异度=0.976），显著优于IClabel（灵敏度=0.210，特异度=0.999），并接近ECG相关方法的性能（灵敏度=0.975，特异度=0.998）。

结论：我们提出了一种可靠的无需ECG的EEG中心脏IC检测算法。CARACAS在ECG不可用时提供了一种实用的解决方案，并已在SASICA工具箱中实现。

亮点：
- ICA后去除心脏独立成分（IC）可校正EEG心脏伪影。
- 大多数自动心脏IC检测器需要同时记录ECG。
- 我们开发了CARACAS，一种新型的无需ECG的自动心脏IC标记方法。
- CARACAS在21,375个IC上实现了0.960的灵敏度和0.976的特异度。
- CARACAS优于IClabel，并可在SASICA工具箱（命令行和图形界面）中使用。

图形摘要：
[图1]

## Abstract
BackgroundEEG recordings can contain cardiac related artifacts. Independent Component Analysis (ICA) followed by removal of cardiac Independent Components (ICs) is a powerful and widely used strategy for artifact correction. Most existing methods for automatic labeling of cardiac ICs require a simultaneously recorded ECG (e.g., to compute correlation with the IC time course). However, ECG is not always available. To address this limitation, we developed CARACAS (Cardiac Artifact Removal in Absence of CArdiac Signal), a novel tool that identifies cardiac ICs using only the IC time courses.

New methodBecause cardiac ICs exhibit temporal profiles highly similar to ECG signals, we used an existing tool designed to detect cardiac events (R waves) in ECG signals and applied it to each IC time course. Analysis of the detected events enabled the differentiation of cardiac ICs from non-cardiac ICs, where unrelated signal variations are incorrectly identified as cardiac events. Using the 375 EEG-ECG recordings of the open-source dataset OpenNeuro ds003690, we compared the performances of three algorithms: CARACAS, IClabel (a generic IC classifier which does not require ECG), and correlation with ECG channel.

Results (comparison with existing methods)A total of 21,375 ICs were manually and automatically classified. CARACAS achieved high performance (sensitivity = 0.960, specificity = 0.976), substantially outperforming ICLabel (sensitivity = 0.210, specificity = 0.999) and approaching the performance of ECG correlation method (sensitivity = 0.975, specificity = 0.998).

ConclusionWe present a reliable ECG-free algorithm for cardiac IC detection in EEG. CARACAS provides a practical solution when ECG is unavailable, and is implemented in the SASICA toolbox.

HighlightsO_LICardiac independent component (IC) removal after ICA corrects cardiac EEG artifacts.
C_LIO_LIMost automatic cardiac IC detectors require a simultaneously recorded ECG.
C_LIO_LIWe developed CARACAS, a novel ECG-free method for automatic cardiac IC labeling.
C_LIO_LICARACAS achieved a sensitivity of 0.960 and a specificity of 0.976 on 21,375 ICs.
C_LIO_LICARACAS outperforms ICLabel, and is available in SASICA toolbox (command line & GUI).
C_LI

Graphical abstract

O_FIG O_LINKSMALLFIG WIDTH=200 HEIGHT=148 SRC="FIGDIR/small/673728v2_ufig1.gif" ALT="Figure 1">
View larger version (23K):
org.highwire.dtl.DTLVardef@178bd49org.highwire.dtl.DTLVardef@1d34500org.highwire.dtl.DTLVardef@1572bf1org.highwire.dtl.DTLVardef@5f799_HPS_FORMAT_FIGEXP  M_FIG C_FIG
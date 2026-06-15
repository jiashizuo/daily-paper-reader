---
title: "The ENIGMA MEG Pipeline: Automated cortically localized spectral analysis of multi-site resting state MEG datasets"
title_zh: ENIGMA MEG管道：多站点静息态MEG数据集的自动化皮层定位频谱分析
authors: "Nugent, A. C., Namyst, A. M., Carver, F. W., Thompson, P. M., Stout, J. D."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.03.729876v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 6.0
evidence: 多站点MEG分析神经影像流程
tldr: 针对多站点MEG数据缺乏自动化分析流程的问题，ENIGMA联盟开发了基于MNE-Python的MEG处理管线，集成重训练的MEGnet深度学习模型实现自动伪迹检测，支持BIDS格式和匿名输出。在三个公开数据集上验证了其功能性和大规模处理兼容性。该开源工具为多站点、高通量的静息态频谱分析提供了标准化方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有MEG分析软件缺乏针对大规模多站点数据集的自动化处理流程，阻碍了跨中心协作研究。
method: 基于MNE-Python构建模块化管线，集成重训练的MEGnet深度学习模型自动检测伪迹，支持BIDS格式和匿名输出。
result: 在三个公开MEG数据集上成功处理，验证了管线的大规模处理能力和跨供应商兼容性。
conclusion: 该开源管线为多站点静息态MEG频谱分析提供了标准化工具，未来可扩展至连接性和任务态分析。
---

## 摘要
背景脑磁图（MEG）是一种独特的人脑神经影像技术，结合了高时间分辨率（毫秒或更快）和中等空间分辨率（几毫米）。尽管存在许多用于MEG数据分析的软件包，但尚未开发出专门用于实现大规模、多站点数据集自动化分析的管道。

结果ENIGMA联盟旨在促进神经影像学和遗传学领域的大规模合作。为便于ENIGMA MEG工作组的数据分析，我们开发了ENIGMA MEG管道。首个ENIGMA MEG工作组项目涉及静息态MEG数据的频谱分析，因此我们当前的管道设计用于执行该任务。ENIGMA MEG管道的目标包括易用性、尽可能自动化处理、详细的日志记录和质量保证（QA）功能、使用脑影像数据结构（BIDS）格式、匿名化输出以及跨供应商的一致处理。该管道基于MNE-Python框架构建，并整合了重新训练的MEGnet深度神经网络算法用于自动伪迹检测。QA工具旨在实现对大量受试者数据集的高通量评估。所有软件均为开源，可在GitHub上获取（https://github.com/nih-megcore/enigma_MEG）。我们使用该管道处理了三个公开可用的MEG队列数据，展示了其功能性和与大规模处理的兼容性。

结论尽管当前的ENIGMA管道仅限于当前工作组项目的静息态数据和频谱分析，但该软件高度模块化，便于扩展到其他分析问题。计划进一步开发该工具以实现连接性和基于任务的MEG分析。ENIGMA MEG管道是增强现有分析工具库的重要第一步，能够实现多站点、高通量的数据分析。

## Abstract
BackgroundMagnetoencephalography (MEG) is a unique technique in human neuroimaging combining high temporal resolution (millisecond or faster) with moderate spatial resolution (several millimeter). While many software packages for MEG data analysis exist, there is no pipeline developed for the specific purpose of enabling the automated analysis of very large, multi-site datasets.

ResultsThe ENIGMA consortium was developed to enable large scale collaborations in the fields of neuroimaging and genetics. To facilitate ENIGMA MEG working group data analysis, we developed the ENIGMA MEG pipeline. The first ENIGMA MEG working group project involves spectral analysis of resting state MEG data, thus our current pipeline is designed to carry out that task. The goals of the ENIGMA MEG pipeline include ease of use, automated processing wherever possible, detailed logging and quality assurance (QA) features, the use of the brain imaging data structure (BIDS) format, anonymized output, and consistent processing across vendors. The pipeline is built using the MNE-Python framework and incorporates a re-trained version of the MEGnet deep neural network algorithm for automated artifact detection. QA tools are designed to enable high throughput evaluation of a large number of subject datasets. All software is open source and available on GitHub (https://github.com/nih-megcore/enigma_MEG). We used our pipeline to process data from three publicly available MEG cohorts, demonstrating its functionality and compatibility with large-scale processing.

ConclusionsWhile the current ENIGMA pipeline is limited to resting state data and spectral analysis for the current working group project, the software is highly modularized, allowing straightforward extension to other analysis questions. Further development of the tool to enable connectivity and task-based MEG analysis are planned. The ENIGMA MEG pipeline represents an important first step to augment the existing arsenal of analysis tools, enabling multi-site, high throughput data analysis.
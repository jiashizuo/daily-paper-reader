---
title: "Getting Blood from a Stone: Improving Neural Inferences without Additional Neural Data"
title_zh: 从石头中取血：无需额外神经数据改进神经推断
authors: "Halpern, D. J., Gureckis, T. M."
date: 2026-06-23
pdf: "https://www.biorxiv.org/content/10.1101/2021.01.21.427334v4.full.pdf"
tags: ["query:fmri-brain-network"]
score: 6.0
evidence: 利用行为数据改进fMRI神经推断
tldr: 认知神经科学领域因低统计功效研究而受批评，通常建议通过收集更多神经数据来提高功效。本文提出一种新方法：仅收集行为数据，利用替代估计器来改进对神经信号（如fMRI BOLD）的推断。通过模拟和数学推导，发现了解行为边际分布能提升推断精度，且在某些情况下，额外行为数据比收集更多神经数据更经济高效。这为研究设计提供了新维度：调整扫描内和扫描外被试数量。
source: biorxiv
selection_source: fresh_fetch
motivation: 低统计功效限制了神经科学研究的可靠性，而收集更多神经数据成本高昂。
method: 利用行为数据的边际分布，通过替代估计器改进神经信号映射的推断。
result: 额外行为数据可提升推断精度，其收益取决于目标估计量和研究参数。
conclusion: 行为数据可作为神经数据的经济替代，优化研究设计中的被试分配。
---

## 摘要
近年来，认知神经科学文献因包含许多低统计功效的研究而受到批评，这限制了进行可靠统计推断的能力。通常，提高统计功效的建议是收集更多神经信号数据。然而，认知神经科学中的许多研究使用从行为数据中估计的参数来对神经信号（如fMRI BOLD信号）进行推断。在本文中，我们探讨了认知神经科学家如何通过仅收集行为数据并利用旨在利用这些信息的替代估计器，来更多地了解他们的神经影像信号。我们通过模拟和数学推导证明，了解行为边际分布的更多信息可以改进关于认知过程与神经数据之间映射的推断。我们分析了这种益处的程度，发现它取决于所需的估计目标和若干潜在的研究参数。虽然在许多情况下，精度的绝对提升可能不大，但我们的结果表明，在现实环境中，与在神经影像研究中从受试者收集额外数据相比，额外的行为数据可以更便宜、更容易地带来推断精度的相同提升。这意味着在进行神经影像研究时，研究人员现在在设计分析中有了另一个可调节的旋钮：扫描仪内收集的受试者数量和在扫描仪外（实验室或在线）收集的行为受试者数量。

## Abstract
In recent years, the cognitive neuroscience literature has come under criticism for containing many low-powered studies, limiting the ability to make reliable statistical inferences. Typically, the suggestion for increasing power is to collect more data with neural signals. However, many studies in cognitive neuroscience use parameters estimated from behavioral data in order to make inferences about neural signals (such as fMRI BOLD signal). In this paper, we explore how cognitive neuroscientists can learn more about their neuroimaging signal by collecting data on \textit{behavior alone} and using alternative estimators designed to leverage this information. We demonstrate through simulation and mathematical derivations that knowing more about the marginal distribution of behavior can improve inferences about the mapping between cognitive processes and neural data. We analyze the magnitude of this benefit, finding that it depends on the desired estimand and several underlying study parameters. While in many cases the absolute gains in precision can be modest, our results demonstrate that, in realistic settings, additional behavioral data can lead to the same improvement in the precision of inferences more cheaply and easily than collecting additional data from subjects in a neuroimaging study. This means that when conducting a neuroimaging study, researchers now have another knob to turn in a design analysis: the number of subjects collected in the scanner and the number of behavioral subjects collected outside the scanner (in the lab or online).
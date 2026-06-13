---
title: "Beyond the Forest and the Trees: Overlooking the Overlooked Terrain of Neural State Dynamics"
title_zh: 超越森林与树木：忽视神经状态动力学的被忽视地形
authors: "Asai, T., Kashihara, S., Chiyohara, S."
date: 2026-06-09
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.04.729738v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 6.0
evidence: fMRI脑网络状态动力学分析
tldr: 神经状态转换分析（如EEG微状态、fMRI隐马尔可夫模型）依赖预定义模板，但模板对预处理和聚类参数敏感，影响可重复性。本文从拓扑几何视角重新定义模板为状态空间中的地标，保留极性作为几何关系，而非将其视为冗余。实验表明，基于地标的状态定义优于传统模板，能更好捕捉状态结构并提升分析性能。该工作将微状态分析从聚类优化转向状态空间拓扑组织，为跨数据集比较提供更稳定的基础。
source: biorxiv
selection_source: fresh_fetch
motivation: 传统EEG微状态分析中，模板定义对预处理和聚类参数敏感，导致可重复性差，且忽略了状态空间的全局几何结构。
method: 将微状态模板重新定义为状态空间中的地标，基于头皮电压图间的相似性构建全局结构，保留极性作为有意义的几何关系。
result: 基于地标的状态定义在捕捉状态结构和分析性能上优于传统模板，提供了更稳定的状态定义基础。
conclusion: 微状态分析的核心问题应从聚类优化转向状态空间的拓扑组织，地标方法为跨数据集和模态的统一比较开辟了新路径。
---

## 摘要
状态转换方法，包括脑电微状态分析以及相关的功能磁共振成像方法如隐马尔可夫模型和共激活模式分析，提供了将神经动力学粗粒化为一小组准稳定状态的广泛使用工具。其实用性已在静息态和任务范式下得到证明，应用范围从认知神经科学到精神与神经疾病的候选生物标志物。然而，一个基本限制仍然存在：几乎所有下游时间测量都依赖于最初定义的模板图。在传统流程中，模板源自全局场功率峰值处电压图的极性不变聚类，使得最终的状态定义对预处理、采样、初始化、聚类算法和聚类数量的选择敏感。因此，该方法捕捉了脑电动力学中的粗略规律，而对产生这些状态的更大几何组织约束较弱。这种模板依赖性对可重复性以及跨研究和脑电帽的比较构成了重大挑战。在这里，我们从拓扑几何角度重新审视这个问题。我们不将模板视为从GFP峰值图中提取的聚类中心，而是将其视为嵌入在由头皮电压图相互相似性构建的状态空间全局结构中的地标。在这种表述中，微状态模板被重新发现为组织连续神经状态拓扑的主导轴的离散代表。这种重新表述保留了极性作为一种有意义的几何关系，而不是一开始就将其作为分析冗余消除。它还将注意力从孤立的状态标签转移到状态空间本身的地形：即局部状态变得可解释的更广泛关系结构。使用这种方法，我们展示了基于地标的状态定义在捕捉状态结构和提高分析性能方面优于传统模板。这些发现表明，脑电微状态分析的核心问题比聚类优化更广泛：它涉及如何定义有效的节点来粗粒化连续动力学，而不丢弃组织它们的拓扑。通过将微状态分析的概念基础从模板转移到地标，本方法为状态定义提供了更原则性且可能更稳定的基础，包括在功能磁共振成像中。这种拓扑几何重新评估扩展了传统的微状态分析，并为跨数据集、范式和记录系统的更统一比较开辟了道路。

## Abstract
State-transition approaches, including EEG microstate analysis and related fMRI methods such as hidden Markov models (HMMs) and co-activation pattern (CAP) analysis, provide widely used tools for coarse-graining neural dynamics into a small set of quasi-stable states. Its utility has been demonstrated across resting-state and task paradigms, with broad applications ranging from cognitive neuroscience to candidate biomarkers for psychiatric and neurological disorders. A fundamental limitation remains, however: nearly all downstream temporal measures are conditional on the template maps defined at the outset. In the conventional pipeline, templates are derived from polarity-invariant clustering of voltage maps at global field power (GFP) peaks, making the resulting state definitions sensitive to preprocessing, sampling, initialization, clustering algorithms, and the choice of cluster number. Consequently, the method captures coarse regularities in EEG dynamics, while only weakly constraining the larger geometric organization from which those states emerge. This template dependence poses a major challenge for reproducibility and for comparisons across studies and EEG caps. Here, we revisit this problem from a topological-geometric perspective. We treat templates not as cluster centroids extracted from GFP-peak maps, but as landmarks embedded in the global structure of a state space constructed from mutual similarities among scalp voltage maps. In this formulation, microstate templates are rediscovered as discrete representatives of dominant axes that organize continuous neural-state topography. This reformulation preserves polarity as a meaningful geometric relation instead of eliminating it at the outset as analytical redundancy. It also shifts attention from isolated state labels to the terrain of the state space itself: the broader relational structure within which local states become interpretable. Using this approach, we show that landmark-based state definitions outperform conventional templates in capturing state structure and improving analytical performance. These findings suggest that the central problem in EEG microstate analysis is broader than clustering optimization: it concerns how to define valid nodes for coarse-graining continuous dynamics without discarding the topology that organizes them. By shifting the conceptual basis of microstate analysis from templates to landmarks, the present approach provides a more principled and potentially more stable foundation for state definition, including in fMRI. This topolo-geometric reappraisal extends conventional microstate analysis and opens a path toward more unified comparisons across datasets, paradigms, and recording systems.
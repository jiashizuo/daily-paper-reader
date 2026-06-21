---
title: Structural Connectivity Selectively Constrains Intrinsic BOLD Timescales through Graph-Smooth Neural Activity
title_zh: 结构连接通过图平滑神经活动选择性约束内在BOLD时间尺度
authors: "Bashirgonbadi, A., salehi, m., Soltanian-Zadeh, H."
date: 2026-06-19
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.732146v2.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: fMRI功能连接建模使用图信号处理
tldr: 结构连接如何约束大脑BOLD信号的内在时间尺度尚不明确。本文采用图信号处理框架，将BOLD信号分解为结构耦合与解耦成分，发现结构耦合信号的时间尺度与连接强度正相关，而解耦信号关联较弱。结果表明网络拓扑通过图平滑活动选择性约束时间统计特性。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究结构连接如何约束大脑BOLD信号的内在时间尺度，特别是哪些信号成分驱动了结构与时间尺度的关联。
method: 采用图信号处理框架，将BOLD信号分解为结构耦合与解耦成分，分析其时间尺度与结构连接强度的关系。
result: 结构耦合信号的时间尺度与连接强度正相关，解耦信号关联较弱；慢速解耦动力学优先表达于高级联合皮层。
conclusion: 网络拓扑通过图平滑活动选择性约束时间统计特性，建立了结构与时间尺度耦合的图谱解释。
---

## 摘要
结构连接定义了支撑大规模脑动力学的网络架构，然而该网络如何约束其上信号的时间统计特性仍知之甚少。先前研究报道了静息态fMRI的内在时间尺度与结构连接强度之间的关联，但尚不清楚哪些信号成分主要驱动这种关系。本文采用图信号处理框架分析网络化脑信号的内在时间特性。将区域血氧水平依赖（BOLD）活动建模为结构连接组支持的图信号，并通过图谱滤波分解为低频（结构耦合）和高频（结构解耦）成分。利用来自人类连接组计划100名无关参与者的弥散MRI结构连接和静息态fMRI数据，通过相对低频功率量化内在时间尺度，并在控制区域体积的同时将其与节点结构连接强度相关联。我们发现，源自结构耦合信号的内在时间尺度在群体和个体间水平均与结构连接强度呈稳健正相关，而结构解耦信号则表现出显著较弱的耦合。值得注意的是，缓慢的结构解耦动态优先表达于高级联合皮层。图谱零模型进一步表明，这些效应关键依赖于结构网络的经验组织。综上，这些结果建立了结构-时间尺度耦合的图谱谱解释，表明网络拓扑选择性约束图平滑神经活动的时间统计特性。

## Abstract
Structural connectivity defines the network architecture supporting large scale brain dynamics, yet how this network constrains the temporal statistics of signals defined on it remains poorly understood. Prior work has reported associations between intrinsic timescales of resting-state fMRI and structural connectivity strength, but it is unclear which signal components primarily drive this relationship. Here, we adopt a graph signal processing framework to analyze intrinsic temporal properties of networked brain signals. Regional Blood Oxygenation Level Dependent (BOLD) activity is modeled as a graph signal supported on the structural connectome and decomposed via graph spectral filtering into low-frequency (structure-coupled) and high-frequency (structure-decoupled) components. Using diffusion MRI derived structural connectivity and resting-state fMRI from 100 unrelated participants of the Human Connectome Project, intrinsic timescales are quantified using relatively low-frequency power and related to node-wise structural connectivity strength while controlling for regional volume. We show that intrinsic timescales derived from structure-coupled signals exhibit robust positive associations with structural connectivity strength at both group and inter individual levels, whereas structure decoupled signals display substantially weaker coupling. Notably, slow structure decoupled dynamics are preferentially expressed in higher order association cortex. Graph spectral null models further demonstrate that these effects critically depend on the empirical organization of the structural network. Together, these results establish a graph spectral interpretation of structure timescale coupling, showing that network topology selectively constrains the temporal statistics of graph smooth neural activity.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化、深入、客观的中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大脑的结构连接（白质纤维束）构成了其功能网络的物理基础。先前的研究发现，大脑区域的内在时间尺度（即BOLD信号波动的快慢）与该区域的结构连接强度存在关联。然而，这种关联背后的具体机制尚不明确，特别是**哪些信号成分（是结构紧密耦合的信号，还是结构解耦的信号）主要驱动了这种关系**。
- **研究动机**：为了深入理解结构连接如何约束和塑造大脑的动态活动，特别是其时间统计特性。这有助于揭示大脑网络拓扑结构与功能动力学之间的因果或约束关系。
- **整体含义**：本研究旨在提供一个基于图信号处理（Graph Signal Processing, GSP）的理论框架，来解释结构-时间尺度耦合现象，从而阐明大脑网络拓扑结构如何选择性地约束其上神经活动的时间特性。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将大脑的BOLD信号视为定义在结构连接组（一个图）上的图信号。通过图傅里叶变换，可以将信号分解为不同频率的成分。**低频成分**对应于在结构连接紧密的区域间变化平缓的信号（称为“结构耦合”信号），而**高频成分**则对应于在结构连接稀疏或断开区域间变化剧烈的信号（称为“结构解耦”信号）。作者假设，结构连接主要通过约束这些“图平滑”的耦合信号来影响时间尺度。
- **关键技术细节**：
    1.  **图构建**：基于弥散MRI数据构建每个被试的结构连接组（图），节点为大脑皮层区域，边为纤维束连接强度。
    2.  **图信号分解**：对每个被试的静息态fMRI BOLD信号进行图傅里叶变换，然后通过图谱滤波（graph spectral filtering）将其分解为两个部分：
        - **结构耦合信号**：由低频图傅里叶分量重构的信号，代表在结构网络上变化平滑的活动。
        - **结构解耦信号**：由高频图傅里叶分量重构的信号，代表在结构网络上变化剧烈的活动。
    3.  **内在时间尺度量化**：使用**相对低频功率**（relative low-frequency power）来量化每个脑区BOLD信号的内在时间尺度。具体来说，计算信号功率谱中低频段（如0.01-0.1 Hz）的功率占总功率的比例。比例越高，表示信号越慢，时间尺度越长。
    4.  **关联分析**：将每个脑区的内在时间尺度（来自原始信号、耦合信号、解耦信号）与该脑区的节点结构连接强度（即该节点所有连接边的权重之和）进行相关性分析，同时控制区域体积等协变量。
- **算法流程（文字说明）**：
    1.  输入：每个被试的结构连接矩阵（图拉普拉斯矩阵）和静息态fMRI时间序列。
    2.  对结构连接矩阵进行特征分解，得到图傅里叶基。
    3.  将每个脑区的BOLD时间序列投影到图傅里叶基上，得到图谱系数。
    4.  设计一个低通滤波器和一个高通滤波器，分别提取低频和高频图谱系数。
    5.  用滤波后的系数重构信号，得到结构耦合信号和结构解耦信号。
    6.  分别计算原始信号、耦合信号和解耦信号的相对低频功率（时间尺度）。
    7.  计算每个脑区的节点强度。
    8.  在群体水平（组平均）和个体间水平（跨被试）上，计算时间尺度与节点强度的相关性。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：使用**人类连接组计划（Human Connectome Project, HCP）** 中**100名无关参与者**的数据。数据包括：
    - **弥散MRI**：用于构建结构连接组。
    - **静息态fMRI**：用于提取BOLD信号。
- **基准（Benchmark）**：论文没有明确提及一个外部的基准方法。其核心是比较**不同信号成分（原始、耦合、解耦）** 与结构连接强度的关联强度。
- **对比方法**：
    - **主要对比**：比较**结构耦合信号**与**结构解耦信号**在时间尺度-结构连接强度关联上的差异。
    - **零模型对比**：使用**图谱零模型（graph spectral null models）**，即随机化结构网络的拓扑结构（但保持某些统计特性），来检验观察到的效应是否依赖于结构网络的经验组织（即真实的拓扑结构）。这相当于一种消融实验，验证了结构拓扑的特异性作用。

### 4. 资源与算力

- **文中未明确说明**：论文摘要和提供的文本内容中，没有提及所使用的具体GPU型号、数量、训练时长或任何其他计算资源信息。因此，无法总结这部分内容。

### 5. 实验数量与充分性

- **实验数量**：从摘要来看，实验设计相对集中，主要包括：
    1.  **群体水平分析**：在100名被试的组平均数据上，分析时间尺度与节点强度的相关性。
    2.  **个体间水平分析**：跨100名被试，分析每个脑区的时间尺度与节点强度的相关性。
    3.  **信号成分对比**：对原始信号、结构耦合信号、结构解耦信号分别进行上述分析。
    4.  **零模型验证**：使用图谱零模型重复上述分析，作为对照。
- **充分性与客观性**：
    - **充分性**：实验设计逻辑清晰，直接针对核心假设（结构耦合信号驱动关联）。通过对比耦合与解耦信号，以及使用零模型，能够有力地证明结构拓扑的特异性作用。样本量（100名被试）在神经影像学研究中属于中等偏上，具有一定的统计效力。
    - **客观性与公平性**：分析中控制了区域体积等协变量，减少了混淆因素的影响。使用零模型进行统计检验，是评估网络拓扑特异性作用的客观方法。整体实验设计是公平且有针对性的。

### 6. 论文的主要结论与发现

1.  **结构耦合信号驱动关联**：源自**结构耦合信号**的内在时间尺度，在群体和个体间水平上，均与结构连接强度呈**稳健的正相关**。即，结构连接越强的脑区，其耦合信号的时间尺度越长（波动越慢）。
2.  **结构解耦信号关联弱**：源自**结构解耦信号**的内在时间尺度与结构连接强度的关联**显著较弱**。
3.  **慢速解耦动态的分布**：缓慢的结构解耦动态（即时间尺度较长的解耦信号）**优先表达于高级联合皮层**（如默认模式网络区域）。
4.  **依赖经验拓扑**：图谱零模型实验表明，上述效应**关键依赖于结构网络的经验组织**。如果随机化网络拓扑，这些关联就会消失或显著减弱。

### 7. 优点：方法或实验设计上的亮点

- **方法论创新**：首次将**图信号处理（GSP）** 框架系统地应用于解释结构-时间尺度耦合问题。通过将BOLD信号分解为结构耦合与解耦成分，提供了一种新颖且直观的机制性解释，超越了传统的相关性分析。
- **因果推断的尝试**：虽然仍是相关性研究，但通过分离信号成分和使用零模型，论文有力地论证了结构连接对时间尺度的**选择性约束**作用，向因果推断迈进了一步。
- **分析框架的普适性**：该图信号处理框架不仅限于本研究，可以推广到其他研究大脑结构-功能关系的场景中，具有较高的方法论价值。

### 8. 不足与局限

- **实验覆盖范围有限**：仅使用了HCP数据集，虽然质量高，但样本的年龄、健康状况等相对同质。结论的普适性需要在更多样化的人群（如不同年龄、疾病状态）中进行验证。
- **缺乏外部基准对比**：没有与现有的其他解释结构-时间尺度关系的模型或方法（如动态因果模型、线性动力系统模型等）进行直接比较，以证明本方法的优越性或互补性。
- **潜在的偏差风险**：
    - **模态依赖**：结构连接和功能信号分别来自弥散MRI和fMRI，两者在空间分辨率、噪声特性上存在差异，可能引入偏差。
    - **参数选择**：图滤波的截止频率（如何定义“低频”和“高频”）是一个关键参数，其选择可能影响结果。论文未详细讨论参数敏感性。
- **应用限制**：该方法依赖于高质量的弥散MRI数据来构建个体化的结构连接组，这在临床或资源有限的环境中可能难以实现。此外，对图信号处理理论的理解门槛较高，可能限制了其广泛应用。

（完）

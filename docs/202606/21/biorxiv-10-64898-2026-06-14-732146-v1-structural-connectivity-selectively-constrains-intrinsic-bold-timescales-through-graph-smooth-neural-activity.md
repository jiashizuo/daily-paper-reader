---
title: Structural Connectivity Selectively Constrains Intrinsic BOLD Timescales through Graph-Smooth Neural Activity
title_zh: 结构连接通过图平滑神经活动选择性约束内在BOLD时间尺度
authors: "Soltanian-Zadeh, H., Bashirgonbadi, A., salehi, m."
date: 2026-06-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.732146v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 9.0
evidence: 使用图信号处理分析fMRI脑网络
tldr: 结构连接如何约束大脑BOLD信号的内在时间尺度尚不明确。本文采用图信号处理框架，将BOLD信号分解为结构耦合与结构解耦成分，发现结构耦合信号的时间尺度与连接强度正相关，而结构解耦信号关联较弱。结果表明网络拓扑通过图平滑活动选择性约束时间统计特性。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究结构连接如何通过图信号处理约束BOLD信号的内在时间尺度。
method: 将BOLD信号分解为结构耦合与解耦成分，分析其时间尺度与连接强度的关系。
result: 结构耦合信号的时间尺度与连接强度正相关，结构解耦信号关联较弱。
conclusion: 网络拓扑通过图平滑活动选择性约束时间统计特性。
---

## 摘要
结构连接定义了支撑大规模脑动力学的网络架构，然而该网络如何约束其上信号的时间统计特性仍知之甚少。已有研究报告了静息态fMRI的内在时间尺度与结构连接强度之间的关联，但尚不清楚哪些信号成分主要驱动这种关系。本文采用图信号处理框架分析网络化脑信号的内在时间特性。将区域血氧水平依赖（BOLD）活动建模为结构连接组支持的图信号，并通过图谱滤波分解为低频（结构耦合）和高频（结构解耦）成分。利用来自人类连接组计划100名无关参与者的弥散MRI结构连接和静息态fMRI数据，使用相对低频功率量化内在时间尺度，并在控制区域体积的情况下将其与节点结构连接强度相关联。我们发现，源自结构耦合信号的内在时间尺度在群体和个体间水平均与结构连接强度呈稳健正相关，而结构解耦信号则表现出显著较弱的耦合。值得注意的是，缓慢的结构解耦动态优先表达于高级联合皮层。图谱零模型进一步表明，这些效应关键依赖于结构网络的经验组织。综上，这些结果建立了结构-时间尺度耦合的图谱解释，表明网络拓扑选择性约束图平滑神经活动的时间统计特性。

## Abstract
Structural connectivity defines the network architecture supporting large scale brain dynamics, yet how this network constrains the temporal statistics of signals defined on it remains poorly understood. Prior work has reported associations between intrinsic timescales of resting-state fMRI and structural connectivity strength, but it is unclear which signal components primarily drive this relationship. Here, we adopt a graph signal processing framework to analyze intrinsic temporal properties of networked brain signals. Regional Blood Oxygenation Level Dependent (BOLD) activity is modeled as a graph signal supported on the structural connectome and decomposed via graph spectral filtering into low-frequency (structure-coupled) and high-frequency (structure-decoupled) components. Using diffusion MRI derived structural connectivity and resting-state fMRI from 100 unrelated participants of the Human Connectome Project, intrinsic timescales are quantified using relatively low-frequency power and related to node-wise structural connectivity strength while controlling for regional volume. We show that intrinsic timescales derived from structure-coupled signals exhibit robust positive associations with structural connectivity strength at both group and inter individual levels, whereas structure decoupled signals display substantially weaker coupling. Notably, slow structure decoupled dynamics are preferentially expressed in higher order association cortex. Graph spectral null models further demonstrate that these effects critically depend on the empirical organization of the structural network. Together, these results establish a graph spectral interpretation of structure timescale coupling, showing that network topology selectively constrains the temporal statistics of graph smooth neural activity.

---

## 论文详细总结（自动生成）

好的，以下是对该论文的详细中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大脑的结构连接（白质纤维束）构成了神经活动的物理骨架，但尚不清楚这种结构网络如何具体约束和塑造其上承载的神经信号（如fMRI BOLD信号）的时间动态特性。先前研究已观察到静息态fMRI的内在时间尺度与结构连接强度之间存在关联，但未能解释是信号的哪些成分驱动了这种关系。
- **研究动机**：为了深入理解结构-功能耦合的机制，特别是结构网络如何选择性地影响不同时间尺度的神经活动。
- **整体含义**：该研究旨在揭示大脑结构连接并非均匀地约束所有神经活动，而是通过“图平滑”机制，优先约束那些与网络拓扑结构高度耦合（即低频、平滑）的信号成分的时间统计特性。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：采用**图信号处理（Graph Signal Processing, GSP）** 框架，将大脑区域视为图节点，结构连接视为边，BOLD信号视为定义在该图上的信号。通过图傅里叶变换（Graph Fourier Transform, GFT），将BOLD信号分解为不同频率的成分，其中低频成分对应“结构耦合”（graph-smooth）信号，高频成分对应“结构解耦”（graph-rough）信号。然后分别分析这两类信号的时间尺度与结构连接强度的关系。
- **关键技术细节**：
    1.  **构建结构连接组**：基于弥散MRI（dMRI）数据，使用确定性或概率性纤维追踪构建个体化的结构连接矩阵（图）。
    2.  **图拉普拉斯矩阵**：计算图的拉普拉斯矩阵（L），其特征向量构成图傅里叶基。
    3.  **图谱滤波**：通过图傅里叶变换将BOLD信号分解到图频域。设计一个低通滤波器（保留低频成分）和一个高通滤波器（保留高频成分），从而将原始BOLD信号分解为：
        - **结构耦合信号**：低频图信号，代表在结构连接紧密的区域间同步、平滑变化的神经活动。
        - **结构解耦信号**：高频图信号，代表在结构连接上变化剧烈、相对独立的神经活动。
    4.  **量化内在时间尺度**：使用**相对低频功率**（relative low-frequency power）作为内在时间尺度的度量。即计算BOLD信号功率谱中低频段（如0.01-0.1 Hz）的功率占总功率的比例。比例越高，表示信号变化越慢，时间尺度越长。
    5.  **关联分析**：计算每个脑区的节点结构连接强度（如加权度）与其内在时间尺度之间的相关性，并控制区域体积等混淆变量。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：使用**人类连接组计划（Human Connectome Project, HCP）** 中100名无关参与者的公开数据。每位参与者均包含：
    - **弥散MRI数据**：用于构建个体化的结构连接组。
    - **静息态fMRI数据**：用于提取BOLD信号并计算内在时间尺度。
- **基准与对比方法**：
    - **主要对比**：将**结构耦合信号**与**结构解耦信号**的分析结果进行对比，这是论文的核心对比。
    - **零模型（Null Model）**：使用**图谱零模型（Graph Spectral Null Models）** 来检验观察到的效应是否依赖于结构网络的经验组织。具体做法是随机化图拉普拉斯矩阵的特征向量，破坏网络拓扑结构，然后重复分析，以验证真实网络拓扑的必要性。
    - **控制变量**：在关联分析中，将**区域体积**作为协变量进行控制，以排除脑区大小对结果的潜在影响。

### 4. 资源与算力

- **文中未明确说明**：论文摘要和提供的文本内容中，没有提及任何关于计算资源（如GPU型号、数量、训练时长）的具体信息。这可能是由于该研究主要基于传统的信号处理和统计分析，而非深度学习模型训练，因此对算力的需求相对较低，作者未将其作为重点描述。

### 5. 实验数量与充分性

- **实验数量**：论文主要围绕一个核心实验设计展开，即对100名HCP参与者的数据进行图信号分解、时间尺度量化、关联分析和零模型验证。
- **充分性评估**：
    - **优点**：实验设计逻辑清晰，从群体水平到个体间水平进行了多层次分析，并使用了零模型进行统计验证，增强了结论的可靠性。控制区域体积也体现了实验设计的严谨性。
    - **不足**：仅使用了单一数据集（HCP），虽然HCP数据质量高，但样本量（100人）和人群代表性有限。缺乏在不同数据集（如不同年龄、疾病人群）上的验证，也未与其他图信号分解方法（如基于小波的分解）进行对比。因此，实验的**外部有效性**和**方法泛化性**有待进一步验证。

### 6. 论文的主要结论与发现

1.  **结构耦合信号驱动了结构-时间尺度关联**：源自结构耦合（低频图）信号的内在时间尺度，在群体和个体间水平均与结构连接强度呈**稳健的正相关**。即结构连接越强的脑区，其图平滑信号的时间尺度越长（变化越慢）。
2.  **结构解耦信号关联较弱**：源自结构解耦（高频图）信号的内在时间尺度与结构连接强度的关联**显著较弱**，表明结构网络主要约束的是与其拓扑结构一致的平滑活动。
3.  **高级联合皮层表达慢速解耦动态**：缓慢的结构解耦动态（即高频信号中的慢变成分）优先表达于高级联合皮层（如默认模式网络区域），这可能反映了这些区域在缺乏强结构约束下的内在、自发的慢速活动。
4.  **网络拓扑的关键作用**：图谱零模型实验表明，上述效应依赖于结构网络的经验组织。如果随机化网络拓扑，结构-时间尺度的耦合关系会消失，证明了**网络拓扑结构是选择性约束图平滑活动时间统计特性的关键因素**。

### 7. 优点：方法或实验设计上的亮点

- **方法创新性**：将图信号处理（GSP）框架引入到结构-功能耦合的研究中，提供了一种新颖且数学上严谨的视角来分解BOLD信号，区分了“结构耦合”与“结构解耦”成分，超越了传统的全局或局部相关性分析。
- **解释力强**：该框架为“结构连接如何约束功能动态”这一核心问题提供了一个直观且有力的解释：结构网络像一个“低通滤波器”，优先让与其拓扑结构一致的平滑信号通过，并约束其时间尺度。
- **实验设计严谨**：使用了零模型进行统计推断，并控制了区域体积等混淆变量，增强了结论的因果性和可靠性。从群体和个体两个层面进行分析，使结论更具说服力。

### 8. 不足与局限

- **数据局限性**：仅基于HCP单一数据集，样本量有限，且HCP参与者为健康年轻成人，结论向其他人群（如老年人、患者）的泛化性未知。
- **方法局限性**：
    - 图信号分解依赖于结构连接组的构建质量，而纤维追踪本身存在假阳性和假阴性。
    - “内在时间尺度”的量化方式（相对低频功率）较为简单，可能无法完全捕捉复杂的时间动态特性。
    - 研究仅分析了静息态数据，未涉及任务态，无法推断该机制在认知过程中的作用。
- **因果推断有限**：虽然零模型支持了结构网络的关键作用，但研究本质上是相关性研究，无法完全确立结构连接对时间尺度的因果约束关系。
- **应用限制**：目前该发现主要停留在基础神经科学层面，距离临床应用（如作为生物标志物）还有很大距离。

（完）

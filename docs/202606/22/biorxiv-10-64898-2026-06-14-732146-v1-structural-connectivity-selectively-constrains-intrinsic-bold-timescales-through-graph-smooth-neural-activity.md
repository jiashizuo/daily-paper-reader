---
title: Structural Connectivity Selectively Constrains Intrinsic BOLD Timescales through Graph-Smooth Neural Activity
title_zh: 结构连接通过图平滑神经活动选择性约束内在BOLD时间尺度
authors: "Soltanian-Zadeh, H., Bashirgonbadi, A., salehi, m."
date: 2026-06-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.732146v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 9.0
evidence: 静息态fMRI结构连接图信号处理
tldr: 结构连接如何约束大脑BOLD信号的固有时间尺度尚不明确。本研究采用图信号处理框架，将静息态fMRI信号分解为结构耦合与结构解耦成分，发现固有时间尺度与结构连接强度的正关联主要由结构耦合的图平滑活动驱动，而结构解耦活动关联较弱，且慢速结构解耦动态优先表达于高级联合皮层。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究结构连接如何通过图平滑神经活动选择性约束BOLD信号的固有时间尺度。
method: 利用图信号处理将BOLD信号分解为结构耦合与结构解耦成分，结合扩散MRI和静息态fMRI数据量化固有时间尺度。
result: 结构耦合信号的固有时间尺度与结构连接强度呈稳健正相关，而结构解耦信号关联较弱；慢速结构解耦动态优先出现在高级联合皮层。
conclusion: 网络拓扑通过图平滑活动选择性约束大脑动态的时间统计特性。
---

## 摘要
结构连接定义了支持大规模脑动力学的网络架构，然而该网络如何约束其上信号的时间统计特性仍知之甚少。先前研究报道了静息态fMRI的内在时间尺度与结构连接强度之间的关联，但尚不清楚哪些信号成分主要驱动了这种关系。本文采用图信号处理框架来分析网络化脑信号的内在时间特性。将区域血氧水平依赖（BOLD）活动建模为结构连接组上支持的图信号，并通过图谱滤波分解为低频（结构耦合）和高频（结构解耦）成分。利用人类连接组项目100名无关参与者的弥散MRI结构连接和静息态fMRI数据，通过相对低频功率量化内在时间尺度，并在控制区域体积的同时将其与节点结构连接强度相关联。我们发现，源自结构耦合信号的内在时间尺度在群体和个体间水平均与结构连接强度呈稳健正相关，而结构解耦信号则表现出显著较弱的耦合。值得注意的是，缓慢的结构解耦动力学优先表达于高阶联合皮层。图谱零模型进一步表明，这些效应关键依赖于结构网络的经验组织。综上，这些结果建立了结构-时间尺度耦合的图谱解释，表明网络拓扑选择性约束了图平滑神经活动的时间统计特性。

作者总结：网络神经科学的一个基本问题是大脑的结构连接如何塑造功能活动的时间动力学。先前研究表明，解剖连接更强的脑区倾向于表现出较慢的内在活动波动，但负责这种关系的功能信号成分仍不清楚。本文结合图信号处理与内在BOLD时间尺度分析，将静息态活动分离为结构耦合和结构解耦成分。利用人类连接组项目的多模态神经影像数据，我们发现结构连接强度与内在时间尺度之间的关联主要由结构耦合的图平滑活动驱动。相比之下，结构解耦动力学对解剖连接的依赖性显著较弱，尽管跨模态联合皮层保留了选择性的结构影响。这些发现为解剖网络如何塑造人脑的时间处理提供了新见解，并表明内在时间尺度通过结构约束与功能动力学之间的不同相互作用模式而涌现。

## Abstract
Structural connectivity defines the network architecture supporting large-scale brain dynamics, yet how this network constrains the temporal statistics of signals defined on it remains poorly understood. Prior work has reported associations between intrinsic timescales of resting-state fMRI and structural connectivity strength, but it is unclear which signal components primarily drive this relationship. Here, we adopt a graph signal processing framework to analyze intrinsic temporal properties of networked brain signals. Regional Blood Oxygenation Level Dependent (BOLD) activity is modeled as a graph signal supported on the structural connectome and decomposed via graph spectral filtering into low-frequency (structure-coupled) and high-frequency (structure-decoupled) components. Using diffusion MRI-derived structural connectivity and resting-state fMRI from 100 unrelated participants of the Human Connectome Project, intrinsic timescales are quantified using relatively low-frequency power and related to node-wise structural connectivity strength while controlling for regional volume. We show that intrinsic timescales derived from structure-coupled signals exhibit robust positive associations with structural connectivity strength at both group and inter-individual levels, whereas structure-decoupled signals display substantially weaker coupling. Notably, slow structure-decoupled dynamics are preferentially expressed in higher-order association cortex. Graph-spectral null models further demonstrate that these effects critically depend on the empirical organization of the structural network. Together, these results establish a graph-spectral interpretation of structure-timescale coupling, showing that network topology selectively constrains the temporal statistics of graph-smooth neural activity.

Author SummaryA fundamental question in network neuroscience is how the brains structural connectivity shapes the temporal dynamics of functional activity. Previous studies have shown that brain regions with stronger anatomical connectivity tend to exhibit slower intrinsic activity fluctuations, but the functional signal components responsible for this relationship remain unclear. Here, we combine graph signal processing with analyses of intrinsic BOLD timescales to separate resting-state activity into structure-coupled and structure-decoupled components. Using multimodal neuroimaging data from the Human Connectome Project, we show that the association between structural connectivity strength and intrinsic timescales is primarily driven by structure-coupled, graph-smooth activity. In contrast, structure-decoupled dynamics exhibit substantially weaker dependence on anatomical connectivity, although transmodal association cortex retains selective structural influences. These findings provide new insight into how anatomical networks shape temporal processing in the human brain and suggest that intrinsic timescales emerge through distinct modes of interaction between structural constraints and functional dynamics.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化、深入、客观的中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大脑的结构连接（白质纤维束）如何约束和塑造其上功能活动（BOLD信号）的时间动态特性？具体而言，先前研究发现结构连接更强的脑区倾向于表现出更慢的内在活动波动（即更长的内在时间尺度），但驱动这种关联的功能信号成分尚不明确。
- **研究动机**：网络神经科学的一个基本目标是理解结构-功能关系。本研究旨在揭示结构连接与BOLD信号时间统计特性（内在时间尺度）之间关联的神经生物学基础，特别是区分哪些信号成分（结构耦合 vs. 结构解耦）主要贡献于这种关系。
- **整体含义**：该研究通过引入图信号处理框架，为“结构连接如何塑造大脑动态”这一经典问题提供了新的、更精细的图谱解释。它表明，结构连接主要通过约束“图平滑”（即与结构网络拓扑高度一致）的神经活动来影响时间尺度，而“图非平滑”的活动则相对独立，但在高级联合皮层中仍保留着选择性的结构影响。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将大脑的BOLD信号视为定义在结构连接组（一个图）上的图信号。利用图信号处理中的图谱滤波技术，将原始BOLD信号分解为两个成分：
    1.  **结构耦合成分**：图信号的低频成分，代表与结构网络拓扑高度一致、平滑变化的神经活动。
    2.  **结构解耦成分**：图信号的高频成分，代表与结构网络拓扑不一致、变化剧烈的神经活动。
- **关键技术细节**：
    1.  **图构建**：基于弥散MRI数据构建每个被试的结构连接组（图），节点为脑区，边为纤维束连接强度。
    2.  **图拉普拉斯矩阵**：计算图的拉普拉斯矩阵，并对其进行特征分解，得到特征值和特征向量（图傅里叶基）。
    3.  **图谱滤波**：将每个脑区的BOLD时间序列投影到图傅里叶域。通过设定一个频率阈值（例如，基于特征值的中位数或特定百分比），将信号分解为：
        - **低频成分（结构耦合）**：由低于阈值的特征向量重构的信号。
        - **高频成分（结构解耦）**：由高于阈值的特征向量重构的信号。
    4.  **内在时间尺度量化**：对于原始BOLD信号、结构耦合信号和结构解耦信号，分别计算其功率谱密度。内在时间尺度被量化为“相对低频功率”，即信号在低频段（如0.01-0.1 Hz）的功率占总功率的比例。比例越高，表示时间尺度越慢。
    5.  **关联分析**：将每个脑区的内在时间尺度与其节点结构连接强度（如节点度或加权度）进行相关分析，同时控制区域体积等协变量。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：使用**人类连接组项目（HCP）** 中**100名无关参与者**的数据。每位参与者均包含：
    - **弥散MRI数据**：用于构建个体化的结构连接组。
    - **静息态fMRI数据**：用于提取BOLD信号并计算内在时间尺度。
- **基准与对比方法**：
    - **主要对比**：比较**结构耦合信号**与**结构解耦信号**在“结构连接强度-内在时间尺度”关联上的差异。
    - **零模型（Null Model）**：使用**图谱零模型**（graph-spectral null models）来检验观察到的效应是否依赖于结构网络的经验组织。具体做法是随机化图拉普拉斯矩阵的特征向量，破坏网络拓扑的真实结构，然后重复上述分析。如果真实数据中的效应在零模型中消失，则证明该效应依赖于特定的网络拓扑。
    - **控制变量**：在关联分析中，控制了**区域体积**，以排除脑区大小对结果的潜在影响。

### 4. 资源与算力

- **文中未明确说明**：论文摘要和提供的文本内容中，没有提及任何关于计算资源（如GPU型号、数量、训练时长）的具体信息。这可能是由于该研究主要基于信号处理和统计分析，而非深度学习模型训练，因此对算力的需求相对较低，作者未将其作为重点描述。

### 5. 实验数量与充分性

- **实验数量**：论文主要围绕一个核心实验展开，即比较不同信号成分（原始、结构耦合、结构解耦）与结构连接强度的关联。但该实验在多个层面进行了验证：
    - **群体水平分析**：在100名被试的群体平均水平上检验关联。
    - **个体间水平分析**：检验个体间结构连接强度差异与内在时间尺度差异的相关性。
    - **零模型验证**：通过图谱零模型进行统计检验，确认效应的特异性。
    - **空间分布分析**：考察慢速结构解耦动态在皮层上的空间分布模式。
- **充分性与公平性**：
    - **充分性**：实验设计较为充分。通过分解信号成分，直接回答了核心问题。群体和个体间水平的双重验证增强了结论的稳健性。零模型的使用是验证网络拓扑特异性效应的标准且有效的方法。
    - **公平性**：对比是内在的（不同信号成分之间），而非与其他方法对比，因此不存在方法选择上的不公平。控制区域体积等协变量也增加了分析的客观性。但仅使用HCP一个数据集，可能限制了结论的普适性。

### 6. 论文的主要结论与发现

1.  **结构耦合信号驱动主要关联**：源自结构耦合（图平滑）信号的内在时间尺度，与节点结构连接强度在群体和个体间水平均表现出**稳健的正相关**。即，结构连接越强的脑区，其结构耦合活动的时间尺度越慢。
2.  **结构解耦信号关联较弱**：相比之下，源自结构解耦（图非平滑）信号的内在时间尺度与结构连接强度的关联**显著较弱**，表明这部分动态在很大程度上独立于局部解剖连接。
3.  **慢速结构解耦动态的特定空间分布**：尽管整体关联弱，但缓慢的结构解耦动态（即高频成分中较慢的部分）**优先表达于高级联合皮层**（如默认模式网络、额顶控制网络等），表明这些区域可能通过其他机制（如跨模态整合）保留了选择性的结构影响。
4.  **网络拓扑的关键作用**：图谱零模型分析证实，上述效应**关键依赖于结构网络的经验组织**。当网络拓扑被随机化后，这些关联消失，说明观察到的结构-时间尺度耦合是特定网络拓扑结构的结果。

### 7. 优点：方法或实验设计上的亮点

- **方法创新性**：将**图信号处理**这一成熟框架引入到“结构-功能时间尺度”关系的研究中，提供了一种新颖且数学上严谨的分解方法，能够直接分离出与结构拓扑耦合/解耦的信号成分。
- **分析精细度**：超越了以往仅分析原始BOLD信号的做法，通过分解信号，精确地定位了驱动结构-时间尺度关联的特定神经活动成分（图平滑活动）。
- **验证的全面性**：从群体平均到个体间差异，再到零模型验证，多层次的分析确保了结论的稳健性和特异性。
- **发现的空间特异性**：不仅报告了整体效应，还发现了慢速结构解耦动态在高级联合皮层的选择性表达，揭示了结构约束在不同脑区可能具有不同的作用模式。

### 8. 不足与局限

- **数据集单一**：仅使用了HCP的100名被试数据。虽然HCP数据质量高，但样本量相对较小，且被试群体相对同质（健康年轻人）。结论需要在更大、更多样化的数据集（如包含不同年龄、疾病状态的人群）中进行验证。
- **内在时间尺度的定义**：使用“相对低频功率”作为时间尺度的度量是一种常见但简化的方法。其他度量（如自相关衰减时间）可能提供不同的视角。
- **图信号分解的阈值选择**：将信号分解为低频和高频成分依赖于一个阈值（如特征值中位数）。不同的阈值选择可能会影响结果，论文未充分讨论其敏感性。
- **因果推断的限制**：研究揭示了结构连接与时间尺度之间的强关联，但无法直接推断因果关系。结构连接是否“导致”了时间尺度的变化，还是两者受共同因素影响，仍需进一步研究（如计算模型或干预实验）。
- **应用限制**：该研究是基础神经科学探索，其直接临床应用尚不明确。未来可能为理解精神疾病（如精神分裂症、抑郁症）中结构-功能耦合异常提供新的生物标志物，但当前阶段仍属基础研究。

（完）

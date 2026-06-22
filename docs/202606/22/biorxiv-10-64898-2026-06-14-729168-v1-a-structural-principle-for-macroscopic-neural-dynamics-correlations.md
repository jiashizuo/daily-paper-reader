---
title: A Structural Principle for Macroscopic Neural Dynamics Correlations
title_zh: 宏观神经动力学相关性的结构原理
authors: "Wu, Q., Wen, Q., Liu, C."
date: 2026-06-17
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.729168v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: 结构连接决定功能相关性
tldr: 大脑结构连接如何产生宏观神经动力学相关性是神经科学的核心问题。本文通过动力学平均场理论和随机神经网络模型，发现耦合相关性（脑区输入连接轮廓的相似性）是决定动力学相关性的关键结构因素。耦合相关性的特征值谱决定结构-功能映射形式：体谱导致精确线性关系，而生物中常见的长尾谱产生近似线性映射，且长尾谱能复现经验数据中耦合相关性的量值和尺度不变性。该理论在人类、小鼠和果蝇的多模态数据中得到验证，为结构连接组学与涌现脑动力学之间提供了定量桥梁。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有结构-功能关系缺乏基于第一性原理的机制解释，需要从结构连接出发定量预测宏观神经动力学相关性。
method: 利用动力学平均场理论和随机神经网络模型，推导耦合相关性（输入连接轮廓相似性）与动力学相关性的解析关系，并通过数值模拟和跨物种实证数据验证。
result: 耦合相关性线性决定动力学相关性，其映射形式由特征值谱决定；生物长尾谱能复现经验数据中非零且尺度不变的动力学相关性。
conclusion: 耦合相关性是连接结构连接与宏观动力学相关性的核心结构原则，为理解大脑结构-功能关系提供了定量框架，并适用于一般复杂网络系统。
---

## 摘要
神经科学的一个核心问题是大脑的结构连接如何产生其涌现的、相关的动力学。这些大规模动力学相关性是支持认知功能的功能网络的基础。在这里，我们识别出耦合相关性——大脑区域输入连接轮廓的相似性——作为宏观神经动力学相关性的关键结构决定因素。利用动态平均场理论和随机神经网络模型的数值模拟，我们证明了耦合相关性定量地支配着动力学相关性。这种结构-功能映射的函数形式由耦合相关矩阵的特征值谱决定：具有体特征谱的网络表现出精确的线性关系，而生物学上合理的重尾谱则产生近似线性的映射，除非耦合相关性的幅度接近1。特别是，重尾谱对于再现经验数据中观察到的适当幅度和尺寸不变性的耦合相关性是必要的，从而维持可能支持大系统中大脑功能的非消失动力学相关性。近似线性的理论预测在包括人类、小鼠和果蝇的结构耦合和神经动力学的经验数据集中得到了一致验证。总之，这些结果提供了一个将宏观脑网络结构与涌现的神经动力学联系起来的机制性和定量框架——这是迈向大脑结构-功能关系理论的关键一步。

意义声明：大脑的布线如何产生其协调活动是神经科学中一个基本未解决的问题。先前的研究已经确定了结构和功能连接之间的相关性，但这些关系缺乏机制性的、第一性原理的解释。在这里，我们利用动态平均场理论和随机神经网络模型推导出一个分析框架，表明一个单一的结构统计量——耦合相关性，即大脑区域输入连接轮廓的相似性——线性且因果地决定了相关神经动力学的幅度。我们进一步表明，生物结构连接中的重尾特征值谱对于维持跨物种观察到的强、尺寸不变的功能相关性是必要的。在人类、小鼠和果蝇中使用多种成像和连接组模态验证后，这一原理可能为结构连接组学和涌现的大脑动力学之间提供定量桥梁，其影响扩展到广泛类别的复杂网络系统。

## Abstract
A central question in neuroscience is how the brains structural connectivity gives rise to its emergent, correlated dynamics. These large-scale dynamical correlations underlie functional networks that support cognitive functions. Here, we identify coupling correlation--the similarity between the input connectivity profiles of brain regions--as a key structural determinant of macroscopic neural dynamical correlation. Using dynamical mean-field theory (DMFT) and numerical simulations of random neural network models, we demonstrate that coupling correlation quantitatively governs dynamical correlation. The functional form of this structure-function mapping is dictated by the eigenvalue spectrum of the coupling correlation matrix: networks with bulk eigenspectra exhibit an exact linear relationship, whereas biologically plausible long-tailed spectra yield an approximately linear mapping except when the magnitude of coupling correlation approaches unity. Particularly, a long-tailed spectrum is necessary to reproduce the appropriate magnitude and size-invariance of coupling correlations observed in empirical data, thereby sustaining non-vanishing dynamical correlations that may support brain function in large systems. The theoretical prediction of approximate linearity is consistently validated using empirical datasets that include both structural coupling and neural dynamics in humans, mice, and Drosophila. Together, these results provide a mechanistic and quantitative framework linking macroscopic brain network structure to emergent neural dynamics--an essential step toward a theory of structure-function relationship in the brain.

Significance StatementHow the brains wiring gives rise to its coordinated activity is a fundamental unsolved problem in neuroscience. Prior work has identified correlations between structural and functional connectivity, but these relationships lacked a mechanistic, first-principles explanation. Here, we derive an analytical framework using Dynamical Mean-Field Theory and random neural network models to show that a single structural statistic--coupling correlation, the similarity between the input connectivity profiles of brain regions--linearly and causally determines the magnitude of correlated neural dynamics. We further show that a long-tailed eigenvalue spectrum in biological structural connectivity is necessary to sustain the strong, size-invariant functional correlations observed across species. Validated in humans, mice, and Drosophila using multiple imaging and connectome modalities, this principle may provide a quantitative bridge between structural connectomics and emergent brain dynamics, with implications extending to a broad class of complex networked systems.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化、深入、客观的中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大脑的结构连接（即神经元或脑区之间的物理布线）如何产生其涌现的、相关的宏观神经动力学（即功能连接）？这是神经科学中一个基本未解决的问题。
- **研究背景**：先前的研究已经观察到结构连接与功能连接之间存在相关性，但这种关系缺乏基于第一性原理的机制性解释。现有方法多为描述性统计，未能揭示结构如何因果性地决定动力学。
- **整体含义**：本文旨在建立一个定量的、机制性的理论框架，将宏观脑网络的结构与涌现的神经动力学联系起来，为理解大脑的结构-功能关系提供关键一步。该理论不仅适用于神经科学，也可能推广到其他复杂网络系统。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：论文识别并定义了一个关键的结构统计量——**耦合相关性**，即两个脑区输入连接轮廓的相似性。作者提出，耦合相关性是决定宏观神经动力学相关性的核心结构因素。
- **关键技术细节**：
    1.  **理论推导**：利用**动力学平均场理论**和**随机神经网络模型**，从第一性原理出发，推导出耦合相关性（\(C_{ij}\)）与动力学相关性（\(D_{ij}\)）之间的解析关系。
    2.  **映射形式**：研究发现，结构-功能映射的函数形式由耦合相关矩阵的特征值谱决定：
        - **体谱**：如果特征值谱是紧凑的（体谱），则动力学相关性精确地线性依赖于耦合相关性。
        - **长尾谱**：在生物学上更合理的重尾（长尾）特征值谱情况下，映射变为近似线性，除非耦合相关性的幅度接近1。
    3.  **关键发现**：长尾谱对于复现经验数据中观察到的**适当量值**和**尺度不变性**（即系统规模增大时，动力学相关性不会消失）是必要的。这解释了为什么大型生物神经网络能维持非零的功能相关性。
- **公式或算法流程（文字说明）**：
    - 论文首先构建了一个随机神经网络模型，其中每个脑区的动力学由其自身状态和来自其他脑区的输入决定。
    - 通过DMFT，将高维非线性动力学问题简化为一个有效的一维随机过程。
    - 推导出动力学相关性的稳态解，该解直接与耦合相关矩阵的元素相关。
    - 通过分析耦合相关矩阵的特征值谱，特别是其尾部行为，来预测动力学相关性的线性度、量值和尺度依赖性。

### 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法

- **数据集**：使用了跨物种的多模态数据，包括：
    - **人类**：结构连接（扩散MRI）和功能动力学（fMRI）。
    - **小鼠**：结构连接（病毒示踪）和功能动力学（fMRI/钙成像）。
    - **果蝇**：结构连接（电子显微镜重建的完整连接组）和功能动力学（钙成像）。
- **Benchmark**：论文没有明确提及一个单一的、标准化的benchmark。其验证方式是将理论预测（近似线性映射）与从这些真实数据中计算出的耦合相关性和动力学相关性进行定量比较。
- **对比方法**：论文主要对比了其理论预测与经验数据。它没有直接与其他预测结构-功能关系的模型（如基于图论的模型）进行系统性对比，而是通过数值模拟验证了不同特征值谱（体谱 vs. 长尾谱）下的理论预测，并指出只有长尾谱才能匹配经验数据。

### 4. 资源与算力

- **文中未明确说明**：论文摘要和提供的文本内容中，没有提及任何关于计算资源（如GPU型号、数量、训练时长）的具体信息。这通常意味着实验主要依赖于理论推导和相对轻量级的数值模拟，而非大规模深度学习训练。

### 5. 实验数量与充分性

- **实验数量**：论文进行了多组实验，包括：
    - **数值模拟**：在不同网络规模、不同特征值谱（体谱、长尾谱）下，验证耦合相关性与动力学相关性之间的理论关系。
    - **跨物种实证验证**：在人类、小鼠和果蝇三个物种的数据集上，检验了近似线性映射的理论预测。
- **充分性与客观性**：
    - **充分性**：实验设计较为充分。理论推导、数值模拟和跨物种实证验证构成了一个完整的证据链。特别是跨物种验证，极大地增强了结论的普适性。
    - **客观性**：论文使用了公开或可获取的实证数据，并基于第一性原理进行推导，方法客观。但缺乏与其他竞争性模型的直接、定量比较，这在一定程度上限制了对其方法优越性的全面评估。

### 6. 论文的主要结论与发现

1.  **耦合相关性是核心结构决定因素**：脑区输入连接轮廓的相似性（耦合相关性）是决定宏观神经动力学相关性的关键结构因素。
2.  **线性映射关系**：耦合相关性线性地支配着动力学相关性。这种映射的函数形式由耦合相关矩阵的特征值谱决定。
3.  **长尾谱的必要性**：生物结构连接中常见的重尾特征值谱，对于产生经验数据中观察到的、具有适当量值和尺度不变性的动力学相关性是必要的。体谱网络无法维持大型系统中的非零动力学相关性。
4.  **跨物种验证**：近似线性的理论预测在人类、小鼠和果蝇的实证数据中得到了验证，表明该原理具有跨物种的普适性。

### 7. 优点：方法或实验设计上的亮点

- **第一性原理推导**：从动力学平均场理论和随机网络模型出发，提供了机制性的解释，而非仅仅是描述性统计。
- **简洁而强大的核心变量**：将复杂的结构-功能关系归结为一个单一的结构统计量——耦合相关性，使问题变得清晰且可量化。
- **跨物种验证**：在人类、小鼠和果蝇三个差异巨大的物种上进行验证，极大地增强了结论的普适性和稳健性。
- **理论预测与实证数据的紧密结合**：理论推导出的预测（如长尾谱的必要性、近似线性映射）能够被实证数据直接检验，形成了理论与实验的闭环。

### 8. 不足与局限

- **模型简化**：随机神经网络模型和DMFT是对真实生物神经网络的极大简化，可能忽略了神经元类型、突触可塑性、局部微环路等复杂因素。
- **缺乏与其他模型的对比**：论文没有系统地将其理论预测与现有的其他结构-功能关系模型（如基于图论、通信效率或动态因果模型的预测）进行定量比较，难以评估其相对优势。
- **因果性验证有限**：虽然论文声称耦合相关性“因果地”决定了动力学相关性，但实证数据部分主要展示的是相关性，而非严格的因果实验（如通过操控结构连接来观察动力学变化）。
- **应用限制**：该理论主要关注宏观尺度（脑区级别）的动力学相关性，对于微观或介观尺度的神经活动，其适用性有待进一步研究。

（完）

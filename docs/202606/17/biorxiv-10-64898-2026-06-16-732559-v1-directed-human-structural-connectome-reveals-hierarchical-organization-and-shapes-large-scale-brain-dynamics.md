---
title: Directed Human Structural Connectome Reveals Hierarchical Organization and Shapes Large-Scale Brain Dynamics
title_zh: 定向人类结构连接组揭示层级组织并塑造大规模脑动力学
authors: "Huang, N., Wang, H. E., Triebkorn, P., Gandini Wheeler-Kingshott, C. A. M., Jedyank, M., David, O., Destexhe, A., D'Angelo, E. U., Pedersen, N. P., Jirsa, V."
date: 2026-06-17
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.16.732559v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 9.0
evidence: 有向人类结构连接组揭示层级组织
tldr: 人类结构连接组通常由弥散加权成像和纤维追踪构建，但无法区分传入与传出连接，导致网络无向且忽视层级组织。本研究通过跨物种连接蓝图将猕猴示踪投射模式迁移至人类，构建有向人类结构连接组（DHSC）。拓扑分析显示其具有生物合理性、小世界网络和基于方向性的层级结构，且方向性重塑了感觉输入的传播与持久性。DHSC最佳捕捉了刺激诱发脑活动的经验时空动态，表明解剖方向性是大尺度脑组织与动态的关键决定因素。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有无向结构连接组无法反映解剖连接的方向性，限制了脑网络层级组织与动态机制的理解。
method: 通过跨物种连接蓝图，将猕猴示踪剂衍生的投射模式迁移至人类，构建有向人类结构连接组（DHSC）。
result: DHSC表现出生物合理性、小世界网络和方向性层级，方向性重塑了感觉输入的传播与持久性，并最佳捕捉了刺激诱发脑活动的时空动态。
conclusion: 解剖方向性是大尺度脑组织与动态的关键决定因素，有向连接组在大规模脑模拟中具有潜在优势。
---

## 摘要
人类结构连接组通常源自扩散加权成像（DWI）和纤维束成像，提供了全脑连接的宏观描述，是网络神经科学、大规模脑模拟和个性化数字脑孪生的结构基础。然而，基于纤维束成像的连接组从根本上受限于无法区分传入和传出连接，从而产生无向网络，因此忽略了由解剖连接方向性所强加的层级组织。在本研究中，我们通过使用跨物种连接蓝图将示踪剂衍生的投射模式从猕猴转移到人类，引入了一种定向人类结构连接组（DHSC）。DHSC的拓扑分析显示出生物学合理性、小世界网络组织以及基于方向性的层级结构，这提供了人类脑网络的层级组织。在脑动力学背景下，方向性的引入重塑了感觉输入的传播和持久性。DHSC还最佳地捕捉了刺激诱发脑活动的经验时空动态。研究结果表明，解剖方向性是大规模脑组织和动力学的关键决定因素。这提供了证据表明定向连接组可能在大规模人脑模拟中具有潜在优势。所得到的DHSC以及所有相关分析和数据均可公开获取。

## Abstract
The human structural connectome, most commonly derived from diffusionweighted imaging (DWI) and tractography, provides a macroscopic description of whole-brain wiring and serves as the structural foundation of network neuroscience, large-scale brain simulations, and personalized digital brain twins. However, tractography-derived connectomes are fundamentally limited by their inability to distinguish afferent from efferent connections, yielding networks that are undirected and therefore blind to the hierarchical organization imposed by the directionality of anatomical connections. In this study, we introduce a directed human structural connectome (DHSC) by transferring tracer-derived projection patterns from macaque to human using cross-species connectivity blueprints. Topological analysis of the DHSC manifests biological plausibility, a small-world network organization, and a directionality-based hierarchy, which offer the hierarchical organization of human brain networks. In the context of brain dynamics, the introduction of directionality reshapes the propagation and persistence of sensory inputs. DHSC also best captures the empirical spatiotemporal dynamics of stimulus-evoked brain activity. The findings demonstrate that anatomical directionality is a critical determinant of large-scale brain organization and dynamics. This provides evidence that directed connectome may offer potential advantages in large-scale simulations of the human brain. The resulting DHSC, along with all related analyses and data are openly available.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将根据您提供的论文元数据和摘要，对这篇论文进行结构化、深入、客观的总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前基于弥散加权成像（DWI）和纤维束成像构建的人类结构连接组（SC）是**无向的**，无法区分神经纤维的传入（afferent）和传出（efferent）连接。这种局限性导致网络分析忽略了由解剖连接方向性所强加的**层级组织**，从而限制了对大规模脑网络组织原则和动力学机制的理解。
- **研究动机**：为了克服无向连接组的根本缺陷，引入解剖连接的方向性信息，从而更真实地反映大脑的层级结构和功能动态。
- **整体含义**：该研究旨在证明解剖方向性是大尺度脑组织和动力学的关键决定因素，并展示有向连接组在大规模人脑模拟中的潜在优势，为构建更精确的个性化数字脑孪生提供结构基础。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用跨物种连接蓝图，将猕猴（macaque）大脑中通过示踪剂（tracer）实验获得的、具有方向性的投射模式，迁移到人类大脑中，从而构建一个**有向人类结构连接组（Directed Human Structural Connectome, DHSC）**。
- **关键技术细节**：
    1.  **跨物种映射**：首先，需要建立猕猴和人类大脑之间的对应关系（例如，基于共同的大脑区域图谱或空间配准）。
    2.  **蓝图转移**：将猕猴示踪剂衍生的、已知方向（从源区域到目标区域）的投射模式，作为“蓝图”或“模板”。
    3.  **构建DHSC**：将这个蓝图应用到人类的无向结构连接组上。具体来说，对于人类大脑中的每一对区域，如果它们在猕猴对应区域之间存在有向连接，那么就在人类连接组中赋予该连接一个方向。最终得到一个包含方向信息的人类全脑结构网络。
- **算法流程（文字说明）**：
    1.  **输入**：人类无向结构连接组（来自DWI/纤维束成像） + 猕猴有向示踪剂连接组。
    2.  **配准**：将猕猴和人类的大脑图谱进行跨物种配准，建立区域对应关系。
    3.  **方向赋值**：对于人类连接组中的每一条边（连接），查找其在猕猴对应区域间的连接方向。如果猕猴中存在从区域A到区域B的投射，则在人类连接组中定义一条从A到B的有向边。
    4.  **输出**：有向人类结构连接组（DHSC）。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：
    - **人类数据**：用于构建无向结构连接组的扩散加权成像（DWI）数据。
    - **猕猴数据**：用于提供方向性蓝图的示踪剂（tracer）投射数据。
    - **经验脑活动数据**：用于验证DHSC动态特性的刺激诱发脑活动时空动态数据。
- **基准（Benchmark）**：论文将DHSC与传统的**无向结构连接组（Undirected SC）** 作为基准进行比较。
- **对比方法**：
    - 主要对比对象是**无向结构连接组**。
    - 在评估脑动力学时，可能对比了使用无向连接组进行模拟的结果，以凸显方向性的影响。

### 4. 资源与算力

- **文中未明确说明**：论文摘要和元数据中未提及具体的GPU型号、数量、训练时长等算力信息。这可能是因为该研究侧重于方法构建和拓扑分析，而非大规模深度学习模型训练，因此算力需求相对较低，或作者未将其作为重点描述。

### 5. 实验数量与充分性

- **实验数量**：从摘要推断，实验主要围绕以下几个方面展开：
    1.  **拓扑分析**：对DHSC进行生物学合理性、小世界网络、方向性层级结构等分析。
    2.  **动力学模拟**：比较使用DHSC和无向SC模拟感觉输入传播和持久性的差异。
    3.  **经验数据拟合**：评估DHSC在捕捉刺激诱发脑活动时空动态方面的表现。
- **充分性与客观性**：
    - **充分性**：实验设计覆盖了从网络拓扑到动态模拟，再到经验数据验证的完整链条，逻辑较为完整。通过对比无向连接组，能够清晰地展示方向性带来的影响。
    - **客观性**：结论基于定量分析（如拓扑指标、动态拟合度），具有客观性。但实验的充分性取决于具体的数据集规模、对比方法的数量以及统计检验的严谨性。摘要中未提供这些细节，因此无法完全判断其充分性。

### 6. 论文的主要结论与发现

1.  **DHSC具有生物学合理性**：其拓扑结构符合已知的脑网络特征。
2.  **DHSC呈现小世界网络组织**：这与高效的信息处理能力相符。
3.  **DHSC揭示了基于方向性的层级结构**：这是无向连接组无法提供的，为理解人脑的层级组织提供了新视角。
4.  **方向性重塑了感觉输入的传播与持久性**：有向连接改变了信息在大脑中的流动路径和停留时间。
5.  **DHSC最佳捕捉了刺激诱发脑活动的经验时空动态**：与无向连接组相比，DHSC能更准确地模拟真实的大脑活动模式。
6.  **核心结论**：解剖方向性是大规模脑组织和动力学的**关键决定因素**，有向连接组在大规模人脑模拟中具有**潜在优势**。

### 7. 优点：方法或实验设计上的亮点

- **创新性**：首次通过跨物种蓝图转移的方式，系统性地为人类结构连接组赋予了方向性，解决了纤维束成像无法区分传入/传出连接的根本性难题。
- **生物学基础**：方法基于猕猴示踪剂实验的黄金标准数据，具有坚实的生物学基础，而非纯粹的数学或统计推断。
- **验证链条完整**：从拓扑结构分析到动力学模拟，再到经验数据验证，形成了一个完整的证据链，有力地支持了其核心论点。
- **开放科学**：论文承诺公开所有数据和代码，促进了研究的可重复性和后续发展。

### 8. 不足与局限

- **跨物种映射的准确性**：猕猴和人类大脑在结构和功能上存在差异，将猕猴的投射模式直接迁移到人类，其准确性和普适性可能存在偏差。某些人类特有的连接或区域可能无法被准确映射。
- **依赖示踪剂数据的质量**：DHSC的质量高度依赖于猕猴示踪剂连接组的完整性和准确性。如果猕猴数据本身存在缺失或噪声，会直接影响DHSC的可靠性。
- **实验覆盖的局限性**：摘要中未提及对不同脑区、不同模态数据或不同疾病模型的验证。其结论是否适用于所有脑区和所有类型的脑动态，尚需更多实验验证。
- **应用限制**：该方法目前主要服务于大规模脑模拟。对于需要精确到单个神经元或突触级别的微观研究，其宏观方向性信息可能不够精细。此外，构建过程依赖于高质量的猕猴数据，限制了其在无法获得此类数据的物种或个体上的应用。

（完）

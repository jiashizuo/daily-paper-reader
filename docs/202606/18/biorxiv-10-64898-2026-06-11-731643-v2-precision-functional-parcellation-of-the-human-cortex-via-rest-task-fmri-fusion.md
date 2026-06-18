---
title: Precision Functional Parcellation of the Human Cortex via Rest-Task fMRI Fusion
title_zh: 通过静息态与任务态fMRI融合实现人脑皮层精确功能分区
authors: "Zhi, D., Du, J., Whitfield-Gabrieli, S., Diedrichsen, J., Ge, T."
date: 2026-06-16
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.11.731643v2.full.pdf"
tags: ["query:fmri-brain-network"]
score: 9.0
evidence: fMRI脑分区与功能连接
tldr: 现有皮层分区方法多依赖静息态fMRI，忽略了任务态数据提供的功能特化信息。本文提出mRBM-HBP框架，通过多伯努利受限玻尔兹曼机融合静息态与任务态fMRI，实现高效灵活的个体和群体皮层分区。结果表明，融合分区在准确性和个体特异性上优于单一模态方法，尤其当个体数据有限时。该工作为精准脑功能图谱构建提供了新途径。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有皮层分区方法主要依赖静息态fMRI，未能充分利用任务态数据提供的互补功能特化信息。
method: 提出mRBM-HBP，一种可扩展的层次贝叶斯框架，通过多伯努利受限玻尔兹曼机融合静息态与任务态fMRI数据。
result: 融合分区在准确性和个体特异性上优于单一模态方法，且计算成本显著降低。
conclusion: 整合静息态与任务态fMRI可提升皮层分区的精度和可靠性，尤其适用于个体数据有限的情况。
---

## 摘要
个体特异性皮层分区能够表征常被群体图谱掩盖的脑网络组织，对基础神经科学和转化应用具有广泛意义。然而，现有方法主要依赖静息态fMRI，未能充分利用任务诱发数据——后者提供了关于功能特化的互补信息。这一局限性部分反映了整合任务设计、样本量和皮层覆盖范围各异的异质性数据集的挑战。本文提出mRBM-HBP，一种可扩展的层次贝叶斯框架，通过引入多项受限玻尔兹曼机建模空间依赖性，实现了跨不同数据集对静息态和任务态fMRI的高效灵活整合，并推断出群体水平和个体水平的皮层分区。我们证明，mRBM-HBP在显著降低计算成本的同时，达到了与基于静息态的最先进分区方法相当的性能。通过整合大规模任务态fMRI数据集，我们推导出基于任务的分区，并表明静息态和任务条件揭示了基本一致的宏观网络，而任务数据提供了状态特异的功能边界细化。此外，融合静息-任务的群体图谱提高了推断分区的准确性、可靠性和个体特异性，尤其在个体水平数据有限时。这些结果表明，整合静息态和任务态fMRI增强了脑功能组织的精确映射。

## Abstract
Individual-specific cortical parcellations enable the characterization of brain network organization that is often obscured by population-level atlases, with broad implications for both basic neuroscience and translational applications. However, existing methods rely primarily on resting-state fMRI and underutilize task-evoked data, which provide complementary information about functional specialization. This limitation partly reflects the challenge of integrating heterogeneous datasets that differ in task design, sample size, and cortical coverage. Here, we present mRBM-HBP, a scalable hierarchical Bayesian framework that incorporates a multinomial restricted Boltzmann machine to model spatial dependencies, enabling efficient and flexible integration of resting-state and task fMRI across diverse datasets and inference of both group-level and individual-level cortical parcellations. We show that mRBM-HBP achieves performance comparable to state-of-the-art resting-state-based parcellation methods while substantially reducing computational cost. By integrating large-scale task-fMRI datasets, we derive a task-based parcellation and demonstrate that resting-state and task conditions reveal largely consistent macroscopic networks, while task data provide state-specific refinements of functional boundaries. Moreover, a fused rest-task group-level atlas improves the accuracy, reliability, and individual specificity of inferred parcellations, particularly when individual-level data are limited. These results indicate that integrating resting-state and task fMRI enhances precision mapping of functional brain organization.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将根据您提供的论文内容，以中文、Markdown 格式，对这篇论文进行结构化、深入、客观的总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有的人脑皮层功能分区方法主要依赖静息态功能磁共振成像（resting-state fMRI），未能充分利用任务态fMRI（task fMRI）数据。任务态数据能提供关于大脑功能特化的互补信息，但因其任务设计、样本量和皮层覆盖范围的异质性，整合难度大。
- **研究动机**：开发一种能够高效、灵活地整合来自不同数据集的静息态和任务态fMRI数据的方法，从而构建更精确、更具个体特异性的皮层功能图谱。这旨在解决精准功能映射（PFM）中的一个主要瓶颈：需要大量个体静息态数据才能获得可靠的分区。
- **整体含义**：该研究证明了任务态fMRI是静息态fMRI的宝贵补充数据源，通过融合两者可以显著提升个体水平皮层分区的准确性、可靠性和特异性，尤其是在个体数据有限的情况下，为精准脑功能图谱构建提供了新途径。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：提出一个名为 **mRBM-HBP** 的可扩展层次贝叶斯框架，用于融合静息态和任务态fMRI数据，同时推断群体水平和个体水平的皮层分区。
- **关键技术细节**：
    1.  **层次贝叶斯分区（HBP）框架**：该框架包含两个核心组件：
        - **空间排列模型**：定义皮层位置潜在功能网络标签的分布，并建模这些标签在皮层表面的组织方式。群体水平的模型共享组织结构，并用于约束和正则化个体水平的分区。
        - **数据集特异性发射模型**：定义在给定个体分区条件下，观测数据（如功能连接或任务激活图）的似然函数，将潜在网络分配与模态和数据集特异的功能测量联系起来。
    2.  **多项受限玻尔兹曼机（mRBM）**：作为空间排列模型的核心创新。与传统的马尔可夫随机场（MRF）不同，mRBM通过一个隐藏层与分区标签层之间的交互来捕捉空间相关性，而非依赖相邻标签的直接依赖关系。
        - **架构**：包含输入层（观测数据）、分区层（潜在网络标签）和隐藏层。分区层和隐藏层通过权重连接，无层内连接。
        - **优势**：这种二分图架构允许对网络标签和连接权重进行并行的、逐层的更新，从而在高维设置下实现比MRF（需要顺序的、逐顶点的更新）更高效的模型拟合，显著降低计算成本。
    3.  **模型训练与推断**：
        - **训练**：利用包含静息态功能连接和任务态激活图的数据集语料库，通过期望最大化（EM）算法联合估计所有参数，学习群体水平的概率分区。
        - **推断**：将学习到的群体分区作为先验，给定新个体的静息态数据，推断其个体特异性概率分区。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：
    - **训练/验证集**：
        - **HCP-YA**：40名受试者的静息态fMRI数据（约60分钟/人）。
        - **任务态数据集**：三个任务fMRI数据集，涵盖广泛认知域：
            - 多域任务电池（MDTB，N=24，47个任务条件）
            - Nakai & Nishimoto数据集（N=6，103个任务条件）
            - 个体脑图谱（IBC，N=12，208个任务条件）
    - **测试集**：
        - **HCP-YA**：200名独立受试者，用于评估个体水平分区。
        - **哈佛精准神经影像（HPN）数据集**：11名受试者，每人有17-24个静息态run和7个任务域的数据，用于独立复制验证。
- **基准（Benchmark）**：
    - 主要对比方法为 **MS-HBM**（多会话层次贝叶斯模型），一种广泛使用的、基于静息态fMRI的贝叶斯皮层分区方法。
- **对比实验**：
    1.  **静息态性能对比**：在HCP-YA上，仅使用静息态数据训练，对比mRBM-HBP与MS-HBM的群体和个体分区性能。
    2.  **任务态分区构建**：仅使用三个任务数据集训练，构建任务态群体分区，并与静息态分区进行定性定量比较。
    3.  **融合分区性能评估**：在HCP-YA和HPN上，对比使用“静息态先验”与“融合（静息+任务）先验”进行个体水平推断的性能。
    4.  **数据量影响分析**：在HCP-YA和HPN上，评估不同数量的个体静息态数据（如1个run vs 2个run）对分区性能的影响。
    5.  **可靠性与个体特异性分析**：评估分区的重测信度和个体识别准确率。

### 4. 资源与算力

- 论文明确提到，所有模型训练和评估均在 **NVIDIA RTX 6000 Ada Generation GPU** 上完成，使用 **Python 3.10, CUDA 12.0, PyTorch 2.5.1**，或在高性能计算环境中进行。
- 具体训练时长未明确给出，但论文强调了mRBM-HBP的计算效率优势：在HCP-YA测试集上，为10个个体推断分区，MS-HBM平均需要273.0秒，而mRBM-HBP在CPU上仅需16.3秒，在GPU上仅需1.54秒，实现了约16倍和180倍的加速。

### 5. 实验数量与充分性

- **实验数量**：实验设计较为全面，涵盖了：
    - 在HCP-YA上的基准对比（静息态 vs. MS-HBM）。
    - 任务态分区的构建与对比。
    - 在HCP-YA和HPN两个独立数据集上的融合先验与静息态先验的对比。
    - 不同个体数据量（1个run vs 2个run）的消融实验。
    - 分区的可靠性与个体识别分析。
    - 在HPN上针对特定任务（如语言、运动）的详细案例分析。
- **充分性与客观性**：
    - **充分**：实验覆盖了方法的核心假设（融合优于单一模态），并在两个不同规模、不同采集协议的数据集上进行了验证，增强了结论的普适性。使用了多种互补的评估指标（任务异质性、DCBC、静息态同质性、Dice系数、个体识别率）。
    - **客观公平**：与当前最先进的方法（MS-HBM）进行了直接对比，并使用了相同的训练/验证/测试划分。评估指标是领域内公认的。作者也指出了评估指标本身的局限性，体现了客观性。

### 6. 论文的主要结论与发现

1.  **mRBM-HBP性能优越**：在仅使用静息态数据时，mRBM-HBP的性能与最先进的MS-HBM相当，但在任务态评估指标上更优，且计算成本降低了100倍以上（GPU加速）。
2.  **静息态与任务态分区高度一致**：基于任务数据构建的群体分区与基于静息态的分区在宏观网络组织上高度相似，但任务数据能提供状态特异的功能边界细化。
3.  **融合先验提升个体分区质量**：将静息态和任务态数据融合成群体先验，显著提高了个体水平分区的准确性（任务异质性更低、DCBC更高）、可靠性（重测信度更高）和个体特异性（个体识别准确率更高）。
4.  **融合先验在数据有限时优势更明显**：当个体可用的静息态数据较少时（如仅有一个run），融合先验带来的性能提升最为显著。这表明融合先验能有效弥补个体数据不足的缺陷。
5.  **结论**：整合静息态和任务态fMRI是提升人脑皮层精确功能映射的有效策略，尤其适用于大规模人群研究和临床场景，因为在这些场景中获取大量个体静息态数据往往不切实际。

### 7. 优点：方法或实验设计上的亮点

- **方法论创新**：提出mRBM作为空间排列模型，巧妙解决了传统MRF计算成本高的问题，同时有效捕捉了神经影像数据的空间平滑性。这是对现有贝叶斯分区框架的重要改进。
- **数据融合能力**：HBP框架能够灵活整合来自不同模态（静息、任务）、不同任务设计、不同样本量的异质性数据集，这是其核心优势。
- **实验设计严谨**：在HCP-YA和HPN两个独立数据集上进行验证，增强了结论的稳健性和泛化能力。评估指标全面，从任务和静息两个角度评估分区质量。
- **实际应用价值**：明确指出融合先验在个体数据有限时优势最大，直接回应了精准功能映射在实际应用（如临床、大规模研究）中面临的数据瓶颈问题，具有很高的转化潜力。

### 8. 不足与局限

- **任务数据集的偏差风险**：构建任务态分区时，虽然整合了三个数据集，但不同认知域或皮层区域的代表性可能不均衡，存在潜在的偏差。作者承认未系统评估特定任务或数据集的包含/排除对分区质量的影响。
- **网络数量（K）的选择**：如何选择最优的功能网络数量（K）仍是未解决的挑战。虽然论文在15和17网络模型上都验证了结论，但缺乏数据驱动的K值选择方法。
- **评估指标的局限性**：
    - 任务异质性和静息态同质性主要评估网络内一致性，对边界准确性和网络间分离度不敏感。
    - DCBC评估局部边界锐度，但需要丰富的任务激活图谱。
    - 平均z值可能偏向强激活区域，忽略分布广泛但功能相关的区域。
    - 跨任务和网络的聚合指标可能掩盖局部错误。
- **个体推断仅依赖静息态**：虽然融合了任务数据到群体先验，但个体水平的推断仍仅使用静息态数据。作者指出框架可以扩展以纳入个体任务fMRI，这可能是未来提升性能的方向。
- **计算资源需求**：虽然比MS-HBM快很多，但训练一个融合模型仍然需要GPU资源，对于计算资源有限的实验室可能仍是一个门槛。

（完）

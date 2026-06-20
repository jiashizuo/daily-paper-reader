---
title: "Functional Templates in fMRI: Building Accurate and Interpretable Group-Level Decoders"
title_zh: fMRI中的功能模板：构建准确且可解释的群体级解码器
authors: "Barbarant, P.-L., Meyniel, F., Thirion, B."
date: 2026-06-15
pdf: "https://www.biorxiv.org/content/10.64898/2026.05.21.726781v2.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: fMRI功能对齐与群体级解码器
tldr: 针对fMRI群体解码中个体间功能变异性的挑战，本文系统比较了多种功能对齐方法（最优传输、Procrustes、岭回归、共享响应模型）和模板构建策略。在多个任务数据集上，基于最优传输构建的群体模板在解码准确率、对新被试的泛化能力以及皮层信号拓扑保持方面均表现最优，为功能模板在任务解码中的广泛应用提供了指导。
source: biorxiv
selection_source: fresh_fetch
motivation: 功能模板在fMRI分析中应用不足，缺乏系统比较和明确指南，现有评估局限于电影观看范式。
method: 在任务解码框架下，系统比较最优传输、Procrustes、岭回归和共享响应模型等对齐方法及多种模板构建策略。
result: 最优传输构建的群体模板解码准确率最高，对个体偏差不敏感，泛化能力强，且保持皮层信号拓扑。
conclusion: 最优传输功能模板是构建准确且可解释的群体级解码器的有效方法。
---

## 摘要
个体间变异性是跨被试解码脑活动的主要挑战。虽然标准解剖配准流程减少了形态差异，但无法捕捉被试间的功能变异性。功能对齐方法通过建立个体间体素对应关系来解决这一问题，从而构建共享功能空间。该共享空间可通过生成功能模板扩展到群体水平。然而，尽管已有相关工具箱，功能模板在fMRI分析中仍未被充分利用。由于现有方法多样且缺乏明确指南，目前采用这一方法较为困难。功能模板的全面评估仅限于观影范式。本研究在更通用的任务解码框架下，系统比较了功能对齐方法（最优传输、Procrustes、岭回归和共享响应模型）与模板构建策略（样本内、样本外、成对）。在该框架中，解码精度衡量了个体激活模式的对齐程度。跨多个任务和数据集，我们证明使用最优传输构建的群体模板（a）解码精度最高，（b）不受单个被试显著偏差影响，有利于推广至新被试，（c）保留了皮层信号拓扑结构。

## Abstract
Inter-individual variability poses a significant challenge in decoding brain activity across subjects. While standard anatomical registration procedures reduce morphological differences, they fail to capture functional variability between subjects. Functional alignment methods address this issue by establishing voxel-to-voxel correspondences between pairs of individuals, thereby constructing a shared functional space. This shared space can be extended at the group level by generating a functional template. However, despite the availability of toolboxes, functional templates remain underused in fMRI analysis. Adopting this approach is currently difficult due to the diversity of existing methods and the lack of clear guidelines. Comprehensive evaluations of functional templates are limited to movie-watching paradigms. Here, we extensively compare functional alignment methods (Optimal Transport, Procrustes, Ridge regression, and Shared Response Model) and template construction strategies (in-sample, out-of-sample, pairwise) within the more general framework of task decoding. In this framework, decoding accuracy measures how well individual activation patterns align. Across multiple tasks and datasets, we demonstrate that population templates built using Optimal Transport (a) yield the highest decoding accuracy, (b) are not significantly biased by individual subjects, which facilitates generalization to new subjects, and (c) preserve the cortical signal topography.

---

## 论文详细总结（自动生成）

好的，以下是对该论文的详细中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在功能磁共振成像（fMRI）群体分析中，个体间的大脑功能存在巨大差异。传统的解剖学配准（将不同被试的大脑对齐到标准模板）无法解决这种功能上的变异性，导致群体级解码（如预测被试正在执行的任务）的准确率受限。
- **研究动机**：功能对齐方法旨在通过建立个体间功能相似的体素对应关系来弥补这一缺陷。其中，构建一个共享的“功能模板”是一种有前景的策略，但该方法在任务解码领域应用不足，主要原因是：
    - 现有方法多样（如最优传输、Procrustes分析等），缺乏系统比较和明确的使用指南。
    - 现有评估多局限于自然观影范式，对任务解码的适用性未知。
    - 模板构建存在偏差风险（如包含测试被试信息会高估性能），且计算成本高。
- **整体含义**：本文旨在通过系统、全面的基准测试，为fMRI任务解码领域提供一个关于如何构建和使用功能模板的实用指南，特别是验证最优传输（Optimal Transport, OT）方法在构建准确、无偏且可解释的群体级解码器方面的优越性。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：在任务解码框架下，系统比较不同的功能对齐方法和模板构建策略，以确定最优方案。核心是构建一个共享的“功能模板”空间，将所有被试的数据投影到该空间，然后在该空间训练和测试解码器。
- **关键技术细节**：
    1.  **对齐方法**：论文比较了四种将源被试数据映射到目标被试（或模板）空间的方法：
        - **Procrustes分析**：寻找一个正交旋转矩阵和缩放因子，最小化源与目标数据之间的差异。假设功能模式是刚性的。
        - **最优传输（OT）**：计算一个“传输计划”（耦合矩阵），以最小化将源被试的体素活动“搬运”到目标被试体素的成本。该方法更灵活，能处理非线性对应关系，并引入熵正则化（参数ε=0.1）以保证计算可行性。
        - **岭回归**：使用L2正则化的线性回归来学习映射矩阵。约束最弱，但不对称。
        - **共享响应模型（SRM）**：寻找一个低维的共享潜在空间，而非图像空间。模板不可直接映射到皮层，可解释性差。
    2.  **模板构建策略**：论文比较了三种策略：
        - **样本外模板**：在留一被试交叉验证中，每次排除测试被试，仅用其余被试构建模板。这是最严格、无偏的策略，但计算成本最高。
        - **样本内模板**：使用所有被试（包括测试被试）的数据构建一个统一的模板。计算成本低，但可能引入偏差，高估解码性能。
        - **成对对齐**：不构建模板，而是将每个训练被试直接对齐到测试被试的个体空间。性能通常最好，但计算成本高且没有统一的共享空间。
    3.  **分块对齐**：为降低计算复杂度并避免远距离体素的错误对应，采用分块策略。使用Schaefer图谱（400个脑区）将大脑划分为小块，在每个小块内独立计算对齐变换。
    4.  **算法流程**：模板构建通过交替最小化实现：先固定模板，估计每个被试到模板的映射；再固定映射，将所有被试数据投影到模板空间并平均，更新模板。迭代直至收敛。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：使用了三个公开数据集中的七个任务，涵盖不同认知领域和样本量：
    - **Individual Brain Charting (IBC)**：13名被试，包含ArchiSpatial、ArchiStandard、FaceBody、Language、HcpWm五个任务。
    - **StudyForrest**：10名被试，音乐聆听任务。
    - **CNeuroMod-THINGS**：3名被试，视觉物体识别任务。
- **基准（Baseline）**：**解剖学对齐**，即仅使用标准解剖模板进行配准，不进行任何功能对齐。
- **对比方法**：
    - **对齐方法**：最优传输（OT）、Procrustes分析、岭回归、共享响应模型（SRM）。
    - **模板策略**：样本内模板、样本外模板、成对对齐。
- **评估指标**：**任务解码准确率**。使用线性支持向量分类器（LinearSVC）进行留一被试交叉验证。

### 4. 资源与算力

- **未明确说明**：论文中未明确提及所使用的GPU型号、数量或具体的训练时长。作者提到，所有实验均基于CPU实现（特别是OT的Sinkhorn算法），并指出使用GPU加速可以显著提升性能。计算时间对比图（附录图9）展示了不同策略的总耗时，但未提供硬件配置细节。

### 5. 实验数量与充分性

- **实验数量**：实验设计非常充分，涵盖了：
    - **7个不同任务**：来自3个独立数据集，任务类型包括视觉、听觉、工作记忆、语言等。
    - **4种对齐方法**：OT、Procrustes、Ridge、SRM。
    - **3种模板策略**：样本内、样本外、成对。
    - **多个分析维度**：全局性能比较、偏差评估、空间特异性分析、计算时间对比。
    - **控制实验**：验证了脑区划分数量对结果影响不大（附录图10）。
- **充分性与公平性**：
    - **充分**：实验覆盖了主流方法和策略，并在多个任务上验证，结论具有较好的泛化性。
    - **客观公平**：
        - 采用严格的**留一被试交叉验证**，确保评估的泛化性。
        - 使用**样本外模板**作为无偏基准，公平比较不同方法。
        - 使用**Nadeau和Bengio校正t检验**进行统计显著性检验，考虑了交叉验证中样本非独立的问题。
        - 对齐和**解码使用同一任务的不同数据分割**，避免了外部数据引入的额外变异性，使比较更聚焦于功能对齐本身。

### 6. 论文的主要结论与发现

1.  **最优传输（OT）性能最优**：在所有策略下，基于OT构建的模板在解码准确率上显著优于解剖学基线和其他方法。OT是唯一能**持续**提升解码性能的方法。
2.  **OT模板无偏且稳健**：OT的样本内与样本外模板性能差距最小（偏差最小），表明其对新被试的加入不敏感，可以使用计算成本更低的样本内策略。而Procrustes、Ridge和SRM存在显著的正向偏差，样本内策略会高估性能。
3.  **OT保留空间特异性**：OT生成的模板在空间上更接近解剖学模板，能更好地保留皮层信号的拓扑结构和活动模式的稀疏性。相比之下，Procrustes和Ridge倾向于使活动图更稀疏，可能丢失部分信号。
4.  **其他方法表现不佳**：Procrustes、Ridge和SRM在样本外模板策略下，解码性能经常低于甚至显著低于解剖学基线，且存在大量失败案例（个体解码准确率下降）。
5.  **成对对齐 vs. 模板**：成对对齐性能通常优于模板策略，但OT的模板策略与成对对齐的性能差距最小，且计算成本远低于成对对齐。

### 7. 优点：方法或实验设计上的亮点

- **系统性与全面性**：首次在任务解码框架下，对多种功能对齐方法和模板构建策略进行了如此全面、系统的比较。
- **严谨的实验设计**：采用严格的交叉验证、统计检验和偏差分析，确保了结论的可靠性和公平性。
- **实用导向**：证明了可以使用**样本内OT模板**，这极大地降低了计算成本，使功能模板方法更易于被神经科学社区采用。同时，使用同一任务数据进行对齐和解码，避免了额外数据采集的需求。
- **关注可解释性**：不仅比较了性能，还深入分析了不同方法对解码器权重空间分布的影响，强调了OT在保持信号拓扑方面的优势，这对于神经科学解释至关重要。
- **开源与可复现**：所有方法和代码均通过`fmralign`包和GitHub公开，促进了研究的可复现性。

### 8. 不足与局限

- **方法覆盖不全**：未包含一些更先进的方法，如基于连接性的Hyperalignment、ProMises模型（统计框架）和FUGW（融合非平衡Gromov-Wasserstein），原因是这些方法要么不适用于当前框架，要么计算成本过高。
- **分块策略依赖**：依赖于预定义的Schaefer图谱进行分块对齐。虽然验证了脑区数量影响不大，但不同图谱的选择可能仍会影响结果。
- **计算资源限制**：所有实验基于CPU实现，未探索GPU加速的潜力，这可能限制了方法在大规模数据集上的应用速度。
- **样本量限制**：虽然使用了多个数据集，但每个数据集的被试数量相对较少（3-13人），特别是THINGS数据集只有3名被试，其结论的统计效力有限。
- **任务类型局限**：虽然涵盖了多种任务，但所有任务都是结构化的、有明确标签的。结论是否适用于更自然、更开放的任务范式（如自由回忆）仍有待验证。
- **SRM的局限性**：SRM在任务解码中表现不佳，可能与其低维潜在空间不适合任务解码任务有关，但论文未深入探讨其原因。

（完）

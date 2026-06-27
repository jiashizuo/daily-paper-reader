---
title: Entropy-based integration index for quantifying network integration in resting-state functional MRI
title_zh: 基于熵的整合指数用于量化静息态功能磁共振成像中的网络整合
authors: "Kar, P., Roy, D., Kar, B. R."
date: 2026-06-26
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.22.733307v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: 静息态fMRI网络整合，基于熵的指标
tldr: 现有静息态fMRI分析难以量化网络表征在独立成分中的分布。本文提出基于熵的网络整合框架，通过计算Yeo图谱网络与ICA成分的空间重叠熵，得到归一化整合指数。在帕金森病认知障碍患者中，该指标揭示了腹侧注意和边缘网络的选择性改变，且组间差异反映架构性偏移而非变异性增加。该框架提供了可解释、可泛化的大尺度脑组织量化方法。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有ICA方法无法量化网络表征在独立成分中的分布程度，缺乏连续度量。
method: 将Yeo网络模板与ICA成分的空间重叠归一化为概率分布，计算Shannon熵得到整合指数。
result: 帕金森病伴轻度认知障碍患者腹侧注意和边缘网络的整合指数显著改变，PCA和质心距离验证了架构性偏移。
conclusion: 该熵基整合指数可量化网络表征的分布特性，为研究脑网络重组提供互补工具。
---

## 摘要
独立成分分析（ICA）广泛应用于静息态功能磁共振成像以识别大规模功能网络；然而，现有方法在量化网络表征如何分布于独立成分方面手段有限。我们引入了一种基于熵的网络整合框架，通过量化ICA衍生的功能贡献在Yeo图谱网络中的分布，来表征典型静息态网络的组织架构。将独立成分与网络模板之间的空间重叠归一化以生成概率分布，并从中导出香农熵和归一化整合指数。所得指标提供了网络表征整合的连续度量，范围从由少数成分主导的特化配置到涉及多种功能模式的分布式配置。该框架使用健康对照组、认知正常的帕金森病患者以及轻度认知障碍的帕金森病患者的静息态功能磁共振成像数据进行了评估和验证。全局熵和整合度量辅以网络特异性分析、优势度分析、主成分分析（PCA）和多变量质心距离评估。所提出的框架揭示了与认知状态差异相关的腹侧注意和边缘网络组织的选择性改变，同时保持了组内整体异质性。分组PCA进一步独立地将这些网络识别为网络组织改变的主要贡献者，而质心距离分析表明观察到的差异反映了网络架构的连贯性转变而非变异性增加。通过量化网络表征在ICA衍生的功能模式上的分布，该框架提供了一种简单、可解释且可推广的大规模脑组织度量，为研究健康与疾病中的网络重组提供了一种补充方法。

## Abstract
Independent component analysis (ICA) is widely used in resting-state fMRI to identify large-scale functional networks; however, existing approaches provide limited means of quantifying how network representations are distributed across independent components. We introduce an entropy-based network integration framework that characterizes the organizational architecture of canonical resting-state networks by quantifying the distribution of ICA-derived functional contributions within Yeo atlas networks. Spatial overlap between independent components and network templates is normalized to generate a probability distribution, from which Shannon entropy and a normalized integration index are derived. The resulting metric provides a continuous measure of network representational integration, ranging from specialized configurations dominated by a small number of components to distributed configurations involving multiple functional modes. The framework was evaluated and validated using resting-state fMRI data from healthy controls, Parkinson's disease patients with normal cognition, and Parkinson's disease patients with mild cognitive impairment. Global entropy and integration measures were complemented by network-specific analyses, dominance profiling, principal component analysis (PCA), and multivariate centroid-distance assessments. The proposed framework revealed selective alterations in Ventral Attention and Limbic network organization associated with cognitive-status differences, while preserving overall within-group heterogeneity. Group-wise PCA independently further identified these networks as major contributors to altered network organization, and centroid-distance analyses demonstrated that observed differences reflected coherent shifts in network architecture rather than increased variability. By quantifying the distribution of network representations across ICA-derived functional modes, this framework provides a simple, interpretable, and generalizable measure of large-scale brain organization, offering a complementary approach for studying network reorganization in health and disease.

---

## 论文详细总结（自动生成）

好的，以下是对该论文的详细中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

-   **核心问题**：在静息态功能磁共振成像（rs-fMRI）分析中，独立成分分析（ICA）被广泛用于识别大规模功能网络。然而，现有的ICA方法只能将每个独立成分（IC）硬性地分配给某个特定的功能网络，无法量化一个功能网络（如Yeo图谱中的网络）的表征是如何**分布**在多个独立成分中的。这种“非此即彼”的二元划分，忽略了网络表征的连续性和分布特性。
-   **研究动机**：为了弥补这一空白，作者希望提出一个**连续、可量化**的指标，来度量一个功能网络在ICA分解出的多个功能模式（独立成分）上的整合或分散程度。这有助于更精细地理解大脑网络的组织架构，尤其是在疾病状态下可能发生的网络重组。
-   **整体含义**：该研究引入了一个基于信息论（熵）的框架，将网络表征的分布特性转化为一个单一的、可解释的数值指标。这为研究健康与疾病中的大规模脑网络组织提供了一种新的、互补的分析工具。

### 2. 论文提出的方法论：核心思想、关键技术细节

-   **核心思想**：利用**香农熵**来量化一个Yeo图谱网络的空间表征在多个ICA独立成分上的分布均匀程度。如果网络表征高度集中在少数几个IC上，则熵值低，表示“特化”；如果网络表征均匀分布在许多IC上，则熵值高，表示“整合”。
-   **关键技术细节与流程**：
    1.  **数据预处理**：对rs-fMRI数据进行标准的预处理和组级ICA分析，得到一组独立成分（IC）及其对应的空间图谱。
    2.  **计算空间重叠**：对于Yeo图谱中的每一个网络（例如，腹侧注意网络），计算该网络模板与每一个IC的空间重叠程度（例如，使用Dice系数或体素计数）。
    3.  **生成概率分布**：将某个网络与所有IC的重叠值进行归一化，使其总和为1，从而形成一个概率分布 \( P = \{p_1, p_2, ..., p_n\} \)，其中 \( p_i \) 表示该网络在第 \( i \) 个IC上的表征比例。
    4.  **计算香农熵**：根据概率分布 \( P \) 计算香农熵：\( H = -\sum_{i=1}^{n} p_i \log(p_i) \)。
    5.  **计算归一化整合指数**：将熵值 \( H \) 除以最大可能熵 \( H_{max} = \log(n) \)（即均匀分布时的熵），得到归一化整合指数 \( I = H / H_{max} \)。该指数范围在0到1之间，值越高表示网络表征越分散（整合），值越低表示越集中（特化）。
    6.  **分析层面**：该框架可以计算单个被试、单个网络的整合指数，也可以计算全脑的平均整合指数。

### 3. 实验设计：数据集、基准与对比方法

-   **数据集**：使用了来自帕金森病进展标志物倡议（PPMI）数据库的静息态fMRI数据。被试分为三组：
    -   健康对照组（HC）
    -   认知正常的帕金森病患者（PD-NC）
    -   伴轻度认知障碍的帕金森病患者（PD-MCI）
-   **基准与对比方法**：论文**没有**直接与现有的其他量化网络整合的指标（如图论中的全局效率）进行对比。其验证策略主要是**内部验证**和**多角度分析**，以证明该指标的有效性和敏感性。具体包括：
    -   **网络特异性分析**：比较三组被试在Yeo图谱7个网络上的整合指数差异。
    -   **优势度分析**：识别对组间差异贡献最大的网络。
    -   **主成分分析（PCA）**：对整合指数进行降维，观察组间分离情况，并识别主要贡献网络。
    -   **质心距离分析**：计算各组在多维空间中的质心距离，以区分组间差异是源于“架构性偏移”（质心移动）还是“变异性增加”（组内方差增大）。

### 4. 资源与算力

-   **文中未明确说明**：论文没有提及使用的GPU型号、数量、训练时长或任何特定的计算资源。分析过程主要基于标准的数据处理和统计计算，对算力要求不高。

### 5. 实验数量与充分性

-   **实验数量**：论文进行了一系列分析，包括：
    -   全脑平均整合指数的组间比较。
    -   7个Yeo网络各自的整合指数组间比较。
    -   基于整合指数的PCA分析。
    -   基于整合指数的质心距离分析。
    -   优势度分析。
-   **充分性与客观性**：
    -   **充分性**：实验设计较为全面，从全局到局部（网络特异性），从单变量到多变量（PCA），并验证了差异的性质（质心距离），逻辑链条完整。
    -   **客观性**：使用了公开数据集（PPMI），分析方法清晰，结果可复现。但**缺乏与现有主流方法（如图论指标、动态功能连接）的直接对比**，是其客观性验证的一个不足。实验主要证明了该指标能发现组间差异，但未证明它比现有方法更好或能发现新现象。

### 6. 论文的主要结论与发现

1.  **指标有效性**：提出的熵基整合指数能够有效量化网络表征在ICA成分上的分布特性，并区分不同认知状态的被试组。
2.  **选择性改变**：与认知状态差异（HC vs PD-NC vs PD-MCI）相关的网络组织改变是**选择性**的，主要体现在**腹侧注意网络**和**边缘网络**的整合指数上，而非所有网络。
3.  **架构性偏移**：组间差异（尤其是PD-MCI组）反映的是网络架构的**连贯性转变**（质心移动），而不是组内变异性的增加。这表明疾病导致了网络组织模式的系统性重组。
4.  **互补工具**：该框架提供了一种简单、可解释、可推广的度量，可作为研究脑网络重组的补充方法，尤其适用于分析ICA结果中网络表征的分布特性。

### 7. 优点：方法或实验设计上的亮点

-   **方法创新性**：将信息论中的熵概念引入到ICA后处理中，解决了传统硬性分配方法的局限性，提供了一个连续、量化的指标。
-   **可解释性强**：整合指数的物理意义明确（特化 vs. 整合），易于理解和解释。
-   **分析框架完整**：不仅提出了指标，还配套了网络特异性分析、PCA、质心距离分析等一系列验证方法，从多个角度证实了指标的有效性和差异的性质。
-   **计算简单**：该方法计算成本低，易于在其他研究中复现和应用。

### 8. 不足与局限

-   **缺乏与现有方法的基准对比**：这是最显著的不足。论文没有将新指标与图论中的全局/局部效率、模块化等经典网络整合指标进行对比，也未与动态功能连接等方法比较，因此无法证明其优越性或独特性。
-   **依赖ICA分解质量**：该指标的有效性高度依赖于ICA分解的质量和成分数量的选择。不同的ICA参数可能导致不同的结果。
-   **依赖Yeo图谱**：结果依赖于Yeo图谱的划分方式。使用不同的脑图谱（如Gordon图谱）可能会得到不同的结论。
-   **样本量有限**：虽然使用了PPMI数据库，但具体到每个亚组的样本量可能有限，可能影响统计功效和泛化性。
-   **应用范围局限**：目前仅在帕金森病和静息态数据上验证，其在其他疾病（如精神分裂症、阿尔茨海默病）或任务态fMRI中的适用性尚待检验。
-   **未进行因果推断**：该研究是相关性研究，发现了网络整合指数与认知状态相关，但无法推断因果关系。

（完）

---
title: "Mixture of Spectral Wavelets on Simplicial Complex: Analysis of Brain Connectome with Neurodegeneration"
title_zh: 单纯复形上的频谱小波混合：神经退行性疾病脑连接组分析
authors: "Yechan Hwang, Minjae Jeong, Jaeyoon Sim, Guorong Wu, Won Hwa Kim"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=OdmnyuhrRY"
tags: ["query:fbn"]
score: 8.0
evidence: 使用单纯复形上的频谱小波混合分析脑连接组与神经退行性疾病
tldr: 针对现有图学习方法对边信号处理不足和光谱滤波器固定的问题，提出将单纯复形小波表示与自适应滤波结合，能够处理节点和连接上的信号，并在神经退行性疾病脑连接组分析中灵活选择光谱成分。该方法在真实数据集上揭示了疾病相关的多尺度异常模式。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-odmnyuhrry/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1448, \"height\": 363, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-odmnyuhrry/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1395, \"height\": 496, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-odmnyuhrry/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1452, \"height\": 308, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-odmnyuhrry/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1448, \"height\": 338, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1453, \"height\": 475, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1449, \"height\": 308, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 891, \"height\": 238, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1444, \"height\": 247, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1089, \"height\": 256, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1045, \"height\": 579, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1203, \"height\": 472, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1248, \"height\": 185, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1210, \"height\": 791, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-odmnyuhrry/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 830, \"height\": 303, \"label\": \"Table\"}]"
motivation: 克服图学习方法对边信号和光谱选择性的限制。
method: 结合单纯复形小波与自适应频谱滤波进行多尺度分析。
result: 在神经退行性疾病连接组中发现多尺度异常模式。
conclusion: 为脑连接组分析提供了更具表达力的谱工具。
---

## Abstract
Understanding how pathological changes disrupt communication patterns in the brain requires models that examine interactions across multiple structural levels of a network. Many existing graph-learning methods emphasize node representations while providing limited treatment of signals defined on edges, and their use of predetermined spectral filters can restrict sensitivity to heterogeneous frequency behavior.
To overcome these issues, we introduce a framework that couples a simplicial wavelet–based representation—capable of handling signals on both vertices and connections—with an adaptive filtering module that selects informative spectral components in a data-dependent manner. This combination enables flexible multi-scale analysis and highlights structural patterns relevant to neurodegenerative conditions. Evaluations on widely used brain graph benchmarks show consistent gains in predictive performance as well as clearer interpretation of disease-related network alterations. The implementation of this work will be released upon publication.

---

## 论文详细总结（自动生成）

好的，作为资深学术论文分析助手，以下是根据您提供的论文内容生成的详细中文总结。

### 论文中文总结

#### 1. 论文的核心问题与整体含义（研究动机和背景）

-   **研究动机**：
    -   大脑连接组是理解神经退行性疾病（如阿尔茨海默病、帕金森病）的关键。
    -   现有图学习方法存在两个主要局限：
        1.  **对边信号处理不足**：大多数图神经网络以节点为中心，将边信息仅作为邻接矩阵的辅助数据，但在脑网络中，边本身承载着丰富的、连续值的连接组特征，对分析疾病进展至关重要。
        2.  **光谱滤波器固定**：现有的频谱图神经网络通常使用固定带宽的滤波器（如低通或高通），无法适应图中不同区域对频率响应的多样化需求（如有些需要全局结构，有些需要局部细节），导致表征能力受限。
-   **整体含义**：
    -   本文旨在解决上述局限，提出一个能够同时有效处理节点和边信号，并能自适应地选择相关频谱分量的新型脑网络分析框架。

#### 2. 论文提出的方法论：核心思想、关键技术细节

-   **核心思想**：
    -   通过结合**单纯复形上的频谱小波变换**与**频谱混合专家机制**，实现节点和边信号的自适应多尺度谱分析，从而捕捉与神经退行性疾病相关的结构性改变。
-   **关键技术细节**：

    1.  **频谱单纯形小波变换**：
        -   **扩展SGWT**：将经典的频谱图小波变换从节点推广到更高阶的单纯复形（即边），利用Hodge Laplacian矩阵（\( L_0 \) 和 \( L_1 \)）实现对节点和边信号的联合频域分析。
        -   **多尺度分解**：通过构建小波基 \( \psi_s = U_0K(s\Lambda_0)U_0^T \)（节点）和 \( \phi_t = U_1K(t\Lambda_1)U_1^T \)（边），将信号分解为不同尺度 \( s, t \) 下的分量，实现从局部到全局的多分辨率分析。
        -   **方向等变性**：证明了所提方法对图边的任意方向选择具有等变性，确保了分析结果的鲁棒性。

    2.  **频谱混合专家**：
        -   **核心思想**：为了解决固定滤波器的问题，引入MoE框架，动态地为每个图选择最合适的小波尺度组合。
        -   **门控网络**：采用含噪声的top-k门控机制，根据输入图的结构特征（节点和边信号）计算每个“专家”（即一组可学习的、为不同尺度设置的参数）的权重，并只激活权重最高的k个专家。
        -   **专家集成**：SpMoE层将不同专家对应的带通滤波结果加权融合，并与低通滤波结果拼接，生成最终的节点和边特征表示 \( \tilde{f} \) 和 \( \tilde{\omega} \)。
        -   **自适应学习**：该机制允许网络以端到端的方式，为每个输入图学习其最优的尺度。

    3.  **训练目标与负载均衡**：
        -   整体损失函数 \( \mathcal{L} = \mathcal{L}_{ce} + \alpha(\mathcal{L}_{load} + \mathcal{L}_{imp}) \)，其中 \( \mathcal{L}_{ce} \) 是分类交叉熵损失。
        -   引入**重要性损失**和**负载损失**，确保在训练过程中所有专家被公平利用，防止少数专家占据主导地位。

#### 3. 实验设计

-   **数据集**：
    -   **ADNI（阿尔茨海默病神经影像学倡议）**：基于弥散加权成像构建的**结构性**脑网络。节点为160个脑区（Destrieux图谱），边为白质纤维束计数。节点特征为皮层厚度（CT）和FDG-PET标准摄取值比（SUVR）。任务为5分类（CN, SMC, EMCI, LMCI, AD）。
    -   **PPMI（帕金森进展标志物倡议）**：基于功能磁共振成像构建的**功能性**脑网络。节点为116个脑区（AAL图谱），边为功能连接（相关性）。节点特征为BOLD信号。任务为3分类（CN, Prodromal, PD）。
-   **Benchmark和对比方法**：
    -   对比了三大类共14种基线方法：
        -   **传统方法**：线性SVM，2层MLP。
        -   **通用图网络**：GCN，GAT，GDC，GraphHeat，ADC，Exact，AGT。
        -   **脑网络专用模型**：BrainGNN，BrainNetTF，ALTER，ContrastPool。
-   **评估指标**：
    -   使用5折交叉验证，报告准确率、精确率和召回率的均值与标准差。

#### 4. 资源与算力

-   论文中提到，所有模型均在**单个NVIDIA RTX 6000 Ada Generation GPU** 上训练。
-   **未明确说明**GPU的数量、训练每个模型的具体时长、总计算量等信息。

#### 5. 实验数量与充分性

-   **实验数量**：进行了充分的实验，主要包括：
    -   **主要结果对比**：在3个不同模态的数据集上（ADNI-CT, ADNI-FDG, PPMI）与所有基线方法进行对比。
    -   **消融实验**：
        -   组件消融（节点/边信号、低通/带通滤波器）。
        -   专家配置消融（专家数量、top-k选择）。
        -   损失函数消融（有无负载均衡损失）。
    -   **模型行为分析**：
        -   Grad-CAM解释性分析，展示ROI和连接组的重要性。
        -   类特异性专家选择模式分析。
-   **充分性**：
    -   **充分性较好**：实验设计覆盖了性能对比、组件有效性验证、超参数敏感性分析和可解释性分析，能较好地支撑论文提出的方法。
    -   **有待加强**：在计算效率对比方面，论文仅补充了与少数方法的运行时和内存对比，而未在所有基线上进行全面分析。

#### 6. 论文的主要结论与发现

1.  **性能优越**：提出的SSWT w/ SpMoE模型在ADNI和PPMI数据集的所有评估指标上，均显著且一致地优于所有基线方法，特别是对比最强的基线AGT，平均提升约3个百分点。
2.  **组件有效性**：消融实验证实：
    -   同时使用节点和边信号是关键。
    -   组合低通和带通滤波器效果最佳。
    -   SpMoE的加入比无专家的版本带来显著提升，证明了自适应多尺度分析的有效性。
    -   负载均衡损失对稳定训练和提升性能至关重要。
3.  **临床可解释性**：
    -   Grad-CAM分析识别出的高激活脑区（如AD中的海马体、丘脑；PD中的壳核、苍白球）和连接组与已知的神经病理学知识高度吻合，验证了模型能捕捉到有临床意义的生物标志物。
    -   分析显示，不同诊断类别的脑网络倾向于激活不同的专家集合，表明SpMoE能学习到与疾病阶段相关的特定谱特征。

#### 7. 优点

1.  **方法创新且有效**：将谱图小波推广到单纯复形，并结合MoE实现自适应尺度选择，是一个新颖且有效的技术组合，成功解决了现有方法的两个核心痛点。
2.  **理论完备**：证明了所提方法的**方向等变性**，这是处理无向图的谱方法中的一个重要理论保证。
3.  **结果扎实**：在多个标准数据集上取得了**SOTA**性能，且提升明显。
4.  **可解释性强**：通过Grad-CAM和专家选择分析，提供了丰富的临床相关洞察，增强了模型的可信度和实用价值。

#### 8. 不足与局限

1.  **计算复杂度**：Hodge Laplacian的谱分解复杂度高（\( O(N^3) \) 和 \( O(M^3) \)），虽然作为预处理步骤，但当图的规模很大（特别是边数M很大）时，仍然是主要瓶颈。论文通过对边进行降采样来缓解，但这可能丢失信息。
2.  **参数敏感性**：专家数量和top-k值等超参数需要根据数据集仔细调整，以获得最佳性能，这增加了应用成本。
3.  **应用限制**：当前方法聚焦于图级分类任务。如何将其有效扩展到更基础的节点级或边级任务，以及动态图等更复杂的场景，仍有待探索。

（完）

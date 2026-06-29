---
title: "Unsupervised Dynamic Graph Multi-Model Representation Learning for Temporal Patterns Discovery: Uncovering Parkinson’s Disease Stages Using Cerebrospinal Fluid Longitudinal Profiles"
title_zh: 无监督动态图多模型表示学习用于时序模式发现：基于脑脊液纵向数据揭示帕金森病阶段
authors: "Lubna Mahmoud Abu Zohair, Hind Zantout, Marta Vallejo, Md Azher Uddin, John R. Woodward"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=ogKDAjoyy8"
tags: ["query:fbn"]
score: 4.0
evidence: 动态图学习用于帕金森病分期，可迁移至脑疾病诊断
tldr: 现有动态图方法仅捕捉局部时序依赖，难以捕获全局进展模式。本文提出无监督动态图多模型表示学习，通过融合节点全局轨迹和局部空间上下文生成时间步嵌入，并聚类发现纵向数据集中的有意义的时序模式。在帕金森病分期任务上验证了有效性，为利用图方法分析脑疾病动态进展提供了新思路。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-ogkdajoyy8/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1455, \"height\": 487, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ogkdajoyy8/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1427, \"height\": 893, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ogkdajoyy8/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1424, \"height\": 765, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ogkdajoyy8/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1445, \"height\": 409, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ogkdajoyy8/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1429, \"height\": 885, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-ogkdajoyy8/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1357, \"height\": 272, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ogkdajoyy8/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 699, \"height\": 581, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ogkdajoyy8/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 667, \"height\": 582, \"label\": \"Table\"}]"
motivation: 现有动态图方法仅关注局部时序信息，无法捕获疾病进展的全局模式，需要新的方法以从纵向数据中发现有意义的阶段。
method: 提出动态图学习架构，生成同时编码局部结构上下文和全局进展轨迹的时间步嵌入，并通过聚类实现时序模式发现。
result: 在帕金森病脑脊液纵向数据集上有效发现疾病阶段模式。
conclusion: 所提方法能够从纵向脑脊液数据中捕捉到与帕金森病进展相关的时序结构，为疾病分期提供新工具。
---

## Abstract
Dynamic graph learning methods typically capture local structural information
and short-range temporal dependencies at each time step. In this work, we introduce a dynamic graph learning architecture that generates time-step embeddings capturing both local structural context and progression-trajectory patterns for each node across an entire longitudinal sequence. Unlike existing approaches, our framework clusters fused embeddings that integrate (i) the global temporal trajectory of each node and (ii) its local spatial context at every graph snapshot to discover meaningful temporal patterns in longitudinal datasets. We
evaluate the proposed model in the context of Parkinson’s disease (PD) progression using six years of longitudinal cerebrospinal fluid (CSF) profiles from 24 patients. Visit-based graphs were constructed by representing patients as nodes enriched with peptide-abundance features, and by connecting patients with similar features profiles. A Graph Convolutional Network (GCN) captures visit-specific spatial relationships, while a sequential model learns global temporal representations. A fusion module integrates both sources of information to produce enriched node embeddings that reflect inter- and intra-patient molecular dynamics.
Clustering the learned embeddings reveals four distinct PD progression stages, supported by strong validity indices (Davies–Bouldin: 0.169; Calinski–Harabasz: 1264.24). Significant differences in motor severity (UPDRS 2 and UPDRS 3; p < 0.05) were observed across clusters, whereas non-motor scores showed a more diffuse pattern (p = 0.11). Compared with PCA, autoencoders, GCN, T-GCN, and GC-LSTM, the proposed architecture yields more clinically discriminative representations of disease severity. These findings demonstrate the potential of the proposed dynamic graph learning for data-driven disease staging and offer a generalizable framework for uncovering latent temporal patterns in longitudinal datasets.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有动态图学习方法（如T-GCN、GC-LSTM、TGN、EvolveGCN等）仅能捕捉局部结构信息和短程时间依赖，无法有效建模长程时空依赖，且在无监督表示学习任务中探索不足。尤其缺乏针对纵向临床数据（如帕金森病进展）的全局时序模式发现能力。
- **研究动机**：帕金森病具有异质性和时间演进性，传统静态图或短程时序模型难以捕捉完整的疾病进展轨迹。本文旨在通过融合每个节点的局部空间结构（每个时间快照）与全局时间轨迹，生成丰富的节点嵌入，进而通过无监督聚类发现有意义的疾病阶段。
- **整体含义**：提出一种新型动态图学习架构，首次将动态图模型应用于帕金森病纵向脑脊液数据的分期任务，为数据驱动的疾病分期和纵向时序模式发现提供通用框架。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：结合图卷积网络（GCN）提取每个时间点的空间结构，通过序列模型（GRU）学习每个节点在整个时间序列上的全局时间轨迹；然后将时间嵌入与空间嵌入拼接，经过融合层生成同时包含局部上下文和全局进展模式的节点表示；最后对嵌入进行聚类获得疾病阶段。
- **关键技术细节**：
    - **图构建**：每个临床就诊月构造一个无向图，节点为患者，节点特征为肽丰度。边基于欧氏距离阈值（5%分位数）连接特征相似的患者。
    - **空间嵌入（$H_t$）**：单层GCN卷积，公式为 $H_t = \sigma(\hat{A}_t X_t W)$，其中 $\hat{A}_t$ 是归一化邻接矩阵，$X_t$ 是节点特征，$W$ 是权重，$\sigma$ 为ReLU。
    - **时序嵌入（$Z_n^t$）**：将每个患者各时间点的空间嵌入序列输入GRU，输出隐藏状态 $Z_n^t$，捕捉当前和历史及其未来的整体模式。
    - **融合嵌入（$F_n^t$）**：拼接 $H_n^t$ 和 $Z_n^t$，再通过全连接层 + ReLU + LayerNorm 投影到固定维度，得到最终节点嵌入。
    - **训练**：使用变分图自编码器框架，通过二元交叉熵损失重构邻接矩阵（未使用节点特征重构）。训练为直推式（transductive），即使用所有时间快照图。
    - **聚类**：使用K-means++算法，基于轮廓系数选择最佳聚类数k。
- **公式/算法流程**（文字说明）：
    1. 对于每个就诊月t，构造图 $G_t$，输入节点特征 $X_t$。
    2. 通过单层GCN得到空间嵌入 $H_t$。
    3. 将每个患者的时间序列 $H_n^0, H_n^1, \dots, H_n^t$ 输入GRU，得到隐藏状态 $Z_n^t$。
    4. 拼接 $H_n^t$ 和 $Z_n^t$，经过融合层得到 $F_n^t$。
    5. 利用所有 $F_n^t$ 进行聚类，评估聚类质量。

## 3. 实验设计：使用了哪些数据集/场景，它的benchmark是什么，对比了哪些方法

- **数据集**：来自Kaggle的AMP-PD竞赛数据集，包含24名帕金森病患者6年纵向脑脊液肽谱（968种肽类型）及对应UPDRS评分（Part 1、2、3）。数据量较小（24人），用于概念验证。
- **场景**：无监督疾病分期——基于脑脊液分子特征将每个临床就诊分组为不同疾病阶段，然后与临床严重度评分（UPDRS）关联验证。
- **Benchmark与对比方法**：
    - 传统特征表示：t-SNE（非线性降维）、K-PCA（核主成分分析）、密集自编码器（单层）。
    - 静态图模型：GCN（单层，只捕捉空间结构）。
    - 动态图模型：T-GCN（GCN+GRU，但只捕捉当前和历史短程依赖）、GC-LSTM（图卷积嵌入LSTM）。
- **评估指标**：聚类内效度（轮廓系数、Davies-Bouldin指数、Calinski-Harabasz指数）+ 与临床评分的Kruskal-Wallis检验和Dunn事后检验。

## 4. 资源与算力

- **文中说明**：未明确提及使用的GPU型号、数量或训练时长。在“Ethics Statement”中提到使用Google Colab进行编码和分析，但未提供具体算力配置。在“Reproducibility Statement”中提供了公开代码链接（GitHub），未提算力要求。因此，本文缺乏详细的算力说明。

## 5. 实验数量与充分性

- **实验数量**：主要对比了5种基线方法；进行了10次不同随机种子下的稳定性分析（GCN vs 新模型）；对最佳聚类数k进行了网格搜索（基于轮廓系数）。此外，进行了UPDRS评分的统计检验（Kruskal-Wallis + Dunn）。未进行消融实验（如去掉融合层、仅用GCN或GRU等），也缺乏外部验证或交叉验证。
- **充分性与公平性**：
    - **优点**：稳定性分析（10种子）增强了结果的可靠性；与多种基线比较，覆盖了传统方法和图方法。
    - **不足**：数据集过小（24名患者），容易过拟合，结果泛化性差；训练为直推式（transductive），未做归纳式或独立测试集验证；未进行消融研究以确认各组件贡献（如MLP替代GCN验证图结构作用）；仅在一个小数据集上评估，未在其他PD数据集或其他疾病数据集上验证；未报道模型训练曲线、过拟合检测等。实验充分性因此受限，结论需谨慎解读。

## 6. 论文的主要结论与发现

- **主要结论**：提出的动态图融合架构能够稳定地发现4个帕金森病阶段聚类，聚类内效度指标良好（Davies-Bouldin 0.169，Calinski-Harabasz 1264.24）；与静态GCN相比，新模型在10种种子下聚类数保持稳定（k=4），而GCN的聚类数变化大（3~9）。临床关联分析表明，这些聚类在运动严重度（UPDRS Part 2和Part 3）上存在显著差异（p<0.05），其中Cluster 1对应严重运动障碍，Cluster 2对应轻微症状；非运动症状（UPDRS Part 1）差异不显著（p=0.11）。对比所有基线方法，新模型产生的表示在临床区分度上最佳。
- **关键发现**：融合局部空间结构与全局时序进展的嵌入，比仅用局部分布或仅用短程时序嵌入更能揭示有意义的疾病动态阶段。这是首次将动态图学习用于帕金森病分期。

## 7. 优点：方法或实验设计上的亮点

- **方法创新**：首次提出动态图模型中显式融合“每个节点的全局时间轨迹”与“每个时间点的局部空间结构”，生成兼顾短程与长程依赖的节点嵌入，适用于无监督时序模式发现。
- **架构灵活性**：采用GCN+GRU+融合层的模块化设计，各组件可替换（如LSTM替代GRU），拓展性强。
- **实验严谨性**：进行了多随机种子的稳定性分析（10种子），并计算标准差，证明新模型比GCN更稳定；采用非参数统计检验（Kruskal-Wallis）和Dunn事后检验，统计方法合适。
- **临床有效性验证**：通过与外部临床评分（UPDRS）关联，证明聚类结果具有临床含义，不仅仅是内部指标好。
- **可复现性**：提供公开代码与数据来源，保障可复现。

## 8. 不足与局限：包括实验覆盖、偏差风险、应用限制

- **数据局限**：仅24名患者，样本量小，且来自单一公共数据集，模型泛化性严重受限。作者也承认“dataset is small and limits the generalisability”。
- **方法局限**：
    - 训练为直推式（所有图用于训练），未做归纳式评估，无法处理新患者的未见时间点。
    - 未进行充分的消融实验（如去掉融合层、替换GCN为MLP、更换不同距离度量等），难以量化各组件贡献。
    - 未与更简单的非图基线（如仅用GRU处理时间序列）对比，无法完全证明图结构（邻接矩阵）的必要性。
    - 模型完全依赖EU距离阈值构建边，可能引入噪声或丢失重要连接。
- **实验设计局限**：
    - 未进行交叉验证或外部独立验证。
    - 未进行误聚类患者的错误分析，未讨论聚类边界情况。
    - 仅在PD一个任务上验证，缺乏在其他疾病或非医学纵向数据上的实验，通用性证据不足。
- **结果偏差风险**：UPDRS Part 1差异不显著，表明模型对非运动症状不敏感；且有一个聚类（cluster 4）因缺乏UPDRS数据而被排除在临床分析之外，可能丢失信息。
- **应用限制**：目前仅为概念验证，距离临床部署有较大距离；需在大规模、多中心数据上验证，并解决数据缺失、不规则时间间隔等实际问题。

（完）

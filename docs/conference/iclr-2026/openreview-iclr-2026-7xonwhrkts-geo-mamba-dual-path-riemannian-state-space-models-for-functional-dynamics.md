---
title: "Geo-Mamba: Dual-Path Riemannian State-Space Models for Functional Dynamics"
title_zh: Geo-Mamba：用于功能动力学的双路径黎曼状态空间模型
authors: "Yuwei Cao, Tingting Dan, Yang Yang, Guorong Wu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=7XonwHRkTS"
tags: ["query:fbn"]
score: 9.0
evidence: 用于fMRI功能连接动力学的黎曼状态空间模型
tldr: fMRI功能连接位于非欧空间（SPD矩阵流形和皮质图），标准欧氏模型误设。本文提出Geo-Mamba，在黎曼流形上定义状态空间模型，采用双路径选择性设计：堆叠路径进行分层空间建模，嵌入路径实现几何感知降维。在多个FC预测任务中Geo-Mamba优于欧氏基线，为功能动力学建模提供了几何正确的方法。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-7xonwhrkts/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1484, \"height\": 877, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-7xonwhrkts/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1445, \"height\": 315, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-7xonwhrkts/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1440, \"height\": 287, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-7xonwhrkts/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1458, \"height\": 1052, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-7xonwhrkts/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1455, \"height\": 212, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-7xonwhrkts/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1062, \"height\": 392, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-7xonwhrkts/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1241, \"height\": 450, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-7xonwhrkts/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 956, \"height\": 387, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-7xonwhrkts/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1265, \"height\": 701, \"label\": \"Table\"}]"
motivation: fMRI功能连接数据位于非欧空间，欧氏序列模型不适用。
method: 将Mamba扩展到黎曼流形，设计双路径（堆叠与嵌入）状态空间。
result: 在fMRI功能连接预测任务中显著优于欧氏模型。
conclusion: 几何感知的序列模型更适于功能连接动力学建模。
---

## Abstract
Functional magnetic resonance imaging (fMRI)–derived functional connectivity (FC) is represented as graphs and as correlation/covariance matrices that live on non-Euclidean spaces—cortical graphs and the Riemannian manifold of symmetric positive-definite (SPD) matrices—so conventional Euclidean sequence models are misspecified. To this end, we introduce *Geo-Mamba*, a geometric variant of Mamba formulated on Riemannian manifolds. *Geo-Mamba* employs a dual-path selective state-space design: *a stacked path* performs hierarchical spatial modeling by aggregating pyramid multi-scale features to capture local and global dependencies, while *a embedding path* combats redundancy in high-dimensional SPD inputs via progressive, geometry-aware dimensionality reduction (operating in the appropriate manifold spaces) to produce compact states without violating Riemannian constraints. Their complementary outputs are fused through the tailored *GeoMix* operator to yield a compact, discriminative SPD representation. *Geo-Mamba* is evaluated on six public fMRI datasets—ADNI, OASIS, PPMI, Taowu, Neurocon, and Mātai—spanning Alzheimer’s and Parkinson’s cohorts as well as multi-site normative populations with diverse acquisition protocols. Across these benchmarks, it delivers consistently competitive accuracy and robustness, supporting the value of dual-path manifold modeling for neuroimaging and its potential for clinical translation.

---

## 论文详细总结（自动生成）

### 论文中文总结

#### 1. 核心问题与整体含义（研究动机和背景）
- **问题**：功能性磁共振成像（fMRI）衍生的功能连接（FC）通常表示为相关/协方差矩阵，这些矩阵呈对称正定（SPD）结构，天然位于黎曼流形上，而非欧几里得空间。传统的欧几里得序列模型（如Transformer、Mamba）在处理FC数据时，无法保持SPD矩阵的正定性和几何结构，导致模型误设。
- **背景**：现有的脑网络分析模型（如GCN、SPDNet、BrainGNN等）虽考虑了图拓扑或流形几何，但缺少对长程序列动态建模的能力；而Mamba等状态空间模型（SSM）虽在序列建模上高效，却未考虑非欧几何。因此，需要一种兼具几何意识与序列建模能力的方法。
- **意义**：提出Geo-Mamba，将选择性状态空间模型扩展到黎曼流形，实现对脑功能动态的几何正确建模，提升分类鲁棒性和可解释性，为神经影像分析提供新范式。

#### 2. 方法论：核心思想、关键技术细节
- **核心思想**：在SPD流形上定义双路径选择性状态空间模型，同时捕捉多尺度局部-全局空间依赖并保持几何一致性。
- **关键技术细节**：
  - **金字塔特征提取**：沿FC矩阵主对角线用多尺度滑动窗口提取SPD子块，通过Stiefel流形上的线性投影降维，再经过对数欧几里得注意池化（Log-Euclidean attention pooling）聚合为尺度级表示；同时提取全局特征，拼接成多尺度特征序列 \( S_{\text{all}} \in \mathbb{R}^{(m+1) \times d \times d} \)。
  - **几何选择性状态空间模型（R-SSM）**：
    - 状态更新严格在SPD流形上进行：\( U_{i+1} = A_i U_i A_i^\top + B_i^\top S_i B_i + \epsilon I \)。
    - 参数生成：先通过对数映射进入切空间，经GRU和线性层获得 \( \Delta_i, B_i, C_i \)；其中 \( B_i, C_i \) 通过Stiefel回缩保持正交性；\( A_i = \text{diag}(\exp(-\Delta_i \odot \lambda)) \) 保证动态稳定。
    - 输出映射：通过GeoMix算子 \( \text{GeoMix}(\tilde{Y}_i, S_i; \alpha) = \exp((1-\alpha)\log\tilde{Y}_i + \alpha\log S_i) \) 在流形上实现伪残差融合，保持SPD结构。
  - **双路径架构**：
    - **堆叠路径（Path #1）**：多尺度特征序列依次经过SSM、欧几里得自注意力、dSSM（带降维的R-SSM），最终压缩为单个SPD矩阵 \( Y_{\text{stack}} \)。
    - **嵌入路径（Path #2）**：直接对原始高维SPD矩阵进行分层几何降维（使用多个dSSM层），得到低维紧凑表示 \( Y_{\text{down}} \)。
    - **融合**：通过GeoMix算子将 \( Y_{\text{stack}} \) 与 \( Y_{\text{down}} \) 在流形上融合，所得SPD矩阵用于分类。

#### 3. 实验设计
- **数据集**：6个公开fMRI数据集，共1847名受试者。
  - ADNI（250例，阿尔茨海默病二分类）
  - OASIS（1247例，AD二分类）
  - PPMI（209例，帕金森四分类）
  - Taowu（40例，PD二分类）
  - Neurocon（41例，PD二分类）
  - Mātai（60例，运动前后二分类）
- **基准方法与对比**：分为四类——
  1. 经典序列模型：MLP-Mixer、Transformer、Mamba（输入为向量化FC矩阵）。
  2. 图神经网络：GCN、GIN（基于FC矩阵构建图）。
  3. 流形学习模型：SPDNet。
  4. 脑网络特定模型：BrainGNN、NeuroGraph、Contrast Pool、STAGIN（部分使用原始BOLD序列）。
- **评估指标**：准确率（Acc）、精确率（Pre）、F1分数，使用交叉验证（小数据集10折，OASIS 5折）。

#### 4. 资源与算力
- 文中明确说明：实验在搭载双Intel Xeon Platinum 8163 CPU（2.50 GHz, 48核/96线程）、两块NVIDIA RTX A6000 GPU（各48 GB, CUDA 12.4）、32 GB RAM、1 TB存储的Linux服务器上运行。
- **训练时间**（表5）：
  - Taowu（ROI-116, batch size 4）：每epoch训练2.2933秒，测试0.1426秒。
  - OASIS（ROI-160, batch size 8）：每epoch训练72.3225秒，测试12.5951秒。
- 超参数搜索：学习率 [1e-3,5e-3]，权重衰减 [1e-4,5e-4]，窗口大小 [16,32,64,96]，降维通道 [96,64,32,16]，状态维度32，epoch=100，种子1114。

#### 5. 实验数量与充分性
- **实验数量**：主实验（表1）在6个数据集上与11种方法对比，每个数据集报告平均值±标准差。消融实验（图3）包含4组模块删除（i-iv）及3组组件删除（v-vii，见表6），涵盖了不同路径、全局/局部分支、SSM/注意力/dSSM等关键组件。此外，与滑动窗口动态特征构建方法进行了对比（表2），并进行了可解释性分析（图2）。
- **充分性与公平性**：
  - 对比方法均采用官方或文献默认超参，Geo-Mamba通过网格搜索优化。
  - 采用交叉验证减少偏差，结果有统计显著性标记（t检验）。
  - 消融实验覆盖广泛，验证了各模块的必要性。
  - 客观性良好，但未进行跨数据集迁移或泛化测试，也未涉及超参数敏感性分析。

#### 6. 主要结论与发现
- Geo-Mamba在六个数据集上均取得最优或次优结果，尤其在Taowu、Neurocon、Mātai等小样本数据集上优势显著，在OASIS、ADNI、PPMI上亦表现领先。
- 消融实验表明：各模块贡献因数据集复杂度而异——大而复杂的任务（ADNI、PPMI）移除任何关键路径均导致明显下降；小样本任务（Taowu、Neurocon）模块冗余补偿能力较强。
- GeoMix融合权重显示双路径均有贡献（Path #1略高），证明全局与局部信息互补。
- 可解释性分析：重建的FC矩阵突出显示了与疾病相关的功能子网络（如PD相关的感觉运动、额顶网络；AD相关的腹侧注意、默认模式网络），并与脑图谱区域一致。
- 与滑动窗口动态特征构建相比，金字塔多尺度特征避免了窗口大小敏感问题，性能更优。

#### 7. 优点
- **几何保证**：所有运算（状态更新、降维、融合）在SPD流形上进行，严格保持正定性和曲率结构，避免欧氏操作带来的畸变。
- **双路径协同**：堆叠路径捕获多尺度局部-全局空间依赖，嵌入路径压缩冗余且保留全局几何信息，二者通过GeoMix互补融合。
- **多尺度金字塔**：沿对角线滑动窗口提取子块，符合脑区域邻近结构，且通过对数欧几里得注意池化实现几何意识聚合。
- **结构保持输出**：GeoMix提供伪残差连接，缓解梯度消失，并确保输出仍为SPD矩阵。
- **可解释性**：Path #2的降维矩阵可重建全脑连接，揭示疾病相关子网络，直接支持临床解释。
- **广泛验证**：在6个数据集、11种对比方法上全面评估，消融实验充分，结果统计显著。

#### 8. 不足与局限
- **计算成本**：模型参数约3.9M，训练时间相对较长（特别是OASIS上每epoch 72秒），在小样本上虽快，但整体效率仍有提升空间。
- **小样本鲁棒性**：在Taowu、Neurocon等极小样本数据集上，模块删除并未导致大幅下降，说明存在过拟合风险或模块冗余；模型优势更多体现在中等规模数据集。
- **可解释性限制**：Path #1无法直接重建全脑连接，仅Path #2支持可解释性，限制了联合解释能力。
- **超参数敏感**：窗口大小、降维维度、学习率等需针对不同数据集调优，且未分析超参数鲁棒性。
- **动态建模局限性**：模型采用空间多尺度序列而非时间滑动窗口，虽然避免了窗口选择问题，但未直接建模时间演化（如不同时间窗的动态变化），可能遗漏时间动态特征。
- **实验范围**：未涉及跨域泛化（如不同中心、不同扫描参数间的迁移），也未与最新的脑网络预训练模型（如BrainLM等）对比；消融实验虽有7组，但未包含更多控制变量（如不同池化方式、不同融合权重策略）。
- **偏差风险**：数据预处理和ROI提取依赖标准流程，但未讨论不同图谱（AAL vs. Destrieux）对结果的影响。

（完）

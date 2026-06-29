---
title: Subject-Invariant Domain Generalization for Psychiatric Disorder Identification
title_zh: 面向精神病识别的被试不变域泛化
authors: "Jiayu Lu, Yujin Wang, Xiaofeng Liu, Dandan Li, Bin Wang"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=onZPlzIB0n"
tags: ["query:fbn"]
score: 8.0
evidence: 功能脑网络的精神疾病识别域泛化
tldr: 功能脑网络存在显著的个体间分布差异，导致监督模型泛化能力差。本文提出两阶段域泛化模型SIDG，通过预训练学习被试不变表示，有效提升了精神病识别在新数据集上的性能。在多个脑网络数据集上验证了域泛化效果，为跨被试脑疾病诊断提供了实用方案。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 454, \"height\": 335, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1456, \"height\": 605, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1461, \"height\": 413, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1456, \"height\": 414, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 763, \"height\": 655, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 764, \"height\": 658, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1022, \"height\": 486, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1154, \"height\": 494, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1442, \"height\": 381, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-onzplzib0n/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1445, \"height\": 383, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-onzplzib0n/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1454, \"height\": 1296, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-onzplzib0n/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1456, \"height\": 438, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-onzplzib0n/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1427, \"height\": 177, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-onzplzib0n/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 972, \"height\": 356, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-onzplzib0n/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 556, \"height\": 176, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-onzplzib0n/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 538, \"height\": 177, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-onzplzib0n/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 721, \"height\": 492, \"label\": \"Table\"}]"
motivation: 脑网络数据个体差异大，传统监督模型难以泛化到新数据集，导致诊断性能下降。
method: 提出两阶段SIDG模型，预训练阶段学习被试不变表示，再用于下游分类。
result: 在多个脑网络数据上，跨数据集泛化性能优于现有方法。
conclusion: 学习被试不变特征可有效缓解分布偏移，提升脑疾病诊断模型的泛化能力。
---

## Abstract
Analyzing functional brain networks has emerged as a critical approach for understanding and diagnosing psychiatric disorders. Existing approaches primarily follow the standard supervised learning, which assumes that source and target data are independent and identically distributed. However, due to substantial inter-subject distributional differences in brain network data, models built on this assumption struggle to generalize from source to target datasets, resulting in suboptimal diagnostic performance. To address this issue, we propose a two-stage Subject-Invariant Domain Generalization (SIDG) model that learns subject-invariant representations in the pre-training stage, enabling their effective use for better psychiatric disorder identifcation in the fine-tuning stage. In order to overcome the mismatch between single-level topological representation methods and the inherently hierarchical topology of brain networks, we introduce a novel Hierarchical Topology Enhanced Graph Transformer Reconstruction (HTE-GTR) module to thoroughly learn subject-invariant representations distributed across multiple topological levels. Furthermore, we design tailored Subject-Invariant Reconstruction (SIR) loss comprising a subject-invariant term and a reconstruction term, to mitigate the impact of inter-subject distributional differences while preserving discriminative information for downstream tasks. Experiment results show clear improvements of our proposed SIDG on both the public ABIDE and ADHD datasets. The code is available at https://anonymous.4open.science/r/SIDG.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：功能脑网络分析是诊断精神疾病（如自闭症ADHD）的关键手段，但现有监督学习方法假设训练数据（源域）与测试数据（目标域）独立同分布。实际上，脑网络数据存在显著的个体间分布差异，导致模型泛化能力差，诊断性能严重下降。
- **整体意义**：本文旨在通过领域泛化（Domain Generalization, DG）技术，学习“被试不变（Subject-Invariant）”的表示，从而克服个体差异带来的分布偏移，提升精神疾病识别模型在未见被试上的诊断效果。

### 2. 论文提出的方法论

- **核心思想**：两阶段学习范式（预训练 → 微调）。预训练阶段通过自监督重建学习被试不变表示，微调阶段利用这些表示进行下游分类。
- **关键技术细节**：
  - **HTE-GTR模块**：
    - **层次图构建**：对每个脑连接组，按百分位保留不同比例的强边，生成多个拓扑层次子图（如保留5%、15%的边），避免人工噪声和动态稀疏化带来的失真。
    - **层次特定MHSA**：每个子图独立通过多层多头自注意力（L层MHSA）编码，捕获该层次的节点特征。
    - **层次特征融合**：将各层次输出与原始全图嵌入进行加权融合（带可学习权重 $\gamma_k$），再加LayerNorm稳定训练。
    - **编码器-解码器**：融合特征通过GNN编码器生成被试不变嵌入 $E_{SI}$，再经GNN解码器重构原始邻接矩阵，确保拓扑保真。
  - **SIR损失**：
    - **重建项** $L_{\text{Recon}}$：均方误差，保证解码器输出与输入的邻接矩阵一致。
    - **被试不变项** $L_{\text{SI}}$：通过对比学习拉近同一被试内图对（正样本），拉近不同被试图对（负样本），同时保留判别信息。计算公式包含温度系数 $\tau$ 和校正项 $\alpha$。
- **微调**：冻结预训练编码器，添加单层全连接分类器（sigmoid输出），用二分类交叉熵损失微调所有参数。

### 3. 实验设计

- **数据集**：
  - ABIDE（自闭症）：1009名被试（516患者，493对照），200个ROI（Craddock200图谱）。
  - ADHD-200（ADHD）：685名被试（243患者，442对照），190个ROI（Craddock200图谱）。
  - 每个被试的fMRI时间序列通过50秒滑动窗口切割，生成多个图实例用于自监督对比学习。
- **基准方法**：12种SOTA方法，包括GNN类（BrainGB, CRGNN, CI-GNN, CIA-GCL）和GT类（BrainTrans, Com-BrainTF, METAFormer, Contrasformer, RGTNet, BrainIB, GBT, ALTER, LCCAF, CAGT）。均使用原始官方代码公平比较。
- **评估指标**：ACC、SEN、SPE、F1、AUC，10折交叉验证，报告均值和标准差（10次运行）。

### 4. 资源与算力

- 文中明确提到：实验在**单张NVIDIA RTX 4090 GPU（48GB显存）** 上运行，使用PyTorch实现。
- 超参数：Adam优化器，学习率 $4\times10^{-5}$，批量大小128，最大训练轮数300。
- 未提供总训练时长或具体GPU小时数，但提及HTE-GTR的每个epoch训练时间约0.86秒，推理时间约0.824毫秒/样本。

### 5. 实验数量与充分性

- **主要实验**：
  - 两个数据集上对比SOTA方法（Table 1），全面覆盖12种方法。
  - 消融实验（Table 2）：移除HTE-GTR、移除SI Loss、同时移除两者。
  - 层次深度与边保留率影响（Figures 3–6）：ABIDE和ADHD上的完整二维/三维组合。
  - 运行时与内存评估（Table 3）：对比单层GTR与HTE-GTR。
  - 被试不变建模效果分析（Table 4）：通过识别矩阵量化个体差异去除情况。
  - MHSA层数与注意力头数影响（Figure 7）。
  - 编码器-解码器深度与维度影响（Tables 5–6, Figure 8）。
  - SIR损失的超参数分析（Figures 9–10）：平衡系数β、校正项α、温度τ。
  - 可解释性分析（Table 7）：在ADHD上提取注意力最强的10个脑区，并与已知神经基底吻合。
- **充分性评价**：实验覆盖了方法的所有关键组件和参数，消融设计合理，对比基线全面，统计稳定性好（10折交叉验证+10次独立运行），结果充分客观。

### 6. 论文的主要结论与发现

- SIDG在两个数据集上均**显著超越所有SOTA方法**：ABIDE上ACC达到75.27%（比第二高3.32%），ADHD上ACC达到74.26%（比第二高2.07%）。
- 消融验证了HTE-GTR和SI Loss均不可或缺：移除后ACC分别下降约4.0%和2.9%（ABIDE）。
- 层次拓扑深度为2（保留比率0.05+0.15）最优，更深的层次带来冗余而非增益。
- 被试不变建模有效降低了个体间差异（dI_self - dI_other减小，SIA下降），同时解码后部分恢复，在消除变异和保留判别信息间取得平衡。

### 7. 优点

- **创新性**：首次明确提出“被试不变域泛化”问题，并设计了针对性解决方案，填补了现有组不变模型无法处理个体级高度变异的空白。
- **技术巧妙**：利用层次拓扑（百分位阈值）自动生成多个视图，无需额外数据增强；SIR损失中引入校正项α与倒数结构，稳定了对比学习训练。
- **实验严谨**：多维度的消融、参数分析、运行时评估和可解释性验证，证明了每个设计的必要性和有效性。
- **可重复性**：开源代码，使用公开数据集，实验设置透明。

### 8. 不足与局限

- **数据集覆盖有限**：仅验证了ASD和ADHD两个精神病类别，对其他常见精神疾病（如抑郁症、精神分裂症）的泛化能力未知。
- **图谱依赖性**：仅使用Craddock200图谱，不同图谱（如Schaefer、AAL）可能影响结果，未做跨图谱实验。
- **计算资源需求**：HTE-GTR虽然实际开销低于理论三倍，但仍需约4.2GB显存和1.25倍训练时间，对资源受限场景可能不友好。
- **偏差风险**：训练数据来自多个采集站点（ABIDE、ADHD-200），虽未显式建模站点变异，但潜在站点偏差可能被被试不变建模部分吸收，未单独分析。
- **临床落地障碍**：仍为研究阶段，如文中所述存在误诊风险和隐私问题，需在实际临床中谨慎验证。

（完）

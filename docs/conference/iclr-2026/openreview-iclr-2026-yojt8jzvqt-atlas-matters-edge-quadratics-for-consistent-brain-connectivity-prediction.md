---
title: "Atlas Matters: Edge Quadratics for Consistent Brain Connectivity Prediction"
title_zh: 模板重要：用于一致脑连接预测的边缘二次项
authors: "Sai Karthik Navuluru, Surbhi Kumar, Lakshman Tamil, Baris Coskunuzer"
date: 2025-09-06
pdf: "https://openreview.net/pdf?id=YojT8JZvqT"
tags: ["query:fbn"]
score: 8.0
evidence: 专注于通过边缘二次项从rs-fMRI预测功能连接，实现一致建模
tldr: 针对rs-fMRI功能连接预测中模型忽略高阶边缘交互及评估不一致的问题，提出边缘图像编码器，采用双重空洞空间金字塔池化和低秩二次块显式建模边缘-边缘效应。同时引入统一评估协议（固定种子、标准预处理、多模板），在多个数据集上验证了方法的稳定性和有效性。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-yojt8jzvqt/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1018, \"height\": 638, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yojt8jzvqt/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 894, \"height\": 372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yojt8jzvqt/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1438, \"height\": 978, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yojt8jzvqt/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1408, \"height\": 419, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yojt8jzvqt/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1437, \"height\": 1036, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yojt8jzvqt/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 715, \"height\": 570, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yojt8jzvqt/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1418, \"height\": 767, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 798, \"height\": 210, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1452, \"height\": 1128, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 663, \"height\": 300, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 488, \"height\": 285, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 695, \"height\": 328, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1446, \"height\": 258, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1247, \"height\": 504, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1447, \"height\": 275, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1459, \"height\": 1671, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 797, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1451, \"height\": 177, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1451, \"height\": 312, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yojt8jzvqt/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1164, \"height\": 245, \"label\": \"Table\"}]"
motivation: 解决功能连接预测中边缘交互建模不足和评估不一致的问题。
method: 提出边缘图像编码器结合低秩二次块显式建模边缘-边缘效应。
result: 在统一协议下实现稳定且有效的FC预测。
conclusion: 为可复现的FC预测提供了方法学和评估标准。
---

## Abstract
Functional connectivity from resting-state fMRI is a strong substrate for subject-level prediction, yet progress is held back by two issues. First, most architectures ingest FC via node-centric propagation or global attention, leaving higher-order edge interactions implicit. Second, evaluations are inconsistent across seeds, atlas choice, preprocessing, and hyperparameter budgets, which obscures true gains.

We propose a simple edge-image encoder that applies dual atrous spatial pyramid pooling to features and connectivity, coupled with a low-rank quadratic block that makes edge-edge effects explicit and efficient. Beyond design, we introduce a unified protocol with five fixed seeds, harmonized preprocessing, and multiple standard atlases, and we re-run recent GNN and transformer baselines under identical settings. Under this protocol, our model **EdgeQuad** attains the best mean performance on curated functional atlases for ABIDE and ADNI, while on unsupervised parcellations such as Ward and KMeans rankings are mixed, highlighting sensitivity to atlas construction. The quadratic block realizes localized degree-2 interactions with provable stability, explaining robustness. The model is lightweight and computationally efficient. To facilitate rigorous comparison, we release code, exact configs, and per-seed logs via an anonymous link.

---

## 论文详细总结（自动生成）

# 论文总结：EdgeQuad — 基于边缘二次项的一致脑连接预测

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：静息态功能磁共振成像的功能连接（FC）是进行个体水平预测的重要基础。但现有模型存在两个主要问题：
  - **边缘建模不足**：大多数架构以节点为中心进行信息传播或采用全局注意力，高阶边缘-边缘交互被隐式处理，未能充分利用边缘间的结构化信息。
  - **评估不一致**：不同研究在模板选择、预处理、超参数设置和随机种子上的差异，使得实验结果难以比较，真实进展被掩盖。
- **核心目标**：提出一种轻量级边缘图像编码器，显式建模边缘-边缘效应，并建立统一的评估协议，实现可复现、公平的FC预测。

## 2. 方法论
- **核心思想**：将FC矩阵视为边缘图像，利用双重空洞空间金字塔池化（Dual ASPP）提取多尺度结构，并通过低秩二次项分支显式捕获边缘-边缘交互。
- **关键技术细节**：
  - **边缘图像编码器**：CNN + 双重ASPP（一个作用于特征图，一个直接作用于连接矩阵），得到节点嵌入和精炼后的连接矩阵 \( C' \)。
  - **低秩二次交互块**：实现 rank-\(k\) 的度-2多项式交互，公式为：
    \[
    Q = \bigl( (X V^\top) \odot (C' X U^\top) \bigr) W_o,
    \]
    其中 \(U, V, W_o \in \mathbb{R}^{k \times d'}, k \ll d'\)，\(\odot\) 为逐元素乘积。这使得显式边缘-边缘交互参数高效。
  - **门控融合**：将一阶路径 \(B = X W_C\) 与二阶路径 \(Q\) 通过内容门控 \(Y_i = \sigma(x_i W_g) \odot (B_i + \alpha Q_i)\) 融合。
  - **聚类池化**：使用软分配矩阵 \(\Pi\) 进行图级读出。
  - **归一化**：对精炼连接矩阵 \(C'\) 进行度归一化（基于绝对值），确保稳定性。
- **算法流程**（文字描述）：
  1. 预处理rs-fMRI数据，用模板提取ROI时间序列，计算Pearson相关得到FC矩阵 \(C\)。
  2. 将 \(C\) 作为边缘图像输入CNN+特征ASPP，得到特征 \(F'\)；同时连接ASPP输出精炼 \(C'\)。
  3. 节点嵌入 \(X\) 通过低秩二次块得到 \(Q\)，一阶线性变换得到 \(B\)。
  4. 门控融合后经聚类池化得到图嵌入，最后通过MLP分类。
- **理论支撑**：命题1-4证明了低秩二次项实现了局部化的 rank-\(k\) 度-2交互，且在特征和连接扰动下具有Lipschitz稳定性。

## 3. 实验设计
- **数据集**：
  - ABIDE（自闭症 vs 对照，1025例）
  - ADNI（阿尔茨海默病 vs 对照，138例）
  - PPMI（帕金森病4分类，195例）
  - ADHD200（ADHD vs 对照，459例）
- **模板（Atlases）**：AAL116, Schaefer100, Harvard-Oxford48, Ward100, KMeans100（以及ADHD200的Craddock-200）
- **对比方法**：
  - 通用图模型：GCN, GPS（混合GNN-Transformer）
  - 领域专用：BrainNetCNN, BioBGT, ALTER, BQN（最新的二次网络）
- **统一评估协议**：固定5个随机种子（42,1042,2042,3042,4042），7:1:2分层划分，200 epochs，batch 16，Adam优化器，统一超参数网格，模型选择基于验证损失最低的检查点。
- **公平性**：所有方法在相同划分、种子、预处理和超参数搜索空间下运行，仅架构强制差异除外。

## 4. 资源与算力
- **算力说明**：所有实验在单个GPU节点（Ganymede集群）上运行，具体为一块NVIDIA H100 NVL GPU（约95 GB HBM3，Hopper架构）。文章中给出了ABIDE AAL116下的训练吞吐量、每epoch时间、峰值内存、参数量及头部FLOPs。例如EdgeQuad训练吞吐量约为1549图/秒，每epoch约0.46秒，峰值内存0.1364 GB，参数量145万。整体计算资源相对轻量。

## 5. 实验数量与充分性
- **实验规模**：在4个数据集上、每种方法在5个模板上重复5个种子，共约（6种方法×4数据集×5模板=120组主实验）×5种子 = 600次独立运行。此外还进行了：
  - 消融实验（ROI排序鲁棒性、秩参数k的影响、组件消融）
  - 深度敏感性实验（在ADHD200上对比不同深度的基线）
  - 使用各方法推荐超参数的额外验证（表11）
- **充分性**：实验设计系统且全面。通过统一协议消除了评估方差，跨模板、跨种子、跨数据集验证了方法的鲁棒性。消融实验覆盖了关键设计选择，分量充分。不足之处：部分基线（如BioBGT）在ADHD200上因内存不足未能参与；动态FC和跨站点迁移等情况未涉及。

## 6. 主要结论
- EdgeQuad在功能/解剖学模板（AAL, Schaefer, Harvard-Oxford）上取得了最佳或次优的平均AUC和ACC，在聚类模板（Ward, KMeans）上排名混合但仍有竞争力。
- 显式低秩边缘-边缘交互相比隐式传播（GNN/Transformer）带来性能提升，且参数量轻、计算高效。
- 模板选择对绝对性能和模型相对排名影响巨大：功能/解剖学模板上的差距远大于聚类模板，说明模板是一个关键的超参数，必须作为公平评估的一部分。
- 统一评估协议暴露了现有方法的方差和失败模式（如BioBGT在某些配置下高方差），为可复现研究提供了基准。

## 7. 优点
- **建模创新**：将FC矩阵作为边缘图像处理，双重ASPP + 低秩二次项显式建模边缘-边缘效应，避免深度消息传递，理论上有稳定性保证。
- **评估创新**：提出统一协议（固定种子、划分、预处理、超参数网格、多模板），大大提升了可比性和可复现性；公开了代码和详细配置。
- **计算效率**：EdgeQuad参数少（145万），训练速度快（0.46秒/epoch），内存占用低（0.14 GB），易于扩展。
- **理论分析**：提供了低秩二次项的表示能力、局部性、稳定性的严格证明，解释了鲁棒性来源。

## 8. 不足与局限
- **模板依赖性**：在无监督聚类模板（Ward/KMeans）上性能不稳定，表明模型对模板质量敏感，通用性受限。文章建议优先使用功能/解剖学模板，但临床数据往往缺乏此类精细模板。
- **静态FC假设**：仅使用静态Pearson相关FC，未涉及动态FC或更复杂的连接估计（偏相关、一致性等），可能丢失时变信息。
- **基线覆盖**：未对比最近的一些分层池化、对比学习或多模板蒸馏方法（如BrainGNN, 对比池化等），因为作者将其归类为不同目标。但这些方法同样重要。
- **站点泛化**：虽然跨种子稳定，但未测试跨数据站点的泛化（如ABIDE多站点），也未进行域适应实验。
- **消融范围**：秩消融在ABIDE AAL116上进行，未在所有数据集和模板上重复；深度敏感性仅在ADHD200上测试，覆盖面有限。
- **临床实用性**：虽然AUC较高，但实验未分析校准、错误成本或临床指标如NPV/PPV，且样本量较小（ADNI仅138例），可能存在高估风险。

（完）

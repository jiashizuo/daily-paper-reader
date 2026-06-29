---
title: "BRep: Graph-structured Brain Representation Learning via Parametric High-order Dependence Measures"
title_zh: "BRep: 基于参数化高阶依赖度量的图结构脑表示学习"
authors: "Liang Yang, Shuai Zhai, Ziyi Ma, Jiaming Zhuo, Di Jin, Chuan Wang, Zhen Wang, Xiaochun Cao"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=MqzMcpM90G"
tags: ["query:fbn"]
score: 9.0
evidence: 使用图神经网络进行脑网络表示学习和神经系统疾病诊断
tldr: 现有脑功能网络构建多依赖手工设计的相关系数，缺乏可学习组件，限制了后续图模型性能。本文提出BRep，通过参数化高阶依赖度量学习图结构脑表示，避免了信息丢失。在神经系统疾病诊断任务上，BRep显著优于基于固定网络的方法，为融合网络构建与疾病预测提供了端到端可学习的框架。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1439, \"height\": 486}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1400, \"height\": 485}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 856, \"height\": 340}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 517, \"height\": 334}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1392, \"height\": 453}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 708, \"height\": 268}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 713, \"height\": 276}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 712, \"height\": 269}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 711, \"height\": 270}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 710, \"height\": 268}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1324, \"height\": 706}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1462, \"height\": 413}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1462, \"height\": 418}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1462, \"height\": 487}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1454, \"height\": 481}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1459, \"height\": 484}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 823, \"height\": 414}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 562, \"height\": 507}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-mqzmcpm90g/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1443, \"height\": 608}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mqzmcpm90g/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1444, \"height\": 333}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mqzmcpm90g/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1444, \"height\": 342}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mqzmcpm90g/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 871, \"height\": 282}]"
motivation: 手工设计的脑功能网络可能丢失关键信息，导致即使精心设计的图模型也难以提升诊断性能。
method: 提出参数化高阶依赖度量替代传统相关系数，以可学习方式构建脑功能网络，并联合图神经网络进行表示学习。
result: 在多个神经系统疾病数据集上，BRep的分类准确率显著优于基于手工网络的方法。
conclusion: 端到端学习脑网络构建能够提升疾病诊断表现，是未来脑影像分析的重要方向。
---

## Abstract
The brain network plays an important role in diagnosing neurological disorders. Brain functional network construction often follows the hand-crafted Correlation Coefficients of blood-oxygen-level-dependent (BOLD) time series without any learnable components. At the same time, most efforts are made to the models that predict individual neurological disorders with the constructed brain network as input, such as graph neural networks. Unfortunately, the fixed brain network may lose critical information during construction and lead to difficulty in performance improvement, even with deliberately designed graph models. From this perspective, the current situation is similar to the machine learning community, i.e., hand-crafted features and learnable predictors, before the advent of representation learning.
In fact, the brain network can be regarded as a graph-structured learnable representation of the brain.  By drawing on representation learning, this paper presents the Brain Representation (BRep) learning problem. To this end, the widely used linear and nonlinear correlations are enhanced to be high-order, parametric, and learnable. The flexible brain representation makes the following predictor simple and leads the framework to possess an end-to-end characteristic. The framework is implemented by combining the parametric correlation and a TopK sparsification. Extensive evaluations demonstrate that the proposed BRep possesses superior performance, high efficiency, and interpretability. The source code is publicly available at https://anonymous.4open.science/r/BRep-demo/

---

## 论文详细总结（自动生成）

### 论文核心问题与整体含义（研究动机和背景）

- **研究动机**：当前脑功能网络构建通常依赖手工设计的相关系数（如 Pearson 相关、距离相关、HSIC 等），这些方法缺乏可学习组件，导致构造出的固定网络可能丢失关键信息，即使后续采用精心设计的图神经网络（GNN）或图 Transformer（GT）也难以进一步提升诊断性能。
- **整体含义**：作者类比机器学习早期手工特征+可学习预测器的范式，提出将脑网络本身视为一种图结构的可学习表示（Brain Representation, BRep），通过端到端学习替代固定构造，期望同时提升表示质量和下游任务性能。

### 方法论：核心思想、关键技术细节

- **核心思想**：将线性与非线性相关系数统一为高维潜在空间中的内积形式，并进一步推广为可学习的高阶依赖度量，使脑网络构造成为模型的一部分，与下游简单预测器联合优化。
- **关键技术细节**：
  1. **统一线性/非线性相关系数**：
     - Pearson 相关系数可写为 \( r_{ij} = \tilde{x}_i \tilde{x}_j^T = (\tilde{x}_i I)(\tilde{x}_j I)^T \)。
     - 非线性相关系数（dCor/HSIC）可近似为 \( r_{ij} = x_i J J^T x_j^T \)，其中 \( J \) 是差矩阵，\( JJ^T \) 秩不超过 D。
  2. **高阶依赖度量**：将 \( JJ^T \) 替换为可学习矩阵 \( O O^T \)，得 \( r_{ij} = (x_i O)(x_j O)^T \)，其中 \( O \in \mathbb{R}^{D \times D} \) 为参数，可通过反向传播训练。
  3. **端到端实现**：定义 HDM（High-order Dependence Measure）模块：
     \[
     Z = \hat{X} O,\quad A = \sigma(\text{Norm}(\text{TopK}(Z Z^T)))
     \]
     其中 \( \hat{X} \) 为 z-score 标准化后的 BOLD 时间序列，TopK 选每行 top K 个连接，行归一化后经激活函数得到图表示 \( A \)。
  4. **预测器**：采用简单 MLP + 池化，无需消息传递。
  5. **损失函数**：交叉熵损失（\( L_{CE} \)） + 去噪自编码器正则项（\( L_{reg} = \|X - \text{GNN}(\tilde{X}, A)\| \)），平衡参数 λ。
- **理论支撑**：证明通过多内积通道（multi-head inner-products）可逼近任意高阶 U/V-统计量，而单内积函数不能通用逼近。

### 实验设计：数据集、基准、对比方法

- **数据集**：ABIDE（ASD vs NC，1009 被试）、ADHD-200（ADHD vs 正常，459 被试）、ADNI（多分类，538 被试）、PPMI（多分类，209 被试）。ROI 图谱采用 Craddock 200、AAL90/116 等。
- **基准与对比方法**：14 种基线，分三类：
  - **GNNs**：GCN, GAT, BrainGNN, BrainGB, FBNetGEN, A-GCL。
  - **GTs**：SAN, Graphormer, GraphTrans, BrainNETTF, ContrastPool, ALTER, BioBGT。
  - **NNs**：MLP, BQN。
- **评估指标**：二分类用 AUC、ACC、SEN、SPE；多分类用 AUC、ACC、F1、SEN、SPE。所有结果报告五次随机试验的均值±标准差。

### 资源与算力

- **文中有明确说明**：所有实验使用 PyTorch，在单张 NVIDIA GeForce RTX 3090（24GB GPU）的 Linux 机器上运行。未提及具体训练时长或总 GPU 小时数。
- **超参数**：Adam 优化器，初始学习率 1e-4，目标学习率 1e-5，权重衰减 1e-3。Dropout 在 {0.0,0.1,0.2,0.3} 中选择。

### 实验数量与充分性

- **实验数量**：
  - 主实验结果表（表1）对比了两个二分类数据集上 14 个基线的 4 个指标。
  - 附加实验：扩展至多分类 ADNI/PPMI（表3），对比 4 个基线 + HDM 变体。
  - 消融实验：去除去噪正则、归一化等组件（图6）。
  - 超参数分析：HDM 维度（图5）、层数（图7）、TopK（图8）、去噪损失权重（图9）、噪声比例（图10）。
  - 可解释性分析：组间差异连接可视化（图3、图11），时间序列差异对比（图4），与 VGAE 对比（图15-16）。
  - 适用性验证：将 HDM 插入其他模型（GCN、BrainNETTF、BQN）均获得提升（表2）。
  - 校准分析（图18）、统计显著性检验（表4，配对 t 检验 p<0.05）。
- **充分性与公平性**：实验覆盖主流基线，消融全面，超参数扫描范围合理，且统一硬件和设备设置，报告标准差，具备统计检验，较为充分和客观。

### 主要结论与发现

- **性能优势**：BRep 在 ABIDE 和 ADHD-200 上多数指标优于或持平最强基线（如 BQN、BrainNETTF），尤其在 ACC 上提升约 2-6%。
- **端到端学习的有效性**：HDM 模块可显著提升多种模型（包括简单 MLP 和复杂 GNN/GT）的性能，验证了可学习脑网络构造的价值。
- **可解释性**：BRep 学习到的差异连接与已知 ASD 异常模式（如超连接、salience network、颞顶区域）一致，且时间序列差异更显著。
- **模块贡献**：去噪正则项和行归一化对稳定训练和提升判别力至关重要。
- **维度匹配**：HDM 维度 D 设置为时间序列长度（100）时性能最优，符合理论预期。

### 优点

- **创新性**：首次将脑网络构造本身视为可学习表示，突破了手工相关系数的限制，借鉴表示学习范式。
- **方法优雅**：统一线性/非线性相关系数为内积形式，并推广至可学习高阶依赖，理论分析和实现简洁。
- **性能突出**：在多个数据集上取得最好或次好结果，且与不同预测器兼容。
- **可解释性**：实验提供了丰富的可视化分析，证实模型学到具有神经科学意义的模式。
- **实验充分**：包含多种消融、超参、校准、显著性检验，对比了三大类共 14 种基线，结果可信。

### 不足与局限

- **实验覆盖**：仅使用 fMRI 静态功能连接；未涉及动态功能连接或多模态数据（如 sMRI、DTI）。
- **计算复杂度**：HDM 模块涉及矩阵乘法 \( XO \)，当 ROIs 和时间点较多时可能增大内存和计算开销；论文未提供详细训练时间对比。
- **理论局限性**：高阶依赖的近似依赖参数矩阵 \( O \) 维度必须等于时间序列长度 D，无法处理 D 极大或变化的情况。
- **偏差风险**：仅使用特定图谱（Craddock200、AAL），不同图谱对结果影响未探讨。
- **应用限制**：仅在公开数据集上验证；未见跨站点泛化或对噪声/缺失数据的鲁棒性分析。
- **缺乏对比**：未与其他可学习脑网络构造方法（如 FBNetGEN 的任务驱动生成）进行直接比较（FBNetGEN 是基于 GNN 生成边，但仍是固定构造后训练？文中未将其作为可学习构造基线对比）。

（完）

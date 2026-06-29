---
title: "BRep: Graph-structured Brain Representation Learning via Parametric High-order Dependence Measures"
title_zh: BRep：通过参数化高阶依赖度量的图结构脑表示学习
authors: "Liang Yang, Shuai Zhai, Ziyi Ma, Jiaming Zhuo, Di Jin, Chuan Wang, Zhen Wang, Xiaochun Cao"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=MqzMcpM90G"
tags: ["query:fbn"]
score: 9.0
evidence: 通过参数化高阶依赖学习图结构脑表示用于疾病诊断
tldr: 为了克服传统手工构建脑功能网络丢失关键信息的问题，提出BRep框架，通过参数化高阶依赖度量端到端学习脑网络图结构，并与图神经网络结合用于疾病诊断。在多个脑疾病数据集上优于固定网络的方法，表明可学习网络能够捕获更丰富的判别信息。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1439, \"height\": 486, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1400, \"height\": 485, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 856, \"height\": 340, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 517, \"height\": 334, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1392, \"height\": 453, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 708, \"height\": 268, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 713, \"height\": 276, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 712, \"height\": 269, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 711, \"height\": 270, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 710, \"height\": 268, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1324, \"height\": 706, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1462, \"height\": 413, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1462, \"height\": 418, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1462, \"height\": 487, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1454, \"height\": 481, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1459, \"height\": 484, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 823, \"height\": 414, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mqzmcpm90g/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 562, \"height\": 507, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-mqzmcpm90g/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1443, \"height\": 608, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mqzmcpm90g/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1444, \"height\": 333, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mqzmcpm90g/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1444, \"height\": 342, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mqzmcpm90g/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 871, \"height\": 282, \"label\": \"Table\"}]"
motivation: 替代手工构建的脑功能网络以保留更多判别信息。
method: 参数化高阶依赖度量端到端学习脑网络图结构。
result: 优于固定网络方法，提升疾病诊断准确性。
conclusion: 为脑网络学习提供了可端到端训练的范式。
---

## Abstract
The brain network plays an important role in diagnosing neurological disorders. Brain functional network construction often follows the hand-crafted Correlation Coefficients of blood-oxygen-level-dependent (BOLD) time series without any learnable components. At the same time, most efforts are made to the models that predict individual neurological disorders with the constructed brain network as input, such as graph neural networks. Unfortunately, the fixed brain network may lose critical information during construction and lead to difficulty in performance improvement, even with deliberately designed graph models. From this perspective, the current situation is similar to the machine learning community, i.e., hand-crafted features and learnable predictors, before the advent of representation learning.
In fact, the brain network can be regarded as a graph-structured learnable representation of the brain.  By drawing on representation learning, this paper presents the Brain Representation (BRep) learning problem. To this end, the widely used linear and nonlinear correlations are enhanced to be high-order, parametric, and learnable. The flexible brain representation makes the following predictor simple and leads the framework to possess an end-to-end characteristic. The framework is implemented by combining the parametric correlation and a TopK sparsification. Extensive evaluations demonstrate that the proposed BRep possesses superior performance, high efficiency, and interpretability. The source code is publicly available at https://anonymous.4open.science/r/BRep-demo/

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **问题**：传统脑功能网络（脑网络）构建依赖手工设计的相关系数（如 Pearson 相关系数、距离相关 dCor、HSIC），这些系数是固定的、无学习能力的，因此可能丢失关键信息。下游即使使用复杂的图神经网络（GNN）或图 Transformer，性能提升也受限。
- **类比**：该现状与机器学习早期使用手工特征 + 可学习预测器类似，直到表示学习的出现才改变了局面。
- **解决思路**：将脑网络视为一种**可学习的图结构脑表示**，使其能够端到端地从 BOLD 时间序列中学习，从而捕获高阶、非线性的依赖关系，并使下游预测器简化（如简单 MLP）。
- **意义**：为脑网络分析提供一种新的表示学习范式，有望提升神经疾病诊断的准确性和可解释性。

## 2. 论文提出的方法论

### 核心思想
- 将传统线性相关（Pearson）和非线性相关（dCor、HSIC）统一为**高维潜在空间中的内积形式**，并扩展为**高阶、参数化、可学习的依赖度量**。
- 该度量可以近似任意连续的高阶依赖函数（U/V 统计量），通过一个可学习参数矩阵 O 实现。
- 学习到的脑网络图表示 A 使下游预测器（如 MLP）变得简单，整个框架端到端可训练。

### 关键技术细节
1. **公式统一**：
   - Pearson 线性相关：\( r_{ij}^{(1)} = \tilde{x}_i \tilde{x}_j^T = (\tilde{x}_i I)(\tilde{x}_j I)^T \)
   - dCor/HSIC 非线性相关：\( r_{ij}^{(2)} = x_i J J^T x_j^T \)，其中 J 是差分矩阵。
   - 高阶依赖度量：通过矩阵分解，\( J J^T = O O^T \)，得到**参数化形式**：\( r_{ij}^{high} = x_i O O^T x_j^T = (x_i O)(x_j O)^T \)，O 是可学习参数矩阵（尺寸 D×D，D 为时间序列长度）。

2. **网络结构**：
   - **HDM 模块** (Mapping of High-order Dependence Measure)：
     \[
     Z = \hat{X} O,\quad A = \sigma\left(\mathrm{Norm}\left(\mathrm{TopK}(Z Z^T)\right)\right)
     \]
     其中 \(\hat{X}\) 是 z-score 归一化的时间序列，TopK 对每行选择 top K 个边，Norm 为行归一化，\(\sigma\) 为非线性激活。
   - **预测器**：简单 MLP + 池化，计算 \( \hat{y} = \mathrm{MLP}(\mathrm{pooling}(\mathrm{MLP}(A))) \)。

3. **损失函数**：
   - 交叉熵损失 \( \mathcal{L}_{CE} \)
   - 去噪自编码正则项 \( \mathcal{L}_{reg} = \| X - \mathrm{GNN}(\tilde{X}, A) \| \)，其中 \(\tilde{X}\) 是加噪版本，GNN 利用学习到的 A 重建原始时间序列。
   - 总损失：\( \mathcal{L} = \mathcal{L}_{CE} + \lambda \mathcal{L}_{reg} \)

4. **理论分析**：
   - 证明了使用全外积（outer-product）的架构可以**通用逼近**任何连续的高阶依赖函数（定理 2.1）。
   - 单标量内积（single-scalar pipeline）的类无法通用逼近（定理 2.4）。
   - 多通道内积（multi-head inner-products）可以恢复通用逼近能力（定理 2.6）。

## 3. 实验设计

### 数据集与任务
- **ABIDE**：自闭症（ASD）vs 正常对照（NC），1009 名被试，二分类。
- **ADHD-200**：注意力缺陷多动症 vs 健康对照，459 名被试，二分类。
- **ADNI**：阿尔茨海默病四分类（NC, AD, MCI 等），538 名被试。
- **PPMI**：帕金森病四分类，209 名被试。

### Benchmark 与基线方法
- **GNNs**：GCN, GAT, BrainGNN, BrainGB, FBNETGEN, A-GCL
- **GTs**：SAN, Graphormer, GraphTrans, BrainNETTF, ContrastPool, ALTER, BioBGT
- **NNs**：MLP, BQN
- 所有基线的脑网络输入均为手工构建的 Pearson 相关矩阵。

### 评价指标
- 二分类：AUC、ACC、SEN、SPE
- 多分类：AUC（macro）、ACC、F1（macro）、SEN（macro）、SPE（macro）

## 4. 资源与算力

- **硬件**：单张 NVIDIA GeForce RTX 3090 24GB GPU。
- **软件**：PyTorch，Linux。
- **训练配置**：Adam 优化器，初始学习率 1e-4，目标学习率 1e-5，权重衰减 1e-3。每轮随机拆分训练/验证/测试比例 7:1:2。
- **训练时长**：论文未明确给出具体时长，但描述为中等规模数据集，可以推测训练时间不长（单GPU可完成）。

## 5. 实验数量与充分性

- **主要分类实验**：在 ABIDE 和 ADHD-200 上对比 14 种基线，报告 5 次运行的平均值±标准差，使用 AUC/ACC/SEN/SPE 等指标。
- **多类分类实验**：在 ADNI 和 PPMI 上进行了补充实验（附录 C.4），对比 GCN、BrainNETTF、BQN 等的 +HDM 变体。
- **消融实验**：去除 DAE 正则化、去除归一化、两者皆去除（图 6），验证了各组件的重要性。
- **超参数敏感性分析**：HDM 维度（D=32~256）、HDM 层数（1~5）、TopK 邻居数（K=20~160）、去噪损失权重（λ=1~8）、噪声比例（0.05~0.2）。
- **可解释性分析**：差异脑连接可视化（图 3、图 11）、时间序列差异曲线对比（图 4）、与 VGAE 学习的脑连接对比（附录 C.6）。
- **适用性扩展**：将 HDM 模块插入 GCN、BrainNETTF、BQN，观察性能提升（表 2、表 3）。
- **统计显著性**：配对 t 检验（表 4），BRep 与 BQN、BrainNETTF 在 AUC 和 ACC 上 p<0.05。
- **校准分析**：可靠性曲线和 ECE 评估（图 18），ECE=0.037，校准良好。
- **线性/非线性探测**：比较 Pearson 与 BRep 在线性/非线性预测器下的表现（附录 C.7）。
- **总评**：实验覆盖了多个数据集、多种基线、充分消融和敏感性分析，且包含可解释性验证，实验设计比较充分、客观、公平。

## 6. 论文的主要结论与发现

- **性能优势**：BRep 在 ABIDE 和 ADHD-200 上均取得最佳或次佳 AUC/ACC/SEN，尤其在 ADHD-200 上 ACC 达 77.82%，超越第二名 BQN（75.68%）约 2.14%。
- **可学习表示的有效性**：将 HDM 模块插入 GCN、BrainNETTF、BQN 均带来明显提升，证明可学习的高阶依赖度量优于固定 Pearson 相关。
- **解释性**：差异脑连接可视化识别出 ASD 中显著的高连通性区域（如 ACC、insula、pSTS 等），与已知神经影像研究一致。
- **理论保证**：提出的参数化双线性形式可以通用逼近任意高阶依赖，为方法提供了理论基础。
- **框架简洁**：下游仅需简单 MLP，无需复杂消息传递，训练高效。

## 7. 优点

- **创新性**：首次将脑网络构建从固定手工设计转变为可学习表示，使其端到端可训练。
- **理论严谨**：提供了通用近似定理的证明，揭示了单标量内积的局限性及多通道的补救能力。
- **实用性强**：框架简单（HDM + MLP），易于实现和扩展，且性能显著优于现有复杂的 GNN/GT 方法。
- **可解释性好**：通过差异脑连接和时间序列可视化，验证了其与神经生物学发现的一致性。
- **实验全面**：涵盖多种数据集、多种基线、充分的消融和敏感性分析，并进行了统计显著性检验。
- **代码开源**：提供匿名代码仓库，便于复现和后续研究。

## 8. 不足与局限

- **实验覆盖**：仅使用了 fMRI BOLD 数据，未涉及 EEG、MEG 或其他模态，多模态扩展未验证。
- **计算复杂性未详细分析**：虽然 O 矩阵尺寸与时间维度相同，但高维情况（如 D=256）下的计算开销未量化讨论。
- **超参数敏感性**：TopK 的 K 值和噪声比例等超参数需要调优，对不同数据集的最优值可能不同（如 ADHD-200 上 K=80 最佳），未提供自适应选择策略。
- **基线对比细节**：部分基线（如 FBNETGEN、A-GCL）原文使用更复杂的训练策略，文中按默认超参数复现，可能存在不公平比较的风险（尽管作者声称按原文设置）。
- **泛化性**：仅在四类脑疾病上验证，且样本量相对较小（ABIDE 1009，ADHD-200 459），更广泛的疾病（如精神分裂症、抑郁症）尚未测试。
- **理论假设**：部分定理假设 compact 集，实际数据可能不严格满足，但该假设在逼近理论中常见。
- **无监督/自监督预训练**：未探索利用无标签数据预训练 HDM 的可能性。

（完）

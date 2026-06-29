---
title: Directed Semi-Simplicial Learning with Applications to Brain Activity Decoding
title_zh: 有向半单纯学习及其在脑活动解码中的应用
authors: "Manuel Lecha, Andrea Cavallo, Francesca Dominici, Ran Levi, Alessio Del Bue, Elvin Isufi, Pietro Morerio, Claudio Battiloro"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=YR3CNvFfCr"
tags: ["query:fbn"]
score: 6.0
evidence: 有向高阶脑网络学习
tldr: 现有拓扑深度学习局限于无向设置，无法捕捉脑网络中丰富的有向高阶交互。本文提出半单纯神经网络（SSNs），操作于有向半单纯集，编码有向高阶模体。在脑活动解码任务中，SSNs优于传统GNN和现有TDL模型，为脑网络分析提供了更精细的拓扑工具。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1439, \"height\": 473, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1047, \"height\": 366, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 373, \"height\": 349, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 344, \"height\": 541, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1216, \"height\": 344, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 431, \"height\": 247, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 458, \"height\": 221, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 741, \"height\": 292, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1446, \"height\": 365, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1010, \"height\": 322, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1007, \"height\": 323, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yr3cnvffcr/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1447, \"height\": 294, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 505, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 393, \"height\": 242, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1450, \"height\": 630, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 651, \"height\": 273, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 728, \"height\": 436, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1170, \"height\": 450, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 880, \"height\": 147, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 454, \"height\": 198, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 733, \"height\": 374, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 501, \"height\": 499, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 730, \"height\": 401, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 731, \"height\": 264, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1452, \"height\": 311, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 455, \"height\": 307, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yr3cnvffcr/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 524, \"height\": 278, \"label\": \"Table\"}]"
motivation: 现有图神经网络忽略有向高阶交互，而脑网络中此类交互丰富且功能重要。
method: 提出半单纯神经网络（SSNs），在编码有向高阶结构的有向半单纯集上进行消息传递。
result: 在脑活动解码任务中，SSNs性能优于传统GNN和有向TDL方法。
conclusion: 有向半单纯学习能有效建模脑网络中的复杂有向高阶关系。
---

## Abstract
Graph Neural Networks (GNNs) excel at learning from pairwise interactions but often overlook multi-way and hierarchical relationships. Topological Deep Learning (TDL) addresses this limitation by leveraging combinatorial topological spaces, such as simplicial or cell complexes. However, existing TDL models are restricted to undirected settings and fail to capture the higher-order directed patterns prevalent in many complex systems, e.g., brain networks, where such interactions are both abundant and functionally significant. To fill this gap, we introduce Semi-Simplicial Neural Networks (SSNs), a principled class of TDL models that operate on semi-simplicial sets---combinatorial structures that encode directed higher-order motifs and their directional relationships. To enhance scalability, we propose Routing-SSNs, which dynamically select the most informative relations in a learnable manner. We theoretically characterize SSNs by proving they are strictly more expressive than standard graph and TDL models, and they are able to recover several topological descriptors. Building on previous evidence that such descriptors are critical for characterizing brain activity, we then introduce a new principled framework for brain dynamics representation learning centered on SSNs. Empirically, we test SSNs on 4 distinct tasks across 13 datasets, spanning from brain dynamics to node classification, showing competitive performance. Notably, SSNs consistently achieve state-of-the-art performance on brain dynamics classification tasks, outperforming the second-best model by up to 27\%, and message passing GNNs by up to 50\% in accuracy.  Our results highlight the potential of topological models for learning from structured brain data, establishing a unique real-world case study for TDL. Code and data are uploaded as supplementary material.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

传统图神经网络（GNN）主要处理成对交互关系，但现实复杂系统（如脑网络）中存在大量高阶、有向的交互模式（如神经元群体共激活）。现有拓扑深度学习（TDL）模型虽然能处理高阶交互，但局限于无向结构，无法捕捉方向性。脑网络中，神经元突触连接具有明确方向性（从突触前到突触后），且高阶有向模体（如传递性团）在功能上至关重要。因此，需要一种既能建模高阶交互又能保留方向信息的深度学习框架。本文提出**半单纯神经网络（Semi-Simplicial Neural Networks，简称SSNs）**，操作于有向半单纯集上，填补了这一空白。

## 2. 方法论：核心思想、关键技术细节

**核心思想**：将数据建模为有向半单纯集（semi-simplicial set），它允许同一顶点集上存在多个不同序的单纯形，从而区分方向性。SSN利用面映射诱导的关系集合（face-map–induced relations）在单纯形之间传播信息，这些关系可包含层级、有向、非对称的交互。

**关键技术细节**：
- **SSN层更新**：  
  \[
  X^{l+1} = \phi\left( X^l, \bigoplus_{R\in\mathcal{R}} \omega_R(X^l) \right)
  \]
  其中 \(\mathcal{R}\) 是面映射诱导的关系集合，\(\omega_R\) 是关系相关的可学习函数（如消息传递或注意力机制），\(\bigoplus\) 是聚合操作，\(\phi\) 是更新函数。
- **路由SSN（R-SSN）**：为提升可扩展性，引入可学习门控机制，从预定义的关系类别中动态选择top-k最相关信息，减少参数和计算量。
- **关系代数**：通过组合面映射生成多种关系（如有向邻接、边界/上边界、方向性上下邻接等），统一了图、有向图、单纯复形中的经典邻接关系。
- **理论性质**：
  - 严格表达能力超过消息传递GNN、有向GNN（Dir-GNN）和消息传递单纯神经网络（MPSNN）。
  - 能够恢复一组神经拓扑学中用于表征脑活动的拓扑不变量（大小、方向性、高阶方向性、互惠性、传递度、欧拉示性数）。
- **动力学活动复形（Dynamical Activity Complex, DAC）**：将有向动态二元图提升为有向单纯复形，每个单纯形的特征由所有顶点同时激活的时间步定义，保留了高阶共激活模式。

## 3. 实验设计

**数据集与场景**：
- **脑动力学分类**：基于生物逼真的大鼠体感皮层微回路模型（NMC模型），包含31,346个神经元、780万个突触，以及4495个二值动力学（每个对应一个刺激）。分为两类任务：
  - Task 5.1：固定体积样本中的特征分类（3个体积：4,125μm、4,325μm、8,175μm）。
  - Task 5.2：随机采样神经元邻域的子图/复形分类（在4,325μm体积内取M=1,3,5个邻域）。
- **边回归交通任务**：4个城市交通网络（Anaheim、Barcelona、Chicago、Winnipeg）。
- **节点分类**：3个数据集（Cora-ML、Citeseer、Roman-Empire），涵盖同质和异质图。

**对比方法**：
- Deep Sets（DS）、消息传递GNN（GraphSAGE）、有向GNN（Dir-GNN）、消息传递单纯神经网络（MPSNN）。
- 拓扑特征+SVM基线（TopoFeat+SVM）。
- 还测试了注意力变体（GAT）和路由变体（R-SSN）。

**Benchmark**：脑动力学分类采用5折交叉验证（60%训练，20%验证，20%测试），报告平均准确率和标准差。

## 4. 资源与算力

论文明确说明：
- 实验在单个NVIDIA A100、L40、A40或V100 GPU上运行。
- 所有实验总训练时间约两周。
- 超参数调优使用Weights & Biases。

## 5. 实验数量与充分性

- **总任务数**：4个不同任务（脑动力学分类、边回归、节点分类），覆盖13个数据集。
- **脑动力学分类**：6个数据集（3个体积×2种任务设置），加上额外的时间分辨率提升和体积变化实验（附录H.1.4）。
- **边回归**：4个数据集。
- **节点分类**：3个数据集。
- **消融与变体**：
  - 路由机制（R-SSN vs SSN）
  - 注意力消息传递（GAT vs SAGE）
  - 非不变性读出（附录H.1.3）
  - 不同邻域数量M
  - 不同时间分辨率T=2 vs T=4
- **充分性**：实验规模较大，对比方法全面（包括图、有向图、无向高阶、有向高阶），参数预算通过缩放隐藏维度匹配，报告了参数数量和运行时复杂度。实验设计较为客观公平。

## 6. 主要结论与发现

1. **SSN在脑动力学分类上显著优于所有基线**：在固定体积样本中，SSN准确率比第二好模型高14%–27%；在更具挑战的随机邻域分类中，高17%–26%；比标准MPNN高50%以上。
2. **SSN的理论优势得到实证支撑**：严格表达能力（WL层级）和拓扑不变量恢复能力转化为实际增益。
3. **路由SSN（R-SSN）在保持竞争力的同时大幅减少参数和推理时间**：适合可扩展性需求。
4. **有向高阶结构对异质图（Roman-Empire）特别有效**：SSN在该数据集上达到新SOTA（93.52%），超过基线和图Transformer。
5. **在同质图上表现相当**：在Cora-ML和Citeseer上，SSN与最佳基线持平或略优，说明有向高阶建模在无强方向性数据中不造成损失。
6. **边回归任务**：在Chicago上最佳，Barcelona并列，其余接近或优于无向方法，验证了有向邻接对流量预测的有效性。

## 7. 优点

- **理论贡献扎实**：证明了SSN严格优于GNN、有向GNN和MPSNN，并能恢复神经拓扑学关键不变量。
- **方法创新**：首次将半单纯集引入TDL，提出面映射关系代数，统一多种结构；路由机制缓解可扩展性问题。
- **实验充分且公平**：参数预算匹配，报告多个数据集和任务，包含消融和变体分析。
- **实际应用意义**：为脑网络分析提供了可端到端学习的拓扑工具，避免了手工特征提取的局限性。
- **代码与数据开源**：促进可复现性。

## 8. 不足与局限

- **数据依赖**：需要精确的神经连接组数据，当前无法用于体内实验；依赖生物逼真模型，可能无法直接推广到其他物种或脑区。
- **计算开销**：虽然R-SSN缓解，但SSN在处理大规模高阶复形时仍可能比简单图模型慢（见表6运行时）。
- **实验覆盖**：脑动力学任务仅使用二值激活和两个时间窗；更精细的时间尺度或连续动力学未测试。
- **偏差风险**：NMC模型虽逼真但仍为模拟数据，真实生物噪声和变异性可能影响泛化。
- **应用限制**：当前框架主要面向分类和回归，未涉及生成或控制任务；无监督发现神经活动模体尚未探索。
- **理论分析**：WL表达性证明针对特定架构（MPSSN），更一般的SSN（如注意力变体）可能超出当前保证范围。

（完）

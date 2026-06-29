---
title: Graph Variate Neural Networks
title_zh: 图变分神经网络
authors: "Om Roy, Yashar Moshfeghi, Keith M Smith"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=ofx045aRDC"
tags: ["query:fbn"]
score: 6.0
evidence: 提出图变分神经网络处理时空信号，可应用于功能连接网络
tldr: 现有GNN假设固定图结构，不适用于信号驱动的功能网络。GVNN基于图变分信号分析，定义瞬时连接张量和信号依赖支撑，构架合卷积层处理动态功能连接。为fMRI等时空信号提供了统一框架，实验证明在模拟和真实数据上优于传统GNN。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-ofx045ardc/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1703, \"height\": 642, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ofx045ardc/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1656, \"height\": 449, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ofx045ardc/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1558, \"height\": 470, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ofx045ardc/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1504, \"height\": 1055, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ofx045ardc/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1557, \"height\": 485, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ofx045ardc/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1696, \"height\": 527, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ofx045ardc/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1679, \"height\": 1402, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ofx045ardc/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1122, \"height\": 1100, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ofx045ardc/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1710, \"height\": 497, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1684, \"height\": 617, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1805, \"height\": 621, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1162, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1629, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1875, \"height\": 208, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1569, \"height\": 173, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1273, \"height\": 289, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1525, \"height\": 499, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1767, \"height\": 142, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1790, \"height\": 141, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ofx045ardc/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 847, \"height\": 177, \"label\": \"Table\"}]"
motivation: 现有GNN依赖预定义图结构，无法处理动态功能网络。
method: 基于图变分信号分析，设计信号依赖的图卷积层，处理动态连接网络。
result: 在模拟和真实数据上优于传统GNN，适用于功能连接分析。
conclusion: 为动态功能网络建模提供通用的图神经网络框架。
---

## Abstract
Modelling dynamically evolving spatio-temporal signals is a prominent challenge in the Graph Neural Network (GNN) literature. Notably, GNNs assume an existing underlying graph structure. While this underlying structure may not always exist or is derived independently from the signal, a temporally evolving \textit{functional} network can always be constructed from multi-channel data. Graph Variate Signal Analysis (GVSA) defines a unified framework consisting of a network tensor of instantaneous connectivity profiles against a stable support usually constructed from the signal itself. Building on Graph-Variate Signal Analysis (GVSA) and tools from graph signal processing, we introduce \textbf{Graph-Variate Neural Networks (GVNNs)}: layers that convolve spatio-temporal signals with a signal-dependent connectivity tensor combining a stable long-term support with instantaneous, data-driven interactions. This design captures dynamic statistical interdependencies at each time step without ad-hoc sliding windows and admits an efficient implementation with linear complexity in sequence length. Across forecasting benchmarks, GVNNs consistently outperform strong graph-based baselines and are competitive with widely used sequence models such as LSTMs and Transformers. On EEG motor-imagery classification, GVNNs achieve strong accuracy highlighting their potential for brain–computer interface applications.

---

## 论文详细总结（自动生成）

# 论文总结

## 1. 核心问题与整体含义

- **核心动机**：现有图神经网络（GNN）通常假设一个预先存在的、静态的底层图结构，然而许多时空信号（如脑电图、交通流、混沌系统）并不具备先验图，而是可以在每一时刻从数据自身动态构建出**功能连通性网络**。传统方法（如滑动窗口、乘积图）要么丢失时变信息，要么计算复杂度随序列长度二次增长。
- **整体目标**：提出一种**信号依赖的图卷积框架**，在保持线性时间复杂度的同时，捕捉每个时间步的统计依赖性，并适用于多种时空预测与分类任务。
- **研究定位**：将图变分信号分析（GVSA）与图信号处理（GSP）结合，构建可端到端训练的图变分神经网络（GVNN）。

## 2. 方法论

### 核心思想
- **信号驱动的动态图构造**：在每个时间步 \(t\)，利用一个**节点函数** \(F_V(x_i(t), x_j(t))\) 计算瞬时 connectivity 矩阵 \(J(t)\)；再通过**Hadamard乘法**（元素级相乘）与一个**稳定支撑矩阵** \(W\)（通常取自信号的长期协方差或可训练）结合，得到最终的图变分张量 \(\Omega(t) = W \circ J(t)\)。
- **图卷积操作**：对输入信号 \(x(t) \in \mathbb{R}^N\)，执行 \(\Omega(t)x(t)\) 作为图卷积；再与原始信号加权求和，经过非线性激活和可学习的时间混合权重，得到该层输出。
- **高效的批量实现**：利用节点函数的低秩结构（如瞬时相关 rank-1、局部 Dirichlet 能量 rank-3），通过批量矩阵乘法避免显式构造 Kronecker 乘积，使时间复杂度从 \(O(T^2)\) 降至 \(O(T)\)。

### 关键技术细节
- **节点函数**：
  - 瞬时相关（IC）：\(F_V(x_i,x_j)=|(x_i-\bar{x}_i)(x_j-\bar{x}_j)|\)
  - 局部 Dirichlet 能量（LDE）：\(F_V(x_i,x_j)=(x_i-x_j)^2\)
- **稳定支撑 \(W\)** 可固定为训练集长期相关矩阵，也可作为可训练参数（端到端优化）。
- **理论性质**：
  - 定理1：当 \(W\) 满秩且中心化信号非零时，瞬时相关矩阵经 Hadamard 滤波后变为满秩、可逆、正定。
  - 定理2：LDE 构造的算子谱半径被 Dirichlet 能量的两倍所约束。
  - GVNN 层是全局 Lipschitz 连续的（定理4）。

### 伪流程描述
1. 输入多通道时序 \(X \in \mathbb{R}^{N \times T}\)。
2. 每层：
   - 计算瞬时张量 \(J(t)\)（批量并行）。
   - 与 \(W\) 做 Hadamard 乘积得到 \(\Omega(t)\)。
   - 执行批量图卷积 \(Z(t)=\Omega(t) x(t)\)。
   - 输出 \(Y(t)=\sigma\big(\Theta (a_t X(t) + b_t Z(t))\big)\)，其中 \(a_t,b_t\) 为可学习系数，\(\Theta\) 为时间混合矩阵。
3. 堆叠多层后接任务头（如 MLP）。

## 3. 实验设计

### 数据集与场景
| 任务 | 数据集 | 特性 |
|------|--------|------|
| 混沌系统预测 | Coupled Lorenz, Hopfield map, MacArthur map | 多变量混沌时间序列，节点数约10-20 |
| 交通速度预测 | METR-LA (207传感器), PEMS-BAY (325传感器) | 5分钟间隔，预测15/30/60分钟 |
| EEG运动想象分类 | BCI Competition IV 2a (17通道,4类), PhysioNet (64通道,2类) | 被试内交叉验证 |

### 对比方法
- **图模型**：GTCNN (图时间卷积网络), GVARMA, GGRNN (门控图循环网络)
- **常用序列模型**：LSTM, Transformer (1头注意力)
- **专用EEG模型**：EEGNet
- **消融版本**：固定支撑 vs 可训练支撑；不同节点函数（IC、LDE及组合）

### 评价指标
- 回归：MSE；分类：Accuracy, Kappa, F1
- 训练时间（秒/epoch）

## 4. 资源与算力

- **硬件**：单张 NVIDIA A100 GPU（40 GB VRAM）
- **精度**：全 FP32，未使用混合精度
- **训练时长**：各数据集不同，从每epoch 0.1秒（混沌小规模）到7.2秒（PEMS-BAY可训练支撑）；EEG任务通常20-50epoch即可收敛。
- **未提及**：未执行大规模超参数扫描或多GPU并行训练。

## 5. 实验数量与充分性

- **总计**：3类任务 × 2-3个数据集 + 多个视界/分类设置，共约10+个实验组。
- **消融实验**：
  - 固定支撑 vs 可训练支撑（交通数据，显示可训练支撑大幅提升）。
  - 不同节点函数（未在正文详细报告但附录提及组合优越性）。
  - 与多种基线对比（图模型 + 序列模型），公平性较好。
  - 每个实验使用3个随机种子（124,14,124235）报告均值和标准差。
- **充分性评价**：覆盖了不同噪声水平、不同时间依赖长度、不同通道数的场景；但缺少对更大规模（如数百节点以上）数据集的可扩展性测试，也缺少与最近混合模型（如 Graph WaveNet）的直接对比。

## 6. 主要结论与发现

- GVNN 在所有混沌预测任务上显著优于 GTCNN、GVARMA、GGRNN，尤其在 MacArthur 地图上 MSE 降低 60% 以上。
- 在交通预测中，可训练支撑的 GVNN 远超其他图模型，并超越 Transformer 和 LSTM，但固定支撑版本表现较差（低于 LSTM/Transformer）。
- 在 EEG 分类中：
  - BCI-2A 上 GVNN 准确率 60.15%（略低于 EEGNet 60.51%），但训练速度更快（0.5s vs 1.0s），且远优于 Transformer 和 LSTM。
  - PhysioNet 上 GVNN 准确率 80.29%，与 Transformer（80.94%）接近，超过 EEGNet。
- 理论证明 Hadamard 滤波可以稳定低秩瞬时结构，并保持 Lipschitz 连续性。

## 7. 优点

- **计算高效**：利用低秩节点函数和批量并行，时间复杂度为线性 \(O(T)\)，显存友好。
- **信号自适应**：在每个时间步构建信号依赖的图，无需预定义结构或滑动窗口。
- **可解释性**：节点函数（IC、LDE）有明确物理含义（相关性与局部差异）。
- **理论扎实**：提供了满秩保持、谱半径有界、Lipschitz 稳定性等理论保证。
- **灵活性**：稳定支撑可以是固定或可训练的，节点函数可组合或替换。

## 8. 不足与局限

- **忽略时间自相关**：模型只在时间点上针对节点间（空间）作用，未显式建模时间维度上的自回归依赖。作者建议后续可叠加注意力/卷积模块。
- **节点数二次复杂度**：构造 \(N \times N\) 矩阵的操作（尽管 \(O(T)\)）仍随节点数平方增长，适用于中等规模（<1000节点），但对于大型图需进一步优化。
- **未与最强混合模型对比**：例如 Graph WaveNet、STGCN 等，可能降低说服力。
- **实验覆盖有限**：
  - 未测试跨场景泛化（如迁移学习）。
  - 未单独分析训练过程对 \(W\) 变化的敏感性（尽管有固定与可训练对比）。
  - 未在噪声模拟或缺失数据下测试鲁棒性。
- **应用风险**：EEG 分类仅基于公开数据集，真实 BCI 场景中的在线延迟、闭环干扰等问题未经评估。

（完）

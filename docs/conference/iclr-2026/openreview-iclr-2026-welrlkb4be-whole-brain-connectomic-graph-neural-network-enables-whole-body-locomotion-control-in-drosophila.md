---
title: Whole-Brain Connectomic Graph Neural Network Enables Whole-Body Locomotion Control in Drosophila
title_zh: 全脑连接组图神经网络实现果蝇全身运动控制
authors: "Zehao Jin, Yaoye Zhu, Chen Zhang, Yanan Sui"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=WELrlKB4be"
tags: ["query:fbn"]
score: 8.0
evidence: 全脑连接组图神经网络
tldr: 本文利用果蝇全脑连接组直接实例化图神经网络（flyGNN），作为强化学习控制器实现全身运动控制。模型将连接组划分为传入、固有和传出通路，结合生物力学模型，在行走、转向等任务中实现稳定控制，展示了连接组在具身智能中的潜力。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1438, \"height\": 382, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1421, \"height\": 623, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 427, \"height\": 510, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1366, \"height\": 166, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1368, \"height\": 339, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1384, \"height\": 380, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1367, \"height\": 354, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1367, \"height\": 337, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1430, \"height\": 815, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1149, \"height\": 453, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1433, \"height\": 845, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-welrlkb4be/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 727, \"height\": 868, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-welrlkb4be/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1110, \"height\": 335, \"label\": \"Table\"}]"
motivation: 全脑连接组为神经回路与行为关联提供结构蓝图，但具身控制应用尚少。
method: 从成年果蝇完整连接组构造有向消息传递图神经网络（flyGNN），与生物力学模型集成。
result: flyGNN在多种运动任务（行走、转向等）中实现稳定控制。
conclusion: 连接组启发的GNN能有效驱动仿生运动控制，为脑网络计算提供新范式。
---

## Abstract
Whole-brain connectome provides a structural blueprint for linking neural circuits to behavior, yet its application to embodied control remains largely unexplored. We introduce the fly-connectomic Graph Neural Network (flyGNN), a reinforcement learning controller whose architecture is instantiated directly from a complete adult Drosophila connectome. Our flyGNN models the connectome as a directed message-passing graph, partitioned into afferent, intrinsic, and efferent pathways that structure information flow from sensory inputs to motor outputs. Integrated with a dynamically controllable biomechanical model of Drosophila, flyGNN achieves stable control across diverse locomotion tasks, including gait initiation, walking, turning, and flight, without task-specific architectural tuning. These results demonstrate that whole-brain connectivity can directly support embodied reinforcement learning, establishing a new paradigm for connectome-based control algorithms.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：如何将静态的全脑连接组（whole-brain connectome）转化为动态、功能性的模型，以驱动动物全身运动行为。当前连接组学（如FlyWire项目）虽提供了成年果蝇全脑突触分辨率接线图，但尚未将其直接用于具身控制；而强化学习控制器通常使用通用MLP或手工模块，缺乏生物结构对齐。
- **整体含义**：论文提出统一框架，将连接组直接实例化为图神经网络控制器（flyGNN），在物理仿真果蝇（flybody）上实现步态启动、行走、转弯、飞行等多模态运动控制。这证明了全脑连接结构可以直接支持具身强化学习，为连接组计算和仿生控制提供新范式。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程（用文字说明即可）

- **核心思想**：将果蝇全脑连接建模为有向图 \( G = (V, E) \)，节点为139,246个神经元，边为突触连接（仅考虑方向和是否存在，忽略权重与递质类型）。节点分为三组：传入神经元 \(V_a\)（接收外部感觉输入）、固有神经元 \(V_i\)（内部处理）、传出神经元 \(V_e\)（输出运动指令）。flyGNN在每个控制步执行：
  1. 编码：传感观测 \(x_t\) 经线性层映射为传入状态 \(z_t\)。
  2. 门控更新：传入状态与上一时刻传入隐状态结合并经过tanh。
  3. 消息传递：使用图算子（如GraphSAGE、GAT、PNA等）在全连接图上传播信息，更新所有节点隐状态。
  4. 解码：传出节点隐状态通过MLP输出动作 \(a_t\)，驱动MuJoCo中的flybody。
- **算法流程**（文字描述）：每一步：编码观测 → 门控更新传入状态 → 消息传递 → 解码动作 → 环境返回下一观测。
- **训练流程**：两阶段。先模仿学习（IL），用预训练MLP专家轨迹通过KL散度+MSE损失初始化policy；再通过PPO强化学习微调以最大化任务奖励。

## 3. 实验设计：使用数据集/场景、benchmark、对比方法

- **数据集/场景**：使用FlyWire成年果蝇连接组（v783数据集），在flybody物理模拟器（基于MuJoCo）上执行四个运动任务：
  - 步态启动（从静止到稳定行走）
  - 直线行走（目标速度3 cm/s）
  - 转弯（前向3 cm/s + 左转10 rad/s）
  - 飞行（稳定前飞20 cm/s）
- **Benchmark**：任务本身基于flybody提供的默认设置（含专家示范轨迹），未与其他现有论文方法直接对比（因该任务是首次用完整连接组控制器）。但进行了消息传递算子的消融对比。
- **对比方法**：不同图算子（GCN、EdgeCNN、GAT、GraphSAGE、PNA）在模仿学习KL散度和平均奖励上的表现。无传统MLP或LSTM对比，仅在IL阶段使用了flybody提供的MLP专家。

## 4. 资源与算力

- 文中明确提到实验在**NVIDIA A100 80GB PCIe GPU**和**Intel Xeon Gold 6348 CPU**服务器上进行。但未说明具体GPU数量、训练时长或总计算量。
- 训练使用PyTorch Lightning和DDP分布式数据并行，具体资源规模未量化。

## 5. 实验数量与充分性

- 实验数量：四个运动任务（步态启动、直线行走、转弯、飞行）各有一个定性/定量展示。此外有图算子消融（5种算子，每种有不同深度/通道设置，共约7个配置）。还有神经表示分析（PCA/UMAP可视化、强度时序图）以及步态启动的UMAP投影。
- 充分性与公平性：
  - **优势**：任务多样性（地面+飞行）展示了泛化能力；消融实验覆盖了不同复杂度图算子；神经表示分析提供了可解释性视角。
  - **不足**：缺乏与标准RL控制器（如MLP、LSTM、Transformer）的直接定量比较（例如同条件下的奖励曲线）；仅针对一种专家策略初始化；未在多个随机种子下报告均值与标准差，仅展示了单一轨迹或平均奖励；飞行任务未对比不同控制器。消融只在一组超参数下进行，未系统调节节点通道、层数等。整体上实验设计偏向概念验证，统计严谨性有待加强。

## 6. 论文的主要结论与发现

- **主要结论**：全脑连接组（即使简化为无权有向图）可以直接实例化为函数性图神经网络，并通过RL训练驱动果蝇全身运动控制，生成稳定、协调的步态与飞行行为。
- **重要发现**：
  - 连接组拓扑本身就能诱导神经活动中的功能特化（如传入、固有、传出群体表现出不同的节律模式），无需额外生物学先验。
  - 在不同图算子中，较复杂的算子（PNA、GraphSAGE）优于简单算子（GCN、EdgeCNN），但即使简单算子也能维持基本运动能力。
  - 神经表示分析显示在步态启动过程中，神经元状态从随机分布逐渐聚集成功能簇，表明网络动态自组织。

## 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - 首次将完整的全脑连接组（13万+神经元）直接作为图神经网络的拓扑约束，替代了传统的全连接MLP，具有极高的生物真实感。
  - 两阶段训练（IL+RL）有效平衡了初始稳定性和后续适应性。
  - 统一的架构无需为不同任务（步行、飞行）改变网络结构，仅调整输入/输出维度，展示跨模态泛化能力。
- **实验亮点**：
  - 四种运动任务覆盖了节律性运动和非对称转向，以及空中运动，全面评估控制器。
  - 神经表示分析（UMAP、PCA、强度时序图）提供了可解释性，展示了连接组结构如何驱动功能分化。
  - 消融对比了多种图算子，说明了模型设计选择的影响。

## 8. 不足与局限：包括实验覆盖、偏差风险、应用限制等

- **实验覆盖不足**：
  - 没有与纯MLP、LSTM或Transformer控制器在相同任务上的定量性能对比（奖励曲线、稳定性等），无法直接证明生物结构优于通用网络。
  - 每个任务仅展示单一轨迹或少量数据，缺乏统计显著性检验。
  - 消融实验仅针对图算子，未分析门控机制、编码/解码设计、消息传递层数、节点通道数等的影响。
  - 缺乏对扰动（如噪声、关节故障、环境变化）的鲁棒性测试。
- **偏差风险**：
  - 连接组来自单一成年雌性果蝇（FlyWire v783），可能无法代表物种间或发育/性别差异。
  - 简化（去除权重、递质类型、突触数量）可能丢失关键生物信息，导致模型与真实神经处理的偏差。
- **应用限制**：
  - 计算成本高：每步需对整个13万节点图进行消息传递，比MLP显著慢（文中已承认）。
  - 依赖完整连接组重建，目前仅少量物种（如果蝇）可用，难以扩展到更复杂生物。
  - 飞行任务中控制器仅调制翼拍模式发生器（WPG）的残留，而非直接生成每拍翼动作，可能掩盖控制器能力。
  - 所有实验均在仿真中完成，未考虑真实物理环境中的噪声、延迟、传感器误差等。

（完）

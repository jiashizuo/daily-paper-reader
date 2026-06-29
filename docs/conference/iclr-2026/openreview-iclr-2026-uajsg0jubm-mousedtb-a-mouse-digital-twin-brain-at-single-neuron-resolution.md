---
title: "MouseDTB: A Mouse Digital Twin Brain at Single-neuron Resolution"
title_zh: MouseDTB：单神经元分辨率的小鼠数字孪生脑
authors: "Zhongyu Chen, Chong Li, Wenlian Lu, Xiangyang Xue, Jianfeng Feng, Taiping Zeng"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=uajSG0jubM"
tags: ["query:fbn"]
score: 7.0
evidence: 单神经元分辨率小鼠脑连接组
tldr: 现有小鼠全脑模型基于粗粒度区域连接，缺乏单神经元生物合理性。本文构建单神经元分辨率的小鼠数字孪生脑（mouse DTB），通过数据驱动流程集成高分辨率轴突投射数据，形成大规模脉冲神经网络。该模型能支持复杂的全脑行为任务，为连接组计算提供了精细尺度的基准。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 735, \"height\": 429, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 838, \"height\": 1079, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1023, \"height\": 785, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1020, \"height\": 630, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1016, \"height\": 678, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1433, \"height\": 448, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1442, \"height\": 790, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 620, \"height\": 386, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 617, \"height\": 390, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1007, \"height\": 740, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-uajsg0jubm/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1440, \"height\": 396, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-uajsg0jubm/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1274, \"height\": 771, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-uajsg0jubm/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1424, \"height\": 335, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-uajsg0jubm/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1388, \"height\": 846, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-uajsg0jubm/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1431, \"height\": 764, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-uajsg0jubm/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1418, \"height\": 418, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-uajsg0jubm/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1155, \"height\": 178, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-uajsg0jubm/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1353, \"height\": 217, \"label\": \"Table\"}]"
motivation: 传统小鼠全脑模型缺乏单神经元分辨率的连接组信息。
method: 整合高分辨率轴突投射数据，构建单神经元级连接图并驱动脉冲神经网络。
result: 成功实现小鼠数字孪生脑，支持行走等多种行为任务。
conclusion: 单神经元连接组模型能更准确地模拟全脑行为。
---

## Abstract
Accurate whole-brain computational modeling grounded in single-neuron resolution connectivity is crucial for understanding how large-scale brain structures give rise to complex behaviors and cognition. Conventional mouse whole-brain models are typically constructed from coarse-grained regional or voxel-level connectivity, without considering single-neuron biological plausibility in the mouse brain connectome. In this study, we build a mouse digital twin brain (mouse DTB) at single-neuron resolution with large-scale spiking neural network, able to support complex behavioral tasks at whole-brain scale. We developed the mouse brain connectivity at single-neuron resolution through a data-driven pipeline that integrates high-resolution axonal projection data and spatial distributions of cells from the mouse brain cell atlas. The resulting neuronal connectivity is coupled with leaky integrate-and-fire (LIF) neurons and conductance-based synapses to form a large-scale spiking neural network of the mouse brain. The mouse DTB successfully reproduced blood-oxygen-level-dependent (BOLD) signals observed in both resting state and olfactory Go/No-Go discrimination task with high correlation, and exhibits correct behavioral responses aligned with perceptual odor inputs. This model leverages diffusion ensemble Kalman filtering (EnKF) and hierarchical Bayesian inference for parameter estimation. Our work provides a single-neuron resolution, whole-brain mouse DTB, offering a powerful tool for studying neural dynamics, behavior and cognition underlying mouse intelligence during complex tasks.

---

## 论文详细总结（自动生成）

# 论文总结：MouseDTB – 单神经元分辨率的小鼠数字孪生脑

## 1. 核心问题与整体含义（研究动机与背景）

- **现有局限**：常规小鼠全脑模型基于粗粒度的脑区或体素级连接（如100μm体素），忽略了单神经元水平的生物合理性和异质性。特定回路模型虽精细但无法刻画全脑交互。
- **本文目标**：构建首个单神经元分辨率的小鼠数字孪生脑（mouse DTB），利用高分辨率结构数据和fMRI信号，模拟静息态和行为任务下的全脑动力学，为理解小鼠智能和行为提供计算平台。

## 2. 方法论：核心思想、关键技术细节

### 2.1 单神经元连接组的构建（数据驱动流程）
1. **体素级连接推断**：基于469个病毒示踪实验的轴突投射数据（10μm体素），采用核回归（高斯RBF核）将注射点投影模式按距离加权聚合，得到体素间的权重矩阵。
2. **单神经元重建**：利用细胞图谱（Zhang et al., 2023）中神经元密度分布（总神经元约7100万，端脑19.7%、脑干1.0%、小脑79.3%），通过广度优先搜索（BFS）将相邻体素合并为单个神经元，并依据谷氨酸/GABA比例分配兴奋/抑制属性。
3. **连接权重赋值**：将体素级连接平均作为神经元间连接权重，每个神经元仅保留权重最高的前16,000个传入连接（最大已知平均突触度）。
4. **迭代优化**：针对初始连接高度不平衡（部分神经元出度高达数百万），通过迭代重新采样使神经元出度分布逼近传入度分布（目标出度=16,000），实现全脑平衡。
5. **添加局部连接**：为补偿注射位点内的短程连接丢失，在300μm半径内引入高斯分布的局部突触（σ=100μm, C₀=0.1）。

### 2.2 脉冲神经网络仿真与数据同化
- **神经元模型**：LIF神经元，4种电导型突触（AMPA、NMDA、GABAA、GABAB）。
- **仿真平台**：Digital Brain (DB) 平台，GPU加速。
- **参数估计（HMDA）**：将扩散集成卡尔曼滤波（EnKF）与层次贝叶斯推断结合，引入超参数（体素级突触电导、外部电流）降低自由度，实现从fMRI信号到神经元参数的稳健推断。具体流程包括：超参数随机游走→参数采样→模型状态演化→EnKF滤波→校正与重采样。

## 3. 实验设计

### 3.1 使用数据集
- **结构数据**：Allen小鼠脑连接图谱（10μm体素，469次注射）、细胞图谱（Zhang et al., 2023）；独立验证：海马和PFC单神经元投射数据（Qiu et al., 2024）。
- **fMRI数据（Han et al., 2019）**：
  - 静息态：1个session，400个EPI体积，TR=800ms，400μm³分辨率，6,131个体素。
  - 嗅觉Go/No-Go任务：9个session，每个session 118个EPI体积，TR=1500ms，6,800个体素。行为记录包括舔/不舔。

### 3.2 benchmark与对比方法
- **主要指标**：体素级BOLD信号的皮尔逊相关系数（带3步延迟补偿）。
- **消融对比**：
  - 不同突触度（200–16,000）对静息态相关性的影响。
  - 不同感觉输入区域组合（仅OLF、OLF+SSp+HIP、OLF+所有内感受区等）。
  - 去除或单独保留各内感受区域（SSp、HIP、Amy、AI、mPFC、TH、HY、PAG）。
  - 与体素级DTB对比（相同神经元分布但连接为体素级）。
  - 随机重连一定比例突触（0%–100%）。
  - 损伤关键脑区（VIS、HPF、PFC、MO、TH、SSp）。

## 4. 资源与算力

- **硬件**：160个计算节点，每节点4个GPU（总计640个GPU）。GPU为AMD系列（ROCm 4.1.0），每GPU 16GB HBM2显存。节点间通过200Gbps InfiniBand互联。
- **软件**：C++（MPI+ROCm hipcc），Python 3.7.11。
- **仿真规模**：约71M神经元，1.02T突触。满度（16,000）下实时因子约12.96（1秒生物学时间需12.96秒计算）。较低度数时实时因子更小（如19.90@200度）。
- **仿真时间**：未明确给出单次训练/测试具体时长，但提到支持高效的近实时仿真。

## 5. 实验数量与充分性

- **实验数量**：大量系统性实验，包括静息态下6种突触度（200/2k/4k/8k/12k/16k）对比；9个任务session分别评估；消融实验涵盖8个内感受区域、3种输入组合、随机重连（7个比例）、损伤（6个区域）；与体素级模型及独立单神经元投射数据对比。
- **充分性**：实验设计全面，覆盖了结构验证、功能相关性、消融分析、行为解码等多个层面。每次实验均重复300次（静息态刺激）或10次（任务态），统计稳定。对比方法设置合理（随机、损伤、体素级）。行为解码采用跨session交叉验证以避免过拟合。
- **客观性**：指标清晰（皮尔逊相关、准确率），结果展示了均值和标准差，并分析了行为解码中hit rate和correct rejection rate的不对称性。

## 6. 主要结论与发现

- **结构**：成功构建了平衡的全脑单神经元连接组（总突触约1.02T），优化后区域出度接近16,000，连接强度跨越10个数量级，与独立单神经元投射数据一致（海马余弦相似度0.883，PFC 0.692）。
- **功能验证**：
  - **静息态**：内感受驱动下全脑BOLD相关性达0.901；SSp和HIP是最关键的区域；突触度越高相关性越强；优化后的连接远优于未优化或随机连接。
  - **任务态**：嗅觉Go/No-Go任务中，结合嗅觉和内感受输入（OLF+SSp+HIP）获得最佳全脑相关性（0.554±0.019）；若仅用OLF则相关性很低（0.247±0.018）。
- **行为解码**：从模拟BOLD解码Go/No-Go行为，序列准确率67.33%±6.64%，气味辨别准确率55.56%±9.39%（显著高于随机），其中正确拒绝率较高（87.17%），命中率较低（24.45%）。
- **模型有效性**：单神经元DTB显著优于体素级DTB（相关性0.901 vs 0.819）；随机重连或损伤关键脑区后性能大幅下降，证实了精细连接的重要性。

## 7. 优点与亮点

- **首创性**：首个单神经元分辨率、全脑范围的小鼠大规模脉冲神经网络模型，融合了多模态结构数据（轴突投射+细胞图谱）。
- **方法论创新**：迭代优化平衡出度分布，弥补了原始连接中的不平衡；添加高斯局部连接补全了注射位点内丢失的信息；HMDA方法有效解决了超大规模参数估计问题。
- **验证全面**：从结构相似性（与独立投射数据对比）、功能相关性（静息态、任务态、消融）到行为解码，层层递进，说服力强。
- **计算效率**：在640 GPU集群上可实现近实时仿真，为后续大规模研究提供了实用平台。
- **代码与数据**：可基于公开数据复现，为连接组计算领域提供了基准。

## 8. 不足与局限

- **连接精度**：单神经元连接基于体素级数据的统计推断，而非实测的全脑电子显微镜连接组，可能丢失部分细胞类型特异性和突触亚型信息。
- **模型简化**：神经元模型为LIF，突触动力学简化（指数型），未包含可塑性、调谐特性或真实离子通道多样性，限制了长期动态和学习的模拟。
- **行为解码局限**：气味辨别准确率仅略高于随机（55.56%），hit rate较低（24.45%），可能原因是部分关键脑区同化不够准确，或模拟BOLD幅度/基线存在偏差；解码器在经验数据上的过拟合也可能影响泛化。
- **数据来源**：fMRI数据来自单个个体（9个session），缺乏跨个体的泛化性验证；任务态仅覆盖单一嗅觉得范，未扩展到其他认知任务。
- **算力需求**：虽然仿真效率较高，但全规模模型仍需640 GPU集群，资源门槛高，限制了广泛使用。
- **缺乏细胞类型和层特异性**：当前仅按E/I比例随机分配，未区分皮层亚层、投射类型等精细结构。

（完）

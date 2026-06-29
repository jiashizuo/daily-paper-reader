---
title: Spatially and Temporally Guided Bayesian Optimization for Brain Effective Connectivity Learning from fMRI and EEG Data
title_zh: 空间和时间引导的贝叶斯优化用于从fMRI和EEG数据学习脑有效连接
authors: "Zhihao Su, Junzhong Ji, Minqi Yu, Wen Xiong, Jinduo Liu"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=81iTOKJbzZ"
tags: ["query:fbn"]
score: 8.0
evidence: 使用空间和时间引导的贝叶斯优化从多模态fMRI和EEG学习脑有效连接
tldr: 从多模态神经影像学习脑有效连接(EC)面临跨模态非线性动态和结构一致性不足的挑战。本文提出STBO-EC，结合解剖学先验的空间对齐和贝叶斯优化，从fMRI和EEG中联合学习EC网络。在仿真和真实数据上，STBO-EC恢复了已知的因果连接，并揭示了神经疾病中异常的有效连接，为多模态脑网络分析提供了新工具。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1451, \"height\": 571}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1178, \"height\": 637}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1455, \"height\": 305}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1441, \"height\": 415}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1022, \"height\": 582}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 743, \"height\": 723}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1441, \"height\": 459}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1441, \"height\": 456}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1314, \"height\": 425}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1446, \"height\": 396}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1444, \"height\": 399}]"
motivation: 现有方法忽略跨模态非线性动态和结构一致性，难以准确构建有效连接。
method: 提出STBO-EC，利用解剖空间对齐和贝叶斯优化，从fMRI和EEG中推断有效连接。
result: 在仿真和真实数据上，STBO-EC准确恢复已知因果连接，并发现疾病相关的有效连接异常。
conclusion: 多模态有效连接学习能更全面刻画脑网络因果交互，辅助神经系统疾病研究。
---

## Abstract
Brain effective connectivity (EC) characterizes the causal and directional interactions among brain regions and plays a central role in understanding cognition and neurological disorders. Constructing EC networks from multimodal neuroimaging such as functional Magnetic Resonance Imaging (fMRI) and electroencephalography (EEG) is challenging, since most existing methods rely on feature concatenation or linear mapping, neglecting structural consistency and nonlinear cross-modal dynamics. In this work, we propose STBO-EC, a spatially and temporally guided framework for multimodal EC learning. First, we develop an anatomy-informed spatial alignment strategy that leverages known brain region coordinates to establish structurally consistent correspondences between EEG electrodes and fMRI regions. Second, we design a time-slice-based alignment and fusion mechanism to effectively bridge the temporal resolution gap between fast EEG activity and slow fMRI signals. Finally, to tackle the high dimensionality and nonlinear dependencies of fused multimodal data, we employ a low-rank parameterized Bayesian optimization method (DrBO), which enables efficient exploration of the exponential EC search space while providing uncertainty-aware inference. Experiments on two real EEG–fMRI datasets demonstrate that STBO-EC consistently outperforms state-of-the-art baselines across multiple evaluation metrics.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究对象**：脑有效连接（Effective Connectivity, EC），描述脑区之间的因果、方向性交互，对理解认知过程和神经疾病机制至关重要。
- **现有挑战**：fMRI 提供高空间分辨率但时间分辨率低，EEG 提供毫秒级时间精度但空间定位差。多模态融合（EEG+fMRI）有望互补优势，但现有方法大多采用简单特征拼接或线性映射，忽略了跨模态的非线性动态以及结构一致性（如 EEG 电极与 fMRI 脑区之间的解剖对应关系）。
- **论文目标**：提出 STBO-EC 框架，通过神经解剖引导的空间对齐、时间对齐融合以及基于贝叶斯优化的因果结构学习，从同时记录的 fMRI 与 EEG 数据中更准确、可解释地推断脑有效连接。

## 2. 论文提出的方法论

核心思想：分三个模块依次处理空间、时间和因果结构学习问题。

### 2.1 神经解剖引导的空间对齐
- **输入**：EEG 数据 \(X_{EEG} \in \mathbb{R}^{N_e \times T_e}\)，fMRI 数据 \(X_{fMRI} \in \mathbb{R}^{N_f \times T_f}\)，其中 \(N_e\) 电极数、\(N_f\) 脑区数。
- **步骤**：利用已知的电极坐标 \(p_c\) 和脑区坐标 \(q_i\) 计算欧氏距离 \(d_{ic} = \|q_i - p_c\|_2\)，然后通过高斯核函数计算权重 \(w_{ic}\)（经归一化），将 EEG 信号投影至 fMRI 的 ROI 空间：\(Y_{EEG}(i,t) = \sum_c w_{ic} X_{EEG}(c,t)\)，得到与 fMRI 空间对齐的 EEG 表示 \(Y_{EEG} \in \mathbb{R}^{N_f \times T_e}\)。

### 2.2 块状时间对齐与融合
- **问题**：EEG 采样率远高于 fMRI（\(T_e \gg T_f\)）。
- **方法**：将 EEG 时间序列等分为 \(T_f\) 个不重叠块，每块长度 \(L = T_e / T_f\)。对第 \(j\) 个 fMRI 时间点，构造融合目标 \(B^{(j)}_{target} = \alpha B^{(j)}_{EEG} + (1-\alpha) B^{(j)}_{fMRI}\)（\(\alpha=0.5\)），训练非线性映射 \(f_\theta\) 最小化 MSE。最终使用滑动窗口推理得到融合序列 \(Y_{fused} \in \mathbb{R}^{N_f \times T_e}\)，保留高时间分辨率与空间稳定性。

### 2.3 基于贝叶斯优化的 EC 学习
- **输入**：融合后的多模态表示 \(Y_{fused}\)。
- **目标**：推断有向无环图（DAG）表示的 EC 网络。
- **核心**：采用 DrBO 方法——将组合优化问题转化为低秩连续优化：邻接矩阵由节点潜在嵌入 \(r_i \in \mathbb{R}^k\) 和拓扑排序向量 \(p\) 参数化，使得搜索空间从 \(O(d^2)\) 降至 \(O(d(1+k))\)。使用 BIC 评分 \(S(D, G)\) 评估候选结构。
- **优化**：通过贝叶斯优化（BO）迭代优化参数 \(z = (p, R)\)，采用丢弃神经网络代理模型 \(g_\phi(z)\) 预测分数与不确定性，利用 Thompson 采样选择候选图。最终得到最优 EC 网络 \(\hat{G} = (V, \hat{E}, \hat{W})\)。

**算法流程简要说明**（对应 Algorithm 1）：
1. 对于每个 ROI 和电极，根据解剖距离计算高斯权重，将 EEG 投影到 ROI 空间。
2. 将 EEG 分块，与 fMRI 对齐，训练非线性融合模型，生成融合序列。
3. 初始化低秩参数 \(z\)，循环直至达到最大迭代次数：从信任区域采样候选图，通过代理模型预测节点分数，Thompson 采样选择候选，评估真实 BIC 分数并更新回放缓冲区，调整信任区域大小，修剪虚假边。

## 3. 实验设计

### 3.1 数据集
- **Visual Categorization Dataset**：31 名被试，同时记录 fMRI（TR=2s）与 34 通道 EEG（降采样至 10Hz），执行三类视觉分类任务（脸、车、房子）。选取 6 个任务相关 ROI（FFA、PPA、SPL、ACC、PMC、双侧 FEF）。共 93 个多模态样本。
- **XP2 Dataset**：40 名 dNF（去耦合神经反馈）和 28 名 MI（运动想象）被试。64 通道 EEG（200Hz），fMRI TR=1s。基于 AAL 模板提取 90 个 ROI 时间序列。任务为 20s 休息与 20s 任务交替。

### 3.2 对比方法（Benchmark）
- 经典方法：Patel (2006)、lsGC (2010)、pwLiNGAM (2017)
- 最新方法：DiffAN (2023)、MetaRLEC (2024)、MCAN (2024，多模态)、FSTA-EC (2025)
- 单模态消融：DrBO (2025，仅用 fMRI)
- 所有方法均按照原文推荐参数设置并在子集上调优。

### 3.3 评价指标
由于无 ground truth EC，通过用学习到的 EC 特征进行下游分类任务（随机森林或 KNN 分类器，5 折/10 折交叉验证）来间接评估 EC 质量。指标包括：Accuracy、Precision、Recall、F1、Error Rate、Specificity、ROC AUC。

### 3.4 消融实验
将 STBO-EC 的输入仅保留 fMRI（即 DrBO），对比多模态版本。

## 4. 资源与算力

论文附录 A.1 明确描述了计算环境：
- **GPU**：NVIDIA RTX 5090（32GB）、NVIDIA GeForce RTX 3090
- **CPU**：AMD Ryzen 9 5950X 16-core
- **内存**：128GB DDR4
- **软件**：Ubuntu 20.04，Python 3.10，PyTorch 2.7.1+cu128，CUDA 12.8
- **未报告训练时长**：文中未给出具体训练时间（如多少小时或迭代次数对应的 wall time），仅在参数敏感性分析中提到了执行时间随参数变化（图5显示约 60-200 秒），但未说明整体实验总耗时。

## 5. 实验数量与充分性

- **实验组数**：在 2 个真实数据集上进行完整对比，每个数据集报告了 8 种方法（含 STBO-EC 和 DrBO）在 7 个指标上的均值和标准差，并进行了配对 t 检验（p<0.05 标记）。此外，针对 STBO-EC 进行了参数敏感性分析（图5，4 个超参数变化对 F1 和运行时间的影响）。
- **充分性**：实验覆盖了经典和最新方法，包含多模态消融。但 MCAN 在 XP2 数据集上因计算成本过高而未运行，导致部分缺失。同时没有在仿真数据上验证因果发现能力（如与 ground truth 的一致性）。整体实验设计公平：所有方法使用相同分类管道，分类器根据数据规模选择（Visual 用随机森林 5 折，XP2 用 KNN 10 折）。
- **客观性**：论文提供了显著性检验 p 值表格，表明多数指标优于基线具有统计显著性（表 4、5）。

## 6. 论文的主要结论与发现

- **性能优势**：STBO-EC 在两个数据集上均在所有指标上达到最优或次优，显著优于单模态和多模态基线（如 MCAN、FSTA-EC）。多模态融合相对于仅 fMRI 的 DrBO 有稳定提升，尤其在 XP2 上更明显。
- **神经生理可解释性**：在 Visual Categorization 数据集上，不同任务（Face/Car/House）的 EC 网络模式不同，如 Face 任务下 FFA 与 PMC、FEF 强连接；Car/House 下 PPA 连接增强。在 XP2 数据集上，MI 状态比 dNF 状态表现出更强的跨网络信息流，涉及运动、额顶、视觉、边缘系统等。
- **结论**：尊重不同模态的独特特性（而非简单拼接）是准确推断 EC 的关键；基于解剖先验和时间同步的融合策略以及贝叶斯优化的因果发现有效结合了时空互补信息。

## 7. 优点

1. **创新性**：首次将神经解剖先验（电极-脑区坐标）引入空间对齐，避免了简单插值或随意映射；块状时间融合策略同时保留了 EEG 的高时间分辨率与 fMRI 的稳定性；采用低秩参数化贝叶斯优化，使得高维非线性 EC 搜索变得高效且可给出不确定性。
2. **实验设计**：两个真实数据集具有不同规模（6 vs 90 ROIs）和任务范式，验证了方法的泛化性；消融实验清晰证明了多模态的必要性；统计显著性检验确保了结论可靠。
3. **可解释性**：EC 网络的生理意义分析与文献已知结果一致（如 PPA 参与场景处理、MI 时运动区激活），说明学习到的连接具有神经科学基础。
4. **代码开源**：提供匿名代码链接，有助于复现和后续研究。

## 8. 不足与局限

1. **缺少仿真实验**：没有在已知 ground truth 的人工生成数据上验证因果发现性能，无法直接评估方法恢复真实 EC 的准确性。
2. **个体差异影响**：空间对齐依赖标准坐标，但个体间解剖差异、电极放置误差可能导致对齐偏差；时间对齐中固定块长度假设同步误差可忽略，实际中可能因心率、呼吸等生理噪声影响。
3. **可扩展性**：当前实验脑区最大 90 个，对于更高分辨率（如 1000+ ROI）或更长的时序数据，低秩参数化与 BO 的计算开销可能仍需优化（论文在局限性中提到）。
4. **对比方法覆盖不全**：MCAN 在 XP2 数据集上未运行（因计算成本高），导致该场景下缺失了一个多模态基线对比；此外未与 DCM、SEM 等传统建模方法比较（但可能因为计算复杂度或假设不符合）。
5. **分类任务有限**：下游分类仅使用单一分类器（随机森林或 KNN），未探索更复杂的分类器（如 SVM、深度学习），可能未充分挖掘 EC 特征的判别能力。且 Visual 数据集整体分类准确率较低（STBO-EC 最高 0.42），原因归于 Car 与 House 类别本身相似，但低准确率可能反映 EC 特征区分度有限。
6. **未报告训练时间**：缺乏整体训练时间和资源消耗的详细报告，不利于其他研究者评估方法的实际成本。

（完）

---
title: Spatially and Temporally Guided Bayesian Optimization for Brain Effective Connectivity Learning from fMRI and EEG Data
title_zh: 面向fMRI与EEG数据的时空引导贝叶斯优化脑有效连接学习
authors: "Zhihao Su, Junzhong Ji, Minqi Yu, Wen Xiong, Jinduo Liu"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=81iTOKJbzZ"
tags: ["query:fbn"]
score: 9.0
evidence: 使用贝叶斯优化从fMRI和EEG学习有效连接
tldr: 从多模态神经影像（fMRI和EEG）构建有效连接网络面临跨模态非线性动态挑战。本文提出STBO-EC，通过解剖学空间对齐策略和时序导向的贝叶斯优化，实现跨模态有效连接学习。在合成和真实数据上验证了该方法能准确捕捉脑区间因果交互，为理解脑网络连接提供了多模态融合方案。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1451, \"height\": 571, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1178, \"height\": 637, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1455, \"height\": 305, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1441, \"height\": 415, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1022, \"height\": 582, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-81itokjbzz/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 743, \"height\": 723, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1441, \"height\": 459, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1441, \"height\": 456, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1314, \"height\": 425, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1446, \"height\": 396, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-81itokjbzz/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1444, \"height\": 399, \"label\": \"Table\"}]"
motivation: 现有融合fMRI和EEG的方法忽略跨模态结构一致性，难以有效学习有效连接。
method: 提出STBO-EC框架，包括解剖学空间对齐和时空引导的贝叶斯优化，以学习非线性跨模态有效连接。
result: 在合成和真实数据上准确重建有向因果交互。
conclusion: STBO-EC有效融合fMRI和EEG信息，提升了有效连接估计的准确性。
---

## Abstract
Brain effective connectivity (EC) characterizes the causal and directional interactions among brain regions and plays a central role in understanding cognition and neurological disorders. Constructing EC networks from multimodal neuroimaging such as functional Magnetic Resonance Imaging (fMRI) and electroencephalography (EEG) is challenging, since most existing methods rely on feature concatenation or linear mapping, neglecting structural consistency and nonlinear cross-modal dynamics. In this work, we propose STBO-EC, a spatially and temporally guided framework for multimodal EC learning. First, we develop an anatomy-informed spatial alignment strategy that leverages known brain region coordinates to establish structurally consistent correspondences between EEG electrodes and fMRI regions. Second, we design a time-slice-based alignment and fusion mechanism to effectively bridge the temporal resolution gap between fast EEG activity and slow fMRI signals. Finally, to tackle the high dimensionality and nonlinear dependencies of fused multimodal data, we employ a low-rank parameterized Bayesian optimization method (DrBO), which enables efficient exploration of the exponential EC search space while providing uncertainty-aware inference. Experiments on two real EEG–fMRI datasets demonstrate that STBO-EC consistently outperforms state-of-the-art baselines across multiple evaluation metrics.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

脑有效连接（Effective Connectivity, EC）刻画不同脑区之间的因果性、有向交互，是理解认知过程和神经疾病机制的核心。然而，从多模态神经影像（如功能磁共振成像fMRI和脑电图EEG）构建EC网络面临重大挑战：现有方法大多采用特征拼接或线性映射，忽略了跨模态的结构一致性以及非线性的跨模态动态特性。fMRI具有高空间分辨率但时间分辨率低（秒级），EEG具有毫秒级时间精度但空间定位差。若能有效融合两者，有望同时利用空间精细度和时间动态性，从而更准确地揭示脑的因果组织。为此，论文提出STBO-EC框架，通过解剖学引导的空间对齐、时间切片对齐融合以及基于贝叶斯优化的因果结构学习，实现多模态EC的有效推断。

## 2. 论文提出的方法论：核心思想、关键技术细节

**核心思想**：分别处理空间和时间的跨模态差异，然后使用低秩参数化的贝叶斯优化高效搜索有向无环图（DAG）空间。

**关键技术细节**：

- **Neuroanatomy-Guided Spatial Alignment（解剖学引导的空间对齐）**：利用已知脑区（ROI）坐标和EEG电极坐标计算欧氏距离，通过高斯核权重将头皮EEG信号投影到fMRI的ROI空间，得到与fMRI空间对齐的EEG表示 \(Y_{\text{EEG}} \in \mathbb{R}^{N_f \times T_e}\)。  
  公式：\(w_{ic} = \frac{\exp(-d_{ic}^2/2\sigma^2)}{\sum_{c'}\exp(-d_{ic'}^2/2\sigma^2)}\)，投影 \(Y_{\text{EEG}}(i,t)=\sum_c w_{ic} X_{\text{EEG}}(c,t)\)。

- **Block-wise Temporal Alignment and Fusion（分块时间对齐与融合）**：由于EEG时间点远多于fMRI（\(T_e \gg T_f\)），将EEG划分为\(T_f\)个非重叠块，每块长度\(L=T_e/T_f\)；对应的fMRI帧扩展为相同长度向量；构造融合目标 \(B_{\text{target}}^{(j)} = \alpha B_{\text{EEG}}^{(j)} + (1-\alpha)B_{\text{fMRI}}^{(j)}\)（实验中\(\alpha=0.5\)）。训练一个非线性映射\(f_\theta\)（通过梯度下降最小化MSE）学习从EEG块和fMRI帧到融合表示。最后用滑动窗口推理得到最终多模态序列 \(Y_{\text{fused}} \in \mathbb{R}^{N_f \times T_e}\)。

- **BO-based EC Learning（基于贝叶斯优化的EC学习）**：采用低秩参数化表示DAG：邻接矩阵 \(\tilde{A}_{ij}=\sigma(\langle r_i, r_j \rangle)\)，其中\(r_i\in\mathbb{R}^k\)是低维嵌入，再加上拓扑排序向量\(p\)保证无环性。然后使用基于贝叶斯信息准则（BIC）的得分函数\(S(D,G)\)评估候选结构。利用带有dropout神经网络代理模型\(g_\phi(z)\)的贝叶斯优化高效搜索连续参数\(z=(p,R)\)，通过Thompson采样平衡探索与利用，得到最优EC网络\(\hat{G}\)。

**算法流程**：输入EEG和fMRI数据 → 空间对齐得到ROI级EEG → 分块时间对齐与融合 → 初始化低秩参数\(z\) → 迭代：采样候选图、代理预测节点得分、选择候选、评估真实得分、更新代理模型和置信区间、剪枝虚假边 → 输出最终EC图。

## 3. 实验设计：数据集、benchmark与对比方法

**数据集**：
- **Visual Categorization Dataset**：31名被试，同时记录fMRI（TR=2s，6个ROI）和EEG（34通道，下采样至10Hz），进行三分类视觉任务（face/car/house），共93个多模态样本。
- **XP2 Dataset**：包含40名神经反馈（dNF）和28名运动想象（MI）被试，fMRI（TR=1s，90个AAL定义的ROI），EEG（64通道，下采样至200Hz）。

**Benchmark**：由于无真实EC，采用下游分类任务评估EC学习质量——对Visual Categorization使用5折交叉验证随机森林分类器（6个ROI），对XP2使用10折交叉验证KNN分类器（90个ROI）。分类准确率越高表明EC越准确。

**对比方法**：
- 古典方法：Patel (2006), pwLiNGAM (2017), lsGC (2010)
- 最新方法：DiffAN (2023), MetaRLEC (2024), MCAN (2024，多模态方法)，FSTA-EC (2025)
- 消融对比：单模态fMRI版DrBO (仅用fMRI的贝叶斯优化EC学习)

## 4. 资源与算力

论文在附录A.1明确提及硬件环境：
- GPU：NVIDIA RTX 5090（32GB显存）和 NVIDIA GeForce RTX 3090
- CPU：AMD Ryzen 9 5950X 16核
- RAM：128GB DDR4
- 系统：Ubuntu 20.04.6 LTS，Python 3.10，PyTorch 2.7.1，CUDA 12.8

未明确给出训练时长或总GPU小时数，但给出了超参数：batch size=64，EC rank=8，训练步数（ngrads）=10，预选候选数C=100,000，最大迭代次数=2000。附录A.6的敏感性分析（图5）显示了不同参数下的执行时间（约60-200秒），说明实验耗时可接受。

## 5. 实验数量与充分性

- **主要实验**：两个真实数据集上对比了8种方法（含消融），报告了Accuracy, Precision, Recall, F1, Error Rate, Specificity, ROC AUC共7个指标（表1、表2）。
- **消融实验**：仅使用fMRI的DrBO作为单模态基线，与多模态STBO-EC对比。
- **统计显著性检验**：在附录A.5提供了配对t检验的p值（表4、表5），多数指标有显著差异（p<0.05）。
- **生理分析**：给出了Visual Categorization的EC网络图（图2）和XP2的活跃脑区分布（图3-4），并做了定性解释。
- **参数敏感性分析**：在附录A.6的图5中展示了ngrads, ncands, dag_rank, dropout对F1和执行时间的影响。

实验充分性评价：覆盖两个不同规模和任务的真实数据集，对比了经典和最新方法，进行了消融和统计检验，并考察了参数稳定性。但未在合成数据上验证（论文未提合成数据实验），且仅依赖下游分类指标间接评价EC质量（缺乏ground truth EC的定量对比）。总体实验设计客观，对比公平（统一分类流程、按推荐参数微调）。

## 6. 论文的主要结论与发现

- STBO-EC在Visual Categorization数据集上，Accuracy 0.42（第二好lsGC为0.39），Precision 0.49，Recall 0.42，F1 0.42，均优于所有基线。
- 在XP2数据集上，Accuracy 0.62（第二好lsGC和pwLiNGAM为0.61），Precision 0.53，ROC AUC 0.64，均最高。
- 多模态版本始终优于单模态（fMRI only）的DrBO，表明EEG和fMRI融合的有效性。
- 生理分析表明：不同任务（face/car/house, dNF/MI）下EC网络模式有区分性，符合已知脑功能组织，支持方法合理性。
- 结论：尊重各模态特性的跨模态融合（而非简单拼接）对揭示脑因果组织至关重要；STBO-EC的解剖学基础和不确定性感知设计为理解健康和疾病中的神经机制提供了新途径。

## 7. 优点

- **方法创新**：首次将解剖学空间对齐+时间对齐融合与贝叶斯优化相结合，分别解决空间和时间跨模态差异，针对性强。
- **低秩参数化**：将指数级DAG搜索空间降至\(O(d(1+k))\)，显著提升效率。
- **不确定性感知**：贝叶斯优化通过dropout神经网络提供不确定度估计，增强稳健性。
- **完整验证**：两个不同规模的真实数据集、广泛基线、统计检验、参数敏感性分析，实验较充分。
- **可复现**：公开代码（匿名链接），详细描述环境与参数。

## 8. 不足与局限

- **缺乏ground truth验证**：仅依赖下游分类间接评价EC质量，无法直接量化EC恢复的准确性。论文也承认“ground truth EC is not available”，但未采用合成数据做定量验证（如模拟已知因果结构的fMRI/EEG数据）。
- **个体差异考虑不足**：文中提到“accuracy of anatomical mapping and temporal alignment may be affected by individual variability”，但未做专门分析或引入个性化校正。
- **可扩展性**：对更大规模脑网络（如>100 ROI）的计算开销和性能尚未充分探索。XP2数据集为90 ROI，但论文未在更高分辨率数据（如300+ ROI）上测试。
- **融合参数固定**：时间融合中α固定为0.5，未自适应调节，可能不是最优。
- **分类任务偏差**：使用随机森林/KNN可能并非EC特征的最佳下游分类器，分类性能受分类器选择和交叉验证方案影响。另Visual Categorization中因Car和House相近导致整体准确率偏低，可能稀释方法间的差距。
- **对比方法的完整性**：MCAN在XP2上因计算成本未运行，导致多模态基线缺失；缺失最新基于深度学习的因果发现方法（如NOTEARS变体、DAG-GNN等）的对比。
- **计算资源**：虽给出硬件，但未提供精确训练时间或能耗数据，不利于公平比较复杂度。

（完）

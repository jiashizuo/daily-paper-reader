---
title: "DyBraSS: Dynamic Brain State Modeling with State-Space Model"
title_zh: DyBraSS：基于状态空间模型的动态脑状态建模
authors: "Ah-Yeong Jeong, Seungwoo Jeong, Da-Woon Heo, Heung-Il Suk"
date: 2025-09-17
pdf: "https://openreview.net/pdf?id=522R7hU5J0"
tags: ["query:fbn"]
score: 8.0
evidence: 使用状态空间模型从rs-fMRI建模动态脑状态
tldr: 现有动态脑状态建模方法忽略空间结构和时空共变模式。DyBraSS提出一种状态空间模型，在保留脑空间结构的同时，联合建模时空动态。在rs-fMRI数据上能准确估计神经精神疾病相关的脑状态转换，为动态功能连接分析提供新工具。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1445, \"height\": 650, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 733, \"height\": 420, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1453, \"height\": 416, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 566, \"height\": 520, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1310, \"height\": 557, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1450, \"height\": 491, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1449, \"height\": 487, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1440, \"height\": 462, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1388, \"height\": 919, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 954, \"height\": 447, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1444, \"height\": 462, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1388, \"height\": 911, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-522r7hu5j0/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 954, \"height\": 505, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-522r7hu5j0/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1453, \"height\": 335, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-522r7hu5j0/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1442, \"height\": 306, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-522r7hu5j0/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1437, \"height\": 186, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-522r7hu5j0/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1447, \"height\": 821, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-522r7hu5j0/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 980, \"height\": 330, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-522r7hu5j0/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1428, \"height\": 256, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-522r7hu5j0/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1389, \"height\": 227, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-522r7hu5j0/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1437, \"height\": 190, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-522r7hu5j0/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 602, \"height\": 297, \"label\": \"Table\"}]"
motivation: 现有方法丢失脑空间结构且忽略时空共变，限制动态脑状态建模精度。
method: 提出DyBraSS，利用状态空间模型保留空间架构，联合建模时空共变模式。
result: 在rs-fMRI数据上准确估计动态脑状态转换，关联神经精神疾病。
conclusion: 为动态功能连接分析提供保留空间结构的高效计算框架。
---

## Abstract
Brain states, observable through resting-state functional magnetic resonance imaging (rs-fMRI), represent dynamic transitions between recurring connectivity patterns and are closely linked to neurological and psychiatric conditions. Therefore, developing a computational model for dynamic brain state estimation has been a long-lasting research interest. Among existing approaches, state-space models (SSMs) provide a principled framework for modeling these dynamics. However, existing methods face key limitations: they fail to preserve the brain's spatial architecture, and they model temporal dynamics without considering co-evolving spatial patterns.
To address these limitations, we propose $\textbf{DyBraSS}$ ($\textbf{Dy}$namic $\textbf{Bra}$in $\textbf{S}$tate-$\textbf{S}$pace model), a novel structured SSM that unifies spatial and temporal modeling within a single framework, enhancing ROI-level modeling capacity and interpretability through a clustering-based global aggregation module.
This module respects the brain's network topology by integrating information from all regions during each local update, and represents evolving brain states as interpretable clusters.
Comprehensive experiments on multiple fMRI datasets demonstrate that our method consistently outperforms state-of-the-art baselines in diagnostic performance across diverse metrics. 
Additionally, individual- and group-level brain state analyses reveal that the learned dynamics align with known neurobiological alterations, providing clinically relevant insights for understanding neural dysfunction and developing diagnostic biomarkers.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：静息态功能磁共振成像（rs-fMRI）可观测脑状态动态，这些动态与神经精神疾病（如自闭症谱系障碍ASD、注意缺陷多动障碍ADHD）密切相关。现有脑状态建模方法存在**两个关键局限**：
  - **忽视空间架构**：传统状态空间模型（SSM）将脑区（ROI）视为任意顺序的序列，破坏了固有拓扑结构。
  - **忽略时空共变**：空间和时域动态被单独建模，后期才融合，无法捕获共演的连接模式。
- **整体含义**：本文旨在提出一种**能同时保留空间拓扑并联合建模时空动态**的SSM，以提升动态脑状态估计的精度和临床可解释性，为神经精神疾病诊断提供新工具。

### 2. 论文提出的方法论

- **核心思想**：基于结构化SSM（借鉴Mamba的选择性机制）设计**DyBraSS**（Dynamic Brain State-Space Model），通过**全局聚合模块**在每次局部ROI更新时整合所有脑区信息，并引入**聚类机制**将脑状态表示为可解释的簇，实现时空统一建模。
- **关键技术细节**：
  - **输入表示**：使用滑动窗口构建动态功能连接（dFC）序列，窗口长度和步长依据TR归一化以兼容多站点数据。每个FC矩阵经MLP嵌入为ROI级特征 `e˜_t ∈ R^(R×D)`。
  - **DynBrain-Mamba模块**：包含两个分支（`x` 主分支和 `z` 门控分支）。`x` 分支经时间卷积后进入 **Dyn-SSM**。
  - **Dyn-SSM公式**：为每个ROI定义隐藏状态 `h_r(t)`，状态演化方程加入**全局反馈项 Φ_r(t)**，实现跨ROI的信息融合（公式6-7）。参数通过输入依赖的线性投影生成（选择性机制），离散化使用零阶保持法（公式8-10）。
  - **全局聚合模块**：使用**正交聚类**。通过Gram-Schmidt过程初始化K个正交簇中心，计算每个ROI到簇的软分配概率（公式13），然后通过加权和池化得到全局嵌入 `G_t`（公式14），再将全局信息分发回各ROI（公式15）。这一设计使模型能显式追踪脑状态轨迹。
  - **解码与损失**：全局嵌入 `{G_t}` 经2D卷积用于分类（交叉熵损失 `L_cls`）；输出序列 `e˜′` 经MLP预测下一时刻FC（MAE损失 `L_pred`）。总损失 `L = α L_cls + (1-α) L_pred`。
- **算法流程**：输入dFC序列 → 嵌入 → DynBrain-Mamba块（Dyn-SSM + 正交聚类）→ 全局嵌入用于诊断，ROI序列用于预测下一时刻FC。

### 3. 实验设计

- **数据集**：
  - **ABIDE-I**：678名受试者（290 ASD，388 典型对照TC），来自17个站点，114个ROI（Yeo 2011图谱）。
  - **ADHD-200**：643名受试者（270 ADHD，373 典型发育TD），来自8个站点。
  - **COBRE**（额外验证）：145名受试者（74 健康对照，71 精神分裂症患者），71个ROI。
- **Benchmark**：5折交叉验证（70%训练、10%验证、20%测试），评价指标：AUROC、ACC、SEN、SPC。
- **对比方法**（8种）：
  - CNN: BrainNetCNN
  - Transformer: BrainNetTF, BolT
  - 图神经网络: ContrastPool
  - SSM: fMRI-S4, FST-Mamba, BrainMAP, **DyBraSS (ours)**
- **超参数调优**：所有基线均使用官方实现，并在验证集上调整关键超参数（如隐藏维度、学习率、批大小等），确保公平对比。

### 4. 资源与算力

- **文中说明**：所有模型（包括基线和本文方法）均在 **一张 NVIDIA GeForce RTX 2080 GPU**（显存8GB）上训练，操作系统Ubuntu 18.04，PyTorch实现。
- **未说明**：训练时长、批次处理时间、总GPU小时数等具体信息未给出。仅在计算效率对比中提供了推理吞吐量（Ours: 0.13 k样本/秒，最慢），但未报告训练开销。

### 5. 实验数量与充分性

- **主要实验**：5组分类结果（表1：ABIDE-I & ADHD-200；表4：COBRE），统计学显著性通过配对t检验（p<0.05）标出。
- **消融实验**（3组）：
  - 不同聚合机制（无聚合、均值、求和、注意力、随机簇、可学习随机簇、正交簇）→ 表2。
  - 预测任务损失 `L_pred` 的影响 → 表3左半。
  - TR归一化的影响 → 表3右半。
- **参数灵敏度**：滑动窗口长度（表5）和步长（表6）的扰动分析。
- **图谱对比**：AAL、Schaefer与Yeo图谱（表7）。
- **计算效率**：参数量和推理吞吐量对比（表8）。
- **脑状态分析**：个体级轨迹图（图2、6、7）、组级转移矩阵（图3、8、11）、停留时间（图9、12）、网络配置（图4、10、13）及正交聚类与随机的对比（图5）。
- **充分性判断**：实验覆盖全面、消融设计合理、对比方法多样、结果统计显著。外部数据集（COBRE）增加了泛化性证据。实验较充分且客观。

### 6. 论文的主要结论与发现

- **性能优势**：DyBraSS在ABIDE-I和ADHD-200上取得了**最优AUROC和ACC**（0.6904/67.99% 和 0.6727/66.23%），分别比最佳基线BrainMAP高约2.8-3.5个百分点，且灵敏度（SEN）显著提升，特异性（SPC）保持平衡。
- **消融有效性**：验证了全局聚合、预测任务、TR归一化、正交聚类等各组件的必要性。
- **脑状态对齐**：个体和组水平分析表明，学习到的脑状态转换模式与已知神经生物学发现一致（如ASD中增强的 somatomotor→dorsal attention 转换；ADHD中更长的视觉/注意网络驻留时间），说明模型具有临床可解释性。
- **参数效率**：仅0.72M参数，远小于FST-Mamba（33.69M），但推理速度最慢（0.13 k/s），表明存在计算-可解释性权衡。

### 7. 优点

- **方法创新**：首次在SSM框架中**同时实现空间拓扑保持和时空联合建模**，通过正交聚类全局聚合模块，既增强建模能力又提升可解释性。
- **设计完备**：引入辅助预测任务（下一时刻FC）作为多任务学习，提升诊断鲁棒性；TR归一化处理多站点差异。
- **实验严谨**：涵盖多个数据集、多种基线、充分消融，并在脑状态分析中提供定量（停留时间、转移概率）和定性（网络可视化）验证，结果统计显著。
- **应用价值**：学习到的脑状态轨迹与疾病相关神经环路改变对齐，为开发影像学生物标志物和疾病机制研究提供可能。

### 8. 不足与局限

- **实验覆盖**：
  - 仅验证了ASD和ADHD两种疾病（以及COBRE的精神分裂症），未在其他神经精神疾病（如抑郁症、阿尔茨海默病）上测试。
  - 仅使用7个规范网络图谱（Yeo 2011），未探索更精细或自定义图谱。
- **计算开销**：推理吞吐量在所有方法中最低（0.13 k/s），因为每个时间步都需要进行聚类聚合计算，限制了大规模或实时应用。
- **可推广性**：虽设计为通用框架，但结构重度依赖dFC和滑动窗口，对非功能连接数据（如EEG、MEG）的适应性未讨论。
- **其他潜在限制**：
  - 聚类数K（第一块32，第二块8）手动设定，未进行敏感性分析。
  - 训练时使用了固定步长和窗口，真实场景中最佳参数可能因数据集而异。
  - 论文为ICLR 2026在审稿件，尚未最终接收，部分实现细节或结果可能调整。

（完）

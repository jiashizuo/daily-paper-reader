---
title: Neurocircuitry-Inspired Hierarchical Graph Causal Attention Networks for Explainable Depression Identification
title_zh: 神经环路启发的分层图因果注意力网络用于可解释抑郁症识别
authors: "Weidao Chen, Yueming Wang, Yuxiao Yang"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=NmFsKxhhlc"
tags: ["query:fbn"]
score: 9.0
evidence: 基于fMRI功能连接的抑郁症GNN诊断
tldr: 现有抑郁症诊断GNN缺乏神经生物学可解释性。本文提出NH-GCAT，受神经环路启发，在不同空间尺度显式建模抑郁症机制，引入分层图因果注意力。在fMRI数据集上，NH-GCAT不仅诊断准确性高，而且识别出的脑区模式与抑郁症已知病理一致，提升了模型的可信度。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 714, \"height\": 427, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1456, \"height\": 762, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1440, \"height\": 314, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1440, \"height\": 535, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1542, \"height\": 1374, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1451, \"height\": 584, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1384, \"height\": 1251, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1381, \"height\": 1254, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1429, \"height\": 738, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1430, \"height\": 740, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1014, \"height\": 648, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1448, \"height\": 260, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 798, \"height\": 293, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1446, \"height\": 803, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1445, \"height\": 505, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1033, \"height\": 580, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1361, \"height\": 835, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1441, \"height\": 692, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 966, \"height\": 359, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1019, \"height\": 695, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1304, \"height\": 673, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1304, \"height\": 664, \"label\": \"Table\"}]"
motivation: 现有GNN为抑郁症诊断黑箱，缺乏神经生物学可解释性。
method: 设计神经环路启发的分层图因果注意力网络，显式建模多尺度机制。
result: 在fMRI抑郁症数据集上取得高准确率，且注意力模式与病理一致。
conclusion: 引入领域知识能同时提升GNN性能和可解释性。
---

## Abstract
Major Depressive Disorder (MDD), affecting millions worldwide, exhibits complex pathophysiology manifested through disrupted brain network dynamics. Although graph neural networks that leverage neuroimaging data have shown promise in depression diagnosis, existing approaches are predominantly data-driven and operate largely as black-box models, lacking neurobiological interpretability. Here, we present NH-GCAT (Neurocircuitry-Inspired Hierarchical Graph Causal Attention Networks), a novel framework that bridges neuroscience domain knowledge with deep learning by explicitly and hierarchically modeling depression-specific mechanisms at different spatial scales. Our approach introduces three key technical contributions: (1) at the local brain regional level, we design a residual gated fusion module that integrates temporal blood oxygenation level dependent (BOLD) dynamics with functional connectivity patterns, specifically engineered to capture local depression-relevant low-frequency neural oscillations; (2) at the multi-regional circuit level, we propose a hierarchical circuit encoding scheme that aggregates regional node representations following established depression neurocircuitry organization, and (3) at the multi-circuit network level, we develop a variational latent causal attention mechanism that leverages a continuous probabilistic latent space to infer directed information flow among critical circuits, characterizing disease-altered whole-brain inter-circuit interactions. Rigorous leave-one-site-out cross-validation on the REST-meta-MDD dataset demonstrates NH-GCAT's state-of-the-art performance in depression classification, achieving a sample-size weighted-average accuracy of 73.3\% and an AUROC of 76.4\%, while simultaneously providing neurobiologically meaningful explanations. This work represents a significant advancement toward mechanism-aware, explainable artificial intelligence (AI) systems for psychiatric diagnosis.

---

## 论文详细总结（自动生成）

# 论文结构化中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有的基于图神经网络（GNN）的抑郁症（MDD）诊断方法多为纯数据驱动的黑箱模型，缺乏神经生物学可解释性，难以与已知的抑郁症病理机制对齐。
- **研究动机**：抑郁症的神经病理体现在多个空间尺度（局部脑区、多脑区环路、全脑环路交互），但现有GNN方法要么忽略时间动态，要么采用通用分层而不能显式利用神经科学知识。
- **整体含义**：本文提出NH-GCAT，通过引入抑郁症特异性神经环路知识作为归纳偏置，构建可解释的层级图因果注意力网络，在提升分类性能的同时提供神经生物学上有意义的解释，推动机制感知的AI在精神疾病诊断中的应用。

## 2. 论文提出的方法论

### 核心思想
- 将神经科学知识显式编码到深度学习架构中，在三个空间尺度分层建模抑郁症相关的脑网络改变：
  1. **局部脑区**：融合BOLD时间动态与静态功能连接；
  2. **多脑区环路**：按预定义的抑郁症相关环路（DMN、SN、FPN、LN、RN）进行分层聚合；
  3. **全脑环路网络**：通过变分潜在因果注意力捕获环路间的有向信息流，进行反事实推断。

### 关键技术细节
- **RG-Fusion（残差门控融合）**：双流架构。时间流用Transformer编码BOLD信号，静态流处理功能连接矩阵。通过可学习门控机制自适应融合两路特征，并加入残差连接和注意力增强。
- **HC-Pooling（分层电路编码）**：为每个环路构建局部图，利用Gumbel-Softmax将节点分配到三个层次（高层整合、中层处理、底层初级处理），再用ChildSumTreeLSTM从底层向上聚合得到环路级嵌入。使用组级连接先验指导邻接矩阵学习，加入MSE损失。
- **VLCA（变分潜在因果注意力）**：在环路嵌入上计算注意力权重得到真实交互表示，编码到连续潜在空间（变分编码器）。构造反事实输入（用单位矩阵替换注意力）得到反事实潜在编码。通过对比真实与反事实的预测差异估计因果效应，结合分类损失和KL正则化训练。
- **总体训练目标**：总损失 = 分类损失 + λ<sub>kl</sub> KL损失 + λ<sub>VLCA</sub> VLCA损失 + λ<sub>mse</sub> 邻接重构MSE损失。

## 3. 实验设计

### 数据集
- **主数据集**：REST-meta-MDD，共1601名参与者（830 MDD，771 HC），来自16个中心，采用AAL116个脑区，提取BOLD时间序列和静态功能连接。
- **外部泛化数据集**：SRPBS（日本多中心数据集，336人，171 MDD/165 HC），用于零样本评估。

### 基准方法
- **通用GNN**：GCN、GIN、GraphSAGE、GPS（Graph Transformer）、GAT。
- **专门MDD方法**：BrainIB、CI-GNN、LCCAF、BPI-GNN、MV-GNN、GC-GAN、DSFGNN、TEM、LGMF-GNN、BrainNPT、MSSTAN等。
- **验证协议**：5折交叉验证（主要结果）和留一站点交叉验证（LOSO-CV）。

### 对比设置
- 外部方法结果直接引用原始论文（在同一数据集上），同时作者也复现了部分开源代码（表11）保证公平性。通用GNN由作者在相同预处理和划分下实现。

## 4. 资源与算力

- **硬件**：单张NVIDIA RTX 4090 GPU。
- **框架**：PyTorch + PyTorch Geometric。
- **训练细节**：Adam优化器，学习率1e-3，batch size 32，最大300 epochs，early stopping patience 20。
- **模型参数量**：约210万。

## 5. 实验数量与充分性

- **主要分类对比**：表1展示11种方法+5个通用基线，5个指标（AUC、ACC、SEN、SPE、F1）。
- **留一站点泛化**：表2展示16个站点的LOSO-CV结果，对比CI-GNN和BrainIB。
- **消融实验**：表3逐步添加RG-Fusion、VLCA、HC-Pooling，展示各组件贡献。附录表8扩展了MLP-Fusion、Transformer-Fusion、不同VLCA变体、不同层次数分层。
- **频率分析**：分别用低频和高频BOLD信号输入，验证低频频段对抑郁症诊断更重要。
- **层次分布分析**：统计MDD vs HC在各环路的层级分配差异（图5），并用卡方检验。
- **因果交互分析**：可视化环路间注意力权重（表10、图3c-d）。
- **外部泛化**：在SRPBS数据集零样本测试（表12、图7-10）。
- **总体评价**：实验覆盖全面，既有内部交叉验证又有外部泛化，消融充分，统计显着性检验（Wilcoxon符号秩检验）表明提升显着。对比方法多，数据划分一致，但部分外部方法结果未复现（但作者随后复现了关键方法）。

## 6. 论文的主要结论与发现

- **性能**：NH-GCAT在5折CV中达到AUC 78.5%，ACC 73.8%，F1 75.0%，显着优于所有对比方法；LOSO-CV加权平均ACC 73.3%，比CI-GNN高4.1%。
- **可解释性**：
  - 低频BOLD信号贡献更大，与抑郁症低频频段异常一致；
  - 默认模式网络（DMN）中前额叶内侧和角回区域出现显着层级重组，反映病理性反刍；
  - 奖赏网络向DMN的异常信息流增加，暗示奖赏信号异常整合到自我参照处理中；
  - 前额顶网络对边缘系统的补偿性调控增强，表明认知控制代偿。
- **临床价值**：模型识别的环路交互模式与已知抗抑郁治疗靶点（如DMN连接）对齐，有望用于个体化治疗预测。

## 7. 优点

- **创新性**：首次将抑郁症神经环路知识以分层方式深度融入GNN，同时建模时间动态、层次聚合和因果交互。
- **可解释性**：三个模块分别提供局部、环路、网络三层面解释，且解释与已有神经科学发现一致。
- **性能**：在多个指标上达到SOTA，且平衡性好（不偏向某一类）。
- **实验充分**：涵盖内外部验证、消融、频率分析、层级分析、因果分析；统计检验严格。
- **开源与可重复性**：代码将公开，数据集公开，预处理详细。

## 8. 不足与局限

- **人群偏差**：训练数据仅来自中国人群，泛化到其他种族/文化人群有待验证（外部SRPBS零样本表现下降）。
- **未区分亚型**：抑郁症存在临床亚型，但模型未利用亚型信息，可能丢失个性化差异。
- **环路预定义**：基于标准图谱的环路划分可能忽略个体间变异；动态或个体化环路可能更优。
- **因果推断局限性**：VLCA的反事实推断基于简化假设，其因果效应估计有待纵向干预数据验证。
- **外部泛化仍有差距**：在SRPBS上AUC 69.8%，虽然有提升但远低于内部结果，反映域适应挑战。
- **计算资源有限**：仅在单卡4090上训练，未探索更大模型或分布式训练。

（完）

---
title: Neurocircuitry-Inspired Hierarchical Graph Causal Attention Networks for Explainable Depression Identification
title_zh: 受神经回路启发的分层图因果注意力网络用于可解释抑郁症识别
authors: "Weidao Chen, Yueming Wang, Yuxiao Yang"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=NmFsKxhhlc"
tags: ["query:fbn"]
score: 9.0
evidence: 使用神经回路启发的图因果注意力网络进行可解释抑郁症识别
tldr: 现有基于GNN的抑郁症诊断模型缺乏神经生物学可解释性。本文提出NH-GCAT，受神经回路启发，构建分层图因果注意力网络，显式建模不同空间尺度的抑郁相关脑网络动态。在多项抑郁症数据集上，NH-GCAT不仅诊断准确率超越现有方法，还提供了与已知神经生物学发现一致的注意力权重，增强了模型可信度。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 714, \"height\": 427}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1456, \"height\": 762}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1440, \"height\": 314}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1440, \"height\": 535}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1542, \"height\": 1374}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1451, \"height\": 584}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1384, \"height\": 1251}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1381, \"height\": 1254}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1429, \"height\": 738}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-nmfskxhhlc/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1430, \"height\": 740}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1014, \"height\": 648}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1448, \"height\": 260}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 798, \"height\": 293}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1446, \"height\": 803}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1445, \"height\": 505}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1033, \"height\": 580}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1361, \"height\": 835}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1441, \"height\": 692}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 966, \"height\": 359}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1019, \"height\": 695}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1304, \"height\": 673}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-nmfskxhhlc/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1304, \"height\": 664}]"
motivation: 现有抑郁症诊断模型为黑箱，缺乏神经生物学解释性。
method: 提出NH-GCAT，集成神经回路知识和图因果注意力，分层建模多尺度脑网络动态。
result: 在抑郁症数据集上取得最优诊断性能，同时生成可解释的神经生物学相关注意力图。
conclusion: 融合领域知识的深度学习可提升诊断准确性和可解释性，助力临床心理评估。
---

## Abstract
Major Depressive Disorder (MDD), affecting millions worldwide, exhibits complex pathophysiology manifested through disrupted brain network dynamics. Although graph neural networks that leverage neuroimaging data have shown promise in depression diagnosis, existing approaches are predominantly data-driven and operate largely as black-box models, lacking neurobiological interpretability. Here, we present NH-GCAT (Neurocircuitry-Inspired Hierarchical Graph Causal Attention Networks), a novel framework that bridges neuroscience domain knowledge with deep learning by explicitly and hierarchically modeling depression-specific mechanisms at different spatial scales. Our approach introduces three key technical contributions: (1) at the local brain regional level, we design a residual gated fusion module that integrates temporal blood oxygenation level dependent (BOLD) dynamics with functional connectivity patterns, specifically engineered to capture local depression-relevant low-frequency neural oscillations; (2) at the multi-regional circuit level, we propose a hierarchical circuit encoding scheme that aggregates regional node representations following established depression neurocircuitry organization, and (3) at the multi-circuit network level, we develop a variational latent causal attention mechanism that leverages a continuous probabilistic latent space to infer directed information flow among critical circuits, characterizing disease-altered whole-brain inter-circuit interactions. Rigorous leave-one-site-out cross-validation on the REST-meta-MDD dataset demonstrates NH-GCAT's state-of-the-art performance in depression classification, achieving a sample-size weighted-average accuracy of 73.3\% and an AUROC of 76.4\%, while simultaneously providing neurobiologically meaningful explanations. This work represents a significant advancement toward mechanism-aware, explainable artificial intelligence (AI) systems for psychiatric diagnosis.

---

## 论文详细总结（自动生成）

# 论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究背景**：重度抑郁症（MDD）影响全球数亿人，其病理机制表现为脑网络动态的紊乱。现有基于功能磁共振成像（fMRI）的图神经网络（GNN）方法在抑郁症诊断中已显示出潜力，但大多为纯数据驱动的“黑箱”模型，缺乏神经生物学的可解释性。
- **核心问题**：如何将神经科学领域的先验知识（如分层脑回路组织、低频振荡、因果信息流）显式地融入深度学习模型中，从而在提升抑郁症分类准确率的同时，提供与已知神经生物学机制一致的可解释性。
- **整体含义**：提出一种受神经回路启发的分层图因果注意力网络（NH-GCAT），通过多空间尺度的显式建模（局部脑区、多区域回路、多回路网络）来桥接神经科学与深度学习，推动机制感知、可解释的人工智能在精神疾病诊断中的应用。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：在GNN中嵌入抑郁特异性神经回路知识，从三个空间层次进行建模：
  1. **局部脑区水平**：整合时间BOLD动态与静态功能连接（FC），捕捉抑郁相关的低频神经振荡。
  2. **多区域回路水平**：依据已知抑郁相关回路（默认模式网络DMN、突显网络SN、额顶网络FPN、边缘系统LN、奖赏网络RN）进行分层聚合，生成回路级嵌入。
  3. **多回路网络水平**：通过变分潜在因果注意力机制（VLCA）推断回路间的有向信息流，刻画全脑回路交互的异常。
- **关键技术细节**：
  - **RG-Fusion（残差门控融合模块）**：
    - 并行处理：时间路径（Transformer编码BOLD时序）和静态路径（MLP+图注意力处理FC）。
    - 门控融合：学习自适应权重融合两种模态特征。
    - 残差连接：通过两阶段注意力（特征注意+节点注意）增强区分性。
  - **HC-Pooling（分层电路编码）**：
    - 定义五个回路的节点集合。
    - 可微分重构回路内邻接矩阵（融合个体FC和组水平先验）。
    - 使用Gumbel-Softmax将节点分配到三个层次（Layer-1/2/3）。
    - 采用ChildSumTreeLSTM从低层向高层进行自底向上的信息聚合，得到每个回路的嵌入 H_DMN, H_SN, H_FPN, H_LN, H_RN。
  - **VLCA（变分潜在因果注意力）**：
    - 对回路嵌入计算注意力（Q,K,V），得到实际交互表示 Areal。
    - 编码到变分潜在空间（μ, σ），采样z_real。
    - 反事实推理：用单位矩阵代替注意力（仅自注意力），得到z_cf。
    - 因果效应 = f_pred(z_real) - f_pred(z_cf)。
    - 损失包括交叉熵分类损失和KL散度正则化。
  - **总体训练目标**：L = L_cls + λ_kl L_kl + λ_VLCA L_VLCA + λ_mse L_mse。

## 3. 实验设计
- **数据集**：
  - 主要使用 **REST-meta-MDD** 数据集：1601名参与者（830 MDD, 771 HC），来自16个站点，采用AAL图谱 (116个ROI)。
  - 额外在附录中使用 **SRPBS**（日本多站点数据集，336名受试者）进行零样本泛化测试。
- **基准方法**：
  - 外部SOTA方法：BrainIB, CI-GNN, LCCAF, BPI-GNN, GC-GAN, DSFGNN, TEM, LGMF-GNN, BrainNPT, MSSTAN等（从原文直接引用结果）。
  - 自实现基线：GCN, GIN, GraphSAGE, GPS, GAT（在相同预处理和评估协议下）。
- **评估策略**：
  - 5折交叉验证（分层抽样）。
  - 留一站点交叉验证（LOSO-CV）：每个站点轮流作为测试集。
  - 零样本跨数据集泛化（REST-meta-MDD训练，SRPBS测试）。
- **评价指标**：准确率 (ACC)、AUC、敏感度 (SEN)、特异度 (SPE)、F1值。

## 4. 资源与算力
- 文中明确说明：所有实验使用 PyTorch 框架，在 **一张 NVIDIA RTX 4090 GPU** 上完成。未提及其他GPU型号或具体训练时长。

## 5. 实验数量与充分性
- **主要实验**：
  - 表1：与10种以上外部方法及5种自实现基线的全面对比（5折CV）。
  - 表2：留一站点交叉验证（16个站点），并与CI-GNN、BrainIB对比。
  - 表3：消融实验，逐步添加RG-Fusion、VLCA、HC-Pooling，统计显著检验（Wilcoxon符号秩检验）。
- **分析实验**：
  - 频率特异性分析（低/高频BOLD输入对比，图3a，p=0.0037）。
  - 层次电路组织分析（图3b/5/6），统计显著脑区标注。
  - 因果回路交互分析（图3c/d，表10）。
- **附录扩展**：
  - 额外的消融研究（MLP-Fusion, Transformer-Fusion, 不同层次深度等，表8）。
  - 外部零样本泛化（SRPBS数据集，表12，图8/10）。
  - 决策曲线分析(DCA)、ROC/PR曲线等（图4,7,9,10）。
- **充分性评价**：
  - 实验设计比较全面，涵盖了内部交叉验证、跨站点泛化、跨数据集泛化，以及多层次的消融和解释性分析。
  - 统计检验使用了Wilcoxon符号秩检验，增强了结论可靠性。
  - 所有比较均在相同数据分割和预处理下进行（自实现基线），对比公正。
  - 不足之处：主要结果仅基于一个数据集（REST-meta-MDD）；外部验证仅在附录；未做超参数敏感性分析或更细粒度的亚型分析。

## 6. 论文的主要结论与发现
- NH-GCAT在REST-meta-MDD数据集上达到SOTA：5折CV AUC 78.5%，ACC 73.8%，F1 75.0%；留一站点加权平均ACC 73.3%，AUC 76.4%，显著优于对比方法。
- 消融实验表明三个核心模块均贡献显著：RG-Fusion提升特异性(+13.4%)，VLCA提升F1(+3.1%)，HC-Pooling进一步提升整体性能。
- 可解释性分析发现：
  - 模型对低频BOLD信号（0.01-0.08 Hz）更为敏感，与抑郁相关神经振荡一致。
  - MDD患者在多个回路的关键区域（如DMN的角回、前额叶内侧；FPN的额下回等）出现层次分配异常，符合病理认知（如反刍、执行功能受损）。
  - VLCA揭示MDD中异常的有向回路交互，例如奖赏网络对默认模式网络的异常增强输入，边缘系统输入减少等，与核心症状对应。
- 零样本泛化到SRPBS数据集仍保持较好性能（AUC 69.8%），表明学习到的特征具有一定跨人群鲁棒性。

## 7. 优点
- **神经科学引导的架构设计**：显式嵌入抑郁相关回路和层次组织，使模型内在地具有可解释性，而不仅是后验解释。
- **多尺度建模**：同时处理局部时序动态、回路内层次聚合、回路间因果交互，覆盖了抑郁病理的多层次表现。
- **新颖的因果推理机制**：VLCA通过变分潜在空间和反事实估计实现可学习的有向信息流推断，提供了机制层面的解释。
- **严格的实验验证**：多种交叉验证、消融、统计检验和外部泛化，确保了方法的鲁棒性和公平性。
- **临床实用性分析**：做了决策曲线分析（DCA），表明模型在广泛阈值范围内具有净获益，具有实际临床应用潜力。

## 8. 不足与局限
- **数据集局限**：REST-meta-MDD仅包含中国人群，可能限制跨种族/文化泛化性。外部数据集SRPBS仍为东亚人群，需更多样化验证。
- **缺乏亚型分析**：未区分抑郁症亚型（如焦虑型、忧郁型等），忽略了临床异质性。
- **依赖先验定义**：回路划分基于文献固定，可能忽略个体间功能组织变异。未来可考虑个性化分区。
- **仅使用静态FC和BOLD时序**：未整合其他模态（如结构MRI、扩散张量成像）或临床量表信息。
- **计算资源报告有限**：仅提到单卡RTX 4090，未报告具体训练时间或能耗，影响可复现性。
- **因果假设验证不足**：VLCA推断的“因果”是模型内部的计算，与生物学因果的对应关系仍需纵向或干预实验验证。

（完）

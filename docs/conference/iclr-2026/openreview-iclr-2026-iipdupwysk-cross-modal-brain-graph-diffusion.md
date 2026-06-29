---
title: Cross-modal Brain Graph Diffusion
title_zh: 跨模态脑图扩散
authors: "Ciyuan Peng, Zhendong Luo, Ivan Lee, Shan Jin, Jing Ren, Mengmeng Wang, Xiangjie Kong, Xiaohui Zhao, Ruwan Tennakoon, Feng Xia"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=iIpduPWySk"
tags: ["query:fbn"]
score: 8.0
evidence: 跨模态脑图扩散用于结构-功能融合
tldr: 多模态脑图融合需要同时捕获模态内拓扑和模态间耦合，现有方法无法兼顾。本文提出跨模态脑图扩散方法Xdiff，采用双图扩散机制分别处理模态内和模态间扩散，有效融合结构和功能信息。在脑连接组分析任务上，融合后的图表示更准确反映大脑组织。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 634, \"height\": 535, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1385, \"height\": 462, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1320, \"height\": 401, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 506, \"height\": 355, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1326, \"height\": 458, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 731, \"height\": 449, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 730, \"height\": 446, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1024, \"height\": 461, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1022, \"height\": 569, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1158, \"height\": 657, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1152, \"height\": 616, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-iipdupwysk/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1153, \"height\": 616, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1165, \"height\": 647, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 730, \"height\": 191, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 755, \"height\": 499, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1448, \"height\": 603, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1442, \"height\": 268, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 875, \"height\": 594, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 875, \"height\": 595, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 874, \"height\": 578, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 794, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 792, \"height\": 220, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-iipdupwysk/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 794, \"height\": 223, \"label\": \"Table\"}]"
motivation: 现有多模态脑图融合方法无法同时建模模态内拓扑和模态间耦合，导致融合不充分。
method: 提出Xdiff双图扩散机制，分别对模态内和模态间进行扩散，实现结构和功能信息的深度融合。
result: 在脑连接组分析中，融合图表示更准确反映大脑组织，优于现有融合方法。
conclusion: 所提双图扩散方法有效增强了多模态脑图融合的质量，有助于揭示脑连接组特性。
---

## Abstract
Multimodal brain graph fusion enables the integration of structural and functional information from multiple neuroimaging modalities to advance brain graph analysis. However, existing methods struggle to simultaneously capture (1) intra-modal dependencies (modality-specific topological information) and (2) inter-modal correlations (structural-functional coupling information), both of which are essential attributes specific to multimodal brain graph fusion. This limitation leads to inadequate brain structural-functional information fusion, ultimately failing to correctly reflect the true brain organization. To fill this gap, this paper proposes a novel Cross-modal Brain Graph Diffusion (Xdiff) approach. Xdiff presents a dual graph diffusion mechanism with intra- and inter-modal diffusion modules to capture intra-modal dependencies and inter-modal correlations, respectively. During the diffusion processes, we use an energy constraint function to ensure diffusion consistency, thereby enhancing model stability of learning from multimodal brain graphs. Furthermore, we design a prompt-based fusion strategy to flexibly integrate multimodal features for robust fusion. Empirically, Xdiff achieves state-of-the-art performance on three datasets for brain disorder detection tasks, with accuracy improvements of 4.6%, 2.5%, and 5.6%, respectively.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **研究背景**：脑图分析从单模态向多模态（尤其是结构-功能融合）发展。结构脑图（SBG）源于DTI，功能脑图（FBG）源于fMRI。有效融合两者对脑疾病检测至关重要。
- **关键挑战**：理想的多模态脑图融合需同时捕获两类信息：
  - **模态内依赖（intra-modal dependencies）**：每种模态特有的拓扑结构（如SBG的纤维连接模式、FBG的功能连接模式）。
  - **模态间相关（inter-modal correlations）**：结构-功能耦合关系（structural–functional coupling）。
- **现有方法局限**：
  - **分离式表示融合**（如RH-BrainFS）：先独立学习每个图的表示，再融合。❌ 无法在表示学习阶段捕获模态间相关。
  - **联合式表示融合**（如Cross-GNN, AL-NEGAT）：将两个图集成到统一框架中，便于提取模态间相关，但❌ 会平滑或稀释每个图的模态内依赖。
- **论文核心问题**：如何同时兼顾模态内依赖和模态间相关，实现更有效的脑结构-功能信息融合。

## 2. 提出的方法论

### 核心思想
提出 **Xdiff（Cross-modal Brain Graph Diffusion）**，在热扩散PDE框架下设计**双图扩散机制**，分别对模态内和模态间进行信息流动，并使用**能量约束函数**确保扩散一致性，最后通过**提示融合策略**集成多模态特征。

### 关键技术细节

#### 双图扩散机制（Dual Graph Diffusion）
- 基于图扩散PDE：`∂H(t)/∂t = D(A(t)⊙∇H(t))`，扩展为同时处理SBG和FBG。
- 每个节点的状态更新公式（公式3）：
  - 对结构图节点i：
    ```
    ∂h_si/∂t = Σ_j s_ij(t)[h_sj - h_si]  (模态内扩散)
            + c_si(t)[h_fi - h_si]       (从功能图的模态间扩散)
    ```
  - 对功能图节点i类似，包含模态内扩散和从结构图的模态间扩散。
- 模态间扩散系数 `c_si(t), c_fi(t)` 通过注意力机制动态计算，衡量两种模态节点表示的相似性。
- 采用显式欧拉法离散化（公式4），步长ρ需满足0<ρ<1（Theorem 1）。

#### 能量约束函数（Energy Constraint）
- 目的：控制扩散过程，最大化信息利用，保证扩散一致性，增强模型稳定性。
- 形式（公式5）：包含两项——模态内节点差异（`β(||h_i - h_j||^2)`）和模态间差异（`α(||H_f - H_s||^2_F)`）。
- 通过变分上界转化，使扩散系数与能量梯度关联（Proposition 2），确保能量单调递减（`E^(k) ≥ E^(k+1)`）。

#### 提示融合策略（Prompt-based Fusion, PF）
- 为每个模态设计**可学习的融合提示** `Z^s_fp` 和 `Z^f_fp`，拼接到对应节点表示后（公式9）。
- 然后通过拼接操作逐层融合（公式10）。
- 优势：提示携带模态特有线索，灵活指导融合过程，增强对噪声的鲁棒性。

### 算法流程
1. 输入SBG `(A_s, X_s)` 和 FBG `(A_f, X_f)`。
2. 初始化节点状态 `h_s(0)=x_s, h_f(0)=x_f`。
3. 重复K步双图扩散（公式8），每一步受能量约束限制。
4. 得到扩散后的表示 `Z_s, Z_f`。
5. 添加融合提示，拼接，逐层融合得到多模态表示 `Z_sf`。
6. 通过分类器（交叉熵损失）完成脑疾病检测任务。

## 3. 实验设计

### 数据集
- **ADNI**（阿尔茨海默病）：407名受试者（190 NC, 170 MCI, 47 AD），fMRI+DTI。
- **PPMI**（帕金森病）：158名受试者（49 PD, 69 Prodromal, 40 NC）。
- **4RTNI**（进行性核上性麻痹/皮质基底综合征）：78名受试者（31 PSP, 47 CBS）。
- 脑区划分：全部使用AAL图谱（116个ROI）。SBG用ROI间余弦相似度构建，FBG用Pearson相关系数构建。

### 对比方法
- **单模态基线**：A-GCL, STAGIN, GroupBNA, MCST-GCN, NeuroPath。
- **多模态基线**：Cross-GNN, RH-BrainFS, MTAN, AL-NEGAT。
- **图扩散模型**：Difformer, DDM, ECMGD。
- **传统机器学习**：SVM, Random Forest（以拼接特征为输入）。
- 所有基线使用各自最优配置。

### 评估指标
- 主指标：ACC, AUC。
- 辅助指标：F1, Sen, Spe（多分类用宏平均）。
- 每次实验5次随机运行取平均±标准差。

## 4. 资源与算力

- **GPU**：NVIDIA 3090，24GB显存。
- **软件**：PyTorch 2.2.0。
- **训练参数**：Adam优化器；学习率ADNI 5e-3，PPMI 1e-3，4RTNI 3e-3；epochs 200/300/100；权重衰减5e-4。
- **模型参数量**：ADNI 100K，PPMI 137K，4RTNI 212K。
- **训练时间**：约5-6秒/epoch（ADNI 5.89s, PPMI 4.28s, 4RTNI 5.16s）。
- **数据划分**：70%训练，10%验证，20%测试（随机划分）。

## 5. 实验数量与充分性

### 实验组别
1. **主结果比较**（Table 1, Table 4）：在3个数据集上与14+种基线对比ACC, AUC, F1, Sen, Spe。
2. **消融实验**：
   - 双图扩散机制：分别移除模态内、模态间、二者全移除（Table 2, 5）。
   - 能量约束：对比有无能量约束的稳定性（Fig 4）。
   - 提示融合：比较PF与Hadamard乘积、求和、拼接、注意力、Transformer等6种融合方式，并在加入噪声（ratio=0.4, 0.8）后测试鲁棒性（Fig 5, Tables 6-8）。
3. **超参数分析**（Fig 6, 8, 9）：扩散层数K（1,2,4,8）和步长ρ（0.001,0.01,0.05,0.1）；融合层数L（1,2,4,8）和提示长度U（2,4,8）。
4. **能量权重敏感性**（Tables 9-11）：w1,w2取0.25,0.50,0.75的组合。
5. **可解释性分析**（Fig 10-12）：SHAP值可视化关键脑区。

### 充分性评价
- **客观性**：对比基线全面，包括单模态、多模态、图扩散、传统ML；使用官方最优配置；5次重复报告均值和标准差。
- **公平性**：所有数据集一致划分，评价指标一致；消融实验设计合理（逐一移除组件）。
- **充分性**：实验覆盖了算法有效性、各组件贡献、参数敏感性、鲁棒性、可解释性，基本无遗漏。

## 6. 主要结论与发现

- **Xdiff在所有三个数据集上均达到SOTA**：ACC分别提升4.6%（ADNI）、2.5%（PPMI）、5.6%（4RTNI），AUC也有显著提升（除PPMI AUC略低于Cross-GNN，但ACC更高）。
- **双图扩散机制至关重要**：同时保留模态内和模态间信息比只保留一种或都不保留效果好；移除任意一个都会显著下降。
- **能量约束增强模型稳定性**：对比无能量约束的变体，Xdiff的95%置信区间更窄（ADNI: 70.1-71.5 vs 67.0-72.2；PPMI: 62.4-62.6 vs 60.6-64.4）。
- **提示融合策略提升鲁棒性**：在噪声干扰下，PF的精度下降最小（ADNI无下降，PPMI下降2.1%，4RTNI下降2.2%），优于其他融合方式。
- **模型对超参数相对不敏感**：在K=1,2,4时性能稳定优于SOTA；融合层数L和提示长度U变化时性能波动小。
- **可解释性验证**：识别的关键脑区（如ADNI的Thalamus、Fusiform；PPMI的Rectus、Olfactory；4RTNI的Paracentral Lobule）与已知神经病理学一致。

## 7. 优点

1. **方法创新性强**：首次将图扩散PDE扩展到多模态脑图场景，同时处理模态内和模态间扩散，从物理过程角度统一了融合问题。
2. **数学理论扎实**：给出了能量约束的变分上界和收敛条件（Proposition 1, 2；Theorem 1），为离散化迭代提供理论基础。
3. **稳定性高**：能量约束使扩散过程能量单调递减，训练稳定、方差小。
4. **鲁棒性好**：提示融合可引导模型聚焦模态特有信息，对噪声不敏感。
5. **可解释性好**：SHAP分析揭示与疾病相关的脑区，增加生物学可信度。
6. **实验结果全面**：在三个疾病数据集上验证，覆盖多种对比方法和消融，且开源代码促进复现。

## 8. 不足与局限

1. **数据局限性**：仅使用三个公开数据集，样本量中等（最大ADNI 407例），且多模态脑图数据本身稀缺（如ABIDE只有fMRI），限制了模型在更广泛脑疾病（如自闭症、抑郁症）上的应用。
2. **数据集偏倚风险**：4RTNI样本量最小（78人），导致某些指标（特别是Spe.）方差较大，结果稳定性略差；PPMI数据类别不平衡（PD 49 vs Prodromal 69 vs NC 40）可能影响宏平均指标。
3. **计算资源细节未完全公开**：虽提及GPU和训练时间，但未说明是否需要多卡训练或内存占用峰值，对于资源有限的实验室复现有一定门槛。
4. **未与最新大模型对比**：论文截止日期为ICLR 2026，但未提及与新兴基础模型或大规模预训练模型的对比，可能未来需要补充。
5. **额外复杂性**：扩散层数K为4或更多时性能下降（过平滑或梯度消失），说明选择最佳层数需调参，不同数据集最优K不同。
6. **临床转化风险**：作者自身也指出AI诊断可能出错，模型仅应作为辅助工具，需要进一步临床验证才能在真实场景部署。

（完）

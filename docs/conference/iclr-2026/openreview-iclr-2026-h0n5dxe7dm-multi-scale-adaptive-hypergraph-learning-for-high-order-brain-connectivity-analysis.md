---
title: Multi-Scale Adaptive Hypergraph Learning for High-Order Brain Connectivity Analysis
title_zh: 多尺度自适应超图学习用于高阶脑连接分析
authors: "Jaeyoon Sim, Soojin Hwang, Seunghun Baek, Guorong Wu, Won Hwa Kim"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=h0N5dXe7Dm"
tags: ["query:fbn"]
score: 10.0
evidence: 超图学习用于高阶脑连接分析，阿尔茨海默病和帕金森病分类
tldr: 传统图模型仅考虑成对连接，无法捕捉脑区之间的高阶依赖关系。本文提出多尺度自适应超图学习，通过可学习的超边构建和尺度融合，捕获超越成对连接的高阶脑网络拓扑。在阿尔茨海默病和帕金森病分类任务上取得优越性能，为脑功能连接分析提供了更强表达力的框架。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1431, \"height\": 276, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1422, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1452, \"height\": 497, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1360, \"height\": 779, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1422, \"height\": 314, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1046, \"height\": 627, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1494, \"height\": 372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1444, \"height\": 528, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1358, \"height\": 729, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1131, \"height\": 699, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-h0n5dxe7dm/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1428, \"height\": 321, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1436, \"height\": 280, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1444, \"height\": 688, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1441, \"height\": 385, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1436, \"height\": 221, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1422, \"height\": 218, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1282, \"height\": 290, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 838, \"height\": 158, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1455, \"height\": 1070, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 600, \"height\": 150, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 718, \"height\": 294, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1203, \"height\": 727, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1431, \"height\": 251, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1434, \"height\": 190, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1228, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-h0n5dxe7dm/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 828, \"height\": 188, \"label\": \"Table\"}]"
motivation: 现有图方法仅建模成对脑区交互，缺乏对多个脑区间高阶依赖关系的建模能力，限制了疾病分类性能。
method: 提出多尺度自适应超图学习，动态构建超边并融合不同尺度信息，以捕获高阶脑网络连接模式。
result: 在阿尔茨海默病和帕金森病分类中取得优于传统图模型的结果。
conclusion: 自适应超图能更完整地建模脑区间复杂交互，提升神经退行性疾病早期诊断准确性。
---

## Abstract
Understanding complex interactions between brain regions is critical for early neurodegenerative disease classification such as Alzheimer’s Disease (AD) and Parkinson’s Disease (PD). Graph-based models are typically employed to investigate brain networks with regional features and their interconnectivity. However, traditional approaches primarily focus on pairwise node interactions between directly connected nodes, limiting their ability to capture higher-order dependencies from multiple brain regions. Although hypergraph-based approaches have been proposed to capture higher-order relations beyond pair-wise connectivity, many existing methods rely on predefined hyperedges or restrict learning to hyperedge weights, limiting their flexibility and ability to capture multi-resolution structural patterns. In this regard, we introduce an adaptive multi-scale hypergraph learning framework, i.e., MASH, which constructs hierarchical node features and dynamically learns high-order interaction through continuous hyperedge construction over multi-resolution graph signals. Through extensive experiments on brain network benchmarks, we demonstrate the superiority of MASH by improving classification of different disease stages. Our model further identifies key regions of interest (ROIs) and their group-wise interactions from the learned hyperedges that are associated with disease progression, highlighting its potential as a powerful tool for brain network analysis with neurodegenerative disorders.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：传统图模型（如GCN、GAT）仅关注成对节点交互，无法捕捉多个脑区间的高阶依赖关系；已有超图方法依赖预定义超边或仅学习超边权重，灵活性不足，难以捕获多分辨率结构模式。
- **背景**：神经退行性疾病（阿尔茨海默病AD、帕金森病PD）的早期诊断依赖于脑网络分析，但现有方法难以刻画多个脑区协同变化所体现的病理拓扑。
- **整体含义**：提出自适应多尺度超图学习框架MASH，通过动态构建超边并融合多尺度图信号，显式建模高阶脑区交互，提升疾病阶段分类性能并提供可解释的ROI重要性。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：结合多尺度图小波滤波与自适应超图学习，从不同尺度的图信号中动态生成超边（将多个节点连接为群组），并通过多尺度Transformer融合信息。
- **关键技术细节**：
  - **多尺度特征滤波**：利用光谱图小波变换（SGWT），对归一化拉普拉斯矩阵应用可学习的尺度参数 \(\{s_j\}_{j=0}^J\)，获得多分辨率节点特征 \(X_{s_j} = U g^2(s_j \Lambda) U^T X\)（低通+带通滤波器组）。
  - **超图结构学习**：对每个尺度 \(s_j\)，将特征线性映射后与可学习超边投影矩阵 \(\Phi_j \in \mathbb{R}^{d_h \times M}\) 相乘，再经ReLU、Softmax和TopK稀疏化得到归一化关联矩阵 \(\bar{H}_{s_j}\)。\(\bar{H}_{s_j}\) 的每行表示节点在各超边上的隶属概率，实现连续、可学习的超边。
  - **多尺度Transformer**：对每个尺度分别进行超图卷积（HGNN式），得到尺度感知节点表示后，输入Scale-Wise Self-Attention（SWSA）模块，每头关注一个尺度，通过自注意力融合全局信息，再经FFN与残差连接输出。
  - **理论性质**：命题1证明关联矩阵等价于对图小波表示的投影；命题2证明随尺度增大，超边内节点数单调增加，最终覆盖全图，解释了多尺度超边的扩张行为。
- **训练目标**：交叉熵损失 + 尺度L1正则化（确保尺度为正），端到端优化。

## 3. 实验设计
- **数据集**：
  - **ADNI**：650名受试者，5分类（CN/SMC/EMCI/LMCI/AD），使用DTI结构网络 + 多模态ROI特征（CT、FDG、AMY、TAU）。
  - **PPMI**：195名受试者，3分类（CN/Prodromal/PD），基于fMRI BOLD信号。
  - **零样本**：TaoWu、Neurocon（PD相关，仅测试）。
  - **额外**：ABIDE（自闭症，989名，2分类）。
- **基准（Baseline）**：共19种，分为图基（GCN, GAT, GCNII, BrainGNN, IBGNN, BrainGB, SGCN, BrainNetTF, ALTER, BioBGT, BQN）和超图基（HGNN, HNHN, UniGCNII, HyperDrop, dwHGCN, HyperGT, HyBRiD, DHHNN）。其中专门用于脑网络分析的方法用†标注。
- **评估**：5折交叉验证，报告Accuracy、Precision、Recall、F1-score的均值与标准差。

## 4. 资源与算力
- 文末附录C说明：所有实验在单个NVIDIA GeForce RTX 3090上运行，使用PyTorch，训练1000 epochs，batch size包含全部样本。未明确给出总训练时长或GPU数量（单卡），但指出运行时间可接受（MASH推理约9.98 ms/样本）。

## 5. 实验数量与充分性
- **主要实验**：两大数据集（ADNI 5分类、PPMI 3分类）完整对比19种基线（表1）。
- **零样本实验**：PPMI→TaoWu/Neurocon（表2）。
- **消融实验**：
  - 组件消融（表5）：去除多尺度滤波、超图结构学习、多尺度Transformer。
  - 模态消融（表8）：三模态留一（CT+AMY+FDG等四种组合）。
  - 双模态融合（图6）：六种配对。
  - 超参数敏感性（图5）：尺度数J、超边数M、邻域超边数η、嵌入维度d_h。
  - 稳定性分析（表4、图10、图11）：Kendall's τ、W、Jaccard相似度。
  - 初始化鲁棒性（表11）：5种初始化方案。
  - 滤波器组成（表12）：仅低通、仅带通、混合。
  - 超边结构动态性（表13）：与dwHGCN类比。
- **额外实验**：ABIDE数据集（表9）、临床评分回归（表10）。
- **充分性评价**：实验覆盖多领域（AD、PD、ASD），消融详尽，稳定性验证充分，对比基线丰富，公平性通过统一调参保证。但ADNI中AD类别仅12例，存在严重不平衡，论文未专门讨论如何处理（未使用重采样或加权损失）。

## 6. 论文的主要结论与发现
- **性能提升**：MASH在ADNI上Accuracy达93.2%（+2.4%p）、PPMI上76.8%（+3.9%p），所有指标均优于最优基线，尤其Recall提升显著（ADNI +4.6%p, PPMI +4.9%p）。
- **零样本泛化**：在PPMI→TaoWu/Neurocon中，MASH保持较高判别力，证明学到的是可迁移的PD结构特征。
- **可解释性**：通过超边激活度（聚合关联矩阵行和）识别出关键ROI：AD中双侧苍白球、壳核、丘脑、海马等；PD中杏仁核、丘脑、颞中回等。最显著超边揭示了对称的左右脑区共激活模式。
- **理论验证**：超边大小随尺度单调递增的命题得到实验验证（图7），表明模型能捕获从局部到全局的高阶交互层级。

## 7. 优点
- **方法创新**：首次将可学习多尺度图小波滤波与动态超边生成统一框架，无需预定义超边结构，灵活性高。
- **理论支撑**：用命题严格证明超边扩张与尺度关系，揭示模型行为。
- **可解释性强**：通过超边激活度和重要超边分析，定位与疾病相关的脑区及群体交互，具有生物学合理性。
- **实验全面**：覆盖多种疾病、跨数据集泛化、大量消融和稳定性分析，结果稳健。
- **实用性**：在部分模态缺失情况下仍保持高性能（表8），适合临床数据不完整场景。

## 8. 不足与局限
- **超参数依赖**：尺度数J和超边数M需要针对数据集调优，缺乏自动选择机制。
- **计算开销**：多尺度小波分解和超图卷积增加内存与计算，虽通过并行化缓解，但未与标准GNN做详尽效率对比。
- **类别不平衡**：ADNI中AD类别仅12例（占1.8%），论文未说明如何处理不平衡（如采样或加权），可能影响Recall的可靠性。
- **解释性验证有限**：虽然识别出重要ROI，但未与外部生物学验证（如基因表达、病理对照）关联，关联强度仅基于统计。
- **适用领域**：目前仅验证于脑网络分析，未推广到其他高阶关系场景（如社交网络、系统生物学），通用性待检验。
- **零样本评估**：仅使用PD数据集进行零样本，AD方面未做跨数据集验证。

（完）

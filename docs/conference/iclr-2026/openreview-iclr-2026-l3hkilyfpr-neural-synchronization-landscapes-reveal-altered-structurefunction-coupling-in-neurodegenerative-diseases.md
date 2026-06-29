---
title: Neural Synchronization Landscapes Reveal Altered Structure–Function Coupling in Neurodegenerative Diseases
title_zh: 神经同步景观揭示神经退行性疾病中结构-功能耦合的改变
authors: "Tianmu Hu, Jiaqi Ding, Guorong Wu, Tingting Dan"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=L3HkIlyfPR"
tags: ["query:fbn"]
score: 8.0
evidence: 通过库拉莫托启发的神经网络建模功能连接，研究神经退行中的结构-功能耦合
tldr: 理解结构连接与功能连接之间的变化耦合对揭示神经退行机制至关重要。本文借鉴库拉莫托模型，提出KM-Net，从神经影像中模拟神经振荡同步，定量刻画结构-功能耦合的异常。在阿尔茨海默病数据集上，KM-Net识别出与认知衰退显著相关的耦合模式，为探索脑网络动态提供了神经科学启发的计算工具。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 834, \"height\": 320}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1293, \"height\": 315}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1436, \"height\": 343}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1512, \"height\": 1162}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1454, \"height\": 660}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-l3hkilyfpr/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1388, \"height\": 248}]"
motivation: 现有方法难以理解神经退行中结构-功能耦合的改变机制。
method: 提出KM-Net，基于Kuramoto振荡同步原理建模功能连接，并分析结构-功能耦合异常。
result: 在神经退行性疾病数据中，KM-Net识别出与认知下降相关的耦合改变模式。
conclusion: 基于神经动力学的建模能揭示脑网络机制，为疾病早期检测提供新视角。
---

## Abstract
Modern neuroimaging technologies enable the study of structural connectivity (SC) and functional connectivity (FC) in vivo. However, due to the distinct biological underpinnings of SC and FC, understanding how the altered coupling mechanism is associated with the progression of neurodegeneration remains a challenge in the neuroscience field. Drawing inspiration from the rich neural dynamics captured by the Kuramoto model, we introduce a brain-inspired neural network, coined KM-Net, to explain cognitive behavior from neuroimages, which is rooted in the neuroscience principle of oscillatory synchronization.
Given that disrupted synchronization in neural oscillations closely underlines neurodegenerative diseases, we further extend KM-Net to an explainable deep model in the arena of disease early diagnosis.
By capturing the emergence of synchronized FC patterns from the underlying SC architecture, our approach provides a biologically informed representation for the dynamical system of functional fluctuations. We validate our novel computational framework through extensive experiments on a diverse set of neuroimaging cohorts, demonstrating its effectiveness in characterizing cognition-relevant brain fingerprint and disease-specific imaging biomarkers. 
Together, promising results indicate the potential of neural synchronization modeling for advancing computational neuroscience and improving the understanding of neurodegenerative diseases.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：如何从脑网络结构连接（SC）与功能连接（FC）的耦合机制中，理解并量化神经退行性疾病（AD、PD、FTD）的早期病理改变？
- **背景**：神经退行性疾病（ND）影响全球超5000万人，且目前缺乏疾病修饰疗法；早期诊断至关重要。SC–FC耦合是早期神经退变的敏感指标，但现有方法多基于统计相关性或黑箱深度学习，缺乏系统级、可解释的机制建模。
- **整体含义**：本文提出将神经振荡同步（phase synchronization）作为可量化的生物标志物，通过物理启发的深度模型（KM-Net）从SC预测FC，并捕捉疾病特异性的耦合改变，为早期检测和机制理解提供新工具。

## 2. 方法论
### 核心思想
- 借鉴Kuramoto相振子模型，将每个脑区建模为振荡器，学习其本征频率、相位交互与同步演化，从SC矩阵动态生成FC模式。
### 关键技术细节
- **KM-Net网络架构**（图2）：由三个模块组成：
  - **NeuroFreq模块**：通过可学习的反称矩阵 \(\Omega\)（\(\Omega = -\Omega^\top\)）参数化脑区的本征频率 \(\omega_i = \Omega_i f_i\)，避免固定分布假设。
  - **Sync模块**：引入可训练亲和矩阵 \(A\)，生成对称耦合矩阵 \(P = \frac12(A+A^\top)\odot S\)（\(S\)为SC），用于双向相位交互；并应用投影操作 \(\phi z_i = z_i - \langle z_i, f_i \rangle f_i\) 防止模态坍塌。
  - **Kuramoto求解器**：迭代积分更新方程 \(\frac{df_i}{dt} = \Omega_i f_i + \lambda \phi(s_i + \sum_j p_{ij} f_j)\)，每次迭代后进行球形投影 \(\zeta(f_i)=f_i/\|f_i\|\) 保证稳定性，并通过层次记忆（式4）递归整合过去状态，经L层后输出特征表示 \(\hat{F}\)。
- **损失函数**：交叉熵损失，基于最终特征进行疾病分类。
- **可解释生物标志物提取**：
  - 从特征表示提取瞬时相位 \(\hat{\theta}_i^l(t)\)，计算区域、子网络、全脑级别的Kuramoto序参量（KOP）。
  - 进一步定义**同步能量**（SynE，式5）：\( \text{SynE}_j = \frac{1}{TL}\sum_l\sum_t |R_j^l(t)|^2 \)，作为时间-层积分的时间不变标志物，衡量持久相位锁定的强度。

## 3. 实验设计
### 数据集
| 数据集 | 样本量 | 任务类型（分类） |
|--------|--------|------------------|
| ADNI   | 135    | 二分类（AD vs CN） |
| PPMI   | 175    | 四分类（PD, SWEDD, Prodromal, CN） |
| NIFD   | 1010   | 五分类（CN, LVPPA, BV, PNFA, SV） |

所有数据使用AAL116图谱划分为116个脑区，计算SC（DWI纤维追踪）和FC（BOLD相关性）。进一步将脑区归入6个子网络（默认模式、视觉、额顶、腹侧注意、感觉运动、小脑）。

### 对比方法（baseline）
- GCN, GIN, GAT, GCNII, GraphSAGE, SAN, GraphCON（均为图神经网络变体）
- 所有baseline以SC作为邻接矩阵、FC作为节点特征向量化后输入。
- 评估指标：准确率（Acc）、精确率（Pre）、F1-score，采用5折交叉验证。

### 实验充分性
- 在三个不同疾病、不同类别数的数据集上系统比较了8种方法，结果（图3）用柱状图呈现，差异显著性标记（*p<0.05）。
- 额外分析了KOP和SynE在疾病、年龄、性别分组下的变化（图4、5），包括子网络、迭代轨迹、能量统计。
- 未报告消融实验（如去掉投影、去掉层次记忆、改变层数等），但baseline对比已较全面。

## 4. 资源与算力
- **硬件**：8张NVIDIA H100 NVL GPU（每张94GB显存）。
- **超参数**：batch size 32，学习率1e-3，余弦退火调度，训练300 epochs。
- **推理速度**：KM-Net在ADNI上单次运行约1.02 ms（与SAN持平），约是GraphSAGE（0.57 ms）的1.8倍，但仍属毫秒级。

## 5. 实验数量与充分性
- **实验数量**：主要分类实验3组×8种方法；同步分析（KOP/SynE）包含3个数据集下疾病、年龄、性别、子网络等多维度比较（图4、5）；未提供详细消融实验。
- **充分性**：数据集规模中等（ADNI仅135人），但覆盖了三种主要ND；baseline覆盖了主流的图网络方法；诊断性能提升具有统计显著性。但缺少与非图网络方法（如SVM、RF）的对比，以及跨图谱（如Schaefer）的鲁棒性验证（作者在文中已指出该局限性）。
- **客观公平性**：所有方法使用相同预处理和图构建，5折交叉验证，结果公开，但有作者自行实现baseline的风险。

## 6. 主要结论与发现
1. **诊断性能**：KM-Net在所有三个数据集上均以显著差距优于所有baseline（Acc、Pre、F1），证明振荡同步建模能提取SC–FC耦合中的疾病敏感信息。
2. **神经同步标志物**：
   - 疾病组全脑KOP均值低于健康对照组（AD约5%，PD约10%，FTD<5%）。
   - 子网络KOP揭示疾病特异性：AD中默认模式网络（DMN）和视觉网络呈现**超同步**（KOP升高）；FTD中DMN同步下降；PPMI中额顶网络和小脑同步下降。
   - 同步能量（SynE）在AD和FTD中显著升高（持久性超同步），在PD中变化不显著（体现爆发式动力学）。
3. **机制洞察**：疾病组呈现“更少但更长的同步爆发”（global KOP低但SynE高），反映了适应性去同步能力的丧失。

## 7. 优点
- **生物物理启发的深度学习**：将Kuramoto模型嵌入神经网络，兼具图灵机表达力与神经科学可解释性。
- **新颖的可解释生物标志物**：从模型内部状态提取KOP和SynE，量化SC–FC耦合机制，层次化（区域、子网、全脑）分析疾病网络损伤拓扑。
- **跨疾病通用性**：在AD、PD、FTD三组独立队列上验证，方法框架不依赖特定疾病假设。
- **性能优异**：与现有GNN相比有显著提升，且计算开销可接受（毫秒级）。

## 8. 不足与局限
- **图谱依赖**：仅使用AAL116一种脑图谱，未验证跨图谱的稳定性（作者已承认）。
- **样本量有限**：ADNI仅135人，PPMI 175人，缺乏大规模独立验证集，可能限制泛化性。
- **消融研究缺失**：未系统评估各模块（无投影、无层次记忆、不同K值）对性能的影响。
- **对比方法不全面**：未与SVM、随机森林、MLP等非图方法对比；未与最新的SC–FC耦合特定模型（如静态+动态耦合特征+高斯朴素贝叶斯）直接比较。
- **临床转化距离**：同步能量等标志物尚无标准临床参考范围，需前瞻性纵向研究验证其预测价值。
- **年龄/性别分析较浅**：仅简单展示分组差异，未做协变量校正或回归分析。
- **重复性风险**：代码虽声明开源，但尚未正式发布，实验可完全复现性尚待确认。

（完）

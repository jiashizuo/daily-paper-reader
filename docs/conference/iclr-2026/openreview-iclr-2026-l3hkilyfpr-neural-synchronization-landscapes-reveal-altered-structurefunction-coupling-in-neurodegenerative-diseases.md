---
title: Neural Synchronization Landscapes Reveal Altered Structure–Function Coupling in Neurodegenerative Diseases
title_zh: 神经同步景观揭示神经退行性疾病中的结构-功能耦合改变
authors: "Tianmu Hu, Jiaqi Ding, Guorong Wu, Tingting Dan"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=L3HkIlyfPR"
tags: ["query:fbn"]
score: 9.0
evidence: 提出KM-Net深度学习模型分析神经退行性疾病的脑结构-功能耦合
tldr: 针对神经退行性疾病中结构-功能耦合改变难以建模的问题，提出基于Kuramoto模型的脑启发神经网络KM-Net。该模型从神经影像学习认知行为，并通过振荡同步机制刻画疾病相关的耦合异常。在神经退行性疾病数据集上验证了模型可有效区分疾病状态，为理解脑网络退化机制提供了新工具。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 834, \"height\": 320, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1293, \"height\": 315, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1436, \"height\": 343, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1512, \"height\": 1162, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-l3hkilyfpr/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1454, \"height\": 660, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-l3hkilyfpr/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1388, \"height\": 248, \"label\": \"Table\"}]"
motivation: 理解神经退行性疾病中结构连接与功能连接耦合改变的机制。
method: 基于Kuramoto模型构建KM-Net脑启发神经网络。
result: 模型能有效区分疾病状态并揭示耦合异常。
conclusion: 为研究神经退行性疾病的脑网络机制提供了新方法。
---

## Abstract
Modern neuroimaging technologies enable the study of structural connectivity (SC) and functional connectivity (FC) in vivo. However, due to the distinct biological underpinnings of SC and FC, understanding how the altered coupling mechanism is associated with the progression of neurodegeneration remains a challenge in the neuroscience field. Drawing inspiration from the rich neural dynamics captured by the Kuramoto model, we introduce a brain-inspired neural network, coined KM-Net, to explain cognitive behavior from neuroimages, which is rooted in the neuroscience principle of oscillatory synchronization.
Given that disrupted synchronization in neural oscillations closely underlines neurodegenerative diseases, we further extend KM-Net to an explainable deep model in the arena of disease early diagnosis.
By capturing the emergence of synchronized FC patterns from the underlying SC architecture, our approach provides a biologically informed representation for the dynamical system of functional fluctuations. We validate our novel computational framework through extensive experiments on a diverse set of neuroimaging cohorts, demonstrating its effectiveness in characterizing cognition-relevant brain fingerprint and disease-specific imaging biomarkers. 
Together, promising results indicate the potential of neural synchronization modeling for advancing computational neuroscience and improving the understanding of neurodegenerative diseases.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：神经退行性疾病（AD、PD、FTD）早期诊断困难，结构连接（SC）与功能连接（FC）耦合的改变被认为是早期生物标志物，但现有方法缺乏对耦合机制的系统性理解，且难以在跨疾病中保持可解释性。
- **整体含义**：通过建模脑区间的神经振荡同步，将SC约束下的FC涌现过程转化为可量化的生物标志物，从而提升对神经退行性疾病进展的理解和早期诊断能力。

## 2. 论文提出的方法论

### 2.1 核心思想
- 基于Kuramoto模型，设计一个可学习的脑启发神经网络 KM‑Net，模拟从SC到FC的相位同步过程。
- 将神经退行性疾病视为大规模同步失调，通过模型学习得到的同步特征用于疾病分类和生物标志物提取。

### 2.2 关键技术细节
- **NeuroFreq 模块**：通过反对称矩阵 Ω 学习每个脑区的固有频率 ωᵢ = Ωᵢfᵢ，避免固定分布假设。
- **Sync 模块**：利用可训练亲和矩阵 A 构建双向耦合矩阵 P = ½(A + Aᵀ) ⊙ S，并对更新施加投影操作 ϕ(zᵢ) = zᵢ − ⟨zᵢ, fᵢ⟩ fᵢ，保持振荡多样性。
- **Kuramoto 求解器**：迭代更新相位状态 dfᵢ/dt = ωᵢ + λ ϕ(sᵢ + ∑ pᵢⱼ fᵢ)，并用球面投影 ζ(f) = f/∥f∥ 保证数值稳定。跨 L 层递归更新：Fᵉ(t+1) = ζ(Fᵉ(t) + β dFᵉ/dt)。
- **分类损失**：使用交叉熵损失将最终表征 ˆF = ψᵋ⁻¹(Fᴸ) 映射到临床结局（健康/患病）。

### 2.3 生物标志物提取（KOP 与 SynE）
- **瞬时相位提取**：对每个节点的表征进行Hilbert变换，得到相位 ˆθ。
- **区域/子网络/全脑 Kuramoto 序参数（KOP）**：R(t) = |(1/N)∑ e^{iˆθ(t)}|。
- **同步能量（SynE）**：对时间和层维度积分平方序参数，SynEⱼ = (1/TL)∑ₜ∑ₗ |Rʲ(t)|²，反映子网络维持同步的能力。

## 3. 实验设计

### 3.1 数据集
- **ADNI**（阿尔茨海默病）：135人（AD 25 + CN 110），二分类。
- **PPMI**（帕金森病）：175人（PD、SWEDD、Prodromal、CN），四分类。
- **NIFD**（额颞叶痴呆）：1010人（CN、LVPPA、BV、PNFA、SV），五分类。

### 3.2 对比方法
- **GNN基线**：GCN、GIN、GAT、GCNII、GraphSAGE、SAN、GraphCON。
- 输入：向量化的FC作为节点特征，SC作为邻接矩阵。

### 3.3 评估指标与设置
- 指标：准确率、精确率、F1分数。
- 采用5折交叉验证，报告均值，并做配对t检验（p<0.05）。

## 4. 资源与算力

- **GPU**：8× NVIDIA H100 NVL（总显存94GB）。
- **超参数**：batch size 32，学习率1e-3，余弦退火调度，300个epoch。
- **运行时间**：KM‑Net每样本1.02ms（与SAN相当，约GraphSAGE的1.8倍），但未报告总训练时长。

## 5. 实验数量与充分性

- **分类实验**：在3个数据集上对比7种基线，共8个模型×3数据集=24组实验，结果显著。
- **生物标志物分析**：展示了全脑KOP、子网络KOP、迭代过程KOP轨迹、SynE在疾病/年龄/性别分组下的差异，共约6～8个子图。
- **不足之处**：未进行消融实验（如去除NeuroFreq、Sync、投影等模块），未与传统SC-FC耦合度量（如相关或通信模型）对比，也未在多图谱上验证。

## 6. 论文的主要结论与发现

1. **分类性能**：KM‑Net在三个数据集上均显著优于所有对比GNN方法。
2. **同步特征**：疾病组全脑KOP降低（AD ~5%，PD ~10%，FTD <5%），年龄和性别无显著差异。
3. **子网络特异性**：
   - AD：DMN和视觉网络出现高同步（代偿性过低）。
   - FTD：DMN低同步（前扣带回-额叶解耦）。
   - PD：额顶网络和小脑低同步（多巴胺耗竭导致环路失谐）。
4. **同步能量**：AD和FTD的SynE升高（持续性同步增强），PD变化不显著。
5. **整体模式**：疾病导致全局平均耦合减弱，但每次同步持续时间更长（更少但更持续的超同步发作）。

## 7. 优点

- **生物可解释性**：模型核心基于Kuramoto物理机理，所学特征直接对应神经振荡同步，可提取区域、子网络、全脑多层级的生物标志物。
- **跨疾病泛化能力**：在AD、PD、FTD三种不同疾病上均表现良好，且发现了各自特异性的同步异常模式。
- **计算效率可接受**：推理速度与SAN相当，适合临床常规使用。
- **数据驱动+先验知识**：通过可训练耦合矩阵在结构约束下学习功能动态，兼具灵活性和神经科学合理性。

## 8. 不足与局限

- **图谱依赖**：仅使用AAL116图谱，未在多图谱上验证稳健性（论文自身承认）。
- **缺乏消融实验**：未分析各模块（如频率学习、投影操作、记忆层数）对性能的贡献，难以判断关键设计。
- **数据集规模有限**：ADNI仅135人，类别不平衡（AD仅18.5%），小样本可能影响泛化。
- **对比基准局限**：仅对比了图神经网络，未与传统SC-FC耦合度量（如相关性、通信模型）或经典机器学习方法比较。
- **疾病分期粒度不足**：未分析不同严重程度（如MCI vs. AD；早期 vs. 晚期PD）下的同步差异。
- **统计报告不够详细**：仅给出p值，未提供效应量、置信区间或多重比较校正。
- **临床可操作性待验证**：模型输入需要同时采集DWI和rs-fMRI，且需标准化预处理，真实部署可能存在壁垒。

（完）

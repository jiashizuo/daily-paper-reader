---
title: "SSL-BN: Self-Supervised Learning Based on Structural Similarities in Brain Networks"
title_zh: "SSL-BN: 基于脑网络结构相似性的自监督学习"
authors: "Yicheng Leng, Eungjoo Lee"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=Yz3mfmNOt2"
tags: ["query:fbn"]
score: 9.0
evidence: 对脑网络进行自监督学习以用于下游疾病诊断，解决GNN和Transformer在稠密加权图上的挑战
tldr: fMRI脑网络的稠密加权边结构使GNN困难，而Transformer需要大量标注数据。本文提出SSL-BN，利用脑网络的结构相似性设计自监督预训练任务，学习鲁棒的脑网络表示。在下游的神经系统疾病分类任务中，SSL-BN在少样本场景下显著优于现有方法，为无标签脑网络分析提供了有效范式。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-yz3mfmnot2/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1447, \"height\": 484}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yz3mfmnot2/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 407, \"height\": 316}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yz3mfmnot2/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1421, \"height\": 535}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1240, \"height\": 598}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1431, \"height\": 365}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1304, \"height\": 613}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1227, \"height\": 296}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1421, \"height\": 595}]"
motivation: 脑网络的稠密加权边结构对GNN不友好，且标注数据稀缺限制Transformer应用。
method: 提出SSL-BN自监督框架，利用脑网络区域的结构相似性设计预训练任务，学习通用表示。
result: 在多个神经疾病分类任务中，SSL-BN在少标注情况下超越现有方法。
conclusion: 自监督学习能有效利用无标注脑网络数据，推动脑影像分析在数据稀缺场景下的应用。
---

## Abstract
Functional magnetic resonance imaging (fMRI) data provide critical information for the diagnosis of neurological disorders, as correlations among features of different regions of interest (ROIs) capture functional characteristics of the brain. Brain networks are an effective modeling paradigm for fMRI data, and recent works have explored GNN-based and Transformer-based approaches for brain network analysis. However, the dense and weighted edge structure of brain networks poses challenges for GNN-based methods, while Transformer-based methods typically require large amounts of labeled data. To address these issues, we propose a **S**elf-**S**upervised **L**earning framework for **B**rain **N**etworks (SSL-BN). Our approach pretrains a Brain Network Transformer by dispersing sample embeddings and refining them with a fixed, non-trainable matrix derived from a novel structural similarity measure, enabling contrastive representation learning without data augmentation. To our knowledge, SSL-BN is the first self-supervised framework specifically designed for brain networks. It employs a simple loss function, eliminates the need for augmentation, and significantly improves model performance on limited labeled data. Extensive experiments on the publicly available ABIDE dataset demonstrate that SSL-BN achieves state-of-the-art performance compared to prior methods.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **问题**：功能磁共振成像(fMRI)数据对神经疾病诊断至关重要，脑网络分析常采用图神经网络(GNN)和Transformer方法。但脑网络具有**稠密且加权的边结构**（完全连通图，每条边携带独特的相关性测量），这使得GNN方法难以有效处理；Transformer方法虽能建模区域间关系，但通常需要**大量标注数据**，而脑影像标注成本高昂。
- **动机**：现有自监督学习方法（如图对比学习）依赖**数据增强**来生成正样本对，但对脑网络而言，设计合理的数据增强策略非常困难（例如随机掩码会破坏相关性矩阵的语义）。因此需要一种**专门针对脑网络**的自监督框架，避免数据增强，同时提升模型在少量标注样本下的诊断性能。
- **整体含义**：本文首次提出面向脑网络的自监督学习框架SSL-BN，通过探索样本间的**结构相似性**构建对比学习目标，在不依赖标注和增强的情况下预训练编码器，显著提升少样本场景下的疾病分类准确率。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：将整个数据集视为一个**数据集图(Dataset Graph)**，每个样本（脑网络实例）作为节点，节点间的边权重由一种专门设计的**结构相似性度量(struct_sim)** 定义。通过嵌入分散(embedding dispersion)和对比精炼(contrastive refinement)两个步骤，使相似样本的嵌入在表示空间中靠近，不相似样本远离。
- **关键技术细节**：
  1. **结构相似性度量**(公式3-4)：根据脑网络相关性矩阵中每对ROI之间的相关值，将其分类为负相关(NC)、不相关(UC)、正相关(PC)三类，并赋予不同权重（α1=2, α2=0.5, α3=-1, α4=-0.5）。两个矩阵的分类对匹配越多，相似度越高。最终得到相似矩阵S。
  2. **数据集图构建**：将所有样本作为节点，S作为边特征，形成GD=(D, S)。
  3. **嵌入分散**(公式7)：对每个样本的嵌入进行L2归一化后，计算所有嵌入到其质心的距离平方和，并最大化该距离（即最小化负距离平方和），使所有嵌入均匀分布在单位超球面上。损失函数L_disp = -1/N ∑ ||ẽ_i - c||²₂，收敛于-1。
  4. **对比精炼**(公式8-11)：通过一个**非可训练**的参数矩阵Λ对分散后的嵌入进行线性变换E' = ΛE。Λ由中心化的相似矩阵S̃与角度权重矩阵Ω逐元素相乘得到。Ω的设计：当S̃[i,j]>0时，Ω=0.5(1-cos_sim)；当S̃[i,j]<0时，Ω=0.5(1+cos_sim)；否则为0。这样使得相似样本的嵌入角度减小（靠近），不相似样本的角度增大（远离）。该操作无需训练，仅在微调阶段每个mini-batch中重复应用。
  5. **编码器**：采用Brain Network Transformer (BrainNetTF)，输入为相关性矩阵C，输出嵌入。
- **算法流程**：预处理得到相关性矩阵 → 计算结构相似性矩阵S → 预训练阶段：用L_disp分散嵌入（50 epoch，Adam lr=0.0001）→ 微调阶段：在每个batch内构建batch图，执行对比精炼后送入分类器（交叉熵损失，200 epoch，lr=1e-5, weight decay=1e-5）。

### 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法
- **数据集**：
  - **ABIDE**：自闭症脑成像数据交换，1009个样本（516 ASD，其余对照），每个样本200个ROI，200×200相关性矩阵。主要实验。
  - **ADNI**：阿尔茨海默病神经影像学倡议，102 AD + 102 CN，131个ROI，131×131矩阵。附录A.1中辅助实验。
- **Benchmark**：采用2:1:7随机划分训练/验证/测试集，重复5次取均值和标准差。主要评估指标：Accuracy, AUROC, Sensitivity, Specificity，以AUROC为选优标准。
- **对比方法**：
  - 监督GNN：GCN, GAT, GraphSAGE（基于相关性矩阵阈值化构建边）。
  - 图自监督：InfoGraph, SGRL, GraphSSL等（通用图方法）。
  - 通用对比学习：SimCLR, MoCo（将相关性矩阵视为图像，采用随机掩码增强）。
  - 无预训练的BrainNetTF（作为基准）。
- **消融实验**：移除分散步骤、替换结构相似性为余弦相似度、仅用S̃或仅用Ω、移除对比精炼等。

### 4. 资源与算力
- **明确说明**：论文第6节“Reproducibility Statement”中指出：“We adopt a single NVIDIA RTX A6000 GPU for all the experiments.” 未提供训练总时长或具体epoch时间。预训练50 epoch，微调200 epoch，batch size 64，Adam优化器。

### 5. 实验数量与充分性
- **实验数量**：
  - 主要对比实验：在ABIDE上对比了10种方法（GCN, GAT, GraphSAGE, InfoGraph, SGRL, SimCLR两种掩码策略, MoCo两种掩码策略, SSL-BN, BrainNetTF）。
  - ADNI实验：附录A.1，对比了GCN, GAT, InfoGraph, SSL-BN, BrainNetTF。
  - 消融实验：在ABIDE上做了6种变体（w/o dispersion, w/ cos similarity, w/ only S̃, w/ only Ω, w/o refinement, SSL-BN完整版）。
  - 超参数实验：附录A.2和A.3分别对GNN阈值和SimCLR/MoCo掩码比例进行了网格搜索。
- **充分性**：实验设计较为全面，覆盖了不同方法家族和监督/自监督范式，消融实验验证了各组件必要性。但**仅在两个数据集上验证**（ABIDE规模较大，ADNI较小），且ADNI上SSl-BN提升有限（主要因为Transformer在该小数据集上本身较弱）。整体结论有数据支撑，但**缺乏跨疾病类型或更多样化的脑网络数据集**（如精神分裂症、帕金森等），可能影响泛化性。

### 6. 论文的主要结论与发现
- SSL-BN是**首个专门为脑网络设计的自监督学习框架**，无需数据增强，仅用单一损失函数即可实现有效预训练。
- 在ABIDE数据集上，SSL-BN在Accuracy (67.80%)、AUROC (73.73%)、Specificity (68.58%)上显著优于所有对比方法；Sensitivity略低于部分方法但整体平衡。
- 消融实验表明：**嵌入分散**和**对比精炼**均为必要组件；结构相似性度量优于余弦相似度；联合使用S̃和Ω比单独使用更好。
- 在ADNI上，虽然GCN/GAT本身优于Transformer，但SSL-BN预训练仍能提升BrainNetTF的性能，验证了方法的有效性。
- 脑网络中的**稠密加权边**导致传统图增强策略失效，而基于结构相似性的自监督方法能更合理地挖掘样本间关系。

### 7. 优点：方法或实验设计上的亮点
- **方法创新**：
  - 提出**结构相似性度量**，将相关性矩阵的数值关系转化为三类离散模式，并赋予不同权重，更贴合脑功能连接的实际意义。
  - 利用**数据集图**和**非可训练矩阵**实现对比精炼，避免了复杂的数据增强和额外损失项，训练简单高效。
  - 嵌入分散+线性变换的机制可解释性强，几何意义清晰。
- **实验设计**：
  - 对比了多个通用对比学习基线（SimCLR, MoCo），并探索了两种不同的增强策略（掩码时间序列/掩码相关性矩阵），显示了随机掩码对脑网络的无效性。
  - 消融实验系统，验证了每个组件的贡献。
  - 代码将开源，保证可重复性。

### 8. 不足与局限
- **实验覆盖有限**：仅使用ABIDE和ADNI两个数据集，且ADNI样本量小，SSL-BN提升不够显著。未在更多神经疾病数据集（如焦虑症、抑郁症、精神分裂症）上验证。
- **数据集图构建的计算开销**：结构相似性需计算所有样本对（N×N），当数据集很大时（例如>10000）可能成为瓶颈。论文未讨论扩展性。
- **编码器依赖**：采用BrainNet Transformer，若换成其他编码器（如GNN）可能效果不同。未做编码器无关性验证。
- **微调策略**：对比精炼仅在每个mini-batch内进行，论文声称“整体效果逐渐逼近数据集图”，但未提供理论或实验证据证明这种渐近性。
- **超参数θ=0.3**：通过大量实验确定，但未讨论θ的敏感性。不同脑网络（如不同功能连接强度）可能需要不同阈值。
- **偏差风险**：ABIDE数据集多中心，但未讨论中心效应；ADNI中AD和CN样本平衡，但未考虑人口统计因素。
- **临床应用局限**：方法仅提升了分类准确率，但未进行可解释性分析（如哪些ROI更重要），不利于临床理解。

（完）

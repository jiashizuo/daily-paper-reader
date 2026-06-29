---
title: "SSL-BN: Self-Supervised Learning Based on Structural Similarities in Brain Networks"
title_zh: SSL-BN：基于脑网络结构相似性的自监督学习
authors: "Yicheng Leng, Eungjoo Lee"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=Yz3mfmNOt2"
tags: ["query:fbn"]
score: 9.0
evidence: fMRI脑网络自监督学习用于神经疾病诊断
tldr: fMRI脑网络分析中，GNN难以处理稠密加权边，Transformer需要大量标注数据。本文提出SSL-BN，利用结构相似性进行自监督预训练，在脑网络下游分类任务上仅需少量标注即可取得优异性能。在多种神经疾病诊断中验证了有效性，为基于fMRI的脑网络分析提供了高效预训练范式。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-yz3mfmnot2/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1447, \"height\": 484, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yz3mfmnot2/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 407, \"height\": 316, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-yz3mfmnot2/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1421, \"height\": 535, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1240, \"height\": 598, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1431, \"height\": 365, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1304, \"height\": 613, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1227, \"height\": 296, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-yz3mfmnot2/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1421, \"height\": 595, \"label\": \"Table\"}]"
motivation: fMRI脑网络结构稠密且标注数据有限，现有GNN和Transformer方法各有限制，需要自监督预训练以充分利用无标注数据。
method: 提出自监督学习框架SSL-BN，利用脑网络结构相似性设计预训练任务，在下游任务中微调。
result: 在多个神经疾病诊断数据集上，仅用少量标注即达到与全监督方法相当的性能。
conclusion: 自监督预训练能有效利用无标注fMRI脑网络数据，提升诊断模型的数据效率。
---

## Abstract
Functional magnetic resonance imaging (fMRI) data provide critical information for the diagnosis of neurological disorders, as correlations among features of different regions of interest (ROIs) capture functional characteristics of the brain. Brain networks are an effective modeling paradigm for fMRI data, and recent works have explored GNN-based and Transformer-based approaches for brain network analysis. However, the dense and weighted edge structure of brain networks poses challenges for GNN-based methods, while Transformer-based methods typically require large amounts of labeled data. To address these issues, we propose a **S**elf-**S**upervised **L**earning framework for **B**rain **N**etworks (SSL-BN). Our approach pretrains a Brain Network Transformer by dispersing sample embeddings and refining them with a fixed, non-trainable matrix derived from a novel structural similarity measure, enabling contrastive representation learning without data augmentation. To our knowledge, SSL-BN is the first self-supervised framework specifically designed for brain networks. It employs a simple loss function, eliminates the need for augmentation, and significantly improves model performance on limited labeled data. Extensive experiments on the publicly available ABIDE dataset demonstrate that SSL-BN achieves state-of-the-art performance compared to prior methods.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：fMRI 脑网络对于神经疾病诊断至关重要，但其结构特点是全连接、稠密加权的边缘，导致两种主流方法均存在局限：
  - GNN 难以处理非二值的稠密边，简单阈值化会丢失信息。
  - Transformer 方法需要大量标注数据，而医学标注稀缺。
  - 现有图自监督方法依赖数据增强，但脑网络的全连通特性和每个边的独特测量值使得产生有意义的增强非常困难。
- **动机**：设计第一个专门针对脑网络的自监督预训练框架，避免数据增强，利用数据集样本间的结构相似性进行对比学习，从而在仅有少量标注数据时提升下游诊断性能。
- **意义**：为 fMRI 脑网络分析提供了一种高效、简单的自监督范式，显著降低了模型对标注数据的依赖。

## 2. 方法论：核心思想、关键技术细节
### 核心思想
- 构建**数据集图**（Dataset Graph, \(G_D\)）：将数据集中的每个脑网络样本视为节点，节点间的边特征定义为**结构相似性**（Structural Similarity）。
- 对编码器（采用 BrainNet Transformer）输出的嵌入进行**分散**（Dispersion），使其均匀分布在单位超球面上。
- 通过一个**非可训练**的参数矩阵（基于结构相似性和嵌入间角度）进行**对比细化**（Contrastive Refinement），使得相似样本的嵌入靠近，不相似样本的嵌入远离。
- 整个过程无需数据增强，仅用单一损失函数完成预训练。

### 关键技术细节
1. **结构相似性计算**  
   - 将脑网络相关性矩阵 \(C\) 中的每个元素 \(c_{ij}\) 分为三类：负相关（NC, \(c < -\theta\)）、无相关（UC, \(-\theta \le c \le \theta\)）、正相关（PC, \(c > \theta\)），文中取 \(\theta = 0.3\)。
   - 定义函数 \(f_{\text{corr}}(x, y)\)，根据两个矩阵对应位置所属类别赋予不同权重（\(\alpha_1 > \alpha_2 > 0 > \alpha_4 > \alpha_3\)）。
   - 结构化相似度 \( \text{struct\_sim}(C_m, C_n) = \sum_{i,j} f_{\text{corr}}(c_{m}^{ij}, c_{n}^{ij}) \)。
   - 实际实现中通过三个矩阵 \(P_1, P_2, P_3\) 的乘法高效计算（等价于 \(\alpha_1=2, \alpha_2=0.5, \alpha_3=-1, \alpha_4=-0.5\)）。

2. **嵌入分散（Dispersion Loss）**  
   - 对嵌入进行 L2 归一化，然后计算：
     \[
     \mathcal{L}_{\text{disp}} = -\frac{1}{N}\sum_{i=1}^{N} \|\tilde{e}_i - \mathbf{c}\|_2^2, \quad \mathbf{c} = \frac{1}{N}\sum_{i=1}^{N} \tilde{e}_i
     \]
   - 该损失使所有归一化嵌入在单位超球面上尽可能分散，收敛到 -1，对应嵌入均匀散布。

3. **对比细化（Contrastive Refinement）**  
   - 通过线性变换 \(E' = (\tilde{S} \odot \Omega)E\) 实现，其中：
     - \(\tilde{S}\) 是中心化并缩放到 \([-1,1]\) 的相似矩阵。
     - \(\Omega\) 的每个元素根据余弦相似度调整：当 \(\tilde{S}[i,j] > 0\) 时 \(\Omega[i,j] = 0.5(1 - \cos(\angle(e_i,e_j)))\)；当 \(\tilde{S}[i,j] < 0\) 时 \(\Omega[i,j] = 0.5(1 + \cos(\angle(e_i,e_j)))\)；否则为 0。
   - 矩阵 \(\tilde{S} \odot \Omega\) 不参与训练（非可训练），仅在微调阶段在每个 mini-batch 内应用，模拟全局图表征。

### 算法流程
- **预训练阶段**：编码器 + 嵌入分散损失 \(\mathcal{L}_{\text{disp}}\)（50 epoch）。
- **微调阶段**：在 BrainNetTF 默认设置下，每个 batch 内应用对比细化，然后通过分类器进行有监督训练（200 epoch，batch size 64，学习率 1e-5）。

## 3. 实验设计
- **数据集**：
  - **ABIDE**（主要实验）：1009 个样本（ASD vs 正常对照），200×200 相关矩阵，来自 17 个国际站点，Craddock 200 图谱。
  - **ADNI**（附录）：204 个样本（AD vs CN），131×131 相关矩阵，使用 fMRIPrep 和 XCP-D 预处理。
- **Benchmark**：与三类方法比较：
  - 监督 GNN：GCN、GAT、GraphSAGE（以不同阈值二值化相关矩阵作为邻接矩阵）。
  - 图自监督方法：InfoGraph、SGRL、GraphSSL。
  - 通用对比学习方法：SimCLR 和 MoCo（对脑网络采用两种增强策略：随机掩码 BOLD 信号或随机掩码相关矩阵）。
  - 无预训练的 BrainNetTF（作为基线）。
- **评价指标**：Accuracy、AUROC、Sensitivity、Specificity，以 AUROC 为主要指标；数据按 2:1:7 划分训练/验证/测试，重复 5 次报告均值和标准差。

## 4. 资源与算力
- 论文在 **Reproducibility Statement** 中明确：**“We adopt a single NVIDIA RTX A6000 GPU for all the experiments.”**
- 预训练 50 个 epoch，微调 200 个 epoch，具体总训练时间未提及，但框架简单，算力需求不高。

## 5. 实验数量与充分性
- **主要对比实验**：在 ABIDE 上包含 **10 种方法**的全面比较（含不同超参数设置）。在 ADNI 上比较了部分方法（GCN、GAT、InfoGraph、SSL-BN、BrainNetTF）。
- **消融实验**：在 ABIDE 上进行了 **5 组消融**：
  - 去除分散
  - 用余弦相似度替代结构化相似度
  - 仅用 \(\tilde{S}\)
  - 仅用 \(\Omega\)
  - 去除对比细化
  每组报告均值±标准差。
- **超参数敏感性**：对 GNN 的不同阈值、SimCLR/MoCo 的不同掩码比例进行了多组实验并报告最佳结果。
- **评价**：实验设计规范，多次重复消除随机性，消融覆盖完整，对比方法广泛。但依然存在局限：ADNI 数据量小，部分方法（如更先进的 GNN 变体 BrainGNN）未纳入；且仅测试了两个数据集，泛化性需进一步验证。

## 6. 主要结论与发现
- SSL-BN 在 **ABIDE** 数据集上取得最高 Accuracy（67.80%）和 AUROC（73.73%），显著优于所有监督 / 自监督基线。
- 消融证明：**分散**、**结构化相似度**、**联合使用 \(\tilde{S}\) 和 \(\Omega\)** 以及**对比细化**均对性能有贡献。
- 在 **ADNI** 上，虽然方法不如 GCN/GAT（因数据集小且 Transformer 优势未充分发挥），但 SSL-BN 仍为 BrainNetTF 带来明显提升，验证了其通用性。
- 该方法是**首个无需数据增强**的脑网络自监督框架，简单有效。

## 7. 优点
- **创新性**：首个针对脑网络专门设计的自监督框架，解决了脑网络稠密全连接带来的增强困难。
- **简洁性**：仅用单一损失函数 + 非可训练矩阵变换，无需复杂数据增强或多损失联合。
- **有效性**：在 ABIDE 上实现 SOTA，在 ADNI 上验证迁移能力。
- **实验规范**：多次重复、标准差报告、消融全面、超参数调优充分。
- **可复现**：承诺公开代码。

## 8. 不足与局限
- **域适应性**：在 ADNI 上效果落后于 GCN/GAT，说明方法对数据规模或疾病类型可能敏感，需要更多验证。
- **超参数依赖**：结构化相似度的 \(\theta\)（0.3）需针对不同数据集调整，可能影响泛化。
- **实验覆盖**：仅两个公开数据集（ABIDE, ADNI），且 ADNI 样本量小；未与其他先进脑网络自监督（如 BrainGNN 结合自监督）比较。
- **实现限制**：对比细化仅在 mini-batch 内进行，与全局数据集图存在偏差；若数据集动态增长需要重建相似矩阵。
- **偏差风险**：ABIDE 数据来自多个站点，可能存在站点效应，论文未讨论跨站点泛化或协变量校正。
- **可解释性**：未对学习到的嵌入进行语义分析或可视化验证其与临床概念的关系。

（完）

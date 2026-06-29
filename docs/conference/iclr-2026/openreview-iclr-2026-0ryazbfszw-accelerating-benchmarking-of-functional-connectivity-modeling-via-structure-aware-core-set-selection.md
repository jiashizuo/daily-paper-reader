---
title: Accelerating Benchmarking of Functional Connectivity Modeling via Structure-aware Core-set Selection
title_zh: 通过结构感知核心集选择加速功能连接建模基准测试
authors: "Ling Zhan, Zhen Li, Junjie Huang, Tao Jia"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=0RYazbfSzW"
tags: ["query:fbn"]
score: 9.0
evidence: 功能连接建模基准测试加速
tldr: fMRI功能连接建模方法众多，穷举基准测试计算昂贵。本文提出结构感知对比学习核心集选择（SCLCS），从数据中选取代表性核心集，保持FC算子的性能排名。该方法显著降低基准测试计算成本，且排名一致性高，使全面评估成为可能。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-0ryazbfszw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1296, \"height\": 628, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-0ryazbfszw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1405, \"height\": 490, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-0ryazbfszw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1440, \"height\": 355, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-0ryazbfszw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 912, \"height\": 541, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-0ryazbfszw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1446, \"height\": 1308, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-0ryazbfszw/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1300, \"height\": 990, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-0ryazbfszw/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1434, \"height\": 922, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-0ryazbfszw/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1297, \"height\": 996, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-0ryazbfszw/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1149, \"height\": 490, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1445, \"height\": 465, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1295, \"height\": 351, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1444, \"height\": 463, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1449, \"height\": 249, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1035, \"height\": 415, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1445, \"height\": 426, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1445, \"height\": 427, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1439, \"height\": 844, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1442, \"height\": 439, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1438, \"height\": 442, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1441, \"height\": 337, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1432, \"height\": 495, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-0ryazbfszw/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 853, \"height\": 1394, \"label\": \"Table\"}]"
motivation: 数百种FC建模方法在大规模fMRI数据集上的穷举评估计算不可行。
method: 基于结构感知对比学习选择保持排名的核心子集（SCLCS）。
result: 核心集大幅减少计算量，同时排名一致性接近全量评估。
conclusion: 核心集选择策略能高效可靠地加速FC基准测试。
---

## Abstract
Benchmarking the hundreds of functional connectivity (FC) modeling methods on large-scale fMRI datasets is critical for reproducible neuroscience. However, the combinatorial explosion of model–data pairings makes exhaustive evaluation computationally prohibitive, preventing such assessments from becoming a routine pre-analysis step. To break this bottleneck, we reframe the challenge of FC benchmarking by selecting a small, representative *core-set* whose sole purpose is to preserve the relative performance ranking of FC operators. 
We formalize this as a ranking-preserving subset selection problem and propose **S**tructure-aware **C**ontrastive **L**earning for **C**ore-set **S**election (**SCLCS**), a self-supervised framework to select these core-sets. **SCLCS** first uses an adaptive Transformer to learn each sample's unique FC structure. It then introduces a novel **S**tructural **P**erturbation **S**core (**SPS**) to quantify the stability of these learned structures during training, identifying samples that represent foundational connectivity archetypes. 
Finally, while **SCLCS** identifies stable samples via a top-$k$ ranking, we further introduce a **density-balanced sampling strategy** as a necessary correction to promote diversity, ensuring the final core-set is both structurally robust and distributionally representative. On the large-scale REST-meta-MDD dataset, **SCLCS** preserves the ground-truth model ranking with just 10% of the data, outperforming state-of-the-art (SOTA) core-set selection methods by up to 23.2% in ranking consistency (nDCG@k). To our knowledge, this is the first work to formalize core-set selection for FC operator benchmarking, thereby making large-scale operators comparisons a feasible and integral part of computational neuroscience. Code is publicly available on: [https://github.com/lzhan94swu/SCLCS](https://github.com/lzhan94swu/SCLCS)

---

## 论文详细总结（自动生成）

# 论文中文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：功能性连接（FC）建模是神经影像学的基础，但候选的统计成对交互（SPI）算子多达数百种。不同算子会得到截然不同的 FC 拓扑和科学结论，因此系统性基准测试对保证结果的可重复性至关重要。
- **核心瓶颈**：在大规模 fMRI 数据集上对全部 SPI 进行穷举评估计算成本极高（例如，在 REST-meta-MDD 数据集上，全部 266 个 SPI 的完整基准测试预计需要超过 990 CPU 天），使得这种评估无法成为常规的预分析步骤。
- **核心问题**：如何以极低的计算成本，仍能可靠地保持数百个 SPI 算子的性能排名顺序。
- **整体含义**：本文首次将 FC 算子基准测试的加速问题形式化为“排名保持的核心集选择”问题，提出一种结构化、自监督的框架 SCLCS，使得大规模算子比较成为计算神经科学中可行的、不可或缺的一步。

## 2. 方法论

- **核心思想**：选取一个小的、具有代表性的核心子集，该子集的唯一目的是保持 SPI 算子在完整数据集上的相对性能排名，而不是训练单一的预测模型。

- **关键技术细节**：
  - **自适应 Transformer 编码器**：将 fMRI 时间序列（N 个 ROI × T 个时间点）输入 Transformer，通过可学习的注意力头权重融合（而非简单平均）得到每个样本的 FC 结构矩阵 A ∈ ℝ^(N×N)。理论证明（Theorem 2）该架构能够通用逼近任何连续的 SPI 映射。
  - **结构扰动分数（SPS）**：量化训练过程中样本特定 FC 结构的稳定性。定义为所有训练 epoch 间相邻注意力矩阵的 Frobenius 范数差的平方平均。低 SPS 的样本代表更稳定的连接原型，是核心集的候选。
  - **密度平衡采样**：为避免单纯的低 SPS top-k 选择导致多样性缺失，先剔除高 SPS（最不稳定）的 β 分位数样本，然后在剩余稳定池中使用核密度估计（KDE）对 SPS 密度较低的样本进行加权采样，从而兼顾稳定性和多样性。
  - **对比学习**：使用身份对比损失（同一被试的不同时间片段为正对）进行自监督训练，使模型学习到稳定的、个体特有的“脑指纹”表征，而非特定于 MDD/HC 分类任务。

- **算法流程**（文字描述）：
  1. 对 fMRI 数据分窗获得多个样本；
  2. 使用自适应 Transformer 编码每个样本的同步结构（注意力矩阵）；
  3. 在训练过程中逐 epoch 记录注意力矩阵，计算每个样本的 SPS；
  4. 基于 SPS 筛选稳定样本（低 SPS 分位数内）；
  5. 在稳定池上用 KDE 估计密度，按密度倒数加权进行不重复采样，得到最终 core‑set。

## 3. 实验设计

- **数据集**：使用 REST‑meta‑MDD（大型多站点静息态 fMRI 数据集），选取 904 名被试（458 MDD，446 HC），来自 7 个站点。每个被试通过滑动窗口（窗长 70 TR，步长 35）生成 5 个动态样本，共 4520 个样本。ROI 为 DMN 的 33 个区域。
- **基准任务**：
  - **脑指纹识别**（Brain Fingerprinting）：根据 FC 矩阵区分个体，要求细粒度的个体特异性信号。
  - **MDD 诊断**：区分 MDD 患者与健康对照，依赖群体层面模式。
- **评估指标**：
  - SPI 排序一致性：用 nDCG@k (k=5,10,20) 衡量 core‑set 诱导的 SPI 排名与全量数据集排名之间的相似度。
  - 样本覆盖平衡性：比较各方法在被试和 MDD/HC 类别上的采样平衡。
- **对比方法**：9 种基线方法，包括 Random、k‑Means、Forgetting、Entropy、EL2N、AUM、CCS、EVA、BOSS。全部在统一分类网络（残差网络）上训练 200 epoch。
- **采样比例**：分别评估 core‑set 占全量的 10%、30%、50%。

## 4. 资源与算力

- 论文明确提到：实验在西南大学大型仪器共享平台提供的 **8‑GPU (H20)** 高性能计算集群上运行。
- 未明确给出具体训练时长（epoch 数等），但提及 SCLCS 训练约需 1000 epoch，而基线训练 200 epoch。附录 H 分析了 SPI 计算的时间成本（266 个 SPI 在单个样本上约需 18,950 CPU‑秒），但核心集选择本身的训练时间未与全量基准测试时间做直接对比。总体而言，论文强调核心集选择是“一次性的、可并行化的前期投资”，相对于全量基准测试的巨大开销是可以接受的。

## 5. 实验数量与充分性

| 实验类型 | 数量与内容 | 充分性评价 |
|---------|-----------|-----------|
| **主要排名实验** | 2 个任务 × 3 个采样比例 × 3 个 nDCG@k = 18 个指标组合，含均值和标准差，重复多次 | 充分，统计结果有稳健性 |
| **消融实验** | 对比 SCLCS（仅低 SPS top‑k）、SCLCS_Dense（加入密度平衡）、SPS_MHA（均匀注意力头平均） | 清晰验证了每个模块的作用 |
| **覆盖平衡分析** | 对比各方法在被试和 MDD/HC 类别上的采样平衡性（图 2） | 客观展示了核心集的代表性 |
| **Theorem 2 实证** | 训练 16 个单独的 Transformer 模型逼近不同 SPI，记录训练/测试 MSE（表 4） | 验证了架构的表达能力 |
| **鲁棒性实验** | 更换滑动窗口参数（窗长 50，步长 45），重新计算 SPI 并评测排名（表 A7） | 证明方法对预处理参数不敏感 |
| **SPI 属性扩展** | 仅用慢速 SPI（＞1s）和混合 SPI 重做实验（表 A5） | 揭示不同 SPI 属性影响问题难度 |
| **标签偏移影响** | 对基线方法分别使用 MDD 标签或 subject 标签进行训练（附录 I） | 说明监督信号对齐的重要性 |
| **密度采样通用性** | 将密度平衡采样应用于其他基线方法（附录 J） | 验证密度策略的可迁移性 |
| **理论证明** | 定理 1‑5、命题 1、引理 1 均给出完整证明（附录 A‑G） | 方法论有坚实理论支撑 |

**总体评价**：实验设计较为全面，覆盖了主要任务、多采样比、多指标、消融、鲁棒性、理论验证及扩展分析。所有代码已公开，可复现。但缺乏跨数据集（如其他模态、其他疾病）的验证，可能削弱结论的泛化性。

## 6. 主要结论与发现

- **SCLCS 在 10% 数据量下即可保持接近全量数据集的 SPI 排名**，在 nDCG@k 上超越 SOTA 方法最多 **23.2%**。
- **结构稳定性（低 SPS）是排名保持的有效指标**，但单纯的低 SPS top‑k 选择在中等采样率（30%）时因缺乏多样性而性能下降，**密度平衡采样**可纠正此偏差。
- **不同下游任务（指纹识别 vs. MDD 诊断）对采样策略敏感**：指纹识别任务中低 SPS top‑k 更优，MDD 诊断任务中密度平衡采样更优。
- **简单的随机采样或传统核心集选择方法（如 Entropy、Forgetting）无法有效保持 SPI 排名**，说明排名保持任务与单模型训练加速任务本质不同。
- **自适应注意力权重融合（而非简单平均）是必需的**：均匀平均注意力（SPS_MHA）性能极差，验证了 Theorem 1。
- **SCLCS 对窗口大小变化鲁棒**，在替换滑动窗口参数后仍保持优势。

## 7. 优点

- **问题新颖且重要**：首次将 FC 算子基准测试加速形式化为排名保持核心集选择，解决了神经影像学中的实际痛点。
- **理论扎实**：提供多项理论保证（通用近似定理、SPS 一致性、密度采样覆盖误差等），方法有理可依。
- **方法设计精巧**：
  - 利用 Transformer 的自注意力机制作为结构探针，而非替代 SPI；
  - SPS 基于训练动态的稳定性，自然适配 fMRI 的结构性质；
  - 密度平衡采样平衡了稳定性和多样性，且可推广到其他评分方法。
- **实验充分且透明**：多维度消融、鲁棒性检验、标签偏移分析、SPI 属性扩展等，结果统计严谨（报告均值±标准差）。
- **开放科学**：代码和数据集均已公开，便于复现和扩展。

## 8. 不足与局限

- **跨数据集验证不足**：仅在 REST‑meta‑MDD 一个数据集上评估，未在其他 fMRI 队列（如 ADHD、阿尔茨海默病）或其他数据类型（如 MEG、EEG）上验证，泛化性存疑。
- **SPS 与 SPI 排名的理论联系尚未完全建立**：论文仅从经验上证明低 SPS 样本利于排名保持，但缺少严格的理论推导解释为什么结构稳定性直接决定 SPI 排名稳定性。
- **最优采样策略任务依赖**：SCLCS（top‑k）和 SCLCS_Dense 在不同任务上表现各异，文中未提供自动选择机制，需要用户手动调整。
- **计算成本分配不透明**：虽然强调核心集选择是“前期投资”，但 SCLCS 的完整训练（1000 epoch）实际也需要一定 GPU 时间，文中未与全量基准测试的成本做明确对比。
- **SPI 子集偏倚**：主要实验仅使用了 130 个计算快速的 SPI，而附录中显示仅使用慢速 SPI 时问题“更容易”，说明 SPI 属性会影响问题难度，但本文未进一步分析如何根据 SPI 特性调适核心集选择。
- **临床偏差风险**：如果核心集未能完全覆盖少数群体或罕见模式，可能导致最终推荐的 SPI 模型在这些子群体上表现偏倚。作者虽然讨论了此风险，但未做实际校验（如按站点、年龄、性别分层分析排名一致性）。

## 9. 未来工作方向

- **跨数据集与跨模态验证**：当前仅在REST‑meta‑MDD一个数据集上评估，未来应在多个大规模fMRI数据库（如ADHD‑200、ABIDE、HCP‑Young Adult、UK Biobank）以及MEG/EEG等其他神经成像模态上验证SCLCS的泛化性，以确认其不依赖特定采集协议或疾病特征。
- **自动任务自适应选择机制**：由于SCLCS的top‑k与密度平衡变体在不同下游任务（指纹识别 vs. 疾病诊断）上各有优劣，未来可开发一个元学习器，根据下游任务类型自动选择最优采样策略，或设计自适应阈值动态平衡稳定性与多样性。
- **理论深化**：论文经验性地表明低SPS样本利于排名保持，但缺少严格的理论联系。后续应尝试证明结构稳定性（注意力矩阵低扰动）与SPI排序一致性之间的一般性不等式，或给出SPS作为排名保持代理的理论误差界。
- **扩展到更广泛的FC算子**：当前主要评估了130个线性SPI，未来可将框架推广至包含非线性交互、高阶动态因果模型、以及谱域连接性算子的更大算子库，验证其可扩展性。
- **临床应用与公平性分析**：核心集可能因采样偏差而忽略某些亚群体（如特定站点、性别、年龄或疾病亚型），导致最终推荐的SPI模型在这些子群体上表现偏倚。未来需按人口统计学变量分层评估排名一致性，并设计去偏采样策略（如分层密度平衡）。
- **计算效率优化**：尽管SCLCS训练需约1000 epoch，但相比全量基准测试仍节省大量算力。未来可探索更轻量的结构探针（如线性注意力、固定卷积核或随机投影）替代Transformer，在保证排名保持能力的同时进一步降低训练成本。

## 10. 总体评价

该论文首次将FC算子基准测试加速问题系统性地形式化为“排名保持的核心集选择”，并提出一种自监督、结构化框架SCLCS。其核心创新在于利用Transformer的自注意力机制作为结构探针，结合基于训练动态的稳定性评分与密度平衡采样，仅需10%的数据即可可靠保持数百个SPI算子的性能排名。理论证明扎实，实验设计全面，代码与数据均已公开。尽管存在泛化性验证不足和任务依赖的局限，该工作为神经影像分析中算子选择的标准化与可重复性提供了切实可行的解决方案，有望成为未来fMRI预处理流程中的关键预分析步骤。

（完）

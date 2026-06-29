---
title: "A Brain Graph Foundation Model: Pre-Training and Prompt-Tuning across Broad Atlases and Disorders"
title_zh: 脑图基础模型：跨图谱与疾病的预训练与提示微调
authors: "Xinxu Wei, kanhao zhao, Yong Jiao, Lifang He, Yu Zhang"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=PeGHkAaRxs"
tags: ["query:fbn"]
score: 10.0
evidence: 基于fMRI预训练的脑图基础模型，适用于多种疾病
tldr: 现有脑基础模型多预训练于时序信号或连接组特征，缺乏图结构先验。本文提出BrainGFM，基于图对比学习和掩码自编码器在大规模多图谱fMRI数据上预训练脑图基础模型，并支持提示微调适应不同疾病。在多个脑疾病诊断任务中展现出强大的迁移能力，为fMRI脑网络分析提供了统一基础框架。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1437, \"height\": 673, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1409, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1439, \"height\": 424, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 578, \"height\": 466, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 458, \"height\": 341, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 465, \"height\": 341, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1438, \"height\": 432, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1456, \"height\": 485, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1446, \"height\": 366, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1398, \"height\": 518, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-peghkaarxs/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1457, \"height\": 439, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1496, \"height\": 795, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 592, \"height\": 241, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1288, \"height\": 323, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1442, \"height\": 119, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 920, \"height\": 350, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1451, \"height\": 267, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1220, \"height\": 374, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1437, \"height\": 622, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1449, \"height\": 219, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1449, \"height\": 274, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1374, \"height\": 806, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1503, \"height\": 694, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1338, \"height\": 675, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1431, \"height\": 353, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1370, \"height\": 445, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1454, \"height\": 409, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1453, \"height\": 1127, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1460, \"height\": 1066, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1457, \"height\": 954, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-peghkaarxs/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1474, \"height\": 779, \"label\": \"Table\"}]"
motivation: 现有脑基础模型缺少图结构先验，预训练数据规模有限，难以泛化到多种疾病和脑图谱。
method: 提出BrainGFM，利用图对比学习和掩码自编码器在多种脑图谱fMRI数据上预训练，并通过提示微调适配下游任务。
result: 在多个脑疾病诊断任务中表现出优异的迁移性能，超越现有脑基础模型。
conclusion: 图级别预训练范式为脑网络分析提供了可迁移的基础模型，有望推动脑疾病诊断应用。
---

## Abstract
As large language models (LLMs) continue to revolutionize AI research, there is a growing interest in building large-scale brain foundation models to advance neuroscience. While most existing brain foundation models are pre-trained on time-series signals or connectome features, we propose a novel graph-based pre-training paradigm for constructing a brain graph foundation model. In this paper, we introduce the Brain Graph Foundation Model, termed BrainGFM, a unified framework that leverages graph contrastive learning and graph masked autoencoders for large-scale fMRI-based pre-training. BrainGFM is pre-trained on a diverse mixture of brain atlases with varying parcellations, significantly expanding the pre-training corpus and enhancing the model’s ability to generalize across heterogeneous fMRI-derived brain representations. To support efficient and versatile downstream transfer, we integrate both graph prompts and language prompts into the model design, enabling BrainGFM to flexibly adapt to a wide range of atlases, neurological and psychiatric disorders, and task settings. Furthermore, we employ meta-learning to optimize the graph prompts, facilitating strong generalization to previously unseen disorders under both few-shot and zero-shot learning conditions via language-guided prompting. BrainGFM is established on 27 neuroimaging datasets spanning 25 common neurological and psychiatric disorders, encompassing 2 types of brain atlases (functional and anatomical) across 8 widely used parcellations, and covering over 25,000 subjects, 60,000 fMRI scans, and a total of 400,000 graph samples aggregated across all atlases and parcellations. The code is available at https://github.com/weixinxu666/BrainGFM.

---

## 论文详细总结（自动生成）

# 论文《A Brain Graph Foundation Model: Pre-Training and Prompt-Tuning across Broad Atlases and Disorders》详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **现状**：大型语言模型推动了各领域的基础模型发展，但在脑科学领域，现有 fMRI 基础模型多基于时间序列或连接组（Connectome/FC）特征进行预训练，忽视了脑网络的图结构先验。
- **关键挑战**：
  - **数据异构与稀缺**：fMRI 数据采集昂贵、 heterogeneity 大，现有数据集规模有限且预处理风格不一。
  - **预训练计算成本**：时间序列模型计算量大，连接组模型效率高但性能不足。
  - **泛化与迁移能力弱**：传统模型通常针对单一疾病或图谱，无法有效应对未见过的疾病、图谱或零样本/小样本场景。
- **目标**：提出一个基于图的脑基础模型 BrainGFM，利用大规模多图谱 fMRI 数据预训练，通过图提示和语言提示实现跨图谱、跨疾病的灵活小样本与零样本迁移。

## 2. 方法论：核心思想、关键技术细节

- **整体框架**：四阶段流程：大规模 fMRI 图数据构建 → 图预训练 → 元学习的少样本图提示调优 → 基于语言提示的零样本迁移。
- **关键模块**：
  - **多图谱数据构建**：整合 27 个数据集，使用 8 种图谱（功能型：Schaefer100/200/300, Shen268, Power264, Gordon333；解剖型：AAL116, AAL3v1），每个被试提取 ROI 时间序列后计算 Pearson 相关并二值化得到脑图，将数据量扩展为单图谱的 8 倍。
  - **图预训练**：采用 Graph Transformer 骨干，使用随机游走结构编码（RWSE）作为位置编码；插入图谱/分区标记 [A/P] 和疾病/任务标记 [T/D]。预训练任务包括图对比学习（GCL）和图掩码自编码器（GMAE），两者共享编码器，GCL 通过图增强生成正负样本对进行对比学习，GMAE 随机掩码节点/边后重建。
  - **少样本图提示调优**：设计可学习的图提示（节点和边参数），注入到输入图中，不修改骨干参数。通过元学习（MAML 风格）优化图提示：内循环在单个任务上用小样本支持集更新提示参数，外循环跨多个任务（不同疾病-图谱对）更新提示初始化。骨干冻结。
  - **零样本图/语言提示调优**：进一步冻结图提示参数，使用语言提示（通过 BioClinicalBERT 编码疾病/图谱文本描述得到 [T/D] 和 [A/P] 嵌入）作为输入的一部分，引导模型适应新任务。

## 3. 实验设计：数据集、场景与对比方法

- **数据集**：
  - **预训练数据集**：19 个数据集，包含 ADHD200、ABIDE I、ADNI 3、HBN、AOMIC、AURORA 等，涵盖 25 种疾病，超过 25000 名被试、60000 次 fMRI 扫描、40 万图样本。
  - **下游评估数据集**：内部测试（ADHD200、HBN、OASIS3）、半外部测试（ABIDE II、ADNI 2、SubMex CUD）、外部测试（UCLA CNP、REST-META-MDD）。
- **基准（Benchmark）**：10 种常见疾病（ADHD、ASD、AD、MDD、ANX、OCD、PTSD、CUD、SCHZ、BP），6 个下游数据集。
- **对比方法**：
  - 非预训练方法：Vanilla GCN、BrainGNN、Vanilla TF、Graph TF、BrainNetTF。
  - 预训练基础模型：BrainNPT、BrainLM、BrainMass、Brain-JEPA。
  - 基线比较在 Schaefer100 图谱上进行，使用 AUC、ACC、SEN、SPE 指标。
- **实验场景**：Full-Shot（100% 数据）、Few-Shot（10% 和 1%）、Zero-Shot（0%）。

## 4. 资源与算力

- **文中未明确说明**使用的 GPU 型号、数量以及总训练时长。仅给出了训练超参数（如 batch size=128，学习率 0.0001，50 个 meta epochs 等）。因此无法量化算力消耗，但可推断预训练规模较大，需要多 GPU 集群。

## 5. 实验数量与充分性

- **实验数量**：相当丰富。
  - 主表 1 展示了在 10 种疾病上的比较（每个方法重复多次，给出均值和标准差），覆盖 AUC、ACC、SEN、SPE。
  - 消融实验：图 2 展示了 Full/Few/Zero-Shot 下各组件的贡献（是否使用图提示、元学习、语言提示）。
  - 图 3 进行跨图谱预训练效果对比（功能型 vs 解剖型 vs 混合）。
  - 图 4 对比不同基础模型类型（时序、ROI、图）的性能与效率。
  - 表 2 预训练语料的不同图谱组合消融。
  - 图 5 不同图预训练策略（GCL、GMAE、组合）对比。
  - 附录中还有更多消融实验（位置编码、图构建方法、调优方法等）。
- **充分性与公平性**：
  - 实验设计较为全面，涵盖多种疾病、多种图谱、多种数据场景。
  - 对比的基线包括当时主流的基础模型，且所有预训练模型在相同预训练数据集上重新训练以确保公平。
  - 消融实验覆盖了框架的主要技术组件，验证了每一部分的贡献。
  - 跨图谱实验使用了功能性和解剖性图谱，考察了模型对不同表征的适应性。
  - 不足之处：部分数据集仅用于外部测试，且外部数据集数量有限；另外，图中基线 Brain-JEPA 在某些任务上表现与 BrainGFM 非常接近，但 BrainGFM 整体更优。

## 6. 主要结论与发现

- BrainGFM 在 10 个疾病诊断任务上均达到或超越当时最先进水平，尤其在 AUC 和 ACC 上优势明显。
- 图预训练（GCL+GMAE 组合）显著优于单一预训练策略；多图谱混合预训练比单图谱预训练带来明显提升。
- 图提示 + 元学习在少样本场景下表现优异，语言提示实现了零样本迁移能力。
- 与时间序列模型相比，BrainGFM 在性能相当或更优的同时，计算效率更高（预训练和微调速度更快）。
- 注意力图可视化表明模型能够捕获与疾病相关的功能区，具有一定可解释性。

## 7. 优点

- **创新性**：首次将图基础模型引入 fMRI 领域，结合图对比学习和图掩码自编码器进行预训练，并利用提示学习实现少样本/零样本迁移。
- **数据规模与多样性**：构建了迄今为止最大规模的多图谱 fMRI 预训练数据集（27 个数据集、8 种图谱、25 种疾病），显著扩展了数据覆盖。
- **技术完整性**：框架涵盖数据构建、预训练、元学习提示调优、语言提示零样本调优，形成完整解决方案。
- **实验充分**：多维度消融实验（组件、图谱、预训练策略、调优方法等）全面验证了方法有效性。
- **实用性**：通过冻结骨干仅更新少量提示参数，大大降低下游适配成本，适合实际临床应用。

## 8. 不足与局限

- **资源与算力未公开**：未报告训练所需的 GPU 型号、数量和时间，增加了复现难度。
- **外部测试覆盖有限**：仅使用 UCLA CNP 和 REST-META-MDD 作为外部测试集，且未包含所有 25 种疾病，零样本评估的广度可以进一步扩展。
- **图谱处理简化**：所有图谱均简化为二元边，未利用加权连接信息；此外，多图谱预训练中未考虑不同图谱之间的空间对应关系，可能丢失跨图谱信息。
- **数据集限制**：未包含 UK Biobank 和大量任务态 fMRI 数据，限制了模型对任务态脑活动的表示能力。
- **偏差风险**：虽然尽量做到性别平衡，但数据集中仍可能存在地域、站点、扫描仪等隐式偏差，可能影响泛化。
- **可解释性有限**：注意力可视化仅定性展示，缺乏量化指标评估归因的可靠性。
- **方法局限**：图提示设计采用简单的元素乘，可能对复杂拓扑适应不够灵活；元学习仅作用于提示参数，没有考虑对不同疾病适应性差异更大的映射头。

（完）

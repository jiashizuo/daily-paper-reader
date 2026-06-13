---
title: "ConnectoFM: A Foundation Model for Learning the Language of the Connectome"
title_zh: ConnectoFM：学习连接组语言的基础模型
authors: "Abir, A. R., Saha, A., Naswan, R., Bayzid, M. S."
date: 2026-06-10
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.06.730367v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: 连接组基础模型用于神经回路重建
tldr: "连接组学面临EM数据规模大、异质性高、标注困难等挑战，现有基础模型未针对连接组学领域优化。ConnectoFM是首个连接组学基础模型，在涵盖6个物种、25个子领域的170万张无标注EM图像上预训练，结合掩码图像建模与对比对齐学习鲁棒视觉表征。在29个数据集上，冻结特征加轻量解码器在二值分割、细胞分类、实例分割任务中超越现有模型，仅用10%标注数据即超越基线100%标注性能，尤其对膜、突触等关键结构提升显著。该模型为连接组学提供了可泛化、数据高效的基础模型，助力更可靠的神经回路重建。"
source: biorxiv
selection_source: fresh_fetch
motivation: 现有EM基础模型未针对连接组学优化，难以保留精细膜边界和突触结构，导致拓扑和连接错误。
method: 在170万张多物种EM图像上，结合掩码图像建模与对比对齐进行预训练，学习鲁棒视觉表征。
result: "在29个数据集上，冻结特征加轻量解码器在三个下游任务中超越现有模型，仅用10%标注数据即超越基线100%标注性能。"
conclusion: ConnectoFM作为首个连接组学基础模型，实现了可泛化、数据高效且生物学上更准确的神经回路重建。
---

## 摘要
从电子显微镜数据中准确重建神经回路是连接组学的核心，然而现代数据集规模庞大且异质性高，使得手动标注和针对特定数据集的模型重新训练成为重大挑战。尽管最近的电子显微镜基础模型提供了通用的视觉表示，但它们并未专门针对连接组学领域进行定制，而在该领域中，保留精细的膜边界和突触结构对于减少拓扑和连接错误至关重要。在此，我们提出ConnectoFM，这是首个用于连接组学的基础模型，在来自6个物种和25个子领域的170万张未标记电子显微镜图像组成的多样化语料库上进行了预训练。ConnectoFM结合了掩码图像建模与对比对齐，直接从大规模连接组学数据中学习鲁棒的视觉表示。这些表示将电子显微镜图像按物种、脑区、发育队列和采集领域组织成具有生物学意义的聚类。利用冻结的预训练特征和轻量级解码器头，我们将ConnectoFM迁移到三个重要的下游任务：二值分割、多类细胞分型和实例分割。在包括已建立基准的29个多样化数据集中，ConnectoFM始终优于现有的电子显微镜基础模型以及需要从头开始进行任务特定训练的最先进方法。仅使用10%的标记数据，ConnectoFM就超越了在100%标注预算下训练的基线模型，展示了ConnectoFM在低数据场景下的优越性。ConnectoFM的改进在具有挑战性和生物学重要性的目标上尤为显著，包括膜、线粒体、囊泡、突触后致密区和突触，并且在低标签设置下仍然保持强劲。扩展到3D体积分割和定性比较进一步表明，ConnectoFM在下游任务中实现了更准确和生物学上更忠实的结果。这些结果确立了ConnectoFM作为连接组学中可泛化且数据高效的基础模型，并为更可靠的神经回路重建提供了一条可扩展的路径。

## Abstract
Accurate reconstruction of neural circuits from electron microscopy (EM) data is central to connectomics, yet modern datasets are now so large and heterogeneous that manual annotation and dataset-specific model retraining have become major challenges. While recent EM foundation models provide general visual representations, they are not specifically tailored to the connectomics domain, where preserving fine membrane boundaries and synaptic structures is essential to mitigate topological and connectivity errors. Here, we present ConnectoFM, the first foundation model for connectomics, pretrained on a diverse corpus of 1.7 million unlabeled EM images drawn from six species and 25 subdomains. ConnectoFM combines masked image modeling with contrastive alignment to learn robust visual representations directly from large-scale connectomics data. These representations organize EM images into biologically meaningful clusters across species, brain regions, developmental cohorts, and acquisition domains. Using frozen pretrained features with lightweight decoder heads, we transfer ConnectoFM to three important downstream tasks: binary segmentation, multiclass cell typing, and instance segmentation. Across 29 diverse datasets, including established benchmarks, ConnectoFM consistently outperforms existing EM foundation models and state-of-the-art methods that require task-specific training from scratch. With only 10% labeled data, ConnectoFM surpasses the baselines trained on 100% annotation budget, showing the superiority of ConnectoFM in low-data regimes. Improvements of ConnectoFM are especially pronounced for challenging and biologically important targets, including membranes, mitochondria, vesicles, post-synaptic densities and synapses, and remain strong in low-label settings. Extension to 3D volumetric segmentation and qualitative comparisons further show that ConnectoFM enables more accurate and biologically faithful performance across downstream tasks. These results establish ConnectoFM as a generalizable and data-efficient foundation model for connectomics and provide a scalable route towards more reliable neural circuit reconstruction.

---

## 论文详细总结（自动生成）

好的，以下是对论文《ConnectoFM: A Foundation Model for Learning the Language of the Connectome》的详细中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：从电子显微镜（EM）数据中重建神经回路（连接组学）面临巨大挑战。现代EM数据集规模庞大、异质性高（涵盖不同物种、脑区、发育阶段等），导致手动标注成本极高，且针对特定数据集训练的模型泛化能力差，难以保留精细的膜边界和突触结构，从而引发拓扑和连接错误。
- **研究动机**：现有的EM基础模型（如通用视觉模型）虽然提供了通用视觉表征，但并未针对连接组学领域进行专门优化。连接组学需要模型能够精确捕捉对神经回路重建至关重要的微观结构（如膜、突触、囊泡等）。
- **整体含义**：本文旨在开发首个专门面向连接组学的基础模型，通过大规模、多物种的预训练，学习一种“连接组语言”，从而为下游任务提供可泛化、数据高效的视觉表征，最终实现更可靠、更准确的神经回路重建。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：构建一个连接组学基础模型（ConnectoFM），通过在大规模、多样化的未标注EM图像上进行自监督预训练，学习鲁棒且具有生物学意义的视觉表征。预训练结合了两种互补的自监督学习范式。
- **关键技术细节**：
    1.  **预训练数据**：构建了一个包含170万张未标注EM图像的语料库，覆盖6个物种（如小鼠、果蝇、斑马鱼等）和25个子领域（不同脑区、发育队列、采集方式）。
    2.  **模型架构**：基于Vision Transformer (ViT) 架构。
    3.  **预训练策略**：结合了两种自监督学习目标：
        - **掩码图像建模 (Masked Image Modeling, MIM)**：随机遮蔽图像块，训练模型根据可见部分重建被遮蔽区域的像素或特征，迫使模型学习局部结构和纹理细节。
        - **对比对齐 (Contrastive Alignment)**：将同一张图像的不同增强视图（如不同裁剪、颜色抖动）在特征空间中拉近，同时推远不同图像的视图，学习全局不变性和语义特征。
    4.  **迁移学习**：预训练完成后，冻结ConnectoFM的编码器权重，仅在其顶部训练轻量级的解码器头（如线性层或小型卷积网络），用于不同的下游任务。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：在29个多样化的EM数据集上进行评估，涵盖已建立的基准数据集（如CREMI、SNEMI3D等）以及多个内部/公开数据集。这些数据集覆盖了不同物种、脑区、分辨率和标注类型。
- **下游任务**：评估了三个核心连接组学任务：
    1.  **二值分割**：分割膜、线粒体等结构。
    2.  **多类细胞分型**：对细胞类型（如神经元、胶质细胞）进行分类。
    3.  **实例分割**：分割并区分单个细胞或突触。
- **对比方法**：
    - **现有EM基础模型**：如UNI、CONCH等（通用医学图像基础模型）。
    - **从头训练的最先进方法 (SOTA)**：针对特定任务从头开始训练的专用模型（如U-Net变体）。
    - **消融实验**：对比仅使用MIM、仅使用对比对齐或两者结合的预训练效果。

### 4. 资源与算力

- **文中未明确说明**：论文正文及方法部分未提及预训练或下游任务微调所使用的具体GPU型号、数量及训练时长。这是一个信息缺失点。

### 5. 实验数量与充分性

- **实验数量**：非常充分。在29个数据集上进行了评估，覆盖了3个主要下游任务，并设计了多种对比和消融实验。
- **充分性与公平性**：
    - **充分性**：实验设计全面，不仅比较了与现有基础模型和SOTA方法的性能，还深入分析了在低数据场景（仅用10%标注数据）下的表现，并进行了3D体积分割的扩展验证和定性比较。
    - **客观与公平**：对比方法均为公开或公认的基线，实验设置（如冻结特征、轻量解码器）保持一致。消融实验清晰地展示了不同预训练策略的贡献。结论具有说服力。

### 6. 论文的主要结论与发现

- **主要结论**：ConnectoFM作为首个连接组学基础模型，在29个数据集上的三个下游任务中，**一致且显著地优于**所有对比的现有EM基础模型和从头训练的SOTA方法。
- **关键发现**：
    1.  **数据高效性**：仅使用10%的标注数据，ConnectoFM的性能即可超越使用100%标注数据从头训练的基线模型，展示了其在低数据场景下的巨大优势。
    2.  **生物学关键结构提升显著**：对膜、线粒体、囊泡、突触后致密区和突触等具有挑战性和生物学重要性的目标，ConnectoFM的改进尤为突出。
    3.  **表征的生物学意义**：预训练得到的特征能够将EM图像按物种、脑区、发育队列等生物学属性进行有意义的聚类，证明其学到了领域相关的知识。
    4.  **泛化能力**：模型能够很好地泛化到未见过的物种、脑区和采集条件。

### 7. 优点：方法或实验设计上的亮点

- **领域专用性**：首次提出并构建了专门针对连接组学的基础模型，而非直接套用通用视觉模型，更贴合领域需求。
- **大规模、多样化预训练**：构建了涵盖6个物种、25个子领域的170万张图像语料库，为学习鲁棒且泛化的表征提供了坚实基础。
- **创新的预训练策略**：巧妙结合了MIM（学习局部细节）和对比对齐（学习全局语义），两者互补，共同提升了表征质量。
- **全面的实验验证**：在29个数据集、3个任务上进行评估，并深入分析了低数据场景和生物学关键结构，实验设计严谨、充分。
- **数据高效性**：在标注成本极高的连接组学领域，仅需少量标注即可达到甚至超越全监督性能，具有极高的实用价值。

### 8. 不足与局限

- **算力信息缺失**：未提供预训练和微调所需的计算资源（GPU型号、数量、时长），使得其他研究者难以复现或评估其成本。
- **3D扩展的局限性**：虽然进行了3D体积分割的扩展验证，但模型本身是基于2D图像预训练的。对于真正的3D连接组学数据，其处理连续切片间上下文信息的能力可能不如原生3D模型。
- **下游任务覆盖**：虽然覆盖了三个核心任务，但连接组学还包括如突触检测、神经递质类型分类等更细粒度的任务，未在文中进行验证。
- **潜在偏差风险**：预训练数据虽然多样，但可能仍存在对某些物种或脑区的偏向性，导致在极端未见过的数据上性能下降。论文未对此进行深入讨论。
- **应用限制**：模型性能依赖于预训练数据的质量和多样性。对于全新的、与预训练数据分布差异极大的EM数据（如新型染色技术），其泛化能力有待进一步验证。

（完）

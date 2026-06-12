---
title: "High-order brain interactions distinguish wakefulness, anaesthesia, and recovery induced by deep brain stimulation"
title_zh: 高阶脑相互作用区分清醒、麻醉及深部脑刺激诱导的恢复
authors: "Cofre, R., Espinosa-Curilem, C., Uhrig, L., Tasserie, J., Herzog, R., Gatica, M., Luppi, A., Silva, J. F., Jarraya, B."
date: 2026-06-03
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.01.728390v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: 静息态fMRI功能连接分析
tldr: 意识状态依赖于大规模脑区间的相互作用，但传统成对功能连接无法捕捉多脑区集体依赖。本研究利用多变量信息论O-information分析非人灵长类静息态fMRI数据，发现高阶交互结构在清醒、麻醉和恢复状态间重组。冗余主导的脑区子集在清醒时升高、麻醉时降低，能稳健区分意识状态；协同-冗余转换在多种麻醉条件下显著。高阶信息特征显著优于成对连接，尤其协同特征对相关性不可见。
source: biorxiv
selection_source: carryover_cache
motivation: 传统成对功能连接无法捕捉多脑区集体依赖，需高阶交互度量以理解意识状态的神经基础。
method: 应用多变量信息论O-information分析非人灵长类静息态fMRI，量化不同意识状态下多脑区动力学的协同/冗余主导。
result: 冗余主导子集区分清醒与无反应状态；协同-冗余转换在多种麻醉下显著；高阶特征优于成对连接。
conclusion: 意识反映高阶交互结构重组，需超越成对连接的多变量表征。
---

## 摘要
理解意识如何依赖于大规模脑相互作用是意识神经科学和临床转化的关键。然而，这需要超越经典的功能连接成对描述，因为后者无法捕捉多个脑区涌现的集体依赖性。本文利用多元信息论度量来表征高阶相互作用在意识状态间的重组。具体而言，我们将O-信息应用于非人灵长类动物的静息态fMRI数据，以量化多区域脑动态是由协同还是冗余信息共享主导。我们分析了两个互补数据集：(i) 使用不同分子药物（丙泊酚、七氟烷、氯胺酮）诱导的清醒与麻醉意识丧失，以及(ii) 丙泊酚麻醉期间中央丘脑深部脑刺激驱动的意识恢复（以行为反应性为指标）。我们识别出最优区域子集，其O-信息在两种互补优化极性下稳健地区分意识状态与无反应状态。第一种极性捕捉到清醒扫描中升高的冗余性，在麻醉下降低，提供稳健的区分，并将高电压中央丘脑刺激状态更接近清醒。第二种极性捕捉到协同到冗余的转变，在多麻醉条件下显著，但在数据集间具有情境依赖性。区分性能依赖于相互作用阶数：基于冗余的特征随子集大小增加而改善，而基于协同的特征在低阶达到峰值。高阶信息特征显著优于成对功能连接，尤其是对于相关性无法捕捉的协同特征。这些发现表明，意识反映在高阶相互作用结构的重组中，不同的信息基质需要超越成对连接的多变量表征。

## Abstract
Understanding how consciousness depends on large-scale brain interactions is key for both the neuroscience of consciousness and clinical translation. However, it requires moving beyond classical pairwise descriptions of functional connectivity, which cannot capture the collective dependencies emerging across multiple brain regions. Here, we use multivariate information theory measures to characterize how higher-order interactions re-organize across states of consciousness. Specifically, we apply O-information to resting-state fMRI data from non-human primates to quantify whether multiregional brain dynamics are dominated by synergistic or redundant information sharing. We analyse two complementary datasets: (i) wakefulness and anaesthesia-induced loss of consciousness using different molecular agents (propofol, sevoflurane, ketamine), and (ii) the recovery of consciousness driven by central thalamic deep brain stimulation during propofol anaesthesia, indexed by behavioural responsiveness. We identify optimal regional subsets whose O-information robustly discriminates conscious from non-responsive states under two complementary optimization polarities. The first captures elevated redundancy in conscious scans that decreases under anaesthesia, providing robust discrimination and placing high-voltage central-thalamus stimulation closer to wakefulness. The second captures a synergy-to-redundancy transition, prominent in multi-anaesthesia conditions but context-dependent across datasets. Discrimination performance depends on interaction order: redundancy-based signatures improve with increasing subset size, whilst synergy-based signatures peak at low orders. Higher-order informational features significantly outperform pairwise functional connectivity, particularly for synergistic signatures which remain invisible to correlations. These findings demonstrate that consciousness is reflected in the reconfiguration of higher-order interaction structures, with distinct informational substrates requiring multivariate characterization beyond pair-wise connectivity.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化、深入、客观的中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：意识状态（清醒、麻醉、恢复）如何依赖于大规模脑区之间的相互作用？传统的成对功能连接（Functional Connectivity, FC）分析无法捕捉多个脑区同时涌现的集体依赖性（即高阶相互作用），因此需要新的度量方法来揭示意识状态的神经基础。
- **研究动机**：意识神经科学和临床转化（如麻醉监测、意识障碍评估）迫切需要超越成对连接的分析工具。高阶相互作用（协同与冗余信息）被认为是理解意识涌现的关键。
- **整体含义**：本研究旨在证明，意识状态的变化伴随着高阶脑相互作用结构的重组，而不仅仅是成对连接的改变。通过量化多脑区动力学的协同（synergy）或冗余（redundancy）主导性，可以更稳健地区分不同意识状态。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用多变量信息论中的 **O-信息（O-information）** 来量化多脑区（超过2个）之间的信息共享模式。O-信息可以判断一个区域子集的整体动态是由**协同**（整体大于部分之和，信息不可约简）还是**冗余**（部分信息重复，信息可约简）主导。
- **关键技术细节**：
    1.  **数据预处理**：对非人灵长类动物的静息态fMRI数据进行标准预处理，并提取多个脑区的平均BOLD信号。
    2.  **O-信息计算**：对于任意一个包含k个脑区的子集，计算其O-信息值。正值表示冗余主导，负值表示协同主导。
    3.  **优化极性（Optimization Polarities）**：为了找到最能区分意识状态的区域子集，作者采用了两种互补的优化策略：
        - **极性1（冗余主导）**：寻找在清醒状态下O-信息值最高（最冗余），在麻醉状态下O-信息值最低（最不冗余）的区域子集。
        - **极性2（协同-冗余转换）**：寻找在清醒状态下O-信息值最低（最协同），在麻醉状态下O-信息值最高（最冗余）的区域子集，即捕捉从协同到冗余的转变。
    4.  **特征提取与分类**：将最优子集的O-信息值作为特征，用于区分不同意识状态（清醒 vs. 麻醉/无反应）。并与传统的成对功能连接特征进行对比。
- **公式或算法流程（文字说明）**：
    1.  输入：多个脑区的BOLD时间序列。
    2.  对于每个可能的k脑区子集（或通过启发式搜索），计算其O-信息。
    3.  根据两种优化极性，分别筛选出区分度最高的子集。
    4.  使用这些子集的O-信息值作为特征，训练分类器（如逻辑回归或支持向量机）来区分意识状态。
    5.  评估分类性能，并与基于成对功能连接的特征进行比较。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：使用了两个互补的非人灵长类动物（猕猴）静息态fMRI数据集：
    - **数据集1（多麻醉剂）**：包含清醒状态和三种不同麻醉剂（丙泊酚、七氟烷、氯胺酮）诱导的意识丧失状态。
    - **数据集2（深部脑刺激恢复）**：在丙泊酚麻醉期间，通过中央丘脑深部脑刺激（DBS）驱动意识恢复，以行为反应性为指标，包含麻醉、低电压刺激、高电压刺激（恢复行为反应）等状态。
- **基准（Benchmark）**：没有显式的外部基准数据集。实验的内在基准是区分清醒/有反应状态与麻醉/无反应状态。
- **对比方法**：
    - **成对功能连接（Pairwise Functional Connectivity）**：这是主要的对比方法。作者比较了基于高阶O-信息的特征与基于传统成对相关性的特征在区分意识状态上的性能。
    - **不同子集大小**：比较了不同阶数（子集大小k）的O-信息特征的分类性能。
    - **不同优化极性**：对比了两种优化极性（冗余主导 vs. 协同-冗余转换）的效果。

### 4. 资源与算力

- **文中未明确说明**：论文摘要和提供的文本内容中，没有提及所使用的具体GPU型号、数量、训练时长等算力资源信息。这可能是由于该研究主要基于信息论计算和统计分析，而非大规模深度学习模型训练。

### 5. 实验数量与充分性

- **实验数量**：
    - 在两个独立的数据集上进行了验证。
    - 使用了三种不同的麻醉剂（数据集1）。
    - 测试了多种子集大小（从低阶到高阶）。
    - 对比了两种优化极性。
    - 与成对功能连接进行了系统性比较。
- **充分性与客观性**：
    - **充分性**：实验设计较为全面，覆盖了多种意识状态改变场景（药物诱导、电刺激恢复），并考虑了不同阶数的相互作用，增强了结论的普适性。
    - **客观性**：使用了客观的信息论度量，避免了主观阈值设定。通过优化极性自动寻找最优子集，减少了人为偏差。对比实验设计公平，直接比较了高阶特征与成对特征的分类性能。
    - **潜在不足**：样本量（非人灵长类动物数量）未在摘要中提及，可能是一个局限。此外，优化过程可能对特定数据集过拟合，尽管在两个独立数据集上验证部分缓解了此问题。

### 6. 论文的主要结论与发现

1.  **高阶相互作用重组**：意识状态的变化伴随着高阶脑相互作用结构的显著重组，具体表现为协同和冗余信息主导模式的转变。
2.  **冗余特征稳健区分**：基于**冗余主导**（极性1）的区域子集特征，能够稳健地区分清醒与麻醉/无反应状态。在清醒时冗余性升高，麻醉时降低，并且高电压中央丘脑刺激（恢复意识）使该特征更接近清醒状态。
3.  **协同-冗余转换**：基于**协同到冗余转换**（极性2）的特征在多麻醉条件下显著，但其表现具有情境依赖性（在不同数据集间表现不同）。
4.  **阶数依赖性**：区分性能依赖于相互作用的阶数。冗余特征随子集大小增加而改善，而协同特征在低阶时达到最佳性能。
5.  **超越成对连接**：高阶信息特征（尤其是协同特征）在区分意识状态上**显著优于**传统的成对功能连接。协同特征对相关性分析“不可见”，揭示了成对连接无法捕捉的独特信息。

### 7. 优点：方法或实验设计上的亮点

- **方法论创新**：将多变量信息论中的O-信息引入意识研究，为量化高阶脑相互作用提供了严谨的数学框架，超越了传统的成对分析。
- **互补优化策略**：设计两种互补的优化极性（冗余主导 vs. 协同-冗余转换），全面捕捉了意识状态变化中可能存在的不同信息重组模式。
- **多场景验证**：在两种不同实验范式（多种麻醉剂 vs. 电刺激恢复）上验证了方法的有效性，增强了结论的可靠性和普适性。
- **清晰的对比分析**：系统性地将高阶特征与成对功能连接进行对比，有力地证明了高阶度量的独特价值和必要性。

### 8. 不足与局限

- **样本量**：研究基于非人灵长类动物，样本量可能有限，且未在摘要中明确说明，这会影响统计功效和结论的泛化能力。
- **计算复杂度**：O-信息计算涉及对多变量概率分布的估计，随着脑区数量的增加，计算复杂度会急剧上升（“维度灾难”）。虽然使用了子集搜索，但大规模全脑分析仍具挑战。
- **情境依赖性**：协同-冗余转换特征在不同数据集间表现不一致，表明其可能对具体实验条件（如麻醉剂类型、刺激参数）敏感，通用性有待进一步验证。
- **因果性**：研究揭示了相关性，但无法直接证明高阶相互作用的重组是意识状态变化的**原因**还是**结果**。
- **应用限制**：目前仅在非人灵长类动物fMRI数据上验证，向人类临床转化（如意识障碍患者）需要进一步研究，且fMRI的时间分辨率有限，可能无法捕捉快速的高阶动态。

（完）

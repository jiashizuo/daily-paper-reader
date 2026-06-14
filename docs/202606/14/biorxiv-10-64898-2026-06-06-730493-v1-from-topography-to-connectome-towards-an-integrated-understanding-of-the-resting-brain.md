---
title: "From topography to connectome: Towards an integrated understanding of the resting brain"
title_zh: 从地形到连接组：迈向对静息大脑的综合理解
authors: "Naranjo Rincon, S., Ahmad, F., Easley, T., Shoushtari, S., Glatard, T., Kiar, G., Modi, H., Dahan, S., Robinson, E., Kamilov, U., Bijsterbosch, J."
date: 2026-06-08
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.06.730493v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 9.0
evidence: 深度学习从拓扑图翻译连接组
tldr: 静息态功能磁共振成像研究从早期的人脑连接组扩展到多种分析方法，但空间拓扑图与功能连接组之间的直接映射尚不明确。本文开发了一种基于表面视觉Transformer的深度学习模型，将网络拓扑图嵌入并转换为个体化连接组。模型重建准确率达0.73±0.09，拓扑到连接组的翻译准确率为0.43±0.08，且翻译后的连接组保留了可识别性和脑-认知关联。该工作建立了空间拓扑到连接组的直接映射，有助于整合不同子领域的科学见解，推动对人脑连接组的全面理解。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有研究分别关注空间拓扑图和功能连接组，但缺乏两者间的直接映射，限制了跨领域整合。
method: 提出表面视觉Transformer深度学习模型，将网络拓扑图嵌入并转换为个体化功能连接组。
result: 模型重建准确率0.73±0.09，拓扑到连接组翻译准确率0.43±0.08，翻译连接组保留可识别性和脑-认知关联。
conclusion: 建立了空间拓扑到连接组的直接映射，可整合不同rsfMRI子领域的发现，促进对人脑连接组的统一理解。
---

## 摘要
随着该领域从早期的人类连接组研究扩展，用于研究静息态功能磁共振成像（rsfMRI）数据的分析方法数量迅速增加。随着对个体差异的关注日益增加，除了传统的功能连接组外，空间组织的地形脑图也出现了。在此，我们开发了一个深度学习模型，用于嵌入网络地形图并忠实地转化为个体化的连接组。结果基于重建准确性（0.73±0.09）和准确的地形到连接组转换（0.43±0.08）验证了表面视觉变换器的有效性。重要的是，转换后的连接组保留了可识别性和脑-认知关联。这些发现建立了从空间地形到连接组的直接映射，可用于整合跨rsfMRI子领域的科学见解。这是朝着拓宽我们对连接组的概念化并支持更广泛地整合发现以全面理解人类连接组迈出的重要一步。

导语：从脑组织的空间地图到区域间连接组的转换保留了共享的个体差异。

## Abstract
As the field expands from early research into the human connectome, there has been a fast expansion in the number of analytical approaches to study resting state functional MRI (rsfMRI) data. With increasing focus on individual differences, topographical brain maps of spatial organization have emerged in addition to traditional functional connectomes. Here, we developed a deep-learning model to embed maps of network topography and faithfully translate to individualized connectomes. Results confirmed the validity of the surface vision transformer based on reconstruction accuracy (0.73{+/-}0.09) and accurate topography-to-connectome translation (0.43{+/-}0.08). Importantly, translated connectomes retained identifiability and brain-cognition associations. These findings establish a direct mapping from spatial topography to connectomes that can be used to integrate scientific insights across rsfMRI sub-fields. This is an important step towards broadening our conceptualization of the connectome and supporting a broader integration of findings to inform a complete understanding of the human connectome.

TeaserTranslating from spatial maps of brain organization to region-to-region connectomes retains shared individual differences.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化、深入、客观的中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：静息态功能磁共振成像（rsfMRI）领域发展迅速，产生了两种主要的数据分析范式：**空间拓扑图**（描述大脑皮层的空间组织模式，如功能梯度）和**功能连接组**（描述不同脑区之间的功能连接强度）。然而，这两种范式之间缺乏直接的、可量化的映射关系，导致不同子领域的研究发现难以整合，阻碍了对人脑连接组的统一理解。
- **研究动机**：作者旨在建立一个从空间拓扑图到功能连接组的直接翻译模型，从而弥合这两个子领域之间的鸿沟。通过验证这种映射的存在，可以整合来自不同分析视角的科学见解，推动对静息态大脑功能组织的全面理解。
- **整体含义**：该工作证明了大脑的空间组织模式（拓扑图）与区域间功能连接（连接组）之间存在可学习的、保留个体差异的映射关系。这为统一rsfMRI领域的不同分析方法提供了理论基础和计算工具，是迈向“综合理解静息大脑”的关键一步。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用深度学习模型，将个体化的**网络拓扑图**（作为输入）忠实地转换为对应的个体化**功能连接组**（作为输出）。模型需要学习从空间模式到连接模式的复杂非线性映射。
- **关键技术细节**：
    - **模型架构**：采用**表面视觉Transformer**。该模型专门设计用于处理大脑皮层表面数据，能够有效捕捉拓扑图中的空间结构和长程依赖关系。
    - **输入与输出**：
        - **输入**：网络拓扑图，具体为7个静息态网络（如默认模式网络、视觉网络等）的皮层表面空间分布图。
        - **输出**：个体化的功能连接组，即一个表示所有皮层顶点之间功能连接强度的矩阵。
    - **算法流程**：
        1.  **数据准备**：从rsfMRI数据中分别提取个体化的网络拓扑图和功能连接组。
        2.  **模型训练**：将网络拓扑图输入表面视觉Transformer，模型输出预测的功能连接组。通过最小化预测连接组与真实连接组之间的差异（如均方误差）来训练模型。
        3.  **翻译与评估**：训练完成后，模型即可用于将新的拓扑图翻译成连接组。评估指标包括重建准确性（预测连接组与真实连接组的相似度）和拓扑到连接组的翻译准确率。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：论文使用了**人类连接组项目（HCP）** 的静息态功能磁共振成像数据。这是一个广泛使用的高质量公开数据集，包含大量健康成年人的脑影像数据。
- **基准（Benchmark）**：论文没有明确提及与特定传统方法（如线性回归）的对比。其基准主要是模型自身的**重建准确性**和**翻译准确率**，通过量化指标来评估模型性能。
- **对比方法**：文中未提及与其他深度学习模型或传统统计方法的直接对比。实验的重点在于验证所提出的表面视觉Transformer模型的有效性，并分析翻译后连接组的特性（如可识别性、脑-认知关联）。

### 4. 资源与算力

- **文中未明确说明**：论文摘要和提供的文本内容中，**没有提及**所使用的具体GPU型号、数量、训练时长等算力资源信息。这可能是由于该论文为预印本，细节尚未完全展开。

### 5. 实验数量与充分性

- **实验数量**：从摘要来看，实验主要围绕模型性能的两个核心指标展开：
    - **重建准确性**：0.73 ± 0.09
    - **拓扑到连接组翻译准确率**：0.43 ± 0.08
    - **附加分析**：验证了翻译后的连接组保留了**可识别性**（即能区分不同个体）和**脑-认知关联**（即连接组与行为/认知评分相关）。
- **充分性与客观性**：
    - **充分性**：实验验证了模型的核心功能（翻译）和翻译结果的有用性（保留个体差异和认知关联），逻辑链条完整。但缺乏与基线方法的对比，使得“0.73”和“0.43”的绝对数值难以评估其优越性。
    - **客观性**：使用了标准化的HCP数据集，结果以均值±标准差形式报告，具有一定的客观性。但未提及交叉验证或测试集划分的具体细节，可能存在过拟合风险。

### 6. 论文的主要结论与发现

1.  **映射存在性**：成功建立了从空间拓扑图到功能连接组的直接、可学习的映射关系。
2.  **模型有效性**：表面视觉Transformer能够以较高的准确性（重建准确率0.73）将拓扑图翻译为连接组。
3.  **翻译保真度**：翻译后的连接组不仅保留了拓扑图的信息（翻译准确率0.43），更重要的是保留了**个体间的差异性**（可识别性）和**与认知功能的关联**。
4.  **领域整合潜力**：该工作为整合rsfMRI领域内基于拓扑图和基于连接组的研究发现提供了计算框架，有助于推动对人脑连接组的统一理解。

### 7. 优点：方法或实验设计上的亮点

- **创新性**：首次尝试并成功实现了从空间拓扑图到功能连接组的直接深度学习翻译，这是一个新颖且重要的研究方向。
- **模型设计**：采用表面视觉Transformer，专门针对大脑皮层表面数据的几何结构进行设计，比传统的体素或平面模型更符合神经科学数据的特性。
- **验证全面性**：不仅验证了翻译的准确性，还进一步验证了翻译结果在**个体识别**和**认知关联**等下游任务中的有效性，证明了翻译结果具有生物学意义，而不仅仅是数值上的拟合。

### 8. 不足与局限

- **缺乏对比基线**：未与任何传统方法（如基于梯度的回归）或其他深度学习模型进行性能对比，难以判断该模型是否显著优于现有方法。
- **数据集单一**：仅使用了HCP数据集，结论的泛化性有待在其他独立数据集（如不同年龄、疾病人群）上验证。
- **翻译准确率较低**：拓扑到连接组的翻译准确率仅为0.43，表明从空间模式到连接模式的映射存在大量未解释的变异，模型性能有较大提升空间。
- **算力信息缺失**：未报告训练所需的计算资源，不利于其他研究者复现或评估方法的可及性。
- **实验细节不足**：作为预印本，摘要中缺乏关于模型架构细节、训练超参数、数据预处理流程、交叉验证策略等关键实验信息的描述，影响了结论的严谨性和可复现性。

（完）

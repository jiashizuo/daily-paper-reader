---
title: "MM-RLHF: The Next Step Forward in Multimodal LLM Alignment"
title_zh: MM-RLHF：多模态大语言模型对齐的下一步
authors: "YiFan Zhang, Tao Yu, Haochen Tian, Chaoyou Fu, Peiyan Li, Jianshu Zeng, Wulin Xie, Yang Shi, Huanyu Zhang, Junkang Wu, Xue Wang, Yibo Hu, Bin Wen, Tingting Gao, Zhang Zhang, Fan Yang, Di ZHANG, Liang Wang, Rong Jin"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ULJ4gJJYFp"
tags: ["query:mlr"]
score: 9.0
evidence: 大规模RLHF数据集用于多模态大模型对齐
tldr: MM-RLHF针对多模态大语言模型对齐问题，构建了包含12万细粒度人类偏好比较对的数据集，并提出了批评式奖励模型。该模型在分配分数前先生成批评，提升了奖励模型质量和对齐效率。实验表明该数据集和方法在减少幻觉和提升多模态理解上显著优于现有资源。该工作直接推进了RLHF在多模态领域的应用。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有MLLM对齐数据集规模小、适用范围窄，缺乏细粒度偏好。
method: 构建12万细粒度人类偏好数据集，并提出批评式奖励模型。
result: 在多个多模态基准上，MM-RLHF显著减少了幻觉并提升了对齐质量。
conclusion: 大规模细粒度偏好数据和批评式奖励是提升MLLM对齐的有效途径。
---

## Abstract
Existing efforts to align multimodal large language models (MLLMs) with human preferences have only achieved progress in narrow areas, such as hallucination reduction, but remain limited in practical applicability and generalizability. To this end, we introduce **MM-RLHF**, a dataset containing **120k** fine-grained, human-annotated preference comparison pairs. This dataset represents a substantial advancement over existing resources, offering superior size, diversity, annotation granularity, and quality.  Leveraging this dataset, we propose several key innovations to improve both the quality of reward models and the efficiency of alignment algorithms. Notably, we introduce the **Critique-Based Reward Model**, which generates critiques of model outputs before assigning scores, offering enhanced interpretability and more informative feedback compared to traditional scalar reward mechanisms.  Additionally, we propose **Dynamic Reward Scaling**, a method that adjusts the loss weight of each sample according to the reward signal, thereby optimizing the use of high-quality comparison pairs.  Our approach is rigorously evaluated across **10** distinct dimensions, encompassing **27** benchmarks, with results demonstrating significant and consistent improvements in model performance (Figure.1).

---

## 论文详细总结（自动生成）

# MM-RLHF：多模态大语言模型对齐的下一步 —— 详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题定位**：当前多模态大语言模型（MLLMs）与人类偏好对齐的研究仍局限于狭窄领域（如减少幻觉），数据集规模小、标注粒度粗、适用范围窄，导致模型在实际应用中的对齐质量和泛化能力不足。
- **研究动机**：缺乏大规模、细粒度、高质量的人类偏好比较对是制约RLHF（基于人类反馈的强化学习）在多模态领域广泛应用的主要瓶颈。
- **整体意义**：该工作旨在构建大规模细粒度偏好数据集，并提出创新的奖励模型与训练策略，推动MLLM对齐迈向更实用、更通用的阶段。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：通过大规模细粒度人类偏好数据 + 更具解释性的批评式奖励模型 + 动态奖励缩放，系统提升多模态对齐的效率和效果。
- **关键技术细节**：
  - **Critique-Based Reward Model（批评式奖励模型）**：在分配分数前，先让奖励模型生成对模型输出的批评（critique），再基于批评给出评分。相比传统标量奖励，提供了更强的可解释性和更丰富的反馈信号。
  - **Dynamic Reward Scaling（动态奖励缩放）**：根据每个样本的奖励信号动态调整该样本在损失函数中的权重，从而更有效地利用高质量比较对，优化训练过程。
  - **数据集构建**：收集12万条细粒度、人工标注的偏好比较对，涵盖多样性、标注粒度与质量均超越现有资源。

## 3. 实验设计

- **数据集/场景**：使用自建的**MM-RLHF**数据集（12万细粒度偏好对）进行训练和微调。
- **Benchmark**：在**10个不同维度**、涵盖**27个基准**上进行评估，具体基准名称未在摘要中列出，但元数据提及“多个多模态基准”。
- **对比方法**：主要与现有MLLM对齐资源和方法的对比（如传统标量奖励模型、简单对齐算法等），具体对比模型未列出，但从上下文可推断包括基线MLLM以及使用较小/粗粒度数据集的对比方法。

## 4. 资源与算力

- **文中未明确说明**：摘要及元数据均未提及使用的GPU型号、数量、训练时长等具体算力信息。需要读者参考完整论文正文才可获得。

## 5. 实验数量与充分性

- **实验数量**：共在27个基准、10个维度上进行评估，实验规模较大。
- **充分性**：从描述看，涵盖了多模态理解的多个方面（如幻觉减少、一般理解能力），并进行了多维度对比。但未提及是否包含消融实验（如批评式奖励模块的消融、动态缩放的有效性验证）以及统计显著性检验，仅从摘要难以判断完全充分性。元数据提到“显著且一致的改进”，表明至少在主要基准上有严格对比。
- **客观与公平**：由于使用了新构建的数据集，需注意与基线数据集在规模、标注方式上的公平性；摘要中声明“显著优于现有资源”，但无具体数值支撑，需要完整论文验证。

## 6. 主要结论与发现

- **核心结论**：大规模细粒度人类偏好数据（12万对）结合批评式奖励模型与动态奖励缩放，能显著减少幻觉，提升多模态理解能力，并在多个基准上取得一致改进。
- **发现**：批评式奖励模型通过先批评后打分，提供了更丰富、可解释的监督信号，优于传统标量奖励；动态奖励缩放有效利用了高质量比较对，提高了对齐效率。

## 7. 优点

- **数据规模与质量**：12万细粒度偏好对是当前最大、最细的多模态对齐数据集，提升了训练数据的多样性与覆盖范围。
- **方法论创新**：批评式奖励模型引入可解释性，动态奖励缩放优化训练，都是对现有RLHF框架的实质性改进。
- **评估系统全面**：涵盖10个维度、27个基准，评估维度广泛，结果稳健。

## 8. 不足与局限

- **实验覆盖**：尽管基准数量多，但未提及在真实用户交互场景或开放域生成任务上的评估，可能仍存在领域限制。
- **偏差风险**：人工标注细粒度偏好可能引入标注者主观偏差，数据集在文化、语言、视觉内容上是否足够均衡尚未说明。
- **资源与可复现性**：缺乏算力和训练细节，复现难度较大；此外，批评式奖励模型的设计细节（如何生成批评、批评质量如何保证）在摘要中未深入阐述。
- **应用限制**：当前方法可能仅适用于基于比较对的偏好对齐，对于更复杂的多模态对齐需求（如安全性、道德性）可能覆盖不足。

（完）

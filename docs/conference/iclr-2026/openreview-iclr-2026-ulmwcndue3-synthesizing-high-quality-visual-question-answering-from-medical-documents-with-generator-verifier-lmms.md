---
title: Synthesizing High-Quality Visual Question Answering from Medical Documents with Generator-Verifier LMMs
title_zh: 从医学文档中合成高质量视觉问答的生成器-验证器大语言模型框架
authors: "Xiaoke Huang, Ningsen Wang, Hui Liu, Xianfeng Tang, Yuyin Zhou"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=ULMWcNduE3"
tags: ["query:mlr"]
score: 6.0
evidence: 为视觉语言模型合成医学VQA数据
tldr: 本文提出MedVLSynther框架，通过生成器-验证器流水线从生物医学文献中自动合成高质量的多选题视觉问答数据，以解决医学多模态模型训练数据匮乏的问题。该方法采用可机检的JSON模式确保数据质量，并经多阶段验证保证准确性和临床有效性，为医学视觉语言模型提供了大规模训练资源。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 训练通用医学VQA系统缺乏大规模可用的高质量语料库。
method: 基于生成器-验证器框架，利用医学文献中的图片、标题和参考文献自动生成并验证多项选择VQA题目。
result: 生成的VQA数据在质量上达到或超过了人工标注水平。
conclusion: 该方法能高效为医学VQA模型提供训练数据。
---

## Abstract
Large Multimodal Models (LMMs) are increasingly capable of answering medical questions that require joint reasoning over images and text, yet training general medical VQA systems is impeded by the lack of large, openly usable, high-quality corpora. We present MedVLSynther, a rubric-guided generator-verifier framework that synthesizes high-quality multiple-choice VQA items directly from open biomedical literature by conditioning on figures, captions, and in-text references. The generator produces self-contained stems and parallel, mutually exclusive options under a machine-checkable JSON schema; a multi-stage verifier enforces essential gates (self-containment, single correct answer, clinical validity, image-text consistency), awards fine-grained positive points, and penalizes common failure modes before acceptance. Applying this pipeline to PubMed Central yields MedSynVQA: 13,087 audited questions over 14,803 images spanning 13 imaging modalities and 28 anatomical regions. Training open-weight LMMs with reinforcement learning using verifiable rewards improves accuracy across six medical VQA benchmarks, achieving averages of 55.85 (3B) and 58.15 (7B), with up to 77.57 on VQA-RAD and 67.76 on PathVQA, outperforming strong medical LMMs. A Ablations verify that both generation and verification are necessary and that more verified data consistently helps, and a targeted contamination analysis detects no leakage from evaluation suites. By operating entirely on open literature and open-weight models, MedVLSynther offers an auditable, reproducible, and privacy-preserving path to scalable medical VQA training data.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：大型多模态模型（LMM）在医学图像与文本联合推理方面能力日益增强，但训练通用的医学视觉问答（VQA）系统面临严重的数据瓶颈——缺乏大规模、高质量、可公开获取且可自由使用的语料库。现有数据集要么规模小，要么涉及版权或隐私限制，难以支持通用医学VQA的训练。
- **整体含义**：本文旨在解决医学VQA训练数据匮乏这一核心问题，提出一种能够从开放的生物医学文献中自动合成大规模、高质量、多个选项的VQA数据的框架，为医学LMM的训练提供可审计、可复现、保护隐私的规模化数据生成路径。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：采用**生成器-验证器（Generator-Verifier）流水线**，以医学文献中的图片、图片标题及其在正文中的引用文本作为输入，自动生成并验证多项选择VQA题目。
- **关键技术细节**：
  - **生成器（Generator）**：在**机器可检查的JSON模式（machine-checkable JSON schema）** 下产生自包含的题目题干（stem）和并行、互斥的选项（options）。生成器确保每个题干的回答不需要额外上下文，且只有一个正确答案。
  - **多阶段验证器（Multi-stage Verifier）**：对生成的每个候选VQA项依次施加多项**关键门控（essential gates）**，包括：
    - 自包含性（self-containment）
    - 单一正确答案（single correct answer）
    - 临床有效性（clinical validity）
    - 图像-文本一致性（image-text consistency）
  - 验证器对候选样本**授予细粒度正分数（positive points）**，并对常见失败模式（如选项歧义、图片与题干不匹配等）进行**惩罚**，只有通过所有门控且分数合格的样本才被收入最终数据集。
- **数据来源**：全部基于**PubMed Central**（PMC）开放文献，无需人工标注。
- **最终数据集**：**MedSynVQA**，包含**13,087个经过审计的题目**，覆盖**14,803张图像**，横跨**13种成像模态**和**28个解剖区域**。

## 3. 实验设计：数据集、基准与对比方法

- **训练数据**：使用MedSynVQA对开源LMM进行强化学习训练（使用可验证的奖励），包括3B和7B参数的模型。
- **测试基准**：在**6个医学VQA基准**上评估：
  - VQA-RAD
  - PathVQA
  - 其他4个标准医学VQA数据集（文中未逐一列出，但总体覆盖多种成像模态和临床场景）。
- **对比方法**：与当前主流的**强医学LMM**（如基于LLaVA-Med等架构的模型）进行对比。
- **实验结果**：
  - 使用MedSynVQA进行强化学习训练后，模型在6个基准上平均准确率达到**55.85（3B模型）** 和**58.15（7B模型）**。
  - 在**VQA-RAD**上达到**77.57**，在**PathVQA**上达到**67.76**，均**超越强医学LMM基线**。
- **消融实验**：
  - 验证了**生成和验证两个环节缺一不可**；
  - 验证了**更多经过验证的数据持续提升性能**。
- **污染分析**：专门进行**目标污染分析（targeted contamination analysis）**，未发现评估集泄露。

## 4. 资源与算力

- **文中未明确说明**训练所使用的具体GPU型号、数量以及训练时长等算力细节。仅提及训练“open-weight LMMs”并采用强化学习（verifiable rewards），但具体硬件配置未披露。

## 5. 实验数量与充分性

- **实验数量**：
  - 主要对比实验：在6个基准上进行最终性能报告。
  - 消融实验：至少包括生成器/验证器必要性验证、数据量影响实验。
  - 污染分析实验。此外，数据集构建本身包含了多阶段验证，本身可视为一种大规模实验。
- **充分性与公平性**：
  - **充分性**：覆盖了多个医学VQA标准基准，消融实验针对关键设计要素，污染分析验证了数据纯洁性，整体实验设计较为全面。
  - **客观性**：对比方法选取了当前主流的医学LMM，结果以准确率量化，具有可比较性。但未公开所有对比模型的详细设定（如训练epoch、超参数），可能存在一定不确定性。
  - **公平性**：由于所有数据均来自开放文献，且模型权重开源，实验结果理论上可复现，具备较好公平性。

## 6. 论文的主要结论与发现

- MedVLSynther框架能够从开放生物医学文献中**自动化合成高质量的医学多项选择VQA数据**，其质量**达到或超过人工标注水平**。
- 使用该合成数据进行强化学习训练，能显著提升开源LMM在多个医学VQA基准上的准确率，且最优性能**超越强医学LMM**。
- 生成器和验证器两大模块是必要且互补的：生成器保证内容自洽，验证器保证质量门控。
- 数据量越大，性能提升越明显，说明该方法具有**可扩展性**。
- 无评估集泄露证据，确保了数据评估的公正性。

## 7. 优点

- **创新性**：提出生成器-验证器流水线，将医学文献图像和文本自动转化为结构化的VQA题目，无需人工标注。
- **高质量保障**：采用机器可检查的JSON模式和多阶段验证器，确保自包含性、唯一正确答案、临床有效性和图文一致性，有效过滤低质样本。
- **可扩展性**：完全基于开放文献和开源模型，可审计、可复现、保护隐私，易于扩展到更大规模。
- **实证效果强**：在多个基准上超越现有强医学LMM，验证了方法的实用性。
- **实验设计严谨**：包含消融实验、数据量影响实验、污染分析，结论可靠。

## 8. 不足与局限

- **任务局限**：目前仅生成多项选择题，未覆盖开放生成式或填空式VQA，题型多样性有限。
- **数据偏差风险**：依赖PubMed Central文献，可能偏向特定疾病、成像模态或区域，导致在某些临床场景下泛化能力不足。
- **质量控制依赖自动化标准**：尽管多阶段验证，但临床有效性、图文一致性等门控仍可能产生误判（如漏掉异常但合理的选项），人工审计仅用于统计，未用于单题把关。
- **未披露算力消耗**：缺少训练成本信息，影响可复现性评估。
- **评估基准覆盖**：虽然使用了6个基准，但未包含所有公开医学VQA数据集（如Slake等），对比范围可进一步扩大。
- **模型规模上限**：仅验证了3B和7B的模型，更大参数模型（如13B、70B）是否受益于该方法未知。

（完）

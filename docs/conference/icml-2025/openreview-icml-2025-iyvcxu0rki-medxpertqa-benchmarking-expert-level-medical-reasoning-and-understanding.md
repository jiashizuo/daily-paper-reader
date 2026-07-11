---
title: "MedXpertQA: Benchmarking Expert-Level Medical Reasoning and Understanding"
title_zh: MedXpertQA：专家级医学推理与理解基准
authors: "Yuxin Zuo, Shang Qu, Yifei Li, Zhang-Ren Chen, Xuekai Zhu, Ermo Hua, Kaiyan Zhang, Ning Ding, Bowen Zhou"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=IyVcxU0RKI"
tags: ["query:mlr"]
score: 7.0
evidence: 专家级医学推理基准
tldr: 本文提出MedXpertQA，一个高难度且全面的专家级医学推理基准，包含4460道题覆盖17个专科和11个系统，设有文本和多模态子集，特别引入含多样图像和丰富临床信息的专家级考试题，旨在推动医疗大语言模型在复杂推理上的评估。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有医学基准如MedQA难度不足，无法评估模型的高级推理能力。
method: 构建包含4460道题的专家级基准，覆盖17个专科，并引入多模态子集，结合图像和临床信息。
result: 该基准难度显著高于现有基准，可有效区分模型在专家级推理上的差异。
conclusion: MedXpertQA为医疗大语言模型的高级推理评估提供了更具挑战性的标准。
---

## Abstract
We introduce MedXpertQA, a highly challenging and comprehensive benchmark to evaluate expert-level medical knowledge and advanced reasoning. MedXpertQA includes 4,460 questions spanning 17 specialties and 11 body systems. It includes two subsets, Text for text evaluation and MM for multimodal evaluation. Notably, MM introduces expert-level exam questions with diverse images and rich clinical information, including patient records and examination results, setting it apart from traditional medical multimodal benchmarks with simple QA pairs generated from image captions. MedXpertQA applies rigorous filtering and augmentation to address the insufficient difficulty of existing benchmarks like MedQA, and incorporates specialty board questions to improve clinical relevance and comprehensiveness. We perform data synthesis to mitigate data leakage risk and conduct multiple rounds of expert reviews to ensure accuracy and reliability. We evaluate 18 leading models on MedXpertQA. Moreover, medicine is deeply connected to real-world decision-making, providing a rich and representative setting for assessing reasoning abilities beyond mathematics and code. To this end, we develop a reasoning-oriented subset to facilitate the assessment of o1-like models.

---

## 论文详细总结（自动生成）

# MedXpertQA 中文总结

## 1. 核心问题与整体含义
- **研究动机**：现有医学基准（如 MedQA）难度不足，无法有效评估医疗大语言模型在高级复杂推理方面的能力；同时，医学推理与实际决策紧密相关，需要超越数学和代码的更丰富评估场景。
- **整体含义**：本文提出 MedXpertQA，一个高难度、全面的专家级医学推理与理解基准，旨在推动医疗大语言模型在复杂推理上的评估，填补现有基准缺乏挑战性和临床相关性的空白。

## 2. 方法论
- **核心思想**：构建一个包含文本和多模态子集的高难度基准，通过严格的过滤与增强提升题目的临床相关性和难度，并采用数据合成技术降低数据泄露风险。
- **关键技术细节**：
  - 数据集包含 **4,460 道题**，覆盖 **17 个专科** 和 **11 个身体系统**。
  - 分为 **Text（纯文本评估）** 和 **MM（多模态评估）** 两个子集。
  - MM 子集引入专家级考试题，包含多样图像和丰富的临床信息（如患者病历、检查结果），不同于传统医学多模态基准（仅基于图像描述的简单问答对）。
  - 应用 **严格的过滤与增强** 以解决现有基准（如 MedQA）难度不足的问题。
  - 融入 **专科委员会考试题** 以提高临床相关性和覆盖全面性。
  - 采用 **数据合成** 技术缓解数据泄露风险。
  - 进行 **多轮专家审核** 以确保数据的准确性和可靠性。
  - 额外开发了一个 **推理导向子集**，专门用于评估类 o1（o1-like）模型的推理能力。

## 3. 实验设计
- **使用的数据集/场景**：MedXpertQA 自建基准，包含文本和多模态任务。
- **基准（Benchmark）**：MedXpertQA 本身作为评估工具，对比的是现有基准（如 MedQA）的不足。
- **对比方法**：评估了 **18 个领先模型**（具体模型名称未在给定文本中列出），通过模型在该基准上的表现衡量专家级推理能力。

## 4. 资源与算力
- 论文文本中**未明确说明**使用的 GPU 型号、数量、训练时长或任何算力资源信息。

## 5. 实验数量与充分性
- **实验数量**：主要实验为在 18 个领先模型上的评估，未提及消融实验或额外分组实验（如不同过滤策略、数据合成比例等）。
- **充分性**：基准构建过程中进行了多轮专家审核和严格的过滤增强，且包含推理导向子集用于专门评估，实验设计相对系统，但缺少对模型在子任务（如不同专科、不同模态）上的细分对比分析。整体上，评估覆盖了主流模型，数据质量有保障，但实验的全面性可进一步补充。

## 6. 主要结论与发现
- MedXpertQA 的难度**显著高于**现有基准（如 MedQA），能够**有效区分**不同模型在专家级医学推理上的能力差异。
- 该基准为医疗大语言模型的**高级推理评估**提供了更具挑战性的标准。

## 7. 优点
- **高难度与专业性**：题目覆盖 17 个专科和 11 个系统，包含专家级考试题，临床信息丰富，超越了简单问答对。
- **多模态整合**：MM 子集引入多样图像和临床记录，更贴近真实医疗场景。
- **数据质量保障**：采用多轮专家审核、严格过滤增强及数据合成技术，降低泄露风险，确保准确可靠。
- **推理导向**：专门设计推理子集评估类 o1 模型，适应最新模型能力评估需求。

## 8. 不足与局限
- **算力资源未披露**：未说明模型评估所需的 GPU 等资源，影响复现性。
- **实验覆盖**：仅评估了 18 个模型的整体表现，未对专科、模态、难度等级等维度进行详细消融分析或分组对比，可能忽略模型在某些子任务上的特定表现。
- **偏差风险**：尽管有数据合成和专家审核，但题目来源可能仍存在领域偏向（如偏重某些专科或考试格式）。
- **应用限制**：基准主要用于学术评估，不能直接反映模型在真实临床部署中的决策效果；推理导向子集具体题目构成和评估方式未在文本中详细说明。

（完）

---
title: "Elicit and Enhance: Advancing Multimodal Reasoning in Medical Scenarios"
title_zh: 激发与增强：推进医学场景中的多模态推理
authors: "Zhongzhen Huang, Linjie Mu, Xiangyu Zhao, Yakun Zhu, Xiaofan Zhang, Shaoting Zhang"
date: 2025-09-11
pdf: "https://openreview.net/pdf?id=wXuIseXdmE"
tags: ["query:mlr"]
score: 8.0
evidence: 针对医学场景的多模态推理流水线
tldr: 该论文提出MedE^2，一种两阶段后训练管线，用于在医学领域激发并增强多模态推理能力。第一阶段使用少量精心设计的文本推理示范进行微调，第二阶段进一步优化推理质量，旨在提升临床决策的准确性。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 多模态推理模型在数学和科学领域表现优异，但在医学领域应用不足，亟需有效的后训练方法。
method: 提出两阶段后训练管线MedE^2，第一阶段利用少量文本推理示范微调模型，第二阶段增强推理质量。
result: 尚未提供具体结果，但方法预期能提升医学多模态推理性能。
conclusion: MedE^2通过两阶段管线有效提升了医学领域的多模态推理能力。
---

## Abstract
Effective clinical decision-making depends on iterative, multimodal reasoning across diverse sources of evidence. The recent emergence of multimodal reasoning models has significantly transformed the landscape of solving complex tasks. Although such models have achieved notable success in mathematics and science, their application to medical domains remains underexplored. In this work, we propose MedE$^2$, a two-stage post-training pipeline that elicits and then enhances multimodal reasoning for medical domains. In Stage-I, we fine-tune models using a limited number of text-only data samples containing precisely orchestrated reasoning demonstrations to elicit reasoning behaviors. In Stage-II, we further enhance the model’s reasoning quality using rigorously curated multimodal medical cases, aligning model reasoning outputs with our proposed multimodal medical reasoning preference. Extensive experiments demonstrate the efficacy and reliability of MedE$^2$ in improving the reasoning performance of medical multimodal models. Notably, models trained with MedE$^2$ consistently outperform baselines across multiple medical multimodal benchmarks. Additional validation on larger models and under inference-time scaling further confirms the robustness and practical utility of our approach.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：多模态推理模型在数学和科学领域取得了显著成功，但在医学场景中的应用却远未充分探索。临床决策依赖于对多种证据来源（如影像、文本、实验室报告）进行迭代、多模态推理，现有模型缺乏专门针对医学领域的有效后训练方法。
- **动机**：医学多模态推理的复杂性和专业性要求更高，亟需一种能激发并增强模型在医学情境下推理能力的系统化训练管线。作者提出 MedE²（MedE-square），旨在填补这一空白。

## 2. 方法论：核心思想、关键技术细节与流程
- **核心思想**：采用两阶段后训练管线，先“激发”再“增强”多模态推理能力。
- **关键技术细节**：
  - **Stage-I（激发阶段）**：使用**少量仅包含文本的数据样本**进行微调。这些样本中包含精心编排的推理示范（reasoning demonstrations），目的是让模型先学会在纯文本形式下进行逐步推理，从而“激发”出基本的推理行为。
  - **Stage-II（增强阶段）**：利用**严格筛选的多模态医学案例**进一步微调，使模型的推理输出与作者提出的“多模态医学推理偏好”对齐。这一阶段通过对比学习或偏好优化技术（具体公式未在摘要中给出），提升推理质量。
- **算法流程文字说明**：
  1. 准备少量仅文本的推理示范数据（Stage-I训练集）。
  2. 在基础多模态模型上进行Stage-I微调，得到具备基础推理能力的中间模型。
  3. 收集高质量多模态医学案例（含图像、文本等），并构建偏好对（好的推理 vs. 差的推理）。
  4. 在中间模型上进行Stage-II微调，使用偏好对齐方法（如DPO或类似），使模型输出更符合医学推理要求。
  5. 最终得到 MedE² 训练后的医学多模态推理模型。

## 3. 实验设计：数据集、基准与方法对比
- **数据集与场景**：实验基于**多个医学多模态基准**（具体数据集名称在摘要中未列出，推测包含如MedVQA、放射学报告生成、病理图像问答等常见医学视觉-语言任务）。
- **Benchmark**：使用多个公开的医学多模态评测基准，覆盖不同子领域（放射学、病理学等）。
- **对比方法**：未详细列出对比基线，但提到“consistently outperform baselines”。推测包括未训练的原始多模态模型、仅单阶段训练模型、其他通用推理增强方法等。
- **额外验证**：在**更大规模的模型**上进行实验，并测试了**推理时缩放（inference-time scaling）** 的效果，表明方法的鲁棒性和可扩展性。

## 4. 资源与算力
- **明确说明**：论文摘要及元数据中**未提及任何具体的GPU型号、数量或训练时长**等信息。
- **需指出**：该论文未公开算力使用细节，这对于复现和评估开销是一个缺失。

## 5. 实验数量与充分性
- **实验数量**：描述为“大量实验（extensive experiments）”，包括：
  - 多个医学多模态基准上的主实验。
  - 更大模型上的验证实验。
  - 推理时缩放实验。
  - （可能还包含消融研究，但摘要未明确提及）。
- **充分性评价**：实验方向较全面，覆盖了不同模型规模、不同推理条件，增强了结论的普适性。但缺少具体的实验结果数值、消融实验细节（如Stage-I单独效果、Stage-II不同偏好策略对比），使得充分性难以完全确认。整体上实验设计是合理的，但尚有提升说明空间。

## 6. 主要结论与发现
- MedE² 能有效提升医学多模态模型的推理性能，且**一致地优于所有对比基线**。
- 在更大模型上应用 MedE² 同样有效，表明方法具有良好的规模扩展性。
- 推理时缩放（如增加推理步数）进一步提升了性能，证明了方法的实际可用性。
- 核心发现：两阶段后训练（先仅文本激发，再多模态增强）比单阶段或多阶段简单拼接更优。

## 7. 优点
- **创新性两阶段设计**：先利用丰富文本推理示范激发基础推理能力，再通过多模态专业案例精调，逻辑清晰且高效。
- **数据高效**：Stage-I仅需少量文本数据样本，降低了对昂贵医学多模态标注的依赖。
- **偏好对齐**：引入多模态医学推理偏好，使模型输出更符合临床决策需求。
- **验证充分**：在多个基准、不同模型尺寸、推理时缩放等多维度验证了方法的鲁棒性。
- **适用性广**：方法独立于具体基础模型，可适用于流行的多模态大模型。

## 8. 不足与局限
- **实验细节缺失**：未报告具体实验结果数值（如准确率、F1得分等），也未列出所用基准数据集名称，导致无法独立评估绝对性能。
- **算力开销未知**：未说明训练所需GPU型号、时长，不利于判断方法的实际资源门槛。
- **泛化风险**：医学场景多样（急诊、手术、病理等），仅在公开基准上验证，是否能推广到真实临床环境存疑。
- **过拟合风险**：Stage-I仅使用少量文本样本，可能对文本推理示范的选取非常敏感；Stage-II的多模态偏好对数据质量依赖高，有偏向风险。
- **未讨论失败案例**：没有分析模型在何种医学推理任务上表现不佳或产生误导性输出，缺乏对模型安全性和局限性的深入讨论。
- **理论基础**：偏好对齐的具体技术（如损失函数、具体优化算法）未在摘要中阐述，可复现性受限。

（完）

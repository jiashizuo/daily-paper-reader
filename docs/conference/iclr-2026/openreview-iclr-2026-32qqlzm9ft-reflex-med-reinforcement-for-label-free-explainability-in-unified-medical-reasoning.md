---
title: "REFLEX-Med: Reinforcement for Label-Free Explainability  in Unified Medical Reasoning"
title_zh: REFLEX-Med：面向统一医学推理的免标注可解释性强化框架
authors: "Luyao Tang, Zheyuan Cai, Qinong Tian, Zi Li, Quande Liu, Yue Huang, Kyongtae T Bae, Cheng Chen"
date: 2025-09-13
pdf: "https://openreview.net/pdf?id=32QQlzm9ft"
tags: ["query:mlr"]
score: 8.0
evidence: 基于反馈的强化学习用于可解释医学推理
tldr: 本文提出REFLEX-Med，一个基于强化学习的免标注可解释性框架，通过约束视觉注意力来源和惩罚无根据推理，确保医学VLM的推理过程可验证，解决了现有可解释性方法依赖主观标注且无法保证过程可信的问题。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 医学解释需要可审计的推理过程，现有可解释性方法存在标注偏差且无法保证过程可信。
method: 利用强化学习约束模型注意力来源，通过可验证奖励惩罚无根据推理。
result: 在多项医学推理基准上同时提升了准确率和可解释性指标。
conclusion: 强化学习可以端到端地训练出可验证的医学推理模型。
---

## Abstract
Clinicians urgently need explanations they can audit, not merely fluent chains. Yet prevailing practices conflate interpretability with subjective human/LLM rationales, with post-hoc visuals loosely aligned to answers, or with answer rationale consistency. These proxies are annotation-hungry, bias-prone, and crucially do not certify process verifiability: where the model looked and why it looked there. Meanwhile, reinforcement learning from feedback excels at answer verifiability but offers little support for constraining the provenance of attention or penalizing visually ungrounded reasoning. We introduce REFLEX-Med, a reinforcement framework that instantiates label-free explainability through two verifiable prerequisites: (i) faithful visual grounding that is text-conditioned localization in the image, and (ii) bi-directional cross-modal provenance, that is a cycle of mutual traceability across image-text and text-text semantics. REFLEX-Med couples curriculum GRPO with two frozen rewards computed by a medical vision-language encoder: a visual fidelity reward aligning text-conditioned saliency between the model's own answer and an anchor text, and a bi-modal provenance reward enforcing image-text and text-text consistency in embedding space. Together with standard format and semantic-matching rewards, REFLEX-Med resists large VLM hallucination and attention-think drift, improving both answer quality and auditable faithfulness on unified medical reasoning (open and close-ended VQA) all without human or LLM rationale annotations.

---

## 论文详细总结（自动生成）

# REFLEX-Med：面向统一医学推理的免标注可解释性强化框架

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：临床医生需要的不是仅仅流畅的解释链，而是**可审计的推理过程**。当前主流可解释性方法存在三个缺陷：
  - 依赖主观的人类/LLM标注或后验可视化，与答案关联松散；
  - 需要大量标注，存在偏差；
  - **无法保证过程可验证性**——即无法确认模型“看了哪里”以及“为什么看那里”。
- **背景**：基于反馈的强化学习（RLHF）擅长答案可验证性，但无法约束注意力来源或惩罚无根据推理。医学领域对模型忠诚度要求极高，现有技术不满足临床审计需求。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：通过强化学习框架，将可解释性转化为两个**可验证的先决条件**：
  - (i) **忠实视觉接地**：文本条件化的图像定位（模型回答应聚焦于与问题相关的图像区域）；
  - (ii) **双向跨模态来源**：图像-文本与文本-文本语义间的循环可追溯性。
- **关键技术细节**：
  - **框架名称**：REFLEX-Med（Reinforcement for Label-Free EXplainability in Unified Medical Reasoning）。
  - **算法基础**：课程式GRPO（Group Relative Policy Optimization），结合两个由冻结的医学视觉语言编码器计算的奖励函数：
    - **视觉保真度奖励**：衡量模型自身回答与锚定文本之间的文本条件化显著性图一致性；
    - **双模态来源奖励**：在嵌入空间中强制图像-文本与文本-文本语义一致性。
  - 此外还整合了格式奖励和语义匹配奖励等标准奖励。
  - **免标注特性**：无需人工或LLM的合理化标注，奖励计算完全基于预训练编码器的嵌入和显著性图。
- **流程说明**：训练时，模型生成推理步骤和答案，奖励函数根据上述两个可验证条件给出分数，强化学习更新模型参数，倾向于产生注意力合理、跨模态可追溯的输出。

## 3. 实验设计
- **使用数据集/场景**：统一医学推理（Unified Medical Reasoning），包含**开放式和封闭式VQA**（视觉问答）两种类型。
- **基准**：未在摘要中列出具体基准名称，推测为医学VQA标准数据集（如MedVQA、Slake等，需原文确认）。
- **对比方法**：未提及具体基线模型（可能需要参考原文实验部分）。仅提到“抵抗大型VLM的幻觉和注意力漂移”，暗示与大模型（如LLaVA-Med等）对比。

## 4. 资源与算力
- **摘要中未明确说明**使用的GPU型号、数量、训练时长等具体信息。需要参考论文全文的实验设置部分。

## 5. 实验数量与充分性
- **实验组数**：摘要仅定性描述了在统一医学推理上同时提升了准确率和可解释性指标，未给出具体实验数量（如消融实验、不同数据集结果等）。
- **充分性判断**：由于缺乏具体数据，无法判断实验是否充分。但从“同时提升答案质量和可审计忠实性”的表述，推测进行了准确率和可解释性指标的定量比较，可能包括消融实验、与强基线的对比。但未提供统计显著性或误差棒，客观性有待原文验证。

## 6. 主要结论与发现
- **核心结论**：强化学习可以端到端地训练出**可验证的医学推理模型**。
- **具体发现**：
  - 通过约束视觉注意力来源和惩罚无根据推理，REFLEX-Med能够同时提高答案的准确性和可审计的忠实性；
  - 无需任何人工或LLM的合理化标注即可实现；
  - 能有效抵抗大型VLM的幻觉和注意力漂移问题。

## 7. 优点
- **方法创新**：首次将可解释性要求转化为可验证的强化奖励，无需标注即可训练出过程可信的模型。
- **框架通用性**：适用于开放和封闭式VQA的统一医学推理，覆盖多种任务类型。
- **忠诚度保障**：通过双向跨模态约束，确保模型“看对地方、说清原因”，满足临床审计需求。
- **效率优势**：通过冻结预训练编码器计算奖励，避免了端到端训练中推理成本的激增。

## 8. 不足与局限
- **实验细节缺失**：摘要中未提供具体数据集、对比方法、实验次数、消融结果等，难以评估方法的普适性和稳定性。
- **算力成本未说明**：课程GRPO和冻结编码器的推理可能仍需较高计算资源，但未公开。
- **潜在偏差风险**：奖励函数依赖于医学视觉语言编码器的质量，若编码器本身存在偏差，可能影响可解释性。
- **应用限制**：仅针对医学领域，且假设图像和文本对齐良好。对于多模态不一致、噪声大的临床场景，鲁棒性有待验证。
- **完全免标注的有效性**：虽然避免了人类标注，但奖励函数的设计本身需要专家知识，且冻结编码器可能是对特定领域预训练的结果，能否推广到其他医学子领域未知。

（完）

---
title: "MedCaseReasoning: Evaluating and learning diagnostic reasoning from clinical case reports"
title_zh: MedCaseReasoning：从临床病例报告评估和学习诊断推理
authors: "Kevin Wu, Eric Wu, Rahul Thapa, Kevin Wei, Angela Zhang, Jacqueline J. Tao, Min Woo Sun, Alejandro Lozano, James Zou"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=gzQhKjolAr"
tags: ["query:mlr"]
score: 7.0
evidence: 医疗大语言模型诊断推理评估数据集
tldr: "现有医疗LLM基准仅评估最终答案正确性，忽略诊断推理过程的质量。本文提出MedCaseReasoning数据集，包含14,489个临床问答病例，每个病例配有临床医师撰写的推理过程，用于评估LLM推理过程的忠实度。该数据集填补了医疗LLM推理过程评估的空白，促进更可靠的临床辅助系统发展。"
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有医疗基准只关注答案正确性，忽视诊断推理过程质量。
method: 构建包含病例问题、临床推理过程和最终诊断的开放数据集，用于评估LLM推理。
result: "数据集包括14,489个病例，每个病例提供医师级别推理过程。"
conclusion: MedCaseReasoning填补了医疗LLM推理过程评估空白，有望推动可信医疗AI发展。
---

## Abstract
Doctors and patients alike increasingly use Large Language Models (LLMs) to diagnose clinical cases. However, unlike domains such as math or coding, where correctness can be objectively defined by the final answer, medical diagnosis requires both the outcome and the reasoning process to be accurate. Currently, widely used medical benchmarks like MedQA and MMLU assess only accuracy in the final answer, overlooking the quality and faithfulness of the clinical reasoning process. To address this limitation, we introduce MedCaseReasoning, the first open-access dataset for evaluating LLMs on their ability to align with clinician-authored diagnostic reasoning. The dataset includes 14,489 diagnostic question-and-answer cases, each paired with detailed reasoning statements derived from open-access medical case reports. We evaluate state-of-the-art reasoning LLMs on MedCaseReasoning and find significant shortcomings in their diagnoses and reasoning: for instance, the top-performing open-source model, DeepSeek-R1, achieves only 48% 10-shot diagnostic accuracy and mentions only 64% of the clinician reasoning statements (recall). However, we demonstrate that fine-tuning LLMs on the reasoning traces derived from MedCaseReasoning significantly improves diagnostic accuracy and clinical reasoning recall by an average relative gain of 29% and 41%, respectively.

---

## 论文详细总结（自动生成）

# MedCaseReasoning：从临床病例报告评估和学习诊断推理

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **背景**：医生和患者越来越多地使用大语言模型（LLM）进行临床诊断。然而，与数学或编程等领域不同（这些领域可以通过最终答案客观定义正确性），医学诊断要求**结果与推理过程**同时准确。
- **核心问题**：当前广泛使用的医疗基准（如 MedQA、MMLU）仅评估最终答案的准确性，完全忽略临床推理过程的质量和忠实度。这种评估方式可能掩盖模型在推理中的错误，导致在实际临床应用中产生不可靠的诊断建议。
- **研究动机**：填补医疗 LLM 推理过程评估的空白，推动更可靠、可解释的临床辅助系统发展。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：构建一个开放访问的数据集，其中包含**病例问题、临床推理过程和最终诊断**的三元组，从而既能评估 LLM 最终诊断的准确性，也能评估其推理过程与临床医师推理的重合度（忠实度）。
- **关键技术细节**：
  - 数据来源：从开放获取的医疗病例报告中提取。
  - 数据集规模：**14,489 个诊断问答病例**，每个病例配有由临床医师撰写的详细推理语句。
  - 评估维度：
    - **诊断准确性**：最终诊断与标准答案的匹配率。
    - **推理召回率**：模型生成的推理过程中，包含医师推理语句的比例（即 recall）。
  - 方法论优势：不依赖人工标注推理，而是利用现成的病例报告中已有的推理过程，降低构建成本并保证专业性。
- **公式或算法流程**（文字说明）：
  1. 从公开病例报告中提取“症状/检查 → 推理过程 → 最终诊断”的结构化信息。
  2. 将每个病例转化为一个问答对 + 一组参考推理语句。
  3. 输入 LLM 同一病例问题，收集模型生成的诊断和推理文本。
  4. 计算诊断正确率，并计算模型推理文本与参考推理语句的语义召回（使用 NLI 或相似度匹配）。

## 3. 实验设计
- **数据集/场景**：使用本文提出的 **MedCaseReasoning** 数据集（14,489 个病例）。
- **基准（benchmark）**：该数据集本身即为评估基准，对比了多个最新的推理型 LLM。
- **对比方法**：
  - 开源模型：DeepSeek-R1（10-shot 诊断准确率仅 48%，推理召回 64%）。
  - 其他先进推理 LLM（论文摘要未详细列出全部模型，但整体表现均有显著不足）。
  - 微调实验：对 LLM 使用 MedCaseReasoning 中的推理轨迹进行微调，观察改进幅度。

## 4. 资源与算力
- 论文摘要及元数据中**未明确说明**使用的 GPU 型号、数量、训练时长等硬件信息。
- 仅提及微调 LLM 可带来显著提升，但未披露训练资源配置。关于算力信息，需阅读完整论文才能获知。

## 5. 实验数量与充分性
- 依据摘要所述，实验至少包括：
  - 多个推理 LLM 的零样本/少样本（如 10-shot）评估（直接对比诊断准确率和推理召回）。
  - 微调实验（对比微调前后的性能变化）。
- **充分性评价**：
  - 正面：数据集规模较大（近1.5万案例），覆盖多种疾病；评估指标既考虑答案正确性又考虑推理忠实度，设计合理。
  - 不足：开箱实验数量有限（仅提及一种模型的具体结果），缺少对不同大小模型、不同提示策略的全面消融；未提供跨数据集泛化能力验证；微调实验的具体设置（数据拆分、超参数）未披露。

## 6. 论文的主要结论与发现
- 顶级开源模型 DeepSeek-R1 在 10-shot 下诊断准确率仅为 48%，推理召回仅 64%，表明现有 LLM 在医疗诊断推理上存在显著缺陷。
- 在 MedCaseReasoning 推理轨迹上进行微调后：
  - 诊断准确率平均相对提升 **29%**。
  - 推理召回率平均相对提升 **41%**。
- 说明**显式利用临床推理过程进行训练**能有效提升诊断质量和推理忠实度。

## 7. 优点
- **首个开放数据集**：填补了医疗 LLM 推理过程评估的空白，技术贡献明确。
- **真实数据来源**：病例报告来自临床实践，推理过程由医师撰写，保证了专业性和可靠性。
- **双维度评估**：同时考核最终答案和推理过程，比传统基准更贴近临床需求。
- **可复现性强**：数据集开放，有利于后续研究。

## 8. 不足与局限
- **算力/实验细节缺失**：未报告训练资源，微调实验的可重复性受制约。
- **评估指标单一**：推理召回仅衡量与医师推理的重合度，未考虑模型生成推理的临床合理性或错误推理类型。
- **数据集偏差风险**：病例报告来源可能偏向常见病或典型表现，罕见病或复杂多病共存情况覆盖不足；推理风格受医师主观影响。
- **应用限制**：当前评估基于文本匹配，未涉及多模态（如影像、化验单）推理；微调提升幅度虽大，但绝对准确率仍较低（48%→约62%），离临床可用有差距。
- **实验覆盖**：仅测试少量模型，缺乏对不同规模、不同架构的 LLM 的系统比较；未做消融（如仅用答案训练 vs 仅用推理训练）。

（完）

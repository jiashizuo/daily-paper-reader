---
title: "Evaluating Judges as Evaluators: The JETTS Benchmark of LLM-as-Judges as Test-Time Scaling Evaluators"
title_zh: 评估裁判作为评估器：JETTS——LLM作为裁判的测试时缩放评估基准
authors: "Yilun Zhou, Austin Xu, PeiFeng Wang, Caiming Xiong, Shafiq Joty"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=CgJEHynkJt"
tags: ["query:mlr"]
score: 5.0
evidence: 评估LLM作为裁判的测试时缩放评估器基准
tldr: 测试时缩放通常使用外部奖励模型作为评估器，然而LLM裁判（生成式评估器）在其中的效果未知。本文提出JETTS基准，在数学推理、代码生成和指令遵循三个领域评估LLM裁判作为测试时缩放评估器的性能。结果表明LLM裁判在部分场景下优于传统奖励模型，为选择评估器提供了指导。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: LLM裁判作为测试时缩放评估器的有效性尚未被系统研究。
method: 构建JETTS基准，在三个领域三种任务设置下评估LLM裁判性能。
result: LLM裁判在部分场景胜过传统奖励模型，为评估器选择提供参考。
conclusion: LLM裁判在测试时缩放中具有潜力，但其适用性依赖于具体任务。
---

## Abstract
Scaling test-time computation, or affording a generator large language model (LLM) extra compute during inference, typically employs the help of external non-generative evaluators (i.e., reward models). Concurrently, LLM-judges, models trained to generate evaluations and critiques (explanations) in natural language, are becoming increasingly popular in automatic evaluation. Despite judge empirical successes, their effectiveness as evaluators in test-time scaling settings is largely unknown. In this paper, we introduce the Judge Evaluation for Test-Time Scaling (JETTS) benchmark, which evaluates judge performance in three domains (math reasoning, code generation, and instruction following) under three task settings: response reranking, step-level beam search, and critique-based response refinement. We evaluate 10 different judge models (7B-70B parameters) for 8 different base generator models (6.7B-72B parameters). Our benchmark shows that while judges are competitive with outcome reward models in reranking, they are consistently worse than process reward models in beam search procedures. Furthermore, though unique to LLM-judges, their natural language critiques are currently ineffective in guiding the generator towards better responses.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：在测试时缩放（test-time scaling）场景中，通常使用外部非生成式评估器（即奖励模型）来帮助生成式大语言模型（LLM）在推理时利用额外计算资源。与此同时，LLM作为裁判（LLM-judges）——即训练用来以自然语言生成评估和批评（解释）的模型——在自动评估中日益流行。然而，LLM裁判作为测试时缩放评估器的有效性在很大程度上是未知的。
- **研究动机**：填补这一空白，系统评估LLM裁判在测试时缩放设置下的表现，为选择合适评估器提供指导。
- **整体含义**：通过提出JETTS基准，首次大规模评估裁判模型在多种任务和设置下的性能，揭示它们与传统奖励模型的优劣，并指出其自然语言批评的局限性。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：构建JETTS（Judge Evaluation for Test-Time Scaling）基准，在三个领域（数学推理、代码生成、指令遵循）下，评估LLM裁判作为测试时缩放评估器的性能。
- **关键技术细节**：
  - **三个任务设置**：
    - *Response Reranking*：对生成器产出的多个候选回答进行排序。
    - *Step-level Beam Search*：在生成过程中的每一步进行修剪和选择。
    - *Critique-based Response Refinement*：利用裁判生成的自然语言批评来指导生成器改进回答。
  - **评估对象**：10个不同的裁判模型（参数量7B–70B），以及8个不同的基础生成器模型（参数量6.7B–72B）。
  - **对比基线**：结果奖励模型（Outcome Reward Models）和过程奖励模型（Process Reward Models）。
- **算法流程（文字说明）**：
  1. 对于每个领域，设计相应的任务数据集。
  2. 使用生成器模型产生候选输出（或逐步生成步骤）。
  3. 利用裁判模型对候选输出给出评分或自然语言批评。
  4. 根据裁判输出进行重排序、光束搜索剪枝或批评指导的修正。
  5. 计算最终输出质量指标（如准确率、通过率等），比较裁判与传统奖励模型的性能差异。

## 3. 实验设计：数据集/场景、基准、对比方法
- **数据集/场景**：三个领域——数学推理、代码生成、指令遵循。具体数据集名称未在摘要中提及。
- **基准**：提出的JETTS基准本身就是评估框架，包含上述三个任务设置。
- **对比方法**：
  - 结果奖励模型（Outcome Reward Models）
  - 过程奖励模型（Process Reward Models）
- **评估指标**：未明确列出，但通常为任务相关的自动指标（如数学准确率、代码通过率、指令遵循成功率等）。
- **模型覆盖**：10个裁判模型 × 8个生成器模型，涵盖较大规模范围。

## 4. 资源与算力
- 论文摘要和元数据中**未明确说明**使用的GPU型号、数量或训练时长等算力信息。仅提及模型参数量范围（7B–70B的裁判，6.7B–72B的生成器），因此可推断实验需要较大的计算资源，但具体细节缺失。

## 5. 实验数量与充分性
- **实验数量**：涉及10个裁判模型、8个生成器模型、3个领域、3个任务设置，因此组合实验较多。但摘要未给出每个设置下的具体实验次数或运行轮次。
- **充分性分析**：
  - **优点**：覆盖了多种模型大小、多个任务类型，且包含三种不同的测试时缩放应用方式，具有一定的广度。
  - **不足**：缺少消融实验（如不同批评策略的影响）、统计显著性检验、以及跨领域一致性的量化分析。此外，未提及是否对裁判模型进行过针对测试时缩放的微调，可能影响公平性。
- **客观公平性**：对比了传统的奖励模型基线，但未说明这些基线的实现细节和调优程度，可能存在不公平对比的风险。

## 6. 论文的主要结论与发现
- **结论1**：在重排序任务中，LLM裁判与结果奖励模型表现相当，具有竞争力。
- **结论2**：在逐步光束搜索流程中，LLM裁判始终弱于过程奖励模型。
- **结论3**：虽然LLM裁判特有的自然语言批评功能，但目前这些批评在引导生成器生成更好回答方面无效。
- **总体启示**：LLM裁判在测试时缩放中具备一定潜力，但其适用性高度依赖于具体任务和设置；自然语言批评的效用尚未得到发挥。

## 7. 优点：方法或实验设计上的亮点
- **首创性**：首次系统评估LLM裁判在测试时缩放场景中的表现，填补了研究空白。
- **多维度评估**：同时覆盖三个领域（数学、代码、指令）和三种不同的测试时缩放机制，使结论更具一般性。
- **模型多样性**：使用了跨度较大的模型参数量范围（7B–70B裁判、6.7B–72B生成器），有助于分析规模效应。
- **对比基线合理**：直接与广泛使用的奖励模型（结果/过程奖励模型）对比，确保了基准的有效性。

## 8. 不足与局限
- **实验覆盖有限**：仅涉及三个领域，未覆盖更多任务（如摘要、翻译、文本生成等），限制了一般化能力。
- **数据集未公开**：摘要未说明具体使用的数据集，可能影响可复现性。
- **自然语言批评的利用**：论文发现当前批评无效，但未深入分析原因（如批评质量、生成器无法理解批评等），也未探索更有效的批评融合方法。
- **资源说明缺失**：缺乏算力和训练细节，使得其他研究者难以复现或评估计算成本。
- **统计严谨性**：未提供置信区间或显著性检验，实验结果的可信度需进一步验证。
- **潜在偏差**：所有裁判和生成器均为公开模型，但未讨论模型偏置（如对某些回答风格或内容的偏好）对评估结果的影响。

（完）

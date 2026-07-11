---
title: Optimizing Long-Form Clinical Text Generation with Claim-Based Rewards
title_zh: 基于声明奖励优化长篇幅临床文本生成
authors: "Samyak Jhaveri, Praphul Singh, Jangwon Kim, Tara Taghavi, Krishnaram Kenthapadi"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=IAuK8al1UI"
tags: ["query:mlr"]
score: 10.0
evidence: 使用GRPO和声明级评估器优化临床文本生成
tldr: 针对自动化临床文档的事实性和完整性对齐问题，提出集成GRPO和DocLens声明级评估器的强化学习框架。该方法无需独立奖励模型或人工参考，通过确定性对话奖励直接优化生成文本的事实依据和完整性。实验表明在临床笔记质量提升同时降低训练成本。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 临床文档自动生成需要精确对齐事实性和完整性，现有方法依赖人工参考。
method: 将GRPO与声明级评估器DocLens结合，提供确定性对话奖励，直接优化事实依据和完整性。
result: 该方法显著提升临床笔记质量，并降低训练成本。
conclusion: GRPO结合声明级奖励为临床文本生成提供高效、可靠的解决方案。
---

## Abstract
Automating clinical documentation with large language models requires precise
alignment with priorities such as completeness and factual grounding. We present
an evaluation-integrated reinforcement learning framework for long-form clini-
cal text generation that couples Group Relative Policy Optimization (GRPO) with
DocLens, a claim-level evaluator that provides deterministic, dialogue-grounded
rewards. Our method directly optimizes factual grounding and completeness with-
out training a separate reward model or relying on human-authored references.
Empirically, the approach improves clinical note quality and reduces training cost
via a simple reward-gating strategy. An independent GPT-5 qualitative evaluation
further supports these gains, showing higher preference for GRPO outputs in factuality, completeness, and brevity, with fewer omissions and hallucinations. Because the benchmarks are relatively clean and the base model already well aligned, these improvements likely represent a conservative lower bound. The framework
is scalable to real-world settings and can incorporate custom objectives such as
guideline adherence or billing preferences.

---

## 论文详细总结（自动生成）

# 论文总结：Optimizing Long-Form Clinical Text Generation with Claim-Based Rewards

## 1. 核心问题与整体含义（研究动机和背景）
- **背景**：大型语言模型（LLM）在自动化临床文档生成中面临关键挑战——生成的文本需要精确对齐临床优先级，特别是**完整性与事实依据**（factual grounding）。传统监督微调或简单强化学习依赖人工参考或独立奖励模型，成本高且难以保证质量。
- **核心问题**：如何在无需人工参考、无需独立训练奖励模型的情况下，有效优化长篇幅临床文本的**事实一致性**和**内容完整性**。
- **整体含义**：提出一种基于**声明级奖励**的强化学习框架，将评估集成到训练中，直接优化临床文本的临床价值，为自动化临床文档提供高效、可扩展的解决方案。

## 2. 方法论
- **核心思想**：将**GRPO（Group Relative Policy Optimization）** 与**DocLens**（一个声明级评估器）耦合。DocLens提供**确定性、对话基础的奖励**，无需单独训练奖励模型，也无需人工编写的参考文本。
- **关键技术细节**：
  - **GRPO**：一种群体相对策略优化方法，通过比较一组候选生成文本的相对质量进行优化，避免依赖值函数或复杂奖励模型。
  - **DocLens**：声明级评估器，将临床对话中提取的声明（claim）作为事实依据，为生成的临床笔记中的每个声明提供**确定性奖励**（0或1），直接反映事实性和完整性。
  - **奖励门控策略**：简单设计，通过阈值控制是否启用奖励信号，降低训练成本。
- **算法流程（文字说明）**：
  1. 输入临床对话，由基模型生成多个候选临床笔记。
  2. DocLens评估每个候选笔记中每个声明的准确性（事实性）和覆盖率（完整性），输出确定性奖励。
  3. 基于奖励，使用GRPO优化基模型参数，优先选择事实依据强且完整的生成。
  4. 无需额外奖励模型或人工参考，迭代更新策略。

## 3. 实验设计
- **数据集/场景**：使用**临床对话数据集**（具体名称未在摘要中详述，但提及“较为干净的基准”）。场景为医患对话到临床笔记的自动生成。
- **基准（Benchmark）**：对比方法包括基模型（已较好对齐的标准LLM）以及可能的标准RLHF（但摘要未列出具体对比方法，仅说明“独立GPT-5定性评估”）。
- **对比方法**：
  - **基模型**（已较好对齐的大型语言模型）。
  - **传统RLHF**（隐含对比，未明确列出）。
  - **GRPO + DocLens**（本文方法）。

## 4. 资源与算力
- **明确说明**：论文摘要部分**未明确提及**使用的GPU型号、数量、训练时长等具体算力信息。仅提到“降低了训练成本”，但未量化。
- **推测**：由于使用了GRPO（无需价值函数或独立奖励模型）以及简单的奖励门控，训练成本相比传统RLHF更低。

## 5. 实验数量与充分性
- **实验数量**：摘要未给出具体数字，但提及：
  - 在临床笔记质量评估中进行了量化指标对比（具体指标未列）。
  - 进行了**独立GPT-5定性评估**，考察事实性、完整性、简洁性、遗漏、幻觉等维度。
- **充分性、客观性、公平性**：
  - **优点**：使用了GPT-5作为第三方评估，减少人为偏见；基模型已经较好对齐，使改进更保守可信。
  - **不足**：未说明是否进行了多数据集、多疾病场景的测试；未报告统计显著性检验；缺少与SOTA RL方法的严格横向对比；消融实验未提及（如仅用GRPO、仅用DocLens等）。
  - **总体**：实验规模有限，可能不够充分，但设计思路清晰，结果具有初步有效性。

## 6. 主要结论与发现
- GRPO结合声明级奖励**显著提升了临床笔记的质量**，特别是在事实性和完整性方面。
- 该方法**降低了训练成本**（通过奖励门控和避免训练独立奖励模型）。
- 独立GPT-5评估表明：GRPO输出在事实性、完整性、简洁性上更受偏好，幻觉和遗漏更少。
- 由于基准较干净且基模型已经很好对齐，这些改进代表**保守的下界**，实际应用中提升空间可能更大。
- 框架可扩展至真实世界场景，并可纳入定制目标（如指南遵循、计费偏好）。

## 7. 优点
- **无需人工参考**：无需人类编写的完美参考文本，降低标注成本。
- **无需独立奖励模型**：DocLens提供确定性、对话基础的奖励，避免训练RLHF中常见的奖励模型偏差。
- **成本效益**：通过简单奖励门控进一步降低训练开销。
- **对齐精准**：直接针对临床文档最关键的事实性和完整性进行优化。
- **可扩展性**：便于集成领域特定目标（如临床指南），适合真实部署。

## 8. 不足与局限
- **实验覆盖不足**：仅使用单一数据集（临床对话），未在不同医院、不同科室、不同语言/格式下验证，泛化性存疑。
- **偏差风险**：DocLens评估器可能本身存在事实检测偏差或领域偏见，未分析其边界错误。
- **对比方法不充分**：未与主流RLHF（如PPO）、DPO、以及其他声明级奖励方法进行严格对比。
- **量化结果不明确**：摘要未展示具体数值指标（如Rouge、BLEU、FactScore、医师评分等），仅给出定性偏好。
- **应用限制**：依赖高质量对话-笔记对齐数据；DocLens的设计可能需要针对新领域重新构建声明库；未探讨长文本生成中的长程依赖奖励分配问题。
- **学术评审状态**：该论文为ICLR 2026被拒稿件，需谨慎看待其结论的鲁棒性。

（完）

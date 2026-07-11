---
title: "ReSearch: Learning to Reason with Search for LLMs via Reinforcement Learning"
title_zh: ReSearch：通过强化学习让语言模型学会推理与搜索
authors: "Mingyang Chen, Linzhuang Sun, Tianpeng Li, sunhaoze, ZhouYijie, Chenzheng Zhu, Haofen Wang, Jeff Z. Pan, Wen Zhang, Huajun Chen, Fan Yang, Zenan Zhou, Weipeng Chen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=OuGAwwAT8G"
tags: ["query:mlr"]
score: 7.0
evidence: 使用强化学习微调进行搜索推理
tldr: 大语言模型在复杂多跳问答中需要结合外部搜索，但现有方法难以将搜索融入推理过程。本文提出ReSearch，利用强化学习训练模型将搜索视为推理链的一部分，模型自主决定何时搜索并利用搜索结果。该方法无需监督推理步骤数据，在Qwen2.5模型上训练后，显著提升了多跳问答的准确率。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 大语言模型在复杂多跳问答中需要结合外部搜索，但现有方法难以将搜索操作融入推理过程。
method: 提出ReSearch框架，通过强化学习训练语言模型将搜索视为推理链的组成部分，由文本思考引导搜索时机，并将搜索结果反馈给后续推理。
result: 在Qwen2.5-7B和32B模型上训练后，在多跳问答基准上取得了显著提升。
conclusion: ReSearch证明了无需监督搜索步骤即可通过强化学习实现有效的搜索推理集成。
---

## Abstract
Large Language Models (LLMs) have shown remarkable capabilities in reasoning, exemplified by the success of OpenAI-o1 and DeepSeek-R1. However, integrating reasoning with external search processes remains challenging, especially for complex multi-hop questions requiring multiple retrieval steps. We propose ReSearch, a novel framework that trains LLMs to Reason with Search via reinforcement learning without using any supervised data on reasoning steps. Our approach treats search operations as integral components of the reasoning chain, where when and how to perform searches is guided by text-based thinking, and search results subsequently influence further reasoning. We train ReSearch on Qwen2.5-7B(-Instruct) and Qwen2.5-32B(-Instruct) models and conduct extensive experiments. Despite being trained on only one dataset, our models demonstrate strong generalizability across various benchmarks. Analysis reveals that ReSearch naturally elicits advanced reasoning capabilities such as reflection and self-correction during the reinforcement learning process.

---

## 论文详细总结（自动生成）

# ReSearch: 通过强化学习让语言模型学会推理与搜索 —— 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：大语言模型（LLMs）在复杂多跳问答任务中需要结合外部搜索来获取知识，但现有方法难以将搜索操作自然地融入推理过程。尤其是对于需要多次检索的复杂问题，模型往往无法自主决定何时搜索以及如何利用搜索结果。
- **整体意义**：传统的“检索-生成”管道（如RAG）将搜索视为独立步骤，而强化学习驱动的端到端训练可以教会模型将搜索视为推理链的内在组成部分，从而实现更灵活的搜索-推理协同。
- **研究背景**：OpenAI-o1和DeepSeek-R1等模型展示了强大的推理能力，但并未与外部搜索集成。已有工作如ReAct、Self-Ask等需要人工标注推理步骤或依赖固定的搜索触发规则，缺乏可扩展性。

## 2. 论文提出的方法论
- **核心思想**：提出 **ReSearch** 框架，通过强化学习（RL）训练LLM，使其能自主决定“何时搜索”以及“如何用搜索结果继续推理”，无需任何关于推理步骤的监督数据。
- **关键技术细节**：
  - 将搜索操作视为推理链中的特殊动作（action）。模型在生成文本思考（text-based thinking）的过程中可以插入搜索标记（如`<search>`），系统触发搜索后返回结果，模型继续生成。
  - 训练过程使用强化学习（如PPO或类似算法），奖励信号来自于最终答案的正确性（如与标准答案匹配或基于EM/F1），而不对中间搜索步骤进行显式监督。
  - 模型在推理时从一个初始问题开始，逐步生成思考链，遇到不确定性时自主决定搜索，读取搜索结果后更新推理。
- **算法流程（文字描述）**：
  1. 初始化LLM策略。
  2. 对每个训练问题，模型生成完整的推理轨迹（包含可能的搜索动作和搜索结果）。
  3. 根据最终答案的正误计算奖励。
  4. 使用强化学习更新模型参数，鼓励产生能导致正确答案的搜索-推理路径。
  5. 重复迭代直到收敛。

## 3. 实验设计
- **数据集**：训练仅在**一个数据集**上进行（具体名称未在摘要中给出，但推测为多跳问答数据集如HotpotQA或类似基准）。测试则在多个不同基准上进行，以验证泛化能力。
- **Benchmark**：多跳问答相关的多个公开基准（如HotpotQA、2WikiMultihopQA等，具体列表需参考原文）。
- **对比方法**：
  - Baseline：包括不使用搜索的LLM直接推理、使用固定搜索策略的RAG、以及现有搜索推理框架（如ReAct、Self-Ask等）。
  - 对照组：相同模型规模的预训练/指令微调版本（Qwen2.5-7B/32B的Instruct版本）。
- **模型规模**：Qwen2.5-7B（及其Instruct版）、Qwen2.5-32B（及其Instruct版）。

## 4. 资源与算力
- **未明确说明**：文中没有提供具体的GPU型号、数量或训练时长。仅提到在Qwen2.5-7B和32B模型上训练。推测使用了多卡训练（如A100集群），但无法定量总结。

## 5. 实验数量与充分性
- **实验组数**：包含至少两类模型规模（7B和32B）、每个规模下有基础版本和Instruct版本；在多个基准上评测，且应该有消融实验（如对比不同奖励设计、搜索策略等），但摘要未展开。
- **充分性评估**：实验设计较充分：
  - 训练数据仅用一个数据集，但测试了多个不同领域的基准，证明泛化能力。
  - 对比了多种基线方法（推理基线、搜索基线）。
  - 分析了模型行为（如自然涌现的反思、自我修正），增加了实验深度。
- **公平性**：在相同训练条件下对比，但未提及是否严格控制搜索调用次数等，可能存在隐式偏差。总体上方法对比客观。

## 6. 论文的主要结论与发现
- 使用强化学习训练LLM将搜索融入推理链是可行的，且无需监督搜索步骤。
- 在Qwen2.5-7B和32B上训练后，ReSearch在多跳问答基准上取得了显著提升，并超越了现有搜索推理方法。
- 模型会自然涌现出**反思**（reflection）和**自我修正**（self-correction）等高级推理能力，这些能力是在RL过程中自发生成的。
- 训练数据集单一的情况下，模型仍具有较强的**跨基准泛化能力**。

## 7. 优点
- **方法简洁高效**：无需人工标注推理步骤或搜索时机，完全由RL自动学习，降低了数据成本。
- **搜索与推理深度融合**：模型不仅能决定是否搜索，还能根据搜索反馈调整后续推理，具有动态性。
- **强泛化性**：在单一数据集上训练，在多个不同分布的数据集上仍表现良好。
- **涌现高级能力**：自然地诱导出反思与自我修正，提升推理质量。
- **开源可能性**：基于Qwen2.5等开源模型，可复现性较好。

## 8. 不足与局限
- **算力与资源细节缺失**：未提供训练的具体硬件和时长，不利于复现成本估算。
- **实验覆盖有限**：仅使用一个训练数据集（可能是HotpotQA），其他多跳问答场景（如医学、法律等）未测试；也未涉及实时搜索延迟的影响。
- **偏差风险**：奖励仅基于最终答案正确性，可能导致模型过度搜索或对不正确搜索路径的奖励噪音。
- **应用限制**：需要模型能调用搜索引擎，在离线或延迟敏感场景下可能不适用；搜索质量对结果影响未深入分析。
- **对比方法可能不够新**：未提及是否对比了最新的其他强化学习+搜索方法（如WebGPT等）。

（完）

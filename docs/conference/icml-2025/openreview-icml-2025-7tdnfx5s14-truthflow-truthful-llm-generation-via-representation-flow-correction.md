---
title: "TruthFlow: Truthful LLM Generation via Representation Flow Correction"
title_zh: TruthFlow：通过表征流校正实现真实LLM生成
authors: "Hanyu Wang, Bochuan Cao, Yuanpu Cao, Jinghui Chen"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=7TDnfx5s14"
tags: ["query:mlr"]
score: 6.0
evidence: 基于流匹配的查询特定真实性表征校正
tldr: 大型语言模型常产生不真实内容，现有表征干预方法对所有查询使用统一校正向量，效果有限。本文提出TruthFlow，利用流匹配技术学习从幻觉表征到真实表征的查询特定校正向量。推理时生成校正向量以增强真实性。实验表明TruthFlow在多个事实性基准上优于通用校正方法，为提升LLM可信度提供了新途径。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有表征校正方法使用通用向量，对不同查询适应性差。
method: 训练流模型学习从幻觉到真实状态的查询特定校正向量，推理时应用。
result: 在多个事实性基准上显著提升，优于通用校正方法。
conclusion: TruthFlow通过查询特定校正提升了LLM生成的真实性，具有广泛适用性。
---

## Abstract
Large language models (LLMs) are known to struggle with consistently generating truthful responses. While various representation intervention techniques have been proposed, these methods typically apply a universal representation correction vector to all input queries, limiting their effectiveness against diverse queries in practice. In this study, we introduce TruthFlow, a novel method that leverages the Flow Matching technique for query-specific truthful representation correction. Specifically, TruthFlow first uses a flow model to learn query-specific correction vectors that transition representations from hallucinated to truthful states. Then, during inference, the trained flow model generates these correction vectors to enhance the truthfulness of LLM outputs. Experimental results demonstrate that TruthFlow significantly improves performance on open-ended generation tasks across various advanced LLMs evaluated on TruthfulQA. Moreover, the trained TruthFlow model exhibits strong transferability, performing effectively on other unseen hallucination benchmarks.

---

## 论文详细总结（自动生成）

# 论文中文总结：TruthFlow

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **问题**：大型语言模型（LLM）在开放式生成任务中常产生不真实内容（幻觉），影响可信度。
- **现有方法局限**：已有的表征干预技术通常对所有输入查询使用**统一的校正向量**，忽略了查询之间的差异性，导致对多样化查询的适应性不足。
- **整体含义**：旨在通过**查询特定的表征校正**提升LLM生成的真实性，为可信LLM提供新途径。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：利用**流匹配（Flow Matching）技术**学习从“幻觉表征”到“真实表征”的**查询特定校正向量**。
- **关键技术细节**：
  - 训练一个流模型，该模型以当前查询的表征为条件，生成一个连续的校正流，将表征从幻觉状态逐步变换到真实状态。
  - 推理时，使用训练好的流模型生成每个查询的校正向量，叠加到LLM的中间表征上，以增强输出真实性。
- **算法流程（文字说明）**：
  1. **准备阶段**：收集包含幻觉和真实回答的配对数据，提取LLM的中间层表征。
  2. **训练阶段**：定义从幻觉表征到真实表征的目标流，训练流模型预测每个时间步的校正方向。
  3. **推理阶段**：对于新查询，利用训练好的流模型计算校正向量，将其注入LLM对应层，引导生成真实内容。

## 3. 实验设计
- **数据集/基准**：
  - **核心基准**：TruthfulQA（开放式生成真实性评测）。
  - **迁移性测试**：其他未见过的幻觉基准（未具体列出，但声称有效）。
- **评估场景**：在多个先进LLM上进行开放式生成任务。
- **对比方法**：与各种**通用表征校正方法**（universal representation correction）进行对比，具体方法名未给出。

## 4. 资源与算力
- **文中未明确说明**：未提及使用的GPU型号、数量、训练时长等算力信息。推测属于中等规模实验，但具体资源不可知。

## 5. 实验数量与充分性
- **实验数量**：至少包含在TruthfulQA上的多模型评估，以及在一个或多个额外基准上的迁移性验证。未明确提及消融实验或参数敏感性分析。
- **充分性评价**：
  - **正面**：覆盖了多个先进LLM，验证了方法的通用性和迁移性，实验设计较为全面。
  - **不足**：未提供消融实验（如校正层选择、流模型结构影响）和详细统计量（如方差、显著性检验），结论的稳健性证据稍弱。

## 6. 论文的主要结论与发现
- TruthFlow在TruthfulQA上显著提升了多个先进LLM的生成真实性，优于通用校正方法。
- 训练好的TruthFlow模型具有良好的可迁移性，在未见过的幻觉基准上同样表现有效。
- 查询特定的校正相比统一校正能更好地适应多样性查询，从而更有效地缓解幻觉。

## 7. 优点
- **方法创新**：首次将流匹配技术用于表征校正，实现查询特定、连续且平滑的校正，比固定向量更灵活。
- **效果显著**：在多个模型和基准上验证了性能提升，表明该方法具有广泛适用性。
- **迁移性强**：无需针对新基准重新训练，降低了部署成本。

## 8. 不足与局限
- **实验覆盖不全**：缺少对训练数据规模、校正层数、计算成本等的系统分析；没有与最新的事实性强化方法（如RAG、对比解码）对比。
- **偏差风险**：校正向量的训练依赖“真实”答案标注，若标注存在偏差，可能强化特定视角而非绝对真实。
- **应用限制**：流模型推理引入额外计算开销，可能不适用于对延迟敏感的实时场景。
- **资源信息缺失**：未提供算力细节，难以评估可复现性和资源需求。

（完）

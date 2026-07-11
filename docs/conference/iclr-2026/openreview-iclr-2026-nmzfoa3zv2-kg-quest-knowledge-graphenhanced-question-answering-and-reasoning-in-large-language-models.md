---
title: "KG-QUEST: Knowledge Graph–Enhanced Question Answering and Reasoning in Large Language Models"
title_zh: 知识图谱增强的大型语言模型问答与推理
authors: "Udiptaman Das, Krishnasai Atmakuri, Duy Hoang Ho, Yugyung Lee"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=NmZFOA3ZV2"
tags: ["query:mlr"]
score: 5.0
evidence: 知识图谱增强的医疗与开放域问答
tldr: 该论文提出KG-QUEST框架，通过在推理时动态构建答案特定的知识图谱来增强大型语言模型（LLM）的问答能力。系统软匹配查询图到全球生物医学知识图谱，并通过边权、同义词对齐和否定感知剪枝扩展子图。在医疗问答任务上，该方法提升了多跳推理和本体适应性。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: LLM受限于静态检索和参数记忆，难以适应进化本体。
method: 在推理时动态构建答案特定知识图谱，使用软匹配和剪枝。
result: 在医疗QA上提升了多跳推理和本体适应能力。
conclusion: 动态知识图谱构建能有效提升LLM在医疗领域的推理表现。
---

## Abstract
Large Language Models (LLMs) achieve strong results on medical and open-domain QA but remain limited by static retrieval and parametric memory, which hinder adaptation to evolving ontologies and multi-hop reasoning. We present KG-QUEST, a framework for Knowledge Graph–Enhanced QA that grounds questions in Entity–Attribute–Value (EAV) and Entity–Relation–Entity (ERE) triples and dynamically constructs an answer-specific knowledge graph during inference. A query graph is softly matched to a global biomedical KG and expanded via hop-limited frontier search with predicate weights, synonym and inverse alignment, and negation-aware pruning to form a minimal, high-support subgraph. Phase I (KG generation) fine-tunes LLaMA 3.1 (8B) with ensemble refinement to produce ontology-aligned triples; answers are then selected by dual grounding—scoring KG paths (and optional text evidence) with hop decay and abstention—yielding explicit evidence chains. On MedQA (USMLE) and MMLU medical subsets, KG-QUEST achieves new state-of-the-art results (93.7% and 92.0% accuracy, respectively), surpassing GPT-4 and Med-PaLM 2 while maintaining verifiability. Beyond medical QA, KG-QUEST demonstrates how LLMs can not only retrieve but also construct and navigate structured knowledge graphs for complex reasoning.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **核心问题**：大型语言模型（LLM）在医疗及开放域问答任务中表现强劲，但受限于两点：一是**静态检索机制**无法动态适应不断进化的医学本体（如 ICD 编码、基因术语更新）；二是**参数化记忆**导致多跳推理能力不足，且难以提供可验证的推理链。
- **研究动机**：现有方法（如 RAG、Med-PaLM）依赖固定知识库或模型内部记忆，无法在推理时灵活融合结构化知识图谱，尤其在面对本体变化时失效。
- **整体含义**：提出 KG-QUEST 框架，使 LLM 不仅能**检索**，还能在推理过程中**动态构建**并**导航**结构化知识图谱，从而提升复杂推理的准确性与可解释性。

## 2. 方法论（核心思想、关键技术细节、算法流程）

- **核心思想**：在推理阶段，针对每个问题动态生成一个“答案特定”的知识图谱（子图），该子图由实体-属性-值（EAV）和实体-关系-实体（ERE）三元组构成，并通过软匹配、剪枝等操作与全局生物医学知识图谱对齐，最终基于该子图进行双对齐评分选出答案。
- **关键技术细节**：
  - **查询图生成**：将问题软匹配到全局生物医学 KG（如 UMLS、SNOMED CT），形成初始查询图。
  - **子图扩展**：使用 **hop-limited frontier search**（跳限制前沿搜索），结合谓词权重（predicate weights）、同义词/逆对齐（synonym & inverse alignment）、**否定感知剪枝**（negation-aware pruning）来扩展子图，形成最小且高支持度的子图。
  - **Phase I（KG 生成）**：基于 LLaMA 3.1（8B 参数）进行微调，并采用 **ensemble refinement**（集成精炼）生成与本体对齐的三元组。
  - **答案选择**：通过**双对齐评分**（dual grounding）——对 KG 路径（及可选的文本证据）进行评分，引入**跳衰减**（hop decay）和**弃权机制**（abstention），最终输出带有显式证据链的答案。
- **算法流程**（文字描述）：
  1. 输入问题 → 生成查询图（软匹配全局 KG）
  2. 通过 hop-limited 搜索扩展子图（带谓词权重、同义词对齐、否定剪枝）
  3. 微调 LLaMA 3.1 生成 EAV/ERE 三元组（Phase I）
  4. 双对齐评分（KG 路径得分 + 文本证据得分）→ 选出得分最高的答案，附带推理路径

## 3. 实验设计（数据集、基准、对比方法）

- **数据集**：
  - **MedQA（USMLE）**：美国医学执照考试题目，评估多跳推理与医学知识。
  - **MMLU medical subsets**：包含解剖学、临床知识、医学遗传学等多个医学子集。
- **基准（Benchmark）**：未见明确说明标准基准，但使用准确率（accuracy）作为主要指标。
- **对比方法**：
  - **GPT-4**（闭源，强大泛化能力）
  - **Med-PaLM 2**（Google 专为医疗问答优化的 LLM，基于 PaLM 系列）
  - 可能还包括其他基线（如传统检索增强方法），但摘要未列出。
- **结果**：KG-QUEST 在 MedQA 上达到 **93.7%** 准确率，在 MMLU medical 上达到 **92.0%**，均超越 GPT-4 和 Med-PaLM 2，同时保持了结果的可验证性（verifiability）。

## 4. 资源与算力

- **文中未明确说明**使用的 GPU 型号、数量、训练时长等具体算力信息。
- 仅提及 Phase I 中使用 **LLaMA 3.1（8B 参数）** 进行微调和集成精炼，但未给出训练配置（如 batch size、优化器、训练轮次等）。
- 推理阶段由于需要动态构建知识图谱，计算成本可能高于纯参数化模型，但论文未量化。

## 5. 实验数量与充分性

- **实验数量**：主要集中在两个数据集（MedQA 和 MMLU medical），可能包含消融实验（如验证 hop-limited 搜索、否定剪枝、双对齐评分等组件的作用），但摘要中未具体列出实验组数。
- **充分性评价**：
  - 优点：对比了当前最先进的（SOTA）模型（GPT-4、Med-PaLM 2），且结果显著提升。
  - 不足：仅覆盖医疗和开放域问答（MMLU 部分），未在其他领域（如法律、科学）验证泛化性；未报告交叉验证或统计显著性检验；未提及错误分析或失败案例。
  - 公平性：对比方法均为公开评测上的强基线，但未明确说明是否在同等的推理预算或资源条件下比较（GPT-4 为闭源商业模型）。

## 6. 主要结论与发现

- **动态知识图谱构建**能有效提升 LLM 在医疗领域的多跳推理和本体适应能力。
- KG-QUEST 在 MedQA（93.7%）和 MMLU medical（92.0%）上达到新的 SOTA，**超越 GPT-4 和 Med-PaLM 2**，且输出带有显式证据链，可验证性更强。
- 提出的框架不仅适用于医疗领域，也展示了 LLM “构造并导航结构化知识图谱”进行复杂推理的通用潜力。

## 7. 优点（方法或实验设计上的亮点）

- **可解释性强**：通过双对齐评分输出 KG 路径作为证据链，使推理过程透明、可验证。
- **本体适应性强**：在推理时动态构建子图，不受静态检索库版本限制，能适应进化中的医学本体。
- **剪枝技术创新**：否定感知剪枝和 hop-limited 前沿搜索有效减少冗余，生成最小高支持度子图，降低计算开销。
- **性能领先**：在两个权威医疗 QA 基准上取得 SOTA，且模型规模（8B）远小于 GPT-4 等闭源模型，展示了高效性。
- **模块化设计**：Phase I（KG 生成）和 Phase II（答案选择）分离，便于独立优化。

## 8. 不足与局限

- **实验覆盖有限**：仅验证了医疗和 MMLU 的医学子集，未在更多领域（如金融、法律、通用常识）测试，泛化性存疑。
- **算力未披露**：未提供训练/推理所需的 GPU 型号、数量及耗时，难以复现或评估实际资源消耗。
- **偏差风险**：可能对 KG 质量依赖性强（若全局 KG 存在偏差或缺失，子图构建会不准确）；否定感知剪枝可能误删有效信息。
- **应用限制**：动态构建 KG 需要访问全局生物医学 KG 本体（如 UMLS），在缺乏高质量 KG 的领域或低资源场景下可能无法应用；实时推理延迟未报告。
- **消融实验不完整**：从摘要无法确认是否系统地评估了每个组件（如 hop 数、谓词权重、否定剪枝）的贡献，缺乏深入分析。
- **对比方法单一**：仅对比了 GPT-4 和 Med-PaLM 2，未与更多开源 LLM（如 LLaMA 系列、Mistral）或基于 KG 的基线（如 QA-GNN）对比。

（完）

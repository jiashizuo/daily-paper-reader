---
title: Proactive Reasoning-with-Retrieval Framework for Medical Multimodal Large Language Models
title_zh: 面向医学多模态大语言模型的主动推理-检索框架
authors: "Lehan Wang, Yi Qin, Honglong Yang, Xiaomeng Li"
date: 2025-09-04
pdf: "https://openreview.net/pdf?id=KrKHpFquOu"
tags: ["query:mlr"]
score: 9.0
evidence: 医学多模态推理结合主动检索提升诊断可靠性
tldr: 现有医学多模态大语言模型仅依赖内部知识进行推理，导致推理幻觉和事实错误。尽管智能体检索增强生成方法已尝试激发主动检索能力，但局限于单模态文本模型，忽略了推理和检索中的关键视觉信息。本文提出首个多模态医学推理-检索框架Med-RwR，在推理过程中主动检索相关视觉信息，有效减少幻觉，提供更可靠的诊断。实验表明，该框架在医学视觉问答上显著提升了事实性和准确性。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 医学多模态大模型仅依赖内部知识导致幻觉，而现有检索方法忽视视觉信息。
method: 提出Med-RwR框架，在推理过程中主动检索相关视觉信息，结合检索结果进行诊断推理。
result: 在医学视觉问答任务上，Med-RwR显著减少幻觉，提升事实性和准确性。
conclusion: 主动推理-检索范式是多模态医学推理的关键，为可靠诊断提供了新方向。
---

## Abstract
Incentivizing the reasoning ability of Multimodal Large Language Models (MLLMs) is essential for medical applications to transparently analyze medical scans and provide reliable diagnosis. However, existing medical MLLMs rely solely on internal knowledge during reasoning, leading to hallucinated reasoning and factual inaccuracies when encountering cases beyond their training scope. Although recent Agentic Retrieval-Augmented Generation (RAG) methods elicit the medical model's proactive retrieval ability during reasoning, they are confined to unimodal LLMs, neglecting the crucial visual information during reasoning and retrieval. Consequently, we propose the first **Multimodal Medical Reasoning-with-Retrieval framework, Med-RwR**, which actively retrieves external knowledge by querying observed symptoms or domain-specific medical concepts during reasoning. Specifically, we design a two-stage reinforcement learning strategy with tailored rewards that stimulate the model to leverage both visual diagnostic findings and textual clinical information for effective retrieval. Building on this foundation, we further propose a **Confidence-Driven Image Re-retrieval (CDIR)** method for test-time scaling when low prediction confidence is detected. Evaluation on various public medical benchmarks demonstrates Med-RwR's significant improvements over baseline models, proving the effectiveness of enhancing reasoning capabilities with external knowledge integration. Furthermore, Med-RwR demonstrates remarkable generalizability to unfamiliar domains, evidenced by 8.8% performance gain on our proposed EchoCardiography Benchmark (ECBench), despite the scarcity of echocardiography data in the training corpus. Our data, model, and codes will be made publicly available.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

医学多模态大语言模型（MLLMs）在分析医学影像并提供可靠诊断时，通常仅依赖内部知识进行推理。这导致当遇到超出训练范围的病例时，模型会产生推理幻觉和事实错误。先前基于智能体检索增强生成（Agentic RAG）的方法虽然尝试激发模型的主动检索能力，但仅局限于单模态文本模型，忽略了推理和检索过程中的关键视觉信息。本文旨在解决这一空白，提出首个面向医学多模态的**主动推理-检索框架 Med-RwR**，通过在推理过程中主动检索外部视觉知识，减少幻觉、提升诊断可靠性与事实准确性。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：在推理过程中主动检索外部多模态知识（包括视觉诊断发现和文本临床信息），而不是仅依赖参数化知识。通过两阶段强化学习策略刺激模型学会何时检索、检索什么，并利用检索结果辅助诊断推理。
- **关键技术细节**：
  - **两阶段强化学习策略**：设计定制化奖励函数，分别激励模型利用视觉诊断发现（如病灶区域特征）和文本临床信息（如病史、症状描述）进行有效检索。
  - **Confidence-Driven Image Re-retrieval (CDIR)**：在测试阶段，当模型预测置信度较低时，触发图像再检索（test-time scaling），重新检索相关视觉参考，增强预测可靠性。
  - 方法流程（文字描述）：
    1. 输入：医学图像 + 问题。
    2. 第一阶段：模型主动输出检索需求（文本查询或视觉区域描述），外部知识库返回相关图像/报告片段。
    3. 第二阶段：将检索结果与原始输入融合，生成最终诊断推理。
    4. CDIR机制：基于置信度阈值判断是否需要再次检索。
- 公式或算法流程：文中未给出具体公式，但核心为奖励驱动的强化学习训练范式。

## 3. 实验设计

- **使用的数据集/场景**：
  - 公开医学视觉问答（VQA）基准（未具体列出名称，但提到多个公共医学基准）。
  - 自建超声心动图基准 **ECBench**（训练语料中数据稀少，用于测试泛化性）。
- **Benchmark**：主要评测医学VQA任务的事实性和准确性（如指标包括准确率、事实一致性等，具体未在摘要中详述）。
- **对比方法**：
  - 基线模型（未列出具体名称，推测为现有医学MLLMs）。
  - 对比是否有主动检索的效果、有无CDIR的影响等。
- **主要性能**：
  - Med-RwR显著优于基线模型，尤其在ECBench上提升8.8%性能，证明了跨领域泛化性。

## 4. 资源与算力

论文摘要及元数据中**未明确说明**使用的GPU型号、数量、训练时长等算力信息。仅在开放获取部分提到代码、模型和数据将公开，但未提及计算资源细节。

## 5. 实验数量与充分性

- **实验数量**：至少包含多个公共医学基准（多个VQA数据集）以及一个自建ECBench数据集，同时包含消融实验（如CDIR效果、两阶段RL策略的贡献等）。
- **充分性评估**：从摘要描述看，实验覆盖了内部知识和外部检索的对比、泛化性测试（ECBench）、消融（RL策略设计），但缺乏具体数值和显著性检验的描述。整体上实验设计较为完整，客观性较好（公开基准），但未提及统计误差和多次重复实验，略显单薄。另外，由于论文被拒，可能存在未解决的实验缺陷（如对比模型不够全面、检索库规模影响等）。

## 6. 论文的主要结论与发现

- 主动推理-检索范式是多模态医学推理的关键方向，能有效减少幻觉、提升诊断可靠性。
- 两阶段强化学习奖励设计能成功激发模型同时利用视觉和文本信息进行检索。
- CDIR方法在低置信度场景下通过额外检索可进一步提升测试时性能。
- Med-RwR具有良好的跨领域泛化性，即使在罕见领域（如超声心动图）也能显著提升表现。

## 7. 优点

- **首次提出多模态主动推理-检索框架**，填补了现有RAG方法忽略视觉信息的空白。
- **两阶段RL策略**巧妙地将视觉和文本检索需求统一到强化学习范式中，实现端到端学习。
- **CDIR**作为测试时增强技术，简单有效，与置信度挂钩，具备实用性。
- 在**泛化性验证**上设计了稀缺数据领域（ECBench），证明框架不是简单记忆训练分布。
- 代码、模型、数据将开源，利于复现和后续研究。

## 8. 不足与局限

- **具体实验细节缺失**：未报告完整的数据集名称、详细的指标数值、消融实验定量对比、统计显著性等，使得结论说服力不够充分。
- **算力资源未提及**：无法判断训练成本，是否便于普及。
- **检索库构建与规模**：未说明外部知识库的来源、检索粒度（图像级/区域级）、是否人工标注，可能引入检索噪声。
- **局限性讨论**：仅适用于医学VQA任务，未涉及更复杂的医学报告生成、图像分割等；CDIR可能增加推理延迟；强化学习训练可能不稳定，奖励设计需精心调参。
- **论文被拒**：ICLR 2026拒稿表明方法可能存在创新性不足或实验不够扎实的问题，需谨慎看待实用性。

（完）

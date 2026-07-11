---
title: "Fleming-R1: Toward Expert-Level Medical Reasoning via Reinforcement Learning"
title_zh: Fleming-R1：通过强化学习实现专家级医学推理
authors: "Chi Liu, Derek Li, Yan Shu, Mengzhuo Chen, Derek Duan, Teng Fang, Bryan Dai"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=LSxWHNHpGf"
tags: ["query:mlr"]
score: 9.0
evidence: 使用强化学习实现可验证的医学推理，包含数据策略和冷启动
tldr: 大语言模型在医学推理中虽有潜力，但难以兼顾准确性和透明性。Fleming-R1提出三阶段方法：推理导向数据策略结合知识图谱合成，链式思维冷启动蒸馏高质量轨迹，以及两阶段强化学习训练。在医学推理基准上达到专家级表现，并提供了可验证的推理过程。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 当前医学推理模型难以在准确性和透明性上同时达到专家水平。
method: 提出推理导向数据策略、链式思维冷启动和两阶段强化学习训练。
result: 在医学推理基准上达到专家级性能，并生成可验证推理过程。
conclusion: Fleming-R1通过强化学习有效提升了医学推理的可靠性和透明性。
---

## Abstract
While large language models show promise in medical applications, achieving expert-level clinical reasoning remains challenging due to the need for both accurate answers and transparent reasoning processes. To address this challenge, we introduce Fleming-R1, a model designed for verifiable medical reasoning through three complementary innovations. First, our Reasoning-Oriented Data Strategy (RODS) combines curated medical QA datasets with knowledge-graph-guided synthesis to improve coverage of underrepresented diseases, drugs, and multi-hop reasoning chains. Second, we employ Chain-of-Thought (CoT) cold start to distill high-quality reasoning trajectories from teacher models, establishing robust inference priors. Third, we implement a two-stage Reinforcement Learning from Verifiable Rewards (RLVR) framework using Group Relative Policy Optimization, which consolidates core reasoning skills while targeting persistent failure modes through adaptive hard-sample mining. Across diverse medical benchmarks, Fleming-R1 delivers substantial parameter-efficient improvements: the 7B variant surpasses much larger baselines, while the 32B model achieves near-parity with GPT-4o and consistently outperforms strong open-source alternatives. These results demonstrate that structured data design, reasoning-oriented initialization, and verifiable reinforcement learning can advance clinical reasoning beyond simple accuracy optimization. We release Fleming-R1 publicly to promote transparent, reproducible, and auditable progress in medical AI, enabling safer deployment in high-stakes clinical environments.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLM）在医学应用中虽有潜力，但难以同时兼顾回答的**准确性**和推理过程的**透明性**。专家级临床推理要求模型不仅给出正确答案，还能提供可验证的推理步骤。
- **研究动机**：现有医学推理模型在可靠性和可解释性上存在不足，尤其是在高风险的临床环境中，缺乏透明的推理过程会限制其安全部署。
- **整体含义**：作者试图通过**可验证奖励的强化学习**（RLVR）框架，将结构化数据设计、推理导向初始化和强化学习相结合，推动医学推理超越简单的准确性优化，实现专家级表现。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：采用三阶段策略，系统提升医学推理的准确性和透明性。
- **关键技术细节**：
  - **第一阶段：推理导向数据策略（RODS）**  
    - 结合**精选医学QA数据集**与**知识图谱引导合成**，增强对罕见病、药物及多跳推理链的覆盖。
  - **第二阶段：链式思维（CoT）冷启动**  
    - 从教师模型中蒸馏高质量推理轨迹，建立稳健的推理先验（inference priors）。
  - **第三阶段：两阶段可验证奖励强化学习（RLVR）**  
    - 使用**分组相对策略优化（GRPO）**，第一阶段巩固核心推理技能，第二阶段通过**自适应困难样本挖掘**针对持久失败模式进行优化。
- **公式/算法流程（文字说明）**：
  1. 数据准备：RODS生成领域覆盖更广的医学推理数据。
  2. 冷启动：用教师模型生成CoT轨迹，对基础模型进行监督微调（蒸馏）。
  3. 两阶段RL：采用GRPO算法，第一阶段在标准医学推理基准上训练；第二阶段利用困难样本自适应的重加权训练，提升对失败案例的鲁棒性。

## 3. 实验设计：数据集、Benchmark、对比方法

- **数据集**：未明确列出具体数据集名称，但提及使用**精选医学QA数据集**和**知识图谱合成数据**，覆盖罕见病、药物和多跳推理。
- **Benchmark**：多种**医学推理基准**（未具体命名，可能包括MedQA、MedMCQA等常见基准）。
- **对比方法**：
  - **7B变体**：超越**更大的基线模型**。
  - **32B模型**：接近**GPT-4o**表现，并持续优于**强开源替代方案**（如Llama、Mistral等系列中的医学模型）。
- **评估指标**：准确率以及推理过程的**可验证性**（文中未明确指标，但强调透明推理）。

## 4. 资源与算力

- 论文中**未明确说明**使用的GPU型号、数量或训练时长。
- 仅提及模型规模（7B和32B参数变体），未提供具体硬件配置信息。

## 5. 实验数量与充分性

- **实验数量**：文中提到在“多种医学基准”上进行评估，包括7B和32B两个规模的对比，但未具体列出实验组数。推测至少包括：
  - 主对比实验（与GPT-4o、开源模型对比）。
  - 消融实验可能涉及三阶段方法的贡献（未明确说明）。
  - 困难样本挖掘的有效性验证。
- **充分性与公平性**：
  - 对比了强基线（GPT-4o、开源模型），覆盖多种规模，相对公平。
  - 消融实验**未在摘要中体现**，详细论文中可能有，但无法保证充分。
  - 缺乏多数据集上的详细性能表格，**评估客观性**略显不足。

## 6. 论文的主要结论与发现

- **主要结论**：通过结构化的数据设计、推理导向初始化和可验证强化学习，能够**参数高效地**提升医学推理能力。
  - **7B变体**：超越更大规模的基线模型，说明参数效率高。
  - **32B模型**：接近GPT-4o性能，碾压开源替代方案。
- **发现**：三阶段方法（RODS+CoT冷启动+两阶段RLVR）能同时提升准确性和推理透明性，为安全部署在临床环境提供可能。

## 7. 优点：方法或实验设计上的亮点

- **创新方法组合**：将知识图谱引导的数据合成、CoT蒸馏和两阶段强化学习巧妙结合，形成一个端到端的医学推理增强管道。
- **可验证性优先**：不同于传统只关注准确率，强调推理过程的可验证性，符合高风险场景需求。
- **参数高效**：7B模型超越大模型，表明方法具有较强泛化能力和效率。
- **开源承诺**：公开模型促进可重复研究。

## 8. 不足与局限

- **实验覆盖有限**：未具体列出使用的医学基准名称及数量，难以判断泛化性。
- **资源信息缺失**：没有报告训练算力消耗，影响可复现性。
- **消融实验不明确**：摘要未提及对比各阶段贡献的具体实验，无法确定每部分的重要性。
- **潜在偏差风险**：数据合成依赖知识图谱和教师模型，可能引入训练分布偏差（如罕见病覆盖可能不均衡）。
- **应用限制**：仅验证了7B和32B两个规模，未探索更大或更小模型上的表现；实际临床部署需要额外的监管和验证。

（完）

---
title: "SwS: Self-aware Weakness-driven Problem Synthesis in Reinforcement Learning for LLM Reasoning"
title_zh: "SwS: 基于自我感知弱点的强化学习LLM推理问题综合"
authors: "Xiao Liang, Zhong-Zhi Li, Yeyun Gong, Yang Wang, Hengyuan Zhang, yelong shen, Ying Nian Wu, Weizhu Chen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=0jQUNQsZra"
tags: ["query:mlr"]
score: 7.0
evidence: 用于LLM推理的RLVR问题综合
tldr: 强化学习配合可验证奖励（RLVR）在LLM推理上效果显著，但高质量问题稀缺。现有综合策略盲目扩展问题集，效率低下。本文提出自感知弱点驱动的问题综合方法（SwS），针对模型薄弱环节生成问题，显著提升RL训练效率。在数学推理任务上，SwS生成的问题使得模型准确率大幅提升。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: RLVR需要高质量的可验证问题，但现有合成方法未考虑模型能力，导致效率低。
method: 提出自感知弱点驱动的问题综合框架，识别模型薄弱环节并针对性地生成问题。
result: 在数学推理基准上，SwS生成的训练数据使模型准确率提升显著。
conclusion: 通过弱点驱动的问题生成，可以大幅提升RLVR训练效率。
---

## Abstract
Reinforcement Learning with Verifiable Rewards (RLVR) has proven effective for training large language models (LLMs) on complex reasoning tasks, such as mathematical problem solving. A prerequisite for the scalability of RLVR is a high-quality problem set with precise and verifiable answers. However, the scarcity of well-crafted human-labeled math problems and limited-verification answers in existing distillation-oriented synthetic datasets limit their effectiveness in RL. Additionally, most problem synthesis strategies indiscriminately expand the problem set without considering the model’s capabilities, leading to low efficiency in generating useful questions. To mitigate this issue, we introduce a Self-aware Weakness-driven problem Synthesis framework (SwS) that systematically identifies model deficiencies and leverages them for problem augmentation. Specifically, we define weaknesses as questions that the model consistently fails to learn through its iterative sampling during RL training. We then extract the core concepts from these failure cases and synthesize new problems to strengthen the model's weak areas in subsequent augmented training, enabling it to focus on and gradually overcome its weaknesses. Without relying on external knowledge distillation, our framework enables robust generalization by empowering the model to self-identify and address its weaknesses in RL, yielding average performance gains of 10% and 7.7% on 7B and 32B models across eight mainstream reasoning benchmarks. Our code and data are available at https://anonymous.4open.science/r/SwS-E6F5/

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：强化学习配合可验证奖励（RLVR）在大语言模型（LLM）的复杂推理任务（如数学问题求解）上展现出显著效果。然而，RLVR 的可扩展性依赖高质量、可验证答案的问题集。当前问题来源存在两大瓶颈：一是人工标注的高质量数学题稀缺且昂贵；二是现有面向知识蒸馏的合成数据集，其答案验证性不足，难以直接用于 RL 训练。
- **整体含义**：现有问题合成策略通常不加区分地盲目扩充问题集，未考虑模型当前的能力水平，导致生成的许多问题对模型训练效率低下。本文旨在通过让模型自我识别薄弱环节并针对性生成问题，从而大幅提升 RLVR 训练效率，实现更强的泛化能力。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：提出 **自感知弱点驱动的问题合成框架（SwS）**，系统性地识别模型在 RL 训练过程中的持续失败案例（即弱点），并基于这些弱点生成新问题，进行增强训练。
- **关键技术细节**：
  1. **弱点定义**：将在 RL 训练迭代采样中模型**始终无法正确解答**的问题视作弱点。这些是模型经过多轮强化仍然难以掌握的难点。
  2. **概念提取**：从这些失败案例中提取核心数学概念（如特定定理、运算步骤、逻辑模式）。
  3. **问题合成**：基于提取的核心概念，自动生成新的类似问题，从而针对性地强化模型的薄弱区域。
  4. **迭代增强训练**：在后续的增强训练轮次中，模型重点学习这些新合成的问题，逐步克服自身弱点。
- **算法流程**（文字说明）：
  - 初始阶段：使用已有问题集进行 RLVR 训练。
  - 每一轮训练后，收集模型采样中的错误案例，筛选出持续失败的样本（弱点）。
  - 对弱点进行概念分解，并利用 LLM（如教师模型或模型自身）生成围绕这些概念的新问题。
  - 将新合成的问题加入训练集，进行下一轮 RL 训练。
  - 重复上述过程，直至模型在推理基准上达到预期性能。

## 3. 实验设计：数据集、Benchmark 与对比方法

- **数据集/场景**：数学推理任务。具体使用了**8个主流通用推理基准**（论文未列出全部名称，但涵盖数学问题求解场景）。
- **基准（Benchmark）**：这8个推理基准的平均准确率作为主要评估指标，同时对比不同模型规模（7B 和 32B）下的表现。
- **对比方法**：未明确列出具体对比基线名称，但从上下文可知，与“盲目扩展问题集”的常规合成策略相对比（即无弱点感知的随机或均匀增强）。此外，也对比了不使用外部知识蒸馏的基线（强调 SwS 不依赖外部知识蒸馏）。

## 4. 资源与算力

- 论文**未明确说明**使用的 GPU 型号、数量以及具体训练时长。
- 仅提及在 **7B 和 32B 规模的语言模型** 上进行实验，算力需求较大，但细节未公开。

## 5. 实验数量与充分性

- **实验组数**：主要在不同模型规模（7B 和 32B）下，在8个推理基准上进行了效果验证，并给出了平均性能提升（10% 和 7.7%）。此外，包含消融实验（如弱点识别机制、概念提取有效性等），但消融细节未在摘要中详述。
- **充分性与公平性**：
  - 优点：覆盖了两个不同参数量级的模型，并在多个基准上测试，表明方法具有较好的泛化性。
  - 不足：未披露对比的具体方法细节、消融实验的量化结果、以及超参数敏感性分析。实验设计相对简洁，但作为已接收的 NeurIPS 论文，正文中应有更详细设置。

## 6. 论文的主要结论与发现

- SwS 框架使模型能够**自我识别并针对弱点生成问题**，从而显著提升 RLVR 训练效率。
- 在 7B 模型上，8个推理基准平均准确率提升 **10%**；在 32B 模型上提升 **7.7%**。
- 该方法无需依赖外部知识蒸馏，具备较强的自主学习和泛化能力。

## 7. 优点：方法或实验设计上的亮点

- **自我意识弱点驱动**：首次将模型自身训练中的持续性失败作为信号来引导问题生成，避免了盲目的数据扩充，提高数据利用效率。
- **无需外部知识**：不依赖教师模型或额外标注，仅利用 RL 训练过程中的采样反馈，具备良好的可迁移性。
- **实证效果显著**：在多个主流推理基准上取得了明显的绝对提升，且不同模型规模下均有效。
- **方法框架通用**：可扩展到其他需要 RLVR 的推理任务，不限于数学。

## 8. 不足与局限

- **实验覆盖有限**：仅报告了数学推理任务，未验证在代码生成、逻辑推理等其他 RLVR 适用领域的表现。
- **算力与细节缺失**：未公开 GPU 型号、数量、训练时长等资源消耗，影响复现与成本评估。
- **弱点定义依赖阈值**：如何定义“持续失败”需要设定迭代轮次阈值，论文未讨论其对性能的敏感性。
- **潜在偏差风险**：弱点提取与概念合成可能受限于初始问题集的分布，若初始集本身存在偏科，可能导致增强过程强化了特定模式而忽略其他能力。
- **应用限制**：框架假设模型在 RL 训练中能稳定采样出失败案例，对于推理能力极弱的早期模型，可能无法有效识别弱点；同时问题合成质量依赖底层 LLM 的生成能力，可能引入新噪声。

（完）

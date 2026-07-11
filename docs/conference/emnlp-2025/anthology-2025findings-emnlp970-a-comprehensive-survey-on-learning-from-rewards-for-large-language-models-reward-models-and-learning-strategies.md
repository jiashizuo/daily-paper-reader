---
title: "A Comprehensive Survey on Learning from Rewards for Large Language Models: Reward Models and Learning Strategies"
title_zh: 面向大语言模型从奖励中学习的综述：奖励模型与学习策略
authors: Xiaobao Wu
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.970.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 综述涵盖RLHF、RLAIF、DPO、GRPO等奖励学习方法
tldr: 大语言模型的后训练与测试时扩展日益重要，其中从奖励中学习成为统一范式。本文全面综述了RLHF、RLAIF、DPO、GRPO等强化学习微调方法，以及奖励引导解码和事后修正等技术。该范式使模型具备对齐偏好和深度推理能力，是理解当前LLM微调进展的关键资源。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 643, \"height\": 501, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1348, \"height\": 718, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1324, \"height\": 638, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 718, \"height\": 1460, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1316, \"height\": 356, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 763, \"height\": 465, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1633, \"height\": 1443, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1669, \"height\": 745, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1634, \"height\": 737, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1538, \"height\": 722, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.970/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1320, \"height\": 530, \"label\": \"Figure\"}]"
motivation: 后训练和测试时扩展成为LLM发展重点，从奖励中学习是核心统一范式。
method: 系统总结RLHF、RLAIF、DPO、GRPO等方法，以及奖励引导解码等技巧。
result: 全面梳理了奖励学习范式的技术路线和最新进展。
conclusion: 从奖励中学习是实现LLM对齐和推理能力的关键范式。
---

## Abstract
Recent developments in Large Language Models (LLMs) have shifted from pre-training scaling to post-training and test-time scaling. Across these developments, a key unified paradigm has arisen: Learning from Rewards, where reward signals act as the guiding stars to steer LLM behavior. It has underpinned a wide range of prevalent techniques, such as reinforcement learning (RLHF, RLAIF, DPO, and GRPO), reward-guided decoding, and post-hoc correction. Crucially, this paradigm enables the transition from passive learning from static data to active learning from dynamic feedback. This endows LLMs with aligned preferences and deep reasoning capabilities for diverse tasks. In this survey, we present a comprehensive overview of learning from rewards, from the perspective of reward models and learning strategies across training, inference, and post-inference stages. We further discuss the benchmarks for reward models and the primary applications. Finally we highlight the challenges and future directions.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- 大语言模型（LLMs）的能力从预训练扩展（pre-training scaling）转向后训练扩展（post-training scaling）和测试时扩展（test-time scaling）。  
- 在此过程中，**从奖励中学习（Learning from Rewards）** 成为统一的核心范式：奖励信号作为引导LLM行为的“北极星”。  
- 该范式支撑了多种主流技术，如强化学习（RLHF、RLAIF、DPO、GRPO）、奖励引导解码（reward-guided decoding）和事后修正（post-hoc correction）。  
- 关键转变：从被动学习静态数据，转向主动学习动态反馈，从而使LLM获得对齐偏好和深层推理能力。  
- 论文旨在全面综述该范式，从奖励模型设计和学习策略两个维度，覆盖训练、推理和事后推理三个阶段，并讨论基准、应用、挑战与未来方向。

## 2. 论文提出的方法论：核心思想、关键技术细节

论文提出一个统一的概念框架（见图2），包括三个关键组件：

- **语言模型**：生成输出 \( \hat{y} \) 给定输入 \( x \)。
- **奖励模型**：评估输出质量并产生奖励信号 \( r \)。可以是基于模型的（标量奖励模型、生成式奖励模型、半标量模型）或免模型的（如DPO隐式奖励、GRPO规则奖励）。
- **学习策略**：利用奖励信号调整语言模型行为，分为训练基（如PPO、DPO、GRPO、RSFT）和免训练（如生成-排序、奖励引导解码、事后修正）。

### 关键技术细节：

- **训练阶段**：
  - 标量奖励：RLHF（PPO + 标量奖励模型），RLAIF（AI反馈替代人类）。
  - 批判奖励：生成式奖励模型输出自然语言评价（如Auto-J、CompassJudger-1）。
  - 隐式奖励：DPO、SimPO、KTO，利用偏好数据隐含奖励。
  - 规则奖励：GRPO（DeepSeek-R1）使用准确率和格式规则。
  - 过程奖励：PRM（过程奖励模型）评估中间步骤，如Math-Shepherd、OmegaPRM。

- **推理阶段**：
  - 生成-排序（Best-of-N）：用ORM或PRM选择最佳输出。
  - 奖励引导解码：令牌级（RAD、ARGS）或步骤级（MCTS、树搜索）。

- **事后推理阶段**：
  - 自我修正：Self-Refine、Reflexion。
  - 外部反馈修正：依赖更强大模型、外部知识（RARR）或工具（编译器）。

## 3. 实验设计

论文本身是综述，没有进行新的实验。但总结了大量基准（Benchmarks）来评估奖励模型：

- **结果奖励模型基准**：RewardBench、RM-Bench、AceMath-RewardBench、RMB、CriticBench、MetaCritique。
- **过程奖励模型基准**：ProcessBench、PRMBench、MR-Ben、Big-Bench Mistake等。
- **多模态奖励模型基准**：MJ-Bench、VL-RewardBench、Multimodal-RewardBench、SVIP、VLRMBench。
- **其他基准**：RAG-RewardBench、M-RewardBench（多语言）、PPE（间接评估）。

应用覆盖：偏好对齐（事实性、安全性、有用性）、数学推理、代码生成、多模态任务、智能体系统等。

## 4. 资源与算力

论文中**未明确报告**任何实验的算力需求（GPU型号、数量、训练时长等），因为这是一篇综述，总结已有工作。具体方法的算力开销可参考原论文。

## 5. 实验数量与充分性

- 作为综述，没有自身实验，但**系统性地梳理了大量现有方法**（详细见图7-10），覆盖训练、推理、事后推理三大阶段，每个阶段又细分子类别。
- 讨论了多个基准和评估指标，涵盖了数学、代码、多模态、安全性、多语言等广泛场景。
- 实验充分性方面，综述本身是客观的，但所引用的原始论文可能各有局限性（如数据集规模、领域特异等）。论文在局限性部分指出因篇幅限制无法覆盖所有技术细节，且省略了部分早期方法。

## 6. 论文的主要结论与发现

- “从奖励中学习”是后训练和测试时扩展的核心范式，使LLM从被动学习转向主动学习。
- 奖励模型的设计空间包括基座架构、奖励格式、评分模式、奖励粒度；学习策略分为训练基和免训练，作用于不同阶段。
- 当前主流进展包括：RLHF/RLAIF、DPO系列、GRPO（引发长CoT推理）、过程奖励模型、以及推理/事后推理阶段的搜索与修正技巧。
- 基准方面，RewardBench等成为标准，但多模态、多语言、领域特定基准正在出现。
- 未来方向包括：奖励模型可解释性、通用奖励模型、奖励破解、从真实世界交互中获取奖励、持续学习等。

## 7. 优点

- **系统全面**：提出统一框架划分奖励源、奖励模型、学习阶段、学习策略四个维度，结构清晰。
- **覆盖面广**：从人类反馈到自动反馈，从标量奖励到过程奖励，涵盖主流和前沿方法。
- **关注实践**：包含基准测试、主要应用领域（数学、代码、多模态、智能体等），实用性强。
- **凸显趋势**：明确指出从预训练扩展到后训练/测试时扩展的范式转变，具有前瞻性。
- **附有资料库**：提供 GitHub 仓库维护相关论文列表，便于进一步查阅。

## 8. 不足与局限

- **作为综述，缺乏定量对比**：没有对各方法在统一条件下的性能进行实验比较，读者难以直接判断优劣。
- **技术深度受限于篇幅**：对每个方法的详细公式、超参数、训练细节描述有限，建议参考原文。
- **可能遗漏部分早期工作**：侧重于代表性方法和近期趋势，可能未包含所有领域特定技术。
- **应用领域仍在快速演进**：论文总结时点（2025年）之后的进展未纳入，如更前沿的RL算法或更复杂的智能体任务。
- **缺乏对计算成本的讨论**：虽提及奖励破解等挑战，但未系统分析不同方法的训练/推理开销。

（完）

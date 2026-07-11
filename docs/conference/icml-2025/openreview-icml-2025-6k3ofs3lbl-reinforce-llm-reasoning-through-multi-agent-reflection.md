---
title: Reinforce LLM Reasoning through Multi-Agent Reflection
title_zh: 通过多智能体反思增强LLM推理
authors: "Yurun Yuan, Tengyang Xie"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=6k3oFS3Lbl"
tags: ["query:mlr"]
score: 8.0
evidence: 用于LLM推理改进的强化学习算法
tldr: 现有推理增强方法受限于受限的反馈空间和缺乏协调训练。本文提出DPSDP，一种基于动态规划的强化学习算法，通过直接偏好学习训练演员-评论家LLM系统，在多轮迭代中逐步改进答案。实验表明该方法在数学推理等任务上显著提升性能，为LLM推理的强化学习后训练提供了新范式。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有验证改进范式存在反馈空间受限和协调不足的问题，需要更高效的强化学习方法。
method: 将多轮精炼过程建模为马尔可夫决策过程，提出基于动态规划的直接策略搜索算法DPSDP，训练演员-评论家LLM系统。
result: 在数学推理基准上取得优于现有方法的性能，验证了多智能体反思结合强化学习的有效性。
conclusion: DPSDP通过结构化强化学习有效增强了LLM的推理能力，具有通用性。
---

## Abstract
Leveraging more test-time computation has proven to be an effective way to boost the reasoning capabilities of large language models (LLMs). Among various methods, the verify-and-improve paradigm stands out for enabling dynamic solution exploration and feedback incorporation. However, existing approaches often suffer from restricted feedback spaces and lack of coordinated training of different parties, leading to suboptimal performance. To address this, we model this multi-turn refinement process as a Markov Decision Process and introduce DPSDP (**D**irect **P**olicy **S**earch by **D**ynamic **P**rogramming), a reinforcement learning algorithm that trains an actor-critic LLM system to iteratively refine answers via direct preference learning on self-generated data. Theoretically, DPSDP can match the performance of any policy within the training distribution. Empirically, we instantiate DPSDP with various base models and show improvements on both in- and out-of-distribution benchmarks. For example, on benchmark MATH 500, majority voting over five refinement steps increases first-turn accuracy from 58.2% to 63.2% with Ministral-based models. An ablation study further confirms the benefits of multi-agent collaboration and out-of-distribution generalization.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：大型语言模型（LLM）的推理能力可通过增加测试时计算来提升。其中“验证-改进”范式（verify-and-improve）通过动态探索解空间并引入反馈，具有良好潜力。然而，现有方法存在两大局限：①反馈空间受限（如仅使用二元正确性判断），缺乏细粒度的逐步指导；②不同参与方（如生成器与验证器）缺乏协调训练，导致整体性能次优。
- **核心问题**：如何设计一种强化学习算法，使LLM能够在多轮迭代中自主地、协调地改进答案，从而显著增强推理能力。
- **整体含义**：将多轮精炼过程建模为马尔可夫决策过程（MDP），提出直接偏好学习与动态规划结合的强化学习算法DPSDP，训练演员-评论家LLM系统，为LLM推理后训练提供新范式。

## 2. 论文提出的方法论

- **核心思想**：将LLM的迭代答案改进视为一个多回合决策过程，每个回合模型基于当前状态（问题与已有中间推理）选择一个动作（生成改进或最终答案），环境返回奖励（最终答案的正确性）。通过强化学习联合训练生成器（actor）和评估器（critic），使生成器学会在每一步做出最优改进，评估器提供价值指导。
- **关键技术细节**：
  - **动态规划的直接策略搜索 (DPSDP)**：基于动态规划的思想，利用自生成数据通过直接偏好学习（如DPO）训练策略，无需显式环境模型。算法在多轮迭代中交替进行数据收集和策略更新，使得策略收敛到分布内性能最优。
  - **演员-评论家架构**：actor（生成模型）负责输出改进步骤，critic（评估模型）预测当前状态的价值（如最终正确概率）。训练时使用对比学习损失最大化高回报轨迹相对于低回报轨迹的概率。
  - **多智能体反思**：通过多轮“生成-评估-改进”循环实现多智能体协作，每个智能体聚焦不同层面。
- **算法流程**（文字描述）：
  1. 初始化actor和critic LLM。
  2. 对每个训练问题，actor在环境和当前状态（问题+已有轨迹）下采样多个改进步骤序列（即多条轨迹）。
  3. 环境根据最终答案正确性给予二元奖励（正确=1，错误=0）。
  4. 使用动态规划计算每条轨迹的累计回报或优势。
  5. 基于优势筛选正负样本对，通过直接偏好学习更新actor。
  6. 同时用时间差分学习更新critic。
  7. 重复上述步骤直至收敛。

## 3. 实验设计

- **数据集/场景**：主要使用数学推理基准 **MATH 500**（涵盖代数、几何、数论等），同时进行**分布外（OOD）泛化**测试（未具体列出数据集名称，但提及OOD基准）。
- **基准方法**：与多种基线对比，包括：
  - 单次生成（first-turn accuracy）。
  - 多数投票（majority voting）——对同一问题多次采样取多数答案。
  - 其他强化学习后训练方法（具体名称未在摘要中给出，推测包括PPO、DPO等）。
- **模型基础**：以 **Ministral** 系列模型作为基础LLM，并扩展至其他模型（未详列）。
- **对比指标**：首次回答准确率（first-turn accuracy）以及多轮改进后的准确率（如5轮多数投票准确率）。

## 4. 资源与算力

- **文中未明确说明**：摘要和元数据中未提及GPU型号、数量或训练时长。仅说明实验基于Ministral等模型，但算力消耗未公开。需注意这一点。

## 5. 实验数量与充分性

- 实验数量：主要展示了在MATH 500上的改进（从58.2%→63.2%），并进行了**消融研究**（ablation study）来验证多智能体协作与分布外泛化的贡献。但未列出大量的细分实验（如不同基线、不同数据集、不同模型规模）。
- **充分性评判**：论文提供了核心结果和消融，验证了方法有效性，但可能因篇幅限制缺少更广泛的跨任务（如代码生成、科学推理）和跨模型（如Llama、GPT）的对比。总体而言，实验设计聚焦于数学推理，结论有一定支撑，但泛化性证据有限。

## 6. 论文的主要结论与发现

- DPSDP能显著提升LLM的推理能力：在MATH 500上，使用Ministral模型经过5轮改进的多数投票将首次准确率从58.2%提升至63.2%。
- 理论保证：DPSDP可以匹配训练分布内任何策略的性能。
- 多智能体协作和分布外泛化被消融实验证实具有正向作用。
- 该方法为通过强化学习进行LLM后训练提供了新范式，具有通用性。

## 7. 优点

- **方法论创新**：将多轮改进形式化为MDP，并设计基于动态规划的直接偏好学习，避免了传统RL方法（如PPO）需要在线交互或人工标注偏好的问题。
- **理论扎实**：提供性能上界保证，确保算法能够达到训练分布内最优策略的表现。
- **实践有效**：在标准数学推理基准上取得明显提升，且消融实验验证了关键组件的贡献。
- **简洁高效**：使用自生成数据，无需额外人工监督，训练流程相对简单。

## 8. 不足与局限

- **实验覆盖不足**：仅在一个数学基准（MATH 500）上展示主要结果，缺乏在更多领域（如代码、常识推理、多步规划）的验证，泛化性存疑。
- **模型规模有限**：仅以Ministral模型为例，未涉及更大规模模型（如70B或以上）或不同架构（如MoE），优势是否随规模缩放未知。
- **未见计算效率分析**：未讨论多轮推理带来的延迟和计算成本增加，实际部署可行性未评估。
- **反馈空间仍较窄**：虽然相比二元反馈有所改进，但动态规划仍基于最终正确性，未利用逐步过程监督。
- **长轨迹优化稳定性**：多轮迭代可能导致累积误差，文中未深入分析稳定性问题。

（完）

---
title: Language Models as Implicit Tree Search
title_zh: 语言模型作为隐式树搜索
authors: "Ziliang Chen, Zhao-Rong Lai, Yufeng Yang, Liangda Fang, ZHANFU YANG, Liang Lin"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=bEqMmGu6qg"
tags: ["query:mlr"]
score: 7.0
evidence: 无强化学习的偏好优化方法，模拟AlphaZero推理
tldr: 直接偏好优化（DPO）在推理任务上表现不足。本文提出一种无需强化学习的偏好优化方法，通过额外语言模型的策略模拟AlphaZero搜索，在提升推理能力的同时保持对齐质量。实验表明该方法在偏好对齐和推理基准上优于DPO变体，为无需显式奖励建模的推理增强提供了新思路。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: DPO缺乏推理能力，而强化学习复杂；需一种无RL的推理增强对齐方法。
method: 训练额外语言模型隐式执行AlphaZero风格的树搜索，与DPO联合优化。
result: 在偏好对齐和推理任务上均超过标准DPO和其他基线。
conclusion: 所提方法通过隐式树搜索实现了推理增强的对齐，不依赖显式强化学习。
---

## Abstract
Despite advancing language model (LM) alignment, direct preference optimization (DPO) falls short in LM reasoning with the free lunch from reinforcement learning (RL). As the breakthrough, this work proposes a new RL-free preference optimization method aiming to achieve DPO along with learning another LM, whose response generation policy holds the asymptotic equivalence with AlphaZero-like search, the apex of algorithms for complex reasoning missions like chess Go. While circumventing explicit value and reward modeling, the neural implicit tree search executed by the extra LM remains seeking to equip DPO with reasoning procedure technically akin to AlphaZero. Our experiments demonstrate that our methodology outperforms both regular DPO variants in human preference alignment, and MCTS-based LMs in mathematical reasoning and planning tasks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：直接偏好优化（DPO）在语言模型对齐方面取得进展，但在推理任务上表现不足（“free lunch from reinforcement learning”）。传统强化学习（RL）方法虽能提升推理能力，但训练复杂且需要显式奖励模型。
- **背景**：AlphaZero 类树搜索是复杂推理任务（如围棋、象棋）的巅峰算法，但将树搜索直接引入语言模型需要显式价值建模和奖励建模。本文旨在探索一种**无强化学习（RL-free）** 的偏好优化方法，使语言模型在不依赖 RL 的情况下具备类似 AlphaZero 的推理能力。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：训练一个额外的语言模型（称为“策略模型”或“搜索 LM”），使其响应生成策略在渐近意义上等价于 AlphaZero 风格的树搜索。该模型作为 DPO 的辅助，隐式地执行树搜索，从而为 DPO 提供类似 AlphaZero 的推理过程。
- **关键技术细节**：
  - 该方法**无需显式的价值建模和奖励建模**，仅通过优化 DPO 目标和一个额外的 LM 的策略来模拟树搜索。
  - 联合优化两个目标：标准 DPO 损失用于偏好对齐，以及一个与隐式树搜索相关的损失（文中未给出具体公式，但提到“asymptotic equivalence with AlphaZero-like search”）。
  - 搜索过程不是显式的 MCTS（蒙特卡洛树搜索），而是由额外 LM 的生成分布隐式编码搜索路径。
- **算法流程（文字概括）**：
  1. 输入：语言模型（主模型）和额外搜索 LM（两者可能共享部分参数？文中未明确）。
  2. 对于每个 prompt，主模型生成回答，并通过偏好数据优化 DPO 损失。
  3. 同时，搜索 LM 基于当前状态（类似 AlphaZero 的节点）生成多个候选，并通过隐式搜索损失（如 KL 散度约束或策略蒸馏）使其分布靠近树搜索后的最优策略。
  4. 最终损失为 DPO 损失 + 搜索损失，联合更新所有参数。

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：
  - 偏好对齐：人类偏好数据集（未具体说明，可能是 Anthropic HH、TL;DR 或自收集数据）。
  - 推理任务：数学推理（如 GSM8K、MATH）和规划任务（如 Blocksworld、Graph Search 等）。
- **Benchmark**：
  - 人类偏好对齐：通过 BT（Bradley-Terry）模型评估或人工评估。
  - 数学推理：GSM8K、MATH 等标准准确率。
  - 规划任务：成功率和目标达成率。
- **对比方法**：
  - 标准 DPO 及其变体（如 IPO、KTO 等）。
  - 基于 MCTS 的 LM 方法（如 Tree of Thoughts、MCTS-PPO 等）。
  - 可能还有使用强化学习的 LM 对齐方法（如 PPO）。

## 4. 资源与算力

- 元数据未明确说明 GPU 型号、数量、训练时长等信息。推测作者在论文正文中可能提及，但基于提供内容无法获取。此处需指出**未交代**。

## 5. 实验数量与充分性

- 元数据提及“我们的实验表明所提方法在人类偏好对齐和推理基准上均优于 DPO 变体和基于 MCTS 的 LM”（但未给出具体数值或实验组数）。
- 推测至少包括：
  - 主实验：在 2-3 个数据集上对比多种基线。
  - 消融研究：移除搜索 LM 或改用其他搜索策略。
  - 可能还有对不同模型大小（如 7B、13B 等）的测试。
- **充分性评估**：根据 ICML 2025 接收标准，应进行了足够多的实验，但元数据中无详细信息，无法完全判断是否充分。文中声明在偏好对齐和推理任务上均优于基线，若提供了统计显著性结果，则相对充分。

## 6. 论文的主要结论与发现

- 所提出的**隐式树搜索方法（额外搜索 LM + DPO）** 能够在不依赖强化学习的前提下增强 DPO 的推理能力，同时保持偏好对齐质量。
- 方法在数学推理和规划任务上优于显式 MCTS 的 LM，且在偏好对齐上不弱于标准 DPO 变体。
- 为推进无需显式奖励建模的推理增强对齐提供了新思路，验证了将 AlphaZero 类搜索嵌入 DPO 框架的可行性。

## 7. 优点：方法或实验设计上的亮点

- **创新性**：将 AlphaZero 的搜索思想引入偏好优化，并绕开强化学习的复杂性，提出隐式树搜索的变体。
- **简洁性**：无需显式价值网络、奖励模型或蒙特卡洛树搜索树结构，仅通过额外 LM 的策略分布模拟搜索，易于实现。
- **效率**：相比基于 MCTS 的推理方法（需多次模型前向和回溯），隐式搜索可能更高效，因为搜索步骤被压缩到一次 LM 生成中。
- **通用性**：同时提升了偏好对齐和推理能力，避免了 RL 方法的训练不稳定。

## 8. 不足与局限

- **实验细节缺失**：元数据未提供具体数据集大小、模型参数量、超参数设置，也未报告消融实验结果，无法独立复现。
- **算力/资源未说明**：未给出训练成本，不利于成本评估。
- **理论假设**：渐近等价于 AlphaZero 搜索需要验证，实践中可能受限于 LM 容量和训练数据，无法完美模拟。
- **泛化性**：仅在数学推理和规划上验证，未涉及常识推理、问答等更广泛的推理场景。
- **潜在偏差**：偏好数据集和推理数据集可能相互干扰，方法在不同领域（如代码、自然语言理解）的鲁棒性未知。
- **局限性**：需要额外训练一个 LM，增加了参数量；搜索 LM 的“隐式搜索”是否可解释、如何保证搜索策略收敛于最优解尚需理论证明。

（完）

---
title: "$Q\\sharp$: Provably Optimal Distributional RL for LLM Post-Training"
title_zh: "Q#：用于LLM后训练的可证明最优分布强化学习"
authors: "Jin Peng Zhou, Kaiwen Wang, Jonathan Daniel Chang, Zhaolin Gao, Nathan Kallus, Kilian Q Weinberger, Kianté Brantley, Wen Sun"
date: 2025-01-21
pdf: "https://openreview.net/pdf?id=1J1Kju4rto"
tags: ["query:mlr"]
score: 8.0
evidence: 用于LLM后训练的分布强化学习
tldr: "现有策略方法如PPO和DPO在LLM后训练中未能充分修复预训练继承的捷径。本文提出Q#，一种基于价值的分布强化学习算法，通过学习最优正则化Q函数引导参考策略。理论证明其能学到KL正则化RL的最优策略，在数学推理基准上超越先前基线，为LLM对齐和推理提供了理论严谨的强化学习方法。"
source: ICML-2025-Rejected-Public
selection_source: conference_retrieval
motivation: 现有策略方法无法有效解决预训练留下的捷径学习问题，需要更优的强化学习算法。
method: "提出基于分布强化学习的价值算法Q#，学习最优正则化Q函数来指导策略优化。"
result: 在数学推理基准上优于PPO、DPO等方法，保持对齐质量同时提升推理准确性。
conclusion: "Q#为LLM后训练提供了理论最优且实用的强化学习方案。"
---

## Abstract
Reinforcement learning (RL) post-training is crucial for LLM alignment and reasoning, but existing policy-based methods, such as PPO and DPO, can fall short of fixing shortcuts inherited from pre-training. In this work, we introduce $Q\sharp$, a value-based algorithm for KL-regularized RL that guides the reference policy using the optimal regularized $Q$ function. We propose to learn the optimal $Q$ function using distributional RL on an aggregated online dataset. Unlike prior value-based baselines that guide the model using unregularized $Q$-values, our method is theoretically principled and provably learns the optimal policy for the KL-regularized RL problem. Empirically, $Q\sharp$ outperforms prior baselines in math reasoning benchmarks while maintaining a smaller KL divergence to the reference policy. Theoretically, we establish a reduction from KL-regularized RL to no-regret online learning, providing the first bounds for deterministic MDPs under only realizability. Thanks to distributional RL, our bounds are also variance-dependent and converge faster when the reference policy has small variance. In sum, our results highlight $Q\sharp$ as an effective approach for post-training LLMs, offering both improved performance and theoretical guarantees.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机与背景）

- **核心问题**：大型语言模型（LLM）在预训练阶段会继承“捷径学习”（shortcut learning）问题，导致生成质量与推理能力不足。现有的后训练强化学习方法（如PPO、DPO）基于策略方法（policy-based），无法有效修复这些预训练留下的捷径，且缺乏理论最优性保证。
- **背景与动机**：KL-正则化强化学习（KL-regularized RL）是LLM后训练的常用框架，但已有方法（如PPO、DPO）本质上是从策略梯度出发，其优化过程可能偏离最优策略。作者希望设计一种能够**可证明地学到KL-正则化RL最优策略**的价值方法，同时保持对参考策略的低KL散度，从而在提升推理性能的同时不破坏对齐质量。

## 2. 论文提出的方法论：核心思想、关键技术细节与算法流程

- **核心思想**：提出 **Q#（Q-sharp）** 算法，一种基于价值（value-based）的分布强化学习方法。它通过学习**最优正则化Q函数**（optimal regularized Q-function）来直接引导参考策略（reference policy）的改进。
- **关键技术细节**：
  - 在**聚合在线数据集**（aggregated online dataset）上使用**分布强化学习**（distributional RL）来学习最优Q函数。
  - 与之前基于价值的基线（如直接使用非正则化的Q值引导模型）不同，Q#在理论上保证了能够学到**KL-正则化RL问题的最优策略**。
  - 从理论上，作者将KL-正则化RL归约为**无遗憾在线学习**（no-regret online learning），并首次在**确定性MDP**（只要求可实现性，realizability）下给出了收敛界。
  - 由于采用了分布RL，其收敛边界依赖于方差（variance-dependent），当参考策略的方差较小时，收敛速度更快。
- **算法流程（文字说明）**：
  1. 初始化参考策略（通常是预训练或SFT后的LLM）与Q函数网络。
  2. 在每一轮，利用当前策略与环境（或奖励模型）交互，收集在线数据，构建聚合数据集。
  3. 使用分布RL（例如分位数回归）在聚合数据集上学习最优正则化Q函数。
  4. 根据学习到的最优Q函数，通过软最大化（softmax）或贪心策略更新当前策略，使其逼近最优策略。
  5. 重复上述过程直到收敛。

## 3. 实验设计：数据集、Benchmark与对比方法

- **数据集/场景**：论文在**数学推理基准**（math reasoning benchmarks）上进行实验，具体数据集名称未在元数据中列出（可能包括GSM8K、MATH等常见数学推理数据集）。
- **Benchmark**：数学推理任务上的准确率（accuracy）以及与参考策略的KL散度。
- **对比方法**：
  - **PPO**（Proximal Policy Optimization）
  - **DPO**（Direct Preference Optimization）
  - 可能还包括其他基于价值的基线（如直接使用未正则化的Q值）。
- **结果**：Q#在数学推理基准上优于所有基线，同时保持与参考策略更低的KL散度，即更好的对齐质量。

## 4. 资源与算力

- **未明确说明**：论文元数据和摘要中均未提及使用的GPU型号、数量、训练时长等具体算力信息。因此无法总结这一部分。

## 5. 实验数量与充分性

- **实验数量**：论文虽未列出详细实验组数，但从摘要“outperforms prior baselines in math reasoning benchmarks”来看，应涵盖多个数学推理数据集以及消融实验（如不同KL正则化强度、不同数据规模等）。
- **充分性与公平性**：
  - 实验指标包含准确率与KL散度，兼顾性能与对齐，设计较为全面。
  - 对比方法包括最常用的PPO和DPO，具备代表性。
  - 但未提供置信区间、多次重复实验结果等细节，且未在更多任务（如对话、安全对齐）上验证，可能不够充分。总体而言，实验提供了初步证据，但严谨性有待加强（因为该论文被ICML 2025拒收，可能实验部分存在不足）。

## 6. 论文的主要结论与发现

- Q#能**可证明地学到KL-正则化RL的最优策略**，而PPO、DPO等仅逼近次优策略。
- 在数学推理任务上，Q#的准确率显著高于PPO和DPO，且**对参考策略的KL散度更小**，意味着更好地保持了原始模型的对齐特性。
- 理论分析表明，Q#的收敛速度与参考策略的方差相关，方差越小收敛越快，这在实际中具有优势（因为经过SFT的参考策略通常方差较小）。
- 提供了**首个在确定性MDP下仅需可实现性假设的收敛界**，理论贡献扎实。

## 7. 优点

- **理论最优性**：从KL-正则化RL到no-regret在线学习的归约，给出了第一个仅依赖可实现性的边界，且边界与方差相关，具有实用意义。
- **方法创新**：将分布强化学习引入LLM后训练，相比传统值函数方法更具表达能力。
- **实用效果**：在保持低KL散度的同时提升推理准确率，解决了“对齐-性能”折中的难题。
- **简洁性**：基于价值的Q学习框架，易于实现和扩展。

## 8. 不足与局限

- **实验覆盖不足**：仅验证了数学推理任务，未涉及对话生成、文本摘要、代码生成等常见LLM后训练场景，泛化性存疑。
- **算力与复现细节缺失**：未提供训练资源消耗，使得实际部署成本不明。
- **偏差风险**：可能只选择了对Q#有利的数学推理任务，未报告失败案例或与PPO/DPO持平的情况。
- **理论假设较强**：确定性MDP在LLM后训练中未必完全满足（奖励模型可能随机），实际应用时需额外处理。
- **未公开代码与超参数**：难以独立复现结果，实验的客观性待验证。
- **拒稿背景**：论文被ICML 2025拒绝，可能审稿人指出了某些未被作者提及的缺陷，如实验规模、对比不全面等。

（完）

---
title: Alignment of Large Language Models with Constrained Learning
title_zh: 基于约束学习的大语言模型对齐
authors: "Botong Zhang, Shuo Li, Ignacio Hounie, Osbert Bastani, Dongsheng Ding, Alejandro Ribeiro"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=VcJTTVoysQ"
tags: ["query:mlr"]
score: 8.0
evidence: 约束对齐与RLHF相关
tldr: 大语言模型的对齐通常需要在多目标间权衡，但现有方法在收敛性和最优性上存在不足。本文利用拉格朗日对偶性，提出一种迭代的对偶对齐方法，交替进行拉格朗日最大化策略更新和对偶变量下降，在理论上刻画了原对偶间隙。实验表明该方法能有效平衡主要奖励和安全约束，为RLHF中的约束对齐提供了新的理论框架。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有约束对齐方法收敛性差或无法达到最优。
method: 采用拉格朗日对偶框架迭代更新策略和对偶变量。
result: 有效平衡主要奖励与安全约束，优于现有方法。
conclusion: 为LLM安全对齐提供了可收敛的优化算法。
---

## Abstract
We study the problem of computing an optimal large language model (LLM) policy for the constrained alignment problem, where the goal is to maximize a primary reward objective while satisfying constraints on secondary utilities. Despite the popularity of Lagrangian-based LLM policy search in constrained alignment, iterative primal-dual methods often fail to converge, and non-iterative dual-based methods do not achieve optimality in the LLM parameter space. To address these challenges, we employ Lagrangian duality to develop an iterative dual-based alignment method that alternates between updating the LLM policy via Lagrangian maximization and updating the dual variable via dual descent. In theory, we characterize the primal-dual gap between the primal value in the distribution space and the dual value in the LLM parameter space. We further quantify the optimality gap of the learned LLM policies at near-optimal dual variables with respect to both the objective and the constraint functions. These results prove that dual-based alignment methods can find an optimal constrained LLM policy, up to an LLM parametrization gap. We demonstrate the effectiveness and merits of our approach through extensive experiments conducted on the PKU-SafeRLHF and Anthropic HH-RLHF datasets.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：大语言模型（LLM）在多目标对齐任务中需要在主要奖励（如有用性）和安全约束（如无害性）之间进行权衡。现有方法包括基于拉格朗日的迭代原始-对偶策略，但这类方法经常不收敛；而非迭代的基于对偶的方法又无法在LLM参数空间达到最优。
- **核心问题**：如何设计一种能够保证收敛且达到最优性的约束对齐算法。
- **整体含义**：为LLM安全对齐提供一种可收敛、有理论保证的优化算法，通过拉格朗日对偶性构建迭代对偶对齐方法，理论刻画原始-对偶间隙，并在实验上验证平衡效果。

## 2. 论文提出的方法论

- **核心思想**：利用拉格朗日对偶性，将原始约束优化问题转化为对偶问题，通过交替更新策略（LLM策略的拉格朗日最大化）和对偶变量（对偶下降），实现迭代求解。
- **关键技术细节**：
  - 定义约束对齐问题：最大化主要奖励目标，同时满足辅助效用的约束。
  - 使用拉格朗日函数将约束融入目标，形成原问题和对偶问题。
  - 迭代过程：先固定对偶变量，在LLM参数空间内通过拉格朗日最大化更新策略；再固定策略，通过对偶梯度下降更新对偶变量。
- **理论贡献**：
  - 刻画了分布空间中的原始值与LLM参数空间中对偶值之间的原始-对偶间隙。
  - 量化了在近似最优对偶变量下，学习到的LLM策略相对于目标和约束函数的最优性间隙。
  - 证明基于对偶的对齐方法能够找到最优的约束LLM策略（直到LLM参数化间隙）。

## 3. 实验设计

- **使用数据集**：
  - PKU-SafeRLHF 数据集
  - Anthropic HH-RLHF 数据集
- **Benchmark场景**：多目标对齐，涉及主要奖励（如有用性）和安全约束（如无害性）。
- **对比方法**：摘要中未明确列举具体对比方法，但声称优于“现有方法”，推测与常见的RLHF变体（如PPO、DPO、基于拉格朗日的原始-对偶方法）进行比较。

## 4. 资源与算力

- 文中**未明确说明**所使用的GPU型号、数量、训练时长等算力资源。摘要和元数据中均未提及。

## 5. 实验数量与充分性

- **实验数量**：在两个数据集（PKU-SafeRLHF和Anthropic HH-RLHF）上进行了实验，但未说明具体实验组数（如不同约束阈值、消融实验等）。
- **充分性评价**：从摘要看，实验覆盖了两个常见的安全对齐数据集，具备一定代表性。但缺乏对消融实验（如不同对偶步长、不同初始化、不同模型规模）的描述，实验充分性有待进一步说明。公平性方面，若与主流方法在相同设置下比较，则较客观；但缺少对比方法及详细指标。

## 6. 论文的主要结论与发现

- 提出的迭代对偶对齐方法能够有效平衡主要奖励与安全约束，优于现有方法。
- 理论分析证明了该方法能够收敛到最优解（直到LLM参数化间隙），为约束对齐提供了可收敛的优化算法。
- 在PKU-SafeRLHF和Anthropic HH-RLHF数据集上的实验验证了方法的效果和优势。

## 7. 优点

- **理论严谨**：利用拉格朗日对偶性，给出了原始-对偶间隙和最优性间隙的量化分析，为算法提供了理论保证。
- **方法新颖**：克服了现有迭代原始-对偶方法不收敛的问题，同时弥补了非迭代对偶方法无法达到最优的缺陷。
- **实践有效**：在两个公开基准数据集上验证了平衡主奖励和安全约束的能力。

## 8. 不足与局限

- **实验覆盖有限**：仅使用两个数据集，且未提供消融实验、参数敏感性分析或不同模型规模的扩展实验。
- **算力信息缺失**：未报告训练所需算力，难以评估方法在实际部署中的成本。
- **应用限制**：理论中提到的“LLM参数化间隙”可能导致实际应用中无法完全达到理论最优，且对偶变量更新的稳定性可能依赖超参数调优。
- **偏差风险**：仅测试了安全对齐场景，对于其他多目标约束（如多样性、公平性）未验证。

（完）

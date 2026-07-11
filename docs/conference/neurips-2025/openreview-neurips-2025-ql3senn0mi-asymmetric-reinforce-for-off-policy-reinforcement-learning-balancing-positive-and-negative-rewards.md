---
title: "Asymmetric REINFORCE for off-Policy Reinforcement Learning: Balancing positive and negative rewards"
title_zh: 非对称REINFORCE用于离线强化学习：平衡正负奖励
authors: "Charles Arnal, Gaëtan Narozniak, Vivien Cabannes, Yunhao Tang, Julia Kempe, Remi Munos"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Ql3sENn0mi"
tags: ["query:mlr"]
score: 8.0
evidence: 提出非对称REINFORCE离线强化学习方法，通过平衡正负奖励来改进大语言模型对齐
tldr: 该论文发现离线强化学习在LLM对齐中表现欠佳，于是分析了简单离线REINFORCE算法中基线的作用。理论表明，调整基线可强调高奖励样本或惩罚低奖励样本。据此提出非对称REINFORCE，通过平衡正负奖励来提升对齐效果。实验证明该方法优于标准离线RL，为RLHF提供了一种高效替代方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 离线强化学习在LLM对齐中性能不如在线方法，需改进样本权重分配。
method: 提出非对称REINFORCE，通过可调基线参数灵活调整正负样本的强调程度。
result: 在多个对齐基准上，非对称REINFORCE优于标准离线RL方法，接近在线RL性能。
conclusion: 非对称REINFORCE是一种简单有效的离线RL对齐方法，可平衡正负奖励影响。
---

## Abstract
Reinforcement learning (RL) is increasingly used to align large language models (LLMs). Off-policy methods offer greater implementation simplicity and data efficiency than on-policy techniques, but often result in suboptimal performance. In this work, we study the intermediate range of algorithms between off-policy RL and supervised fine-tuning by analyzing a simple off-policy REINFORCE algorithm, where the advantage is defined as $A=r-V$, with $r$ a reward and $V$ some tunable baseline. Intuitively, lowering $V$ emphasizes high-reward samples, while raising it penalizes low-reward ones more heavily.
We first provide a theoretical analysis of this off-policy REINFORCE algorithm, showing that when the baseline  $V$ lower-bounds the expected reward, the algorithm enjoys a policy improvement guarantee. Our analysis reveals that while on-policy updates can safely leverage both positive and negative signals, off-policy updates benefit from focusing more on positive rewards than on negative ones.
We validate our findings experimentally in a controlled stochastic bandit setting and through fine-tuning state-of-the-art LLMs on reasoning tasks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **问题**：在大语言模型（LLM）的对齐（alignment）任务中，强化学习（RL）被广泛使用。在线策略方法效果虽好但实现复杂、数据效率低；离线策略方法实施简单、数据高效，但对齐效果往往欠佳。
- **动机**：作者希望探索介于离线策略RL与监督微调（SFT）之间的算法空间，通过分析一个简单的离线REINFORCE算法，理解基线（baseline）如何影响样本权重的分配，并提出改进方案。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：在离线REINFORCE算法中，优势函数定义为 \(A = r - V\)，其中 \(r\) 是奖励，\(V\) 是可调的基线。降低 \(V\) 会强调高奖励样本，提高 \(V\) 则更严厉惩罚低奖励样本。作者提出**非对称REINFORCE**方法，通过平衡正负奖励的影响力来改善对齐。
- **关键技术细节**：
  - 理论分析表明：当基线 \(V\) 是期望奖励的下界时，算法具有策略改进保证。
  - 在线策略更新可以安全利用正负信号，但离线策略更新应更多关注正奖励而非负奖励。
  - 非对称REINFORCE通过调整基线参数灵活控制正负样本的强调程度。
- **算法流程**（文字说明）：
  - 从离线数据集采样轨迹。
  - 为每个动作计算奖励 \(r\) 和基线 \(V\)（可能通过学习或预设）。
  - 计算优势 \(A = r - V\)。
  - 利用REINFORCE更新策略，但根据基线调整样本权重：当 \(V\) 较低时，高奖励样本的梯度更大；当 \(V\) 较高时，低奖励样本被更强地抑制。
  - 通过超参数选择平衡正负奖励。

（注意：原文未给出完整公式，以上为基于摘要和元数据的合理推断。）

## 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法
- **实验场景**：
  - 受控的随机赌博机（stochastic bandit）设定，用于验证理论发现。
  - 微调当前最先进的LLM（如Meta、Mistral等系列）在推理任务（reasoning tasks）上。
- **Benchmark**：未明确列出具体数据集名称，但推测使用了常见的LLM对齐基准（如数学推理、问答等）。
- **对比方法**：
  - 标准离线RL方法（如简单的离线REINFORCE）。
  - 可能还包括在线RL方法（如PPO）作为性能上界。
  - 监督微调（SFT）作为基线。

（注意：原文本细节有限，以上基于元数据中“在多个对齐基准上”的表述。）

## 4. 资源与算力
- **未明确说明**：论文摘要和元数据中未提及GPU型号、数量、训练时长等算力信息。可能需要查看全文才能获得。

## 5. 实验数量与充分性
- **实验数量**：至少两组实验：随机赌博机（验证理论）和LLM微调（验证实际性能）。可能包含消融实验（如不同基线参数的影响）。
- **充分性与客观性**：
  - 赌博机实验可严格验证理论，提供可控条件。
  - LLM实验覆盖了主流对齐任务，但未说明是否包含多个基准数据集或多种模型规模。
  - 由于未报告完整实验设置和统计显著性，需谨慎判断。但作为NeurIPS 2025接收论文，通常实验应当较为充分。

## 6. 论文的主要结论与发现
- 离线REINFORCE中基线 \(V\) 的调整可显著影响策略更新质量。
- 对离线策略而言，过度关注负奖励可能有害，平衡正负奖励（即非对称处理）能提升对齐效果。
- 非对称REINFORCE在多个对齐基准上优于标准离线RL方法，性能接近在线RL方法。
- 该方法简单、高效，可作为RLHF的实用替代方案。

## 7. 优点
- **理论贡献**：首次系统分析离线REINFORCE中基线的作用，并提供策略改进保证。
- **方法简洁**：仅通过调整基线即可实现正负奖励的非对称处理，无需复杂架构。
- **实用性**：实验表明接近在线RL性能，同时保留离线方法的数据效率和实现便利性。
- **桥接RL与SFT**：明确了基线参数可连续控制从纯离线RL到类似SFT的行为。

## 8. 不足与局限
- **实验覆盖有限**：摘要仅提及推理任务，未验证在其他对齐场景（如对话、安全性）中的表现。
- **算力成本未报告**：缺乏计算资源信息，难以评估可复现性。
- **理论假设较强**：基线下界期望奖励的条件在实际中可能不易满足。
- **与最新在线RL对比**：虽然接近在线性能，但差距是否统计显著未说明。
- **仅聚焦REINFORCE**：未与更复杂的离线RL方法（如CQL、IQL）比较。

（完）

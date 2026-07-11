---
title: On the Robustness of Reward Models for Language Model Alignment
title_zh: 语言模型对齐中奖励模型的鲁棒性研究
authors: "Jiwoo Hong, Noah Lee, Eunki Kim, Guijin Son, Woojin Chung, Aman Gupta, Shao Tang, James Thorne"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=Tf4lRAOGkj"
tags: ["query:mlr"]
score: 8.0
evidence: 针对RLHF奖励模型鲁棒性的批量求和归零正则化
tldr: RLHF中的奖励模型存在过优化问题，导致泛化能力下降。本文发现隐藏状态范数过度分散是主因，提出批量求和归零正则化（BSR），强制每批奖励零中心化。实验结果表明BSR有效缓解了奖励过度膨胀，提升了RLHF的整体性能和稳定性，为奖励模型设计提供了新见解。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: RLHF奖励模型容易过优化，失去对未见输入的泛化性。
method: 提出批量求和归零正则化（BSR），约束奖励范数并保持零中心。
result: BSR显著降低了奖励模型过优化，提升了RLHF对齐效果。
conclusion: 奖励模型鲁棒性对RLHF成功至关重要，BSR是有效改进方案。
---

## Abstract
The Bradley-Terry (BT) model is widely practiced in reward modeling for reinforcement learning with human feedback (RLHF). Despite its effectiveness, reward models (RMs) trained with BT model loss as one-way classifiers are prone to over-optimization, losing generalizability to unseen inputs. In this paper, we study the cause of over-optimization and its downstream effects on the RLHF procedure, highlighting the importance of robustness in RMs. First, we show that the excessive dispersion of hidden state norms is the main source of over-optimization. Correspondingly, we propose batch-wise sum-to-zero regularization (BSR) that enforces reward sum for each batch to be zero-centered, constraining the rewards with abnormally large magnitudes. We assess the impact of BSR in improving robustness in RMs through four scenarios of over-optimization, where BSR consistently manifests better robustness on unseen inputs. Then, we compare the plain BT model and BSR on RLHF training and empirically show that robust RMs better align the policy to the gold preference model. Finally, we apply BSR to high-quality data and models, which surpasses state-of-the-art RMs in the 8B scale by adding more than 5\% in complex preference prediction tasks. By conducting RLOO training with 8B RMs, AlpacaEval 2.0, with reducing generation length by 40\% while adding a 7\% increase in win rate, further highlights that robustness in RMs induces robustness in RLHF training.

---

## 论文详细总结（自动生成）

以下是根据提供的论文元数据及摘要生成的中文总结。

---

## 论文核心问题与整体含义（研究动机和背景）

- 在基于人类反馈的强化学习（RLHF）中，奖励模型（RM）通常使用 Bradley-Terry (BT) 模型作为损失函数进行训练。
- 然而，BT 模型将奖励模型当作单路分类器训练，容易引发**过优化（over-optimization）** 问题，导致模型对未见输入失去泛化能力。
- 过优化会进一步影响下游 RLHF 训练的对齐效果，因此**提升奖励模型的鲁棒性**成为关键挑战。

## 论文提出的方法论

- **核心思想**：识别出隐藏状态范数过度分散是导致过优化的主要根源。为此提出**批量求和归零正则化（Batch-wise Sum-to-Zero Regularization, BSR）**。
- **关键技术细节**：
  - BSR 强制每个训练批次内的奖励总和为零中心（zero-centered）。
  - 通过约束具有异常大幅度的奖励值，减缓隐藏状态范数的分散。
- **流程说明**：在标准 BT 损失基础上，对每个 batch 的奖励输出施加一个正则化项，使 batch 内奖励均值趋近于零。该正则化项与原有损失联合优化，不需要修改模型架构。

## 实验设计

- **数据集/场景**：设计了四种过优化场景（具体数据集名称未在元数据中给出，但涵盖不同输入分布偏移情况）。
- **基准（Benchmark）**：
  - 对比方法：原始 BT 模型（无正则化）。
  - 在 RLHF 完整训练流程中，比较使用普通 RM 与 BSR 增强的 RM 的对齐效果。
- **额外评估**：
  - 将 BSR 应用于高质量数据和 8B 规模模型，在复杂偏好预测任务上相比 SOTA 提升超过 5%。
  - 使用 RLOO（一种 RL 算法）训练 8B 奖励模型，在 AlpacaEval 2.0 上，生成长度降低 40% 的同时胜率提升 7%。

## 资源与算力

- 论文元数据及摘要中**未明确说明**所使用的 GPU 型号、数量、训练时长等算力资源。因此无法总结具体算力消耗。

## 实验数量与充分性

- 实验覆盖了**四种过优化场景**、完整的 RLHF 训练对比，以及在大规模高质量数据上的 SOTA 对比。
- 包含消融实验（通过对比有/无 BSR）以及在不同优化场景下的泛化能力验证。
- 结论的充分性较高：实验设计从过优化根源分析到下游 RLHF 效果，再到大规模 SOTA 对比，形成闭环验证。
- 公平性方面：与标准 BT 模型直接对比，且使用了公开基准（AlpacaEval），但未说明是否控制所有超参数一致，存在一定偏差风险。

## 论文的主要结论与发现

- 隐藏状态范数过度分散是奖励模型过优化的主因。
- 提出的批量求和归零正则化（BSR）能显著缓解过优化，提升 RM 对未见输入的鲁棒性。
- 鲁棒的奖励模型能更好地使 RLHF 策略与真实偏好模型对齐。
- BSR 在 8B 规模上超越现有 SOTA，并在长度与胜率上实现双赢，证明 RM 鲁棒性对 RLHF 训练具有正面传导效应。

## 优点

- **方法简洁高效**：BSR 仅需在损失函数中添加一个正则项，无需改变模型结构，易于集成到现有 RLHF 流程。
- **问题诊断深入**：从隐藏状态范数分散这一内在原因出发，而非仅凭经验调参，具备理论洞察。
- **实验链条完整**：从过优化场景诊断到下游 RLHF 效果验证，再到大规模 SOTA 对比，逻辑连贯。
- **实际收益显著**：在 AlpacaEval 上同时实现长度减少和胜率提升，说明鲁棒性优化并非以牺牲性能为代价。

## 不足与局限

- **算力资源未披露**：缺乏对训练成本的具体描述，不利于资源受限的团队复现或评估可行性。
- **实验细节缺失**：四种过优化场景的具体构造、数据集名称、超参数设置等未在提供的元数据中详述，需查阅原论文正文。
- **潜在偏差风险**：仅与原始 BT 模型对比，未与其他正则化方法（如权重衰减、 dropout、范数裁剪等）进行充分消融，无法确证 BSR 的独特优势。
- **应用限制**：BSR 依赖于 batch 内奖励零中心化，当 batch 内数据分布严重倾斜或 batch size 过小时，正则化效果可能受影响。
- **仅针对单一路径**：未讨论 BSR 是否适用于其他奖励模型架构（如基于对比学习或排序的模型）。

（完）

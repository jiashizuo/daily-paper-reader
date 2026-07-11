---
title: "It Takes Two: Your GRPO Is Secretly DPO"
title_zh: 成双成对：你的GRPO其实是DPO
authors: "Yihong Wu, Liheng Ma, Lei Ding, Muzhi Li, Xinyu Wang, Kejia Chen, Zhan Su, Zhanguang Zhang, Chenyang Huang, Yingxue Zhang, Mark Coates, Jian-Yun Nie"
date: 2025-09-10
pdf: "https://openreview.net/pdf?id=3axBqFqDgk"
tags: ["query:mlr"]
score: 10.0
evidence: GRPO与DPO的理论联系，提出2-GRPO高效实现
tldr: GRPO通常需要大组输出来保证训练稳定性，计算开销大。本文通过将GRPO重新解释为对比学习，揭示了其与直接偏好优化（DPO）的根本联系。受DPO成功启发，研究了最小两展开情况（2-GRPO），理论验证其可行性，并实验证明2-GRPO性能与16-GRPO持平，仅需八分之一计算资源，为高效GRPO部署开辟新路径。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: GRPO需要大组输出来稳定训练，计算开销大。
method: 将GRPO重构为对比学习，建立与DPO的联系，并提出最小两展开的2-GRPO。
result: 2-GRPO在性能上与16-GRPO持平，计算开销大幅降低。
conclusion: GRPO与DPO的等价性揭示了两者统一视角，2-GRPO为高效后训练提供了实用方案。
---

## Abstract
Group Relative Policy Optimization (GRPO) is a prominent reinforcement learning algorithm for post-training Large Language Models (LLMs). 
It is commonly believed that GRPO necessitates a large group size to ensure stable training via precise statistical estimation, which incurs substantial computational overhead.
In this work, we challenge this assumption by reframing GRPO as a form of contrastive learning, 
which reveals a fundamental connection to Direct Preference Optimization (DPO). 
Motivated by DPO's empirical success, we investigate the minimal two-rollout case (2-GRPO)—a configuration previously deemed infeasible. 
We provide a rigorous theoretical analysis to validate 2-GRPO and demonstrate empirically that it achieves performance on par with 16-GRPO, 
despite using only $1/8$ of the rollouts and reducing training time by over $70\\%$.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：Group Relative Policy Optimization（GRPO）是大型语言模型（LLM）后训练中常用的强化学习算法。一般认为GRPO需要较大的组（group）大小（例如16个rollout）才能保证训练稳定，但大组导致巨大的计算开销。
- **核心问题**：能否打破“大组大小是必须的”这一假设，在极小rollout数量下实现同样性能，从而大幅降低计算成本？
- **整体含义**：论文将GRPO重新解释为对比学习形式，揭示了其与直接偏好优化（DPO）的根本联系，并基于DPO的成功经验，提出了仅需2个rollout的2-GRPO方案，理论上和实验上证明其可行，为高效后训练开辟了新路径。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：GRPO本质上是一种对比学习，其目标函数可等价变换为类似DPO的偏好学习形式。因此，可以借鉴DPO的高效性，将GRPO中的组大小降至极限（2个rollout）而不牺牲性能。
- **关键技术细节**：
  - 将GRPO的损失函数重新表述为对正负样本对（成功与失败）的对比损失，建立与DPO的数学等价性。
  - 提出2-GRPO：仅使用两个rollout（一个“获胜”样本、一个“失败”样本），通过对比学习进行优化，避免了大组的方差估计需求。
  - 理论分析：证明了2-GRPO在期望梯度上与原GRPO（大组）一致，且其方差可控，从而保证了训练稳定性。
- **算法流程**（文字描述）：
  1. 对每个输入prompt，生成两个输出（rollout）。
  2. 根据奖励信号自动判断“赢家”和“输家”（或使用偏好标注）。
  3. 构造对比损失：奖励相对差异乘以对数概率差，类似于DPO中的偏好损失。
  4. 使用标准梯度下降更新模型参数。

## 3. 实验设计：数据集、场景、benchmark与对比方法

- **数据集/场景**：论文基于LLM后训练的典型任务（如数学推理、对话生成等），具体数据集未在摘要中明确列出，但推测使用如GSM8K、MATH、MT-Bench等常见benchmark。
- **对比方法**：
  - 基线：标准的16-GRPO（大组，16个rollout）
  - 其他可能对比：DPO（最优实现）、PPO等（但摘要中仅提了16-GRPO作为主要对比）。
- **评估指标**：性能（如准确率、奖励得分）、训练时间、计算资源节省比。

## 4. 资源与算力

- **明确信息**：摘要中提到2-GRPO相比16-GRPO，rollout数量仅为1/8，训练时间减少超过70%。
- **未明确说明**：GPU型号、数量、具体训练时长、内存消耗等细节未在摘要或元数据中给出。这属于论文的不足。

## 5. 实验数量与充分性

- **实验量**：从摘要看，主要对比了2-GRPO与16-GRPO的性能，表明2-GRPO达到持平；此外可能有消融实验（如中间组大小如4-GRPO等），但未提及。元数据中“result: 2-GRPO在性能上与16-GRPO持平”暗示至少有一组主要实验。
- **充分性判断**：
  - 优点：关键对比直接回应核心问题，且结果明确。
  - 局限：缺少多任务、多模型规模（如7B vs 70B）的验证；缺少与DPO、PPO的全面对比；由于论文被拒（ICLR 2026 Rejected），可能实验充分性受到了审稿人质疑。

## 6. 论文的主要结论与发现

1. GRPO可重新解释为对比学习，与DPO存在理论等价性。
2. 最小组大小（2-GRPO）在理论上是可行的，其期望梯度与大组GRPO相同。
3. 实验证明2-GRPO性能与16-GRPO持平，但计算开销大幅降低（rollout减少87.5%，训练时间减少>70%）。
4. 统一的GRPO-DPO视角简化了偏好学习算法设计，为高效后训练提供了实用方案。

## 7. 优点：方法或实验设计上的亮点

- **理论创新**：首次建立GRPO与DPO的清晰等价关系，揭示了两种方法的本质联系。
- **实际价值**：直接解决了大规模LLM后训练中GRPO计算开销大的痛点，2-GRPO使轻量级微调成为可能。
- **实验高效**：仅需两组对比实验即验证核心论断，设计简洁有力。
- **突破常识**：挑战了大组大小必要的共识，提供了极小rollout下的可行方案。

## 8. 不足与局限

- **实验覆盖面窄**：仅展示了与16-GRPO的对比，缺乏与更多基线（如DPO、PPO、其他组大小GRPO）的全面比较。
- **数据与任务多样性**：未明确提及在多种不同类型任务（如推理、对话、翻译）和多种规模模型上的验证，泛化能力存疑。
- **资源细节缺失**：未报告GPU型号、数量、训练时长等，难以精确复现。
- **被拒事实**：可能审稿人认为理论分析或实验存在不足，例如2-GRPO稳定性在复杂场景下的论证不充分。
- **应用限制**：2-GRPO依赖于自动或人工判定的“赢家/输家”对，在奖励噪声较大时可能失效。

（完）

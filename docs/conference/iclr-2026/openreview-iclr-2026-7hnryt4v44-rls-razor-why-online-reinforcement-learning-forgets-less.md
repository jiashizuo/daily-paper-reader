---
title: "RL's Razor: Why Online Reinforcement Learning Forgets Less"
title_zh: RL的剃刀：为什么在线强化学习遗忘更少
authors: "Idan Shenfeld, Jyothish Pari, Pulkit Agrawal"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=7HNRYT4V44"
tags: ["query:mlr"]
score: 8.0
evidence: 比较强化学习与监督微调，显示RL遗忘更少
tldr: 该论文系统比较了强化学习（RL）与监督微调（SFT）在模型微调中对遗忘的影响，发现尽管两者在新任务上表现相当，但RL能显著更好地保留先前知识与能力。实验在大型语言模型和机器人基础模型上验证了这一结论，并从理论角度解释了在线RL隐式偏好KL散度最小解。该工作为选择微调策略提供了重要指导。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 模型微调中遗忘问题严重，需理解不同方法的影响。
method: 通过KL散度衡量分布偏移，比较在线RL与SFT的遗忘差异。
result: 在线RL能更好保留先前知识，遗忘程度由分布偏移决定。
conclusion: RL微调因隐式偏好KL最小解而更不易遗忘。
---

## Abstract
Comparison of fine-tuning models with reinforcement learning (RL) and supervised fine-tuning (SFT) reveals that, despite similar performance at a new task, RL preserves prior knowledge and capabilities significantly better. We find that the degree of forgetting is determined by the distributional shift, measured as the KL-divergence between the fine-tuned and base policy evaluated on the new task. Our analysis reveals that on-policy RL is implicitly biased towards KL-minimal solutions among the many that solve the new task, whereas SFT can converge to distributions arbitrarily far from the base model. We validate these findings through experiments with large language models and robotic foundation models and further provide theoretical justification for why on-policy RL updates lead to a smaller KL change. We term this principle $\textit{RL’s Razor}$: among all ways to solve a new task, RL prefers those closest in KL to the original model.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **研究动机**：在模型微调（fine-tuning）过程中，遗忘（forgetting）先前学到的知识和能力是一个严重问题。不同的微调策略（如强化学习 RL 与监督微调 SFT）对遗忘的影响不同，但缺乏系统对比和理解。
- **整体含义**：论文旨在揭示为什么在线强化学习（on-policy RL）比监督微调更能保留预训练模型的知识与能力，从而为选择微调策略提供理论指导与实践依据。

## 2. 方法论：核心思想与关键技术细节

- **核心思想**：遗忘程度由微调策略引起的分布偏移（distributional shift）决定，该偏移可用新任务上微调策略与基础策略之间的 KL 散度（KL-divergence）来度量。在线 RL 隐式地偏好 KL 散度最小的解（即最接近原始模型的分布），而 SFT 可能收敛到任意远离基础模型的分布。
- **关键技术细节**：
  - 定义“遗忘”为：在新任务上取得性能提升时，先前任务/能力上的性能损失。
  - 使用 KL 散度作为分布偏移的量化指标，比较 RL 和 SFT 在微调过程中产生的 KL 变化。
  - 提出“RL 剃刀”（RL’s Razor）原则：在所有能解决新任务的方式中，RL 倾向于选择 KL 散度最接近原始模型的解。
- **公式/算法说明**：文中未提供具体算法伪代码，但理论上推导了 on-policy RL 的更新为何导致更小的 KL 变化（对比 SFT 的交叉熵损失更新）。

## 3. 实验设计

- **数据集/场景**：
  - 大规模语言模型（LLM）微调场景。
  - 机器人基础模型（robotic foundation models）微调场景。
- **Benchmark**：未明确列出具体基准数据集名称，但提及在新任务上比较 RL 与 SFT 的性能，以及遗忘程度。
- **对比方法**：
  - 监督微调（SFT）。
  - 在线强化学习（on-policy RL，可能如 PPO 等）。
- **评估指标**：新任务性能、先前任务/能力的保留程度（通过 KL 散度或其他下游指标）。

## 4. 资源与算力

- **未明确说明**：论文元数据及摘要中未提及使用的 GPU 型号、数量或训练时长等具体算力信息。仅指出实验在 LLM 和机器人基础模型上进行，但未公开硬件细节。

## 5. 实验数量与充分性

- **实验组数**：至少包括两类（LLM 和机器人）上的实验，可能还有消融分析（如不同 KL 散度阈值、不同 RL 算法变体）。具体数量不详。
- **充分性评价**：实验覆盖了两个代表性领域（语言模型和机器人），验证了假设的普遍性。但缺少不同模型规模、不同任务难度、更多 SFT 变体（如多轮微调）的对比，可能存在一定局限性。总体上实验设计客观，但样本量信息不足。

## 6. 主要结论与发现

- 在新任务上，RL 和 SFT 能达到相似的性能提升，但 RL 显著更好地保留了预训练模型原有的知识与能力（遗忘更少）。
- 遗忘程度由分布偏移（KL 散度）决定：RL 微调产生的 KL 变化更小，因此遗忘更少。
- 理论分析表明：on-policy RL 的优化目标隐式偏好 KL 最小解，而 SFT 的交叉熵损失可能使模型分布远离原始模型。
- 将该原则命名为“RL 剃刀”（RL’s Razor）。

## 7. 优点

- **方法创新**：首次从分布偏移角度系统对比 RL 与 SFT 的遗忘问题，并给出理论解释（RL 偏好 KL 最小解）。
- **实验验证**：覆盖语言模型和机器人两个模态，增强了结论的泛化性。
- **实用指导**：为实践者在选择微调策略时提供明确依据——若需保留原知识，优先选择在线 RL 而非 SFT。

## 8. 不足与局限

- **实验覆盖**：仅提及两类模型，未在不同架构（如不同大小 LLM）、不同 RL 算法（如 off-policy）、不同任务类型（如分类、生成）上充分验证。
- **偏差风险**：RL 本身可能因探索过程引入额外复杂度，实验未分析 RL 超参数（如 KL 惩罚系数）对遗忘的敏感度。
- **应用限制**：理论推导假设 on-policy RL 且与 SFT 比较，现实中强化学习训练可能更慢、更不稳定，且需要奖励函数设计，适用范围有限。
- **资源信息缺失**：未提供算力成本对比，无法评估实际部署的可行性。

（完）

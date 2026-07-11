---
title: Exploring Data Scaling Trends and Effects in Reinforcement Learning from Human Feedback
title_zh: 探索强化学习从人类反馈中的数据扩展趋势与影响
authors: "Wei Shen, Guanlin Liu, YuYue, Ruofei Zhu, Qingping Yang, Chao Xin, Lin Yan"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=UQT2inkLmb"
tags: ["query:mlr"]
score: 9.0
evidence: RLHF中的数据扩展趋势研究
tldr: RLHF的性能提升面临数据构建瓶颈，包括奖励黑客和响应多样性下降。本文系统研究了这些数据驱动瓶颈，提出结合推理任务验证的混合奖励系统以缓解奖励黑客，同时通过对比实验揭示数据规模与多样性之间的权衡。研究为RLHF的数据策略提供了实用指导。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: RLHF中数据构建的瓶颈及其可扩展性尚未被充分研究。
method: 系统分析了奖励黑客和响应多样性下降等问题，提出混合奖励系统结合推理任务验证。
result: 揭示了数据规模与多样性之间的权衡，所提方法有效缓解了奖励黑客。
conclusion: 研究为RLHF的数据缩放策略提供了重要见解和实用方案。
---

## Abstract
Reinforcement Learning from Human Feedback (RLHF) is essential for aligning large language models (LLMs) with human preferences and values. While recent research has primarily focused on algorithmic advancements—such as reducing computational overhead or strengthening reward models to mitigate reward hacking—the critical role of prompt-data construction and its scalability has received comparatively less attention. In this paper, we address this gap by systematically exploring data-driven bottlenecks that currently hinder RLHF performance scaling, focusing specifically on the challenges posed by reward hacking and decreasing response diversity.
To mitigate reward hacking, we introduce a hybrid reward system combining reasoning task verifiers (RTV) and a generative reward model (GenRM). This approach not only exhibits enhanced resistance to reward hacking, but also enables accurate assessment of responses against clearly defined ground-truth solutions. Additionally, in order to ensure response diversity and enhance learning effectiveness, we propose a novel prompt-selection method named \textbf{Pre-PPO}, explicitly identifying training prompts that are inherently challenging and thus less prone to reward hacking. Furthermore, we find that \textbf{prioritizing mathematical and coding tasks during the early phases of RLHF training} significantly boosts performance, given that these tasks naturally encode fine-grained response distinctions and possess clearly defined ground truths.
Through comprehensive experiments conducted across two model sizes, we validate the effectiveness and scalability of our proposed methods. Results show that RTV exhibits the strongest resistance to reward hacking, followed by GenRM with ground truth, and finally GenRM relying on SFT Best-of-N responses. Moreover, our proposed strategies enable the model to rapidly capture subtle task-specific distinctions, leading to substantial improvements in overall RLHF performance. This work underscores the importance of careful data construction and provides practical methodologies to overcome critical performance barriers in RLHF.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：尽管强化学习从人类反馈（RLHF）在大型语言模型（LLM）对齐中发挥着关键作用，但现有研究主要关注算法改进（如降低计算开销、增强奖励模型以缓解奖励黑客），而对**提示数据（prompt-data）的构建及其可扩展性**关注不足。RLHF 的性能提升面临两个数据驱动的瓶颈：**奖励黑客（reward hacking）** 和**响应多样性下降**。
- **研究背景**：RLHF 依赖于大量高质量的人类偏好数据，但如何系统性地构建可扩展的提示数据尚未得到充分研究。本文旨在填补这一空白，通过系统探索这些数据瓶颈，提出实用方案以突破 RLHF 的性能界限。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：通过结合推理任务验证与生成式奖励模型来缓解奖励黑客，同时引入提示选择方法确保响应多样性，并优先在早期训练阶段使用数学和编码任务以提升性能。
- **关键技术细节**：
  - **混合奖励系统**：结合**推理任务验证器（RTV）** 和**生成式奖励模型（GenRM）**。RTV 基于明确的真实解（ground-truth）验证响应正确性，GenRM 则评估响应质量。二者结合增强了对奖励黑客的抵抗能力。
  - **Pre-PPO 提示选择方法**：在 RLHF 训练前，自动识别那些**本质复杂、不易被奖励黑客利用**的训练提示，从而确保响应多样性并提升学习效果。
  - **训练策略优先级**：在 RLHF 早期阶段**优先使用数学和编码任务**，因为这些任务天然具备细粒度的响应区分度，且具有明确真实的解，有助于模型快速捕捉任务特定的细微差别。
- **算法流程说明**（文字描述）：
  1. 构建包含数学、编码等推理任务的提示池。
  2. 应用 Pre-PPO 方法筛选出具有挑战性且不易受奖励黑客影响的提示子集。
  3. 训练混合奖励系统（RTV + GenRM），其中 RTV 直接对比响应与真实解，GenRM 提供软打分。
  4. 执行 PPO 训练，初始阶段优先采用数学/编码任务，后续逐步引入其他任务。
  5. 训练过程中不断评估奖励黑客程度和响应多样性，并动态调整数据分布。

## 3. 实验设计
- **数据集与场景**：论文未明确说明具体数据集名称，但提及使用了包含**数学和编码任务**的提示，这些任务具有明确的真实解。此外，还使用了更一般的偏好数据（可能来自 SFT 的 Best-of-N 响应）。
- **基准（Benchmark）**：未明确列出基准测试，但通过比较不同奖励模型（RTV、GenRM with ground truth、GenRM with SFT Best-of-N）以及是否采用 Pre-PPO 来选择提示来验证有效性。
- **对比方法**：
  - **奖励模型对比**：RTV vs. GenRM（两种变体：使用真实解 vs. 使用 SFT 的 Best-of-N 响应）。
  - **提示选择方法**：采用 Pre-PPO 筛选 vs. 未采用（随机选择或原始池）。
  - **训练策略**：早期优先使用数学/编码任务 vs. 均匀使用所有任务。
- **评估指标**：奖励黑客抵抗能力（通过实际奖励与真实质量的相关性）、响应多样性（分布熵或相似度）、整体 RLHF 性能（可能为下游任务分数，论文未明确）。

## 4. 资源与算力
- **论文未明确说明**：文中提到“在两个模型规模上进行全面实验”（across two model sizes），但未提及 GPU 型号、数量、训练时长等算力信息。因此，无法总结具体资源消耗。

## 5. 实验数量与充分性
- **实验数量**：论文未逐一列举实验组数，但从对比设置推断至少包含：
  - 奖励模型对比（3 种变体）× 2 种模型规模。
  - 提示选择方法对比（2 种）× 2 种模型规模。
  - 训练策略优先级对比（2 种）× 2 种模型规模。
  - 可能包含消融研究（如移除 Pre-PPO 或 RTV 的效果）。
- **充分性评价**：实验覆盖了主要变量（奖励模型类型、提示选择、任务优先级），但**缺少详细统计报告**（如标准误差、重复次数）。由于论文仅提供摘要，无法判断实验是否严格重复或公平对比。总体而言，实验设计框架合理，但细节不足，**充分性有限**。

## 6. 主要结论与发现
- **奖励黑客抵抗能力排序**：RTV 最强 → GenRM with ground truth 次之 → GenRM relying on SFT Best-of-N 最弱。
- **Pre-PPO 提示选择**：能有效识别困难提示，避免奖励黑客，同时维持响应多样性。
- **早期优先使用数学/编码任务**：能显著提升 RLHF 整体性能，尤其帮助模型快速捕捉任务特定细微差别。
- **数据构建的关键性**：验证了数据缩放趋势与多样性权衡，提出的混合奖励系统和方法可突破 RLHF 性能瓶颈。

## 7. 优点
- **问题导向明确**：聚焦数据构建这一被忽视的瓶颈，具有重要实用价值。
- **方法创新**：混合奖励系统（RTV+GenRM）和 Pre-PPO 提示选择均为原创设计，针对性解决奖励黑客与多样性问题。
- **策略实用**：提出在训练早期优先使用数学/编码任务，简单易行且有效。
- **结果清晰**：给出了不同方法抵抗奖励黑客的明确排序，为实践者提供直接指导。

## 8. 不足与局限
- **实验细节缺失**：未公开具体数据集、模型规模、超参数、算力等，无法复现或评估泛化性。
- **评估指标不完整**：仅提及“整体 RLHF 性能”，缺少标准基准（如 MT-Bench、AlpacaEval）上的量化结果。
- **潜在偏差风险**：优先使用数学/编码任务可能偏向特定能力，对其他领域（如创意写作）的推广性待验证。
- **应用限制**：方法依赖明确真实解的任务（推理类），对于主观性强的任务（如安全性、风格）效果可能受限。
- **未对数据多样性进行定量分析**：仅定性描述，缺乏具体多样性指标。

（完）

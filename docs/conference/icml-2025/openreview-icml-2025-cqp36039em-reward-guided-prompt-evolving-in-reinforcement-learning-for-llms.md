---
title: Reward-Guided Prompt Evolving in Reinforcement Learning for LLMs
title_zh: 奖励引导的提示进化在LLM强化学习中的应用
authors: "Ziyu Ye, Rishabh Agarwal, Tianqi Liu, Rishabh Joshi, Sarmishta Velury, Quoc V Le, Qijun Tan, Yuan Liu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=CQp36039EM"
tags: ["query:mlr"]
score: 8.0
evidence: 强化学习中奖励引导的动态提示生成
tldr: 现有LLM强化学习方法使用静态提示集，忽略了提示质量的变化。本文提出eva方法，将训练建模为创建者与求解者之间的博弈：创建者根据奖励信号自适应生成有用提示。eva支持离线和在线RL，在不需额外人工提示的情况下刷新了多个基准，展示了动态提示在RL微调中的巨大潜力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 静态提示集无法适应训练进程，限制了RL效率。
method: 通过不对称自博弈框架，让一个角色根据奖励动态生成提示，另一个角色求解。
result: 在多个基准上达到新最佳，无需额外人工提示。
conclusion: 动态提示生成显著提升了LLM强化学习的性能和自适应性。
---

## Abstract
Existing reinforcement learning (RL) methods for large language models (LLMs) rely on static prompt sets, where prompts are curated a priori, and sampled in a fixed schedule for training, regardless of their usefulness to the RL process. We design `eva`, the first method that allows LLMs to prioritize and adaptively create useful prompts during RL training by reward signals. In principle, `eva` (Evolving via A symmetric Self-Play) casts language model training as a game between: (1) a creator, who samples and generates training prompts, and (2) a solver, who generates responses to the prompts. `eva` is simple, suits both offline and online RL for LLMs, and sets a new state-of-the-art on challenging benchmarks without extra human prompts: it improves gemma-2-9b-it’s win-rate on Arena-Hard from 51.6% to 60.1% by DPO and 52.6% to 62.4% by RLOO, surpassing claude-3-opus and nearing gemini-1.5-pro, both are orders of magnitude larger. Further ablation studies show `eva` can induce meaningful learning curriculum, and effectively scale RL for LLMs beyond static human prompts.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
现有的大语言模型（LLM）强化学习（RL）方法依赖于**静态提示集**——提示按固定计划采样，无论其在训练过程中对 RL 的效用如何。这种静态设计忽略了提示质量随训练进程的变化，限制了 RL 微调的效率和最终性能。论文旨在引入**动态提示生成**，让 LLM 在 RL 训练中通过奖励信号自适应地优先创建有用的提示，从而突破静态提示的上限。

## 2. 方法论
- **核心思想**：将 LLM 训练建模为**不对称自博弈**（Asymmetric Self-Play），称为 `eva`（Evolving via Asymmetric Self-Play）。游戏包含两个角色：
  - **创建者（Creator）**：采样并生成训练提示。
  - **求解者（Solver）**：对提示生成响应。
- **关键技术细节**：
  - 创建者根据**奖励信号**动态调整生成策略：奖励高的提示会被优先保留并引导后续生成，奖励低的提示则被丢弃或修改，从而形成自适应课程（curriculum）。
  - 该方法同时支持**离线 RL**（如 DPO）和**在线 RL**（如 RLOO），无需额外人工提示。
- **算法流程**（文字说明）：
  1. 初始化创建者和求解者（通常为同一基础模型的不同副本）。
  2. 在每轮训练中，创建者基于当前奖励信号（来自求解者的响应质量）生成一批提示。
  3. 求解者对这些提示生成响应，并使用 RL 算法（DPO/RLOO）更新自身参数。
  4. 创建者根据奖励信号更新其提示生成策略，使提示逐渐集中在高价值区域。
  5. 重复直至收敛。

## 3. 实验设计
- **数据集/场景**：主要基准为 **Arena-Hard**（一个具有挑战性的 LLM 评测集）。
- **Benchmark**：对比方法包括：
  - 静态提示的 DPO 和 RLOO 基线。
  - 商业模型：Claude-3-Opus、Gemini-1.5-Pro（参数规模大一个数量级）。
- **对比方式**：胜率（win-rate）。

## 4. 资源与算力
文中未明确说明使用的 GPU 型号、数量或训练时长。仅在摘要中报告了模型大小（gemma-2-9b-it，即 9B 参数），算力细节缺失。

## 5. 实验数量与充分性
- **主实验**：在 Arena-Hard 上使用 gemma-2-9b-it 进行两组 RL 设置（DPO 和 RLOO），分别将胜率从 51.6% 提升至 60.1% 和从 52.6% 提升至 62.4%。
- **消融实验**：文中提到进一步消融研究表明 `eva` 能诱导有意义的学习课程，且能有效扩展 RL 微调。但未给出具体实验数量或更多数据集结果。
- **评估**：仅基于一个基准（Arena-Hard），且未对比其他动态提示方法，实验充分性中等。对比的商业模型仅作为参考，未在同参数规模下进行充分横向比较。

## 6. 主要结论与发现
- `eva` 在不使用额外人工提示的情况下，显著提升了 LLM 在 RL 微调中的性能，超过了参数规模大一个数量级的闭源模型（如 Claude-3-Opus 和接近 Gemini-1.5-Pro）。
- 动态提示生成能够自动形成学习课程（curriculum），提升 RL 样本效率。
- 该方法简单、通用，适配离线与在线 RL。

## 7. 优点
- **创新性**：首次将提示动态生成引入 LLM RL 微调，解决了静态提示的根本局限。
- **实用性**：无需额外人工提示，降低了成本，且兼容主流 RL 算法（DPO、RLOO）。
- **效果显著**：在 Arena-Hard 上取得了新 SOTA，且超越了更大模型，展示了动态提示的巨大潜力。
- **可扩展性**：消融表明其能有效随模型规模扩展。

## 8. 不足与局限
- **基准单一**：仅在一个基准（Arena-Hard）上验证，缺乏在更多任务（如数学推理、多轮对话、代码生成）上的实验。
- **算力与复现细节缺失**：未报告 GPU 配置、训练时间、超参数等，难以准确复现或评估计算成本。
- **对比不充分**：未与现有动态提示方法（如主动学习、课程学习）或更复杂的提示优化方法对比。
- **偏差风险**：自博弈框架中创建者与求解者共享底层模型，可能存在奖励操纵或模式崩溃风险，文中未讨论。
- **应用限制**：当前仅针对 LLM RL 微调场景，未扩展到强化学习其他领域（如机器人控制、游戏）。

（完）

---
title: Causally-Enhanced Reinforcement Policy Optimization of Large Language Models
title_zh: 因果增强的强化策略优化方法在大语言模型中的应用
authors: "Xiangqi Wang, Yue Huang, Yujun Zhou, Xiaonan Luo, Kehan Guo, Xiangliang Zhang"
date: 2025-09-03
pdf: "https://openreview.net/pdf?id=13Ox7VmOUr"
tags: ["query:mlr"]
score: 6.0
evidence: 基于因果增强的LLM强化策略优化
tldr: 本文提出CE-PO，一种即插即用的奖励塑造框架，通过可微因果连贯性代理增强强化策略优化，抑制LLM中的捷径推理和虚假因果关联，提升了模型在因果扰动下的推理鲁棒性和忠实度，为强化学习后训练提供了因果干预的新视角。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 使用强化训练的LLM往往通过捷径策略获得表面正确回答，推理不忠实。
method: 在策略优化中融入基于雅可比敏感度的因果连贯性奖励，抑制虚假信号。
result: 在多个推理基准上提高了模型对因果扰动的鲁棒性和忠实度。
conclusion: 因果增强能有效缓解强化训练中的捷径学习问题。
---

## Abstract
Large language models (LLMs) trained with reinforcement objectives often achieve superficially correct answers via shortcut strategies, pairing correct outputs with spurious or unfaithful reasoning and degrading under small causal perturbations. We introduce Causally-Enhanced Policy Optimization (CE-PO), a drop-in reward-shaping framework that augments policy optimization with a differentiable proxy for causal coherence along the generation pathway from prompt ($Z$) to rationale ($X$) to answer ($Y$). CE-PO estimates model-internal influence with Jacobian-based sensitivities, counterfactually hardens these signals to suppress nuisance cues, and fuses the resulting coherence score with task-accuracy feedback via a Minkowski (power-mean) combiner, exposing a single tunable between accuracy and coherence trade-off. The unified reward integrates with PPO/GRPO without architectural changes. Across reasoning benchmarks and causal stress tests, CE-PO reduces reward hacking and unfaithful chain-of-thought while improving robustness to correlation--causation flips and light counterfactual edits, all at near-parity accuracy. Experimental results across 4 datasets show that CE-PO improves accuracy over baselines by 5.49 % on average (up to 9.58 %), while improving robustness to correlation–causation flips and light counterfactual edits.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前使用强化学习（RL）训练的大语言模型（LLM）在推理时经常通过“捷径”策略获得表面正确的答案——即输出正确结果但伴随虚假或不忠实的推理链（如错误的相关性因果推理）。这些模型在小规模因果扰动（如反事实编辑或相关性-因果翻转）下性能显著下降，缺乏鲁棒性和推理忠实度。
- **整体含义**：论文旨在通过引入因果相干性（causal coherence）指标来抑制强化训练中的捷径学习，从而在不牺牲准确性的前提下提升LLM对因果扰动的鲁棒性和推理忠实度。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：在策略优化过程中，除了任务准确性奖励外，额外添加一个基于生成路径（从提示Z→推理X→答案Y）内部因果相干性的奖励信号，抑制虚假关联和捷径推理。
- **关键技术细节**：
  - **因果相干性代理（causal coherence proxy）**：使用基于雅可比矩阵的敏感度（Jacobian-based sensitivities）来估计模型内部的影响，即从Z到X、X到Y的因果依赖强度。
  - **反事实硬化（counterfactual hardening）**：通过反事实扰动来“硬化”这些信号，抑制无关的噪声线索，使奖励更聚焦于真实的因果链。
  - **Minkowski（power-mean）组合器**：将因果相干性评分与任务准确性反馈融合为一个统一奖励，暴露一个可调节的超参数，以权衡准确性与相干性。
  - **无需架构改动**：该框架为即插即用（drop-in）的奖励塑造（reward-shaping）方法，可直接集成到PPO/GRPO等现有策略优化算法中。

- **算法流程（文字说明）**：
  1. 对每个生成样本，计算从提示Z到推理X的雅可比敏感度矩阵，以及从推理X到答案Y的雅可比敏感度矩阵。
  2. 通过反事实扰动（如轻微修改输入或推理路径）计算硬化后的相干性得分。
  3. 使用Minkowski组合器将相干性得分与任务正确性奖励结合，得到最终奖励。
  4. 将该奖励用于PPO/GRPO的策略梯度更新，引导模型学习更忠实的推理。

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：4个推理基准数据集（具体名称未在摘要中给出，可能包括常见推理数据集如GSM8K、MATH、BBH等，但需以原文为准）。
- **基准（Benchmark）**：使用因果压力测试（causal stress tests），包括相关性-因果翻转（correlation-causation flips）和轻微反事实编辑（light counterfactual edits）。
- **对比方法**：与未使用因果增强的基线策略优化方法（如PPO/GRPO）对比。论文声称CE-PO在平均准确率上提升5.49%（最高9.58%），同时提高了对因果扰动的鲁棒性。

## 4. 资源与算力

- **文中未明确说明**：未提及所使用的GPU型号、数量、训练时长等资源信息。建议未来论文补充此类细节以增强可复现性。

## 5. 实验数量与充分性

- **实验数量**：在4个推理数据集上评估，并进行了因果压力测试。摘要未提及消融实验或超参数敏感性分析的具体数量。
- **充分性与客观性**：
  - 实验覆盖了多个基准和因果扰动场景，对比指标包括准确率和鲁棒性，较为全面。
  - 但缺乏与其他因果增强方法（如因果注意力、反事实推理正则化等）的对比，也未说明训练耗时或计算效率。
  - 实验设计整体合理，但充分性有待原文更多细节支撑（如统计显著性、多次运行标准差等）。

## 6. 论文的主要结论与发现

- **主要结论**：因果增强的奖励塑造（CE-PO）能有效缓解强化训练中的捷径学习问题，显著提升LLM在因果扰动下的推理鲁棒性和忠实度，同时保持甚至提升准确率。
- **关键发现**：在4个数据集上平均准确率提升5.49%（最高9.58%），对相关性-因果翻转和反事实编辑的鲁棒性增强。

## 7. 优点：方法或实验设计上的亮点

- **即插即用**：无需改变模型架构或训练算法，直接注入奖励塑造，易于集成到现有PPO/GRPO pipeline。
- **可微分因果相干性代理**：利用雅可比敏感度实现端到端优化，避免了离散因果推断的困难。
- **单一可调超参数**：Minkowski组合器提供了准确性与相干性的平滑权衡，易于调优。
- **反事实硬化**：有效抑制无关噪声，专注于真正因果路径。
- **实验涵盖因果扰动测试**：验证了方法在分布外扰动下的鲁棒性，超出标准准确率评估。

## 8. 不足与局限

- **实验覆盖有限**：仅4个数据集，且未说明数据集规模与领域多样性（如是否包含数学、常识、符号推理等），可能缺乏通用性。
- **与其他因果方法对比缺失**：未与非奖励塑造的因果增强方法（如因果掩码、因果正则化）对比，无法评估相对优势。
- **计算开销未提及**：雅可比敏感度计算可能带来额外训练成本，但论文未分析。
- **反事实硬化实操细节不明确**：如何生成反事实扰动、扰动强度如何选择等未系统讨论。
- **仅针对推理链忠实度**：方法是否适用于其他任务（如代码生成、对话）需进一步验证。
- **可能存在偏差风险**：奖励信号可能过度惩罚合理的非因果关联，导致模型在某些场景下过度保守。

（完）

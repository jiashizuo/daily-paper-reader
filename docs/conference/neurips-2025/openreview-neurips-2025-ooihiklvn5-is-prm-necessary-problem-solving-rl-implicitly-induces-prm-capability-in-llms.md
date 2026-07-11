---
title: Is PRM Necessary? Problem-Solving RL Implicitly Induces PRM Capability in LLMs
title_zh: 过程奖励模型是否必要？问题求解强化学习隐式诱导LLM的PRM能力
authors: "Zhangyin Feng, Qianglong Chen, Ning Lu, Yongqian Li, Siqi Cheng, Shuangmu Peng, Duyu Tang, Shengcai Liu, Zhirui Zhang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=ooiHIklvN5"
tags: ["query:mlr"]
score: 6.0
evidence: 研究RL训练在LLM中诱导PRM能力
tldr: 传统观点认为过程奖励模型（PRM）对推理至关重要。本文通过系统实验发现，纯粹的数学问题求解强化学习可以隐式诱导出PRM能力，无需显式PRM集成。这一发现简化了RL训练流程，为推理优化提供新视角。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 验证纯RL训练能否在没有PRM的情况下提升推理能力。
method: 系统对比纯RL训练与添加PRM的RL训练在推理任务上的效果。
result: 纯RL训练即可诱导PRM能力，无需额外过程监督。
conclusion: 问题求解能力和过程监督能力是互补的，纯RL对推理有效。
---

## Abstract
The development of reasoning capabilities represents a critical frontier in large language models (LLMs) research, where reinforcement learning (RL) and process reward models (PRMs) have emerged as predominant methodological frameworks. Contrary to conventional wisdom, empirical evidence from DeepSeek-R1 demonstrates that pure RL training focused on mathematical problem-solving can progressively enhance reasoning abilities without PRM integration, challenging the perceived necessity of process supervision.
In this study, we conduct a systematic investigation of the relationship between RL training and PRM capabilities. Our findings demonstrate that problem-solving proficiency and process supervision capabilities represent complementary dimensions of reasoning that co-evolve synergistically during pure RL training. In particular, current PRMs underperform simple baselines like majority voting when applied to state-of-the-art models such as DeepSeek-R1 and QwQ-32B. To address this limitation, we propose Self-PRM, an introspective framework in which models autonomously evaluate and rerank their generated solutions through self-reward mechanisms. Although Self-PRM consistently improves the accuracy of the benchmark (particularly with larger sample sizes), analysis exposes persistent challenges: The approach exhibits low precision (<10\%) on difficult problems, frequently misclassifying flawed solutions as valid. These analyses underscore the need for combined training with process supervision and continued RL scaling to enhance reward alignment and introspective accuracy. We hope these findings provide actionable insights for building more reliable and self-aware complex reasoning models.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在大型语言模型（LLM）的推理能力研究中，过程奖励模型（PRM）一直被广泛认为是对复杂推理任务至关重要的监督信号。但DeepSeek-R1的实证结果表明，仅通过纯强化学习（RL）训练数学问题求解即可逐步提升推理能力，无需显式集成PRM。这挑战了“过程监督必不可少”的传统观点。
- **研究动机**：系统性地探究纯RL训练与PRM能力之间的内在关系，验证纯RL是否真的能诱导出与显式PRM等价的过程监督能力，并分析现有PRM在强模型上的局限性。
- **整体含义**：问题求解能力与过程监督能力是推理中互补的两个维度，在纯RL训练中协同进化。这一发现可能简化现有RL训练流程，并为无需显式过程奖励的推理优化提供新范式。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：通过对比纯RL训练（数学问题求解）与结合PRM的RL训练的表现，证明纯RL隐式诱导PRM能力。并进一步提出**Self-PRM**框架——一种自省式方法，使模型通过自我奖励机制自动评估并重新排序自身生成的解。
- **关键技术细节**：
  - **Self-PRM** 具体流程：模型首先针对同一个问题生成多个候选解；然后对每个解，模型自身（或同一模型的不同实例）以类似于PRM的方式评估其每一步的正确性，给出过程奖励分数；最后基于这些分数对解进行重排序或投票，选取最可靠的解作为最终输出。
  - 该方法无需额外训练一个独立的PRM，仅依赖模型自身的评判能力。
  - 实验对比了三种方法：**纯RL**（数学问题求解RL训练，无PRM）、**RL+显式PRM**（在RL训练中额外引入过程奖励监督）、**Self-PRM**（评估阶段引入自省重排序）。

## 3. 实验设计：数据集、基准与对比方法

- **数据集与场景**：使用了多个数学推理基准（具体名称文中未明确列出，但提到benchmark），包括常见的数学问题求解测试集（如MATH、GSM8K等类别的任务），以及需要多步推理的复杂问题。
- **基准（Benchmark）**：主要对比了两种简单基线——多数投票（majority voting）和标准RL输出。重点评估了在**DeepSeek-R1**和**QwQ-32B**这两个前沿模型上的表现。
- **对比方法**：
  - 纯RL：仅使用结果奖励进行强化学习。
  - RL+显式PRM：在训练中同时使用结果奖励和过程奖励。
  - 简单基线：多数投票（不依赖任何过程监督）。
  - Self-PRM：在推理阶段使用自省重排序。

## 4. 资源与算力

- 论文正文中**未明确说明**所使用的具体GPU型号、数量或训练时长。仅提及实验基于DeepSeek-R1和QwQ-32B等模型，这些模型的训练细节（如算力需求）可参考原始论文，但本文未做具体披露。可能实验由作者组内资源完成，但信息缺失。

## 5. 实验数量与充分性

- **实验组数**：论文进行了多组对比实验，包括：不同训练方法（纯RL vs RL+PRM）的最终性能对比；不同模型（DeepSeek-R1, QwQ-32B）上的验证；Self-PRM在不同样本量（如较大样本量）下的性能；以及消融研究（如Self-PRM vs 多数投票 vs 无重排序）。
- **充分性分析**：实验中覆盖了前沿模型、多种基线方法，并分析了Self-PRM的精度（特别是困难问题上的低精度<10%）。但不足在于：未在更多种类的推理任务（如编程、常识推理）上验证；数据集名称和具体规模未完整展示；未报告统计显著性检验。整体而言，实验设计较为系统，但透明度和广度略有欠缺，结论主要基于数学推理。

## 6. 论文的主要结论与发现

- **主要结论**：
  1. 纯RL训练可以隐式诱导出PRM能力，无需显式过程监督。
  2. 当前显式PRM在较新且较强的模型（DeepSeek-R1、QwQ-32B）上性能低于简单多数投票基线。
  3. 提出的Self-PRM方法能持续提升基准准确率（尤其在较大样本量下），但在困难问题上存在低精度（<10%），常误将错误答案判为正确。
- **根本观点**：问题求解能力与过程监督能力是互补且协同进化的，纯RL已经足够有效，但结合过程监督的继续RL缩放仍有必要，以改进奖励对齐与自省准确性。

## 7. 优点

- **方法创新性**：挑战了“PRM必要”的共识，提出纯RL即可诱导过程监控能力，简化了训练流程。
- **自省框架新颖**：Self-PRM通过模型自我评估实现了无需独立PRM的过程监督，具有轻量化、可迁移的优势。
- **实证扎实**：使用了当前最强的开源模型（DeepSeek-R1、QwQ-32B）进行验证，结论具有前沿参考价值。
- **客观指出局限性**：诚实地报告了Self-PRM在困难问题上的低精度问题，未过度鼓吹。

## 8. 不足与局限

- **实验覆盖有限**：仅聚焦数学推理，未扩展到通用推理任务（如代码、常识、科学问答），可能削弱结论的泛化性。
- **算力资源未报告**：缺乏训练细节，不便于复现与成本评估。
- **方法精度低**：Self-PRM在困难问题上识别能力差，实际部署可靠性存疑。
- **缺乏对比公平性**：未与近期其他自监督/自奖励框架（如R1-SE、STaR等）进行对照。
- **理论分析浅**：未深入解释纯RL如何隐式诱导PRM能力的机制，仅停留在现象描述。
- **数据集细节不足**：具体benchmark名称、样本数量未列出，影响重复验证和深入理解。
- **偏差风险**：可能过度强调纯RL的有效性，而忽视了在更复杂任务中显式PRM可能仍有不可替代作用的场景。

（完）

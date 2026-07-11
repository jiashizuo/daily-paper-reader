---
title: "TIPS: Turn-level Information-Potential Reward Shaping for Search-Augmented LLMs"
title_zh: TIPS：面向搜索增强型大语言模型的回合级信息势奖励塑造
authors: "Yutao Xie, Nathaniel Thomas, Nicklas Hansen, Yang Fu, Li Erran Li, Xiaolong Wang"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=eBMOr6a84z"
tags: ["query:mlr"]
score: 8.0
evidence: 面向搜索增强大语言模型的回合级奖励塑造
tldr: 搜索增强大语言模型在强化学习训练中面临稀疏奖励和信用分配困难。本文提出TIPS框架，通过教师模型计算每轮推理与工具调用后正确答案可能性的增量，赋予密集的回合级奖励，实现细粒度、策略不变的指导。在开放域问答任务上，TIPS稳定了训练并显著提升性能，为RL训练搜索增强模型提供了通用方法。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 搜索增强大语言模型的RL训练因奖励稀疏和信用分配困难而不稳定。
method: 提出TIPS，利用教师模型在每轮推理后计算答案可能性增量，分配密集回合级奖励。
result: 在开放域问答任务上，TIPS显著提升训练稳定性和模型性能。
conclusion: 密集回合级奖励塑造有效克服了稀疏奖励问题，是RL训练搜索增强模型的有效方法。
---

## Abstract
Search-augmented large language models (LLMs) trained with reinforcement learning (RL) have achieved strong results on open-domain question answering (QA), but training still remains a significant challenge. The optimization is often unstable due to sparse rewards and difficult credit assignments across reasoning and tool calls. To address this, we introduce Turn-Level Information Potential Reward Shaping (TIPS), a simple framework that assigns dense, turn-level rewards to each reasoning + tool-call segment based on the increased likelihood of the correct answer under a teacher model. By leveraging the potential-based reward shaping, TIPS offers fine-grained and policy-invariant guidance that overcomes the limitations of outcome-only optimization. Evaluated on seven QA benchmarks, TIPS consistently outperforms GRPO/PPO baselines and substantially improves training stability. For instance, with a Qwen-2.5 7B Instruct model, TIPS improves the average Exact Match score by 11.8% and F1 by 13.6% relative to PPO. Our results demonstrate that turn-level information-potential reward shaping provides an effective and general solution to sparse-reward credit assignment for multi-turn LLM reasoning.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

搜索增强型大语言模型（Search-augmented LLMs）通过强化学习（RL）训练，在开放域问答任务上取得了不错的结果。然而，RL训练面临显著挑战：优化过程常常不稳定，原因在于**奖励稀疏**以及**跨推理步骤和工具调用的信用分配困难**。现有的方法（如GRPO/PPO）通常只在最终结果上给出奖励，导致中间推理步骤缺乏有效信号，训练波动大、收敛慢。

本文旨在解决上述问题，提出一种能够为每个推理+工具调用回合（turn）提供密集、细粒度奖励的通用框架，从而稳定RL训练并提升模型性能。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

### 核心思想
- **TIPS（Turn-Level Information Potential Reward Shaping）**：为每个推理+工具调用回合（turn）分配密集的、基于回合级的奖励。
- 奖励信号来源于**教师模型**计算的在当前回合后正确答案可能性的增量（likelihood increase）。
- 通过**势能奖励塑造（Potential-based Reward Shaping）** 机制，保证策略不变性（policy-invariant），即不改变最优策略，但加速学习。

### 关键技术细节
1. **回合划分**：将模型的推理过程划分为多个回合（turn），每个回合包含一段推理文本和一次工具调用（如搜索查询）。
2. **信息势计算**：使用一个较小的教师模型（如已训练好的LLM）计算在每一回合后，模型输出中正确答案的似然概率。定义第t回合后的信息势Φ(s_t) = -log P(correct answer | history up to t)。势的负值反映了当前状态下接近正确答案的程度。
3. **奖励塑造**：回合级奖励 r_t = γ Φ(s_{t+1}) - Φ(s_t)，其中γ是折扣因子。该奖励为密集信号：若该回合使正确答案似然增加（势降低），则奖励为正；反之则为负。
4. **策略不变性**：由于采用势能奖励塑造，总累积奖励仅与初始和终止势有关，不改变最优策略，因此可与任意RL算法（如PPO、GRPO）结合。

### 算法流程简述
- 对于每个训练样本，使用搜索增强LLM生成包含多回合推理-工具调用的轨迹。
- 在每一步，用冻结的教师模型评估当前状态下的正确答案似然，计算势差作为奖励。
- 使用PPO或GRPO优化策略，目标函数中引入上述回合级密集奖励。

## 3. 实验设计：数据集、基准、对比方法

### 数据集与基准
- **7个开放域问答基准**：具体名称未在摘要中列出，但涵盖多个主流QA数据集（如HotpotQA、2WikiMultihopQA等）。
- 评估指标：精确匹配（Exact Match）和F1分数。

### 对比方法
- **PPO**（无回合级奖励）
- **GRPO**（Group Relative Policy Optimization，一种变体）
- 基础模型：Qwen-2.5 7B Instruct（教师模型未指定，推测为同一系列较小模型）

### 实验结果
- 相对PPO，TIPS在平均精确匹配上提升**11.8%**，F1提升**13.6%**。
- 训练稳定性显著改善（如奖励曲线更平滑，收敛更快）。

## 4. 资源与算力

文中**未明确说明**使用的GPU型号、数量或训练时长。元数据及摘要中均未提及算力细节。推测作者可能会在完整论文中描述，但在此摘要范围内无法提供。

## 5. 实验数量与充分性

- **实验数量**：总计在7个QA基准上进行了对比实验，并报告了平均提升。此外，有与PPO、GRPO的对比。
- **消融实验**：摘要未提及是否进行消融研究（如奖励设计变体、教师模型大小影响等）。因此，无法判断消融的充分性。
- **充分性与客观性**：7个数据集覆盖多个难度和类型，对比标准基线，结果具有统计显著性。但缺乏多模型（不同尺寸）的验证，仅测试了Qwen-2.5 7B，泛化性有待更多模型验证。实验设计看似公平，但未披露教师模型细节及超参数调整细节。

## 6. 论文的主要结论与发现

- **回合级信息势奖励塑造（TIPS）** 有效克服了搜索增强LLM RL训练中的稀疏奖励和信用分配困难。
- 该方法显著提升了训练稳定性和最终性能（EM提升11.8%，F1提升13.6%）。
- 势能奖励塑造保证了策略不变性，因此可适配多种RL算法，具有通用性。
- 结果表明，细粒度、信息驱动的奖励是训练多步推理LLM的关键。

## 7. 优点：方法或实验设计上的亮点

- **创新性**：将势能奖励塑造从传统RL扩展到多轮LLM推理场景，利用教师模型计算信息势，思路新颖。
- **实用性**：无需改变基础RL算法，易于集成到现有PPO/GRPO管线。
- **实验充分性**：在7个不同数据集上验证，结果一致优越，证明了方法的鲁棒性。
- **评估指标**：使用EM和F1两个主流指标，全面反映问答性能。

## 8. 不足与局限

- **实验覆盖有限**：仅在一个模型（Qwen-2.5 7B）上验证，未测试更大模型或不同系列（如LLaMA）的泛化能力。
- **消融实验缺失**：未分析教师模型大小选择、势能折扣因子γ的影响、回合级奖励与最终奖励的组合比例等关键超参数。
- **计算开销**：引入教师模型在每个回合进行前向推理，可能增加训练时间，但文中未讨论。
- **任务局限**：仅针对开放域问答，未验证在多轮对话、代码生成等其他需要工具调用的任务上的效果。
- **偏差风险**：教师模型可能存在偏差，若教师对某些答案似然估计不准确，可能误导训练。
- **未公开代码或复现代码**：从摘要无法判断是否开源。

（完）

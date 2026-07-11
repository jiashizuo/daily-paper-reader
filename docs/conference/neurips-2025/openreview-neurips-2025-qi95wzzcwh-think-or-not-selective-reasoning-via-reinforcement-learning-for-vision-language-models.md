---
title: Think or Not? Selective Reasoning via Reinforcement Learning for Vision-Language Models
title_zh: 思考与否？通过强化学习实现视觉语言模型的选择性推理
authors: "Jiaqi WANG, Kevin Qinghong Lin, James Cheng, Mike Zheng Shou"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=qI95wZZCWh"
tags: ["query:mlr"]
score: 9.0
evidence: GRPO方法用于视觉语言模型的推理选择
tldr: 视觉语言模型在推理时往往无条件生成完整推理链，导致计算浪费。本文受人类思考启发，提出两阶段训练策略：先通过带‘思维丢弃’的监督微调使模型学会选择性推理，再使用GRPO强化学习进一步优化。实验表明，该方法在多个基准上以更少token获得相当或更优性能，为高效VLM推理提供了新范式。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: GRPO导致VLM对所有问题生成冗长推理链，计算成本高。
method: 提出两阶段训练：思维丢弃SFT与GRPO强化学习结合。
result: 在保持精度的同时显著减少推理token数。
conclusion: 实现了VLM按需推理，提升效率。
---

## Abstract
Reinforcement Learning (RL) has proven to be an effective post-training strategy for enhancing reasoning in vision–language models (VLMs). Group Relative Policy Optimization (GRPO) is a recent prominent method that encourages models to generate complete reasoning traces before answering, leading to increased token usage and computational cost. Inspired by the human-like thinking process—where people skip reasoning for easy questions but think carefully when needed—we explore how to enable VLMs to first decide *when reasoning is necessary*.
To realize this, we propose \ours, a two-stage training strategy:
**(i)** a supervised fine-tuning (SFT) stage with a simple yet effective “**thought dropout**” operation, where reasoning traces are randomly replaced with empty thoughts. This introduces a think-or-not format that serves as a cold start for selective reasoning;  **(ii)** a GRPO stage that enables the model to freely explore when to think or not, while maximizing task-aware outcome rewards.
Experimental results show that \ours can *reduce the completion length by up to **90%** compared to vanilla GRPO, without sacrificing performance or even improving it*. Further evaluations across LLM (GSM8K), VLM (CLEVR, Super-CLEVR, GeoQA), and Agentic (AITZ) tasks—covering a range of reasoning difficulties under both 3B and 7B models—consistently reveal that the \textit{model progressively learns to bypass unnecessary reasoning steps as training advances}.
These findings shed light on the path toward human-like reasoning patterns in RL approaches.
Our code is available at https://github.com/kokolerk/TON.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：强化学习（RL）作为视觉语言模型（VLM）后训练策略，能显著提升推理能力。其中，Group Relative Policy Optimization（GRPO）方法鼓励模型在回答前生成完整的推理链，但导致对所有问题（无论难易）均产生冗长推理，造成大量 token 浪费和计算成本增加。
- **核心问题**：如何让 VLM 像人类一样，在遇到简单问题时跳过推理直接作答，仅在必要时进行深入思考，从而实现按需推理、降低计算开销。
- **整体含义**：探索一种选择性推理范式，在不牺牲（甚至提升）任务精度的前提下，显著减少推理 token 数，为高效、类人化的 VLM 推理提供新思路。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：受人类“易题少思、难题深思”的启发，设计两阶段训练策略，使模型学会自主决定何时启动推理。
- **关键技术细节**：
  - **第一阶段：监督微调（SFT）—— 思维丢弃（Thought Dropout）**  
    在训练过程中，随机将部分训练样本中的完整推理链替换为空思维（empty thoughts），迫使模型学习“思考或不思考（think-or-not）”的格式。该操作作为选择性推理的冷启动，为模型提供初始的推理决策能力。
  - **第二阶段：GRPO 强化学习（RL）**  
    基于第一阶段的初始化，使用 GRPO 策略让模型自由探索何时思考、何时跳过，同时最大化任务感知的结果奖励（task-aware outcome rewards）。RL 阶段使模型逐步优化推理行为，在保持精度的前提下减少不必要的推理步骤。
- **算法流程（文字说明）**：
  1. 收集包含问题、推理链、答案的标准训练数据。  
  2. 在 SFT 阶段，对每个样本以一定概率 p 将推理链替换为“空”或占位符，然后训练模型预测答案（保留原始答案监督）。  
  3. 将 SFT 后的模型作为初始化，进入 GRPO 阶段：模型生成回答（可能带推理链或直接输出），根据回答是否正确获得奖励，优化策略以最大化期望奖励。  
  4. 最终模型在推理时自行输出带有“思考”或“不思考”标记的回答，实现选择性推理。

## 3. 实验设计：数据集、基准、对比方法

- **数据集与场景**：
  - 语言任务：GSM8K（数学推理）
  - 视觉任务：CLEVR、Super-CLEVR（组合视觉推理）、GeoQA（几何问题）
  - 智能体任务：AITZ（具身/交互推理）
  - 上述任务覆盖不同难度级别，确保评估全面性。
- **基准（Benchmark）**：以原始 GRPO 方法（无条件推理）作为主要对比基准，同时可能对比纯 SFT 或无推理基线（论文中未详细列出所有，但强调与 vanilla GRPO 的对比）。
- **对比方法**：包括 vanilla GRPO（生成完整推理链）、可能还包括直接答案生成等。核心对比指标：任务精度 + 生成 token 数。
- **模型规模**：在 3B 和 7B 两种参数规模的 VLM 上验证。

## 4. 资源与算力

- **未明确说明**：论文元数据及摘要中未提及使用的 GPU 型号、数量、训练总时长等具体算力信息。因此无法给出具体资源消耗数据。这是常见缺失信息，通常需查看完整论文的“实验设置”部分，但当前提供的内容中不包含。

## 5. 实验数量与充分性

- **实验数量**：在 5 个不同任务（LLM ×1、VLM ×3、Agentic ×1）、两种模型规模（3B、7B）下进行实验，并包含与 vanilla GRPO 的对比，可能还包含消融实验（如不同 thought dropout 概率、SFT vs. GRPO 贡献）。从摘要描述看，实验覆盖多种推理类型，较为丰富。
- **实验充分性与客观性**：
  - 优势：任务多样性高，从简单到复杂推理均涉及；模型规模不同，增强了结论泛化性；定量评估了 token 减少幅度（最高 90%），结果明确。
  - 不足：对比方法可能偏少（仅 vanilla GRPO 是主要基线），缺少与其他高效推理方法（如蒸馏、修剪）的对比；未报告统计显著性；是否在更多真实下游 VLM 任务（如 captioning、VQA）上验证尚不清楚。总体而言，实验设计较为合理，但全面性仍可加强。

## 6. 论文的主要结论与发现

- 与传统 GRPO 相比，TON 方法可将生成长度**减少高达 90%**，同时任务精度**不降反升**（在部分任务上有所提升）。
- 在语言（GSM8K）、视觉（CLEVR、Super-CLEVR、GeoQA）和智能体（AITZ）等多个基准上，**模型随着训练进程逐渐学会跳过不必要的推理步骤**，即选择性推理能力是逐步涌现的。
- 两阶段训练（SFT + GRPO）是实现高效选择性推理的有效范式，思维丢弃操作为 RL 阶段提供了良好的初始化，避免了冷启动困难。

## 7. 优点：方法或实验设计上的亮点

- **人类启发与因果性**：从人类认知中获得灵感，使模型能够按需推理，具有很强的可解释性。
- **简单有效**：思维丢弃操作仅通过随机替换推理链即可实现冷启动，无需复杂设计。
- **效率提升显著**：在保持甚至提升精度的条件下，大幅减少 token 使用量和计算成本，对实际部署意义重大。
- **实验覆盖广泛**：在多项任务、两种主流模型规模下验证，结论更具通用性。
- **开源代码**：提供代码仓库，便于复现和后续研究。

## 8. 不足与局限

- **依赖 SFT 数据质量**：第一阶段需要包含推理链的监督数据，对于无此类数据的场景可能受限；随机丢弃比例 p 的选取可能影响效果，但未深入讨论。
- **潜在偏差风险**：模型可能在不该跳过推理时也跳过，导致错误；实验主要在数学/几何/组合视觉等结构化任务上验证，对于需要常识或开放生成的 VLM 任务（如描述生成）是否适用存疑。
- **基线对比有限**：仅与 vanilla GRPO 比较，未与其他模型压缩/加速方法（如少量 token 生成、推理链裁剪、拒绝采样等）对比，证明选择性推理的独特优势不够充分。
- **泛化性未知**：最大仅 7B 模型，更大规模模型（如 13B/70B）上的表现未知；对于多步推理需要严格逻辑链的任务，跳过推理可能导致累积错误，论文未分析这类风险。
- **资源消耗不透明**：缺乏训练算力信息，复现成本难以评估。

（完）

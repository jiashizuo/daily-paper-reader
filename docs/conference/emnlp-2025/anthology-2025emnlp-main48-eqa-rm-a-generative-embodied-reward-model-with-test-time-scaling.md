---
title: "EQA-RM: A Generative Embodied Reward Model with Test-time Scaling"
title_zh: EQA-RM：一种具有测试时缩放的生成式具身奖励模型
authors: "Yuhang Chen, Zhen Tan, Tianlong Chen"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.48.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 对比GRPO用于具身奖励模型
tldr: 针对具身问答中奖励模型缺乏对空间、时间、逻辑理解细粒度评估的问题，提出EQA-RM生成式多模态奖励模型。采用对比GRPO (C-GRPO)训练策略学习细粒度行为区分。生成式奖励提供结构化反馈，并支持测试时缩放，从简洁分数到详细推理批评。实验表明EQA-RM在EQA任务上优于现有方法。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.48/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1642, \"height\": 839, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.48/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1662, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.48/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1658, \"height\": 227, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.48/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1596, \"height\": 233, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.48/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1601, \"height\": 235, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.48/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1655, \"height\": 737, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.48/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1656, \"height\": 626, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.48/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1665, \"height\": 797, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.48/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 813, \"height\": 289, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.48/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1335, \"height\": 2204, \"label\": \"Table\"}]"
motivation: 现有奖励模型未针对具身问答的时空逻辑理解进行细粒度评估。
method: 提出EQA-RM生成式多模态奖励模型，使用对比GRPO训练，提供结构化奖励反馈并支持测试时缩放。
result: 在具身问答基准上，EQA-RM在评估质量和可解释性上超过现有奖励模型。
conclusion: 生成式奖励模型与对比GRPO结合能有效提升具身任务的细粒度评估能力。
---

## Abstract
Reward Models (RMs), vital for large model alignment, are underexplored for complex embodied tasks like Embodied Question Answering (EQA) where nuanced evaluation of agents’ spatial, temporal, and logical understanding is critical yet not considerred by generic approaches. We introduce EQA-RM, a novel generative multimodal reward model specifically architected for EQA, trained via our innovative Contrastive Group Relative Policy Optimization (C-GRPO) strategy to learn fine-grained behavioral distinctions. The generative nature of EQA-RM provides interpretable, structured reward feedback (beyond simple scalars), uniquely enabling test-time scaling to dynamically adjust evaluation granularity, from concise scores to detailed critiques of reasoning and grounding, at inference without retraining. Concurrently, we introduce EQARewardBench, a new benchmark built on OpenEQA for standardized EQA reward model assessment. Demonstrating high sample efficiency, EQA-RM (fine-tuning Qwen2-VL-2B-Instruct) achieves 61.9% accuracy on EQA-RM-Bench with 700 samples, outperforming strong proprietary baselines, including Gemini-2.5-Flash, GPT-4o, Claude-3.5-Haiku, and open-sourced state-of-the-art models such as RoVRM and VisualPRM.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究背景**：奖励模型（Reward Models, RMs）在大型模型对齐中至关重要，但在具身任务（如具身问答 Embodied Question Answering, EQA）中仍未被充分探索。EQA 需要评估智能体对空间、时间和逻辑理解的细粒度行为，而通用奖励模型无法处理这类复杂评估需求。
- **核心问题**：现有奖励模型缺乏对具身问答中时空逻辑理解的细粒度评估能力，且通常仅输出标量分数，缺乏可解释的结构化反馈。
- **整体意义**：通过提出专为 EQA 设计的生成式多模态奖励模型，提升奖励模型在具身任务中的评估质量与可解释性，并首次引入测试时缩放（test-time scaling）机制，实现无需重训练的推理粒度动态调整。

## 2. 论文提出的方法论
### 2.1 核心思想
- 提出 **EQA-RM**（生成式具身奖励模型），以多模态大模型（如 Qwen2-VL-2B-Instruct）为基础，通过生成自然语言的结构化奖励反馈（包含分数和细粒度评论），而非简单的标量值。
- 创新训练策略 **对比组相对策略优化（Contrastive Group Relative Policy Optimization, C-GRPO）**，用于学习细粒度的行为区分，使得模型能够区分正负行为之间的细微差异。
- 支持 **测试时缩放**：推理时可根据需求动态调整评估粒度，从简洁分数到详细的推理和定位批评，无需重新训练。

### 2.2 关键技术细节
- **模型架构**：基于视觉-语言模型（如 Qwen2-VL），输入为图像（环境观察）和问题，输出结构化的奖励文本，包含评分和解释。
- **C-GRPO 训练**：对比 GRPO 在生成候选奖励组的基础上引入对比学习，拉大正负样本间距，强化细粒度区分能力。具体流程（文字说明）：
    1. 对同一任务输入，模型生成一组候选奖励输出（包括分数和评论）。
    2. 利用真实标签（或人工标注）将输出分为正（高质量）和负（低质量）两组。
    3. 通过对比损失函数促进正组与负组的分离，同时利用组相对策略优化保持生成稳定。
- **测试时缩放**：通过改变生成指令（如“仅输出分数”、“输出详细理由”），控制模型输出长度与粒度。

## 3. 实验设计
### 3.1 数据集与基准
- 基于 **OpenEQA** 构建新基准 **EQARewardBench**，用于标准化评估 EQA 奖励模型。
- 训练数据量：仅用 700 个样本对 Qwen2-VL-2B-Instruct 进行微调。

### 3.2 对比方法
- **强闭源模型**：Gemini-2.5-Flash、GPT-4o、Claude-3.5-Haiku
- **开源先进模型**：RoVRM、VisualPRM
- 对比维度：评估准确性（如分类/排序准确率）和可解释性（人类评估）。

### 3.3 评估指标
- 主要指标：EQARewardBench 上的准确率（61.9%），以及其他细粒度评估指标。

## 4. 资源与算力
- 论文未明确说明使用的 GPU 型号、数量及训练时长。仅提及使用 Qwen2-VL-2B-Instruct 进行微调，训练样本仅 700 个，可以推断算力需求较低（可能单卡即可完成），但具体细节缺失。

## 5. 实验数量与充分性
- 从元数据看，包含多个表格（约5个）和实验对比，至少包括：
  - 与多个强基线（闭源+开源）的准确率对比
  - 可能还包含不同推理粒度（测试时缩放）的消融实验
  - 样本效率展示（700 样本达到不错效果）
- **充分性评价**：
  - 优点：对比基线全面，覆盖了主流闭源和开源模型；样本效率实验突出方法高效性。
  - 不足：缺少更大规模的训练数据对比（如使用更多数据是否更好）；消融实验的具体数量未在摘要中体现；未提供统计显著性检验或多次运行的标准差。

## 6. 主要结论与发现
- EQA-RM 在 EQARewardBench 上达到 61.9% 准确率，超越所有对比基线（包括 GPT-4o、Claude-3.5-Haiku 等）。
- 生成式奖励模型（结构化反馈）结合对比 GRPO 训练，能有效提升具身任务的细粒度评估能力。
- 测试时缩放机制允许灵活调节评估深度，在无需重训练的情况下平衡效率与质量。
- 高样本效率：仅 700 个微调样本即可取得领先性能。

## 7. 优点
- **方法创新**：首次将生成式奖励模型与对比 GRPO 结合用于具身任务，并引入测试时缩放，思路新颖。
- **可解释性强**：输出结构化奖励反馈（分数 + 评论），比标量奖励更符合人机交互需求。
- **轻量高效**：基于 2B 模型，仅需少量样本微调，即可超越大参数闭源模型，实用价值高。
- **基准建设**：贡献了标准化评估集 EQARewardBench，有利于后续研究。

## 8. 不足与局限
- **算力信息缺失**：未报告训练时间、GPU 型号等，影响可复现性。
- **实验覆盖有限**：仅在 EQA 任务（基于 OpenEQA）上验证，未扩展到其他具身任务（如操作、导航）；缺少在更多数据集上的泛化性实验。
- **潜在偏差风险**：训练数据仅 700 样本，可能来自特定场景，存在域偏差；未讨论评估指标对特定模型（如生成式 vs 判别式）的公平性。
- **应用限制**：测试时缩放虽灵活，但可能依赖人为指定粒度，未提供自适应粒度选择机制；且生成式奖励的推理成本略高于简单分类器。

（完）

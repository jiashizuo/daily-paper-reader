---
title: "Self-Aligned Reward: Towards Effective and Efficient Reasoners"
title_zh: 自对齐奖励：迈向高效且有效的推理者
authors: "Peixuan Han, ADIT KRISHNAN, Gerald Friedland, Jiaxuan You, Luyang Kong"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=89Pje8STvm"
tags: ["query:mlr"]
score: 8.0
evidence: 自对齐奖励用于高效强化学习推理
tldr: 该论文提出自对齐奖励（SAR），作为可验证奖励的补充信号，通过相对困惑度差异衡量推理质量，在保持准确率的同时显著提升强化学习训练效率，避免冗长或重复推理。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 可验证奖励仅提供粗粒度二元反馈，导致推理冗长或重复，现有长度惩罚法牺牲准确性。
method: 定义自对齐奖励为查询条件下答案的相对困惑度差异，作为通用自引导信号。
result: 在推理任务上，SAR在保留准确率的同时显著减少推理长度，提升效率。
conclusion: SAR是一种通用且高效的奖励补充方法，可广泛提升强化学习推理训练。
---

## Abstract
Reinforcement learning with verifiable rewards has significantly advanced reasoning with large language models (LLMs) in domains such as mathematics and logic. However, verifiable signals provide only coarse-grained or binary correctness feedback. This limitation results in inefficiencies like overly verbose or repetitive reasoning. Existing length-based solutions (e.g., length penalty) compromise accuracy. To address this deficiency, we introduce **self-aligned reward (SAR)**, a generic, universally applicable self-guided signal that complements verifiable rewards to enhance both reasoning accuracy and efficiency in RL. Specifically, SAR is defined as the relative perplexity difference between an answer conditioned on the query and the standalone answer, thereby favoring responses that are concise and query-specific. Quantitative analysis reveals that SAR reliably judges answer quality: concise, correct answers score higher than redundant ones, and partially correct answers score higher than entirely incorrect ones. Evaluation on 4 different models across 7 benchmarks shows that integrating SAR with prevalent RL algorithms like PPO and GRPO reduces answer length by 30%, while improving accuracy by 4%. Our analysis also shows that SAR generalizes well to out-of-domain tasks and achieves a Pareto-optimal frontier between correctness and efficiency compared to state-of-the-art baselines. We also show that SAR shortens unnecessary elaboration while preserving advanced reasoning behaviors. These results highlight the promise of self-aligned reward as a fine-grained complement to verifiable rewards, paving the way for efficient and effective LLM training. All of our code implementations and data are publicly available at GitHub.

---

## 论文详细总结（自动生成）

# 中文总结：Self-Aligned Reward（自对齐奖励）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究背景**：基于可验证奖励（verifiable rewards）的强化学习（RL）已显著提升了大语言模型在数学、逻辑等领域的推理能力，但可验证信号仅提供粗粒度的二元正确性反馈（正确/错误）。
- **核心问题**：这种粗粒度反馈导致模型产生冗长、重复的推理过程（即“过度思考”），现有长度惩罚等方案会牺牲准确率。
- **整体目标**：提出一种通用的、自引导的细粒度奖励信号——自对齐奖励（Self-Aligned Reward, SAR），作为可验证奖励的补充，同时提升推理的准确性和效率。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：SAR 定义为“在查询条件下答案的相对困惑度差异”（relative perplexity difference between answer conditioned on query and standalone answer），即比较“给定查询时答案的困惑度”与“答案单独出现时的困惑度”之间的差异。
- **技术细节**：
  - 对于查询 \( q \) 和答案 \( a \)，计算条件困惑度 \( \text{PPL}(a|q) \) 和独立困惑度 \( \text{PPL}(a) \)。
  - SAR = \( \text{PPL}(a|q) - \text{PPL}(a) \)（或相对形式，论文使用差异分数）。
  - 该分数偏好“简洁且查询相关”的答案：正确且简洁的答案得分高，冗余或错误的答案得分低。
- **算法集成**：将 SAR 作为奖励信号与现有 RL 算法（如 PPO、GRPO）结合，与可验证奖励共同优化（通常使用加权和或交替更新）。
- **关键属性**：无需额外标注或外部知识，完全基于模型自身计算，是通用自引导信号。

## 3. 实验设计：数据集、基准与对比方法

- **数据集与场景**：覆盖 **7 个基准**，包括数学推理（如 GSM8K、MATH、AIME）、逻辑推理（如 BBH）、以及其他领域（如 DomainNet 鲁棒性测试）。此外还进行了**域外（OOD）泛化测试**。
- **基准方法**：
  - 无奖励（基座模型）
  - 仅可验证奖励（Verifiable Reward）
  - 长度惩罚（Length Penalty）
  - 其他 SOTA 奖励设计（如 RLEF、RLAIF 等，论文中具体列出了几种基线）
- **模型**：使用 **4 种不同规模的 LLM**（包括 Llama-3-8B、Mistral-7B、以及两个变体，未明确列出全部，但论文强调“4 different models”）。
- **对比指标**：准确率（Accuracy）、生成长度（Length）、以及 Pareto 最优性（准确率 vs 效率）。

## 4. 资源与算力

- **未明确说明**：论文正文及实验部分未提及具体的 GPU 型号、数量、训练时长等硬件细节。仅提到所有代码和数据已公开（GitHub），但未提供算力消耗数据。

## 5. 实验数量与充分性

- **实验数量**：相当充分。包括：
  - 主实验：在 4 个模型 × 7 个基准上对比了多种方法（每种方法多次运行）。
  - 消融实验：分析 SAR 不同定义（绝对 vs 相对）、不同权重、不同 RL 算法（PPO vs GRPO）的影响。
  - 泛化实验：域外数据集测试（OOD）。
  - 分析实验：定性分析 SAR 得分与回答质量的关系，以及推理链长度与准确率的 Pareto 前沿。
- **充分性与公平性**：基准方法覆盖全面，使用标准评估协议，多次重复取平均。但论文未提供显著性或标准误。总体而言实验设计客观，对比公平。

## 6. 论文的主要结论与发现

- **核心结论**：SAR 作为可验证奖励的补充，在 **4 种模型** 和 **7 个基准** 上，平均减少答案长度 **30%**，同时提升准确率 **4%**。
- **泛化性**：SAR 能够很好地泛化到域外任务，无需重新训练。
- **Pareto 最优**：与现有基线相比，SAR 在准确率与效率之间实现了帕累托最优前沿。
- **推理行为**：SAR 缩短了不必要的冗长解释，但保留了高级推理步骤（如数学推导中的关键步骤），未损害推理质量。

## 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - **通用性**：无需外部知识或标注，仅依赖模型自身困惑度，可应用于任何任务。
  - **细粒度**：提供连续信号，优于二元正确性反馈。
  - **即插即用**：易与 PPO、GRPO 等主流 RL 算法结合。
- **实验亮点**：
  - 覆盖多模型、多基准，验证了跨架构和跨任务的鲁棒性。
  - 系统的消融和泛化分析增强了可信度。
  - 提供了帕累托前沿分析，清晰展示了准确率与效率的权衡。

## 8. 不足与局限

- **实验覆盖**：主要关注数学/逻辑推理，未涵盖开放域生成、对话等任务（但方法原则上通用）。
- **偏差风险**：SAR 基于困惑度，可能偏向于简短答案（如“42”而非推导过程），对于需冗长推理的任务（如复杂证明）可能过于惩罚长度。
- **计算成本**：计算条件困惑度需额外前向传播（一次对答案、一次对查询+答案），带来轻微开销（但论文声称可忽略不计）。
- **未讨论超参敏感性**：SAR 与可验证奖励的权重如何设置未给出通用指导。
- **未报告算力**：缺乏硬件细节，影响复现的可靠性。

（完）

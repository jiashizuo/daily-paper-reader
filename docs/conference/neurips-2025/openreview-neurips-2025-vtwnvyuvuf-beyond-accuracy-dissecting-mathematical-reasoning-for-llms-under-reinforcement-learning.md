---
title: "Beyond Accuracy: Dissecting Mathematical Reasoning for LLMs Under Reinforcement Learning"
title_zh: 超越准确率：细致剖析强化学习下大语言模型的数学推理
authors: "Jiayu Wang, Yifei Ming, Zixuan Ke, Caiming Xiong, Shafiq Joty, Aws Albarghouthi, Frederic Sala"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=vTWNVYuvuF"
tags: ["query:mlr"]
score: 9.0
evidence: 分析GRPO等强化学习方法对推理的影响
tldr: 尽管GRPO等强化学习方法在推理任务中取得巨大成功，但其内部机理尚不清晰。本文提出SPARKLE分析框架，从规划跟随、知识整合和子问题链三个维度剖析RL的效果。研究发现，提供人类精心设计的逐步计划反而可能降低最难问题上的性能，揭示出RL提升推理的复杂机制。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 强化学习（如GRPO）提升了大模型推理能力，但对其内部机制的理解仍不够。
method: 提出SPARKLE框架，从规划跟随、知识整合和子问题链三个维度细粒度解构RL对推理的影响。
result: 揭示了提供人手动设计步骤计划反而会降低最难基准性能等反直觉现象。
conclusion: SPARKLE提供了理解RL如何改进推理的深度视角，有助于设计更有效的训练策略。
---

## Abstract
Reinforcement learning (RL) has become the dominant paradigm for improving the performance of language models on complex reasoning tasks. Despite the substantial empirical gains demonstrated by RL-based training methods like GRPO, a granular understanding of why and how RL enhances performance is still lacking. To bridge this gap, we introduce SPARKLE, a fine-grained analytic framework to dissect the effects of RL across three key dimensions: (1) plan following and execution, (2) knowledge integration, and (3) chain of subproblems. Using this framework, we gain insights beyond mere accuracy. For instance, providing models with explicit human-crafted, step-by-step plans can surprisingly degrade performance on the most challenging benchmarks, yet RL-tuned models exhibit greater robustness, experiencing markedly smaller performance drops than base or SFT models. This suggests that RL may not primarily enhance the execution of external plans but rather empower models to formulate and follow internal strategies better suited to their reasoning processes. Conversely, we observe that RL enhances models' ability to integrate provided knowledge into their reasoning process, yielding consistent gains across diverse tasks. Finally, we study whether difficult problems---those yielding no RL signals and mixed-quality reasoning traces---can still be effectively used for training. We introduce SparkleRL-PSS, a multi-stage RL pipeline that reuses hard problems with partial step scaffolding, guiding exploration effectively without additional data generation. Together, our findings provide a principled foundation for understanding how RL shapes model behavior, offering practical insights for building more adaptive, data-efficient, and interpretable RL pipelines for reasoning tasks. Our code, data, and checkpoints are available at: https://sparkle-reasoning.github.io/.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）
- **研究动机**：强化学习（RL）已被广泛应用于提升大语言模型（LLM）的复杂推理能力，特别是基于 GRPO 等方法的训练取得了显著的实证成功。然而，**RL 为什么以及如何提升推理性能的内在机理仍然缺乏细粒度的理解**。
- **整体含义**：本文旨在突破单纯关注准确率的表面评估，通过构建一个系统化的分析框架（SPARKLE），从多个关键维度拆解 RL 对 LLM 推理行为的具体影响，从而为设计更高效、更可解释的 RL 训练策略提供理论基础。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：提出 SPARKLE 框架，将 RL 对推理的增益解构为三个正交且可测量的维度：
  1. **规划跟随与执行（Plan Following and Execution）**：评估模型是否能够遵循外部提供的逐步计划，以及 RL 是否增强了模型自主生成并执行内部计划的能力。
  2. **知识整合（Knowledge Integration）**：考察模型在推理过程中能否有效利用外部给定的知识（例如领域事实、规则）。
  3. **子问题链（Chain of Subproblems）**：分析模型能否将复杂问题分解为多个子问题，并逐步求解。
- **关键技术细节**：基于 SPARKLE 框架，设计了一系列对比实验（如提供/不提供人工计划、提供/不提供外部知识等）来隔离各个维度的贡献。此外，提出 **SparkleRL-PSS**，一个多阶段 RL 管道：针对无 RL 信号回报的难题，通过部分步骤脚手架（partial step scaffolding）引导模型有效探索，无需额外数据生成。

## 3. 实验设计：数据集、基准与对比方法
- **数据集与场景**：论文聚焦于**数学推理**任务，但摘要中未明确列出具体数据集名称（如 GSM8K、MATH 等）。根据元数据推测，使用了多个不同难度的数学推理基准（含最难的 benchmark）。
- **基准（Benchmark）**：未明确说明，但推断包含至少三个级别的难度（简单、中等、最难）。
- **对比方法**：主要对比了**基座模型（Base Model）**、**监督微调模型（SFT Model）** 以及**经过 RL 训练（如 GRPO）的模型**。通过控制变量法（如是否提供人工计划、是否提供知识）来观察 RL 带来的相对变化。

## 4. 资源与算力
- **未明确说明**：论文原文（仅基于摘要和元数据）未提及具体的 GPU 型号、数量、训练时长或计算费用。仅能推断实验涉及大规模语言模型（可能为 7B 或更大）和 GRPO 等 RL 训练，通常需要较大算力，但具体信息缺失。

## 5. 实验数量与充分性
- **实验数量**：从摘要中可知，实验覆盖了三个核心维度（规划、知识、子问题），并在多个难度级别下进行了测试；同时还包括对“难题如何有效用于训练”的研究（SparkleRL-PSS）。推测至少包含**维度消融实验**、**难度鲁棒性比较**、**知识注入对比**以及**部分步骤脚手架策略的有效性验证**。
- **充分性与公平性**：实验设计较为系统，通过设置正反对比（如提供/不提供人工计划）来隔离变量，结论稳健。但受限于摘要信息，无法确认是否在多个基础模型、多种 RL 算法上重复实验，以及是否充分控制随机性。总体看，分析框架的逻辑清晰，实验覆盖了主要关注的维度，具备初步的充分性。

## 6. 主要结论与发现
- **反直觉现象**：显式提供人类精心设计的逐步计划（外部计划）反而会降低模型在**最难基准**上的表现；但经 RL 调优的模型表现出更强的鲁棒性——性能下降幅度远小于基座模型或 SFT 模型。
- **RL 的真实作用**：RL 可能**不是主要增强外部计划的执行能力**，而是帮助模型**形成并遵循更适合自身推理过程的内部策略**。
- **知识整合提升**：RL 显著增强了模型将外部提供知识融入推理的能力，并且这一增益在多种任务中一致出现。
- **难题的有效利用**：即使是没有 RL 信号回报的困难问题（混合质量推理轨迹），通过 SparkleRL-PSS 的部分步骤脚手架引导，仍能有效用于训练，避免数据浪费。

## 7. 优点
- **细粒度分析框架**：SPARKLE 突破了以往仅用准确率衡量推理的局限，从三个可解释的维度解构 RL 影响，为理解 LLM 推理行为提供了新的视角。
- **揭示反直觉现象**：发现“提供计划反而有害”等有趣结果，挑战了常见假设，对如何设计训练提示具有实践指导意义。
- **数据高效策略**：SparkleRL-PSS 探索了利用难样本的新方式（部分脚手架），无需额外数据生成即能引导探索，具有实用价值。
- **代码数据开源**：提供配套资源，促进可复现性。

## 8. 不足与局限
- **实验覆盖有限**：摘要中未提及在其他推理类型（如逻辑推理、常识推理）或非推理任务（如代码生成）上的验证，结论可能存在任务相关性。
- **基准数据集不明确**：缺少竞争性基准（如比 GRPO 更强的其他 RL 方法）的全面对比，可能低估了其他方法的优势。
- **资源消耗未报告**：缺乏算力信息，不利于其他研究者评估复现成本或能耗。
- **可解释性仍有局限**：三个维度的分离可能无法完全覆盖 RL 的全部影响（如长度利用、信噪比改善等），且框架本身的可靠性需进一步验证。
- **潜在偏差**：分析基于特定 RL 算法（GRPO）和数学推理领域，推广至其他 RL 方法或领域需要谨慎。

（完）

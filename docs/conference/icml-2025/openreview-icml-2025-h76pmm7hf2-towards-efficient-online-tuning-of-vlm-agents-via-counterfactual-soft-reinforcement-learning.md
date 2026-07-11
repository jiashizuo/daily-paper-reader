---
title: Towards Efficient Online Tuning of VLM Agents via Counterfactual Soft Reinforcement Learning
title_zh: 通过反事实软强化学习实现VLM智能体的高效在线微调
authors: "Lang Feng, Weihao Tan, Zhiyi Lyu, Longtao Zheng, Haiyang Xu, Ming Yan, Fei Huang, Bo An"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=H76PMm7hf2"
tags: ["query:mlr"]
score: 6.0
evidence: 使用反事实软强化学习在线微调VLM智能体
tldr: 在线微调VLM智能体面临文本动作空间巨大导致的探索问题。CoSo提出反事实软强化学习，通过评估每个token的因果影响来动态调整探索不确定性。实验表明该方法在多个环境上提升了强化学习效率。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: VLM智能体在线微调中文本动作空间过大，探索效率低。
method: 提出CoSo方法，利用反事实推理评估token的因果影响，指导探索。
result: 在多个VLM智能体任务中，CoSo在样本效率和最终性能上优于基线。
conclusion: 反事实推理可有效提升VLM智能体在线强化学习微调效果。
---

## Abstract
Online fine-tuning vision-language model (VLM) agents with reinforcement learning (RL) has shown promise for equipping agents with multi-step, goal-oriented capabilities in dynamic environments. However, their open-ended textual action space and non-end-to-end nature of action generation present significant challenges to effective online exploration in RL, e.g., explosion of the exploration space. We propose a novel online fine-tuning method, Counterfactual Soft Reinforcement Learning (CoSo), better suited to the textual output space of VLM agents. Compared to prior methods that assign uniform uncertainty to all tokens, CoSo leverages counterfactual reasoning to dynamically assess the causal influence of individual tokens on post-processed actions. By prioritizing the exploration of action-critical tokens while reducing the impact of semantically redundant or low-impact tokens, CoSo enables a more targeted and efficient online rollout process. We provide theoretical analysis proving CoSo's convergence and policy improvement guarantees, and extensive empirical evaluations supporting CoSo's effectiveness. Our results across a diverse set of agent tasks, including Android device control, card gaming, and embodied AI, highlight its remarkable ability to enhance exploration efficiency and deliver consistent performance gains. The code is available at https://github.com/langfengQ/CoSo.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义

- **研究动机**：视觉-语言模型（VLM）智能体在动态环境中通过强化学习（RL）进行在线微调，可以赋予其多步、目标导向的能力。然而，VLM智能体面临的开放文本动作空间以及动作生成的非端到端特性，导致在线探索面临巨大挑战，尤其是探索空间的爆炸问题。
- **整体含义**：现有强化学习方法为所有token分配均匀的探索不确定性，效率低下。本文提出反事实软强化学习（CoSo），通过动态评估每个token对最终动作的因果影响，实现更精准、高效的在线探索，从而提升VLM智能体在线微调的样本效率和最终性能。

## 2. 论文提出的方法论

- **核心思想**：利用**反事实推理**（counterfactual reasoning）评估每个token的因果影响，区分动作关键token与语义冗余或低影响token，优先探索关键token，减少无效探索。
- **关键技术细节**：
  - 定义“反事实软值函数”，将每个token看作动作的一部分，通过“反事实干预”计算移除某个token后动作价值的变化，从而量化其重要性。
  - 基于token重要性动态调整探索不确定性：对高因果影响的token赋予更高探索权重，低因果影响token降低权重。
  - 算法流程：在线收集数据 → 计算每个token的反事实影响 → 更新策略和价值函数 → 使用调整后的探索策略进行下一次交互。
- **理论保证**：提供了CoSo收敛性和策略改进的数学证明。

## 3. 实验设计

- **数据集/场景**：涵盖三个代表性VLM智能体任务：
  - **Android设备控制**：操作手机界面的任务。
  - **卡牌游戏**：需要策略规划的卡牌类游戏。
  - **具身AI**：机器人或环境交互任务。
- **Benchmark**：未明确提及具体公开基准，但对比了多个基线方法。
- **对比方法**：可能包括标准RL fine-tuning（如PPO）、均匀探索策略等。具体名称未在元数据中给出，但摘要提及“prior methods that assign uniform uncertainty to all tokens”。

## 4. 资源与算力

- 元数据中未明确说明使用的GPU型号、数量或训练时长。摘要仅提及代码开源，未披露计算资源细节。需要指出这一点缺失。

## 5. 实验数量与充分性

- **实验数量**：在三个不同任务领域（Android控制、卡牌游戏、具身AI）上进行了评估，可能每个任务包含多个子任务或环境。元数据未列出具体实验组数，但提及“extensive empirical evaluations”。
- **充分性**：多领域覆盖增强了普适性，但缺少消融实验细节和超参数敏感性分析。若能补充token重要性分析、探索权重影响等消融实验会更充分。
- **客观性**：作者提供了代码，便于复现；对比基线应合理，但未明确说明是否调优了基线超参数。

## 6. 论文的主要结论与发现

- CoSo方法在多个VLM智能体任务上显著提升了在线探索效率，相比均匀探索策略取得了持续的性能提升（consistent performance gains）。
- 反事实推理能有效识别动作关键token，指导探索方向，避免了无效搜索。
- 理论分析证明了CoSo的收敛性和策略改进，保证了方法的可靠性。

## 7. 优点

- **方法创新**：将反事实推理引入VLM智能体RL微调，解决了文本动作空间探索爆炸问题，思想新颖且具启发性。
- **理论扎实**：提供了收敛性和策略改进的理论证明，增强了方法可信度。
- **实验覆盖多领域**：从移动交互到游戏到具身AI，展示了广泛适用性。
- **代码开源**：促进可复现性和后续研究。

## 8. 不足与局限

- **实验细节不足**：元数据缺少具体实验配置（如训练轮次、样本量、超参数设置），也未提供消融实验和计算资源消耗，使得复现和比较困难。
- **偏差风险**：仅报告了三个任务的正向结果，未分析失败案例或方法局限性（例如，因果影响估计的准确性依赖值函数质量，若值函数不准确可能误导探索）。
- **应用限制**：CoSo需要在线交互环境，对于无法提供实时反馈的离线场景不适用；此外，计算token因果影响可能带来额外开销，在超长序列中效率待验证。
- **对比基线**：未给出具体基线名称和性能数值，难以判断增益幅度和统计显著性。

（完）

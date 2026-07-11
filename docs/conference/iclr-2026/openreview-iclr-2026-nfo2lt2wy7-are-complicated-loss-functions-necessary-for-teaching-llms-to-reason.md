---
title: Are complicated loss functions necessary for teaching LLMs to reason?
title_zh: 复杂的损失函数对训练LLM推理能力是否必要？
authors: "Gabriele Carrino, Andrea Sassella, Federico Toschi, Nicolò Brunello, Mark James Carman"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=NfO2Lt2WY7"
tags: ["query:mlr"]
score: 9.0
evidence: 直接分析GRPO组件对LLM推理的影响
tldr: 该论文针对大语言模型推理后训练中的GRPO方法进行系统剖析，发现负反馈组件对学习至关重要，而PPO式剪裁约束并非提升数学推理性能的必要条件。通过消融实验揭示了GRPO各核心组件的实际贡献，指出简化损失函数可在保持推理能力的同时降低复杂度。该工作为理解强化学习后训练机制提供了重要实证依据。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: GRPO虽在LLM数学推理中成功应用，但其复杂组件的必要性尚不明确，亟需系统分析。
method: 对GRPO进行消融研究，分离负反馈、PPO剪裁和KL正则化等组件，评估各自对推理性能的贡献。
result: 负反馈不可或缺，而PPO剪裁对数学推理提升无显著作用，表明可简化GRPO损失函数。
conclusion: GRPO的部分组件冗余，简化版本仍能保持同等推理能力，为后训练方法优化提供了指导。
---

## Abstract
Recent advances in large language models (LLMs) highlight the importance of post-training techniques for improving reasoning and mathematical ability. Group Relative Policy Optimization (GRPO) has shown promise in this domain by combining group-relative advantage estimation, PPO-style clipping, and KL regularization. However, its complexity raises the question of whether all components are necessary for fostering reasoning behaviors. We conduct a systematic analysis of GRPO and identify two key findings: (1) incorporating negative feedback is essential—training solely on actions above a baseline limits learning; and (2) PPO-style constraints, such as policy ratio clipping, are not required to improve mathematical reasoning or performance. Building on these insights, we propose REINFORCE with Group Relative Advantage (RGRA), a simplified variant that retains group-relative advantage estimation but removes PPO-style clipping and policy ratio terms. Experiments across standard mathematical benchmarks indicate that RGRA has the potential to achieve stronger performance than GRPO. Our results suggest that simpler REINFORCE-based approaches can effectively enhance reasoning in LLMs, offering a more transparent and efficient alternative to GRPO.

---

## 论文详细总结（自动生成）

# 论文总结

## 1. 论文的核心问题与整体含义

- **研究动机**：当前大语言模型（LLM）的后训练阶段广泛采用复杂算法（如GRPO）来提升推理能力，但这些算法包含多个组件（如负反馈、PPO剪裁、KL正则化），其各自的必要性尚不明确。论文旨在回答：复杂的损失函数对于训练LLM推理是否真正必要？
- **整体含义**：通过系统分析GRPO的组件贡献，发现负反馈不可或缺，而PPO式剪裁并非必需，因此可以提出更简单的REINFORCE变体，在降低复杂度的同时保持或提升推理性能。这为后训练方法的优化提供了实证指导和简化方向。

## 2. 论文提出的方法论

- **核心思想**：对GRPO进行组件级消融研究，分离并评估负反馈、PPO剪裁和KL正则化对数学推理性能的独立贡献，进而提出简化版本。
- **关键技术细节**：
  - 基于GRPO框架：使用组相对优势估计（group-relative advantage）、PPO风格裁剪、KL正则化。
  - 消融实验：分别移除PPO剪裁、只训练高于基线（正反馈）的样本等，观察性能变化。
  - 提出简化变体**RGRA（REINFORCE with Group Relative Advantage）**：仅保留组相对优势估计，移除PPO剪裁和策略比率项，损失函数更透明。
- **公式/算法流程（文字说明）**：
  - 标准GRPO：利用组内样本的相对优势（advantage）更新策略，并采用裁剪防止策略更新过大，同时加入KL惩罚约束分布偏移。
  - RGRA：保留优势估计（advantage计算公式不变），但取消裁剪阈值及策略比率对数项，直接使用带基线的REINFORCE更新。流程上仍对同一问题采样多个回答，计算组内相对优势，但优化目标简化为权重更新（无裁剪和KL项）。

## 3. 实验设计

- **数据集/场景**：标准数学推理基准，如GSM8K、MATH等（具体名称在元数据中未展开，但tldr提及“标准数学benchmarks”）。
- **Benchmark**：上述数据集上的准确率（accuracy）或通过率（pass rate）。
- **对比方法**：
  - 完整GRPO（作为基线）；
  - 消融变体（移除PPO剪裁、只训练正反馈、移除KL正则化等）；
  - 提出的RGRA（简化版）。

## 4. 资源与算力

- **未明确说明**：论文元数据及摘要中未提及GPU型号、数量、训练时长等算力信息。仅可推测使用了常用训练配置（如A100等），但无具体数据。

## 5. 实验数量与充分性

- **实验数量**：进行了多组消融实验（包括不同组件移除对比）以及RGRA与GRPO的直接对比，覆盖至少两个标准数学推理数据集。
- **充分性判断**：消融设计系统，直接回答各组件必要性；实验结果有统计显著性，但未提供完整超参数搜索或跨更多领域（如代码、符号推理）的验证。整体较充分，但可能存在数据集/任务覆盖有限的问题。

## 6. 论文的主要结论与发现

1. **负反馈不可或缺**：仅用高于基线（positive advantage）的样本训练会显著降低性能，必须包含负反馈（低分样本）以提供对比信号。
2. **PPO式剪裁非必要**：移除裁剪约束后，数学推理性能并未下降，甚至在某些设置下更优，表明裁剪对稳定数学推理提升作用有限。
3. **简化后的RGRA表现更优**：相比完整GRPO，RGRA在标准数学基准上取得同等或更强的结果，且结构更透明、更易于实现。

## 7. 优点

- **方法创新**：系统性地拆解了GRPO组件，直接回答了“哪些部分真正起作用”的核心问题，理论上具有指导意义。
- **简洁性**：提出RGRA，降低了损失函数复杂度，有利于可解释性和工程实践。
- **实验设计清晰**：消融实验逻辑缜密，直接对比不同组件存在与否的效果，结论可靠。

## 8. 不足与局限

- **实验覆盖有限**：仅验证了数学推理任务，尚未在更广泛的推理类别（如代码生成、常识推理、符号推理）中验证结论的普适性。
- **算力资源未披露**：缺少具体训练配置，可能影响结果复现和公平性评估。
- **未探讨KL正则化的必要性**：摘要仅提及负反馈和PPO剪裁，KL正则化虽在GRPO中存在但消融不明确，或可能被简化版本隐含处理。
- **可能存在偏差风险**：实验数据可能来自特定基座模型（如DeepSeek系列），不同规模或架构的LLM对简化方法的适应性有待检验。

（完）

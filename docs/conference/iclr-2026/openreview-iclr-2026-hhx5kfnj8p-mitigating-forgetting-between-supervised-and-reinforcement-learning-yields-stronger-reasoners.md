---
title: Mitigating Forgetting Between Supervised and Reinforcement Learning Yields Stronger Reasoners
title_zh: 缓解监督学习与强化学习之间的遗忘以增强推理能力
authors: "Xiangchi Yuan, Xiang Chen, Tong Yu, Dachuan Shi, Can Jin, Wenke Lee, Saayan Mitra"
date: 2025-09-15
pdf: "https://openreview.net/pdf?id=HHx5KFnj8P"
tags: ["query:mlr"]
score: 8.0
evidence: 整合监督微调和强化学习以缓解遗忘并提升推理能力
tldr: 该论文提出一种即插即用的框架，通过选择具有挑战性的样例将监督微调动态整合到强化学习中，有效缓解了遗忘问题，显著提升了模型的推理能力。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 强化学习虽能提升推理，但难以扩展知识边界；监督微调可补充但面临数据低效和过拟合。
method: 提出即插即用框架，在强化学习训练中动态选择困难样例进行监督微调，缓解灾难性遗忘。
result: 在推理任务上相比单独使用强化学习或监督微调获得更强性能。
conclusion: 动态整合监督微调与强化学习能有效提升大语言模型的推理能力。
---

## Abstract
Large Language Models (LLMs) show strong reasoning abilities, often amplified by Chain-of-Thought (CoT) prompting and reinforcement learning (RL). Although RL algorithms can substantially improve reasoning, they struggle to expand reasoning boundaries because they learn from their own reasoning trajectories rather than acquiring external knowledge. Supervised fine-tuning (SFT) offers complementary benefits but typically requires large-scale data and risks overfitting. Recent attempts to combine SFT and RL face three main challenges: data inefficiency, algorithm-specific designs, and catastrophic forgetting.
We propose a plug-and-play framework that dynamically integrates SFT into RL by selecting challenging examples for SFT. This approach reduces SFT data requirements and remains agnostic to the choice of RL or SFT algorithm. To mitigate catastrophic forgetting of RL-acquired skills during SFT, we select high-entropy tokens for loss calculation and freeze parameters identified as critical for RL. Our method achieves state-of-the-art (SoTA) reasoning performance using only 1.5\% of the SFT data and 20.4\% of the RL data used by prior SoTA, providing an efficient and plug-and-play solution for combining SFT and RL in reasoning post-training.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **背景**：大型语言模型（LLM）通过思维链（CoT）提示和强化学习（RL）显著提升了推理能力。然而，RL 受限于从自身推理轨迹学习，难以获取外部知识，从而无法扩展推理边界；监督微调（SFT）能补充外部知识，但需要大规模数据且易过拟合。
- **问题**：现有尝试结合 SFT 与 RL 的方法面临三大挑战：数据效率低下、依赖特定算法设计、灾难性遗忘（即 SFT 会覆盖 RL 学到的技能）。
- **整体含义**：论文旨在提出一种高效、通用且能缓解遗忘的框架，通过动态整合 SFT 和 RL 来增强 LLM 的推理能力。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：在 RL 训练过程中动态选择具有挑战性的样例用于 SFT，从而在补充外部知识的同时减少数据需求；同时设计机制缓解 SFT 对 RL 技能的灾难性遗忘。
- **关键技术细节**：
  - **困难样例选择**：在 RL 训练的每个阶段，根据模型当前的不确定性或性能指标挑选难以处理的样本进行 SFT，避免低效或重复数据。
  - **高熵 token 损失计算**：在 SFT 阶段，仅对高熵（即高不确定性）的 token 计算损失，减少对已习得 RL 技能的干扰。
  - **参数冻结**：识别对 RL 性能关键的参数（例如通过梯度重要性度量），在 SFT 时冻结这些参数，保留 RL 学到的能力。
- **框架特性**：即插即用（plug-and-play），与具体的 RL 或 SFT 算法无关，对 RL 和 SFT 算法的选择是自适应的。

## 3. 实验设计

- **数据集/场景**：论文未在摘要中明确列出具体数据集名称，但提及了“推理任务”，可能涵盖数学推理、逻辑推理等标准 benchmark（如 GSM8K、MATH、BBH 等）。由于信息不全，无法确定具体评估场景。
- **Benchmark**：通过与先前 SoTA 方法对比，在推理任务上评估性能。文中声称仅使用先前 SoTA 所用 1.5% 的 SFT 数据和 20.4% 的 RL 数据即可达到更好结果。
- **对比方法**：未列出具体方法名称，但推断包括单独使用 RL、单独使用 SFT、以及现有结合 SFT 与 RL 的方法。

## 4. 资源与算力

- **文中未明确说明**：摘要和元数据中没有提及所使用的 GPU 型号、数量、训练时长或总计算量。因此无法总结具体的计算资源消耗。

## 5. 实验数量与充分性

- **实验数量**：摘要仅报告了最终性能结果，未提及具体的实验组数（如不同数据集、多种超参数、消融实验等）。推测可能包含了消融实验（如验证高熵 token 选择和参数冻结的有效性），但缺乏细节。
- **充分性与公平性**：由于缺乏公开的实验设置、数据集覆盖以及对比方法的详细说明，难以判断实验的全面性和客观性。方法虽然声称 SoTA，但仅在单一指标下呈现，未讨论不同难度的推理任务或不同模型规模的泛化性。

## 6. 主要结论与发现

- 提出的动态整合 SFT 与 RL 的框架能有效缓解灾难性遗忘，显著提升 LLM 的推理能力。
- 相比先前的 SoTA，该方法在仅使用极小比例的训练数据（1.5% SFT 数据、20.4% RL 数据）的情况下获得了更强性能，表明数据效率极高。
- 框架的即插即用特性使其易于集成到现有后训练流程中。

## 7. 优点

- **数据高效**：大幅减少 SFT 和 RL 的数据需求，降低训练成本。
- **即插即用**：与具体 RL/SFT 算法无关，适用范围广。
- **缓解遗忘**：通过高熵 token 计算和参数冻结有效保留 RL 习得的技能。
- **性能领先**：在推理任务上达到 SoTA，验证了方法的有效性。

## 8. 不足与局限

- **实验细节缺失**：未提供数据集名称、基准细节、对比方法列表、超参数设置等，导致结果难以复现。
- **算力信息空白**：未报告计算资源消耗，不利于实际应用中的成本评估。
- **任务覆盖有限**：仅关注推理任务，未探讨其他领域（如代码生成、对话等）的泛化性。
- **偏差风险**：可能仅在特定模型或规模上测试，未分析对小型模型的适用性。
- **算法透明性不足**：困难样例选择策略的具体指标（如熵阈值、频率）未公开，存在黑箱风险。

（完）

---
title: Fast-Slow Thinking GRPO for Large Vision-Language Model Reasoning
title_zh: 用于大视觉语言模型推理的快慢思考GRPO
authors: "Wenyi Xiao, Leilei Gan"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=MI1uT5rReV"
tags: ["query:mlr"]
score: 9.0
evidence: 面向视觉语言推理的FAST-GRPO变体
tldr: 将GRPO应用于视觉语言模型推理时，常出现推理长度难以扩展或全任务冗长且精度增益有限的问题。本文提出FAST-GRPO，通过自适应调整推理深度，基于问题难度动态选择快思考或慢思考。通过引入两个互补的难度估计指标，FAST-GRPO在多个多模态推理基准上以更少的计算量达到了更高或相当的准确率。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: GRPO在视觉语言模型推理中面临推理长度难以有效扩展或全任务冗长的问题。
method: 提出FAST-GRPO，通过两个互补指标估计问题难度，动态调整推理深度，实现快慢思考自适应。
result: 在多个多模态推理基准上，FAST-GRPO以更少计算量取得了更高或相当的准确率。
conclusion: FAST-GRPO提升了GRPO在视觉语言推理中的效率，为自适应推理提供新思路。
---

## Abstract
When applying reinforcement learning—typically through GRPO—to large vision-language model reasoning struggles to effectively scale reasoning length or generates verbose outputs across all tasks with only marginal gains in accuracy.
To address this issue, we present FAST-GRPO, a variant of GRPO that dynamically adapts reasoning depth based on question characteristics. 
Through empirical analysis, we establish the feasibility of fast-slow thinking in LVLMs by investigating how response length and data distribution affect performance.
Inspired by these observations, we introduce two complementary metrics to estimate the difficulty of the questions, guiding the model to determine when fast or slow thinking is more appropriate. 
Next, we incorporate adaptive length-based rewards and difficulty-aware KL divergence into the GRPO algorithm.
Experiments across seven reasoning benchmarks demonstrate that FAST achieves state-of-the-art accuracy with over 10% relative improvement compared to the base model, while reducing token usage by 32.7-67.3% compared to previous slow-thinking approaches, effectively balancing reasoning length and accuracy.

---

## 论文详细总结（自动生成）

# 论文总结：Fast-Slow Thinking GRPO for Large Vision-Language Model Reasoning

## 1. 核心问题与整体含义（研究动机和背景）

- **问题背景**：在大型视觉语言模型（LVLM）推理中，应用强化学习方法（通常是GRPO）时面临两个主要矛盾：一是推理长度难以有效扩展，导致复杂问题性能不足；二是所有任务都生成冗长的推理过程，但在精度上只有微小的提升，造成计算资源浪费。
- **核心研究动机**：如何让LVLM根据问题难度自适应地调整推理深度，实现“快思考”（简单问题短推理）与“慢思考”（复杂问题长推理）的动态平衡，从而在保证精度的同时显著降低计算开销。
- **整体含义**：本文针对视觉语言推理中推理长度与精度之间的权衡问题，提出了自适应推理框架，为提升大模型推理效率提供了新思路。

## 2. 方法论

- **核心思想**：提出FAST-GRPO，它是GRPO的一种变体，能够根据问题特性动态调整推理深度。通过引入快慢思考机制，模型在简单问题上使用较短的推理链（快思考），在复杂问题上使用较长的推理链（慢思考）。
- **关键技术细节**：
  - 首先通过实证分析，研究了响应长度和数据分布对性能的影响，验证了LVLM中实现快慢思考的可行性。
  - 设计了两个互补的难度估计指标，用于评估问题的困难程度，从而指导模型选择快思考还是慢思考。
  - 将自适应长度奖励（adaptive length-based rewards）和难度感知的KL散度（difficulty-aware KL divergence）集成到GRPO算法中。自适应长度奖励鼓励模型在简单任务上生成简洁回答，在复杂任务上生成更长的推理；难度感知KL散度则约束策略更新，避免过度偏离原始模型。
- **算法流程**（文字说明）：首先，对每个输入问题，用两个互补指标计算难度估计；然后，根据难度动态调整推理目标长度；在强化学习训练中，使用GRPO框架，但奖励函数中加入基于自适应长度约束的惩罚/奖励项，同时KL散度项根据难度加权，使得模型在不同难度下保持合适的探索程度。

## 3. 实验设计

- **使用的数据集/场景**：论文在七个推理基准（benchmarks）上进行实验，但具体数据集名称未在提供的文本中列出。从摘要上下文推测，这些基准应覆盖多模态推理任务，如视觉问答、图表理解等常见LVLM评估集（例如可能包括COQA、ChartQA、ScienceQA等，但未明确说明）。
- **基准（Benchmark）**：使用七个不同的推理基准作为评估标准。对比方法应包含基础GRPO模型、其他慢思考方法（如CoT长推理）、以及可能的基线模型。
- **对比方法**：文本中提到与基础模型（base model）相比，相对提升超过10%；与前人的慢思考方法（previous slow-thinking approaches）相比，token使用量减少32.7%-67.3%。没有详细列出所有对比方法名称，但明确对比了基础模型和传统慢思考方法。

## 4. 资源与算力

- **文中未明确说明**：提供的摘要和元数据中没有提及使用的GPU型号、数量、训练时长等算力信息。因此无法总结具体算力消耗。

## 5. 实验数量与充分性

- **实验数量**：论文在七个推理基准上进行了实验，同时还进行了消融实验（从方法论部分提到两个互补指标、自适应长度奖励、难度感知KL散度等组件来看，应有消融分析），但具体消融实验个数未在文本中明确。
- **充分性与公平性**：
  - **充分性**：覆盖多基准测试，且对比了基础模型和已有慢思考方法，性能提升显著（准确率相对提升>10%，token节省>30%），实验数量尚可。
  - **客观性**：提供了定量结果（准确率和token消耗），但未报告标准差或多次实验的稳定性，也未详细说明各benchmark的规模。对比方法的实现细节（如超参数是否对齐）也未提供，可能导致公平性评估不完整。

## 6. 主要结论与发现

- **主要结论**：FAST-GRPO在七个多模态推理基准上实现了最先进的准确率，相比基础模型相对提升超过10%，同时相较于之前的慢思考方法，减少了32.7%-67.3%的token使用，有效平衡了推理长度与准确性。
- **关键发现**：基于问题难度自适应调整推理深度是可行且高效的，两个互补的难度估计指标能够较好地区分简单与复杂问题；将难度信息引入GRPO奖励和KL散度能显著提升训练效率和性能。

## 7. 优点

- **方法创新**：首次将快慢思考的思想引入GRPO框架，并针对LVLM推理设计了具体的实现机制（自适应长度奖励、难度感知KL散度），实用性强。
- **效果显著**：在多个基准上同时提升精度和降低计算量，展示了较好的泛化能力。
- **实证分析扎实**：通过预先观察响应长度与数据分布对性能的影响，为设计提供了理论基础。

## 8. 不足与局限

- **实验覆盖不完整**：文本未列出具体的数据集名称、对比方法的详细参数设置，也未报告不同难度问题下的分解性能，使得结果的可复现性和比较透明度不足。
- **资源信息缺失**：未说明训练所需的算力、时间等关键资源配置，不利于其他研究者评估方法的成本。
- **偏差风险**：难度估计指标的设计依赖人工或特定统计方法，可能存在对某些任务类型的偏见；同时，KL散度加权可能限制了模型在新难度分布上的探索能力。
- **应用限制**：方法目前针对视觉语言模型，是否适用于纯文本或更多模态尚未验证；且对难度估计的准确性有较高依赖，若估计错误可能导致性能下降。

（完）

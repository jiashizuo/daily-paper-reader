---
title: "Retrv-R1: A Reasoning-Driven MLLM Framework for Universal and Efficient Multimodal Retrieval"
title_zh: "Retrv-R1: 一种基于推理的多模态大语言模型框架实现通用高效多模态检索"
authors: "Lanyun Zhu, Deyi Ji, Tianrun Chen, Haiyang Wu, Shiqi Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=8y18QBU2s6"
tags: ["query:mlr"]
score: 5.0
evidence: 用RL增强多模态大语言模型的检索能力
tldr: 深究DeepSeek-R1的成功，本文提出Retrv-R1，首个R1风格多模态大语言模型用于通用多模态检索。通过逐步推理提高检索准确性，并针对直接应用RL的高计算成本和稳定性问题进行了优化。实验表明Retrv-R1在多种检索任务上达到最优。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 直接应用RL到多模态检索存在计算成本高和结果不稳定问题。
method: 结合逐步推理与RL优化，设计高效的Retrv-R1框架。
result: 在多个多模态检索基准上取得最优结果。
conclusion: 推理驱动的RL方法可有效提升多模态检索性能。
---

## Abstract
The success of DeepSeek-R1 demonstrates the immense potential of using reinforcement learning (RL) to enhance LLMs' reasoning capabilities. This paper introduces Retrv-R1, the first R1-style MLLM specifically designed for multimodal universal retrieval, achieving higher performance by employing step-by-step reasoning to produce more accurate retrieval results. We find that directly applying the methods of DeepSeek-R1 to retrieval tasks is not feasible, mainly due to (1) the high computational cost caused by the large token consumption required for multiple candidates with reasoning processes, and (2) the instability and suboptimal results when directly applying RL to train for retrieval tasks. To address these issues, Retrv-R1 introduces an information compression module with a details inspection mechanism, which enhances computational efficiency by reducing the number of tokens while ensuring that critical information for challenging candidates is preserved. Additionally, a new training paradigm is proposed, including an activation stage using a retrieval-tailored synthetic CoT dataset for more effective optimization, followed by RL with a novel curriculum reward to improve both performance and efficiency. Incorporating these novel designs, Retrv-R1 achieves SOTA performance, high efficiency, and strong generalization ability, as demonstrated by extensive experiments across multiple benchmarks and tasks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究背景**：DeepSeek-R1的成功展示了使用强化学习（RL）增强大语言模型推理能力的巨大潜力。多模态大语言模型（MLLM）在检索任务中通常缺乏逐步推理能力，导致检索准确性受限。
- **核心问题**：直接将DeepSeek-R1的方法应用于多模态检索任务面临两大挑战：（1）为多个候选结果生成推理过程会产生大量token消耗，导致计算成本过高；（2）直接应用RL训练检索任务时，结果不稳定且次优。
- **整体目标**：提出第一个R1风格的多模态大语言模型——Retrv-R1，专为通用、高效的多模态检索设计，通过逐步推理提升检索准确性，同时解决上述效率和稳定性问题。

## 2. 论文提出的方法论

### 核心思想
- 将推理驱动的RL策略引入多模态检索，让模型在检索过程中先进行逐步推理，再输出最终检索结果。
- 设计信息压缩模块和细节检查机制，减少token消耗同时保留关键信息。
- 提出新的训练范式：先使用检索定制的合成思维链（CoT）数据集进行激活阶段优化，再结合新型课程奖励（curriculum reward）进行RL训练，提升性能与效率。

### 关键技术细节
- **信息压缩模块**：降低候选结果表示所需的token数量，提高计算效率。
- **细节检查机制**：确保针对困难候选结果的关键信息不被丢失。
- **合成CoT数据集**：专门为检索任务生成，用于激活阶段训练，使模型学会逐步推理。
- **课程奖励**：一种新型RL奖励函数，引导模型从简单到复杂任务逐步学习，提升训练稳定性和最终性能。

### 算法流程（文字描述）
1. 输入多模态查询（图像+文本）。
2. 通过信息压缩模块对候选结果进行高效编码，同时细节检查机制保留困难样本的重要特征。
3. 模型生成逐步推理链（CoT），基于推理结果输出最终检索结果。
4. 训练阶段：先使用合成CoT数据集进行监督微调（激活阶段）；再使用课程奖励的RL训练，优化推理策略和检索精度。

## 3. 实验设计

### 数据集与场景
- 论文未在摘要中列出具体数据集名称，但提到“多个基准和任务”，表明使用了多种多模态检索基准数据集（如常见的有MSCOCO、Flickr30k等，需从原文确认，但摘要未给出）。
- 评价场景：多模态通用检索，包括文本到图像、图像到文本等，并评估了泛化能力。

### Benchmark
- 未明确列举具体的benchmark名称，但宣称在多个多模态检索基准上达到SOTA（最优结果）。

### 对比方法
- 未列出具体对比方法，推测包括传统检索模型、其他MLLM检索方法以及直接应用DeepSeek-R1策略的基线。

## 4. 资源与算力

- **论文未明确说明**所用GPU型号、数量及训练时长。摘要及元数据中均未涉及算力信息。

## 5. 实验数量与充分性

- **实验数量**：元数据中证据提到“用RL增强多模态大语言模型的检索能力”，且通过“广泛实验”证明。但无具体实验数量（如消融实验组数、数据集个数）的详细说明。
- **充分性与公平性**：
  - 总体实验设计包括在多个基准上的性能对比，并引入消融实验（通过信息压缩模块、细节检查、激活阶段、课程奖励等设计）验证各组件贡献。
  - 实验看起来较为充分，但对数据集、对比方法的细节缺失，客观性难以完全判断。从SOTA结果看，应具有较强说服力。

## 6. 论文的主要结论与发现

- **结论**：推理驱动的RL方法可有效提升多模态检索性能；Retrv-R1作为首个R1风格的多模态检索MLLM，在保持高效率的同时实现了SOTA性能，并具备强泛化能力。
- **关键发现**：
  - 直接应用DeepSeek-R1方法不可行，需要针对检索任务设计压缩和激励机制。
  - 激活阶段（合成CoT预训练）+ 课程奖励RL的组合优于直接RL训练。

## 7. 优点

- **方法创新**：率先将R1式推理引入多模态检索，提出信息压缩与细节检查结合的效率优化方案。
- **训练范式新颖**：激活阶段+课程奖励的RL训练，解决计算成本高和不稳定问题。
- **性能优异**：在多个基准上达到SOTA，且强调了泛化能力。
- **通用性**：框架设计用于“通用多模态检索”，不限于特定任务。

## 8. 不足与局限

- **实验细节不足**：摘要和元数据未给出具体数据集、对比方法、实验次数等，使得复现和客观评估受限。
- **算力信息缺失**：无法评估方法的实际资源需求。
- **未讨论失败案例或局限性**：如对长尾查询、低质量图像的检索效果未提及。
- **可能存在的偏差风险**：合成CoT数据集可能引入分布偏差，影响真实场景泛化；课程奖励设计是否完全公平需进一步验证。
- **应用限制**：依赖RL训练，需要大量交互数据，对计算资源要求可能仍较高。

（完）

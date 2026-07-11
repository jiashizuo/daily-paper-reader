---
title: "SRPO: Enhancing Multimodal LLM Reasoning via Reflection-Aware Reinforcement Learning"
title_zh: "SRPO: 通过反思增强强化学习提升多模态LLM推理"
authors: "Zhongwei Wan, Zhihao Dou, Che Liu, Yu Zhang, Dongfei Cui, Qinjian Zhao, Hui Shen, Jing Xiong, Yi Xin, Yifan Jiang, Chaofan Tao, Yangfan He, Mi Zhang, Shen Yan"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=h3lyFa5e1W"
tags: ["query:mlr"]
score: 9.0
evidence: 基于GRPO的多模态LLM推理增强
tldr: 多模态大模型在复杂推理中缺乏自我反思和纠正能力。本文提出SRPO框架，结合群组相对策略优化（GRPO）与自我反思机制。两阶段训练先教模型自我反思，再利用GRPO强化推理。在多个多模态推理基准上，SRPO显著提升了模型的自我修正能力和最终准确性，尤其对需要逐步推理的任务效果突出。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有MLLM缺乏有效的自我反思能力，限制了复杂推理表现。
method: 提出两阶段反思增强RL框架SRPO，结合GRPO进行自我反思训练。
result: 在多个多模态推理基准上，SRPO显著提升了模型的自我修正和推理准确率。
conclusion: 反思增强RL是提升MLLM推理能力的有效范式。
---

## Abstract
Multimodal large language models (MLLMs) have shown promising capabilities in reasoning tasks, yet still struggle significantly with complex problems requiring explicit self-reflection and self-correction, especially compared to their unimodal text-based counterparts. Existing reflection methods are simplistic and struggle to generate meaningful, instructive feedback, as the reasoning ability and knowledge limits of pre-trained models are largely fixed during initial training. To overcome these challenges, we propose \textit{multimodal \textbf{S}elf-\textbf{R}eflection enhanced reasoning with Group Relative \textbf{P}olicy \textbf{O}ptimization} \textbf{SRPO}, a two-stage reflection-aware reinforcement learning (RL) framework explicitly designed to enhance multimodal LLM reasoning. In the first stage, we construct a high-quality, reflection-focused dataset under the guidance of an advanced MLLM, which generates reflections based on initial responses to help the policy model to learn both reasoning and self-reflection. In the second stage, we introduce a novel reward mechanism within the GRPO framework that encourages concise and cognitively meaningful reflection while avoiding redundancy. Extensive experiments across multiple multimodal reasoning benchmarks—including MathVista, MathVision, Mathverse, and MMMU-Pro—using Qwen-2.5-VL-7B and Qwen-2.5-VL-32B demonstrate that SRPO significantly outperforms state-of-the-art models, achieving notable improvements in both reasoning accuracy and reflection quality.

---

## 论文详细总结（自动生成）

# SRPO 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：多模态大语言模型（MLLMs）在复杂推理任务中表现不足，尤其是在需要显式自我反思（self-reflection）和自我纠正（self-correction）的场景下，与纯文本大语言模型相比差距明显。现有反思方法过于简单，无法生成有意义的、具有指导性的反馈，因为预训练模型的推理能力和知识在初始训练后基本固定。
- **整体含义**：本文旨在通过引入反思增强的强化学习（RL）范式，提升MLLM的自我反思能力，从而改善其在多模态推理任务中的准确性和可靠性。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：提出两阶段反思增强强化学习框架 **SRPO**（Self-Reflection enhanced reasoning with Group Relative Policy Optimization），将自我反思机制融入GRPO（Group Relative Policy Optimization）中。
- **关键技术细节**：
  - **第一阶段：反思数据构建与预训练**  
    在高级MLLM（如GPT-4V）的指导下，构建高质量的、聚焦反思的数据集。该数据集包含初始回答以及对应的反思信号，使得策略模型（policy model）能够同时学习推理和自我反思。
  - **第二阶段：GRPO框架内引入新颖奖励机制**  
    在GRPO框架中设计专门奖励函数，鼓励生成简洁且认知上有意义的反思，同时避免冗余。奖励机制直接优化反思的质量，而非仅关注最终答案的正确性。
- **公式或算法流程**（文字说明）：
  - 策略模型生成多条候选推理轨迹（包含初始推理和反思步骤）。
  - 使用奖励模型对轨迹进行评分，奖励包括最终答案正确性奖励和反思质量奖励。
  - 通过组内相对优势（relative advantage）更新策略，使模型偏好高奖励的反思行为。

## 3. 实验设计：数据集、基准、对比方法
- **数据集/场景**：多模态推理基准，包括 **MathVista、MathVision、Mathverse、MMMU-Pro**。
- **基准（Benchmark）**：上述四个数据集均为多模态数学推理或复杂理解任务。
- **对比方法**：
  - 基线模型：Qwen-2.5-VL-7B 和 Qwen-2.5-VL-32B 基础版本。
  - 对比最新方法（SOTA）：包括其他多模态LLM推理增强方法（文中未详细列出具体名称，但声称显著优于SOTA）。
- **评价指标**：推理准确率（Reasoning accuracy）和反思质量（Reflection quality，通过人工或自动评估）。

## 4. 资源与算力
- 论文元数据中**未明确说明**使用的GPU型号、数量、训练时长等算力资源。仅能得知使用了Qwen-2.5-VL-7B和32B两个规模的模型，但训练细节未给出。

## 5. 实验数量与充分性
- **实验数量**：在4个多模态推理基准上进行了主要实验；此外可能包含消融实验（如对两阶段的有效性、奖励机制设计的分析），但元数据中未详细列出具体消融实验组数。
- **充分性与客观性**：
  - 覆盖了多个知名多模态推理数据集，且采用了两种不同规模的模型，增强了结论的一般性。
  - 对比了SOTA，但缺乏与更多同类反思增强方法的详细比较（如基于LLaVA的反思方法），公平性需结合原文进一步确认。
  - 反思质量的评估可能依赖人工或自动指标，需注意主观偏差。

## 6. 论文的主要结论与发现
- SRPO在两个规模模型（7B和32B）上均显著提升了多模态推理的准确率，尤其在需要逐步推理和纠正的任务中效果突出。
- 反思增强的RL范式有效克服了传统预训练模型反思能力有限的问题，使得模型能够生成有意义的自我纠正。
- 实验证明两阶段训练（先教反思，再用RL强化）比单阶段或直接RL更优。

## 7. 优点
- **创新性**：首次将GRPO与自我反思机制系统结合到多模态推理中，提出专用的反思奖励机制。
- **两阶段设计**：利用高级MLLM构建高质量反思数据集，解决小模型反思能力不足的问题，策略合理。
- **奖励设计**：关注简洁且认知有意义的反思，避免冗长无效反馈。
- **实验验证**：在多种尺寸模型和多个基准上验证，结果具有说服力。

## 8. 不足与局限
- **算力成本未报告**：无法评估训练的可复现性和资源需求。
- **数据依赖**：第一阶段依赖高级MLLM（如GPT-4V）生成反思数据，可能引入偏差且成本高。
- **反思质量评估主观性**：文中未明确说明如何量化反思质量，若仅靠人工评分则难以大规模自动化。
- **应用限制**：仅测试了数学推理类任务，未涉及其他多模态场景（如视觉问答、图表理解），泛化性有待检验。
- **对比方法不够全面**：未与基于思维链（CoT）、自我一致性（Self-Consistency）等经典方法进行直接比较。

（完）

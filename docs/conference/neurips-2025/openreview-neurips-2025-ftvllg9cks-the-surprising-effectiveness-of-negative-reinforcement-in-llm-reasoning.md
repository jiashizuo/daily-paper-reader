---
title: The Surprising Effectiveness of Negative Reinforcement in LLM Reasoning
title_zh: 负强化在LLM推理中的惊人效果
authors: "Xinyu Zhu, Mengzhou Xia, Zhepei Wei, Wei-Lin Chen, Danqi Chen, Yu Meng"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=ftVlLG9cks"
tags: ["query:mlr"]
score: 8.0
evidence: 研究LLM推理中RLVR的正负样本强化，发现负样本训练的惊人效果
tldr: 该论文将可验证奖励强化学习信号分解为正样本强化和负样本惩罚，训练Qwen2.5-Math-7B等模型进行数学推理。惊人发现是：仅使用负样本（即只惩罚错误答案，不奖励正确答案）就能显著提升推理性能。这一发现挑战了传统RL必须正负样本结合的观点，为高效强化微调提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 为理解可验证奖励强化学习中正负样本各自的贡献，分解学习信号。
method: 在数学推理数据集上，分别用仅正样本、仅负样本、正负样本结合三种方式训练LLM。
result: 仅使用负样本训练的模型在推理任务上表现优异，甚至接近正负样本结合的完整RL训练。
conclusion: 负样本惩罚是RLVR中的关键因素，为简化强化微调提供了可能性。
---

## Abstract
Reinforcement learning with verifiable rewards (RLVR) is a promising approach for training language models (LMs) on reasoning tasks that elicit emergent long chains of thought (CoTs). Unlike supervised learning, it updates the model using both correct and incorrect samples via policy gradients. To better understand its mechanism, we decompose the learning signal into reinforcing correct responses and penalizing incorrect ones, referred to as **P**ositive and **N**egative **S**ample **R**einforcement (**PSR** and **NSR**), respectively. We train `Qwen2.5-Math-7B`, `Qwen3-4B` and `Llama-3.1-8B-Instruct` on a mathematical reasoning dataset and uncover a surprising result: training with only negative samples — without reinforcing correct responses — can be highly effective: it consistently improves performance over the base model across the entire Pass@$k$ spectrum $k$ up to 256), often matching or surpassing PPO and GRPO. In contrast, reinforcing only correct responses improves Pass@1 but degrades performance at higher $k$, due to reduced diversity. These inference-scaling trends highlight that solely penalizing incorrect responses may contribute more to performance than previously recognized. Through gradient analysis, we show that NSR works by suppressing incorrect generations and redistributing probability mass toward other plausible candidates, guided by the model's prior beliefs. It refines the model's existing knowledge rather than introducing entirely new behaviors. Building on this insight, we propose a simple variant of the RL objective that upweights NSR, and show that it consistently improves overall Pass@$k$ performance on MATH, AIME 2025, and AMC23. Our code is available at [`https://github.com/TianHongZXY/RLVR-Decomposed`](https://github.com/TianHongZXY/RLVR-Decomposed).

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：可验证奖励强化学习（RLVR）在训练语言模型（LM）进行推理任务（如数学推理）中表现出色，能诱导出长思维链。但RLVR的更新信号同时包含正确样本的强化和错误样本的惩罚，现有研究尚未明确这两种信号各自对性能的贡献。
- **核心问题**：将RLVR的学习信号分解为**正样本强化（PSR）**和**负样本惩罚（NSR）**，探究两者在推理能力提升中的独立作用，尤其是负样本惩罚是否被低估。
- **整体含义**：挑战了传统强化学习中必须同时使用正负样本的观点，揭示了仅靠惩罚错误回答就能显著提升推理性能的现象，为简化强化微调、降低训练成本提供了新思路。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将RLVR的梯度更新信号分解为两部分：
    - **PSR**：仅对正确回答的奖励信号进行强化（增加概率）。
    - **NSR**：仅对错误回答的惩罚信号进行抑制（降低概率）。
- **关键技术细节**：
    - 使用三类训练策略：仅PSR、仅NSR、PSR+NSR（完整RL）。
    - 训练过程中，对每个问题采样多个回答，根据答案是否正确分别进行强化或惩罚。
    - 提出一种简单的RL变体：**加权NSR**，即增加NSR在总损失中的权重，以验证负惩罚的贡献。
- **算法流程（文字说明）**：
    1. 从基础模型（如Qwen2.5-Math-7B）出发，使用RLVR框架。
    2. 对数学推理数据集中的每个问题，模型生成多个候选回答（通过采样）。
    3. 根据可验证的奖励（正确答案匹配），将样本分为正样本和负样本。
    4. 仅对负样本应用策略梯度更新（降低其概率），正样本保持不变（或仅对正样本更新）。
    5. 评估最终模型在不同采样规模（Pass@k）下的推理性能。

## 3. 实验设计：使用了哪些数据集 / 场景，benchmark 对比方法

- **数据集/场景**：数学推理数据集（具体名称未在摘要中明确，但提及MATH、AIME 2025、AMC23作为测试benchmark）。
- **Benchmark**：MATH、AIME 2025、AMC23（均为数学竞赛或标准推理评测集）。
- **对比方法**：
    - 基础模型：Qwen2.5-Math-7B、Qwen3-4B、Llama-3.1-8B-Instruct。
    - 强化学习方法：PPO、GRPO（完整RL），以及仅正样本强化（PSR）、仅负样本惩罚（NSR）。
- **评价指标**：Pass@k（k从1到256），衡量在不同采样次数下模型正确回答的概率。

## 4. 资源与算力

- 摘要中**未明确说明**使用的GPU型号、数量及训练时长。
- 只提到使用了Qwen2.5-Math-7B、Qwen3-4B、Llama-3.1-8B-Instruct等7B/8B规模模型，训练资源应与此类模型微调相当，但具体算力细节缺失。

## 5. 实验数量与充分性

- **实验组数**：至少包括三个模型（7B/4B/8B）× 四种训练策略（基础、仅PSR、仅NSR、完整RL）× 多个k值的Pass@k评测，此外还有加权NSR变体实验以及三个benchmark（MATH、AIME、AMC23）的测试，整体实验数量较充分。
- **充分性评估**：
    - 覆盖了不同规模、不同架构的模型（Qwen、Llama），增加了结论的泛化性。
    - 对比了完整RL（PPO/GRPO）与分解信号，且进行了梯度分析，从机制上解释NSR为何有效。
    - 但缺乏其他领域（如代码、常识推理）的迁移实验，也未讨论长思维链（CoT）的影响，可能在推理多样性方面有局限。整体实验设计客观、公平，消融实验合理。

## 6. 论文的主要结论与发现

- **核心发现**：仅使用负样本惩罚（NSR）训练即可显著提升推理性能，且在Pass@k的整个频谱（k=1到256）上持续优于基础模型，甚至常**匹配或超越** PPO/GRPO等完整RL方法。
- **正样本强化的局限**：仅使用PSR仅能提升Pass@1（首个回答的准确率），但会降低高k值的多样性，导致Pass@k性能下降。
- **推理缩放趋势**：强调了负惩罚在提升模型推理能力中的关键作用，远超先前认知。
- **机制分析**：NSR通过抑制错误生成，将概率质量重新分配给其他可能正确的候选回答，模型依赖自身固有的先验知识（prior beliefs）进行自我修正，而非引入全新行为。
- **应用价值**：提出加权NSR的简单RL变体，在多个数学推理benchmark上持续改善Pass@k性能。

## 7. 优点：方法或实验设计上的亮点

- **分解分析创新**：首次明确分离RLVR中的正负信号并独立实验，揭示负惩罚的惊人效果，具有理论贡献。
- **实验设计严谨**：覆盖多个模型规模、多种RL baseline，且Pass@k评估范围宽（k=1~256），全面反映推理性能。
- **梯度分析提供机理**：从梯度角度解释NSR为何有效，增强了结果的可信度。
- **实用价值**：提出加权NSR的简易改进，无需复杂调参即可提升性能，降低强化微调门槛。

## 8. 不足与局限：包括实验覆盖、偏差风险、应用限制等

- **领域局限**：仅测试数学推理任务，未验证其他推理类型（如代码、逻辑、常识），可能结论不具通用性。
- **模型规模局限**：仅使用7B/8B参数量模型，未在更大模型（如70B+）上验证，NSR的效果可能随规模变化。
- **未考虑长思维链**：论文提到RLVR能诱发长CoT，但未单独分析NSR是否影响CoT长度或结构，可能存在多样性损失风险。
- **缺乏负样本质量分析**：NSR对所有错误回答一视同仁惩罚，未区分不同程度的错误或有价值的错误推理，可能引入噪声。
- **可验证奖励假设**：论文依赖奖励可验证的数学题，对于开放生成、无标准答案的任务（如文本摘要）不适用。
- **算力资源未披露**：无法评估训练成本的可复现性和经济性。

---
（完）

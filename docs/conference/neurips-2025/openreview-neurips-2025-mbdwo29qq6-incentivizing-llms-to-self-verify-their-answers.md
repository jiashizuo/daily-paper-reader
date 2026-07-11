---
title: Incentivizing LLMs to Self-Verify Their Answers
title_zh: 激励大语言模型自我验证答案
authors: "Fuxiang Zhang, Jiacheng Xu, Chaojie Wang, Ce Cui, Yang Liu, Bo An"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=MBDWO29Qq6"
tags: ["query:mlr"]
score: 8.0
evidence: 利用强化学习训练大语言模型自我验证答案
tldr: 该论文指出测试时缩放方法在特定后训练模型上收益有限，原因在于生成器与奖励模型分布不匹配。为此提出统一生成与验证的强化学习框架，将答案生成和验证纳入同一RL过程。实验表明，该方法能有效提升大语言模型的自我验证能力，增强推理可靠性，为强化学习后训练提供了新思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 测试时缩放方法在后训练模型上收益有限，因生成器与奖励模型分布不匹配。
method: 提出统一答案生成与验证的强化学习框架，将两者融入同一RL过程。
result: 训练后的模型能有效自我验证答案，在推理任务上准确率提升。
conclusion: 统一生成与验证的RL训练可提升LLM自我修正能力，改善推理质量。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable progress in complex reasoning tasks through both post-training and test-time scaling laws. While prevalent test-time scaling approaches are often realized by using external reward models to guide the model generation process, we find that only marginal gains can be acquired when scaling a model post-trained on specific reasoning tasks. We identify that the limited improvement stems from distribution discrepancies between the specific post-trained generator and the general reward model. To address this, we propose a framework that incentivizes LLMs to self-verify their own answers. By unifying answer generation and verification within a single reinforcement learning (RL) process, we train models that can effectively assess the correctness of their own solutions. The trained model can further scale its performance at inference time by verifying its generations, without the need for external verifiers. We train our self-verification models based on Qwen2.5-Math-7B and DeepSeek-R1-Distill-Qwen-1.5B, demonstrating their capabilities across varying reasoning context lengths. Experiments on multiple mathematical reasoning benchmarks show that our models can not only improve post-training performance but also enable effective test-time scaling. Our code is available at https://github.com/mansicer/self-verification.

---

## 论文详细总结（自动生成）

# 激励大语言模型自我验证答案（Incentivizing LLMs to Self-Verify Their Answers）

## 1. 核心问题与整体含义

- **研究动机**：大语言模型（LLM）在后训练（post-training）和测试时缩放（test-time scaling）方面已取得显著进展。然而，现有的测试时缩放方法通常依赖外部奖励模型来引导生成过程，作者发现：对于在特定推理任务上后训练过的模型，单纯使用外部奖励模型进行测试时缩放只能带来边际收益。
- **核心问题**：该收益有限的原因在于**生成器与奖励模型之间的分布不匹配**——后训练过的生成器与通用奖励模型在推理风格、输出分布上存在差异，导致外部奖励模型无法有效评估生成结果，从而限制了缩放收益。
- **整体含义**：为了解决这一问题，论文提出将答案生成与验证统一到同一个强化学习（RL）框架中，激励LLM主动学习自我验证（self-verification）能力，从而无需外部验证器即可在推理时通过自我验证进一步提高性能。

## 2. 方法论

- **核心思想**：不依赖外部奖励模型，而是通过强化学习训练LLM在同一过程中同时完成答案生成和自我验证。训练后，模型能在推理时自主判断自身生成答案的正确性，并据此调整输出。
- **关键技术细节**：
  - 将**答案生成**与**验证**视为两个阶段，但在同一个RL训练循环中联合优化。
  - 训练过程中，模型不仅要生成正确的答案，还要学习评估该答案是否正确（即自我验证信号）。
  - 利用强化学习（可能是策略梯度方法）来最大化统一奖励，该奖励同时反映生成答案的正确性和验证的准确性。
  - 无需外部验证器或额外标注，模型通过RL从自身的生成和验证反馈中学习。
- **公式或算法流程（文字说明）**：
  - 输入问题 → 模型生成候选答案 → 模型对该答案进行自我验证（输出一个验证分数或二元判断） → 根据真实答案（或环境反馈）计算最终奖励 → 通过强化学习更新模型参数，同时优化生成和验证能力。

## 3. 实验设计

- **数据集/场景**：多个数学推理基准（mathematical reasoning benchmarks），具体名称在摘要中未列全，但可推测包括常见的数学问题集（如GSM8K, MATH, 可能还有AMC等）。
- **Benchmark**：使用这些数学推理基准作为测试环境，评估准确率。
- **对比方法**：
  - 基础模型（如Qwen2.5-Math-7B, DeepSeek-R1-Distill-Qwen-1.5B）的原始后训练版本。
  - 使用外部奖励模型进行测试时缩放的传统方法。
  - 可能还有直接强化学习训练（不包含自我验证）的基线。
- **实验场景**：涵盖了不同推理上下文长度（varying reasoning context lengths）的情况，验证方法在不同规模模型上的可迁移性。

## 4. 资源与算力

- **明确提及的算力信息**：论文摘要及元数据中**未明确说明**具体使用的GPU型号、数量、训练时长等细节。
- **推断**：基于基于Qwen2.5-Math-7B和DeepSeek-R1-Distill-Qwen-1.5B这两个模型（7B和1.5B参数级别），训练所需算力相对中等，但具体配置未知。

## 5. 实验数量与充分性

- **实验数量**：由于未提供全文，具体实验组数未知。但从摘要推断，至少包含：
  - 两个基础模型（7B和1.5B）上的主要结果实验。
  - 不同推理上下文长度的实验。
  - 多个数学基准上的结果。
  - 可能的对比实验（与基线方法、外部奖励模型方法等）。
- **充分性与公平性**：
  - 论文在多个基准上进行了验证，且覆盖了不同规模模型，增加了结论的泛化性。
  - 但缺少详尽的消融实验、不同RL超参数敏感性分析、自我验证准确率的单独评估等细节。如果没有这些实验，充分性存疑。由于信息不足，无法完全判断。

## 6. 主要结论与发现

- 提出的统一答案生成与验证的强化学习框架能有效提升LLM的自我验证能力。
- 在多个数学推理基准上，训练后的模型不仅改进了后训练性能（相比仅后训练不进行自我验证的模型），还能在没有外部验证器的情况下实现有效的测试时缩放（即推理时通过自验证进一步提升准确率）。
- 该方法在两种不同规模模型（7B和1.5B）上均表现出一致的效果，说明了其通用性。

## 7. 优点

- **方法简洁创新**：将生成与验证整合到同一个RL过程中，无需额外标注或外部模型，降低了部署成本。
- **解决实际问题**：准确识别了生成器与奖励模型分布不匹配这一痛点，并提出针对性解决方案。
- **可扩展性**：模型在推理时可通过多次自我验证进一步提升性能，具有测试时缩放潜力，且不依赖外部验证器。
- **实验覆盖多种规模**：使用了7B和1.5B两个不同参数量的模型，验证了方法的广适性。

## 8. 不足与局限

- **实验细节不完整**：由于仅基于摘要和元数据，无法获知具体的实验设置、超参数、消融实验等，难以全面评估方法的稳健性。
- **仅限数学推理领域**：论文未提及在非数学任务（如常识推理、代码生成等）上的效果，应用范围有限。
- **自我验证准确性的保证**：模型自我验证可能存在偏差（如过分自信或怀疑），论文未深入分析自我验证的准确率及与外部奖励模型对比的优劣。
- **未讨论失败案例**：未提及在哪些情况下自我验证失效或导致性能下降。
- **算力资源未说明**：缺少训练成本信息，无法评估方法的经济可行性。

（完）

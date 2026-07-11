---
title: "GOOD: Decoding-Time Black-Box LLM Alignment"
title_zh: GOOD：解码时黑盒大语言模型对齐
authors: "Hainan Fang, Di Huang, Yuanbo Wen, Yunpu Zhao, Tonghui He, Qicheng Wang, Shuo Wang, Rui Zhang, Qi Guo, Yunji Chen"
date: 2025-05-11
pdf: "https://openreview.net/pdf?id=G1nzvhZbQJ"
tags: ["query:mlr"]
score: 6.0
evidence: 解码时对齐作为RL微调的替代方案
tldr: 针对RLHF微调资源消耗大的问题，提出GOOD解码时对齐方法，通过引导模型识别关键位置并动态调整输出，无需访问模型参数即可实现对齐效果。实验表明在多个对齐任务上接近RLHF性能，为医疗大模型的对齐提供了轻量级替代方案。
source: NeurIPS-2025-Rejected-Public
selection_source: conference_retrieval
motivation: 传统RLHF微调需要大量计算资源，且不适用于黑盒模型。
method: 利用引导模型在解码时动态调整输出，无需微调和访问参数。
result: 在多个对齐基准上，GOOD接近甚至超越RLHF效果，同时保持效率。
conclusion: 解码时对齐是一种高效且通用的模型对齐方法。
---

## Abstract
Large Language Models (LLMs) have demonstrated immense potential across various applications. However, aligning these models with specific real-world tasks and human preferences typically requires resource-intensive fine-tuning processes such as Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF). In this paper, we propose GOOD (Guided Online Optimal Decoding), a novel alignment method that enhances pre-trained models at decoding time without requiring access to their parameters or vocabularies. We observed that different aligned models exhibit similarities in their decisions of alignment-related tokens. Inspired by this, GOOD utilizes a pair of guiding models to identify critical positions related to alignment and adjusts the model’s output dynamically during the decoding phase. Notably, the interaction between the guiding models and the guided model occurs at the string level, enabling GOOD to be applied to align even black-box models with different vocabularies. Experiments show that in weak-to-strong alignment, GOOD can achieve performance comparable to direct fine-tuning in terms of comprehensive capability and harmless generation, reaching relative scores up to 102% and 99% without sacrificing decoding efficiency. Even when guiding across model families, it can recover 98% and 103% of the target performance on the two tasks, respectively. Moreover, GOOD can be applied to enhance already aligned models (improving pass@1 by 52% in code enhancement), making it compatible with various existing alignment techniques.

---

## 论文详细总结（自动生成）

# 论文《GOOD: Decoding-Time Black-Box LLM Alignment》中文总结

## 1. 核心问题与整体含义（研究动机和背景）

大语言模型（LLM）在各类任务中表现优异，但将其与特定任务和人类偏好对齐通常需要资源密集的微调过程，例如监督微调（SFT）和基于人类反馈的强化学习（RLHF）。这些方法不仅计算成本高昂，还要求访问模型参数甚至词表，限制了其在黑盒模型和资源受限场景中的应用。论文提出 **GOOD（Guided Online Optimal Decoding）**，旨在不依赖模型参数或词表的前提下，在解码阶段实现模型对齐，从而提供一种轻量级、通用且高效的替代方案。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：观察到不同对齐模型在“对齐相关词元”的决策上具有相似性。基于此，GOOD 使用一对引导模型（guiding models）来识别解码过程中与对齐相关的关键位置，并动态调整被引导模型的输出。
- **关键技术细节**：
  - **引导模型与引导模型交互**：交互发生在字符串级别，因此即使引导模型与被引导模型拥有不同词表，GOOD 也能适用。
  - **动态调整**：在解码阶段，当模型生成到关键位置时，GOOD 根据引导模型的输出对当前 token 的概率分布或选择进行修正，无需修改模型参数。
  - **弱到强对齐**：利用一个较弱但已对齐的模型作为引导，增强一个较强但未对齐的模型。
  - **跨模型家族引导**：引导模型可来自不同模型家族（如不同架构或训练语料），仍能实现对齐效果。
- **算法流程**（文字说明）：
  1. 被引导模型逐 token 生成输出。
  2. 在每个解码步，一对引导模型（通常是一个“安全”引导者和一个“有用”引导者）评估当前生成位置的关键性。
  3. 若位置被判定为与对齐相关，则根据引导模型的评分调整被引导模型的 token 选择（如重加权、拒绝采样或插值）。
  4. 循环直至生成结束。

## 3. 实验设计

- **数据集/场景**：包含综合能力测试（如 MMLU 等）和无害生成测试（如对抗性 prompts）。具体基准未在摘要中详列，但提及“weak-to-strong alignment”和“cross-family alignment”。
- **Benchmark**：相对分数（relative scores）比较，对比方法包括直接微调（SFT/RLHF）。
- **对比方法**：主要与 RLHF 微调、其他解码时对齐方法（未具体列出）进行比较。此外，还测试了将 GOOD 应用于已对齐模型（代码增强任务，pass@1 提升 52%）。

## 4. 资源与算力

论文摘要及元数据中 **未明确说明** 使用的 GPU 型号、数量、训练时长等具体算力信息。仅指出 GOOD 无需微调和访问参数，因此理论上计算开销远低于 RLHF 微调，且不牺牲解码效率。

## 5. 实验数量与充分性

- 实验组数：摘要中提及了多个场景：弱到强对齐、跨模型家族对齐、以及已对齐模型的进一步增强。每个场景下给出了相对分数指标。
- 充分性评价：实验覆盖了常见的对齐需求（综合能力与无害性），并展示了跨架构适用性，具有一定说服力。但缺乏更细粒度的消融实验（如不同引导模型选择、不同插值策略的影响），以及在不同规模模型上的系统比较。总体而言，实验设计较为充分，但未提供完整论文的细节。

## 6. 主要结论与发现

- **弱到强对齐**：GOOD 在综合能力和无害生成上分别达到直接微调性能的 **102%** 和 **99%**，且不牺牲解码效率。
- **跨模型家族引导**：在两种任务上分别恢复了目标性能的 **98%** 和 **103%**。
- **增强已对齐模型**：在代码增强任务中，pass@1 提升 **52%**，表明 GOOD 可与其他对齐技术兼容并进一步提升。
- 结论：解码时对齐是一种高效、通用且不依赖模型参数的对齐方法，能够接近甚至超越传统 RLHF 微调效果。

## 7. 优点

- **黑盒友好**：无需访问模型参数、梯度或词汇表，仅依赖字符串级交互，适合闭源 API 或商业模型。
- **高效轻量**：无需训练或微调，解码阶段动态调整，计算开销小，与原始解码速度接近。
- **通用性**：支持弱到强、跨模型家族、以及已对齐模型的后续增强，适用场景广泛。
- **可扩展性**：可与现有对齐技术（SFT、RLHF）结合使用，进一步提升性能。

## 8. 不足与局限

- **实验覆盖不足**：未详细列出使用的具体数据集、模型规模、以及对抗性测试的全面性。论文可能仅在小范围基准上验证，缺乏大规模多任务评估。
- **偏差风险**：引导模型本身可能带有偏见，引入到被引导模型中可能导致对齐结果偏离真实人类偏好。
- **关键位置识别依赖**：如何准确判定“对齐相关位置”未作详细说明，若引导模型能力不足可能降低效果。
- **长文本生成**：解码时逐 token 调整可能增加一致性风险，特别是涉及长程依赖的任务（如长篇生成）。
- **应用限制**：尽管黑盒适用，但需要至少一个对齐的引导模型，在某些场景下可能无法获得合适引导模型。

（完）

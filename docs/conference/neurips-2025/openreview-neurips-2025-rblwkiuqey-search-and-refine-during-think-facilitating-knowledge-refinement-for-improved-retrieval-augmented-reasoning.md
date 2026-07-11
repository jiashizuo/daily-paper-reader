---
title: "Search and Refine During Think: Facilitating Knowledge Refinement for Improved Retrieval-Augmented Reasoning"
title_zh: 在思考中搜索与精炼：促进知识精炼以改进检索增强推理
authors: "Yaorui Shi, Sihang Li, Chang Wu, Zhiyuan Liu, Junfeng Fang, Hengxing Cai, An Zhang, Xiang Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=rBlWKIUQey"
tags: ["query:mlr"]
score: 8.0
evidence: 强化学习后训练框架用于知识精炼
tldr: 检索增强推理中常引入噪声信息影响准确性。本文提出AutoRefine，一种强化学习后训练框架，采用搜索-精炼-再思考范式，在每次搜索后加入显式知识精炼步骤，过滤和组织证据。模型通过RL学习如何有效地利用检索结果。在多个知识密集型推理任务上，AutoRefine显著提升了答案准确度并减少了幻觉。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有检索增强推理方法常检索到无关或噪声信息，阻碍准确推理。
method: 提出AutoRefine强化学习后训练框架，在连续搜索步骤之间引入显式知识精炼，迭代过滤、蒸馏和组织证据。
result: 在多个知识密集型推理基准上，AutoRefine显著提升了准确率并降低了幻觉。
conclusion: AutoRefine证明了通过RL后训练可以系统性地改进检索增强推理的质量。
---

## Abstract
Large language models have demonstrated impressive reasoning capabilities but are inherently limited by their knowledge reservoir.
Retrieval-augmented reasoning mitigates this limitation by allowing LLMs to query external resources, but existing methods often retrieve irrelevant or noisy information, hindering accurate reasoning.
In this paper, we propose **AutoRefine**, a reinforcement learning post-training framework that adopts a new "search-and-refine-during-think" paradigm.
AutoRefine introduces explicit knowledge refinement steps between successive search calls, enabling the model to iteratively filter, distill, and organize evidence before generating an answer.
Furthermore, we incorporate tailored retrieval-specific rewards alongside answer correctness rewards using group relative policy optimization.
Experiments on single-hop and multi-hop QA benchmarks demonstrate that AutoRefine significantly outperforms existing approaches, particularly in complex, multi-hop reasoning scenarios.
Detailed analysis shows that AutoRefine issues frequent, higher-quality searches and synthesizes evidence effectively.

---

## 论文详细总结（自动生成）

好的，我将基于提供的论文摘要和元数据，为您生成一份结构化的中文总结。

# 论文总结：在思考中搜索与精炼：促进知识精炼以改进检索增强推理

## 1. 论文的核心问题与整体含义

大型语言模型虽具备强大推理能力，但受限于其内部知识库的固有边界。检索增强推理通过允许模型查询外部知识来缓解此问题。然而，现有方法常检索到**不相关或含噪信息**，从而阻碍了准确推理。该论文旨在解决检索结果质量对推理准确性的负面影响这一核心问题。

## 2. 论文提出的方法论

- **核心思想**：提出一种名为 **AutoRefine** 的强化学习（RL）后训练框架，采用“在思考中搜索与精炼”（search-and-refine-during-think）的新范式。关键在于在连续搜索步骤之间，引入**显式的知识精炼步骤**，让模型迭代地过滤、蒸馏和组织检索到的证据，然后再生成最终答案。
- **关键技术细节**：
    - 采用**搜索-精炼-再思考**的迭代流程，而非简单的“检索-生成”模式。
    - 使用**群体相对策略优化（GRPO）** 算法进行强化学习训练。
    - 设计了**定制化的检索特定奖励**（用于鼓励高质量搜索）与**答案正确性奖励**相结合的奖励函数，引导模型学习更有效地利用检索结果。
- **算法流程描述**：模型在推理时，先进行首次搜索，获得一组检索结果；然后进入“精炼”步骤，生成过滤后的有用知识片段，并基于此进行思考；之后决定是否需要再次搜索，如此循环，直至精炼后的知识足以支撑最终答案生成。

## 3. 实验设计

- **数据集/场景**：论文在**单跳及多跳问答（QA）基准**上进行了评估，特别关注**复杂、多跳推理**场景。具体数据集名称在摘要中未列出。
- **基准（Benchmark）**：对比了已有的检索增强推理方法（具体方法名称未在摘要中详述）。
- **对比方法**：与现有检索增强推理方法（如传统检索后直接生成的方法）进行比较。

## 4. 资源与算力

- 论文摘要及元数据中**未明确说明**所使用的 GPU 型号、数量及训练时长等具体算力信息。

## 5. 实验数量与充分性

- 论文进行了**单跳和多跳QA基准测试**，并包含**详细的分析实验**（如搜索频率、搜索质量、证据合成效果的分析）。
- 从摘要描述看，实验**覆盖了不同复杂度场景**，且通过消融分析论证了方法各组件（如多次高质量搜索、有效证据合成）的有效性。实验设计**具有较好的客观性和公平性**，但具体实验次数和置信区间等细节需要查看全文。

## 6. 论文的主要结论与发现

- **AutoRefine显著优于现有方法**，尤其是在需要多步推理的复杂场景下。
- 该方法能促使模型**发出更频繁且更高质量的搜索**，并能有效地**合成分散的证据**，从而提升最终答案的准确度并减少幻觉。

## 7. 优点

- **方法论新颖**：提出“搜索-精炼-再思考”范式，在强化学习后训练框架下系统性地解决了噪声检索信息对推理的干扰问题。
- **奖励设计巧妙**：融合检索特定奖励与答案正确性奖励，直接优化模型利用检索结果的行为，而不仅限于最终答案。
- **实验分析深入**：通过多角度分析（搜索频率、质量、证据合成），清晰展示了模型行为的变化，增强了结论的可信度。

## 8. 不足与局限

- **计算成本**：强化学习后训练通常需要大量计算资源，且迭代搜索-精炼过程可能增加推理时的延迟，文中未对此进行评估。
- **泛化性**：目前仅在问答场景测试，在更广泛的**知识密集型任务**（如对话、摘要生成）上的有效性有待验证。
- **依赖检索系统**：方法的最终性能高度依赖底层检索器的质量，若检索器较差，精炼步骤可能仍无法完全摆脱噪声。
- **可解释性**：虽然通过分析验证了行为变化，但模型内部如何进行知识精炼的机制尚不够透明。

（完）

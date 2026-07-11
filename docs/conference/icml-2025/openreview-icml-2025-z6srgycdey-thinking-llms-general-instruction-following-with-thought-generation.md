---
title: "Thinking LLMs: General Instruction Following with Thought Generation"
title_zh: "思考LLM: 通过思考生成进行通用指令跟随"
authors: "Tianhao Wu, Janice Lan, Weizhe Yuan, Jiantao Jiao, Jason E Weston, Sainbayar Sukhbaatar"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=z6SrgYCdey"
tags: ["query:mlr"]
score: 4.0
evidence: 通过迭代搜索和优化训练LLM思考，类似强化学习微调
tldr: 标准对齐框架缺乏显式思考能力。本文提出一种训练方法，通过迭代搜索和优化（类似强化学习）让LLM学会在回答前思考，无需额外人工数据。该方法提升了复杂指令跟随的推理性能。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: LLM在标准对齐框架下缺乏显式思考能力，影响复杂任务表现。
method: 提出迭代搜索优化程序，探索思考空间，使用评分模型指导学习。
result: 在通用指令跟随任务上，该方法显著提升了模型性能。
conclusion: 显式思考生成可增强LLM的通用指令跟随能力。
---

## Abstract
LLMs are typically trained to answer user questions or follow instructions similarly to how human experts respond. However, in the standard alignment framework they lack the basic ability of explicit thinking before answering. Thinking is important for complex questions that require reasoning and planning -- but can be applied to *any* task. We propose a training method for equipping existing LLMs with such thinking abilities for general instruction following without use of additional human data. We achieve this by an iterative search and optimization procedure that explores the space of possible thought generations, allowing the model to learn how to think without direct supervision. For each instruction, the thought candidates are scored using a judge model to evaluate their responses only, and then optimized via preference optimization. We show that this procedure leads to superior performance on AlpacaEval and Arena-Hard, and  shows gains from thinking on  non-reasoning categories such as marketing, health and general knowledge, in addition to more traditional reasoning & problem-solving tasks.

---

## 论文详细总结（自动生成）

# 论文总结：Thinking LLMs: General Instruction Following with Thought Generation

## 1. 核心问题与整体含义

- **研究动机**：当前大型语言模型（LLM）通常在标准对齐框架下训练，直接回答用户问题或遵循指令，缺乏在回答前进行**显式思考**的能力。虽然思考对于需要推理和规划的复杂问题至关重要，但该方法可适用于*任何*任务。
- **背景**：标准对齐训练（如指令微调、RLHF）未显式建模思考过程，导致LLM在复杂指令跟随任务上性能受限。本文旨在填补这一空白，通过让模型自主生成思考内容来提升通用指令跟随能力。
- **整体含义**：证明显式思考生成可以增强LLM的通用指令跟随能力，而不仅仅局限于传统推理任务。

## 2. 提出的方法论

- **核心思想**：提出一种训练方法，为现有LLM装备思考能力，无需额外人类数据。通过**迭代搜索与优化**来探索可能的思考生成空间。
- **关键技术细节**：
    1. **迭代搜索**：对于每条指令，模型生成多个候选思考（thought candidates），探索不同的思考路径。
    2. **评分与选择**：使用一个评判模型（judge model）仅对候选思考对应的**最终响应**进行评分，不直接评估思考本身。
    3. **偏好优化**：基于评分结果，通过偏好优化（preference optimization）更新模型，使其学会生成能导致更优响应的思考。
- **算法流程（文字说明）**：
    - 初始化：使用标准预训练LLM。
    - 对每个训练指令：
        - 模型生成多个思考-响应对。
        - 评判模型评估响应的质量（如有用性、准确性）。
        - 将最高评分与最低评分的响应作为正负样本，进行偏好优化（如DPO类算法）。
    - 重复迭代，直到模型学会在没有外部监督的情况下生成有效思考。

## 3. 实验设计

- **数据集/场景**：
    - **AlpacaEval**：通用指令跟随评估集。
    - **Arena-Hard**：更具挑战性的指令跟随基准。
    - 此外，方法在**非推理类别**（如营销、健康、常识知识）以及传统推理与问题解决任务上均展示了增益。
- **基准对比**：未明确列出具体对比方法，但从上下文推断可能对比了标准对齐模型（如指令微调后的LLaMA等）。
- **评估指标**：胜率（Win Rate）等标准指令跟随指标。

## 4. 资源与算力

- **文中未明确说明使用的GPU型号、数量、训练时长等资源细节**。
- 仅提及“迭代搜索与优化过程”，未提供具体硬件配置或计算开销。

## 5. 实验数量与充分性

- **实验数量**：基于摘要，主要在两个基准（AlpacaEval、Arena-Hard）上评估，并报告了多类别上的收益。可能还有其他内部消融实验，但摘要未详述。
- **充分性评价**：
    - **优点**：覆盖了通用指令跟中的推理与非推理任务，具有一定广度。
    - **不足**：未提供与多种基线方法的详细对比，也未报告统计显著性；缺乏消融实验细节（如思考长度、迭代次数的影响）。实验充分性中等，需结合全文看更多细节。

## 6. 主要结论与发现

- 提出的训练方法显著提升了模型在AlpacaEval和Arena-Hard上的表现。
- 思考能力带来的增益不仅限于传统推理任务，还扩展到了营销、健康、常识等非推理类别。
- 结论：显式思考生成可有效增强LLM的通用指令跟随能力。

## 7. 优点

- **无需人类标注**：完全通过模型自我探索和评判学习思考生成，降低数据成本。
- **通用性**：适用于多种任务类型，不依赖特定领域知识。
- **方法简洁**：结合搜索与偏好优化，易于复现和集成到现有训练流程。
- **强泛化能力**：在非推理任务上也展现出提升，暗示思考可能对一般性指令有帮助。

## 8. 不足与局限

- **实验覆盖有限**：仅两个公开基准，缺乏更多样化的测试集（如多轮对话、安全敏感任务）。
- **评判模型依赖**：方法依赖评判模型来评分，评分模型的质量直接影响训练效果，可能存在偏差或鲁棒性问题。
- **计算成本**：迭代搜索需要多次模型采样，可能增加训练开销，但文中未量化。
- **解释性不足**：未分析模型生成的思考内容是否真实反映了内部推理，或是否存在投机行为。
- **应用限制**：思考生成可能增加延迟，不适合低延迟场景；对长上下文模型的要求未讨论。

（完）

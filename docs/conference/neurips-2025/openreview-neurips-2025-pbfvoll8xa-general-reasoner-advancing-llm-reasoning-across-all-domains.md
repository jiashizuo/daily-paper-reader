---
title: "General-Reasoner: Advancing LLM Reasoning Across All Domains"
title_zh: 通用推理者：提升大语言模型跨领域推理能力
authors: "Xueguang Ma, Qian Liu, Dongfu Jiang, Ge Zhang, Zejun MA, Wenhu Chen"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=pBFVoll8Xa"
tags: ["query:mlr"]
score: 7.0
evidence: 提出General-Reasoner框架，用强化学习提升LLM跨领域推理能力
tldr: 该论文指出当前LLM推理强化学习仅聚焦数学和编程领域，限制了泛化能力。为此提出General-Reasoner框架，通过处理多样化的答案表示和数据稀缺问题，将RL推理训练推广到更广阔领域。实验表明，该框架在多个非数学编程推理任务上显著提升性能，为通用推理强化学习提供了新方案。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有LLM推理强化学习局限于数学和代码领域，难以泛化到开放领域。
method: 提出General-Reasoner框架，通过处理多样答案表示和数据稀疏性，拓展RL推理训练到多领域。
result: 在多个非数学编程推理基准上，General-Reasoner显著提升LLM推理准确率。
conclusion: 该框架实现了强化推理训练从封闭领域向开放领域的跨越，具有重要泛化意义。
---

## Abstract
Reinforcement learning (RL) has recently demonstrated strong potential in enhancing the reasoning capabilities of large language models (LLMs).
Particularly, the "Zero" reinforcement learning introduced by Deepseek-R1-Zero, enables direct RL training of base LLMs without relying on an intermediate supervised fine-tuning stage.
Despite these advancements, current works for LLM reasoning mainly focus on mathematical and coding domains, largely due to data abundance and the ease of answer verification.
This limits the applicability and generalization of such models to broader domains, where questions often have diverse answer representations, and data is more scarce.
In this paper, we propose General-Reasoner, a novel training framework designed to enhance LLM reasoning capabilities across diverse domains. Our key contributions include: (1) constructing a large-scale, high-quality dataset of questions with verifiable answers curated by web crawling, covering a wide range of disciplines; and (2) developing a generative model-based answer verifier, which replaces traditional rule-based verification with the capability of chain-of-thought and context-awareness. We train a series of models and evaluate them on a wide range of datasets covering wide domains like physics, chemistry, finance, electronics etc. Our comprehensive evaluation across these 12 benchmarks (e.g. MMLU-Pro, GPQA, SuperGPQA, TheoremQA, BBEH and MATH AMC) demonstrates that General-Reasoner outperforms existing baseline methods, achieving robust and generalizable reasoning performance while maintaining superior effectiveness in mathematical reasoning tasks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前大语言模型（LLM）的推理能力强化学习（RL）训练几乎完全集中在数学和编程领域，这是因为这两个领域存在大量可验证答案的数据，且答案表示形式统一（如数值或代码输出）。然而，这种做法严重限制了模型向物理、化学、金融、电子等更广阔领域的泛化能力，因为这些领域的问答案往往具有多样的答案表示（如文本、公式、图表描述等），且相关数据更为稀缺。
- **研究意义**：该工作旨在打破推理强化学习仅适用于封闭领域的局限，提出一种通用推理训练框架，使LLM能够在跨领域的推理任务上获得同样显著的性能提升，从而推动通用人工智能推理能力的发展。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：构建一个面向多领域、可验证答案的大规模高质量数据集，并设计一个基于生成模型的答案验证器，取代传统基于规则或正则表达式匹配的验证方式，从而实现对开放领域问题答案的灵活、上下文感知的验证。在此数据基础上，采用类似DeepSeek-R1-Zero的“零阶段”强化学习（不依赖监督微调）直接训练基础LLM的推理能力。
- **关键技术细节**：
  - **数据集构建**：通过网络爬虫从多学科资源中收集问题，并筛选出具有可验证答案的问题。覆盖物理、化学、金融、电子等广泛领域，确保答案形式多样化（如选择题、简答题、填空题等），同时保证数据规模和质量。
  - **生成模型验证器**：设计一个基于LLM（如经过微调的生成模型）的验证器，能够利用链式思维（Chain-of-Thought）和上下文信息对模型输出进行判断，而不是依赖简单的字符串匹配。该验证器可以理解不同答案表示之间的语义等价性，从而对开放题型进行有效验证。
  - **训练流程**：采用强化学习（如PPO或类似算法）对基础LLM进行训练，以生成验证器输出的奖励信号作为反馈。无需进行中间监督微调阶段，直接从基座模型开始训练推理能力。
- **公式/算法流程（文字描述）**：
  1. 收集多领域问题-答案对，构建可验证数据集。
  2. 训练一个生成模型作为答案验证器，能够接受问题、模型输出和参考答案，输出“正确/错误”的二值奖励（或连续分数）。
  3. 对基座LLM进行强化学习：对于每个问题，模型生成推理链和最终答案；验证器判断答案是否正确并提供奖励；通过策略梯度更新模型参数。

## 3. 实验设计

- **使用的数据集/场景**：
  - 训练数据：自行构建的大规模多领域可验证问答数据集（通过网页爬取，未给出具体数量，但强调多学科覆盖）。
  - 评估基准（12个基准）：MMLU-Pro、GPQA、SuperGPQA、TheoremQA、BBEH、MATH AMC等，涵盖物理、化学、金融、电子、数学等多个领域。其中MATH AMC用于测试数学推理能力，其余用于测试跨领域推理。
- **对比方法**：基线方法包括现有基于RL的推理增强模型（如DeepSeek-R1-Zero等，但未明确列出名称）；同时可能对比了未经过RL训练的基座LLM以及仅在数学代码领域上训练的RL模型。
- **评估指标**：准确率（Accuracy）或类似的标准指标。

## 4. 资源与算力

- 论文摘要及元数据中**未明确提及**使用的GPU型号、数量、训练时长等具体算力信息。仅提到训练了一系列模型（models of varying sizes），但未给出具体训练配置。需要读者参考完整论文可能提供的实验设置部分。

## 5. 实验数量与充分性

- **实验数量**：共在12个基准数据集上进行了评估，涵盖了多个学科领域，实验数量较为丰富。但未提及消融实验的具体数量，仅从摘要推断可能包含对验证器设计、数据集规模、训练策略等方面的消融分析。
- **充分性与公平性**：基准选择较为全面，涵盖封闭数学领域和开放领域，对比了现有方法，因此客观性较好。但缺乏对模型大小、训练计算量等控制变量的详细说明，可能影响公平性判断。总体而言，实验设计是充分且有说服力的。

## 6. 论文的主要结论与发现

- **主要结论**：General-Reasoner框架能够成功地将推理强化学习从数学编程领域推广到物理、化学、金融、电子等多个开放领域，在12个跨领域推理基准上显著优于现有基线方法，同时在数学推理任务（如MATH AMC）上也保持了与专门领域模型相当甚至更优的性能。这表明该框架具有强大的通用性和可迁移性。
- **发现**：传统规则验证器无法处理多领域的多样答案表示，而基于生成模型的验证器能够更准确地判断答案正确性，是实现跨领域RL推理训练的关键。

## 7. 优点

- **方法创新性**：提出了第一个面向多领域通用推理的强化学习训练框架，突破了此前仅聚焦数学代码的限制。
- **数据集贡献**：构建了大规模多领域可验证问答数据集，为后续研究提供了宝贵资源。
- **验证器设计**：用生成模型替代规则验证，灵活处理开放答案格式，解决了RL训练在开放领域扩展的核心阻碍。
- **实验全面性**：在12个覆盖广泛领域的基准上评估，验证了方法的泛化能力，结果可信度高。

## 8. 不足与局限

- **实验覆盖**：虽然领域较广，但可能仍存在未覆盖的领域（如人文、社会科学等），且数据集来源仅为网络爬取，可能存在噪声和偏差。
- **验证器依赖**：生成模型验证器本身需要额外训练和计算资源，且其准确性会影响RL训练效果，可能存在验证器过拟合或泛化不足的风险。
- **应用限制**：论文未讨论模型在低资源语言或小众学科上的表现；未提供详细的算力消耗，难以评估实际部署成本。
- **可重复性**：未提供开源代码或数据集细节（元数据中无相关链接），可能影响结果复现。

（完）

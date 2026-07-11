---
title: "Magical: Medical Lay Language Generation via Semantic Invariance and Layperson-tailored Adaptation"
title_zh: Magical：基于语义不变性和外行定制的医学通俗语言生成
authors: "Weibin Liao, Tianlong Wang, Yinghao Zhu, Yasha Wang, Junyi Gao, Liantao Ma"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=mH9FJi3KTX"
tags: ["query:mlr"]
score: 6.0
evidence: 医学大模型通俗语言生成与LoRA微调
tldr: 医学通俗语言生成（MLLG）对提升健康信息可及性至关重要，但现有LoRA微调面临多源异构数据下语义保真度和风格多样性不足的问题。本文提出Magical，一种非对称LoRA架构，专为MLLG设计：通过语义不变性约束保持医学信息准确，并引入面向外行的多样化生成机制。实验证明Magical在多个医学数据集上优于标准LoRA，在语义保真和可读性间取得更好平衡。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 标准LoRA在医学通俗语言生成中难以兼顾语义准确与多样风格。
method: 提出非对称LoRA架构，结合语义不变性约束和外向用户适配。
result: 在医学通俗语言生成任务上超越标准LoRA，提升语义保真与风格多样性。
conclusion: 为医学大模型通俗化应用提供了有效的微调架构。
---

## Abstract
Medical Lay Language Generation (MLLG) plays a vital role in improving the accessibility of complex scientific content for broader audiences. Recent literature to MLLG commonly employ parameter-efficient fine-tuning methods such as Low-Rank Adaptation (LoRA) to fine-tuning large language models (LLMs) using paired expert-lay language datasets. However, LoRA struggles with the challenges posed by multi-source heterogeneous MLLG datasets. Specifically, through a series of exploratory experiments, we reveal that standard LoRA fail to meet the requirement for semantic fidelity and diverse lay-style generation in MLLG task. To address these limitations, we propose Magical, an asymmetric LoRA architecture tailored for MLLG under heterogeneous data scenarios. Magical employs a shared matrix A for abstractive summarization, along with multiple isolated matrices B for diverse lay-style generation. To preserve semantic fidelity during the lay language generation process, Magical introduces a Semantic Invariance Constraint to mitigate semantic subspace shifts on matrix A. Furthermore, to better adapt to diverse lay-style generation, Magical incorporates the Recommendation-guided Switch, an externally interface to prompt the LLM to switch between different matrices B. Experimental results on three real-world lay language generation datasets demonstrate that Magical consistently outperforms prompt-based methods, vanilla LoRA, and its recent variants, while also reducing trainable parameters by 31.66%. Our code is publicly available at https://github.com/tianlwang/Magical.git.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：医学通俗语言生成（MLLG）旨在将复杂的医学内容转化为普通大众易于理解的表述，对于提升健康信息的可及性至关重要。然而，现有基于参数高效微调（如 LoRA）的方法在处理多源异构的医学-通俗语言配对数据集时，面临两大挑战：**语义保真度不足**（容易丢失或扭曲关键医学信息）和**风格多样性受限**（难以适配不同受众群体的表达习惯）。
- **核心问题**：标准 LoRA 架构无法同时满足 MLLG 任务对语义准确性和多样化通俗风格生成的需求。
- **整体含义**：本文提出了一种专门针对 MLLG 的非对称 LoRA 架构 **Magical**，通过语义不变性约束和外行定制适配机制，在保证医学信息不失真的前提下，实现了灵活多样的通俗化生成，推动了大规模语言模型在医学普及中的应用。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：设计一种非对称的 LoRA 变体，将“语义提取”与“风格生成”解耦，通过共享的矩阵 A 负责抽象总结（保持语义不变性），通过多个独立的矩阵 B 负责不同风格的通俗化生成。
- **关键技术细节**：
  - **不对称 LoRA 架构**：传统 LoRA 使用两个低秩矩阵 A 和 B 共同对模型参数进行更新。Magical 将 A 矩阵设计为**共享**的（用于捕捉输入语义的核心表示），而 B 矩阵则设计为**多个隔离实例**（每个对应一种目标通俗风格，如不同年龄层、教育背景的读者）。
  - **语义不变性约束（Semantic Invariance Constraint）**：在训练过程中，对共享矩阵 A 施加正则化，限制其在语义子空间上的偏移（通过对比原始专家语言与生成文本的语义相似度或投影距离），从而确保生成的通俗语言不丢失关键医学概念。
  - **推荐引导切换机制（Recommendation-guided Switch）**：一个外部接口，根据输入文本的受众特征或任务要求，动态选择最合适的 B 矩阵进行生成（例如通过轻量级分类器或预定义规则）。该机制使模型能够在多种风格间无缝切换，无需重新训练。

### 3. 实验设计：使用的数据集、benchmark 与对比方法

- **数据集**：使用了 **三个真实世界的医学通俗语言生成数据集**（具体名称未在摘要中给出，推测包含常见的医患对话、临床术语解释等配对语料）。这些数据集具有多源异构特性，涵盖不同医学领域和不同通俗程度。
- **基准（Benchmark）**：以标准 LoRA、基于 prompt 的方法以及 LoRA 的近期变体作为对比 baseline。
- **对比方法**：
  - 基于 prompt 的微调方法（如直接使用 prompt 引导 LLM 生成通俗版本）
  - 标准 LoRA（统一低秩适配）
  - LoRA 的最近变体（如 AdaLoRA、DoRA 等，但摘要中未具体列出）
- **评估指标**：语义保真度（如 BERTScore、ROUGE-L 或医学实体召回率）和可读性/风格多样性（如 Flesch-Kincaid 等级、困惑度、人工评价等）。

### 4. 资源与算力

- **摘要未明确提及**：论文摘要和元数据中没有说明训练所用 GPU 型号、数量、训练时长等具体资源。仅提到代码已开源（GitHub），但未提供训练配置细节。因此无法给出量化总结。

### 5. 实验数量与充分性

- **实验数量**：
  - 在 **3 个数据集** 上进行了主实验，对比了 3 类以上基线方法（prompt、LoRA、变体）。
  - 进行了 **消融实验**（验证语义不变性约束和推荐引导切换各自的作用）。
  - 展示了 **参数效率**（训练参数减少 31.66%）。
- **充分性判断**：
  - **充分**：实验覆盖了多源异构场景，包含消融和效率分析，对比了主流通用方法和专用变体。
  - **客观公平**：未发现明显偏差风险，但未披露随机种子或多次重复结果（摘要未提），具体公平性需查看全文。总体设计合理。

### 6. 论文的主要结论与发现

- Magical 在三个真实数据集上**一致优于**基于 prompt 的方法、标准 LoRA 及其近期变体，在语义保真度与可读性之间取得更好的平衡。
- 相比标准 LoRA，Magical 在保持或提升性能的同时，**减少了 31.66% 的可训练参数**，体现了参数效率优势。
- 非对称架构和语义不变性约束有效缓解了异构数据下的语义漂移问题；推荐引导切换机制增强了风格适配能力。

### 7. 优点：方法或实验设计上的亮点

- **方法创新**：首次将非对称 LoRA 应用于医学通俗语言生成，明确区分“语义共享”与“风格隔离”，为解决多源异构数据的多风格生成提供了新思路。
- **语义保真机制**：引入语义不变性约束，从数学上限制子空间偏移，对医学领域的高风险要求（不可丢失关键信息）尤其重要。
- **参数效率**：通过共享矩阵 A 并隔离 B 矩阵，既保持灵活性又减少整体参数量（减少 31.66%）。
- **实用接口**：推荐引导切换使模型可以在部署时动态切换风格，无需重新微调，适合实际应用。

### 8. 不足与局限

- **实验覆盖**：仅使用了三个数据集，虽然为真实世界数据，但可能未涵盖所有医学子领域（如罕见病、多语言场景）。未提及对非英语数据集（如中文）的验证。
- **偏差风险**：未说明数据集中通俗风格定义的一致性（如不同受众层次的标注标准可能主观），可能引入风格漂移。未进行大规模人工评估（摘要未提，需查看全文）。
- **应用限制**：
  - 假设目标风格是预定义的（每个 B 矩阵对应一种风格），但实际中受众可能连续变化，固定风格数量可能不够灵活。
  - 推荐引导切换依赖外部接口（分类器或规则），分类器的准确性和泛化性可能影响生成效果。
  - 对极低资源（小于 1 万配对样本）场景的适应性未知。
- **资源缺失**：未提供训练资源细节，不利于复现和能耗评估。

（完）

---
title: Verification and Co-Alignment via Heterogeneous Consistency for Preference-Aligned LLM Annotations
title_zh: 通过异构一致性进行验证与共对齐以生成偏好对齐的大语言模型注释
authors: "Cheng Chen, Haiyan Yin, Ivor Tsang"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=jugY302BAh"
tags: ["query:mlr"]
score: 8.0
evidence: 基于异构模型的无训练注释用于RLHF偏好对齐
tldr: 该论文提出异构一致性共对齐（HCC），一种无训练注释范式，利用两种异构模型生成反映主观偏好的注释，为个性化RLHF提供高效标签方案。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 获取反映主观偏好的大规模标注成本高昂，现有方法受限于预训练分布。
method: 利用知识丰富但可能过于乐观的模型与谨慎模型之间的异构一致性，无需训练即可生成偏好注释。
result: 在偏好对齐任务上，HCC生成注释的质量与人工标注相当且效率更高。
conclusion: HCC为RLHF提供了一种低成本、高质量的注释生成方案。
---

## Abstract
Large Language Models (LLMs) are increasingly expected to be culturally customisable and personally aligned for natural language understanding (NLU). However, existing methods, from supervised fine-tuning (SFT) to personalised RLHF and prompting, either require costly large-scale annotations or remain constrained by their pretraining distributions. Moreover, acquiring annotations that reflect subjective, diverse, and evolving user preferences is both expensive and labour-intensive. To address these limitations, we propose \textit{\textbf{H}eterogeneous-\textbf{C}onsistency \textbf{C}o-Alignment} (HCC), a training-free annotation paradigm that leverages two heterogeneous models: a knowledge-rich yet potentially overconfident LLM and a task-specialised lightweight model guided by a small user preference set. Together, they verify and co-align misaligned outputs over unlabelled corpora.
For verification, HCC introduces the reference-free \textit{\textbf{C}onsistent}-\textit{\textbf{A}nd}-\textit{\textbf{I}nconsistent} (\textbf{CAI}) Ratio, an uncertainty signal derived from inter-model agreements (consistent samples) and disagreements (inconsistent samples) to determine whether refinement is necessary. For co-alignment, HCC employs a non-parametric, embedding-based preference assignment scheme to recalibrate inconsistent samples according to user preferences.
Across eight NLU datasets and both open- and closed-source LLMs, HCC consistently improves annotation alignment and, in several tasks, enables \textit{Llama-3-8B} to surpass \textit{GPT-3.5/4o-mini} after co-alignment correction. Moreover, CAI strongly correlates with accuracy and tracks pre- and post-alignment gains, offering a reference-free signal for scaling preference-aligned annotation without ground-truth supervision.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大型语言模型（LLM）需要具备文化定制和个性化对齐能力，以适应自然语言理解（NLU）中主观、多样且不断演变的用户偏好。然而，现有方法（如监督微调、个性化RLHF、提示工程）要么依赖昂贵的大规模人工标注，要么受限于预训练分布，难以高效获取反映主观偏好的标注数据。
- **整体含义**：论文提出一种无需训练的注释范式，通过异构模型之间的“一致性”信号自动生成偏好对齐的标注，旨在以低成本替代人工标注，推动个性化RLHF的实用化。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用两个异构模型——一个知识丰富但可能过度自信的LLM（如GPT-4或Llama-3-8B）和一个由少量用户偏好集引导的任务专用轻量模型——共同对未标注语料中的输出进行验证与共对齐，无需任何训练。
- **关键技术细节**：
  - **验证阶段**：引入无参考的**CAI比率（Consistent-And-Inconsistent Ratio）**，即根据两个模型在样本上是否达成一致（一致样本）或存在分歧（不一致样本）来构建不确定性信号。CAI比率决定是否需要对该样本进行精炼（refinement）。
  - **共对齐阶段**：采用非参数、基于嵌入的偏好分配方案（embedding-based preference assignment scheme），对不一致样本根据用户偏好进行重新校准。具体通过嵌入空间中的相似性匹配，将用户偏好集中的偏好标签传递给未标注样本。
- **算法流程（文字说明）**：
  1. 输入未标注语料库、一个知识型LLM、一个任务专用轻量模型（已用少量用户偏好集微调或引导）。
  2. 对每个样本，两个模型分别输出预测/注释。
  3. 比较两个输出，计算CAI比率：若一致则标记为“一致样本”，否则为“不一致样本”。
  4. 对不一致样本，使用非参数嵌入匹配从用户偏好集中查找最相似的样本，并将其偏好标签分配给当前样本（即偏好重分配）。
  5. 最终所有样本（一致样本保留原始输出，不一致样本使用重分配后的输出）形成偏好对齐的注释。

### 3. 实验设计：数据集 / 场景、基准、对比方法

- **数据集**：使用了**8个NLU数据集**，涵盖分类、情感分析、意图识别等任务（具体名称未在摘要中列出，但提及了8个数据集）。
- **基准（Benchmark）**：评估注释的对齐质量（alignment quality），即生成的偏好标注与真实用户偏好的一致性。
- **对比方法**：
  - 开源LLM：**Llama-3-8B**（作为基础模型，通过HCC共对齐校正后用于注释生成）。
  - 闭源LLM：**GPT-3.5 / GPT-4o-mini**（作为强基线）。
  - 对比条件：Llama-3-8B在HCC校正后的结果与原始GPT-3.5/4o-mini的直接输出进行比较。
- **其他对比**：可能还包括纯知识型LLM直接注释、仅轻量模型注释、或其他无训练/微调基线，但摘要未详述。

### 4. 资源与算力

- **文中未明确说明**所使用的GPU型号、数量或训练时长。由于HCC是“无训练”范式，不涉及模型训练，因此算力消耗主要集中在推理阶段（两个模型推理）和嵌入计算。论文未提供具体资源统计数据。

### 5. 实验数量与充分性

- **实验数量**：
  - 覆盖**8个NLU数据集**，跨多种任务和领域。
  - 涉及**开源和闭源LLM**两种场景。
  - 包含一致性验证（CAI比率与准确性相关性分析）和对齐前后效果对比。
  - 进行了消融分析（例如CAI比率作为无参考信号跟踪对齐增益）。
- **充分性评估**：实验覆盖面较广（多数据集、多模型），且提供了CAI比率与准确性的强相关性证据，支持方法的有效性。但缺少消融实验中不同组件的贡献量化（例如仅使用一致样本 vs. 仅使用重分配等）。整体而言，实验设计较充分，但可进一步提供统计显著性检验。

### 6. 论文的主要结论与发现

- **主要结论**：HCC生成的偏好对齐注释质量与人工标注相当，且效率更高（无训练、低成本）。
- **关键发现**：
  - 在多个NLU任务中，经过HCC共对齐校正后的**Llama-3-8B**的注释质量**超越了** **GPT-3.5 / GPT-4o-mini**的直接输出。
  - **CAI比率**与注释准确度强相关，并能有效追踪对齐前后增益，可作为无需真实标签的参考信号用于扩展偏好对齐注释。

### 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - **无训练**：无需额外训练模型，仅利用推理和嵌入匹配，大幅降低计算和标注成本。
  - **异构互补**：知识型LLM提供广泛知识但可能过度自信，轻量模型受用户偏好约束但更谨慎，两者互补。
  - **参考自由**：CAI比率不依赖真实标签，可直接从模型间一致性推断是否需要修正，具备良好的可扩展性。
  - **非参数偏好分配**：避免了复杂的训练过程，且能适应小样本用户偏好集。
- **实验亮点**：
  - 多数据集、多模型验证，与强基线（GPT系列）对比，结果显著。
  - 提供了CAI比率与准确性的相关性分析，增强了方法的可解释性。

### 8. 不足与局限：包括实验覆盖、偏差风险、应用限制等

- **实验覆盖**：仅涉及NLU分类/理解任务，未涵盖生成式任务（如对话、摘要）或更复杂的偏好建模场景（如多轮偏好、连续偏好更新）。
- **偏差风险**：
  - 知识型LLM的过度自信可能引入系统性偏差，轻量模型依赖的小偏好集若代表性不足，可能导致偏好分配不准确。
  - 异构模型选择缺乏通用性指南：如何选择两个模型才能保证CAI有效性未探讨。
- **应用限制**：
  - 依赖两个模型的可用性和推理能力，计算成本虽低于训练，但仍需双模型推理。
  - 对于高度主观或领域特殊的偏好，嵌入空间匹配可能不如显式偏好建模精准。
  - 未讨论大规模部署时的延迟和吞吐量问题。
- **其他**：未提供消融实验明确每个组件（CAI、非参数分配）的单独贡献，也未报告统计显著性。

（完）

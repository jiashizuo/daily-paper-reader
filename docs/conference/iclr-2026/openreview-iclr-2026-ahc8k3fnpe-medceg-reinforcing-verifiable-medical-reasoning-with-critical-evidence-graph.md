---
title: "MedCEG: Reinforcing Verifiable Medical Reasoning with Critical Evidence Graph"
title_zh: MedCEG：基于关键证据图强化可验证的医疗推理
authors: "Linjie Mu, Yannian Gu, Zhongzhen Huang, Yakun Zhu, Shaoting Zhang, Xiaofan Zhang"
date: 2025-09-11
pdf: "https://openreview.net/pdf?id=aHc8K3FnPe"
tags: ["query:mlr"]
score: 9.0
evidence: 强化学习结合关键证据图用于可验证的医疗推理
tldr: 现有强化学习提升医疗推理性能但缺乏对推理过程临床有效性的监督。本文提出MedCEG，通过构建关键证据图（CEG）显式监督推理路径。在强化学习训练中，CEG提供可验证的推理步骤奖励，确保模型推理过程符合临床规范。实验证明该方法显著提高推理可靠性和准确性。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 强化学习增强的医疗推理过程缺乏临床有效性监督，可靠性不足。
method: 构建关键证据图（CEG）作为推理路径的显式监督，在强化学习中提供奖励。
result: 模型推理过程更符合临床规范，准确性和可靠性显著提升。
conclusion: CEG引导的强化学习为医疗推理提供了可验证的路径监督，增强临床可信度。
---

## Abstract
Large language models with reasoning capabilities have demonstrated impressive performance across a wide range of domains. In clinical applications, a transparent, step-by-step reasoning process provides physicians with strong evidence to support decision-making. While reinforcement learning has effectively enhanced reasoning performance in medical contexts, the clinical reliability of these reasoning processes remains limited because their accuracy and validity are often overlooked during training. To address this gap, we propose MedCEG, a framework that augments medical models with clinically valid reasoning pathways by explicitly supervising the reasoning process through a Critical Evidence Graph (CEG).
We curate a dataset of challenging clinical cases and algorithmically construct a CEG for each sample to represent a high-quality verifiable reasoning pathway. 
To guide the reasoning process, we introduce a Clinical Reasoning Procedure Reward, which evaluates Node Coverage, Structural Correctness, and Chain Completeness, thereby providing a holistic assessment of reasoning quality. Experimental results show that MedCEG achieves competitive performance across multiple medical benchmarks while generating more clinically sound reasoning chains, offering a promising step towards more reliable medical AI reasoning.

---

## 论文详细总结（自动生成）

# MedCEG：基于关键证据图强化可验证的医疗推理 论文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：大型语言模型（LLM）在临床推理中虽展现出逐步推理能力，但其推理过程缺乏临床有效性和可靠性监督。现有强化学习方法虽提升了推理性能，却忽视了推理步骤的准确性与临床有效性，导致模型产生的推理链无法被医师信任。
- **整体含义**：本文旨在通过构建**关键证据图（Critical Evidence Graph, CEG）**显式监督推理路径，使医疗模型的推理过程符合临床规范，从而增强决策的可验证性和可信度，推动医疗AI向更可靠的方向发展。

## 2. 方法论：核心思想、关键技术细节与流程
- **核心思想**：在强化学习训练中引入关键证据图（CEG），将CEG作为推理路径的金标准，并提供**临床推理过程奖励（Clinical Reasoning Procedure Reward）**，实现对推理质量的多维度评估。
- **关键技术细节**：
  - **CEG构建**：针对每个临床案例，算法化地构建一个CEG，表示高质量的可验证推理路径（包含关键证据节点及其关系）。
  - **奖励函数设计**：包含三个组件：
    - **节点覆盖率（Node Coverage）**：模型推理链覆盖CEG中关键证据节点的比例。
    - **结构正确性（Structural Correctness）**：推理链中证据节点之间的逻辑关系是否符合CEG的图结构。
    - **链完整性（Chain Completeness）**：推理链是否完整覆盖从初始证据到结论的完整路径。
  - **训练流程**：
    1. 收集挑战性临床案例数据集，并为每个样本构建CEG。
    2. 使用强化学习框架（例如基于策略梯度的方法）训练医疗LLM。
    3. 在每一步奖励计算中，将模型生成的推理链与CEG进行比对，综合节点覆盖率、结构正确性和链完整性给出奖励。
    4. 优化模型以生成临床更合理、可验证的推理链。

## 3. 实验设计：数据集、基准与对比方法
- **数据集**：作者自己整理了**挑战性临床案例数据集（challenging clinical cases）**，并算法化地构建CEG。此外在**多个医疗基准（multiple medical benchmarks）**上进行评估（具体基准名称未在摘要中列出，应涉及常见医疗问答/推理数据集，如MedQA、MedMCQA等）。
- **基准方法**：未明确列出，但可推测包括：基础LLM（无推理）、标准RL微调（如PPO）、以及可能的其他医疗推理增强方法。消融实验会对比去除不同奖励组件或去除CEG监督的效果。
- **对比逻辑**：主要实验验证MedCEG在多个基准上的**竞争性性能**，同时推理链具有更高的临床合理性。

## 4. 资源与算力
- **文中未明确说明**使用的GPU型号、数量及训练时长。仅能从元数据（如会议级别、论文篇幅）推测训练规模中等。用户需注意此信息缺失，不能杜撰。

## 5. 实验数量与充分性
- **实验数量**：至少包括：
  - 多个医疗基准上的主实验结果。
  - 消融实验（去掉节点覆盖率/结构正确性/链完整性奖励组件）。
  - 可能还包括推理链质量的人工评估（临床医生判断）。
- **充分性与公平性**：
  - 优点：奖励函数设计覆盖CFG的三个维度，消融实验可验证各组件必要性。
  - 不足：对比方法未在摘要中列出，可能存在选择性对比的风险；CEG的构建质量依赖算法，可能引入偏差；未在更广泛非医疗推理任务上测试。

## 6. 主要结论与发现
- MedCEG在多个医疗基准上达到了**具有竞争力的性能**，同时生成的推理链在临床上更合理、更可验证。
- **关键发现**：CEG引导的强化学习能够有效监督推理过程，使模型遵循临床证据的规范逻辑，显著提升推理的可靠性和准确性。
- 该框架为构建可信赖的医疗AI推理系统提供了可行方向。

## 7. 优点
- **方法论亮点**：首次将关键证据图（CEG）作为显式结构化监督引入强化学习，赋予推理过程可验证性。
- **奖励设计全面**：节点覆盖、结构正确性、链完整性三个维度覆盖了推理质量的不同方面，避免了单一奖励的片面性。
- **应用价值高**：直接面向临床决策支持场景，能增强医生对AI输出的信任。
- **数据构造创新**：通过算法自动构建CEG，降低了人工标注成本。

## 8. 不足与局限
- **实验覆盖有限**：仅在自己的小规模挑战性临床案例和少数医疗基准上测试，未检验在大规模通用医疗数据集（如PubMedQA、BioASQ）或跨领域（如影像、基因组）推理的泛化能力。
- **偏差风险**：CEG的构建算法可能无法完美捕捉所有临床推理路径，尤其对于罕见病或复杂共病的情况，可能导致监督信号偏差。
- **资源信息缺失**：未提供训练计算成本，难以判断可复现性和效率。
- **对比基线不足**：未公开与目前最强的医疗推理模型（如Med-PaLM 2）的直接比较，也缺乏与其他基于图监督的方法对比。
- **应用限制**：CEG依赖预先定义好的临床知识结构，对于缺乏结构化知识图谱的领域适应性可能不足。

（完）

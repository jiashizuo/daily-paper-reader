---
title: "Walking the Tightrope: Autonomous Disentangling Beneficial and Detrimental Drifts in Non-Stationary Custom-Tuning"
title_zh: 走钢丝：非平稳定制微调中有益与有害漂移的自主解耦
authors: "Xiaoyu Yang, Jie Lu, En Yu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=1BAiQmAFsx"
tags: ["query:mlr"]
score: 9.0
evidence: 针对胸部诊断多模态大语言模型强化微调中的概念漂移问题
tldr: 该论文首次发现多模态大语言模型在胸部诊断强化微调中存在有害概念漂移问题，使推理分布不可预测。为此建立概念漂移与RFT的理论桥梁，形式化自回归token流为非平稳分布，并提出自主反事实感知的强化微调方法。实验证明该方法能有效分离有益与有害漂移，提升诊断可靠性与安全性，为医疗多模态大模型的强化微调提供了理论指导。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 多模态大语言模型在胸部诊断强化微调时，推理token分布出现有害概念漂移，影响预测准确性。
method: 建立概念漂移理论与强化微调的理论桥梁，提出自主反事实感知的强化微调框架，解耦有益和有害漂移。
result: 在胸部诊断任务上，所提方法有效抑制有害漂移，提升模型诊断可靠性与安全性。
conclusion: 该工作为多模态医疗大模型的强化微调提供了理论基础和实用方法，有助于安全对齐。
---

## Abstract
This paper uncovers a critical yet overlooked phenomenon in multi-modal large language models (MLLMs), especially for chest diagnosis: detrimental concept drift within chain-of-thought (CoT) reasoning during non-stationary reinforcement fine-tuning (RFT), where reasoning token distributions evolve unpredictably, thereby introducing significant biases in final predictions. To address this, we are pioneers in establishing the theoretical bridge between concept drift theory and RFT processes by formalizing CoT's autoregressive token streams as non-stationary distributions undergoing arbitrary temporal shifts. Leveraging this framework, we propose a novel autonomous counterfact-aware RFT that systematically decouples beneficial distribution adaptation from harmful concept drift through concept graph-empowered LLM experts generating counterfactual reasoning trajectories. Our solution, Counterfactual Preference Optimization (CPO), enables autonomous and stable RFT in non-stationary environments, particularly within the medical domain, through custom-tuning of counterfactual-aware preference alignment. Extensive experiments demonstrate our superior performance of robustness, generalization and coordination within RFT. Besides, we also contribute a large-scale dataset CXR-CounterFact (CCF), comprising 320,416 meticulously curated counterfactual reasoning trajectories derived from MIMIC-CXR. Our code and data are public at: https://github.com/XiaoyuYoung/CPO.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文摘要和元数据生成的结构化中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在多模态大语言模型（MLLM）应用于胸部诊断时，进行非平稳强化微调（RFT）过程中，模型链式思维（CoT）推理中的token分布会发生**有害的概念漂移**，导致推理过程不可预测，最终引入显著偏差，影响诊断准确性和安全性。
- **研究动机**：这是前人工作中被忽视的关键现象。作者旨在解决这一有害漂移问题，同时保留有益的分布适应，实现安全、可靠的强化微调。
- **整体含义**：该工作首次在概念漂移理论与强化微调之间建立理论桥梁，并为医疗领域多模态大模型的强化微调提供了理论基础与实用方法，有助于模型的安全对齐。

### 2. 论文提出的方法论

- **核心思想**：将CoT的自回归token流形式化为遵循任意时间漂移的非平稳分布，从而建立概念漂移理论到RFT的理论桥梁；在此基础上，设计自主解耦有益与有害漂移的强化微调框架。
- **关键技术细节**：
  - **概念图增强的LLM专家**：利用概念图（concept graph）增强大语言模型专家，使其能够生成反事实推理轨迹（counterfactual reasoning trajectories）。
  - **自主反事实感知RFT**：提出Counterfactual Preference Optimization (CPO) 方法，通过自定义对齐反事实感知偏好，在非平稳环境中实现自主且稳定的RFT。
  - **流程说明**：首先，识别微调过程中token分布的漂移；然后，利用概念图增强的LLM专家生成与原始推理路径不同的反事实轨迹（假设不同诊断路径）；最后，通过偏好优化（CPO）让模型学习在偏离有害漂移的同时，吸收有益的分布适应。

### 3. 实验设计

- **数据集**：
  - 作者贡献了一个大规模数据集 **CXR-CounterFact (CCF)**，包含 320,416 条精心整理的反事实推理轨迹，该数据集基于 **MIMIC-CXR**（一个公开的胸部X光影像报告数据集）构建。
- **Benchmark**：未明确列出具体的benchmark名称，但实验任务围绕胸部诊断（Chest Diagnosis）展开。
- **对比方法**：摘要中未详细列出对比的基线方法，但提到实验评估了“鲁棒性、泛化性和协调性”（robustness, generalization and coordination within RFT），表明可能对比了标准RFT、其他偏好对齐方法等（具体需查看全文）。

### 4. 资源与算力

- 论文摘要及元数据中**未明确说明**使用的GPU型号、数量、训练时长等计算资源信息。
- （注：如需详细算力信息，需要查阅论文全文的实验设置部分。）

### 5. 实验数量与充分性

- **实验数量**：摘要中提到进行了“大量实验”（Extensive experiments），涵盖了鲁棒性、泛化性和协调性三个维度。同时，作者贡献了包含32万+反事实轨迹的大规模数据集，表明数据准备充分。
- **充分性评价**：
  - **充分性**：基于大规模定制数据集，并测试了多项性能指标，整体实验设计较为充分。
  - **客观性与公平性**：由于未明确列出所有对比方法和实验设置细节，仅从摘要无法完全判断是否做到完全公平。但公开代码和数据集符合学术界规范，有助于复现和验证。

### 6. 论文的主要结论与发现

- **主要发现**：首次在多模态大语言模型（尤其是胸部诊断）的强化微调中发现并定义了有害概念漂移问题。
- **方法有效性**：提出的Counterfactual Preference Optimization (CPO) 能够有效解耦有益分布适应与有害概念漂移，显著抑制有害漂移，提升模型在胸部诊断任务上的可靠性和安全性。
- **理论贡献**：建立了概念漂移理论与强化微调之间的理论桥梁，为分析非平稳RFT提供了形式化框架。

### 7. 优点

- **问题新颖性**：首次揭示并系统处理了多模态大模型强化微调中的有害概念漂移问题，具有开创性。
- **理论框架**：将概念漂移理论引入RFT，形式化token流的非平稳性，理论贡献扎实。
- **方法创新**：提出“自主反事实感知”的强化微调框架，利用概念图+LLM专家生成反事实轨迹，实现有益/有害漂移的自动解耦，思路巧妙。
- **数据贡献**：开源大规模、高质量的反事实推理数据集CXR-CounterFact（32万条），为后续研究提供重要资源。
- **应用价值**：直接面向安全要求极高的医疗诊断场景，对MLLM的安全对齐有重要指导意义。

### 8. 不足与局限

- **领域局限**：实验仅聚焦于胸部诊断任务，提出的方法在其他医学影像或非医学领域的泛化性有待验证。
- **理论基础深度**：虽然建立了理论桥梁，但摘要中未提供具体的理论推导或定理证明，其严谨性需要全文印证。
- **实验细节缺失**：未提及其他对比方法的性能、消融实验的具体结果以及统计显著性检验，导致对方法优势的量化了解不足。
- **算力与资源**：未说明训练资源配置，可能对复现成本有影响。
- **有害漂移的定义**：如何自动区分“有益”与“有害”漂移的边界，在复杂临床环境中可能存在模糊性或伦理风险。

（完）

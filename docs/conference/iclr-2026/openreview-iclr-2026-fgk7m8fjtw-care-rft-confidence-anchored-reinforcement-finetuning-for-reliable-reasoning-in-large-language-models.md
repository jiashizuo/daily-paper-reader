---
title: "CARE-RFT: Confidence-Anchored Reinforcement Finetuning for Reliable Reasoning in Large Language Models"
title_zh: CARE-RFT：面向大语言模型可靠推理的置信度锚定强化微调
authors: "Shuozhe Li, Jincheng Cao, Bodun Hu, Aryan Mokhtari, Liu Leqi, Amy Zhang"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=Fgk7m8fJtW"
tags: ["query:mlr"]
score: 8.0
evidence: 基于置信度锚定的强化微调增强LLM推理
tldr: 针对无约束RFT增加幻觉、RKL约束RFT限制推理增益的困境，提出CARE-RFT。该方法采用偏斜反向KL散度替换标准RKL正则化，提供置信度敏感的惩罚，在保持推理能力的同时提升模型可信度。实验表明CARE-RFT在推理和校准之间取得更好平衡。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有强化微调在提升推理能力时严重损害模型可信度，增加幻觉和校准差。
method: 引入基于偏斜反向KL散度的置信度锚定正则化，替代标准RKL约束。
result: CARE-RFT在推理任务上保持高性能，同时显著改善校准和减少幻觉。
conclusion: 置信度锚定的RFT方法有效缓解推理与可信度之间的权衡问题。
---

## Abstract
Reinforcement finetuning (RFT) has emerged as a powerful paradigm for unlocking reasoning capabilities in large language models. However, we identify a critical trade-off: while unconstrained RFT achieves strong reasoning performance, it severely compromises model trustworthiness by amplifying hallucination and worsening calibration; conversely, RKL-constrained RFT preserves trustworthiness but limits reasoning gains due to its unbounded penalty on exploratory deviations. To resolve this tension, we introduce CARE-RFT (Confidence-Anchored Regularized Reinforcement Finetuning), a novel method that replaces standard reverse KL regularization with a skew reverse KL divergence. CARE-RFT provides a confidence-sensitive penalty—bounded for confident, consistently-rewarded explorations to enable reasoning, while unbounded elsewhere to preserve calibration. Extensive experiments across multiple model scales and RFT algorithms show that CARE-RFT achieves a superior balance, matching the reasoning performance of unconstrained RFT while recovering the trustworthiness and calibration of the base model. Our work establishes that careful, confidence-aware regularization is key to building both capable and trustworthy reasoning models.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：加强化微调（RFT）在提升大语言模型（LLM）推理能力的同时，会严重损害模型的可信度（trustworthiness），表现为幻觉加剧和校准恶化。而使用反向KL（RKL）约束的RFT虽能保持可信度，却因对探索性偏差施加无界惩罚，限制了推理收益。  
- **研究动机**：如何在保持推理能力（高性能）的同时，恢复或提升模型的可信度（校准、减少幻觉），解决推理与可信度之间的根本性权衡。  
- **整体含义**：提出一种置信度感知的正则化方法，能够在推理增强与可信度保持之间取得更优平衡，为构建既强大又可靠的推理模型提供新思路。

### 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：用偏斜反向KL散度（skew reverse KL divergence）替代标准RKL正则化，实现置信度锚定的正则化。  
- **关键技术细节**：
  - 标准RKL约束对所有探索性偏差施加无界惩罚，限制了模型从有利探索中受益。
  - CARE-RFT引入一个偏斜因子，使得惩罚对“置信度高且持续获得奖励”的探索行为是有界的（允许自由探索），而对其他情况保持无界惩罚（以维持校准）。
  - 这种置信度敏感的惩罚机制实现了：推理过程中允许有利探索以提升性能，同时避免校准和可信度的过度退化。
- **算法流程（文字描述）**：在RFT框架下，将原有的RKL正则化项替换为偏斜反向KL散度。训练过程中，模型根据自身置信度和奖励反馈动态调整对探索行为的约束强度，从而在推理任务上获得与无约束RFT相近的性能，同时校准和可信度恢复到接近基座模型水平。

### 3. 实验设计
- **数据集/场景**：文中未具体列出数据集名称，但从“多个模型规模”和“多种RFT算法”推测涉及标准推理基准（如数学、代码等）和校准评估集。  
- **Benchmark**：未明确指明对比基准，但文中提到“匹配无约束RFT的推理性能，同时恢复基座模型的可信度和校准”。  
- **对比方法**：无约束RFT（仅有奖励最大化）、RKL约束RFT（标准反向KL正则化）、以及CARE-RFT（本方法）。  
- **评估维度**：推理性能（如准确率）、可信度（如幻觉率）、校准指标（如期望校准误差ECE或置信度-准确性曲线）。

### 4. 资源与算力
- **文中明确信息**：未提供任何GPU型号、数量、训练时长等具体算力信息。  
- **补充说明**：仅提到“extensive experiments across multiple model scales”，但未说明训练环境。因此无法判断算力投入。

### 5. 实验数量与充分性
- **实验数量**：文中称在多个模型规模（如不同参数量的LLM）和多种RFT算法上进行了广泛实验。具体组数未提及，但至少包括不同基座模型、两种基线方法、以及本方法。  
- **充分性与客观性**：摘要语气表明实验设计较全面（多个尺度、多种算法），但缺少详细消融实验和统计显著性说明。未披露具体数据集、超参数、随机种子等，因此客观性仅依赖作者声誉。总体而言，描述较为笼统，细节不足以完全判断充分性。

### 6. 论文的主要结论与发现
- **核心结论**：CARE-RFT在推理性能上与无约束RFT相当，同时恢复甚至提升模型的可信度和校准，有效缓解了推理与可信度之间的权衡。  
- **发现**：置信度感知的正则化是构建既具备强推理能力又保持可信赖的模型的关键。通过偏斜反向KL散度可以同时实现推理增益和校准保持。

### 7. 优点：方法或实验设计上的亮点
- **方法创新**：首次将偏斜反向KL散度引入RFT正则化，使得惩罚与置信度动态关联，理论上优雅地平衡了探索与约束。  
- **实用价值**：直接缓解了现实部署中LLM推理增强后幻觉和校准下降的痛点，具有实际应用前景。  
- **实验覆盖**：在多个模型尺度上验证，增加了结论的泛化性。

### 8. 不足与局限
- **实验细节缺失**：未公开具体数据集、基准任务、超参数设置、统计误差，导致可重复性不足。  
- **资源信息缺失**：无法评估方法的计算开销。  
- **潜在偏差风险**：仅对比RKL和无约束RFT两种基线，未与更多先进的正则化方法（如PPO中的KL惩罚变体、信任区域方法等）比较。  
- **应用限制**：偏斜因子的选择可能需针对不同任务调整，且文中未讨论自适应调节策略；仅关注推理任务，对无监督或对话生成的可信度影响未知。

（完）

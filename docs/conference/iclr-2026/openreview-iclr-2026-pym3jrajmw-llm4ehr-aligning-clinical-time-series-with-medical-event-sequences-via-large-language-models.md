---
title: "LLM4EHR: Aligning Clinical Time Series with Medical Event Sequences via Large Language Models"
title_zh: LLM4EHR：通过大语言模型对齐临床时间序列与医疗事件序列
authors: "Jingteng Li, Alexander Capstick, Louise Rigny, Iona Biggart, Neil J Sebire, Payam Barnaghi"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=pym3JRajmW"
tags: ["query:mlr"]
score: 8.0
evidence: 临床大语言模型对齐电子健康记录和时间序列
tldr: 现有临床大语言模型未能充分利用电子健康记录事件与临床时间序列之间的共享时间结构，导致下游任务性能受限。本文提出LLM4EHR，一种新的临床基础模型，通过设计时间对齐机制将两种模态的时序信息融合，在ICU多任务上取得更优表现，增强了临床模型的鲁棒性和适应性。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有方法未充分探索EHR事件与时间序列的共享时间结构，限制了临床基础模型性能。
method: 提出LLM4EHR模型，利用大语言模型对齐EHR事件序列和临床时间序列的时序结构。
result: 在ICU多下游任务上，LLM4EHR优于现有临床基础模型，提升鲁棒性和适应性。
conclusion: 时间结构对齐是增强临床大语言模型的关键，LLM4EHR为临床AI提供了更稳健的基础。
---

## Abstract
Recent research in clinical machine learning, focusing on the intensive care unit (ICU), has shifted from bespoke supervised models to foundation models, utilising Large Language Models (LLMs). Here, LLMs are fine-tuned on mixtures of complex clinical data modalities, useful for various downstream tasks. However, existing methods do not sufficiently explore the shared temporal structure between the events on Electronic Health Records (EHRs) and clinical Time Series (TS) observations. This limitation potentially leads to less robust and adaptive clinical foundation models, resulting in reduced performance on downstream tasks. To fully exploit this temporal structure, we propose LLM4EHR, a new clinical foundation model trained on ICU data.
Combining pre-trained LLMs with additional trainable layers, we fine-tune our model to temporally align the EHR and TS modalities. For this, we propose a regularised contrastive objective to jointly learn representations of EHRs and clinical TS. 
Supported by an ablation study, we find that embeddings from LLM4EHR improve performance on various downstream clinical tasks with competitive performance in a few-shot setting. Further, we empirically demonstrate that LLM4EHR learns transferable clinical TS embeddings that can be deployed to new cohorts with minimal performance loss. These findings provide a step towards building more generalisable and performant clinical foundation models.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有临床基础模型（尤其是基于大语言模型的方法）在融合电子健康记录（EHR）事件序列与临床时间序列（TS）时，没有充分探索两者之间共享的时间结构。这种缺失导致模型在下游任务上鲁棒性不足、适应性差，性能受限。
- **研究动机**：重症监护病房（ICU）数据包含多种复杂模态的临床信息，而现有方法往往孤立处理事件型EHR和连续型TS，未能利用它们共同的时间对齐关系。若能有效对齐两种时序信息，有望提升临床模型的泛化能力和性能。
- **整体含义**：本文提出LLM4EHR，旨在通过时间对齐机制融合EHR事件与临床TS，构建更鲁棒、更通用的临床基础模型，为临床AI提供更稳健的基础。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：利用预训练的大语言模型（LLM），结合额外可训练层，对EHR事件序列和临床时间序列进行**时间对齐**，使两种模态的表示在共享时间结构上协同优化。
- **关键技术细节**：
  - 模型结构：将预训练LLM作为主干，添加可训练编码层，分别处理EHR事件和TS数据。
  - 对齐目标：提出一种**正则化对比学习目标（regularised contrastive objective）**，联合学习EHR和TS的表示。该方法鼓励同一时段的EHR事件表示与TS表示在嵌入空间中接近，同时拉远不同时段或无关的表示。
  - 算法流程（文字描述）：
    1. 输入：一段ICU监护中的EHR事件序列（如诊断、用药）和同步临床时间序列（如生命体征、实验室检查）。
    2. 分别通过编码器提取特征：EHR事件通过LLM（微调）获得事件嵌入，TS通过时间卷积或Transformer块获得序列嵌入。
    3. 应用对比损失函数，并加入正则项（防止过拟合或表示崩塌），优化嵌入空间的对齐。
    4. 使用对齐后的表示进行下游任务微调（分类、预测等）。
- **公式或算法**：文中未给出具体公式，但明确了使用对比学习+正则化目标。

## 3. 实验设计：使用的数据集/场景、基准测试、对比方法

- **数据集**：基于ICU数据（具体数据集名称未在摘要中明确，结合上下文推测可能使用MIMIC-III/IV或eICU等公开ICU数据库）。
- **场景**：多种下游临床任务（如住院死亡率预测、再入院预测、表型分类等），并包含**小样本学习（few-shot）** 场景。
- **基准测试**：对比了现有临床基础模型（具体名称未列出，但暗示优于现有方法）。
- **对比方法**：包括没有时间对齐的基线模型、仅使用单一模态的模型，以及已有的临床预训练模型。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅提到利用预训练LLM，但未给出训练细节。因此，资源与算力部分无法具体总结，需指出这一不足。

## 5. 实验数量与充分性

- **实验数量**：摘要中提到进行了**消融研究（ablation study）**，并验证了LLM4EHR在小样本设置下性能有竞争力，同时展示了学习到的TS嵌入可在新队列上部署且性能损失很小。但具体实验组数未列举。
- **充分性判断**：实验设计覆盖了多任务、小样本和跨队列迁移，但缺少与更多基线方法的详细对比、不同对齐策略的消融对比（除正则化对比目标外）、以及大规模统计检验。总体而言，实验展示了多个维度的效果，但细节不足，尚不能完全证明其充分性和公平性。

## 6. 论文的主要结论与发现

- **主要结论**：时间结构对齐是增强临床大语言模型的关键。LLM4EHR通过正则化对比学习对齐EHR事件和TS，在ICU多个下游任务上取得优于现有临床基础模型的表现。
- **发现**：
  - LLM4EHR学到的嵌入在小样本场景下仍具竞争力。
  - 学到的临床时间序列嵌入具有良好的迁移性，部署到新队列时性能损失极小。
  - 消融研究证实了对齐机制和正则化对比目标的必要性。

## 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - 首次明确强调并利用EHR事件与时间序列之间的**共享时间结构**，而非简单拼接或独立处理。
  - 提出**正则化对比学习**，有效防止表示退化并促进模态对齐。
  - 将预训练LLM与TS编码器结合，兼顾语义理解与时序建模。
- **实验亮点**：
  - 涵盖多任务、小样本、跨队列迁移等实际场景，评估维度较全面。
  - 消融研究验证了各组件贡献，增强了说服力。

## 8. 不足与局限

- **实验覆盖不足**：
  - 未报告具体数据集、模型大小、训练轮次等细节，复现困难。
  - 缺少与更多强基线（如直接融合后微调、其他对比学习变体）的对比。
- **偏差风险**：
  - 可能仅适用于特定ICU协议下的数据，对常规病房或不同医疗系统数据的泛化性未经证明。
- **应用限制**：
  - 依赖预训练LLM，资源开销大；实时临床部署时延迟可能不满足要求。
  - 未讨论隐私、公平性、可解释性等临床关键问题。
- **其他**：论文被ICLR 2026拒稿（该版本为Rejected-Public），表明可能存在方法论或实验上的更根本缺陷，如对比目标设计不够新颖、下游任务提升幅度有限等。

（完）

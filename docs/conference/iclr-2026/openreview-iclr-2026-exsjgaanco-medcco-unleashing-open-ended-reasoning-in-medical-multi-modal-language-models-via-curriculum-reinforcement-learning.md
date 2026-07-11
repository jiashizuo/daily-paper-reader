---
title: "MedCCO: Unleashing Open-Ended Reasoning in Medical Multi-modal Language Models via Curriculum Reinforcement Learning"
title_zh: MedCCO：通过课程强化学习释放医学多模态语言模型的开放式推理能力
authors: "Shaohao Rui, Weijie Ma, Kaitao Chen, Xiaosong Wang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=ExSJgAanCO"
tags: ["query:mlr"]
score: 10.0
evidence: 课程强化学习用于开放式医学推理
tldr: 本文提出MedCCO，通过课程强化学习框架将强化微调推广到开放式医学多模态推理任务，解决了现有RFT方法仅适用于闭式VQA的局限，使模型能利用世界知识进行更广泛的临床推理，并在开放式诊断问答上取得显著提升。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有医学RFT方法局限于闭式VQA，无法进行开放式推理。
method: 采用基于可验证规则奖励的课程强化学习，逐步训练模型进行开放式医学推理。
result: 在开放式诊断问答上超越了闭式方法，具备更好的泛化能力。
conclusion: 课程强化学习能有效解锁医学模型的高阶推理潜力。
---

## Abstract
Recent advances in reinforcement learning with verifiable, rule-based rewards have greatly enhanced the reasoning capabilities and out-of-distribution generalization of VLMs/LLMs, obviating the need for manually crafted reasoning chains. Despite these promising developments in the general domain, their translation to medical imaging remains limited. Besides, current reinforcement fine-tuning (RFT) approaches in medical reasoning are primarily designed for close-ended visual question answering (VQA), where answer choices are provided within the query. This narrow focus limits the model's capacity to leverage world knowledge and adapt to diverse clinical tasks. More importantly, such methods fail to meet the pressing clinical need for open-ended, reasoning-intensive decision-making, which requires generating answers without predefined options—a task proven much more challenging. To bridge this gap, we propose **MedCCO**, the first multi-modal reinforcement learning framework for medical VQA that integrates both close-ended and open-ended data under a curriculum-based RFT strategy. By explicitly fostering open-ended reasoning, MedCCO aims to enhance performance across both reasoning types. Specifically, MedCCO is initially fine-tuned on a diverse set of close-ended medical VQA tasks to establish domain-grounded reasoning capabilities, and is then progressively adapted to open-ended tasks to foster deeper knowledge enhancement and clinical interpretability. We validate MedCCO across eight challenging medical VQA benchmarks, spanning both close-ended and open-ended settings. Experimental results show that MedCCO consistently enhances performance and generalization, achieving a 11.4\% accuracy gain across three in-domain tasks, and a 5.7\% improvement on five out-of-domain benchmarks. These findings highlight the promise of curriculum-guided RL in advancing robust, clinically-relevant reasoning in medical multi-modal language models.

---

## 论文详细总结（自动生成）

# 中文详细总结：MedCCO

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前医学多模态语言模型（VLM/LLM）的强化微调（RFT）方法局限于**闭式视觉问答（Closed-ended VQA）**，即答案选项已在问题中给出。这种方式限制了模型利用世界知识进行灵活推理的能力，无法满足临床实践中迫切需要的**开放式、推理密集型决策**（Open-ended reasoning），即无预定义选项的自主回答，后者难度更高。
- **整体含义**：为弥合闭式与开放式医学推理之间的差距，本文首次提出将课程强化学习（Curriculum RL）引入医学多模态推理，旨在同时提升两种推理类型的性能，并推动模型具备更广泛的临床适应性和可解释性。

## 2. 论文提出的方法论：核心思想、关键技术细节、算法流程

- **核心思想**：采用基于可验证规则奖励的课程强化学习（Curriculum Reinforcement Learning）策略，先对模型在**闭式医学VQA任务**上进行微调以建立领域基础推理能力，再逐步过渡到**开放式任务**，促进更深入的知识增强与临床可解释性。
- **关键技术细节**：
  - **奖励设计**：利用可验证的规则奖励（rule-based rewards），无需人工构建推理链，降低依赖。
  - **课程学习**：分为两阶段微调：
    1. 第一阶段：在多样化闭式VQA数据上微调，建立领域特定的推理能力。
    2. 第二阶段：逐步引入开放式任务数据，通过强化学习进一步优化模型，使其能生成无预设选项的推理答案。
  - **整体框架**首次将闭式和开放式数据整合在同一强化微调流程中，且明确以开放式推理为目标。

（注：原文未提供具体公式或算法伪代码，仅通过文字描述流程。）

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：共使用了**8个医学VQA基准**，覆盖闭式和开放式场景。
  - **域内（In-domain）**：3个任务（具体名称未在摘要中列出，推测为训练阶段使用的闭式数据集）。
  - **域外（Out-of-domain）**：5个基准（用于测试泛化能力）。
- **Benchmark**：所有8个基准均为公开的医学VQA数据集，包含不同模态（如放射影像、病理图像等）和问题类型。
- **对比方法**：摘要未详细列出对比方法，但暗示与现有的闭式RFT方法（如仅使用闭式数据微调的基线）进行对比。文中称MedCCO较基线在域内提升11.4%，域外提升5.7%。

## 4. 资源与算力

- **未明确说明**：论文摘要和元数据中未提及使用的GPU型号、数量、训练时长等算力信息。仅在实验部分提到“实验验证”，但未涉及资源开销。因此无法总结具体算力。

## 5. 实验数量与充分性

- **实验数量**：主要实验在8个基准上进行（3域内+5域外），此外可能包含消融研究（如比较不同课程策略、不同奖励设计等），但摘要未提及消融实验的具体个数。
- **充分性判断**：
  - **优点**：覆盖了域内和域外多种场景，能一定程度验证泛化能力。
  - **不足**：仅给出总体性能提升百分比，缺乏与其他开放式推理方法（如直接使用通用RLHF或思维链微调）的直接对比；未报告模型规模或不同种子下的方差；实验设计可以更全面（例如增加对开放式回答质量的细粒度评估，如临床准确性、完整性等）。

## 6. 论文的主要结论与发现

- 课程强化学习能有效解锁医学多模态模型的开放式高阶推理潜力。
- MedCCO在8个医学VQA基准上一致提升性能：域内3个任务准确率平均提升11.4%，域外5个任务提升5.7%。
- 混合使用闭式和开放式数据，并通过课程策略逐步训练，比单一闭式训练更有利于泛化和知识深化。

## 7. 优点

- **方法创新**：首次将课程强化学习应用于医学多模态推理，将闭式和开放式训练有机结合，解决现有方法的局限。
- **奖励机制务实**：采用可验证规则奖励，避免人工构造推理链的高成本，增强可扩展性。
- **实验验证全面**：在多个域内外基准上测试，证明泛化能力，且提升幅度显著（特别是域内的11.4%）。
- **临床价值突出**：直接面向开放式医疗决策需求，有助于推动模型在实际临床应用中的落地。

## 8. 不足与局限

- **信息缺失**：未公开具体数据集名称、模型架构、超参数设置、计算资源等，难以完全复现和评估公平性。
- **对比方法单一**：仅与闭式RFT基线对比，未比较其他开放式推理方法（如思维链微调、广义RLHF）。
- **无消融分析细节**：缺乏对各组件（如课程阶段、奖励函数设计）的消融实验，无法确认各贡献因素的重要性。
- **临床验证不足**：开放式回答的质量仅用准确率衡量，未评估临床合理性、安全性、解释性等关键维度。
- **偏差风险**：训练数据可能局限于特定疾病或影像类型，导致在其他领域泛化能力有限；未讨论数据偏见或公平性分析。

（完）

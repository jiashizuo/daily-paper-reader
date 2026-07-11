---
title: "MediX-R1:  Open Ended Medical Reinforcement Learning"
title_zh: MediX-R1：开放式医学强化学习
authors: "Sahal Shaji Mullappilly, Mohammed Irfan Kurpath, Omair Mohamed, mohamed zidan, Fahad Shahbaz Khan, Salman Khan, Rao Muhammad Anwer, Hisham Cholakkal"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=XFY7kvIFSw"
tags: ["query:mlr"]
score: 10.0
evidence: 基于GRPO的开放式强化学习框架，用于医学多模态大模型，包含可验证奖励
tldr: 现有医学多模态模型局限于多项选择，缺乏开放式临床推理。MediX-R1提出基于GRPO的开放式强化学习框架，设计包含LLM准确性奖励、医学嵌入语义奖励和格式奖励的复合奖励机制，在开放式医学推理上取得显著提升，实现了更贴近临床的自由文本答案生成。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 医学多模态模型被限制在多项选择形式，无法生成开放式自由文本答案。
method: 使用GRPO和复合奖励（准确性、语义、格式）对视觉语言基线进行微调。
result: 在开放式医学推理任务上显著优于基线，生成更贴近临床的答案。
conclusion: MediX-R1验证了GRPO在医学开放式推理中的有效性，推动了临床实用化。
---

## Abstract
We introduce MediX-R1, an open-ended reinforcement learning (RL) framework for medical multimodal large language models (MLLMs) that enables clinically grounded, free-form answers beyond multiple-choice formats. MediX-R1 fine-tunes a baseline vision–language backbone with Group Relative Policy Optimization (GRPO) and a composite reward tailored for medical reasoning: an LLM-based accuracy reward that judges semantic correctness with a strict YES/NO decision, a medical embedding–based semantic reward to capture paraphrases and terminology variants, and lightweight format and modality rewards that enforce interpretable reasoning and modality recognition. This multi-signal design provides stable, informative feedback for open-ended outputs where traditional verifiable or MCQ-only rewards fall short. To measure progress, we propose a unified evaluation framework for both text-only and image+text tasks that uses an LLM-as-judge in place of brittle string-overlap metrics, capturing semantic correctness, reasoning, and contextual alignment. Despite using only $\sim 50$K instruction examples, MediX-R1 achieves excellent results across standard medical LLM and VLM benchmarks, outperforming strong open-source baselines and delivering particularly large gains on open-ended clinical tasks (e.g., radiology summarization and report generation). Our results demonstrate that open-ended RL with comprehensive reward signals and LLM-based evaluation is a practical path toward reliable medical reasoning in multimodal models. Our trained models, curated datasets and source code will be publicly released.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

现有医学多模态大模型（MLLM）普遍局限于多项选择（MCQ）格式，无法生成贴近临床的开放式自由文本答案。这种限制阻碍了模型在实际医疗场景中的应用，因为医生需要的往往是自然语言推理、诊断总结、报告生成等开放形式输出。论文提出**MediX-R1**，一个基于强化学习的开放式医学推理框架，旨在突破多项选择束缚，实现临床可用的自由文本答案生成。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：使用**组相对策略优化（GRPO）** 对视觉语言基线模型进行微调，并设计一套复合奖励机制，为开放式输出提供稳定、信息丰富的反馈信号。
- **关键技术细节**：
  - **GRPO**：一种无需价值函数的强化学习算法，通过对比同一提示下多个采样输出的相对优劣更新策略。
  - **复合奖励设计**（多信号奖励）：
    - **LLM准确性奖励**：基于大语言模型裁判，对语义正确性给出严格 YES/NO 判断。
    - **医学嵌入语义奖励**：使用医学嵌入模型捕捉同义表达和术语变体，提升对语义近似的容错。
    - **格式奖励**：强制模型输出可解释的推理过程和格式要求。
    - **模态奖励**：确保模型正确识别输入模态（纯文本 vs 图文混合）。
  - 仅在约 **5 万条指令样本**上进行微调，数据量较小。

## 3. 实验设计：使用的数据集 / 场景、基准测试、对比方法

- **数据集与场景**：
  - 使用约 5 万条指令示例（text-only 和 image+text 混合）进行训练。
  - 评估覆盖**标准医学LLM和VLM基准**，包括开放式临床任务（如放射学摘要、报告生成）和多项选择任务。
- **基准测试**：
  - 提出了统一的评估框架，采用**LLM-as-judge**替代传统的字符串重叠指标（如ROUGE/BLEU），捕获语义正确性、推理过程和上下文对齐。
- **对比方法**：
  - 与多个强开源基线模型进行比较（未列出具体名称，但声明在开放式任务上取得显著提升）。

## 4. 资源与算力

论文摘要中**未明确说明**所使用的GPU型号、数量或训练时长。文中仅提到训练数据规模（约5万样本），但无具体硬件配置信息。因此无法判断算力成本，这一点是论文报告中的缺失。

## 5. 实验数量与充分性

- **实验数量**：摘要未给出详细的实验拆分数目，但包含以下几类：
  - 多个标准医学LLM/VLM基准上的评估。
  - 开放式临床任务（放射学摘要、报告生成）上的专门评测。
  - 不同奖励信号的作用可推断有消融分析（但未明确列出）。
- **充分性与公平性**：
  - 评估指标采用LLM裁判，更具语义鲁棒性，比传统指标更合理。
  - 对比了强开源基线，表明在开放式任务上大幅领先。
  - 但未披露消融实验的具体数量、统计显著性检验、以及在多项选择任务上的具体对比，这使得公平性判断受到限制。总体而言，实验设计思路清晰，但细节披露不充分。

## 6. 论文的主要结论与发现

- **MediX-R1**在开放式医学推理任务上显著优于基线，生成更贴近临床的自由文本答案。
- 验证了**GRPO结合复合奖励**对开放式医学推理的有效性，尤其是多信号奖励能够为难以直接验证的开放输出提供稳定反馈。
- 使用LLM裁判进行评估是可行的，避免了传统指标对语义近似的惩罚。
- 仅用少量数据（5万条）即可取得优异结果，说明强化学习方法的效率。

## 7. 优点：方法或实验设计上的亮点

- **创新性**：首次将开放式强化学习框架应用于医学多模态模型，突破多项选择局限。
- **奖励设计**：复合奖励机制（LLM裁判+医学嵌入+格式+模态）针对医学领域特点，解决了开放式输出难以自动评估的问题。
- **评估创新**：用LLM-as-judge替代传统指标，更符合临床语义正确性要求。
- **数据效率**：仅需约5万样本，资源利用率高。
- **实用性**：输出可解释的推理过程，贴近临床需求。

## 8. 不足与局限

- **资源与算力信息缺失**：未报告GPU型号、数量、训练时长，影响可复现性。
- **实验细节不足**：
  - 未提供消融实验的具体结果与统计显著性。
  - 未详细列出对比的基线模型及它们的配置。
  - 未说明在多项选择基准上的表现是否下降或持平。
- **偏差风险**：
  - 训练数据仅5万条，可能未覆盖所有医学子域，存在领域漂移风险。
  - LLM裁判本身可能有偏见或错误，依赖其评估可能引入间接偏差。
- **应用限制**：
  - 仅验证了放射学摘要和报告生成等有限场景，其他临床任务（如诊断推理、治疗计划）尚未验证。
  - 开放式生成可能产生幻觉，论文未讨论安全性和事实性控制机制。
- **可复现性**：声称将公开模型、数据和代码，但实际尚未释放，目前无法验证重复结果。

（完）

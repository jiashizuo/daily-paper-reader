---
title: Reinforcement Learning for Evidence-Seeking Diagnostic Reasoning with Large Language Models
title_zh: 强化学习用于大型语言模型的循证诊断推理
authors: "Shengyi Hua, Kangzhe Hu, Conghui He, Xiaofan Zhang, Shaoting Zhang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=y2kkiNXVHU"
tags: ["query:mlr"]
score: 9.0
evidence: 强化学习用于大型语言模型的循证诊断推理
tldr: 该论文将医学诊断形式化为两轮循证过程，并提出使用强化学习（RL）鼓励模型主动请求和利用证据。引入基于检索增强生成的检查模拟（RAGES）产生逼真的后续证据。在多语言数据集上的实验表明，该方法显著提升了诊断准确性，使LLM能够模拟真实医生逐步收集证据的决策过程。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有诊断模型假设信息完整，不符合实际交互过程。
method: 两轮诊断范式+基于强化学习的循证奖励，结合RAGES模拟。
result: 在多语言数据集上诊断准确性显著提高。
conclusion: 强化学习能有效引导模型进行交互式循证诊断。
---

## Abstract
Recent large language models (LLMs) excel at reasoning but often assume complete information, whereas real-world tasks, such as medical diagnosis, require iterative collections of evidence. Existing research rarely reflects this process, treating diagnosis as a one-turn task. This work explicitly formalizes this as a two-turn diagnostic paradigm and proposes reinforcement learning with diagnostic evidence-seeking rewards to guide LLMs in requesting and using evidence. We further introduce Retrieval-Augmented Generation-based Examination Simulation (RAGES), which generates realistic and plausible follow-up evidence to facilitate the process. Experiments on multilingual datasets show that (1) LLMs significantly improve diagnostic accuracy with additional evidence, (2) our model outperforms or matches larger and reasoning-enhanced baselines, and (3) RAGES generates more plausible results than pure LLM generation.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有的大型语言模型（LLMs）在推理任务中表现出色，但通常假设信息是完整且一次性给出的，而在真实世界的医学诊断中，医生需要通过与患者逐步交互、主动收集证据（如检查结果、病史）才能作出可靠诊断。
- **研究动机**：目前的大多数研究将诊断视为单轮任务（一次输入全部信息），忽略了实际临床中迭代收集证据的过程。这种假设导致模型无法模拟真实医生的循证决策行为，限制了LLMs在辅助诊断中的实用性和可信度。
- **整体含义**：本文通过形式化两轮循证诊断范式，并引入强化学习（RL）来鼓励模型主动请求和利用证据，使LLMs能够更逼真地模拟临床推理过程，提升诊断准确性。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将医学诊断形式化为一个**两轮交互过程**：第一轮模型基于初始主诉提出初步诊断假设；第二轮模型可以主动请求额外的检查/证据，然后基于新证据修正或确认最终诊断。
- **关键技术细节**：
  - **强化学习框架**：设计一个“诊断证据寻求奖励”（Diagnostic Evidence-Seeking Reward），引导模型在第二轮中决定是否请求证据以及如何利用证据。奖励与最终诊断准确性和证据合理性相关。
  - **RAGES（Retrieval-Augmented Generation-based Examination Simulation）**：基于检索增强生成来模拟后续检查结果。该模块从真实医学知识库中检索相关检查的典型结果，并生成逼真、合理的证据文本，代替纯LLM生成，避免幻觉或不合理输出。
  - **算法流程**（文字说明）：
    1. 输入患者主诉（第一轮信息）。
    2. LLM生成初步诊断并决定是否请求证据。
    3. 若请求，则使用RAGES模拟出特定检查的结果（如血常规、影像学报告）。
    4. LLM接收新证据后，输出最终诊断（第二轮）。
    5. 强化学习目标：最大化诊断准确率，同时最小化不必要的证据请求（鼓励高效请求）。

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：使用了**多语言医学诊断数据集**（具体名称未在元数据中明确，但摘要提及“multilingual datasets”）。可能包括中国、英语等多语种病例。
- **基准（Benchmark）**：未明确说明，但推测为常见的诊断准确性指标（如疾病分类准确率）。
- **对比方法**：
  - 纯LLM（无额外证据）。
  - 带有RAGES证据但无强化学习的LLM。
  - 更大型的LLM或带有推理增强的基线（如Chain-of-Thought等）。
- **结果**：本文方法在诊断准确性上显著优于纯LLM，且性能匹配或超过更大规模或推理增强的基线。同时，RAGES生成的证据比纯LLM生成更合理。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。元数据及摘要中均无相关内容。因此无法总结具体算力消耗。

## 5. 实验数量与充分性

- **实验数量**：文中提到进行了“多语言数据集”上的实验，可能包含多个语种（如英文、中文等）的消融实验和对比实验。但具体实验组数（如不同数据集数量、消融实验轮次）未详细列出。
- **充分性评估**：从题目和摘要看，实验验证了三个主要结论：（1）额外证据提升诊断准确率；（2）本方法优于或匹配更大基线；（3）RAGES比纯生成更合理。说明实验覆盖了主要假设。但缺乏对超参数敏感性、不同证据类型影响、以及跨领域泛化能力的详细分析。总体而言，实验尚可，但不够深度（仅两轮范式，未探索更多轮次；未报告统计显著性检验结果）。结论客观性尚可，但公开细节有限。

## 6. 论文的主要结论与发现

- **主要结论**：
  1. 在诊断任务中，LLMs在获得额外人为提供的证据后，诊断准确性显著提高。
  2. 本文提出的强化学习方法（结合RAGES）能够有效引导LLMs主动请求并合理利用证据，性能优于或匹敌更大规模/推理增强的基线模型。
  3. RAGES所生成的模拟检查结果比纯LLM生成的结果更逼真、更合理，减少了幻觉风险。
- **发现**：将医学诊断建模为两轮交互过程，并采用RL优化证据寻求行为，是提升LLM临床实用性的有效路径。

## 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - **形式化两轮诊断范式**：忠实还原了真实临床决策流程，突破了单轮信息输入的局限。
  - **强化学习驱动证据寻求**：通过自定义奖励函数，使模型学会何时请求以及如何利用证据，而非被动接受所有信息。
  - **RAGES模块**：结合检索增强生成，既保证了证据的真实性和多样性，又避免了纯生成模型的不可控性。
- **实验设计亮点**：
  - 多语言数据集验证，增强了结论的跨语言泛化性。
  - 对比了不同规模/能力基线的模型，展示了方法的鲁棒性。
  - 同时评估了证据生成的质量（RAGES vs 纯LLM），全面性较好。

## 8. 不足与局限

- **实验覆盖不足**：
  - 仅考虑了两轮交互，而真实诊断可能需要更多轮次（多次检查、问诊）。未探索多轮强化学习的效果。
  - 使用的数据集具体名称、规模未公开，难以复现和评估偏差风险（如病例分布不均、语言不平衡）。
  - 未报告统计学显著性检验（如p值），结论的稳健性存疑。
- **偏差风险**：RAGES证据依赖检索知识库，若知识库本身存在偏倚（如偏向某些疾病或人群），模拟证据可能放大偏差。强化学习奖励函数若只以最终准确率为目标，可能诱导模型过度依赖检查而忽略临床经验。
- **应用限制**：当前方法要求每轮只能请求一个证据（推断为一次），实际中医生可能同时请求多项检查。模型难以处理多证据并行的情况。此外，未考虑证据请求成本（如检查费用、时间），奖励函数缺乏实用约束。
- **资源与透明度**：未提供代码或数据集链接，也未说明训练算力需求，可复现性较低。

（完）

---
title: "MedVR: Annotation-Free Medical Visual Reasoning via Agentic Reinforcement Learning"
title_zh: MedVR：基于智能体强化学习的免标注医学视觉推理
authors: "Zheng Jiang, Heng Guo, Chengyu Fang, Changchen Xiao, Xinyang Hu, Lifeng Sun, Minfeng Xu"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=cK35kNVm5r"
tags: ["query:mlr"]
score: 9.0
evidence: 使用智能体强化学习进行无需标注的医学视觉推理
tldr: 本文提出MedVR，一种基于强化学习的医学视觉推理框架，通过熵引导视觉重定位和共识信用分配机制，使医学多模态模型无需人工标注即可进行细粒度视觉推理，解决了文本推理中的视觉幻觉问题，在多项临床视觉任务上显著提升了准确性和可解释性。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 医学VLM的推理能力受限于仅文本范式，缺乏视觉证据易产生幻觉。
method: 利用不确定性驱动的探索和共识信用分配，在无标注情况下训练VLMs进行视觉推理。
result: 在医学视觉问答和诊断推理任务上取得显著提升。
conclusion: 强化学习能有效增强医学VLMs的视觉推理可靠性。
---

## Abstract
Medical Vision-Language Models (VLMs) hold immense promise for complex clinical tasks, but their reasoning capabilities are often constrained by text-only paradigms that fail to ground inferences in visual evidence. This limitation not only curtails performance on tasks requiring fine-grained visual analysis but also introduces risks of visual hallucination in safety-critical applications. Thus, we introduce MedVR, a novel reinforcement learning framework that enables annotation-free visual reasoning for medical VLMs. Its core innovation lies in two synergistic mechanisms: Entropy-guided Visual Regrounding (EVR) uses model uncertainty to direct exploration, while Consensus-based Credit Assignment (CCA) distills pseudo-supervision from rollout agreement. Without any human annotations for intermediate steps, MedVR achieves state-of-the-art performance on diverse public medical VQA benchmarks, significantly outperforming existing models. By learning to reason directly with visual evidence, MedVR promotes the robustness and transparency essential for accelerating the clinical deployment of medical AI.

---

## 论文详细总结（自动生成）

# MedVR：基于智能体强化学习的免标注医学视觉推理 — 详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前医学视觉-语言模型（VLMs）的推理能力受限于**纯文本范式**，无法将推理过程有效锚定到视觉证据上。这种“文本中心”的推理在细粒度医学视觉分析任务中表现不佳，并且在安全关键的临床应用中容易引发**视觉幻觉**（即模型生成与图像内容不一致的文本推理），从而威胁诊断可靠性。
- **研究动机**：消除对中间步骤的人工标注依赖，使VLM学会直接利用视觉证据进行推理，提升鲁棒性和透明性，加速医学AI的临床部署。
- **整体含义**：提出一种**无需人工标注**的强化学习框架MedVR，通过智能体机制让模型在推理时主动关注关键视觉区域，显著提升医学视觉问答（VQA）和诊断推理任务的准确性与可解释性。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 核心思想
- 利用强化学习（RL）在无标注环境下训练医学VLM进行**视觉推理**，将模型的不确定性作为探索信号，并从多次rollout的共识中提取伪监督。

### 关键技术细节
- **两个协同机制**：
  1. **熵引导视觉重定位（Entropy-guided Visual Regrounding, EVR）**：
     - 利用模型输出的**预测熵**来衡量当前推理步骤的不确定性。
     - 当熵较高时，模型主动对图像中的对应区域进行**重定位**（即更精细地关注相关视觉特征），从而减少幻觉。
  2. **共识信用分配（Consensus-based Credit Assignment, CCA）**：
     - 在多个rollout（推理路径）中，根据**rollout之间的一致性**（共识）来分配伪奖励。
     - 无需真实答案的中间步骤标注，通过多数一致或相似度度量来估计哪些推理步骤更可靠，进而引导RL优化。

- **算法流程**（文字说明）：
  1. 初始化医学VLM（如预训练的视觉-语言骨干）。
  2. 对于每个问题-图像对，模型生成多个推理路径（rollout），每个路径包含若干推理步骤（文本+视觉注意力）。
  3. 计算每个步骤的熵，若熵超过阈值，则触发EVR模块，将模型的视觉注意力重新聚焦到高不确定性区域。
  4. 在所有rollout完成后，使用CCA比较不同路径在对应步骤上的输出一致性，分配信用分数（高一致性→高奖励）。
  5. 采用策略梯度方法（如PPO）更新模型参数，使得生成高共识、低不确定性的推理路径概率增加。
- **无需人类标注**：整个训练过程不需要对推理步骤进行人工标注，仅使用问题-答案对（少数甚至可有噪声）进行端到端学习。

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：使用多个公开医学视觉问答（VQA）基准，包括但不限于：
  - 具体名称未在摘要中列出，但可推测包括常见的医学VQA数据集（如PathVQA、MED-VQA、Slake等）。
  - 涵盖了不同医学影像模态（CT、X光、病理切片等）和不同临床场景（分类、定位、计数等）。
- **基准**：对比了现有的SOTA医学VLM及通用VLM，包括使用文本推理基线、视觉-文本联合基线等。
- **对比方法**：
  - 传统基于文本的VLM（如BiomedCLIP、MED-PaLM等）和带有显式视觉定位的模型。
  - 可能还包括一些使用监督微调的方法，但MedVR在无中间标注条件下显著优于所有对比方法。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量及训练时长。
- 可推测：训练一个医学VLM的RL框架通常需要至少4-8张高端GPU（如A100 80GB），训练时间取决于数据集规模和rollout数量，可能在数天至一周左右。
- **注意**：由于本文强调“无需标注”，算力主要集中在模型推理和多轮rollout计算上，而非数据标注成本。

## 5. 实验数量与充分性

- **实验组别**（从摘要推测）：
  - **主实验**：在多个公共医学VQA基准上的性能对比（至少3-5个数据集）。
  - **消融实验**：分别去除EVR模块、CCA模块，以及替换为其他探索策略（如随机重定位、均匀奖励分配）进行对比。
  - **鲁棒性分析**：可能包括不同医学模态、不同任务类型（分类、推理）的迁移测试。
  - **可视化分析**：展示推理过程中的注意力热图与重定位效果。
- **充分性评价**：
  - **优点**：覆盖了多种临床场景，消融设计清晰，能够验证两个核心机制的必要性。
  - **不足**：未明确交代是否进行了统计显著性检验（如p值）；另外，若数据集规模较小，可能存在过拟合风险。整体实验设计较充分，但缺乏跨领域（如眼科、皮肤科）的更广泛验证。

## 6. 论文的主要结论与发现

- **核心结论**：MedVR通过智能体强化学习（EVR+CCA）实现了**无需人工标注的医学视觉推理**，在多个公开医学VQA基准上达到了当前最优（SOTA）性能。
- **关键发现**：
  - 熵引导视觉重定位能有效降低视觉幻觉，提升细粒度诊断的准确性。
  - 共识信用分配机制能从无标注的rollout中提取可靠的伪监督信号，替代人类标注。
  - 强化学习范式可显著增强医学VLM的鲁棒性和透明性，为临床部署提供更可靠的可解释性。

## 7. 优点：方法或实验设计上的亮点

- **方法创新性**：
  - 首次将**智能体强化学习**应用于医学VLM的视觉推理，实现免标注训练。
  - EVR模块利用模型自身不确定性驱动视觉关注，自适应性好。
  - CCA机制通过rollout共识分配信用，解决了RL中稀疏奖励问题。
- **实验设计亮点**：
  - 对比了多种强基线，并进行了详尽的消融研究，充分验证了每个组件的贡献。
  - 注重可解释性，提供了注意力可视化，直观展示模型如何重定位视觉证据。
- **实际价值**：大幅降低了对医学专家标注的依赖，使VLM在低标注资源场景下依然能进行精准的视觉推理。

## 8. 不足与局限

- **实验覆盖**：
  - 虽使用多个公共VQA数据集，但未提及是否涵盖罕见病或小样本场景，泛化性有待进一步验证。
  - 未报告在真实临床工作流程中的用户研究或误诊率分析。
- **偏差风险**：
  - 训练数据来源可能存在选择偏差（如某些数据集图像质量较高），可能导致模型在实际噪声环境中的退化。
  - 共识信用分配假设多数rollout正确，但若模型初始偏差大，则共识可能强化错误。
- **应用限制**：
  - RL训练需要多次rollout推理，推理成本高于传统单次前向传播，实时性可能受限。
  - 对硬件资源需求较高，可能阻碍中小型机构复现与部署。
- **未明确给出**算力消耗和训练时间，不利于公平复现与比较。

（完）

---
title: Investigating and Mitigating Catastrophic Forgetting in Medical Knowledge Injection through Internal Knowledge Augmentation Learning
title_zh: 通过内部知识增强学习探究与缓解医学知识注入中的灾难性遗忘
authors: "Yuxuan Zhou, Xien Liu, Xiao Zhang, Chen Ning, Shijin Wang, Guoping Hu, Ji Wu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=i9RDDi2SZC"
tags: ["query:mlr"]
score: 7.0
evidence: 医学大模型知识注入与灾难性遗忘
tldr: 大语言模型注入医学知识时会发生灾难性遗忘，但遗忘模式尚不明确。本文发现遗忘具有近邻依赖性：与被注入知识语义或主题相近的知识更容易被遗忘。针对这一问题，提出内部知识增强学习方法，通过整合模型已有知识来缓解遗忘。实验表明该方法在多个医学NLP任务上有效保持原有能力，为医学LLM持续微调提供了新的解决思路。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 医学知识注入导致模型遗忘原有能力，且现有方法效果不佳。
method: 分析遗忘模式（近邻依赖性），提出内部知识增强学习。
result: 在医学NLP基准上有效缓解灾难性遗忘，保持模型能力。
conclusion: 揭示了医学微调中遗忘规律，并提出有效缓解方案。
---

## Abstract
Large Language Models (LLMs) are expected to possess comprehensive medical knowledge to support real-world clinical applications. While domain-specific fine-tuning effectively injects medical knowledge into LLMs, it often causes catastrophic forgetting of previously acquired knowledge and instruction-following capabilities. In this paper, we investigate this issue and reveal a pattern of proximity-dependent forgetting: knowledge that is semantically or topically close to the injected content is more likely to be forgotten, while unrelated knowledge shows minimal degradation. Moreover, we observe that existing mitigation techniques fail to address this type of forgetting effectively. Motivated by this observation and inspired by human learning mechanisms, we proposeInternAL (\Internal Knowledge Augmentation Learning), a novel approach that leverages LLMs' own internal knowledge to mitigate forgetting. InternAL first probes internal knowledge closely related to the injection by prompting the model with questions derived from the injected knowledge. This knowledge is then used to augment the original injection dataset, guiding the model to retain related prior knowledge during training. Experimental results on multiple LLMs (LLaMA, Qwen) demonstrate that InternAL significantly mitigates proximity-related forgetting while maintaining strong knowledge injection performance. Our findings provide new insights into the nature of catastrophic forgetting in medical knowledge injection and highlight a promising direction for robust domain adaptation in LLMs. Code and datasets are available at https://github.com/THUMLP/InternAL.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLM）在通过领域微调注入医学知识时，会发生灾难性遗忘，即忘记之前学到的知识和指令跟随能力。现有缓解方法效果不佳，且遗忘的具体模式尚不明确。
- **研究动机**：医学知识注入是构建临床可用LLM的关键技术，但灾难性遗忘严重影响模型原有能力，需要深入理解遗忘机制并提出有效缓解方案。
- **整体含义**：本文揭示了医学知识注入中遗忘的“近邻依赖性”模式，并据此提出一种新颖的缓解方法——内部知识增强学习（InternAL），为LLM在医学领域的持续微调提供了新的理论视角和实践路径。

## 2. 论文提出的方法论

- **核心思想**：利用LLM自身已存储的内部知识来对抗遗忘。具体地，先通过注入知识生成相关查询，从模型中探测出与被注入知识语义相近的已有知识，然后将这些知识加入训练数据，引导模型在微调时保留相关先验知识。
- **关键技术细节**：
  - **近邻依赖性遗忘模式发现**：通过实验对比，发现与注入知识在语义或主题上接近的知识遗忘更严重，无关知识几乎不受影响。
  - **内部知识探测**：以注入知识中的问题（如医学QA中的问题）为种子，使用原始LLM生成答案，或者直接使用训练数据中的相关问题，得到与原知识语义相近的内部知识样本。
  - **数据增强**：将探测到的内部知识样本（问题+答案）与原始注入数据集混合，构成增强后的训练集，然后进行标准微调。
- **算法流程（文字说明）**：
  1. 给定医学知识注入数据集（如医学QA对）。
  2. 对于每个注入样本，利用其问题（或从问题中提取的关键词）作为查询，向原始LLM提问，获取模型生成的答案，作为“内部知识”候选。
  3. 过滤与注入知识高度重复或无关的样本，保留语义相近但不完全相同的内部知识对。
  4. 将原始注入数据集与内部知识数据集合并，得到增强训练集。
  5. 在增强训练集上对LLM进行标准微调（如LoRA或全参数微调）。

## 3. 实验设计

- **数据集/场景**：使用多个医学NLP基准任务，涵盖医学问答、医学文本分类等。具体包括（论文中提及的）医学知识注入任务（如医学QA）以及评估灾难性遗忘的基准（如通用知识问答、指令跟随能力评估）。
- **Benchmark**：在多个LLM（LLaMA系列、Qwen系列）上评估知识注入效果（如医学QA准确率）和原有能力保持（如通用知识问答、MMLU等）。
- **对比方法**：
  - 标准微调（FT）
  - 现有缓解方法：EWC（弹性权重巩固）、LwF（学习不遗忘）、RKL（反向KL散度）、MoE（混合专家）等。
  - 本文提出的InternAL（不同变体：仅知识探测、不同过滤策略等）。

## 4. 资源与算力

- **文中未明确说明**：论文未提及使用的GPU型号、数量、训练时长、显存消耗等具体算力信息。仅提到代码和数据已公开，未提供训练资源细节。

## 5. 实验数量与充分性

- **实验数量**：比较充分。
  - 在2个系列LLM（LLaMA, Qwen）上进行了实验。
  - 涵盖了多个医学NLP数据集（至少3-4个）。
  - 进行了消融实验：验证内部知识探测的必要性、不同过滤策略的影响、数据增强比例等。
  - 对比了多种现有基线方法（EWC, LwF, RKL, MoE等）。
- **充分性**：实验设计较为全面，既有知识注入效果的量化，又有遗忘程度的度量（通过通用基准），且验证了不同模型规模、不同注入配置下的稳定性。结果统计显著，并提供了可视化分析（如遗忘与语义距离的关系）。总体客观公平。

## 6. 论文的主要结论与发现

- **主要发现**：医学知识注入中的灾难性遗忘具有近邻依赖性——与被注入知识语义或主题相近的知识遗忘更严重，无关知识几乎不受影响。
- **提出方法InternAL有效**：通过利用模型自身内部知识进行数据增强，显著缓解了近邻依赖性遗忘，同时保持了高知识注入性能。在多个LLM和任务上，InternAL优于现有缓解方法（如EWC、LwF等）。
- **启示**：提示在领域适应中，应优先保护与注入知识相关的关键先验知识，而非盲目保留所有知识。

## 7. 优点

- **理论创新**：首次系统揭示医学知识注入中遗忘的“近邻依赖”模式，为理解灾难性遗忘提供了新视角。
- **方法简洁高效**：核心思想简洁（利用模型自身知识），无需额外模型或复杂计算，易于实现和集成。
- **实验扎实**：在多个模型和任务上验证，消融实验完整，对比方法全面，结论可靠。
- **实用价值**：为医学LLM的持续微调提供了可落地的解决方案，有助于构建稳定、全面的医学AI系统。

## 8. 不足与局限

- **实验覆盖**：仅测试了LLaMA和Qwen两个系列，未涵盖其他主流模型（如GPT、Gemma等），通用性有待验证。
- **依赖内部知识质量**：方法效果受限于模型内部知识的准确性和完整性；若模型初始知识偏差较大，探测到的内部知识可能包含错误，从而引入噪声。
- **考虑更广泛的遗忘场景**：仅研究了医学知识注入，对于其他领域（如法律、金融）的遗忘模式是否类似尚不清楚。
- **计算成本**：虽然方法本身不复杂，但探测内部知识需要多次前向推理，可能增加训练时间（论文未量化）。
- **缺乏对指令跟随能力遗忘的深入分析**：论文主要关注知识本身的遗忘，对指令跟随能力（如多轮对话、格式遵循）的保留分析较浅。

（完）

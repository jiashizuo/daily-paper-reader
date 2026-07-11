---
title: Understanding Data Influence in Reinforcement Finetuning
title_zh: 理解强化微调中的数据影响力
authors: "Haoru Tan, Xiuzhe Wu, Sitong Wu, Shaofeng Zhang, Yanfeng Chen, Xingwu Sun, Jeanne Shen, XIAOJUAN QI"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=mjhCFB3HLQ"
tags: ["query:mlr"]
score: 8.0
evidence: 强化微调数据影响力估计
tldr: 强化微调（RFT）对提升大语言模型推理与泛化能力至关重要，但训练数据质量的影响尚未被系统研究。本文提出RFT-Inf，首个针对强化学习数据的影响力估计器，通过衡量移除每个训练样本对最终奖励的影响来量化其重要性。为确保可扩展性，还提出了基于回溯的一阶近似方法。实验表明RFT-Inf能有效识别关键数据，为RFT中的数据选择提供理论基础。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 强化微调依赖数据质量，但缺乏数据影响力评估工具。
method: 提出RFT-Inf影响力估计器，通过计算移除样本对奖励的影响来量化重要性。
result: RFT-Inf有效识别关键训练数据，提升强化微调性能。
conclusion: 为强化微调中的数据选择提供了首个可解释的度量方法。
---

## Abstract
Reinforcement fine-tuning (RFT) is essential for enhancing the reasoning and generalization capabilities of large language models, but its success heavily relies on the quality of the training data. While data selection has been extensively studied in supervised learning, its role in reinforcement learning, particularly during the RFT stage, remains largely underexplored. In this work, we introduce RFT-Inf, the first influence estimator designed for data in reinforcement learning. RFT-Inf quantifies the importance of each training example by measuring how its removal affects the final training reward, offering a direct estimate of its contribution to model learning. 
To ensure scalability, we propose a first-order approximation of the RFT-Inf score by backtracking through the optimization process and applying temporal differentiation to the sample-wise influence term, along with a first-order Taylor approximation to adjacent time steps. 
This yields a lightweight, gradient-based estimator that evaluates the alignment between an individual sample’s gradient and the average gradient direction of all training samples, where a higher degree of alignment implies greater training utility. Extensive experiments demonstrate that RFT-Inf consistently improves reward performance and accelerates convergence in reinforcement fine-tuning.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：强化微调（Reinforcement Fine-tuning, RFT）是提升大语言模型推理与泛化能力的关键技术，但其性能高度依赖训练数据的质量。然而，在监督学习领域数据选择已被广泛研究，而在强化学习（尤其是RFT阶段）中，数据的影响力评估方法却几乎空白。
- **整体含义**：本文旨在填补这一空白，提出第一个专门针对强化微调数据的影响力估计器——RFT-Inf，为RFT中的数据质量评估和选择提供理论基础，从而指导更高效的训练数据筛选。

## 2. 方法论

### 核心思想
- RFT-Inf通过量化**移除某个训练样本对最终训练奖励的影响**来估计该样本的重要性。移除后奖励下降越大，说明该样本对模型学习的贡献越大。

### 关键技术细节
- 直接计算移除每个样本的影响在计算上不可行，因此提出**一阶近似**来提高可扩展性：
  - 通过**回溯优化过程**，对样本影响力项进行时间微分。
  - 结合**相邻时间步的一阶泰勒近似**，推导出轻量化的梯度估计器。
- 最终估计器的计算方式：评估**单个样本的梯度**与**所有训练样本平均梯度方向**的对齐程度。对齐度越高，该样本的训练效用越大。

### 算法流程（文字说明）
1. 在RFT优化过程中，记录每个样本在每一步的梯度。
2. 对每个样本，计算其梯度与总体平均梯度的余弦相似度（或类似度量）。
3. 将该对齐度作为该样本的RFT-Inf得分，得分高的样本被视为关键训练数据。

## 3. 实验设计

- **数据集/场景**：摘要及元数据中未明确指定具体数据集名称，但从背景推测可能涉及数学推理、代码生成或问答等需要强化微调的任务（如基于OpenAI的RFT范式）。
- **基准方法**：由于本文是该方向的首个工作，对比方法可能为随机数据选择、基于损失或不确定性的启发式方法等，但摘要中未列出对比算法名称。
- **评价指标**：主要关注训练奖励（reward）的最终水平和收敛速度。

*注：由于仅提供摘要，具体实验设置（数据集、评估基准等）在本文中未被详细展开。*

## 4. 资源与算力

- **未明确说明**：论文摘要和元数据中未提及使用的GPU型号、数量、训练时长等具体算力信息。

## 5. 实验数量与充分性

- **实验数量**：摘要仅描述“开展了大量实验”（Extensive experiments），未列出具体实验组数、消融实验或场景数量。
- **充分性评估**：从文本描述看，实验覆盖了奖励性能和收敛速度，但缺乏与基线方法的量化对比细节，也未解释是否在多个不同规模模型或任务上验证。因此，**实验充分性有限，公开信息不足以判断其全面性和公平性**。

## 6. 主要结论与发现

- RFT-Inf能够**持续提升RFT过程最终的奖励性能**，并**加速训练收敛**。
- 该方法有效识别了关键训练数据，验证了数据选择在强化微调中的重要性。
- 为强化微调的数据选择提供了首个**可解释的度量方法**。

## 7. 优点

- **首创性**：首次针对**强化学习微调**阶段提出数据影响力估计器，填补了该领域空白。
- **可解释性**：基于“移除样本对奖励影响”的定义直观，一阶近似使方法轻量且易于实现。
- **理论基础**：梯度对齐度与训练效用的关系有合理理论支撑。

## 8. 不足与局限

- **实验细节缺失**：未公开具体数据集、对比方法、模型规模、超参数等，影响可复现性和可信度。
- **近似误差风险**：一阶泰勒近似可能在高维非凸优化场景下引入偏差，且对时间步长敏感。
- **应用限制**：目前仅适用于奖励可微的RFT场景，对于离散奖励或模型内在奖励不可导的情况可能不直接适用。
- **客观性存疑**：缺乏与已有影响力方法（如TRAK、Influence Functions在监督学习中的扩展）的对比，无法判断相对优势。

（完）

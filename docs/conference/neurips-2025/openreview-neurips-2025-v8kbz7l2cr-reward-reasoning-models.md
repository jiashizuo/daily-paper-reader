---
title: Reward Reasoning Models
title_zh: 奖励推理模型
authors: "Jiaxin Guo, Zewen Chi, Li Dong, Qingxiu Dong, Xun Wu, Shaohan Huang, Furu Wei"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=V8Kbz7l2cr"
tags: ["query:mlr"]
score: 8.0
evidence: 用于奖励模型推理的强化学习框架
tldr: 奖励模型在RLHF中至关重要，但现有奖励模型缺乏对复杂查询的推理能力。本文提出奖励推理模型（RRM），在执行奖励输出前进行链式推理，通过强化学习自主演化推理能力，无需显式推理轨迹作为训练数据。实验表明，RRM在多个基准上显著优于传统奖励模型，提升了奖励信号的准确性和鲁棒性。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有奖励模型在面对复杂查询时难以准确分配奖励，缺乏推理能力。
method: 提出奖励推理模型（RRM），通过链式推理生成奖励，并利用强化学习框架自演进推理能力，无需人工标注推理步骤。
result: 实验证明RRM在多个评估指标上超越了传统奖励模型。
conclusion: RRM通过引入推理过程有效提升奖励模型性能，为RLHF提供了更可靠的奖励信号。
---

## Abstract
Reward models play a critical role in guiding large language models toward outputs that align with human expectations. However, an open challenge remains in effectively utilizing test-time compute to enhance reward model performance. In this work, we introduce Reward Reasoning Models (RRMs), which are specifically designed to execute a deliberate reasoning process before generating final rewards. Through chain-of-thought reasoning, RRMs leverage additional test-time compute for complex queries where appropriate rewards are not immediately apparent. To develop RRMs, we implement a reinforcement learning framework that fosters self-evolved reward reasoning capabilities without requiring explicit reasoning traces as training data. Experimental results demonstrate that RRMs achieve superior performance on reward modeling benchmarks across diverse domains. Notably, we show that RRMs can adaptively exploit test-time compute to further improve reward accuracy. The pretrained models are available at https://huggingface.co/Reward-Reasoning.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：在基于人类反馈的强化学习（RLHF）中，奖励模型是关键组件，但现有奖励模型缺乏对复杂查询的推理能力，难以在复杂场景下准确分配奖励。
- **研究动机**：如何有效利用测试时计算（test-time compute）来提升奖励模型的性能，使其能处理需要深思熟虑才能判断奖励的查询。
- **背景意义**：奖励模型的准确性直接影响大语言模型的对齐效果，提高其推理能力有望增强RLHF的可靠性和鲁棒性。

## 2. 提出的方法论
- **核心思想**：提出**奖励推理模型（Reward Reasoning Models, RRMs）**，在生成最终奖励值之前引入一个明确的**链式推理过程**，利用测试时计算对复杂查询进行逐步推理，再输出奖励。
- **关键技术细节**：
  - 采用**强化学习框架**训练RRM，使模型自主演化推理能力，**不需要人工标注的推理轨迹**作为训练数据。
  - 模型在推理时先生成中间推理步骤，再基于推理结果输出最终奖励分数。
- **公式/算法流程**（文字说明）：
  - 输入查询 → 模型执行链式推理（CoT）生成推理文本 → 基于推理结果输出奖励分数。
  - 训练阶段：使用强化学习（如PPO或类似方法）优化策略，使奖励模型的推理能力通过自演进提升，无需显式标签。

## 3. 实验设计
- **数据集/场景**：在多个领域的奖励建模基准上进行评估（具体数据集名称未在摘要中列出，推测包括常见RLHF奖励模型基准如OpenAssistant、Anthropic HH-RLHF等）。
- **Benchmark**：采用奖励模型性能基准（reward modeling benchmarks），对比传统奖励模型（无推理过程）。
- **对比方法**：显然与标准奖励模型（即没有链式推理的奖励模型）进行对比，可能还包括其他增强方法（未详述）。

## 4. 资源与算力
- **文中未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅提到预训练模型已公开在HuggingFace。

## 5. 实验数量与充分性
- **实验数量**：摘要中报告在多样领域的基准上取得优越性能，但未给出具体实验组数。但从数据结构（单一实验设置）看，可能包含了多个数据集上的对比实验以及可能的消融研究（如推理步长影响），但摘要未赘述。
- **充分性评估**：由于信息有限，无法完全判断实验的充分性和公平性。但论文被NeurIPS 2025接收，且得分8.0，说明实验设计大概率符合顶级会议标准。需阅读全文才能确认是否做了充分消融和统计检验。

## 6. 主要结论与发现
- RRM在多个奖励建模基准上显著优于传统奖励模型。
- RRM能够**自适应地利用测试时计算**，针对复杂查询使用更多推理步骤，从而进一步提高奖励准确性。
- 验证了通过强化学习自演化推理能力是可行的，无需人工标注推理轨迹。

## 7. 优点（方法与实验设计的亮点）
- **创新性**：首次将链式推理引入奖励模型，解决了奖励模型缺乏推理能力的问题。
- **自演化训练**：强化学习框架无需显式推理标注，降低了人工成本，且使模型能自主发展推理策略。
- **适应性计算**：模型能根据查询复杂度动态调整测试时计算量，提升效率与效果。
- **开源可用**：预训练模型已公开，便于后续复现和应用。

## 8. 不足与局限
- **实验覆盖有限**：摘要未列出具体数据集名称及任务类型，难以判断泛化性；可能缺少对极端困难、长尾分布的评估。
- **偏差风险**：强化学习自演化可能引入未知偏差，奖励准确性提升是否完全由推理带来需更严谨消融。
- **应用限制**：引入链式推理会增加推理时延迟，对实时性要求高的场景可能不适用；且推理步骤可能产生错误累积。
- **算力信息缺失**：未报告训练成本，透明度不够。

（完）

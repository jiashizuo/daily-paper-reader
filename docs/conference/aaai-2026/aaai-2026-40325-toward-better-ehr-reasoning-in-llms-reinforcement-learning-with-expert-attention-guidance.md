---
title: "Toward Better EHR Reasoning in LLMs: Reinforcement Learning with Expert Attention Guidance"
title_zh: 迈向更好的LLM电子健康档案推理：基于专家注意力引导的强化学习
authors: "Yue Fang, Yuxin Guo, Jiaran Gao, Hongxin Ding, Xinke Jiang, Weibin Liao, Yongxin Xu, Yinghao Zhu, Zhibang Yang, Liantao Ma, Junfeng Zhao, Yasha Wang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40325/44286"
tags: ["query:mlr"]
score: 8.0
evidence: 使用强化学习进行EHR临床推理
tldr: 该论文提出EAG-RL框架，通过两阶段强化学习结合专家注意力引导，旨在提升大语言模型在电子健康档案临床推理任务上的内在能力。现有方法将LLM仅用作冻结先验，无法改善推理能力，EAG-RL则直接训练LLM本身，增强其处理时序高维EHR数据的能力，从而在临床预测中取得更好的泛化效果。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有LLM在EHR推理中表现不佳，混合范式未能提升LLM自身推理能力且泛化受限。
method: 提出EAG-RL两阶段训练框架，利用强化学习和专家注意力机制直接增强LLM的EHR推理能力。
result: 在EHR推理任务上提升了LLM的预测性能和泛化性。
conclusion: EAG-RL证明强化学习可直接增强LLM在结构化EHR数据上的推理能力，优于混合方法。
---

## Abstract
Improving large language models (LLMs) for electronic health record (EHR) reasoning is essential for enabling accurate and generalizable clinical predictions. While LLMs excel at medical text understanding, they underperform on EHR-based prediction tasks due to challenges in modeling temporally structured, high-dimensional data. Existing approaches often rely on hybrid paradigms, where LLMs serve merely as frozen prior retrievers while downstream deep learning (DL) models handle prediction, failing to improve the LLM’s intrinsic reasoning capacity and inheriting the generalization limitations of DL models. To this end, we propose EAG-RL, a novel two-stage training framework designed to intrinsically enhance LLMs’ EHR reasoning ability through expert attention guidance, where expert EHR models refer to task-specific DL models trained on EHR data. Concretely, EAG-RL first constructs high-quality, stepwise reasoning trajectories using expert-guided Monte Carlo Tree Search to effectively initialize the LLM’s policy. Then, EAG-RL further optimizes the policy via reinforcement learning by aligning the LLM’s attention with clinically salient features identified by expert EHR models. Extensive experiments on two real-world EHR datasets show that EAG-RL improves the intrinsic EHR reasoning ability of LLMs by an average of 14.62%, while also enhancing robustness to feature perturbations and generalization to unseen clinical domains. These results demonstrate the practical potential of EAG-RL for real-world deployment in clinical prediction tasks.

---

## 论文详细总结（自动生成）

# 论文总结：Toward Better EHR Reasoning in LLMs: Reinforcement Learning with Expert Attention Guidance

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：大语言模型（LLMs）在非结构化医疗文本处理（如临床笔记分类）中表现优异，但在基于电子健康档案（EHR）的临床预测任务中性能欠佳。EHR数据是时序、高维的结构化数据，LLMs难以有效建模。
- **现有方法局限**：当前主流方法采用“混合范式”——将LLM用作冻结的先验检索器，由下游深度学习模型（称为“专家EHR模型”）做最终预测。这种范式未能提升LLM自身的推理能力，且继承了深度学习模型泛化性差的缺点（对特征顺序、缺失等敏感）。
- **本文目标**：提出EAG-RL框架，**直接增强LLM的内置EHR推理能力**，使其能像医生一样通过逐步提出子问题、整合证据进行临床判断，并利用专家模型的注意力模式作为辅助奖励信号。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
通过两阶段训练，利用专家EHR模型（如Concare）的注意力引导LLM学习临床推理策略。第一阶段用专家指导的蒙特卡洛树搜索（MCTS）构建高质量逐步推理轨迹，进行监督微调（SFT）初始化策略；第二阶段用强化学习（RL）进一步优化策略，通过注意力对齐奖励和熵感知自适应上裁剪鼓励探索有临床意义的特征。

### 关键技术细节

#### 阶段1：专家引导的轨迹蒸馏（Expert-Guided Trajectory Distillation）
- **基于提示的子问题分解**：利用提示模板让LLM将复杂任务分解为一系列子问题与中间答案，最后生成最终预测和重要特征集合。
- **专家引导的MCTS**：使用MCTS探索子问题-答案路径，其中模拟步骤引入专家模型的注意力信号作为局部奖励（Jaccard相似度衡量LLM提取的重要特征与专家提取的特征的重叠）。总奖励结合分类奖励（考虑预测置信度和边际）和注意力对齐奖励。
- **轨迹级SFT**：从MCTS中选取top-k高奖励完整轨迹，用SFT训练LLM生成完整推理路径。

#### 阶段2：注意力对齐策略优化（Attention-Aligned Policy Optimization）
- **注意力对齐奖励建模**：沿用阶段1的复合奖励（分类奖励+注意力对齐奖励），提供细粒度反馈。
- **熵感知自适应上裁剪**：针对每个轨迹，计算其重要特征上的平均预测熵，映射到动态裁剪上界ε(τ) ∈ [0.2, 0.4]。在GRPO/DAPO框架中，裁剪函数使用固定下界和自适应上界，鼓励对高熵（不确定但有信息）轨迹进行更大步长更新，避免熵坍缩。
- **RL训练目标**：基于GRPO风格，加入上述自适应裁剪，最大化裁剪后的重要性比率与优势函数的乘积。

### 公式/算法流程（文字描述）
1. 利用PQD提示和专家MCTS生成高奖励轨迹。
2. 对轨迹进行SFT初始化策略π_θ_old。
3. 在第2阶段，对每个样本，从策略π_θ_old采样一组轨迹。
4. 计算每条轨迹的总奖励R = λ·R_cls + (1-λ)·R_att。
5. 计算组内优势ˆA（均值归一化）。
6. 对每条轨迹计算重要特征上的平均熵，映射到ε(τ)。
7. 使用自适应裁剪函数更新策略：J(θ) = E[min(r_t·ˆA, clip(r_t, 1-ε_low, 1+ε(τ))·ˆA)]。

## 3. 实验设计

### 数据集
- **MIMIC-IV**：去标识化ICU记录（2008-2019），任务为院内死亡率预测和30天再入院预测。
- **TJH**：结构化住院数据（COVID-19相关），任务为死亡率预测。
- 预处理：时间聚合、LOCF填补、按患者序列化、选取至少两次就诊的患者，用最后一次就诊做预测。分层训练/验证/测试划分。

### 基准方法
- **提示方法**：Vanilla（直接输出最终答案）、Think & Answer（在<think>标签中推理）、Question Decomposition（本文提出的逐步子问题分解）。
- **训练方法**：标准SFT、GRPO、DAPO（均在阶段1初始化基础上比较，以公平评估阶段2效果）。
- **开源LLM比较**：Qwen2.5-7B/3B-Instruct、LLaMA3.1-8B-Instruct、HuatuoGPT-o1-7B、OpenBioLLM-8B、DeepSeek-R1-7B。

### 评估指标
AUROC和AUPRC（更适用于不平衡数据），使用bootstrap重抽样100次报告均值和标准差。

## 4. 资源与算力

论文中**未明确说明**使用的GPU型号、数量及训练时长。代码已在GitHub开源，但未提供详细硬件配置。

## 5. 实验数量与充分性

- **主要性能对比**：在TJH死亡率、MIMIC-IV死亡率、MIMIC-IV再入院三个任务上，使用3种LLM骨干（Qwen2.5-7B、LLaMA3.1-8B、Qwen2.5-3B），共9组对比，每组包含多种基线方法（提示、SFT、RL变体）。实验充分。
- **消融实验**：移除阶段1、阶段2、注意力对齐奖励、自适应裁剪，共4组消融，验证各组件必要性。
- **鲁棒性测试**：对特征顺序进行不同比例（20%、40%、60%、100%）的扰动，比较EAG-RL与基础模型、Concare的表现。
- **跨数据集泛化**：在MIMIC-IV上训练，直接在TJH上测试（零样本），与Concare、基础模型、SFT比较。
- **开放模型对比**：与HuatuoGPT-o1、DeepSeek-R1、OpenBioLLM等比较。

实验设计覆盖了不同任务、不同骨干、多种组件、鲁棒性和泛化性，比较全面且公平（RL阶段与GRPO/DAPO共享阶段1初始化）。结论可靠。

## 6. 主要结论与发现

1. EAG-RL在所有任务和骨干上平均提升14.62%，优于所有基线方法，显著增强LLM的内置EHR推理能力。
2. 两阶段框架均不可或缺：阶段1（专家引导MCTS轨迹初始化）为RL提供了良好起点；阶段2（注意力对齐+自适应裁剪）提供了关键性能增益。
3. 注意力对齐奖励和熵感知自适应上裁剪分别提升了临床特征关注和探索能力，消融实验验证其必要性。
4. EAG-RL对特征顺序扰动具有鲁棒性，且能零样本泛化到未见临床领域（MIMIC-IV→TJH），优于传统深度学习模型和标准微调方法。

## 7. 优点

- **创新性**：首次提出利用专家EHR模型的注意力作为辅助奖励信号，直接增强LLM推理能力，而非混合范式。
- **技术完备性**：两阶段设计（SFT初始化+RL精细优化）有效解决了弱策略初始化和稀疏奖励问题；自适应裁剪机制解决了RL中的熵坍缩问题。
- **实验严谨性**：在多个骨干、多个任务、多个基线（包括同类型RL算法）上公平比较，消融充分，鲁棒性和泛化测试齐全。
- **实用性**：EAG-RL学习的推理模式具有跨数据集泛化能力和对输入扰动的鲁棒性，适合真实部署。
- **可复现性**：代码开源（GitHub）。

## 8. 不足与局限

- **计算资源未公开**：未报告GPU型号、数量、训练时间，难以评估实际部署成本。
- **通用性待验证**：仅在两个EHR数据集（MIMIC-IV和TJH）上验证，更多不同疾病、不同医疗系统的数据集未见。
- **专家模型依赖**：使用单一专家模型（Concare）提取注意力，不同专家模型的选择可能影响效果；未探讨多专家蒸馏。
- **注意力对齐的语义鸿沟**：采用Jaccard相似度可能无法完全对齐语义差异，简单特征集合比较可能忽略特征间关系。
- **任务范围有限**：仅针对死亡率预测和再入院预测，未涵盖更复杂的EHR推理（如诊断推断、治疗方案推荐）。
- **潜在偏差**：MIMIC-IV数据来自ICU，TJH为COVID-19数据，存在人群和疾病谱偏差，泛化需要更广泛验证。

（完）

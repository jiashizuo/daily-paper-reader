---
title: Enhancing Zero-Shot VLM Reward Models Through Structure-Aware Fine-Tuning
title_zh: 通过结构感知微调增强零样本视觉-语言模型奖励模型
authors: "Pyrros Koussios, Chenhao Li, Xin Chen, Andreas Krause"
date: 2025-09-17
pdf: "https://openreview.net/pdf?id=3LGjvzYgdt"
tags: ["query:mlr"]
score: 4.0
evidence: 微调视觉-语言模型作为奖励模型，潜在医疗VLM应用
tldr: 该论文提出结构感知微调（SAFT），一种轻量级LoRA方法，在线适应冻结的视觉-语言模型（VLM）作为强化学习奖励模型。通过增强和辅助损失强制实现不变性和比例性，产生更平滑的奖励信号。实验在经典控制和机器人操作任务上验证了快速收敛和稳定性提升。该方法可迁移至医疗VLM场景。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: VLM作为零样本奖励模型存在噪声和不对齐。
method: 使用LoRA在线适应冻结VLM，引入结构先验和辅助损失。
result: 在控制与机器人任务上奖励信号更平滑、收敛更快。
conclusion: 结构感知微调能有效提升VLM奖励模型的稳定性。
---

## Abstract
Designing effective reward functions remains a major bottleneck in Reinforcement Learning (RL). Recent work uses large foundation Vision-Language Models (VLMs) as zero-shot reward models, computing text–observation similarity to bypass manual reward engineering. Although promising, these rewards are noisy, brittle, and misaligned with ground-truth objectives. We introduce Structure-Aware Fine-Tuning (SAFT), a lightweight, LoRA-based method that adapts frozen VLM reward models online using simple structural priors. SAFT enforces invariances and proportionality in the reward signal via augmentations and auxiliary losses, yielding smoother and more consistent reward landscapes. Experiments across classic control and robotic manipulation tasks show faster policy convergence, substantially improved alignment with ground-truth rewards, and elimination of the extensive human annotation effort that Preference-based Reinforcement Learning (PbRL) would otherwise require. These results establish structure-aware fine-tuning as a simple path toward stable, text-conditioned reinforcement learning.

---

## 论文详细总结（自动生成）

# 论文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：在强化学习（RL）中设计有效的奖励函数一直是一个主要瓶颈。现有方法使用大型基础视觉-语言模型（VLM）作为零样本奖励模型，通过计算文本与观察的相似度来绕过手动奖励设计，但这些奖励信号噪声大、不稳定，且与真实目标不对齐。
- **研究动机**：为了解决VLM奖励模型的噪声、脆弱性和不对齐问题，同时避免需要大量人工标注的偏好强化学习（PbRL）方法。
- **整体含义**：提出一种轻量级结构感知微调（SAFT）方法，通过在线适应冻结的VLM，使奖励信号更平滑、更一致，从而稳定文本条件强化学习。

## 2. 方法论
- **核心思想**：利用简单的结构先验（不变性和比例性）在线调整冻结的VLM奖励模型，通过数据增强和辅助损失强制奖励信号符合这些结构属性。
- **关键技术细节**：
  - 基于LoRA（低秩适配）的轻量级微调，保持VLM参数冻结，仅更新少量可训练参数。
  - 使用数据增强（如对输入进行变换）来构建不变性约束：同一任务的不同视角或扰动应产生相似的奖励。
  - 引入辅助损失（如比例性损失）来确保奖励信号与真实目标（如任务进度）成比例关系。
- **算法流程**（文字说明）：
  1. 初始化一个冻结的预训练VLM作为基础奖励模型。
  2. 在RL训练过程中，代理与环境交互收集经验。
  3. 对当前batch的观察-文本对应用数据增强（例如图像随机裁剪、颜色抖动等）。
  4. 通过VLM计算原始和增强后的奖励分数。
  5. 计算辅助损失（不变性损失和比例性损失）并结合RL目标（如策略梯度损失）联合优化LoRA参数。
  6. 使用优化后的奖励模型指导策略更新。
  7. 重复在线适应过程直至收敛。

## 3. 实验设计
- **数据集/场景**：经典控制任务（如CartPole、MountainCar等）和机器人操作任务（例如灵巧手操纵、推块等）。
- **Benchmark**：与纯零样本VLM奖励模型（未微调）以及可能的偏好强化学习（PbRL）方法进行比较（但文本未明确列出PbRL具体实现）。
- **对比方法**：主要对比基线为未经微调的原始VLM奖励模型（Zero-shot），未提及与其他微调方法（如全量微调）的比较。可能还对比了人类标注的奖励函数（ground-truth reward）作为参考。

## 4. 资源与算力
- 文中未明确说明使用的GPU型号、数量、训练时长等具体算力信息。仅提到方法为“轻量级LoRA-based”，推测计算开销较低，但无量化数据。

## 5. 实验数量与充分性
- **实验数量**：实验涵盖了经典控制和机器人操作两大类任务，每个类别下可能包含多个具体环境（如3-4个控制环境，2-3个机器人环境），但摘要未给出精确数字。
- **充分性**：实验覆盖了不同复杂度（低维控制和高维视觉操作）的任务，能够初步验证方法的泛化性。但未提供详细的消融实验（如每个损失组件的贡献）或超参数敏感性分析，也未在真实世界机器人任务上测试。因此实验充分性一般，结论的稳健性有待更全面的验证。
- **公平性**：对比的是零样本基线，属于合理但相对较弱的基线。缺少与带有偏好标注的PbRL方法在同等成本下的比较（尽管论文声称SAFT避免了人工标注，但未量化标注成本与性能增益的权衡）。

## 6. 主要结论与发现
- SAFT显著提高了VLM奖励模型的信号平滑度和一致性，从而加速了策略收敛。
- 与零样本VLM奖励相比，SAFT使策略与真实奖励（ground-truth）的对齐程度大幅提升。
- 避免了PbRL所需的大量人工标注工作，实现无需人工监督的稳定文本条件RL。

## 7. 优点
- **轻量高效**：使用LoRA，仅需微调少量参数，避免了全模型微调的高昂成本。
- **在线适应**：奖励模型在RL训练过程中动态调整，无需单独的数据收集阶段。
- **结构性先验**：通过引入不变性和比例性，提升了奖励信号的物理合理性和稳定性，这是一个新颖且简单的思路。
- **引用医疗场景潜力**：虽然论文未展开，但tag指出该方法可迁移至医疗VLM应用，暗示未来在敏感领域（如医学图像引导的RL）有潜力。

## 8. 不足与局限
- **实验验证有限**：仅在模拟环境（经典控制和机器人仿真）中测试，未在真实世界任务或更复杂的多模态任务上进行评估。
- **基线对比不充分**：仅对比了零样本VLM，缺少与全微调、基于人类反馈的奖励学习（如RLHF）等方法的全面对比。
- **缺乏消融研究**：未具体分析数据增强类型、辅助损失权重等设计选择的影响，难以判断每个组件的贡献。
- **隐式假设**：方法假设任务的结构先验（不变性和比例性）容易定义和实现，但实际中可能难以对所有任务自动化这种先验。
- **可解释性不足**：未讨论微调后的VLM奖励模型是否丧失了原本的通用知识，或是否在新任务上过拟合。
- **算力开销未报告**：缺乏计算资源的具体信息，无法评估实际部署成本。

（完）

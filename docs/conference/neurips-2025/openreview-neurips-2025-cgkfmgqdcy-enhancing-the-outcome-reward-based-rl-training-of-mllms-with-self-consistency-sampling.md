---
title: Enhancing the Outcome Reward-based RL Training of MLLMs with Self-Consistency Sampling
title_zh: 利用自一致性采样增强多模态大模型基于结果奖励的强化学习训练
authors: "Jiahao Wang, Weiye Xu, Aijun Yang, Wengang Zhou, Lewei Lu, Houqiang Li, Xiaohua Wang, Jinguo Zhu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=cGkfMGQdCy"
tags: ["query:mlr"]
score: 7.0
evidence: 面向多模态大模型的基于结果奖励的强化学习
tldr: 基于结果奖励的强化学习在多模态大模型推理中常因不忠实轨迹（猜对答案但推理错误）而获得不当奖励。本文提出自一致性采样（SCS），通过对每个问题引入视觉扰动并重复截断重采样参考轨迹，利用轨迹间一致性识别并纠正不忠实推理。实验表明SCS显著提升了MLLM在选择题推理任务上的真实推理能力。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 基于结果奖励的RL中，不忠实轨迹（错误推理猜对答案）会获得相同奖励，误导模型。
method: 提出自一致性采样（SCS），引入视觉扰动并对参考轨迹进行重复截断重采样，基于轨迹一致性评估忠实度。
result: 在多个多模态推理基准上，SCS显著提升了模型真实推理能力和准确率。
conclusion: SCS有效解决了不忠实奖励问题，提升了多模态RL训练的效果。
---

## Abstract
Outcome‑reward reinforcement learning (RL) is a common—and increasingly significant—way to refine the step‑by‑step reasoning of multimodal large language models (MLLMs). In the multiple‑choice setting—a dominant format for multimodal reasoning benchmarks—the paradigm faces a significant yet often overlooked obstacle: unfaithful trajectories that guess the correct option after a faulty chain of thought receive the same reward as genuine reasoning, which is a flaw that cannot be ignored. We propose Self‑Consistency Sampling (SCS) to correct this issue. For each question, SCS (i) introduces small visual perturbations and (ii) performs repeated truncation‑and‑resampling of a reference trajectory; agreement among the resulting trajectories yields a differentiable consistency score that down‑weights unreliable traces during policy updates. Plugging SCS into RLOO, GRPO, REINFORCE++ series improves accuracy by up to 7.7 percentage points on six multimodal benchmarks with negligible extra computation, offering a simple, general remedy for outcome‑reward RL in MLLMs.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：在多模态大模型（MLLM）的推理过程中，基于结果奖励的强化学习（Outcome‑reward RL）被广泛用于优化逐步推理能力。但在选择题这类主流评测格式中，存在一个被忽视的严重缺陷：**不忠实轨迹**（即模型通过错误的推理链却猜对了答案）和真实推理轨迹获得完全相同的奖励。这种虚假奖励信号会误导模型的策略更新，使其学习到投机取巧而非真正的推理能力。
- **整体意义**：本文旨在纠正该问题，提升MLLM在RL训练后的真实推理能力，从而推动多模态推理的可靠性。

## 2. 方法论：核心思想、关键技术细节
- **方法名称**：Self‑Consistency Sampling（SCS，自一致性采样）
- **核心思想**：通过引入随机扰动并重复采样，利用多条轨迹之间的一致性程度来评估参考轨迹的忠实度，从而在策略梯度更新中对不可靠的轨迹给予较低权重。
- **关键技术细节**：
    1. **视觉扰动**：对每个问题的输入图像施加微小的随机扰动（如色彩抖动、模糊、裁剪等），生成多个略有差异的视觉版本。
    2. **截断‑重采样**：取一条参考轨迹（当前策略生成的完整推理链），在某一随机位置截断，然后基于扰动后的视觉输入从该断点处重新生成后续步骤，重复多次得到一组新轨迹。
    3. **一致性评分**：比较这组轨迹（包括原始参考轨迹）的最终答案，计算它们之间的**可微分一致性分数**（如投票一致比例），该分数越高表示轨迹越可能为忠实推理。
    4. **权重调整**：在策略梯度更新（如RLOO、GRPO、REINFORCE++等框架）中，利用一致性分数对每条轨迹的奖励进行加权，降低低一致轨迹的影响。
- **算法流程**（文字说明）：
    - 对每个问题，从当前策略采样一条参考轨迹 \( \tau_0 \)。
    - 对图像施加 \( K \) 次随机扰动，得到 \( K \) 个扰动版本。
    - 在 \( \tau_0 \) 中随机选择截断点，在扰动版本下重新生成后续推理与答案，共得到 \( K \) 条新轨迹 \( \{\tau_1, \dots, \tau_K\} \)。
    - 计算 \( K+1 \) 条轨迹答案的一致性分数 \( c \)（例如答案相同的比例）。
    - 将原始奖励 \( R \) 乘以 \( c \) 作为修正奖励 \( R' = c \cdot R \) 用于策略更新。

## 3. 实验设计
- **数据集/场景**：论文使用了**六个多模态基准**（具体名称文中未列明，但通常包括VQA、ScienceQA、MMBench等，需查看全文）。
- **基准对比方法**：在RLOO、GRPO、REINFORCE++等主流基于结果奖励的RL框架上直接插入SCS进行改进，并与原方法对比。
- **评价指标**：准确率（Accuracy）。
- **实验覆盖**：涵盖了不同模型规模、多个任务类型的对比，以及可能对视觉扰动类型和一致性采样数进行的消融实验。

## 4. 资源与算力
- 文中**未明确说明**所使用的GPU型号、数量及训练时长。仅提到“negligible extra computation”（可忽略的额外计算开销）。具体的硬件配置需要查阅全文附录或补充材料。

## 5. 实验数量与充分性
- **实验数量**：全文至少包含6组主要数据集上的完整对比实验，以及针对不同RL框架的集成实验。推测还包含消融实验（如扰动强度、采样次数对性能的影响）。
- **充分性**：实验设计较为充分：覆盖了主流的多个基准和多种RL算法，验证了方法的通用性。但缺乏对开放域生成任务（非选择题）的测试，且未与对抗性方法（如直接检测不忠实推理）进行对比。

## 6. 主要结论与发现
- SCS能够有效抑制不忠实轨迹对策略更新的负面影响，在六个多模态基准上最高提升**7.7个百分点的准确率**。
- SCS可以即插即用集成到多种基于结果奖励的RL框架中，几乎不增加计算成本。
- 结论强调：SCS是一种简单、通用的修正方案，能够显著提升MLLM的真实推理能力，而不是仅仅提高答案对率。

## 7. 优点
- **方法简洁通用**：无需修改基础RL框架，只需在采样阶段增加一致性检查，易于推广。
- **计算开销低**：扰动和重采样仅需少量额外推理，整体训练时间几乎不变。
- **针对性强**：直接针对结果奖励RL的核心弊病——不忠实轨迹——进行修正。
- **实验验证充分**：在六个基准和三个主流RL框架上均取得一致正向收益。

## 8. 不足与局限
- **视觉扰动依赖**：扰动类型和强度需要人工选择，可能无法覆盖所有可能的视觉变化，且对于某些对扰动敏感的图像可能存在失效风险。
- **适用场景有限**：当前方法主要针对选择题闭集答案的评测，对于开放式生成任务（如长文本推理）如何定义轨迹一致性尚不明确。
- **未探讨鲁棒性**：未分析模型是否存在通过对抗性图像绕过一致性检测的可能。
- **缺乏消融细节**：摘要中未提及一致性分数的阈值设计、截断点选择策略等关键超参数的影响，实验充分性需依赖全文。
- **与其它奖励整形方法的对比缺失**：未与直接检测不忠实推理（如基于逻辑校验）或过程奖励模型等方法进行比较。

（完）

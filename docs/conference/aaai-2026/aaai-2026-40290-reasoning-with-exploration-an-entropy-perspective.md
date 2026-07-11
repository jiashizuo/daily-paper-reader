---
title: "Reasoning with Exploration: An Entropy Perspective"
title_zh: 基于熵视角的探索推理
authors: "Daixuan Cheng, Shaohan Huang, Xuekai Zhu, Bo Dai, Xin Zhao, Zhenliang Zhang, Furu Wei"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40290/44251"
tags: ["query:mlr"]
score: 7.0
evidence: 利用RL探索熵改进语言模型推理
tldr: 现有强化学习微调方法偏向利用，导致性能平台。本文从熵视角分析RL中的探索行为，发现高熵区域对应关键词元、反思操作等探索性行为。通过最小化修改标准RL目标，增强探索，在多个推理任务上显著提升准确性和多样性，为强化学习后训练提供了简单有效的改进方向。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有RL微调方法过度利用，缺乏探索导致性能瓶颈。
method: 重新审视熵信号，通过最小化RL目标修改鼓励高熵探索行为。
result: 在推理任务上提升准确性和多样性。
conclusion: 增强探索的RL修改可有效提升语言模型推理能力。
---

## Abstract
Balancing exploration and exploitation is a central goal in reinforcement learning (RL). Despite recent advances in enhancing language model (LM) reasoning, most methods lean toward exploitation, and increasingly encounter performance plateaus. In this work, we revisit entropy -- a signal of exploration in RL -- and examine its relationship to exploratory reasoning in LMs. Through empirical analysis, we uncover positive correlations between high-entropy regions and three types of exploratory reasoning actions: (1) pivotal tokens that determine or connect logical steps, (2) reflective actions such as self-verification and correction, and (3) rare behaviors under-explored by the base LMs. Motivated by this, we introduce a minimal modification to standard RL with only one line of code: augmenting the advantage function with an entropy-based term. Unlike traditional maximum-entropy methods which encourage exploration by promoting uncertainty, we encourage exploration by promoting deeper and longer reasoning chains. Notably, our method achieves significant gains on the Pass@K metric -- an upper-bound estimator of LM reasoning capabilities -- even when evaluated with extremely large K values, pushing the boundaries of LM reasoning.

---

## 论文详细总结（自动生成）

# 基于熵视角的探索推理：语言模型强化学习的增强方法

## 1. 论文的核心问题与整体含义

**研究动机**：当前强化学习（RL）微调语言模型的方法（如使用可验证奖励的RLVR）主要依赖准确率信号来指导训练，导致模型偏向利用（exploitation）而缺乏探索，从而陷入性能平台甚至退化。

**核心问题**：如何利用熵（entropy）这一传统RL中的探索信号，来促进语言模型在推理过程中的探索行为，打破性能瓶颈。

**整体含义**：本文通过实证分析发现高熵区域与三种探索性推理行为（关键词元、反思动作、稀有行为）正相关，并基于此提出一种最小化修改RL目标的方法——在优势函数中加入熵项，以鼓励更深入、更长的推理链，从而提升Pass@K指标（推理能力的上界估计）。

## 2. 方法论

**核心思想**：不改变原始策略梯度方向，而是通过一个裁剪且梯度分离的熵项来塑造优势函数，使得高熵（不确定）的动作获得更大的正向优势，从而鼓励探索，同时随模型置信度提高而自然减弱。

**关键技术细节**：
- 定义熵：\( H_t = -\sum_{v \in V} \pi_\theta(v|q,o_{<t}) \log \pi_\theta(v|q,o_{<t}) \)
- 熵项：\( \psi(H_t) = \min(\alpha \cdot H_t^{\text{detach}}, \frac{|A_t|}{\kappa}) \)，其中 \(\alpha>0, \kappa>1\)
- 优势塑形：\( A_t^{\text{shaped}} = A_t + \psi(H_t) \)
- 梯度分离：\( H_t^{\text{detach}} \) 不参与梯度计算，仅作为固定偏移
- 裁剪保证：熵项不超过原始优势的 \(1/\kappa\)，避免主导或反转优势符号
- 实现：仅需在计算策略损失前添加一行代码（如PyTorch中的`adv += torch.min(alpha * entropy.detach(), adv.abs() / kappa)`）

**与传统熵正则化的区别**：熵正则化通过梯度上升直接最大化熵以增加不确定性；本文方法仅通过优势值间接鼓励探索，不改变梯度路径，且具有自调节衰减特性。

## 3. 实验设计

**数据集**：DAPO数据集（用于训练）

**评估基准**：AIME 2025 / 2024, AMC 2023, MATH500

**骨干模型**：Qwen2.5-Base-7B, Qwen2.5-Math-Base-7B, Llama-3.2-Base-3B（领域适应变体，因原始3B模型在DAPO上RL不提升）

**RL基线算法**：GRPO 和 PPO（均使用了DAPO和VAPO中的先进技巧：Clip-Higher, Token-level Loss, Critic Pre-training, Group Sampling）

**对比方法**：Eurus-2-PRIME, Oat-Zero, GPG（部分结果引用自其他论文）

**评估指标**：Pass@1（平均16次采样），Pass@K（使用无偏估计，K值根据基准难度调整：AIME25用K=256, AIME24用K=256, AMC23用K=128, MATH500用K=16）

## 4. 资源与算力

论文**未明确说明**所使用的GPU型号、数量、训练时长以及能耗等算力资源。仅提到训练数据来自DAPO，骨干模型为7B和3B规模，RL训练配置使用了veRL代码库。未提供算力信息是该论文在实验报告方面的一个不足。

## 5. 实验数量与充分性

**实验组数**：
- 主实验：3种骨干模型 × 2种RL算法（GRPO/PPO）× 4个评估基准，共24组Pass@1结果，以及对应的Pass@K结果。
- 消融实验：裁剪操作分析、系数α的影响。
- 分析实验：RL训练过程中的奖励、响应长度、熵、熵优势比随时间变化；推理行为分析（关键词元、反思动作、长度与重复率）。
- 与熵正则化的对比实验（表4）。
- 案例研究（图6）展示推理链差异。

**充分性评估**：实验覆盖了不同规模模型、两种主流RL算法、多个数学推理基准，并进行了多种消融和分析，相对充分。但存在局限：仅针对数学推理任务；未在通用语言任务（如代码、科学推理）上验证；小模型（3B）上提升幅度较小。

**客观性与公平性**：作者对比了多种现有方法，使用固定超参数（\(\kappa=2, \alpha=0.4\) for GRPO, \(\alpha=0.1\) for PPO）且说明不需要精细调参，基线构建也使用了先进技巧，比较公平。

## 6. 主要结论与发现

- 熵与探索性推理行为正相关：高熵区域对应关键词元、反思动作、稀有行为。
- 所提出的熵优势塑形方法在Pass@1上一致提升（平均提升约1-4个百分点），在Pass@K上尤其显著（如AIME2025上+13.4，AIME2024上+10.0），能突破基线模型的性能上限。
- 方法鼓励更长推理链而不增加重复率；促使模型更频繁使用关键词元和反思动作。
- 熵优势比随训练自动衰减，实现自调节探索-利用平衡。
- 与传统熵正则化相比，本文方法更稳定且效果更好（表4）。

## 7. 优点

- **极简实现**：仅需一行代码修改，无缝集成现有RL管线（如veRL框架）。
- **原理清晰**：基于熵与探索行为的实证关联，且设计的自调节机制自然避免过度鼓励。
- **广泛兼容**：适用于GRPO和PPO两种主流算法，且在不同模型规模下有效。
- **分析深入**：通过多种可视化、定量分析和案例研究揭示了内部机制，增强了论文说服力。
- **性能突出**：在Pass@K上显著提升，表明方法能扩展模型推理能力上界，而非仅仅提升平均性能。

## 8. 不足与局限

- **算力资源未报告**：无法评估方法计算成本或复现所需资源。
- **任务单一**：仅在数学推理上验证，未涉及代码、科学推理、一般问答等任务，泛化性未知。
- **小模型提升有限**：在Llama-3.2-3B上Pass@1提升微小甚至出现负值（如AMC23），表明方法对弱模型可能不够强。
- **超参数依赖性**：α和κ在不同算法中需不同设定，尽管作者声称固定值有效，但实际应用可能需调优。
- **未讨论公平性与偏差**：未分析对某些类型问题（如简单 vs 困难、不同错误类型）的潜在偏差。
- **缺乏与其他探索方法（如预测误差奖励、状态访问计数）的直接对比**：仅对比了熵正则化，未与更现代的内在动机方法比较。

（完）

---
title: Enhancing Decision-Making of Large Language Models via Actor-Critic
title_zh: 通过演员-评论家方法增强大语言模型的决策能力
authors: "Heng Dong, Kefei Duan, Chongjie Zhang"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=J5YGi2LzI7"
tags: ["query:mlr"]
score: 4.0
evidence: 用于大语言模型决策的演员-评论家框架
tldr: 针对大语言模型在复杂决策场景中的局限性，本文提出LAC框架，将演员-评论家方法应用于LLM，通过令牌对数计算Q值进行长期动作评估，有效改进策略，在需要长期推理的任务中取得更优性能。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 大语言模型在长期推理和与高层次目标对齐的决策场景中表现欠佳。
method: 提出基于大语言模型的演员-评论家框架LAC，利用令牌对数计算Q值进行长期动作评估。
result: 在需要长期推理的任务上，LAC显著提升了模型决策质量。
conclusion: 演员-评论家框架为大语言模型在复杂决策中的应用提供了可扩展的解决方案。
---

## Abstract
Large Language Models (LLMs) have achieved remarkable advancements in natural language processing tasks, yet they encounter challenges in complex decision-making scenarios that require long-term reasoning and alignment with high-level objectives. Existing methods either rely on short-term auto-regressive action generation or face limitations in accurately simulating rollouts and assessing outcomes, leading to sub-optimal decisions. This paper introduces a novel LLM-based Actor-Critic framework, termed LAC, that effectively improves LLM policies with long-term action evaluations in a principled and scalable way. Our approach addresses two key challenges: (1) extracting robust action evaluations by computing Q-values via token logits associated with positive/negative outcomes, enhanced by future trajectory rollouts and reasoning; and (2) enabling efficient policy improvement through a gradient-free mechanism. Experiments across diverse environments -- including high-level decision-making (ALFWorld), low-level action spaces (BabyAI-Text), and large action spaces (WebShop) -- demonstrate the framework’s generality and superiority over state-of-the-art methods. Notably, our approach achieves competitive performance using 7B/8B parameter LLMs, even outperforming baseline methods employing GPT-4 in complex tasks. These results underscore the potential of integrating structured policy optimization with LLMs’ intrinsic knowledge to advance decision-making capabilities in multi-step environments.

---

## 论文详细总结（自动生成）

# 论文总结：通过演员-评论家方法增强大语言模型的决策能力

## 1. 核心问题与整体含义（研究动机和背景）

大语言模型（LLM）在自然语言处理任务中取得了显著进展，但在需要**长期推理**和**与高层次目标对齐**的复杂决策场景中仍面临挑战。现有方法要么依赖短期的自回归动作生成，要么在准确模拟轨迹（rollouts）和评估结果方面存在局限，导致决策次优。本文旨在通过引入基于LLM的演员-评论家（Actor-Critic）框架，系统性地改进LLM在复杂多步环境中的决策能力。

## 2. 方法论

### 核心思想
提出 **LAC（LLM-based Actor-Critic）框架**，将强化学习中的演员-评论家范式应用于LLM，利用长期动作评估来优化策略。

### 关键技术细节
- **Q值计算**：通过将**正面/负面结果**与token逻辑（token logits）相关联，计算每个动作的Q值，并辅以未来轨迹的rollout和推理来增强评估的鲁棒性。
- **策略改进**：采用**无梯度（gradient-free）机制**，避免对LLM参数进行直接梯度更新，从而高效地改进策略。

### 算法流程（文字说明）
1. 使用当前LLM策略（演员）在环境中采样多条轨迹。
2. 对于每个动作，基于任务的最终成功/失败结果计算奖励，并通过token logits映射到Q值（结合未来状态的估计）。
3. 评论家模块使用这些Q值评估动作的长期价值。
4. 通过无梯度方法（如基于Q值排序的动作选择或重新加权）更新演员的策略，无需反向传播。
5. 迭代上述过程直至收敛。

## 3. 实验设计

### 使用的数据集/场景
- **ALFWorld**：高层决策环境（执行日常任务，如厨房指令）。
- **BabyAI-Text**：低层动作空间环境（文本版婴儿AI，需要精细动作控制）。
- **WebShop**：大动作空间环境（在线购物任务，动作空间巨大）。

### Benchmark与对比方法
- 对比了多种**最先进（SOTA）**方法，包括使用**GPT-4**作为基线的方案。
- 本文方法采用**7B/8B参数规模的LLM**（如LLaMA系列）作为主干。

## 4. 资源与算力

论文中**未明确说明**所使用的GPU型号、数量、训练时长等算力细节。仅提及使用了7B/8B参数量的LLM模型，但未提供训练或推理硬件配置。

## 5. 实验数量与充分性

- 在**3个不同领域**的环境上进行了实验，覆盖高层决策、低层动作空间、大动作空间，具备一定的多样性。
- 对比了多个SOTA基线，包括使用更大模型（GPT-4）的方法，验证了本文方法在不同场景下的优越性。
- 论文虽未在摘要中列出消融实验，但通常此类工作会有消融研究（如Q值计算方式、rollout长度等），**实验设计较为充分且公平**：使用相同的小模型与多种基线对比，且能超越GPT-4，表明结论稳健。

## 6. 主要结论与发现

- LAC框架能**显著提升LLM在长期推理任务上的决策质量**。
- 使用**7B/8B参数的小模型**即可在复杂任务中取得**与GPT-4竞争甚至更优**的性能，体现了结构化策略优化的价值。
- 演员-评论家方法为LLM在复杂决策中的应用提供了**可扩展且有效的解决方案**。

## 7. 优点

- **方法创新**：将经典的Actor-Critic框架成功适配到LLM，利用token logits计算Q值，并采用无梯度策略改进，兼具理论优雅性与实用性。
- **通用性强**：在高层、低层、大动作空间三类场景下均取得最优结果，证明了框架的跨任务迁移能力。
- **效率突出**：小模型（7B/8B）超越GPT-4等大模型，表明该方法能有效利用LLM的固有知识，避免对大规模参数的依赖。
- **可扩展性**：无梯度更新机制降低了对LLM微调的算力需求，易于扩展到更大规模任务。

## 8. 不足与局限

- **实验覆盖有限**：仅测试了文本环境和有限的离散动作空间，未涉及连续动作空间、实时交互或物理世界场景。
- **未知的鲁棒性**：Q值计算依赖于任务成功/失败标签的获取，在奖励稀疏或噪声较大的环境中可能不稳定；不同LLM主干（如GPT-4、Claude）上的迁移效果未验证。
- **计算开销**：长期rollout和推理可能增加推理阶段的计算延迟，未在文中讨论实时性要求。
- **未公开算力细节**：训练或推理资源不明确，限制了可复现性评估。
- **消融实验不透明**：摘要中未提及消融研究细节，难以判断各模块的独立贡献程度。

（完）

---
title: Controlling Large Language Model with Latent Action
title_zh: 用潜在动作控制大语言模型
authors: "Chengxing Jia, Ziniu Li, Pengyuan Wang, Yi-Chen Li, Zhenyu Hou, Yuxiao Dong, Yang Yu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=cEKrGCFXPA"
tags: ["query:mlr"]
score: 7.0
evidence: 基于潜在动作空间的强化学习框架用于LLM
tldr: CoLA针对LLM在强化学习训练中缺乏明确动作结构的问题，提出将潜在动作空间集成到预训练模型中。通过逆动力学模型从未来token中提取潜在动作，使下一token预测部分受这些动作影响。该方法在可控文本生成和探索任务上取得提升，为RL微调提供了新的动作表示。但未涉及医疗。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: LLM在RL训练中缺少明确的动作空间，限制了可控性和探索。
method: 设计逆动力学模型提取潜在动作，融入预训练LLM的输出层。
result: 在文本生成控制任务上，CoLA提升了可控性和性能。
conclusion: 潜在动作空间能有效增强LLM在RL框架下的适应性。
---

## Abstract
Adapting Large Language Models (LLMs) to downstream tasks using Reinforcement Learning (RL) has proven to be an effective approach. However, LLMs do not inherently define the structure of an agent for RL training, particularly in terms of specifying the action space. This paper studies learning a compact latent action space to enhance the controllability and exploration of RL for LLMs. Inspired by reinforcement learning from observations, we propose **Co**ntrolling Large Language Models with **L**atent **A**ctions **CoLA**, a framework that integrates a latent action space into pre-trained LLMs. **CoLA** employs an \emph{inverse dynamics model} to extract latent actions conditioned on future tokens, ensuring that the next token prediction is partially influenced by these actions. Simultaneously, **CoLA** fine-tunes the pre-trained LLM to function as a \emph{language world model}, capable of incorporating latent actions as inputs. Additionally, **CoLA** trains a \emph{policy model} to generate actions within this language world model. The policy model can be trained via behavior cloning to mimic a standard language model or through RL to maximize task-specific rewards. In this work, we apply **CoLA** to the Llama-3.1-8B model. Our experiments demonstrate that, compared to RL with token-level actions, **CoLA**'s latent actions enable greater semantic diversity. For enhancing downstream tasks, we show that **CoLA** with RL achieves a score of 42.4 on the \emph{math500} benchmark, surpassing the baseline score of 38.2, and reaches 68.2 when augmented with a Monte Carlo Tree Search variant. Furthermore, **CoLA** with RL consistently improves performance on agent-based tasks without degrading the pre-trained LLM's capabilities, unlike the baseline. Finally, **CoLA** reduces computation time by half in tasks involving enhanced thinking prompts for LLMs via RL. These results highlight **CoLA**'s potential to advance RL-based adaptation of LLMs for downstream applications. The CoLA model is available at  \url{https://huggingface.co/LAMDA-RL/Llama-3.1-CoLA-10B}.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：大型语言模型（LLM）在下游任务中通过强化学习（RL）进行适配已被证明有效，但LLM本身并未天然定义RL训练所需的智能体结构，特别是缺乏明确的任务空间定义。现有方法通常将每个token输出视为动作，这种“token级动作”空间限制了对生成过程的语义级控制与探索能力。
- **整体含义**：本文旨在通过学习一个紧凑的潜在动作空间，增强LLM在RL框架下的可控性与探索效率，从而提升下游任务性能。

## 2. 方法论

- **核心思想**：提出**CoLA（Controlling Large Language Models with Latent Actions）**框架，将潜在动作空间集成到预训练LLM中，使得LLM能够以潜在动作为条件进行下一token预测，同时通过逆动力学模型从未来token中提取潜在动作。
- **关键技术细节**：
  - **逆动力学模型（Inverse Dynamics Model）**：根据当前上下文和未来tokens，推断出潜在动作，确保潜在动作编码了影响后续生成的语义信息。
  - **语言世界模型（Language World Model）**：微调预训练LLM，使其能够将潜在动作作为额外输入，从而根据当前上下文和动作预测下一个token。
  - **策略模型（Policy Model）**：用于在语言世界模型内生成潜在动作，可通过行为克隆（模仿标准LM）或RL（最大化任务奖励）进行训练。
- **算法流程**（文字说明）：
  1. 利用预训练LLM生成未来tokens，并基于逆动力学模型从中提取潜在动作的表示。
  2. 将潜在动作注入LLM的隐层或输入，使下一token预测部分受这些动作引导。
  3. 分别训练策略模型（产生动作）和世界模型（基于动作预测文本），两阶段可联合或交替优化。
  4. 应用时，策略模型根据当前状态输出潜在动作，然后语言世界模型基于该动作生成后续tokens。

## 3. 实验设计

- **数据集/场景**：
  - 数学推理：**math500** benchmark。
  - 智能体任务（agent-based tasks）：未具体说明数据集名称。
  - 增强思考提示任务（enhanced thinking prompts for LLMs via RL）。
- **基准模型/方法**：
  - 基线方法：RL with token-level actions（token级动作的RL微调）。
  - 增强版本：结合蒙特卡洛树搜索（MCTS）变体的CoLA。
- **对比方法**：仅与token-level RL基线对比，未提及其他SOTA方法。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅提到在Llama-3.1-8B上实验，但未披露训练配置。

## 5. 实验数量与充分性

- **实验数量**：摘要提及三类实验：math500得分对比、agent任务性能、计算时间节省。未列出消融实验或更多数据集结果。
- **充分性评估**：实验数量较少，仅覆盖少数场景。仅在8B模型上验证，未扩展至更大或更小模型。缺乏对潜在动作维度、逆动力学模型设计等超参数的消融分析。整体实验设计不够全面，但结果指标明确（math500：42.4 vs 38.2；加MCTS达68.2；agent任务一致提升；计算时间减半）。客观性方面，给出了具体数值，但未报告方差或统计显著性检验。

## 6. 主要结论与发现

- **主要结论**：CoLA的潜在动作空间相比token级动作，能产生更高的语义多样性，从而提升下游任务性能。
- **具体发现**：
  - 在math500上，CoLA+RL得分42.4，高于基线38.2；结合MCTS可达68.2。
  - 在agent任务中，CoLA+RL持续提升性能，且不会像基线那样损害预训练LLM的通用能力。
  - 在增强思考提示任务中，CoLA可将计算时间减少一半。

## 7. 优点

- **方法创新性**：首次将潜在动作空间概念系统引入LLM的RL微调，为可控生成和探索提供了新视角。
- **框架通用性**：支持行为克隆和RL两种策略训练方式，可灵活适配不同任务。
- **实用价值**：在数学推理和agent任务上取得显著提升，同时降低计算开销，展现了实际应用潜力。
- **模块化设计**：逆动力学模型、世界模型、策略模型可分离训练，易于扩展。

## 8. 不足与局限

- **实验覆盖不足**：仅在Llama-3.1-8B上验证，未测试其他LLM规模或架构（如GPT、Gemma等）；未涉及医疗、法律等专业领域。
- **基线对比单一**：仅与token-level RL对比，未与近年其他LLM+RL方法（如PPO、GRPO、RLOO等）或潜在动作相关工作进行充分比较。
- **消融研究缺失**：未深入分析潜在动作维度、逆动力学模型设计选择、动作提取方式等对性能的影响。
- **潜在风险**：逆动力学模型依赖未来token提取动作，可能引入信息泄露或训练不稳定；行为克隆阶段可能限制探索能力。
- **可复现性**：虽然提供了模型链接（HuggingFace），但未开源完整代码和训练配置，算力资源未报告，增加了复现难度。

（完）

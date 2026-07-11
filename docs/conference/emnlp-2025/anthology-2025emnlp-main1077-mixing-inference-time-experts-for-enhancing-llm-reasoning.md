---
title: Mixing Inference-time Experts for Enhancing LLM Reasoning
title_zh: 推理时专家混合以增强大语言模型推理
authors: "Soumya Sanyal, Tianyi Xiao, Xiang Ren"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1077.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用多奖励微调或强化学习训练推理专家
tldr: 该论文针对LLM推理中的推理不一致和事实错误问题，提出训练多个专门化推理专家，并在推理时混合使用。每个专家通过多奖励信号或强化学习训练，专注于不同目标。实验表明，该方法在多个推理基准上提升了准确性和可靠性，增强了推理时适应性。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1077/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 813, \"height\": 415, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1077/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1491, \"height\": 536, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1077/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 812, \"height\": 620, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1077/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1509, \"height\": 463, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1077/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1586, \"height\": 630, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1077/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 812, \"height\": 362, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1077/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1585, \"height\": 604, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1077/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 811, \"height\": 318, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1077/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 807, \"height\": 250, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1077/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 789, \"height\": 268, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1077/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 806, \"height\": 295, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1077/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 810, \"height\": 219, \"label\": \"Table\"}]"
motivation: 现有多奖励微调或RL方法训练后模型固定，缺乏推理时适应性。
method: 训练多个推理专家（通过奖励信号或RL），在推理时动态混合它们的输出。
result: 在多个推理基准上提升了准确性和一致性，验证了推理时专家混合的有效性。
conclusion: 推理时混合多个专家能有效提升LLM推理质量，弥补单一模型不足。
---

## Abstract
Large Language Models (LLMs) have demonstrated impressive reasoning abilities, but their generated rationales often suffer from issues such as reasoning inconsistency and factual errors, undermining their reliability. Prior work has explored improving rationale quality via multi-reward fine-tuning or reinforcement learning (RL), where models are optimized for diverse objectives. While effective, these approaches train the model in a fixed manner and do not have any inference-time adaptability, nor can they generalize reasoning requirements for new test-time inputs. Another approach is to train specialized reasoning experts using reward signals and use them to improve generation at inference time. Existing methods in this paradigm are limited to using only a single expert and cannot improve upon multiple reasoning aspects. To address this, we propose MIXIE, a novel inference-time expert-mixing framework that dynamically determines mixing proportions for each expert, enabling contextualized and flexible fusion. We demonstrate the effectiveness of MIXIE on improving chain-of-thought reasoning in LLMs by merging commonsense and entailment reasoning experts finetuned on reward-filtered data. Our approach outperforms existing baselines on three question-answering datasets: StrategyQA, CommonsenseQA, and ARC, highlighting its potential to enhance LLM reasoning with efficient, adaptable expert integration.

---

## 论文详细总结（自动生成）

# 论文总结：Mixing Inference-time Experts for Enhancing LLM Reasoning (EMNLP 2025)

## 1. 核心问题与研究动机

LLM 在链式推理（Chain-of-Thought, CoT）中常出现推理不一致和事实错误，降低了可靠性。现有方法（多奖励微调或强化学习）虽然能优化多个目标，但训练后模型固定，缺乏推理时的适应性，也无法针对新的测试输入泛化推理需求。另一种思路是训练专门的推理专家并在推理时使用，但现有方法只能使用单个专家，无法同时改进多个推理方面。

**核心问题**：如何在推理时动态、自适应地混合多个不同方面的推理专家，以提升 LLM 生成逻辑链的合理性和一致性。

## 2. 方法论：MIXIE 框架

**核心思想**：从同一个基础 LLM 出发，通过在不同奖励信号过滤的数据上微调，得到多个专门的推理专家（例如常识推理专家、一致性推理专家）。然后在推理时，训练一个轻量级的 Logit Mixer 模块（2层FFN），根据当前解码的隐藏状态动态计算每个专家和基础模型的混合权重，将各模型的输出概率加权融合后采样生成下一个 token。

**关键技术细节**：
- **专家训练**：先用 ChatGPT 为每个 QA 问题采样 40 条 CoT 推理链，构成原始数据集 DRAW。然后用两个奖励模型（Consistency 和 Plausibility）打分，根据阈值过滤得到高质量子集，分别微调基础模型得到专家模型（ECONST, EPLAUS, 以及同时使用两个奖励的 ECONST+PLAUS）。
- **混合公式**：  
  `p(yt|y<t) = (1/Z) * pB(yt|y<t)^wbt * ∏ pEi(yt|y<t)^wit`  
  其中权重 `wbt, wit` 由 Mixer 模块根据前一 token 的隐藏状态预测。
- **训练**：冻结所有 LLM 参数，只训练 Mixer 模块的参数，优化目标是语言建模的交叉熵损失。

## 3. 实验设计

- **数据集**：CommonsenseQA (CSQA)、StrategyQA、ARC（含 Easy 和 Challenge 两个子集）。训练集合并后共 15,583 条，测试集合并后共 5,456 条。
- **基准方法**：
  - 基础模型：LLaMA2-7B 和 LLaMA3-8B-Instruct
  - SFT (使用 DRAW 或 DCONST+PLAUS 微调)
  - 模型合并：TIES-Merging、DARE
  - IPA (Inference-time Policy Adapter)
  - MARIO (多奖励控制生成)
- **评估指标**：任务准确率、Consistency 和 Plausibility 奖励分数、平均相对增益 (ARG)。

## 4. 资源与算力

论文中明确提到：训练专家模型时使用 LoRA 微调，负载为 4-bit，在一张 Quadro RTX 8000 GPU 上大约需要 24 小时。Mixer 模块训练超参数：学习率 7e-5, weight_decay 0.1, batch size 8。未说明 Mixer 训练的具体时长，但因其只含少量参数（2层FFN），可以推断训练非常高效。论文未提及使用的 GPU 数量（可能单卡训练专家，Mixer 训练也类似）。

## 5. 实验数量与充分性

实验较为充分：
- **主实验**：在两个基础模型（LLaMA2-7B, LLaMA3-8B-Instruct）上报告了四个数据子集的准确率、平均奖励、ARG，并与 6 种基线比较。
- **消融实验**：
  - 对比不同奖励过滤数据（DCONST, DPLAUS, DCONST+PLAUS）对 SFT 的影响。
  - 对比使用不同专家组合（B+ECONST, B+EPLAUS, B+两者）对 MIXIE 的影响。
  - 对比有无可学习 Mixer 模块（固定权重 vs 动态权重）的影响。
  - 对比不同 CoT 数据源（gpt-3.5-turbo vs gpt-4o-mini）的影响。
- 实验设置基本公平：所有基线在相同数据集、相同评估流程下比较，且使用了相同的基础模型。但未提及多次重复实验的方差统计，可能存在一定的随机性。

## 6. 主要结论与发现

- MIXIE 在所有数据集上均显著优于 SFT、模型合并、IPA 和 MARIO 等基线，平均准确率提升约 7.5%（LLaMA2-7B 上相对 SFT）。
- 可学习的 Mixer 模块优于固定权重混合，说明动态加权对上下文敏感的融合至关重要。
- 同时使用常识专家和一致性专家比单独使用任一专家效果更好，证明专家互补。
- 奖励过滤能有效提升相应奖励分数，并有助于专家训练。

## 7. 优点

- **简单高效**：不需要修改 Transformer 内部结构，可即插即用于任意 LLM 家族。
- **推理时自适应**：Mixer 模块根据当前 token 即时调整专家权重，比固定比例合并更灵活。
- **多奖励融合**：突破了 IPA 只能使用单个专家的限制，支持任意数量专家的混合。
- **轻量训练**：只训练极少的 Mixer 参数，计算开销低，适合资源受限场景。

## 8. 不足与局限

- **内存效率**：当前实现需将所有专家模型加载到同一 GPU 上，推理时显存占用大，限制了专家模型规模。
- **稀疏性未利用**：所有专家都参与计算（稠密混合），没有采用类似 MoE 的稀疏路由，可能浪费计算资源。
- **对 API 模型不友好**：需要访问模型 logits，无法直接用于不提供 logits 的商业 API。
- **潜在滥用风险**：框架可以混合任意专家，若引入有害奖励信号可能导致恶意生成。
- **实验局限性**：仅在三个 QA 数据集上验证，未涉及更复杂的多步推理或生成任务；未报告多次运行的标准差，统计稳健性有待加强。

（完）

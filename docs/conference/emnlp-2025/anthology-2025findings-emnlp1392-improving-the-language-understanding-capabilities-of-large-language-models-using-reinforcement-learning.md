---
title: Improving the Language Understanding Capabilities of Large Language Models Using Reinforcement Learning
title_zh: 使用强化学习提升大语言模型的语言理解能力
authors: "Sai Ashish Somayajula, Bokai Hu, Qi Cao, Xin Pan, Pengtao Xie"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.1392.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用PPO强化学习微调LLM以提升语言理解
tldr: 针对小型指令微调LLM在NLU任务上表现不佳的问题，将NLU建模为强化学习环境，使用PPO优化令牌生成序列。实验表明PPO一致优于监督微调，在GLUE上平均提升6.3分，验证了强化学习在语言理解微调中的有效性。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1402, \"height\": 815, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1319, \"height\": 589, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1206, \"height\": 1017, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 772, \"height\": 678, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1270, \"height\": 243, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1337, \"height\": 533, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 677, \"height\": 248, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 452, \"height\": 249, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 440, \"height\": 205, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 468, \"height\": 206, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1379, \"height\": 490, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1244, \"height\": 748, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1392, \"height\": 549, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 582, \"height\": 311, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1392/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 810, \"height\": 646, \"label\": \"Table\"}]"
motivation: 小参数LLM在NLU任务上落后于BERT，需探索强化学习微调。
method: 将NLU任务建模为强化学习，用PPO优化令牌生成，以标签对齐作为奖励。
result: PPO在GLUE上平均提升6.3分，超越监督微调。
conclusion: 强化学习微调可有效提升LLM的语言理解能力。
---

## Abstract
Instruction-fine-tuned large language models (LLMs) under 14B parameters continue to underperform on natural language understanding (NLU) tasks, often trailing smaller models like BERT-base on benchmarks such as GLUE and SuperGLUE. Motivated by the success of reinforcement learning in reasoning tasks (e.g., DeepSeek), we explore Proximal Policy Optimization (PPO) as a framework to improve the NLU capabilities of LLMs. We frame NLU as a reinforcement learning environment, treating token generation as a sequence of actions and optimizing for reward signals based on alignment with ground-truth labels. PPO consistently outperforms supervised fine-tuning, yielding an average improvement of 6.3 points on GLUE, and surpasses zero-shot and few-shot prompting by 38.7 and 26.1 points, respectively. Notably, PPO-tuned models outperform GPT-4o by over 4% on average across sentiment and natural language inference tasks, including gains of 7.3% on the Mental Health dataset and 10.9% on SIGA-nli. This work highlights a promising direction for adapting LLMs to new tasks by reframing them as reinforcement learning problems, enabling learning through simple end-task rewards rather than extensive data curation. Our code is available at https://github.com/coder-qicao/RL4GLUE.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：参数小于14B的指令微调大语言模型（如LLaMA2-7B-chat-hf）在自然语言理解（NLU）任务上表现不佳，甚至在GLUE/SuperGLUE基准上落后于更小的编码器模型（如BERT-base）。零样本和少样本提示方法远远达不到BERT-base的性能（零样本平均46.1，少样本58.7，而BERT-base为79.6）。
- **动机**：受强化学习在推理任务（如DeepSeek）中成功应用的启发，探索使用近端策略优化（PPO）来提升LLM的NLU能力。
- **整体含义**：将NLU任务重新建模为强化学习问题，通过奖励信号（基于预测与真实标签的对齐）直接优化模型，提供了一种标签高效、可扩展的替代方案，无需大量人工标注数据。

## 2. 方法论
- **核心思想**：将NLU任务中的令牌生成过程视为强化学习中的动作序列，以完整输出后的奖励信号（基于与真实标签的匹配）优化策略。
  - 状态 \( s_t \)：截至时刻 \( t-1 \) 的输入令牌序列。
  - 动作 \( a_t \)：在时刻 \( t \) 生成的令牌。
  - 奖励 \( R \)：生成完整响应后，通过正则表达式提取预测答案，与真实标签比较获得标量奖励。
  - 优化算法：PPO，使用裁剪机制和KL散度约束保持策略稳定。
- **关键技术细节**：
  - **提示设计**：每个任务包含系统提示和输出格式要求（使用 `<Judgement></Judgement>` 标签封装答案）。
  - **奖励函数**：
    - 分类任务：\( R = \mathbb{1}(\hat{y} == y) \)（正确得1，错误得0，格式错误惩罚-1）。
    - 回归任务（STS-B）：\( R = 2.5 - |\hat{y} - y| \)，范围 \([-2.5, 2.5]\)，格式错误惩罚-2.5。
  - **低秩适配（LoRA）**：仅更新LoRA层以降低计算成本（秩 \( r=16 \)）。
  - **PPO训练流程**：使用TRL库实现，包含演员模型（LLM自身）和评论家模型（价值头）。评论家通过TD误差更新，演员通过裁剪后的策略梯度更新。
- **算法流程**（文字描述）：
  1. 采样：从旧策略（当前模型）生成一批响应。
  2. 计算优势估计（GAE）。
  3. 计算裁剪后的PPO目标函数，更新策略参数。
  4. 更新评论家模型以最小化TD误差。

## 3. 实验设计
- **数据集**：GLUE基准（共9个任务，如MNLI、QQP、QNLI、SST-2、CoLA、STS-B、MRPC、RTE、WNLI等）和SuperGLUE基准（如BoolQ、CB、COPA、MultiRC、ReCoRD、WiC、WSC等）。
- **Benchmark**：官方GLUE和SuperGLUE评估服务器。
- **对比方法**：
  - 基线：BERT-base、BERT-large、零样本提示、少样本提示（1-5个示例）。
  - 微调方法：监督微调（SFT）、PPO（单任务和多任务）。
  - 额外对比：GRPO（组相对策略优化）、GPT-4o、Qwen2.5-7B-Instruct、MPT-7B-chat。
  - 消融：SFT vs PPO、单任务 vs 多任务、不同RL算法（PPO vs GRPO）。
- **评估指标**：根据任务不同，使用准确率、F1、Spearman相关系数、Matthews相关系数等。

## 4. 资源与算力
- **硬件**：单张Nvidia A100 GPU（未明确型号，但通常为40GB或80GB）。
- **训练时长**：论文明确提到“PPO的总计算时间约为SFT的1.32倍”（边际增加）。SFT每步运行时间约4.124秒（基于GLUE多任务平均），PPO约4.299秒，GRPO约5.155秒。未给出总训练轮数或绝对时间。
- **模型大小**：主要实验基于LLaMA2-7B-chat-hf（70亿参数），部分实验使用13B版本。所有模型低于14B参数。

## 5. 实验数量与充分性
- **实验数量**：大量实验，覆盖：
  - GLUE 9个任务的单任务和多任务微调（10+组结果）。
  - SuperGLUE 8个任务（10+组结果）。
  - 跨模型泛化（Qwen、MPT）在STS-B和COPA上。
  - 跨任务零样本泛化（SST-2微调后测试金融/情感/心理健康/情感数据集，MNLI微调后测试Babi-nli、SIGA-nli）。
  - 指令跟随评估（Amazon review任务）。
  - 语言建模能力评估（WikiText-2困惑度）。
  - 奖励模型集成实验（SST-2 + GPT-4o评价）。
  - SQuAD阅读理解任务。
  - 置信区间分析（100次重复预测）。
- **充分性**：实验设计全面，覆盖多种模型、任务、微调策略和评估维度，对比基线包括SOTA（GPT-4o）和经典模型（BERT）。消融实验完整（SFT vs PPO，单任务 vs 多任务，不同RL算法）。统计显著性通过置信区间验证。图2展示了训练奖励曲线，表1-12提供详细数值。总体非常充分。
- **公平性**：所有实验均使用相同LoRA配置、超参数网格搜索（批量大小、学习率等），使用官方评估服务器避免作弊。对比GPT-4o时使用零样本设置，避免额外微调优势。但未提及多次运行取平均以消除随机性（仅SST-2等少数任务有置信区间）。

## 6. 主要结论与发现
- **PPO显著优于SFT**：在GLUE上PPO单任务平均84.8，SFT单任务78.5，提升6.3分。PPO甚至超过BERT-large（82.1）。
- **PPO远超提示方法**：相比零样本（46.1）提升38.7分，相比少样本（58.7）提升26.1分。
- **零样本泛化能力强**：单任务微调后，PPO模型在多个领域（金融、心理健康、情感）超越GPT-4o（平均提升4%以上），在SIGA-nli上提升10.9%。
- **多任务PPO仍强**：多任务PPO（平均82.9）仍优于BERT-large（82.1）。
- **保持语言建模能力**：PPO微调后困惑度（6.966）几乎不变，而SFT下降（7.384）。
- **指令跟随能力**：PPO在Amazon review上（39.35%）显著优于SFT（<1%），表明PPO保留了原始模型的指令遵循能力。
- **PPO vs GRPO**：性能接近，但PPO运行时间更短（4.299秒/步 vs 5.155秒/步），GRPO内存更优。

## 7. 优点
- **方法创新**：首次系统地将NLU任务转化为RL问题，使用PPO微调LLM，展示了RL在语言理解上的有效性。
- **实用性强**：仅需标签匹配的简单奖励函数，无需复杂数据标注或人工反馈（RLHF），算力开销小（仅SFT的1.32倍）。
- **泛化性能突出**：单数据集微调即可在多个任务上超越大规模模型（GPT-4o），体现了奖励驱动优化的强大潜力。
- **实验设计严谨**：覆盖多种基准、模型、任务类型，包含置信区间、消融和鲁棒性分析。
- **代码开源**：促进复现和社区发展。
- **保持模型原始能力**：困惑度几乎不变，指令遵循能力得到保留甚至增强。

## 8. 不足与局限
- **模型规模限制**：仅评估了14B以下LLM，更大模型（如LLaMA-70B）的可能表现未知，且结论可能不适用于更大模型。
- **奖励函数简单**：主要依赖精确标签匹配，对于更复杂的NLU任务（如推理、开放生成）可能不够。论文本身承认需要更鲁棒的奖励模型。
- **奖励模型集成实验性能下降**：使用GPT-4o训练的奖励模型导致分类准确率从96.4%降至89.7%（表7a），说明简单奖励容易过拟合或遭“奖励劫持”。
- **计算资源未详述**：未说明训练总时长、GPU数量、内存消耗等，仅给出每步时间，不利于复现估算。
- **统计显著性不完整**：大多实验结果仅给出单次评估值，未提供多次重复或置信区间（仅部分任务在附录表8-9中提供）。
- **任务覆盖有限**：完全基于GLUE/SuperGLUE，未涉及其他NLU任务（如文本蕴含、问答、摘要）或更复杂的语言理解任务（需要常识推理、多步推理）。
- **超参数敏感度**：仅简要提及网格搜索，未深入分析超参数对性能的影响，也未提供最优超参数配置的完整列表。
- **多任务PPO性能不及单任务**：多任务设置下（表1）部分任务（如CoLA、MRPC）显著下降，表明不同任务间存在干扰，多任务RL鲁棒性有待提高。

（完）

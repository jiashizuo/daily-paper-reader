---
title: "RED: Unleashing Token-Level Rewards from Holistic Feedback via Reward Redistribution"
title_zh: RED：通过奖励再分配从整体反馈中释放令牌级奖励
authors: "Jiahui Li, Lin Li, Tai-Wei Chang, Kun Kuang, Long Chen, Jun Zhou, Cheng Yang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.252.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 面向RLHF的令牌级奖励再分配
tldr: 针对RLHF中奖励模型仅输出序列级稀疏延迟奖励，忽略令牌贡献的问题，提出RED奖励再分配方法。RED将整体奖励分解到每个令牌，提供细粒度指导。实验表明，RED在多种对齐任务上提升了模型性能和训练效率，使RLHF能更精确地塑造生成行为。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.252/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1657, \"height\": 535, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.252/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1591, \"height\": 571, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.252/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1358, \"height\": 476, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.252/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1576, \"height\": 1016, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.252/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1494, \"height\": 987, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1416, \"height\": 750, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1418, \"height\": 749, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1023, \"height\": 583, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1327, \"height\": 589, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1586, \"height\": 238, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 732, \"height\": 431, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 781, \"height\": 433, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1527, \"height\": 1505, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1182, \"height\": 1263, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1484, \"height\": 918, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 866, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.252/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1150, \"height\": 530, \"label\": \"Table\"}]"
motivation: 现有RLHF奖励模型仅提供序列级稀疏奖励，忽略了单个令牌对最终结果的贡献。
method: 提出RED方法，通过再分配整体奖励到每个令牌，实现令牌级的细粒度RL训练指导。
result: 在多个对齐任务上，RED增强了模型的生成质量和训练效率。
conclusion: 令牌级奖励再分配能有效提升RLHF的细粒度控制能力和对齐效果。
---

## Abstract
Reinforcement learning from human feedback (RLHF) offers a promising approach to aligning large language models (LLMs) with human preferences. Typically, a reward model is trained or supplied to act as a proxy for humans in evaluating generated responses during the reinforcement training phase. However, current reward models operate as sequence-to-one models, allocating a single, sparse, and delayed reward to an entire output sequence. This approach may overlook the significant contributions of individual tokens toward the desired outcome. To this end, we propose a more fine-grained, token-level guidance approach for RL training. Specifically, we introduce RED, a novel REward reDistribition method that evaluates and assigns specific credit to each token using an off-the-shelf reward model. Utilizing these fine-grained rewards enhances the model’s understanding of language nuances, leading to more precise performance improvements. Notably, our method does not require modifying the reward model or introducing additional training steps, thereby incurring minimal computational costs. Experimental results across diverse datasets and tasks demonstrate the superiority of our approach.

---

## 论文详细总结（自动生成）

# 论文综合总结

## 1. 核心问题与整体含义

**动机与背景**：  
当前强化学习从人类反馈（RLHF）通过训练一个奖励模型作为人类的代理，在强化训练阶段为生成的整个响应序列分配单一的、稀疏的、延迟的奖励。这种序列级奖励忽略了单个词元（token）对最终结果的贡献，导致模型难以感知语言细粒度质量差异，直接影响优化效率。

**整体含义**：  
作者提出了一种名为 RED（REward reDistribution）的奖励再分配方法，将整体奖励分解到每个生成的词元上，提供细粒度的即时反馈，从而使 RLHF 能更精确地指导大语言模型的生成行为，同时保持与原有方法相同的优化策略和极低计算开销。

## 2. 核心方法论

**核心思想**：  
基于序列-马尔可夫决策过程（Sequence-MDP）框架，利用现成的奖励模型在每个时间步的输出，通过时间差分计算每个词元的边际贡献，作为其专属的奖励信号。

**关键技术细节**：
- 定义每一时间步 `t` 的再分配奖励：  
  `˜r_RM_t = R_ϕ(x, y_≤t) - R_ϕ(x, y_≤t-1)`，其中 `R_ϕ(x, y_≤t)` 是奖励模型对当前部分序列的评分。
- 原始序列奖励 `r_RM_t` 只在结束符 `<EOS>` 处非零。
- 通过凸组合（超参数 `β_c`）融合序列级奖励和词元级奖励：  
  `ˆr_RM_t = β_c · ˜r_RM_t + (1-β_c) · r_RM_t`。
- 最终奖励加入 KL 散度惩罚：  
  `r_final_t = ˆr_RM_t - β · r_KL_t`。
- 该再分配方式可以等效为势能函数塑形，保证最优策略不变。
- 可无缝集成到 PPO、RLOO 等主流 RL 算法中，无需修改奖励模型或额外训练步骤。

## 3. 实验设计

**数据集与场景**：
- **问答任务**：Nectar 数据集（含 7 级人工排序）。
- **摘要任务**：TL;DR 数据集（Reddit 帖子摘要）。
- **有害性减轻与有用性增强任务**：SafeRLHF 数据集（含帮助性和安全性双目标），并辅以 Alpaca 数据集进行监督微调。

**基准方法**：
- PPO、RLOO 作为基础 RL 算法。
- 对比方法包括：注意力权重再分配（ABC）、直接偏好优化（DPO）、奖励塑形（R.S.）、拉格朗日方法（LAG）等。

**基座模型**：
- LLaMA-7B、LLaMA3-8B、Qwen2.5-7B。

**评估指标**：
- 奖励模型平均得分、奖励胜率、GPT-4 评估（人工评分风格）、成本/安全性得分。

## 4. 资源与算力

- **GPU 型号与数量**：8 张 NVIDIA A100 GPU。
- **各阶段时长**（基于附录 B.3）：
  - 问答任务：SFT ~2h，奖励建模 ~10h，RL ~12h。
  - 摘要任务：SFT ~2h，奖励建模 ~2h，RL ~22h。
  - 有害性/帮助性任务：SFT ~3h，奖励和成本模型各 ~14h，RL ~10h。
- **备注**：论文明确说明了各项资源消耗，计算成本透明且可复现。

## 5. 实验数量与充分性

**实验组数**：
- 三个主要任务，每个任务均覆盖多种基座模型（LLaMA、LLaMA3、Qwen2.5）和多种对比方法。
- 消融实验：超参数 `β_c` 的影响（图 3a）、再分配奖励的鲁棒性（图 3b，添加噪声保持总回报不变）。
- 附加实验：传统 NLP 指标（连贯性、多样性，表 11）、成对 GPT-4 比较（表 12）、人类评估（表 13）、训练集与测试集奖励对比（表 14）、推理步骤可视化（多个表格）。
- **充分性评价**：
  - 覆盖了不同的对齐场景（问答、摘要、安全对齐）。
  - 对比了最主流的 RLHF 变体（PPO、RLOO、DPO）和最新的再分配方法（ABC）。
  - 消融和鲁棒性分析验证了方法的关键特性。
  - 人类评估和 GPT-4 评估增加了结果的可信度。
- **公平性**：所有实验均采用相同基座模型、相同超参数集（附录 B.4 表格 6-7），对比方法也使用官方或论文报告的最佳配置。

## 6. 主要结论与发现

- **RED 在所有三个任务上均显著优于原始稀疏奖励方法**，奖励得分和胜率大幅度提升。
- **学习效率提升**：令牌级奖励提供即时反馈，加速收敛并提高最终性能。
- **最少计算开销**：无需修改奖励模型或额外训练，仅需在前向传播时隐藏状态即可。
- **无缝集成**：可即插即用到 PPO、RLOO 等主流 RLHF 框架。
- **理论保证**：再分配后奖励属于同一等价类，最优策略不变。
- **鲁棒性**：即使再分配不完美（人为加入噪声），仍优于稀疏奖励。
- **DPO 的隐式再分配**：论文通过推导指出 DPO 隐含执行了任意类型的令牌级信用分配，这可能是其有效性的原因之一。

## 7. 优点

- **方法简洁高效**：基于现有奖励模型的时间差分，无需额外训练或人工标注。
- **提供细粒度指导**：能区分每个词元的重要性，尤其对关键词（如“Yes”）给予高奖励。
- **理论严谨**：通过势能塑形和等价类证明优化策略不变。
- **通用性强**：适用于绝大多数 RLHF 设置，包括多奖励场景（帮助性+安全性）。
- **计算成本低**：仅增加少量前向计算，无存储与训练负担。
- **实验充分**：涵盖多种数据集、多种基线、消融和鲁棒性分析，结果具有说服力。

## 8. 不足与局限

- **仅限词元级，无法处理推理步骤**：对于数学、编程等需要多步推理的任务，无法准确奖励每个推理步骤，提升有限，需要专门的推理数据集。
- **仅采用单轮训练**：论文指出仅使用一轮 RL 训练，而多轮训练（如 Alpaca 迭代）已知能进一步提高性能，尚未探索。
- **GPT-4 评估存在与奖励模型不一致的情况**：例如摘要任务中 PPO-RED 的奖励得分最高，但 GPT-4 胜率并非最高（表2），说明两种评估可能侧重不同维度，需要综合考量。
- **可能对奖励模型质量敏感**：再分配依赖奖励模型在每个时间步的预测，若奖励模型在中间步骤偏差较大，可能引入噪声。论文通过鲁棒性实验弱化了此风险，但仍未在弱奖励模型下测试。
- **未测试更大规模模型**：实验仅使用 7B-8B 参数模型，未在更大规模（如 70B）上验证。
- **人类评估样本量有限**：仅 20 名参与者和 10 题，统计显著性可能不足。

（完）

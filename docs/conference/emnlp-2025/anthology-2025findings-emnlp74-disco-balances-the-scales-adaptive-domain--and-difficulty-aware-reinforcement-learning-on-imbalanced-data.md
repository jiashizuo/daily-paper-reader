---
title: "DISCO Balances the Scales: Adaptive Domain- and Difficulty-Aware Reinforcement Learning on Imbalanced Data"
title_zh: DISCO平衡天平：基于自适应域和难度感知的强化学习在不平衡数据上的应用
authors: "Yuhang Zhou (周宇航), Jing Zhu, Shengyi Qian, Zhuokai Zhao, Xiyao Wang, Xiaoyu Liu, Ming Li, Paiheng Xu, Wei Ai, Furong Huang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.74.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 针对GRPO在数据不平衡下的局限性，提出域自适应强化学习
tldr: GRPO在多数域上优化充分，但忽视少数域，导致泛化和公平性下降。本文提出DISCO，引入域信息和自一致性机制，自适应调整优化权重。在多域不平衡数据集上，DISCO使所有域性能均衡提升，改善了GRPO的公平性和泛化能力。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.74/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1631, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.74/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 802, \"height\": 639, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.74/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 802, \"height\": 617, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.74/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 774, \"height\": 402, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 801, \"height\": 263, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 752, \"height\": 246, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 752, \"height\": 263, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 804, \"height\": 486, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 802, \"height\": 1128, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 809, \"height\": 604, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 809, \"height\": 358, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 810, \"height\": 470, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 810, \"height\": 2341, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.74/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 801, \"height\": 314, \"label\": \"Table\"}]"
motivation: GRPO在真实不平衡数据上会忽视少数域，导致性能不均。
method: 提出域信息自一致性策略优化（DISCO），动态调整各域的优化权重。
result: 在多域不平衡数据集上，DISCO均衡提升了所有域的性能。
conclusion: DISCO有效改善了GRPO在数据不平衡时的公平性和泛化。
---

## Abstract
Large Language Models (LLMs) are increasingly aligned with human preferences through Reinforcement Learning from Human Feedback (RLHF). Among RLHF methods, Group Relative Policy Optimization (GRPO) has gained attention for its simplicity and strong performance, notably eliminating the need for a learned value function. However, GRPO implicitly assumes a balanced domain distribution and uniform semantic alignment across groups—assumptions that rarely hold in real-world datasets. When applied to multi-domain, imbalanced data, GRPO disproportionately optimizes for dominant domains, neglecting underrepresented ones and resulting in poor generalization and fairness. We propose Domain-Informed Self-Consistency Policy Optimization (DISCO), a principled extension to GRPO that addresses inter-group imbalance with two key innovations. Domain-aware reward scaling counteracts frequency bias by reweighting optimization based on domain prevalence. Difficulty-aware reward scaling leverages prompt-level self-consistency to identify and prioritize uncertain prompts that offer greater learning value. Together, these strategies promote more equitable and effective policy learning across domains. Extensive experiments across multiple LLMs and skewed training distributions show that DISCO improves generalization, outperforms existing GRPO variants by 5% on Qwen3 models, and sets new state-of-the-art results on multi-domain alignment benchmarks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- 大型语言模型（LLM）通过人类反馈强化学习（RLHF）与人类偏好对齐是一种主流方法。其中，组相对策略优化（GRPO）因无需学习价值函数而简洁高效，受到广泛关注。
- 但GRPO隐含假设训练数据的域分布是平衡的、各组间的语义信号是对齐的——这一假设在真实场景中往往不成立。
- 实际多域数据集通常是长尾分布的：少数主流领域占据多数样本，而大量稀缺领域样本极少。GRPO在此类数据上会不成比例地优化主流领域，忽略稀缺领域，导致泛化能力下降和公平性问题。
- 本文提出DISCO（Domain-Informed Self-Consistency Policy Optimization），旨在通过域感知和难度感知的奖励缩放，解决GRPO在数据不平衡下的跨组优化偏差。

## 2. 方法论：核心思想、技术细节与算法流程

### 核心思想
- 在标准GRPO的奖励计算环节加入两种自适应权重：
  1. **域感知缩放**：根据该域在训练集中出现的频率 \( p_d \) 反比例放大其奖励，提升稀缺域的优化信号。
  2. **难度感知缩放**：利用组内自一致性得分（即一个组内 \( G \) 个生成结果的平均奖励）作为提示难度的代理，对不确定性高（自一致性低）的提示给予更高权重，使模型聚焦于更有学习价值的困难样本。

### 关键技术细节
- 对于任一提示 \( q \) 所属域 \( d \)，域权重 \( w_{\text{dom}}(q) \) 可采用三种变体：
  - v1（log）：\( w_{\text{dom}} = \log(1 + 1/p_d) \)
  - v2（log-squared）：\( w_{\text{dom}} = [\log(1 + 1/p_d)]^2 \)
  - v3（inverse）：\( w_{\text{dom}} = 1/p_d \)
- 难度权重 \( w_{\text{diff}}(q) = 1 / (\text{SC}(q) + \epsilon') \)，其中 SC(q) 为组内 \( G \) 个样本的平均奖励（即自一致性分数）。
- 最终缩放后的奖励：\( r_i^{\text{scaled}} = r_i \cdot w_{\text{dom}}(q) \cdot w_{\text{diff}}(q) \)。
- 优势函数计算时不进行标准差归一化（区别于原始GRPO），以保持域权重带来的绝对缩放效果。
- 整个算法流程为：采样一组提示 → 生成 \( G \) 个输出 → 计算原始奖励 → 乘以域权重与难度权重 → 组内归一化得到优势 → 代入标准GRPO目标函数进行策略更新。

## 3. 实验设计

### 数据集与场景
- 采用5个领域的数据集：IMDB（文本分类）、GSM8K（数学推理）、MATH（数学问题）、Natural Questions（开放域问答）、ARC（推理问答）。
- 训练集构建：总样本4000条（部分实验也使用了2000条验证鲁棒性）。设置“重域”倾斜分布：某一领域占75%，其余四个领域各占约8.3%。共4种重域分布（Math-heavy、IMDB-heavy、NQ-heavy、ARC-heavy）以及一个均衡分布。

### 基准方法
- Base Model：未微调的预训练模型。
- **Naive GRPO**：原始GRPO，无任何奖励缩放。
- **Dr. GRPO**：移除长度和标准差归一化的GRPO变体。
- **DISCO-Log / DISCO-LogSq / DISCO-Inv**：三种域权重变体均结合难度权重。

### 模型
- 覆盖不同规模与架构：
  - 密集模型：Qwen2.5-0.5B / 0.5B / 1.5B / 7B, Qwen2-0.5B, Qwen3-0.6B, LLaMA3.2-1B, Olmo2-1B, Gemma2-2B-it
  - 混合专家模型：Qwen1.5-MoE-A2.7B（总参14B，激活2.7B）

## 4. 资源与算力

- 论文未明确说明使用的GPU型号、数量及训练时长。仅提及使用OpenRLHF框架，单epoch微调，rollout和训练batch size均为64，microbatch size分别为8和4，最大生成长度1024 token，学习率1e-6。因此无法评估算力消耗。

## 5. 实验数量与充分性

- 实验较为充分，涵盖以下维度：
  - **不同域倾斜分布**：4种重域设置 + 1种均衡设置。
  - **多种模型**：9种不同规模和架构的LLM。
  - **不同组大小**：G = 2, 4, 8, 16。
  - **不同训练数据规模**：4000例和2000例。
  - **消融实验**：分别去除域感知和难度感知组件，验证二者缺一不可。
  - **变体比较**：三种域权重策略对比。
- 实验设计客观：所有评估采用零样本精确匹配（EM）准确率，提示模板统一；统计显著性检验（t检验，p < 0.002）支持结论。
- 总体充分性较好，但未在更大规模模型（>14B参数）上进行验证，且仅使用规则奖励（即二元精确匹配），未覆盖真实RLHF中的学习奖励模型场景。

## 6. 主要结论与发现

- **GRPO在数据不平衡下性能受损**：如Math-heavy训练使模型在MATH/GSM8K上表现更好，但在IMDB和ARC等稀缺域上显著下降，总体平均性能低于均衡训练。
- **DISCO显著提升稀缺域性能**：在多个模型上，DISCO相比Naive GRPO和Dr. GRPO取得更优平均准确率。例如Qwen3-0.6B上提升约4.4%，LLaMA3.2-1B上提升约1.65%，Qwen2.5-0.5B上提升约1.63%。
- **DISCO-Log（对数权重）是最优变体**：在三种域权重中稳定获得最高平均分，平衡了性能与稳定性。
- **双组件缺一不可**：仅域感知或仅难度感知均无法达到联合使用的效果，消融实验证实二者互补。
- **对组大小和数据集规模具有鲁棒性**：在G=2~16、数据量2000~4000情况下，DISCO均优于基线。
- **统计显著**：与Naive GRPO相比t统计量2.97（p=0.0018），与Dr. GRPO相比t统计量3.49（p=0.0003）。

## 7. 优点

- **问题新颖且实践相关**：首次系统研究GRPO在数据不平衡下的脆弱性，切中真实应用痛点。
- **方法简洁有效**：仅通过加权缩放奖励即可显著改善，无需引入额外网络或复杂训练流程，易于集成到现有GRPO框架。
- **充分的消融与敏感性分析**：验证了不同权重策略、组大小、数据量等因素的影响，结论可靠。
- **广泛的模型覆盖**：涵盖密集、MoE、不同规模架构，结论具有泛化性。
- **统计显著性验证**：使用t检验加强说服力。

## 8. 不足与局限

- **仅使用规则奖励**：实验基于精确匹配这一确定性二元奖励，未验证在真实RLHF中（学习型奖励模型、连续奖励）下的表现，可能影响实际迁移性。
- **依赖预定义域标签**：域感知缩放需要明确的域划分；真实数据中域可能重叠或模糊，自动域识别是未解决的问题。
- **模型规模限制**：最大模型为14B（MoE），未在更大模型（如70B+）上验证，可能在大模型上效果不同。
- **难度代理单一**：使用组内平均奖励作为自一致性度量，未比较其他启发式（如熵、置信度等）可能产生的差异。
- **未探索数据级方法结合**：未与过采样、数据增强等数据级策略结合，可能错过互补提升。
- **超参数调优范围有限**：对KL系数、学习率等与缩放策略的交互缺乏系统探索。
- **评估仅基于四个预定义重域设置**，未在连续不平衡比例或更复杂的效用函数（如加权平均）下测试Pareto前沿。

（完）

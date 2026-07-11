---
title: "CRPO: Confidence-Reward Driven Preference Optimization for Machine Translation"
title_zh: CRPO：基于置信度-奖励驱动的偏好优化用于机器翻译
authors: "Guofeng Cui, Pichao Wang, Yang Liu, Zemian Ke, Zhu Liu, Vimal Bhat"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.31.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 提出基于RLHF和DPO的CRPO方法
tldr: 本文提出CRPO方法，结合奖励分数和模型置信度来挑选具有挑战性的句对进行偏好优化，从而更有效地利用偏好数据。在机器翻译任务上，CRPO优于标准的直接偏好优化（DPO），表明该方法能显著提升学习效率。这项工作为RLHF框架下的数据选择提供了新思路。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.31/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1639, \"height\": 505, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.31/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1663, \"height\": 636, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.31/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 801, \"height\": 334, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.31/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1666, \"height\": 1036, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.31/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 811, \"height\": 498, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.31/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 810, \"height\": 465, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.31/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 806, \"height\": 391, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.31/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1603, \"height\": 1374, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.31/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1021, \"height\": 135, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.31/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 687, \"height\": 354, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.31/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1663, \"height\": 1374, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.31/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 775, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.31/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 823, \"height\": 212, \"label\": \"Table\"}]"
motivation: DPO的性能严重依赖偏好数据质量，现有方法难以高效利用数据。
method: 提出置信度-奖励驱动的偏好优化（CRPO），通过模型不确定性和奖励分数筛选困难样本进行微调。
result: 在机器翻译基准上，CRPO优于DPO和其他基线方法。
conclusion: 动态选择挑战性样本能有效提升偏好优化的效果。
---

## Abstract
Large language models (LLMs) have shown great potential in natural language processing tasks, but their application to machine translation (MT) remains challenging due to pretraining on English-centric data and the complexity of reinforcement learning from human feedback (RLHF). Direct Preference Optimization (DPO) has emerged as a simpler and more efficient alternative, but its performance depends heavily on the quality of preference data. To address this, we propose Confidence-Reward driven Preference Optimization (CRPO), a novel method that combines reward scores with model confidence to improve data selection for fine-tuning. CRPO selects challenging sentence pairs where the model is uncertain or underperforms, leading to more effective learning. While primarily designed for LLMs, CRPO also generalizes to encoder-decoder models like NLLB, demonstrating its versatility. Empirical results show that CRPO outperforms existing methods such as RS-DPO, RSO and MBR score in both translation accuracy and data efficiency.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究背景**：大型语言模型（LLM）在机器翻译（MT）中面临挑战，主因是预训练数据以英语为中心，且强化学习从人类反馈（RLHF）流程复杂而低效。直接偏好优化（DPO）作为更简单的替代方案，但其性能严重依赖偏好数据质量。
- **核心问题**：现有数据选择方法（如RSO、RS-DPO）仅关注奖励分数，忽视模型自身置信度，导致选择“简单”样对，学习效率低且易受分布偏移影响。
- **研究动机**：需要一种联合考虑奖励分数和模型不确定性的数据选择策略，以挑出模型最“困惑”的样对，最大化微调效果。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：从DPO损失函数出发，分析（1）损失变化 和（2）损失值 两个指标，发现二者均可分解为 **奖励项**（奖励差异）与 **置信度项**（模型生成似然差异）的组合。由此提出两种置信度-奖励分数（CR-Score）：
  - **CR⁺**（加法形式）：\( \text{CR}^+ = \phi \cdot [R(x, y_w) - R(x, y_l)] + [\log \pi_{\text{ref}}(y_l|x) - \log \pi_{\text{ref}}(y_w|x)] \)  
    源自损失变化，需超参数 ϕ 平衡两项尺度。
  - **CR×**（乘法形式）：\( \text{CR}^\times = [R(x, y_w) - R(x, y_l)] \cdot [\log \pi_{\text{ref}}(y_l|x) - \log \pi_{\text{ref}}(y_w|x)] \)  
    源自损失值，自然平衡两项，无需手动调 ϕ。
- **CRPO算法流程**：
  1. 对每个源句，从参考策略 π_ref 采样 K 个候选译文。
  2. 使用奖励模型评分，选出最高奖励句作为偏好句 y_w。
  3. 计算每个候选句与 y_w 的 CR-Score，仅保留正分样对，并选最大分值的样对加入数据集。
  4. 用该数据集通过 DPO（或 CPO）微调模型。
- **关键区别**：RS-DPO 只要求奖励差大于阈值；RSO 用奖励驱动的统计拒绝采样；CRPO 则同时要求奖励差大且模型对 y_w 的置信度低于 y_l（即模型之前更倾向生成劣质句），从而聚焦“困难”样对。

## 3. 实验设计
- **数据集**：
  - 训练集：FLORES-200 子集（共24,314个源句），覆盖 10 个翻译方向（en↔zh, en↔de, en↔cs, en↔is, en↔ru）。每个源句采样 64 个候选译文（来自 ALMA 预训练模型）。
  - 测试集：WMT21（en↔is）和 WMT22（其余8方向），共17,471个句对。
- **基准方法**：QE微调、RSO、RS-DPO、MBR分数（MBR-BW、MBR-BMW）、CPO三联数据集（Triplet Dataset）。同时对比Gold Reference。
- **评估指标**：主要用 COMET 系列（XCOMET、KIWI-XL、COMET22、KIWI22），另用 BLEURT-20 做非COMET验证。
- **模型**：ALMA-7B（LoRA微调）、NLLB-1.3B（LoRA微调）。

## 4. 资源与算力
- **文中未明确说明**：未提及 GPU 型号、数量、训练时长等具体算力信息。仅说明使用了 DeepSpeed 工具优化 ALMA 训练效率。

## 5. 实验数量与充分性
- **实验规模**：
  - 主要结果：10个翻译方向的平均值 + 每个方向细表（表4、5），对比6种基线。
  - 泛化实验：NLLB-1.3B 上重复同样流程（表2）。
  - 消融实验：对比 MinMaxR（仅奖励）、MinMaxP（仅置信度）、MinMaxPO（仅似然）、TopScores 等，共5种消融变体（表3）。
  - 额外分析：混合三联数据集效果（表8）、CPO 训练对比（表9）、BLEURT 指标验证（表7）、显著性检验（表6）。
- **充分性评价**：实验覆盖全面，包含多方向、多模型架构、多基线、多种消融；显著性检验（p<0.005）支持结论；使用非COMET指标避免度量偏差。公平性良好。

## 6. 主要结论与发现
- CRPO（尤以 CR⁺ 形式）在全部指标上显著优于 RSO、RS-DPO、MBR 分数和三联数据集。
- 置信度项（log π_ref 差异）是关键增益：仅考虑奖励的 MinMaxR 和仅考虑置信度的 MinMaxP 均不如联合考虑。
- CRPO 在编码器-解码器模型（NLLB）上同样有效，表明泛化性好。
- 混合三联数据集可进一步提升 CRPO 性能，说明 CRPO 能有效整合外部高质量数据。
- CPO 训练下 CRPO 仍优于三联数据集。

## 7. 优点
- **方法创新**：首次将模型置信度（生成似然差异）引入偏好数据选择，从损失变化/损失值推导出简洁的联合评分公式，理论动机清晰。
- **无需人工标注**：完全基于参考策略采样和奖励模型评分，可自动化。
- **跨模型通用**：同时适用于 decoder-only LLM 和 encoder-decoder 翻译模型。
- **实验设计严谨**：多方向、多指标、多基线、显著性检验、非COMET指标验证，确保结论可靠。

## 8. 不足与局限
- **仅选单个最优样对**：每个源句只保留一个样对（最大CR-Score），可能丢弃其他有潜力的样对（作者在Limitation中已指出）。
- **超参数敏感性**：CR⁺ 需要调节 ϕ（文中设50），虽给出估计方法，但在新任务/模型上仍需调优。
- **依赖高质量奖励模型**：奖励模型的质量直接影响数据选择效果（文中使用两个3.5B COMET模型平均）。
- **实验未覆盖大规模数据**：训练集仅2.4万源句，未在更大规模（如百万级）上验证可扩展性。
- **计算开销**：对每个源句需采样64个候选并评分，采样和评分计算量较大。
- **未深入分析失败案例**：缺乏对“为何某些样对 CR-Score 为负被丢弃后模型性能未损失”的定性分析。

（完）

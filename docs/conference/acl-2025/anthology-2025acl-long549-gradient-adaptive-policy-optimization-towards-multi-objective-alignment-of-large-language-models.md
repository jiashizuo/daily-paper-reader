---
title: "Gradient-Adaptive Policy Optimization: Towards Multi-Objective Alignment of Large Language Models"
title_zh: 梯度自适应策略优化：迈向大语言模型的多目标对齐
authors: "Chengao Li, Hanyu Zhang, Yunkun Xu, Hongyan Xue, Xiang Ao, Qing He"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.549.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 通过梯度自适应策略优化进行多目标RLHF对齐
tldr: 现有RLHF方法难以处理冲突的人类偏好。本文将人类价值对齐建模为多目标优化问题，提出梯度自适应策略优化(GAPO)，通过多梯度下降自适应调整每个目标的梯度方向，以最优方式更新策略。实验表明GAPO能有效平衡多种偏好。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.549/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1479, \"height\": 729, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.549/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1667, \"height\": 562, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.549/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 762, \"height\": 719, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.549/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1647, \"height\": 483, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.549/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 745, \"height\": 1437, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.549/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1644, \"height\": 2418, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.549/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1647, \"height\": 2085, \"label\": \"Table\"}]"
motivation: 人类偏好可能冲突，现有RLHF方法难以同时满足多个目标，需要多目标优化方法。
method: 将对齐建模为多目标优化，采用多梯度下降，自适应缩放各目标梯度以确定更新方向。
result: 在多个偏好分布上实现有效对齐，优于单目标RLHF方法。
conclusion: GAPO提供了一种处理冲突偏好的通用框架，可扩展至多目标对齐场景。
---

## Abstract
Reinforcement Learning from Human Feedback (RLHF) has emerged as a powerful technique for aligning large language models (LLMs) with human preferences. However, effectively aligning LLMs with diverse human preferences remains a significant challenge, particularly when they are conflict. To address this issue, we frame human value alignment as a multi-objective optimization problem, aiming to maximize a set of potentially conflicting objectives. We introduce Gradient-Adaptive Policy Optimization (GAPO), a novel fine-tuning paradigm that employs multiple-gradient descent to align LLMs with diverse preference distributions. GAPO adaptively rescales the gradients for each objective to determine an update direction that optimally balances the trade-offs between objectives. Additionally, we introduce P-GAPO, which incorporates user preferences across different objectives and achieves Pareto solutions that better align with the user’s specific needs.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：现有RLHF方法通常使用单一奖励函数来代表平均人类偏好，但人类偏好具有多样性且可能相互冲突（如有用性与无害性）。线性标量化等传统多目标优化方法难以平衡冲突目标，导致次优的帕累托前沿。
- **研究动机**：将人类价值对齐形式化为多目标优化问题，寻求能够同时优化多个可能冲突的目标、并自动平衡它们的方法，同时支持用户个性化需求。

### 2. 论文提出的方法论
- **核心思想**：采用多梯度下降算法（MGDA），但针对MGDA优化不一致的问题，引入梯度自适应缩放（gradient rescaling），使更新方向更关注尚未充分优化的目标，从而得到更平衡的帕累托最优解。
- **关键技术细节**：
  - **GAPO**：首先对每个目标的梯度进行归一化（除以梯度的L2范数的p次幂，p取1或2），然后求解一个约束优化问题，找到一组非负权重α，使得加权后的归一化梯度模长最小，该方向即为公共下降方向。
  - **P-GAPO**：直接使用用户偏好向量λ对归一化梯度进行加权求和，得到个性化更新方向，从而获得符合用户偏好的帕累托解。
- **公式/算法流程**（文字说明）：
  - GAPO步骤：① 对每个目标计算策略梯度 ∇J_i(θ)；② 归一化梯度 ∇_N J_i(θ) = ∇J_i(θ) / ||∇J_i(θ)||^p_2；③ 求解 min_α ||∑ α_i ∇_N J_i(θ)||^2，满足 α_i ≥ 0且和为1；④ 用该方向更新参数。
  - P-GAPO步骤：直接用用户偏好λ与归一化梯度加权求和得到更新方向。

### 3. 实验设计
- **数据集**：
  - **训练集**：PKU-SafeRLHF（83.4K偏好条目，带有帮助性和无害性两个维度的标注）。
  - **测试集**：PKU-SafeRLHF测试集（8.21K prompts）和HH-RLHF测试集（分为6,240帮助性prompts和2,312无害性prompts）。
- **基准（Benchmark）**：与以下方法对比：
  - 单目标PPO（PPO-H、PPO-S）
  - Safe RLHF（PPO-Lagrangian）
  - Fast RL（公平稳定奖励组合）
  - MGDA（未归一化的多梯度下降）
  - 线性标量化MORLHF
  - Rewarded Soups (RS)（权重插值）
- **评估指标**：模型奖励分数（帮助性、无害性、无害比例、平均分）、GPT-4o评分（相对分数、胜率、赢/平/输比率）、帕累托前沿可视化。

### 4. 资源与算力
- 论文未明确说明使用的GPU型号、数量及训练时长。仅提到使用Mistral-7B-SFT作为基础模型，并使用已有的奖励模型（beaver-7b-v1.0-reward/cost）。可以推断训练在单卡或少量GPU上可完成（7B模型），但具体资源未披露。

### 5. 实验数量与充分性
- **实验组数**：
  - 两种数据集上的模型奖励评分对比（表1）。
  - GPT-4o评估（相对分数、胜率、赢/平/输比率）（图2）。
  - 帕累托前沿对比（P-GAPO vs MORLHF vs RS）（图3）。
  - 消融实验：GAPO中p=1与p=2的对比。
  - 案例分析（附录表3、表4）。
- **充分性与公平性**：
  - 对比方法全面（单目标、约束RL、加权组合、MGDA基线），且使用相同奖励模型和基础模型，实验设计公平。
  - 缺乏在多模型（如不同规模LLM）上的验证，仅用了Mistral-7B。

### 6. 论文的主要结论与发现
- GAPO在帮助性和无害性上均优于现有方法，尤其在平均分和平衡性上表现最佳（表1）。
- 梯度归一化（p=1）比p=2效果更好（图2），表明适度的梯度缩放能有效平衡优化。
- P-GAPO生成的帕累托前沿优于MORLHF和RS，特别是在偏好较为均衡时提升明显。
- MGDA由于一致性约束导致更新不平衡，而GAPO通过自适应缩放使得更新更关注欠优化目标。

### 7. 优点
- **方法新颖**：首次将梯度自适应缩放引入多目标RLHF，理论保证收敛到帕累托最优（定理3.2, 3.3）。
- **灵活性高**：可与任何策略梯度或DPO类算法结合，且实现了用户偏好个性化（P-GAPO）。
- **实验充分**：使用多种评估方式（模型奖励+GPT-4o评分），对比多类基线，并展示帕累托前沿。
- **理论严谨**：提供收敛性和优化速率定理证明。

### 8. 不足与局限
- **实验覆盖有限**：仅在Mistral-7B上进行，未验证在其他大小模型上的泛化性。
- **计算资源未披露**：无法判断可复现性和训练成本。
- **缺乏标准评估方法**：对于是否符合用户偏好权重，尚无广泛认可的评估指标，依赖GPT-4o可能带来偏差。
- **梯度替代**：实际使用最后层参数梯度近似全梯度，可能影响最优性（但论文指出为节省空间）。
- **仅考虑两个目标**（帮助性与无害性），未探索更多目标（如诚实）的拓展。

（完）

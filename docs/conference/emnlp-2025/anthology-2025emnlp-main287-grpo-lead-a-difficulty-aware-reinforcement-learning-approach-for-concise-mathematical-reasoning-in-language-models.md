---
title: "GRPO-LEAD: A Difficulty-Aware Reinforcement Learning Approach for Concise Mathematical Reasoning in Language Models"
title_zh: GRPO-LEAD：一种面向简洁数学推理的难度感知强化学习方法
authors: "Jixiao Zhang, Chunsheng Zuo"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.287.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 提出GRPO-LEAD，通过长度正则和难度感知加权增强GRPO
tldr: 针对GRPO在数学推理中奖励稀疏、输出冗长和难度忽视问题，提出GRPO-LEAD，引入长度正则奖励、错误惩罚和难度感知优势重加权。在多个数学推理基准上取得最优性能，显著提升了推理的准确性和简洁性，为GRPO方法在医疗LLM中的潜在应用提供了改进方向。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.287/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1569, \"height\": 733, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.287/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 791, \"height\": 427, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.287/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1642, \"height\": 805, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.287/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1342, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.287/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1239, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.287/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1422, \"height\": 948, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.287/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1634, \"height\": 935, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.287/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1643, \"height\": 213, \"label\": \"Table\"}]"
motivation: GRPO在数学推理中面临奖励稀疏和输出冗长等问题。
method: 提出GRPO-LEAD，增强GRPO的长度正则奖励、错误惩罚和难度感知加权。
result: 在数学推理基准上取得最优，提升了准确性和简洁性。
conclusion: 改进后的GRPO更适用于需要简洁推理的场景。
---

## Abstract
Group Relative Policy Optimization (GRPO), which is widely adopted by R1-like reasoning models, has advanced mathematical reasoning. Nevertheless, GRPO faces challenges in reward sparsity, verbosity, and inadequate focus on problem difficulty. We propose GRPO-LEAD, enhancing GRPO with: (1) length-regularized rewards to encourage conciseness while maintaining accuracy; (2) explicit penalties for incorrect solutions to improve model precision; and (3) difficulty-aware advantage reweighting for robust generalization on challenging problems. Comprehensive evaluations demonstrate that GRPO-LEAD significantly improves reasoning accuracy, conciseness, and efficiency. Our approach achieves state-of-the-art performance for 14B-scale models, underscoring the synergy of our methods with appropriate model scale and high-quality data. Our source code, generated dataset, and models are available at https://github.com/aeroplanepaper/GRPO-LEAD.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）

- **背景**：Group Relative Policy Optimization（GRPO）是 R1 系列推理模型广泛采用的强化学习方法，在数学推理任务中表现出色。
- **问题**：标准 GRPO 存在三大关键缺陷：
  1. **奖励稀疏**：基于二值正确性的奖励信号在同组响应一致正确或一致错误时缺乏区分度，导致学习梯度弱、收敛慢。
  2. **输出冗长**：现有奖励机制未有效惩罚过长推理，模型倾向于产生冗长回答（reward hacking），降低推理效率和可解释性。
  3. **难度忽视**：奖励对所有问题一视同仁，导致模型过度优化简单问题而忽视复杂问题，削弱泛化能力。
- **总体含义**：本文旨在通过改进 GRPO 的奖励设计和学习机制，使其能同时提升数学推理的准确性、简洁性和对困难问题的鲁棒性。

## 2. 方法论：核心思想、关键技术细节

本文提出 **GRPO-LEAD**（GRPO with Length-dependent rewards, Explicit penalties, and Advantage reweighting for Difficulty），在标准 GRPO 基础上引入三项核心改进：

### 2.1 长度依赖的准确性奖励（Length-Dependent Accuracy Reward）
- 对于正确回答：基于组内正确回答长度的标准化偏差 \(z = (|o| - \mu)/(\sigma + \epsilon)\)，用指数衰减函数分配奖励：\(R = \exp(-\alpha z)\)，其中 \(\alpha > 0\) 为惩罚强度。
- 对于错误回答：奖励为 0（在下一项改进前）。
- 效果：鼓励简洁正确回答，惩罚冗长正确回答。

### 2.2 显式惩罚错误回答（Explicit Penalty for Incorrect Answers）
- 将错误回答的奖励从 0 改为 **-1**，使得期望奖励为 \(E[R] \approx 2P(\text{correct}) - 1\)。
- 效果：只有当正确概率超过 50% 时奖励才为正，抑制盲目猜测，提升模型精度。

### 2.3 难度感知优势重加权（Difficulty-Aware Advantage Reweighting）
- 定义问题难度代理：组内正确率 \(\rho_q = \text{正确响应数} / \text{总响应数}\)。
- 使用 logistic 函数计算重加权因子：\(w(\rho_q) = A + \frac{B-A}{1+\exp[k(\rho_q - \rho_0)]}\)。超参数：\(A=0.4, B=1.5, \rho_0=0.75, k=10\)。
- 对优势估计进行重新缩放：若优势为正，乘以 \(w(\rho_q)\)；若为负，乘以 \(w(1-\rho_q)\)。
- 效果：放大困难问题上的学习信号（正确回答更稀有），同时强化对简单问题的惩罚。

### 附加改进
- 去除 KL 惩罚项以促进探索。
- 两阶段课程学习：先对大部分数据用 GRPO-LEAD 训练，再聚焦难度高、精度低的问题，并加入重复 n-gram 的负奖励（-1.5）以消除格式化错误。

## 3. 实验设计

- **数据集**：
  - 训练：DeepScaler 数据集（过滤难度≥2.5，约 9k 题）；第二阶段使用轻量 R1 数据集补充困难题。
  - 验证：AIMO2、CMU-MATH-AIMO、AIME24 部分题目（27 题）。
  - 测试：**AIME24** 和 **AIME25** 全部题目。
  - 额外评估：LiveCodeBench（编码任务）以验证泛化性。
- **Benchmark 指标**：
  - **Cons@32**：32 次采样后多数投票准确率。
  - **Pass@1**：单次采样准确率。
  - **平均长度 (Len avg)**：输出 token 数，衡量简洁性。
- **对比方法**：
  - DeepSeek-R1-Distilled-Qwen-7B/14B（基线）。
  - Light-R1-14B-DS（当前最强 14B 模型，使用余弦长度奖励）。
  - 消融实验：标准 GRPO → +长度奖励 → +长度奖励+难度重加权 → +三者（LEAD）。

## 4. 资源与算力

论文明确提到：
- **14B 模型 Stage 1**：约 100 步训练，在 **八块 H20 GPU** 上耗时约 **24 小时**。
- **7B 模型**：约 200 步训练，未明确 GPU 型号与数量。
- **超参数**：学习率 1e-6，批大小 32，组大小 8，长度限制 8k（7B）/ 14k（14B）。
- 作者承认计算资源有限，未能进行完整的超参数搜索和部分验证实验的复现。

## 5. 实验数量与充分性

- **消融实验**：在 7B 模型上按组件逐步添加，在 AIME24/25 两个数据集上报告 Cons@32、Pass@1、平均长度，共 4 组配置，结果清晰。
- **规模对比**：7B 和 14B 两种规模。
- **难度分层分析**：将 AIME25 分为正常（1-5）、困难（6-10）、极难（11-15）三组，深入分析组件对难度的影响。
- **预算对比**：绘制不同预算下的 Pass@1 曲线（图3）。
- **额外任务**：LiveCodeBench 编码任务验证泛化性。
- **充分性评价**：实验设计较为全面，覆盖主要消融、跨难度、跨预算、跨任务。**但存在不足**：因计算资源限制，缺少 7B 模型的完整验证曲线（显式惩罚部分）、未进行正式超参数搜索；未与更多变体（如其他长度奖励方法）对比；仅在数学和编码上测试，未扩展到其他推理域。

## 6. 主要结论与发现

1. **GRPO-LEAD 显著提升推理准确性和简洁性**：在 14B 尺度上达到 AIME24/25 的最优 Pass@1（0.650 和 0.539），同时平均长度减少至 8.3k/8.7k tokens，远低于基线（9.2k/10.0k）。
2. **各组件贡献不同**：
   - 长度奖励主要带来简洁性，并在低预算下大幅提升性能。
   - 难度重加权进一步在困难问题上提升准确率（Pass@1 提升 13.7%）。
   - 显式惩罚起到正则化效果，在极难问题上精度提升超过一倍（0.156→0.355），但略微增加长度。
3. **训练高效**：仅 24 小时即可匹配或超越现有强基线 Light-R1-14B-DS。
4. **泛化性**：在编码任务（LiveCodeBench）上也表现出改进（0.5156 vs 0.5103），但长度略有增加，推测因数学与编码领域差异。
5. **数据质量与课程学习**：SFT 结合 RL 的两阶段训练有助于快速收敛和克服过拟合。

## 7. 优点

- **方法论创新**：将长度正则、错误惩罚、难度感知三者有机融合，直击 GRPO 的核心弱点。
- **实验全面**：涵盖消融、预算、难度分层、跨领域评估，验证充分。
- **实用高效**：在有限算力（8×H20，24 小时）下达到 SOTA，可复现性好。
- **开源**：代码、数据、模型全部公开。
- **定性分析**：提供具体示例展示长度奖励如何促进简洁推理。

## 8. 不足与局限

- **领域限制**：方法仅在数学推理和编码任务上验证，对更广泛的开放域问答或逻辑推理的效果未知。
- **计算资源限制**：
  - 缺少 7B 模型的完整验证曲线（特别是显式惩罚的消融）。
  - 未进行正式超参数搜索，参数选择可能非最优。
  - 训练步数较少（100-240 步），长期训练表现未探索。
- **部分正确性处理**：当前二值奖励无法处理部分正确的推理步骤，论文未讨论此问题。
- **编码任务泛化不稳定**：编码任务上输出长度增加，说明简洁性奖励未完全迁移。
- **偏差风险**：训练数据以竞赛数学题为主，可能偏向特定题型；对更开放、真实世界的数学问题适用性待验证。

（完）

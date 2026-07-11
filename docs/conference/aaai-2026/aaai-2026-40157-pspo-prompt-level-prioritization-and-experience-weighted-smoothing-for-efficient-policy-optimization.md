---
title: "PSPO: Prompt-Level Prioritization and Experience-Weighted Smoothing for Efficient Policy Optimization"
title_zh: PSPO：基于提示级别优先级和经验加权平滑的高效策略优化
authors: "Xinxin Zhu, Ying He, Haowen Hou, Ruichong Zhang, Nianbo Zeng, Yulin Peng, Jiongfeng Fang, F. Richard Yu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40157/44118"
tags: ["query:mlr"]
score: 9.0
evidence: 直接提出GRPO的改进方法，用于策略优化
tldr: 当前GRPO等方法在强化微调中存在数据效率低、需要大量在线采样的问题。本文提出PSPO，通过经验加权奖励平滑和提示级别优先级排序两种技术，在不增加计算开销的情况下显著提升训练稳定性和样本效率。实验表明，PSPO在多个基准上以更少的采样步数达到了与GRPO相当或更优的性能，为LLM对齐提供了一种轻量级高效替代方案。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有GRPO等强化微调方法数据效率低下，需要大量在线采样以维持性能。
method: 提出提示级别优先级排序和经验加权奖励平滑两种互补技术，增强GRPO的训练稳定性与样本效率。
result: 在多个对齐基准上，PSPO以更少的采样步数达到或超越GRPO的性能。
conclusion: PSPO是一种轻量级高效策略优化方法，可提升GRPO的实用性和可扩展性。
---

## Abstract
Reinforcement Fine-tuning (RFT) methods such as Group Relative Policy Optimization (GRPO) have demonstrated strong capabilities in aligning Large Language Models with human preferences. However, these approaches often suffer from limited data efficiency, necessitating extensive on-policy rollouts to maintain competitive performance. We propose PSPO (Prompt-Level Prioritization and Experience-Weighted Smoothing for Efficient Policy Optimization), a lightweight yet effective enhancement to GRPO that improves training stability and sample efficiency through two complementary techniques. First, we introduce an experience-weighted reward smoothing mechanism, which uses exponential moving averages to track group-level reward statistics for each prompt. This enables more stable advantage estimation across training steps without storing entire trajectories, allowing the model to capture historical reward trends in a lightweight and memory-efficient manner. Second, we adopt a prompt-level prioritized sampling strategy, which is an online data selection method inspired by prioritized experience replay. It dynamically emphasizes higher-impact prompts based on their relative advantages, thereby improving data efficiency. Experiments on multiple mathematical reasoning benchmarks and models show that PSPO achieves comparable or better accuracy than GRPO, while significantly accelerating convergence, and maintaining low computational and memory overhead.

---

## 论文详细总结（自动生成）

# PSPO 论文详细总结

## 1. 核心问题与整体含义

- **研究动机**：强化微调（RFT）方法（如GRPO）在将大语言模型与人类偏好对齐方面表现出色，但存在**数据效率低**的问题，需要大量在线采样（on-policy rollouts）才能维持竞争性能。同时，GRPO在训练中均匀采样所有提示，忽略了不同提示的学习效用差异。
- **整体含义**：本文旨在提升GRPO的训练稳定性和样本效率，提出一种轻量级增强方法PSPO，能够在**不显著增加计算和内存开销**的前提下加速收敛、提高准确率，使RFT方法更实用、可扩展。

## 2. 方法论

### 核心思想
PSPO在GRPO基础上引入两项互补技术：
1. **经验加权奖励平滑（Experience-weighted Reward Smoothing, ERS）**：对每个提示维护奖励均值和标准差的指数移动平均，以稳定优势估计。
2. **提示级别优先级采样（Prompt-level Prioritized Sampling, PPS）**：基于每个提示的相对优势动态调整采样概率，聚焦高信息量样本，灵感来自优先经验回放。

### 关键技术细节

#### ERS
- 对于每个提示 \( q \)，在第 \( t \) 次采样后，更新平滑均值：
  \[
  \bar{\mu}_t \leftarrow \bar{\mu}_{t-1} + \alpha \cdot (\mu_t - \bar{\mu}_{t-1})
  \]
- 平滑标准差更新使用指数移动方差公式：
  \[
  (\bar{\sigma}_t)^2 \leftarrow (1-\alpha)(\bar{\sigma}_{t-1})^2 + \alpha(\sigma_t)^2 + \alpha(1-\alpha)(\mu_t - \bar{\mu}_{t-1})^2
  \]
- 将平滑统计量视为提示级别的基线 \( V^t = \bar{\mu}^t \)，计算稳定优势：
  \[
  \bar{A}_i = \frac{r_i - V^t}{\bar{\sigma}^{t-1} + \epsilon}
  \]
- 优点：无需存储完整轨迹，仅跟踪标量统计，保持on-policy性质，避免分布偏移和梯度偏差。

#### PPS
- 定义三种优先级方案：
  - 平均组优势（Average Group-wise Advantage）
  - 最大组优势（Max Group-wise Advantage）
  - **最后样本优势（Last-Sample Advantage）**：优先使用最近生成输出的优势，实际效果最佳。
- 采样概率：\( P(q) = p_q^\lambda / \sum_k p_k^\lambda \)，其中 \( p_q = |A_G| + \epsilon \)。
- 为修正分布偏差，使用重要性采样权重 \( w_q = \left( \frac{1}{N \cdot P(q)} \right)^\beta \)，并归一化至[0,1]。
- PSPO目标函数：
  \[
  J_{\text{PSPO}}(\theta) = \mathbb{E}_{q \sim P(q), \{o_i\} \sim \pi_{\text{old}}} \left[ \frac{w_q}{G} \sum_{i=1}^G \min\left( \frac{\pi_\theta}{\pi_{\text{old}}} \bar{A}_i, \text{clip}\left( \frac{\pi_\theta}{\pi_{\text{old}}}, 1-\epsilon, 1+\epsilon \right) \bar{A}_i \right) - \eta D_{\text{KL}}(\pi_\theta \|\pi_{\text{ref}}) \right]
  \]

### 算法流程
- 初始化策略 \( \pi_{\text{init}} \)，超参数 \( \epsilon, \eta, \alpha, \lambda, \beta \)。
- 每轮（epoch）设置参考策略。
- 每一步（step）：
  1. 从分布 \( P(q) \) 采样批次 \( D_b \)。
  2. 对每个提示采样 \( G \) 个输出。
  3. 通过EMA更新平滑奖励统计 \( \bar{\mu}, \bar{\sigma} \)。
  4. 计算平滑优势 \( \{\bar{A}_i\} \)。
  5. 更新该提示的优先级分数。
  6. 最大化PSPO目标更新策略。

## 3. 实验设计

- **基准模型**：DeepSeek-R1-Distill-Qwen-1.5B、Qwen2.5-Math-1.5B、Qwen2.5-Math-1.5B-Instruct、Qwen2.5-Math-7B、Qwen2.5-Math-7B-Instruct。
- **训练数据**：来自Dang & Ngo (2025) 的7000个混合难度数学推理问题样本。
- **评估基准**：5个数学推理基准：AIME 2024、MATH500、AMC 2023、Minerva、OlympiadBench。评价指标：pass@1。
- **对比方法**：
  - 基线：原始模型、GRPO、Dr.GRPO（去掉响应长度偏置的GRPO简化版）。
  - PSPO变体：仅+ERS、仅+PPS、ERS+PPS联合。
- **配置细节**：
  - 7B模型使用LoRA（所有线性层），1.5B模型全量微调。
  - 混合奖励：余弦奖励（基于正确性和输出长度）+ 格式奖励。
  - 超参数：EMA系数 \( \alpha = 0.99 \)，优先级 \( \lambda \)、\( \beta \) 等见附录。

## 4. 资源与算力

- **GPU**：2× NVIDIA A100 40GB。
- **显存优化**：DeepSpeed ZeRO Stage 2。
- **训练时长**：论文未明确给出具体训练小时数。
- **其他**：1.5B模型可全量微调，7B模型因资源限制使用LoRA。

## 5. 实验数量与充分性

- **实验组数**：
  - 表1：GRPO + 各变体在5个模型×5个基准上的结果（约5×5×4=100个数据点）。
  - 表2：Dr.GRPO + 各变体类似规模。
  - 表3、表4：消融实验（线性方差更新、无方差平滑）。
  - 图2、图3：优先级策略对比、平滑对优先级的影响。
  - 图4：EMA因子 \( \alpha \) 的敏感性分析。
- **充分性**：实验覆盖多种模型规模（1.5B、7B）和指令/基座类型，多个基准，并进行了消融研究和参数分析。实验设计较为全面，结果呈现清晰，但部分实验未报告统计显著性检验，且未在非数学推理任务上验证。总体公平客观。

## 6. 主要结论与发现

- **ERS和PPS均能独立提升性能**：在多数设置下，单独使用ERS或PPS相比GRPO有提升；联合使用（ERS+PPS）在部分模型上达到最佳，但并非总是叠加增益，可能因为两者存在重叠。
- **PPS显著加速收敛**：尤其在DeepSeek-R1-Distill-Qwen-1.5B上，PPS将GRPO平均准确率从52.74%提升至57.88%（+5.10%）。
- **ERS最佳α=0.99**：强近期奖励权重，兼顾稳定性与适应性；而样本平均更新（α=1/n）表现最差，不适合非平稳奖励分布。
- **最后样本优势是最佳优先级策略**：相比平均/最大组优势，最后样本优势在困难任务（如AIME24）上表现更好。
- **平滑优先级的直接使用略优于原始奖励统计**：但在部分情况下差异不大。
- **基座模型受益于标准差平滑**，而指令模型可能受益较少。
- RFT对7B基座模型提升有限，可能受限于LoRA和小批量大小。

## 7. 优点

- **轻量高效**：仅维护标量统计，不存储完整轨迹，计算和内存开销极低，易于集成到现有GRPO流程。
- **互补设计**：ERS稳定梯度估计，PPS聚焦高信息样本，二者协同提升性能。
- **广泛的模型和基准验证**：覆盖多种模型规模、指令/基座、5个不同难度基准，结果充分。
- **消融深入**：分析了EMA因子、优先级策略、方差更新方式、平滑优先级影响等，论证充分。
- **理论解释**：从Intropy框架出发，将PSPO解释为隐式熵归一化机制，增强理解。

## 8. 不足与局限

- **实验覆盖有限**：仅针对数学推理任务，未验证在代码、通用对话、安全性等其他对齐场景下的适用性。
- **联合使用收益不恒定**：ERS+PPS组合并非在所有模型上优于单独组件，提示可能存在过优化或冗余，需更深入分析协同机制。
- **资源描述不完整**：未给出具体训练时长、总GPU小时数，不利于成本对比。
- **统计显著性缺失**：未报告多次运行的结果方差或显著性检验，部分提升幅度较小（如<2%），可能不显著。
- **优先级策略选择主观**：三种优先级定义来自直觉，缺乏理论指导；最后样本优势虽好但解释不够充分。
- **重要性采样权重归一化**：仅按最大值归一化向下缩放，可能引入保守更新，影响收敛速度。
- **7B模型使用LoRA**：可能限制RFT潜力，结论对全量微调场景的推广性存疑。

（完）

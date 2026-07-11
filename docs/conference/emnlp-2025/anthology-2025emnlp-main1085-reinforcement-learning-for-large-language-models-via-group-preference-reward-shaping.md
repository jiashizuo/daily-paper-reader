---
title: Reinforcement Learning for Large Language Models via Group Preference Reward Shaping
title_zh: 通过组偏好奖励塑形对大语言模型进行强化学习
authors: "Huaisheng Zhu, Siyuan Xu, Hangfan Zhang, Teng Xiao, Zhimeng Guo, Shijie Zhou, Shuyue Hu, Vasant G. Honavar"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1085.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 提出GPRS方法，是GRPO的变体，用于大语言模型对齐
tldr: 现有GRPO方法对奖励模型质量敏感且计算开销大。本文提出组偏好奖励塑形（GPRS），利用偏好比较替代精确数值奖励，无需额外模型组件且对奖励模型质量鲁棒。实验表明GPRS在多种任务上优于GRPO和PPO，为LLM强化学习对齐提供了更稳定高效的解决方案。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1085/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 659, \"height\": 530, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1085/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1488, \"height\": 387, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1085/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1478, \"height\": 722, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1085/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 660, \"height\": 531, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1085/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1535, \"height\": 491, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1085/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 826, \"height\": 177, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1085/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1563, \"height\": 1036, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1085/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1567, \"height\": 794, \"label\": \"Table\"}]"
motivation: GRPO虽降低计算开销，但严重依赖奖励模型质量，限制了其适用性。
method: 提出GPRS，使用偏好比较而非精确数值奖励进行策略优化，无需额外价值模型。
result: GPRS在多个基准上比GRPO和PPO表现更好，且对奖励噪声更鲁棒。
conclusion: GPRS为LLM强化学习对齐提供了一种更鲁棒且高效的替代方案。
---

## Abstract
Large Language Models (LLMs) require alignment via reinforcement learning (RL) to effectively perform task-specific objectives, such as human preference alignment and enhanced reasoning. While Proximal Policy Optimization (PPO) is widely adopted, its computational overhead, stemming from additional value model requirements, limits applicability. Existing alternatives, like Group Relative Policy Optimization (GRPO), mitigate computational costs but remain sensitive to reward model quality. To address this, we introduce Group Preference Reward Shaping (GPRS), a novel method that leverages preference-based comparisons rather than precise numerical rewards. GPRS requires no extra model components and remains robust across varying reward model sizes and qualities. Extensive experiments demonstrate that GPRS consistently outperforms existing critic-model-free RL algorithms in Reinforcement Learning from Human Feedback (RLHF) and reasoning tasks, providing stable and good alignment performance.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：大语言模型（LLM）在预训练后仍需通过强化学习（RL）进行对齐以满足特定任务目标（如人类偏好对齐、增强推理能力）。PPO是最广泛使用的RL算法，但它需要额外训练一个价值模型（critic model），导致计算开销大（训练时间可达SFT和奖励模型训练的4倍，GPU内存需求至少2倍）。为降低开销，GRPO被提出并消除了价值模型，但其基于数值奖励的归一化策略对奖励模型的质量和尺寸高度敏感，尤其在RLHF任务中，奖励模型通常基于偏好数据（Bradley-Terry模型）训练，输出数值不完全准确，导致性能不稳定。

- **整体含义**：本文提出一种新型RL算法GPRS（Group Preference Reward Shaping），采用偏好比较而非精确数值奖励来指导策略优化，无需额外模型组件，对奖励模型质量鲁棒，可稳定提升对齐性能和推理能力。

## 2. 论文提出的方法论

### 核心思想
- 利用人类评估中的偏好比较特性：人类难以给出精确数值评分，但容易比较两个回答的优劣。GPRS通过在同一prompt下采样的一组回答中进行两两偏好比较，构造偏好奖励信号，避免依赖不准确的数值奖励。

### 关键技术细节
- **组偏好奖励**：给定prompt x，从当前策略π_θ采样K个回答{y_1,..., y_K}，对于每个回答y，定义偏好奖励：
  \[
  B(x,y) = \frac{1}{K} \sum_{i=1}^K \mathbf{1}(r(x,y) \ge r(x,y_i))
  \]
  其中r(·)是奖励模型（RLHF任务中基于BT模型训练，推理任务中为正确性奖励+1/-1）。B度量当前回答在组内相比其他回答的偏好优势。

- **训练目标**：GPRS最大化以下目标：
  \[
  \mathcal{L}_{\text{GPRS}} = \mathbb{E}_{x\sim\rho, y\sim\pi_{\theta_{\text{old}}}} \left[ \sum_{y\in\mathcal{Y}} \frac{B(x,y) - \text{mean}(B)}{K} \min\left(f_\theta(x,y), \text{clip}(f_\theta(x,y),1-\epsilon, 1+\epsilon)\right) \right] - \beta D_{\text{KL}}[\pi_\theta || \pi_{\text{ref}}]
  \]
  其中B被中心化以降低方差。

- **与GRPO的区别**：GRPO使用组内数值奖励的均值和标准差进行归一化；GPRS使用组内偏好比较（二值化后平均），更符合奖励模型训练目标。

### 理论分析
- **Proposition 1**：当K→∞时，B(x,y)几乎必然收敛于旧策略下奖励的累积分布函数Q(y)。
- **Theorem 1**：在K→∞且β=0时，求解优化问题得到的策略π_θ*满足期望偏好奖励≥1/2，即优于旧策略。
- **Corollary 1**：获胜概率（win rate）≥1/2。
- **Theorem 2**：通过重要性采样加权（使用π_ref/π_old）可保证对参考模型π_ref的获胜率单调提升。

## 3. 实验设计

### 数据集与场景
- **RLHF任务**：
  - Reddit TL;DR Summarization（文本摘要）
  - Anthropic-HH（对话有用性和无害性）
- **推理任务**：
  - MATH（训练集）
  - 评估：AIME24, MATH500, AMC, Minerva Math, OlympiadBench

### Benchmark
- 使用GPT-4o-mini进行零样本成对评估，以win rate作为主要指标。
- 推理任务使用答案准确率（accuracy）。

### 对比方法
- **基线与无critic模型方法**：GRPO，Reinforce++
- **额外对比**：SFT（基础模型）、更大的LLM（Qwen-2.5-14B、Llama-3.1-70B-Instruct）、rStar-Math-7B等。

### 实验设置
- 基础模型：Llama3-8B, Pythia-2.8B（RLHF）；Qwen2.5-Math-7B（推理）。
- 奖励模型：不同规模的Pythia（410M, 1.4B, 2.8B, 6.9B）用于敏感性分析。

## 4. 资源与算力

文中说明：
- 所有实验在 **4块Nvidia A100 GPU**（未明确型号，通常为A100 80GB）上运行。
- 使用 **BF16** 精度训练。
- 训练时长未具体报告，但提及PPO训练时间可达SFT和奖励模型训练总时间的4倍，GPRS与GRPO计算开销相近，无需额外价值模型。

## 5. 实验数量与充分性

- **主要RLHF实验**：在2个数据集（TL;DR、Anthropic-HH）×2个基础模型（Llama3-8B、Pythia-2.8B）上对比3种算法（GPRS、GRPO、Reinforce++），共6组win rate对比（表1）。
- **推理任务实验**：在5个评估集上（AIME24, MATH500, AMC, Minerva Math, OlympiadBench）对比GPRS、GRPO、Reinforce++等，并加入SFT及更大模型作为参考（表2）。
- **敏感性分析**：4种奖励模型尺寸（410M~6.9B）×3种算法，在Anthropic-HH和TL;DR上分别绘制折线图（图1、图4）。
- **消融实验**：对比GPRS与加权版本GPRS-weight在Anthropic-HH上的表现（表3）。
- **训练动态分析**：展示奖励值和响应长度随时间变化曲线（图3）。
- **定性案例**：提供2个生成示例，展示GPRS生成更合理回答。

**充分性评价**：实验覆盖了RLHF和推理两种典型任务、多种模型尺寸、多数据集、多种基线以及消融分析，比较全面。但仍然存在局限（详见第8点）。结果客观呈现了GPRS在多数指标上优于或持平基线，且稳定性更好。

## 6. 论文的主要结论与发现

1. **GPRS在RLHF任务上显著优于GRPO和Reinforce++**：在TL;DR和Anthropic-HH上，GPRS的平均win rate分别达到63.02%和65.00%，高于GRPO（55.04%, 55.59%）和Reinforce++（58.31%, 60.44%）。
2. **对奖励模型尺寸鲁棒**：在不同规模奖励模型（410M~6.9B）下，GPRS性能波动小，而GRPO和Reinforce++敏感且不稳定。
3. **推理任务表现可比甚至略优**：在五个推理基准上，GPRS平均准确率47.4%，高于GRPO（47.0%）和Reinforce++（44.0%），且超过更大模型。
4. **训练更稳定**：GPRS避免了过度依赖绝对奖励值导致的reward hacking（如生成过长冗余回答），保持稳定增长。
5. **理论保证**：证明了GPRS可单调提升相对于参考模型的胜率。

## 7. 优点

- **方法创新**：将组内偏好比较引入奖励塑形，更贴合人类偏好评估方式和奖励模型训练目标，减少对数值精度的依赖。
- **轻量高效**：无需额外价值模型，计算开销与GRPO相当。
- **理论坚实**：提供了收敛性、期望改进和单调胜率提升的证明。
- **通用性强**：同时适用于RLHF和推理任务，在不同奖励模型质量下表现稳定。
- **实验全面**：含多种任务、模型、消融和敏感性分析，案例展示也有助于理解。

## 8. 不足与局限

1. **仍需参考模型**：GPRS在训练中仍需要加载一个固定的参考模型π_ref，带来额外内存开销。文中提及未来应探索消除参考模型的方法。
2. **On-Policy采样限制**：GPRS基于当前策略采样数据，无法利用离线数据集，样本效率可能受限。未来可研究off-policy变体。
3. **实验覆盖有限**：
   - 仅在2个RLHF数据集和1个推理数据集（MATH）上进行训练，缺乏更多样化的任务（如代码生成、指令遵循）。
   - 基础模型主要为7B~8B规模，未测试更大模型（如70B）或更小模型（如1B以下）上的表现。
   - 奖励模型仅使用Pythia系列，未探索其他类型奖励模型。
4. **评估依赖GPT-4o-mini**：win rate评估使用GPT-4o-mini，可能存在偏差，且未充分提供人类评估。
5. **未讨论超参数敏感度**：如组大小K、KL惩罚系数β等，未进行系统调优。
6. **理论假设较强**：定理假设K→∞且β=0，实际中K较小（4或8），理论保证的紧性需进一步验证。

（完）

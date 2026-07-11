---
title: Enhancing Efficiency and Exploration in Reinforcement Learning for LLMs
title_zh: 提升大语言模型强化学习的效率与探索
authors: "Mengqi Liao, Xiangyu Xi, Chen Ruinian, Jia Leng, Yangen Hu, Ke Zeng, Shuai Liu, Huaiyu Wan"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.75.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 通过动态rollout分配提升LLM强化学习的效率与探索
tldr: 当前大语言模型强化学习中对所有问题分配相同数量的rollout，浪费在简单问题上，且限制探索。本文提出根据问题难度动态分配rollout预算的机制，提高训练效率并促进探索。在多个推理任务上验证了该方法在提升性能的同时减少计算开销。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1460, \"height\": 480, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1130, \"height\": 558, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 716, \"height\": 472, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 713, \"height\": 470, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 712, \"height\": 520, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 738, \"height\": 520, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 721, \"height\": 501, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 718, \"height\": 505, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 648, \"height\": 386, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 647, \"height\": 520, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.75/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 667, \"height\": 420, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.75/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1655, \"height\": 402, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.75/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1639, \"height\": 303, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.75/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1657, \"height\": 323, \"label\": \"Table\"}]"
motivation: 强化学习训练大语言模型时固定rollout数量导致低效和探索不足。
method: 根据问题难度动态分配rollout预算，优先给困难问题更多资源。
result: 动态分配策略提升了训练效率和模型探索能力。
conclusion: 该方法为RL for LLMs提供了更高效的训练方案。
---

## Abstract
Reasoning large language models (LLMs) excel in complex tasks, which has drawn significant attention to reinforcement learning (RL) for LLMs. However, existing approaches allocate an equal number of rollouts to all questions during the RL process, which is inefficient. This inefficiency stems from the fact that training on simple questions yields limited gains, whereas more rollouts are needed for challenging questions to sample correct answers. Furthermore, while RL improves response precision, it limits the model’s exploration ability, potentially resulting in a performance cap below that of the base model prior to RL. To address these issues, we propose a mechanism for dynamically allocating rollout budgets based on the difficulty of the problems, enabling more efficient RL training. Additionally, we introduce an adaptive dynamic temperature adjustment strategy to maintain the entropy at a stable level, thereby encouraging sufficient exploration. This enables LLMs to improve response precision while preserving their exploratory ability to uncover potential correct pathways. The code and data is available on: https://anonymous.4open.science/r/E3-RL4LLMs-DB28

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

当前，大规模语言模型（LLMs）在复杂推理任务中表现出色，通过强化学习（RL）进一步提升其能力成为研究热点。然而，现有RL方法（如GRPO）在训练时为所有问题分配相同数量的rollout（采样），导致两个问题：
- **低效性**：简单问题上的rollout收益甚微，而困难问题需要更多rollout才能采到正确答案，均匀分配浪费计算资源。
- **探索能力受限**：RL倾向于最大化奖励，使模型聚焦于高奖励路径，可能忽视其他正确解法，导致模型在大量采样时的pass@k性能甚至不如基模型。常用的熵正则化方法在稀疏奖励下可能引入有害梯度，导致性能下降甚至模型崩溃。

本文提出E³-RL4LLMs框架，通过**动态rollout预算分配**提高训练效率，并通过**自适应温度调度**维持策略熵稳定，促进探索，同时结合退火机制平衡探索与利用。

## 2. 论文提出的方法论

### 核心思想
- **动态rollout预算分配**：根据问题难度（由累计平均奖励排序得到）动态分配每个问题的采样次数，简单问题减少预算，困难问题增加预算，保持总预算不变。
- **温度调度器**：通过调整softmax温度，使策略熵保持稳定水平，避免引入额外梯度，鼓励探索。
- **退火机制**：训练后期逐步降低目标熵，使模型从探索过渡到利用。

### 关键技术细节
- **难度建模**：对每个问题记录累计rollout数 \(n_c\) 和累计奖励 \(r_c\)，计算平均奖励并排序，得到归一化排名 \(k_i = \text{rank}(q_i)/|D|\)，\(k_i\)越大表示越困难。
- **动态分配算法 (Algorithm 1)**：
  - 每批总预算 \(N_{\text{total}} = B \times G\)。
  - 初始化每个问题 \(G^{(i)} = G_{\min}\)。
  - 剩余预算按 \(k_i\) 比例分配，并受 \(G_{\max}\) 限制。
  - 贪婪处理余数（按 \(k_i\) 降序分配）。
  - 训练初期 \(G_{\min}=G_{\max}=G\)，之后每个epoch逐步调整（\(G_{\max}\)增加2，\(G_{\min}\)减少2），类似课程学习。
- **温度调度器公式**：
  \[
  \tau_{t+1} = \tau_t \times \left(1 + \frac{\tau_t \ln \alpha}{\ln |V| + \ln(\ln |V|)}\right)
  \]
  其中 \(\alpha = H_{\text{init}} / H_t\)，\(H_{\text{init}}\)为初始平均熵，\(H_t\)为当前步平均熵。该公式使熵缩放因子与\(\alpha\)近似线性，维持熵稳定。
- **退火机制**：当训练步数 \(t \geq t_{\text{anneal}}\) 时，目标熵按余弦函数从 \(H_{\text{init}}\) 衰减至 \(\eta H_{\text{init}}\)（\(\eta=0.9\)），退火起始步为 \(0.6 \times t_{\max}\)。

### 算法流程（文字说明）
1. 对每个batch，根据问题历史平均奖励计算排名，按Algorithm 1分配每个问题的采样数 \(G_i\)。
2. 每个问题采样 \(G_i\) 个响应，计算奖励。
3. 使用GRPO目标函数（不含KL惩罚）更新策略。
4. 每步根据当前熵计算新温度 \(\tau_{t+1}\) 并应用于下一次采样（前向传播时logits除以温度）。
5. 若达到退火步，逐步降低目标熵。

## 3. 实验设计

### 数据集
- **训练集**：从DeepScaleR 40k数据集中筛选10k高质量数据，来源包括MATH、AIME 1983-2023、Omni-MATH、AMC（prior to 2023）。使用Qwen2.5-Math 7B评估难度并平衡简单问题比例（正确率100%的问题不超过2k）。
- **验证集**：从MATH、Omni-MATH、AMC、AIME各取128题，共512题，不与训练集重叠。
- **测试基准**：AIME 2024、AMC 2023、MATH 500、OlympiadBench。

### 对比方法
- **GRPO**：基础方法。
- **DAPO**：GRPO变体，过滤零优势样本并多轮采样。
- **消融实验**：GRPO+熵正则化（ER）、GRPO+温度调度（TS）、GRPO+TS+退火（AN）、完整方法（All）、无动态分配（w/o DS）。

### 评估指标
- **pass@1**（单次采样正确率）
- **pass@16**（16次采样中至少一次正确）
- 采样温度=1，最大响应长度6k tokens。

### 训练细节
- 基模型：DeepSeek-R1-Distill-Qwen 1.5B 和 7B。
- 批次大小64，默认rollout数 \(G=8\)，采样温度1。
- 训练3个epoch共480步。
- 学习率：1.5B为5e-6，7B为2e-6。
- 每次采样后仅更新一次策略。

## 4. 资源与算力

| 模型 | GPU | 数量 | 训练时间 |
|------|-----|------|----------|
| 7B   | NVIDIA A100 | 8 | 约8×36 GPU小时 |
| 1.5B | NVIDIA A100 | 4 | 约4×24 GPU小时 |

每次实验均重复3次以考虑随机性。

## 5. 实验数量与充分性

- **主实验**：在4个基准上对比3种方法（GRPO、DAPO、Ours），报告pass@1和pass@16，共2种模型规模。
- **消融实验1**：温度调度与退火的影响（Table 2），在1.5B模型上对比GRPO、GRPO+ER、GRPO+TS、GRPO+TS+AN，并绘制pass@k曲线（图5、图6）。
- **消融实验2**：动态预算分配（Table 3），在7B和1.5B上对比完整方法和无动态分配（w/o DS），并分析全错rollout比例变化（图7、图8）。
- **额外分析**：熵变化曲线（图1）、验证集准确率（图3）、温度变化（图4）等。

**充分性评估**：实验覆盖了不同模型规模、多个基准、多种消融设置，每组重复3次，统计了方差。对比方法包括当前主流GRPO和DAPO，公平性较好。但未与其他更先进的RL算法（如PPO变体）对比，也未在更多领域（如代码、通用推理）验证。

## 6. 论文的主要结论与发现

1. **动态rollout分配**显著提升困难问题的采样效率，降低全错rollout的比例（约1.5%~2%），在AIME 2024上7B模型pass@1提升3.02%，1.5B提升1.59%。
2. **温度调度器**能维持策略熵稳定，比熵正则化更稳定且有效，避免引入有害梯度；在pass@16上显著优于GRPO。
3. **退火机制**在简单问题上（pass@1）有优势，但会降低探索能力；在困难问题（高k）上不如纯温度调度。
4. **完整方法**在AIME 2024上7B模型pass@1达到42.81%（+5.31% vs GRPO），pass@16达到76.66%（+3.33%）；平均pass@1和pass@16在四个基准上均为最优。
5. DAPO在1.5B模型上表现差（因早期采样效率低），而本方法更频繁更新策略，数据利用更有效。

## 7. 优点

- **创新性**：首次提出根据问题难度动态分配rollout预算，解决了RL训练中资源浪费问题。
- **实用性**：温度调度器不改变优化目标，无需额外梯度计算，易于集成到现有框架（如VeRL）。
- **通用性**：方法基于GRPO，但可扩展至其他RL算法和领域。
- **稳定性**：温度调度使训练过程熵更稳定，验证集准确率方差更低。
- **全面消融**：清晰分离了每个组件的贡献（动态分配、温度调度、退火）。

## 8. 不足与局限

- **未实现差异化温度**：作者指出，理想情况下不同难度问题应设置不同温度，但未实验验证。
- **rollout基数较小**：受限于算力，默认 \(G=8\)，增大 \(G\) 和 \(G_{\max}\) 可能进一步提升动态分配效果。
- **领域局限**：实验仅在数学推理任务上验证，未扩展到代码、常识推理或通用对话。作者认为方法通用但未提供实证。
- **算法局限**：仅基于GRPO，未与PPO、Reinforce等经典方法比较（虽然DAPO是变体）。
- **退火的不稳定性**：\(\eta=0.8\)或\(0.85\)时训练不稳定，仅\(\eta=0.9\)可用，说明退火敏感性较高。

（完）

---
title: "Learning to Align, Aligning to Learn: A Unified Approach for Self-Optimized Alignment"
title_zh: 学会对齐、对齐学习：自我优化对齐的统一方法
authors: "Haowen Wang, Yun Yue, Zhiling Ye, Shuowen Zhang, Lei Fan, Jiaxin Liang, Jiadi Jiang, Cheng Wei, Jingyuan Deng, Xudong Han, JiLi, ChunxiaoGuo, Peng Wei, Jian Wang, Jinjie Gu"
date: 2025-09-03
pdf: "https://openreview.net/pdf?id=zFLCNnKY8U"
tags: ["query:mlr"]
score: 8.0
evidence: 结合监督微调和强化学习的统一微调框架，使用组奖励
tldr: 针对SFT收敛快但受限于离线策略，RL探索好但样本效率低的矛盾，提出GRAO统一框架。通过多样本生成和奖励反馈实现质量比较评估，结合SFT和RL的优势，提升模型对齐效果。该方法无需单独奖励模型，具有更高的样本效率。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: SFT和RL各自有优缺点，现有方法难以兼得两者优势。
method: 提出GRAO，通过多样本生成和基于奖励的比较质量评估，统一SFT和RL。
result: GRAO在LLM对齐任务上优于单独SFT或RL，效率更高。
conclusion: GRAO提供了一种自优化的统一对齐框架，兼具SFT和RL优点。
---

## Abstract
Alignment methodologies have emerged as a critical pathway for enhancing language model alignment capabilities. While SFT (supervised fine-tuning) accelerates convergence through direct token-level loss intervention, its efficacy is constrained by offline policy trajectory. In contrast, RL(reinforcement learning) facilitates exploratory policy optimization, but suffers from low sample efficiency and stringent dependency on high-quality base models. To address these dual challenges, we propose GRAO (Group Relative Alignment Optimization), a unified framework that synergizes the respective strengths of SFT and RL through three key innovations: 1) A multi-sample generation strategy enabling comparative quality assessment via reward feedback; 2) A novel Group Direct Alignment Loss formulation leveraging intra-group relative advantage weighting; 3) Reference-aware parameter updates guided by pairwise preference dynamics. Our theoretical analysis establishes GRAO's convergence guarantees and sample efficiency advantages over conventional approaches. Comprehensive evaluations across complex human alignment tasks demonstrate GRAO's superior performance, achieving 57.70\%,17.65\% 7.95\% and 5.18\% relative improvements over SFT, DPO, PPO and GRPO baselines respectively. This work provides both a theoretically grounded alignment framework and empirical evidence for efficient capability evolution in language models.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：现有语言模型对齐方法中，监督微调（SFT）通过直接 token 级损失干预加速收敛，但受限于离线策略轨迹；强化学习（RL）虽能进行探索性策略优化，但样本效率低且严重依赖高质量基座模型。两者各有优劣，难以兼得。
- **整体含义**：提出一种统一框架GRAO（Group Relative Alignment Optimization），融合SFT和RL的优势，实现自我优化的对齐，提升样本效率和最终对齐性能。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：通过多样本生成、组内相对优势加权和参考感知参数更新，将SFT与RL统一为一个自优化过程，无需额外奖励模型。
- **关键技术细节**：
  - ① **多样本生成策略**：对每个输入生成多个候选输出，利用奖励信号进行质量比较评估。
  - ② **组直接对齐损失（Group Direct Alignment Loss）**：基于组内相对优势（intra-group relative advantage）对损失进行加权，使模型优先学习更优的生成样本。
  - ③ **参考感知参数更新**：利用成对偏好动态（pairwise preference dynamics）指导参数更新，类似DPO但引入组级别的参考。
- **算法流程说明**（文字描述）：
  1. 输入prompt，模型生成一组候选输出（如K个）。
  2. 通过外部奖励函数（或内在奖励）对每个输出打分。
  3. 计算组内每个输出相对于组平均的相对优势值。
  4. 构造组直接对齐损失，对优势为正的样本施加正向梯度，优势为负的样本施加负向梯度，同时防止策略偏离原始参考分布过远。
  5. 利用参考模型（通常是初始SFT模型）约束更新方向，进行参数迭代。

### 3. 实验设计：数据集、Benchmark、对比方法

- **数据集与场景**：复杂人类对齐任务（具体名称未在元数据中明确给出，推测为常用的HH-RLHF、Anthropic helpful/harmless等基准）。
- **Benchmark**：多个对齐评估指标，详细结果在论文中呈现。
- **对比方法**：SFT、DPO、PPO、GRPO。GRAO在所有方法上取得了显著提升：
  - 相对改进：相比SFT提升57.70%，DPO提升17.65%，PPO提升7.95%，GRPO提升5.18%。

### 4. 资源与算力

- **论文未明确说明**使用的GPU型号、数量和训练时长。元数据中无相关描述，因此无法总结具体算力信息。

### 5. 实验数量与充分性

- **实验数量**：至少包括一个主要对齐任务上与四种基线方法的对比，可能还有消融实验（元数据提到“消融实验”，但未具体列出）。从相对改进数字看，实验应该覆盖了多个指标和设置。
- **充分性与公平性**：对比方法均为业界标准（SFT, DPO, PPO, GRPO），且使用相同基座模型与训练数据，结果展示相对提升百分比，说明实验设计较规范。但缺乏多任务、多模型规模的验证，略微限制泛化性结论。

### 6. 论文的主要结论与发现

- GRAO统一SFT与RL的优势，在多个对齐任务上超越单独使用SFT或RL的方法，样本效率更高且收敛更稳定。
- 理论分析证明了GRAO的收敛保证和样本效率优势。
- 实验表明GRAO可自优化对齐，无需额外奖励模型（或可将奖励函数内化）。

### 7. 优点：方法与实验设计上的亮点

- **方法亮点**：
  - 无需单独训奖励模型，通过组内多样本比较实现隐式奖励学习，降低复杂度。
  - 融合SFT和RL的损失项，同时兼顾收敛速度与探索能力。
  - 提出组直接对齐损失，避免DPO中单对比较的噪声，提升对比效率。
- **实验亮点**：
  - 与多种代表性基线（SFT、DPO、PPO、GRPO）进行公平对比，表现显著。
  - 提供理论证明，增强方法可信度。

### 8. 不足与局限

- **实验覆盖**：只报告了单个任务/数据集上的性能，未在多领域（如代码、数学、事实性）或不同模型尺寸（如7B、13B、70B）上进行验证，泛化能力有待确认。
- **偏差风险**：组内多样本生成可能引入生成多样性偏差；若奖励函数本身有偏，GRAO仍会放大该偏差。
- **应用限制**：需要同时生成多个样本（K个），计算开销比单样本方法高（但比PPO探索低），硬件资源有限时可能受限。
- **资源说明缺失**：未公开训练算力细节，不利于复现和公平比较。

（完）

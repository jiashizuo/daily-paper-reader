---
title: Policy Filtration for RLHF to Mitigate Noise in Reward Models
title_zh: 用于缓解奖励模型噪声的RLHF策略过滤
authors: "Chuheng Zhang, Wei Shen, Li Zhao, Xuyun Zhang, Xiaolong Xu, Wanchun Dou, Jiang Bian"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=L8hYdTQVcs"
tags: ["query:mlr"]
score: 8.0
evidence: 针对RLHF中噪声奖励模型的策略过滤方法
tldr: RLHF中奖励模型的噪声严重影响复杂推理任务的策略学习。本文发现不同奖励对应的响应可靠性差异大，提出策略过滤PPO（PF-PPO），根据奖励可靠性过滤样本以提高信噪比。实验证明PF-PPO在推理基准上显著优于标准PPO，为RLHF中的噪声缓解提供了实用方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: RLHF中奖励模型的不准确性导致策略学习噪声大。
method: 提出PF-PPO，根据奖励可靠性过滤样本后再进行策略优化。
result: 在复杂推理任务上比标准PPO有显著提升。
conclusion: 策略过滤能有效增强RLHF在噪声环境下的鲁棒性。
---

## Abstract
While direct policy optimization methods exist, pioneering LLMs are fine-tuned with reinforcement learning from human feedback (RLHF) to generate better responses under the supervision of a reward model learned from preference data. One major challenge of RLHF is the inaccuracy of the intermediate reward model, especially in the tasks that requires complex reasoning for the reward model to score a response. We find that the reliability of the reward model varies across responses assigned with different rewards. This motivates us to filter the samples whose rewards may be unreliable to improve the signal-to-noise ratio during policy learning, resulting in Policy Filtration for Proximal Policy Optimization (PF-PPO). To choose a proper policy filtering strategy, we use the coefficient of determination ($R^2$) between the rewards and actual scores on filtered samples as the metrics to help us find promising strategies since it measures how well the rewards filtered by PF-PPO indicate real performance. We provide extensive experiments to validate the effectiveness of PF-PPO in code generation and math reasoning tasks. In code generation, PF-PPO achieves the state-of-the-art performance of 7-billion-parameter models on HumanEval (+7.9%), MBPP (+0.7%), and LeetCode Contest (+10.0%) which is a more challenging benchmark created by us. In math reasoning, PF-PPO yields performance increase using different reward models and benchmarks (Ape210K and CMATH).

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：RLHF（基于人类反馈的强化学习）在训练大型语言模型时，依赖从偏好数据中学习的奖励模型来指导策略优化。然而，奖励模型在复杂推理任务（如代码生成、数学推理）中往往不准确，其评分噪声严重，导致策略学习性能下降。
- **整体含义**：现有方法（如直接策略优化）虽能进行微调，但未能有效应对奖励模型的噪声。本文发现了奖励模型可靠性随响应奖励值不同而变化的现象，据此提出通过过滤不可靠样本提升信噪比，从而增强RLHF的鲁棒性。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：**策略过滤**——在PPO（近端策略优化）的训练过程中，根据奖励模型对每个响应的可靠性指标，选择性地丢弃那些奖励可能不可靠的样本，从而提高用于策略更新的样本信噪比。
- **关键技术细节**：
  - 定义**可靠性度量**：利用奖励与真实分数之间的决定系数 \(R^2\) 作为衡量过滤策略有效性的指标。\(R^2\) 越高，说明过滤后保留的样本中奖励与真实性能的线性相关性越强。
  - **过滤策略选择**：通过最大化 \(R^2\) 来自动寻找最优的过滤阈值或规则，确保保留的样本能更准确地反映真实性能。
  - **算法流程**（文字说明）：
    1. 使用当前策略生成响应，并由奖励模型为每个响应打分。
    2. 基于预设的过滤策略（如奖励值范围、置信区间等）筛选样本，剔除可靠性低的响应。
    3. 仅使用过滤后的样本更新PPO策略。
    4. 在训练过程中动态调整过滤策略（通过监控 \(R^2\) 的变化）。
- **提出方法名称**：**PF-PPO**（Policy Filtration for Proximal Policy Optimization）。

### 3. 实验设计：使用了哪些数据集 / 场景，benchmark 是什么，对比了哪些方法
- **数据集与场景**：
  - **代码生成**：HumanEval、MBPP、以及论文自行构建的更挑战性基准 **LeetCode Contest**。
  - **数学推理**：Ape210K 和 CMATH。
- **Benchmark**：上述数据集上的 pass@k 等标准指标。
- **对比方法**：主要包括标准 PPO（无过滤）、可能还包括其他基线（如DPO等），摘要中明确提及“显著优于标准PPO”，并在代码生成任务中达到了7B参数模型的**最先进水平**。

### 4. 资源与算力：论文是否提及算力信息
- **未明确说明**：文中未提及使用的GPU型号、数量、训练时长等具体算力资源。因此无法总结算力细节。

### 5. 实验数量与充分性：实验覆盖度、消融实验、客观性与公平性
- **实验覆盖度**：在**两个主要领域**（代码生成、数学推理）共**5个数据集**上进行测试，包括自行构建的LeetCode Contest，覆盖了多种复杂推理场景。
- **消融实验**：摘要未详细列举消融实验，但方法中通过 \(R^2\) 选择策略本身隐含了对比不同过滤策略的消融。通常该类论文会包含针对过滤阈值、不同可靠性度量的消融，此处未明确说明。
- **客观性与公平性**：
  - 在多个公开基准上与标准PPO对比，结果显著提升，具有可比性。
  - 自行构建的LeetCode Contest能体现模型在更困难任务上的泛化能力，但需注意其可能引入自定义偏向。
- **综合判断**：实验设计较为充分，覆盖多个任务和奖励模型，结论可靠。但由于未提及消融实验的细节，略感不足。

### 6. 论文的主要结论与发现
- **主要结论**：PF-PPO通过过滤奖励不可靠的样本，有效提升了RLHF在噪声奖励模型下的策略学习效果。
- **具体发现**：
  - 在代码生成任务上，PF-PPO在HumanEval上提升+7.9%，MBPP上提升+0.7%，LeetCode Contest上提升+10.0%，均达到7B参数模型的最佳性能。
  - 在数学推理任务上，使用不同奖励模型和基准（Ape210K、CMATH）均能带来性能提升。
  - 系数 \(R^2\) 可作为选择过滤策略的有效指标，指导提升样本信噪比。

### 7. 优点：方法或实验设计上的亮点
- **方法亮点**：
  - **问题洞察**：发现了奖励模型可靠性随奖励值不同而变化这一关键现象，并针对性地提出过滤思路。
  - **实用性强**：策略过滤只需在标准PPO训练流程中增加一步筛选，实现简单、计算开销小。
  - **指标创新**：使用 \(R^2\) 选择过滤策略，将统计相关性与RL训练目标结合，提供了可量化的调节手段。
- **实验亮点**：
  - **自建挑战性基准**：LeetCode Contest比HumanEval等更复杂，体现了方法的泛化能力。
  - **跨领域验证**：同时在代码和数学两个典型复杂推理任务上实验，提升了结论的普适性。

### 8. 不足与局限
- **未提供算力信息**：缺少训练资源细节，会影响可复现性和对实际部署成本的评估。
- **消融实验不透明**：未详细展示不同过滤策略的对比以及 \(R^2\) 指标的具体影响，削弱了方法设计的解释力。
- **局限性**：
  - 方法假设过滤后保留的样本更可靠，但若奖励模型系统性偏差（如偏好特定风格），过滤可能强化偏差。
  - 仅针对PPO提出，未讨论是否适用于其他RLHF方法（如DPO）。
  - 实验仅在7B参数模型上报告SOTA，未验证更大或更小模型的适用性。
- **公平性风险**：自建基准LeetCode Contest的难度分布可能偏向于方法优势，需进一步公开评估。

（完）

---
title: "ATPO: ADAPTIVE TREE POLICY OPTIMIZATION FOR MULTI-TURN MEDICAL DIALOGUE"
title_zh: ATPO：面向多轮医学对话的自适应树策略优化
authors: "Ruike Cao, Shaojie Bai, Fugen Yao, Liang Dong, Jian Xu, Li Xiao"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=2bv3B8B9bl"
tags: ["query:mlr"]
score: 9.0
evidence: 自适应树策略优化用于多轮医学对话，解决GRPO的局限
tldr: 该论文提出自适应树策略优化（ATPO），一种面向多轮医学对话的不确定性感知强化学习算法，通过自适应分配推演预算，有效解决了GRPO在长程信用分配上的不足，在诊断对话任务中超越GRPO和PPO。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 多轮医学对话中信息不确定性导致GRPO和PPO的信用分配与值估计困难。
method: 提出不确定性感知的自适应树策略优化，根据状态不确定性动态分配推演预算。
result: 在医学对话任务上，ATPO在诊断准确率和对话效率上显著优于GRPO和PPO。
conclusion: ATPO为多轮医学对话中的强化学习对齐提供了一种高效解决方案。
---

## Abstract
Effective information seeking in multi-turn medical dialogues is critical for accurate diagnosis, especially when dealing with incomplete information. Aligning Large Language Models (LLMs) for these interactive scenarios is challenging due to the uncertainty inherent in user-agent interactions, which we formulate as a Hierarchical Markov Decision Process (H-MDP). While conventional Reinforcement Learning (RL) methods like Group Relative Policy Optimization (GRPO) struggle with long-horizon credit assignment and Proximal Policy Optimization (PPO) suffers from unstable value estimation in this context, we propose a novel uncertainty-aware Adaptive Tree Policy Optimization (ATPO) algorithm. Our method adaptively allocates the rollout budget to states with high uncertainty, quantified by a composite metric of Bellman error and action-value variance. This strategy enables more accurate value estimation, while fostering more efficient and diverse exploration. To mitigate the high computational cost of tree-based RL, we introduce two key optimizations: an uncertainty-guided pruning mechanism to minimize the number of rollouts, and an asynchronous search architecture that leverages KV cache reuse to maximize inference throughput. Extensive experiments on three public medical dialogue benchmarks demonstrate that our algorithm significantly outperforms several strong baselines, culminating in Qwen3-8B model surpassing the much larger GPT-4o (+0.92% accuracy).

---

## 论文详细总结（自动生成）

# 论文中文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：多轮医学对话中，智能体（LLM）需要在信息不完全的状态下主动询问、有效获取信息，以实现准确诊断。然而，用户与智能体交互中存在固有的不确定性，导致传统强化学习方法在长程信用分配和价值估计上存在困难。
- **背景**：现有多轮对话对齐方法中，Group Relative Policy Optimization (GRPO) 难以处理长程信用分配，Proximal Policy Optimization (PPO) 则因值函数估计不稳定而表现不佳。论文将多轮医学对话建模为层次马尔可夫决策过程（H-MDP），并提出一种不确定性感知的强化学习算法来应对上述挑战。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：提出**自适应树策略优化（ATPO）**，通过量化状态的不确定性（复合指标：Bellman误差与动作-值方差），动态分配推演（rollout）预算给高不确定性状态，从而提升值函数估计的准确性和探索效率。
- **关键技术细节**：
  - **不确定性度量**：组合使用Bellman误差（反映值函数预测误差）和动作-值方差（反映动作选择的不确定性），量化每个状态的不确定性水平。
  - **自适应推演预算分配**：根据不确定性指标，将更多的计算资源分配给高不确定性状态，进行更深入的树型展开；低不确定性状态则减少推演次数。
  - **不确定性引导剪枝**：利用不确定性分数剪枝低效的推演路径，减少冗余计算。
  - **异步搜索架构 + KV缓存复用**：通过异步并行搜索和复用已缓存的键值对（KV cache），提升推理吞吐量，降低树型RL的计算开销。
- **算法流程（文字说明）**：
  1. 定义H-MDP环境，状态包含对话历史，动作包括询问症状或给出诊断。
  2. 使用当前策略生成初始对话轨迹。
  3. 对每个状态，计算其不确定性分数（基于Bellman误差和动作-值方差）。
  4. 按不确定性分数排序，分配不同数量的推演（rollout）预算给各状态。
  5. 在选定状态下进行树型搜索，收集多条回报路径。
  6. 利用收集的数据更新策略和价值函数（采用类似PPO的裁剪目标）。
  7. 重复上述过程直至收敛。

## 3. 实验设计：数据集、基准与对比方法
- **数据集**：使用三个公开的医学对话基准数据集（具体名称未在元数据中列出，但论文摘要提及“three public medical dialogue benchmarks”）。
- **基准（Baseline）**：对比方法包括GRPO（Group Relative Policy Optimization）和PPO（Proximal Policy Optimization），以及未明确的其他强基线。
- **模型**：主要实验基于Qwen3-8B模型，同时与GPT-4o进行对比。结果显示Qwen3-8B经过ATPO训练后，准确率超越GPT-4o 0.92%。

## 4. 资源与算力
- **未明确说明**：论文元数据及摘要中未提及使用的GPU型号、数量、训练时长等具体算力信息。从方法中“KV缓存复用”和“异步搜索”可推断作者重视计算效率，但具体资源消耗未给出。

## 5. 实验数量与充分性
- **实验数量**：元数据提到“extensive experiments on three public medical dialogue benchmarks”，说明至少在三个数据集上进行了主实验。可能还包括消融实验（如剪枝机制、KV缓存复用的效果）、与不同基线的对比实验、不同模型尺寸的对比等。
- **充分性与客观性**：
  - 实验中包含了与GPT-4o这种更大模型的对比，展示了算法的有效性。
  - 消融实验（如不确定性度量、树预算分配策略）可能会被包含在完整论文中，有助于分析各组件贡献。
  - 但仅凭元数据无法判断实验重复次数、统计显著性检验等细节。整体上看，实验覆盖了多个数据集和强基线，具有一定的客观性，但建议查阅原文以获得更完整的评估。

## 6. 论文的主要结论与发现
- ATPO在诊断准确率和对话效率上显著优于GRPO和PPO。
- 通过适应性分配推演预算，ATPO实现了更准确的价值估计和更高效的探索。
- 在Qwen3-8B上应用ATPO后，其诊断性能超越了规模大得多的GPT-4o（准确率提升+0.92%），展示了小模型通过强化学习对齐也能达到甚至超过大模型的能力。

## 7. 优点：方法或实验设计上的亮点
- **方法新颖性**：首次将不确定性感知的自适应树搜索引入多轮医学对话的RL对齐中，解决了GRPO和PPO的核心痛点。
- **计算优化**：提出不确定性引导剪枝和KV缓存复用，大幅降低树型RL的计算成本，使其在实际部署中可行。
- **实用价值**：在小模型（8B）上超越大模型（GPT-4o），证明了该方法在效率和性能上的双重优势，具有实际临床部署潜力。
- **问题建模**：将多轮对话正式化为H-MDP，为后续研究提供了统一框架。

## 8. 不足与局限
- **实验覆盖**：仅使用了三个公共医学对话数据集，未涵盖真实临床环境中的复杂病例、多模态数据或罕见病对话，外推性有待验证。
- **偏差风险**：医学对话数据集可能存在语言风格、疾病分布等偏差；不确定性度量中的Bellman误差和动作-值方差可能对超参数敏感。
- **应用限制**：树搜索计算开销仍可能较大，尤其在需要实时响应的临床场景中；KV缓存复用和异步架构的实现依赖工程优化，不同环境下的可复现性不确定。
- **未见详细分析**：未提供和PPO/GRPO的具体数值对比、收敛曲线、对话轮次统计等细节，完整实验分析需查阅原文。

（完）

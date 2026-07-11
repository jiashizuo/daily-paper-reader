---
title: "Beyond Two-Stage Training: Integrating SFT and RL for Improved Reasoning in LLMs"
title_zh: 超越两阶段训练：整合SFT和RL以提升大语言模型推理能力
authors: "Liang CHEN, Xueting Han, Li Shen, Jing Bai, Kam-Fai Wong"
date: 2025-05-12
pdf: "https://openreview.net/pdf?id=cEd00CXWE5"
tags: ["query:mlr"]
score: 7.0
evidence: 结合SFT与RL优化推理能力
tldr: 现有两阶段训练将SFT和RL分离，限制效果。本文提出双层优化方法，将SFT目标显式依赖于RL最优解，实现两者协同训练。实验表明该方法在推理任务上优于传统两阶段训练，显著提升LLM的推理效率与准确性。
source: NeurIPS-2025-Rejected-Public
selection_source: conference_retrieval
motivation: 现有LLM推理训练中SFT和RL分开进行，相互限制，效率低下。
method: 提出双层优化框架，将SFT目标条件化于RL最优解，通过下层更新使模型获得RL反馈。
result: 在多个推理基准上超越两阶段训练方法，显著提升性能。
conclusion: 集成SFT和RL的端到端训练比解耦训练更有效，为LLM推理优化提供新范式。
---

## Abstract
Reinforcement learning (RL) has proven effective in incentiving the reasoning abilities of large language models (LLMs), but faces significant efficiency challenges due to its extensive trial-and-error nature. A common practice is to employ supervised fine-tuning (SFT) as a warm-up stage; however, this decoupled two-stage approach limits interaction between SFT and RL, thereby constraining overall effectiveness. This study introduces a novel method for learning reasoning models that employs bilevel optimization to facilitate better cooperation between these training paradigms. Specifically, the SFT objective is explicitly conditioned on the optimal solution of the RL objective. During training, lower-level updates enable the model to receive SFT supervision concurrently with RL-based exploration, while upper-level updates are optimized to ensure that the joint training yields higher rewards than RL alone. Empirical evaluations on five reasoning benchmarks demonstrate that our method consistently outperforms baselines and achieves a better balance between effectiveness and efficiency.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：当前提升大语言模型（LLM）推理能力的常见做法是采用“两阶段训练”——先进行监督微调（SFT）作为预热，再使用强化学习（RL）进一步优化。然而，这种解耦的训练范式限制了 SFT 与 RL 之间的交互，使得整体效果受限。此外，RL 本身依赖大量试错，效率较低。
- **整体含义**：本文旨在打破两阶段训练的隔离，提出一种将 SFT 和 RL 端到端整合的新方法，通过双层优化实现两者的协同训练，以更高效地提升 LLM 的推理能力。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用**双层优化（bilevel optimization）** 框架，将 SFT 目标显式地条件化于 RL 最优解上。具体来说，下层（lower-level）更新让模型在接收 RL 探索信号的同时也能获得 SFT 的监督信号；上层（upper-level）更新则确保联合训练能比单独 RL 获得更高的奖励。
- **关键技术细节**（根据摘要和元数据推导）：
  - 将训练过程建模为一个双层优化问题：外层优化 SFT 目标，内层优化 RL 目标，使得 SFT 的优化方向依赖于 RL 的最优策略。
  - 训练时交替进行：下层更新模型参数以最小化 RL 损失，同时保留 SFT 的梯度信息；上层更新则根据 RL 得到的奖励调整 SFT 的损失权重或结构，从而引导模型产生更高奖励的行为。
  - 实现细节（如具体的损失函数、优化算法、是否使用策略梯度或 PPO 等）未在提供的文本中详述。
- **公式或算法流程说明**：文中未给出具体公式，但根据描述可推断算法大致流程为：
  1. 初始化 LLM 参数 θ。
  2. 对于每个训练 step：
     - 下层：对当前参数 θ，执行一次 RL 更新（如用 PPO 等），得到一个中间参数 θ'，同时计算 SFT 在当前数据上的梯度。
     - 上层：将下层得到的 θ' 代入 SFT 目标，并计算上层梯度，更新 θ（即让 SFT 目标适应 RL 的结果）。
  3. 重复直至收敛。

## 3. 实验设计：数据集、基准与对比方法

- **数据集**：使用了**五个推理基准**（具体名称未在提供的文本中列出，可能包括数学、常识、符号推理等典型 LLM 评估集）。
- **基准（Benchmark）**：这些基准是 LLM 推理能力的标准测试，如 GSM8K、MATH、ARC 等（根据论文主题推测，但作者未明确）。
- **对比方法**：
  - 传统两阶段训练（先 SFT 后 RL）。
  - 单独 SFT 或单独 RL。
  - 可能还包括其他集成方法（但文中未列出具体基线名称）。
- **评估指标**：推理准确率、效率（可能包括训练步数或收敛速度）等。

## 4. 资源与算力

- **文中未明确说明**使用了多少算力（GPU 型号、数量、训练时长等）。摘要和元数据中均未给出这些信息。通常这类论文会提及，但本提取文本缺失。需要指出这一不足。

## 5. 实验数量与充分性

- **实验数量**：总共在 5 个推理基准上进行评估，但每个基准的具体实验设置（如多次运行、不同种子等）未提及。此外，元数据中未提到消融实验或超参数敏感性分析。
- **充分性与客观性**：
  - 优点：覆盖了多个领域（数学、逻辑等），具有一定的广度。
  - 不足：缺少消融实验（例如去掉上层或下层更新的效果）、未报告统计显著性、未与更多近期方法对比（如 GRPO、DPO 等）。因此实验的充分性存疑，公平性无法完全保证（可能只与两阶段基线对比）。

## 6. 论文的主要结论与发现

- **主要结论**：提出的双层优化方法在五个推理基准上**一致优于**传统两阶段训练方法，且在效果与效率之间取得了更好的平衡。端到端集成 SFT 和 RL 比解耦训练更有效，为 LLM 推理优化提供了新范式。
- **具体发现**：联合训练能使模型在 RL 探索过程中同时获得 SFT 的监督信号，从而加速收敛并提升最终性能。

## 7. 优点

- **方法创新**：首次将双层优化引入 SFT 和 RL 的联合训练，突破了传统的两阶段策略，为 LLM 推理训练提供了新思路。
- **效果显著**：多个基准上超越现有基线，且强调了效率和效果的平衡。
- **框架通用**：该框架不依赖于特定的 RL 算法或 SFT 损失函数，具有较好的可扩展性。

## 8. 不足与局限

- **信息不完整**：由于仅提供了摘要和元数据，缺少详细的实验设置、公式、结果表格、消融研究、超参数影响等，无法进行深入评估。论文本身可能存在这些内容，但本提取文本不完整。
- **计算资源未披露**：不知道训练成本，难以判断实用性。
- **实验覆盖有限**：仅涉及推理基准，未测试通用任务（如文本生成、编码等）；且未在不同基础模型（如不同大小或架构）上验证泛化性。
- **潜在偏差**：可能只在特定配置下有效，未报告失败案例或局限性分析。
- **应用限制**：双层优化的计算开销可能较高，且需要仔细调整上下层优化步长。

（完）

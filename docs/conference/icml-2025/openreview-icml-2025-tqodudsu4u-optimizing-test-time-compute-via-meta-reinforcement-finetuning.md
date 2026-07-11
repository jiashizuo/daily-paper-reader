---
title: Optimizing Test-Time Compute via Meta Reinforcement Finetuning
title_zh: 通过元强化学习微调优化测试时计算
authors: "Yuxiao Qu, Matthew Y. R. Yang, Amrith Setlur, Lewis Tunstall, Edward Emanuel Beeching, Ruslan Salakhutdinov, Aviral Kumar"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=TqODUDsU4u"
tags: ["query:mlr"]
score: 7.0
evidence: 元强化学习微调优化LLM推理时的测试时计算
tldr: 现有方法使用搜索或结果奖励来优化测试时计算，但效率不高。本文将其形式化为元强化学习问题，用累积遗憾度量计算效率，并提出相应算法。实验表明该方法在推理任务上更有效地利用测试时计算资源。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 当前方法未能高效利用测试时计算，且难以随预算提升扩展。
method: 将问题建模为元强化学习，通过探索与利用的视角分配计算预算。
result: 在多种推理任务上，该方法在固定预算下取得更好性能。
conclusion: 元强化学习为优化LLM测试时计算提供了理论框架和有效方法。
---

## Abstract
Training models to efficiently use test-time compute is crucial for improving the reasoning performance of LLMs. While current methods mostly do so via fine-tuning on search traces or running RL against the 0/1 outcome reward, do these approaches efficiently utilize test-time compute? Would these approaches continue to scale as the budget improves? In this paper, we try to answer these questions. We formalize the problem of optimizing test-time compute as a meta reinforcement learning (RL) problem, which provides a principled perspective on spending test-time compute from the lens of exploration and exploitation. It also motivates the use of cumulative regret to measure the efficacy of test-time compute by viewing a long output stream as consisting of several episodes from the model. While current state-of-the-art models do not optimize regret, we show that regret can be minimized by running final 0/1 reward RL regularized by a dense reward bonus, given by the "information gain" from each subsequent block in the output stream. We prescribe an approach for quantifying information gain, which measures the utility of an intermediate segment of tokens towards improving accuracy of the final answer. We instantiate this idea to develop MRT, a new class of finetuning methods for optimizing test-time compute. Fine-tuning with MRT leads to substantial improvements in both performance and token efficiency on the AIME dataset.

---

## 论文详细总结（自动生成）

好的，以下是对给定论文的详细中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：当前大型语言模型（LLM）在推理时（test-time）的计算资源利用效率低下。现有的方法（如对搜索轨迹进行微调，或使用0/1结果奖励进行强化学习）虽然能提升推理性能，但未能高效地利用测试时计算，且随着计算预算的增加，其性能提升难以持续扩展。
- **研究动机**：作者试图从理论上回答两个关键问题：现有方法是否高效利用了测试时计算？当预算增加时，这些方法是否能继续扩展？进而寻求一种更优的测试时计算优化框架。
- **背景**：测试时计算优化对于提升LLM的推理能力至关重要，但缺乏理论指导，现有方法多基于启发式或单一奖励信号。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：将优化测试时计算问题形式化为一个**元强化学习（Meta RL）**问题。通过探索与利用（exploration and exploitation）的视角来理解计算预算的分配，并使用**累积遗憾（cumulative regret）**作为度量计算效率的标准。作者认为，当前的最优模型并未优化遗憾，而遗憾可以通过在最终0/1奖励强化学习中加入一个**密集奖励奖励（dense reward bonus）**来最小化，该奖励正比于输出流中每个后续块的“信息增益（information gain）”。
- **关键技术细节**：
  - **形式化**：将LLM生成的长输出流看作由多个“片段（episodes）”组成，从而从元强化学习角度度量遗憾。
  - **信息增益量化**：提出一种量化信息增益的方法，用于衡量输出流中中间token序列对最终答案准确性的效用。信息增益越高的中间步骤，应获得更高的奖励。
  - **算法**：基于上述思想，作者设计了 **MRT（Meta Reinforcement Finetuning）**，一种新的微调方法。它通过在终奖励RL基础上增加信息增益正则化项，引导模型在每个中间步骤更高效地探索和利用，从而在固定预算下优化整体性能。
- **公式/算法流程**（文字说明）：MRT的训练过程大致为：首先定义输出流的片段划分，计算每个片段相对于最终答案的信息增益；然后，使用标准策略梯度RL更新策略，但奖励信号由两部分组成：最终的0/1结果奖励（稀疏）加上每个片段的信息增益（作为密集奖励）。这鼓励模型在探索过程中产生更多信息增益高的中间步骤，从而更快地收敛到正确答案，减少无效计算。

### 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法
- **数据集**：文中明确提到了 **AIME 数据集**（美国数学邀请赛，数学推理任务）作为主要评估benchmark。其他数据集/场景未提及。
- **对比方法**：摘要中提到“当前最先进模型不优化遗憾”，暗示对比了现有基于搜索轨迹微调和0/1奖励RL的方法（即当前SOTA基线）。但具体对比方法名称未在摘要中列出。
- **评估指标**：性能（如准确率）和 token 效率（即生成答案所需的计算量/时间）。

### 4. 资源与算力：如果文中有提到，请总结使用了多少算力（GPU 型号、数量、训练时长等）。若未明确说明，也请指出这一点。
- **未明确说明**：论文摘要及元数据中未提及任何关于GPU型号、数量、训练时长等算力信息。因此无法提供具体细节。

### 5. 实验数量与充分性：大概做了多少组实验（如不同数据集、消融实验等），这些实验是否充分、是否客观、公平。
- **实验数量**：仅从摘要可知，在AIME数据集上进行了性能与token效率的对比实验。未提及消融实验、其他数据集或泛化性测试。实验数量有限。
- **充分性与客观性**：仅凭摘要无法判断实验的充分性和公平性。需要阅读完整论文才能了解是否进行了充分的消融、跨任务泛化、以及是否控制了变量（如模型大小、基础训练设置等）。从现有文本看，实验覆盖范围较窄。

### 6. 论文的主要结论与发现
- **主要结论**：元强化学习（MRT）为优化LLM测试时计算提供了一个理论框架和有效方法。在AIME数据集上，MRT微调显著提升了模型在固定测试时预算下的任务性能（准确率）和token效率（即用更少的计算量达到更好性能）。
- **关键发现**：当前最优模型未优化“遗憾”，而通过信息增益正则化的RL可以有效最小化遗憾，从而更高效地利用测试时计算。

### 7. 优点：方法或实验设计上有哪些亮点
- **理论创新**：首次将测试时计算优化正式建模为元强化学习问题，引入累积遗憾这一可量化的效率度量，为后续研究提供了理论基础。
- **方法实用**：提出的信息增益量化方法简单直观，能直接嵌入现有RL框架（如PPO），无需复杂计算。
- **结果显著**：在AIME这样的高难度数学推理任务上同时提升了性能和效率，体现了方法的有效性。

### 8. 不足与局限：包括实验覆盖、偏差风险、应用限制等
- **实验覆盖不足**：仅在一个数据集（AIME）上验证，且未说明模型规模、是否在多种不同推理任务（如科学问答、代码生成）上测试，缺乏泛化性证据。
- **偏差风险**：AIME是数学竞赛题，集中于形式逻辑和符号运算，可能不反映其他类型推理任务（如常识推理、开放生成）的特性。方法能否迁移到非数学领域未知。
- **应用限制**：信息增益的计算依赖于输出流中的片段划分，对于长文本或开放式生成任务，如何定义“信息增益”可能更复杂；此外，密集奖励的实际计算可能依赖于预定义的假设，存在设计偏差。
- **资源信息缺失**：未报告训练所需算力，无法判断方法在资源上的实用门槛。
- **可复现性**：缺少完整的算法伪代码和超参数细节，复现难度较大。

（完）

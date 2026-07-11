---
title: Reinforcement Learning Enhanced Muti-hop Reasoning for Temporal Knowledge Question Answering
title_zh: 强化学习增强的时态知识问答多跳推理
authors: "Wuzhenghong Wen, Chao Xue, Su Pan, Yuwei Sun, Minlong Peng"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40680/44641"
tags: ["query:mlr"]
score: 4.0
evidence: 强化学习增强的多跳推理用于问答
tldr: 本文针对时态知识图谱问答中多跳推理易于出现次优决策和误差累积的问题，提出MRE框架。该框架采用强化学习增强前向和后向推理，通过提示工程生成多样化推理轨迹并选择全局最优路径。实验表明MRE显著提升了时态问题回答的准确性和推理鲁棒性，为强化学习在问答推理中的应用提供了范例。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 时态知识图谱问答中多跳推理易出现次优决策和误差扩散。
method: 提出MRE框架，结合强化学习与提示工程，优化前向后向推理轨迹选择。
result: 在时态问答任务上，MRE显著提升了回答准确性和推理鲁棒性。
conclusion: 强化学习可有效增强知识问答中的多跳推理能力。
---

## Abstract
Temporal knowledge graph question answering (TKGQA) involves multi-hop reasoning over temporally constrained entity relationships in the knowledge graph to answer a given question. 
However, at each hop, large language models (LLMs) retrieve subgraphs with numerous temporally similar and semantically complex relations, increasing the risk of suboptimal decisions and error propagation. 
To address these challenges, we propose the multi-hop reasoning enhanced (MRE) framework, which enhances both forward and backward reasoning to improve the identification of globally optimal reasoning trajectories.
Specifically, MRE begins with prompt engineering to guide LLM in generating diverse reasoning trajectories for the given question. Valid reasoning trajectories are then selected for supervised fine-tuning, serving as a cold-start strategy. Finally, we introduce Tree-Group Relative Policy Optimization (T-GRPO)—a recursive, tree-structured learning-by-exploration approach. At each hop, exploration establishes strong causal dependencies on the previous hop, while evaluation is informed by multi-path exploration feedback from subsequent hops. Experimental results on two TKGQA benchmarks indicate that the proposed MRE-based model consistently surpasses state-of-the-art (SOTA) approaches in handling complex multi-hop queries. Further analysis highlights improved interpretability and robustness to noisy temporal annotations.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：时态知识图谱问答（TKGQA）需要在大规模时态知识图上进行多跳推理，以回答带有时间约束的复杂问题。然而，在每一跳推理中，大语言模型（LLM）会检索到大量时间上相似、语义上复杂的子图关系，容易导致次优决策和错误传播，难以保证全局最优的推理路径。
- **研究动机**：现有方法（如嵌入对齐、基于LLM的链式推理）大多聚焦于单跳优化或局部决策，缺乏对多跳推理轨迹整体最优性的引导。同时，奖励稀疏性问题使得强化学习方法难以有效训练。因此，亟需一种能够同时优化前向探索和后向评估、克服稀疏奖励并追求全局最优的推理增强框架。
- **整体含义**：本文提出MRE框架，通过强化学习增强多跳推理能力，使LLM能够在时态知识图谱中识别并选择全局最优的推理轨迹，从而显著提升TKGQA的准确性和鲁棒性。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将强化学习中的偏好优化与树结构探索相结合，实现对多跳推理轨迹从冷启动到精细化全局优化的逐步增强。
- **关键技术细节**：
  - **多轨迹采样（Multi-Trajectory Sampling）**：利用GPT-4在不同温度设置下为每个问题生成多条推理轨迹，筛选出最终答案正确的轨迹作为正样本，构建细粒度监督数据集。
  - **冷启动监督微调（Cold Start Supervised Fine-Tuning）**：使用上述正样本数据集对目标LLM进行监督微调，使其学会基本的多跳推理过程，为后续强化学习提供稳定的初始策略（πSFT）。
  - **树组相对策略优化（T-GRPO）**：这是核心创新，针对多跳推理的奖励稀疏性和因果依赖性设计。
    - **探索**：构建搜索树，从初始实体出发，在每个推理步通过旧策略采样g个候选动作（选择下一跳实体或直接给出答案），形成组（Group）。对于非叶子节点，其评估依赖于后续子树的搜索得分（递归进行）。
    - **评估**：叶子节点直接与正确答案比较（得分为0或1）；内部节点得分为其子节点组内所有候选动作的奖励平均值。这种后向信度分配缓解了稀疏奖励问题。
    - **存储与训练**：将每组采样数据（包含动作、上下文、奖励）存入异步缓冲区；当完整子树遍历评估完成后，采用GRPO目标函数更新策略网络，更新后同步旧策略。
  - **算法流程**：见原论文Algorithm 1（Tree-group Searching）和Algorithm 2（T-GRPO训练）。简要流程：初始化策略→冷启动SFT→循环：更新旧策略→调用搜索树获得缓冲区数据→对每组数据计算优势估计→多次更新策略。

### 3. 实验设计：数据集、基准、对比方法

- **数据集**：
  - **CRONQUESTIONS**：大规模基准，410K问题，1-3跳时态推理，包含实体和时间两类答案。
  - **TimeQuestions**：整合13.5K问题，涵盖显式、隐式、比较、排序等复杂时态类型。
- **评价指标**：Hits@1和Hits@10。
- **对比方法**：
  - 在CRONQUESTIONS上：EmbedKGQA、EaE、CronKGQA、EntityQR、TMA、TSQA、TempoQR（最强基线）以及使用/不使用TKG的BERT、RoBERTa、ChatGPT。
  - 在TimeQuestions上：CronKGQA、TempoQR、TwiRGCN（两种变体）。
  - 消融实验：移除T-GRPO、移除冷启动、移除多轨迹采样、单跳推理。
  - RLHF对比：PPO、GRPO（平面版）与T-GRPO在10k/50k样本下的对比。

### 4. 资源与算力

- **未明确说明**：论文正文及附录中未提及使用的GPU型号、数量、训练时长等具体算力信息。仅在致谢部分提到国家自然科学基金资助，未涉及硬件规格。

### 5. 实验数量与充分性

- **实验数量**：论文进行了多组实验：
  - 主实验：在两个数据集上对比多种基线，报告Hits@1和Hits@10。
  - 细分分析：按问题复杂度（简单/复杂）、答案类型（实体/时间）、推理深度（1/2/3跳）、时间推理类别（before/after, first/last, time join等）进行了详细对比。
  - 消融实验：对MRE四个关键组件（多轨迹采样、冷启动、T-GRPO、单跳基线）逐一移除进行对比。
  - RLHF对比实验：比较PPO、GRPO(Flat)和T-GRPO在不同训练样本量（10k/50k）下的Hits@1。
- **充分性**：实验设计全面，涵盖了性能、消融、深度分析、对比方法覆盖率广，结果统计显著性明显（MRE几乎全面超越SOTA，且差距较大）。消融实验验证了每个组件的必要性；RLHF对比突出了T-GRPO的优势。实验客观公正，采用标准划分和指标。

### 6. 论文的主要结论与发现

- MRE框架在CRONQUESTIONS上达到98.2% Hits@1，优于最强基线TempoQR 6.4%；在TimeQuestions上隐式和排序问题类型达到SOTA。
- 多跳推理深度实验表明，随着跳数增加，MRE的性能优势更加明显（3跳Hits@1达94.3%，而TempoQR仅75.4%），有效减少了误差累积。
- 消融实验证实T-GRPO对全局最优路径的发现至关重要；冷启动和多轨迹采样也贡献显著。
- T-GRPO相比PPO和平面GRPO，在10k样本下提升7.5%和5.7%，展示了更好的样本效率和收敛性。
- 方法具有更好的可解释性和对噪声时态标注的鲁棒性。

### 7. 优点

- **方法创新**：将树结构探索引入GRPO，结合递归评估和后向信度分配，解决多跳推理的奖励稀疏性和因果依赖问题，是强化学习在结构化推理中的有效应用。
- **实验全面**：覆盖两个大规模非合成基准，进行多维度细分分析，消融实验设计清晰，对比方法涵盖传统嵌入方法和最新LLM方法，验证充分。
- **性能显著**：在主流基准上大幅刷新SOTA，尤其在复杂多跳和时态关系上提升明显，展示出强泛化能力。
- **实用性**：MRE可在开源的LLM基础上实现，无需商业模型，易于复现和部署。

### 8. 不足与局限

- **算力需求未量化**：论文未报告训练所需的GPU型号、数量和时间，无法评估计算成本，可能对资源受限的研究者构成复现门槛。
- **依赖GPT-4采样**：多轨迹采样阶段依赖GPT-4生成轨迹，成本较高且结果可能受闭源模型影响；虽然仅用于冷启动数据构建，但完全依赖商业API可能带来数据偏差。
- **仅在LLM架构上验证**：实验基于特定LLM（未明确说明基座模型，推测为Qwen或LLaMA系列），未在更多不同规模/族模型上测试泛化性。
- **时间Questions整体Hits@1仅59.4%**：虽然在某些子类达到最佳，但整体仍有较大提升空间，说明极端复杂的时态问题依然困难。
- **缺失错误分析**：论文未提供失败案例的定性分析，未能揭示MRE在哪些具体场景下仍会出错。

（完）

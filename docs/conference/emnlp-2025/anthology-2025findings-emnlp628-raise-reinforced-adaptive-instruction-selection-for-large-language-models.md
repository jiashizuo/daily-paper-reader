---
title: "RAISE: Reinforced Adaptive Instruction Selection For Large Language Models"
title_zh: RAISE：面向大型语言模型的强化自适应指令选择
authors: "Qingsong Lv, Yangning Li, Zihua Lan, Zishan Xu, Jiwei Tang, Tingwei Lu, Yinghui Li, Wenhao Jiang, Hong-Gee Kim, Hai-Tao Zheng, Philip S. Yu"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.628.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 强化学习微调用于指令选择
tldr: 现有指令微调方法依赖静态启发式得分选择数据，无法适应模型变化。RAISE提出强化自适应指令选择框架，在每步训练中通过强化学习动态选取最有贡献的指令。实验表明该方法在多个任务上显著优于静态选择基线，为指令微调提供了高效的动态数据选择范式。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.628/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1603, \"height\": 779, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.628/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 724, \"height\": 635, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.628/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 778, \"height\": 512, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.628/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 797, \"height\": 476, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.628/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 782, \"height\": 1035, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.628/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 770, \"height\": 768, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.628/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 779, \"height\": 520, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.628/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 782, \"height\": 516, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.628/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1424, \"height\": 1333, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.628/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 785, \"height\": 287, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.628/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1604, \"height\": 921, \"label\": \"Table\"}]"
motivation: 现有指令选择方法静态且不针对下游目标，导致次优训练效率。
method: 提出RAISE框架，将指令选择建模为序贯决策过程，每步用强化学习估计每条指令对任务性能的期望贡献并选取最有帮助的。
result: 在多个基准上，RAISE优于静态选择方法，能有效提升微调后模型性能。
conclusion: 强化学习可用于动态指令选择，显著改善指令微调的数据效率和效果。
---

## Abstract
Instruction tuning of large language models (LLMs) benefits more from a handful of high-quality examples than from hordes of low-quality ones. Existing selection methods typically rely on static, heuristic quality scores and are executed only once before training. Consequently, they neither adapt to the changing state of the model nor target downstream objectives, leaving substantial room for optimization. We propose RAISE (**R**einforced **A**daptive **I**nstruction **SE**lection), a *dynamic*, *task-driven* framework that integrates selection into every training step. At each step, RAISE estimates the expected contribution of each candidate instruction to task performance and admits only the most helpful. By modeling this process as sequential decision making, we optimize the selector with reinforcement learning, yielding an interpretable policy specialized for the target task. Extensive experiments show that RAISE reaches comparable or better results than full-data training while updating only 1% of the steps, demonstrating both high efficacy and significant computational savings.

---

## 论文详细总结（自动生成）

# RAISE 论文中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：在大语言模型（LLM）的指令微调中，数据质量远比数量重要。现有指令选择方法大多采用静态、一次性的启发式质量评分（如语法正确性、难度、多样性等），在训练前固定选择子集。这些方法存在三个关键缺陷：①无法适应模型在训练过程中的动态数据需求；②启发式指标存在认知偏差，且将质量简化为离散阈值；③与下游任务目标无关，无法针对特定任务优化选择策略。
- **整体含义**：本文提出一种动态、任务驱动的指令选择框架RAISE，将选择过程融入每一步训练，通过强化学习自适应地选取对最终任务性能贡献最大的指令，从而在极少的更新步数下达到甚至超越全数据训练的效果，显著提升效率和可解释性。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：将指令选择建模为**序贯决策过程**，每个训练步骤中，使用一个可学习的**获取函数（acquisition function）** 估计每条指令的**动态价值**（即当前状态下该指令对最终任务性能的期望贡献），并结合多样性约束，选择最有帮助的指令子集用于梯度更新。获取函数通过**强化学习（PPO）** 优化，以最大化最终模型在验证集上的性能。
- **关键技术细节**：
  - **马尔可夫决策过程（MDP）建模**：
    - 状态 \( S_t \)：融合模型训练进度（当前性能、步数）、指令难度特征（对数概率、长度等）、指令语义嵌入（辅助模型编码后池化）、指令已被选中次数。
    - 动作 \( A_t \)：根据当前策略 \( \pi \) 从数据集中选取一个批次 \( D_t \)。
    - 奖励 \( R_t \)：使用该批次更新后模型性能的增量 \( P(M_t) - P(M_{t-1}) \)，实际中采用验证集负损失作为性能度量。
  - **状态融合**：将4类特征（训练阶段、难度、语义、可用性）拼接为固定维度的融合向量 \( d' = H(d, M_{t-1}, t) \)。
  - **多样性约束**：先通过K-means将指令聚类为C类，每类内部按获取函数得分选取top-b个样本（总批次大小 \( B = C \times b \)），保证不同类别指令的平衡覆盖。
  - **策略优化**：采用PPO算法，以获取函数 \( F_\theta \) 为Actor，\( V_\phi \) 为Critic。每轮（episode）对LLM训练T步，收集轨迹后更新策略。使用GAE估计优势，并在多样性约束下逐类计算重要性采样比率。
- **算法流程（文字说明）**：
  1. 初始化获取函数参数 \( \theta \) 和Critic参数 \( \phi \)。
  2. 重复K轮：
     - 数据收集：当前LLM从初始状态开始，对每步t，融合状态，获取函数选择批次，更新LLM，记录 \( (S_t, D_t, R_t, V_t, S_{t+1}) \)。
     - 策略优化：从回放缓冲中采样轨迹，计算优势和回报，更新Actor和Critic。
  3. 输出最终策略 \( \pi_\theta \)。

## 3. 实验设计：数据集、基准、对比方法
- **训练数据集**：Alpaca-52K（52,000条多领域指令-响应对）。
- **评估基准**：
  - MMLU（57个学科选择题，知识广度与推理）、ARC-Challenge（复杂科学推理）、CommonsenseQA（常识推理）、GSM8K（多步数学推理）。
  - 额外OOD评估：MathQA、MMLU.Math（college_mathematics）。
- **对比方法**：
  - **全数据训练（100%）** 和 **基模型（0%）**。
  - 静态选择：RAND（随机采样1%）、IFD（基于指令跟随难度）、DEITA（复杂度+质量得分）、AlpaGasus（GPT-4打分过滤）。
  - 动态选择：SSPL（基于损失的自步学习，从易到难排序分桶训练）。
  - 更强基线：LESS（基于梯度影响的选择方法，仅在8B模型上对比）。
- **控制变量**：所有方法保证总更新步数一致。静态方法固定1%数据训练3个epoch，动态方法设置等量的最大步数。

## 4. 资源与算力
- 论文**未明确说明**使用的GPU型号、数量、训练时长等具体硬件信息。
- 但提供了**计算成本分析**（Appendix E）：
  - 预处理阶段：辅助模型（Llama-3.1-8B-Instruct）两次前向传播，约0.4Φ（Φ为全数据LLM训练成本）。
  - 获取函数训练：K=20轮，每轮使用5%的子集，约1.5Φ。
  - 总成本约1.9Φ，即比全数据训练增加约90%开销，但可定向生成高质量子集用于后续专用训练。

## 5. 实验数量与充分性
- **主要实验组**：
  - 在Llama-3.2-1B、Llama-3.2-3B、Qwen-2.5-3B三个模型上对比7种方法（4个基准）。
  - 在Llama-3.1-8B上使用Tulu3数据集进一步验证（含LESS基线，1%和5%预算）。
  - 以GSM8K为任务目标进行定向优化实验，并做OOD评估。
  - 消融实验：状态融合各组件（stage/diff/sem/avail）、语义维度、聚类数C（1%, 5%预算）、辅助模型替换（Qwen vs Llama）。
  - 分布分析：不同训练阶段选中数据的分布变化。
- **充分性评估**：实验覆盖了不同模型规模（1B~8B）、不同数据类型（Alpaca低质量、Tulu3高质量）、多种任务（知识+推理+数学）、静态与动态基线、关键模块消融，设计较为全面。但**缺乏在更大模型（如13B/70B）和更大数据集（如200K以上）上的验证**，不过作者在Limitation中主动指出了该局限。

## 6. 论文的主要结论与发现
- **“少即是多”成立**：仅用1%的更新步数即可超越全数据训练，因为大多数指令对下游目标贡献微小。
- **动态选择优于静态**：RAISE在所有模型和基准上显著优于静态选择方法（IFD、DEITA、AlpaGasus等），且对强基模型（Llama-3.2-3B）优势更明显。
- **任务定向前提下可自动识别相关模式**：以GSM8K为目标时，RAISE选中了典型的Chain-of-Thought数学推理指令，而基线因依赖通用质量指标几乎无效。
- **状态融合中训练阶段信息最关键**：去掉stage state后性能下降最大，说明动态感知训练进程是核心。
- **多样性约束在数据量充足时有益**：1%预算下小C值（1-2）更好，5%预算下C=4最优，表明需在数据稀缺时聚焦高价值样本，数据充裕时适度兼顾多样性。

## 7. 优点
- **方法创新性**：首次将指令选择建模为强化学习序贯决策，引入“动态价值”概念替代静态启发式分数，实现了任务感知和自适应选择。
- **实用高效**：仅需1%更新步数即达到全数据训练效果，显著降低算力成本，并可通过调整预算进一步平衡效率与效果。
- **可解释性强**：获取函数可揭示哪些指令真正对目标有益，支持定向数据集构建。
- **实验扎实**：多模型、多数据、多基线、消融、OOD评估、分布分析、辅助模型替换等，充分验证了方法鲁棒性。
- **低开销预处理**：语义嵌入降维至32维，融合状态仅39维，计算负担小。

## 8. 不足与局限
- **内存/可扩展性**：获取函数训练时需存储融合状态向量（维度M × 数据量N），当N≥200,000时可能成为瓶颈。作者提出每M步选择一次的简化策略，但未充分实验验证。
- **辅助模型依赖**：需要预计算指令难度和语义特征，依赖辅助模型（Llama-3.1-8B-Instruct），若辅助模型与目标模型差异过大可能影响效果，不过替换实验显示鲁棒性尚可。
- **超参数敏感**：聚类数C的选择对性能有较大影响，且最优值随数据预算变化，需要调参。
- **训练复杂性**：RL训练需要多轮内循环（K轮×T步），总成本约为全数据训练的1.9倍，虽然可定向优化但离线场景下仍显繁琐。
- **实验覆盖有限**：未在更大规模模型（如13B/70B）和更大数据集（如200K+）上验证，公平性也受限于部分基线（如LESS只对比了8B模型）的缺失。

（完）

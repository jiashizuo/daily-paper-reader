---
title: "Scale Down to Speed Up: Dynamic Data Selection for Reinforcement Learning"
title_zh: 缩小规模以加速：强化学习中的动态数据选择
authors: "Zhuoyue Chen, Jihai Zhang, Ben Liu, Fangquan Lin, Wotao Yin"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.412.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 面向大语言模型强化学习的动态数据选择框架
tldr: 该论文针对强化学习训练大语言模型时数据利用率低的问题，提出了ScalingRL框架。该框架通过数据有效性评分（DES）动态选择最有信息量的训练样本，以优化数学推理任务的RL训练。实验表明，该方法在样本效率和模型性能上均取得了显著提升，为RL在LLM中的应用提供了高效的数据选择策略。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.412/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 798, \"height\": 535, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.412/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 799, \"height\": 536, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.412/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1572, \"height\": 677, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.412/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 712, \"height\": 566, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.412/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 767, \"height\": 380, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.412/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 798, \"height\": 498, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.412/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1665, \"height\": 545, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.412/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 780, \"height\": 286, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.412/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 770, \"height\": 435, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.412/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 814, \"height\": 1232, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.412/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 809, \"height\": 285, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.412/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 798, \"height\": 214, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.412/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 684, \"height\": 250, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.412/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 608, \"height\": 176, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.412/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 675, \"height\": 210, \"label\": \"Table\"}]"
motivation: 当前RL训练LLM依赖静态大数据集，导致计算效率低下和冗余梯度更新。
method: 提出ScalingRL框架，通过DES评分（问题难度、思维链复杂度、奖励适应性）动态筛选训练样本。
result: 在数学推理任务上提升了样本效率和最终模型性能，验证了动态数据选择的有效性。
conclusion: 动态数据选择是提升LLM强化学习训练效率的关键手段。
---

## Abstract
Optimizing data utilization remains a central challenge in applying Reinforcement Learning (RL) to Large Language Models (LLMs), directly impacting sample efficiency, training stability, and final model performance.Current approaches often rely on massive static datasets, leading to computational inefficiency and redundant gradient updates.In this paper, we propose ScalingRL, a data-centric RL framework that dynamically selects the most informative training samples to optimize RL for mathematical reasoning.Specifically, ScalingRL introduces the Data Effectiveness Score (DES) that quantitatively ranks prompts according to three complementary factors: problem difficulty, Chain-of-Thought complexity, and reward adaptability.Then, ScalingRL employs an adaptive curriculum scheduler that progressively adjusts the overall scale and specific mix of training prompts—balancing exploration of new, challenging data with exploitation of previously learned concepts—thereby tailoring the data distribution to the model’s current learning trajectory and performance.Experimental results demonstrate that ScalingRL achieves comparable performance to full-data training methods while requiring only 1.5K samples instead of 220K, reducing training time from 13 days to just 4 hours on 8× A800 GPUs.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **问题**：现有的强化学习（RL）训练大语言模型（LLM）时，通常依赖大规模静态数据集（如220K样本），导致计算效率低下、存在冗余梯度更新，且样本质量与分布对训练稳定性和最终性能影响显著。
- **背景**：数学推理任务（如R1类模型）通过RL（如PPO、GRPO）实现长思维链和自反思行为，但简单缩放数据量效果有限。困难样本导致策略梯度信号弱，简单样本在后期提供的信息增益不足。
- **整体意义**：提出“少即是多”的数据中心视角，通过动态选择最有信息量的样本来提升样本效率，实现以极少量数据达到全量训练性能，大幅缩减训练成本。

## 2. 论文提出的方法论

### 核心思想
采用渐进式数据缩放与动态样本有效性评分相结合的框架（ScalingRL），根据模型当前学习状态自适应调整训练样本的难度和复杂度分布。

### 关键技术细节
1. **初始候选构建**：从220K数学数据集（AIME、AMC、奥林匹克等）经过三轮过滤（质量、多样性、难度）得到8K候选集。难度评估使用Qwen2.5-Math-1.5B推理并排除过易或过长样本。
2. **动态数据有效性评分（DES）**：综合三个互补因素：
   - **难度系数 \(D(x)\)**：基于DeepSeek-R1多次回答准确率定义难度分数，高斯函数形式，通过时间权重 \(w_t\) 自适应从平均难度向更难迁移。
   - **思维链复杂度 \(C(x)\)**：基于回答长度的高斯评分，同样随时间权重 \(w_t\) 逐步偏向更复杂的推理路径。
   - **奖励适应性 \(R(x)\)**：评估样本近期的平均奖励，排除极端奖励（±1）样本，避免梯度消失，并通过时间权重调整目标奖励。
   - 三者的加权系数通过softmax参数化并动态学习，满足 \(\sum \lambda_i = 1\)。
3. **自适应采样策略**：基于DES分数计算温度控制的概率分布，初始温度高鼓励探索，随后逐步衰减转向高DES样本，并设置阈值 \(\tau\) 进行最终筛选。
4. **强化学习算法**：采用PPO算法，奖励函数基于答案正确性和格式合规性（正确+1，错误但有格式-0.5，格式错误-1）。

## 3. 实验设计

### 数据集与基准
- **训练数据**：OpenR1-Math-220K → 8K候选集 → 动态选择1.5K/epoch。
- **评估基准**：
  - MATH 500（中等难度，500题）
  - AIME 2024（30题，困难）
  - AIME 2025（30题，困难）
  - AMC 2023（50题，中等）
  - OlympiadBench（675题，困难）

### 对比方法
- 基模型：Qwen2.5-MATH-7B-Instruct
- 其他RL方法：DeepSeek-R1-Distill-7B、SimpleRL-Zero-7B、PRIME-Zero-7B、OpenReasoner-Zero-7B、LIMR（数据选择方法）
- 自身变体：Qwen2.5-MATH-7B-MATH8K（静态8K）、Qwen2.5-MATH-7B-Random（随机1.5K）

### 评估指标
- PASS@1（温度0.6，每个问题采样16次）

## 4. 资源与算力
- **硬件**：8×NVIDIA A800 GPU（单机）
- **训练时间**：全量220K需要13天，ScalingRL仅需4小时（约1.5K动态样本/epoch）
- **软件框架**：OpenRLHF + VLLM，BF16混合精度，DeepSpeed ZeRO Stage 3

## 5. 实验数量与充分性
- **主要结果**：表1展示了5个基准上的PASS@1，对比了9个方法（含基线和变体），结果清晰。
- **消融实验**：表3对DES的三个组件（D、C、R）进行单组件、两两组合、全组合共7组实验，验证了各组件不可或缺。
- **超参数敏感性**：附录C2展示了选择阈值 \(\tau\) 和DES权重 \((\lambda_d, \lambda_c, \lambda_r)\) 的影响，表明方法对超参数有一定鲁棒性。
- **采样策略对比**：附录C3比较了随机、固定高斯、动态高斯三种采样策略，突出动态高斯优势。
- **与其他数据选择/课程学习对比**：附录C1对比了s1、LIMO、LIMR、SEC等方法，进一步验证性能。
- **跨模型验证**：附录C6在DeepSeek-R1-Distill-1.5B和DeepScaleR数据集上验证了通用性。
- **充分性评价**：实验覆盖了难度、数据量、方法类型等多个维度，消融和对比充分，结论可靠。但仅限数学推理领域，未涉及自然语言理解或多模态。

## 6. 论文的主要结论与发现
- ScalingRL仅使用1.5K动态选择样本即可达到全量220K样本的训练性能，在MATH 500（84.2%）、AMC 2023（67.5%）等基准上刷新SOTA。
- 动态数据选择比静态数据集训练具有更好的泛化能力（尽管训练曲线收敛更慢，但最终评估表现更优）。
- 难度、推理复杂度、奖励适应性三元素结合对于有效样本选择至关重要。
- 训练时间从13天缩短至4小时，大幅降低计算资源需求。

## 7. 优点
- **创新性**：首个结合难度、推理复杂度、奖励适应性三方面进行动态RL数据选择的方法。
- **效率突出**：仅需1.5K样本，计算成本降低约98%，实际训练时间从13天降至4小时。
- **技术设计合理**：自适应课程调度（从易到难）、温度衰减平衡探索-利用、权重可学习增强灵活性。
- **实验系统**：消融、超参、对比实验完善，验证了各组件的有效性。
- **可复现性**：详细公开超参数、过滤流程和硬件配置，附录提供额外实验。

## 8. 不足与局限
- **数据过滤依赖启发式**：初始从220K到8K的过滤过程（质量、多样性、难度）基于手工规则（如聚类阈值、LLM判断），缺乏全自动化，可能引入偏见。
- **任务范围有限**：仅评估了数学推理（定理证明、解题），未验证在自然语言理解、代码生成、多模态等领域的泛化能力。
- **复杂度分析不足**：虽然训练时间大幅缩短，但初始候选构建（约14-15小时）是一次性成本，未纳入整体效率讨论。
- **超参数敏感性**：尽管有分析，但DES权重和学习率等超参数仍需针对不同任务调优，缺乏自适应机制。
- **仅对比了7B模型**：未在其他规模（如1.5B、13B、70B）上充分验证规模扩展性。

（完）

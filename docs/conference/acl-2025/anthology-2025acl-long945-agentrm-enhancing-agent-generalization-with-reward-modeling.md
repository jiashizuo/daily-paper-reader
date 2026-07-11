---
title: "AgentRM: Enhancing Agent Generalization with Reward Modeling"
title_zh: AgentRM：通过奖励建模增强智能体泛化能力
authors: "Yu Xia, Jingru Fan, Weize Chen, Siyu Yan, Xin Cong, Zhong Zhang, Yaxi Lu, Yankai Lin (林衍凯), Zhiyuan Liu, Maosong Sun"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.945.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 奖励建模用于智能体泛化
tldr: 直接微调策略模型提升泛化性效果不佳。本文发现微调奖励模型更稳健，提出AgentRM，一个8B参数通用奖励模型，通过Best-of-N采样和束搜索指导策略模型。实验证明奖励模型引导能显著提升智能体在未见任务上的泛化能力，为RLHF中奖励模型的应用提供了新思路。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.945/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 803, \"height\": 593, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.945/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1660, \"height\": 425, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.945/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 718, \"height\": 345, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.945/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 791, \"height\": 582, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.945/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 687, \"height\": 502, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.945/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1642, \"height\": 723, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.945/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 818, \"height\": 762, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.945/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1620, \"height\": 295, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.945/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1662, \"height\": 1010, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.945/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1675, \"height\": 286, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.945/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 711, \"height\": 178, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.945/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 801, \"height\": 426, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.945/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1383, \"height\": 414, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.945/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 783, \"height\": 154, \"label\": \"Table\"}]"
motivation: 现有LLM智能体泛化到未见任务性能差，直接微调策略模型效果有限。
method: 训练一个通用奖励模型AgentRM，在测试时通过搜索指导策略模型生成。
result: AgentRM显著提升了智能体在多种未见任务上的泛化性能。
conclusion: 奖励模型引导比直接微调策略更能增强泛化，是RLHF的有效扩展。
---

## Abstract
Existing LLM-based agents have achieved strong performance on held-in tasks, but their generalizability to unseen tasks remains poor. Hence, some recent work focus on fine-tuning the policy model with more diverse tasks to improve the generalizability. In this work, we find that finetuning a reward model to guide the policy model is more robust than directly finetuning the policy model.Based on this finding, we propose AgentRM, a 8B generalizable reward model, to guide the policy model for effective test-time search.We comprehensively investigate three approaches to construct the reward model, including explicit reward modeling, implicit reward modeling and LLM-as-a-judge.We then use AgentRM to guide the answer generation with Best-of-N sampling and beam search.We show that AgentRM is robust to paraphrasings of task instructions and can generalize to unseen tasks that require novel optimal behavior.Through extensive evaluation across nine tasks spanning four categories, AgentRM enhances the non-finetuned 8B policy model by 8.8 points on average, surpassing the top general agent by 4.0.Moreover, it demonstrates weak-to-strong generalization, yielding greater improvement on more powerful policy models.As for the specializability, AgentRM can also boost a finetuned policy model and outperform the top specialized agent by 11.4 on three held-in tasks.Further analysis verifies its effectiveness in test-time scaling.We release the code and data at https://github.com/thunlp/AgentRM.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有基于LLM的智能体在见过（held-in）的任务上表现良好，但在未见（held-out）任务上泛化能力差。直接对策略模型进行多任务微调虽然能提升 held-in 性能，但会严重损害 held-out 性能（如图1a所示），导致过拟合。
- **研究动机**：作者发现微调一个独立的奖励模型来引导策略模型比直接微调策略模型更稳健（图1b/c对比），因为奖励模型的回归目标学习任务级价值函数，对动作序列分布变化不敏感。
- **整体含义**：提出 AgentRM，一个8B参数通用奖励模型，通过测试时搜索（Best-of-N 和束搜索）增强策略模型在未见过任务上的泛化能力，为提升智能体泛化性提供新范式。

## 2. 论文提出的方法论

- **核心思想**：不直接微调策略模型，而是训练一个通用奖励模型来评估中间状态或完整轨迹，在测试时通过搜索选择高奖励的动作。
- **三种奖励建模方法**：
  - **显式奖励模型（Explicit RM）**：基于蒙特卡洛树搜索（MCTS）自动标注步骤级奖励。对每个 held-in 任务指令构建搜索树，通过选择、扩展、模拟、回传计算每个状态的价值 V(s_t)，过滤低频状态后训练一个带有价值头的语言模型，最小化 MSE 损失。
  - **隐式奖励模型（Implicit RM）**：利用 DPO/RLHF 中的推理技巧，将过程奖励定义为优势函数，通过训练在最终结果奖励上的模型隐式学习步骤奖励，无需过程标注。
  - **LLM-as-a-judge**：直接提示LLM（8B）对多个候选轨迹进行选择，无需训练。
- **搜索方法**：
  - **Best-of-N**：采样 N 个完整轨迹，用奖励模型选择最佳。
  - **Beam Search**：每一步生成多个候选动作，用奖励模型打分并保留 top-W1 状态，重复直至终止。

## 3. 实验设计

- **数据集与场景**：
  - **Held-in 任务**：Webshop（网页导航）、Alfworld（具身家务）、Sciworld（具身科学实验），来自 ETO 工作。
  - **Held-out 任务**：Babyai（具身规划）、Jericho & Pddl & Maze（文本游戏）、ToolQuery & ToolOperation（工具使用），来自 AgentBoard 和 AgentGym。
  - 共9个任务，覆盖4大类别。
- **基准方法**：
  - **通用智能体**：Agent-FLAN、AgentGym、AgentGen、AgentRefine、ATLAS（均基于LLaMA3-8B-Instruct）。
  - **专用智能体**：SPIN、NAT、ETO、StepAgent、QLASS、Agent-R、MPO、GLIDER（各自在单一任务上微调）。
  - 此外还对比了 GPT-4o 和 greedy search 基线。
- **对比设置**：所有方法均使用 LLaMA3-8B-Instruct 作为政策模型。评价指标为任务成功率（Succ.）或进度率（Prog.），取平均分。

## 4. 资源与算力

- **GPU 资源**：论文明确说明 “All experiments are carried out on 8 NVIDIA A100 80G GPUs”。
- **训练时长**：未明确报告每个阶段的训练时间，但提供了超参数（SFT 2e-5, 3 epochs；显式RM 1e-5, 2 epochs；隐式RM 5e-7, 1 epoch），可大致推断训练时间在数小时到一天以内。

## 5. 实验数量与充分性

- **主要实验组**：
  - 表1：与通用智能体对比（9任务），展示显式RM、隐式RM、LLM-as-judge 的 Best-of-5 和束搜索结果。
  - 表2：与专用智能体对比（3 held-in 任务）。
  - 表3：鲁棒性测试（Alfworld 5种指令扰动）。
  - 图3：训练数据缩放趋势（4k~353k）。
  - 图4：任务特定RM的泛化（每个 held-in 任务训练RM，测试9任务）。
  - 表4：跨策略模型（1B～70B）的弱到强泛化。
  - 表5：状态表示消融（thought、observation、action 组合）。
  - 图5：Best-of-N 缩放趋势（Pddl 任务）。
  - 表6：对一般推理任务（GSM8k、MATH、CodeContests）的影响。
- **充分性评价**：实验覆盖范围广，包含9个任务、多种对比方法和消融分析，对比公平（统一基础模型、相同测试设置）。鲁棒性测试和缩放趋势分析增加了说服力。不足之处在于 held-in 任务仅3个，且未与强化学习（RL）微调直接对比。

## 6. 论文的主要结论与发现

- 微调奖励模型比直接微调策略模型更稳健，能显著提升未见任务的泛化性能。
- 显式奖励模型效果最优，在 Best-of-5 下使基础策略模型平均提升8.8分，超过最佳通用智能体4.0分。
- 奖励模型对指令改写鲁棒，能推广到需要新最优行为的未见任务。
- 弱到强泛化：用8B模型训练的RM可以提升70B策略模型12.6分。
- 训练数据缩放呈对数线性增长，无饱和迹象。
- 状态表示主要依赖动作token，thought 和 observation 可互补但非必需。
- 奖励模型在一般推理任务上无负面副作用。

## 7. 优点

- **方法创新**：首次系统研究通用奖励模型提升智能体泛化，对比三种奖励建模方法。
- **实验全面**：9个任务、多种类型，包含鲁棒性、缩放、跨模型、消融等分析。
- **弱到强泛化**：展示小模型训练的RM能有效指导大模型，具有实际价值。
- **鲁棒性验证**：对指令扰动表现稳定，说明学习到的是决策能力而非模式记忆。

## 8. 不足与局限

- **held-in 任务有限**：仅3个，若能扩充更多任务可能进一步提升性能（论文已提及）。
- **未探索强化学习（RL）微调**：论文专注于测试时搜索，未尝试将 RM 用于策略的 RL 微调，尽管声称过程监督已可比拟 RL 方法。
- **未结合 prompt 工程**：如 Reflexion 等高级提示技术未纳入。
- **计算资源需求**：MCTS 构建训练数据需要大量环境交互，但论文未详述时间成本。
- **隐式RM和LLM-as-judge表现一般**：在大规模候选下可能退化，测试时缩放不如显式RM稳定。

（完）

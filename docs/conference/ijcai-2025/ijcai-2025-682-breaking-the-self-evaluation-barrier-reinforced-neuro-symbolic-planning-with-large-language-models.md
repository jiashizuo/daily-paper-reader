---
title: "Breaking the Self-Evaluation Barrier: Reinforced Neuro-Symbolic Planning with Large Language Models"
title_zh: 打破自我评估障碍：基于强化学习的神经符号规划与大语言模型
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0682.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用强化学习的神经符号规划与大语言模型，与强化学习后训练相关
tldr: 该论文提出结合强化学习与神经符号方法进行规划，以突破大语言模型的自我评估限制。该方法涉及强化学习与LLM的结合，与强化学习后训练有概念关联，但未聚焦医疗领域，因此相关性中等。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-682/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 831, \"height\": 573, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-682/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1818, \"height\": 966, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-682/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 906, \"height\": 537, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-682/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1842, \"height\": 517, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-682/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1685, \"height\": 825, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-682/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 897, \"height\": 631, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-682/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 687, \"height\": 474, \"label\": \"Table\"}]"
motivation: 大语言模型在复杂规划任务中自我评估能力不足。
method: 采用强化学习驱动的神经符号规划方法。
result: 提升了规划任务的性能。
conclusion: 强化学习可有效增强LLM的规划能力。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文总结：Breaking the Self-Evaluation Barrier: Reinforced Neuro-Symbolic Planning with Large Language Models

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：大语言模型（LLM）在规划任务中常常难以满足约束条件，现有方法依赖 LLM 的自我评估（self-evaluation）来引导搜索。但研究表明，LLM 的自我评估在需要领域知识的规划任务中不可靠。例如，经典的 Game of 24 在 ToT 方法下达到 80%+ 成功率，但仅将目标改为 28 或 30 时，GPT-4o 和 DeepSeek-v3 的成功率骤降至约 60%，而较小模型甚至为 0%。这说明 LLM 的自我评估能力并非真正的“前瞻性”评估，而是依赖于训练数据中的模式（如互联网上大量 Game of 24 的例子）。
- **整体含义**：需要一种不依赖不可靠自我评估的规划框架，将 LLM 的生成能力与可验证的符号推理相结合，以严格保证约束满足。

## 2. 方法论：核心思想、关键技术细节、算法流程

- **核心思想**：提出 **Reinforced Neuro-Symbolic Planning (RNS P)** 框架，将 LLM 作为动作生成器，引入**符号验证器（Symbolic Verifier）** 显式检查过程约束（process constraints），并通过**强化学习价值函数**迭代更新状态评估，使用 **T-norms** 聚合多个目标约束的满足度。
- **关键技术细节**：
  - **符号验证器**：对状态-动作对进行谓词验证（如数字是否存在于当前状态、操作是否合法），过滤不合法的动作，确保路径满足硬约束。
  - **强化价值更新**：使用动态规划的思想，将终端状态的目标谓词满足度（symbolic evaluation）沿路径反向传播到中间节点：  
    `v(s'_l | p) = max( v(s'_l | p), f_s(s'_L, p) )`，等价于强化学习中的值更新 `V(s) = max_{a} V(s')`。
  - **T-norms 聚合**：对于多个目标约束 G，使用 `f_v(s|G) = min_{p in G} v(s|p)` 计算联合满足度，即取所有约束满足度的最小值，作为保守的评估。
- **算法流程**（Algorithm 1）：
  1. 初始化：采样初始状态 s0，设置束宽度 B、提议宽度 K、规划长度 L。
  2. 对每一层 l：
     - 对当前候选状态集合 S_{l-1} 中的每个状态，用 LLM 生成 K 个候选动作。
     - 使用符号验证器检查动作是否满足过程约束 C，若满足则通过转移函数生成新状态。
     - 用束搜索（beam search）根据当前价值估计（式2）剪枝，保留 B 个最优状态。
  3. 到达终端状态后，用式 (1) 更新所有路径上的中间节点价值。
  4. 返回最终状态集合。

## 3. 实验设计：数据集 / 场景、benchmark、对比方法

- **数据集与场景**：
  - **Game of 24 / 28 / 30**：经典数学推理任务，目标分别用 4 个数字通过四则运算得到 24、28、30。训练：800-900 个 easy->hard 排序的问题；测试：901-1000（各 100 个）。
  - **Constrained Knapsack**：带颜色约束的背包问题，需选择 10 个指定颜色的方块，最大化分数，随机生成 50-200 个方块。
  - **Travel Planning**：真实世界旅行规划 benchmark TravelPlanner，需在 3 天、预算 $1700 等约束下规划路线。
- **Benchmark 指标**：
  - Game of 24/28/30：Success@1 和 Success@5。
  - Constrained Knapsack：成功率达到最大可能分数的比例 (SR) 和获得分数占最优分数的相对百分比 (RP)。
  - Travel Planning：条件逻辑通过率 (C-LPR) 和最终通过率 (FPR)。
- **对比方法**：
  - 基线：标准输入-输出（IO）、Chain-of-Thought (CoT)、Tree-of-Thoughts (ToT)。
  - 基础 LLM：GPT-3.5-turbo、GPT-4o-mini、GPT-4o、DeepSeek-v3。

## 4. 资源与算力

- **未明确说明**：论文中未提及使用的 GPU 型号、数量、训练时长等算力信息。仅提到“利用预训练的 LLM”，未进行额外微调，仅进行测试时搜索（test-time search），因此实际算力需求主要来自 LLM 的推理调用和符号验证。

## 5. 实验数量与充分性

- **实验数量**：共三种主要任务（Game of 24/28/30、Constrained Knapsack、Travel Planning），每个任务均使用 4 种 LLM 对比 3 种基线方法（IO、CoT、ToT），并报告多个指标。Game of 24 系列还区分了不同目标数字（24、28、30）。总计约 4×3×3 = 36 组主要实验结果（不含消融）。
- **充分性评价**：
  - **优点**：覆盖了数学推理、组合优化、真实世界规划三种不同难度的场景；使用了多种 LLM 型号，验证了方法对模型规模的鲁棒性；ToT 基线是当前强大的自评估方法，对比公平。
  - **不足**：缺少对方法关键组件（如符号验证 vs 无验证、强化更新 vs 无更新）的消融实验；未报告统计显著性（如多次运行均值和方差）；Game of 24 系列训练/测试划分固定（仅 100 个测试样本），可能不够充分；未在更多规划基准（如 Blocks World、任务规划）上验证。

## 6. 主要结论与发现

- LLM 的自我评估在规划任务中脆弱且不可靠，尤其当任务脱离训练数据中的常见模式时（如 Game of 28/30 相比 Game of 24 性能骤降）。
- 符号验证器+强化价值更新（RNS P）能显著提升约束满足率和规划成功率，且在不同 LLM 上表现一致。
- 特别是在 Constrained Knapsack 上，RNS P 的 RP 达到 90%+，SR 达 72%（DeepSeek-v3），而 ToT 的 SR 仅 8%；在 Travel Planning 上 C-LPR 和 FPR 均大幅领先。
- T-norms 聚合（取最小值）提供了有效的保守评估，有助于搜索朝满足所有约束的方向进行。

## 7. 优点

- **方法创新**：巧妙结合了符号验证（保证硬约束）和强化学习（从终端反馈学习过程价值），避免对不可靠自我评估的依赖。
- **即插即用**：无需微调 LLM，仅需在测试时使用 Beam Search + 符号验证器，易于集成现有模型。
- **鲁棒性**：在多种任务和多种 LLM 上均一致提升，特别是面对目标数字变化时表现稳定（相比之下 ToT 波动剧烈）。
- **实用性**：符号验证器通过正则表达式匹配提取谓词，实现简单且通用。

## 8. 不足与局限

- **计算效率**：当前使用 Beam Search，搜索复杂度随深度和束宽增加，可能不适用于实时或大规模应用。论文也承认未来需探索更高级的探索-利用技术。
- **消融实验缺失**：未单独验证“符号验证”和“强化更新”各自的贡献。例如，仅用符号验证（无价值更新）效果如何？仅用价值更新（无符号验证）是否仍有效？
- **泛化性有限**：仅在三种规划任务上验证，未涵盖更广泛的规划领域（如机器人操作、任务规划 PDDL 等）。T-norms 使用简单的 min 操作，是否适用于所有约束类型尚不明确。
- **偏差风险**：符号验证器依赖于人工设计的谓词和匹配规则，可能隐含设计者偏差；对于复杂、开放式的约束可能无法完全覆盖。
- **统计严谨性**：未报告多次运行的标准差，单次结果可能具有偶然性。
- **应用限制**：需要预先定义规划任务的形式化谓词集和约束，对于完全非结构化的问题难以直接应用。

（完）

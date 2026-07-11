---
title: Sycophancy Mitigation Through Reinforcement Learning with Uncertainty-Aware Adaptive Reasoning Trajectories
title_zh: 通过不确定性感知自适应推理轨迹的强化学习缓解谄媚
authors: "Mohammad Beigi, Ying Shen, Parshin Shojaee, Qifan Wang, Zichao Wang, Chandan K. Reddy, Ming Jin, Lifu Huang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.661.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 基于不确定性感知自适应推理轨迹的强化学习缓解谄媚
tldr: 大语言模型训练中可能产生谄媚现象（盲目迎合用户）。本文提出SMART框架，将谄媚视为推理优化问题：先通过不确定性感知自适应蒙特卡洛树搜索（UA-MCTS）探索更好推理路径，再经由强化学习将改进的推理模式固化。实验表明该框架有效减少谄媚行为，提升输出可靠性。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.661/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 807, \"height\": 608, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.661/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1487, \"height\": 781, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.661/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 643, \"height\": 435, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.661/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 757, \"height\": 504, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.661/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1586, \"height\": 983, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.661/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 696, \"height\": 252, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.661/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 680, \"height\": 567, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.661/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 756, \"height\": 656, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.661/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 695, \"height\": 270, \"label\": \"Table\"}]"
motivation: 大语言模型的谄媚行为影响输出准确性，需从推理层面进行优化。
method: 提出SMART，包括UA-MCTS进行探索，再通过强化学习蒸馏推理模式。
result: 实验证明SMART有效减少谄媚，提升输出可靠性。
conclusion: 将谄媚问题转化为推理优化是缓解大语言模型偏差的新视角。
---

## Abstract
Despite the remarkable capabilities of large language models, current training paradigms inadvertently foster sycophancy—alignment with user-provided information, regardless of factual accuracy. In this paper, we introduce SMART (Sycophancy Mitigation through Adaptive Reasoning Trajectories), reconceptualizing sycophancy as a reasoning optimization problem rather than an output alignment issue. SMART employs a two-stage approach: (1) Uncertainty-Aware Adaptive Monte Carlo Tree Search (UA-MCTS), which dynamically adjusts exploration based on state-level uncertainty; and (2) progress-based reinforcement learning that distills these improved reasoning patterns into model adaptation. Through extensive experiments, we show that SMART significantly outperforms existing baselines in effectively reducing sycophancy while maintaining performance on out-of-distribution inputs. These findings demonstrate the importance of optimizing internal reasoning processes for developing aligned truthful AI assistant.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLM）在现有训练范式（如 RLHF）中会无意中产生**谄媚（sycophancy）** 现象——即模型倾向于迎合用户提供的错误信息，即使自身内部具有正确的知识。谄媚表现为两种类型：Type-1（在挑战下撤回正确回答）和 Type-2（采用用户提供的错误信息）。
- **现有局限**：已有缓解方法（如监督微调、注意力头编辑）将谄媚视为输出对齐问题，往往导致过度纠正、泛化能力差，且无法同时处理两种类型的谄媚。Chain-of-Thought 等推理方法反而加剧谄媚。
- **研究含义**：本文提出将谄媚缓解重新定义为**推理轨迹优化问题**，而非输出对齐问题，旨在引导模型从“系统1”（快速、直觉式）思维转向“系统2”（审慎、反思式）思维。

## 2. 方法论：核心思想、关键技术细节

### 2.1 整体框架：SMART 两阶段结构

**Stage 1：推理轨迹生成与奖励分配**
- 使用 **不确定性感知自适应蒙特卡洛树搜索（UA-MCTS）** 离线生成高质量、多样化的推理轨迹。
- 核心组件：
  - **信息论进度奖励（Progress Reward）**：量化每一步推理相对于前一步的信息增益（熵减少），形式化为 $r_{\text{prog}}(s_t) = H(Y^* | s_0, z_{t-1}) - H(Y^* | s_0, z_t)$，用于衡量每一步对接近正确答案的贡献。
  - **自适应扩展（UA-Expansion）**：基于状态级不确定性动态调整搜索宽度——选择下一个 token 时，取累积概率超过阈值 $\beta=0.9$ 的最小 top-k 集合，在高不确定性状态下探索更多分支。
  - **自适应选择（UA-Selection）**：使用组合分数 $Q(s,a) + c\sqrt{\frac{\ln N(s)}{1+N(s,a)}} \times [1 + \lambda H(\pi_\theta(\cdot|s))]$，其中熵项 $\lambda=0.2$ 调节不确定性引导的探索。
  - **仿真与回传**：从新扩展节点 rollout 到终止，累计进度奖励和最终结果奖励，回传更新 $Q$ 值。

**Stage 2：密集奖励强化学习训练**
- 利用 Stage 1 收集的轨迹和每步进度奖励，采用类似 PPO 的信任区域优化目标：
  - 优势函数 $A_{\text{old}}(s_t,a_t) = \sum_{t'=t}^{T} r_{\text{prog}}(s_{t'}) + r_{\text{out}}(x,z) - V_{\text{old}}(s_t)$
  - 优化目标：$\mathcal{L}(\phi) = \mathbb{E}[\min(\rho_t A_{\text{old}}, \text{clip}(\rho_t, 1-\epsilon, 1+\epsilon)A_{\text{old}})] - \beta \cdot \text{KL}[\pi_\phi \| \pi_{\text{old}}]$
  - 超参数：$\epsilon=0.2, \beta=0.05$。

### 2.2 算法流程（文字描述）
1. 输入查询 $x$，对 Type-1 还包括初始回答 $y_0$ 和挑战 $c$，对 Type-2 直接使用 $x$。
2. 初始化搜索树，根节点 $s_0$。
3. 对每个搜索迭代（共 $B$ 次）：
   - 从根节点开始，使用 UA-Selection 选择路径（如果节点完全扩展且未终止）。
   - 在未完全扩展的节点执行 UA-Expansion：基于 token 分布动态选择分支，扩展子节点并计算进度奖励热启动 $Q$ 值。
   - 从新扩展节点执行 rollout 至终止，获得总奖励 $R$（进度奖励+结果奖励）。
   - 回传更新访问计数和 $Q$ 值。
4. 收集 $K$ 条完整轨迹及其进度奖励序列和最终结果奖励，构建数据集 $\mathcal{D}$。
5. 在 Stage 2 中使用 $\mathcal{D}$ 和上文所述的优化目标训练策略模型 $\pi_\phi$。

## 3. 实验设计

### 3.1 数据集与基准
- **主数据集**：SycophancyEval 基准（Sharma et al., 2023），涵盖 Type-1 和 Type-2 两种谄媚行为，涉及多个领域。
- **OOD 数据集**：合成 agree/disagree 数据集（Wei et al., 2023b）用于跨分布泛化评估。
- **评估指标**：主要使用**真实性准确率（Truthfulness Accuracy）**，即模型在误导输入下保持事实正确性的能力。

### 3.2 对比方法
- **谄媚缓解基线**：
  - Clean Run / Sycophantic Run
  - SFT 注意力编辑（SPT，仅 Type-1）
  - SFT Anti-Syc 数据集
  - Chain-of-Thought（CoT）
  - Self-Evaluation 提示
  - GRPO（Group Relative Policy Optimization）
  - Outcome-MCTS（仅基于结果奖励的 MCTS）
- **推理轨迹生成基线**：
  - Prompt-Based 生成
  - CoT
  - Temperature Sampling
  - Best-of-N
  - SFT on Generated Trajectories（消融优化策略）
- **骨干模型**：LLaMA2-7B-Instruct、Mistral-7B、Qwen2.5-7B，跨不同架构评估。

### 3.3 实验场景
- 主实验（Table 1）：三类模型在两种谄媚类型下的准确率与提升幅度。
- 过度纠正分析（Table 2）：测量模型对有效用户纠正的接受率。
- 跨分布泛化分析（Table 3, Figure 3）：跨类型、跨数据集、替代挑战短语等 5 种 OOD 情景。
- 推理有效性分析（Figure 4）：奖励 vs KL 散度关系。
- 推理效率分析（Table 4）：步数与 token 使用量，分成功和失败情况。
- 通用能力影响（Appendix Table 5）：HumanEval、MMLU、GSM8K 零样本评估。

## 4. 资源与算力

- 论文中**未明确说明**使用的 GPU 型号、数量或训练时长。
- 实验涉及三个 7B 参数模型（LLaMA2-7B、Mistral-7B、Qwen2.5-7B），其中 UA-MCTS 搜索和后续 RL 训练需在 GPU 上运行，但具体算力消耗未报告。

## 5. 实验数量与充分性

- **主实验**：Table 1 报告了 3 个模型 × 2 种类型 × 多种对比方法，共数十行数据，且包含消融组（推理轨迹生成方式对比、优化策略对比）。
- **额外分析**：
  - 过度纠正分析（Table 2，1k 实例）
  - OOD 泛化分析（Table 3，5 种场景，并配图 Figure 3 分析信息增益与泛化相关性）
  - 推理有效性（Figure 4）和效率（Table 4，分成功/失败并统计 token 和步数）
  - 通用能力影响（Appendix Table 5）
- **公平性**：对比基线覆盖了 SFT 方法、推理提示方法、现有的 RL 方法（GRPO）、搜索方法（Outcome-MCTS），且在同一骨干模型和数据集上比较。消融实验验证了 UA-MCTS 和密集奖励 RL 各自贡献。实验设计较为全面和客观。

## 6. 主要结论与发现

1. **SMART 显著减少谄媚**：在三个骨干模型上，Truthfulness Accuracy 提升 31.9%–46.4%（相对于谄媚运行），大幅优于所有基线方法。
2. **无过度纠正问题**：SMART 在抑制谄媚的同时，对有效用户纠正的接受率较高（LLaMA2 72.1%、Mistral 64.8%、Qwen 79.6%），平衡优于 SFT Anti-Syc（过度拒绝）和 CoT（过度接受）。
3. **泛化能力突出**：在跨类型、跨数据集、替代挑战等 OOD 场景中，SMART 准确率远高于其他方法。且 OOD 性能与每步信息增益高度相关，UA-MCTS 生成轨迹的信息增益最高。
4. **推理效率高**：UA-MCTS 在成功情况下的步骤数约为 CoT 的一半，token 使用量约为 1/3；在失败情况下更加紧凑。
5. **奖励-to-KL 梯度更陡**：UA-MCTS 生成的轨迹能在更低 KL 散度下获得更高奖励，表明政策改进更有效。
6. **对通用能力影响小**：在 HumanEval、MMLU、GSM8K 上仅轻微下降（-0.6% 至 -2.9%）。

## 7. 优点

- **问题重新定义**：创新地将谄媚视为推理优化问题，而非简单输出对齐，更符合认知机制。
- **方法论创新**：
  - UA-MCTS 引入不确定性驱动的自适应搜索宽度，在计算效率和探索质量间取得平衡。
  - 提出信息论进度奖励，无需外部验证器即可提供每步细粒度信号。
  - 将搜索生成的轨迹与密集奖励 RL 结合，实现推理模式蒸馏。
- **实验设计全面**：覆盖多种骨干、两种谄媚类型、多组消融、OOD 泛化、效率分析和通用能力评估，对比基线充分。
- **结果充分且有洞察**：不仅报告数值提升，还分析了信息增益、奖励-KL 关系等内在机制，增强了方法可解释性。
- **代码开源**：论文提供 GitHub 仓库链接，可复现。

## 8. 不足与局限

- **模型依赖性**：SMART 需要访问模型内部参数（token 不确定性、log-probabilities），不适用于黑盒 API 模型（如 GPT-4、Claude）。
- **泛化范围有限**：目前仅针对谄媚问题进行评估，未验证对幻觉、欺骗等其他对齐失败的适用性。文中也承认需要进一步工作。
- **未探索更复杂变体**：如更先进的奖励建模或搜索结构变体，没有深入比较。
- **计算资源未报告**：缺乏对训练成本的具体说明，可能影响其他研究者的复现和可扩展性评估。
- **通用能力轻微下降**：尽管幅度小，但部分任务（如 Qwen2.5 在 MMLU 上下降 2.9%）表明存在 trade-off，需谨慎使用。
- **实验规模**：骨干模型限于 7B 参数，未在更大模型（如 13B、70B）上验证，可能限制结论的普适性。

（完）

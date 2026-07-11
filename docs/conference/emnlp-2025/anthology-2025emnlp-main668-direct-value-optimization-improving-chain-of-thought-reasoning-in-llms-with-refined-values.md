---
title: "Direct Value Optimization: Improving Chain-of-Thought Reasoning in LLMs with Refined Values"
title_zh: 直接值优化：通过精炼值改善LLM的思维链推理
authors: "Hongbo Zhang, Han Cui, Guangsheng Bao, Linyi Yang, Jun Wang, Yue Zhang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.668.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 用于增强LLM推理的离线强化学习框架
tldr: 传统离线偏好优化需要成对偏好数据，且缺乏细粒度监督。本文提出DVO，利用推理步骤的值信号通过均方误差损失优化模型，无需人工标注。在数学、常识和代码推理任务上，DVO一致优于现有离线偏好优化方法。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.668/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1601, \"height\": 478, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.668/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1601, \"height\": 491, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.668/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 463, \"height\": 338, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.668/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 803, \"height\": 391, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.668/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 804, \"height\": 364, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.668/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 463, \"height\": 339, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.668/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1598, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.668/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 609, \"height\": 450, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.668/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 815, \"height\": 708, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.668/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 828, \"height\": 319, \"label\": \"Table\"}]"
motivation: 现有离线偏好优化需要偏好标签，缺少步骤级监督。
method: 提出DVO，使用步骤级值信号（来自MCTS或结果模型）以均方误差损失训练。
result: 在10个推理任务上，DVO一致优于现有离线偏好优化方法。
conclusion: 步骤级值信号能有效提升LLM推理能力，无需额外标注。
---

## Abstract
We introduce Direct Value Optimization (DVO), an innovative offline reinforcement learning framework for enhancing large language models in complex reasoning tasks. Unlike traditional methods relying on preference labels, DVO utilizes value signals at individual reasoning steps, optimizing models via a mean squared error loss. The key benefit of DVO lies in its fine-grained supervision, circumventing the need for labor-intensive human annotations. Target values within the DVO are estimated using either Monte Carlo Tree Search or an outcome value model. Our empirical analysis on 3 math reasoning, 4 commonsense reasoning, and 3 coding tasks shows that DVO consistently outperforms existing offline preference optimization techniques by a significant margin of 4% to 6%, and is competitive to online GRPO but with higher sample efficiency. These findings underscore the importance of value signals in advancing reasoning capabilities and highlight DVO as a superior methodology under scenarios lacking explicit human preference information.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：大语言模型（LLMs）在复杂推理任务（如数学推理、逻辑推理、多步规划）中存在中间步骤错误导致推理失败的问题。现有方法依赖人类标注的偏好标签或结果监督，但偏好标签仅提供二元/成对比较，缺乏细粒度步骤级信号，且需要大量人工标注。
- **动机**：步骤级的值信号（value signals）能提供连续的、更精确的监督，帮助模型区分中间步骤的质量，从而提升推理鲁棒性。如果能直接从最终结果推断步骤级值，无需人工标注，就能实现更有效的离线强化学习。
- **背景**：现有离线偏好优化方法如DPO、KTO、Step-DPO等依赖偏好对，但存在忽略绝对价值、正样本奖励下降等问题。本文提出**直接值优化（DVO）**，直接使用步骤级值信号进行训练。

## 2. 方法论
### 核心思想
- 将推理过程建模为步骤级马尔可夫决策过程（step MDP），每步动作是一个推理步骤。将LLM视为软Q函数（soft Q-function），通过最大熵强化学习框架直接优化Q值，使用均方误差（MSE）损失对齐模型输出与目标值。
- 目标值无需人工标注，可通过两种方式估计：蒙特卡洛树搜索（MCTS）或结果值模型（outcome value model）。

### 关键技术细节
- **步骤级MDP**：状态 \( s_t \) = 问题 + 已生成步骤序列；动作 \( a_t \) = 下一个推理步骤；奖励 \( r(s_t, a_t) \) = 步骤质量（最终正确性）。
- **LLM作为软Q函数**：基于最大熵RL，最优策略 \( \pi^* \) 满足 \( \pi^*(a_t|s_t) = \exp\big((Q^*_{\text{soft}}(s_t,a_t) - V^*_{\text{soft}}(s_t))/\beta\big) \)。语言模型可以视为最优Q函数，其logits对应Q值。
- **DVO目标函数**：
  - 采用软Q学习中的MSE损失：  
    \[
    J_Q(\theta) = \mathbb{E}_{t,s_t,a_t} \left[ \frac{1}{2} \left( \beta \log \frac{\pi_\theta(a_t|s_t)}{\pi_{\text{ref}}(a_t|s_t)} - \big(\hat{V}_\theta(s_{t+1}) + r(s_t,a_t) - \hat{V}_\theta(s_t)\big) \right)^2 \right]
    \]
    其中 \( \hat{V}_\theta \) 是估计值函数，\( r \) 是实际奖励。该损失直接对齐Q值，无需成对偏好数据。
- **目标值估计方法**：
  - **MCTS**：使用PUCT算法选择节点，评估后反向传播更新值。从搜索树中采样正负轨迹用于训练。
  - **结果值模型**：训练一个独立的V网络，以MSE损失预测最终结果奖励，然后提供步骤级值。
- **迭代训练**：每轮用当前策略生成新数据并更新。

## 3. 实验设计
### 数据集与场景
- **数学推理（in-domain）**：GSM8K、MATH（训练集使用MetaMath中的395K问题，仅用答案）。
- **数学推理（out-of-domain）**：AGIEval-Math。
- **常识推理（in-domain）**：OpenBookQA（OBQA）、CommonsenseQA（CSQA）、ARC-Challenge（ARC-C）。
- **常识推理（out-of-domain）**：SciQ。
- **编码任务**：abstract提到3个编码任务，但正文未详细展开（可能来自附录或省略）。
- 训练数据：每轮从对应数据集中采样10,000个问题（数学）或7,000个样本（常识）。

### 基准方法
- **RFT**：监督微调正确路径。
- **DPO**：解决方案级偏好优化。
- **Step-DPO**：步骤级偏好优化。
- **KTO**：无配对偏好优化。
- 所有方法使用相同的MCTS生成数据（第一轮保持一致），确保公平比较。

### 模型
- **Base模型**：Llama-3-8B-Instruct、Llama-3-70B-Instruct、DeepSeek-Math-Instruct-7B。
- 先通过少量正确解决方案SFT使其遵循步骤格式。

### 消融实验
- 不同β值（0.1最优）。
- MCTS搜索迭代次数（40以上效果更好）。
- 步骤级 vs 响应级DVO（步骤级更优）。
- 与DQO/OREO的比较（正文简单提及，未详细展开）。

## 4. 资源与算力
- **论文未明确说明**：未提及使用的GPU型号、数量、训练时长等具体算力信息。仅提到搜索宽度限制为5、深度8、迭代80次等。实验可能在数块GPU上完成，但无详细资源描述。

## 5. 实验数量与充分性
- **实验数量**：共进行了**13组主要实验**（3种模型 × 3个数学任务 + 1种模型 × 4个常识任务 = 9+4=13），加上消融实验（β、搜索迭代、粒度）和隐式奖励分析，总计约20+组实验。
- **充分性**：覆盖多种模型规模（7B/8B/70B）、多种任务类型（数学、常识）、多种对比方法，并包含OOD测试、消融研究和定性分析（图6的信用分配）。实验设计客观（相同数据源、相同训练超参），结论可靠。

## 6. 主要结论与发现
- **DVO显著优于所有离线偏好优化方法**：在数学任务上，GSM8K提升~4-6%，MATH提升~2-4%，OOD的AGIEval提升~3-5%。常识任务也有提升。
- **步骤级值信号比偏好标签更有效**：直接优化Q值避免了DPO中正样本奖励下降的问题（图5），正样本隐式奖励持续上升。
- **MCTS估计优于结果值模型**：MC估计无需额外训练值网络，且性能更好（图3）。
- **步骤级优化优于响应级**：更细粒度监督带来更大提升（图7）。
- **学习到的信用分配能识别错误步骤**：图6显示，错误步骤获得低DVO信用，验证了步骤级值信号的有效性。

## 7. 优点
- **无人工标注**：仅使用最终答案，通过MCTS自动生成步骤级值，大幅降低标注成本。
- **细粒度监督**：直接对齐步骤级Q值，提供比偏好对更丰富的信息。
- **通用框架**：适用于数学、常识、编码等多种推理任务，且模型规模越大收益越明显（70B模型提升最大）。
- **高效训练**：在相同训练步骤下，DVO收敛更快，性能超越所有基线。
- **可解释性**：可以通过DVO信用分数可视化识别推理中的错误步骤（图6）。

## 8. 不足与局限
- **离线设置**：当前DVO仅离线训练，未探索在线集成MCTS搜索与更新的混合训练，可能限制进一步性能。
- **计算成本**：MCTS搜索需要一定计算量（宽度5、迭代80），但可通过并行或预生成数据缓解。论文未提供详细资源消耗对比。
- **搜索宽度限制**：受限于计算资源，仅使用宽度5，理论上更大宽度可能更优，但未验证。
- **编码任务实验细节缺失**：abstract提到3个编码任务，但正文未详细报告结果和分析，可能影响完整性。
- **与最新在线方法（如GRPO）的对比**：仅abstract提及“competitive to online GRPO but with higher sample efficiency”，正文未展开，削弱了说服力。
- **泛化到更复杂任务**：当前实验集中在数学和简单常识推理，未涉及长链、多跳或需要外部知识的复杂推理，泛化性有待验证。

（完）

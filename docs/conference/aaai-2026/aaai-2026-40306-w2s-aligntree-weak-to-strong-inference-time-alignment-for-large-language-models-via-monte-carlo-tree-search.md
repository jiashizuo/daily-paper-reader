---
title: "W2S-AlignTree: Weak-to-Strong Inference-Time Alignment for Large Language Models via Monte Carlo Tree Search"
title_zh: W2S-AlignTree：通过蒙特卡洛树搜索实现大语言模型的弱到强推理时对齐
authors: "Zhenyu Ding, Yuhao Wang, Tengyue Xiao, Haoying Wang, Guojun Ma, Mingyang Wan, Caigui Jiang, Ning Ding"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40306/44267"
tags: ["query:mlr"]
score: 7.0
evidence: 针对RLHF局限性，提出推理时对齐方法，使用MCTS
tldr: 该论文提出W2S-AlignTree框架，是一种即插即用的推理时对齐方法，结合蒙特卡洛树搜索与弱到强泛化，以解决强化学习从人类反馈在专家监督成本和可扩展性上的局限。传统RLHF在训练时开销大且缺乏动态控制，该框架在推理阶段实现精细对齐，无需额外专家标注，为LLM对齐提供了高效替代方案。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 训练时对齐方法如RLHF成本高、可扩展性差，且缺乏推理时动态控制。
method: 提出W2S-AlignTree框架，结合MCTS与弱到强泛化，实现即插即用的推理阶段对齐。
result: 实验证明了该框架在多种对齐任务上的有效性，优于基线方法。
conclusion: W2S-AlignTree提供了一种可扩展且自适应的推理时对齐机制，缓解了RLHF的瓶颈。
---

## Abstract
Large Language Models (LLMs) demonstrate impressive capabilities, yet their outputs often suffer from misalignment with human preferences due to the inadequacy of weak supervision and a lack of fine-grained control. Training-time alignment methods like Reinforcement Learning from Human Feedback (RLHF) face prohibitive costs in expert supervision and inherent scalability limitations, offering limited dynamic control during inference. Consequently, there is an urgent need for scalable and adaptable alignment mechanisms. To address this, we propose W2S-AlignTree, a pioneering plug-and-play inference-time alignment framework that synergistically combines Monte Carlo Tree Search (MCTS) with the Weak-to-Strong Generalization paradigm for the first time. W2S-AlignTree formulates LLM alignment as an optimal heuristic search problem within a generative search tree. By leveraging weak model's real-time, step-level signals as alignment proxies and introducing an Entropy-Aware exploration mechanism, W2S-AlignTree enables fine-grained guidance during strong model's generation without modifying its parameters. The approach dynamically balances exploration and exploitation in high-dimensional generation search trees. Experiments across controlled sentiment generation, summarization, and instruction-following show that W2S-AlignTree consistently outperforms strong baselines. Notably, W2S-AlignTree raises the performance of Llama3-8B from 1.89 to 2.19, a relative improvement of 15.9% on the summarization task.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLMs）的输出常与人类偏好对齐不足，现有训练时对齐方法（如RLHF和DPO）存在三大瓶颈：（1）依赖昂贵的大规模人工标注数据；（2）仅在训练阶段使用序列级、事后反馈，缺乏推理时实时细粒度控制；（3）随着模型规模增长，弱监督信号可能不足以对齐强模型（Weak‑to‑Strong Generalization 挑战）。
- **研究动机**：迫切需要一种可扩展、自适应的对齐机制，在不修改模型参数的前提下，在推理阶段实现动态、细粒度的对齐控制。
- **整体含义**：论文提出首个将蒙特卡洛树搜索（MCTS）与弱到强泛化（W2SG）范式结合的即插即用推理时对齐框架——W2S-AlignTree，将LLM对齐重新形式化为生成搜索树上的最优启发式搜索问题，有望缓解训练时对齐的高成本与低灵活性矛盾。

## 2. 论文提出的方法论

### 2.1 核心思想
- 将LLM对齐视为在**生成搜索树**上的最优搜索问题。利用一个已对齐的**弱模型**（weak model）提供实时的步骤级对齐代理信号（proxy value），引导**强模型**（strong model）的生成过程，而不改变强模型的参数。
- 采用**双阶段树搜索**：第一阶段用MCTS构建搜索树，依据弱模型代理值进行逐步指导；第二阶段对完整候选路径进行全局重排序，选出最优响应。

### 2.2 关键技术细节

#### （1）令牌级奖励分解与代理值函数
- 将序列级对齐奖励分解为令牌级对数似然比之和（公式4）：  
  \( r(x,y) = \beta \sum_{t=1}^{|y|} \log \frac{\pi^*(y_t|x,y_{<t})}{\pi_{\text{ref}}(y_t|x,y_{<t})} \)。
- 定义中间值函数 \( V^*(x, y') \)，表示部分序列 \( y' \) 的未来期望回报（公式5）。
- 弱到强代理映射：直接用弱对齐模型的 \( V_{\text{proxy}}(x, y') = \log \frac{\pi^*_{\text{weak}}(y'|x)}{\pi_{\text{ref,weak}}(y'|x)} \) 作为步骤级奖励信号（公式6），避免训练强模型的奖励模型。

#### （2）MCTS四个阶段
- **选择**：采用所提出的**熵感知PUCT（EA-PUCT）**选择规则（公式11），结合节点回报、先验概率和信息熵，动态调整探索与利用的平衡。
- **扩展**：从强模型的Top‑N预测分布中随机选取K个令牌，每个令牌生成长度为L的块（chunk），块长可调（L=1为令牌级，L>1为高维分支）。
- **评估**：对新节点 \( s' \) 计算 \( V_{\text{proxy}} \) 作为即时回报 \( R(s') \)，若节点终止（达到最大长度或生成EOS）则设回报为 \( -\infty \) 以避免重选。
- **反向传播**：父节点的回报更新为所有子节点回报的最大值（公式9），而非平均值，以保持最优路径，避免平均延迟。

#### （3）第二阶段：全局重排序
- 通过深度优先搜索收集所有完整序列，提取具有最高MCTS回报的候选路径，再用完整序列的对齐分数 \( r(x,y) = \log \frac{\pi^*_{\text{weak}}(y|x)}{\pi_{\text{ref,weak}}(y|x)} \) 进行全局重排序，选择分数最高的作为最终输出。若无终止节点，则选择MCTS回报最高的节点作为后备。

#### （4）EA-PUCT选择规则（公式11）
- 在标准PUCT基础上加入熵权项 \( (1 + w \cdot H(s)) \)：当模型分布熵高（不确定性大）时，增大探索奖励，鼓励多样性；熵低（模型自信）时压缩探索奖励，倾向于利用已知高回报路径。有效缓解MCTS在LLM对齐中的过早收敛问题。

## 3. 实验设计

| 任务 | 数据集 | 弱模型（指导信号） | 强模型（被对齐模型） | 评估指标 |
|------|--------|-------------------|----------------------|----------|
| 控制情感生成 | IMDB | GPT‑2 (124M) SFT + DPO | GPT2‑Large, GPT2‑XL, Llama2‑7b, Llama3‑8B, Qwen2.5‑7B 等共8个模型 | 金标准奖励模型得分 \( r_{\text{gold}} \)（越高越好） |
| 摘要 | TL;DR | 同上 | 同上 | 同上 |
| 指令遵循 | OASST1 | Llama‑3.2‑1B‑Instruct / Llama‑3.2‑1B（未经任务微调） | 同上 + Qwen2.5‑7B‑Instruct, Llama3‑8B‑Instruct, tulu2‑7b‑dpo 等 | 两个金标准奖励模型：oasst‑rm‑2‑pythia‑6.9b 和 UltraRM‑13b |

**对比基线**：
- Base model（强模型常规生成）
- Best‑of‑N (BoN)（后选择）
- Chunk‑level Beam Search (CBS)（推理时对齐）
- 部分任务还对比了DPO微调结果（附录C.1）

**消融实验**：设计了5个变体（N‑UCT, RT‑UCT, RT‑PUCT, CMB, MMB），验证最大回报反向传播、EA‑PUCT、熵干预等关键组件的作用。此外还分析了块长L和探索常数c的敏感性。

## 4. 资源与算力

论文**未明确说明**使用的GPU型号、数量及训练时长。由于W2S-AlignTree是推理时方法，不涉及强模型的参数更新，主要计算开销来自MCTS树搜索过程中的多次弱模型前向推理（每个节点一次）和强模型的前向推理（扩展阶段）。文中未给出具体的硬件配置或时间成本数据。

## 5. 实验数量与充分性

- **实验数量**：共涵盖3个任务（情感生成、摘要、指令遵循），每个任务在8个不同强模型上评估（部分模型还包含对齐版本）。指令遵循任务使用两个不同金标准奖励模型验证鲁棒性。消融实验在两个任务、两个代表性模型上进行。超参数敏感性分析（L和c）在两个任务上可视化（图4）。
- **充分性**：实验设计较为全面，涵盖了同族（GPT2）和跨族（Llama、Qwen、Tulu）模型、不同规模（1.5B~8B）及对齐/未对齐版本。评估指标为常用金标准奖励模型分数，公平性通过保持相同评分函数保证。消融实验清晰揭示了每个组件贡献。超参数分析表明方法在多个配置下稳定。
- **客观与公平**：基线方法包括当前主流推理时对齐方法（CBS）和后选择方法（BoN），且均使用同一评分函数。在指令遵循任务中还额外对比了DPO微调结果（附录C.1），展示推理时方法的优势。但未对比其他基于MCTS的推理时对齐方法（如MCTS‑DPO主要用于离线数据生成，而非推理时引导），可能稍欠完整。

## 6. 论文的主要结论与发现

1. W2S-AlignTree在所有三个任务上**持续且显著优于**所有基线，尤其在情感生成和摘要任务上提升明显（如Llama3‑8B在摘要任务上相对提升15.9%）。
2. 方法在**弱到强泛化**场景下有效：仅用124M参数的GPT‑2或1B参数的Llama‑3.2‑1B作为弱模型，即可有效引导7B~8B的强模型，无需强模型参数更新。
3. EA-PUCT选择规则和最大回报反向传播是提升搜索质量和对齐性能的关键，消融实验验证了其必要性。
4. 方法对超参数（块长L、探索常数c）具有一定鲁棒性，在合理范围内均能取得高表现。

## 7. 优点

- **创新性**：首次将MCTS与W2SG范式系统结合，将对齐问题形式化为搜索问题，开辟了推理时对齐的新视角。
- **实用性**：即插即用，无需修改强模型参数，无需额外训练奖励模型或RL采样，计算成本可控（仅需弱模型若干次前向推理）。
- **细粒度控制**：步骤级代理信号结合MCTS的探索能力，实现了比CBS等更灵活、更全局的搜索，避免局部最优。
- **通用性**：跨任务、跨模型族、跨规模均表现优异，弱模型选择灵活（无需专门为任务微调）。
- **理论支撑**：基于令牌级奖励分解和中间值函数的定义，为方法提供了严谨的理论基础。

## 8. 不足与局限

- **算力开销未量化**：虽然方法避免训练，但MCTS需要多次前向推理（相当于N次生成），实际推理时间开销未与基线方法比较（如BoN、CBS），可能导致公平性争议。
- **弱模型依赖**：弱模型的质量直接影响代理信号的可靠性。虽然实验使用了较小模型，但若弱模型本身对齐不佳，可能会误导强模型（文中未讨论失败案例）。
- **实验规模**：强模型最大为8B参数，未在更大模型（如13B、70B）上验证；指令遵循任务中仅使用了两个奖励模型评估，可能存在偏差。
- **搜索效率**：MCTS的迭代次数、块长选择等超参数需要调优，不同任务最佳配置不同（如情感生成推荐L=1，摘要推荐L>1），缺乏自适应调整机制。
- **与训练时方法的对比有限**：虽在附录中对比了DPO，但未对比更先进的训练时方法（如PPO、SimPO等），且DPO在部分任务上可能优于推理时方法（尤其是当有充足训练数据时），论文未充分讨论适用场景边界。
- **潜在偏差**：使用弱模型的代理值作为对齐目标，可能继承了弱模型的偏见或错误，尤其在开放域指令遵循中，弱模型本身可能不够可靠。

（完）

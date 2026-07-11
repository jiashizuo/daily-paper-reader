---
title: Incentivizing Safer Actions in Policy Optimization for Constrained Reinforcement Learning
title_zh: 在约束强化学习的策略优化中激励更安全的行为
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0592.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 约束强化学习保障安全性，与RLHF对齐直接相关
tldr: 本文提出一种在约束强化学习中激励更安全行为的方法。通过引入安全约束优化策略，在保持性能的同时显著降低不安全动作的发生率。该方法可直接应用于医疗大模型的安全对齐训练，帮助减少有害输出并提升真实性和可靠性。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 666, \"height\": 359, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 876, \"height\": 309, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 758, \"height\": 340, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1817, \"height\": 639, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 876, \"height\": 240, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1817, \"height\": 640, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1817, \"height\": 636, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 882, \"height\": 310, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 875, \"height\": 606, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-592/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 880, \"height\": 609, \"label\": \"Figure\"}]"
motivation: 强化学习智能体可能产生危险行为，需要确保安全约束。
method: 设计安全激励机制，将约束融入策略梯度优化中。
result: 在安全关键任务中实现了比基线更低的违规率。
conclusion: 为RLHF中的安全对齐提供了实用方法，适用于医疗AI的伦理合规。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）
- **问题**：在约束强化学习（Constrained RL）中，智能体需在最大化累积奖励的同时满足安全约束（如速度限制、避开危险区域）。现有方法（如拉格朗日法、投影法、惩罚函数法）常出现训练不稳定、靠近约束边界时振荡、或策略过于保守等问题。
- **动机**：设计一种能够**主动激励安全行为**而非仅在违规后惩罚的方法，使策略在满足约束的前提下高效优化奖励。举例：机器人需绕过池塘到达目标，最短路径风险高，而过度保守路径导致无法到达目标；需要平衡。
- **整体含义**：提出一种新的惩罚函数设计，将成本函数转化为安全区域内的正向激励，并在接近边界时平滑过渡为惩罚，从而稳定训练并提升安全-奖励权衡。

## 2. 方法论：核心思想、关键技术细节、公式/算法流程
- **核心思想**：使用**CELU（Continuously Differentiable Exponential Linear Unit）** 作为惩罚函数，代替传统ReLU或Leaky ReLU。CELU在负半轴具有指数衰减特性，能平滑地从激励（安全区域内）过渡到惩罚（违规时），且梯度连续，避免训练抖动。
- **关键技术细节**：
  - 定义损失函数：
    - 奖励损失 \( L_R(\pi_k) = -\mathbb{E}[r'(\theta) A^{\pi_k}_R(s,a)] \)
    - 成本损失 \( L_{C_i}(\pi_k) = \frac{1}{1-\gamma}\mathbb{E}[r''(\theta) A^{\pi_k}_{C_i}(s,a)] + (J_{C_i}(\pi_k) - d_i) \)
    - 总损失 \( L(\pi_k) = L_R(\pi_k) + \eta \sum_i \text{CELU}(L_{C_i}(\pi_k)) \)，其中 \(\eta > 0\) 为惩罚系数。
  - CELU定义：\(\text{CELU}(x,\alpha) = \alpha(\exp(x/\alpha)-1)\) for \(x<0\)，\(\text{CELU}(x,\alpha)=x\) for \(x\ge0\)。参数\(\alpha\)控制激励的饱和点（即最负值）。
  - 使用重要性采样比率 \(r(\theta)\) 并做clip，采用PPO风格的信任区域更新。
- **算法流程**（Algorithm 1）：
  1. 初始化策略和价值函数。
  2. 每轮采样N条轨迹。
  3. 计算奖励和成本的优势函数。
  4. 更新价值函数。
  5. 根据总损失更新策略（梯度下降），并使用KL散度或PPO clip确保更新幅度。
- **理论保证**：Theorem 1证明在满足Slater条件下，若 \(\eta \ge \|\lambda^*\|_\infty\)，则优化 \(L(\pi_k)\) 可收敛到原约束问题的解。Theorem 2给出了最优性误差的上界，由KL散度、优势函数范数和CELU参数决定。

## 3. 实验设计：数据集/场景、Benchmark、对比方法
- **环境与场景**：
  - **MuJoCo Safety Velocity**：Ant, HalfCheetah, Humanoid, Swimmer – 控制机器人速度，约束上限25。
  - **Safety Gymnasium**：Goal和Button任务 – 导航至目标同时避开危险区域，约束上限25。
  - **Bullet Safety Gymnasium**：BallCircle, CarCircle, BallReach, CarReach – 圆形运动或抓取任务，约束上限25。
  - **MetaDrive**（多智能体）：自动驾驶合作场景，多车辆需避免碰撞和偏离道路。
- **Benchmark**：与9种state-of-the-art方法对比：
  - 一阶方法：CUP, FOCOPS
  - 拉格朗日方法：CPPOPID, PPO+Lagrangian
  - 二阶方法：CPO, PCPO
  - 惩罚函数方法：IPO, P3O
  - 基线：vanilla PPO
- **实现来源**：所有基线来自OmniSafe库。

## 4. 资源与算力
- **文中未明确说明**所使用的GPU型号、数量及训练时长。仅提到训练轮次（如MetaDrive训练2000个episode），但未提及具体硬件。因此无法评估算力开销细节。

## 5. 实验数量与充分性
- **实验数量**：共涉及4大环境系列，每个系列包含2-4个子任务，总计约12个不同场景。此外进行了两组消融实验（α参数在HalfCheetah/Humanoid上的影响；成本上限d在PointGoal1/CarGoal1上的影响）。
- **充分性与公平性**：
  - 结果以折线图（奖励和成本随时间变化）展示，直观比较了各方法的收敛性和约束满足度。
  - 每个方法在相同条件下运行，未看到超参调优的详细比较，但文中提到各方法使用标准实现。
  - 多智能体MetaDrive实验中，与MAPPO和MAP3O对比，表明可扩展性。
  - 消融实验验证了关键超参α和d的影响，论证了参数选择的重要性。
  - 总体实验覆盖面较广，但缺少统计显著性检验（如多次随机种子的区间估计），且未报告失败案例。

## 6. 论文主要结论与发现
- **IP3O在多数场景下**实现了**更低的约束违规**（图7汇总），同时在奖励上保持与最佳方法相当或略低，体现了更好的安全-奖励平衡。
- 相比之下，现有方法（如FOCOPS, PCPO）虽有时获得更高奖励，但常违反约束；IPO和P3O等惩罚方法则因梯度突变导致奖励次优。
- CELU的平滑过渡有效缓解了训练振荡，使策略能稳定地停留在安全区域附近。
- 多智能体场景下，MAIP3O在奖励上接近基线，同时保证了安全。

## 7. 优点
- **方法创新**：将CELU首次引入约束RL，实现从“激励”到“惩罚”的平滑过渡，而非在违规后突然惩罚。
- **理论分析**：提供了最优性等价性证明和误差上界，增强了方法可信度。
- **实验充分**：覆盖多种连续控制环境（机器人、导航、多车），并与众多代表性基线对比，验证了通用性。
- **可调性**：通过α参数可灵活控制安全严格度，适应不同任务需求。
- **代码开源**：提供GitHub仓库，可复现。

## 8. 不足与局限
- **算力消耗未报告**：无法评估计算效率是否优于其他方法（尤其二阶方法CPO计算量大，而IP3O为一阶，理论上应更轻量，但未验证）。
- **实验统计鲁棒性不足**：未提供多次种子运行的标准差或置信区间，仅展示单次或平均曲线，可能掩盖方差。
- **约束上限固定**：仅在d=25下测试大部分环境，仅对两个环境做了d消融，泛化性尚不充分。
- **多智能体场景简化**：MetaDrive仅用了2000 episode训练，虽结果可行，但相比于单智能体实验可能不够深入（未与更先进的多智能体安全算法比较）。
- **环境复杂性限制**：Safety Gymnasium中α=0.1时约束违规稍高于最佳方法（图7），暗示在严格安全需求下可能需要更高α，但可能牺牲回报，未充分讨论最优折衷策略。
- **理论假设局限**：Slater条件在实际问题中可能不满足；Theorem 1的证明基于强对偶，但实际优化常非凸，可能影响保证的有效性。

（完）

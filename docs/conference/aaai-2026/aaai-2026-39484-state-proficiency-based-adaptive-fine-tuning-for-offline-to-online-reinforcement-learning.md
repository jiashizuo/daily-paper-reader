---
title: State Proficiency-Based Adaptive Fine-Tuning for Offline-to-Online Reinforcement Learning
title_zh: 基于状态熟练度的离线到在线强化学习自适应微调
authors: "Songlin Li, Wei Xiao, Hao Wu, Xiaodan Zhang, Daolong An, Shuai Lü"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/39484/43445"
tags: ["query:mlr"]
score: 5.0
evidence: 离线到在线强化学习的自适应微调方法
tldr: 针对离线到在线强化学习微调中忽略样本差异的问题，提出基于状态熟练度的自适应微调方法（SPA），根据各状态的学习效果动态调整微调策略。在多个连续控制任务上实现了更高效的性能提升和稳定训练。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有离线到在线方法未考虑不同状态的学习效果差异，微调效率低。
method: 引入状态熟练度概念，根据状态熟练度自适应调整策略约束和优化权重。
result: 在MuJoCo等基准上，SPA在效率和稳定性方面优于现有方法。
conclusion: 状态自适应微调可提升离线到在线强化学习的性能。
---

## Abstract
In offline-to-online (O2O) reinforcement learning, achieving efficient performance improvement while maintaining training stability remains a critical challenge for effective fine-tuning. Existing O2O methods usually focus on the balance between policy improvement and policy constraint during online fine-tuning. However, they often overlook sample differences, leading to suboptimal performance. To address this challenge, we identify that  the effectiveness of policy learning exhibits significant variation across states. Therefore, we propose the notion of state proficiency to capture the degree of effective learning in a given state. We propose State Proficiency-Based Adaptive Fine-Tuning (SPA), a straightforward yet effective method that establishes proficiency-based sample priorities in policy optimization to facilitate effective fine-tuning. Specifically, SPA focuses on low proficiency samples during policy improvement to enhance sample efficiency, while emphasizing high proficiency samples during policy constraint to ensure stable training. Extensive empirical results demonstrate that SPA achieves significant improvements over existing methods, attaining state-of-the-art performance on the D4RL benchmark.

---

## 论文详细总结（自动生成）

# 基于状态熟练度的离线到在线强化学习自适应微调（SPA）——详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **问题背景**：离线强化学习（Offline RL）利用固定数据集学习策略，但性能受限于数据集质量。离线到在线（O2O）强化学习范式通过在线微调进一步提升策略性能。然而，现有O2O方法（如直接应用在线算法或离线算法）面临两大挑战：训练不稳定（分布偏移导致性能波动）和性能提升缓慢（过度保守阻碍改进）。
- **核心问题**：现有方法往往对所有样本采用统一的策略改进与约束平衡，忽略了**不同状态下策略学习效果存在显著差异**。例如，数据集覆盖充分且动作质量高的状态，策略学习效果好（高熟练度）；而分布外或子优动作的状态，策略学习效果差（低熟练度）。因此，需要一种能感知样本差异的自适应微调方法。
- **整体含义**：论文提出**状态熟练度（State Proficiency）** 概念，用以刻画策略在给定状态下的学习有效程度，并基于此设计自适应微调方法SPA，实现更高效、更稳定的性能提升。

## 2. 论文提出的方法论

### 2.1 核心思想
- 利用**状态熟练度**指导策略优化中的样本优先级：  
  - 对**低熟练度样本**，增大**策略改进**权重，加速性能提升。  
  - 对**高熟练度样本**，增大**策略约束**权重，保持训练稳定。
- 方法基于TD3+BC骨干算法，通过动态调整每个样本的约束系数实现自适应。

### 2.2 关键技术细节
1. **状态熟练度评估（State Proficiency Assessment）**  
   - **动作比较分类**：采用参考策略π_ref和Q值函数构造分类阈值σ(s)=Q(s, π_ref(s))。若学习策略π在状态s下的Q值≥σ(s)，则归为高熟练度样本集S_HP，否则为低熟练度S_LP。  
   - **双阈值机制（Dual Thresholds）**：针对离线数据和在线数据分别使用不同参考策略：  
     - 离线数据：使用冻结的离线策略π_off（较低阈值），增加高熟练度比例，促进保守训练。  
     - 在线数据：使用历史最优策略π_opt（较高阈值），增加低熟练度比例，促进激进学习。  
   - **基于值函数的分类修正（Value-based Classification Correction）**：训练状态值函数V^π来近似Q值的平均，对初始高熟练度样本中Q(s,π)<V(s)的样本纠正为低熟练度，缓解Q值过估计导致的误分类。

2. **基于熟练度的自适应策略约束（Proficiency-based Adaptive Policy Constraint）**  
   - 策略优化损失函数（基于TD3+BC）：  
     \[
     L_{\pi}^{SPA} = \mathbb{E}_{(s,a)\sim D}\left[ -\lambda Q_\theta(s,\pi_\phi(s)) + \omega_s (\pi_\phi(s)-a)^2 \right]
     \]
   - 自适应权重ω_s：高熟练度样本ω_s=η（超参数），低熟练度样本ω_s=0。  
   - 注意：此处λ与TD3+BC一致，实际效果等价于动态调整改进/约束的样本级平衡。

3. **算法流程（Algorithm 1）**：  
   - 输入：预训练策略π_offline、Q函数、V函数、离线数据集D_offline、超参数η。  
   - 初始化在线缓冲区D_online，π_opt←π_0。  
   - 每轮：收集在线数据→采样小批量B→更新Q和V→使用双阈值和修正分类B为S_HP、S_LP→计算ω_s→更新π。

## 3. 实验设计

### 3.1 数据集与场景
- **D4RL基准**：  
  - Locomotion任务（MuJoCo）：hopper、walker2d、halfcheetah，每个含四种质量等级（random、medium、medium-replay、medium-expert），共12个任务。  
  - Maze2D导航任务：6种配置（umaze、medium、large，及其dense版本）。

### 3.2 benchmark对比
- **离线到在线方法**：PEX、Cal-QL、CPR、O2TD3、FamO2O。  
- **在线RL方法**：TD3。  
- **离线RL方法**：TD3+BC。  
- 注意：FamO2O和PEX使用IQL预训练，Cal-QL使用CQL预训练，其余使用TD3+BC预训练（与SPA一致）。

### 3.3 训练协议
- 离线预训练：1M步。  
- 在线微调：0.3M步（300k）。  
- 结果：5个随机种子平均，报告最终性能及学习曲线。

## 4. 资源与算力

- 论文中**未明确说明使用的GPU型号、数量、训练时长**等具体算力信息。仅提及代码已开源，基于官方实现。

## 5. 实验数量与充分性

- **实验数量**：  
  - 主实验：Locomotion 12个任务 + Maze2D 6个任务，共18组对比。  
  - 消融实验：  
    - 随机熟练度评估（random-SPA）——验证分类有效性。  
    - 双阈值 vs 单阈值（SPA-LTh、SPA-HTh）——验证双阈值必要性。  
    - 基于值函数的修正（SPA-SA无修正、SPA-RC随机修正）——验证修正的贡献。  
  - 附加分析：政策约束比例统计、分类精度/召回率计算（基于真实Q值标签）。
- **充分性**：实验覆盖多种难度和类型（稀疏奖励/稠密奖励、不同数据质量），对比基线全面（5种最新O2O方法），消融设计控制了变量（如保持约束比例一致）。结果图表清晰，统计合理（5种子平均）。  
- **客观性**：所有实验采用相同测试协议，消融中设置公平对比（如随机SPA匹配高熟练度比例），结果展示了SPA在17/18个任务上最优，且提升幅度大，结论可信。

## 6. 论文的主要结论与发现

- **主要结论**：SPA在D4RL Locomotion和Maze2D任务上均取得**最先进（SOTA）性能**，性能提升率分别为64.6%（Locomotion）和207.9%（Maze2D），显著优于最佳基线（42.3%和173.0%）。  
- **关键发现**：  
  - 状态熟练度差异真实存在且可有效利用。  
  - 双阈值机制能合理区分离线/在线数据，实现保守与激进平衡。  
  - 基于值函数的分类修正能提高熟练度评估精度，避免Q值过估计带来的误分类。  
  - 自适应策略约束能动态匹配样本学习状态，实现持续稳定且高效的微调。

## 7. 优点

1. **创新性**：首次提出“状态熟练度”概念并应用于O2O RL，将样本级差异纳入策略优化，克服了统一平衡的局限性。  
2. **方法简洁有效**：基于现有TD3+BC骨干，仅增加少量计算（状态值函数训练），但性能大幅提升。  
3. **实验设计严谨**：  
   - 消融实验设置了多种变体（随机分类、单阈值、无修正、随机修正），并控制变量（如约束比例一致）。  
   - 额外计算了分类精度/召回率，从机制上验证了修正的有效性。  
4. **结果全面**：在18个任务上验证，涵盖不同环境、数据质量和奖励密度，结论泛化性强。  
5. **代码开源**：便于复现。

## 8. 不足与局限

1. **训练失败案例**：在walker2d-random任务上，SPA出现训练失败（性能降至0.2），作者归因于离线预训练时Q值爆炸，导致熟练度评估被破坏。说明方法对离线预训练质量有一定敏感性。  
2. **资源与算力未报告**：未提及GPU型号、训练时间等，不利于其他研究者估算成本。  
3. **超参数η依赖**：高熟练度样本约束权重η作为超参数，缺少对其敏感性的讨论（虽然作者在附录可能提及，但正文未详述）。  
4. **应用限制**：方法基于TD3+BC，假设连续动作空间；对于离散动作或高维图像任务未测试，通用性待验证。  
5. **仅与部分基线对比**：虽然基线较新，但未包含近期其他代表性方法（如IQL+在线、CQL+在线等变体），但已覆盖主流。  
6. **在Maze2D上Cal-QL完全失败**，导致缺少此类对比，但其他基线足够。

（完）

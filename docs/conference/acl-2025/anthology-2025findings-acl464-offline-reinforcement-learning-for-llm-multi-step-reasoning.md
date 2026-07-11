---
title: Offline Reinforcement Learning for LLM Multi-step Reasoning
title_zh: 面向LLM多步推理的离线强化学习
authors: "Huaijie Wang, Shibo Hao, Hanze Dong, Shenao Zhang, Yilin Bao, Ziran Yang, Yi Wu"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.464.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 用于增强LLM多步推理的离线强化学习方法
tldr: 针对多步推理任务中稀疏奖励和信用分配问题，提出名为OREO的离线强化学习方法。该方法利用最大熵原理优化策略，无需配对偏好数据，显著提升了LLM在多步推理基准上的表现，为强化学习微调提供了新思路。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.464/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1469, \"height\": 467, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.464/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 816, \"height\": 395, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.464/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 811, \"height\": 361, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.464/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 426, \"height\": 329, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.464/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 420, \"height\": 305, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.464/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 972, \"height\": 449, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.464/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 584, \"height\": 352, \"label\": \"Table\"}]"
motivation: DPO不适合多步推理，需要离线RL方法来处理稀疏奖励和信用分配。
method: 提出OREO，基于最大熵原理的离线强化学习方法，优化LLM的多步推理策略。
result: 在多个多步推理数据集上，OREO优于DPO和基准方法。
conclusion: OREO有效提升了LLM的多步推理能力，验证了离线RL在此任务上的潜力。
---

## Abstract
Improving the multi-step reasoning ability of large language models (LLMs) with offline reinforcement learning (RL) is essential for quickly adapting them to complex tasks. While Direct Preference Optimization (DPO) has shown promise in aligning LLMs with human preferences, it is less suitable for multi-step reasoning tasks because (1) DPO relies on paired preference data, which is not readily available for multi-step reasoning tasks, and (2) it treats all tokens uniformly, making it ineffective for credit assignment in multi-step reasoning tasks, which often come with sparse reward. In this work, we propose OREO (Offline REasoning Optimization), an offline RL method for enhancing LLM multi-step reasoning. Building on insights from previous works of maximum entropy reinforcement learning, it jointly learns a policy model and value function by optimizing the soft Bellman Equation. We show in principle that it reduces the need to collect pairwise data and enables better credit assignment. Empirically, OREO surpasses existing offline learning methods on multi-step reasoning benchmarks, including mathematical reasoning tasks (GSM8K, MATH), and embodied agent control (ALFWorld). The approach can be extended to a multi-iteration framework when additional resources are available. Furthermore, the learned value function can be leveraged to guide the tree search for free, which can further boost the performance during test time.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：大型语言模型（LLM）在多步推理任务（如数学问题求解、具身智能体控制）中表现优异，但通过离线强化学习（RL）提升其推理能力是一个关键挑战。现有方法如直接偏好优化（DPO）在人类偏好对齐中有效，但不适用于多步推理，因为：
  - DPO需要成对偏好数据，而多步推理任务中通常只有带稀疏奖励（成功/失败）的独立轨迹，难以获取配对数据。
  - DPO对所有token平等处理，无法进行细粒度信用分配（credit assignment），而多步推理的正确性往往取决于少数关键步骤。
- **整体目标**：提出一种不依赖配对数据、能进行细粒度信用分配的离线RL方法，有效提升LLM的多步推理能力，并利用学习到的价值函数在测试时通过搜索进一步提升性能。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：基于最大熵强化学习（maximum entropy RL）中的**软贝尔曼方程（Soft Bellman Equation）**，联合学习策略模型（policy model）和价值函数（value function），避免了DPO对配对数据的依赖，同时实现token级别的信用分配。
- **关键技术细节**：
  - **MDP定义**：将LLM推理建模为马尔可夫决策过程（MDP），状态为已生成token序列，动作为生成下一个token，奖励仅在终止步骤非零（稀疏奖励）。
  - **软贝尔曼方程**：最优策略和价值函数满足 \( V^*(s_t) - V^*(s_{t+1}) = r(s_t, a_t) - \beta \log \frac{\pi^*(a_t|s_t)}{\pi_{\text{ref}}(a_t|s_t)} \)。
  - **学习目标**：
    - 价值网络损失 \( \mathcal{L}_V(\phi) \)：MSE损失，使价值函数预测与未来折扣奖励加KL正则项一致。
    - 策略网络损失 \( \mathcal{L}_\pi(\theta) \)：基于软贝尔曼方程的残差平方和，并加入KL正则化项 \( \alpha \mathcal{L}_{\text{reg}} \) 保持与参考策略接近。
  - **三种变体**：token级（标准OREO）、step级（将整个推理步骤视为动作）、response级（仅考虑初始状态，类似DRO）。
  - **迭代扩展**：可进行多轮迭代：每轮用当前策略收集新数据，再训练新模型。
  - **测试时搜索**：利用训练好的价值函数引导步骤级beam search（数学推理）或best-of-K动作选择（具身控制），无需额外训练。

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：
  - **数学推理**：GSM8K（小学算术，7473训练/1319测试）、MATH（竞赛级，7500训练/5000测试）。
  - **具身智能体控制**：ALFWorld（家庭任务，140个已见环境任务、134个未见环境任务）。
- **基准**：无。
- **对比方法**：
  - 监督微调（SFT）
  - 拒绝采样（Rejection Sampling / STaR / RAFT）
  - DPO
  - KTO（基于前景理论的DPO变体，支持非配对数据）
- **模型**：
  - 数学推理：Qwen2.5-Math-1.5B、DeepSeekMath-7B-Instruct
  - 具身控制：MiniCPM-2B-dpo-bf16

## 4. 资源与算力

- 论文**未明确说明**所使用的GPU型号、数量及训练时长。仅在实现细节中提及使用LoRA（rank=64）进行值网络训练以节省计算资源，以及batch size为128等。未提供具体算力成本。

## 5. 实验数量与充分性

- **实验数量**：
  - 主实验：两个数学数据集（GSM8K, MATH）× 两个模型大小（1.5B, 7B），共4个配置；一个具身控制数据集（ALFWorld）× 一个模型。
  - 消融实验：OREO的三种变体（token级、step级、response级）对比（图5）。
  - 迭代实验：在GSM8K和MATH上展示3轮迭代性能（图2）。
  - 测试时搜索实验：在MATH子集（MATH500）上进行beam search（图3），在ALFWorld上进行best-of-K（图4）。
  - 案例研究：显式与隐式价值函数的可视化对比（图1）。
  - 总计约8-10组不同角度实验。
- **公平性与客观性**：
  - 与SFT、拒绝采样、DPO、KTO进行了公平比较，超参数在附录中有详细说明。
  - 使用标准评估脚本（DeepSeekMath的答案提取）确保结果可复现。
  - 但缺少与在线RL方法（如PPO）的对比，也未在更大规模模型（>7B）上验证。
  - 实验较为充分，但可能受限于算力，部分实验仅使用1.5B模型。

## 6. 论文的主要结论与发现

- OREO在GSM8K、MATH和ALFWorld上**一致优于所有基线方法**，包括DPO和拒绝采样。
  - 在Qwen-1.5B上，GSM8K相对SFT提升5.2%，MATH提升10.5%；在DeepSeekMath-7B上仍能带来显著提升（GSM8K +3.6%，MATH +5.1%）。
  - 在ALFWorld未见环境中，OREO比SFT提升17.7%相对成功率高。
- 迭代OREO能持续改进性能，而拒绝采样在第三轮趋于饱和。
- 显式价值函数优于DPO的隐式价值函数，能更准确地区分正确/错误推理步骤。
- 测试时使用价值函数引导的搜索（beam search / best-of-K）能显著提升性能（MATH上相对提升17.9%）。
- Token级OREO优于response级变体，验证了细粒度信用分配的重要性。

## 7. 优点

- **方法新颖性**：将最大熵RL中的软贝尔曼方程应用于LLM多步推理，无需配对偏好数据，解决了DPO的两大局限性。
- **原理严谨**：理论证明了软贝尔曼方程的最优性，并与DPO进行了清晰的对比分析。
- **实用性强**：价值函数为免费副产品，可直接用于测试时搜索，无需额外训练PRM。
- **实验全面**：覆盖数学推理和具身控制两类任务，包括不同模型大小、迭代实验、消融、案例研究。
- **可扩展性**：支持迭代框架和多种loss变体。

## 8. 不足与局限

- **计算资源限制**：论文明确承认由于计算资源有限，部分实验（如迭代、搜索、消融）仅用1.5B模型进行，未在更大规模（如7B以上）上充分验证。
- **任务覆盖不足**：仅评估了数学推理和ALFWorld，未在编程、网页导航等其他多步推理任务上验证。
- **缺少在线RL对比**：未与PPO等在线方法比较，无法说明离线方法的绝对优势。
- **潜在偏差风险**：ALFWorld的训练数据来自（Song et al., 2024）的注释，可能引入数据偏差。
- **实现复杂性**：需要训练额外的价值网络（可能使用LoRA），相比拒绝采样和DPO更复杂。
- **超参数敏感性**：需要调节β和α，不同变体需不同α值（见附录），但论文未提供充分的敏感性分析。

（完）

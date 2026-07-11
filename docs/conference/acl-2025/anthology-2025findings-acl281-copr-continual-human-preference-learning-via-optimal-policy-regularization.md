---
title: "COPR: Continual Human Preference Learning via Optimal Policy Regularization"
title_zh: COPR：通过最优策略正则化的持续人类偏好学习
authors: "Han Zhang, Lin Gui, Yu Lei, Yuanzhao Zhai, Yehong Zhang, Zhuo Zhang, Yulan He, Hui Wang, Yue Yu, Kam-Fai Wong, Bin Liang (梁斌), Ruifeng Xu (徐睿峰)"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.281.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 用于持续人类偏好学习的RLHF方法
tldr: 针对RLHF中持续学习人类偏好时模型生成多样性下降和偏好概率差距过大的问题，提出COPR方法。通过最优策略正则化，COPR在保持生成多样性的同时持续对齐人类偏好，避免了模型坍缩，为在线持续RLHF提供了有效方案。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.281/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 764, \"height\": 415, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.281/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 799, \"height\": 356, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.281/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 366, \"height\": 371, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.281/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 382, \"height\": 374, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.281/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 669, \"height\": 454, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.281/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 734, \"height\": 484, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.281/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 802, \"height\": 536, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.281/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1650, \"height\": 580, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.281/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 651, \"height\": 205, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.281/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 793, \"height\": 206, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.281/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 798, \"height\": 300, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.281/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1655, \"height\": 419, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.281/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1705, \"height\": 1038, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.281/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1701, \"height\": 1596, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.281/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1705, \"height\": 1879, \"label\": \"Table\"}]"
motivation: 现有RLHF方法难以持续学习人类反馈，DPO结合经验回放会导致模型坍缩。
method: 提出COPR，利用最优策略正则化约束偏好学习过程，保持生成多样性。
result: 在持续偏好学习场景中，COPR优于DPO和RLHF基线，生成多样性更高。
conclusion: COPR有效解决了RLHF中的持续学习问题，具有实际部署价值。
---

## Abstract
Reinforcement Learning from Human Feedback (RLHF) is effective for aligning Large Language Models (LLMs) with human preferences. However, RLHF’s complex process limits its ability to continually learn human feedback, making it impractical for real-world applications where the deployed model continuously receives feedback from users. The non-RL-based method, such as Direct Preference Optimization (DPO), is not primitively favorable for Continual Learning (CL). We observe that when combined with Experiment Relay (ER) for CL, DPO tends to significantly widen the gap in the probability of human-preferred and dispreferred responses. Consequently, this diminishes the diversity in model generation, potentially leading to model collapse. To overcome the above challenges, we propose the Continual Optimal Policy Regularization (COPR), a novel non-RL offline method to convert the historical optimal policies into optimization constraints when continually learning new preferences. We first derive a moderate reward function from the pairwise ranking loss and then use the moderate reward to calculate a new sampling distribution to construct novel learning objectives and constraints. We also provide formal proof of the learnability of COPR. The experimental results show that COPR outperforms strong CL baselines on our proposed benchmark, in terms of reward-based, GPT-4 evaluations and human assessment.

---

## 论文详细总结（自动生成）

## 论文详细中文总结

### 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：大型语言模型（LLM）在真实应用中需要持续适应人类偏好（Continual Alignment），而现有对齐方法（如 RLHF、DPO）在持续学习场景中面临严重挑战：
  - RLHF 的多阶段流程计算开销大、灵活性差，难以增量更新。
  - DPO 等离线方法尽管免去了强化学习，但直接结合经验回放（Experience Replay, ER）时会导致**偏好概率差距急剧扩大**（preferred 与 dispreferred 响应概率趋向 0/1），进而造成**生成多样性下降**，甚至模型坍缩（Preference Collapse）。
- **整体含义**：提出一种新的持续偏好学习框架 COPR，在不依赖强化学习循环的前提下，通过**最优策略正则化**平衡新旧偏好，同时保持模型输出多样性，使 LLM 能在真实场景中高效、稳定地适应动态用户反馈。

### 2. 方法论

- **核心思想**：利用历史最优策略作为约束，指导新偏好任务的训练，防止灾难性遗忘，并通过**温和奖励函数（Moderate Reward Function, MRF）** 控制偏好概率在合理区间内，避免极端分化。
- **关键技术细节**：
  1. **采样分布参数化**：定义策略的采样分布 \( P_t^*(y|Y_x) = \frac{\pi_{t-1}(y|x)\exp(\frac{1}{\beta}r^{(t)}(x,y))}{\sum_{y'\in Y_x}\pi_{t-1}(y'|x)\exp(\frac{1}{\beta}r^{(t)}(x,y'))} \)，避免计算配分函数 \(Z_t(x)\)，并证明在充分采样下拟合该分布等价于直接学习最优策略。
  2. **温和奖励函数（MRF）**：从 Bradley-Terry 模型的梯度推导出奖励值与偏好排名近似线性；利用 Beta 分布采样奖励范围，构造线性有界优势函数 \(Adv(x, y_{x_j}) = r_x \cdot \left( \frac{2}{J_x-1}j - \frac{J_x+1}{J_x-1} \right)\)，确保最优策略概率保持在合理区间，避免退化为 0/1。
  3. **学习目标与约束**：
     - 当前任务拟合损失：\( J_t^{\text{fit}}(\theta) = \mathbb{E}_{x\sim D_t} \sum_{y\in Y_x} |Y_x|^{-1} [\log P_\theta(y|Y_x) - \log P_t^*(y|Y_x)]^2 \)（选用 MSE 而非 KL 散度，以防未见过响应权重过小）。
     - 历史任务约束：\( J_{C_i}(\theta) = \mathbb{E}_{x\sim R_i} \sum_{y\in Y_x} |Y_x|^{-1} [\log P_\theta(y|Y_x) - \log P_i^*(y|Y_x)]^2 - d_i \)，基于记忆缓冲区的采样分布约束。
     - 同时加入 SFT 损失（NLL on top-1 响应）以提升文本流畅性。
  4. **拉格朗日对偶优化**：将带约束问题转化为 min-max 形式 \(\min_\theta \max_{\lambda \ge 0} [J_t(\theta) + \lambda \cdot J_C(\theta)]\)，通过交替更新 \(\lambda\)（梯度上升）和 \(\theta\)（梯度下降）动态平衡新旧偏好。
- **算法流程**（文字说明）：
  - 对每个任务 \(T_t\)，从历史任务中维护记忆缓冲区 \(R\)。
  - 计算当前任务的最优采样分布 \(P_t^*\)。
  - 利用 MRF 计算奖励，构造拟合损失 \(J_t\) 和历史约束 \(J_C\)。
  - 通过拉格朗日对偶迭代优化模型参数 \(\theta\) 和乘子 \(\lambda\)，直至收敛。

### 3. 实验设计

- **数据集/场景**：
  - **任务增量学习（TIL-HF）**：三个任务依次学习——HH-RLHF（问答）、Reddit TL;DR（摘要）、IMDB（文本续写，正向情感）。
  - **领域增量学习（DIL-HF）**：Stanford SHP 数据集（18 个领域，分为 3 组，每组 6 个领域）。
- **Benchmark 设计**：
  - 评估指标：平均准确率（AA）、平均增量准确率（AIA）、遗忘度量（FM）、反向迁移（BWT）。
  - 偏好度量：HH-RLHF 用 SteamSHP，Reddit TL;DR 用 GPT-j，IMDB 用 DistilBERT；此外还采用 GPT-4 评分和人工评估。
- **对比方法**：
  - SFT 系列（in order、multi-task、Online L2Reg、EWC、DER++）。
  - 对齐基线（均结合 Experience Replay）：DPO+ER、IPO+ER、RRHF+ER、CoH+ER、SPIN+ER。
  - 在线 RL 方法：Iterated RLHF（上界）、CPPO（learn）。
- **实验结果概要**：
  - COPR 在 TIL-HF 上 AA 达到 0.778，AIA 0.847，优于所有非 RL 基线，接近 Iterated RLHF（0.867/0.XXX）。
  - COPR 在 DIL-HF 上 AA 0.877，AIA 0.872，与 CPPO（0.890/0.894）相当且优于 DPO+ER。
  - 生成多样性指标（Distinct-2、MSTTR、Entropy、self-BLEU）显示 COPR 显著优于 DPO+ER，接近人工水平。
  - GPT-4 与人工评估在相关性、helpfulness、正确性、连贯性、安全性五维度均偏好 COPR。

### 4. 资源与算力

论文中**未明确说明**训练使用的 GPU 型号、数量、总训练时长。仅提到实验基于 Llama-7B 模型，但未提供具体算力开销细节。

### 5. 实验数量与充分性

- **实验数量**：共包括两组主要场景（TIL-HF 和 DIL-HF），TIL-HF 中对比了 12 个基线，DIL-HF 中对比了 8 个基线。
- **消融实验**：在 TIL-HF 上做了 5 组消融（移除 \(J_t^{\text{fit}}\)、移除 \(J_{C_i}\)、替换 \(J_{C_i}\) 为 ER、移除 \(J_t^{\text{sft}}\)、移除拉格朗日对偶），全面验证各组件贡献。
- **充分性与公平性**：
  - 实验覆盖了主流对比方法（排名类、语言类、对抗训练类、在线 RL），且对上界 Iterated RLHF 进行了比较。
  - 消融实验系统剖析了关键设计。
  - 评价上采用多种自动指标 + GPT-4 + 人工，从多维度验证。
  - 人工评估基于 GPT-4 结果修正，减少偏差；GPT-4 评分采用双向提示消除顺序偏见。
  - **总体而言，实验较为充分、客观、公平**，但缺少对更大模型（如 Llama-13B/70B）或更多任务序列（>3）的验证，泛化性有待扩展。

### 6. 主要结论与发现

- COPR 在持续偏好学习中显著优于现有离线方法（DPO/IPO/RRHF + ER），性能接近 retrain 的 Iterated RLHF。
- COPR 有效解决了 DPO+ER 导致的**概率差距膨胀**和**生成多样性下降**问题，通过温和奖励和最优策略约束保持模型输出多样性。
- 拉格朗日对偶优化比固定权重（如 λ≡1）更灵活，能动态平衡新旧任务。
- 理论证明充分采样下拟合采样分布等价于拟合最优策略，并分析了采样不足时的下界风险。

### 7. 优点

- **方法创新**：将最优策略理论引入持续学习，使用采样分布替代直接拟合避免配分函数，思想新颖。
- **实用性强**：无需训练奖励模型，离线学习，计算开销低，适合实际部署场景。
- **理论支撑**：提供了采样分布与最优策略等价的证明、KL 散度下界分析、MRF 梯度推导，理论扎实。
- **实验严谨**：多基准、多角度评估（自动/GPT-4/人工），消融实验设计全面，结论可信度高。
- **开源贡献**：发布了 TIL-HF 和 DIL-HF 基准，便于后续研究比较。

### 8. 不足与局限

- **实验规模限制**：仅基于 Llama-7B，未验证更大模型（70B+）或更长任务序列（>3）的表现，泛化性待考证。
- **算力细节缺失**：未报告 GPU 型号、数量、训练时间，不利于复现和工业界成本评估。
- **数据偏差风险**：仅使用单一语言（英语）偏好数据集，可能受特定文化和社会规范影响，不具备跨文化普适性。
- **潜在负面应用**：对齐技术可能被用于政治操控等恶意场景，论文未探讨对策。
- **记忆缓冲区依赖性**：仍需要一定量的历史样本（5% ER），在隐私或存储受限场景下可能受限。

（完）

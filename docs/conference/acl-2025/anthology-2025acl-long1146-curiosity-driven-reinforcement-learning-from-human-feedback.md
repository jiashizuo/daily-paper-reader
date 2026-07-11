---
title: Curiosity-Driven Reinforcement Learning from Human Feedback
title_zh: 好奇心驱动的强化学习人类反馈
authors: "Haoran Sun, Yekun Chai, Shuohuan Wang, Yu Sun, Hua Wu (吴华), Haifeng Wang"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.1146.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 好奇心驱动的RLHF以兼顾多样性与对齐
tldr: RLHF常以牺牲输出多样性换取对齐质量。本文提出好奇心驱动RLHF（CD-RLHF），在传统外部奖励基础上增加对新颖状态的内在奖励，在文本摘要和指令遵循任务上显著提升多样性同时保持或改善对齐质量。该工作为RLHF中多样性-对齐权衡提供了创新解决方案。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1146/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1418, \"height\": 363, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1146/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 635, \"height\": 229, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1146/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 723, \"height\": 618, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1146/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 727, \"height\": 398, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1146/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 656, \"height\": 319, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1146/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 745, \"height\": 329, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1146/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 551, \"height\": 253, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1146/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 623, \"height\": 421, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1146/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1197, \"height\": 1369, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1146/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1222, \"height\": 423, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1146/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1369, \"height\": 1058, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1146/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 590, \"height\": 544, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1146/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1509, \"height\": 200, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1146/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 604, \"height\": 325, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1146/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1396, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1146/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1656, \"height\": 1868, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1146/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1559, \"height\": 1200, \"label\": \"Table\"}]"
motivation: RLHF导致输出多样性下降，如何平衡多样性与对齐是关键挑战。
method: 引入好奇心驱动的内在奖励，与传统稀疏外在奖励结合进行RLHF训练。
result: 在摘要和指令遵循任务上多样性明显提升，对齐质量不降反升。
conclusion: 好奇心机制能有效缓解RLHF的多样性损失。
---

## Abstract
Reinforcement learning from human feedback (RLHF) has proven effective in aligning large language models (LLMs) with human preferences, but often at the cost of reduced output diversity. This trade-off between diversity and alignment quality remains a significant challenge. Drawing inspiration from curiosity-driven exploration in reinforcement learning, we introduce curiosity-driven RLHF (CD-RLHF), a framework that incorporates intrinsic rewards for novel states, alongside traditional sparse extrinsic rewards, to optimize both output diversity and alignment quality. We demonstrate the effectiveness of CD-RLHF through extensive experiments on a range of tasks, including text summarization and instruction following. Our approach achieves significant gains in diversity on multiple diversity-oriented metrics while maintaining alignment with human preferences comparable to standard RLHF. We will make our code publicly available.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化中文总结：

# 论文《Curiosity-Driven Reinforcement Learning from Human Feedback》详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：使用强化学习从人类反馈（RLHF）进行大语言模型（LLM）对齐时，虽然能显著提升模型与人类偏好的匹配度（对齐质量），但往往会导致输出多样性显著下降。这种对齐质量与输出多样性之间的权衡是当前RLHF面临的主要挑战。
- **研究动机**：输出多样性降低会损害LLM在创造性任务（如故事生成）、数据合成、红队测试等场景中的效果。已有一些尝试（如使用SelfBLEU、Sentence-BERT或调整KL惩罚）试图提升多样性，但往往以牺牲对齐质量为代价，或者适用范围有限。因此，需要一种能够在RLHF阶段同时保持或提升对齐质量与输出多样性的方法。
- **灵感来源**：受强化学习中“好奇心驱动探索（curiosity-driven exploration）”方法的启发，该方法通过为新颖状态（novel states）提供内在奖励（intrinsic reward），鼓励智能体探索未充分访问的状态，从而学习通用技能。本文将这一思想引入RLHF，提出CD-RLHF。

## 2. 论文提出的方法论

### 核心思想
在RLHF的标准PPO框架中，额外引入一个**内在好奇心模块（Intrinsic Curiosity Module, ICM）**，该模块在每一步生成时计算当前状态（已生成的token序列）的“新颖性”，并将其作为内在奖励（intrinsic reward），与外部奖励（reward model给出的分数 + KL惩罚）相结合，引导策略优化在追求对齐质量的同时探索不常见但可能有价值的token选择，从而提升输出多样性。

### 关键技术细节
- **内在奖励计算**：
  - 采用**前向动力学预测误差**作为好奇心度量。ICM包含一个**特征编码器φ**和一个**前向模型f**，均为两层MLP。
  - 给定当前状态s_t（LLM的最后一层隐藏状态）和动作a_t（当前token的嵌入），编码器φ将状态编码为ϕ(s_t)，前向模型f预测下一个状态的表示：ϕ̂(s_{t+1}) = f(ϕ(s_t), ψ(a_t))。
  - 预测误差（均方误差）即为内在奖励：r^(i)_t = 1/2 ||ϕ̂(s_{t+1}) - ϕ(s_{t+1})||_2^2。
- **结合内外奖励**：
  - 最终奖励：r_t = r^(e)_t + η·r^(i)_t。其中r^(e)_t为包含KL惩罚的外部奖励，η为缩放因子。
- **Top-k策略**：只在所选token的概率不属于模型当前Top-k预测时，才赋予内在奖励。这可以避免在已经确定性的高概率token上浪费探索资源。论文中默认k=1（即只有选择非最高概率token时才给予内在奖励）。
- **奖励白化（Reward Whitening）**：对内在奖励沿轨迹进行标准化（减去均值除以标准差），以稳定训练。
- **特征空间对齐**：状态表示使用参考模型（reference model）的最后一层隐藏层，动作表示使用策略模型（actor model）的嵌入层，确保不同空间对齐。

### 算法流程（文字说明）
1. 对于每个训练实例（当前prompt），使用策略模型生成一个完整response序列。
2. 在每一步，通过参考模型获取状态表示，通过策略模型获取动作嵌入，送入ICM计算内在奖励。
3. 从奖励模型获取最终外部奖励（包含KL惩罚）。
4. 合并两部分奖励：r = r^(e) + η·r^(i)。
5. 使用GAE计算优势函数和Q值函数。
6. 使用PPO策略更新策略模型，并同时更新ICM（最小化预测误差损失L_ICM）和价值网络。

## 3. 实验设计

- **数据集**：
  - **TL;DR**（文本摘要）：Reddit帖子摘要，93k人类偏好对用于训练，86k对用于验证。
  - **UltraFeedback**（指令遵循）：包含61.1k训练对和2k评估对，覆盖多种任务类型，使用二值化版本（选最高分作为chosen，随机一个低分作为rejected）。
- **基准模型**：Gemma-2B，Gemma-7B，Llama-3.2-1B，Llama-3.2-3B。采用DeepSpeed-Chat框架实现。
- **对比方法**：
  - **SFT**（监督微调）
  - **标准RLHF**（PPO）
  - **Sent-Rewards**（Hong et al., 2024）：将SelfBLEU和Sentence-BERT得分作为额外的句子级奖励，以及熵作为token级奖励。
- **评估指标**：
  - 对齐质量：**RM得分**（训练所用的奖励模型打分）、**GPT-4 win-rate**（用于评估多样性时也评估对齐）、**人类win-rate**。
  - 多样性：**N-gram Distinct**、**EAD**、**SelfBLEU**、**Sentence-BERT**（计算语义相似度，越低越多样）。
- **评估协议**：从验证/测试集中随机抽样2k实例，每个实例生成10个补全（温度=1.0），计算每个输入下的多样性指标并取平均。

## 4. 资源与算力

- 论文中没有明确说明具体的GPU型号、数量及总训练时长。
- 仅提到实验在 **8×V100 GPU** 或 **8×A100 GPU** 的机器上进行。
- 未提供不同模型规模的具体训练时间。

## 5. 实验数量与充分性

- **基本实验**：在**两个核心任务**（摘要、指令遵循）上，对 **4种模型**（GEMMA-2B/7B，LLAMA-3.2-1B/3B）均进行了对比，并报告了主要多样性指标和对齐指标，总计16组主要对比。
- **消融实验**：
  - **KL系数β**和**采样温度τ**的影响分析（图4）。
  - **内在奖励触发频率**（从top-1扩展到40%～100%）的影响（图5）。
  - **Top-k值**（k=1,3,10）的对比（附录C.2）。
- **其他分析**：
  - 训练过程中多样性和对齐质量的变化曲线（图6）。
  - 在**MT-Bench**（OOD基准）上评估泛化能力和多样性（表2，图7）。
  - 在**故事生成任务**（ROC story数据集）上测试多样性（图8）。
  - **GPT-4和人类评估**（图3，附录C.1）。
  - 消融实验数量较充分，覆盖了关键超参数和设计选择。
- **公平性**：与Sent-Rewards使用相同PPO超参数重新实现；对比时使用相同奖励模型、相同评估设置（温度=1.0，10个样本）。未发现明显不公平之处。
- **充分性判断**：实验总体充分，涵盖了主要任务和模型，进行了必要的消融和泛化测试。但缺少对更大规模模型（如13B以上）的验证，以及缺少对ICM不同架构的探讨。

## 6. 论文的主要结论与发现

- CD-RLHF**显著提升了输出多样性**，同时**保持或轻微提升了对齐质量**（RM得分和GPT-4评估均表现良好），优于标准RLHF和Sent-Rewards。
- 在TL;DR任务上，CD-RLHF在Gemma-2B上多样性提升33.16%，在Llama-3.2-1B上提升40.26%。在UltraFeedback任务上同样显著。
- 在OOD基准MT-Bench上，CD-RLHF不仅多样性更好，而且**对齐质量（GPT-4评分）也更高**，说明好奇心探索有助于泛化。
- 在故事生成任务中，CD-RLHF也展现出更多样的输出。
- 内在奖励仅在token不属于Top-1概率时赋予效果最佳；过多或过少的触发都会降低多样性或对齐。

## 7. 优点

- **方法新颖且可解释**：将强化学习中的好奇心驱动探索与RLHF有机结合，从新颖性出发改善输出多样性，原理直观。
- **实验设计全面**：覆盖不同模型规模、不同任务、多种多样性指标，并进行消融、泛化、人类评估等，证明方法有效性。
- **平衡效果好**：在不牺牲对齐质量的前提下提升了多样性，优于已有方法（尤其是Sent-Rewards）。
- **泛化能力强**：在MT-Bench等OOD基准上表现良好，说明好奇心探索带来的多样性提升具有正迁移效果。

## 8. 不足与局限

- **内在奖励尺度问题**：内在奖励通常远大于外部奖励，需要仔细调节缩放因子η，且当前方法对η敏感，缺乏自动调整机制。
- **多样性仍有差距**：CD-RLHF的多样性仍低于SFT模型，未能完全弥合SFT与RLHF之间的多样性差距。
- **计算开销**：ICM需要额外的前向传播和训练（时间与内存），虽然文中未详细分析，但会增加训练成本。
- **实验局限**：未在更大规模模型（如13B、70B）上验证；仅使用UMT-L6-v2作为Sentence-BERT模型，可能影响语义多样性评估的敏感性。
- **潜在偏差**：好奇心驱动探索可能使模型产生不符合人类偏好的输出（如无关或低质量内容），虽然在实验中未观察到严重问题，但需要更多安全性评估。

（完）

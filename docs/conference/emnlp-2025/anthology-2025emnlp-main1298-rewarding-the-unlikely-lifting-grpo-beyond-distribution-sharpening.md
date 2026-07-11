---
title: "Rewarding the Unlikely: Lifting GRPO Beyond Distribution Sharpening"
title_zh: 奖励罕见者：将GRPO提升到分布锐化之上
authors: "Andre Wang He, Daniel Fried, Sean Welleck"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1298.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 研究并改进GRPO算法
tldr: 该论文针对GRPO在定理证明任务中导致分布锐化的问题，揭示了GRPO的秩偏差——高概率轨迹被强化而罕见轨迹被忽视。通过分析，提出了缓解该偏差的方法，使模型不仅能在已有问题上更快求解，还能探索更少采样的区域。实验表明，改进后的GRPO在定理证明中取得了更鲁棒的推理性能。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 797, \"height\": 203, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 595, \"height\": 632, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 771, \"height\": 451, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 767, \"height\": 462, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 614, \"height\": 454, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1110, \"height\": 641, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 768, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 779, \"height\": 460, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 568, \"height\": 456, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 572, \"height\": 456, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 578, \"height\": 433, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 645, \"height\": 514, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 645, \"height\": 513, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 642, \"height\": 507, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 642, \"height\": 517, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 771, \"height\": 451, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 616, \"height\": 452, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1298/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 638, \"height\": 513, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1298/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 739, \"height\": 323, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1298/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 828, \"height\": 371, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1298/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 718, \"height\": 473, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1298/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 707, \"height\": 226, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1298/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 655, \"height\": 126, \"label\": \"Table\"}]"
motivation: GRPO在形式定理证明中存在分布锐化问题，仅强化高概率轨迹而忽略罕见路径。
method: 分析GRPO的秩偏差，提出改进策略以鼓励探索罕见轨迹，避免分布锐化。
result: 改进后的GRPO在定理证明中性能更鲁棒，能解决更广泛的题目。
conclusion: 缓解GRPO的秩偏差能有效提升其推理能力和探索性。
---

## Abstract
Reinforcement learning is emerging as a primary driver for improving language model reasoning capabilities. A fundamental question is whether current reinforcement learning algorithms—such as Group Relative Policy Optimization (GRPO), the de facto standard algorithm used to improve language model reasoning—merely sharpen the base model’s distribution around problems it can already solve. We investigate this question in the context of formal theorem proving, which has access to a perfect verifier. We identify a degenerate rank bias in GRPO in which highly probable trajectories are reinforced and rare ones are neglected. This results in distribution sharpening: the model can solve some problems with fewer samples, but underperforms simply sampling more solutions from the original model. To overcome GRPO’s rank bias we introduce unlikeliness reward, a simple method for explicitly up-weighting rare but correct solutions. We show that unlikeliness reward mitigates rank bias and improves pass@ N across a large range of N in both synthetic and real theorem proving settings. We also uncover an unexpected link between rank bias and a seemingly mundane hyperparameter—the number of updates per batch—that leads to a second, complementary mitigation. We combine our insights into a revised GRPO training recipe for formal theorem proving, yielding an open pipeline that achieves competitive performance to DeepSeek-Prover-V1.5-RL on the miniF2F-test benchmark.

---

## 论文详细总结（自动生成）

# 论文结构化总结：《Rewarding the Unlikely: Lifting GRPO Beyond Distribution Sharpening》

## 1. 核心问题与整体含义（研究动机和背景）
- **研究背景**：强化学习（RL）正成为提升大语言模型推理能力的主要手段，其中Group Relative Policy Optimization（GRPO）是当前用于增强模型reasoning的事实标准算法。形式定理证明（formal theorem proving）由于拥有完美验证器（perfect verifier），是研究LLM推理的理想测试床。
- **核心问题**：当前基于GRPO的RL训练是否仅仅“锐化分布”（distribution sharpening）——即只强化模型已经能够解决的问题的高概率解，而无法解锁新能力？具体表现为：GRPO提升了单样本准确性（pass@1），但在需要大量采样（pass@N, N较大）时，其表现反而劣于直接从原始模型采样更多答案。这种分布锐化限制了RL在可验证领域（如形式数学）的实际价值。
- **整体含义**：改进pass@N要求RL算法必须增加**低概率正确解**的概率，而GRPO存在“秩偏差”（rank bias），倾向于强化已有的高概率轨迹，忽视罕见但正确的解，导致多采样性能退化。

## 2. 方法论：核心思想、关键技术细节
### 2.1 核心思想
- 揭示了GRPO的秩偏差：在GRPO的梯度更新中，对于同一问题的一组采样解，高概率正确解被强化的概率远高于低概率正确解。
- 提出两个互补的缓解策略：
  - **Unlikeliness Reward（反常奖励）**：直接通过在奖励函数中对高正确率解施加惩罚，相对提升稀有正确解的奖励。
  - **增加PPO epochs**：一个原本被视为常规的超参数——每批数据的更新次数——被发现能间接增加对低概率样本的学习信号。

### 2.2 关键技术细节
- **Unlikeliness Reward**：对于一组样本 \(y_1, \dots, y_G\)，按当前策略 \(\pi_{\theta_{\text{old}}}(y_i|x)\) 的概率排序，奖励修改为：
  \[
  r_i = R(x, y_i) \left(1 - \beta_{\text{rank}} \frac{G - \text{rank}(y_i)}{G}\right)
  \]
  其中 \(R(x,y_i)\) 是二元正确性奖励（0/1），\(\text{rank}(y_i)\) 表示样本在组内按概率从高到低的排序（最高概率rank=0），\(\beta_{\text{rank}}\) 控制惩罚强度（实验取0.25）。
- **PPO epochs**：标准的GRPO通常只做1次梯度更新/批。作者发现增加epochs（如2或3）后，初始步骤会优先将高概率样本推到裁剪边界之外，迫使后续步骤专注于尚未裁剪的低概率样本，从而间接缓解秩偏差。但该方法会显著增加训练时间。
- **KL惩罚**：为了稳定训练并防止pass@N恶化，作者建议增大KL损失系数（从默认0.02提升至0.10），但仅靠此调整不足以根本改善性能。

### 2.3 算法流程（文字说明）
- 输入：定理问题 x，基模型 \(\pi_{\text{base}}\)，验证器 R。
- 对每个问题采样 G 个候选证明（实验中 G=32）。
- 对于每组样本，计算原始奖励（正确为1，否则0），若全部正确或全部错误则跳过该组（advantage为零）。
- 若采用Unlikeliness Reward，则按当前策略概率排序，对正确样本施加惩罚后再计算组内归一化的advantage。
- 使用GRPO目标函数进行多epoch更新（可选增加epochs），并加入KL散度正则项。
- 维护一个缓冲区，只对包含正advantage的样本进行更新。

## 3. 实验设计
### 3.1 数据集
- **Lean Workbook**：约140K Lean 4定理陈述，从中选取10K被证明可解的子集（来源于Wu et al. (2024)）。
- **miniF2F-valid/test**：标准定理证明基准（Zheng et al., 2021），其中244个问题用于验证。
- **最终大实验**：使用Lin et al. (2025b)发布的11K更大更难子集，排除验证集，评估于miniF2F-test和自有验证集Dval。

### 3.2 基准与对比方法
- **基模型**：DeepSeek-Prover-V1.5-SFT（Xin et al., 2024）。
- **对比方法**：包含多种GRPO变体：
  - GRPO-Default（1 epoch, KL=0.02）
  - GRPO-High-KL（1 epoch, KL=0.10）
  - GRPO-Epochs-2/3（2/3 epochs, KL=0.10）
  - GRPO-Unlikeliness-1/2（1/2 epochs, KL=0.10, β_rank=0.25）
- **最终对比**：DeepSeek-Prover-V1.5-RL（Xin et al., 2024）在miniF2F-test和Dval上的公开结果。

### 3.3 评价指标
- **pass@N**：在N次独立采样中至少一次成功的概率，N从1到512。重点考察大N（如128, 512）的表现。
- 训练期间还跟踪了每个问题组中成功解决的题目数量、样本多样性（唯一证明数）等。

## 4. 资源与算力
- **硬件**：4块NVIDIA L40S GPU，500GB RAM，48-64 CPU用于并行Lean REPL验证。
- **训练时长**：所有训练运行在36小时内完成。每个训练步约120秒（生成+验证）+ 依据PPO epochs的更新时间（1 epoch≈70秒，2≈140秒，3≈210秒）。
- **备注**：仅使用单个epoch训练（一次遍历训练集），总步数约600步（取决于缓冲区大小）。

## 5. 实验数量与充分性
- **多组对比**：总共报告了至少6种GRPO变体（默认、高KL、2/3 epochs、unlikeliness-1/2），每组均报告pass@N曲线和训练过程中求解数量。
- **消融实验**：
  - 单独增加KL与结合unlikeliness/epochs的对比。
  - 分析秩偏差（uplift rate）和样本多样性随时间的变化。
  - 在玩具环境（toy environment）中验证现象并验证unlikeliness reward的效果。
- **充分性评估**：
  - 实验设计较完整，涵盖了不同超参数和机制的比较。
  - 在多个数据集（合成、I.I.D.验证集、标准基准）上验证，结论具有一致性。
  - 提供了开源代码，便于复现。
- **潜在不足**：主要实验仅使用一个基模型（DeepSeek-Prover-V1.5-SFT），未在其他规模或架构的模型上验证泛化性；大实验仅报告了pass@32和pass@128，未进一步扩展到更大N（如512）。

## 6. 主要结论与发现
- **GRPO的秩偏差**：在形式定理证明中，GRPO倾向于强化高概率正确解，而几乎不提升低概率正确解的概率，导致分布锐化。
- **Unlikeliness Reward有效**：该方法显著提升了大N下的pass@N（例如pass@512从低于基模型提升到明显高于基模型），同时保留了小N的竞争力。它逆转了秩偏差模式，使低概率样本更可能被强化。
- **增加PPO epochs也缓解问题**：通过间接方式增加对低概率样本的学习，但代价是训练时间增加且可能不稳定。
- **最终模型**：结合Unlikeliness Reward和2个PPO epoch（GRPO-Unlikeliness-2）在miniF2F-test上达到与DeepSeek-Prover-V1.5-RL竞争的结果（pass@32: 48.8% vs 49.2%; pass@128: 50.6% vs 51.2%），且在自有验证集Dval上表现相当。
- **样本多样性**：Unlikeliness Reward的模型在训练中展示出独特的多样性恢复模式，不同于其他变体的单调下降。

## 7. 优点
- **问题定位清晰**：通过理论分析和实验证据，明确指出GRPO无法提升pass@N的根本原因是秩偏差，而不是简单地归结于裁剪偏倚。
- **方法简洁有效**：Unlikeliness Reward只修改奖励函数，不改变GRPO框架，无需额外模型或复杂计算，且极易实现。
- **超参数洞察**：揭示了PPO epochs这个常被忽略的超参数与分布锐化的关联，提供了简单互补的缓解手段。
- **开源贡献**：发布了完整实现和训练流程，有利于社区复现和进一步研究。
- **实验设计系统**：从合成环境到真实定理证明，从基本原理验证到大规模基准测试，层层递进，结论可靠。

## 8. 不足与局限
- **基模型选择单一**：仅在DeepSeek-Prover-V1.5-SFT上实验，未验证其他基模型（如更小或更大模型）上秩偏差是否一致。
- **N范围有限**：最大N=512，但形式定理证明中实际常用更大的N（如数千）。论文未展示在更大N下的表现。
- **PPO epochs的局限性**：增加epochs虽然有效但显著增加训练时间，且超过4个epochs时训练不稳定，实用价值受限。
- **对推理模型（reasoning models）的推广性未验证**：论文指出，在长链推理场景中，算法行为可能不同，方法是否同样有效尚未探索。这是未来的工作。
- **实验完全基于形式定理证明**：结论是否适用于其他具有完美验证器的领域（如代码生成）或仅有奖励函数（非二元）的任务，尚不明确。
- **Unlikeliness Reward的参数β_rank仅取固定值0.25**：未进行系统调参分析，可能存在更优设置。

（完）

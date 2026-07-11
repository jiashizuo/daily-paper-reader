---
title: Reinforcement Learning with Supervised Alignment
title_zh: 基于监督对齐的强化学习
authors: "João Luís Lins, Jia Xu"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.378.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 提出RLA，一种结合SFT和RL的新型强化微调方法
tldr: 本文提出RLA（监督对齐强化学习）方法，利用监督对齐训练奖励模型进行强化学习，避免了RLHF的高成本和RLAIF的不稳定性。实验表明RLA在多个任务上优于RLHF和RLAIF，为LLM对齐提供了更高效稳定的方案。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.378/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 802, \"height\": 860, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.378/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 797, \"height\": 946, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.378/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 797, \"height\": 368, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.378/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 558, \"height\": 273, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.378/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1570, \"height\": 493, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.378/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 769, \"height\": 1296, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.378/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 754, \"height\": 777, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.378/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 717, \"height\": 305, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.378/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1323, \"height\": 544, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.378/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1338, \"height\": 623, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.378/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1605, \"height\": 1856, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.378/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1631, \"height\": 2115, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.378/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1691, \"height\": 1067, \"label\": \"Table\"}]"
motivation: SFT过拟合且RLHF成本高，RLAIF不稳定。
method: 构造监督对齐信号来训练奖励模型，再用于强化学习。
result: RLA在稳定性和性能上优于RLHF和RLAIF。
conclusion: 监督对齐可有效提升强化学习的效率和稳定性。
---

## Abstract
Supervised fine-tuning (SFT) is a widely used and highly effective method for adapting Large Language Models (LLMs) to specific tasks. However, it often suffers from overfitting, causing models to excel on fine-tuned data but struggle with unseen or rare real-world inputs. While recent methods like Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with AI Feedback (RLAIF) aim to align LLMs with human values and tasks, they face challenges such as the high cost of human labeling or instabilities and biases inherent in using LLMs as judges. To address these issues, we propose a novel approach called Reinforcement Learning from supervised Alignment (RLA), which constructs a supervised alignment to train the reward model for reinforcement learning. Using only 100,000 MS MARCO samples, our method outperforms RLAIF by a relative margin ranging from +5.38% to +131.8%. It also significantly enhances the baseline Llama3 LLM, achieving up to +55% improvement on in-domain tasks and up to +16% on out-of-domain tasks. While RLA slightly underperforms supervised fine-tuning (SFT) on in-domain benchmarks, it surpasses SFT by up to 50 times on out-of-domain and cross-task evaluations, demonstrating strong generalization capabilities.

---

## 论文详细总结（自动生成）

# 论文总结：Reinforcement Learning with Supervised Alignment

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：大型语言模型（LLM）的监督微调（SFT）虽然有效，但容易过拟合，在域外或稀有输入上表现差。现有的强化学习方法如RLHF（依赖昂贵人工标注）和RLAIF（用LLM作为评判，存在不稳定和偏差）各有缺陷。
- **研究动机**：寻找一种稳定、低成本的自动化对齐方法，既能提升模型泛化能力，又避免人工干预和LLM评判带来的问题。
- **整体含义**：提出**RLA（Reinforcement Learning from supervised Alignment）**，利用现有标注数据自动构建偏好信号，训练奖励模型，再通过PPO强化学习优化LLM，实现更高的泛化性和稳定性。

## 2. 方法论：核心思想、关键技术细节
### 核心思想
- 利用已有数据集的**真实标签**作为质量标准，通过计算模型生成响应与标签之间的**余弦相似度**来自动生成“接受/拒绝”偏好对，构建监督对齐数据集Δ，用于训练奖励模型ΣΔ，最后在PPO框架下优化策略网络。

### 关键技术细节
1. **监督对齐Δ构建**（Algorithm 1）
   - 对每个输入查询xi，从目标LLM πϕref生成K个候选响应。
   - 使用Sentence Transformer计算每个候选响应与真实标签的余弦相似度Csim。
   - 根据相似度对候选响应排序，将高分作为“接受”，低分作为“拒绝”，生成(K choose 2)个偏好对，加入Δ。

2. **奖励模型ΣΔ训练**（Equation 3）
   - 基于Bradley-Terry模型进行SFT训练，损失函数为：
     LΣ∆ = -E[log σ(Σ∆(xi, y_a) - Σ∆(xi, y_r))]
   - 在Σ∆最后一层添加分类头，输出接受/拒绝的对数概率。

3. **强化学习框架RLA**（Algorithm 2）
   - 使用PPO优化策略网络πϕ（初始化为πϕref）。
   - 每次迭代：生成响应→计算奖励（含KL惩罚项）→计算价值函数→GAE计算优势→计算PPO损失（策略损失+价值损失）→梯度上升更新参数。
   - 关键损失公式：
     - LPPO = clipped surrogate objective
     - LVfinal = max(LV, LVclip)
     - Ltotal = LPPO + cv·LVfinal

## 3. 实验设计
### 数据集与场景
- **域内（in-domain）**：MS-MARCO（开放QA）
- **域外（out-of-domain）**：TriviaQA（开放QA，无web context）
- **跨任务少样本**：TruthfulQA（多项选择QA，MC1/MC2，6-shot）
- **跨任务零样本**：UniLC基准中的事实与公平性验证（Climate-FEVER, PubHealth, HSD, SBIC）

### 基准方法
- 基模型：Llama3-8B
- SFT：在MS-MARCO上微调的Llama3-8B
- RLAIF：使用相同数据的RLAIF实现
- RLA-CE：用交叉熵替代余弦相似度的消融版本

### 评估指标
余弦相似度、Exact Match、ROUGE-1/2/L、BLEU

## 4. 资源与算力
- **硬件**：8×NVIDIA H200 GPU（每卡141GB显存），通过NVLink连接；CPU为Intel Xeon Platinum 8558（208核心）。
- **训练配置**：DeepSpeed ZeRO Stage 2，bf16精度；奖励模型训练2轮，PPO训练80,000 episode（约1个epoch），batch size=4 per GPU，学习率3e-6。
- **总成本**：训练和评估总花费约1500美元（文中提及）。
- **注意**：论文未详细说明训练总时长，但提供了上述硬件与超参数细节。

## 5. 实验数量与充分性
- **实验组数**：在4个不同任务（域内、域外、少样本、零样本）上分别进行有无web context的测试，共约8组主实验（见表1-4）。
- **消融实验**：使用RLA-CE（交叉熵替代余弦相似度）作为消融，验证余弦相似度的有效性。
- **超参数优化**：对PPO关键超参数（cliprange, kl_coef, lambda, learning_rate等）使用贝叶斯优化，但论文指出在验证集上提升有限，测试集无显著改善。
- **公平性与客观性**：所有模型使用相同基座（Llama3-8B），采用PEFT（LoRA），温度设为0.2，报告五次独立试验的最大值。对比方法（SFT、RLAIF）在同一数据集上训练，实验设计相对公平。但缺少与更多最新方法（如DPO、Self-Rewarding）的对比。

## 6. 主要结论与发现
- RLA在域内MS-MARCO上性能与SFT相近，但显著优于Llama3基线和RLAIF（相对提升+5.38%~+131.8%）。
- 在域外TriviaQA上，RLA优于SFT（SFT过拟合严重），且在有web context时提升更明显（+11.64% over Llama3）。
- 在零样本事实/公平性验证（UniLC）上，RLA保持稳定，而SFT出现显著下降，表明RLA泛化能力更强。
- 在少样本TruthfulQA上，RLA与基模型持平，SFT表现较差。
- 余弦相似度优于交叉熵（RLA-CE表现更差），说明embedding-based语义对齐更有效。
- 总体结论：RLA是一种高效、稳定的LLM对齐方法，尤其擅长域外和跨任务泛化。

## 7. 优点
- **无人工标注**：完全利用现有数据集自动构建偏好，节省成本和时间。
- **高稳定性**：使用固定数据集和余弦相似度，避免RLAIF中LLM裁判的波动和误差传播。
- **强泛化**：在域外和零样本任务上显著优于SFT，甚至在某些场景超越RLAIF。
- **可解释性强**：基于余弦相似度的评估具有直观的语义意义。
- **资源友好**：仅需100,000样本即可达到有竞争力的性能，训练成本可控（约1500美元）。

## 8. 不足与局限
- **实验覆盖不足**：只对比了Llama3-8B一个基座，缺乏对不同规模模型（如7B、13B、70B）的验证；未与DPO等流行的偏好优化方法对比。
- **偏差风险**：训练数据MS-MARCO可能带来特定领域偏差，尤其在事实检查等复杂任务上；标签被视为“真实”，但可能本身包含错误或不完整。
- **依赖web search**：部分实验使用web上下文，但搜索结果可能带有误导性信息，影响评估公平性。
- **域内性能略逊SFT**：在MS-MARCO域内，RLA的F1/BLEU略低于SFT，表明对于纯粹域内任务，SFT仍有一定优势。
- **超参数敏感性**：贝叶斯优化后在测试集无显著提升，可能说明算法在验证集上过拟合或超参数影响不大。
- **未来工作**：论文建议改进检索、扩展训练数据集、优化微调流程，但未具体展开。

（完）

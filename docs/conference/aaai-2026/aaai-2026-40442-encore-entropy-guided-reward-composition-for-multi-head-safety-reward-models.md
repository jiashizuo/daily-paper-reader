---
title: "ENCORE: Entropy-guided Reward Composition for Multi-head Safety Reward Models"
title_zh: ENCORE：基于熵指导的多头安全奖励模型奖励组合
authors: "Xiaomin Li, Xupeng Chen, Jingxuan Fan, Eric Hanchen Jiang, Mingye Gao"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40442/44403"
tags: ["query:mlr"]
score: 9.0
evidence: 提出了基于熵指导的奖励组合方法用于RLHF安全对齐
tldr: 在RLHF中，基于多安全规则评分的奖励模型常因规则熵高而区分能力不足。本文发现高熵规则与低准确率的关联，提出ENCORE方法，通过熵指导组合多头奖励，在Bradley–Terry损失下自动降低高熵规则的权重。理论分析证明了方法的合理性，实验表明ENCORE能显著提升安全对齐效果，为RLHF的安全训练提供了高效且可解释的奖励聚合方案。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 多规则奖励模型中，高熵规则的区分能力差，影响安全对齐效果。
method: 提出基于熵指导的奖励组合方法，通过惩罚高熵规则来优化多头安全奖励模型。
result: 在安全对齐任务上，ENCORE显著提升了偏好响应区分准确率。
conclusion: ENCORE是一种简单有效的奖励组合方法，可增强RLHF的安全对齐性能。
---

## Abstract
The safety alignment of large language models (LLMs) often relies on reinforcement learning from human feedback (RLHF), which requires human annotations to construct preference datasets. Given the challenge of assigning overall quality scores to data, recent works increasingly adopt fine-grained ratings based on multiple safety rules. In this paper, we discover a robust phenomenon: Rules with higher rating entropy tend to have lower accuracy in distinguishing human-preferred responses. Exploiting this insight, we propose ENCORE, a simple entropy-guided method to compose multi-head rewards by penalizing rules with high rating entropy. Theoretically, we show that such rules yield negligible weights under the Bradley–Terry loss during weight optimization, naturally justifying their penalization. Empirically, ENCORE consistently outperforms strong baselines, including random and uniform weighting, single-head Bradley–Terry, and LLM-as-a-judge, etc. on RewardBench safety tasks. Our method is completely training-free, generally applicable across datasets, and retains interpretability, making it a practical and effective approach for multi-attribute reward modeling.

---

## 论文详细总结（自动生成）

# ENCORE：基于熵指导的多头安全奖励模型奖励组合——中文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：大型语言模型（LLM）的安全对齐通常依赖于基于人类反馈的强化学习（RLHF）。RLHF需要人工标注偏好数据集，但为每个响应分配单一整体质量分数非常困难且主观性强。因此，近期工作转向基于多个安全规则的细粒度评分（如“避免有害语言”、“尊重隐私”等），使用多头奖励模型分别输出各规则得分，再聚合为最终奖励。
- **核心问题**：如何最优地聚合这些规则特定的奖励？现有方法（均匀加权、随机选取子集、网格搜索、训练门控网络等）存在权重分配不优、数据泄露风险、计算开销大、可解释性差或泛化能力弱等问题。
- **本文发现**：规则评分的熵（不确定性）与其预测人类偏好的准确率之间存在强负相关——高熵规则（评分分布接近均匀）的准确率低，类似随机猜测；低熵规则更可靠。基于此，提出 **ENCORE**（Entropy-penalized Compositional Rewarding），通过惩罚高熵规则来组合多头奖励，实现高效、可解释、无需额外训练的奖励聚合。

## 2. 论文提出的方法论

### 2.1 核心思想
利用规则评分的经验熵作为信息量/可靠性的代理，给低熵规则分配更高权重，高熵规则赋予更低权重。该惩罚在Bradley–Terry损失下的梯度优化中自然得到理论支持。

### 2.2 关键技术细节

1. **步骤一：训练多头奖励模型**
   - 使用强LLM（如Llama3-70B-Instruct）作为评判器，对每个响应（prompt-response pair）按照R个安全规则分别打分，得到训练数据集 \( D_{train} = \{(x^{(i)}, y^{(i)}, s^{(i)})\} \)，其中 \( s^{(i)} \in [0,1]^R \)。
   - 训练多头奖励模型（如基于Llama3.1-8B），通过多输出回归（multi-output regression）预测规则得分。损失函数为：  
     \[
     L(\theta) = \frac{1}{N} \sum_{i=1}^N \| w^\top M_\theta(x^{(i)}, y^{(i)}) - s^{(i)} \|_2^2
     \]
     其中 \( w \) 是规则权重向量，但训练时 \( w \) 固定（如均匀权重）或后期调整。

2. **步骤二：熵惩罚权重计算**
   - 从训练集计算每个规则 \( k \) 的评分经验熵 \( H(\phi_k) \)。
   - 权重定义为 softmax 负熵形式：
     \[
     w_k = \frac{e^{-H(\phi_k)/\tau}}{\sum_{j=1}^R e^{-H(\phi_j)/\tau}}
     \]
     其中 \( \tau > 0 \) 是温度参数（默认2），控制惩罚强度：\( \tau \to \infty \) 趋于均匀权重，\( \tau \to 0 \) 趋于仅选最低熵规则。
   - 最终奖励：\( \phi = w^\top \phi = \sum_{k=1}^R w_k \phi_k \)。

### 2.3 理论分析（Theorem 1）
- 证明在Bradley–Terry损失和梯度下降优化中，高熵规则的梯度贡献近零，故其权重自然保持极小，从而验证了熵惩罚的合理性。该定理虽针对最大熵（均匀）规则，但推广到一般高噪声规则。

## 3. 实验设计

### 3.1 数据集与场景
- **训练数据集**：组合 HH-RLHF（Anthropic）和 PKU-SafeRLHF，共约70K个带偏好标注的样本（每个样本含 prompt、chosen 和 rejected 响应）。使用 Llama3-70B-Instruct 按10个精选安全规则对每个响应评分，形成多标签训练数据。
- **评测基准**：**RewardBench** 的安全相关任务，包括五个子任务：
  - Do Not Answer
  - Refusals Dangerous
  - Refusals Offensive
  - XTest Should Refuse
  - XTest Should Respond
- **评估指标**：准确率（chosen vs. rejected 正确排序的百分比），并计算加权平均安全总分（Safety）。

### 3.2 对比方法
- **LLM-as-a-judge**：Llama3.1-8B、Llama3-8B、Llama3.1-70B、GPT-4o、GPT-3.5、Claude3.5 等直接作为奖励模型。
- **Bradley–Terry**：单头奖励模型，采用相同骨干（Llama3.1-8B），包括默认初始化和 Skywork 初始化。
- **多头奖励模型 + 不同权重策略**：
  - 随机权重（Dirichlet采样）
  - 单规则（随机选一条，相当于 one-hot）
  - 均匀权重（等权）
  - MoE权重（Wang et al. 2024a 的三层MLP门控网络）
- **本文方法**：ENCORE 采用熵惩罚权重。

### 3.3 骨干模型
- 主要实验：Llama3.1-8B（权重初始化自 Liu et al. 2024b）
- 消融实验：FsFairX-Llama3-8B 作为替代骨干。

## 4. 资源与算力
- 文中明确说明：“We train our multi-head reward models using a single NVIDIA-H100-80GB GPU. The training is performed for one epoch with a learning rate of 2e-5.”  
- 未提及训练总时长、模型参数具体数量或训练数据批大小。但由于仅训练1个 epoch，且使用单块 H100，计算开销相对较小。熵计算本身几乎无额外成本。

## 5. 实验数量与充分性

- **主要实验结果**（表1）：在 RewardBench 安全任务上，ENCORE（Llama3.1-8B）达到 **Safety 88.5%**，显著优于所有基线（均匀权重85.5%、MoE 86.0%、Bradley–Terry + Skywork 82.7%、LLM-as-a-judge最佳 Claude3.5 81.6% 等）。
- **消融实验**：
  - **规则选择 vs. 加权**（附录 G）：仅选熵最低的5条规则均匀加权，效果仍优于随机选择，但不如完整熵加权，说明软加权优于硬选择。
  - **不同骨干**（表2）：使用 FsFairX-Llama3-8B 骨干，ENCORE 同样优于所有多头基线（Safety 83.1% vs. 随机80.6%、单规则78.1%、均匀77.7%）。
  - **熵-准确率相关性分析**（图2）：分别在 HH、PKU、组合数据集上验证，Pearson 相关系数分别为 -0.84、-0.96、-0.93，p值均显著。
- **充分性评估**：实验设计较为系统，覆盖了常见基线、不同骨干、消融变体，并提供了熵相关现象的理论分析和实证。但仅测试了安全任务（RewardBench 的5个子任务），未涉及 Helpfulness、Coherence 等其他属性；仅使用 Llama3.1-8B 和 FsFairX 两个骨干，未在更大模型（如 Llama3-70B）或不同架构（如 Qwen、GPT）上验证。此外，方法依赖强LLM生成评分，评分质量可能影响结果，但实验未深入分析该偏差。

## 6. 论文的主要结论与发现

1. **发现**：在多规则安全奖励模型中，规则评分的熵与其预测人类偏好的准确率之间存在强负相关（相关系数可达 -0.96）。
2. **方法**：提出 ENCORE，通过惩罚高熵规则来组合多头奖励，权重由 softmax 负熵决定。
3. **效果**：在 RewardBench 安全任务上，8B 参数的 ENCORE 模型优于所有对比基线，甚至超越许多更大的 LLM-as-a-judge 模型（如 GPT-4o、Claude3.5）。
4. **理论**：证明在 Bradley–Terry 损失下，高熵规则自然获得极小权重，为熵惩罚提供了理论支撑。
5. **优势**：方法训练无关、计算开销极低、可解释性强、一般适用于不同数据集。

## 7. 优点

- **创新性**：首次发现并系统利用规则评分熵与准确率的负相关关系，为多头奖励聚合提供新的思路。
- **简单有效**：无需额外训练或调参，仅基于训练数据的熵计算即可得到权重，计算量可忽略。
- **可解释性**：权重直接对应负熵，清晰指示每个规则的信息量，避免黑箱门控网络。
- **理论支撑**：通过定理证明了高熵规则权重抑制的自然性，使方法不依赖经验调参。
- **实验扎实**：在标准基准上进行了充分对比和消融，结果统计显著。

## 8. 不足与局限

- **规则选择主观**：从100条安全规则中仅选取10条，且选择过程依赖GPT-4，可能引入偏向，规则集是否最优未讨论。
- **评分依赖强LLM**：训练数据标签由 Llama3-70B-Instruct 生成，LLM可能本身存在偏差或噪声，影响熵计算和下游性能。
- **任务覆盖有限**：仅评估了 RewardBench 安全相关子任务，未涉及 helpfulness、honesty 等维度，也未测试在真实 RLHF 下游策略中的效果。
- **骨干范围窄**：仅 8B 级别模型，未在更大模型（如70B）或不同系列（如 Qwen、Gemma）上验证通用性。
- **未与最新方法对比**：未直接对比 Constitutional AI、Rule-Based Rewards（Mu et al. 2024）等最新基于规则的方法，基线选择偏旧。
- **未讨论温度参数的影响**：默认 τ=2，但未提供敏感性分析，不同数据集可能需调节。
- **理论假设较强**：Theorem 1 假设最大熵分布，实际规则未必完全均匀，推广性需更多实验支撑。

（完）

---
title: "Causal Reward Adjustment: Mitigating Reward Hacking in External Reasoning via Backdoor Correction"
title_zh: 因果奖励调整：通过后门校正缓解外部推理中的奖励黑客
authors: "Ruike Song, Zeen Song, Huijie Guo, Wenwen Qiang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40584/44545"
tags: ["query:mlr"]
score: 4.0
evidence: 通过因果奖励调整缓解外部推理中的奖励黑客问题，方法可迁移至强化学习微调
tldr: 本文针对外部推理系统中过程奖励模型（PRM）的奖励黑客问题，提出因果奖励调整方法（CRA）。该方法从因果推断视角出发，训练稀疏自编码器恢复PRM内部可解释特征并进行后门校正，以估计推理路径的真实奖励。实验表明CRA能有效减少奖励黑客现象，提升推理路径选择的准确性。该工作为强化学习微调中的奖励建模提供了新的因果视角。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 外部推理系统中过程奖励模型易受奖励黑客影响，高评分路径可能逻辑不正确，需要校正。
method: 提出因果奖励调整（CRA），训练稀疏自编码器提取特征，通过后门校正估计真实奖励。
result: 实验证明CRA有效降低奖励黑客风险，提升推理路径选择质量。
conclusion: 因果奖励调整方法为强化学习微调中的奖励建模提供了新的可解释且有效的解决方案。
---

## Abstract
External reasoning systems combine language models with process reward models (PRMs) to select high-quality reasoning paths for complex tasks such as mathematical problem solving. However, these systems are prone to reward hacking, where high-scoring but logically incorrect paths are assigned high scores by the PRMs, leading to incorrect answers. From a causal inference perspective, we attribute this phenomenon primarily to the presence of confounding semantic features. To address it, we propose Causal Reward Adjustment (CRA), a method that mitigates reward hacking by estimating the true reward of a reasoning path. CRA trains sparse autoencoders on the PRM’s internal activations to recover interpretable features, then corrects confounding by using backdoor adjustment. Experiments on math solving datasets demonstrate that CRA mitigates reward hacking and improves final accuracy, without modifying the policy model or retraining PRM.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：外部推理系统（如数学问题求解）依赖过程奖励模型（PRM）对推理路径打分，以筛选高质量路径。然而，PRM 容易遭受 **奖励黑客（reward hacking）** 现象：模型给逻辑错误的推理步骤打出高分，导致最终答案错误。例如，步骤中出现“5 ≤ x ≤ -5”这样的矛盾约束，PRM 仍给出 0.973 高分。
- **因果归因**：作者从因果推断角度建立结构因果模型（SCM），指出奖励黑客主要由 **混淆语义特征（confounding semantic features）** 引起。这些特征（如句式、步骤长度、常用表达）同时影响推理路径的生成（X）和奖励分数（Y），形成后门路径 X ← Z → Y，导致模型学到的是“特征是否存在”，而非真正的逻辑正确性。
- **整体含义**：解决奖励黑客的关键在于去除混淆效应，恢复推理路径对奖励的真实因果效应。

## 2. 方法论：核心思想、关键技术细节
### 核心思想：Causal Reward Adjustment (CRA)
通过 **后门调整（backdoor adjustment）** 消除混淆语义特征的影响，估计推理路径的真实奖励 \(E[Y \mid do(X)]\)。

### 关键技术细节（三步流程）
1. **训练稀疏自编码器（SAE）**  
   - 收集 PRM 内部逐层 token 级隐状态 \(h_{l,k} \in \mathbb{R}^d\)。  
   - 每层训练一个 SAE，编码器 \(z = \text{ReLU}(W_e h + b_e)\)，解码器重建 \(\hat{h} = W_d z\)（共享权重 \(W_d = W_e^\top\)）。  
   - 损失函数：重建误差 + \(\ell_1\) 稀疏正则，稀疏维度 \(m = 8d\)。训练后，每个维度对应一个可解释语义特征。

2. **识别奖励黑客特征**  
   - 构造标注数据：将推理步骤分为“奖励黑客”（逻辑错误但高评分）和“正常”两类。  
   - 用 SAE 编码得到每个步骤的稀疏特征向量，对每个特征维度计算两类之间的 **双样本 t 统计量**。  
   - 选择同时满足 \(|t_j| > \tau_t\) 且 \(\max(\mu_1,\mu_0) > \tau_a\) 的特征作为混淆特征 \(Z\)。

3. **后门调整**  
   - **估计先验分布**：将所有步骤中目标特征的激活值分箱，计算频率 \(P(Z=z)\)。  
   - **计算条件奖励**：对给定推理步骤，将目标特征激活值替换为不同 \(z\) 值，其他保持原值，经 SAE 解码后用 PRM 得到条件奖励 \(E[Y\mid X, Z=z]\)。  
   - **调整后奖励**：\(\hat{R}_{\text{CRA}}(x) = \sum_z E[Y\mid X, Z=z] \cdot P(Z=z)\)。  
   - 在 beam search 中用该调整奖励替代原始 PRM 分数。

## 3. 实验设计
- **数据集**：GSM8K 和 MATH（数学应用题与竞赛题）。  
- **策略模型**：Qwen2.5-0.5B-Instruct、Qwen-2.5-math-7B-Instruct、Llama-3.2-3B-Instruct。  
- **奖励模型**：Math-Shepherd-PRM-7B、Qwen2.5-Math-PRM-7B。  
- **推理算法**：beam search，beam size = 4，每步生成 8 个候选，最终保留 8 条完整路径。  
- **对比基准**：原始 PRM 分数（不加 CRA）作为 baseline。CRA 直接替换分数，无需修改策略模型或重训练 PRM。  
- **消融实验**：对比 CRA（基于 t 统计量选择特征）与 **随机干预**（随机选择 SAE 特征进行相同调整），分析对奖励黑客步骤和正常步骤的分数影响。

## 4. 资源与算力
- 论文明确说明使用 **8 张 Tesla V100 GPU**，混合精度训练。  
- SAE 训练使用 Adam 优化器，学习率 0.001，余弦退火，训练 50 个 epoch，batch size = 2048。  
- 未给出精确训练时长（如小时数），但指出训练语料包含 18,000 条推理轨迹（>190,000 推理步骤）。总体算力需求中等，属于常规学术研究配置。

## 5. 实验数量与充分性
- **主要结果**：表 1 展示了 3 种策略模型 × 2 种奖励模型 × 2 个数据集 = 12 组对比实验。每组均有“原始 PRM”和“+CRA”两个数值。  
- **消融实验**：图 5 比较了因果干预与随机干预的分数变化分布，验证特征选择的重要性。  
- **特征可视化**：图 4 展示高 t 统计量特征在两类样本上的激活分布差异。  
- **公平性**：所有实验使用相同 beam search 配置，仅替换评分函数，对比公平。  
- **充分性**：覆盖不同规模策略模型（0.5B~7B）和两种 PRM，结果稳定提升，消融实验因果方向明确，实验设计较为充分客观。

## 6. 主要结论与发现
- CRA 在 **所有 12 组配置** 上均提升了最终推理准确率。  
  - MATH 平均准确率提升 +2.9 个百分点（57.3% → 60.2%）。  
  - GSM8K 平均提升 +1.6 个百分点（77.9% → 79.5%）。  
- **消融实验**：因果干预（选择高 t 统计量特征）能显著降低奖励黑客步骤的分数（平均下降约 0.04），而对正常步骤影响极小；随机干预则无区分效果。这证实了识别混淆特征的重要性。  
- 论文验证了 **因果归因的正确性**：奖励黑客源于语义特征带来的混淆，后门调整可有效消除。

## 7. 优点
- **因果视角创新**：首次将奖励黑客问题形式化为因果混淆，并引入后门调整进行显式校正，理论扎实。  
- **即插即用**：无需修改策略模型或重训练 PRM，仅需在推理时替换奖励分数，易于集成到现有系统。  
- **可解释性**：通过 SAE 解耦特征、t 检验识别特定语义模式，为分析奖励模型偏差提供了工具。  
- **泛化验证**：覆盖多种模型组合（不同大小策略模型、不同 PRM），提升一致稳定。

## 8. 不足与局限
- **依赖人工标注**：识别奖励黑客特征时需要手动标注“奖励黑客步骤”（逻辑错误但高分），标注过程可能引入主观偏差。  
- **超参数敏感性**：t 检验阈值 \(\tau_t=4.0\) 和激活阈值 \(\tau_a=0\) 需针对特定模型和数据集调试，未讨论自动调参方法。  
- **假设限制**：假设混淆特征固定且可通过统计检测，但实际情况中可能存在更复杂的多特征纠缠或持续演变的混淆模式。  
- **应用范围有限**：仅测试了数学推理任务（GSM8K/MATH），未在代码生成、问答等更广泛场景验证；方法依赖 PRM 的 Transformer 隐状态，不适用于非自注意力架构。  
- **额外计算开销**：推理时需运行 SAE 并多次调用 PRM 计算条件奖励，可能增加延迟。论文未报告速度对比。  
- **未讨论与强化学习微调（如 RLHF）的衔接**：虽在 motivation 中提及可迁移至 RL 微调，但实验未实际验证。

（完）

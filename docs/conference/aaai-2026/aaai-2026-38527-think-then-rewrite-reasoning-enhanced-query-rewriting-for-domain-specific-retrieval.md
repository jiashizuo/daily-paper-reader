---
title: "Think Then Rewrite: Reasoning Enhanced Query Rewriting for Domain Specific Retrieval"
title_zh: 先思考后重写：面向领域特定检索的推理增强查询改写
authors: "Ang Li, Yufei Shi, Yuxuan Si, Yiquan Wu, Ming Cai, Xu Tan, Yi Wang, Changlong Sun, Xiaozhong Liu, Kun Kuang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38527/42489"
tags: ["query:mlr"]
score: 7.0
evidence: 基于对比互信息奖励的强化学习用于领域特定查询改写
tldr: 针对领域特定查询改写中缺乏推理导致歧义的问题，提出TTR框架，采用强化学习结合对比互信息奖励，激励LLM生成更高区分度的查询。在医学和法律等专业领域检索任务中显著提升性能。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有查询改写方法忽略推理，无法弥合用户查询与专业文档的认知鸿沟。
method: 提出TTR，一个基于强化学习的框架，利用对比互信息奖励来提升LLM的推理能力以生成更好的查询改写。
result: 在医学和法律领域检索数据集上，TTR优于现有方法。
conclusion: 强化学习与对比互信息奖励能有效提升领域特定查询改写的推理能力。
---

## Abstract
Query rewriting is a crucial task for improving retrieval, especially in professional domains such as law and medicine, where user queries are often underspecified and ambiguous. While large language models (LLMs) offer strong understanding and generation capabilities, existing LLM-based approaches reduce the task to text transformation or expansion, neglecting reasoning to disambiguate queries, which fails to bridge the cognitive gap between user queries and specialized documents. In this paper, we propose Think-Then-Rewrite (TTR), a reinforcement learning based framework that unleashes LLMs' reasoning ability for domain-specific query rewriting. TTR introduces a contrastive mutual information reward to encourage the LLM to generate reasoning processes that effectively distinguish confusing distractors. To boost early-stage training, TTR also constructs golden query rewrites as off‑policy data, providing strong guidance for RL learning. A mixed-policy optimization then combines on-policy and off-policy signals, ensuring both effectiveness and stability. Extensive experiments on legal and medical retrieval benchmarks demonstrate that TTR achieves state-of-the-art performance.

---

## 论文详细总结（自动生成）

# 论文总结：Think Then Rewrite: Reasoning Enhanced Query Rewriting for Domain Specific Retrieval

## 1. 核心问题与整体含义（研究动机与背景）

- **问题**：在专业领域（如法律、医学）检索中，用户查询常常表述不规范、存在歧义，导致检索效果差。现有的 LLM 查询改写方法（如链式思考、HyDE、Query2doc 等）多将查询改写视为直接的文本转换或扩展，**缺乏对用户意图的推理过程建模**，无法弥合用户口语化查询与正式专业文档之间的“认知鸿沟”。
- **理论支撑**：基于 ASK（Anomalous State of Knowledge）理论，用户的搜索常处于知识不完整状态，因此检索系统应支持意图探索，而非仅匹配显式查询。
- **目标**：通过让 LLM 在重写查询前先进行推理（<think> 链），然后生成更精确的重写查询，从而提升领域特定检索的性能。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：将查询改写分解为“推理（think）”和“重写（rewrite）”两个阶段，使用强化学习（RL）训练 LLM 生成推理过程，并通过对比互信息（CMI）奖励提供细粒度监督，同时结合离策略（off‑policy）黄金重写数据来引导早期训练，避免陷入局部最优。
- **关键技术细节**：
  1. **两阶段生成**：模型首先生成推理序列 t，再基于 t 生成重写查询 q：  
     \(P(t,q|q_0;\theta)=P(t|q_0;\theta)\cdot P(q|q_0,t;\theta)\)
  2. **基础 RL 框架**：采用 GRPO（Group Relative Policy Optimization）算法，以 Recall@k 和格式合规为奖励信号（二元奖励）。
  3. **对比互信息（CMI）奖励**：  
     - 将重写目标重写为最大化重写查询与正确文档之间的互信息。  
     - 使用 InfoNCE 下界定义奖励：  
       \[
       r_{\text{cmi}}(q)=\log s(q,d^*)-\log\frac{1}{N}\sum_{i=1}^N s(q,d_i^-)
       \]  
       其中 \(s(q,d)\) 为固定检索器的相关性分数，\(d^*\) 为目标文档，\(d_i^-\) 为负样本。  
     - 采用**自适应负采样**：训练初期多用随机负样本（多样性），后期逐渐增加 BM25 负样本（难度）。  
     - 最终奖励加权组合：\(r_{\text{total}}=\lambda_{\text{cmi}}\sigma(r_{\text{cmi}})+\lambda_{\text{rec}}r_{\text{rec}}+\lambda_{\text{fmt}}r_{\text{fmt}}\)
  4. **离策略（Off‑Policy）引导**：  
     - 使用强推理模型 DeepSeek‑R1，以 \((q_0,d^*)\) 为输入生成候选重写。  
     - 通过格式奖励和召回奖励过滤，选出优质重写作为黄金数据（若无一满足，则用目标文档本身）。  
     - 在 RL 训练中，采用混合策略优化（Mixed‑Policy GRPO），同时从 on‑policy（模型自身生成）和 off‑policy（黄金重写）中采样，通过重要性权重平衡。

## 3. 实验设计

- **数据集**：
  - **EQUALS**：法律查询-法条对（中国法律），筛选后词法重叠率<10%，训练集 2683 条，测试集 281 条。
  - **KUAKE‑IR**：医学段落检索（真实医疗咨询场景），相同过滤条件，训练集 13121 条，测试集 222 条。
- **评价指标**：Recall@1,5,10,100 和 MRR@10。
- **对比方法**：
  - **无干预基线**：纯检索器（BGE‑M3）。
  - **提示方法**：Chain‑of‑Thought、Structured Reasoning、Hyde、Query2doc（使用 Qwen2.5‑turbo API）。
  - **训练方法**：SFT、Rewrite‑Retrieve‑Read、DeepRetrieval、DAPO、LUFFY（均使用 Qwen2.5‑1.5B 模型），以及额外实现的 Vanilla GRPO。
- **实现细节**：
  - 6 张 A100 GPU，训练 3 个 epoch，batch size 8，学习率 1e‑6。
  - GRPO 采样 8 个 on‑policy 样本；离策略学习时 7 个 on‑policy + 1 个 off‑policy。
  - 检索器固定为 BGE‑M3，使用 FAISS 预建向量索引。
  - 奖励权重：\(\lambda_{\text{fmt}}=0.4\)，\(\lambda_{\text{cmi}}+\lambda_{\text{rec}}=0.8\)，最佳 \(\lambda_{\text{cmi}}=0.4\)，\(\alpha_0=0.3\)。
  - 重复 5 次取平均，使用 Fisher 随机化检验验证显著性。

## 4. 资源与算力

- **算力**：使用 **6 张 A100 GPU**。  
- **训练时间**：论文未明确给出总训练时长，仅提到训练 3 个 epoch，batch size 8，每个 epoch 的步数取决于数据集大小。

## 5. 实验数量与充分性

- **主要实验**：在两个领域（法律、医学）进行，对比了 8 种以上基线方法，在 5 个指标上均有全面报告。  
- **消融实验**（表 3）：
  - 奖励设计：移除 CMI 奖励、移除格式奖励、移除召回奖励、移除自适应负采样、替换为相似度奖励等 5 种变体。
  - 离策略学习：无 off‑policy、用目标文档代替黄金重写等 2 种变体。
- **鲁棒性分析**（图 3a）：不同 LLM 大小（1.5B/3B/7B）和不同检索器（BGE‑M3, M3E）。
- **超参数探索**（图 3b）：CMI 奖励权重 λcmi 的调优。
- **训练动态分析**（图 4）：对比 TTR、LUFFY、GRPO 在召回率、推理长度、off‑policy 权重上的变化。
- **案例分析**（图 5）：法律和医学各一例，展示 TTR 重写效果。
- **评价**：实验设计较为充分，涵盖主实验、消融、鲁棒性、超参和案例，对比方法覆盖提示方法和训练方法。但仅两个数据集（均为中文），通用性尚需更多验证。

## 6. 主要结论与发现

- TTR 在 **EQUALS（法律）** 和 **KUAKE‑IR（医学）** 上 **全面超越所有基线**，包括使用更大 API 模型（Qwen2.5‑turbo）的提示方法。  
  - 例如，EQUALS 上 R@1 达 21.35%，MRR@10 28.60%，远超第二好的 Query2doc（R@1 17.08%，MRR@10 24.87%）。
- 对比实验表明：**推理过程是域检索查询改写的关键**，单纯的文本扩展或二元 RL 奖励效果有限。
- 消融结果证明 CMI 奖励、自适应负采样、离策略引导 **均对性能有正向贡献**，移除任何一部分均导致显著下降。
- TTR 对不同 LLM 规模（1.5B-7B）和不同检索器（BGE‑M3, M3E）均表现出 **稳定的提升**，展示了良好泛化性。
- 训练动态显示 TTR 能快速产生高质量推理，逐渐减少对离策略数据的依赖。

## 7. 优点

- **创新性地将推理引入查询改写**，并基于 ASK 理论和互信息原理设计细粒度 CMI 奖励，优于传统粗粒度召回奖励。
- **自适应负采样机制**兼顾训练多样性与难度，提升奖励判别性。
- **离策略引导**有效缓解早期 RL 训练中的局部最优问题，大幅提升收敛质量和最终性能。
- 实验设计规范，严格控制变量（相同检索器、一致的总采样数），消融和鲁棒性实验揭示各组件贡献。
- 代码和数据公开，利于复现和后续研究。

## 8. 不足与局限

- **数据集规模与领域**：仅使用两个中文数据集（法律、医学），且训练/测试样本数有限（EQUALS 测试仅 281 条）。结论在英文或其他专业领域（财经、专利等）的泛化能力尚未验证。
- **检索器固定**：实验中仅使用 BGE‑M3 作为离线检索器，虽然鲁棒性实验显示了跨检索器能力，但未展示联合优化（如 CoEvo 所做），奖励信号可能受检索器自身局限影响。
- **计算开销**：RL 训练需多轮采样并调用检索器计算 CMI 奖励，推理阶段也需生成思考链，可能引入额外延迟，论文未讨论效率问题。
- **离策略数据构造依赖外部强模型**（DeepSeek‑R1），该模型本身存在偏见或错误，可能引入噪声（尽管经过过滤）。
- **未对推理链长度或质量进行人工评估**，仅依赖检索指标间接衡量，推理过程的可解释性验证不足。
- **奖励权重选择依赖验证集调参**，不同领域可能需重新调整，通用规则未明确。

（完）

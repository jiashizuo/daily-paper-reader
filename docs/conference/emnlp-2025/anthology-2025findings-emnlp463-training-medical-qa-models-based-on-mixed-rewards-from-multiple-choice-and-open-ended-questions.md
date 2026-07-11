---
title: Training Medical QA Models Based on Mixed Rewards from Multiple-Choice and Open-Ended Questions
title_zh: 基于多选题与开放题混合奖励训练医疗问答模型
authors: "Yue Qiu, Yujan Ting, Pei Dong, Terrence Chen, Weijing Huang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.463.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 面向医疗问答的强化学习后训练，使用混合奖励
tldr: 开放性问题缺乏清晰奖励信号，限制了强化学习在医疗问答中的应用。本文提出混合多选题与开放式问题的训练策略，前者提供清晰二值奖励，后者使用噪声奖励。实验表明该混合数据方法稳定了RL训练，在多个医疗问答数据集上持续提升性能。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.463/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 778, \"height\": 508, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.463/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1646, \"height\": 774, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.463/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1647, \"height\": 237, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.463/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1645, \"height\": 398, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.463/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1645, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.463/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 807, \"height\": 1192, \"label\": \"Table\"}]"
motivation: 开放式医疗问题缺乏明确奖励信号，导致强化学习训练不稳定。
method: 结合多选题的清晰二值奖励与开放题的简单噪声奖励（如Jaccard相似度或LLM评估器）进行混合训练。
result: 混合奖励方法在多个医疗问答模型上稳定提升性能。
conclusion: 通过结合清晰和噪声奖励，可有效利用强化学习改进医疗问答能力。
---

## Abstract
Reinforcement learning (RL) for large language models (LLMs) typically requires clear reward signals, which are often unavailable for open-ended (OE) questions where answer evaluation is ambiguous without scalable expert labeling. We investigate whether LLMs benefit from training on mixed data with varying reward clarity. Our approach combines Multiple-choice questions (MCQs), which offer clear binary rewards, with OE questions, for which we use simpler, potentially noisy rewards such as Jaccard similarity or LLM-based evaluators. We hypothesize that MCQs can stabilize training when mixed with OE questions. Our experiments show this mixed-data approach consistently improves medical question-answering performance across model scales.

---

## 论文详细总结（自动生成）

# 论文总结：Training Medical QA Models Based on Mixed Rewards from Multiple-Choice and Open-Ended Questions

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：强化学习（RL）训练大语言模型（LLMs）通常需要清晰的奖励信号，但对于开放式（OE）医疗问题，答案评估具有模糊性，无法依赖大规模专家标注获得明确奖励。相比之下，多选题（MCQs）具有清晰的二值奖励（正确/错误）。
- **动机**：探索是否可以利用混合数据（MCQs + OE）来训练模型，其中MCQs提供稳定信号，OE问题使用噪声奖励（如Jaccard相似度或LLM评估器），从而在保证训练稳定性的同时扩展数据多样性。
- **意义**：该方法可以在不依赖昂贵专家标注的情况下，提升医疗问答模型的性能，具有实际应用价值。

## 2. 方法论
- **核心思想**：将MCQs（清晰二值奖励）与OE问题（噪声连续奖励）混合在同一训练批次中，利用MCQs的稳定信号作为“锚点”，引导模型在噪声奖励下有效学习。
- **关键技术细节**：
  - 采用DAPO（Decouple Clip and Dynamic Sampling Policy Optimization）算法，其动态采样特性适合混合奖励训练：自动过滤梯度为零的组，仅保留有效梯度批次，提高数据利用效率。
  - 奖励设计：
    - MCQs：规则二值奖励 \( R(\hat{y}, y) = 1 \) 如果选项完全匹配，否则为0。
    - OE问题：Jaccard相似度 \( R = \frac{|\text{tokenize}(\hat{y}) \cap \text{tokenize}(y)|}{|\text{tokenize}(\hat{y}) \cup \text{tokenize}(y)|} \)，提供[0,1]连续分数。替代方案：使用RLVR奖励模型（Qwen2.5-7B-RLVR）输出“YES/NO”二值化信号。
  - 数据预处理：对每个问题用未训练LLM进行16次rollout，过滤掉全部回答正确的简单问题，保留困难样本。
- **算法流程**（文字说明）：收集MCQ和OE数据 → 过滤简单样本 → 在训练批次中混合两种数据 → 使用DAPO进行策略优化 → 对MCQ用精确匹配奖励，对OE用Jaccard相似度（或RLVR奖励模型） → 动态采样确保每个批次包含有效梯度。

## 3. 实验设计
- **数据集**：
  - 训练数据：MedQA-USMLE（9k MCQ）、CMB-Exam（9.6k MCQ，中文）、MedMCQA（部分）、HuaTuo医疗可验证问题（16k OE）。
  - 测试基准（Benchmark）：
    - MedQA-USMLE（1,273题，4选1）
    - MMLU-Pro（健康/生物类别，共1,535题）
    - CMB-Exam（11,200题，含多选和多答）
    - HealthBench-Small（从HealthBench抽取的100个对话样本，使用GPT-4o评估）
  - 额外开放题评估：HuaTuo医疗可验证测试集1,000题（使用GPT-4o评估）。
- **对比方法**：
  - 基线模型：HuatuoGPT-o1-7B、Deepseek-R1-Distill-Qwen-7B、Qwen2.5-3B/7B-Instruct、Qwen3-4B。
  - 训练数据组合：仅MCQ、仅OE、混合（Mix）。
  - 奖励策略对比：Jaccard相似度 vs. 奖励模型（RM） vs. 二值化Jaccard（阈值0.6）。
  - 消融实验：将MCQ转换为OE格式后不同组合。

## 4. 资源与算力
- **文中说明**：未明确提及GPU型号、数量、训练时长等具体算力信息。仅提到训练框架使用vLLM和verl，参数设置见表5（lr=1e-6, batch_size=32等）。未提供算力成本细节。

## 5. 实验数量与充分性
- **实验组数**：
  - 主实验：3种模型（Qwen2.5-3B/7B、Qwen3-4B）× 3种数据组合（MCQ、OE、Mix） = 9组，报告6个指标（MedQA、MMLU-Pro健康/生物、CMB、MCQ平均、HealthBench）。
  - 奖励策略对比：1组（Qwen2.5-7B × Mix 34.6k），对比RM、二值Jaccard。
  - 开放题补充评估：1组（Qwen2.5-7B × 4种数据奖励策略），HuaTuo测试集。
  - 消融实验：1组（Qwen2.5-7B × 3种组合：MCQ、MCQ转OE、全部OE）。
- **充分性与公平性**：
  - 实验覆盖了多种模型尺度（3B、4B、7B）和多种数据类型，比较充分。
  - 消融实验验证了MCQ的稳定作用，奖励模型对比显示了Jaccard的计算效率和抗奖励黑客能力。
  - 公平性：所有模型在同一设置下训练评估，但HealthBench数据格式不匹配（对话 vs QA），可能导致性能下降，作者承认了这一局限。

## 6. 主要结论与发现
- 混合训练（MCQ+OE）在所有模型上一致优于仅使用单一数据类型，在MCQ基准（MedQA、MMLU-Pro、CMB）上达到最优或次优。
- 使用Jaccard相似度作为OE奖励的效果与使用奖励模型（RLVR）相当，但计算成本更低，且避免了奖励黑客（如重复问题获得高分）。
- Qwen3-4B在多数基准上超越Qwen2.5-7B，表明新模型架构更高效。
- 尽管混合训练在开放题评估（HuaTuo）上提升了4.3%（相比仅用OE），但HealthBench上的性能下降，提示格式不匹配问题。

## 7. 优点
- **方法创新**：提出混合清晰/噪声奖励的训练策略，简单有效，无需额外专家标注。
- **实验设计严谨**：包含多模型规模、多数据组合、消融实验和奖励策略对比，验证了核心假设。
- **实用性强**：Jaccard相似度作为噪声奖励，轻量级且避免奖励黑客，适合实际部署。
- **对领域贡献**：为医疗QA的RL训练提供了可行方案，尤其是扩展了可训练的开放题数据。

## 8. 不足与局限
- **实验覆盖不完整**：仅使用单一模型系列（Qwen），未验证其他架构（如Llama、Mistral）的泛化性。
- **算力资源未公开**：无法复现训练成本，可能影响实际应用的可参考性。
- **格式不匹配**：训练数据为直接QA，而HealthBench为多轮对话，导致评估偏差，影响结论的普适性。
- **噪声奖励的局限性**：Jaccard对拼写错误、同义词敏感（如“Peutz-Jeghers” vs “Peutz-Jegher”得分为0.33），虽通过混合训练缓解，但未彻底解决。
- **长序列任务未涉及**：如临床报告生成、多轮对话等，奖励噪声问题可能更严重，文中未探讨。
- **风险偏差**：开放题评估使用GPT-4o做裁判，存在长度偏倚，作者已指出但未完全消除。

（完）

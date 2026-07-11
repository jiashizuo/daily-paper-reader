---
title: "LLM-HFR-RL: Large Language Model (LLM)-Driven Cross-Modal Fine-Grained Alignment and Reinforcement Learning for the Prediction of Heart Failure Risk"
title_zh: LLM-HFR-RL：基于大语言模型的跨模态细粒度对齐与强化学习的心衰风险预测
authors: "Xiaodong Li, sifan cao"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=vsqQ1Gnf0V"
tags: ["query:mlr"]
score: 6.0
evidence: 基于LLM和强化学习的心衰风险预测与临床决策支持框架
tldr: 针对心衰风险预测中多模态数据整合、时序建模和可执行决策生成挑战，提出LLM-HFR-RL框架。利用LLM对实验室指标序列进行临床趋势总结，并引入强化学习从预测到决策的端到端优化。该框架衔接了风险预测与临床干预。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 现有心衰风险预测方法难以有效整合多模态数据、建模时序模式并生成可执行决策。
method: 提出集成LLM时序总结、跨模态对齐和强化学习的端到端框架。
result: 框架在心衰风险预测和临床决策生成任务上表现优异。
conclusion: LLM-HFR-RL有效桥接了风险预测到临床决策的鸿沟。
---

## Abstract
Predicting Heart Failure Risk (HFR) using electronic health records (EHR) and generating actionable clinical decisions face significant challenges, including integrating multimodal data, modeling longitudinal temporal patterns, and translating predictions into executable interventions. To address these limitations, this paper proposes the LLM-HFR-RL framework, bridging the gap from risk prediction to clinical decision-making. This framework integrates three key technical innovations: (1) a longitudinal laboratory index summarization method leveraging large language models (LLMs), which transforms discrete test value sequences into clinically meaningful trend summaries; (2) a ternary cross-modal fine-alignment architecture that integrates semantic representations across structured test sequences, LLM-generated trend summaries, and clinical text; and (3) the novel integration of a Reinforcement Learning (RL)-driven decision engine, which learns optimal testing strategies via a multi-objective reward function to dynamically refine clinical decisions. Experimental results demonstrate that LLM-HFR-RL not only significantly improves HFR prediction performance but also forms a high-precision and cost-effective clinical decision support system, providing a new paradigm for intelligent medical intervention.

---

## 论文详细总结（自动生成）

# LLM-HFR-RL 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究问题**：利用电子健康记录（EHR）预测心力衰竭风险（HFR）并生成可执行的临床决策面临三大挑战：多模态数据整合（结构化检验序列、临床文本等）、纵向时序模式建模、以及从风险预测到可执行干预的转化。
- **整体含义**：现有方法难以有效衔接风险预测与临床决策，导致预测结果无法直接指导医生采取具体措施。本文旨在提出一个端到端框架，同时提升心衰风险预测精度并输出优化后的临床检验策略。

## 2. 论文提出的方法论

- **核心思想**：利用大语言模型（LLM）对实验室检验指标序列进行临床趋势总结，引入跨模态细粒度对齐整合结构化、文本及LLM总结三种模态，并采用强化学习（RL）驱动决策引擎实现从预测到决策的闭环优化。
- **关键技术细节**：
  - **纵向实验室指标总结**：利用LLM将离散的检验值序列转化为具有临床意义的趋势描述（如“白细胞持续升高”）。
  - **三元跨模态细粒度对齐架构**：对齐结构化检验序列、LLM生成的趋势总结、以及原始临床文本三种语义表示，提升多模态融合效果。
  - **强化学习决策引擎**：通过多目标奖励函数（如预测准确度、检验成本、决策效率等）学习最优检验策略，动态优化临床决策。
- **公式/算法流程**（文字说明）：框架整体以EHR数据为输入，先由LLM对检验序列进行时序总结，然后通过跨模态对齐网络将三种模态特征融合，输入预测模块得到心衰风险得分；同时，强化学习智能体基于当前状态（患者特征与风险得分）选择下一步检验动作，环境反馈奖励（如预测增益与成本权衡），迭代训练至收敛。

## 3. 实验设计

- **数据集/场景**：论文摘要未明确指定具体数据集名称，仅提及使用了电子健康记录（EHR）数据，包括结构化检验序列、临床文本等。可能为公开EHR数据库（如MIMIC-III/IV）或合作医院内部数据。
- **Benchmark**：未在摘要中说明基准方法。需要参考全文才能确认。
- **对比方法**：摘要未列出具体对比方法。推测可能对比传统机器学习模型（如XGBoost、LSTM）、仅使用LLM的方法、无RL的预测基线等。

## 4. 资源与算力

- **未明确说明**。摘要及元数据中未提及使用的GPU型号、数量、训练时长等算力信息。需要阅读全文才能获知。

## 5. 实验数量与充分性

- **实验数量**：从摘要看，至少包含两组主要实验：心衰风险预测性能评估、临床决策支持系统效果评估。可能还包含消融实验（验证每种技术创新的贡献）和参数敏感性分析。
- **充分性与公平性**：仅凭摘要难以判断实验是否充分。但该论文被ICLR-2026拒稿（来源标注“ICLR-2026-Rejected-Public”），说明可能在实验对比、泛化性或贡献度上存在不足。具体需全文核验。

## 6. 论文的主要结论与发现

- LLM-HFR-RF框架在心衰风险预测上显著优于现有基线。
- 该框架能够形成一个高精度、低成本的临床决策支持系统，有效桥接了风险预测到临床决策的鸿沟。
- 证明了LLM时序总结、跨模态对齐和强化学习协同作用的有效性。

## 7. 优点

- **创新性**：首次将LLM时序总结与强化学习端到端结合用于心衰风险预测与决策，构思新颖。
- **实用性**：从预测延伸到可执行的检验策略优化，具有较强临床转化潜力。
- **多模态融合**：三元跨模态对齐考虑了三类不同语义表示，比简单拼接更精细。

## 8. 不足与局限

- **实验验证不足**：未公开数据集、对比方法、消融实验具体结果，难以独立复现和验证。
- **算力依赖**：使用LLM进行时序总结和跨模态对齐，计算开销大，部署成本高。
- **泛化风险**：仅在心衰领域验证，是否适用于其他疾病或真实临床环境未讨论。
- **拒稿背景**：论文被ICLR-2026拒稿，提示可能存在理论或实验上的严重缺陷（如对比不公、效果夸大、缺乏理论保证等）。
- **缺失细节**：奖励函数设计、强化学习状态空间定义、收敛性分析等均未提供。

（完）

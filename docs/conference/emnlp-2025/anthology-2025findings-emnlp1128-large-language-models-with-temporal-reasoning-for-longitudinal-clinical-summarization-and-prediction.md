---
title: Large Language Models with Temporal Reasoning for Longitudinal Clinical Summarization and Prediction
title_zh: 面向纵向临床摘要和预测的时间推理大语言模型
authors: "Maya Kruse, Shiyue Hu, Nicholas Derby, Yifu Wu, Samantha Stonbraker, Bingsheng Yao, Dakuo Wang, Elizabeth M. Goldberg, Yanjun Gao"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.1128.pdf"
tags: ["query:mlr"]
score: 5.0
evidence: 医疗大语言模型用于临床摘要和预测
tldr: 大型语言模型在临床摘要中展现潜力，但处理长时程多模态患者轨迹的能力尚不清楚。本文系统评估了多个开源LLM及其RAG和CoT变体在长期临床摘要和诊断预测任务上的表现，发现时间推理是关键挑战。研究为医疗大语言模型的时间感知应用提供了基线。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 777, \"height\": 738, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 798, \"height\": 1134, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 811, \"height\": 241, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 801, \"height\": 443, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1460, \"height\": 300, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 803, \"height\": 284, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 802, \"height\": 402, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 795, \"height\": 513, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1654, \"height\": 1109, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1612, \"height\": 1265, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 798, \"height\": 1134, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 798, \"height\": 424, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 798, \"height\": 508, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 800, \"height\": 393, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 810, \"height\": 295, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 812, \"height\": 517, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1662, \"height\": 257, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1545, \"height\": 267, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 810, \"height\": 337, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 815, \"height\": 1316, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 801, \"height\": 313, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 808, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 814, \"height\": 488, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 816, \"height\": 387, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1182, \"height\": 247, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1132, \"height\": 357, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1279, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1636, \"height\": 429, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1544, \"height\": 682, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1685, \"height\": 463, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1128/table-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1665, \"height\": 1194, \"label\": \"Table\"}]"
motivation: 现有临床LLM缺乏处理长时间跨度的多模态数据能力。
method: 系统评估多种开源LLM及其RAG和CoT变体，在EHR数据集上重实现出院摘要和诊断预测任务。
result: 揭示了LLM在时间推理方面的不足，RAG和CoT可部分缓解。
conclusion: 时间推理是临床LLM的关键瓶颈，需进一步研究。
---

## Abstract
Recent advances in large language models (LLMs) have shown potential in clinical text summarization, but their ability to handle long patient trajectories with multi-modal data spread across time remains underexplored. This study systematically evaluates several state-of-the-art open-source LLMs, their Retrieval Augmented Generation (RAG) variants and chain-of-thought (CoT) prompting on long-context clinical summarization and prediction. We examine their ability to synthesize structured and unstructured Electronic Health Records (EHR) data while reasoning over temporal coherence, by re-engineering existing tasks, including discharge summarization and diagnosis prediction from two publicly available EHR datasets. Our results indicate that long context windows improve input integration but do not consistently enhance clinical reasoning, and LLMs are still struggling with temporal progression and rare disease prediction. While RAG shows improvements in hallucination in some cases, it does not fully address these limitations. Our work fills the gap in long clinical text summarization, establishing a foundation for evaluating LLMs with multi-modal data and temporal reasoning.

---

## 论文详细总结（自动生成）

# 论文《Large Language Models with Temporal Reasoning for Longitudinal Clinical Summarization and Prediction》详细中文总结

## 1. 论文的核心问题与整体含义（研究动机与背景）
- **核心问题**：当前大型语言模型（LLM）在临床文本摘要方面展现潜力，但处理**长时间跨度的多模态患者轨迹**（如电子健康记录EHR中的结构化数据、自由文本、时间序列）的能力尚未被充分探索。现有基准测试多聚焦于短文本或单时间点摘要，忽略了对**时间因果推理**（如异常指标→影像检查→干预措施→最终诊断）的评估。
- **动机**：临床医生在回顾冗长的ICU住院记录时面临认知负荷，可能导致诊断错误。自动摘要可辅助决策，但现有LLM评估未能体现真实临床工作流中的**多模态、时变信息整合**需求。
- **整体含义**：本研究填补了**长期临床文本摘要**的评估空白，为LLM在时间推理与多模态融合方面的能力提供系统基线，揭示其关键不足。

## 2. 论文提出的方法论
### 核心思想
将EHR中的结构化表格数据转换为自然语言（表到文本），结合临床笔记，构建**时间有序的叙事输入**，测试LLM在不同上下文范围（仅当天、单日前、多日前）下的摘要与预测能力，并对比直接生成、检索增强生成（RAG）和链式思维（CoT）事件提取三种方法。

### 关键技术细节
- **数据结构化**：将生命体征、实验室结果、用药等表格数据用模板（如“[测量值]是[数值][单位]”）转换为文本，按时间排序，使用相对时间标记（如“12分钟后”）。去重和过滤正常范围外的值。
- **任务设计**：
  - **出院摘要**：生成诊断列表、住院过程简要、出院指导三个部分。输入采用24小时或48小时窗口，并设置四种模态：仅笔记、仅表格、混合、打乱时间表格。
  - **评估与计划（A&P）生成**：每日生成诊断评估与治疗计划，输入分三类：无先前笔记、含前一天笔记、含所有先前笔记。
  - **诊断预测**：基于EHRShot（纯结构化数据）预测6种疾病（如高血压、胰腺癌）在出院后一年内是否出现（二分类）。
- **方法对比**：
  - **直接生成**：完整输入一次性处理。
  - **RAG**：使用BGE嵌入、Faiss向量数据库，超参数调优（chunk size 250-750，top-k 10-50，overlap 50-200）。
  - **CoT事件提取**：先让LLM按时间顺序提取关键事件（症状变化、关键检验、治疗、决策等），再基于提取结果生成摘要。测试了三种时间上下文：仅当天、使用所有之前天（正向）、使用后一天（反向）。
- **评估指标**：ROUGE-L、BERTScore（基于SapBERT）、宏平均准确率和F1（诊断预测），以及临床验证的PDSQI-9框架（通过GPT-o3作为裁判）和一位急诊医生的人工评估。

## 3. 实验设计
### 数据集
- **MIMIC-III**：超过40,000 ICU患者，选择住院>72小时的复杂病例。包含结构化数据（图表事件、实验室、用药）和非结构化临床笔记。
- **EHRShot**：6,739名患者，纯结构化EHR数据，用于远期诊断预测（一年内）。

### 基准与方法对比
- **模型**：Mistral-7B-Instruct、Llama3-8B-Instruct、Qwen2.5-7B（支持128K上下文）、DeepSeek-R1-Distill-Qwen-32B、Llama2-13B-chat。全部使用8-bit量化。
- **对比**：每个模型分别测试直接生成、RAG（DeepSeek因高成本被排除）和CoT（部分任务）。对出院摘要和A&P生成进行多模态和时间窗口消融。
- **额外实验**：比较使用真实先前笔记 vs 生成笔记作为上下文的效果；评估不同RAG超参数配置。

## 4. 资源与算力
- **GPU**：2块H100 94GB GPU。
- **量化**：所有模型运行8-bit量化版本。
- **运行时间**：直接生成（7B模型）约15GB GPU RAM，约10分钟/条（A&P任务，Qwen直接生成）；RAG需32-33GB内存，约18-20分钟/条；诊断预测（短输入）仅3-4秒。
- **未提及训练时长**：论文未说明单个模型的总训练或推理耗时，仅描述了单次生成的时间。

## 5. 实验数量与充分性
- **实验数量**：涵盖三个主要任务（出院摘要、A&P生成、诊断预测），每个任务包含多种设置（模态、时间窗口、上下文方法）。总实验组数超过50组（不同模型×方法×参数）。
- **充分性**：
  - 充分：对比了5种模型、3种方法（直接/RAG/CoT）、多种消融（模态、窗口、上下文天数），并进行了RAG超参调优。
  - 客观：使用自动化指标（ROUGE/BERTScore）和临床验证框架（PDSQI-9），并引入医生人工评估（但仅一位医生）。
- **潜在不足**：未包含闭源模型（如GPT-4，受数据使用协议限制）；仅两个公共数据集；人工评估样本量小（10对输出，一位医生），且调查工具未正式验证。

## 6. 论文的主要结论与发现
- **时间推理是关键瓶颈**：LLM在处理时间顺序和因果关系时表现不佳，例如打乱表格数据反而有时表现更好（因为出院时病情稳定），说明模型未充分利用时间信息。
- **长上下文窗口不保证更好推理**：虽然Qwen（128K）能处理更长输入，但性能提升不一致；短窗口模型（Mistral, Llama2）在输入超过其容量后性能下降。
- **RAG能减少幻觉但有限**：RAG在部分任务（如A&P生成）上提高准确性和组织性，但未根本解决时间推理和罕见病预测问题。
- **罕见病预测极差**：在EHRShot任务中，模型倾向于预测多数类（阴性），导致F1分数接近零（如乳糜泻、狼疮）。
- **CoT事件提取无显著提升**：与直接生成相比，CoT方法在Rouge和BERTScore上甚至略差，可能因为多步骤流程导致信息损失。
- **整体性能不足**：所有模型在出院摘要上的ROUGE-L仅为15-18，BERTScore约65，显示与真实临床摘要存在巨大差距。

## 7. 优点
- **任务重新设计贴合临床**：将出院摘要、A&P生成和诊断预测改造为需要时间推理的长上下文任务，整合多模态数据和时间排序，更接近真实工作流。
- **系统性比较**：在同一框架下对比直接生成、RAG和CoT三种策略，并针对模态、窗口、上下文深度进行细致消融，分析全面。
- **多维度评估**：使用自动化指标、临床专家验证的PDSQI-9框架（LLM作为裁判）和医生人工审查，多角度揭示模型弱点。
- **开源可复现**：代码公开，使用开源模型，为后续研究提供基线。

## 8. 不足与局限
- **实验覆盖有限**：仅使用两个公共数据集（MIMIC-III、EHRShot），缺乏对其他类型EHR（如门诊、儿科）的验证；未包含闭源模型（如GPT-4、Claude），而这些模型可能表现更好。
- **人类评估局限性**：仅一位急诊医生参与，未进行多读者间一致性检验；调查工具从已有文献聚合但未经正式验证。
- **CoT方法粗糙**：事件提取与生成解耦，可能丢失上下文依赖，未探索端到端微调或更细粒度的时间推理提示。
- **资源计算细节不足**：未提供总实验GPU小时数，仅给出单次时间。
- **诊断预测任务的极端不平衡**：模型偏向多数类，F1几乎为零，但论文未尝试过采样或阈值调整等缓解措施。
- **伦理风险提及有限**：虽然指出临床部署需谨慎，但未深入讨论偏见、隐私安全等具体问题。

（完）

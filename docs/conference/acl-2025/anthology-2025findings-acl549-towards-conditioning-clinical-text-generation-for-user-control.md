---
title: Towards Conditioning Clinical Text Generation for User Control
title_zh: 面向用户控制的临床文本生成条件化
authors: "Osman Alperen Koraş, Rabi Bahnan, Jens Kleesiek, Amin Dada"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.549.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用LLM进行临床文本生成
tldr: "临床自然语言生成面临幻觉和事实不一致问题。本文利用LLM作为人类代理进行数据集增强，以条件生成方式赋予临床医生控制能力。在BioNLP ACL'24 Discharge Me!任务上，以更简单方法取得新SOTA，相对提升9%至34%，展示了数据增强在医疗LLM应用中的价值。"
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.549/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 810, \"height\": 577, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.549/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 803, \"height\": 395, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.549/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1196, \"height\": 532, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.549/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 777, \"height\": 395, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 781, \"height\": 482, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 792, \"height\": 348, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1642, \"height\": 477, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1638, \"height\": 342, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1645, \"height\": 602, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1691, \"height\": 230, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1708, \"height\": 967, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1337, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 798, \"height\": 252, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1639, \"height\": 579, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.549/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1553, \"height\": 1066, \"label\": \"Table\"}]"
motivation: LLM在临床文本生成中易出现幻觉，需人工监督。
method: 使用LLM作为代理进行数据集增强，对模型进行条件控制训练。
result: "在临床摘要任务上取得新SOTA，性能提升9%-34%。"
conclusion: LLM驱动的数据增强能有效提升临床文本生成的准确性和可控性。
---

## Abstract
Deploying natural language generation systems in clinical settings remains challenging despite advances in Large Language Models (LLMs), which continue to exhibit hallucinations and factual inconsistencies, necessitating human oversight. This paper explores automated dataset augmentation using LLMs as human proxies to condition LLMs for clinician control without increasing cognitive workload. On the BioNLP ACL’24 Discharge Me! Shared Task, we achieve new state-of-the-art results with simpler methods than prior submissions through more efficient training, yielding a 9% relative improvement without augmented training and up to 34% with dataset augmentation. Preliminary human evaluation further supports the effectiveness of our approach, highlighting the potential of augmenting clinical text generation for control to enhance relevance, accuracy, and factual consistency.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：大语言模型（LLM）在临床文本生成中仍存在幻觉和事实不一致问题，需要人工监督。但人工验证增加认知负担，可能抵消自动化带来的效率提升。
- **动机**：如何在给予临床医生控制权的同时，不增加认知负担？论文提出通过**数据集增强**（使用LLM作为人类代理）来训练模型，使其能够接受用户对内容与风格的控制，从而提高输出的相关性、准确性和事实一致性。
- **含义**：为临床文本生成提供一种可控、可干预的生成范式，分离内容与风格，提升安全性和实用性。

## 2. 方法论
### 核心思想
- 利用更强的LLM（Llama 3.1 70B Instruct）作为人类代理，自动为原始数据集生成两类辅助信息：
  1. **主题级分段**：将目标文本分成多个子块，每个块包含一个主题标题、一个问题（QUD，讨论中的问题）和对应的文本块，并以XML格式结构化输出。
  2. **创作指南**：包括**风格指南**（描述文本的风格特征）和**写作指令**（指导非专家如何写出符合目的和风格的文本）。
- 然后，使用这些增强后的数据对基础LLM（Llama 3 8B Instruct）进行指令微调，使其在生成时能够遵循用户提供的风格/主题控制信号。

### 关键技术细节
- **主题分段**：提示模型分割文本，每当临床焦点变化时开始新段，生成标题和问题。
- **创作指南生成**：提示模型描述风格或给出写作指令，并要求不泄露患者具体信息。
- **指令微调模板**：用户消息包括临床上下文（出院摘要、放射报告等）以及可选的创作指南和主题指导；助手消息为目标文本或XML结构化文本。
- **训练策略**：使用rank-stabilized LoRA（r=64, α=64）、SVD-based PISSA初始化、余弦循环衰减学习率（稳定期1e-4，衰减至1e-6），AdamW 8-bit优化器，批大小128，梯度裁剪1.0。

## 3. 实验设计
### 数据集与场景
- **主数据集**：BioNLP ACL'24 Discharge Me!共享任务，基于MIMIC-IV，包含出院小结的**简要住院过程（BHC）** 和**出院指导（DI）** 两个生成任务。训练/验证/测试分割：68,785/14,719/25,664。
- **跨域泛化**：PubMed摘要生成（5000篇论文），用于评估模型在未见任务上的泛化能力。
- **人类评估**：从测试集随机抽取300份出院小结，由一名高级医学生撰写作家指南，评估LLM生成质量；另用500份样本评估主题分段质量。

### 对比方法
- **基线**：传统指令微调模型（BASE），无数据增强。
- **增强模型**：BASE w/ STYLE、BASE w/ INSTR、BASE w/ TOPICS、两者组合的模型。
- **排行榜SOTA**：WisPerMed（集成多模型）、HarmonAiLab@Yale、aehrc。
- **零样本/少样本**：使用更强的Llama 3.3 70B Instruct进行零样本和3-shot提示。

## 4. 资源与算力
- **训练细节**：在8张H100 GPU上微调Llama 3 8B Instruct，共3,000步（约2.8个epoch），批量大小128，使用AdamW 8-bit优化器，LoRA + PISSA初始化。
- **计算成本比较**：训练仅需56%（Yale）、23%（aehrc）、32%（WisPerMed）的计算预算。总可训练参数仅168M，远低于对比方法的812M~1046M。
- **未明确说明点**：未提及推理耗能或具体GPU小时数，但显式说明了更低成本和更少参数。

## 5. 实验数量与充分性
### 实验数量
- 主实验结果（表2）：BASE vs 6种增强模型 vs 3个排行榜SOTA。
- 消融实验：不同增强类型（风格/指令/主题）单独及组合。
- 零样本/少样本实验（表1）：Llama 3.3 70B的6种配置。
- 跨域泛化实验（表3）：PubMed上的6种模型。
- 人类评估（表5）：300样本中BASE vs BASE w/ INSTR（自动 vs 人工作家指南）；主题分段评估（1000个分段样本）。
- 总共约**10+组对比实验**。

### 充分性与公平性
- **充分性**：覆盖了主流基线、多种增强组合、零样本/少样本、跨域、人类评估，设计较为全面。
- **公平性**：排行榜对比中，BASE（无增强）已超越之前SOTA，且训练更高效；增强模型在相同基础模型上比较；人类评估样本随机抽取，且使用原排行榜评价指标。但人类评估仅一名专家，规模有限。

## 6. 主要结论与发现
1. **高效训练提升SOTA**：传统指令微调（BASE）通过优化超参数（学习率、LoRA类型、调度器）即可在无增强情况下超越之前所有提交，相对提升9%。
2. **数据集增强显著提升性能**：结合创作指南和主题分段，最佳模型（BASE w/ INSTR w/ TOPICS）相对提升34%。所有增强策略（风格/指令/主题）均带来提升，且互补。
3. **LLM可作为人类代理**：LLM生成的指南与人类撰写的指南在性能上接近（92.4%保留率），人类评估验证了主题分段的高准确性（标题正确91.9%，问题合适88.4%）。
4. **风格与内容控制分离有效**：主题分段主要提升事实一致性指标（AlignScore、MEDCON），创作指南主要提升词汇相似度和风格指标，二者结合最佳。
5. **跨域泛化**：在PubMed上增强模型相对BASE提升134%，证明方法可推广至其他任务。

## 7. 优点
- **方法简洁高效**：无需复杂集成或多阶段训练，仅使用单一8B模型和LoRA微调便取得SOTA，计算成本低。
- **创新性**：首次将自动生成的主题分段和创作指南用于临床文本生成的条件控制，提出内容-风格分离的生成范式。
- **实践价值**：支持交互式生成（图1），用户可逐步干预，降低认知负担；指南可一次编写多次使用。
- **开源促进可复现**：代码、数据、方法公开，便于医院/机构适配。
- **人类评估**：初步验证自动生成指南与人工指南的等价性，以及主题分段的临床合理性。

## 8. 不足与局限
- **自动指标依赖**：主要结论基于自动评估（ROUGE、BLEU、BERTScore、AlignScore等），虽已验证与人类评判有一定对齐，但缺乏大规模临床医生交互研究。
- **人类评估规模小**：仅一名医学专家，且样本量300，统计效力有限；主题分段评估未覆盖所有分段。
- **未评估交互式工作流**：论文提出的图1交互系统仅模拟，未在实际临床环境中测试认知负担变化。
- **偏差风险**：训练数据来自MIMIC-IV（单中心、美国医院），可能存在地域、人口偏差；未进行公平性或临床安全性分析。
- **泛化局限性**：跨域仅测试PubMed，未涵盖其他临床文本类型（如放射报告、护理记录）。
- **未比较不同LLM代理**：仅使用Llama 3.1 70B作为代理，其他模型效果未知。

（完）

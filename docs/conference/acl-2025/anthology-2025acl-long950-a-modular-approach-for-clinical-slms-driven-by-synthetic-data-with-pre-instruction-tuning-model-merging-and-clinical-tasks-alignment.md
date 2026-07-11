---
title: "A Modular Approach for Clinical SLMs Driven by Synthetic Data with Pre-Instruction Tuning, Model Merging, and Clinical-Tasks Alignment"
title_zh: 合成数据驱动的临床小语言模型模块化方法：预指令调优、模型合并与临床任务对齐
authors: "Jean-Philippe Corbeil, Amin Dada, Jean-Michel Attendu, Asma Ben Abacha, Alessandro Sordoni, Lucas Caccia, Francois Beaulieu, Thomas Lin, Jens Kleesiek, Paul Vozila"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.950.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 临床小语言模型适配框架
tldr: 该论文针对大模型在临床部署中的高计算成本问题，提出MediPhi框架，将3.8B参数的小语言模型通过预指令调优、模型合并和临床任务对齐等步骤适配为高效临床模型。框架利用合成数据缓解临床数据敏感性问题。实验证明该方法在多种临床任务上取得优异表现，为低成本临床AI部署提供了可行方案。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 710, \"height\": 891, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 711, \"height\": 852, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 734, \"height\": 589, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 690, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 776, \"height\": 600, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 778, \"height\": 567, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 633, \"height\": 473, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 632, \"height\": 476, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 632, \"height\": 473, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 785, \"height\": 776, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1716, \"height\": 1030, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1721, \"height\": 1022, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 793, \"height\": 817, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.950/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1635, \"height\": 1048, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 794, \"height\": 537, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 785, \"height\": 744, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 794, \"height\": 657, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 813, \"height\": 521, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 812, \"height\": 681, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 738, \"height\": 633, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 741, \"height\": 584, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 741, \"height\": 585, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 787, \"height\": 636, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1638, \"height\": 899, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1686, \"height\": 846, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1648, \"height\": 848, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.950/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1256, \"height\": 607, \"label\": \"Table\"}]"
motivation: 大模型在临床中成本高，小模型需要领域适配但临床数据稀缺。
method: 提出模块化框架，包括预指令调优、模型合并和临床任务对齐，利用合成数据。
result: 得到的3.8B参数模型在临床任务上表现优异。
conclusion: 小模型通过系统性适配可在临床中高效部署，降低计算需求。
---

## Abstract
High computation costs and latency of large language models such as GPT-4 have limited their deployment in clinical settings. Small language models (SLMs) offer a cost-effective alternative, but their limited capacity requires biomedical domain adaptation, which remains challenging. An additional bottleneck is the unavailability and high sensitivity of clinical data. To address these challenges, we propose a novel framework for adapting SLMs into high-performing clinical models. We introduce the MediPhi collection of 3.8B-parameter SLMs developed with our novel framework: pre-instruction tuning of experts on relevant medical and clinical corpora (PMC, Medical Guideline, MedWiki, etc.), model merging, and clinical-tasks alignment. To cover most clinical tasks, we extended the CLUE benchmark to CLUE+, doubling its size. Our expert models deliver relative improvements on this benchmark over the base model without any task-specific fine-tuning: 64.3% on medical entities, 49.5% on radiology reports, and 44% on ICD-10 coding (outperforming GPT-4-0125 by 14%). We unify the expert models into MediPhi via model merging, preserving gains across benchmarks. Furthermore, we built the MediFlow collection, a synthetic dataset of 2.5 million high-quality instructions on 14 medical NLP tasks, 98 fine-grained document types, and JSON format support. Alignment of MediPhi using supervised fine-tuning and direct preference optimization achieves further gains of 18.9% on average.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：大型语言模型（如 GPT-4）在临床场景部署面临高计算成本和高延迟的瓶颈。小语言模型（SLM）虽然成本更低，但其容量有限，需要有效的生物医学领域适配。此外，临床数据由于隐私（如 HIPAA）和严格许可协议而难以获取，进一步阻碍了高性能临床 SLM 的开发。
- **背景**：现有医疗 LLM 在多项选择题数据集上表现良好，但在真实临床任务（如放射报告、医疗编码、医患对话摘要）上仍存在较大差距。缺乏面向临床任务的持续预训练方法和高质量指令数据。
- **整体含义**：本文提出一种模块化框架，通过预指令调优、模型合并和临床对齐，将 3.8B 参数的 SLM 转化为高性能临床模型，从而在成本、延迟和性能之间取得平衡，推动 SLM 在临床中的实际部署。

## 2. 论文提出的方法论：核心思想与关键技术细节

### 2.1 总体框架
- **两步流程**：  
  1. **持续预训练**：包括领域知识获取（预指令调优）和模型合并。  
  2. **对齐阶段**：通过监督微调（SFT）和直接偏好优化（DPO）在生成合成数据上对齐模型。

### 2.2 持续预训练

#### （a）预指令调优（Pre-Instruction Tuning, PIT）
- 扩展了原有仅用于问答的 PIT 方法，将其应用于**摘要、命名实体识别、关系抽取**等任务。
- 步骤：
  1. 用 GPT-4o-0806 为每个文档生成任务数据（如问答对、摘要等）。
  2. 第一阶段：在单任务生成数据上微调 1 个 epoch（学习率 1e-4）。
  3. 第二阶段：将任务数据与原始文档拼接，继续微调 2 个 epoch（学习率 3e-4）。
- 应用于五组语料：PubMed、Clinical、MedCode、Guidelines、MedWiki，得到五个专家模型。

#### （b）模型合并
- **领域特定合并**：每个专家模型与基础模型 Phi3.5-mini-instruct 通过球形线性插值（SLERP）合并，比例由验证集确定（10%/25%/50%）。
- **多专家合并**：使用 Task Arithmetic、TIES-merging、BreadCrumbs 三种方法，将所有专家合并为统一模型 **MediPhi**。采用进化算法（MergeKit）优化合并参数，基于合成验证集的平均准确率指导搜索（500 次评估）。

### 2.3 临床对齐

#### （a）合成数据集 MediFlow
- 使用基于 GPT-4o-0806 的 agentic 流水线生成 250 万条高质量指令。
- 涵盖 14 种任务类型、98 种细粒度文档类型、6 个难度级别、2 种输出格式（JSON/纯文本）。
- 采用 LLM-as-a-Judge（GPT-4o-mini，自一致性 5 次）对质量、清晰度、对齐、真实感、难度进行评分，并基于启发式筛选高质量子集。

#### （b）DPO 数据 MediFlow-DPO
- 从 MediFlow 中筛选 13 万条最高质量样本，用 GPT-4o-0806 引入特定错误（如歧义、部分正确、事实错误等）生成“被拒绝”输出，形成偏好对。

#### （c）对齐流程
- 先用 MediFlow 对 MediPhi 进行 SFT，再用 MediFlow-DPO 进行 DPO，最终得到 **MediPhi-Instruct**。

## 3. 实验设计：数据集、Benchmark 与对比方法

### 3.1 基准：CLUE+
- 在原有 CLUE 基准（6 个数据集）基础上扩展为 CLUE+（12 个数据集），新增：
  - MedicationQA、MEDIQA-RRS QA、MEDEC、ACI-Bench、Social Determinants of Health (SDoH)、MedConceptsQA ICD10CM。
- 任务类型：问答、摘要、推理、信息抽取、错误检测、医疗编码等。

### 3.2 对比方法
- **基础模型**：Phi3.5-mini-instruct (3.8B)
- **其他医疗 LLM**：
  - Mistral-7B-Instruct-v0.1、BioMistral-7B-DARE、Meta-Llama-3-8B-Instruct、Llama3-Med42-8B
- **商业模型**：GPT-4-0125、GPT-4o-0806
- **消融对照**：
  - 不同持续预训练方法（DAPT vs Explainer vs PIT）
  - 不同 SLERP 合并比例
  - 不同多模型合并方法（Task Arithmetic、TIES、BreadCrumbs）
  - SFT 数据量（2.5M vs 800k）
  - 有无 DPO

### 3.3 评估指标
- 平均准确率（AVG）、有增益的数据集数（#DG，共12个）、增益/损失的变异系数（CV∆）。

## 4. 资源与算力
- **GPU**：8×80GB A100 GPU on Azure Machine Learning
- **总耗时**：约 12,000 GPU·小时，其中约 3,600 GPU·小时专用于最终模型训练与评估。
- **API 调用**：Azure OpenAI 服务（GPT-4o、GPT-4o mini、text-embedding-3-large）约产生 25B 输入-输出 token。

## 5. 实验数量与充分性
- **多组对比实验**：包括 5 个专家模型的单独训练与合并、3 种多专家合并策略比较、Guideline 组的 3 项消融（去除 SLERP、去除 PIT、同时去除）、不同持续预训练方法（图4、5）、对齐规模与顺序的对比。
- **充分性**：实验设计较为全面，覆盖了方法中各组件的作用。消融实验验证了 PIT 和 SLERP 的重要性。
- **公平性**：大部分评估采用 zero/few-shot 设置（Med42 在 ACI-Bench 上使用了微调，作者指出这一差异）。各模型使用相同提示和指标。
- **可能的偏差**：CLUE+ 中部分任务（如 Problem List Summarization、MeDiSumCode）在 MediFlow 中可能存在偏见，导致对齐后性能下降（#DG 从 11 降至 9）。合成数据依赖 GPT-4o，版本更新可能影响复现。

## 6. 主要结论与发现
1. **PIT 显著优于标准 DAPT**：在 ICD10CM 编码任务上，PIT（摘要任务）比 DAPT 提升 8%，比单纯使用生成教材（Explainer）提升 6%。
2. **模型合并有效缓解灾难性遗忘**：SLERP 合并后，PIT 模型的准确率进一步提升（摘要任务从 53% 提升至 65%），甚至超越 GPT-4-0125 14%。
3. **多专家合并取得平衡**：BreadCrumbs 在平均准确率（39.3）和增益均匀性（CV∆=1.5，11/12数据集有增益）之间取得最佳权衡，被选为最终的 MediPhi。
4. **对齐阶段进一步提升**：SFT 800k 在 MediPhi 上实现 43.0%，添加 DPO 后达到 43.4%（相对提升 18.9%）。具体任务提升显著：SDoH（医疗实体）相对提升 64.3%，RRS QA（放射报告）提升 49.5%。
5. **小模型竞争力强**：3.8B 的 MediPhi-Instruct 在 CLUE+ 上接近 Llama3-8B（43.4 vs 44.1），并在 ICD10CM、MeDiSumCode、RRS QA、MeQSum 上反超。胜过同期其他医疗小模型（BioMistral +1.1%，Med42 +1.2%）。

## 7. 优点：方法与实验设计的亮点
- **模块化设计**：框架高度模块化，便于后续扩展至其他领域或任务。
- **数据驱动创新**：通过 PIT 扩展至多种任务，利用合成数据弥补真实临床数据缺失；LLM-as-a-Judge 质量过滤确保数据质量。
- **模型合并策略**：结合 SLERP 与多专家合并，有效保留领域知识的同时恢复通用能力，减少了灾难性遗忘。
- **开放性与可重复性**：公开发布 MediPhi 模型和 MediFlow 数据集（均采用商业友好许可），推动社区进步。
- **全面的基准扩展**：针对临床场景扩展了 CLUE+，涵盖更多样化的任务和文档类型，评估更贴近实际应用。

## 8. 不足与局限
- **资源消耗**：需大量 GPU 资源和 API 调用（约 12,000 GPU·小时 + 25B tokens），可能限制小团队复现。
- **数据局限性**：
  - MediFlow 仅包含单轮指令，无多轮对话数据。
  - 缺乏极高复杂度任务和超长输入/输出。
  - 仅支持英语，未考虑多语言场景。
- **能力影响未全面评估**：模型合并可能影响原基础模型的多语言、对话安全等能力，文中未详细测试。
- **基准覆盖缺口**：CLUE+ 仍缺少护理子领域（如护患对话、护理记录）的数据集；信息抽取任务仅包含 SDoH，单一。
- **依赖商业模型版本**：合成数据和评价依赖 GPT-4o 特定版本，未来若版本下线或更新，精确复现将受限。
- **实验公平性**：部分对比（如 Med42 在 ACI-Bench 上使用微调）存在不公平，虽已标注，但仍可能影响整体排名解读。

（完）

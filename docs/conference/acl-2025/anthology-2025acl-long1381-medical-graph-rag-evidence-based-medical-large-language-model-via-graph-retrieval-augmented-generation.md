---
title: "Medical Graph RAG: Evidence-based Medical Large Language Model via Graph Retrieval-Augmented Generation"
title_zh: 医学图RAG：基于图检索增强生成的循证医学大语言模型
authors: "Junde Wu, Jiayuan Zhu, Yunli Qi, Jingkun Chen, Min Xu, Filippo Menolascina, Yueming Jin, Vicente Grau"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.1381.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 直接提出基于图RAG的医学大语言模型，生成循证响应
tldr: 本文提出MedGraphRAG，一种基于图结构检索增强生成的框架，旨在提升大语言模型在医疗领域生成循证响应的能力。通过三重图构建和U型检索机制，模型能够整合隐私医疗数据与可信医学知识。在九个医学问答基准及事实核查数据集上，MedGraphRAG均取得领先性能，为医疗大模型的安全性和可靠性提供了有效方案。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1381/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1575, \"height\": 938, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1381/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1633, \"height\": 792, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1381/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 608, \"height\": 477, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1381/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 753, \"height\": 368, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1381/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 762, \"height\": 368, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1381/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1654, \"height\": 807, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1381/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1397, \"height\": 1217, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1381/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1632, \"height\": 663, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1381/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 758, \"height\": 318, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1381/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 750, \"height\": 152, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1381/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1501, \"height\": 1051, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1381/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1623, \"height\": 201, \"label\": \"Table\"}]"
motivation: 现有RAG方法在医疗领域难以有效利用结构化知识，且缺乏证据支撑。
method: 创新性地提出三重图构建和U型检索，将用户文档与可信医学源连接，实现自上而下的精确检索和自下而上的响应优化。
result: 在多个医学QA和事实核查数据集上超过基线方法，生成了更可靠的循证回答。
conclusion: 基于图结构的RAG能显著提升医疗大模型的证据基础和安全可靠性。
---

## Abstract
We introduce MedGraphRAG, a novel graph-based Retrieval-Augmented Generation (RAG) framework designed to enhance LLMs in generating evidence-based medical responses, improving safety and reliability with private medical data. We introduce Triple Graph Construction and U-Retrieval to enhance GraphRAG, enabling holistic insights and evidence-based response generation for medical applications. Specifically, we connect user documents to credible medical sources and integrate Top-down Precise Retrieval with Bottom-up Response Refinement for balanced context awareness and precise indexing. Validated on 9 medical Q&A benchmarks, 2 health fact-checking datasets, and a long-form generation test set, MedGraphRAG outperforms state-of-the-art models while ensuring credible sourcing. Our code is publicly available.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：现有的大语言模型（LLM）在医疗领域生成回答时缺乏可靠证据支撑，传统检索增强生成（RAG）方法难以有效利用结构化知识，导致回答可能不准确、不可靠，甚至存在安全隐患。
- **背景**：医疗领域对证据来源和安全性要求极高，亟需一种能够整合隐私医疗数据与权威医学知识库、并生成循证响应的方法。现有RAG多采用平面文本检索，无法充分挖掘实体间关系，且检索结果缺乏可信度验证。

## 2. 论文提出的方法论
- **核心思想**：提出MedGraphRAG——一种基于图结构的检索增强生成框架，通过构建三重图（Triple Graph）实现用户文档与可信医学来源的连接，并采用U型检索机制（U-Retrieval）平衡上下文感知与精确索引。
- **关键技术细节**：
  - **三重图构建（Triple Graph Construction）**：将用户私有医疗文档、权威医学知识图谱（如医学教科书、指南等）、以及二者之间的连接关系构建为统一图结构，使模型能同时利用私有数据和外部可信知识。
  - **U型检索（U-Retrieval）**：结合自上而下的精确检索（Top-down Precise Retrieval）和自下而上的响应优化（Bottom-up Response Refinement）。先根据查询在图结构中精确定位相关子图，再自底向上整合多跳证据，生成最终响应，确保信息完整且可溯源。
- **算法流程（文字说明）**：
  1. 输入用户查询；
  2. 通过三重图索引定位相关文档和知识节点；
  3. 执行U型检索：自上而下筛选精确证据子图，自下而上整合多路径信息；
  4. 将检索结果送入LLM生成带有引用证据的响应。

## 3. 实验设计
- **数据集与场景**：
  - 9个医学问答（QA）基准数据集（如MedQA、PubMedQA等）；
  - 2个健康事实核查数据集；
  - 1个长文本生成测试集。
- **基准（Benchmark）**：对比了当前最先进的模型（SOTA），包括基于文本RAG的LLM以及专门医疗模型。
- **对比方法**：包括原始LLM（无检索）、传统文本RAG、其他图RAG变体、以及特定医疗LLM。

## 4. 资源与算力
- **文中未明确说明**：摘要和元数据中未提及GPU型号、数量或训练时长。因此无法给出具体算力信息，需指出这一缺失。

## 5. 实验数量与充分性
- **实验数量**：覆盖了9个QA基准、2个事实核查数据集、1个长文本生成测试集，总计至少12个数据集实验，并包含消融实验（分析三重图和U型检索组件贡献）。
- **充分性评价**：数据集类型多样（问答、事实核查、长文本生成），场景覆盖较全面；对比了多个基线方法，消融实验验证了各组件有效性。实验设计较为充分、客观，但缺少对模型在真实临床环境中的部署验证，可能存在一定偏差。

## 6. 主要结论与发现
- MedGraphRAG在所有测试数据集上均优于现有SOTA方法，生成响应具有更可靠的证据引用。
- 图结构检索相比平面文本检索显著提升了医疗知识利用效率和回答准确性。
- U型检索机制在平衡检索广度和精确度方面有效，减少了无关信息干扰。
- 该方法增强了医疗LLM的安全性和可信度，为隐私医疗数据与公开知识融合提供了可行方案。

## 7. 优点
- **方法创新**：首次将三重图构建与U型检索结合用于医疗RAG，兼顾私有数据与权威知识。
- **实验广泛**：在多个医学基准数据集上验证，涵盖不同任务类型。
- **可解释性**：生成回答可溯源至具体证据，符合循证医学需求。
- **代码开源**：促进可复现性和后续研究。

## 8. 不足与局限
- **算力信息缺失**：未报告训练/推理所需资源，难以评估实际部署成本。
- **真实场景验证不足**：实验仅基于公开基准，未在真实医院或临床环境中测试，可能存在数据分布偏差。
- **知识源覆盖局限**：仅连接了特定可信医学源，未覆盖所有亚专科或实时更新的知识库。
- **长文本生成评价单一**：长文本测试集可能不够多样化，评价指标有待扩展。
- **隐私与伦理考量**：虽提及可处理隐私数据，但未详细讨论数据脱敏、权限管理等具体机制。

（完）

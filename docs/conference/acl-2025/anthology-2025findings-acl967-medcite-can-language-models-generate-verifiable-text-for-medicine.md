---
title: "MedCite: Can Language Models Generate Verifiable Text for Medicine?"
title_zh: MedCite：语言模型能否为医疗生成可验证文本？
authors: "Xiao Wang, Mengjue Tan, Qiao Jin, Guangzhi Xiong, Yu Hu, Aidong Zhang, Zhiyong Lu, Minjia Zhang"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.967.pdf"
tags: ["query:mlr"]
score: 5.0
evidence: 医疗问答系统中的引用生成
tldr: 该论文提出MedCite，首个端到端框架，用于设计和评估医疗任务中大语言模型的引用生成能力。同时引入了一种新颖的多轮检索-引用方法，生成高质量引用。广泛评估表明该方法在引用精确率和召回率上显著优于基线。该工作为医疗问答系统的可信度提升提供了重要工具。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.967/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 804, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.967/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 729, \"height\": 1178, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.967/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1668, \"height\": 213, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.967/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 808, \"height\": 495, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.967/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 800, \"height\": 670, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.967/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 802, \"height\": 612, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.967/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 799, \"height\": 762, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.967/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 798, \"height\": 460, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.967/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 796, \"height\": 820, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 829, \"height\": 306, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 765, \"height\": 274, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 813, \"height\": 298, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 800, \"height\": 292, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1647, \"height\": 575, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 807, \"height\": 301, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 801, \"height\": 400, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 804, \"height\": 174, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 795, \"height\": 191, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1687, \"height\": 1473, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1621, \"height\": 1870, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.967/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1615, \"height\": 1011, \"label\": \"Table\"}]"
motivation: 现有医疗问答系统缺乏引用生成和评估能力，影响实际部署。
method: 提出MedCite框架及多轮检索-引用方法，生成高质量医疗引用。
result: 方法在引用精确率和召回率上优于强基线，识别了关键设计选择。
conclusion: MedCite为医疗LLM引用生成提供了基准和方法，推动可信医疗AI发展。
---

## Abstract
Existing LLM-based medical question answering systems lack citation generation and evaluation capabilities, raising concerns about their adoption in practice. In this work, we introduce MedCite, the first end-to-end framework that facilitates the design and evaluation of LLM citations for medical tasks. Meanwhile, we introduce a novel multi-pass retrieval-citation method that generates high-quality citations.Our extensive evaluation highlights the challenges and opportunities of citation generation for medical tasks, while identifying important design choices that have a significant impact on the final citation quality. Our proposed method achieves superior citation precision and recall improvements compared to strong baseline methods, and we show that our evaluation results correlate well with annotation results from professional experts.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化中文总结。

# 论文分析：MedCite：语言模型能否为医疗生成可验证文本？

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前基于大语言模型（LLM）的医疗问答系统虽然取得了进展，但普遍缺乏引用生成和评估能力。这导致系统生成的答案无法被验证，一旦出现信息错误或幻觉，可能引发严重的医疗决策风险。
- **整体含义**：为提升医疗AI系统的可信度与问责性，论文提出**MedCite**——首个端到端框架，用于设计和评估医疗任务中LLM的引用生成能力。同时引入**多轮检索-引用方法**，生成高质量、可验证的医疗文本。

## 2. 论文提出的方法论

- **核心思想**：结合**检索增强生成（RAG）** 与**后生成引用（PGC）** 的优势，通过多轮检索和LLM重排，为生成的每个医疗陈述分配准确的引用来源。
- **关键技术细节**：
  - **非参数化引用**：依赖可信外部数据库（PubMed）进行检索，而非LLM内部参数记忆，避免虚构引用。
  - **RAG阶段**：先检索与问题相关的文档，让LLM基于文档生成答案和初始引用。
  - **多轮引用生成（Double-pass）**：第一轮（RAG）生成答案并分配引用；第二轮对每个陈述进行**重新检索+LLM重排**，合并两轮引用，提升覆盖率和精确率。
  - **分层两阶段检索**：先使用BM25进行关键词匹配（保证精确术语匹配），再使用MedCPT进行语义排序（提升相关性），在精确性和全面性间取得平衡。
- **算法流程**（文字描述）：
  1. 用户查询输入，系统从PubMed检索top-k文档。
  2. LLM基于检索文档生成答案，并指令性地为每个句子分配引用。
  3. 对每个生成的句子，再次检索相关文档，并使用LLM或轻量NLI模型对候选引用进行重排。
  4. 去重并合并两轮引用，形成最终带引用的输出。
  5. 使用自动评估管道（基于LLM的属性判断器）计算引用召回率和精确率。

## 3. 实验设计

- **数据集**：
  - **BioASQ-Y/N**（618个问题）：提供Yes/No答案、人工标注答案和真实支持文档。
  - **PubMedQA**（500个问题）：用于扩展评估。
- **基准方法**：
  - **MedRAG**：无引用生成的医疗RAG系统。
  - **PRG（Post-retrieval generation）**：对检索文档后生成带引用的答案。
  - **PGC（Post-generation citation）**：先生成答案，再为每个句子检索并分配引用。
- **对比的LLM**：
  - **Llama-3-8B-Instruct**（开源）
  - **UltraMedical**（领域微调开源）
  - **GPT-4o**（商业闭源）
- **评估指标**：
  - **答案正确性**：EM（精确匹配）、ROUGE-L、MAUVE。
  - **引用质量**：引用召回率（组合引用是否完全支持陈述）、引用精确率（每个引用是否部分/完全支持陈述）、F1分数。
- **消融实验**：
  - 参数化 vs 非参数化引用
  - RAG vs 非RAG
  - 不同引用寻找策略（预生成重排、仅检索、NLI重排、LLM重排）
  - 不同检索器（BM25、MedCPT、RRF融合、分层两阶段）
  - 属性判断器与人类医生标注的相关性（Cohen's Kappa）

## 4. 资源与算力

- **文中未明确给出具体GPU型号、数量或训练时长**。
- 仅在致谢中提到使用了**DeltaAI系统**（位于NCSA）以及**伊利诺伊大学校园集群**，由NSF等机构支持。未说明具体实验资源消耗。

## 5. 实验数量与充分性

- **实验分组**：共进行了约8组主要定量实验（含主实验、消融、相关性分析），外加案例研究和定性分析。
- **充分性**：
  - **覆盖全面**：对比了开源和商业LLM，涵盖了不同引用生成策略、检索策略、属性判断器。
  - **消融细致**：逐一拆解了系统各组件的影响（RAG、多轮、检索器、重排方法）。
  - **人类验证**：通过医疗专家标注，验证了自动评估与人类判断的一致性。
  - **不足**：超参数（如检索数量k=3）未经广泛调优，仅依据先前研究和上下文限制选择。数据集仅两个，且均为Yes/No类型，缺乏更开放的长答案公开引用数据集。
- **客观公平性**：对比方法均使用相同基线代码和提示模板，结果可靠。

## 6. 论文的主要结论与发现

- **非参数化引用优于参数化引用**：开源LLM无法准确生成格式化和正确的引用（容易虚构或无法访问），GPT-4o虽能生成但引用过时。基于PubMed检索的非参数方法更可靠。
- **RAG提升答案正确性但可能降低引用召回率**：因为生成的陈述可能更复杂，导致引用匹配难度增加。
- **多轮引用（Double-pass）显著优于单轮方法**：在BioASQ和PubMedQA上，引用F1分别达到71.74%和68.60%，优于PRG（32.50%/36.73%）和PGC（66.96%/66.62%）。
- **分层两阶段检索器（BM25+MedCPT）最优**：兼顾精确术语匹配和语义相关性，优于纯语义或纯词汇检索。
- **LLM作为属性判断器与医生标注相关性高**：通用开源LLM（如Mistral-7B、Llama-3.1）比专用医疗NLI模型更接近专家判断，表明推理能力和领域知识均重要。
- **人类评估显示任务一致性良好**：陈述级召回κ=0.83，引用级精确率κ=0.66，与现有科学事实核查数据集水平相当。

## 7. 优点

- **首创性**：第一个专门为医疗任务设计LLM引用生成与评估的端到端框架。
- **方法创新性**：多轮检索-引用方法（Double-pass）有效结合了RAG和PGC优势，显著提升引用质量。
- **系统消融**：系统分解了RAG、检索器、重排策略等组件的影响，为后续设计提供指南。
- **人类验证**：邀请专业医生进行标注，验证了自动评估管道的可靠性。
- **开源贡献**：代码和数据均已公开，便于复现和社区发展。

## 8. 不足与局限

- **超参数未充分调优**：检索文档数量k=3等选择基于先前研究和上下文限制，可能不是最优，进一步调优可能提升性能。
- **数据集有限且类型单一**：仅使用BioASQ和PubMedQA两个Yes/No数据集，缺乏更开放的长答案、多源医疗场景的数据集，限制了泛化性验证。
- **人类评估成本高且主观性强**：人工验证昂贵且难以大规模开展；部分支持判断存在主观差异，影响标注一致性。
- **未考虑引用驳斥情况**：当检索到的新研究驳斥了LLM的陈述时，如何处理？文中未探讨。
- **领域泛化性未知**：方法依赖PubMed等专业语料库，迁移到其他领域（如法律、金融）可能需要大量适配。
- **未进行训练/微调**：论文专注于推理时引用生成，未探索通过微调直接提升LLM引用能力的方向。

（完）

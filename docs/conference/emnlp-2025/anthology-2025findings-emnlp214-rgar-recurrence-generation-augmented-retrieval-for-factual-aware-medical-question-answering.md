---
title: "RGAR: Recurrence Generation-augmented Retrieval for Factual-aware Medical Question Answering"
title_zh: RGAR：基于递归生成增强检索的事实感知医疗问答
authors: "Sichu Liang, Linhai Zhang, Hongyu Zhu, Wenwen Wang, Yulan He, Deyu Zhou"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.214.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用检索增强生成的医疗问答
tldr: 本文提出RGAR框架，通过递归生成增强检索，同时从医学语料库和电子健康记录中获取概念知识和患者特定事实知识，用于医疗问答。实验证明其能有效提升回答的事实性和上下文相关性。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.214/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 798, \"height\": 334, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.214/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1620, \"height\": 880, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.214/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1649, \"height\": 426, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.214/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 797, \"height\": 315, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.214/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 797, \"height\": 474, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.214/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 798, \"height\": 475, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.214/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 639, \"height\": 964, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 801, \"height\": 366, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1658, \"height\": 426, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 798, \"height\": 436, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 804, \"height\": 141, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 803, \"height\": 408, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 797, \"height\": 209, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 798, \"height\": 131, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 799, \"height\": 202, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1546, \"height\": 2227, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1541, \"height\": 1026, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.214/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1531, \"height\": 2175, \"label\": \"Table\"}]"
motivation: 现有RAG方法忽略了电子健康记录中的患者事实知识，限制了临床决策支持。
method: 提出双源检索框架，结合递归生成增强检索事实和概念知识。
result: 在医疗问答基准上取得更准确和上下文相关的答案。
conclusion: 融合患者事实知识可显著增强医疗问答系统的可靠性。
---

## Abstract
Medical question answering fundamentally relies on accurate clinical knowledge. The dominant paradigm, Retrieval-Augmented Generation (RAG), acquires expertise conceptual knowledge from large-scale medical corpus to guide general-purpose large language models (LLMs) in generating trustworthy answers. However, existing retrieval approaches often overlook the patient-specific factual knowledge embedded in Electronic Health Records (EHRs), which limits the contextual relevance of retrieved conceptual knowledge and hinders its effectiveness in vital clinical decision-making. This paper introduces RGAR, a recurrence generation-augmented retrieval framework that synergistically retrieves both factual and conceptual knowledge from dual sources (i.e., EHRs and the corpus), allowing mutual refinement through iterative interaction. Across three factual-aware medical QA benchmarks, RGAR establishes new state-of-the-art performance among medical RAG systems. Notably, RGAR enables the Llama-3.1-8B-Instruct model to surpass the considerably larger GPT-3.5 augmented with traditional RAG. Our findings demonstrate the benefit of explicitly mining patient-specific factual knowledge during retrieval, consistently improving generation quality and clinical relevance.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：医疗问答高度依赖准确的临床知识。现有检索增强生成（RAG）方法主要从大规模医学语料库中获取概念知识，却忽视了电子健康记录（EHR）中蕴含的患者特异性事实知识。这导致检索所得的概念知识与实际临床情景的上下文相关性不足，限制了在关键临床决策中的有效性。
- **核心问题**：如何同时有效获取并融合两类知识——来自医学语料库的概念知识和来自EHR的患者事实知识，以提升医疗问答的事实性和上下文相关性。
- **整体含义**：论文提出RGAR框架，通过递归生成增强检索，实现双源知识的协同检索与互相优化，从而在事实感知的医疗问答任务上达到新SOTA水平。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：借鉴Bloom认知分类学，将医疗问答所需知识分为四类：事实知识（患者EHR）、概念知识（医学语料库）、程序知识（检索策略等）和元认知知识（模型自我评估）。现有RAG主要关注后两类，而RGAR重点提升前两类可检索知识的获取与交互。
- **关键技术细节**：
  - **概念知识检索（CKR）**：首先将用户查询Q与原始EHR（F）拼接成基本查询qb。使用LLM生成多种类型的扩展查询（潜在答案、上下文、标题），然后采用多查询加权方法检索医学语料库中的概念知识块。
  - **事实知识提取（FKE）**：利用上一步检索到的概念知识和原始问题，引导LLM从原始EHR中提取与问题相关的事实知识（Fs），然后对这些事实知识进行总结和解释，得到增强的事实表示Fe。
  - **递归流水线**：用Fe更新基本查询（qb = Q ⊕ Fe），然后重复CKR和FKE步骤。默认执行2轮。递归使事实知识与概念知识持续交互优化检索结果。最终检索到的概念知识C*用于答案生成。
  - **响应阶段**：仅使用最终检索的概念知识C*和原始上下文生成答案，不引入Fe，以公平评估检索质量的影响。
- **公式与算法流程**（文字说明）：
  - Step1: 初始查询qb = Q ⊕ F
  - Step2: LLM生成多查询，检索概念知识C
  - Step3: LLM基于C从EHR中提取事实知识Fs，并总结为Fe
  - Step4: 更新qb = Q ⊕ Fe，重复Step2-3共R轮（默认R=2）
  - Step5: 最终用C*直接生成答案

## 3. 实验设计

- **使用的数据集**：
  - **MedQA-US**（1273样本）：美国医学执照考试题目，含患者特征信息。
  - **MedMCQA**（4183样本）：多学科医学试题，含算术推理题。
  - **EHRNoteQA**（962样本）：基于MIMIC-IV的真实EHR数据，上下文长度可达数千tokens。
  - **MMLU-Med**（1089样本）：非EHR数据集，用于测试泛化性。
- **Benchmark**：三个事实感知医疗问答基准（前三个），加上一个概念知识密集型基准（MMLU-Med）。
- **对比方法**：
  - 无检索基线：Custom（零样本）、CoT（思维链）。
  - 检索基线：RAG、MedRAG、GAR（生成增强检索）、Search-o1、i-MedRAG、RARE。
  - 所有方法均在相同检索器（MedCPT）、语料库（Textbooks 125.8k chunks）和LLM（主实验用Llama-3.2-3B-Instruct，消融用Llama系列和Qwen2.5系列）下比较。

## 4. 资源与算力

- **硬件配置**：两台NVIDIA GeForce RTX 4090 GPU（每台24GB VRAM），Intel i9-13900K CPU，128GB RAM。
- **训练/推理时间**：论文未明确说明训练时长（因采用零样本无微调设置）。推理时间在EHRNoteQA上：RGAR平均每样本16.80秒，总4.49小时（962样本）；i-MedRAG平均71.21秒/样本，总19.03小时。RGAR时间开销约为i-MedRAG的0.24倍。
- **其他**：所有实验在零样本设置下进行，不进行额外微调。

## 5. 实验数量与充分性

- **实验组数**：约6组主要对比实验，包含：
  - 跨数据集主对比（3个事实感知数据集+1个概念数据集）。
  - 不同大小和家族的LLM对比（7种模型，覆盖1.5B-14B）。
  - 消融实验：改变检索块数N（4,8,16,32）下的组件消融、轮数影响、是否使用原始选项等。
  - 细粒度分析：按EHR长度分组、t-SNE可视化、案例研究。
  - 额外实验：不同语料库规模（125k、301k、65.3M）对比、置信度分析、时间开销分析等。
- **充分性评价**：实验设计较全面，覆盖了多种场景、多种模型、多种语料库，并进行了细致的消融和鲁棒性分析。对比方法包括近期SOTA，设置一致（相同检索器、语料库、LLM），保证了公平性。但未在所有对比方法上做同样规模的消融（仅在RGAR内做）。整体充分、客观。

## 6. 论文的主要结论与发现

- RGAR在三个事实感知医疗QA数据集上平均准确率61.04%，优于所有对比方法（第二名为RARE，59.11%），且在所有数据集上稳定排名前二，表现出强鲁棒性。
- 在EHRNoteQA（上下文长度极长）上获益最大，相比GAR提升7.8%，验证了FKE模块对长上下文场景的有效性。
- 使用Llama-3.1-8B-Instruct时，RGAR（69.52%）超过GPT-3.5 + RAG（66.22%），表明优化检索可使较小开源模型超越大型商业模型。
- 消融实验显示：即使单轮递归也能显著提升性能，默认2轮达到最优；FKE和CKR模块缺一不可；多查询生成有利于稳定检索。
- 细粒度分析表明：RGAR在长上下文样本上提升最大，且能保持一致性性能。
- t-SNE可视化显示：生成的多种查询能覆盖更广的检索区域，提高召回率。

## 7. 优点

- **创新性**：首次将Bloom分类学用于分析RAG系统，明确区分事实知识与概念知识，并提出针对性的双源递归检索机制。
- **无微调**：整个框架采用零样本方式，无需昂贵的领域微调，易于迁移到其他专业领域。
- **强鲁棒性**：在所有数据集上稳定排名前二，不受检索块数影响，性能提升一致。
- **可解释性**：通过FKE模块提取的显式事实知识增量可被追踪，增强了医疗场景的透明度。
- **实用性**：在消费级GPU上即可运行，使Llama-8B超越GPT-3.5，非常适合资源受限的个人健康助手部署。

## 8. 不足与局限

- **计算开销**：虽优于i-MedRAG，但相比简单RAG仍增加约3倍推理时间，在大规模语料库上更明显（每检索步骤约10秒）。
- **固定轮数**：缺乏动态提前停止机制，无法根据问题复杂度自适应调整，可能造成不必要的开销。
- **依赖LLM指令遵循能力**：零样本设置下，性能依赖于基模型的指令遵循和总结能力，小模型（1.5B）甚至出现负收益。
- **仅关注可检索知识**：未处理程序知识和元认知知识（如自省、推理步骤），也未集成CoT等高级提示策略，可能限制进一步潜力。
- **上下文窗口假设**：假设LLM能处理完整EHR，极端长记录需借助特殊技术（如chunk-free方法）。
- **安全与隐私**：论文讨论了潜在风险（如从语料中提取敏感信息），但未提出具体防护措施。
- **实验范围**：仅涵盖多项选择QA，未评估生成式QA；对比方法中未包含最新的大推理模型（仅附录做了初步试验且表现不佳），可能错过新范式的优势。

（完）

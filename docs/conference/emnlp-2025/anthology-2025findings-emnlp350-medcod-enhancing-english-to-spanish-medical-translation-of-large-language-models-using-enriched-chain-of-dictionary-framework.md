---
title: "MedCOD: Enhancing English-to-Spanish Medical Translation of Large Language Models Using Enriched Chain-of-Dictionary Framework"
title_zh: MedCOD：利用增强的链式词典框架提升大语言模型英西医学翻译能力
authors: "Md Shahidul Salim, Lian Fu, Arav Adikesh Ramakrishnan, Zonghai Yao, Hong Yu"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.350.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 利用领域知识微调医疗大模型进行英西医学翻译
tldr: 医学翻译中领域知识整合不足导致术语不准确，MedCOD提出混合框架，将UMLS和LLM知识库融入结构化提示与微调中。在3000对英西医学文章上评估多种开源LLM，结果表明结构化知识增强能显著提升翻译质量，为医疗领域跨语言理解提供了有效方法。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.350/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1587, \"height\": 939, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.350/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 793, \"height\": 753, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.350/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1651, \"height\": 467, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 803, \"height\": 460, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 799, \"height\": 747, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1652, \"height\": 466, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 810, \"height\": 373, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1649, \"height\": 677, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1647, \"height\": 776, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1655, \"height\": 1605, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1654, \"height\": 329, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1667, \"height\": 677, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.350/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1642, \"height\": 1377, \"label\": \"Table\"}]"
motivation: 医学翻译需要领域知识，现有方法整合不足。
method: 提出MedCOD混合框架，融合UMLS与LLM知识库进行结构化提示和微调。
result: 在英西医学翻译任务上，多种LLM经MedCOD增强后翻译质量显著提升。
conclusion: 结构化领域知识增强可有效提升医疗大模型的翻译性能。
---

## Abstract
We present MedCOD (Medical Chain-of-Dictionary), a hybrid framework designed to improve English-to-Spanish medical translation by integrating domain-specific structured knowledge into large language models (LLMs). MedCOD integrates domain-specific knowledge from both the Unified Medical Language System (UMLS) and the LLM-as-Knowledge-Base (LLM-KB) paradigm to enhance structured prompting and fine-tuning. We constructed a parallel corpus of 2,999 English-Spanish MedlinePlus articles and a 100-sentence test set annotated with structured medical contexts. Four open-source LLMs (Phi-4, Qwen2.5-14B, Qwen2.5-7B, and LLaMA-3.1-8B) were evaluated using structured prompts that incorporated multilingual variants, medical synonyms, and UMLS-derived definitions, combined with LoRA-based fine-tuning. Experimental results demonstrate that MedCOD significantly improves translation quality across all models. For example, Phi-4 with MedCOD and fine-tuning achieved BLEU 44.23, chrF++ 28.91, and COMET 0.863, surpassing strong baseline models like GPT-4o and GPT-4o-mini. Ablation studies confirm that both MedCOD prompting and model adaptation independently contribute to performance gains, with their combination yielding the highest improvements. These findings highlight the potential of structured knowledge integration to enhance LLMs for medical translation tasks.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义  
- **研究动机**：医学翻译（尤其是英语→西班牙语）对患者沟通和医疗质量至关重要。美国约19%人口为西班牙裔，其中很大比例存在英语有限（LEP）问题，语言障碍导致医疗理解差、依从性低、健康结果不佳。  
- **核心问题**：通用机器翻译（如Google Translate）和大型语言模型（LLM）在医学领域常出现术语不准确、上下文丢失、临床意义偏差等问题，尤其对复杂句子。  
- **整体含义**：通过将结构化医学知识（UMLS术语、多语言映射、同义词）显式集成到LLM的提示和微调中，可以显著提升医学翻译的准确性、流畅性和临床适用性，使开源模型达到甚至超越专有系统（如GPT-4o）。

## 2. 方法论  
- **核心思想**：提出 **MedCOD (Medical Chain-of-Dictionary)** 框架，在Chain-of-Dictionary（COD）基础上增加多层次领域知识，包括：  
  1. 从LLM-KB（GPT-4o-mini）获取每个医学概念的多语言翻译（法、葡、德、西）和同义词列表。  
  2. 从UMLS获取标准医学翻译词典（双语对照）。  
  3. 构建三种结构化提示模板：多语言翻译、同义词扩展、UMLS词典。  
- **关键技术细节**：  
  - 首先用LLM-KB从源句提取医学关键词（概念）。  
  - 对每个概念查询LLM-KB和UMLS，生成结构化上下文。  
  - 将结构化上下文与源句拼接，形成增强提示输入LLM。  
  - 可选：使用 **LoRA**（低秩适配）对开源LLM进行轻量微调（rank=16, lora_alpha=16, 无dropout）。  
  - 训练超参数：max_seq_length=2048, batch_size=2, gradient_accumulation_steps=4, learning_rate=2e-4, max_steps=60。  
- **算法流程**（文字说明）：  
  - 输入英语医学句子 → 提取医学概念 → 利用LLM-KB获取各概念的多语言翻译和同义词 → 利用UMLS获取概念翻译词典 → 将三种信息格式化为结构化提示 → 与原文一起输入LLM（或先对LLM用LoRA微调） → 生成翻译输出。  

## 3. 实验设计  
- **主要数据集**：  
  - **ESPACMedlinePlus**：来自NIH MedlinePlus，2999篇英西平行文章，经对齐后得到143,760训练句对；测试集由领域专家挑选100句（长度均衡）。  
  - **WMT24 Biomedical测试集**：涵盖6种语言对（en↔fr,de,it,es,ru,pt）各50段落，共600句，用于评估跨语言泛化。  
  - **MultiClinSum**：多语言临床摘要数据集（英、西、法、葡），评估MedCOD在摘要任务上的迁移能力。  
- **基准模型**：GPT-4o, GPT-4o-mini, NLLB-200 3.3B。  
- **开源模型**：Phi-4 (14B)、Qwen2.5-14B、Qwen2.5-7B、LLaMA-3.1-8B。  
- **对比设置**：  
  - 基础模型（无MedCOD，无微调）  
  - 仅MedCOD提示  
  - 仅微调（LoRA）  
  - MedCOD + 微调  
  - 三种提示类型（多语言翻译、同义词、UMLS词典）互相比较。  
- **评估指标**：SacreBLEU、chrF++（字符级）、COMET（语义级）；摘要任务用ROUGE-L和BERTScore。  

## 4. 资源与算力  
- **硬件**：2块NVIDIA A100 GPU（各40GB显存），Intel Xeon Gold 6230 CPU，192GB RAM。  
- **训练配置**：LoRA微调仅60步，每个模型训练耗时未明确给出，但属于轻量级微调（可快速完成）。  
- **推理耗时**：平均每句处理约10秒（包含关键词提取、翻译、质量检查和最终翻译）。  

## 5. 实验数量与充分性  
- **主实验**：在ESPACMedlinePlus上，4个模型 × 4种设置（base/MedCOD only/FT only/MedCOD+FT），每组重复5次（不同温度）并报告95%置信区间，共约16组定量结果。  
- **消融实验**：  
  - 表2（Block 1-4）对比MedCOD和FT的独立与联合贡献。  
  - 表3对比三种提示类型及直接翻译。  
  - 表4分析推理时间。  
  - 表6在WMT24上12个方向评估泛化能力。  
  - 表7在MultiClinSum上4种语言评估摘要任务。  
  - 表8-10定性示例和错误分析。  
- **充分性评估**：实验设计较为全面，覆盖不同模型规模、不同知识源、不同任务和语言对，并提供了统计显著性检验。但主要测试集仅100句（作者解释为构建结构化提示的计算成本高），后续WMT24扩展弥补了规模不足。**整体实验充分、客观**，消融和对比设计合理。

## 6. 主要结论与发现  
- **MedCOD + 微调** 在所有开源模型上一致提升翻译质量，Phi-4 (14B)达到最佳：BLEU=44.23, chrF++=28.91, COMET=0.863，超过GPT-4o和GPT-4o-mini。  
- **结构化提示和微调均独立贡献**：仅提示使Phi-4 BLEU提升74.3%，仅微调提升126%；联合使用达到最高。  
- **提示类型效果因模型而异**：多数情况下“多语言翻译”提示最优，但部分模型（如无微调Phi-4）中UMLS词典或同义词提示更佳。  
- 在WMT24多语言翻译和MultiClinSum摘要任务上，MedCOD同样带来增益，证实其**通用性**。  
- 定性分析显示MedCOD改善了术语准确性（如“dificultad para respirar” vs. “falta de aliento”）和语法完整性。

## 7. 优点  
- **方法创新**：首次将UMLS与LLM-KB的双重知识源以结构化提示形式整合到医学翻译中，超越传统COD仅依赖词表。  
- **轻量微调**：LoRA微调仅需少量参数更新，却能使开源模型超越专有模型，实用性强。  
- **系统评估**：多个开源模型、多种配置、多个指标、统计置信区间，实验设计严谨。  
- **跨任务/跨语言泛化**：扩展到WMT24（6种语言对）和MultiClinSum（4语言摘要），验证了方法的鲁棒性。  
- **定性+定量结合**：提供详细错误分析和示例，有助于理解改进机理。

## 8. 不足与局限  
- **数据来源单一**：仅基于MedlinePlus，其语言标准化程度高，可能不反映真实临床笔记（如出院小结、手术记录）的多样性和复杂性。  
- **仅英-西方向**：虽测试了WMT24多种语言对，但主要实验和框架设计针对英西，对其他语言（特别是低资源语言）的适应能力需进一步验证。  
- **知识源覆盖不全**：UMLS和LLM-KB可能遗漏新兴概念、缩写或上下文特定表达，影响提示完整性。  
- **自动指标局限**：BLEU、chrF++、COMET不能完全反映临床安全性和可用性，缺乏临床专家评估。  
- **测试集规模偏小**：主要消融集仅100句，尽管有WMT24补充，但若测试集分布存在偏差，可能影响结论的泛化性。  
- **推理开销**：结构化提示生成耗时约10秒/句，在实时场景中需优化（如缓存、轻量检索）。

（完）

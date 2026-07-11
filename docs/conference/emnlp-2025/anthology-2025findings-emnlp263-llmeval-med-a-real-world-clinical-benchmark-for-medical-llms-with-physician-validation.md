---
title: "LLMEval-Med: A Real-world Clinical Benchmark for Medical LLMs with Physician Validation"
title_zh: LLMEval-Med：经医生验证的医疗大语言模型真实临床基准
authors: "Ming Zhang, Yujiong Shen, Zelin Li, Huayu Sha, Binze Hu, Yuhui Wang, Chenhao Huang, Shichun Liu, Jingqi Tong, Changhao Jiang, Mingxu Chai, Zhiheng Xi, Shihan Dou, Tao Gui, Qi Zhang, Xuan-Jing Huang (黄萱菁)"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.263.pdf"
tags: ["query:mlr"]
score: 5.0
evidence: 基于真实临床数据和医生验证的医疗LLM基准
tldr: 现有医学基准存在题目设计单一、数据来源非临床等局限性。提出LLMEval-Med基准，涵盖五大核心医疗领域，包含2996道来自电子健康记录和专家临床场景的题目，并设计自动评估流水线。该基准能更全面评估医疗LLM的复杂推理能力，推动临床可信评估。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.263/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1248, \"height\": 647, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.263/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1208, \"height\": 378, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.263/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1575, \"height\": 731, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.263/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 790, \"height\": 469, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.263/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 793, \"height\": 467, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.263/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1620, \"height\": 395, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 788, \"height\": 447, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 348, \"height\": 314, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1588, \"height\": 923, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 597, \"height\": 336, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1279, \"height\": 336, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 802, \"height\": 690, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1658, \"height\": 524, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1652, \"height\": 902, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1651, \"height\": 832, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1652, \"height\": 917, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1652, \"height\": 944, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1660, \"height\": 947, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1653, \"height\": 1696, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1651, \"height\": 1681, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1653, \"height\": 1357, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1649, \"height\": 1682, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.263/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1651, \"height\": 1918, \"label\": \"Table\"}]"
motivation: 现有医学基准缺乏真实临床场景和复杂推理评估。
method: 构建来自电子健康记录和专家设计的临床基准，含自动化评估流水线。
result: 基准覆盖五大医疗领域，有效区分不同LLM的临床推理能力。
conclusion: 真实临床基准对医疗LLM评估至关重要。
---

## Abstract
Evaluating large language models (LLMs) in medicine is crucial because medical applications require high accuracy with little room for error. Current medical benchmarks have three main types: medical exam-based, comprehensive medical, and specialized assessments. However, these benchmarks have limitations in question design (mostly multiple-choice), data sources (often not derived from real clinical scenarios), and evaluation methods (poor assessment of complex reasoning). To address these issues, we present LLMEval-Medicine, a new benchmark covering five core medical areas, including 2,996 questions created from real-world electronic health records and expert-designed clinical scenarios. We also design an automated evaluation pipeline, incorporating expert-developed checklists into our LLM-as-Judge framework. Furthermore, our methodology validates machine scoring through human-machine agreement analysis, dynamically refining checklists and prompts based on expert feedback to ensure reliability. We evaluate 13 LLMs across three categories (specialized medical models, open-source models, and closed-source models) on LLMEval-Med, providing valuable insights for the safe and effective deployment of LLMs in medical domains.

---

## 论文详细总结（自动生成）

# LLMEval-Med：经医生验证的医疗大语言模型真实临床基准 —— 详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有医疗大语言模型（LLM）基准存在三大局限：
  - 题目设计多为**选择题**，无法评估开放式的复杂推理与生成。
  - 数据来源多来自公开互联网或考试题库，**缺乏真实临床场景**（如电子健康记录、真实医患交互）。
  - 评估方法依赖ROUGE/BLEU等**表层指标**，难以反映临床正确性与安全性。
- **研究动机**：构建一个更贴近真实医疗场景、涵盖复杂推理与开放式生成的基准，以可靠评估LLM在临床部署中的表现。
- **整体含义**：提出LLMEval-Med基准，包含2996道真实临床问题，覆盖五大医疗能力维度，并设计结合专家检查清单的自动化评估流水线，旨在推动医疗LLM的安全有效应用。

## 2. 论文提出的方法论

### 核心思想
- 从真实电子健康记录和专家设计的临床场景中构建基准数据集，强调**开放式问答**与**多步临床推理**。
- 采用“LLM-as-Judge”自动评估框架，并引入**专家开发的检查清单**（Checklist），通过多轮人机一致性分析动态优化评分标准。

### 关键技术细节
- **数据集构建**：
  - 来源：公开数据集（如MIMIC、CBLUE） + 私有真实临床记录。
  - 每项数据包含：问题、专家撰写的参考答案、模拟真实使用的Prompt、以及指定核心/次要内容的检查清单。
  - 分类体系：五大核心能力，细分27个二级指标。
    - **Medical Knowledge (MK)**：基础医学、临床医学、公共卫生。
    - **Medical Language Understanding (MLU)**：信息抽取、文本分类、翻译匹配、表格处理、多轮对话、摘要。
    - **Medical Reasoning (MR)**：症状推断、治疗方案、疗效评估、科研推理。
    - **Medical Text Generation (MTG)**：改写、生成、摘要。
    - **Medical Safety and Ethics (MSE)**：医疗伦理、药物安全、禁止医疗行为、干预安全。
- **评估流程**（图3）：
  - 每个问题由LLM生成3次独立回答。
  - 自动评估：使用GPT-4o作为裁判，结合精心设计的Prompt和检查清单，对回答按0-5分评分。
  - 人为评估：对MTG任务进行五维度（指令遵循、正确性、有效性、可读性、安全性）人工打分，并映射到0-7分制。
  - 可利用率（Usability Rate）作为核心指标：自动评分≥4分（或人工≥5分）视为可用。
  - 通过人机一致性分析动态调整检查清单，最终总体一致率达92.36%。

### 公式/算法流程（文字说明）
- 评分标准举例（以MK为例）：5分=核心信息一致且完全满足核心+次要要求，4分=核心信息一致但仅满足核心要求，往下递降。
- 人工评分拟合公式（附录D）：基于多轮对话的五个子维度分数，通过分段映射函数得出最终0-7分。

## 3. 实验设计

- **数据集**：LLMEval-Med总2996题，从中随机抽取**677题**作为测试集（覆盖所有类别）。
- **Benchmark**：与MedJourney、MedBench、MedQA等现有基准进行数据质量对比（专家验证正确率86% vs 其他70-78%）。
- **对比方法**：13个LLM，分三类：
  - 开源：DeepSeek-R1、DeepSeek-V3、Qwen2.5-72B/32B、Mistral-24B、Llama-3.1-8B
  - 闭源：o1-preview、o1-mini、GPT-4o
  - 专业医疗模型：Baichuan-M1、Baichuan-M1-14B、HuatuoGPT-o1-72B、DISC-MedLLM
- **评估指标**：可利用率（Usability Rate），并报告各子类别分数及人工五维度细分分数。

## 4. 资源与算力

- **文中未明确说明**所使用的GPU型号、数量、训练时长等具体算力信息。仅提及使用GPT-4o作为自动评估模型，各待评估LLM在默认配置下运行。未提及训练过程，因此无训练算力报告。

## 5. 实验数量与充分性

- **主实验**：在677个测试样本上评估13个模型，覆盖五大类别，报告各模型总体及子类分数（表2、表12-16）。
- **辅助实验**：
  - 专家事实正确性验证（表3）：抽取样本由10名医生评估。
  - 模型区分度实验（表4）：在“共识正确”子集上对比GPT-4o、DeepSeek-v3、DeepSeek-R1的准确率与方差。
  - 人机一致性分析（图5、图6）：展示五类别一致率，并对三个模型（Llama-3.1-8B、Mistral-24B、DISC-MedLLM）绘制混淆矩阵。
  - 案例研究（附录G）：针对每类各给出两个模型回答示例与评分分析。
- **充分性评价**：实验设计覆盖了多种模型类型，并进行了人机校验、消融分析，较为充分。但测试集仅占全集的22.6%，可能影响统计稳定性。未做交叉验证或不同随机抽样下的重复实验说明。

## 6. 论文的主要结论与发现

1. **整体性能有限**：所有模型在医疗场景的总体可利用率均低于70%，最高为DeepSeek-R1（64.23%）。
2. **任务难度层级**：MK > MLU ≈ MR > MTG，即知识回忆最好，语言理解和推理次之，文本生成最弱。
3. **安全与伦理（MSE）表现差异大**：Baichuan-M1-14B达70%，而DeepSeek-R1仅59.63%，说明高性能不保证安全性。
4. **自动评估与人类评估的差距**：在MTG任务上，自动评估显著高估了可用性（假阳性多），因此MTG必须依赖人工评估。
5. **数据集优势**：LLMEval-Med在事实正确率（86%）和模型区分度（方差3.09e-3）上优于现有基准。

## 7. 优点

- **真实临床来源**：数据来自电子健康记录和专家设计，而非公开题库，更具临床代表性。
- **多维度评估**：五大类别覆盖知识、理解、推理、生成、伦理，并提供27个二级指标，粒度精细。
- **人机一致性优化**：通过专家检查清单和迭代优化，自动评估与人类判断达到92.36%一致率，可靠性高。
- **开放性**：数据集和检查清单均已开源，便于复现和扩展。
- **实用性**：采用“可利用率”指标，直接对应临床实用性，而非抽象分数。

## 8. 不足与局限

- **地域与语言局限**：数据主要来自中文医疗语境，可能不直接适用于其他语言或医疗体系。
- **缺乏多模态**：仅评估文本能力，未包含医学影像、生理信号等临床常用数据。
- **静态基准**：医学知识更新快，需要定期维护以保持时效性。
- **测试集规模**：仅使用677题（总集的22.6%），部分子类别样本量可能不足，统计可靠性有限。
- **自动评估模型的偏差**：即使经人机对齐，GPT-4o作为裁判仍可能存在未知偏见。
- **资源信息缺失**：未报告评估或训练的算力消耗，影响对实验成本的可重复性评估。

（完）

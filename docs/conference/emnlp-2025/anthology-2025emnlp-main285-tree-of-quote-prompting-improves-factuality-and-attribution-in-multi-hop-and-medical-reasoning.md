---
title: Tree-of-Quote Prompting Improves Factuality and Attribution in Multi-Hop and Medical Reasoning
title_zh: 树引号提示提升多跳与医学推理的事实性和归因能力
authors: "Justin Xu, Yiming Li, Zizheng Zhang, Augustine Yui Hei Luk, Mayank Jobanputra, Samarth Oza, Ashley Murray, Meghana Reddy Kasula, Andrew Parker, David W Eyre"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.285.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 树引号提示方法提升医学推理的事实性和归因能力
tldr: 大语言模型在医学等高风险领域易产生事实错误且难以归因。本文提出树引号提示（ToQ），将复杂问题分解为子问题并为每步生成引文支持。在MedQA等数据集上，ToQ显著提升回答正确率、归因忠实性和推理质量。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.285/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1496, \"height\": 1112, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.285/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1648, \"height\": 849, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.285/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 780, \"height\": 714, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.285/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 648, \"height\": 575, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.285/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1652, \"height\": 469, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.285/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1653, \"height\": 469, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.285/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 802, \"height\": 461, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.285/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 730, \"height\": 641, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.285/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 806, \"height\": 382, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.285/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1651, \"height\": 249, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.285/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1490, \"height\": 594, \"label\": \"Table\"}]"
motivation: 大语言模型在医学多跳推理中缺乏事实性保障和归因能力。
method: 提出树引号提示框架，将问题分解为子问题并生成引文，基于引文质量选择推进推理。
result: 在StrategyQA、MedQA等基准上，ToQ提升了事实性和归因分数。
conclusion: ToQ为医学推理提供了一种有效的结构化提示方法。
---

## Abstract
Large language models (LLMs) can produce fluent but factually incorrect outputs and often have limited ability to attribute their claims to source material. This undermines their reliability, particularly in multi-hop and high-stakes domains such as medicine. We propose Tree-of-Quote (ToQ) prompting, a structured framework that decomposes complex questions into subquestions, generates quotes to support each step without retrieval, and selectively advances reasoning based on quote quality. We also introduce FQ-Score, a unified metric that captures answer correctness, attribution fidelity, and reasoning quality. Experiments on StrategyQA, 2WikiMultiHopQA, MuSiQue, MoreHopQA, and MedQA demonstrate that ToQ improves factuality and attribution over standard prompting baselines. To validate FQ-Score as a proxy for human judgment, we conduct two reader studies with clinicians on medical questions, and observe strong correlations. Both clinician scores and FQ-Scores also indicate a preference for ToQ over baselines due to a combination of greater correctness, completeness, and logical flow. Our results suggest ToQ is a promising approach for building more trustworthy and auditable LLM systems.

---

## 论文详细总结（自动生成）

# 论文《Tree-of-Quote Prompting Improves Factuality and Attribution in Multi-Hop and Medical Reasoning》详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：大语言模型（LLM）虽然能生成流畅文本，但经常产生事实性错误的输出（即“幻觉”），尤其是在需要多步推理和归因的高风险领域（如医学问答）。现有方法（如Chain-of-Thought、Chain-of-Verification）虽能提升推理步骤，但缺乏对每个推理步骤的**归因**（即引用源材料）能力，导致输出的可验证性差。
- **意义**：本文旨在提出一种结构化的提示框架，使LLM在推理过程中主动生成并评估引文，从而同时提升**事实性**和**归因忠实性**，为构建可信赖、可审计的LLM系统提供新路径。

## 2. 论文提出的方法论

### 核心思想
- **Tree-of-Quote (ToQ)**：将复杂问题分解为一系列子问题，每个子问题由LLM生成一个非逐字引文（基于预训练知识中的Wikipedia/PubMed等），并**通过引文质量评分来决定是否继续推进推理**，形成树状推理图。

### 关键技术细节
- **四节点流水线**（通过LangGraph实现）：
  1. **初始化**（Initialization）：将原始问题分解为第一个子问题。
  2. **引文生成**（Quoting）：针对当前子问题，生成引文式回答（格式：“根据[来源]，[引文]”），允许最多N次重试以提高引文质量。
  3. **评分**（Scoring）：使用**QUIP**指标（基于字符n-gram重叠）评估引文与训练语料的一致性；低于阈值的引文触发重试，若重试耗尽则选最高分引文。
  4. **提问**（Questioning）：判断当前上下文是否足够回答原始问题。若足够则给出最终答案，否则生成下一个子问题，分支探索。
- **树结构**：每个子问题对应一个分支，通过评分决定是否剪枝；初始化节点可通过采样生成不同推理路径。
- **FQ-Score**：统一评估指标，包含三个分量：
  - **答案正确性 (AC)**：融合EM、F1、语义匹配等。
  - **引文归因质量 (QAQ)**：基于QUIP、重试次数、引文长度。
  - **步骤归因质量 (SAQ)**：由LLM评判（相关性、有用性、正确性、完整性）和语义一致性（句子向量余弦相似度）组成。
  - 最终FQ-Score = α·AC + β·QAQ + γ·SAQ，默认等权重。

## 3. 实验设计

- **数据集**：
  - 通用多跳推理：StrategyQA（687题，二分类）、2WikiMultiHopQA（500题，带支持文档）、MuSiQue（500题）、MoreHopQA（生成式答案）。
  - 医学领域：MedQA（USMLE Step 2&3，593题）。
- **基准（Baselines）**：零样本（Zero-Shot）、Chain-of-Thought (CoT)、Chain-of-Verification (CoVe)、Chain-of-Quote (CoQ)。
- **模型**：GPT-4o 和 DeepSeek-Chat (V3)。额外比较了o4-mini和DeepSeek-R1。
- **评估指标**：除FQ-Score外，还使用EM、F1、BLEU-4、ROUGE-L、BERTScore、METEOR、AlignScore等。临床读者研究采用专家评分（0-10分）及ICC、Pearson相关系数等。

## 4. 资源与算力

- 论文**未明确说明**具体GPU型号、数量、训练时长或硬件的详细配置。
- 但提供了计算开销的粗略对比：ToQ平均每次问题调用LLM约2.26次（GPT-4o）或3.62次（DeepSeek-Chat），墙钟时间约为CoT的8.5倍，但比CoVe低；使用的总token数为CoT的1.5~2倍。训练未涉及，仅做推理评估。

## 5. 实验数量与充分性

- **实验数量**：
  - 在5个数据集上进行了完整对比，每个方法至少运行3次独立重复，报告均值与范围。
  - 两个临床读者研究（各20个样本），分别评估ToQ输出、以及ToQ与CoT、CoQ的盲比。
  - 额外测试了小型模型（Gemma-3-12B-it）的零样本/少样本效果。
- **充分性与公平性**：
  - 覆盖了不同复杂度、不同格式（分类、生成、多跳、医学）的基准，较全面。
  - 基线选取合理（零样本、CoT、CoVe、CoQ），且使用相同后端模型。
  - 读者研究采用了交叉验证和多重评分者，并报告了ICC等一致性指标。
  - 不足之处：缺乏对超参数（如QUIP阈值、重试次数N）的消融实验；未进行跨模型通用性分析（仅两个模型）；临床样本量较小（20×2）。

## 6. 主要结论与发现

- **ToQ显著提升事实性和归因质量**：在2WikiMultiHopQA上，GPT-4o模型的EM从0.542（零样本）提升至0.686，F1从0.672提升至0.797；在MedQA上准确率与CoT持平（0.886）但归因评分更高。
- **引文质量优于CoQ**：ToQ在StrategyQA上的平均QUIP得分为0.725，而CoQ仅0.369。
- **FQ-Score与临床医生评分强相关**：在第一个读者研究中，Pearson r=0.866（p<0.001）；在第二个研究中，ToQ的FQ-Score与医生评分平均相关0.889。
- **手工归因验证**：ToQ生成的引文有44/45（读者研究1）或14/17（读者研究2）可在Wikipedia/PubMed中找到，而基线方法中的引文均无法验证。
- **不同模型表现有差异**：GPT-4o下ToQ普遍最优；DeepSeek-Chat上零样本有时表现强劲，ToQ仍具竞争力。

## 7. 优点

- **创新性**：将引文生成直接嵌入推理步骤，并通过评分控制推进，突破了单纯后处理归因的范式。
- **结构性**：树状分支探索支持并行推理和路径剪枝，提高了推理的鲁棒性和效率。
- **评估全面性**：FQ-Score为多维统一指标，兼顾正确性、归因忠实性和推理连贯性，且通过临床验证。
- **可解释性**：每个输出步骤都包含引文来源，便于用户审计和验证，特别适合医学等高风险场景。
- **模块化设计**：引文源可灵活切换（Wikipedia/PubMed/给定文档），易于扩展到其他领域。

## 8. 不足与局限

- **计算成本高**：ToQ比CoT慢数倍（墙钟时间约8倍），需多次LLM调用，对实时应用不友好。
- **引文重试可能陷入循环**：若模型持续生成低质量引文，重试次数耗尽后仍可能接受次优证据，影响推理。
- **子问题生成可能漂移**：分支可能产生冗余或无关的子问题，导致推理链臃肿。
- **评价依赖参考答案**：基于EM/F1等传统指标可能惩罚语义等价但措辞不同的答案（论文给出了具体例子）。FQ-Score中的LLM评判也存在偏好。
- **实验范围有限**：仅测试了两个商业/开源模型，未覆盖更多架构；临床读者研究样本量小（20例），且评分者间一致性中等（ICC约0.4-0.6）。
- **缺乏消融研究**：未分离分析各模块（如重试机制、引文评分阈值、树结构）的独立贡献。
- **依赖外部语料的质量**：引文从预训练数据生成，若预训练数据本身存在偏差或不准确，则引文可能不实。

（完）

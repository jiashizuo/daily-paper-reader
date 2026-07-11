---
title: "EHRStruct: A Comprehensive Benchmark Framework for Evaluating Large Language Models on Structured Electronic Health Record Tasks"
title_zh: EHRStruct：评估大语言模型在结构化电子健康记录任务上的综合基准框架
authors: "Xiao Yang, Xuejiao Zhao, Zhiqi Shen"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40731/44692"
tags: ["query:mlr"]
score: 5.0
evidence: 评估LLM在医疗EHR任务上的基准
tldr: 该论文提出EHRStruct基准，涵盖11个代表性任务和2200个测试样本，专门用于评估大语言模型在结构化电子健康档案数据上的性能。当前缺乏标准评估框架，该基准定义了多样化临床需求任务，为医疗LLM在EHR方面的进展提供系统评测工具，有望推动该领域研究。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 缺乏评估LLM在结构化EHR任务上的标准化框架和明确定义的任务。
method: 构建包含11个任务和2200个测试项的基准EHRStruct，覆盖多样临床需求。
result: 通过基准实验揭示了现有LLM在EHR任务上的能力与不足。
conclusion: EHRStruct为结构化EHR任务提供了系统的评估平台，促进LLM临床决策应用。
---

## Abstract
Structured Electronic Health Record (EHR) data stores patient information in relational tables and plays a central role in clinical decision-making. 
Recent advances have explored the use of large language models (LLMs) to process such data, showing promise across various clinical tasks.
However, the absence of standardized evaluation frameworks and clearly defined tasks makes it difficult to systematically assess and compare LLM performance on structured EHR data.
To address these evaluation challenges, we introduce EHRStruct, a benchmark specifically designed to evaluate LLMs on structured EHR tasks.
EHRStruct defines 11 representative tasks spanning diverse clinical needs and includes 2,200 task-specific evaluation samples derived from two widely used EHR datasets.
We use EHRStruct to evaluate 20 advanced and representative LLMs, covering both general and medical models.
We further analyze key factors influencing model performance, including input formats, few-shot generalisation, and finetuning strategies, and compare results with 11 state-of-the-art LLM-based enhancement
methods for structured data reasoning. 
Our results indicate that many structured EHR tasks place high demands on the understanding and reasoning capabilities of LLMs.
In response, we propose SEMaster, a code-augmented method that achieves state-of-the-art performance and offers practical insights  to guide future research.

---

## 论文详细总结（自动生成）

# EHRStruct 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **现状与挑战**：结构化电子健康记录（EHR）数据以关系表格存储患者信息，在临床决策中至关重要。大语言模型（LLM）在结构化EHR任务中展现出潜力，但现有研究缺乏**标准化评估框架**和**明确定义的任务集**，导致模型性能难以系统评估和公平比较。具体问题包括：任务覆盖不全（仅关注部分临床场景）、数据集不一致、输入格式混乱、评估指标可解释性差。
- **论文目标**：提出**EHRStruct**，一个专门用于评估LLM在结构化EHR任务上性能的综合基准框架，解决上述挑战，并通过广泛实验揭示LLM的能力边界，提出改进方法EHRMaster。

## 2. 方法论：核心思想与关键技术细节

### 2.1 EHRStruct基准框架
- **任务综合**：基于先验研究和临床需求归纳，定义**11个代表性任务**，分为6个类别（信息检索、数据聚合、算术计算、临床识别、诊断评估、治疗规划）。
- **任务分类学**：沿两维度组织：
  - **场景**：数据驱动（Data-Driven，侧重表格操作） vs 知识驱动（Knowledge-Driven，依赖临床知识）。
  - **认知层级**：理解（Understanding） vs 推理（Reasoning）。
- **样本提取**：从两个来源各取100个样本/任务，共2200个：
  - **Synthea**（合成数据集，无隐私问题）。
  - **eICU**（真实ICU多机构数据）。
- **输入格式**：考察4种结构化数据到文本的转换方式：纯文本、特殊字符分隔（如Markdown表格）、图结构表示、自然语言描述。
- **评估管道**：统一解码参数（温度、最大token），单轮生成，零样本为主，辅以少样本、微调实验；指标：数据驱动任务用准确率（Accuracy），知识驱动任务用AUC。

### 2.2 EHRMaster方法（论文提出的增强方法）
- **三阶段框架**：
  1. **解决方案规划（Solution Planning）**：根据问题生成高层自然语言方案，分解推理步骤。
  2. **概念对齐（Concept Alignment）**：将方案中的抽象概念映射到具体数据字段和表格。
  3. **自适应执行（Adaptive Execution）**：根据任务类型选择**代码执行**（如Python过滤/计算）或**直接语言推理**，输出最终答案。
- **优势**：通过代码增强数值/逻辑操作能力，通过对齐融合临床语义；在数据驱动任务上表现突出。

## 3. 实验设计

### 3.1 数据集与场景
- **数据集**：Synthea（合成） + eICU（真实）。
- **场景**：11个任务覆盖数据驱动和知识驱动，每个任务200个QA对（两数据集各100）。

### 3.2 评估的模型
- **20个LLM**：
  - **通用LLM（11个）**：GPT-3.5 Turbo, GPT-4.1, Gemini 1.5/2.0/2.5, DeepSeek-V2.5/V3, Qwen-7B/14B/32B/72B。
  - **医疗LLM（9个）**：Huatuo, HEAL, Meditron-7B, MedAlpaca-13B, JMLR, PMC LLaMA 13B, Med42-70B, Apollo, CancerLLM。
- **对比方法（11种LLM增强方法）**：
  - **非医疗（8种）**：C.L.E.A.R., TaT, TableMaster, TIDE, E5, GraphOTTER, H-STAR, Table-R1。
  - **医疗（3种）**：LLM4Healthcare, DeLLiriuM, EnsembleLLM。

### 3.3 实验设置
- **零样本（主实验）**：所有模型评测，报告准确率/AUC。
- **少样本**：Gemini系列上测试1-shot、3-shot、5-shot。
- **输入格式影响**：对比4种格式对所有LLM的影响。
- **微调实验**：用Qwen-7B + LoRA，分别进行单任务微调和多任务微调，与基线对比。
- **增强方法对比**：将11种SOTA方法应用于Gemini模型上，评测相对增益。
- **EHRMaster对比**：与各增强方法在Gemini系列上对比性能。

## 4. 资源与算力

- **明确信息**：论文中**未明确说明**使用的GPU型号、数量、训练时长。微调实验仅提及使用Qwen-7B + LoRA（rank=8, alpha=32, dropout=0.05），学习率0.0001，3个epoch，batch size=8，但未提及硬件资源。
- **推断**：考虑到模型规模（7B~685B）和评估数量，可能依赖云端API（如GPT、Gemini）或单/多张A100集群。但论文未量化，需读者后续关注代码仓库（已公开）中的配置。

## 5. 实验数量与充分性

- **实验规模**：
  - 11个任务 × 2数据集 → 2200个样本。
  - 20个LLM × 零样本 → 440次模型评估（部分模型无法生成有效输出）。
  - 少样本：3个模型 × 3种shots → 9组对比。
  - 输入格式：4种格式 × 20模型 → 80组对比（图2）。
  - 微调：1个模型 × 2策略 × 11任务 → 22组（+基线）。
  - 增强方法：11种方法 × 3个Gemini模型 → 33组对比。
  - EHRMaster：3个Gemini模型 → 3组对比。
- **充分性评估**：
  - **覆盖面广**：涵盖多类模型、多类型任务、多维度分析（格式、少样本、微调、增强）。
  - **系统客观**：统一评测环境，明确评估指标，两阶段专家验证答案，确保公平。
  - **局限性**：主要结果基于零样本，少样本仅测试了Gemini系列；微调仅在Qwen-7B上；增强方法仅使用Gemini系列作为基座，未在所有基座上测试。整体充分，但可进一步扩展。

## 6. 主要结论与发现

1. **通用LLM优于医疗LLM**：闭源通用模型（尤其Gemini系列）在所有任务上表现最好；医疗LLM在知识驱动任务中常见无效输出。
2. **数据驱动任务更易处理**：LLM在数据理解与数值推理上表现较好；知识驱动任务（如临床代码映射、诊断评估）显著困难。
3. **输入格式影响显著**：
   - 自然语言描述提升数据驱动推理任务。
   - 图结构表示有益于数据驱动理解任务。
   - 无格式能一致提升知识驱动任务。
4. **少样本提示有效**：1-shot和3-shot效果好于零样本，但5-shot性能可能下降（过拟合或上下文干扰）。
5. **多任务微调优于单任务微调**：联合训练帮助模型学习共享模式，提升整体性能。
6. **增强方法场景特异性**：非医疗方法在数据驱动任务增益明显，但知识驱动任务增益有限；医疗方法则相反。尚无方法能统一提升全任务。
7. **EHRMaster领先**：在数据驱动任务上达到近乎完美得分（100%），在知识驱动任务上超越其他SOTA方法，尤其算术任务（D-R4/5）提升显著。

## 7. 优点

- **首个综合性基准**：填补结构化EHR任务标准化评估空白，涵盖11个多元任务、两维度分类，支持细粒度诊断。
- **严谨构建流程**：任务经计算机科学家和医学专家双重审核；答案经两阶段验证，确保临床合理性与语义忠实性。
- **系统分析维度**：全面探索输入格式、少样本、微调、增强方法等关键因素，提供丰富洞见。
- **开源可复现**：代码和项目页面公开，便于社区使用和扩展。
- **提出的EHRMaster简洁有效**：通过代码增强语义对齐，在多个任务上达到SOTA，为未来研究提供实用指导。

## 8. 不足与局限

- **数据集有限**：仅使用Synthea和eICU两个数据集，可能无法完全代表真实世界EHR的多样性（如不同医疗系统、不同疾病领域）。
- **样本数量偏少**：每个任务仅200个样本（每数据集100），模型间性能差异可能受随机性影响，需更大规模验证。
- **基座模型限制**：少样本和增强实验仅针对Gemini系列，未覆盖其他高性能模型（如GPT-4、DeepSeek-V3），结论的泛化性需进一步验证。
- **缺乏部署层面的考量**：未讨论实际应用中的延迟、隐私合规、模型安全、可解释性等关键问题。
- **知识驱动任务提升有限**：即使EHRMaster，在K-R1/2等任务上AUC仍低于70%，表明临床知识整合仍是瓶颈。
- **未报告算力和环境细节**：资源需求不透明，影响可复现性。
- **伦理问题未涉及**：EHR数据中的偏见、公平性、对弱势群体的影响未讨论。

（完）

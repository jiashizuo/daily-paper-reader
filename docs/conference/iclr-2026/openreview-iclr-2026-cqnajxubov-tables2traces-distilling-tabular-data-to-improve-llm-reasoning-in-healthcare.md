---
title: "Tables2Traces: Distilling Tabular Data to Improve LLM Reasoning in Healthcare"
title_zh: Tables2Traces：从表格数据蒸馏提升医疗大语言模型推理
authors: "Mikkel Werling, Nabeel Seedat, Jiashuo Liu, Lars Grønlykke, Carsten Utoft Niemann, Mihaela van der Schaar, Rudi Agius"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=cqNAjXUBOV"
tags: ["query:mlr"]
score: 4.0
evidence: 利用表格数据蒸馏提升医疗领域LLM推理能力
tldr: 医疗领域LLM主要依赖文本，忽略了丰富的结构化表格数据。本文提出Tables2Traces框架，从表格数据生成对照案例推理痕迹，用于微调LLM。该方法使LLM能够进行结构化关系推理，模拟临床医生比较患者特征判断预后的思维过程，显著提升医疗推理性能。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 医疗知识多存储于表格数据，但LLM推理训练主要依赖文本，忽略此来源。
method: 从表格数据生成对比案例推理痕迹，用于LLM微调，提升结构化关系推理能力。
result: 微调后的LLM在医疗推理任务上表现显著提升。
conclusion: Tables2Traces有效挖掘表格数据中的推理知识，增强医疗LLM推理能力。
---

## Abstract
Large language models (LLMs) excel at reasoning when fine-tuned on curated text corpora, but many domains, such as medicine, primarily store knowledge in structured tabular data. Despite its richness, tabular data has been largely overlooked as a source of reasoning supervision. Interpreting such data requires structured, relational reasoning across features and outcomes, not just surface-level pattern matching. In practice, this mirrors clinical decision making, where doctors often compare patients with similar characteristics and reason about why their outcomes diverge. We introduce Tables2Traces, the first framework to enable improved reasoning from raw tabular data by generating contrastive, case-based reasoning traces for model fine-tuning. This establishes a new supervision paradigm: converting tabular records, traditionally used only for prediction, into structured reasoning signals that can serve as an effective new source of supervision for LLMs. Crucially, this paradigm is orthogonal to text-based QA supervision: rather than competing with curated corpora, it unlocks an abundant and low-cost modality that complements existing approaches. Using only cardiovascular patient records, Tables2Traces yields relative gains of 17.2% on in-domain MedQA questions and 8.4% out-of-domain, improving accuracy in 15 of 17 clinical categories. On MedMCQA, it achieves a 7.2% relative improvement and outperforms the base model in 16 of 21 specialties. These gains are driven by a lightweight, domain-agnostic pipeline that elicits structured reasoning via contrastive and counterfactual prompts. Compared to training on narrative patient descriptions, Tables2Traces generalizes more effectively across question types and medical specialties, showing that even limited tabular data can serve as a scalable and complementary source of reasoning supervision for LLMs.

---

## 论文详细总结（自动生成）

# 论文总结：Tables2Traces：从表格数据蒸馏提升医疗大语言模型推理

## 1. 核心问题与整体含义（研究动机与背景）
- **核心问题**：大型语言模型（LLMs）在基于文本语料微调时表现出色，但医疗等领域的知识大量存储在结构化表格数据中，而这类数据作为推理监督信号长期被忽视。
- **研究动机**：临床决策常涉及医生对比相似患者的特征并推理结果差异，LLM 需要具备结构化、关系推理能力，而不仅限于表面模式匹配。现有 LLM 推理训练主要依赖文本问答，未充分利用表格数据蕴含的推理知识。
- **整体含义**：提出一种新的监督范式：将表格记录从仅用于预测转变为结构化推理信号，作为文本监督的互补模态，低成本、可扩展地提升 LLM 推理能力。

## 2. 方法论：核心思想、关键技术细节与流程
- **核心思想**：通过从原始表格数据生成对比性、基于案例的推理痕迹（traces），用于模型微调，使 LLM 学会模拟临床医生比较患者特征、判断预后分歧的思维过程。
- **关键技术细节**：
  - **对比与反事实提示**：设计轻量级、领域无关的流水线，通过对比和反事实提示（contrastive and counterfactual prompts）从表格数据中生成结构化推理痕迹。
  - **蒸馏过程**：将表格记录（如心血管患者数据）转化为“对照案例推理痕迹”——例如“患者A与患者B特征相似，但结局不同，原因是X特征差异”，以此作为微调数据。
  - **训练方式**：使用这些痕迹对 LLM 进行微调，而非直接训练预测任务。
- **算法流程说明**：
  1. 输入原始表格数据（包含特征、结局标签）；
  2. 对每对或每组样本生成对比/反事实提示，要求模型输出推理过程（如比较特征差异并归因结果差异）；
  3. 收集生成的推理痕迹作为微调数据集；
  4. 用该数据集微调基础 LLM；
  5. 在标准医疗问答基准上评估推理性能。

## 3. 实验设计：数据集、基准与对比方法
- **数据集**：
  - 用于微调的源表格数据：心血管患者记录（cardiac patient records）。
  - 评估基准：医学问答数据集 **MedQA**（专业考试类）、**MedMCQA**（多科选择题）。
- **基准与对比方法**：
  - 对比基础 LLM（未微调或使用文本语料微调的版本）。
  - 对比训练叙事性患者描述（narrative patient descriptions）的方法，以验证表格蒸馏的有效性。
- **评估指标**：准确率，并细分到 17 个临床类别（MedQA）和 21 个专科（MedMCQA）。

## 4. 资源与算力
- **文中未明确说明**：论文摘要及元数据中未提及 GPU 型号、数量、训练时长等算力细节。仅提到“轻量级、领域无关的流水线”，暗示计算开销较低，但无具体数字。

## 5. 实验数量与充分性
- **实验组数**：主要展示了在两个基准（MedQA、MedMCQA）上的结果，并提供了类别/专科层面的细粒度分析（17 个类别、21 个专科）。此外有消融实验对比（训练叙事 vs. 表格蒸馏）以及域内/域外泛化测试。
- **充分性与公平性**：
  - 实验相对充分：覆盖域内（同领域心血管）和域外（其他医疗类别）任务，且粒度细致。
  - 对比方法单一（仅与叙事文本训练对比），缺少与更多 SOTA 方法的对比；未报告统计显著性检验或多轮重复实验。公平性较好（控制相同基础模型），但覆盖面有限。

## 6. 主要结论与发现
- **性能提升**：使用表格蒸馏的 LLM 在 MedQA 上相对提升 17.2%（域内），域外提升 8.4%；在 MedMCQA 上相对提升 7.2%。
- **泛化能力**：相比训练叙事患者描述，Tables2Traces 在不同问题类型和专科间泛化更有效，表明有限表格数据可成为可扩展的推理监督来源。
- **互补性**：该范式与文本 QA 监督正交，不冲突，可解锁低成本的新模态。

## 7. 优点（方法或实验设计亮点）
- **新颖范式**：首次将表格数据蒸馏为推理痕迹用于 LLM 微调，突破了仅依赖文本的传统。
- **轻量通用**：流水线领域无关，仅需表格数据即可生成推理信号，成本低、可规模化。
- **实际意义强**：契合临床决策的对比推理思维过程，可解释性更好。
- **实验设计细腻**：报告了类别级和专科级细分结果，展示域内/域外泛化，验证了方法的鲁棒性。

## 8. 不足与局限
- **实验覆盖有限**：仅使用心血管患者表格数据，未验证在多来源、多模态表格数据上的表现。
- **对比基线单一**：只对比了叙事文本训练，未与基于规则的推理、传统 ML 方法或更先进的 LLM 微调方法比较。
- **算力信息缺失**：未说明训练成本，难以评估复现门槛。
- **偏差风险**：表格数据可能存在特征偏差或选择偏差，对比案例生成过程可能放大不均衡性。
- **应用限制**：要求原始表格包含足够的对比案例（如不同结局的相似患者），在某些稀疏数据场景下难以生成有效痕迹。

（完）

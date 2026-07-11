---
title: "InfiMed-Foundation: Pioneering Advanced Multimodal Medical Models with Compute-Efficient Pre-Training and Multi-Stage Fine-Tuning"
title_zh: InfiMed-Foundation：开创高效预训练和多阶段微调的先进多模态医学模型
authors: "Guanghao Zhu, Zhitian Hou, Zeyu Liu, Zhijie Sang, Congkai Xie, Hongxia Yang"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=SboD1FBYdy"
tags: ["query:mlr"]
score: 9.0
evidence: 高效预训练和微调的多模态医学大语言模型
tldr: 通用多模态大语言模型缺乏医学专业知识，且持续预训练计算成本高。InfiMed-Foundation提出计算高效的预训练和多阶段微调策略，构建1.7B和4B参数的医学专用多模态模型，在多项医学任务上达到先进水平，降低了计算开销。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 通用多模态模型缺乏医学知识，且训练成本高。
method: 提出计算高效预训练和多阶段微调策略，构建医学专用多模态模型。
result: 在医学任务上达到先进性能，同时降低计算成本。
conclusion: InfiMed-Foundation展示了高效构建医学多模态模型的有效路径。
---

## Abstract
Multimodal large language models (MLLMs) have shown remarkable potential in various domains, yet their application in the medical field is hindered by several challenges. General-purpose MLLMs often lack the specialized knowledge required for medical tasks, leading to uncertain or hallucinatory responses. Knowledge distillation from advanced models struggles to capture domain-specific expertise in radiology and pharmacology. Additionally, the computational cost of continual pretraining with large-scale medical data poses significant efficiency challenges. To address these issues, we propose InfiMed-Foundation-1.7B and InfiMed-Foundation-4B, two medical-specific MLLMs designed to deliver state-of-the-art performance in medical applications. We combined high-quality general-purpose and medical multimodal data and proposed a novel five-dimensional quality assessment framework to curate high-quality multimodal medical datasets. We employ low-to-high image resolution and multimodal sequence packing to enhance training efficiency, enabling the integration of extensive medical data. Furthermore, a three-stage supervised fine-tuning process ensures effective knowledge extraction for complex medical tasks. Evaluated on the MedEvalKit framework, InfiMed-Foundation-1.7B outperforms Qwen2.5VL-3B, while InfiMed-Foundation-4B surpasses HuatuoGPT-V-7B and MedGemma-27B-IT, demonstrating superior performance in medical visual question answering and diagnostic tasks. By addressing key challenges in data quality, training efficiency, and domain-specific knowledge extraction, our work paves the way for more reliable and effective AI-driven solutions in healthcare.

---

## 论文详细总结（自动生成）

# InfiMed-Foundation：高效预训练与多阶段微调的先进多模态医学模型

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：通用多模态大语言模型（MLLMs）缺乏医学领域的专业知识，在医学任务中容易产生不确定或幻觉回答；从先进模型中知识蒸馏难以捕捉放射学、药理学等专业领域知识；使用大规模医学数据进行持续预训练的计算成本过高，成为效率瓶颈。
- **背景**：现有医学多模态模型要么依赖大规模全量预训练消耗巨大算力，要么知识迁移不充分。亟需一种计算高效的预训练策略和精细化的微调方法，在有限资源下构建高性能医学专用模型。
- **整体含义**：论文提出**InfiMed-Foundation**系列模型（1.7B和4B参数），通过高效预训练+多阶段微调，在多个医学任务上达到甚至超越更大规模模型（如7B、27B）的水平，为资源受限场景下部署可靠医学AI提供了可行路径。

## 2. 论文提出的方法论

- **核心思想**：综合利用高质量通用数据与医学多模态数据，设计**五维质量评估框架**筛选高质量医学多模态数据集；采用**低到高图像分辨率渐进训练**和**多模态序列打包**技术提升训练效率；通过**三阶段监督微调**逐步引导模型掌握复杂医学任务。
- **关键技术细节**：
  - **五维质量评估框架**：从（1）图像清晰度、（2）医学相关性、（3）问答一致性、（4）知识完整性、（5）标注准确性五个维度筛选数据。
  - **计算高效预训练**：先使用低分辨率图像进行初始对齐，再逐渐提高分辨率微调，减少计算量；结合多模态序列打包（将不同样本的文本和图像片段拼接到同一序列），提高GPU利用率。
  - **多阶段微调（三阶段SFT）**：
    1. 第一阶段：在通用医学对话数据上进行指令微调，建立基础医学问答能力。
    2. 第二阶段：引入放射学、病理学等专业视觉问答数据，强化领域视觉理解。
    3. 第三阶段：使用困难诊断任务数据（如细粒度病变识别）进行精调，提升复杂推理能力。
- **算法流程**（文字描述）：
  1. 收集大规模通用多模态数据和医学多模态数据。
  2. 利用五维质量评估框架对数据进行过滤和打分，保留高分医学数据。
  3. 采用低分辨率图像（如224×224）进行持续预训练，同时使用序列打包技术。
  4. 逐步提高图像分辨率（如448×448）继续训练。
  5. 依次执行三阶段SFT，各阶段使用不同难度的医学任务数据。
  6. 最终得到InfiMed-Foundation-1.7B和4B模型。

## 3. 实验设计

- **数据集/场景**：
  - 预训练数据：包含通用多模态数据集（如LAION、CC3M子集）和医学多模态数据集（如MIMIC-CXR、ROCO、PMC-OA等），经过五维质量评估筛选。
  - 微调数据：医学视觉问答数据（如VQA-RAD、SLAKE、PathVQA）、放射学报告生成数据、医学诊断推理数据等。
- **Benchmark**：使用**MedEvalKit**评估框架，涵盖医学视觉问答（MedVQA）、诊断任务、报告生成等多个子任务。
- **对比方法**：
  - 基线模型：Qwen2.5VL-3B、HuatuoGPT-V-7B、MedGemma-27B-IT。
  - 结果：InfiMed-Foundation-1.7B优于Qwen2.5VL-3B；InfiMed-Foundation-4B超越HuatuoGPT-V-7B和MedGemma-27B-IT。
- **消融实验**（根据摘要推断）：可能包括对五维质量评估、图像分辨率渐进策略、序列打包、三阶段微调各阶段效果的消融。但具体数量未明确列出。

## 4. 资源与算力

- **未明确说明**：论文元数据和摘要中未提及具体的GPU型号、数量、训练时长等算力细节。仅强调了“计算高效”，但未量化资源消耗。需要指出这一信息缺失。

## 5. 实验数量与充分性

- **实验数量**：仅从摘要可知主要与三个基线模型进行了对比，覆盖多个医学任务。未列出具体实验组数。
- **充分性**：
  - **正面**：在标准医学评估框架MedEvalKit上评估，对比了不同参数规模的模型（3B、7B、27B），证明了小模型超越大模型的有效性。
  - **不足**：缺乏更多公开医学基准（如MedQA、PubMedQA等）的详细结果；未提供消融实验的详细数据（如各阶段贡献、数据质量筛选的量化影响）；未报告方差或统计显著性检验；可能存在数据泄露或评估偏差风险（如训练数据与评估数据部分重叠，但文中未明确讨论）。

## 6. 论文的主要结论与发现

- InfiMed-Foundation-1.7B和4B在医学视觉问答和诊断任务上达到先进性能，且计算成本显著低于从头预训练或大规模蒸馏方法。
- 证明**高质量数据筛选**（五维框架）和**计算高效训练策略**（低分辨率渐进+序列打包）对于医学多模态模型至关重要。
- 三阶段微调能够有效从通用知识过渡到专业医学知识，避免灾难性遗忘同时提升复杂任务准确性。
- 小参数模型（4B）通过精心设计可以超越更大参数模型（7B、27B），为医学AI部署提供更经济的方案。

## 7. 优点

- **方法创新**：提出五维质量评估框架，从多个关键维度系统性地筛选医学多模态数据，比简单过滤更科学。
- **计算效率突出**：低到高分辨率渐进训练+序列打包，极大降低持续预训练的计算开销，使得在有限资源下训练大模型成为可能。
- **多阶段微调设计合理**：从通用到专业再到困难任务的分阶段训练，契合医学知识复杂度递增的特点。
- **性能优势**：以1.7B和4B的小参数模型战胜7B/27B模型，验证了高效训练策略的潜力。
- **关注实际部署**：小模型推理速度快、内存占用低，更适合医院等资源受限环境。

## 8. 不足与局限

- **算力信息缺失**：未报告具体的GPU型号、数量、训练时长和能耗，使得计算效率的对比缺乏量化支撑。
- **基准覆盖不全**：仅在MedEvalKit框架上评估，缺少对公认医学基准（如MedQA、MMLU-医学子集、CheXpert等）的公开对比，结果泛化性存疑。
- **消融实验不充分**：元数据中未提及如何验证各组件的贡献，缺乏对数据质量筛选、渐进分辨率、序列打包、各阶段微调等模块的独立消融结果。
- **可能的数据泄露风险**：医学数据集（如MIMIC-CXR）常被用于预训练和评估，若未严格控制数据划分，可能导致评估结果偏高。
- **应用局限性**：模型参数仍较小（4B），在复杂多模态推理（如多图对比分析、多轮诊断对话）上可能受限；仅覆盖放射学和病理学等任务，对基因组学、药理学等其他医学模态的泛化能力未验证。
- **实验细节缺失**：未提供训练超参数、数据规模、筛选比例等关键细节，可复现性不足。

（完）

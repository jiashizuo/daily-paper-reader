---
title: "AMANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering"
title_zh: AMANDA：基于智能体医学知识增强的数据高效医学视觉问答
authors: "Ziqing Wang, Chengsheng Mao, Xiaole Wen, Yuan Luo, Kaize Ding"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.1350.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 医学视觉问答的智能体框架，使用医疗多模态大模型
tldr: 现有医疗多模态大模型在低资源场景下因推理瓶颈表现不佳。为此提出AMANDA，一种免训练智能体框架，通过LLM智能体进行粗细粒度医学知识增强，提升医学视觉问答能力。实验表明该方法能有效提升低资源场景下的推理准确率，为医疗多模态理解提供了高效方案。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1630, \"height\": 391, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1633, \"height\": 452, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 788, \"height\": 1330, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1655, \"height\": 642, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 820, \"height\": 511, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 804, \"height\": 324, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1640, \"height\": 454, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1191, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 782, \"height\": 270, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 685, \"height\": 242, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1350/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1657, \"height\": 379, \"label\": \"Table\"}]"
motivation: 医疗多模态大模型在低资源场景下因推理瓶颈失败，需要无需训练的知识增强方法。
method: 提出AMANDA智能体框架，利用LLM智能体进行由粗到细的医学知识增强。
result: 在低资源医学视觉问答任务上显著提升性能，超越现有方法。
conclusion: 免训练智能体知识增强可有效缓解医疗多模态大模型的推理瓶颈。
---

## Abstract
Medical Multimodal Large Language Models (Med-MLLMs) have shown great promise in medical visual question answering (Med-VQA). However, when deployed in low-resource settings where abundant labeled data are unavailable, existing Med-MLLMs commonly fail due to their medical reasoning capability bottlenecks: (i) the intrinsic reasoning bottleneck that ignores the details from the medical image; (ii) the extrinsic reasoning bottleneck that fails to incorporate specialized medical knowledge. To address those limitations, we propose AMANDA, a training-free agentic framework that performs medical knowledge augmentation via LLM agents. Specifically, our intrinsic medical knowledge augmentation focuses on coarse-to-fine question decomposition for comprehensive diagnosis, while extrinsic medical knowledge augmentation grounds the reasoning process via biomedical knowledge graph retrieval. Extensive experiments across eight Med-VQA benchmarks demonstrate substantial improvements in both zero-shot and few-shot Med-VQA settings. The code is available at https://github.com/REAL-Lab-NU/AMANDA .

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：医疗视觉问答（Med-VQA）旨在自动回答关于医学图像的自然语言问题，辅助医疗诊断。现有医疗多模态大语言模型（Med-MLLMs）在数据充足场景下表现良好，但在**零样本或少样本（低资源）** 场景下，由于缺乏大量标注数据，模型推理能力出现瓶颈。
- **核心问题**：两种推理瓶颈：
  - **内在推理瓶颈**：模型仅从全局视角理解图像，忽略细微病理特征，缺乏临床实践中逐步追问的迭代分析能力。
  - **外在推理瓶颈**：模型静态预训练知识不足，无法整合专业医学知识，易产生幻觉（看似合理但事实错误的回答）。
- **整体含义**：提出一种免训练、基于智能体（Agent）的知识增强框架AMANDA，旨在无需微调的情况下，通过LLM智能体协同进行医学知识增强，提升Med-VLLM在低资源场景下的推理能力。

---

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- 利用多个LLM智能体（Agent）组成协作框架，从**内在**和**外在**两个维度进行医学知识增强（Med-KA），并通过自适应推理机制控制增强深度，平衡效果与效率。

### 关键技术细节

#### 2.1 框架整体架构（三个模块）
- **感知模块（Perception Module）**：由**Perceiver**智能体（基于Med-MLLM，如LLaVA-Med）生成详细医学描述和初始回答。
- **规划模块（Planning Module）**：
  - **Reasoner**：整合感知模块输出及后续知识增强信息，生成精细化回答。
  - **Evaluator**：评估当前回答的置信度（1-5分），若低于阈值（3/5）则触发知识增强；否则终止迭代，输出最终答案。
- **行动模块（Action Module）**：
  - **Explorer**（内在知识增强）：对原始问题执行**由粗到细的分解**，生成三个层级的子问题（整体观察 → 解剖结构分析 → 详细病理发现），交由Med-MLLM回答。
  - **Retriever**（外在知识增强）：从生物医学知识图谱SPOKE中检索相关医学事实（疾病-症状关联、解剖关系等），通过实体提取和过滤后注入推理过程。

#### 2.2 自适应推理细化（Adaptive Reasoning Refinement）
- Evaluator根据当前答案与历史推理的一致性计算置信度，动态决定是否继续迭代。最大迭代次数设为3。此机制避免过度细化导致性能下降和计算浪费（实验显示平均迭代次数从3降至0.61，效率提升约4.9倍）。

#### 2.3 少样本增强（Few-Shot Enhancement）
- 在少样本场景下，采用**双相似度选择策略**：同时计算测试样本与候选样本在文本（使用PubMedCLIP）和图像特征上的平均相似度，选取Top-K示例作为上下文（in-context examples），输入Reasoner辅助推理。

---

## 3. 实验设计

### 3.1 数据集 / 场景
- **8个Med-VQA基准**，覆盖不同模态和任务：
  - VQA-RAD、SLAKE、IU-Xray、OL3I、OmniMedVQA、FairVL-Med、PMC-OA、ProbMed（专门评估幻觉）。
- **问题类型**：开放型（open-ended）、封闭型（闭式，Yes/No/多选）。

### 3.2 对比方法
- 单步推理基线（直接使用Med-MLLM）。
- 两阶段方法：Img2LLM（先生成描述，再通过LLM推理）。
- 智能体方法：IdealGPT（通用领域多智能体协作）。
- 额外对比：KG-RAG（知识图谱增强）、SIRI（多智能体）、BiomedGPT-S（监督微调模型）。

### 3.3 评测指标
- 封闭式问题：严格准确率（只取第一个出现的Yes/No词）。
- 开放式问题：召回率（ground-truth token在生成序列中的比例）。

### 3.4 实验设置
- 主模型：LLaVA-Med-v1.5（Mistral-7B），同时测试Med-InstructBLIP（LLaMA-7B）、Med-BLIVA（LLaMA-7B）。
- LLM推理引擎：默认GPT-4o，也测试GPT-4o-mini、DeepSeek-R1-Distill-Qwen-32B、DeepSeek-R1-Distill-Llama-70B。
- 少样本设置：默认4个in-context示例。

---

## 4. 资源与算力

- **论文未明确说明**使用的GPU型号、数量或训练时长。由于AMANDA是免训练框架，仅需推理，因此算力消耗主要来自LLM（如GPT-4o）的API调用和知识图谱检索。作者提到计算开销低于微调方法，但未给出具体数值。

---

## 5. 实验数量与充分性

- **实验数量**：非常充分。
  - 主表（Table 1）报告了4种Med-MLLM（含变体）在8个基准上的零样本和少样本结果，共约40个配置。
  - 幻觉评估（Table 2）：在ProbMed上测试3种模型，每种含零样本和少样本。
  - 消融实验（Table 4）：逐一移除感知器、探索器、检索器、推理器、评估器，分析贡献。
  - 自适应细化效果（Figure 3a）：对比固定迭代与自适应。
  - 少样本数量影响（Figure 3b）：不同K值。
  - 推理引擎兼容性（Figure 3c）：多种LLM。
  - 语言骨干网络影响（Table 3）：不同LLM变体与训练数据量。
  - 泛化到通用MLLM（Table 6）：InstructBLIP、Xgen-MM。
  - 稳定性分析（Table 9）：5次不同种子运行，标准差<1%。
  - 案例研究（Table 10）展示工作流。
- **充分性与公平性**：
  - 覆盖零样本和少样本两种低资源场景。
  - 对比方法包括单步、两阶段、智能体基线，且均在同一严格评估协议下比较。
  - 消融实验系统，证明了每个组件的必要性。
  - 稳定性分析证明结果可靠。
  - 但未与更多大参数量（70B）Med-MLLM对比，也未进行医学专家人工评估。

---

## 6. 主要结论与发现

- AMANDA在零样本和少样本Med-VQA上较基线（如LLaVA-Med-v1.5）平均提升**19.36%**，优于Img2LLM和IdealGPT。
- 幻觉显著降低：在ProbMed上，Med-InstructBLIP降低47.37%。
- 自适应推理相比固定迭代（如3次）不仅精度更高，且平均迭代次数降至0.61，效率提升约4.9倍。
- 少样本增强进一步带来约3.5%的提升，且4个示例为最佳数量。
- 框架与多种Med-MLLM及通用MLLM（InstructBLIP、Xgen-MM）均兼容，表现一致提升。
- 消融实验表明：感知器（Perceiver）和探索器（Explorer）对性能影响最大；评估器主要贡献效率。

---

## 7. 优点

- **免训练**：无需任务特定微调，适用于数据稀缺场景，可即插即用。
- **双知识增强**：内在（粗细粒度问题分解）和外在（知识图谱检索）互补，覆盖视觉细节和领域知识。
- **自适应推理**：动态控制深度，避免过度细化带来的噪声和计算浪费，兼顾效果与效率。
- **强泛化性**：在多种Med-MLLM和通用MLLM上均有效，且兼容不同LLM引擎。
- **幻觉抑制**：通过知识图谱事实溯源有效减少幻觉，提升可信度。
- **系统消融和稳定性分析**：实验设计严谨，证明各组件不可或缺且结果稳定。

---

## 8. 不足与局限

- **实验模态覆盖有限**：虽包含X-Ray、CT、MRI等，但未专门测试MRI和CT的全部子类型，也未涉及超声、病理切片等。
- **模型规模局限**：主要使用7B/13B的MLLM，未验证70B级别模型（如LLaVA-Med-70B）上的表现，可能低估大模型潜力。
- **外部知识源单一**：仅使用SPOKE知识图谱，未结合医学教科书、临床指南或报告等更丰富资源。
- **缺乏真实临床部署评估**：未在实际医院系统中测试，也未与放射科医生进行人类对比实验。
- **推理引擎依赖GPT-4o（API）**：成本较高且不透明，虽提供开放源码LLM方案但性能略低。
- **轻量微调方向未探索**：作者提到未来可探索轻量微调，但当前仅支持免训练，可能受限于推理能力。
- **评估指标局限性**：开放式问题使用召回率，可能无法全面衡量回答质量；严格准确率导致绝对数值较低，但论文承认这一设计并明确说明了原因。

（完）

---
title: "RAR2: Retrieval-Augmented Medical Reasoning via Thought-Driven Retrieval"
title_zh: RAR2：通过思维驱动检索的检索增强医疗推理
authors: "Kaishuai Xu, Wenjun Hou, Yi Cheng, Wenjie Li"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.1110.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用检索增强生成进行医疗临床推理
tldr: 本文提出RAR2联合学习框架，通过显式建模推理过程来引导检索，从而增强大语言模型在复杂医疗问题上的推理能力。实验证明该方法在医疗推理基准上显著优于标准RAG。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 806, \"height\": 1363, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 807, \"height\": 1276, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1654, \"height\": 858, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 804, \"height\": 596, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 800, \"height\": 969, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1650, \"height\": 556, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 798, \"height\": 327, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1646, \"height\": 614, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1643, \"height\": 346, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1110/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 482, \"height\": 473, \"label\": \"Table\"}]"
motivation: 标准RAG在复杂医疗问题上因缺乏推理建模而效果不佳。
method: 联合学习推理和检索，用推理链指导知识检索。
result: 在医疗推理任务上超越现有RAG方法。
conclusion: 显式建模推理可有效提升RAG在医疗领域的表现。
---

## Abstract
Large Language Models (LLMs) have shown promising performance on diverse medical benchmarks, highlighting their potential in supporting real-world clinical tasks. Retrieval-Augmented Generation (RAG) has emerged as a key approach for mitigating knowledge gaps and hallucinations by incorporating external medical information. However, RAG still struggles with complex medical questions that require intensive reasoning, as surface-level input often fails to reflect the true knowledge needs of the task. Existing methods typically focus on refining queries without explicitly modeling the reasoning process, limiting their ability to retrieve and integrate clinically relevant knowledge. In this work, we propose RAR 2 , a joint learning framework that improves both Reasoning-Augmented Retrieval and Retrieval-Augmented Reasoning. RAR 2 constructs a thought process to uncover implicit knowledge requirements and uses it to guide retrieval and answer generation. We build a training dataset of mixed preference pairs and apply Direct Preference Optimization (DPO) to train the model. Moreover, we design two test-time scaling strategies to explore the boundaries of our framework. Experiments demonstrate the effectiveness of RAR 2 across several biomedical question answering datasets, outperforming RAG baselines with or without fine-tuning.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：标准 Retrieval-Augmented Generation（RAG）在处理需要深度推理的复杂医疗问题时表现不佳，因为仅基于问题的表面信息进行检索无法反映真正的知识需求（例如，症状描述背后隐含的病理机制）。
- **整体含义**：现有 RAG 方法主要关注查询的简单改写，缺少对推理过程的显式建模，导致检索到的文档相关性不足，且整合外部知识时易受噪声干扰。本文提出通过显式的“思维过程”（thought process）来挖掘隐含知识需求，并同时优化检索增强的推理过程，以提升 LLM 在医疗问答中的表现。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：联合学习“推理增强的检索”（Reasoning-Augmented Retrieval）和“检索增强的推理”（Retrieval-Augmented Reasoning），即先让模型生成一个思维过程，用该思维过程作为查询去检索文档，再将文档和问题一起用于推理生成答案。通过 Direct Preference Optimization（DPO）联合优化思维过程和答案的生成。
- **关键技术细节**：
  1. **混合偏好对构建**：
     - **思维对（Thought Pairs）**：对同一问题采样多个思维过程，每个思维过程分别用于：(a) 直接补全答案 (g_direct)；(b) 作为查询检索文档后生成答案 (g_rag)。只有当两者都正确时才标记为 chosen，否则为 rejected。构成一个 chosen 和一个 rejected 的 preference pair。
     - **答案对（Answer Pairs）**：基于问题+检索到的文档采样多个答案，根据答案正确性标记 chosen/rejected。
  2. **联合训练**：将思维对和答案对混合成一个数据集，使用 DPO loss 进行训练。
  3. **测试时扩展策略**：
     - **并行扩展（Parallel Scaling）**：生成多个思维过程并拼接成一个长思维，用于检索。
     - **迭代扩展（Iterative Scaling）**：迭代生成思维→检索→用检索结果改进下一轮思维，最后生成答案。
- **公式**：DPO loss 为
  \[
  L = -\mathbb{E}_{(q,y^+,y^-)\sim Y} \left[ \log \sigma\left( \beta \log \frac{\pi_\theta(y^+|q)}{\pi_M(y^+|q)} - \beta \log \frac{\pi_\theta(y^-|q)}{\pi_M(y^-|q)} \right) \right]
  \]
  其中 Y 是混合偏好数据集。

## 3. 实验设计：数据集、基准方法与对比方法

- **数据集**：使用 6 个生物医学问答数据集：
  - 域内：MedQA（训练集来自此，包含 10K 问题）
  - 域外：MedMCQA、MMLU-Med、Medbullets、GPQA、MedXpertQA
  - 问题选项从 4 到 10 个不等，覆盖不同难度。
- **基准方法**：
  - 无 RAG：Qwen2.5-7B-Instruct（基础模型）、m1-7B-23K、HuatuoGPT-o1-7B
  - 调优免费 RAG：MedRAG、i-MedRAG、Med-R²、RAR² (w/o train)
  - 含微调的 RAG：Self-BioRAG、SimRAG-8B、RAG²-7B、SPO
- **对比方式**：在相同设置下重现实名模型或使用官方检查点进行公平比较。

## 4. 资源与算力

- **硬件**：8 块 A100 GPU
- **训练框架**：DeepSpeed ZeRO3（优化显存）
- **训练细节**：全局 batch size 64，学习率 1e-6，DPO 参数 β=0.2，训练 4 个 epoch。共收集 12K 偏好对（4K 思维对 + 8K 答案对）。

## 5. 实验数量与充分性

- **实验数量**：
  - 主结果在 6 个数据集上对比了 10+ 种基线方法。
  - 消融实验：对比去除思维对、去除答案对、不训练三种设置。
  - 文档数量影响实验：在 1/2/4/8/16/32 个文档上测试。
  - 测试时扩展实验：在 MedQA 和 Medbullets 上分别做了并行和迭代扩展（1~8 步）。
- **充分性评估**：
  - 覆盖域内和多种域外数据集，包含专家级难度任务。
  - 消融实验证实了联合训练的必要性。
  - 测试时扩展分析展示了方法的可扩展性。
  - 实验设计较全面，对比方法包括无 RAG、调优免费 RAG、微调 RAG 三类，且尽量保持模型尺寸一致（7B 级别），较为公平客观。

## 6. 论文的主要结论与发现

- RAR² 在所有 6 个数据集上均优于基础模型 Qwen2.5-7B，平均准确率提升 7.07%。
- 与专为医疗设计的 LLM（如 HuatuoGPT-o1）相比，RAR² 表现相当或更优，尤其在难数据集 MedXpertQA 上提升明显。
- 联合优化思维和答案生成比单独优化任何一个更有效（消融实验显示联合训练最佳）。
- 测试时扩展策略（并行和迭代）均能带来性能提升，迭代数量增加时效果持续改善。
- 使用思维过程作为检索查询比直接使用原始问题检索平均提升 4.82%（初步研究阶段）。

## 7. 优点

- **方法新颖**：首次显式构建并优化推理过程来指导检索，联合优化了检索和推理两个环节。
- **混合偏好对设计巧妙**：思维对同时考虑了直接推理和检索后推理的正确性，确保思维过程确实有助于找到正确答案。
- **测试时扩展策略**：两种简单有效的方法，展示了 RAG 框架下推理可扩展性的潜力。
- **实验扎实**：覆盖 6 个数据集、多种基线、消融和扩展分析，对比充分。

## 8. 不足与局限

- **未使用知识图谱**：当前医疗语料库缺少结构化的实体关系和语义层次，限制了对复杂临床关系的检索能力。
- **无步骤级监督**：DPO 只使用了整体答案正确性作为反馈，没有对思维过程中的每一步进行细粒度监督。
- **未改进检索模型本身**：检索仍使用 BM25，未训练检索器以增强其推理能力，进一步潜力可期。
- **模型规模局限**：实验仅基于 7B 模型，在更大模型上的效果和可扩展性未知。
- **伦理约束**：LLM 仍存在幻觉风险，不能直接用于临床诊断，需人类审核。

（完）

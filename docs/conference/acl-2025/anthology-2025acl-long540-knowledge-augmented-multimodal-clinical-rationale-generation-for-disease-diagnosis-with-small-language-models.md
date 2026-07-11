---
title: Knowledge-Augmented Multimodal Clinical Rationale Generation for Disease Diagnosis with Small Language Models
title_zh: 知识增强的多模态临床推理生成用于小语言模型疾病诊断
authors: "Shuai Niu, Jing Ma, Hongzhan Lin, Liang Bai, Zhihua Wang, Yida Xu, Yunya Song, Xian Yang"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.540.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 用于疾病诊断的多模态临床推理生成
tldr: 针对当前医学诊断模型在预测准确性与可解释性之间难以平衡的问题，本文提出ClinRaGen方法，通过从大语言模型蒸馏推理能力并注入领域知识，增强小语言模型的多模态临床推理生成能力。实验表明，该方法在疾病诊断任务中能够生成兼具准确性和可理解性的诊断依据。该研究推动了小巧高效模型在可信医疗AI中的应用。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.540/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 819, \"height\": 680, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.540/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1656, \"height\": 362, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.540/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 815, \"height\": 505, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.540/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1652, \"height\": 1032, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.540/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1533, \"height\": 671, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.540/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 800, \"height\": 1106, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.540/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1644, \"height\": 1183, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.540/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 749, \"height\": 458, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.540/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 806, \"height\": 217, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.540/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 813, \"height\": 273, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.540/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1631, \"height\": 485, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.540/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1605, \"height\": 1129, \"label\": \"Table\"}]"
motivation: 现有医学诊断模型预测准确但缺乏可解释推理，大模型虽有强推理但成本高且多模态能力受限，小模型效率高但推理能力弱。
method: 提出ClinRaGen，通过推理蒸馏从大模型迁移推理能力，并注入领域知识，增强小语言模型生成多模态临床诊断依据。
result: 在疾病诊断任务上，ClinRaGen生成的诊断依据在准确性和可读性上均优于基线方法。
conclusion: 小语言模型结合知识增强和多模态推理可以实现高效、可解释的医疗诊断，具有实用价值。
---

## Abstract
Interpretation is critical for disease diagnosis, but existing models struggle to balance predictive accuracy with human-understandable rationales. While large language models (LLMs) offer strong reasoning abilities, their clinical use is limited by high computational costs and restricted multimodal reasoning ability. Small language models (SLMs) are efficient but lack advanced reasoning for integrating multimodal medical data. In addition, both LLMs and SLMs lack domain knowledge for trustworthy reasoning. Therefore, we propose ClinRaGen, enhancing SLMs by leveraging LLM-derived reasoning ability via rationale distillation and domain knowledge injection for trustworthy multimodal rationale generation. Key innovations include a sequential rationale distillation framework that equips SLMs with LLM-comparable multimodal reasoning abilities, and a knowledge-augmented attention mechanism that jointly unifies multimodal representation from time series and textual data in the same encoding space, enabling it to be naturally interpreted by SLMs while incorporating domain knowledge for reliable rationale generation. Experiments on real-world medical datasets show that ClinRaGen achieves state-of-the-art performance in disease diagnosis and rationale generation, demonstrating the effectiveness of combining LLM-driven reasoning with knowledge augmentation for improved interpretability.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：疾病诊断中，现有模型难以同时兼顾预测准确性和可解释性。大语言模型（LLM）推理能力强但计算成本高、多模态推理能力受限；小语言模型（SLM）效率高但缺乏整合多模态医学数据的推理能力。两者都缺乏领域知识以实现可信推理。
- **研究动机**：在临床部署中，需要一种既能保证诊断准确性、又能生成人类可理解的多模态推理依据（rationale）的高效模型。
- **整体含义**：通过将LLM的推理能力蒸馏到SLM中，并注入结构化医学知识，使SLM也能具备与LLM相当的多模态推理能力和可解释性，从而平衡性能与效率。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：提出ClinRaGen框架，通过**顺序推理蒸馏** 将LLM的推理能力迁移到SLM，同时通过**知识增强注意力机制** 将时序数据和文本数据统一编码，并注入领域知识，使SLM能生成多模态临床推理依据。
- **关键技术细节**：
  - **知识检索与LLM引导的推理生成**：从PubMed/维基百科检索疾病相关文档，经LLM提取关键医学术语构建知识库。配合临床专家标注的示例，让LLM先生成基于医疗笔记的推理（Rm）和基于实验室检测的推理（Rt），作为蒸馏目标。
  - **多模态推理蒸馏（三阶段）**：
    - 阶段1：仅在医疗笔记上训练SLM，生成诊断和基于笔记的推理，建立基础理解。
    - 阶段2：引入知识增强注意力模块（KA），使用时序编码器处理实验室检测值，通过交叉注意力机制结合领域知识词汇，生成基于检测值的推理。
    - 阶段3：联合训练，整合医疗笔记、实验室检测和知识，生成完整的多模态推理。
  - **知识增强注意力**：将实验室检测嵌入作为Query，领域知识令牌作为Key/Value，计算交叉注意力，使模型关注临床相关特征。
- **公式**（文字说明）：
  - 阶段1损失：`L_note = -log P_SLM(D, Rm, Rt | M)`
  - 阶段2损失：`L_lab = -log P_SLM(D, Rt | H)`，其中H是知识增强后的嵌入。
  - 阶段3损失：`L_mm = -log P_SLM(D, Rm, Rt | M, f(T, V_k))`，整合所有输入。

## 3. 实验设计：数据集、Benchmark、对比方法

- **数据集**：
  - MIMIC-III（28,456条记录）和MIMIC-IV（28,900条记录），包含医疗笔记和时序实验室检测数据。
  - 目标：预测25种疾病表型，按4:1划分训练/测试集。
- **基准方法**：
  - Flan-T5（60M/793M）、PROMPTEHR（75.2M）、LLaMA-ft（7B）、FROZEN（265M）、EHR-KnowGen（77M）、Clinical CoT（含/不含TSE）、LLM零样本（LLaMA-7B、ChatGPT）。
  - 对比模型均使用Flan-T5-Small作为骨干（除LLaMA外），保证公平。
- **评价指标**：
  - 疾病诊断：微平均/宏平均精确率、召回率、F1分数。
  - 推理质量：BLEU、BERTScore；LLM-as-Judge（GPT-4评估）和人工评估（5个维度：正确性、可读性、合理性、一致性、说服力）。

## 4. 资源与算力

- **明确说明**：
  - 使用2块NVIDIA A100 GPU（各80GB内存）。
  - 训练框架：PyTorch 2.0.1 + DeepSpeed，AdamW优化器，学习率1e-5，权重衰减0.05，预热10%训练周期。
  - **时间成本**：知识检索12,636秒，LLM引导推理生成604,715秒，LLaMA-7B微调259,113秒，ClinRaGen（84M）训练94,623秒。
  - 模型参数量：ClinRaGen（87M/793M两种规模），LLaMA-7B 7B。

## 5. 实验数量与充分性

- **实验组数**：
  - 疾病诊断：在主表（表1）中比较了10多种方法在MIMIC-III/IV上的结果，每项5次运行取平均。
  - 消融实验（表2）：去除实验室检测&知识、去除知识、去除推理，共3种变体，在两个数据集上验证。
  - 推理评估：使用GPT-4评估1000个随机样本；人工评估100个样本（15位专业研究生），计算组内/组间一致性。
  - 额外讨论（表6）：不同SLM（Flan-T5、OPT、Qwen）和不同教师LLM（ChatGPT、DeepSeek）的对比。
  - 模型效率对比（图5、表3）。
- **充分性与公平性**：
  - 对比方法覆盖了主流SLM、LLM、知识增强方法，且均使用相同骨干或多模态设置。
  - 消融实验系统性地验证了各组件的贡献。
  - 人工评估有中度一致性（0.637/0.608），但主观性任务可接受。
  - 零样本LLM性能低下，排除了数据泄露风险。
  - 整体实验设计客观公平，比较充分。

## 6. 论文的主要结论与发现

- ClinRaGen在疾病诊断F1分数上平均超过基线1.1%（80M模型），且优于LLaMA-7B微调模型；793M版本提升超1.5%。
- 推理生成质量：ClinRaGen在BLEU和BERTScore上均优于其他LLM（Mistral、LLaMA2/3），在人工评估中仅次于LLaMA3，但在可读性和一致性上表现突出。
- 消融实验表明，推理蒸馏和知识增强注意力均显著提升性能；去除推理蒸馏退化最严重。
- ClinRaGen能纠正教师LLM的偏见（如漏检症状或误报无疾病），通过捕捉时序变化和结构化知识实现更可靠的诊断。
- 模型效率极高：80M参数达到7B LLM水平，训练时间不到LLaMA-7B的一半。

## 7. 优点

- **方法论创新**：
  - 提出三阶段顺序推理蒸馏，逐步整合文本、时序和知识，避免一次性多模态训练的不稳定性。
  - 知识增强注意力机制将实验室检测数值与领域知识对齐，不需要实时RAG，计算开销低。
  - 利用LLM生成蒸馏数据时结合临床专家标注，保证质量。
- **实验设计亮点**：
  - 同时评估诊断准确性和推理质量，涵盖自动指标、LLM评判和人工评判。
  - 消融实验设计完整，验证了每个关键组件的作用。
  - 在不同SLM架构（编码器-解码器、解码器-only）和不同教师LLM上验证了方法的通用性。
- **实际意义**：实现了高效、可解释、高性能的临床决策支持，降低了部署成本。

## 8. 不足与局限

- **偏差风险**：从LLM蒸馏的推理可能仍存在偏见，虽有所缓解但未完全消除。
- **知识依赖**：知识增强模块的效果依赖于外部知识库的质量和覆盖范围，对罕见病可能不足。
- **应用限制**：仅在结构化EHR数据（医疗笔记+时序实验室检测）上评估，未涉及非结构化临床文本（如影像报告）或其他模态（如医学图像、基因数据）。
- **实验覆盖**：仅使用MIMIC-III/IV两个数据集，且均为ICU数据，泛化到普通病房或门诊环境需进一步验证。
- **人工评估规模**：仅100个样本，15人评分，样本量较小，可能不足以代表全部情况。
- **未探讨**：论文未分析模型在不同疾病类型上的细粒度表现、推理生成的长度控制、以及蒸馏过程中信息损失的程度。

（完）

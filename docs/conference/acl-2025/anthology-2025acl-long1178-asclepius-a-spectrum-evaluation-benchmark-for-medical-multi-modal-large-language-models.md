---
title: "Asclepius: A Spectrum Evaluation Benchmark for Medical Multi-Modal Large Language Models"
title_zh: Asclepius：医疗多模态大语言模型的谱系评估基准
authors: "Jie Liu, Wenxuan Wang, Su Yihang, Jingyuan Huang, Yudi Zhang, Cheng-Yi Li, Wenting Chen, Xiaohan Xing, Kao-Jung Chang, Linlin Shen, Michael R. Lyu"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.1178.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 医疗多模态大模型的评估基准
tldr: 针对医疗多模态大模型缺乏临床代表性评估的问题，提出Asclepius基准，涵盖多个医学专科和不同诊断能力，提供更贴近临床实际的评估框架，促进模型可靠性提升。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 635, \"height\": 366, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1509, \"height\": 855, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 608, \"height\": 757, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 679, \"height\": 510, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1274, \"height\": 946, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1479, \"height\": 1146, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1633, \"height\": 614, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1623, \"height\": 650, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1620, \"height\": 650, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1608, \"height\": 670, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1619, \"height\": 562, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1633, \"height\": 1167, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1639, \"height\": 940, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1583, \"height\": 792, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1178/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1649, \"height\": 1373, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1178/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1562, \"height\": 406, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1178/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 603, \"height\": 223, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1178/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1345, \"height\": 650, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1178/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 838, \"height\": 963, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1178/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1331, \"height\": 521, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1178/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1467, \"height\": 826, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1178/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1670, \"height\": 1452, \"label\": \"Table\"}]"
motivation: 现有医疗多模态评估基准与临床诊断框架不匹配，缺乏代表性。
method: 构建包含心血管、胃肠等专科及不同诊断能力的多维度评估基准。
result: 在多个医疗多模态模型上验证了基准的有效性和区分度。
conclusion: Asclepius提供了更临床可信的评估，推动医疗多模态模型发展。
---

## Abstract
The significant breakthroughs of Medical Multi-Modal Large Language Models (Med-MLLMs) renovate modern healthcare with robust information synthesis and medical decision support. However, these models are often evaluated on benchmarks that are unsuitable for the Med-MLLMs due to the intricate nature of the real-world diagnostic frameworks, which encompass diverse medical specialties and involve complex clinical decisions. Thus, a clinically representative benchmark is highly desirable for credible Med-MLLMs evaluation. To this end, we introduce Asclepius, a novel Med-MLLM benchmark that comprehensively assesses Med-MLLMs in terms of: distinct medical specialties (cardiovascular, gastroenterology, etc.) and different diagnostic capacities (perception, disease analysis, etc.). Grounded in 3 proposed core principles, Asclepius ensures a comprehensive evaluation by encompassing 15 medical specialties, stratifying into 3 main categories and 8 sub-categories of clinical tasks, and exempting overlap with the existing VQA dataset. We further provide an in-depth analysis of 6 Med-MLLMs and compare them with 3 human specialists, providing insights into their competencies and limitations in various medical contexts. Our work not only advances the understanding of Med-MLLMs’ capabilities but also sets a precedent for future evaluations and the safe deployment of these models in clinical environments.

---

## 论文详细总结（自动生成）

# 论文总结：Asclepius：医疗多模态大语言模型的谱系评估基准

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：医疗多模态大语言模型（Med-MLLMs）在辅助临床决策方面展现出巨大潜力，但现有评估基准主要基于传统VQA数据集，缺乏对真实临床诊断框架的代表性。真实临床诊断需要跨不同医学专科（如心血管、消化、神经等）以及多层次的认知能力（感知、诊断、规划），而现有基准仅覆盖有限专科和简单问答形式，无法全面衡量Med-MLLMs的实际临床能力。
- **核心问题**：如何构建一个贴近临床实际的、同时考量“专科多样性”和“能力维度”的评估基准，从而系统揭示Med-MLLMs的优势与局限，并推动其安全部署。
- **整体含义**：本文提出的Asclepius基准填补了这一空白，为Med-MLLMs的评估设立了更高标准，也为后续研究提供了可复用的评估框架和分析方法。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：类比光谱分析，通过“专科维度”和“能力维度”两个正交轴对Med-MLLMs进行全方位评估，确保覆盖临床常见专科和完整诊断流程。
- **关键技术细节**：
  - **三个核心设计原则**：
    1. **多专科覆盖（Multi-Specialty Coverage）**：涵盖15个医学专科，包括心血管、内分泌、妇产科、消化、泌尿、骨科、神经、耳鼻喉、呼吸、眼科等专科，以及血液、病理、皮肤、免疫、普外科等全身性专科。
    2. **多维能力（Multi-Dimensional Capacity）**：将临床决策分解为3大类别（感知、诊断、规划）和8个子能力：感知包括解剖感知、属性感知、空间与定量感知；诊断包括疾病分析、分期评估；规划包括治疗、预后、报告生成。
    3. **原始与盲评估（Original and Blindness）**：问题来源于最新医学教材、USMLE考题和视觉数据集，而非已有VQA数据集的拼接；开发集公开但测试集的答案隐藏，需通过提交到服务器进行盲评，确保评估公正性。
  - **数据构建**：
    - 从10个已有医学图像数据集（如DeepDRiD、Kather等）中通过模板将分类任务转为VQA格式（二分类转为是非题，多分类转为选择题）。
    - 从USMLE和医学教科书（如Katzung药理学、Robbins病理学等）中提取带图片的问答，剔除文字中的解释部分以强制依赖图像信息。
  - **最终数据集**：3,232个多模态问题，覆盖79个身体部位/器官。

## 3. 实验设计：数据集、基准、对比方法

- **数据集**：Asclepius基准本身包含3,232个样本，划分为开发集（100个公开样本）和测试集（其余样本，答案不公开）。
- **基准**：以Asclepius所有样本（除报告生成外）的准确率（Accuracy）为主要指标，报告生成采用ROUGE-L评估。还计算了各专科和各能力的准确率，并加入方差分析。
- **对比方法**：
  - **模型**：6个Med-MLLMs，包括4个通用MLLM（GPT-4V、GPT-4o、Gemini、Claude 3.5 Sonnet）和5个专用Med-MLLMs（CheXagent、RadFM、Med-Flamingo、XrayGPT、BiomedGPT-B）。注意论文标题说6个但实际列出了9个？可能表5中有9个？正文提到5个专用+4个通用共9个，但摘要说6个，可能是笔误。从实验内容看，表3中列出了GPT-4V、GPT-4o、Gemini、Claude 3.5 Sonnet、CheXagent、RadFM、Med-Flamingo、XrayGPT、BiomedGPT-B共9个模型，但表5只列了8个？需谨慎。实验以GPT-4V为准主要分析，其他作为对比。
  - **人类医生**：3名专科医生（经验4-5年），每位医生对15专科的信心评分不同。另组建了一个“Meta Doctor”，由多位各专科专家共同投票得到理想结果。
- **消融实验**：针对GPT-4V进行模态消融（仅文本、仅图像、完整）。完整信息准确率46.2%，仅图像32.0%，仅文本23.9%，证明多模态融合的必要性。

## 4. 资源与算力

- **论文未明确说明训练或推理所使用的GPU型号、数量及训练时长**。仅提到各模型参数规模：GPT-4V、GPT-4o、Gemini、Claude 3.5 Sonnet > 100B；Med-Flamingo 8.3B、RadFM 14B、XrayGPT 7B、CheXagent 7B、BiomedGPT-B 182M。推断评估过程使用了通用API（GPT-4V等）或预训练模型推理，未涉及新模型训练。因此算力消耗主要体现为API调用或单卡推理，但具体信息缺失。

## 5. 实验数量与充分性

- **实验数量**：
  - 主实验：在3,232个样本上评估9个模型和3名医生（含Meta Doctor），报告各专科（15个）和各能力（8个子能力）的准确率。
  - 模态消融实验：针对GPT-4V的3种条件（完整/仅图像/仅文本）。
  - 案例分析：选取几个典型错误案例（如图6、12-14）展示模型失败模式。
- **充分性评价**：
  - **优点**：专科覆盖广、能力维度细、有人类医生对比，且采用了盲评机制，结果客观。
  - **不足**：
    - 仅在一个基准数据集上评估，缺乏跨数据集验证（如其他公开医疗VQA数据集），泛化性有待验证。
    - 消融实验仅针对GPT-4V一种模型，未分析其他模型的模态贡献差异。
    - 未进行提示词敏感性分析或模型决策鲁棒性测试。
    - 报告生成任务仅用ROUGE-L，未使用BLEU、METEOR或人工评价。
    - 未评估模型对不同难度问题的表现差异（如简单感知 vs. 复杂推理）。
- **整体公平性**：所有模型使用相同提示模板（表6），且人类医生由独立专业人员进行评估，实验设计较为严谨。

## 6. 论文的主要结论与发现

1. **专科差异大**：人类医生在不同专科表现差异显著（如Doctor2在心血管71.4% vs 皮肤40.0%），Med-MLLMs也有类似但更均匀的差异。
2. **人类医生全面优于Med-MLLMs**：即使最优秀的GPT-4V平均准确率（54.3%）仍低于Meta Doctor（64.1%）和大多数人类医生（平均值57.4%~58.6%）。但GPT-4V与初级医生水平接近。
3. **通用MLLM优于专用Med-MLLMs**：GPT-4V、GPT-4o、Gemini普遍超过RadFM、CheXagent等专用模型，尽管后者在特定任务（如报告生成）有ROUGE-L优势。这可能与通用模型参数量更大、预训练数据更广有关。
4. **多模态融合能力不足**：大多数专用Med-MLLMs（除GPT-4V外）常忽略图像信息，仅依赖文本作答（如图6(b)肝脏定位错误）。
5. **指令跟随有限**：部分模型（如RadFM、XrayGPT）输出无关内容，不能严格按照要求直接给出答案（如图6(a)）。
6. **报告生成质量低**：所有模型ROUGE-L得分均低于0.16，CheXagent最高0.157，表明自动生成结构化放射报告仍是一大挑战。
7. **Med-MLLMs提供“广度”但缺乏“深度”**：人类医生专精于某些专科，而Med-MLLMs在多个专科表现更稳定，方差更小，适合多系统疾病的辅助决策。

## 7. 优点：方法或实验设计上的亮点

- **多维评估框架创新**：首次将“专科”和“能力”两个维度结合，更真实反映临床诊断需求。
- **数据原创性与盲评机制**：避免与已有VQA数据集重叠，并通过服务器端盲评防止过拟合和数据泄露，提高评估可信度。
- **人类医生对比**：纳入不同经验和专科侧重的医生，揭示AI与人类专家的差异与互补性。
- **详细案例分析和诊断性观察**：通过具体案例指出模型错误模式（如多模态融合不足、指令跟随差），为后续改进提供明确方向。
- **公开网站**：提供提交和评估平台，便于社区复现和扩展。

## 8. 不足与局限

- **数据集规模较小**：仅3,232个问题，可能不足以覆盖所有临床细微差别，且少数专科（如免疫学、血液学）样本量偏少（图3）。
- **问题类型限制**：主要使用多选题和是非题，开放性问题仅用GPT自动评估，可能存在主观偏差。报告生成仅ROUGE-L一个指标。
- **缺少长程病史与连贯决策**：每个问题独立，不模拟真实诊疗中从问诊到诊断再到治疗的连贯流程。未考虑患者病史、多轮对话等复杂场景。
- **模态单一**：仅涉及静态图像和文本，未整合电子健康记录、实验室检查、时序数据等多模态信息。
- **未考虑公平性与偏见**：未评估模型在不同人群（种族、性别、年龄）或罕见病上的表现，存在潜在算法偏见风险。
- **模型选择有限**：未包含最新模型（如LLaVA-Med改进版、RadOnc等），且所有模型均以零样本评估，未测试微调或领域自适应情况。
- **计算资源未报告**：缺乏推理所需的具体硬件和时间信息，不利于复现或成本评估。

（完）

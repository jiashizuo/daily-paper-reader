---
title: "Facts Fade Fast: Evaluating Memorization of Outdated Medical Knowledge in Large Language Models"
title_zh: 事实迅速褪色：评估大语言模型对过时医学知识的记忆
authors: "Juraj Vladika, Mahdi Dhaini, Florian Matthes"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.487.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 评估大语言模型对过时医学知识的记忆，引入MedRevQA数据集
tldr: 针对大语言模型中的医学知识可能过时的问题，构建了两个医学问答数据集MedRevQA，系统评估了模型对过时知识的记忆程度。实验表明模型知识随时间显著衰减，强调了保持医学大模型知识时效性的重要性，为医学LLM评估和更新提供了宝贵资源。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.487/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 803, \"height\": 554, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.487/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 738, \"height\": 510, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.487/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 778, \"height\": 490, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.487/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1628, \"height\": 945, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.487/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1655, \"height\": 415, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.487/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 708, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.487/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1648, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.487/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1613, \"height\": 1130, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.487/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1624, \"height\": 1341, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.487/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1630, \"height\": 829, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.487/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1637, \"height\": 604, \"label\": \"Table\"}]"
motivation: 大语言模型中的医学知识可能过时，影响医疗建议可靠性。
method: 基于系统文献综述构建了MedRevQA数据集，评估模型对过时医学知识的记忆。
result: 发现大语言模型存在显著的医学知识遗忘，知识时效性不足。
conclusion: 为提高医学大模型的可靠性，需要持续更新其知识。
---

## Abstract
The growing capabilities of Large Language Models (LLMs) can enhance healthcare by assisting medical researchers, physicians, and improving access to health services for patients. LLMs encode extensive knowledge within their parameters, including medical knowledge derived from many sources. However, the knowledge in LLMs can become outdated over time, posing challenges in keeping up with evolving medical recommendations and research. This can lead to LLMs providing outdated health advice or failures in medical reasoning tasks. To address this gap, our study introduces two novel biomedical question-answering (QA) datasets derived from medical systematic literature reviews: MedRevQA, a general dataset of 16,501 biomedical QA pairs, and MedChangeQA, a subset of 512 QA pairs whose verdict changed though time. By evaluating the performance of eight popular LLMs, we find that all models exhibit memorization of outdated knowledge to some extent. We provide deeper insights and analysis, paving the way for future research on this challenging aspect of LLMs.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLMs）依赖静态训练数据，而医学知识随时间不断更新（如系统综述结论改变）。当LLMs记忆过时的医学知识时，可能提供有害的建议或导致临床推理失败。现有研究主要关注百科类知识的时间衰减，针对医学领域过时知识记忆的评估极度缺乏。
- **研究动机**：量化评估主流LLMs对过时医学知识的记忆程度，揭示其知识时效性不足的问题，为提高医学AI系统的可靠性和时效性奠定基础。

## 2. 论文提出的方法论

- **核心思想**：基于权威医学系统文献综述（Cochrane系统性综述）构建两个QA数据集，通过比较模型对「过时答案」与「最新答案」的预测表现，间接衡量其记忆过时知识的程度。
- **关键技术细节**：
  - 从PubMed爬取2000-2024年所有Cochrane系统综述摘要（每个摘要包含背景、目标、方法、主要结果、作者结论等部分）。
  - 使用GPT-4o-mini半自动生成问题（基于目标部分改写为疑问句）和标签（从结论部分提取为Supported/Refuted/Not Enough Information三类），构成MedRevQA（16,501对）。
  - 从MedRevQA中筛选出1535组同一研究问题有多次更新的综述，其中512组结论随时间改变（即过时标签与最新标签不同），构成MedChangeQA（512对）。
  - 两位标注者（一位医生、一位生物医学工程师）验证MedRevQA子集（100例）正确率95%（问题）/92%（标签），MedChangeQA全部手动修正为金标签。
- **评估方法**：零样本设定下，仅输入问题，要求模型预测三类标签（S/R/NEI），使用宏平均精确率、召回率、F1分数作为指标。以模型在过时标签和最新标签上的F1差作为过时记忆程度的代理指标。

## 3. 实验设计

- **数据集与场景**：
  - MedRevQA（全量16.5k）用于评估通用医学知识掌握。
  - MedChangeQA（512例）用于评估时间知识变化，分别以过时标签和最新标签作为ground truth。
  - 额外分析：按问题年份分组的F1趋势；模型回答中引用术语的频率；OLMo预训练语料中Cochrane综述的n-gram分布；简单RAG改进实验（加入PubMed top1摘要）。
- **Benchmark & 对比方法**：
  - 8个LLMs：GPT-4o、Mistral 24B、Llama 3.3 70B、Qwen 2.5 7B、DeepSeek-V3 685B、OLMo 2 13B（通用模型）；PMC-LLaMa 13B、BioMistral 7B（医学专用模型，进一步在PubMed上预训练）。
  - 所有模型使用相同prompt（见附录Table 6），温度设为0，token限制512。GPT-4o通过OpenAI API调用，4个通用模型通过Together AI API，两个医学模型本地8-bit量化解码。
- **主要实验数量**：
  - 主要实验组：全量MedRevQA基准，MedChangeQA过时标签版，MedChangeQA最新标签版，共3组。
  - 辅助分析：图1/4按年份性能趋势、表4引用术语统计、图2 Dolma语料n-gram分析、附录A简单RAG实验（表3）、附录C示例分析。
  - 消融分析：RAG实验对比8个模型的改善（表3），但缺失更多消融（如不同检索策略、知识编辑等）。

## 4. 资源与算力

- 文中明确说明：两个生物医学模型（PMC-LLaMa 13B、BioMistral 7B）在本地运行，使用8-bit量化版本，部署在一张Nvidia V100 GPU（16GB VRAM）上，每个模型约2个计算小时。
- 其他模型通过API调用，未提供具体算力信息（如GPU型号、数量、总时长）。未说明API调用成本或总实验时间。
- 总体计算资源相对有限，但已有足够进行系统评估。

## 5. 实验数量与充分性

- **实验数量**：主要实验3组 + 多项辅助分析，覆盖8个模型，数据集规模中等（512个关键样本）。但整体实验数量一般，缺乏大规模消融（如不同prompt设计、不同解码参数、知识编辑方法对比等）。
- **充分性与公平性**：
  - 模型选择有代表性（通用+医学专用，参数范围7B-685B）。
  - 采用零样本、固定温度、相同prompt，尽可能保证公平。
  - 但部分模型通过API调用（黑盒），无法完全控制推理环境；本地模型量化可能影响性能。
  - MedRevQA标签为银标准（92-95%正确率），MedChangeQA为金标准，但仅100例抽样验证，样本量偏小。
  - 使用F1差作为过时记忆代理不够精确（可能受模型推理错误影响），但手动检查支持其主要来源为过时记忆。
  - 缺乏对更先进模型（如GPT-4 Turbo、Claude 3/4、Gemini等）的覆盖，也未进行跨时间版本比较。

## 6. 论文的主要结论与发现

- **关键发现**：
  - 所有8个模型都表现出对过时医学知识的记忆，在较老问题上表现显著更好（图1：2016年之前问题的平均F1高于之后问题）。
  - Llama 3.3和OLMo在最新标签上表现优于过时标签（F1差分别为+7.4和+2.9），而GPT-4o、Qwen、DeepSeek等模型在过时标签上表现更好（F1差为负值），说明后者更依赖旧知识。
  - 模型常引用10年以上的过时Cochrane综述作为依据（表4、表8示例）。
  - OLMo的预训练语料（Dolma）中，早期Cochrane综述的n-gram频率更高（图2），这可能是过时记忆更强的解释之一。
  - 简单RAG（加入PubMed top1摘要）可提升3-16个F1点，但仍有差距，说明仅靠检索不足以完全克服知识过时。
- **总体结论**：LLMs严重依赖训练时固化的医学知识，未及时更新，存在显著的安全隐患。数据集和评估框架可用于未来研究知识时效性问题。

## 7. 优点

- **数据集构建严谨**：基于最高等级证据（Cochrane系统综述），半自动+人工标注结合，确保问题与标签高质量。
- **创新评估维度**：首次引入时间变化的医学QA数据集，直接量化模型对过时知识的记忆，而非仅关注正确率。
- **多方面分析**：除了基准测试，还分析了预训练数据分布、引用术语、RAG改进、跨年份趋势，提升研究深度。
- **开放可复现**：公开数据集和代码，促进后续研究。
- **理论联系实际**：明确指出过时知识在临床场景的危害，并讨论多种潜在缓解方向（知识编辑、非遗忘、持续学习等）。

## 8. 不足与局限

- **标签准确性**：MedRevQA为银标准（92-95%正确），少量错误可能影响绝对性能评估。MedChangeQA虽经人工验证，但仅512例，样本量有限。
- **代理指标偏差**：使用F1差作为过时记忆程度的代理，不能排除模型因推理错误而非过时记忆导致的低分。
- **模型覆盖不全**：未测试Claude、Gemini、最新GPT-4 Turbo等，且未进行跨版本比较（如GPT-4不同版本）。
- **缺乏深入人类评估**：仅100例子集由两位专家标注，未对模型输出进行全面医学专家评估。
- **实验资源限制**：部分模型通过API调用，无法控制推理细节；医学模型在量化条件下运行，可能损失性能。
- **RAG实验简单**：仅使用单篇top1 PubMed摘要，未评估多文档检索、重排序、知识冲突解决等更高级方法。
- **未涉及缓解策略的实证**：仅讨论未来方向（知识编辑、非遗忘、持续学习），未实现和比较这些方法的效果。
- **可推广性**：数据集仅基于Cochrane综述，可能无法完全代表所有医学知识变化场景（如药物剂量、诊断标准、指南更新等）。

（完）

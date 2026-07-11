---
title: "EMGLLM: Data-to-Text Alignment for Electromyogram Diagnosis Generation with Medical Numerical Data Encoding"
title_zh: EMGLLM：基于医学数值数据编码的肌电图诊断生成中的数据到文本对齐
authors: "Zefei Long, Zhenbiao Cao, Wei Chen, Zhongyu Wei"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.1050.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 用于肌电图诊断生成的医学大语言模型
tldr: 针对大语言模型难以理解肌电图表格中连续数值数据的问题，提出EMGLLM模型。通过EMG对齐编码器将数值与健康程度嵌入对齐，并构建包含17250个真实病例的ETM数据集。实验证明，EMGLLM能准确生成诊断文本，提升医疗自动化效率。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1050/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 805, \"height\": 962, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1050/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 742, \"height\": 1392, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1050/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 798, \"height\": 644, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1050/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 804, \"height\": 471, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1050/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 792, \"height\": 969, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1050/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 785, \"height\": 278, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1050/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1649, \"height\": 730, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1050/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1650, \"height\": 336, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1050/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1643, \"height\": 710, \"label\": \"Table\"}]"
motivation: LLM难以解释医学检查表中的连续数值数据，限制自动化诊断。
method: 提出EMG对齐编码器，将参考值与测量值差异映射为健康程度嵌入。
result: 在真实病例数据集上，EMGLLM生成诊断的准确性和流畅性显著优于基线。
conclusion: EMGLLM为医学表格数据到文本生成提供了有效方案。
---

## Abstract
Electromyography (EMG) tables are crucial for diagnosing muscle and nerve disorders, and advancing the automation of EMG diagnostics is significant for improving medical efficiency. EMG tables contain extensive continuous numerical data, which current Large Language Models (LLMs) often struggle to interpret effectively. To address this issue, we propose EMGLLM, a data-to-text model specifically designed for medical examination tables. EMGLLM employs the EMG Alignment Encoder to simulate the process that doctors compare test values with reference values, aligning the data into word embeddings that reflect health degree. Additionally, we construct ETM, a dataset comprising 17,250 real cases and their corresponding diagnostic results, to support medical data-to-text tasks. Experimental results on ETM demonstrate that EMGLLM outperforms various baseline models in understanding EMG tables and generating high-quality diagnoses, which represents an effective paradigm for automatic diagnosis generation from medical examination table.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **背景**：肌电图（EMG）是诊断神经肌肉疾病的重要工具，医生通常将电信号转化为数据表格（如振幅、传导速度等），再根据表格生成诊断报告（包括**Findings**和**Impression**两部分）。该过程耗时且对经验要求高，自动化诊断可提升医疗效率。
- **核心问题**：EMG表格包含大量连续数值数据（如33.14个/样本），而现有大语言模型（LLM）不擅长数值比较与定量判断，难以理解表格中测试值与参考值之间的相对关系。不同医院设备差异导致参考值不统一，进一步增加难度。
- **整体含义**：本文旨在实现从EMG表格到诊断文本的自动生成，提出EMGLLM模型，通过专门设计的数值编码模块提升LLM对医学表格的理解能力，为医疗数据到文本生成提供有效范式。

### 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：模拟医生诊断流程——首先将测试值与参考值比较，判断异常程度（如“显著延长”“轻度减慢”），然后将这种相对关系编码为LLM易于理解的语义嵌入，最后结合LLM生成诊断文本。
- **关键技术细节**：
  - **EMG对齐编码器（EMG Alignment Encoder）**：
    - **参考值获取**：从训练集中筛选完全健康病例，对每个检查项目i计算多个百分位阈值（如2%、5%、…、20%）作为上参考值 `up1..upk` 和下参考值 `lp1..lpk`。
    - **输入构建**：对每个测试值xi，构建一个3行k列的**参考矩阵** `Xi`，第一行为上参考值序列，第二行为测试值重复k次，第三行为下参考值序列。该矩阵被视为“图像”。
    - **特征提取**：使用卷积层（Conv2d）提取矩阵特征，经flatten和线性层得到特征向量 `X̂i`。
    - **文本对齐**：将LLM词表压缩为`V'`个文本原型（如“prolonged”“slowed”等健康相关词汇），通过多头注意力机制将数据特征`X̂i`作为Query，文本原型作为Key和Value，输出与LLM嵌入空间对齐的连续数据嵌入。
  - **与LLM融合**：EMG对齐编码器输出`N`个虚拟令牌嵌入，与LLM其他输入嵌入拼接，使用LoRA微调LLM。
  - **两阶段训练**：
    1. **预训练**：冻结LLM，仅训练编码器，通过两个自监督任务（异常分类、单预测诊断描述）学习测试值与参考值的相对语义。
    2. **微调**：在真实EMG诊断数据上联合微调编码器和LLM（LoRA）。

### 3. 实验设计：数据集、基准与对比方法
- **数据集**：构建**ETM**数据集，包含来自华山医院的17,250份真实EMG诊断报告（2006-2013年），每份含匿名患者基本信息、EMG和NCV表格、医生撰写的Findings和Impression。划分训练集13,800、验证集1,725、测试集1,725。
- **基准**：
  - **DeepSeek-R1**（671B参数，0-shot/随机3-shot/RAG 3-shot，不微调）
  - **Lattice**（基于T5的表格到文本模型）
  - **TableLLM-7B**（针对表格的LLM，复现为中文版）
  - **Chinese-Alpaca-2-7B-16K**（作为EMGLLM的基础LLM，直接处理数值文本）
  - **EMGLLM**（提出模型，基于Chinese-Alpaca-2-7B-16K + 对齐编码器）
- **评价指标**：
  - **自动指标**：ROUGE-1/2/L、BLEU-1/2/3
  - **模型评价**：使用GPT-4o对生成结果打分，包括**正确性**（无错误报告异常）和**完整性**（无遗漏异常），每项1-5分
  - **人工评价**：50个样本由医学技术研究人员盲评，标准同上

### 4. 资源与算力
- 论文中**未明确说明**使用的GPU型号、数量及训练时长。仅提及使用LoRA微调（rank=8，alpha=16），优化器为Adam，学习率5e-5，batch size=1，梯度累积16步，预训练2000步，微调5个epoch。未提供具体的硬件配置和训练时间。

### 5. 实验数量与充分性
- **实验组数**：包含主实验（表2）、数据密集型子集实验（表3）、消融实验（表4）。主实验对比5个基线+EMGLLM共6个模型；消融实验包括“无参考值”“无预训练”“基于规则”“无编码器微调”共4种变体。所有自动实验均使用5个随机种子取平均。
- **充分性评估**：
  - **覆盖全面**：涵盖了不同大小模型（7B~671B）、不同方法（通用LLM、表格专用LLM、推理模型）。
  - **评估客观**：同时采用自动指标、GPT-4o模型评价和人工评价，且人工评价为盲评，结果一致性高。
  - **消融实验严谨**：逐一验证了参考值必要性、预训练、规则代替编码器、联合微调等关键设计。
  - **数据密集型子集**：进一步证明EMGLLM在更密集数值输入时的鲁棒性提升。
  - **局限性**：未在非EMG的医学表格（如血常规）上验证，但论文已明确作为未来工作。

### 6. 论文的主要结论与发现
- EMGLLM在所有自动指标（ROUGE、BLEU）和人工/模型评价上均显著优于所有基线方法，包括强大的DeepSeek-R1（671B）在少样本设置下的表现。
- 与直接使用相同基础LLM（Chinese-Alpaca-2）相比，EMG对齐编码器带来了稳定提升（总体诊断ROUGE-2提升约1.1个百分点）。
- 数据密集型场景下，EMGLLM的优势进一步扩大（ROUGE-2提升达3个百分点），表明编码器对密集数值输入特别有效。
- 消融实验表明：依赖随机参考值会导致性能大幅下降；规则化处理不如可学习编码器；预训练和编码器微调均不可或缺。

### 7. 优点：方法或实验设计上的亮点
- **方法创新**：将连续数值与文本语义通过对齐编码器融合，模拟医生对比参考值的实际行为，而非简单规则或离散化，具有更强的泛化性和可解释性。
- **数据集贡献**：构建了大规模、高质量、公开的ETM数据集（17,250例真实病例），填补了EMG诊断表格到文本任务的空白。
- **评估体系完善**：同时采用自动指标、GPT-4o模型评价和人工盲评，多维度验证有效性，且模型评价与人工评价趋势一致，减少偏见。
- **消融实验充分**：覆盖了参考值来源、预训练、微调等所有核心设计选择，论证严谨。
- **实用价值高**：模型可直接用于辅助医生生成诊断报告，提升基层医疗效率。

### 8. 不足与局限
- **领域局限性**：目前仅针对EMG表格设计，未在其他医学检查（如血常规、尿常规）上验证，泛化性未知。
- **表格元素覆盖不全**：编码器仅处理连续数值，未显式建模表格中的非数值信息（如肌肉名称、检查类型等），可能丢失部分上下文。
- **参考值获取依赖训练集**：参考值百分位完全从训练集健康样本统计得到，若训练集分布偏差（如医院间差异），可能影响模型在外部数据的表现。
- **算力信息缺失**：未披露训练所需GPU型号、数量及时间，不利于复现和资源评估。
- **潜在错误风险**：尽管表现优于基线，LLM仍可能产生不准确或误导性的诊断结论，实际部署前需严格临床验证。
- **伦理声明**：虽然数据集已匿名化并获批准，但自动诊断结果不能替代专业医生判断，需谨慎使用。

（完）

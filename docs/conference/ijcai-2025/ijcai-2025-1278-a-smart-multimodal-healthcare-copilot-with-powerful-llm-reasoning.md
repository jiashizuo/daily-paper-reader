---
title: A Smart Multimodal Healthcare Copilot with Powerful LLM Reasoning
title_zh: 一个具有强大LLM推理能力的智能多模态医疗助手
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/1278.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 多模态医疗助手，利用LLM推理
tldr: 本文提出了一种智能多模态医疗助手，融合视觉、语言等多种模态数据，利用大语言模型（LLM）的强大推理能力辅助临床决策。系统能够理解医学图像和文本，提供诊断建议和健康管理。该工作直接对应医疗视觉-语言模型和医疗LLM的需求。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1278/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1820, \"height\": 745, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1278/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 887, \"height\": 537, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1278/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 614, \"height\": 438, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1278/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 907, \"height\": 603, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1278/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 770, \"height\": 244, \"label\": \"Table\"}]"
motivation: 临床助手需要处理多模态数据并提供智能建议，现有系统推理能力不足。
method: 设计多模态融合架构，结合LLM与视觉模型实现医疗场景的上下文理解与推理。
result: 在模拟临床任务中展示了高效性和准确性。
conclusion: 为多模态医疗AI系统提供了可行方案，可推广至诊断辅助等场景。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：医疗误诊在全球范围内造成严重危害，而现有AI辅助诊断系统难以有效整合多种信息源（如语音、文本、电子健康记录EHR）并进行结构化推理。传统的检索增强生成（RAG）模型在区分相似疾病时表现不佳，常给出模糊或错误的建议。
- **整体含义**：本文提出**MedRAG**——一个智能多模态医疗助手，通过**知识图谱启发推理（KG-elicited reasoning）**增强LLM的推理能力，整合三种输入模式（非侵入式语音监测、通用医疗查询、EHR），输出诊断、治疗、药物和随访问题建议，旨在降低误诊风险。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将RAG与结构化医疗知识图谱相结合，利用知识图谱构建层级化的疾病区分特征，引导LLM进行更精确的诊断推理。
- **关键技术细节**：
  - **多模态输入**：支持Google Speech-to-Text实时语音转录、文件上传（EHR）和键盘输入。
  - **知识图谱构建**：从EHR数据库中提取四层图谱（特征、疾病、子类别、类别），并利用GPT-4o为相似疾病补充独特区分特征。
  - **KG-elicited Reasoning RAG**：
    - 根据患者症状在知识图谱中找到最相关的子类别，提取该子类别下的三元组（⟨疾病，关系，特征⟩）作为上下文。
    - 同时使用FAISS索引从EHR库中检索最相似的3条记录（基于文本嵌入和余弦相似度）。
    - 将知识图谱三元组与检索到的EHR共同输入到骨干LLM，增强推理。
  - **主动提问生成**：当语义相似度未达阈值时，系统自动找出关键未提及的特征，生成追问以收集更多信息。

### 3. 实验设计：数据集、Benchmark、对比方法

- **数据集**：
  - **DDXPlus**（公开）：用于初步评估。
  - **CPDD**（私人）：来自新加坡Tan Tock Seng Hospital，包含真实EHR数据。
- **Benchmark与指标**：使用准确率（L1、L2、L3三个层次，可能对应不同细化程度），并在CPDD上评估文本和语音两种模态。
- **对比方法**：
  - 基线LLM：Llama3.1-8b、Mixtral-8x7b、Qwen2.5-72b（案例研究中对比诊断建议）。
  - 整体系统对比：MedRAG vs GPT-4o（医生评估中对比）。

### 4. 资源与算力

- 文中**未明确说明**所使用的GPU型号、数量、训练时长等具体算力信息。仅提到使用了**GPT-4o**进行知识图谱增强以及**OpenAI’s text-embedding-3-large**进行文本嵌入，推断主要依赖API调用而非本地大规模训练。

### 5. 实验数量与充分性

- **实验数量**：较少。主要包括：
  - 一个案例对比（表1，4种方法）。
  - CPDD数据集上的模态评估（表2，8个配置：GPT-4o/GPT-3.5-turbo × text/voice × 3个指标）。
  - 医生评估（4位医生对3个案例的评分，图3）。
- **充分性评估**：作为IJCAI Demonstrations Track论文，实验规模可以接受，但**不够充分**：
  - 缺乏对DDXPlus的详细结果定量展示。
  - 未进行消融实验（如去掉KG、去掉RAG的影响）。
  - 对比基线较少，仅覆盖几个通用LLM，未与其他专用医疗AI（如Med-PaLM 2）比较。
  - 医生评估样本量仅4人，代表性有限。

### 6. 论文的主要结论与发现

- MedRAG在诊断准确性和特异性上显著优于普通LLM（如Llama3.1-8b、Mixtral-8x7b、Qwen2.5-72b），能正确识别“腰椎管狭窄”并主动追问，而基线给出的是“坐骨神经痛”等模糊答案。
- 在CPDD数据集上，基于GPT-4o的MedRAG在文本模态下L1准确率达91.87%，优于GPT-3.5-turbo版本。
- 医生评估中，MedRAG在所有五个标准（临床相关性、信任、采用意向等）上均优于GPT-4o，尤其**采用意向**得分突出，专家强调其循证推理能力强。

### 7. 优点：方法或实验设计上的亮点

- **多模态输入覆盖真实临床场景**：非侵入式语音监测不打断医患对话，EHR分析和自由查询互补。
- **知识图谱增强RAG的创新**：利用层次化疾病区分特征，显著提高相似疾病鉴别能力。
- **主动提问机制**：信息不足时自动追问，模拟医生思维。
- **医生评估**：不仅用了定量指标，还引入临床专家评价，增强了结论的可信度。

### 8. 不足与局限

- **实验覆盖不足**：仅一个公开数据集（未给出详细结果），私人数据集规模未知，缺乏泛化性验证。
- **基线对比有限**：未与专用医疗LLM（如Med-PaLM 2、ChatDoctor）或更先进的RAG变体（如GraphRAG）比较。
- **医生评估样本小**：仅4位医生，可能存在主观偏差。
- **可解释性与隐私**：未讨论模型输出的可解释性，也未涉及EHR数据隐私保护措施。
- **算力与部署代价未提及**：使用GPT-4o和外部API有成本和延迟问题，实际部署需考虑。

（完）

---
title: "DrAgent: Empowering Large Language Models as Medical Agents for Multi-hop Medical Reasoning"
title_zh: DrAgent：赋能大语言模型作为医学代理进行多跳医学推理
authors: "Fenglin Liu, Zheng Li, Hongjian Zhou, Qingyu Yin, Jingfeng Yang, Xin Liu, Zhengyang Wang, Xianfeng Tang, Shiyang Li, Xiang He, Ruijie Wang, Bing Yin, Xiao Gu, Lei Clifton, David A. Clifton"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.848.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 构建大语言模型作为医学代理进行多跳推理
tldr: 针对在临床决策中使用大语言模型的隐私和资源限制，提出DrAgent框架，将LLM作为医学代理通过多跳推理进行决策。该方法无需大量训练数据，通过智能体工具调用和知识检索，在多个医学基准上取得高准确率，为资源受限的医疗机构提供了实用的医学AI方案。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.848/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1522, \"height\": 724, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.848/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1587, \"height\": 740, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.848/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 802, \"height\": 574, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.848/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 780, \"height\": 465, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.848/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1624, \"height\": 562, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.848/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1444, \"height\": 364, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.848/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1439, \"height\": 418, \"label\": \"Table\"}]"
motivation: 现有方法依赖商业LLM或大量微调数据，存在隐私和资源问题。
method: 构建LLM代理进行多跳医学推理，结合工具使用和知识检索。
result: 在多个医学基准上取得高准确率，且保护数据隐私。
conclusion: DrAgent为资源受限的医疗机构提供了一种实用的医学AI方案。
---

## Abstract
Although large language models (LLMs) have demonstrated outperforming human experts in medical examinations, it remains challenging to adopt LLMs in real-world clinical decision-making that typically involves multi-hop medical reasoning. Common practices include prompting commercial LLMs and fine-tuning LLMs on medical data. However, in the clinical domain, using commercial LLMs raises privacy concerns regarding sensitive patient data. Fine-tuning competitive medical LLMs for different tasks usually requires extensive data and computing resources, which are difficult to acquire, especially in medical institutions with limited infrastructure. We propose DrAgent, which can build LLMs as agents to deliver accurate medical decision-making and reasoning. In implementation, we take a lightweight LLM as the backbone to collaborate with diverse clinical tools. To make efficient use of data, DrAgent introduces recursive curriculum learning to optimize the LLM in an easy-to-hard progression. The results show that our approach achieves competitive performance on diverse datasets.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：大语言模型（LLM）在医学考试中已超越人类专家，但在真实临床决策中表现不佳，因为真实临床需要**多跳医学推理**（multi-hop reasoning），例如依次分析症状、进行体格检查、实验室检验、影像学检查，最终给出治疗方案。
- **现有方法的问题**：
  - 使用商业LLM（如GPT-4）存在患者数据隐私泄露风险。
  - 对开源LLM进行大规模微调需要海量数据（百万至数十亿样本）和大量计算资源，医疗资源有限的机构难以承担。
- **整体含义**：为了解决上述矛盾，作者提出**DrAgent**，利用轻量级LLM作为“医学代理”，协作调用现有的多样化临床工具（如体格检查、实验室检验、NHS API等），通过迭代多跳推理做出准确决策。同时引入**递归课程学习**（Recursive Curriculum Learning, RCL）以高效利用有限标注数据。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- DrAgent模拟真实临床医生的推理流程，在每个推理轮次执行**Thought-Action-Observation**循环：Thought分析历史和当前问题，决定下一步行动；Action调用选中的工具并解析参数；Observation获取工具的输出结果。通过多轮迭代，逐步得出准确答案。

### 关键技术细节
- **工具库**：包含16种医疗工具（见表1），包括：
  - 程序：体格检查、实验室检验、微生物检验、放射学检验（来自MIMIC-IV数据库）
  - API：英国NHS健康API、NHS药品API
  - 模型：基于BioLinkBERT的问答、药物推荐、药物不良反应、药物相互作用、命名实体识别、关系抽取、文档分类；基于Transformer的放射报告生成、临床笔记摘要
- **递归课程学习（RCL）**：
  - 步骤1：按推理跳数（1跳到N跳）对标注数据排序，从易到难训练。
  - 步骤2：第k轮训练，使用所有跳数≤k的标注数据对模型进行指令微调。
  - 步骤3：训练后的模型对未标注数据（无推理过程）进行推理，生成答案和推理过程。
  - 步骤4：将推理正确且符合当前跳数限制的数据作为伪标注数据加入训练集；将推理错误的数据收集为反思数据集。
  - 步骤5：重复以上过程，用扩展后的数据集继续训练，并利用反思数据集训练模型进行自我反思。
- **训练细节**：使用Phi-3.5-mini-instruct（3.8B参数）作为骨干，采用LoRA（rank=128）微调5个epoch，batch size=64，优化器AdamW，余弦学习率调度，峰值学习率2e-4。

## 3. 实验设计

### 使用的数据集和场景

| 任务类型 | 任务名称 | 数据集 | 评价指标 |
|---------|---------|-------|---------|
| 单跳医学推理 | 问答(QA) | PubMedQA | Accuracy |
|  | 药物推荐(DR) | HealthCareMagic | F1 |
|  | 药物不良反应(DAR) | ADE-Corpus-v2 | Accuracy |
|  | 药物相互作用(DDI) | DDI-Corpus | Accuracy |
|  | 命名实体识别(NER) | BC5-Disease | F1 (实体级) |
|  | 关系抽取(RE) | GAD | Micro F1 |
|  | 文档分类(DC) | HoC | Micro F1 |
|  | 放射报告生成(RRG) | MIMIC-CXR | ROUGE-L |
|  | 出院摘要(DS) | MIMIC-III | ROUGE-L |
| 多跳医学推理 | 治疗推荐 | MIMIC-IV | Accuracy（1-5跳） |

### 基准方法对比
- **原始LLM**：Phi-3.5-mini (3.8B), Mistral (7B), Meditron-7B, BioMistral (7B), MedAlpaca (13B), Meditron-70B, GPT-3.5-turbo, GPT-4o
- **AI代理方法**：ReAct (7B), BOLAA (7B), Chameleon (7B), MedAgents (GPT-3.5)

### 对比公平性
- 对基线代理方法统一使用LLaMA-2-7B作为骨干进行复现；保持相同设置。
- DrAgent使用3.8B参数，远小于多数基线（7B~70B+），体现了参数效率优势。

## 4. 资源与算力

- 论文明确说明：所有训练和推理实验在**四块A100 GPU**上完成。
- 训练数据：GPT-4o生成每个单跳任务3000条训练数据，多跳任务10000条训练数据。
- 训练轮次：5个epoch，LoRA rank=128，batch size=64。
- 未说明具体训练时长（小时），但指出是轻量级训练。

## 5. 实验数量与充分性

论文进行了多组实验：
- **单跳医学推理**：9个数据集，对比12种基线方法。
- **多跳医学推理**：MIMIC-IV上1-5跳推理，对比LLMs和AI Agents。
- **泛化性实验**：将DrAgent应用于不同规模的LLM（Phi-3.5、MedAlpaca、BioMistral、Meditron、GPT-3.5、GPT-4），展示性能提升。
- **鲁棒性实验**：使用不同大小的训练数据（1000、5000、10000）测试性能变化。
- **消融实验**：分别去掉Tools、Thought、Action、Curriculum Learning、RCL等组件，评估多跳任务性能和工具选择准确性。
- **定性分析**：提供具体案例对比GPT-4o和DrAgent的输出。

**充分性评估**：实验覆盖了多种任务类型（分类、生成、推理）、多个模型规模、多种训练数据量，并进行了消融和泛化分析，较为充分；使用了随机种子取平均结果，具有客观性。但未进行统计学显著性检验。

## 6. 主要结论与发现

- DrAgent在所有单跳和多跳医学推理任务上，以**最少参数（3.8B）** 达到与甚至超越**更大规模LLM（如GPT-4o、Meditron-70B）** 的性能，例如在药物推荐任务上F1值几乎翻倍。
- 在多跳推理中，所有方法性能随跳数增加下降，但DrAgent始终优于其他代理方法（ReAct、BOLAA、Chameleon、MedAgents），且接近GPT-4o水平。
- 递归课程学习显著提升了对复杂多跳任务的泛化能力，尤其是在有限数据下。
- DrAgent能提供带证据的正确回答，避免了GPT-4o的幻觉（如虚构“最近研究”）。
- 该方法对较小模型提升更明显，适合计算资源有限的医疗机构。

## 7. 优点

- **轻量高效**：使用3.8B参数模型，LoRA微调，对算力和数据需求低，适合资源受限的医疗环境。
- **隐私友好**：无需向商业LLM上传患者数据，可本地部署。
- **可扩展性**：工具库无关具体LLM架构，可灵活增加新的医疗工具（如临床计算器、医疗设备）。
- **数据效率**：RCL通过伪标注和反思训练，有效利用有限标注数据，并利用未标注数据，减少对大量手工标注的依赖。
- **推理透明度**：生成Thought-Action-Observation链，可追溯推理过程，提高可信度。
- **强泛化**：在不同参数规模的LLM上均能提升性能，尤其对小模型提升显著。

## 8. 不足与局限

- **实验覆盖**：未在真实临床部署环境中进行验证，仅使用公开数据集（MIMIC系列、PubMedQA等），与实际临床工作流程仍有差距。
- **偏差风险**：训练数据由GPT-4o生成，可能继承GPT-4o的偏差或错误；反思数据集也依赖模型自身输出，存在自我强化偏差。
- **应用限制**：工具库中的程序（如体格检查）来自MIMIC数据库的模拟数据，并非真实患者反馈；实际临床中，工具输出可能更复杂、存在错误或缺失。
- **未讨论计算成本**：虽然训练开销相对较小，但未详细报告总训练时间与实际部署时的推理延迟，对于实时临床决策可能不足。
- **隐私声明有限**：虽然避免使用商业API，但训练数据本身来自公开数据集，不涉及真实患者隐私问题；在实际部署中仍需考虑数据保护合规。
- **未与更多多模态方法对比**：当前仅对比文本型LLM和代理，未与医学多模态模型（如Med-Gemini、VLM）比较。
- **可迁移性不确定**：NHS API为英国标准，其他国家的医疗标准可能不同；RCL的课程顺序依赖手动定义跳数，自动化程度有限。

（完）

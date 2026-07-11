---
title: "Towards Omni-RAG: Comprehensive Retrieval-Augmented Generation for Large Language Models in Medical Applications"
title_zh: 迈向全方位RAG：医疗应用中大语言模型的综合检索增强生成
authors: "Zhe Chen, Yusheng Liao, Shuyang Jiang, Pingjie Wang, YiQiu Guo, Yanfeng Wang, Yu Wang"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.742.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 面向医疗大模型减少幻觉的检索增强生成
tldr: 针对医疗大模型因知识有限而产生幻觉的问题，提出Omni-RAG框架，将多源知识获取建模为源规划问题，通过自适应查询生成整合外部知识，有效减少幻觉，提升推理可靠性。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.742/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 730, \"height\": 711, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.742/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1658, \"height\": 828, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.742/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 725, \"height\": 416, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.742/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 805, \"height\": 417, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.742/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 640, \"height\": 542, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.742/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 799, \"height\": 598, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.742/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1498, \"height\": 546, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 799, \"height\": 272, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 745, \"height\": 367, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 800, \"height\": 557, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 796, \"height\": 363, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1647, \"height\": 1167, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 795, \"height\": 335, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 797, \"height\": 274, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 796, \"height\": 241, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1484, \"height\": 401, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1644, \"height\": 308, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1424, \"height\": 488, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 793, \"height\": 198, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 794, \"height\": 202, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 793, \"height\": 224, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 575, \"height\": 739, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1645, \"height\": 1809, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.742/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1641, \"height\": 611, \"label\": \"Table\"}]"
motivation: 医疗大模型常因医学知识不足产生幻觉，亟需多源知识整合。
method: 将多源知识获取形式化为源规划问题，为不同来源制定上下文适配的查询。
result: 在医疗诊断推理等任务上有效减少了幻觉，提升了回答准确性。
conclusion: 源规划策略显著增强了医疗大模型的知识基础。
---

## Abstract
Large language models hold promise for addressing medical challenges, such as medical diagnosis reasoning, research knowledge acquisition, clinical decision-making, and consumer health inquiry support. However, they often generate hallucinations due to limited medical knowledge. Incorporating external knowledge is therefore critical, which necessitates multi-source knowledge acquisition. We address this challenge by framing it as a source planning problem, which is to formulate context-appropriate queries tailored to the attributes of diverse sources. Existing approaches either overlook source planning or fail to achieve it effectively due to misalignment between the model’s expectation of the sources and their actual content. To bridge this gap, we present MedOmniKB, a repository comprising multigenre and multi-structured medical knowledge sources. Leveraging these sources, we propose the Source Planning Optimisation method, which enhances multi-source utilisation. Our approach involves enabling an expert model to explore and evaluate potential plans while training a smaller model to learn source alignment. Experimental results demonstrate that our method substantially improves multi-source planning performance, enabling the optimised small model to achieve state-of-the-art results in leveraging diverse medical knowledge sources.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：大语言模型（LLMs）在医疗应用中（如诊断推理、临床决策、健康咨询）常因内部医学知识不足而产生“幻觉”，严重影响可靠性和安全性。
- **动机**：引入外部多源知识是缓解该问题的关键，但现有方法要么忽视源间差异（统一使用原问题检索），要么因模型对源内容的期望与实际内容不匹配而导致检索策略失效。
- **核心挑战**：如何为不同知识源（如教材、指南、研究文献、百科、知识图谱）分别构造上下文适配的查询——即“源规划”（Source Planning）问题。

## 2. 方法论：核心思想、关键技术细节
### 2.1 核心思想
- 将多源知识获取形式化为**源规划问题**：为每个源生成多个高针对性的查询，使检索文档尽可能支持正确答案。
- 提出**源规划优化（SPO）**方法，包含三步：规划探索 → 规划判断 → 规划学习。

### 2.2 关键技术细节
- **规划探索**：使用专家LLM（Qwen2.5-72B-Instruct-AWQ）为每个源生成6个候选查询，原则：单源多样性、源间对齐。检索各源获得文档。
- **规划判断**：同样由专家LLM判断每个查询对应的文档是否支持黄金答案，从而划分“正查询”和“负查询”。
- **规划学习**：
  - **监督微调（SFT）**：从每个源中随机选取至多3个正查询组成正规划，训练小模型（Qwen2.5-7B）模仿正规划。
  - **直接偏好优化（DPO）**：配对正规划与负规划，进一步对齐模型对不同源的感知。
- **训练目标**：
  - SFT 损失：\( \mathcal{L}_{SFT} = -\mathbb{E}_{(x,P^+)\sim\mathcal{D}^+}\log M_\theta(P^+|x) \)
  - DPO 损失：\( \mathcal{L}_{DPO} = -\mathbb{E}_{(x,P^+,P^-)\sim\mathcal{D}^\pm}\log\sigma(r_\theta(x,P^+) - r_\theta(x,P^-)) \)，其中 \( r_\theta(x,P)=\beta\log\frac{M_\theta(P|x)}{M_{SFT}(P|x)} \)。

### 2.3 知识库 MedOmniKB
- 包含5种来源：**Book**（27.7k PDFs）、**Guideline**（45.7k文章）、**Research**（25.3M摘要）、**Wiki**（6.4M条目）、**Graph**（1.7M概念，2.9M关系，来自UMLS+DrugBank）。
- 大小显著超过已有医疗检索库（如MedCorp、ClinicalCorp等）。

## 3. 实验设计
- **数据集**：共11个，涵盖以下类别：
  - 推理QA：MedQA、MedMCQA、MMLU-Med
  - 研究QA：PubMedQA、BioASQ
  - 临床QA：SEER、DDXPlus、MIMIC-IV-ED
  - 长文生成：LiveQA、MedicationQA、ExpertQA-Biomed
  - 总计训练24199、验证4837、测试8248样本。
- **基准方法**：
  - 无检索（No Retrieval）
  - 原始问题检索（Original Question）
  - 伪文档扩展（Query2Doc）
  - 提示规划（Prompting）
  - 反思（Reflexion）
  - 树搜索（SeRTS）
  - 可训练规划（Trainable Planning，以下游任务准确率作为信号）
  - 排序反馈规划（RaFe Planning，以重排序分数作为信号）
- **读者模型**：冻结的Qwen2.5-7B/14B/32B/72B、Llama3.1-8B、Mistral0.3-7B，分别测试不同内在知识水平下的效果。
- **评估指标**：封闭式QA使用准确率；开放式生成使用专家人工评分（4维度：相关性、完整性、医学专业性、可解释性）。

## 4. 资源与算力
- 论文未明确给出训练所需的GPU型号、数量及总时长，但提供了以下信息：
  - 专家模型：Qwen2.5-72B-Instruct-AWQ（需80G A100多卡）
  - 小模型：Qwen2.5-7B-Instruct（LoRA微调）
  - 推理框架：vLLM
  - 知识库检索：Qdrant（支持CPU加速），重排序使用1块GPU（≥2GB显存）
  - 训练数据构建（24199样本）估计时间：使用1 GPU需451.7小时，16 GPU并行降至47.7小时；测试（8248样本）使用1 GPU需14.2小时，8 GPU并行降至3.4小时（参见表11）。
- **总结**：作者未详细说明具体GPU配置和训练总时长，但给出了多进程并行下的估计时间，表明训练构建是离线一次性成本，推理开销可控。

## 5. 实验数量与充分性
- **实验组数**：主实验在3种不同读者（7B/8B）下对比8种方法（共24个表项），另有多个扩展实验：
  - 不同大小读者（7B~72B）表现（图3）
  - 各源贡献（去掉一个源的影响，表6）
  - 训练阶段效果（SFT vs SFT+DPO，表7）
  - OOD任务适应（排除某类训练数据，图4）
  - OOD检索源适应（表8）
  - 训练数据量鲁棒性（图5）
  - 人工评估查询判断质量（表9）
  - 不确定性分析（表10）
  - 案例研究（表16）
  - 查询数量/多样性统计（附录A.1、B.2）
  - 成本分析（表11、14）
- **充分性评价**：实验设计较为全面，覆盖多数据集、多读者、多基线、多种消融和鲁棒性测试。但作者也承认评估数据集仍有未覆盖的医疗场景，真实用户满意度和治疗结果未评估。总体而言，实验较为充分、客观。

## 6. 主要结论与发现
1. **SPO显著提升多源规划能力**：在所有读者下均大幅优于现有方法（包括更大型的72B模型），平均准确率提升4~8个百分点。
2. **训练信号更优**：相比基于下游任务准确率或重排序分数的信号，SPO利用LLM-as-a-judge直接判断文档是否支持答案，更准确。
3. **各源均有益**：去除任一源都会导致性能下降，其中Book、Guideline、Research对多数任务贡献最大。
4. **SFT+DPO组合关键**：仅SFT已能大幅提升，但DPO进一步强化了对源的感知；单独DPO效果有限。
5. **OOD适应性良好**：即使训练数据中排除某类任务或某源，SPO仍能推广到未见场景，说明学到了通用的规划能力。
6. **小模型超越大模型**：SPO优化的7B模型在规划效率上超过72B的冻结构造方法，验证了源规划学习的高效性。

## 7. 优点（方法或实验设计亮点）
- **问题新颖**：首次将多源知识获取明确建模为“源规划”，并构建了规模最大、多样性最高的医疗知识库MedOmniKB。
- **方法论清晰**：采用“探索-判断-学习”三段式框架，结合SFT和DPO让轻量模型学会源对齐，而非依赖大模型推理时实时规划。
- **实验设计严谨**：覆盖11个数据集、3种不同内在知识的读者、多种单/多源基线，并做了充分的消融和鲁棒性测试。
- **实用性**：训练数据构建离线一次性，推理时小模型速度快、成本低，适合实际部署。
- **公平性**：对比方法均调整为多源版本，并统一检索设置；人工评估用于判断训练信号质量和长文生成质量，减少自动指标偏差。

## 8. 不足与局限
- **知识覆盖不全**：MedOmniKB虽包含5个源，但仍有未被覆盖的医学知识资源（如临床试验、电子病历等），需后续扩展。
- **探索-判断阶段成本较高**：需要72B模型生成和判断大量查询，虽然离线完成，但资源消耗仍较大（24199样本估计451+小时单卡）。
- **评估维度有限**：仅在公开QA数据集上测试，未评估真实临床环境下的用户满意度、治疗结果等；开放式生成依赖专家人工评分，但样本量有限。
- **源规划假设**：假定所有源均为文字/图结构，未考虑多模态医疗数据（影像、波形等）。
- **泛化性待验证**：OOD实验显示一定适应性，但仅针对三种源，更多未见源或跨语言场景未测试。
- **计算资源细节缺失**：未明确给出训练总时长和GPU型号，不利于复现和成本估计。

（完）

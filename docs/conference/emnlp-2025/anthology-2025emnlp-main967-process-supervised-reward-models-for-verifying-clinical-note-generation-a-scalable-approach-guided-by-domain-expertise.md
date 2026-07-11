---
title: "Process-Supervised Reward Models for Verifying Clinical Note Generation: A Scalable Approach Guided by Domain Expertise"
title_zh: 过程监督奖励模型用于临床笔记生成验证：一种领域专家引导的可扩展方法
authors: "Hanyin Wang, Chufan Gao, Qiping Xu, Bolun Liu, Guleid Hussein, Hariprasad Reddy Korsapati, Mohamad El Labban, Kingsley Iheasirim, Mohamed Hassan, Gokhan Anil, Brian Bartlett, Jimeng Sun"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.967.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 过程监督奖励模型用于临床笔记生成，对齐医疗大模型
tldr: 临床笔记生成缺乏标准答案，过程监督奖励模型（PRM）难以直接应用。本文明确定义临床笔记的合理步骤，注入专家知识驱动的真实错误，并利用大语言模型规模化生成过程监督数据。基于LLaMA-3.1 8B的PRM在验证临床笔记质量上持续超越闭源推理模型，展现了可扩展的奖励模型训练方法。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.967/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1669, \"height\": 1229, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.967/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 807, \"height\": 849, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.967/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1657, \"height\": 412, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.967/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 795, \"height\": 325, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.967/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 797, \"height\": 473, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 695, \"height\": 502, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1605, \"height\": 698, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1668, \"height\": 1129, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 810, \"height\": 415, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 796, \"height\": 173, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1326, \"height\": 138, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1664, \"height\": 1798, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1665, \"height\": 1382, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1658, \"height\": 729, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1657, \"height\": 1129, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1662, \"height\": 833, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1652, \"height\": 1538, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.967/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1658, \"height\": 1672, \"label\": \"Table\"}]"
motivation: 临床笔记生成缺乏标准答案，需要可靠的步骤级验证以提升医疗大模型输出质量。
method: 定义临床笔记步骤，注入专家知识错误，利用大语言模型生成过程监督数据训练PRM。
result: 基于LLaMA-3.1 8B的PRM在临床笔记验证上优于闭源推理模型。
conclusion: 该框架为缺乏标准答案的医疗文本生成提供了有效的奖励模型训练范式。
---

## Abstract
Process-supervised reward models (PRMs) excel at providing step-by-step verification for large language model (LLM) outputs in domains like mathematics and coding. However, their application to fields lacking ground-truth answers, such as clinical note generation, poses significant challenges. We introduce a novel framework for training PRMs to deliver step-level reward signals for LLM-generated clinical notes. By precisely defining meaningful “steps,” injecting realistic “errors” informed by domain expertise, and leveraging LLMs to generate process supervision data at scale, we overcome previous limitations. Our PRM, built on LLaMA-3.1 8B, consistently outperforms proprietary reasoning and non-reasoning models, achieving state-of-the-art performance on two key evaluations: (1) distinguishing gold-standard from error-containing samples with 98.8% accuracy, and (2) selecting physician-preferred clinical notes with 56.2% accuracy. We investigate critical components for effective PRM training, including optimal loss functions and data selection strategies, and present a comprehensive physician reader study identifying predictors of downstream Best-of-N performance. Our study sheds light on unlocking the potential of PRMs for diverse generative tasks across domains.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：大语言模型（LLM）在临床笔记生成中展现出潜力，但其输出可能包含错误且与医生偏好不一致。当前缺乏自动化的、可扩展的方法来评估生成笔记的质量，人工评估成本高昂。过程监督奖励模型（PRM）虽然在数学、代码等具有明确标准答案的领域表现出色，但在临床笔记生成这类开放式、无标准答案的任务中难以直接应用。
- **研究动机**：需要一种可扩展、自动化的方法，为LLM生成的临床笔记提供步骤级验证，实现细粒度错误定位和最佳笔记筛选。
- **整体含义**：首次将PRM成功应用于开放式文本生成（临床领域），证明了其有效性，并提供了可推广的框架。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
### 核心思想
- 通过**领域专家知识**定义临床笔记中的“步骤”，注入**真实错误**，并利用LLM**规模化生成过程监督数据**，训练PRM为每个步骤提供奖励信号。
### 关键技术细节
1. **步骤定义**：针对“评估与计划”（A&P）部分，将每个问题作为独立步骤，问题内每个句子作为子步骤；添加问题级和笔记级的完整性步骤；最后添加整体笔记评分步骤（end-of-note step）。
2. **错误注入**：通过医生专家讨论确定三种常见错误类型（事实不准确、幻觉、无用性），利用Gemini Pro 1.5生成错误池，随机替换原始步骤；另外通过随机删除步骤引入“不完整性”错误。同时引入语义多样性（生成同义替换句）。
3. **训练目标**：标准交叉熵损失。损失函数可以只计算在指定令牌位置（如仅笔记部分、仅特殊令牌等）。最佳配置为：仅对笔记部分（含特殊令牌）计算损失，使用全部数据（含所有质量级别和同义替换）。
4. **使用方式**：推理时执行一次PRM前向传播，获取每个步骤正确的概率（softmax概率）。笔记级分数可通过对数概率求和（乘积形式），效果最好。
### 公式
- 损失函数（标准交叉熵）：\( L = -\sum_{i \in I} \log p_\theta(t_i | t_{<i}) \)
- 笔记级PRM分数：各步骤PRM分数的乘积（实际使用对数求和）。

## 3. 实验设计：数据集、场景、benchmark、对比方法
### 数据集
- 训练数据：PRM-Clinic（融合Dialogue-G和ACI-BENCH，共约1万样本），其中gold-reference笔记由Gemini Pro 1.0生成。
- 评估任务：
  - **A-Prefer（OOD）**：选择医生偏好的笔记（从3个候选），笔记由LLaMA-Clinic生成（非Gemini Pro，属于OOD）。
  - **A-Verify（OOD）**：从含错误的样本中识别gold-reference笔记，笔记来源同A-Prefer。
  - **Dialogue-G（ID）**：类似验证，笔记由Gemini Pro生成（ID）。
  - **A-Validate（ID）**：验证，笔记源自ACI-BENCH validation子集。
### Benchmark与对比方法
- **Baseline**：LLM-as-a-judge（Gemini Pro 1.0、1.5、GPT-4o、o1、o3-mini），以及vanilla ORM（仅最终评分）。
- **PRM vs ORM**：同一模型可作为ORM（仅用末尾分数）或PRM（各步骤分数乘积）。
### 评价指标
- 准确率（在每个case中，Best-of-N所选笔记是否匹配gold-reference或医生偏好）。

## 4. 资源与算力
- 论文**明确说明**：所有模型使用4块80GB NVIDIA A100或H100 GPU，采用DeepSpeed ZeRO Stage 3优化，AdamW优化器，全局batch size 16，BF16精度，训练1个epoch。超参数搜索（学习率3e-4, 1.5e-4, 3e-5），最终选用3e-5。

## 5. 实验数量与充分性
- **主实验**：在所有4个评估任务上对比多种baseline（图3），结果全面。
- **消融实验**（表3）：系统探究了损失函数（3种变体）和数据选择（5种组合），共至少8组对比。
- **医生读者研究**（图4）：选取4个不同性能的PRM检查点，对Best-of-2000笔记进行医生人工评价（至少3名医生/组），验证了A-Prefer和A-Verify对下游选优的预测能力。
- 实验设计**充分、客观、公平**：OOD与ID场景区分清晰，baseline包含最新闭源模型，消融实验控制变量严谨，读者研究采用随机盲法。

## 6. 论文的主要结论与发现
- 基于LLaMA-3.1 8B的PRM在所有任务上**持续超越所有基线**（包括GPT-4o、o1、o3-mini等闭源推理模型）。
- 在验证任务中达到**98.8%准确率**（OOD A-Verify），在医生偏好选择任务中达到**56.2%**（OOD A-Prefer），均创SOTA。
- PRM表现**优于ORM**（偏好任务中明显），且最佳PRM由**仅对笔记部分计算损失**训练得到。
- 数据增强（同义替换）和质量筛选能提升性能，但全部数据结合最好。
- 消融研究表明：学习预测步骤级reward标签（即使最终只用作ORM）比vanilla ORM更好。
- 医生读者研究表明：A-Prefer和A-Verify都能预测下游Best-of-N性能，且A-Prefer影响更大。

## 7. 优点：方法或实验设计亮点
- **创新性**：首次将PRM应用于无标准答案的临床笔记生成，打破PRM仅适用于数学/代码的局限。
- **可扩展性**：利用LLM生成合成错误和监督数据，无需人工注释，可推广到其他领域。
- **步骤设计**：基于临床专家知识（问题列表、完整性检查等）定义步骤，具有现实意义。
- **实验严谨**：分别评估ID和OOD场景，包含消融、读者研究，验证了方法的鲁棒性和解释性。
- **性能突出**：即使基模型是8B参数量，仍超越大型闭源模型。

## 8. 不足与局限
- **数据集规模有限**：训练数据中95.1%来自Dialogue-G（合成对话），真实世界多样性可能不足；ACI-BENCH测试集仅80例，医生读者研究仅40例。
- **医生偏好复杂**：A-Prefer任务准确率仅56.2%，说明当前PRM对齐医生偏好的能力仍有较大提升空间，且偏好可能因专科不同而异（论文提到急诊/妇产科医生与内科医生意见分歧大）。
- **错误类型局限**：仅覆盖四种错误（事实不准确、幻觉、无用性、不完整），实际临床笔记中可能存在更多类型（如遗漏重要细节、顺序错误等）。
- **模型依赖Gemini生成数据**：虽方法通用，但当前实现依赖Gemini Pro 1.5，可能引入其固有偏见；未验证使用开源模型生成的效果。
- **应用限制**：步骤定义依赖当前“Best Practice”格式，换专科需重新定义；未探索推理时缩放（如MCTS）或步骤级强化学习，这些是PRM潜在优势领域。
- **伦理风险**：合成数据可能放大偏见（如特定疾病人群错误类型不均衡），大规模部署前需严格验证。

（完）

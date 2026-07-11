---
title: Embedding Domain Knowledge for Large Language Models via Reinforcement Learning from Augmented Generation
title_zh: 通过增强生成的强化学习将领域知识嵌入大语言模型
authors: "Chaojun Nie, Jun Zhou, Guanxiang Wang, Shisong Wu, Zichen Wang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.979.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 基于增强生成的强化学习方法嵌入领域知识
tldr: 针对大语言模型在领域任务中知识稀缺和时滞问题，提出通过增强生成的强化学习来嵌入领域知识。该方法利用生成增强数据进行强化学习训练，在多个领域任务上优于持续预训练和监督微调，展示了强化学习微调在知识注入中的潜力，但尚未聚焦医学领域。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.979/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 797, \"height\": 634, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.979/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1655, \"height\": 721, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.979/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1657, \"height\": 354, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.979/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 765, \"height\": 546, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.979/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1616, \"height\": 464, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.979/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 773, \"height\": 451, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1649, \"height\": 882, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1238, \"height\": 207, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 804, \"height\": 471, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1646, \"height\": 343, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 782, \"height\": 172, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 788, \"height\": 459, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 805, \"height\": 378, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 804, \"height\": 378, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 807, \"height\": 377, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 806, \"height\": 377, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 801, \"height\": 355, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 802, \"height\": 355, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 801, \"height\": 353, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 801, \"height\": 353, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 802, \"height\": 353, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 803, \"height\": 354, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 808, \"height\": 356, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 807, \"height\": 273, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 805, \"height\": 278, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1678, \"height\": 1664, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.979/table-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1616, \"height\": 2392, \"label\": \"Table\"}]"
motivation: 现有方法在领域知识嵌入时无法区分关键知识点。
method: 提出基于增强生成的强化学习方法，通过生成增强数据并进行强化学习训练。
result: 在多个领域任务上优于持续预训练和监督微调。
conclusion: 该方法有效提升了模型在特定领域任务上的知识结构和推理能力。
---

## Abstract
Large language models (LLMs) often exhibit limited performance on domain-specific tasks due to the natural disproportionate representation of specialized information in their training data and the static nature of these datasets. Knowledge scarcity and temporal lag create knowledge gaps for domain applications. While post-training on domain datasets can embed knowledge into models, existing approaches have some limitations. Continual Pre-Training (CPT) treats all tokens in domain documents with equal importance, failing to prioritize critical knowledge points, while supervised fine-tuning (SFT) with question-answer pairs struggles to develop the coherent knowledge structures necessary for complex reasoning tasks. To address these challenges, we propose Reinforcement Learning from Augmented Generation (RLAG). Our approach iteratively cycles between sampling generations and optimizing the model through calculated rewards, effectively embedding critical and contextually coherent domain knowledge. We select generated outputs with the highest log probabilities as the sampling result, then compute three tailored reward metrics to guide the optimization process. To comprehensively evaluate domain expertise, we assess answer accuracy and the rationality of explanations generated for correctly answered questions. Experimental results across medical, legal, astronomy, and current events datasets demonstrate that our proposed method significantly outperforms baseline approaches. Our code and data are open sourced at https://github.com/ChaojunNie/RLAG.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

大型语言模型（LLMs）在通用任务上表现出色，但由于训练数据中专业领域知识代表性不足且静态，导致在特定领域任务（如医疗、法律、天文、时事）上存在知识缺口，性能有限。现有知识嵌入方法存在明显缺陷：
- **持续预训练（CPT）**：平等对待所有token，无法聚焦关键知识点。
- **监督微调（SFT）**：基于问答对训练，难以形成复杂推理所需的连贯知识结构。

为此，论文提出 **基于增强生成的强化学习（Reinforcement Learning from Augmented Generation, RLAG）**，旨在通过迭代优化，将领域知识有效嵌入模型参数。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
利用检索增强生成（RAG）的偏好信号：模型在给定相关文献时生成的回答（增强生成）优于无文献时生成的回答（朴素生成）。通过强化学习，使模型在没有外部检索的情况下也能生成类似高质量回答，从而内化知识。

### 关键技术细节
- **采样阶段**：对每个问题，分别用“问题+选项”输入模型（朴素生成 yl）和“相关文献+问题+选项”（增强生成 yw），通过计算每个选项token的log概率，选取最高概率选项作为预测。
- **奖励函数**（公式7-8）：
  - 知识奖励 r_z：提高相关文档片段的先验概率（πθ(z)）。
  - 增强生成奖励 r_c：提高增强生成序列的概率（πθ(yw | x, Zx)）。
  - 朴素生成奖励 r_l：降低朴素生成的概率（πθ(yl | x)）。
- **偏好优化**：采用Bradley-Terry模型，引入目标奖励边际 γ，损失函数（公式10）包含动态β适配、裁剪策略（ε1为上限，ε2为下限），防止过拟合和训练不稳定。
- **迭代流程**：每轮先采样，再根据奖励优化模型，不断更新，使模型逐步内化知识。

## 3. 实验设计

### 数据集与场景
- **医学**：USMLE（MedQA），含18本生物医学教材作为知识库。
- **法律**：BarExamQA，使用每个问题提供的黄金段落。
- **天文**：MMLU Astronomy，通过DeepSeek-R1提取关键词并检索Wikipedia构建知识库。
- **时事**：自建数据集，涵盖2024-2025年美国事件、2025德国联邦选举、2024年奥运会，数据取自Wikipedia（模型训练截止后的事件）。

### 基准方法
- Base（原始指令模型）
- SFT（监督微调）
- CPT（持续预训练）
- CPT+SFT（串联）

### 评估指标
- **答案准确率**：基于log-likelihood的选项选择（公式6）
- **解释胜率**：对正确回答的问题，让模型生成解释，由GPT-4 Turbo和Grok-3评估逻辑清晰度和事实准确性。

### 模型
- Qwen2-7B-Instruct
- Llama-3.1-8B-Instruct
- Llama-3.2-3B-Instruct

## 4. 资源与算力

- **硬件**：4 × NVIDIA A800 GPU（80GB显存）
- **训练时长**（Table 4）：RLAG训练所需GPU小时约是基线方法的**10倍**。例如：
  - USMLE任务：Llama-3.1-8B-Instruct上RLAG耗时34 GPU小时，SFT仅6小时。
  - Current Events：RLAG耗时18小时，SFT 0.8小时。
- 论文指出未来可通过vLLM等高效采样框架降低训练时间。

## 5. 实验数量与充分性

- **主实验**：3个模型 × 4个数据集 × 5个方法（Base, SFT, CPT, CPT+SFT, RLAG） = 60组结果（部分在Table 1、2）。
- **消融实验**（Table 3）：在Llama-3.1-8B-Instruct上对4个组件进行消融（裁剪、动态β、边际γ、标准答案替代增强生成），覆盖USMLE、BarExamQA、Astronomy。
- **额外实验**：解释胜率随温度变化分析（Figure 3）、奖励裁剪效果分析（Figure 5）、检索方法消融（Table 21）、小规模人工评估（12人，500条样本，Figure 6）。
- **充分性评价**：实验覆盖多个领域和模型规模，评估了答案准确性和解释合理性；消融实验验证了各组件必要性；检索消融显示方法对检索质量鲁棒。但法律、天文、时事数据集较小，可能影响单一数据集结论的泛化性。

## 6. 主要结论与发现

1. **RLAG在所有任务上显著优于基线**，尤其在Current Events任务上，准确率提升14-19个百分点。
2. **解释质量显著提升**：RLAG在保持高准确率的同时，解释合理性大幅领先（如USMLE上GPT-4 Turbo胜率为32.4%，SFT仅26.9%），且“无法解释”的比例仅增加1.7%，而基线增加超8%。
3. **奖励裁剪是关键**：无裁剪会导致朴素生成概率失控，降低性能；裁剪有效约束rl并提升rw。
4. **使用标准答案替换增强生成会降低性能并引发幻觉**，说明模型需要自主生成而非直接复制答案。

## 7. 优点

- **方法创新**：将强化学习用于知识嵌入，无需人工标注偏好数据；通过增强生成自动构建偏好对。
- **奖励设计精细**：区分知识奖励和生成奖励，引入裁剪、动态β、边际γ等技巧，训练稳定。
- **评估全面**：同时关注答案准确性和解释合理性，并使用两个不同闭源模型（GPT-4 Turbo、Grok-3）及人工评估。
- **鲁棒性**：在不同检索方法（BM25、混合检索）下性能波动小（0.5-1.7个点）。
- **开源**：代码和数据公开。

## 8. 不足与局限

- **依赖检索质量**：需要相关知识文档，检索错误会影响效果。
- **计算成本高**：训练时间约是基线方法的10倍，难以大规模部署。
- **需要访问token概率**：无法用于闭源模型（如GPT-4）。
- **模型规模有限**：仅测试3B/7B/8B，未验证更大模型。
- **部分数据集较小**：法律、天文、时事数据集规模远小于医学，可能影响泛化结论。
- **评估依赖闭源模型**：GPT-4 Turbo和Grok-3的评估结果可能存在不可复现性和偏差。
- **未探索动态在线知识更新**：当前为离线训练，无法实时更新知识。

（完）

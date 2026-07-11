---
title: Token-level Proximal Policy Optimization for Query Generation
title_zh: 令牌级近端策略优化用于查询生成
authors: "Yichen Ouyang, Lu Wang, Fangkai Yang, Pu Zhao, Chenghua Huang, Jianfeng Liu, Bochen Pang, Yaming Yang, Yuefeng Zhan, Hao Sun, Qingwei Lin, Saravan Rajmohan, Weiwei Deng, Dongmei Zhang, Feng Sun"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1589.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 基于RLAIF的令牌级PPO用于查询生成微调
tldr: 查询生成任务中LLM难以精准推断用户意图，提出令牌级PPO（TPPO），基于RLAIF范式，包含令牌级奖励模型和优化模块。在搜索和推荐数据集上，TPPO生成的查询质量显著优于现有方法，验证了细粒度强化微调在生成任务中的潜力。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 729, \"height\": 560, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1657, \"height\": 377, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1658, \"height\": 817, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1658, \"height\": 641, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 833, \"height\": 470, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 764, \"height\": 426, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 763, \"height\": 161, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 836, \"height\": 471, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 830, \"height\": 284, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1666, \"height\": 367, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 765, \"height\": 429, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 746, \"height\": 367, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 826, \"height\": 862, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1589/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 830, \"height\": 668, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1589/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 779, \"height\": 174, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1589/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 663, \"height\": 100, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1589/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 779, \"height\": 138, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1589/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 777, \"height\": 137, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1589/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 748, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1589/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 796, \"height\": 244, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1589/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 546, \"height\": 276, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1589/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 769, \"height\": 175, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1589/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 692, \"height\": 179, \"label\": \"Table\"}]"
motivation: 现有LLM查询生成方法难以精确推断用户意图。
method: 提出TPPO，基于RLAIF的令牌级近端策略优化，包含令牌级奖励模型。
result: 在查询生成基准上超越基线方法。
conclusion: 令牌级强化微调能提升LLM在生成任务中的性能。
---

## Abstract
Query generation is a critical task for web search engines (e.g. Google, Bing) and recommendation systems. Recently, state-of-the-art query generation methods leverage Large Language Models (LLMs) for their strong capabilities in context understanding and text generation. However, they still face challenges in generating high-quality queries in terms of inferring user intent based on their web search interaction history. In this paper, we propose Token-level Proximal Policy Optimization (TPPO), a noval approach designed to empower LLMs perform better in query generation through fine-tuning. TPPO is based on the Reinforcement Learning from AI Feedback (RLAIF) paradigm, consisting of a token-level reward model and a token-level proximal policy optimization module to address the sparse reward challenge in traditional RLAIF frameworks. We conducted experiments on both open-source dataset and an industrial dataset that was collected from a globally-used search engine, demonstrating that TPPO significantly improves the performance of query generation for LLMs and outperforms its existing competitors.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的结构化、深入且客观的中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在大语言模型（LLM）应用于**网页查询生成**（Query Generation）任务时，现有方法难以根据用户的搜索历史精准推断其搜索意图，生成高质量、个性化的查询。
- **现有方法的局限**：
    - **监督微调（SFT）**：难以应对查询语言表达的多样性（如“cheap flights to New York”与“budget flights NYC”）。
    - **基于人类/AI反馈的强化学习（RLHF/RLAIF）**：使用传统的近端策略优化（PPO）算法时，面临**稀疏奖励**问题。奖励仅在句子结尾给出，而每个token的生成都是动作，导致无效探索、训练不稳定，且与PPO算法多步奖励的本意不匹配。
- **研究动机**：针对上述“句子级PPO”的稀疏奖励问题，创新地提出**令牌级PPO（TPPO）**，旨在通过为每个生成的token提供细粒度奖励信号，提升LLM在查询生成任务上的表现和训练稳定性。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：在RLAIF框架内，将奖励信号的粒度从句子级降低到**令牌（Token）级**，实现更精确的信用分配，从而解决训练不稳定和性能不佳的问题。
- **关键技术细节**：TPPO工作流包含三个主要阶段：
    1.  **令牌级奖励标注**：
        - 使用**LLaMA 3 (70B)** 作为奖励标注器。
        - 首先对生成的查询进行**词级别**的奖励评分（0：无关token, 1：相关token, 2：非常相关token），并同时标注句子级奖励作为全局指导。
        - 随后，由于不同模型tokenizer不同，将词级别奖励平均映射到其对应的所有**令牌**上，形成令牌级奖励标签。
    2.  **令牌级奖励模型训练**：
        - 使用**Longformer**作为奖励模型架构。
        - 设计了**局部损失（Local Loss）**：基于令牌级标签的加权交叉熵损失，用于学习细粒度判断。
        - 设计了**全局损失（Global Loss）**：基于句子级标签的均方误差（MSE）损失，确保全局一致性。
        - 总损失是两者的加权和：`L_total = λ_local * L_local + λ_global * L_global`。
    3.  **令牌级PPO策略训练**：
        - 将PPO目标函数从句子级调整为**令牌级**，每个token的生成对应一个状态-动作对（st, at），并拥有其对应的即时奖励Rt。
        - 引入了**长度加权惩罚（Length-weighted Penalty, lwp）**，对超过“建议长度”（sl，即所有查询token长度的中位数）的后续token进行折扣惩罚，以防止模型生成过长、无用的响应。

- **核心公式**：
    - 令牌级PPO损失函数与标准PPO一致，但作用在每一步（Token）而非整个句子（Sequence）。
    - 最优策略推导时，加入了KL散度约束，公式为：`π*_θ = arg max E[A - β*KL(π_θ || π_ref)]`。

### 3. 实验设计：数据集、Benchmark与对比方法

- **数据集**：
    - **开源数据集**：基于**AOL**查询日志，筛选出27k条数据（25k训练，2k评估）。每条数据包含用户历史（搜索、点击）和3个最新的搜索查询作为生成目标。
    - **工业数据集**：来自一个全球流行的搜索引擎，共200k条数据。用户历史包含搜索、点击、购买和访问四个维度，后10个查询作为生成目标。该数据集包含两个不同时间段的评估集（Eval1, Eval2）。
- **Benchmark与对比方法**：
    - **SFT基线**：**GPT4Rec**（基于Mistral 7B的SFT版本）。
    - **RL基线**：标准**PPO**（句子级奖励）。
    - 评估指标：**相关率（Relevance Rate）** 和 **胜-平-负率**，均由LLaMA 3 (70B) 作为裁判进行打分评判。
- **实验设置**：
    - 使用两个不同的评分模板（句子级模板和令牌-句子级模板）进行评估，以确保结果的稳健性。
    - 在开源和工业两个数据集上均进行了实验。

### 4. 资源与算力

- 论文明确提及了部分超参数，但未给出非常详尽的算力统计。
- **TPPO训练**：使用8块A100 GPU，训练2个epoch。
- **令牌级奖励模型训练**：使用1块V100 GPU。
- 论文未提供训练总时长、模型参数总量等更精确的算力消耗数据。

### 5. 实验数量与充分性

- **实验数量**：实验设计较为充分，包括：
    - **主要实验**：在开源和工业数据集上，对比TPPO、PPO和GPT4Rec的相关率和胜率。
    - **训练过程可视化**：展示了奖励模型训练曲线（损失和AUC）和PPO训练曲线（均值和方差）。
    - **消融实验**：
        - **奖励模型损失权重**：探究局部损失权重（w）对模型性能的影响。
        - **长度惩罚**：探究长度惩罚对TPPO训练的影响。
    - **补充实验**：进行了DPO的对比实验（附录H），进一步验证了TPPO的优势。
- **实验充分性与公平性**：
    - **充分性**：涵盖了开源和工业两大场景，对比了RL和SFT两类主流方法，并通过消融实验验证了关键组件的有效性。
    - **公平性**：对比方法（GPT4Rec, PPO）均为业界公认的强基线。使用了相同的评估工具（LLaMA 3）和多种评估模板，降低了单一模板带来的偏差。但一个潜在问题是，论文未明确说明**PPO基线的超参数是否经过与TPPO同等的精细调优**，这可能影响对比的绝对公平性。

### 6. 论文的主要结论与发现

- **性能提升**：TPPO在相关率上比PPO提升了 **2%-4%**，在条目级胜率上提高了 **2%-8%**，显著优于SFT基线和标准PPO。
- **训练稳定性**：TPPO的训练曲线表现出**更小的方差**和**更快的奖励上升**，显示出更好的收敛性和稳定性。相反，标准PPO的训练方差较大，奖励增长缓慢。
- **奖励模型优势**：令牌级奖励模型相比句子级奖励模型，训练更稳定、收敛更快、AUC更高，说明细粒度信息对训练高质量奖励模型至关重要。
- **消融实验结论**：
    - 局部损失和全局损失的**平衡组合**（权重w在0.4-0.6之间）对奖励模型学习最有利。
    - 引入长度惩罚能有效限制查询长度，提升结果质量。
- **实际应用**：该模型已成功部署到真实世界的搜索应用中。

### 7. 优点

- **方法创新性强**：直击RLHF/RLAIF中“稀疏奖励”这一核心痛点，提出的令牌级PPO思路新颖且在理论上能有效解决该问题。
- **实验设计严谨**：在工业界的大规模真实数据和学术界公开基准上都进行了验证，实验结果可信度高。同时进行了关键的消融实验，验证了各个设计组件的必要性。
- **解决实际问题**：成功应用于工业界产品，证明了其具有显著的实用价值和落地可行性。
- **分析全面**：论文不仅给出了最终结果对比，还深入分析了奖励模型和策略模型的训练过程，从“稳定性”和“收敛性”角度提供了充分的证据。

### 8. 不足与局限

- **依赖AI反馈质量**：整个框架依赖于LLaMA 3作为奖励标注器，其标注质量的准确性会直接影响最终模型的能力。论文虽在附录I中进行了人工验证（91.18%的词汇级一致性），但仍存在AI引入偏见的风险。
- **计算资源消耗**：TPPO需要训练一个令牌级奖励模型，并需要LLaMA 3这样的强大模型进行预处理标注（Phase I），这比标准的句子级PPO需要更高的计算资源。论文未详细对比TPPO与PPO的整体训练成本。
- **领域泛化性**：论文承认其有效性“可能因领域而异”，目前仅限于查询生成任务。其他类型的生成任务（如对话、摘要）是否能从中受益，尚待验证。附录C虽有复杂度分析，但未在多个不同任务上实验。
- **超参数敏感性**：引入了一系列超参数（如局部/全局损失权重λ、长度惩罚系数α、以及奖励模型中的各类mask比例），这些参数的调整可能会消耗大量的调优成本。论文未提供其稳定性的详细分析。

（完）

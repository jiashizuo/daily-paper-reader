---
title: Enhancing Study-Level Inference from Clinical Trial Papers via Reinforcement Learning-Based Numeric Reasoning
title_zh: 基于强化学习数值推理增强临床试验论文的研究级推断
authors: "Massimiliano Pronesti, Michela Lorandi, Paul Flanagan, Oisín Redmond, Anja Belz, Yufang Hou"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1544.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 强化学习用于临床试验数值推理
tldr: 针对系统性综述中自动提取数值证据并确定研究级结论的瓶颈，将问题建模为定量推理，而非浅层文本推理。提出基于强化学习的数值推理方法，从临床试验论文中提取结构化数值信息并推理结论。实验证明，该方法比传统文本推理方法更准确地捕捉专家评估背后的数值推理。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1544/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 729, \"height\": 922, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1544/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 662, \"height\": 402, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1544/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 790, \"height\": 543, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1544/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 802, \"height\": 243, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1544/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 799, \"height\": 190, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1544/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1659, \"height\": 1676, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1544/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 804, \"height\": 203, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1544/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1621, \"height\": 766, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1544/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 671, \"height\": 378, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1544/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 765, \"height\": 591, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1544/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1657, \"height\": 471, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1544/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1581, \"height\": 1440, \"label\": \"Table\"}]"
motivation: 现有方法依赖文本线索，未能捕捉专家评估中的数值推理过程。
method: 构建结构化数值提取与强化学习推理框架，将结论推断视为定量推理问题。
result: 在临床试验数据集上，该方法在结论推断准确率上显著优于文本推理基线。
conclusion: 强化学习数值推理能更真实地模拟专家评估过程，提升自动化综述可靠性。
---

## Abstract
Systematic reviews in medicine play a critical role in evidence-based decision-making by aggregating findings from multiple studies. A central bottleneck in automating this process is extracting numeric evidence and determining study-level conclusions for specific outcomes and comparisons. Prior work has framed this problem as a textual inference task by retrieving relevant content fragments and inferring conclusions from them. However, such approaches often rely on shallow textual cues and fail to capture the underlying numeric reasoning behind expert assessments.In this work, we conceptualise the problem as one of quantitative reasoning. Rather than inferring conclusions from surface text, we extract structured numerical evidence (e.g., event counts or standard deviations) and apply domain knowledge informed logic to derive outcome-specific conclusions. We develop a numeric reasoning system composed of a numeric data extraction model and an effect estimate component, enabling more accurate and interpretable inference aligned with the domain expert principles. We train the numeric data extraction model using different strategies, including supervised fine-tuning (SFT) and reinforcement learning (RL) with a new value reward model.When evaluated on the CochraneForest benchmark, our best-performing approach – using RL to train a small-scalenumber extraction model – yields up to a 21% absolute improvement in F1 score over retrieval-based systems and outperforms general-purpose LLMs of over 400B parameters by up to 9%.Our results demonstrate the promise of reasoning-driven approaches for automating systematic evidence synthesis.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：系统综述（Systematic Reviews）是循证医学的基石，但其自动化面临一个核心瓶颈：如何从临床试验论文中提取数值证据（如事件数、标准差等）并确定每个研究关于特定结局（outcome）和比较（comparison）的结论（study-level conclusion）。
- **现有方法局限**：先前工作通常将该任务视为文本推理任务——通过检索相关文本片段（retrieval-based QA），然后基于文本表面线索推断结论。但实验表明，即使检索精度达到100%，最终结论预测的F1分数最高仅约68%，且提升检索精度带来的增益非常有限（从50%到100%精度仅提升3-4%）。这说明单纯依赖表层文本线索不足以捕捉专家评估背后的数值推理过程。
- **本文动机**：将问题重新概念化为**定量推理（quantitative reasoning）**问题——不依赖文本表面推理，而是提取结构化数值证据，并应用领域知识（如效应量、置信区间）来推导结论。目标是更准确、可解释地模拟专家工作流程，推进系统综述的完全自动化。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- 构建一个两阶段 pipeline：
  1. **数值数据抽取模型（Numeric Data Extraction Model）**：从全文论文中提取结构化数值（如二分结局的事件数和总数、连续结局的均值、标准差和样本量）。
  2. **效应估计组件（Effect Estimate Component）**：基于提取的数值，使用领域规则计算效应量（如风险比、均值差）及其95%置信区间，进而根据置信区间是否跨越无效线（比值类为1，差值类为0）判定结论（支持干预、支持对照、无定论）。

### 关键技术细节
- **训练数据构建**：
  - 从Cochrane系统综述数据库中处理，解析森林图（forest plot）获取结构化数值和结论。
  - 构建扩展数据集 `CochraneForestExt`（2072条样本，104篇综述，2590万tokens），放宽原CochraneForest基准的限制（不再要求每张森林图至少包含两个结论不同的研究），增加多样性。
  - 使用 Llama 3.1 405B 生成中间推理轨迹（CoT），用于监督微调。
- **数值抽取模型训练策略**：
  - **SFT (Supervised Fine-tuning)**：标准监督微调，输出为YAML格式的结构化数值（含思考过程`<think>`标签）。
  - **SFT with CoT**：加入上述推理轨迹。
  - **RL (Reinforcement Learning)**：采用 Group-Relative Policy Optimization (GRPO) 算法。定义三种奖励：
    - 正确性奖励 (CR)：匹配正确的数值字段（精确匹配整数，浮点误差 <1e-3）。
    - 格式奖励 (FR)：输出符合YAML schema。
    - 思考格式奖励 (TFR)：输出包含`<think>`标签。
    - 最终奖励：`R = 0.8·CR + 0.1·FR + 0.1·TFR`。
  - 模型基础：Qwen2.5-7B。
- **效应估计组件**：根据结局类型（二分/连续）计算效应量和95%CI，然后根据CI判断结论，无需额外训练。

### 公式/算法流程（文字说明）
- 二分结局：计算风险比 RR = (a/(a+b)) / (c/(c+d))，CI用log尺度计算后指数化。若CI完全>1则干预优；完全<1则对照优；包含1则无定论。
- 连续结局：计算均值差 MD = x̄_T - x̄_C，CI = MD ± 1.96·√(s²_T/n_T + s²_C/n_C)。若CI完全>0则干预优；完全<0则对照优；包含0则无定论。

## 3. 实验设计：数据集、Benchmark、对比方法

### 数据集
- **训练集**：CochraneForestExt（2072条，104篇系统综述，1864训练/208验证）。
- **测试集**：
  1. **CochraneForest**（Pronesti et al., 2025）：725条实例，来自48篇系统综述、220张森林图。
  2. **RCTs**（Yun et al., 2024）：413条实例，来自120篇RCTs。

### 评估指标
- 端到端结论预测：Accuracy, F1。
- 数值提取质量：Exact Match (EM), EM@1, MSE of point estimate。
- Error Impact Rate (EIR)：提取错误导致结论翻转的比例。

### 对比方法
- **预训练LLM基線**：GPT-4-0125, Qwen2.5 (7B/14B/72B), Llama 3.1 (8B/70B/405B), DeepSeek-Qwen (7B/14B/32B, 带推理)。均零样本评估。
- **RAG基线**：URCA (Pronesti et al., 2025), GraphRAG (Edge et al., 2024)。
- **本文方法**：Qwen2.5-7B-SFT, Qwen2.5-7B-RL。

## 4. 资源与算力

- 论文明确说明：
  - 硬件：8块 NVIDIA A100 GPU，每块80GB显存。
  - 框架：Open-R1 框架，vllm 推理。
  - SFT超参数：5 epochs, batch size 1, 学习率5e-5, AdamW优化器, 梯度累积8步。
  - RL超参数：GRPO, 3 epochs, 学习率1e-6, batch size 1, 每批16个采样, 梯度累积8步。
- 训练总时长未明确给出，但基于GPU数量和超参数可推断为中等规模（约数天）。
- 闭源模型（GPT-4等）通过API调用。

## 5. 实验数量与充分性

### 实验组数
- **主实验**（表2）：对比了11种预训练模型（含不同大小和家族）+ 2种本文方法 + 2种RAG基线（表3），在两个数据集上报告了Accuracy、F1、EM、EM@1、MSE、EIR共6项指标。
- **消融实验**（表4）：
  - 输入消融：仅文本、仅表格、仅URCA检索块（对比全输入）。
  - 训练消融：SFT无CoT、带CoT、RL使用EX稀疏奖励 vs 本文密集奖励。
- **人类标注分析**（表5）：对30个实例的推理过程进行了人工标注，分析推理质量和可追溯性。5个实例用于计算标注者间一致性（span-level F1=0.70）。
- **奖励动力学分析**（图3）：展示了RL训练过程中各奖励组分的变化。
- **定性示例**（图9）：对比SFT和RL模型在复杂案例上的表现。

### 充分性评估
- **积极方面**：数据集多样（两个benchmark）、对比基线全面（涵盖主流开源闭源模型及RAG）、消融实验覆盖输入组件和训练策略、人类分析提供定性证据。实验设计较为严谨。
- **待改进**：
  - 消融实验仅在CochraneForest上执行，未在RCTs数据集上验证泛化性。
  - 没有与更多数值提取专用方法（如代码生成+LLM的方法）对比。
  - 未报告统计显著性检验（如t检验），无法判断改进是否显著。
  - EIR指标未与基线模型详细对比（仅在本模型内部报告）。
- **公平性**：训练集构建时明确排除了CochraneForest中的研究，避免数据泄露；测试集为公开基准；超参数设定合理。

## 6. 主要结论与发现

1. **数值推理优于文本推理**：本文方法（RL训练的7B模型）在CochraneForest上达到F1=81.6%，比最好的RAG基线（URCA, F1=60.2%）提升21.4%，比405B参数LLM（Llama3.1-405B, F1=80.8%）还略高。
2. **RL比SFT更有效**：RL模型在CochraneForest上F1比SFT高7.1%，在RCTs上高8.0%。消融实验证实密集奖励（含正确性组分）优于稀疏奖励（EX）。
3. **CoT帮助SFT**：加入中间推理轨迹的SFT优于无CoT的SFT（F1提升3.3%）。
4. **推理能力不是天然有效的**：DeepSeek-Qwen蒸馏模型（带推理）反而比不带推理的Qwen2.5差，说明通用推理能力不足以应对该任务，需要领域特定训练。
5. **结构化表格信息关键**：仅使用表格作为输入时性能仍优于仅文本，但全输入（文本+表格）最好，表明两者互补。
6. **RL提升推理可追溯性**：人类标注显示RL模型正确推理（含可追溯）的比例（31.82%）高于SFT（25.76%），幻觉率更低（3.79% vs 15.15%）。

## 7. 优点：方法或实验设计亮点

- **问题重新定义**：清晰揭示了纯文本推理的局限性，将任务从表面文本推理转向定量推理，更贴合专家实际工作流程，提高了可解释性。
- **规则化效应估计**：无需额外训练即可从数值推导结论，使系统透明且易验证。
- **RL奖励设计创新**：结合格式奖励、思考格式奖励和细粒度正确性奖励，引导模型同时学习输出结构和数值精度，实验证明密集奖励优于稀疏奖励。
- **全面的人类分析**：对模型推理过程进行人工标注和分类，验证了RL在推理真实性上的提升，增强了结论的可信度。
- **广泛的消融实验**：覆盖输入模态、训练策略、奖励函数，提供了丰富的分析维度。
- **小模型超越大模型**：仅7B参数的模型通过RL达到了优于405B模型的效果，展示了效率与性能的结合潜力。

## 8. 不足与局限

- **数据依赖**：假设所有相关数值都显式或隐式报告且可提取，但实际中常存在缺失值、不一致格式。模型未能识别或标记缺失信息。
- **结局类型有限**：仅处理二分和连续结局，未涵盖率、时间至事件（time-to-event）等常见类型。
- **规则固定**：效应估计使用固定公式（如95%CI标准正态假设），可能不适用于小样本或偏倚数据。且仅使用CI是否跨越无效线判定结论，忽略了效应量大小及临床意义。
- **泛化性未充分验证**：消融实验仅在CochraneForest上完成，未在RCTs数据集上验证；系统在其他医学领域（如诊断、预后）或非医学定量推理任务上的推广未知。
- **计算资源消耗**：虽模型小，但RL训练需多次采样（每批16条），且依赖8*80G A100，资源成本仍较高。
- **缺乏统计显著性检验**：未报告改进是否经假设检验确认，部分差异可能不显著。
- **人工标注规模有限**：仅30个实例用于推理过程分析，标注者仅有2人，且一致性仅为0.70（span-level F1），可能影响分析可靠性。

（完）

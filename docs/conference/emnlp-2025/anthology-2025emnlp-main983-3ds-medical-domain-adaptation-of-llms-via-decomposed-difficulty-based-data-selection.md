---
title: "3DS: Medical Domain Adaptation of LLMs via Decomposed Difficulty-based Data Selection"
title_zh: 3DS：通过分解难度数据选择实现LLM的医疗领域适配
authors: "Hongxin Ding, Yue Fang, Runchuan Zhu, Xinke Jiang, Jinyang Zhang, Yongxin Xu, Weibin Liao, Xu Chu, Junfeng Zhao, Yasha Wang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.983.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 通过数据选择进行LLM的医疗领域适配
tldr: 现有医疗LLM领域适应方法采用数据中心的数据选择，与模型知识分布不匹配。本文提出3DS，一种两阶段模型中心数据选择框架，基于分解难度选择数据。在医疗基准上，3DS显著优于现有数据选择和微调方法，提升了领域专业能力。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.983/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1649, \"height\": 406, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.983/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1650, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.983/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 797, \"height\": 423, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.983/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 801, \"height\": 739, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 782, \"height\": 197, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 778, \"height\": 370, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1647, \"height\": 468, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1648, \"height\": 452, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1571, \"height\": 447, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 796, \"height\": 359, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 793, \"height\": 180, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 589, \"height\": 325, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 792, \"height\": 298, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 815, \"height\": 1364, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 576, \"height\": 361, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 668, \"height\": 220, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 779, \"height\": 363, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 797, \"height\": 351, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 798, \"height\": 200, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 801, \"height\": 219, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1517, \"height\": 2164, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.983/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1152, \"height\": 283, \"label\": \"Table\"}]"
motivation: 现有数据选择方法未能与模型知识分布对齐，导致领域性能提升有限。
method: 提出两阶段模型中心数据选择框架3DS，基于分解难度选择训练数据。
result: 在多个医疗基准上，3DS显著优于现有数据选择方法。
conclusion: 3DS有效提升了LLM在医疗领域的适应性能。
---

## Abstract
Large Language Models (LLMs) excel in general language tasks, motivating their adaptation to specialized domains such as healthcare. Effective domain adaptation typically involves supervised fine-tuning (SFT) on carefully selected instruction-tuning data. Current data selection methods adopt a data-centric approach, relying on external annotations and heuristics to identify externally defined high-quality or challenging data. Our exploratory experiments highlight this approach fails to improve the model’s domain performance, due to misalignment between selected data and the model’s knowledge distribution. To tackle this, we propose Decomposed Difficulty-based Data Selection (3DS), a two-stage model-centric data selection framework that aligns data selection with the model’s distribution. 3DS employs Prompt-Driven Data Selection to filter out noise based on the model’s knowledge via explicit alignment in Stage#1, then adopts Decomposed Difficulty-based Data Selection to guide selection via three novel data difficulty metrics, including Instruction Understanding, Response Confidence, and Response Correctness in Stage#2, enhanced by an attention-based importance weighting mechanism for accurate calibration.Extensive experiments in the healthcare domain show 3DS outperforms existing methods by up to 2.97% accuracy, with additional validation in law and general domains, confirming its generalization ability. Our dataset and code are open-sourced at https://github.com/PuppyKnightUniversity/3DS.

---

## 论文详细总结（自动生成）

# 基于论文《3DS: Medical Domain Adaptation of LLMs via Decomposed Difficulty-based Data Selection》的详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：将通用大模型（LLM）适配到医疗等专业领域时，通常需要进行监督微调（SFT）并依赖精心选择的指令数据。然而，现有的数据选择方法大多采用“数据中心”（data-centric）策略，即依赖外部模型或启发式规则来定义“高质量”或“高难度”数据。这种做法忽视了所选数据与**目标模型自身知识分布**的对齐，导致性能提升不理想，甚至出现退化。
- **研究动机**：作者通过初步实验（RQ#1 和 RQ#2）发现：①使用模型自身评估的“高质量”数据比使用外部强模型（如DeepSeek-R1）评估的数据效果更好；②使用模型自身评估的“中等难度”数据比使用外部评估的“最困难”数据效果更好，且过于困难的数据会损害学习。由此提出**模型中心（model-centric）** 的数据选择原则，即选择与目标模型知识分布对齐、难度适中的数据进行微调。
- **整体含义**：本文提出一种两阶段、模型中心的框架（3DS），旨在通过显式对齐（质量筛选）和隐式对齐（难度分解）来选择最有利于领域适应的子集，从而高效提升LLM在专业领域的能力。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

### 核心思想
采用“模型中心”而非“数据中心”的视角，利用目标LLM自身内部的评估信号（质量和难度）来指导数据选择，确保所选数据既在模型知识分布内，又具有适中的挑战性。

### 方法框架概览
3DS 分为两个阶段：

- **Stage#1：Prompt-Driven Data Selection via Explicit Alignment（显式对齐的提示驱动数据选择）**
  - 设计一个质量评分提示（涵盖指令复杂度、回答相关性、全面性、逻辑性、知识丰富性五个维度），让目标模型对每条数据（指令-回答对）进行评分（0-100）。
  - 保留评分高于阈值 δ（实验中取 δ=90）的数据，即模型自身认为高质量的样本，从而过滤噪声和冗余或冲突信息。

- **Stage#2：Decomposed Difficulty-based Data Selection via Implicit Alignment（隐式对齐的分解难度驱动数据选择）**
  - 引入三种基于模型内部困惑度（PPL）的难度度量，从不同维度评估数据难度：
    1. **指令理解难度 (D1)**：根据模型对指令部分的 PPL 衡量，公式为  
       $$D1\_\theta(x) = \exp\left(-\frac{1}{m}\sum_{i=1}^m \log P_\theta(q_i \mid q_{<i})\right)$$
    2. **回答置信度难度 (D2)**：根据模型对自身生成回答的条件 PPL 衡量，公式类似（使用模型生成的回答 A'）。
    3. **回答正确性难度 (D3)**：根据模型对参考回答的条件 PPL 衡量（使用标准答案 A）。
  - **注意力重要性加权机制**：为避免非关键token（如连词）的噪声影响，利用模型内部的注意力权重计算每个token的重要性 I(t_i)，对 D2 和 D3 进行加权校正，公式例如：  
    $$ \text{Atten-D2}_\theta(x) = \exp\left(-\frac{\sum_j I(t_j) \phi'_j}{\sum_j I(t_j)}\right) $$
  - **选择策略**：保留三个难度指标均落在预设中等区间的样本（例如，取15%~65%分位数等，具体阈值通过验证集搜索确定），然后对这部分中等难度数据应用 **K-Center 采样**（基于指令嵌入）来增强多样性，最终选出指定预算（如5k条）的子集。

### 算法流程（伪代码见附录A）
1. 对全量数据集 X，用目标模型 M 进行质量评分，筛选出高分数据 X1。
2. 对 X1 计算三个难度指标，根据预设百分比阈值保留中等难度样本，得到中间集 S_mid。
3. 在 S_mid 上执行 K-Center 采样，选取 k 个多样化的样本作为最终子集 S。
4. 使用 S 对模型进行 LoRA 微调。

## 3. 实验设计：使用的数据集、场景、benchmark、对比方法

### 训练数据集
- 自建大规模中文医疗指令数据集，共计 **1,905,000 条**，来自：
  - medtalk_singleround（177k，医患对话）
  - medknowledge_KG（796k，医学知识图谱）
  - medknowledge_webqa（360k，医学问答）
  - medtask_promptcblue（82k，医学任务格式数据）
  - qa_website（490k，合作医院在线平台数据）
- 数据集已开源。

### 评估数据集（benchmark）
- **CMB-Exam**（中文医疗选择题，11200题）
- **MMCU-Med**（中文医疗多项选择，2819题）—— 两项均使用准确率（EM）。
- **CMB-Clin**（开放式医疗问答题，208题）—— 使用 BLEU-1、BLEU-4、ROUGE 评分，并采用 GPT-4o 进行成对比较（胜率）。
- 此外，在法律领域使用 **CaseHOLD** 数据集，在通用领域使用 **MMLU** 进行跨域泛化测试。

### 对比方法（基线）
- **No SFT / Base**：不微调的原始模型
- **Full-SFT**：使用全部190万数据微调
- **Random**：随机选取5k条
- **Alpagasus**：使用GPT-4进行质量评分后筛选
- **DEITA**：训练质量和复杂度评分器
- **MoDS**：基于奖励模型筛选高质量数据，再选择必要数据
- **IFD**：基于指令跟随难度（困难数据优先）
- **LESS**：基于低秩梯度相似性选择

### 实验场景
- **主实验**：在4种不同架构/规模的基础模型上评估（Baichuan2-13B-Chat, Qwen1.5-7B-Instruct, Qwen2.5-7B-Instruct, LLaMA3-8B-Instruct），数据预算固定为5k条。
- **消融实验**：检验阶段、各难度指标、注意力加权、K-Center采样、数据预算等。
- **跨域实验**：法律领域（CaseHOLD）和通用领域（MMLU）。
- **与现有医疗LLM比较**：Meditron-7B, Huatuo-II-7B, Huatuo-II-34B。

## 4. 资源与算力

- **硬件**：8块 NVIDIA H100 GPU。
- **软件框架**：PyTorch 2.4.0, Python 3.9, DeepSpeed ZeRO-3, FP16 半精度。
- **微调配置**：LoRA（rank=8，覆盖所有线性层），学习率5e-5，batch size=64，序列长度1024，训练1个epoch，余弦学习率衰减，warmup比例0.1。
- **训练时间**：论文未明确报告总训练时长，但提及使用 VLLM 加速模型评分过程，整体计算开销较大。
- **标注**：由于数据量过大（190万），部分基线（如Alpagasus、DEITA、IFD、LESS）只能随机抽样子集（60k~70k）进行评分/计算，以控制成本。

## 5. 实验数量与充分性

- **实验数量**：非常丰富。包括：
  - 主实验：4个模型 × 3个基准 × 8种对比方法 = 约96组结果（表格3、4）。
  - 消融实验：对阶段、三个难度指标、注意力加权、K-Center、数据预算等进行多组消融（表5、14、15、16、17）。
  - 难度阈值滑动窗口实验（图2）。
  - 与现有医疗LLM对比（表13）。
  - GPT-4o人工评估胜率（图3）。
  - 跨域实验（法律和MMLU，表8、9）。
  - 随机种子重复3次以评估稳定性（低方差）。
- **充分性**：
  - **覆盖全面**：涵盖多种模型规模、多种任务类型（选择题、开放问答）、多种领域（医疗、法律、通用）。
  - **消融充分**：对设计中的每个组件都进行了验证。
  - **公平客观性**：所有基线均使用公开代码复现，并适配相同数据预算；超参数大部分共享（仅难度阈值对每个模型单独验证集调优）。但主要实验均为单次运行（除Random外），可能缺乏严格的统计显著性检验。论文指出因计算成本高，且随机种子重复显示低方差，结果可靠。

## 6. 论文的主要结论与发现

1. **数据选择对于领域适应微调至关重要**：直接使用全量噪声数据（Full-SFT）导致性能大幅下降。
2. **模型中心选择优于数据中心选择**：使用目标模型自身评估质量和难度，效果显著优于依赖外部模型（如DeepSeek-R1, GPT-4）的方法。
3. **中等难度数据效果最好**：过滤掉过易和过难的数据，保留中等难度的样本能带来最稳定和显著的性能提升。
4. **3DS显著提升医疗领域能力**：在CMB-Exam、MMCU-Med上平均提升2.97%准确率（vs 最佳基线），在CMB-Clin上BLEU和ROUGE大幅领先，GPT-4o判断胜率高达60%~97%。
5. **跨域泛化能力强**：在CaseHOLD（法律）和MMLU（通用）上均优于Random和IFD等基线。
6. **分解难度的三个度量具有互补性**：相关性和重叠分析表明三者在信息上互补，联合使用效果最好；注意力加权进一步提升了校准精度。

## 7. 优点：方法和实验设计上的亮点

- **创新性**：明确提出从“数据中心”到“模型中心”的范式转换，并给出系统性验证。
- **细粒度难度分解**：将数据难度分解为指令理解、回答置信度、回答正确性三个维度，比单一PPL或IFD更全面的捕捉模型学习状态。
- **注意力重要性加权**：利用模型自身注意力权重调整困惑度计算，减少非关键token噪声，是一种新颖且理论合理的校准手段。
- **两阶段设计**：先质量过滤再难度选择，逻辑清晰，互为补充。
- **开源贡献**：开源了190万条中文医疗指令数据集和完整代码，促进社区复现和后续研究。
- **实验设计严谨**：覆盖多种模型、任务、领域；消融实验全面；跨域验证增强了说服力。

## 8. 不足与局限

1. **领域覆盖有限**：主要验证了医疗、法律和通用三个领域，更多专业领域（如金融、工程）的泛化性尚未确认。
2. **计算成本较高**：需要目标模型对全量或大量数据进行评分（阶段1）和推理计算困惑度（阶段2），尽管使用了VLLM加速，仍显昂贵。论文指出这是一个trade-off。
3. **静态选择**：数据选择在训练前一次性完成，未考虑模型在训练中知识分布的变化。未来可探索动态选择。
4. **丢弃数据可能含价值**：被过滤掉的数据（低质量或极端难度）当前直接丢弃，可能丢失部分有用信息（如“困难”但可渐进学习的数据）。可考虑恢复或补充。
5. **偏差与公平性**：附录K讨论了潜在偏见（如中文数据集偏向东亚人群），但未进行定量公平性评估或对SafetyBench/TruthfulQA的测试。LoRA微调也可能放大偏见。
6. **统计显著性不足**：主实验仅单次运行（除Random外），虽方差低但未给出统计检验（如p值或置信区间），在严格学术评估中略显不足。
7. **超参数敏感性**：难度阈值需针对每个模型在验证集上搜索，可能影响实际应用中的易用性。

（完）

---
title: "Med-PRM: Medical Reasoning Models with Stepwise, Guideline-verified Process Rewards"
title_zh: Med-PRM：基于逐步指南验证过程奖励的医疗推理模型
authors: "Jaehoon Yun, Jiwoong Sohn, Jungwoo Park, Hyunjae Kim, Xiangru Tang, Daniel Shao, Yong Hoe Koo, Ko Minhyeok, Qingyu Chen, Mark Gerstein, Michael Moor, Jaewoo Kang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.837.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 面向医疗推理的过程奖励模型，逐步验证
tldr: 现有医疗推理模型难以定位和纠正步骤级错误。Med-PRM提出过程奖励建模框架，利用检索增强生成将每个中间推理步骤与医学知识库（临床指南、文献）进行验证，提供细粒度奖励信号。在五个医疗QA和两个开放任务上，该方法显著提升了推理质量和错误定位能力。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.837/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1361, \"height\": 929, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.837/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1636, \"height\": 631, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.837/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1414, \"height\": 730, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.837/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1413, \"height\": 705, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.837/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 784, \"height\": 590, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.837/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1651, \"height\": 979, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.837/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 812, \"height\": 686, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.837/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 803, \"height\": 211, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.837/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 824, \"height\": 1363, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.837/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 780, \"height\": 396, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.837/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1648, \"height\": 1552, \"label\": \"Table\"}]"
motivation: 当前医疗推理模型无法在步骤级别定位和修正错误。
method: 提出过程奖励模型，使用RAG从医学知识库检索证据验证每个推理步骤。
result: 在多个医疗基准上，步骤级验证提升了推理准确性和错误纠正能力。
conclusion: 过程奖励建模结合外部知识可有效改善医疗推理的可靠性和可解释性。
---

## Abstract
Large language models have shown promise in clinical decision making, but current approaches struggle to localize and correct errors at specific steps of the reasoning process. This limitation is critical in medicine, where identifying and addressing reasoning errors is essential for accurate diagnosis and effective patient care. We introduce Med-PRM, a process reward modeling framework that leverages retrieval-augmented generation to verify each reasoning step against established medical knowledge bases. By verifying intermediate reasoning steps with evidence retrieved from clinical guidelines and literature, our model can precisely assess the reasoning quality in a fine-grained manner. Evaluations on five medical QA benchmarks and two open-ended diagnostic tasks demonstrate that Med-PRM achieves state-of-the-art performance, with improving the performance of base models by up to 13.50% using Med-PRM. Moreover, we demonstrate the generality of Med-PRM by integrating it in a plug-and-play fashion with strong policy models such as Meerkat, achieving over 80% accuracy on MedQA for the first time using small-scale models of 8 billion parameters.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：当前大型语言模型（LLM）在临床决策中虽然表现良好，但难以在推理过程的**特定步骤**上定位和纠正错误。在医学领域，错误的中间推理可能导致诊断错误，而现有方法（如结果奖励模型 ORM 或基于蒙特卡洛树搜索 MCTS 的自标注 PRM）无法准确评估中间步骤质量，尤其容易将逻辑正确但未导向正确答案的步骤误判为错误（假阴性）。
- **研究动机**：临床推理是多步骤、逐步的过程，需要结合症状、证据、假设迭代。过程奖励模型（PRM）天然适合逐步评估，但其在医学领域的应用面临两大挑战：1）步骤级标注成本高，现有自动标注方法（如 MCTS 基于最终答案反推）不可靠；2）医学推理需要外部知识（如临床指南、教科书），仅靠模型内部参数或标签训练不足。
- **整体含义**：提出一种检索增强的过程奖励建模框架 **Med-PRM**，通过将每个推理步骤与检索到的医学文档进行验证（RAG-as-a-Judge），实现细粒度、证据驱动的奖励评分，从而提升推理质量和错误定位能力，并具备即插即用的通用性。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：使用 **RAG-as-a-Judge** 方式，为每个推理步骤生成二进制标签（正确/错误），并训练一个 PRM 来预测步骤级奖励分数。在训练和推理阶段，模型输入不仅包括问题与推理轨迹，还包含检索到的相关医学文档，使评估基于外部知识。
- **关键技术细节**：
  - **标签生成**：对于每个问题 `q`、正确解 `a*`、检索文档集 `D` 和推理轨迹 `S = (s1,...,sK)`，调用一个大 LLM（如 Gemini-2.0-flash）对每个步骤 `si` 进行二元分类 `y^{RAG}_si ∈ {0,1}`，标签依据文档、问题和正确解判断步骤是否逻辑一致且基于证据。
  - **训练目标**：PRM 采用标准交叉熵损失，输入为 `(D, q, S)`，输出每个步骤的置信分数 `r_si`（softmax 概率），训练最小化所有步骤上的交叉熵和。
  - **推理时奖励计算**：一个轨迹的最终分数定义为所有步骤的最小奖励：`r_S = min(r_{s1},...,r_{sK})`。使用 **Best-of-N** 或 **SC+RM**（自一致性 + 奖励模型）策略选择答案。
  - **检索模块**：使用 MedCPT（双编码器+交叉编码器）从四个医学语料库（临床指南、StatPearls、医学教科书、罕见病语料）检索相关文档，每问检索 400 篇，经重排序选取 top-32 作为输入。
  - **策略模型微调**：通过 Med-PRM 对训练集生成的多条推理轨迹进行拒绝采样，保留高分轨迹用于监督微调，再在推理时与 Med-PRM verifier 结合。

## 3. 实验设计

- **数据集与场景**：
  - **多选 QA**：MedQA（4 选项和 5 选项）、MedMCQA（验证集）、MMLU-Med（6 个医学子集）、DDXPlus（500 样本）
  - **开放式诊断**：AgentClinic* 的两个变体（基于 NEJM 和 MedQA），采用开放式格式，由 LLM（Gemini-2.0-flash）评判答案正确性。
- **基准（Benchmark）**：覆盖知识型（MedQA）和复杂推理型（AgentClinic）任务。
- **对比方法**：
  - 专有模型：Gemini Flash 2.0、GPT-4o-mini、o4-mini、o3-mini 等
  - 开源通用模型：Llama-3.1-8B、Gemma2-9B、Ministral-8B
  - 推理模型：DeepSeek-R1（671B）、QwQ-32B、Sky-T1-32B、R1-Distill-8B/7B 等
  - 医学模型：TX-Gemma-9B、Meditron3-8B、Meerkat-8B、UltraMedical-8B、HuatuoGPT-o1-8B
  - 医学过程奖励模型：MedS³（8B，基于 MCTS）
  - 内部基线：PRM_soft、PRM_hard（MCTS 自动标注）、Med-PRM without RAG（无检索的 PRM）
- **评估策略**：Best-of-N 和 SC+RM，逐步增加生成轨迹数 N=1,2,4,8,16,32,64。

## 4. 资源与算力

- **训练**：使用单张 NVIDIA A100 (80GB VRAM)，对 Llama-3.1-8B-Instruct 进行全微调，最大序列长度 4096，AdamW 优化器，学习率 2e-6，余弦衰减，5% warmup，bf16 精度，梯度检查点和 Flash Attention V2，全局 batch size 64，训练 3 个 epoch。
- **检索**：使用 AWS EC2 c5.9xlarge 进行索引，Milvus 实现 MIPS 搜索；重排序使用单张 NVIDIA RTX 3090。
- **标签生成**：调用 Gemini-2.0-flash API，温度=0，总 API 成本约 20 美元（用于构建训练集标签）。
- **文中未明确给出训练总时长**，但限于单卡和较小模型，算力开销较为适中。

## 5. 实验数量与充分性

- **实验数量**：
  - 主结果表（Table 1）覆盖 7 个基准（5 个多选 + 2 个开放），对比 10 余种基线。
  - 消融实验（Figure 2）：在 7 个基准平均结果上，比较 Med-PRM 与 PRM_soft、PRM_hard、Med-PRM without RAG、Self-Consistency，在 Best-of-N 和 SC+RM 下 scaling 趋势。
  - 即插即用验证（Table 2）：在 MedQA 上，将 Med-PRM verifier 应用到 Llama-3.1、UltraMedical、Meerkat 等策略模型，并报告 SC、Best-of-N 提升。
  - 专家对齐实验（Table 3）：180 个步骤级标注，计算 Pearson 相关系数。
  - 案例研究（Figure 3、4）：对比不同标注策略在具体例子上的表现。
- **充分性评价**：实验设计较为全面，覆盖了多选和开放式任务，消融控制了各组件（标注方法、检索），并检验了可迁移性。但存在一定局限：1）仅使用 8B 参数模型；2）未对不同模型规模做 scaling 实验；3）部分基准（AgentClinic*）是简化版本，可能缺乏多轮交互的真实性。总体而言，实验在给定资源和模型规模下是客观且公平的。

## 6. 主要结论与发现

- Med-PRM 在 7 个医疗基准上平均准确率（SC+RM）达 73.50%，超过所有小规模（<10B）开源模型，包括最新的 MedS³（平均提升 2.44%）。
- 作为 verifier 即插即用时，结合 Meerkat-8B 在 MedQA 上首次实现 8B 模型超过 80% 准确率（80.35%），相较基础模型提升 13.70%。
- 消融实验表明：使用 LLM-a-Judge 标注（Med-PRM without RAG）已优于 MCTS 自动标注，加入检索后进一步提升；在 Best-of-N 严格设置下，传统 PRM 反而退化，而 Med-PRM 始终保持优势。
- 专家对齐实验显示 Med-PRM 与人类专家的 Pearson 相关系数在 Easy 和 Hard 子集上分别为 0.74 和 0.71，显著高于软/硬标签方法（Hard 子集仅 0.34/0.31）。
- 案例研究证明 Med-PRM 能够准确区分正确/错误中间步骤，而 ORM 和传统 PRM 会错误惩罚有效步骤或忽略关键错误。

## 7. 优点

- **方法论创新**：将检索增强生成与过程奖励模型结合，实现证据驱动的步骤级评估，解决了传统自动标注的假阴性问题。
- **实用性**：训练成本极低（API 成本<20 美元，单卡训练），且 verifier 可即插即用于多种策略模型，具有强迁移性。
- **评估全面性**：涵盖多选和开放式诊断场景，并进行了专家对齐验证、消融、scaling 分析，结论稳健。
- **对齐临床需求**：通过引用外部知识（临床指南、教科书），提升推理可靠性和可解释性，有助于降低医疗 AI 的幻觉风险。

## 8. 不足与局限

- **模型规模受限**：仅实验了 8B 参数模型，未探索更大模型（如 70B）下的扩展性。
- **领域局限**：仅针对医疗领域，虽方法具有泛化潜力，但未在其他需要逐步推理的领域（如法律、科学）验证。
- **强化学习未深入**：未尝试更复杂的 RL 训练策略（如 PPO 与 PRM 结合），当前仅用了拒绝采样和测试时 rescore。
- **开放式任务简化**：AgentClinic* 简化了多轮交互，可能低估真实临床动态中的挑战。
- **资源消耗未详细披露**：虽有推理时 scaling（N=64），但未报告生成 64 条轨迹的具体时间或成本。
- **潜在偏差**：标签生成使用 Gemini-2.0-flash，可能引入 LLM 自身的偏见；且检索语料库的覆盖度和时效性未充分讨论。

（完）

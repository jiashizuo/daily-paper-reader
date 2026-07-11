---
title: "S2R: Teaching LLMs to Self-verify and Self-correct via Reinforcement Learning"
title_zh: S2R：通过强化学习教导大语言模型自验证与自纠正
authors: "Ruotian Ma, Peisong Wang, Cheng Liu, Xingyan Liu, Jiaqi Chen, Bang Zhang, Xin Zhou, Nan Du, Jia Li"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.1104.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 使用结果级和过程级强化学习训练自验证与自纠正
tldr: 针对大模型深度思考能力提升数据需求大的问题，提出S2R框架，先通过监督微调初始化自验证与自纠正行为，再使用结果级和过程级强化学习强化这些技能，显著提升推理准确性，且对小模型同样有效。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1104/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 670, \"height\": 450, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1104/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1434, \"height\": 641, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1104/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 695, \"height\": 478, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1104/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 689, \"height\": 474, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 746, \"height\": 433, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1517, \"height\": 1302, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 800, \"height\": 329, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 786, \"height\": 185, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1497, \"height\": 592, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 801, \"height\": 382, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 813, \"height\": 710, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 825, \"height\": 935, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1662, \"height\": 260, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1659, \"height\": 235, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1657, \"height\": 202, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1104/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1653, \"height\": 212, \"label\": \"Table\"}]"
motivation: 现有提升LLM深度思考的方法需要大量数据或训练开销，且小模型效果不明。
method: 先通过监督微调初始化自验证与自纠正行为，再结合结果级和过程级强化学习强化。
result: 在多个推理基准上显著提升性能，且对较小模型也有明显效果。
conclusion: S2R是一种高效且可扩展的推理增强框架。
---

## Abstract
Recent studies have demonstrated the effectiveness of LLM test-time scaling. However, existing approaches to incentivize LLMs’ deep thinking abilities generally require large-scale data or significant training efforts. Meanwhile, it remains unclear how to improve the thinking abilities of less powerful base models. In this work, we introduce S 2 R, an efficient framework that enhances LLM reasoning by teaching models to self-verify and self-correct during inference. Specifically, we first initialize LLMs with iterative self-verification and self-correction behaviors through supervised fine-tuning on carefully curated data. The self-verification and self-correction skills are then further strengthened by outcome-level and process-level reinforcement learning with minimized resource requirements. Our results demonstrate that, with only 3.1k behavior initialization samples, Qwen2.5-math-7B achieves an accuracy improvement from 51.0% to 81.6%, outperforming models trained on an equivalent amount of long-CoT distilled data. We also discuss the effect of different RL strategies on enhancing LLMs’ deep reasoning. Extensive experiments and analysis based on three base models across both in-domain and out-of-domain benchmarks validate the effectiveness of S 2 R.

---

## 论文详细总结（自动生成）

### 1. 核心问题与整体含义（研究动机和背景）
当前，通过测试时计算缩放（test-time scaling）来增强大语言模型（LLM）的深度思考能力已成为重要趋势（如 OpenAI o1）。然而，现有方法普遍存在资源消耗大（需要大规模数据、长链思考蒸馏或大量人工标注）的问题，且对于参数量较小或能力较弱的基座模型，如何有效激发其深度推理能力仍不明确。针对这一困境，论文提出 **S²R 框架**，旨在以最小资源开销教导 LLM 在推理过程中自主进行自验证（self-verify）与自纠正（self-correct），从而显著提升推理准确率，同时为小模型提供了可行的思考增强方案。

### 2. 方法论：核心思想、关键技术细节、公式或算法流程

**核心思想**：将 LLM 的推理过程形式化为一个强化学习（RL）顺序决策过程，动作空间限定为 `solve`, `verify`, `<end>`。模型交替执行求解与验证动作，并根据验证结果决定是否继续纠正（从错误中学习）。通过这两项能力，模型能够在推理时不断自我评估、发现错误并修正。

**关键技术细节与流程**（两阶段训练）：

- **阶段1：行为初始化（Behavior Initialization）**
    - **数据构建**：从基座模型自身采样的回答中，提取错误的求解步骤，并为其构造“确认型验证”（Confirmative Verification）——要求模型在不重新求解的前提下从新角度验证答案的正确性。轨迹长度（`solve-verify` 迭代次数）根据问题难度动态分配（准确率越低，迭代次数越多），确保困难问题分配更多计算。
    - **监督微调（SFT）**：使用精心构造的轨迹数据（如 `y = (s1, v1, s2, v2, ..., sk, vk)`）进行微调，仅对关键的 `verify` 动作、最后一个 `solve` 动作以及 `<end>` 动作计算损失（其余动作掩码为 0）。这使模型初步学会自验证与自纠正的行为模式，但尚不能完全有效执行。

- **阶段2：强化学习增强**
    - **结果级 RL（Outcome-level RLOO）**：以最终求解的正确性作为奖励（+1/-1），结合 Leave-One-Out 基线估计和 KL 散度惩罚，优化整个轨迹。鼓励模型自主探索更有效的验证-纠正路径，但不直接监督中间步骤。
    - **过程级 RL（Process-level Group-based RL）**：为每个动作（solve 或 verify）定义局部奖励：solve 动作根据其答案是否正确给予 ±1；verify 动作根据其判断是否与答案真实正确性一致给予 ±1。优势计算基于“共享相同奖励上下文”的动作组（即具有相同历史奖励序列的动作）的平均值作为基线，从而对中间步骤提供更精细的指导。
    - **离线 RL 探索**：作为更高效的替代方案，实验了离线设置下的过程级与结果级 RL，通过预先采样大量轨迹、按问题难度分组进行基线估计，取得了与在线 RL 相当的效果。

### 3. 实验设计

- **基座模型**：3 种不同规模的通用/数学专用模型：`Llama-3.1-8B-Instruct`、`Qwen2-7B-Instruct`、`Qwen2.5-Math-7B`。
- **训练数据**：阶段 1 使用 MATH 训练集（单模型约 3k–4k 轨迹）；阶段 2 使用 MATH+GSM8K（通用模型）或 MATH+OpenMath2.0（数学专用模型），经滤除过易/过难问题后得到约 10k 条数据。
- **评估基准**：7 个数学推理测试集：MATH500、AIME 2024、AMC 2023、College Math、OlympiadBench、GSM8K、GaokaoEn 2023，以及 4 个跨域任务（FOLIO、CRUXEval、StrategyQA、MMLUPro-STEM）。
- **对比方法**：四大类：
    1. 前沿闭源模型：GPT-4o、o1-preview/mini。
    2. 顶级开源模型：NuminaMath-72B、Llama3.1-70B-Instruct、Qwen2.5-Math-72B-Instruct。
    3. 基于 Qwen2.5-Math-7B 的近期先进系统：Eurus-2-7B-PRIME、rStar-Math-7B、Qwen2.5-7B-SimpleRL。
    4. 行为克隆基线：直接 SFT 原始 CoT 数据或从 QwQ-32B-Preview 蒸馏的长链思考数据。

### 4. 资源与算力

论文未明确说明使用的 GPU 型号、数量及训练时长。仅提及训练超参数：SFT 阶段 batch size 32，学习率 5e-6，训练 3 个 epoch；RL 阶段 batch size 64，采样数 4，训练步骤 500。推理阶段使用 vLLM，精度为 BF16。总体而言，算力开销应相对较小（因为数据量仅万级、模型规模 ≤8B），但具体资源配置未给出。

### 5. 实验数量与充分性

论文进行了极为充分的实验：
- **主实验**：在 3 个基座模型 × 7 个数学基准上全面评估 SFT 模型、两种 RL 模型，并对比 4 大类基线方法（表 2）。
- **跨域泛化实验**：在 4 个非数学推理任务上评估（表 3），并深入分析验证与纠正行为的变化（表 4）。
- **消融与机制分析**：
  - 对比“问题求解型验证”与“确认型验证”的效果（附录 A.1，表 6）。
  - 评估不同 RL 策略对自验证准确性、错误召回率、纠正成功率等的影响（图 3）。
  - 分析正确率与迭代次数随问题难度的分布（图 4）。
  - 探索离线 RL 的不同基线估计方法（表 12）、问题过滤策略（表 11）等。
- **方法对比公平性**：所有基线结果源自原论文或同等设置下复现，保持数据量一致；蒸馏基线使用相同数量的 QwQ 生成数据。

因此，实验覆盖多模型、多领域、多维度分析，充分且客观地验证了方法的有效性。

### 6. 主要结论与发现

1. **数据效率极高**：仅用 3.1k 行为初始化样本，S²R（SFT 阶段）即可将 Qwen2.5-Math-7B 的 MATH500 准确率从 51.0% 提升至 81.6%，优于使用等量长链思考蒸馏数据的模型（80.2%）。
2. **RL 进一步提升**：结果级 RL 可在所有基座模型上带来持续增益，尤其在较强模型（如 Qwen2.5-Math-7B）上表现更优；过程级 RL 对初始能力较弱的模型（如 Qwen2-7B）更有效，能显著改善中间验证的准确性。
3. **动态分配计算资源**：模型学会根据问题难度自动调整迭代次数（简单问题少次验证即输出，困难问题多次探索）。
4. **跨域泛化**：在 FOLIO、CRUXEval、StrategyQA、MMLUPro-STEM 等非数学任务上，S²R 显著提升基座模型性能，验证了自验证与自纠错作为通用推理能力的有效性。
5. **离线 RL 可行**：过程级离线 RL 可达到与在线 RL 相当的性能，且训练更高效。

### 7. 优点

- **数据高效**：仅需数千条初始化数据，远超同类方法（如 rStar-Math 需大量数据构造）。
- **框架简洁可解释**：将复杂推理分解为清晰的“solve-verify”交替过程，便于理解和分析行为变化。
- **多策略兼容**：同时探索结果级与过程级 RL，并揭示了各自的适用场景和机制差异。
- **跨域泛化验证充分**：不仅限于数学，证明了所学能力的通用性。
- **开源可复现**：代码与数据已公开，便于后续研究。

### 8. 不足与局限

1. **模型规模局限**：仅实验了 8B 及以下参数的模型，未讨论更大模型（如 70B+）上是否同样有效。作者指出大模型可能具有不同涌现特性，留待未来探索。
2. **算力细节缺失**：未报告 GPU 型号、数量、训练总时长，难以精确评估计算成本。
3. **最新工作覆盖有限**：由于时间限制，未能与后发的 DeepSeek R1 系列进行直接对比，仅包含了 Eurus-2、rStar-Math、SimpleRL 等同期工作。
4. **验证方式依赖启发式规则**：“确认型验证”的构建需借助更强模型（GPT-4）进行语言过滤与改写，可能引入额外成本和偏差。
5. **跨域泛化深度有限**：虽然总体性能提升，但错误召回率（Error Recall）在领域特定场景（如 FOLIO）提升有限，表明域内错误检测仍需专门监督。

（完）

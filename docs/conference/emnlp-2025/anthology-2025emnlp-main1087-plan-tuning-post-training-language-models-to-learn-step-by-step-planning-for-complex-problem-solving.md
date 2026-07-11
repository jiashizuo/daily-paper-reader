---
title: "PLAN-TUNING: Post-Training Language Models to Learn Step-by-Step Planning for Complex Problem Solving"
title_zh: 规划微调：通过后训练让语言模型学会逐步规划以解决复杂问题
authors: "Mihir Parmar, Palash Goyal, Xin Liu, Yiwen Song, Mingyang Ling, Chitta Baral, Hamid Palangi, Tomas Pfister"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1087.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用强化学习目标进行后训练以增强复杂推理能力
tldr: 该论文针对小型开源LLM在复杂问题求解中的规划能力不足，提出了PLAN-TUNING框架。该框架从大型LLM中蒸馏出规划轨迹，并通过监督学习和强化学习目标对小型模型进行后训练，使其学会逐步规划。在GSM8k和MATH基准上，该方法显著提升了推理性能，展示了规划结构在后训练中的价值。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1087/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 797, \"height\": 822, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1087/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1646, \"height\": 460, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1087/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1627, \"height\": 740, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1087/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 797, \"height\": 507, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1087/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 604, \"height\": 279, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1087/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1635, \"height\": 664, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1087/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 733, \"height\": 218, \"label\": \"Table\"}]"
motivation: 现有方法未充分利用规划结构对小型LLM进行后训练以提升复杂推理能力。
method: 提出PLAN-TUNING，先蒸馏规划轨迹，再结合监督学习和强化学习目标微调小型模型。
result: 在GSM8k和MATH基准上显著提升了推理正确率，验证了规划后训练的有效性。
conclusion: 规划结构的知识蒸馏与强化学习后训练能有效提升小模型的复杂推理能力。
---

## Abstract
Recently, decomposing complex problems into simple subtasks–a crucial part of human-like natural planning–to solve the given problem has significantly boosted the performance of large language models (LLMs). However, leveraging such planning structures during post-training to boost the performance of smaller open-source LLMs remains underexplored. Motivated by this, we introduce PLAN-TUNING, a unified post-training framework that (i) distills synthetic task decompositions (termed “planning trajectories”) from large-scale LLMs and (ii) fine-tunes smaller models via supervised and reinforcement-learning objectives designed to mimic these planning processes to improve complex reasoning. On GSM8k and the MATH benchmarks, plan-tuned models outperform strong baselines by an average ~7%. Furthermore, plan-tuned models show better generalization capabilities on out-of-domain datasets, with average ~10% and ~12% performance improvements on OlympiadBench and AIME 2024, respectively. Our detailed analysis demonstrates how planning trajectories improves complex reasoning capabilities, showing that PLAN-TUNING is an effective strategy for improving task-specific performance of smaller LLMs.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

近年来，将复杂问题分解为简单子任务（自然规划）已被证明能显著提升大语言模型（LLM）的推理性能。然而，大型模型具备的这种规划能力主要依赖推理时的提示或大规模专有模型，而**如何在训练后阶段充分利用规划结构来提升小型开源 LLM 的复杂推理能力**仍是未充分探索的领域。论文提出 **PLAN-TUNING**，旨在通过蒸馏大型模型生成的规划轨迹，并结合监督学习与强化学习目标对小型模型进行后训练，使其学会逐步规划，从而在参数中内化规划能力，提高复杂问题求解的准确性。

### 2. 论文提出的方法论

- **核心思想**：将自然规划（分解为有序子目标）作为一种结构化知识蒸馏到小型 LLM 的参数中，而非仅依赖推理时的提示。
- **数据生成（蒸馏）**：
  - 使用大型 LLM（Gemini-2.0-Flash）为每个问题生成 N=5 个候选规划轨迹（温度 0.7）。
  - 通过 **Plan Verifier**（基于 Parmar et al. 2025）计算规划质量分数，保留分数 ≥80 的规划。
  - 再通过 **Answer Verifier** 验证执行结果与批量正确答案（y*）是否一致，仅保留两项条件均满足的 <问题、规划、执行、答案> 三元组。
- **训练策略**：
  - **监督微调（SFT）**：
    - **M1（联合生成）**：模型直接从问题生成规划 + 执行 + 答案，最小化负对数似然。
    - **M2（规划生成）**：模型仅生成规划，执行阶段使用外部基座模型，最小化规划部分的负对数似然。
  - **强化学习（GRPO）**：
    - 采用 Group Relative Policy Optimization (Shao et al., 2024) 变体。
    - 奖励函数：\( r(\cdot) = R_{\text{plan}}(\tau) + R_{\text{ans}}(y) \)，其中 \( R_{\text{plan}} \) 由 Gemini 对生成规划与黄金规划的相似度打分（0-1），\( R_{\text{ans}} \) 为正确性指示（2/0）。
    - 优势通过组内奖励归一化计算，优化目标包含策略比裁剪和 KL 散度约束。
- **算法流程**：图 2 和图 3 展示了从大型模型生成 → 两阶段过滤 → SFT / GRPO 训练的完整 pipeline。

### 3. 实验设计

- **数据集**：
  - 训练 & 评估（域内）：GSM8k（6,586 训练 / 1,319 评估）、MATH（10,000 训练 / 500 评估）。
  - 仅评估（域外）：OlympiadBench（674 题）、AIME 2024（933 题）。
- **模型**：
  - SFT：Gemma-3-12B-It、Qwen3-8B。
  - GRPO：Gemma-3-1B-It、Qwen3-4B。
- **基线**：
  - SFT 基线：基于标准 CoT 推理链和答案训练。
  - Vanilla GRPO：仅优化答案正确性（\( R_{\text{ans}} \)），不使用规划奖励。
- **指标**：准确率 / Exact Match；OlympiadBench 使用微平均准确率。
- **消融实验**：
  - 单数据集 vs 混合 GSM8k+MATH 训练。
  - 单阶段过滤（仅 Plan Verifier） vs 两阶段过滤。
  - 定性案例分析。

### 4. 资源与算力

论文在实验设置中**未明确说明** GPU 型号、数量及训练时长。仅提及 SFT batch size=8，GRPO batch size=32，学习率均为 5×10⁻⁶，使用 cosine 调度器，训练 1 个 epoch。GRPO 实验因资源限制仅使用较小模型（1B、4B），且仅基于 GSM8k 进行训练。由于缺少算力细节，无法量化计算资源需求。

### 5. 实验数量与充分性

- **实验数量**：
  - 两个模型家族（Gemma、Qwen）各 2 个规模，两个 SFT 变体（M1、M2） + 两个 GRPO 变体（Vanilla、Plan-GRPO）。
  - 4 个数据集，覆盖域内和域外。
  - 2 组消融实验（数据混合、过滤策略）+ 1 个定性案例。
- **充分性与客观性**：
  - 实验设计较为全面，对比了强基线，报告了多模型、多设置下的结果。
  - 消融实验验证了关键组件（两阶段过滤）和训练策略（单数据集更优）。
  - 不足：GRPO 仅使用 GSM8k，未在 MATH 上评估；且因模型容量限制（1B/4B）导致整体性能偏低，SFT 与 GRPO 之间公平性受限。
  - 总体而言，实验能有效支撑主要结论，但部分对比不够对称。

### 6. 论文的主要结论与发现

- **PLAN-TUNING 显著提升小型 LLM 推理能力**：在 GSM8k 上平均提升 ~7%，MATH 上提升 ~20%（Qwen3-8B M2 达 79.4% vs 基线 53.2%）。
- **规划轨迹改善域外泛化**：OlympiadBench 平均 ↑~10%，AIME 2024 平均 ↑~12%，尤其 M2 在 AIME 上从 5.57% 提升至 31.51%（Qwen3-8B）。
- **M2（仅规划生成）优于 M1（联合生成）**：表明让模型专注于规划生成、由外部执行更有效。
- **混合不同数据集训练会降低性能**：每个数据集需要特定的规划模式。
- **两阶段过滤（Plan Verifier + Answer Verifier）是关键**：相比单阶段过滤，在 GSM8k 上提升 ~4%，AIME 上 ~9%。
- **规划引导可避免推理错误**：定性案例显示 SFT 基线因错误求和步骤导致错误，而 PLAN-TUNING 通过分解子目标得到正确结果。

### 7. 优点

- 首次系统地将大型模型的规划结构通过蒸馏+后训练注入小型模型参数，而非仅依赖推理时提示。
- 同时探索了 SFT 和 RL 两种范式，设计了针对规划的奖励（基于语义相似度），创新性较强。
- 两阶段过滤机制有效保证了训练数据质量，消融实验证实了其价值。
- 实验覆盖域内和域外，展示了良好的泛化性。

### 8. 不足与局限

- **依赖上游大型模型**：数据生成依赖 Gemini-2.0-Flash 和其验证器，误差和偏见会传播到训练数据中，限制下游效果上限。
- **计算开销较大**：生成、过滤、执行多个候选规划需要较多计算资源，可能影响大规模应用。
- **领域局限性**：仅在数学推理任务上验证，对常识推理、代码生成等其他类型任务尚需验证。
- **超参数敏感**：规划质量阈值（80）、奖励权重等需手动调整，不同数据集或语言可能不适用。
- **GRPO 实验不充分**：仅使用 GSM8k，且模型太小导致性能远低于 SFT；缺乏在 MATH 上的 GRPO 结果，削弱了 RL 方法的竞争力。
- **规划奖励依赖 LLM 评估**：使用 Gemini 对相似度打分，可能存在主观偏差。作者提到未来可考虑更客观的度量如 ROSCOE，但未实施。

（完）

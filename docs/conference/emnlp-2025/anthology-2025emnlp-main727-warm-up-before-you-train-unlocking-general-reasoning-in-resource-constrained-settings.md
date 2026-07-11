---
title: "Warm Up Before You Train: Unlocking General Reasoning in Resource-Constrained Settings"
title_zh: 训练前预热：在资源受限场景解锁通用推理能力
authors: "Safal Shrestha, Minwu Kim, Aadim Nepal, Anubhav Shrestha, Keith W. Ross"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.727.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 基于RLVR预热策略的少数据推理训练
tldr: 针对有限监督下训练推理大模型需要大量数据的问题，提出两阶段训练策略。先在小领域（逻辑谜题）蒸馏长CoT获得通用推理技能，再在目标领域用少量样本进行RLVR微调。实验表明该方法在数据稀缺时显著提升推理性能，且泛化到多个领域。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1064, \"height\": 614, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1495, \"height\": 677, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1461, \"height\": 595, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 800, \"height\": 1130, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 794, \"height\": 1304, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1641, \"height\": 589, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1637, \"height\": 590, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1638, \"height\": 593, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 787, \"height\": 580, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.727/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 788, \"height\": 583, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1380, \"height\": 776, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1511, \"height\": 1351, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 726, \"height\": 609, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1196, \"height\": 570, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 728, \"height\": 1202, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 802, \"height\": 292, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1119, \"height\": 335, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1011, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1119, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1012, \"height\": 331, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1357, \"height\": 330, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1359, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1270, \"height\": 331, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.727/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1288, \"height\": 334, \"label\": \"Table\"}]"
motivation: 推理大模型依赖大量高质量训练数据，在数据稀缺场景下难以构建。
method: 提出两阶段训练：先在小玩具领域预热（蒸馏长CoT），然后对目标领域少量样本应用RLVR。
result: 在多个推理基准上，该策略在数据稀缺时显著优于直接从零开始训练或仅微调。
conclusion: 预热策略能有效迁移通用推理技能，减少对目标领域数据的依赖。
---

## Abstract
Designing effective reasoning-capable LLMs typically requires training using Reinforcement Learning with Verifiable Rewards (RLVR) or distillation with carefully curated Long Chain of Thoughts (CoT), both of which depend heavily on extensive training data. This creates a major challenge when the amount of quality training data is scarce. We propose a sample-efficient, two-stage training strategy to develop reasoning LLMs under limited supervision. In the first stage, we “warm up” the model by distilling Long CoTs from a toy domain, namely, Knights & Knaves (K&K) logic puzzles to acquire general reasoning skills. In the second stage, we apply RLVR to the warmed-up model using a limited set of target-domain examples. Our experiments demonstrate that this two-phase approach offers several benefits: (i) the warmup phase alone facilitates generalized reasoning, leading to performance improvements across a range of tasks, including MATH, HumanEval+, and MMLU-Pro; (ii) When both the base model and the warmed-up model are RLVR trained on the same small dataset ( ≤100 examples), the warmed-up model consistently outperforms the base model; (iii) Warming up before RLVR training allows a model to maintain cross-domain generalizability even after training on a specific domain; (iv) Introducing warmup in the pipeline improves not only accuracy but also overall sample efficiency during RLVR training. The results in this paper highlight the promise of warmup for building robust reasoning LLMs in data-scarce environments.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 核心问题与整体含义
- **研究动机**：当前训练推理能力强的LLM通常依赖大量高质量数据（如RLVR或蒸馏长CoT），但在数据稀缺场景（如仅有≤100个样本）下难以有效训练。作者希望实现**元学习**：让模型先学习通用的推理策略，再快速适应新领域。
- **核心问题**：能否让模型通过一个简单的、领域无关的逻辑谜题（Knights & Knaves）先“预热”获得通用推理能力，再在极小样本量下高效适应下游任务？

## 2. 方法论
- **核心思想**：两阶段训练策略，模拟元学习范式：
  1. **预热阶段（Warmup）**：使用一个小型逻辑谜题领域（Knights & Knaves，K&K）的推理轨迹（长CoT）对模型进行监督微调（SFT）。这些轨迹由强推理模型（QwQ-32B）生成，包含自我反思、验证、假设检验等通用推理行为，且不经过任何过滤（包括错误答案）。
  2. **目标领域适应阶段**：在预热后的模型上，使用目标领域（如数学、代码、语言理解）的少量样本（≤100个）进行RLVR（使用无偏GRPO算法）训练，进一步精炼领域特定推理策略。
- **关键技术细节**：
  - K&K数据来源：已有数据集（Xie et al., 2024），包含3-7个角色的问题，共5000个样本，取4500训练、500验证。
  - 蒸馏时使用低学习率（1e-6）防止过拟合至K&K领域。
  - RLVR训练使用R1提示模板、GRPO算法，超参数见附录表7。
  - 未使用任何拒绝采样或质量过滤，强调简单性。

## 3. 实验设计
- **数据集/场景**：
  - **MATH**（数学推理）：5000测试题中的MATH500子集用于评估，训练时用100个随机样本（或全量7500作为对照）。
  - **HumanEval+**（代码生成）：164道手写编程题，训练时用50个样本，其余用于评估。
  - **MMLU-Pro**（语言理解）：含14个类别，重点关注物理（1299个样本，训练100个）和历史（381个样本，训练100个）子集。
- **Benchmark与对比方法**：
  - 对比基线：**基础模型**（Qwen2.5-3B等）、**仅预热模型（K&K蒸馏）**、**基础模型+直接RLVR**、**预热+RLVR**。
  - 额外对比：使用s1K数据集（高质量多领域长CoT）进行蒸馏，检验K&K预热的优势。
  - 模型家族：Qwen2.5-3B、Qwen2.5-1.5B-Math、DeepSeek-Math-7B-Base、Qwen2.5-14B；另外在Olmo2、Llama等家族上验证（附录A.4.1）。
- **消融实验**：
  - 使用短CoT（非推理教师）蒸馏K&K，验证推理行为的重要性。
  - 使用DeepSeek-R1作为教师生成K&K轨迹，排除模型族内协同效应（附录A.5）。
  - 仅用1000个K&K样本蒸馏（附录A.4.3）。
  - 对比不同学习率下的过拟合现象（附录A.4.2）。

## 4. 资源与算力
- **GPU型号与数量**：6块NVIDIA H100 SXM（80GB VRAM），来自RunPod云服务，单价$2.99/小时/GPU。
- **训练时长**：
  - 蒸馏：最小模型1.5B约20分钟，14B约1小时10分钟；s1K数据约5分钟（1.5B）至25分钟（14B）。
  - RLVR训练：各任务时长见表8（例如MATH: 基础模型2小时，预热模型4小时；Physics: 6h vs 11h等）。
- **总成本**：未明确，但可推算。

## 5. 实验数量与充分性
- **实验组数**：主要实验包括4种基础模型×3个基准（表2）、RLVR在MATH/HumanEval+/MMLU-Pro（物理/历史）上的4组对比（每组两种模型+多个checkpoint）、跨领域泛化评估（图3）、完成长度变化分析（图4）、以及多个消融和模型族扩展实验。总计超过20组独立实验。
- **充分性与客观性**：
  - 评估时多次采样（每问题4次）并报告均值±标准差，考虑噪声。
  - 对比方法公平：超参数保持一致，仅改变模型状态（基础 vs 预热）。
  - 仅测试到14B模型和3B模型的RLVR，未在更大模型上验证——作者在局限中承认这一点。
  - 实验覆盖了多样化任务（数学推理、代码生成、语言理解），但未覆盖更复杂场景（如多智能体、交互式任务）。
  - 总体上实验设计严谨，消融充分，结论有统计学依据。

## 6. 主要结论与发现
- **预热阶段本身就能显著提升通用推理能力**：如Qwen2.5-3B在MATH上+10.2%，HumanEval+上+15.3%，MMLU-Pro上+9.0%。14B模型在MATH上达到77.4%，接近全量RLVR的80.2%。
- **预热+少量样本RLVR优于直接RLVR**：在≤100样本下，预热模型始终比基础模型RLVR表现更好，且收敛更快（例如MATH上用100样本达到全量数据集训练的精度）。
- **预热有助于保持跨领域泛化**：直接RLVR在特定领域训练后，在其他领域性能下降（如HumanEval+训练后MATH降13.8%），而预热模型退化更少甚至提升。
- **K&K预热通常优于s1K蒸馏**：尤其在较大模型（14B）上，s1K甚至导致性能下降，而K&K保持增益。
- **预热的效果源于推理行为本身，而非领域知识**：短CoT蒸馏K&K反而导致MATH精度降至11%，证明长CoT推理行为是关键。

## 7. 优点
- **方法极简且高效**：只用小玩具领域（K&K）的推理轨迹，无需精心筛选或领域知识，即可激活通用推理。
- **样本效率突出**：预热+100个样本RLVR能达到全量7500样本训练的精度，极大降低数据需求。
- **跨领域泛化保持良好**：预热让模型免于过度专业化，是实际低资源场景的实用策略。
- **实验设计全面公平**：多次采样、消融充分、考虑了多种模型族和教师模型，验证了泛化性。
- **开源代码和模型**：促进可复现性。

## 8. 不足与局限
- **仅验证到14B模型和3B模型的RLVR**：更大模型的扩展性和收益不确定。
- **K&K并非唯一可选玩具领域**：其他合成环境可能更优，未做系统性搜索。
- **知识密集型任务（如历史）上，预热可能反而有损**：因为模型被“引导”去推理，而短直接回答更有效。预热在需要事实回忆的场景下可能不占优。
- **未探索更复杂互动场景**：如多智能体、对话等，推理转移性需进一步验证。
- **计算成本虽相对低，但完整训练仍需要6块H100数小时**，对个人研究者仍有门槛。

（完）

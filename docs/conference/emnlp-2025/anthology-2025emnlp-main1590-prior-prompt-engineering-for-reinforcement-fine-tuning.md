---
title: Prior Prompt Engineering for Reinforcement Fine-Tuning
title_zh: 强化微调中的前提示工程
authors: "Pittawat Taveekitworachai, Potsawee Manakul, Sarana Nutanong, Kunat Pipatanakul"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1590.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 专注于强化微调（RFT）中的前提示工程
tldr: 现有强化微调研究侧重算法和奖励设计，忽略了前提示（prior prompt）的影响。本文系统研究了五种推理提示策略在RFT中的作用，发现不同提示可以引导模型内化不同行为。为RFT训练提供了新的关键维度。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1661, \"height\": 271, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1664, \"height\": 467, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 800, \"height\": 426, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 802, \"height\": 420, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1649, \"height\": 478, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 788, \"height\": 343, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 706, \"height\": 1488, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 805, \"height\": 419, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 806, \"height\": 423, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 806, \"height\": 424, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 804, \"height\": 474, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 802, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 809, \"height\": 439, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 776, \"height\": 434, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 784, \"height\": 427, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 783, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 785, \"height\": 268, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 782, \"height\": 270, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 785, \"height\": 269, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1590/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 769, \"height\": 514, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 786, \"height\": 537, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 749, \"height\": 535, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 789, \"height\": 799, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1336, \"height\": 415, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 801, \"height\": 487, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 773, \"height\": 798, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 744, \"height\": 534, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 761, \"height\": 796, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 748, \"height\": 535, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1590/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 764, \"height\": 793, \"label\": \"Table\"}]"
motivation: RFT中前提示设计对模型行为的影响尚未被探索。
method: 将五种推理策略（推理、规划、基于代码的推理等）作为前提示，在RFT中比较其效果。
result: 不同前提示显著影响模型学习到的行为，可引导模型内化特定策略。
conclusion: 前提示工程是RFT中不可忽视的重要环节。
---

## Abstract
This paper investigates prior prompt engineering (pPE) in the context of reinforcement fine-tuning (RFT), where language models (LMs) are incentivized to exhibit behaviors that maximize performance through reward signals. While existing RFT research has primarily focused on algorithms, reward shaping, and data curation, the design of the prior prompt–the instructions prepended to queries during training to elicit behaviors such as step-by-step reasoning–remains underexplored. We investigate whether different pPE approaches can guide LMs to internalize distinct behaviors after RFT. Inspired by inference-time prompt engineering (iPE), we translate five representative iPE strategies–reasoning, planning, code-based reasoning, knowledge recall, and null-example utilization–into corresponding pPE approaches. We experiment with Qwen2.5-7B using each of the pPE approaches, then evaluate performance on in-domain and out-of-domain benchmarks (e.g., AIME2024, HumanEval+, and GPQA-Diamond). Our results show that all pPE-trained models surpass their iPE-prompted counterparts, with the null-example pPE approach achieving the largest average performance gain and the highest improvement on AIME2024 and GPQA-Diamond, surpassing the commonly used reasoning approach. Furthermore, by adapting a behavior-classification framework, we demonstrate that different pPE strategies instill distinct behavioral styles in the resulting models. These findings position pPE as a powerful yet understudied axis for RFT.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：现有强化微调（RFT）研究主要关注算法、奖励塑造和数据策划，但忽略了**前提示（prior prompt）** 的设计——即在训练时附加在查询前的指令，用于引导模型展现特定行为（如逐步推理）。论文系统研究**前提示工程（Prior Prompt Engineering, pPE）** 是否能在RFT过程中引导语言模型内化不同的行为风格。
- **整体含义**：pPE是RFT中一个强大但尚未被充分探索的维度。通过仅改变训练时的前提示，可以定向诱导模型学习推理、规划、代码、知识回忆、示例利用等多种中间行为，从而影响下游任务性能和效率。

## 2. 论文提出的方法论

- **核心思想**：受推理时提示工程（iPE）启发，将五种经典iPE策略翻译为对应的pPE版本，在RFT训练时使用。pPE决定了模型在训练过程中生成的中间内容的样式（如逐步推理、列计划、写代码等），而RFT通过基于答案正确性的奖励信号激励模型展现这些行为。
- **关键技术细节**：
  - 五种pPE策略：
    - **推理（Reasoning）**：对应标签 `<think>`，模仿 CoT。
    - **规划（Planning）**：对应 `<plan>`，模仿 Plan-and-Solve。
    - **基于代码的推理（Code-based Reasoning）**：对应 `<code>`，模仿 Program-of-Thought。
    - **知识回忆（Knowledge Recall）**：对应 `<knowledge>`，模仿 Generated Knowledge。
    - **空示例利用（Null-example Utilization）**：对应 `<examples>`，模仿 Null-shot。
  - **训练算法**：使用**Group Relative Policy Optimization (GRPO)**，无需价值模型，降低计算成本。
  - **奖励函数**：由两个等权重（各0.5）的组件组成：
    - 准确率奖励：通过 `math-verify` 检查最终答案是否与真实答案等价。
    - 格式奖励：确保输出严格包含一对 XML 标签（如 `<think>...</think>` 后跟 `<answer>...</answer>`）且结构正确。
  - **训练数据**：仅使用数学领域的 STILLv3 数据集（约30K数学问题）。
  - **基模型**：主实验为 Qwen2.5-7B（基础模型，非instruct版本）；泛化实验包括 Qwen2.5-3B、Llama 3.1-8B、Qwen2.5-Coder-7B。

## 3. 实验设计

- **数据集与评测基准**：
  - **训练集**：STILLv3（数学问题，~30K样本）。
  - **评估集**：
    - 数学推理：AIME2024、AMC12 ’22–’23、MATH-500。
    - 编码：HumanEval+（base + extra）。
    - 问答：GPQA-Diamond。
- **对比方法**：
  - 基模型 Qwen2.5-7B 零样本。
  - 五种 iPE 策略（推理时添加相同提示模板）。
  - RFT 训练无任何前提示（No PP，无格式奖励，仅准确率奖励）。
  - 五种 pPE 策略（<think>, <plan>, <code>, <knowledge>, <examples>）。
- **实验组数**：
  - 主实验：Qwen2.5-7B 上共12种设置（5种iPE + 5种pPE + No PP + 基模型），每种在5个基准上报告准确率和响应长度。
  - 泛化实验：Qwen2.5-3B（<think> 和 <plan>）、Llama 3.1-8B（<think> 和 <plan>）、Qwen2.5-Coder-7B（<think> 和 <code>）。
  - 消融/分析：训练动态曲线（奖励、响应长度）、四种认知行为分类、五种行为类别分类。共计约30+组训练-评估组合。
- **公平性**：所有 pPE 模型使用完全相同的训练参数（除前提示外），基模型相同，RL算法固定，确保对比只体现 pPE 差异。iPE 对比使用相同提示模板但仅在推理时应用。

## 4. 资源与算力

- 论文明确说明：所有训练在**单节点配备8块H100 GPU**上运行，总计使用 **78 GPU-hours**。
- 训练栈：OpenRLHF v0.6.4（策略优化）+ vLLM v0.8.2（生成）。
- 未提供更详细的每模型训练时间，但指出每个 pPE 模型训练150+步（figure显示约160步）。

## 5. 实验数量与充分性

- **数量充足**：主实验+泛化实验+行为分析，覆盖了多种模型系列、两种规模、五种提示策略。行为分类使用最新的gpt-4.1-mini进行自动标注，结果以量化热力图展示。
- **充分性评价**：
  - **优点**：对比了“有前提示 vs 无前提示”、“推理时提示 vs 训练时提示”，覆盖了领域内（数学）和领域外（编码、问答）。行为分类从认知和任务两个层面解释差异。
  - **不足**：
    - 仅使用数学领域训练数据，未验证其他领域（如逻辑、代码、常识）的泛化。
    - 仅使用一种 RL 算法（GRPO），无法排除算法交互效应。
    - 最大模型仅为7B，缺少更大模型（如70B+）的实验，结论在更大模型上可能不同（作者自己指出）。
    - 每个模型只训练一次（单次运行），缺乏多次重复的统计显著性报告。

## 6. 论文的主要结论与发现

- **性能提升**：所有 pPE 模型在平均性能上均超过其对应的 iPE 版本和基模型。即使训练数据仅为数学，部分 pPE 方法在编码和问答基准上也带来改善。
- **null-example 策略最优**：在 Qwen2.5-7B 上，`<examples>` pPE 取得最大平均性能增益（+6.97个点），同时在 GPQA-Diamond 上提升最显著（+6.57个点），超越最常用的 `<think>` 策略。
- **行为差异化**：不同 pPE 策略诱导出显著不同的中间行为（如 `<plan>` 模型倾向于列计划；`<code>` 模型倾向于写代码）。但 null-example pPE 的行为与推理 pPE 相似，而非预期的大量举例。
- **iPE 与 pPE 不可直接迁移**：在 iPE 中表现最好的知识回忆策略（`<knowledge>`）在 pPE 中表现最弱。这表明推理时行为和训练时内化行为机制不同。
- **训练动态差异**：pPE 模型共享类似的奖励曲线（先升后稳）和响应长度曲线（先降后升），而无前提示的 No PP 模型始终保持更长响应和更低奖励。
- **效率**：null-example pPE 在取得最高性能的同时，平均响应长度最短（774 tokens），展示了更好的推理时效率。

## 7. 优点

- **概念创新**：首次系统提出并验证了“前提示工程（pPE）”在 RFT 中的关键作用，填补了现有研究空白。
- **方法论严谨**：将成熟的 iPE 策略迁移到训练阶段，使用标准 RFT 框架，控制变量充分，奖励设计清晰（准确率+格式）。
- **行为量化**：采用 Gandhi 等人的认知行为分类框架，自动量化模型行为差异，增加了定性分析的客观性。
- **泛化实验**：覆盖了不同模型家族（Qwen, Llama）和不同大小（3B, 7B, 8B），验证了 pPE 在较强模型上的有效性，同时揭示了较弱模型的局限性（如奖励黑客行为）。
- **实用性**：指出 pPE 可以作为一种简单的工具来调整模型的测试时计算开销（trade-off 准确率与响应长度）。

## 8. 不足与局限

- **计算资源限制**：实验限于7B及更小的模型，未验证70B+等更大模型的结论；仅训练了约160步，可能未达到最佳收敛。
- **领域单一**：训练数据仅限数学，限制了行为多样性；虽然部分基准跨域提升，但其他领域（如常识推理、对话）未测试。
- **算法固定**：仅使用 GRPO，结果可能无法泛化到 PPO、Dr. GRPO 等其他 RL 算法。
- **单次运行**：未报告多次训练的平均值和方差，无法评估结果的统计稳定性。
- **行为分类框架的适用性**：作者指出 Gandhi 等人的认知行为分类框架可能不完全适配非推理型 pPE 模型，导致分类结果与性能相关性较弱。
- **奖励黑客风险**：在弱模型（3B 和 8B）上观察到奖励黑客（仅追求格式奖励而忽略准确率），提示 pPE 的有效性依赖于模型能力。
- **伦理风险**：RFT 可能放大模型中已存在的有害行为；论文虽在伦理部分提出建议，但未实验中验证安全性。

（完）

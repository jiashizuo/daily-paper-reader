---
title: Group-Aware Reinforcement Learning for Output Diversity in Large Language Models
title_zh: 面向大语言模型输出多样性的群体感知强化学习
authors: "Oron Anschel, Alon Shoshan, Adam Botach, Shunit Haviv Hakimi, Asaf Gendler, Emanuel Ben Baruch, Nadav Bhonker, Igor Kviatkovsky, Manoj Aggarwal, Gerard Medioni"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1649.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: GRPO的扩展用于输出多样性
tldr: 针对大语言模型模式坍缩、生成多样性不足的问题，提出GAPO，一种对GRPO的简单扩展。GAPO在整个组上计算奖励，利用频率感知奖励函数鼓励均匀采样有效完成，从而提升多样性。实验显示GAPO训练的模型生成更多样且有效的响应，并泛化到开放提示。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 746, \"height\": 282, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 747, \"height\": 286, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1647, \"height\": 766, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1658, \"height\": 671, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1658, \"height\": 742, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1626, \"height\": 737, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 672, \"height\": 1205, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 751, \"height\": 489, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1540, \"height\": 2175, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1540, \"height\": 1534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1649/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1643, \"height\": 2367, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1649/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1654, \"height\": 563, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1649/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1276, \"height\": 211, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1649/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1553, \"height\": 1983, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1649/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1556, \"height\": 1218, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1649/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1680, \"height\": 1958, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1649/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1683, \"height\": 2254, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1649/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1344, \"height\": 1403, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1649/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 650, \"height\": 389, \"label\": \"Table\"}]"
motivation: LLM常出现模式坍缩，重复生成相同输出，缺乏多样性。
method: 提出GAPO，扩展GRPO，在群体层面计算奖励，采用频率感知奖励函数促进均匀采样。
result: GAPO训练的模型生成更多样且有效的响应，并且泛化到开放提示。
conclusion: 群体感知奖励可有效解决LLM模式坍缩，提升输出多样性。
---

## Abstract
Large Language Models (LLMs) often suffer from mode collapse, repeatedly generating the same few completions even when many valid answers exist, limiting their diversity across a wide range of tasks. We introduce Group-Aware Policy Optimization (GAPO) , a simple extension of the recent and popular Group Relative Policy Optimization (GRPO) that computes rewards over the group as a whole. GAPO enables learning from the group-level properties such as diversity and coverage.We demonstrate GAPO using a frequency-aware reward function that encourages uniform sampling over valid LLM completions, and show that GAPO-trained models produce valid and more diverse model responses.Beyond this setup, GAPO generalizes to open-ended prompts and improves response diversity without compromising accuracy on standard LLM benchmarks (GSM8K, MATH, HumanEval, MMLU-Pro). Our code will be made publicly available.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **问题**：大语言模型（LLM）在指令微调和RLHF后经常出现**模式坍缩（mode collapse）**——即使存在大量合法输出，模型也倾向于重复生成少数几个固定回答，严重限制了创造力与实用性。例如，对“说个笑话”这类开放问题，ChatGPT-4o和Claude Sonnet 3.5几乎总是给出相同的原子笑话。
- **背景**：现有应对方法（如温度缩放、top-k/top-p采样）仅作用于解码阶段，不改变模型概率分布本身；而RLHF等训练范式会进一步压低多样性。本文从训练目标直接入手，通过强化学习偏置模型产生更均衡的输出分布。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：在强化学习的奖励计算中引入**群体感知**——不再为每个样本独立打分，而是基于一组（group）生成结果计算奖励，从而捕捉群体层面的属性（如均匀性、覆盖率）。为此，作者设计了**Group-Aware Policy Optimization (GAPO)**，它是GRPO的简单扩展。
- **关键技术细节**：
  - **GAPO框架**：从查询q生成G个输出o₁…o_G，奖励函数R̃(o) ∈ ℝ^G 是整个组的函数，而非标量。
  - **频率感知奖励函数**：假设有L个合法输出集合V，定义一个均匀目标分布u = 1/L。对每个输出o_i：
    - 若o_i ∈ V，奖励 = 1 - (f_{o_i} - 1/L)，其中f_{o_i}是该合法项在当前组内的经验频率；
    - 若o_i无效，奖励 = -1。
  - 这样，被过度代表的输出获得较小奖励，被低估的输出获得较大奖励，引导模型趋向均匀采样。
  - **理论保证**：该奖励满足REINFORCE无偏性条件（θ独立、有限值、噪声与θ无关），可视为一种熵正则化项。
- **训练细节**：使用LoRA（rank=64，alpha=32，dropout=0.1）微调Qwen2.5 Instruct 7B/32B；每组生成32个样本；不使用KL惩罚（β=0）。

### 3. 实验设计：数据集 / 场景、benchmark、对比方法

- **数据集与场景**：
  - **均匀采样实验**：10个未见过的8项列表（行星、乐器、书籍等），每种模型100次采样，计算Jensen-Shannon散度（JSD）与均匀分布的偏离。
  - **开放提问实验**：10个类别（城市、名人等），每种模型500次采样，统计唯一生成数量（Unique@500）。
  - **创意写作**：8类任务（故事、诗歌、俳句、笑话、对话等），每种100次输出，计算平均嵌入距离和1-Self-BLEU作为语义/词汇多样性指标。
  - **标准基准测试**：GSM8K（~200题）、MATH（~210题）、HumanEval（全部）、MMLU-Pro（~196题），评估准确性。
- **benchmark**：使用学术基准衡量准确性。
- **对比方法**：
  - 直接对比基线：ChatGPT-4o、Claude 3.5 Sonnet、Gemini 2.5 Flash、Qwen2.5 Instruct 7B/32B（GAPO前后）。
  - 额外消融：与Min-p采样、SFT（监督微调）基线对比（附录G）。
  - 在创意任务中，还绘制了不同温度（0.5~1.3）下的创造力-准确率权衡曲线。

### 4. 资源与算力

- 文中未明确说明使用的GPU型号、数量或训练时长。
- 仅提及：batch size 8，学习率1e-5，LoRA rank=64，使用HuggingFace TRL框架。实际算力需求中等（因为只使用LoRA微调，非全参数训练）。
- **结论：论文未提供具体硬件信息，但指出代码将开源以便复现。**

### 5. 实验数量与充分性

- **实验数量**：覆盖三类场景（均匀采样、开放提问、创意写作）及四个标准基准，共约**十多组独立实验**，每组多次采样（100~500次）。另外有消融实验（SFT基线、温度扫描）、可视化（t-SNE）、创造力-准确率权衡图。
- **充分性**：实验设计较为充分，考虑了：
  - 分布偏差（列表内、指令、位置偏差）；
  - 泛化性（训练时未见过的列表类别和开放问题）；
  - 多样性指标（JSD、Unique@500、嵌入距离、Self-BLEU）；
  - 准确性不下降的验证。
- **公平性**：基线对比包括多个商业/开源模型；所有模型使用相同prompt模板；温度设为0.7统一；结果基于多次运行的平均值。但报告仅展示部分代表性结果（附录补充完整），可能存在选择性展示风险。

### 6. 论文的主要结论与发现

- GAPO训练的模型在列表选择任务中实现了**近均匀分布**（JSD < 0.1），而所有基线JSD > 0.3（例如Qwen 32B从0.31降至0.06）。
- 在开放提问中，GAPO模型生成**更多样化的输出**（Unique@500从24提高到147），且泛化到训练时未见的类别。
- 在创意写作中，GAPO显著提升了语义和词汇多样性（平均嵌入距离从0.20→0.41，1-Self-BLEU从0.54→0.82），同时保持连贯性。
- 在标准基准上，GAPO性能与基线**相当或略有提升**（GSM8K精确匹配略降但灵活匹配提升，MATH/HumanEval/MMLU-Pro保持相似水平）。
- 创造力-准确率权衡曲线显示，GAPO在所有温度下均能在相同准确率水平上实现更高创造力。

### 7. 优点

- **方法简洁有效**：仅修改GRPO的奖励计算方式（群体级别），无需改变架构、目标函数或解码策略，易于集成。
- **奖励函数针对性强**：频率感知奖励直接优化均匀分布，从根因解决模式坍缩。
- **实验全面**：覆盖从受控列表到完全开放任务、从多样性到准确性、从定量指标到可视化，验证了良好泛化性。
- **保持准确性**：多样性提升未以牺牲标准基准性能为代价，消除了常见担忧。
- **公开代码**：便于复现与扩展。

### 8. 不足与局限

- **假设合法输出已知**：频率感知奖励要求预先指定有效输出集合V，适用于列表选择等任务，但难以直接推广到开放式中有效空间隐式或无限的任务。作者将此列为未来工作。
- **仅使用LoRA微调**：未尝试全参数微调或更早阶段的干预（如SFT阶段），可能限制泛化上限。
- **准确性折衷**：虽然整体平均变化不大，但在GSM8K精确匹配上略有下降（0.835→0.772），提示在需要严格单答案的任务中可能产生噪声。
- **安全与偏差风险**：增加多样性可能扩大有害内容范围；训练数据集为合成数据，可能包含固有偏差。
- **计算开销**：虽然LoRA较轻量，但每组生成32个样本做策略更新仍需要一定算力，未与基线完全对等比较训练成本。
- **实验报告细节有限**：部分结果仅在附录展示，主文图表选择性呈现；未提供消融实验中超参数敏感性分析（如组大小G的影响）。

（完）

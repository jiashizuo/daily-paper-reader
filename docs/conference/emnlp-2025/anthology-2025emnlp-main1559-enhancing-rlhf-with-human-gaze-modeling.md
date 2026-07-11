---
title: Enhancing RLHF with Human Gaze Modeling
title_zh: 通过人类目光建模增强RLHF
authors: "Karim Galliamov, Ivan Titov, Ilya Pershin"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1559.pdf"
tags: ["query:mlr"]
score: 10.0
evidence: 通过人类目光建模增强RLHF
tldr: 强化学习从人类反馈（RLHF）虽然有效但效率低。本文探索利用人类目光预测增强RLHF：提出目光感知奖励模型和基于目光的稀疏令牌奖励分配。实验表明目光引入的RLHF更快收敛且性能相当，表明视觉注意力可作为高效训练信号。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1559/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 772, \"height\": 893, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1559/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 772, \"height\": 902, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1559/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 754, \"height\": 596, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1559/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1571, \"height\": 394, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1559/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 743, \"height\": 925, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1559/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1067, \"height\": 271, \"label\": \"Table\"}]"
motivation: RLHF效率低下，需要探索新的高效训练信号。
method: 提出目光感知奖励模型和基于目光的稀疏令牌奖励分配。
result: 目光增强的RLHF实现更快收敛，性能保持或略优。
conclusion: 人类视觉注意力模式可提升RLHF效率。
---

## Abstract
Reinforcement Learning from Human Feedback (RLHF) aligns language models with human preferences but faces efficiency challenges. We explore two approaches leveraging human gaze prediction to enhance RLHF: (1) gaze-aware reward models and (2) gaze-based distribution of sparse rewards at token level. Our experiments show gaze-informed RLHF achieves faster convergence while maintaining or slightly improving performance, reducing computational requirements during policy optimization. Human visual attention patterns provide valuable signals for policy training, suggesting a promising direction for improving RLHF efficiency through human-like attention mechanisms.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：强化学习从人类反馈（RLHF）是微调大语言模型以符合人类偏好的主流方法，但其训练过程计算开销大、效率低。主要瓶颈在于反馈信号稀疏——传统奖励模型仅对整个生成序列输出一个标量，无法指示哪些具体部分贡献了正/负反馈，导致策略优化需要大量步骤才能收敛。
- **整体含义**：人类阅读时的视觉注意（由眼动追踪捕捉）能提供词级别的细粒度信息，如哪些词更吸引注意力。本文将人类目光建模集成进RLHF流程，旨在通过更密集、更智能的奖励分配加速策略优化，降低计算成本。

## 2. 论文提出的方法论
- **核心思想**：利用训练好的目光预测模型（从现有眼动语料库训练）为文本生成token提供注意力分数，进而（a）增强奖励模型（GazeRM）或（b）将序列奖励按注意力分数重新分配为token级奖励（GazeDistrib）。
- **关键技术细节**：
  - **GazeRM**：基于López-Cardona等（2025）的工作，将预测的目光特征（如首次凝视时长、总阅读时长等）通过前馈神经网络投影到奖励模型第一层的隐藏表示中（加法或拼接），使奖励模型能感知人类注意力模式。但原工作未将其用于完整RLHF流水线，本文首次将其集成到PPO/GRPO中。
  - **GazeDistrib**：本文原创方法，使用目光模型预测的“总阅读时长（Total Reading Time, TRT）”作为token重要性权重。对于一个长为n的序列，给定总奖励R，按如下公式计算第i个token的奖励 \( r_i = R \cdot \frac{e^{t_i}}{\sum_{j=1}^n e^{t_j}} \)，其中 \( t_i \) 为预测的TRT。这样注意力越高的token获得越大的奖励份额。
- **算法流程**（文字说明）：
  1. 使用外部目光预测模型（冻结）为当前策略生成的所有输出序列预测每个token的TRT。
  2. 对于GazeRM：将TRT等特征融合进奖励模型，使其输出更准确的偏好评分，然后用于PPO/GRPO策略更新。
  3. 对于GazeDistrib：用原始奖励模型输出序列总奖励R，再按上述公式将其分解为token级奖励 \(\mathbf{r}\)，替代原有的单一奖励进行策略梯度更新。

## 3. 实验设计
- **数据集**：
  - **HH-RLHF**（Anthropic，约161K个人类偏好对）
  - **OASST2**（OpenAssistant，64K个提示）；仅保留英文部分（因目光模型仅训练于英文语料）。
- **基准（Benchmark）**：使用一个**hold-out奖励模型**（OpenAssistant的DeBERTa-large-v2，准确率69.25）对所有策略进行统一评估，避免因训练时使用的奖励模型不同导致的分数不可比。验证分数定义为策略输出在该hold-out模型上的得分减去初始SFT模型的得分。
- **对比方法**：
  - **Baseline**：标准RLHF（PPO/GRPO，无目光信息）
  - **GazeRM**：目光增强奖励模型 + PPO/GRPO
  - **GazeDistrib**：目光驱动的token级奖励分配 + PPO/GRPO
- **模型架构**：
  - 策略模型：**LLaMa-7B-open-instruct**（在HH-RLHF上）和**Mistral-7B**（在OASST2上）
  - 奖励模型：与策略同骨干网络（7B）
  - 目光预测模型：相对较小（125M参数），来自Cop等（2016）和Hollenstein等（2018）

## 4. 资源与算力
- **文中未明确说明**所使用的GPU型号、数量、训练时长等具体计算资源信息。
- 仅提及目光预测模型约125M参数，推理成本相对于7B模型可忽略，因此两种方法不会显著增加计算瓶颈。但完整的RLHF训练（PPO/GRPO）所需算力未给出。

## 5. 实验数量与充分性
- **实验组数**：
  - 主要结果：PPO算法在两种模型+两种数据集组合上各跑3次随机种子（共2×2×3=12次实验），给出均值和方差。
  - 额外实验：GRPO算法（仅展示训练奖励曲线，未详细列表），同样3个种子。
  - 未做专门的消融实验（如不同目光特征维度的对比、GazeRM不同融合方式的对比等）。
- **充分性评估**：
  - **优点**：覆盖了两种主流在线RLHF算法（PPO和GRPO）、两种不同架构的策略模型（LLaMa、Mistral）、两个有代表性的偏好数据集。结果以多次平均呈现，减少偶然性。
  - **不足**：
    - 仅限**英文**，未涉及多语言或跨语言场景。
    - 仅测试**on-policy**方法（PPO/GRPO），未包括off-policy（如DPO），后者在RLHF中同样流行。
    - 目光预测模型本身是基于通用阅读语料训练，在对话生成场景中的泛化能力未经严格验证。
    - 缺乏对收敛速度提升的具体量级（1.5-2倍）的统计检验或置信区间。
    - 未分析目光注意力分布与奖励分配之间的因果关系，可能存在混杂因素（如目光模型与语言模型本身的注意力关联）。

## 6. 论文的主要结论与发现
- **主要结论**：集成人类目光建模可以显著加速RLHF策略优化，收敛速度提升约**1.5–2倍**，同时最终性能保持持平或略有提升。
- **具体发现**：
  - 目光模型注意力集中在实义词（名词、动词）上，与信息密度相关；GazeDistrib通过给这些词更高奖励，使模型更快学习关键模式。
  - 两种方法（GazeRM和GazeDistrib）均表现一致，但GazeDistrib更简单（无需修改奖励模型）。
  - 训练奖励曲线在跨种子间存在一定波动，但验证分数（hold-out评估）显示出稳定的加速趋势。

## 7. 优点
- **方法创新**：首次将人类目光建模引入RLHF反馈机制，利用了人类认知注意力的先验知识，思路新颖。
- **计算效率**：目光预测模型很小（125M），额外推理开销可忽略，却带来显著的加速收益，实用价值高。
- **结果稳健**：在两种算法、两种模型、两个数据集上均复现加速效果，说明方法具有一定通用性。
- **公平评估**：使用hold-out奖励模型统一评分，避免了reward hacking风险，使跨方法比较更可信。

## 8. 不足与局限
- **实验覆盖有限**：
  - 仅限英文、on-policy方法，未拓展到DPO等off-policy对齐方法。
  - 仅两个数据集，且均基于对话助手场景，未涉及其他NLP任务（如摘要、翻译）。
  - 目光预测模型仅用于英语，无法直接应用到其他语言。
- **方法依赖外部模型**：目光预测模型本身有误差，且训练数据（自然阅读）可能与RLHF中模型生成的文本分布不同，可能导致偏差。
- **未分析因果机制**：虽然显示加速，但未证明目光注意力与人类偏好之间的直接因果联系，可能存在其他解释（如目光模型间接捕获了语言模型注意力模式）。
- **资源信息缺失**：未提供GPU型号、训练时长，读者难以复现成本。
- **缺乏消融研究**：没有比较不同目光特征（如首次凝视时长 vs. 总阅读时长）的效果，也未分析GazeRM中不同融合方法的影响。

（完）

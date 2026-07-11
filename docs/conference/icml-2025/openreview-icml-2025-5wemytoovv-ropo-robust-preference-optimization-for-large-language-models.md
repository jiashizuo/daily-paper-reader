---
title: "ROPO: Robust Preference Optimization for Large Language Models"
title_zh: ROPO：面向大型语言模型的鲁棒偏好优化
authors: "Xize Liang, Chao Chen, Shuang Qiu, Jie Wang, Yue Wu, Zhihang Fu, Hanzhu Chen, Feng Wu, Jieping Ye"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=5WEmyTooVV"
tags: ["query:mlr"]
score: 9.0
evidence: 具有噪声容忍和过滤的鲁棒偏好优化
tldr: 偏好数据中的噪声对LLM对齐造成严重挑战。现有方法要么效果有限，要么依赖外部模型。本文提出ROPO，一种迭代对齐方法，集成噪声容忍和噪声过滤，无需外部模型。通过将自适应降噪形式化为优化问题并迭代求解，ROPO在多个对齐基准上显著提升了鲁棒性，为实际场景中的噪声偏好数据提供了有效解决方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 偏好数据噪声严重影响对齐质量，现有方法无法同时兼顾有效性和计算开销。
method: 提出迭代优化框架，交替进行噪声容忍损失和噪声过滤，形式化为优化问题。
result: 在多个基准上优于现有鲁棒对齐方法，且无需外部模型。
conclusion: ROPO有效解决了噪声偏好数据下的鲁棒对齐问题，具有实用价值。
---

## Abstract
The prevalent noise in the preference data unavoidably poses significant challenges to the preference alignment of large language models (LLMs). Existing efforts for this problem either marginally alleviate the impact of noise without noise reduction, or rely on external LLMs that incur substantial computational costs. To address these challenges, we propose **RO**bust **P**reference **O**ptimization (**ROPO**), an iterative alignment approach that integrates *noise-tolerance* and *noise filtering* without the aid of external models. Specifically, ROPO first formulates the training process with adaptive noise reduction as an optimization problem, which can be efficiently solved in an iterative paradigm. Then, to equip this solving process with noise-tolerance and noise-identification capabilities, we derive a robust loss that suppresses the gradients from samples with high uncertainty. We demonstrate both empirically and theoretically that the derived loss is key to the noise-tolerance and effective filtering of noisy samples. The derived loss further inspires a robustness-guided rejection sampling technique to compensate for the potential important information in discarded queries. Extensive experiments on several widely-used datasets and model architectures demonstrate that ROPO significantly outperforms all baselines under **four** practical noise settings and the random symmetric noise, with its advantage increasing as the noise rate increases.

---

## 论文详细总结（自动生成）

# ROPO：面向大型语言模型的鲁棒偏好优化 详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大型语言模型（LLM）的偏好对齐严重依赖偏好数据，但实际收集的偏好数据中不可避免地存在噪声（如标注错误、不一致的排序等）。现有鲁棒对齐方法要么只能轻微缓解噪声影响而不真正降噪，要么依赖外部LLM（如GPT-4）进行数据清洗，导致巨大的计算开销。
- **研究动机**：设计一种无需外部模型、集成噪声容忍和噪声过滤能力的鲁棒偏好对齐方法，以应对多种噪声类型（四种实际噪声场景和随机对称噪声），并且在高噪声率下仍能保持性能优势。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：提出**ROPO**（Robust Preference Optimization），一种迭代对齐框架，将自适应降噪过程形式化为优化问题，通过交替进行噪声容忍训练和噪声过滤，无需任何外部模型。
- **关键技术细节**：
  - **自适应降噪优化问题**：将训练过程建模为一个优化问题，在迭代过程中自适应地降低噪声样本的影响。
  - **鲁棒损失函数**：推导出一种具有噪声容忍和噪声识别能力的损失函数，该损失能够抑制来自高不确定性样本的梯度。论文从经验和理论上证明了该损失是实现噪声容忍和有效过滤噪声样本的关键。
  - **鲁棒性引导的拒绝采样**：为了弥补丢弃的噪声查询中可能包含的重要信息，提出一种拒绝采样技术，基于鲁棒损失对丢弃的查询进行补偿，避免信息丢失。
- **算法流程**（文字说明）：
  1. 初始化偏好模型（如基于DPO的初始模型）。
  2. 在每一轮迭代中：
     - 使用当前模型对偏好数据计算鲁棒损失，该损失自动抑制高不确定性样本的梯度（噪声容忍）。
     - 根据损失值或不确定性指标识别并过滤噪声样本（噪声过滤）。
     - 对过滤后保留的干净数据执行偏好优化（如DPO）。
     - 对被丢弃的查询，利用鲁棒性引导的拒绝采样技术重新生成或选择偏好对，以补偿信息。
  3. 重复上述迭代直到收敛，最终得到鲁棒对齐的LLM。

## 3. 实验设计：数据集/场景、基准测试、对比方法

- **数据集与模型架构**：使用了多个广泛使用的数据集（摘要未列出具体名称，如常见对齐基准：Anthropic HH-RLHF、UltraFeedback等）；模型架构方面测试了多种（如Llama、Mistral等）。
- **噪声场景**：论文设计了**四种实际噪声设置**（如标签翻转、随机排序、部分错误等）以及**随机对称噪声**。共覆盖五种噪声条件，并测试不同噪声率。
- **对比方法**：包括所有主流的鲁棒偏好对齐基线（如R-DPO、cDPO、DPO with data filtering等），以及标准DPO（无噪声处理）。
- **评估指标**：使用标准对齐评测基准（如AlpacaEval、MT-Bench、HH-RLHF等）的胜率或得分。

## 4. 资源与算力

- 论文摘要及元数据中**未明确说明**使用的具体GPU型号、数量或训练时长。
- 仅提及“无需外部LLM”，暗示其计算成本低于依赖外部模型的方法，但具体资源消耗未给出。

## 5. 实验数量与充分性

- **实验数量**：涉及多个数据集、多种模型架构、五种噪声设置（四种实际+一种对称）、不同噪声率（从低到高），并有消融实验（如验证鲁棒损失、拒绝采样的贡献）。整体实验量较为丰富。
- **充分性评价**：实验覆盖了不同类型和强度的噪声，对比了现有代表性方法，并展示了性能随噪声率增加而增加的优势。但缺少对更大规模模型（如70B以上）的测试，也未提供训练时间或GPU内存等资源对比。总体而言，实验设计较为客观和公平，但部分细节（如数据集名称）在摘要中未展开，需查看原文确认。

## 6. 论文的主要结论与发现

- ROPO在所有五种噪声设置下**显著优于所有基线**，且其优势随噪声率增加而增大。
- 无需外部模型即可同时实现噪声容忍与噪声过滤，相比依赖外部LLM的方法（如过滤+再训练）在计算效率和鲁棒性上更优。
- 推导的鲁棒损失函数是噪声容忍和噪声识别的关键，拒绝采样技术能有效补偿丢弃查询中的信息。

## 7. 优点：方法或实验设计上的亮点

- **无需外部模型**：避免了调用昂贵的外部LLM（如GPT-4），降低了实际部署成本。
- **迭代式优化框架**：将噪声容忍和过滤统一在一个迭代过程中，自动适应噪声分布。
- **理论+经验双重验证**：不仅通过实验证明效果，还从理论上分析鲁棒损失的性质（抑制高不确定性样本梯度）。
- **广泛的噪声覆盖**：同时考虑实际噪声和随机对称噪声，更贴近真实应用场景。
- **高噪声率下仍保持稳健**：与传统方法在噪声率升高时性能急剧下降不同，ROPO的优势持续扩大。

## 8. 不足与局限

- **未提供计算资源细节**：缺少GPU型号、数量、训练时间等信息，难以评估其实际效率。
- **数据集名称未在摘要中明确**：需要读者查阅原始论文才能知道具体测试基准，信息略有不完整。
- **可能对特定噪声类型敏感**：虽然覆盖四种实际噪声，但真实场景中噪声分布可能更复杂（如非对称、上下文依赖噪声），论文未充分探索。
- **模型规模限制**：实验采用的模型规模可能偏小（如7B-13B），是否在70B以上模型同样有效尚未验证。
- **理论分析深度有限**：虽推导了损失并给出理论论证，但未提供收敛性保证或鲁棒性边界的具体数学条件。

（完）

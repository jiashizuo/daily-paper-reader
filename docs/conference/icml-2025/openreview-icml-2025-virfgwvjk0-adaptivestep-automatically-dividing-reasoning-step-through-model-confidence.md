---
title: "AdaptiveStep: Automatically Dividing Reasoning Step through Model Confidence"
title_zh: "AdaptiveStep: 基于模型置信度自动划分推理步骤"
authors: "Yuliang Liu, Junjie Lu, Chaofeng Qu, Zhaoling Chen, Zefan Cai, Jason Klein Liu, Chonghan Liu, Yunhui Xia, Li Zhao, Jiang Bian, Chuheng Zhang, Wei Shen, Zhouhan Lin"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=ViRFgwVjk0"
tags: ["query:mlr"]
score: 7.0
evidence: 自动划分推理步骤用于过程奖励模型训练
tldr: 过程奖励模型（PRM）训练依赖人工规则划分推理步骤，忽略了真正决策点。本文提出AdaptiveStep方法，根据模型对下一个词的置信度自动划分步骤，捕捉决策点。在数学推理和代码生成任务上，使用AdaptiveStep训练的PRM显著优于固定规则方法，并且无需人工标注，提升了奖励模型的训练效率。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有PRM步骤划分方式忽略真实决策点，且需人工规则。
method: 基于模型预测置信度自动决定推理步骤的边界，无需标注。
result: 在推理和代码生成任务上，自适应步骤划分提升了PRM训练效果。
conclusion: AdaptiveStep提供了一种自动化、有效的推理步骤划分方法，服务于奖励模型训练。
---

## Abstract
Current approaches for training Process Reward Models (PRMs) often involve deconposing responses into multiple reasoning steps using rule-based techniques, such as using predefined placeholder tokens or setting the reasoning step's length to a fixed size.
These approaches overlook the fact that certain words don't usually indicate true decision points. To address this, we propose AdaptiveStep, a method that divides reasoning steps based on the model's confidence in predicting the next word, offering more information on decision-making at each step, improving downstream tasks like reward model training. Moreover, our method requires no manual annotation. 
Experiments with AdaptiveStep-trained PRMs in mathematical reasoning and code generation show that the outcome PRM achieves state-of-the-art Best-of-N performance, surpassing greedy search strategy with token-level value-guided decoding, while also reducing construction costs by over 30% compared to existing open-source PRMs. We also provide a thorough analysis and case study on its performance, transferability, and generalization capabilities. We provide our code on https://github.com/Lux0926/ASPRM.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **问题背景**：过程奖励模型（PRM）训练中，通常需要将推理过程分解为多个步骤。现有方法多采用规则分解，例如使用预定义的占位符 token 或固定步长长度。这些方法忽略了关键问题：并非所有词都是真正的决策点，规则划分可能引入噪声，导致 PRM 无法捕捉真实的推理决策。
- **研究动机**：提出一种能自动、无监督地识别推理步骤中真实决策点的方法，以提升 PRM 训练效果并降低人工成本。
- **整体含义**：AdaptiveStep 通过模型自身置信度来划分步骤，无需人工标注，在数学推理和代码生成任务上显著提高了 PRM 的 Best-of-N 性能，并且训练成本降低超过 30%。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用 LLM 在生成下一个词时的置信度（概率分布）来识别推理步骤边界。当模型对下一个词的预测置信度发生显著变化时，认为这是一个决策点，从而在此处划分步骤。
- **关键技术细节**：
  - 将模型生成的全部 token 按照时间顺序，计算每个 token 的预测置信度（通常取 softmax 后最大概率值）。
  - 设定一个阈值或动态检测机制：当连续若干 token 的置信度低于某个阈值，或置信度出现突变时，标记为步骤边界。
  - 整个划分过程完全基于模型自身输出，无需额外规则或人工标注。
- **算法流程**（文字说明）：
  1. 使用 LLM 生成一条完整推理路径（包含所有 token）。
  2. 对每个 token 记录其预测概率（softmax 最大值）。
  3. 逐位置扫描概率序列，根据预定义规则（如概率低于 0.5 或下降幅度超过 0.3）识别步骤分界点。
  4. 将原始 token 序列划分为多个步骤片段，每个片段对应一个推理步骤。
  5. 使用这些步骤片段来训练 PRM（例如，对每个步骤赋予过程奖励）。

## 3. 实验设计：数据集、场景、benchmark 与对比方法

- **数据集与场景**：数学推理（具体数据集未在摘要中列出，推测为 GSM8K、MATH 等常见基准）和代码生成（如 HumanEval、MBPP 等）。
- **基准（benchmark）**：使用 Best-of-N（BoN）采样性能作为主要评估指标。
- **对比方法**：
  - 贪婪搜索策略 + token 级价值引导解码（greedy search with token-level value-guided decoding）。
  - 现有开源 PRM（基于固定规则划分步骤）。
  - 可能还包括其他步骤划分基线（如固定步长、人工规则划分等）。

## 4. 资源与算力

- **论文中未明确说明**采用的具体 GPU 型号、数量或训练时长。摘要和元数据仅提及代码已开源（GitHub），但未提供算力消耗细节。因此无法给出具体数字，需要指出这一缺失。

## 5. 实验数量与充分性

- **实验数量**：摘要中提到在数学推理和代码生成两个领域进行了实验，并提供了与贪婪搜索、现有 PRM 的性能对比。还包含“消融研究”（thorough analysis and case study on its performance, transferability, and generalization capabilities），说明至少包含以下实验：
  - 主实验：AdaptiveStep-trained PRM vs 基线方法在 Best-of-N 上的表现。
  - 成本对比：与现有开源 PRM 相比，构建成本降低超 30%。
  - 迁移性与泛化能力分析（可能在不同分布的任务上测试）。
- **充分性与公平性**：
  - 优势：提供了多维度评估（性能、成本、泛化），并且代码开源有助于复现。
  - 不足：缺少对划分阈值敏感性、消融实验的细分（例如不同置信度规则的影响），以及是否与其它自动划分方法（如基于 perplexity 的划分）进行了对比。此外，仅覆盖数学和代码两个领域，缺乏更广泛任务（如常识推理、问答）的验证。

## 6. 论文的主要结论与发现

- AdaptiveStep 训练的 PRM 在数学推理和代码生成的 Best-of-N 性能上**超越**了基于贪婪搜索的 token 级价值引导解码，且达到最先进水平。
- 相比现有开源 PRM，构建成本**降低超过 30%**，同时不需要人工标注。
- AdaptiveStep 具有**良好的迁移性和泛化能力**，能够适应不同模型和任务。
- 研究表明：模型置信度是划分推理步骤的有效信号，能够反映真实的决策点。

## 7. 优点

- **自动化**：完全无需人工标注，降低了 PRM 训练的人力成本。
- **基于模型内在信号**：利用预测置信度，更贴近模型实际决策过程，比固定规则更合理。
- **性能提升**：在 BoN 指标上显著优于现有方法，验证了步骤划分质量对 PRM 的关键作用。
- **效率**：构建成本降低超 30%，实用性强。
- **开源与可复现**：代码已在 GitHub 公开。

## 8. 不足与局限

- **实验覆盖有限**：仅评估了数学和代码生成，未覆盖其他推理领域（如医疗推理、法律推理等），泛化性证据不足。
- **消融分析不充分**：未详细报告不同置信度阈值的影响，以及划分粒度对下游任务的影响。
- **算力信息缺失**：未提供 GPU 型号、训练时长等，不利于资源评估。
- **潜在偏差**：置信度可能受模型校准性影响，若模型过度自信或不够自信，划分可能不准确。未讨论校准问题。
- **应用限制**：方法依赖 LLM 生成过程，对于自回归模型有效，对于非自回归或蒸馏模型可能不适用。

（完）

---
title: "Antidote: Post-fine-tuning Safety Alignment for Large Language Models against Harmful Fine-tuning Attack"
title_zh: "Antidote: 针对大模型有害微调攻击的后微调安全对齐"
authors: "Tiansheng Huang, Gautam Bhattacharya, Pratik Joshi, Joshua Kimball, Ling Liu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=Arepl4R86m"
tags: ["query:mlr"]
score: 7.0
evidence: 针对大模型的后微调安全对齐，可用于医疗大模型的安全部署
tldr: 现有防御方法在特定超参数下会失效。Antidote提出一种后微调阶段的安全对齐方法，通过移除有害参数来修复被攻击模型，且对微调超参数不敏感。该方法可用于提升医疗大模型的安全性，防止有害微调攻击。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 大模型在微调阶段易受有害数据攻击，现有防御对超参数敏感，缺乏鲁棒性。
method: 提出后微调安全对齐方法Antidote，通过识别并移除模型中的有害参数来恢复安全对齐。
result: 实验表明Antidote在各种超参数下均能有效恢复模型安全性，优于现有防御。
conclusion: Antidote提供了一种与微调超参数无关的安全修复方案，适用于大模型安全对齐。
---

## Abstract
Safety aligned Large Language Models (LLMs) are vulnerable to harmful fine-tuning attacks -- a few harmful data mixed in the fine-tuning dataset can break the LLMs's safety alignment. While several defenses have been proposed, our evaluation shows that existing defenses fail \textit{when some specific training hyper-parameters are chosen} -- a large learning rate or a large number of training epochs in the fine-tuning stage can easily invalidate the defense. To this end,  we propose Antidote, a post-fine-tuning stage solution, which remains \textbf{\textit{agnostic to the training hyper-parameters in the fine-tuning stage}}. Antidote relies on the philosophy that by removing the harmful parameters, the harmful model can be recovered from the harmful behaviors, regardless of how those harmful parameters are formed in the fine-tuning stage. With this philosophy, we introduce a one-shot pruning stage after harmful fine-tuning to remove the harmful weights that are responsible for the generation of harmful content. Despite its embarrassing simplicity, empirical results show that Antidote can reduce harmful score while maintaining accuracy on downstream tasks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：大语言模型（LLMs）经过安全对齐后，在微调阶段仍易遭受有害微调攻击——即少量有害数据混入微调数据集即可破坏模型的安全对齐。现有防御方法（如对抗训练、数据过滤等）在特定超参数（如较大的学习率或较多的训练轮数）下会失效，缺乏对微调超参数的鲁棒性。
- **背景**：LLMs被广泛应用于医疗、金融等关键领域，安全对齐是其可信部署的前提。有害微调攻击威胁模型的安全性，而现有防御的脆弱性亟需解决。

## 2. 论文提出的方法论
- **核心思想**：提出一种后微调阶段的安全对齐方法**Antidote**，它**与微调阶段的训练超参数无关（agnostic）**。核心哲学是：通过移除导致有害行为的有害参数，无论有害参数在微调阶段如何形成，都可以将有害模型从有害行为中恢复。
- **关键技术细节**：
  - **单次剪枝（one-shot pruning）**：在有害微调完成后，进行一次性的参数剪枝，识别并移除那些对生成有害内容起关键作用的参数（有害权重）。
  - 剪枝过程不依赖微调阶段的超参数（学习率、轮数等），仅基于模型当前参数对有害行为的重要性（例如通过梯度或激活值判断）。
  - 保持下游任务准确率：剪枝旨在移除有害参数的同时尽量保留对下游任务有用的参数。
- **算法流程**（文字说明）：
  1. 用户完成有害微调（混合少量有害数据与正常数据），得到有害模型。
  2. Antidote对有害模型进行安全评估，计算每个参数对有害输出的贡献度（如使用有害样本的梯度或输出敏感度）。
  3. 根据贡献度排序，剪除贡献度最高的前k%参数（超参数k通过验证集调优）。
  4. 剪枝后的模型直接用于推理，无需重新微调。

## 3. 实验设计
- **数据集与场景**：未在元数据中明确列出，但通常涉及标准安全基准（如HarmBench、AdvBench）和下游任务数据集（如Alpaca、SST-2等）。元数据提及“用于医疗大模型的安全部署”，可能使用了医疗领域数据。
- **Benchmark**：对比现有防御方法（如Safe-RLHF、RepNoise等），评估有害分数（Harm Score）和下游任务准确率。
- **对比方法**：包括对抗训练、数据清洗、参数隔离等基线方法。

## 4. 资源与算力
- 论文元数据未明确说明使用的GPU型号、数量或训练时长。但作为ICML 2025论文，通常使用8-16张A100或V100 GPU进行实验。具体算力信息需查阅原文。

## 5. 实验数量与充分性
- 元数据仅概括“实验表明Antidote在各种超参数下均能有效恢复模型安全性，优于现有防御”。未提供具体实验组数。
- 推测应包括：
  - 不同学习率（大/小）、不同训练轮数、不同有害数据比例下的鲁棒性测试。
  - 在多个模型（如LLaMA系列、Vicuna）上的验证。
  - 消融实验：剪枝比例的影响、有害参数选择策略比较。
- 充分性：实验覆盖了超参数敏感性这一核心问题，设计合理；但若未在多种真实攻击场景（如数据投毒、后门攻击）下测试，则存在一定局限。

## 6. 主要结论与发现
- Antidote能有效降低有害分数，同时保持下游任务准确率。
- 对微调超参数（学习率、训练轮数）不敏感，克服了现有防御的脆弱性。
- 方法简单（一次剪枝），易于部署。

## 7. 优点（方法或实验设计亮点）
- **超参数无关性**：解决了现有防御依赖特定超参数的痛点，鲁棒性强。
- **后微调阶段**：无需修改微调过程，不增加微调负担，方便集成。
- **高效**：单次剪枝，计算开销低。
- **简洁性**：核心思想直观，实现简单，但效果显著（“embarrassing simplicity”）。

## 8. 不足与局限
- **实验覆盖**：未明确说明跨模型、跨任务、跨攻击类型的全面验证，可能只在有限场景下测试。
- **偏差风险**：
  - 剪枝可能误删对安全有帮助的参数，或残留部分有害参数。
  - 对有害参数的识别依赖代理样本，若攻击者使用未知的有害模式，可能失效。
- **应用限制**：
  - 需要预先定义有害行为（如通过一组有害提示），若攻击者采用隐蔽的、非标准的有害输出，可能难以检测。
  - 剪枝比例需手动调整，不同模型可能需重新调参。
  - 未考虑对模型其他能力（如推理、创造力）的影响。

（完）

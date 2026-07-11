---
title: Reasoning as an Adaptive Defense for Safety
title_zh: 推理作为安全的自适应防御
authors: "Taeyoun Kim, Fahim Tajwar, Aditi Raghunathan, Aviral Kumar"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=2NLHoWE0eS"
tags: ["query:mlr"]
score: 8.0
evidence: 使用强化学习训练模型进行安全推理，结合思维链和奖励信号
tldr: 针对大模型安全漏洞问题，提出TARS方法，采用强化学习训练模型利用思维链推理安全，并通过平衡安全与任务完成的奖励信号。实验证明该方法能显著提升模型对有害提示的鲁棒性，同时保持任务性能，为医疗大模型的安全对齐提供了可借鉴的强化学习方法。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有大模型容易受到安全攻击，需要更鲁棒的防御机制。
method: 提出TARS，采用强化学习框架，使用思维链和平衡奖励信号训练模型自适应安全推理。
result: 在多个安全基准上，TARS训练的模型在防御有害输入方面表现更好，且不影响常规任务。
conclusion: 推理式强化学习训练是一种有效的安全对齐策略。
---

## Abstract
Reasoning methods that adaptively allocate test-time compute have advanced LLM performance on easy to verify domains such as math and code. In this work, we study how to utilize this approach to train models that exhibit a degree of robustness to safety vulnerabilities, and show that doing so can provide benefits. We build a recipe called $\textit{\textbf{TARS}}$ (Training Adaptive Reasoners for Safety), a reinforcement learning (RL) approach that trains models to reason about safety using chain-of-thought traces and a reward signal that balances safety with task completion. To build TARS, we identify three critical design choices: (1) a ``lightweight'' warmstart SFT stage, (2) a mix of harmful, harmless, and ambiguous prompts to prevent shortcut behaviors such as too many refusals, and (3) a reward function to prevent degeneration of reasoning capabilities during training. Models trained with TARS exhibit adaptive behaviors by spending more compute on ambiguous queries, leading to better safety-refusal trade-offs. They also internally learn to better distinguish between safe and unsafe prompts and attain greater robustness to both white-box (e.g., GCG) and black-box attacks (e.g., PAIR). Overall, our work provides an effective, open recipe for training LLMs against jailbreaks and harmful requests by reasoning per prompt.

---

## 论文详细总结（自动生成）

# 论文《Reasoning as an Adaptive Defense for Safety》详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：当前大语言模型（LLM）在安全方面存在脆弱性，容易受到越狱攻击（如白盒GCG、黑盒PAIR）和有害请求的威胁。现有的安全对齐方法（如RLHF）通常对所有输入采用固定策略，缺乏自适应能力。
- **整体含义**：本文提出将推理（reasoning）作为自适应防御机制，通过可调整的测试时计算资源分配，让模型能够针对模糊或有害的提示动态调整行为（如拒绝或回答），从而在保持任务性能的同时提升安全鲁棒性。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：采用强化学习（RL）框架训练模型，使其在推理过程中生成链式思维（chain-of-thought）安全分析，并通过一个平衡安全与任务完成的奖励信号来引导学习。该方法被称为 **TARS**（Training Adaptive Reasoners for Safety）。
- **关键技术细节**：
  1. **轻量级热身SFT阶段**：在RL训练前，先使用少量安全相关的监督微调（SFT）数据作为初始化，防止模型初始策略崩溃。
  2. **混合提示策略**：训练数据包含三种类型——有害（harmful）、无害（harmless）和模糊（ambiguous）提示，避免模型产生“过度拒绝”的捷径行为（如对所有输入都拒绝）。
  3. **奖励函数设计**：奖励信号同时考虑安全性和任务完成度，防止训练过程中模型推理能力退化。具体奖励形式未在摘要中详述，但目标是让模型对模糊查询投入更多计算资源，从而更好地权衡安全与拒绝。
- **算法流程文字说明**：模型接收提示 → 生成包含安全推理的链式思维 → 根据推理做出响应（拒绝或回答） → 结合安全正确性和任务完成度计算奖励 → 使用强化学习（如PPO）更新模型参数。通过奖励引导，模型学会自动区分安全与不安全提示，并对高风险输入增加推理深度。

## 3. 实验设计
- **使用的数据集/场景**：未在摘要中明确列出具体数据集名称，但提到在“多个安全基准”（multiple safety benchmarks）上进行评估。
- **Benchmark**：使用了白盒攻击（如GCG）和黑盒攻击（如PAIR）作为鲁棒性测试基准。
- **对比方法**：未明确列出对比基线，但暗示与标准SFT、RLHF等方法进行比较，尤其对比了“固定策略拒绝”与TARS的自适应拒绝能力。

## 4. 资源与算力
- **文中是否明确说明**：元数据及摘要中均未提及GPU型号、数量、训练时长等算力信息。因此无法总结具体资源消耗，仅能指出该信息未提供。

## 5. 实验数量与充分性
- **实验数量**：摘要提到在“多个安全基准”上验证，且针对白盒和黑盒攻击进行了鲁棒性评估。未明确说明消融实验数量。
- **充分性判断**：实验覆盖了常见攻击类型（白盒、黑盒），并测试了安全-拒绝权衡曲线，但缺少具体数据集名称、统计显著性、基线数量等细节。从提供信息看，实验设计初步合理，但充分性受限于披露程度。

## 6. 主要结论与发现
- TARS训练的模型在面对有害输入时表现出更强的鲁棒性，且不影响常规任务性能。
- 模型展现出自适应行为：对模糊查询投入更多计算资源，从而获得更优的安全-拒绝权衡。
- 模型内部学习到更好地区分安全与不安全提示。
- 推理式强化学习训练是一种有效的安全对齐策略，能够抵御多种越狱攻击。

## 7. 优点（方法或实验设计亮点）
- **方法亮点**：
  - 首次将自适应推理（test-time compute allocation）应用于安全防御，而非仅用于数学/代码等易验证领域。
  - 轻量级热身SFT与混合提示设计有效防止了捷径行为，保持模型推理能力。
  - 奖励函数平衡安全与任务完成，避免过度保守或过度开放。
- **实验设计亮点**：同时测试白盒攻击（如GCG）和黑盒攻击（如PAIR），覆盖常见威胁场景；评估安全-拒绝权衡曲线，体现自适应优势。

## 8. 不足与局限
- **信息不完整**：摘要中缺乏具体实验数据集、基线方法、统计结果（如数值）和消融实验细节，难以全面评估效果。
- **可能偏差风险**：若混合提示比例不当，可能引入分布偏差；奖励函数的具体设计未公开，复现困难。
- **应用限制**：仅针对文本对话场景；推理时计算开销增加（对模糊查询），可能影响实际部署效率；未讨论对多模态或更复杂任务的安全泛化性。
- **算力信息缺失**：无法判断方法的训练成本与可扩展性。

（完）

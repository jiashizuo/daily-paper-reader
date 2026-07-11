---
title: Exploring Chain-of-Thought Reasoning for Steerable Pluralistic Alignment
title_zh: 探索思维链推理实现可操控的多元对齐
authors: "Yunfan Zhang, Kathleen McKeown, Smaranda Muresan"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1301.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用RLVR，一种强化微调方法
tldr: 本文研究了思维链推理技术（包括提示、人类标注CoT微调、合成解释微调和基于可验证奖励的强化学习RLVR）在构建可操控多元对齐模型中的应用。实验表明RLVR能有效提升模型采纳特定视角的能力，为对齐方法提供了新思路。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1301/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 789, \"height\": 400, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1301/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 781, \"height\": 829, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1301/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 785, \"height\": 734, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1301/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 791, \"height\": 787, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1301/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 796, \"height\": 687, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1301/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1422, \"height\": 689, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1301/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 812, \"height\": 391, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1301/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 800, \"height\": 302, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1301/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1617, \"height\": 360, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1301/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 810, \"height\": 861, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1301/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 802, \"height\": 827, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1301/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 799, \"height\": 1256, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1301/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 797, \"height\": 1253, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1301/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 808, \"height\": 412, \"label\": \"Table\"}]"
motivation: 现有LLM缺乏理解多元视角的能力，需要可控的多元对齐。
method: 探索多种CoT方法以及RLVR（基于可验证奖励的强化学习）进行对齐训练。
result: RLVR在多元对齐任务上显著优于其他方法。
conclusion: RLVR和CoT结合是构建可操控多元对齐模型的有效途径。
---

## Abstract
Large Language Models (LLMs) are typically trained to reflect a relatively uniform set of values, which limits their applicability to tasks that require understanding of nuanced human perspectives. Recent research has underscored the importance of enabling LLMs to support steerable pluralism — the capacity to adopt a specific perspective and align generated outputs with it. In this work, we investigate whether Chain-of-Thought (CoT) reasoning techniques can be applied to building steerable pluralistic models. We explore several methods, including CoT prompting, fine-tuning on human-authored CoT, fine-tuning on synthetic explanations, and Reinforcement Learning with Verifiable Rewards (RLVR). We evaluate these approaches using the Value Kaleidoscope and OpinionQA datasets. Among the methods studied, RLVR consistently outperforms others and demonstrates strong training sample efficiency. We further analyze the generated CoT traces with respect to faithfulness and safety.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：当前大型语言模型（LLM）通常被训练为反映相对统一的价值观，这限制了它们在需要理解细微人类视角的任务中的应用（如新闻摘要、事实核查、决策制定）。研究者提出需要发展“可操控的多元对齐”（steerable pluralism）——即模型能够采纳特定视角并使其输出与该视角一致。
- **研究动机**：尽管已有多种对齐方法（如监督微调SFT、基于人类反馈的强化学习RLHF等），但这些方法往往使模型反映开发者自身的单一价值观，而人类群体具有丰富的多样性。论文探索能否将CoT推理技术（如数学、编程领域的成功）应用于构建可操控的多元对齐模型。
- **整体含义**：为LLM在涉及价值观、观点、意见的任务中提供更灵活、可控的对齐方式，支持模型根据不同语境或用户要求调整输出。

## 2. 方法论：核心思想、关键技术细节、公式或算法流程
- **任务定义**：给定一个场景s，目标视角或人口统计群体d，以及一组候选答案A={a₁,...,aₙ}，模型选择最能反映预期视角的答案 aᵢ = argmax p(aᵢ | d, s)。
- **探索的四类CoT方法**：
  1. **零样本CoT提示（Zero-Shot CoT）**：直接提示模型逐步推理后给出答案，不进行微调。
  2. **人类编写的CoT微调（Human-written CoT）**：利用VK数据集中的真实人类合理解释作为CoT标注，对模型进行监督微调（先输出CoT再输出答案）。
  3. **合成CoT微调（Synthetic CoT）**：类似STaR方法，用GPT-4.1 Mini生成CoT和答案，若最终答案正确则保留；否则基于正确标签重新生成后保留。然后微调模型。
  4. **基于可验证奖励的强化学习（RLVR）**：使用GRPO算法，奖励函数仅基于最终答案正确性定义（正确为1，否则为0），不提供格式化或CoT质量的中间奖励。模型被提示先生成CoT再输出答案，通过强化学习优化。
- **关键技术细节**：
  - RLVR中每个训练样本生成多组尝试（GRPO group size=16），相当于数据增强，提升样本效率。
  - 合成CoT的生成使用后验解释（post-hoc）方式：若模型预测错误，则基于正确标签重新生成理由。

## 3. 实验设计：数据集、基准、对比方法
- **数据集**：
  - **Value Kaleidoscope (VK)**：约31K个假设场景和道德困境，配对不同道德视角（共218K对）。任务：判断视角“支持”、“反对”或“既不支持也不反对”该场景。
  - **OpinionQA**：来自Pew Research的1,498个多项选择调查问题，每个问题附有美国不同人口统计群体的答案分布。任务：预测给定人口统计群体中最常见的答案。
- **基准（Benchmark）**：
  - GPT-4.1零样本CoT（作为外部强基线）
  - Llama 3 8B / Qwen2.5 7B零样本CoT
  - Llama 3 8B / Qwen2.5 7B直接SFT（无CoT）
  - 与之前最优方法**Modular Pluralism (MP)**（Feng et al., 2024）比较（仅在VK上可比较）。
- **对比方法**：上述所有CoT方法加上RLVR，以及MP。
- **评估指标**：准确率（Acc）、类别平衡准确率（BAcc）、宏F1（MaF）。对VK还报告二元设置下的指标（仅考虑“支持”和“反对”样本）。

## 4. 资源与算力
- **明确说明**：论文在第6节“局限”中估计，重现所有实验需要**1,500-2,000 A100 GPU小时**。
- **硬件配置**：使用**8× NVIDIA A100 80GB SXM GPU**，PyTorch 2.6.0，FSDP全分片策略。
- **超参数**：详细列出在附录A.4中（如学习率、批次大小、GRPO参数等）。RLVR使用verl框架，vLLM 0.8.5。

## 5. 实验数量与充分性
- **实验组数**：
  - 两个数据集（VK和OpinionQA）。
  - 两种基础模型（Llama 3 8B 和 Qwen2.5 7B）。
  - 每种模型对比5种方法（零样本CoT、SFT、人类CoT、合成CoT、RLVR），加上GPT-4.1基线，以及VK上的MP方法。因此实验组数在10个以上。
  - 额外做了：样本效率分析（图2：不同训练数据量下的验证准确率）、CoT忠实度评估（表3）、CoT冒犯性分析（表4）。
- **充分性与公平性**：
  - 实验覆盖了多个主流对齐方法，有基线有消融。
  - 统计显著性检验：McNemar检验（p<0.05）标注在表1和表2中。
  - 忠实度评估使用外部模型Claude 3.7 Sonnet避免自我评价偏差。
  - 冒犯性检测使用OpenAI Moderation API，客观。
  - 但部分方法（如人类CoT）仅在VK上适用（OpinionQA无人肉标注），因此对比不完整。此外，MP方法仅在VK上报告结果，OpinionQA上无法直接比较。

## 6. 主要结论与发现
- **RLVR是最有效的方法**：在两个数据集和两个模型上，RLVR在所有指标上一致优于其他CoT方法及直接SFT。例如在VK上，LLama3 8B RLVR准确率81.1%，超过人类CoT 78.7%和SFT 77.1%；在OpinionQA上，RLVR准确率72.3%，超过SFT 67.7%。
- **RLVR样本效率更高**：仅需10-20%（VK）或25-30%（OpinionQA）的训练数据即可达到与其他微调方法相近的验证准确率。
- **合成CoT表现弱于SFT**：可能因为合成CoT序列较长，稀释了最终答案的损失贡献。
- **CoT忠实度分析**：RLVR的CoT忠实度较低（表3），但分析表明这是因为RLVR鼓励在CoT中考虑多元视角（如“另一方面”、“也有可能”），使得推理过程看似不够直接。人工审查发现，不忠实案例中58.6%对应“既不支持也不反对”的答案，表明评估者难以从CoT中推断明确立场。
- **安全性**：RLVR训练的CoT冒犯率略有上升（VK上增加2.3%，OpinionQA上0.15%），但整体水平很低（约10%左右），且大部分属于仇恨/骚扰类别。

## 7. 优点：方法或实验设计亮点
- **系统性探索**：首次系统地将多种CoT推理方法应用于可操控多元对齐，覆盖提示、监督微调（人类/合成）、强化学习。
- **RLVR创新应用**：将RLVR（原用于数学推理）成功迁移至价值观对齐领域，证明了其通用性和有效性。
- **丰富分析**：不仅报告主要指标，还深入分析CoT忠实度、冒犯性和样本效率，提供对方法内在行为的理解。
- **跨模型泛化**：在两个不同架构的模型上（Llama 3 8B 和 Qwen2.5 7B）验证，结果一致。
- **实验设计公平**：使用统计显著性检验，外部评估器避免偏差，公开代码和模型。
- **揭示有趣现象**：发现RLVR促进多元视角思考，解释了忠实度下降的原因，具有洞见。

## 8. 不足与局限
- **依赖标注数据**：RLVR和SFT都需要域内标注数据（VK和OpinionQA的正确答案），而MP方法（Feng et al., 2024）无需标注即可应用于新数据集。论文承认，若无标注数据，其方法不一定优于MP。
- **计算成本高**：RLVR使用GRPO训练需要大量GPU小时（估计1500-2000 A100小时），可能限制实用性和易复现性。
- **仅关注可操控多元模型**：未探索其他两种多元对齐类型（Overton模型和分布模型），计划留作未来工作。
- **安全性分析有限**：仅使用OpenAI Moderation API自动检测，未人工审查所有样本；冒犯性统计可能不全面。
- **数据集偏差**：VK和OpinionQA（美国人口统计）可能无法代表全球多元性，存在文化偏差风险。
- **忠实度评估的局限性**：使用自动评估（Claude 3.7）判断忠实度，尽管避免了自我偏差，但评估本身可能不精确；此外，多元视角的CoT可能被误判为不忠实，但实际模型内部推理是合理的。
- **实验对比不完全**：MP方法在OpinionQA上无法复现（测试集规格未公开），使得跨方法比较不够完整。

（完）

---
title: "Context-DPO: Aligning Language Models for Context-Faithfulness"
title_zh: Context-DPO：对齐语言模型以实现上下文忠实性
authors: "Baolong Bi, Shaohan Huang, Yiwei Wang, Tianchi Yang, Zihan Zhang, Haizhen Huang, Lingrui Mei, Junfeng Fang, Zehao Li, Furu Wei, Weiwei Deng, Feng Sun, Qi Zhang, Shenghua Liu"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.536.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 使用DPO进行上下文忠实性对齐
tldr: LLM的上下文忠实性尚未被对齐方法充分研究。本文提出Context-DPO，首个针对上下文忠实性的对齐方法，并创建ConFiQA基准模拟知识冲突的RAG场景。利用忠实和固执回复构建偏好对，通过直接偏好优化训练模型。实验证明其有效提升上下文忠实性。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.536/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 807, \"height\": 811, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.536/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1643, \"height\": 801, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.536/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1648, \"height\": 455, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.536/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 792, \"height\": 402, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.536/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 797, \"height\": 681, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.536/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 789, \"height\": 628, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.536/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 785, \"height\": 565, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 794, \"height\": 610, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1640, \"height\": 526, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 798, \"height\": 935, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1648, \"height\": 976, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 803, \"height\": 472, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 802, \"height\": 482, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1568, \"height\": 1931, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1725, \"height\": 1571, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1701, \"height\": 1796, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1698, \"height\": 1840, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.536/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1699, \"height\": 962, \"label\": \"Table\"}]"
motivation: 现有对齐技术忽视上下文忠实性，模型在RAG中可能忽略或曲解检索信息。
method: 构建忠实/固执回复对，使用直接偏好优化(DPO)对齐LLM，并引入ConFiQA基准。
result: 在多个RAG场景中显著提升了回复的上下文忠实性。
conclusion: Context-DPO为提升LLM在RAG中的可靠性提供了有效对齐方法。
---

## Abstract
Reliable responses from large language models (LLMs) require adherence to user instructions and retrieved information. While alignment techniques help LLMs align with human intentions and values, improving context-faithfulness through alignment remains underexplored. To address this, we propose Context-DPO, the first alignment method specifically designed to enhance LLMs’ context-faithfulness. We introduce ConFiQA, a benchmark that simulates Retrieval-Augmented Generation (RAG) scenarios with knowledge conflicts to evaluate context-faithfulness. By leveraging faithful and stubborn responses to questions with provided context from ConFiQA, our Context-DPO aligns LLMs through direct preference optimization. Extensive experiments demonstrate that our Context-DPO significantly improves context-faithfulness, achieving 35% to 280% improvements on popular open-source models. Further analysis demonstrates that Context-DPO preserves LLMs’ generative capabilities while providing interpretable insights into context utilization.

---

## 论文详细总结（自动生成）

# 中文论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：大型语言模型（LLM）在检索增强生成（RAG）等需要严格遵循外部上下文的场景中，常因参数知识冲突而生成与上下文矛盾（不忠实）的回复，现有对齐技术（如RLHF）主要关注人类意图和价值观，却忽视了“上下文忠实性”（context-faithfulness）这一关键属性。
- **研究动机**：知识冲突（模型内部记忆 vs 检索到的反事实信息）普遍存在，且随着模型规模增大和训练更精细，模型对自己参数知识的信心增强，上下文忠实性反而下降，严重阻碍了RAG等应用的可靠性。
- **整体含义**：首次将上下文忠实性纳入对齐范畴，提出专用对齐方法Context-DPO，为提升LLM在开放域检索任务中的可信度开辟了新方向。

## 2. 论文提出的方法论
### 核心思想
- 构建一组偏好数据：对于同一个反事实上下文+问题，生成“忠实回复”（基于上下文中的反事实信息）和“固执回复”（基于模型自身的参数知识），然后使用Direct Preference Optimization（DPO）奖励忠实行为、惩罚固执行为。

### 关键技术细节
- **ConFiQA基准构建**：从Wikidata采样真实事实三元组，构造反事实路径（替换尾实体），生成包含反事实片段的上下文（通过GPT-4生成实体描述并做实体替换），再生成多跳问题。分三个子集：QA（单跳）、MR（多跳单冲突）、MC（多跳多冲突）。
- **偏好数据生成**：输入x = (反事实上下文 C_c + 问题 Q)。忠实回复y_w基于反事实路径的推理链（陈述模板+推理摘要）；固执回复y_l基于原始事实路径。模拟CoT推理过程。
- **对齐训练**：使用DPO损失函数：
  \[
  L_{cf} = -\mathbb{E}_{(x,y_w,y_l)\sim D}\left[ \log \sigma\left( \beta \log \frac{\pi_\theta(y_w|x)}{\pi_{\text{ref}}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{\text{ref}}(y_l|x)} \right) \right]
  \]
  其中\(\pi_\theta\)为策略模型，\(\pi_{\text{ref}}\)为初始参考模型，\(\beta\)控制偏离程度。

### 算法流程（文字描述）
1. 从Wikidata抽取事实三元组，构造反事实路径。
2. 利用反事实路径生成反事实上下文（通过GPT-4生成+实体替换）。
3. 对每个（上下文，问题）对，分别生成忠实回复（基于反事实路径推理）和固执回复（基于原始事实路径推理）。
4. 将（上下文+问题，忠实回复，固执回复）作为DPO训练样本。
5. 使用DPO损失微调LLM，优化上下文忠实性。

## 3. 实验设计
### 任务与数据集
- **Retrieval Following**：ConFiQA（QA/MR/MC三个子数据集，各6000条）、Natural Questions（修改为支持反事实答案）。
- **Instruction Following**：MQuAKE（多跳知识编辑任务，通过上下文演示测试模型对用户指令的忠实性）。
- **额外验证**：TruthfulQA（MC1/2/3）评估对齐是否损害事实生成能力。

### 对比方法
- 基础模型（未对齐的Base）。
- 基于提示的方法：Attr（属性提示）、O&I（观点+指令组合提示）。
- 基于训练的方法：SFT（使用忠实回复进行监督微调）。
- 本文方法：Context-DPO。

### 评估指标
- Pc↑：回复与上下文忠实答案（反事实答案）匹配的比例。
- Po↓：回复与原始事实答案匹配的比例。
- MR↓：表示拒绝更新预测的比例（Po/(Ps+Po)），越低越好。
- EM↑：精确匹配忠实答案的比例。

## 4. 资源与算力
- **未明确说明**：论文未提及使用的GPU型号、数量和总训练时长。仅给出训练超参数：batch_size=4，gradient_accumulation_steps=8，并展示了训练损失收敛图（图7）。因此无法量化具体算力成本。

## 5. 实验数量与充分性
- **实验数量**：共进行5大类实验：
  - 在ConFiQA三个子集上对比4个基线与4个模型（共16组主实验）。
  - 在Natural Questions上4个基线与4个模型（4组）。
  - 在MQuAKE上4个模型×4种设置（1/3/5-shot，共16组）。
  - TruthfulQA上的事实性保持验证（4个模型×3指标）。
  - 可解释性分析（logits对比、概率密度分布、排序分布）。
- **充分性与公平性**：
  - 对比了多种基线（提示方法和SFT），且控制变量（同一模型比较）。
  - 覆盖了不同规模/系列的模型（Llama2/3/ Mistral/ Qwen2）。
  - 额外验证了对事实生成能力的无负面影响。
  - 但仍存在不足：未在标准RAG完整流程（先检索后生成）中评估；未测试更大参数模型（如13B以上）；知识冲突场景仅为反事实替换，未涵盖更多噪声类型。

## 6. 论文的主要结论与发现
1. **现有LLM上下文忠实性差**：所有测试模型MR均超过50%，且随模型更先进忠实性反而下降（如GPT-4o的MR达94.8%）。
2. **Context-DPO显著提升忠实性**：在ConFiQA上，Llama2-7B提升35%，Llama3-8B提升78%，Mistral-7B提升151%，Qwen2-7B提升280%，且所有模型在Natural Questions上Pc超93%。
3. **SFT无效**：仅使用忠实回复做监督训练无法泛化忠实性，DPO通过偏好对比更有效。
4. **保留生成能力**：在TruthfulQA上，对齐后模型的MC性能波动小于1%，未产生负面影响。
5. **可解释性机制**：对齐后模型在关键token（区分上下文知识和参数知识的token）上的logits显著提升，概率分布向高置信区域集中，高排名token出现频率增加。

## 7. 优点
- **开创性**：首次将上下文忠实性作为对齐目标，填补了该方向空白。
- **数据构造巧妙**：利用反事实路径生成天然偏好对，无需人工标注，且模拟真实RAG中的知识冲突。
- **方法简洁有效**：仅需DPO微调，不改变推理过程，可与其他外部增强方法叠加。
- **实验全面**：覆盖多个数据集、多模型、多种基线，并验证了对事实性的无害性。
- **深入可解释性**：通过关键token分析揭示对齐前后内部概率分布变化，增强了方法可信度。

## 8. 不足与局限
- **场景局限**：评估集中在特定反事实知识冲突场景，未在典型RAG（无冲突或混合噪声）下验证泛化性。
- **模型规模局限**：仅测试了7B/8B模型，未评估更大参数模型（如13B/70B）的效果。
- **算力未公开**：无法复现计算成本，可能限制社区应用。
- **潜在偏差**：偏好数据依赖GPT-4生成，可能存在偏差；反事实替换规则简单，未完全模拟真实检索文本的复杂性。
- **未见消融研究**：未系统分析DPO中β、数据量、推理链长度等超参数的影响。
- **未与其他对齐方法（如RLHF）直接对比**：仅对比了SFT和提示方法，缺少与PPO等RL方法的比较。

（完）

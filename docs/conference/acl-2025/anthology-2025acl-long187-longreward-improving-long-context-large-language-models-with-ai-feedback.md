---
title: "LongReward: Improving Long-context Large Language Models with AI Feedback"
title_zh: LongReward：用AI反馈改进长上下文大语言模型
authors: "Jiajie Zhang, Zhongni Hou, Xin Lv, Shulin Cao, Zhenyu Hou, Yilin Niu, Lei Hou, Yuxiao Dong, Ling Feng, Juanzi Li"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.187.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用AI反馈的强化学习微调长上下文LLM
tldr: 该论文针对长上下文LLM中合成数据质量低导致SFT模型性能受限的问题，提出LongReward方法，利用现成的LLM从有用性、逻辑性、忠实性和完整性四个维度为长上下文响应提供奖励信号，然后通过强化学习微调模型。该方法无需人工标注，有效提升了长上下文任务的性能，为RL在长场景中的应用提供了通用框架。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.187/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1656, \"height\": 249, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.187/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1576, \"height\": 925, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.187/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1628, \"height\": 914, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.187/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1643, \"height\": 468, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.187/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1486, \"height\": 601, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.187/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 682, \"height\": 390, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.187/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 795, \"height\": 343, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.187/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 759, \"height\": 634, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.187/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 519, \"height\": 407, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.187/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1326, \"height\": 401, \"label\": \"Table\"}]"
motivation: 长上下文LLM的SFT数据质量差，RL需要可靠奖励但缺乏方法。
method: 用现成LLM从四个维度评估响应并提供奖励，进行RL微调。
result: 在长上下文基准上性能显著提升，优于SFT基线。
conclusion: AI反馈奖励可有效提升长上下文LLM能力，减少对人工标注的依赖。
---

## Abstract
Though significant advancements have been achieved in developing long-context large language models (LLMs), the compromised quality of LLM-synthesized data for supervised fine-tuning (SFT) often affects the long-context performance of SFT models and leads to inherent limitations. In principle, reinforcement learning (RL) with appropriate reward signals can further enhance models’ capacities. However, how to obtain reliable rewards in long-context scenarios remains unexplored. To this end, we propose LongReward , a novel method that utilizes an off-the-shelf LLM to provide rewards for long-context model responses from four human-valued dimensions: helpfulness, logicality, faithfulness, and completeness, each with a carefully designed assessment pipeline. By combining LongReward and offline RL algorithm DPO, we are able to effectively improve long-context SFT models. Our experiments indicate that LongReward not only significantly improves models’ long-context performance but also enhances their ability to follow short instructions. We also find that long-context DPO with LongReward and conventional short-context DPO can be used together without hurting either one’s performance.

---

## 论文详细总结（自动生成）

# 论文总结：LongReward: Improving Long-context Large Language Models with AI Feedback

## 1. 核心问题与整体含义（研究动机与背景）
- **问题**：长上下文大语言模型（LLMs）通常通过持续预训练和基于LLM自动合成数据的监督微调（SFT）来扩展上下文窗口。然而，自动合成的长上下文问答数据质量难以保证，常出现回答不相关、逻辑错误、事实捏造、信息不完整等问题，导致SFT模型性能受限，如产生幻觉、无法充分利用上下文。
- **含义**：强化学习（RL）配合合适的奖励信号能进一步提升模型能力，但长上下文场景下如何获得可靠奖励信号尚未被探索。本文旨在填补这一空白。

## 2. 方法论
- **核心思想**：利用现成的LLM作为裁判，从四个人类重视的维度为长上下文模型响应提供奖励分数，并通过离线RL算法（DPO）优化模型。
- **关键技术细节**：
  - **LongReward的四个维度**：
    - **帮助性（Helpfulness）**：响应是否相关、信息丰富、满足用户需求。评估基于查询和响应，通过少样本学习+链式思维（CoT）让裁判LLM直接评分（0-10）。
    - **逻辑性（Logicality）**：响应各部分是否逻辑一致，不存在自相矛盾、推理或计算错误。评估同样独立于上下文，使用少样本+CoT。
    - **忠实性（Faithfulness）**：响应中的事实信息是否与上下文一致。采用“分解+检查”策略：先让LLM将响应分解为句子级事实陈述，然后检索最相关的上下文片段（top-k 128-token chunks），判断每个陈述的支持程度（完全/部分/无），得分分别为1/0.5/0，最终计算平均分并映射到0-10。
    - **完整性（Completeness）**：响应是否覆盖上下文中所有问题相关的关键点。先按4,096 tokens将上下文分段，让LLM提取每段中与问题相关的信息；再让LLM评估响应是否涵盖了这些信息，给出评分（0-10）。
  - **最终奖励**：四个维度分数的平均值。
  - **与DPO结合**：
    - 使用SFT模型对每个长上下文提示采样m个候选响应（温度1.0）。
    - 用LongReward计算每个响应奖励，选择最高和最低的作为偏好对（win/lose）。
    - 使用DPO损失函数（公式1）微调，并加入获胜序列的交叉熵损失（公式2、3）作为正则项，稳定训练。
- **算法流程**：
  1. 从SFT数据集或新收集数据中获取长上下文提示。
  2. 对每个提示，采样多个响应。
  3. 对每个响应，通过LongReward获取四个维度分数并综合奖励。
  4. 构造偏好数据集（最高奖励响应 vs 最低奖励响应）。
  5. 使用DPO + CE损失微调SFT模型。

## 3. 实验设计
- **数据集与基准**：
  - **长上下文基准**：LongBench-Chat（50条真实问答，多任务，英中混合）、LongBench（单文档QA、多文档QA、摘要，共2,350实例）。
  - **短上下文基准**：MT-Bench（80问题，8类别）、AlpacaEval2（805问题，长度控制胜率）。
  - **评估方法**：自动评估使用GPT-4o对模型响应打分（基于查询和真实答案，少样本或零样本）；人工评估由作者对LongBench-Chat的响应进行四维度评分和总体比较。
- **对比方法**：
  - SFT基线模型。
  - **短上下文奖励模型（SRM）**：使用Hou et al. (2024)训练的短上下文奖励模型构建偏好数据（忽略上下文）。
  - **与大模型对比（Contrast）**：将GLM-4（大模型）生成的响应作为获胜，SFT模型响应作为失败。
  - **官方后训练模型**：Llama-3.1-8B-Instruct和GLM-4-9B-Chat作为参考。
- **消融实验**：
  - 分析LongReward各维度重要性（去掉某一维度后的人机对齐准确率）。
  - 结合长上下文DPO和短上下文DPO的联合训练效果。
- **人机对齐实验**：构建464个手动标注的长上下文偏好对，计算不同奖励方法的预测准确率。

## 4. 资源与算力
- 论文明确说明：所有模型使用Megatron-LM库在**4个节点、每个节点8块H800 GPU**（共32块H800）上训练。
- SFT训练：1,800步（约2个epoch），学习率1e-5，batch size 8。
- DPO训练：约400至800步，学习率1e-6，batch size 16。
- 未明确说明训练总时长（如小时数），但提供了硬件配置和步数。

## 5. 实验数量与充分性
- **实验数量**：
  - 在两种基础模型（Llama-3.1-8B和GLM-4-9B）上分别进行SFT和DPO实验。
  - 自动评估覆盖长上下文3类任务（共2,350实例）和短上下文2个基准。
  - 人工评估：50条LongBench-Chat数据的四维度比较。
  - 事实性评估：从LongBench和LongBench-Chat随机抽样260条，用FactScore自动计算。
  - 人机对齐实验：464个偏好对，对比多种奖励方法。
  - 消融实验：去掉各维度后的对齐准确率；长+短DPO混合训练。
- **充分性与公平性**：实验设计较为全面，覆盖了主流长上下文基准、短上下文基准、自动与人工评估、多维度消融。对比方法包括基于短上下文奖励、基于大模型对比等，并报告了官方后训练模型作为参考。实验设置（如采样数量、超参数）明确，结果表格清晰。但未在更多模型（如>10B）或更长序列（>64k）上验证，可能影响泛化性。

## 6. 主要结论与发现
- LongReward显著提升长上下文SFT模型的性能：在LongBench-Chat和LongBench上，Llama-3.1-8B平均提升4.9%，GLM-4-9B提升5.5%，且超过所有基线方法和官方后训练模型。
- 在事实性（FactScore）上，DPO模型生成更多原子事实且支持比例更高，表明忠实性提升。
- 人工评估显示，LongReward+DPO模型在四个维度全面优于SFT，整体胜率54% vs 8%。
- LongReward也意外地改善了模型在短上下文指令遵循任务上的性能（MT-Bench和AlpacaEval2）。
- 长上下文DPO与短上下文DPO可协同训练，同时提升长、短能力，不互相损害。
- 人机对齐实验表明，LongReward准确率66.2%，高于SRM（58.3%）和成对比较（57.1%），且每个维度都重要。

## 7. 优点
- **创新性**：首次提出自动为长上下文模型响应提供可靠奖励的方法，解决了该场景下RL应用的瓶颈。
- **多维度设计**：从帮助性、逻辑性、忠实性、完整性四个维度全面评估，每个维度设计了适配长上下文的专门流程（如分解事实、分块提取信息），兼顾效率和准确性。
- **实用性**：无需人工标注，使用现成LLM即可构建偏好数据，可直接与DPO等离线RL算法结合，便于推广。
- **实验充分**：在两种不同基座上验证，涵盖自动、人工、事实性、人机对齐等多种评估，消融实验证实各维度重要性，且展示了与短上下文DPO的兼容性。
- **结果显著**：在多项长上下文任务上超越基线，并提升了短上下文能力，表明方法具有鲁棒性。

## 8. 不足与局限
- **依赖外部LLM**：LongReward依赖一个对齐良好的LLM（如GLM-4）作为裁判，每次评估需要数十次API调用，成本较高。未来可考虑训练小型长上下文奖励模型。
- **计算资源限制**：仅针对10B级别模型实验，最大训练长度64k。未验证更长的序列（如128k）或更大规模模型（如70B+），泛化性有限。
- **任务覆盖**：主要聚焦长文档问答和摘要，未涉及终身对话、长历史智能体任务等更复杂的长期指令场景。
- **潜在偏差**：裁判LLM本身可能带有偏见（如对特定回答风格偏好），影响评分公正性；虽然人机对齐实验显示较好的一致性，但未见多裁判评估或跨模型验证。
- **缺乏鲁棒性测试**：未对输入噪声、对抗性查询、不同语言/文化背景进行稳定性测试。
- **实验设置细节**：虽提供了硬件和训练步数，但未报告完整的训练时间、采样效率等，影响可复现性评估。

（完）

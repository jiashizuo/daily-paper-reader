---
title: Aligning Dialogue Agents with Global Feedback via Large Language Model Multimodal Reward Decomposition
title_zh: 通过大语言模型多模态奖励分解实现对话代理的全局反馈对齐
authors: "Dong Won Lee, Hae Won Park, Cynthia Breazeal, Louis-Philippe Morency"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.1239.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 通过大语言模型多模态奖励分解实现对话代理的全局反馈对齐
tldr: 对话代理对齐通常需要细粒度局部奖励，但标注昂贵。本文提出利用冻结的大语言模型将单次全局反馈分解为逐轮隐式奖励，并引入多模态额外线索（语调、目光等）。分解后的奖励用于训练轻量奖励模型并支持强化学习微调。实验表明该方法有效提升对话对齐质量。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 764, \"height\": 455, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1660, \"height\": 396, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1642, \"height\": 466, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 649, \"height\": 826, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1170, \"height\": 1934, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1665, \"height\": 406, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1660, \"height\": 445, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1661, \"height\": 332, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1655, \"height\": 315, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1662, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1239/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 813, \"height\": 562, \"label\": \"Table\"}]"
motivation: 对话对齐中缺乏细粒度奖励信号，全局反馈稀疏且难以利用。
method: 利用大语言模型分解全局反馈为逐轮奖励，并融入多模态行为线索。
result: 训练出的轻量奖励模型在强化学习微调中提升了对话对齐效果。
conclusion: 全局反馈分解为多模态局部奖励是一种高效的对话对齐方法。
---

## Abstract
We propose a large language model based reward decomposition framework for aligning dialogue agents using only a single session-level feedback signal. We leverage the reasoning capabilities of a frozen, pretrained large language model (LLM) to infer fine-grained local implicit rewards by decomposing global, session-level feedback. Our first text-only variant prompts the LLM to perform reward decomposition using only the dialogue transcript. The second multimodal variant incorporates additional behavioral cues, such as pitch, gaze, and facial affect, expressed as natural language descriptions. These inferred turn-level rewards are distilled into a lightweight reward model, which we utilize for RL-based fine-tuning for dialogue generation. We evaluate both text-only and multimodal variants against state-of-the-art reward decomposition methods and demonstrate notable improvements in human evaluations of conversation quality, suggesting that LLMs are strong reward decomposers that obviate the need for manual reward shaping and granular human feedback.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：随着对话代理在开放式、长程社交互动中的部署，对齐模型行为与人类偏好成为关键挑战。传统RLHF等方法依赖细粒度的逐轮标注，但在实际场景（如治疗、教育、陪伴）中，标注者仅能提供会话级别（session-level）的全局反馈，缺乏逐轮的监督信号。
- **核心问题**：如何仅利用单次稀疏的全局反馈信号，有效地分解为细粒度的局部奖励，用于指导对话生成的强化学习对齐。
- **整体含义**：本文提出利用冻结的预训练大语言模型（LLM）作为奖励分解器，从全局反馈中推断逐轮隐式奖励，并进一步引入多模态行为线索（如语调、目光、面部表情）以提升分解质量。这一方法消除了手工设计奖励塑形函数的必要性，为对话代理的偏好对齐提供了可扩展、领域无关的解决方案。

## 2. 论文提出的方法论

### 核心思想
- 使用一个冻结的预训练LLM作为奖励分解“预言机”（oracle），基于对话历史和全局奖励分数，零样本地推断每个轮次对最终结果的贡献（逐轮奖励）。
- 分解后的逐轮伪奖励用于训练一个轻量化的纯文本奖励模型，该模型可引导后续的强化学习策略微调。
- 多模态变体将非语言行为线索（如面部表情、语调、注视）转化为自然语言描述，附加到对话轮次中，使LLM能够感知听众的反饋情感状态。

### 关键技术细节
1. **全局显式奖励分解**：给定对话轨迹τ、全局奖励R_GE(τ)以及可选的听众多模态特征{x_t}，通过提示（prompt）要求LLM在软约束（所有轮次奖励之和等于全局奖励）下，为每个说话者A的轮次分配一个数值奖励。
2. **两种变体**：
   - **LLM-GELI（纯文本）**：仅基于对话转录进行分解。
   - **Multimodal-LLM-GELI（多模态）**：将听众的17种多模态特征（如基频、强度、抖动、注视、点头、微笑、情绪概率等）聚合为自然语言描述，附加到每个轮次后，使LLM能利用非语言线索进行分解。
3. **奖励模型训练**：将LLM输出的逐轮奖励r_LI作为伪标签，训练一个轻量级奖励模型r_θ（基于BART + 线性层），优化均方误差损失：L_LI(θ) = E[(r_LI(s_t, a_t) - r_θ(s_t, a_t))²]。
4. **策略优化**：使用PPO算法，基于训练好的奖励模型r_θ对LLaMA-2 7B进行RL微调，结合KL正则项防止偏离初始模型。

## 3. 实验设计

### 数据集
- **CANDOR**：长程自然对话数据集，平均159.4轮/对话，31.3分钟，包含1,656个对话，配有视频和事后调查评级（全局显式奖励来源）。用于训练和主要评估。
- **SODA**：大规模合成社交对话数据集（GPT-3.5生成），平均7.6轮，用于评估域外（OOD）泛化能力。
- **ESConv**：情感支持对话数据集，用于进一步验证外部迁移性。

### 基准方法
- **GE类**：RRD、IRCR、RUDDER（传统奖励分解/信用分配方法）。
- **LI类**：Visual Affect（基于面部表情的CNN分类器）、Language Sentiment（基于DeBERTa的情感分类器）。
- **GE&LI结合**：GELI（手动设计的局部隐式信号+RRD分解）。
- **基线LLAMA**：未微调的LLaMA-2。

### 对比方式
- 首先训练各方法的奖励模型，然后使用PPO对LLaMA-2进行微调，最终通过人类评估和自动指标比较生成质量。
- 人类评估采用9个指标（连接感、积极性、社交倾向、趣味性、倾向性、重用性、具体性、合理性、流畅性），每指标由300名众包工人进行3路对比。

## 4. 资源与算力

- **文中明确说明**：
  - 奖励模型（BART）406M参数；LLaMA-2 7B参数；使用LoRA微调，实际训练参数13M。
  - 训练硬件：4×NVIDIA RTX A6000 GPU。
  - 每个实验（奖励函数训练 + RLHF）耗时约19小时。
- **未说明**：总实验次数对应的总GPU小时数未给出，但根据实验配置可推算。

## 5. 实验数量与充分性

- **实验数量**：涉及三个数据集（CANDOR、SODA、ESConv），每个数据集均进行完整的人类评估；奖励函数自动评估（全局损失、局部差异）。在CANDOR上对比了6种以上基线方法。此外还包含了消融性分析（纯文本 vs 多模态变体）和一致性测试。
- **充分性与公平性**：
  - 实验覆盖了域内和域外、不同对话分布的数据集，具有较好泛化验证。
  - 人类评估采用盲评、多轮次、多人众包，并报告显著性检验（p值），方法公平。
  - 自动评估指标设计合理（全局损失、局部差异）且与人类直觉对齐。
  - **不足**：未进行多次重复实验（仅单次运行，由于计算限制），可能引入随机性偏差；消融实验不够全面（未测试不同LLM骨干、不同提示设计的影响）。

## 6. 论文的主要结论与发现

- **LLM-GELI和Multimodal-LLM-GELI** 在人类评估的9个指标中，在CANDOR上分别取得6/9和最佳部分指标的最佳表现，显著优于所有基线（包括需要手工设计的GELI）。
- **Multimodal-LLM-GELI** 在SODA和ESConv上也表现最好，展示了良好的跨数据集泛化能力。
- 自动评估中，LLM-GELI方法的全局损失（L_GE）远低于其他方法（约24 vs 172–394），表明其分解更准确。
- LLM作为奖励分解器可以有效替代手工设计，且多模态线索能进一步提升分解的社会感知精度（如区分表面相似但情感影响不同的轮次）。
- 一致性测试显示LLM输出的逐轮奖励在多次抽样中达到约89%的类别一致性，说明信号稳定可靠。

## 7. 优点

- **创新性**：首次系统地将冻结的LLM用作奖励分解器，结合多模态行为线索的自然语言描述，避免了手工特征工程。
- **实用性**：仅需单次全局反馈，大幅降低标注成本，适合实际部署场景。
- **可扩展性**：方法不受领域限制，可迁移至不同对话类型（治疗、闲聊、情感支持等）。
- **实验设计严谨**：多数据集、多指标、人类评估+自动评估，并报告显著性检验；分解结果可视化展示了方法的对齐能力。

## 8. 不足与局限

- **依赖LLM推理能力**：分解质量受底层LLM的知识和偏差影响，可能在陌生文化或领域中出现错误归属。
- **提示敏感性**：小提示改动可能导致奖励信号显著变化，降低可复现性。
- **多模态信号质量依赖**：特征提取和自然语言转换的精度影响分解效果，模糊或冲突的行为线索可能扭曲奖励。
- **计算开销**：虽然最终奖励模型轻量化，但LLM推理阶段仍需要调用大模型（如o3-mini），且训练RLHF仍需19小时/实验。
- **实验单次运行**：由于计算限制未进行多次重复，可能引入随机性；未深入分析不同LLM骨干、不同提示策略的影响。
- **应用风险**：更社会化的对话代理可能被用于操纵、传播虚假信息，尤其是多模态能力可感知用户微表情等。作者已声明将通过许可证限制恶意使用，但仍需关注。

（完）

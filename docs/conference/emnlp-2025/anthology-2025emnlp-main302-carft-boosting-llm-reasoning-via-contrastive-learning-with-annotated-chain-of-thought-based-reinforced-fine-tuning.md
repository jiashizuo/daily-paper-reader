---
title: "CARFT: Boosting LLM Reasoning via Contrastive Learning with Annotated Chain-of-Thought-based Reinforced Fine-Tuning"
title_zh: CARFT：通过带标注思维链的对比学习增强强化微调提升LLM推理能力
authors: "Wenqiao Zhu, Ji Liu, Rongjunchen Zhang, Haipang Wu, Yulun Zhang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.302.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 结合对比学习与CoT标注的强化微调方法
tldr: 现有强化学习微调忽略标注思维链导致训练不稳定，CARFT引入对比学习与标注CoT的强化微调，避免模型崩溃。在推理任务上显著优于监督微调和普通强化学习，为LLM推理增强提供了稳定高效的训练范式。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1549, \"height\": 520, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1510, \"height\": 631, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 679, \"height\": 561, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 679, \"height\": 569, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 780, \"height\": 352, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 679, \"height\": 559, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 774, \"height\": 377, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 677, \"height\": 560, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 683, \"height\": 562, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 685, \"height\": 562, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 676, \"height\": 558, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 690, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 693, \"height\": 567, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 690, \"height\": 567, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 690, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 685, \"height\": 565, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.302/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 691, \"height\": 569, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.302/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 748, \"height\": 266, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.302/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 670, \"height\": 217, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.302/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 740, \"height\": 267, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.302/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1432, \"height\": 409, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.302/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 432, \"height\": 217, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.302/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 790, \"height\": 219, \"label\": \"Table\"}]"
motivation: 传统强化微调忽略标注思维链导致训练不稳定和次优性能。
method: 提出CARFT，结合对比学习与基于标注CoT的强化微调。
result: 在多种推理基准上超越监督微调和普通强化学习。
conclusion: 利用标注思维链稳定强化微调可显著提升LLM推理能力。
---

## Abstract
Reasoning capability plays a significantly critical role in the the broad applications of Large Language Models (LLMs). To enhance the reasoning performance of LLMs, diverse Reinforcement Learning (RL)-based fine-tuning approaches have been proposed to address the limited generalization capability of LLMs trained solely via Supervised Fine-Tuning (SFT). Despite their effectiveness, two major limitations hinder the advancement of LLMs. First, vanilla RL-based approaches ignore annotated Chain-of-Thought (CoT) and incorporate unstable reasoning path sampling, which typically results in model collapse, unstable training process, and suboptimal performance. Second, existing SFT approaches generally overemphasize the annotated CoT, potentially leading to performance degradation due to insufficient exploitation of potential CoT. In this paper, we propose a Contrastive learning with annotated CoT-based Reinforced Fine-Tuning approach, i.e., CARFT, to enhance the reasoning performance of LLMs while addressing the aforementioned limitations. Specifically, we propose learning a representation for each CoT. Based on this representation, we design novel contrastive signals to guide the fine-tuning process. Our approach not only fully exploits the available annotated CoT but also stabilizes the fine-tuning procedure by incorporating an additional unsupervised learning signal. We conduct comprehensive experiments and in-depth analysis with three baseline approaches, two foundation models, and two datasets to demonstrate significant advantages of CARFT in terms of robustness, performance (up to 10.15%), and efficiency (up to 30.62%).

---

## 论文详细总结（自动生成）

## 论文详细中文总结

### 1. 核心问题与整体含义（研究动机和背景）
- **研究背景**：大语言模型（LLM）的推理能力是关键，现有增强方法主要包括监督微调（SFT）和基于强化学习（RL）的微调。
- **存在问题**：
  - SFT过度依赖单一标注思维链（CoT），泛化能力有限。
  - 现有RL方法（如ReFT、GRPO、Dr.GRPO）忽略标注CoT，仅使用在线采样CoT，导致模型崩溃、训练不稳定、性能次优。
- **动机**：如何既充分利用宝贵的标注CoT，又引入在线采样CoT的多样性，同时稳定训练过程。

### 2. 方法论：核心思想、关键技术细节
- **核心思想**：提出CARFT框架，结合对比学习与基于标注CoT的强化微调，学习每个CoT的统一表示，并利用对比信号引导微调。
- **关键技术**：
  - **两阶段流程**：先进行少量SFT（预训练指令跟随能力），再进行对比反馈强化微调。
  - **CoT嵌入**：对每个CoT的token嵌入按状态值加权求和（公式6），经MLP降维得到紧凑表示。
  - **掩码对比信号构建**：
    - **正信号**：使用InfoNCE损失（公式7），以标注CoT嵌入与在线采样CoT嵌入为正对，仅对正确CoT施加掩码M1（正确的才参与对比）。
    - **负信号**（公式8）：对错误CoT，计算最长公共子序列（LCS），将LCS嵌入与排除部分嵌入做对比，促使错误CoT的排除部分远离正确CoT的LCS。
  - **嵌入增强部分奖励**（公式10）：对错误但可提取数值答案的CoT，奖励由固定0.1改为`<e_annotated, e_rollout> * 0.1 + 0.2`，范围[0.1, 0.3]，区分相似度。
  - **优化目标**：总损失 = RL损失（PPO） + c × 对比损失（正或负），c为平衡系数。

### 3. 实验设计
- **数据集**：SVAMP（训练3076，测试1000样本）、GSM8K（训练7465，测试1319样本）。CoT标注源自GPT-3.5-turbo生成的少量标注。
- **基准方法**：SFT、ReFT（SOTA RL方法）、Dr.GRPO（GRPO改进版）。
- **基础模型**：CodeLlama-7B、Qwen2.5-7B-Instruct，以及额外实验用Qwen2.5-14B。
- **评估指标**：准确率（Accuracy）。

### 4. 资源与算力
- **硬件**：8张H100-80GB GPU。
- **工具**：FlashAttention、DeepSpeed ZeRO Stage 3加速，基于HuggingFace Alignment Handbook和TRL库实现。
- **训练设置**：SFT用batch size 64、lr 1e-5；RL阶段用batch size 64（SVAMP）或64/96（GSM8K按模型调整）、lr 3e-7，KL系数0.05，温度τ=0.2，c=1e-3，PPO参数λ=1、γ=0.95、α=5、ϵ=0.2、U=2。每个方法训练70 epochs。

### 5. 实验数量与充分性
- **实验数量**：
  - 主表：Table 3（2个数据集 × 2个基础模型 × 3个方法，共12组）。
  - 额外消融：Table 4（与Dr.GRPO对比）、Figure 5（正vs负信号）、Figure 6（训练曲线）、Figure 7（c系数鲁棒性）、Figure 8（部分奖励稳定性）、Table 5（batch size影响）、Table 6（更大模型14B）。
  - 损失曲线分析：Figure 12-17。
- **充分性**：较充分，覆盖不同模型、不同数据集、多种消融（成分、超参数、奖励机制、模型规模）。但缺少与更多SOTA RL方法（如DAPO）的比较；仅一个领域（数学推理）。

### 6. 主要结论与发现
- CARFT在SVAMP和GSM8K上准确率显著优于SFT和ReFT，最高提升10.15%。
- 相比Dr.GRPO，CARFT准确率提升0.5%，训练时间减少30.62% (14.12h vs 16.99h vs 24.49h)。
- 正信号比负信号更有效（+1.9%）。
- 对比信号和嵌入增强部分奖励显著稳定训练过程，避免模型崩溃。
- CARFT对超参数c（5e-4 ~ 1.5e-3）鲁棒。
- 在更大模型（Qwen2.5-14B）上同样有效（88.9% vs SFT 86.7%）。

### 7. 优点
- **方法创新**：首次系统利用标注CoT和在线CoT的对比信号来稳定RL微调，避免模型崩溃。
- **高效稳定**：仅需单次on-policy采样（与ReFT相同），计算复杂度低于Dr.GRPO，训练过程更稳定。
- **全面实验**：在多个模型、数据集、消融设置下验证，结果客观。
- **开源**：代码已公开。

### 8. 不足与局限
- **计算开销**：相比ReFT和SFT，需额外计算CoT嵌入和对比损失，训练时间略长（但仍优于Dr.GRPO）。
- **场景限制**：论文声明限制在<1024 token的短上下文，且依赖集中式标注数据集，未探索长上下文或联邦学习等分散数据场景。
- **对比baseline有限**：未与DAPO、GRPO等最近方法进行全面比较（仅与ReFT和Dr.GRPO对比）。
- **领域单一**：仅在数学推理任务上验证，未扩展到其他推理（如常识、逻辑）。
- **潜在偏差**：标注CoT由GPT-3.5生成，可能引入标注噪声；正负信号定义依赖答案正确性，但部分正确CoT可能包含有效推理路径。

（完）

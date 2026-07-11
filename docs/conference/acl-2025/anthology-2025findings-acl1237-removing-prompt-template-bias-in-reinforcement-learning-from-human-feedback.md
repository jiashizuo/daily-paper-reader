---
title: Removing Prompt-template Bias in Reinforcement Learning from Human Feedback
title_zh: 去除强化学习从人类反馈中的提示模板偏差
authors: "Chaojie Wang, Haonan Shi, Long Tian, Bo An, Shuicheng Yan"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.1237.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: RLHF中提示模板偏差分析与缓解
tldr: 强化学习从人类反馈(RLHF)中奖励模型存在奖励破解问题，已有工作关注长度偏差，本文首次揭示提示模板偏差也会导致奖励破解。当处理边缘样本时，模型会偏向特定格式的输出。通过实验验证该偏差普遍存在，并探索缓解策略。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1237/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1489, \"height\": 718, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1237/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1576, \"height\": 719, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1237/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1428, \"height\": 377, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1237/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 706, \"height\": 362, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.1237/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1595, \"height\": 473, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1237/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1601, \"height\": 796, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1237/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1650, \"height\": 304, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1237/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1568, \"height\": 489, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1237/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 702, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1237/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1400, \"height\": 995, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1237/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1382, \"height\": 1262, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1237/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 655, \"height\": 610, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.1237/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 756, \"height\": 1098, \"label\": \"Table\"}]"
motivation: RLHF中奖励模型可能学习到提示模板等简单模式导致奖励破解，本文揭示了此前未发现的提示模板偏差。
method: 通过分析边际样本下的输出行为，识别出奖励模型对提示模板的偏好，并提出缓解方法。
result: 实验证明提示模板偏差普遍存在，缓解后提升了奖励模型的可靠性。
conclusion: 提示模板偏差是RLHF奖励破解的新来源，需要进一步研究以提升对齐质量。
---

## Abstract
Reinforcement Learning from Human Feedback (RLHF) has become an essential technique for enhancing pre-trained large language models (LLMs) to generate responses that align with human preferences and societal values. Although RLHF has shown promise, the training of reward models (RMs) still faces the challenge of reward hacking , motivating recent works to prevent RMs from finding shortcuts that bypass the intended optimization objectives by identifying simplistic patterns such as response length. Besides the issue of length bias , our work firstly reveals that prompt-template bias learned by RMs can also cause reward hacking when dealing with some marginal samples, resulting in LLMs preferring to generate responses in a specific format after RLHF fine-tuning, regardless of the format requested in the prompt. To this end, we propose a low-cost but effective method, namely Prompt Bias Calibration (PBC), to estimate the prompt-template bias term during reward modeling, which can be utilized to calibrate reward scores in the following RL fine-tuning process. Then, we show that our PBC method can be flexibly combined with existing algorithms of removing length bias , leading to a further improvement in the aspect of enhancing the quality of generated responses.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：RLHF 中的奖励模型（RM）在训练时存在“奖励破解”（reward hacking）现象，即模型倾向于学习简单的模式（如响应长度）来区分好坏响应，而非真正的质量。已有工作主要关注长度偏差（length bias）。  
- **本文首次揭示**：除了长度偏差，RM 还会学习到**提示模板偏差（prompt-template bias）**。这种偏差使得 RM 对不同模板（格式）的响应给予系统性不同的奖励，导致 RL 微调后 LLM 倾向于生成特定格式的响应，而忽略提示中请求的格式。  
- **影响**：在处理边际样本（如用简洁格式回答本应学术格式的提示）时，偏差会导致奖励排序扭曲，降低生成质量。

## 2. 论文提出的方法论

- **核心思想**：在 RM 训练中显式估计提示模板偏差项 \(C(x, \bar{y})\)，并在后续 RL 微调中扣除该偏差，使奖励更公平。  
- **关键步骤**：  
  1. **Prompt Bias Calibration (PBC)**：在 RM 的最后一个隐层上增加一个“偏差头”（bias head），预测提示-平均响应的联合偏差。添加正则化项：  
     \[
     L_{\text{RM}}^c(\theta) = \mathbb{E}_{(x,y^+,y^-)} \big[ \|r_\theta(x,y^+) - C(x,\bar{y})\|_2^2 + \|r_\theta(x,y^-) - C(x,\bar{y})\|_2^2 \big]
     \]  
     总损失为 \(L_{\text{RM}}^{\text{pbc}} = L_{\text{RM}} + \eta_c L_{\text{RM}}^c\)。  
  2. **RL 微调时** 使用校正后的奖励：\(r_{\theta'}(x,y) = r_\theta(x,y) - C(x,\bar{y})\)。  
  3. **联合长度偏差校正（LPBC）**：将奖励分解为质量部分和长度部分，并分别引入偏差项（\(C_Q, C_L\)），通过条件相关性约束使长度偏差部分与响应长度相关，质量部分与长度不相关。最终损失为：  
     \[
     L_{\text{RM}}^{\text{lpbc}} = L_{\text{RM}} + \eta_c L_{\text{RM}}^c + \eta_l L_{\text{RM}}^l
     \]  
     其中 \(L_{\text{RM}}^l\) 为长度偏差的条件相关性正则项。  
- **优势**：仅增加一个线性层，计算成本极小；偏差头提供中间信号引导，提升 RM 对响应差异的专注；校正后奖励方差更低。

## 3. 实验设计

- **数据集**：  
  - **RM-Template**（自定义）：约 5 万对 prompt-response，涵盖 20 种格式要求（如科技文章、广告、随笔、诗歌等），用于定性评估提示模板偏差。  
  - **RM-Static**（从 hh-static 分支）：约 7.6 万训练对、5.1 万测试对，用于定量比较。  
- **评估基准**：  
  - MMLU、DROP、BBH、TruthfulQA（TQA）  
  - RM Benchmark（Chat、Chat Hard、Safety、Reasoning）  
  - MT-Bench（多轮对话能力）  
- **对比方法**：  
  - Vanilla RM（原始 Bradley-Terry 损失）  
  - ODIN（仅去除长度偏差）  
  - PBC（本文提出，仅去除提示模板偏差）  
  - PBC + ODIN（简单联合）  
  - LPBC（本文提出，联合去除两者）  
- **模型**：基于 Llama-2-7B，使用 DeepSpeed-Chat 框架进行 RM 训练和 PPO 微调。

## 4. 资源与算力

- **明确说明**：所有实验在 4 块 NVIDIA A100 (80GB) GPU 上运行，使用 DeepSpeed ZeRO Stage 2/3。  
- RM 训练超参数：batch size 32，学习率 6e-6，训练 1 epoch。  
- PPO 微调超参数：actor/critic 学习率 5e-6，训练 1 epoch。  
- 未报告具体训练时长，但基于 4×A100 和 7B 模型，可推断为中等规模（数小时至十数小时）。

## 5. 实验数量与充分性

- **实验组数**：  
  - 定性分析：在 RM-Template 上展示偏好排序（表1、表5、表6），并统计奖励分布（图3）。  
  - 定量对比：表2 比较了 6 种方法在 4 个 benchmark 上的准确率（重复 3 次取标准差）。  
  - RM 基准测试（表3）：对 4 个子维度进行对比。  
  - MT-Bench（表4）：单轮/多轮评分。  
  - 消融实验（图5）：对超参数 \(\eta_c, \eta_l\) 在 0.01/0.05/0.1 下进行 9 组组合，并展示准确率及下游性能。  
  - 胜率对比（图4）：GPT-4 作为裁判比较 LPBC 与其他方法的响应。  
- **充分性评价**：  
  - **充分**：覆盖了定性、定量、消融、跨数据集、多 benchmark、多轮对话等多维度验证。  
  - **客观公平**：所有方法使用相同基座、训练流程，报告均值和标准差，避免 cherry-pick（主实验超参数 \(\eta_c=\eta_l=0.05\) 并非最优）。  
  - **略有不足**：仅使用单一模型 Llama-2-7B，未在其他尺度或架构（如 Llama-3、Mistral）上验证泛化性；未与更多去偏方法（如 PoE、SimPO）对比。

## 6. 主要结论与发现

1. **提示模板偏差普遍存在**：Vanilla RM 对不同格式的响应奖励差异显著（如科技文章格式平均奖励远高于诗歌格式）。  
2. **PBC 有效降低偏差**：校正后各格式奖励分布均值方差减小，边际样本排序更合理。  
3. **联合长度偏差校正（LPBC）进一步提升了生成质量**：在 MMLU、DROP、BBH、TQA 上均优于 Vanilla RM 和独立 ODIN/PBC。  
4. **LPBC 在 MT-Bench 和 RM Benchmark 上表现突出**：尤其在多轮对话（MT-Bench 平均 3.67 分，大幅高于其他方法）和 Chat Hard 维度（45.83）上领先。  
5. **轻度牺牲 RM 准确率可换取更高的对齐质量**：消融表明适当增加约束项（如 0.05）能提升下游性能，但过强约束会损害 RM 准确率。

## 7. 优点

- **新颖性问题**：首次系统揭示并形式化提示模板偏差，填补了 RLHF 中该方向的空白。  
- **方法轻量有效**：仅增加一个线性头，计算成本几乎为零；可模块化地与现有去偏方法结合。  
- **实验设计全面**：包含自定义数据集定性展示、标准 benchmark 定量对比、消融、竞争性胜率分析，置信度较高。  
- **理论分析清晰**：通过公式推导说明偏差来源（Bradley-Terry 模型欠定性与响应多样性不足）和对边际样本的影响。  
- **可应用性强**：PBC/LPBC 可集成到现有工业 RLHF 流程中，无需额外数据采集。

## 8. 不足与局限

1. **缺乏理论保证**：论文明确指出没有理论证明校正后 RM 能始终准确处理边际样本。  
2. **约束导致 RM 准确率下降**：正则项会牺牲 RM 在偏好排序上的精度，需权衡。  
3. **实验范围有限**：仅在 Llama-2-7B 上验证，未测试更大模型或其他基座；去偏方法对比不够全面（缺少 DPO 变体等）。  
4. **自定义数据集可能引入偏差**：RM-Template 为人工构造，格式类别数量有限（20 类），真实场景中的模板多样性可能更复杂。  
5. **对长度偏差的处理依赖现有方法**：LPBC 中长度偏差部分基于 ODIN 的框架，若 ODIN 本身有局限性则可能传递。  
6. **超参数调节未充分探索**：仅测试了 3 个值，最优值可能随任务变化，未见自适应策略。

（完）

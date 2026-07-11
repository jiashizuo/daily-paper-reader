---
title: Indirect Online Preference Optimization via Reinforcement Learning
title_zh: 基于强化学习的间接在线偏好优化
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0061.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 通过强化学习进行偏好优化，是RLHF的核心
tldr: 该论文提出了一种基于强化学习的间接在线偏好优化方法。该方法通过在线交互学习偏好，可用于对齐大型语言模型，是RLHF技术的直接延伸。实验表明该方法在偏好学习任务上有效，为医疗大模型的对齐训练提供了可迁移的技术路径。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-61/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 860, \"height\": 290, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-61/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 875, \"height\": 496, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-61/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 829, \"height\": 1185, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-61/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 825, \"height\": 303, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-61/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 801, \"height\": 342, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-61/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1695, \"height\": 665, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-61/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1828, \"height\": 300, \"label\": \"Table\"}]"
motivation: 现有偏好优化方法依赖离线数据或显式奖励，难以在线调整；本文旨在通过强化学习实现在线偏好学习。
method: 提出Indirect Online Preference Optimization方法，利用强化学习来间接优化偏好模型。
result: 在偏好学习基准上取得改进，验证了在线偏好优化的有效性。
conclusion: 本文方法为RLHF提供了新的在线学习范式，可迁移至医疗大模型的安全对齐。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **背景**：大型语言模型（LLMs）在与人类价值观对齐（Human Preference Alignment, HPA）时，现有方法（如RLHF、DPO）严重依赖高质量人工标注的偏好比较数据，这导致模型迭代效率低、成本高。
- **问题**：在线迭代策略虽然利用微调后的LLMs自生成偏好数据，但存在**分布偏差**（distribution bias）：（a）人工标注与模型标注之间的差异；（b）模拟器（已训练LLMs）与环境（真实场景）之间的建模误差。这使得模型生成的偏好数据难以泛化到真实场景。
- **目标**：提出一种无需额外标注、能消除分布偏差、保持线性计算复杂度的在线偏好优化方法。

## 2. 方法论：核心思想、关键技术细节与流程

### 2.1 核心思想

- 采用**双智能体零和博弈**框架，包含一个主角智能体（protagonist）和一个对抗智能体（adversary）。对抗智能体挑战主角的对齐效果，通过min-max均衡和纳什均衡策略，使主角无偏收敛。
- 继承自鲁棒对抗强化学习（RARL），将偏差视为对抗性扰动，通过对称约束奖励设计防止策略崩溃。

### 2.2 关键技术细节

1. **形式化**：定义零和博弈，状态 \( s_t \)，动作 \( a_t^\mu \sim \mu(s_t) \)、\( a_t^\nu \sim \nu(s_t) \)，主角奖励 \( r_t^\mu = r_t \)，对抗奖励 \( r_t^\nu = -r_t \)。目标函数：
   \[
   \max_{\pi_\theta} \mathbb{E}_{x\sim D, y\sim\pi_\mu(y|x)}[r_\phi(x,y)] - \beta D_{KL}(\pi_\mu(y|x)\|\pi_\nu(y|x))
   \]
2. **重要性采样（IS）与裁剪**：使用重要性采样权重 \( r_t^\mu(\theta) = \frac{\pi_\mu(y^l_t|x_t)}{\pi_\nu(y^l_t|x_t)} \) 衡量分布偏移，并引入裁剪操作（clip）避免慢收敛或发散问题：
   \[
   r_t^\mu(\theta) = \min(r_t^\mu(\theta), \text{clip}(r_t^\mu(\theta), 1-\epsilon, 1+\epsilon)) = -r_t^\nu(\theta)
   \]
3. **目标函数推导**：结合Bradley-Terry模型与IS权重，得到主角的损失函数：
   \[
   \mathcal{L}_{\text{IOPO}}(\pi_\mu;\pi_\nu) = -\mathbb{E}_{(x,y_w,y_l)\sim D}[r_t(\theta) \cdot \log\sigma(\beta\log\frac{\pi_{t\mu}(y_w|x)}{\pi_{t\nu}(y_w|x)} - \beta\log\frac{\pi_{t\mu}(y_w|x)}{\pi_{t\nu}(y_w|x)})]
   \]
4. **交替优化**：算法流程可分为两阶段循环：
   - 固定对抗模型参数，优化主角模型（\( N_\mu \) 次迭代）；
   - 固定主角模型参数，优化对抗模型（\( N_\nu \) 次迭代）。
5. **理论保证**：证明了该零和博弈收敛（算术数列性质），并给出收敛速度较快的原因，以及采样误差的界。

## 3. 实验设计

### 3.1 数据集

- **safe world view**：44k单轮对话，关于世界观需求，来自百度真实数据集。
- **distilabel-capybara-dpo**：7.56k多轮对话，涵盖数学、医学、计算机科学、历史、文学等。
- **orpo-dpo-mix-40k**：44.2k单轮和多轮混合数据，含毒性过滤，适合ORPO/DPO训练。

### 3.2 基线与对比方法

- **SFT**：监督微调（仅使用首选输出）。
- **DPO**：直接偏好优化。
- **RSO/HINGE**：基于SLiC与DPO的统计拒绝采样优化。
- **IPO**：基于理论批评DPO的通用偏好学习目标。
- **KTO-PAIR**：基于Kahneman-Tversky人类效用模型的直接优化。
- **Iter-DPO**：在线迭代DPO（使用LLM自生成数据，经ERNIE 4.0标注）。

### 3.3 评估指标

- **胜率（Win rate）**：使用两个评价器（Ziya-LLaMA-7B-Reward 和 ERNIE-3.5）评估生成回复的“胜/平/负”。
- **Margin reward**：偏好三元组中首选与次选奖励的差值。
- **Pairwise accuracy**：奖励模型正确排序的比例。
- **人类评分**：人工对回复打0-3分，计算均值。
- **Bad case**：人类给两个回复均评0分的情况。

## 4. 资源与算力

- **文中未明确说明具体的GPU型号、数量或训练时长**。仅提及：“迭代时间从数月缩短到一周”，以及“显著降低标注成本（约$1000/轮标注，现可节省成千上万美元）”。
- 模型使用Baichuan2-7B（base/chat）作为基座，训练超参数：学习率 lr=2e-7，batchsize=32，β=0.1，clip ϵ=0.3。
- 在线场景中，Iter-DPO需要生成40K-80K样本，标注250K完成，耗费1-2个月；IOPO则仅需要一周内完成迭代。

## 5. 实验数量与充分性

- **离线实验**：在三个数据集上对比了SFT、DPO、RSO、IPO、KTO-PAIR共5个基线，每个数据集给出两种评价器（Ziya和ERNIE-3.5）的胜率结果，共3×2=6组主要结果，并绘制了margin reward分布图（图3）。
- **在线实验**：基于safe world view数据集，对比SFT、DPO、Iter-DPO和IOPO，测量margin reward、pairwise accuracy、人类评分、胜率等，并给出训练过程变化图（图4、图5）。
- **消融分析**：控制起始模型相同（均从DPO模型启动），对比IOPO与Iter-DPO的性能。
- **充分性评价**：实验覆盖了离线与在线场景，使用了多种评价器（自动和人工），且对分布偏移进行了可视化。但对比方法未包含最新的如Self-Reward、APO等（仅在相关工作提及），且仅在一个基座模型（Baichuan2-7B）上验证，未在更大模型或其他系列（如Llama）上测试，泛化性有限。整体实验较为充分但仍有提升空间。

## 6. 主要结论与发现

- IOPO在三个真实数据集上离线场景的胜率全面优于SFT、DPO、RSO、IPO、KTO-PAIR（尤其在ERNIE-3.5评价器上）。
- 在线场景中，IOPO的margin reward分布更集中稳定，pairwise accuracy最高，人类评分均值最高（2.176），且bad case比例最低（0 vs 23-22）。
- 与Iter-DPO相比，IOPO能够解决分布偏移和建模误差问题，迭代时间从数月缩短至一周，标注成本大幅降低。
- 理论证明了算法的收敛性和加速收敛性质，并给出了采样误差上界。

## 7. 优点

- **创新性**：首次将离线偏好优化框架扩展到对抗性零和博弈的在线设置，有效缓解分布偏差，无需额外人工标注。
- **理论严谨**：提供了收敛性、加速性及误差界证明，为方法稳健性提供保证。
- **实用性**：显著降低时间和标注成本（从月级别到周级别，标注成本从数千美元降至接近零），适合工业界快速迭代。
- **实验设计全面**：覆盖离线、在线、人工评估等多种场景，使用多种自动评价器确保结果可靠性。
- **消融设计合理**：对比Iter-DPO时控制起始模型相同，排除其他因素干扰。

## 8. 不足与局限

- **模型泛化性未充分验证**：仅在一个基座模型（Baichuan2-7B）上进行实验，未在更大规模模型（如70B）或其他架构（Llama系列）上测试。
- **对比方法不全**：未与最新在线方法如Self-Reward、IterFinetuning、APO等直接对比，仅与传统方法及简单迭代DPO对比。
- **未说明计算资源具体消耗**：缺乏GPU型号、数量、训练时长的具体数据，不利于复现及评估成本。
- **对安全等特殊领域验证有限**：safe world view是世界观数据，但未详细说明其安全对齐的严格评估指标（如拒绝有害查询率等）。
- **IOPO对超参数（如clip ϵ）敏感性较弱，但文中未详细分析不同ϵ的影响**。
- **理论部分可读性稍弱**：部分推导较简略，如重要性采样权重与Bradley-Terry模型结合的具体推导不够清晰。

（完）

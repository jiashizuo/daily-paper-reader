---
title: "Playpen: An Environment for Exploring Learning From Dialogue Game Feedback"
title_zh: Playpen：探索从对话游戏反馈中学习的环境
authors: "Nicola Horst, Davide Mazzaccara, Antonia Schmidt, Michael Sullivan, Filippo Momentè, Luca Franceschetti, Philipp Sadler, Sherzod Hakimov, Alberto Testoni, Raffaella Bernardi, Raquel Fernández, Alexander Koller, Oliver Lemon, David Schlangen, Mario Giulianelli, Alessandro Suglia"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1517.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 在对话游戏环境中使用GRPO进行后训练
tldr: 后训练方法通常依赖奖励模型，但对话游戏能否提供反馈信号尚未探索。本文提出Playpen环境，支持通过对话游戏进行离线/在线学习，并实验了SFT、DPO和GRPO等方法。在Llama-3.1-8B上验证了GRPO在对话游戏反馈下的有效性。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1517/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1491, \"height\": 405, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1517/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1656, \"height\": 848, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1517/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1619, \"height\": 1116, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1517/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1645, \"height\": 654, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1517/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1651, \"height\": 1211, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1517/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1614, \"height\": 1067, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1571, \"height\": 858, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1641, \"height\": 884, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 807, \"height\": 2005, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 735, \"height\": 242, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 793, \"height\": 749, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 842, \"height\": 372, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 683, \"height\": 422, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 676, \"height\": 253, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1337, \"height\": 763, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1340, \"height\": 753, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 808, \"height\": 175, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1422, \"height\": 821, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1647, \"height\": 750, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1651, \"height\": 1211, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1630, \"height\": 1094, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1664, \"height\": 2068, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1665, \"height\": 2222, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1666, \"height\": 2190, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1667, \"height\": 2028, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1669, \"height\": 1871, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1661, \"height\": 2506, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1517/table-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1670, \"height\": 192, \"label\": \"Table\"}]"
motivation: 探索对话游戏能否作为后训练反馈信号的来源。
method: 构建Playpen环境，实现对话游戏自我对弈，支持SFT、DPO和GRPO等后训练方法。
result: 在小型LLM上的实验表明GRPO能有效利用对话游戏反馈提升性能。
conclusion: 对话游戏可作为强化学习后训练的有效反馈源，GRPO在此设置下表现良好。
---

## Abstract
Interaction between learner and feedback-giver has come into focus recently for post-training of Large Language Models (LLMs), through the use of reward models that judge the appropriateness of a model’s response. In this paper, we investigate whether Dialogue Games—goal-directed and rule-governed activities driven predominantly by verbal actions—can also serve as a source of feedback signals for learning.We introduce Playpen, an environment for off- and online learning through Dialogue Game self-play, and investigate a representative set of post-training methods: supervised fine-tuning; direct alignment (DPO); and reinforcement learning with Group Relative Policy Optimization (GRPO). We experiment with post-training a small LLM (Llama-3.1-8B-Instruct), evaluating performance on unseen instances of training games as well as unseen games, and on standard benchmarks. We find that imitation learning through SFT improves performance on unseen instances, but negatively impacts other skills, while interactive learning with GRPO shows balanced improvements without loss of skills. We release the framework and the baseline training setups to foster research in this promising new direction of “learning in (synthetic) interaction”.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：当前大语言模型（LLM）的后训练主要依赖奖励模型（如RLHF中的偏好模型）来提供反馈信号。但这类反馈通常基于“主观”判断，且目标单一（如符合人类偏好或推理正确性）。本文提出一个核心问题：**能否利用“对话游戏”（Dialogue Games）——一种由规则驱动、以语言交互为核心的目标导向活动——作为客观、可编程、多轮互动的反馈信号来源，来训练LLM？**
- **整体含义**：对话游戏反馈（DGF）具有独特优势：(A) 目的性（teleological）——判断响应是否有助于达成游戏目标；(B) 客观性——可编程计算，无需学习主观评判模型；(C) 互主体性——基于多轮语言交互，隐含语言规范性压力；(D) 通用性——不仅奖励具体推理（如数学、编程），也奖励一般语言使用能力。这项工作为“在（合成）交互中学习”开辟了新方向，具有认知发展理论（人类语言习得需要社交互动）的支持。

## 2. 方法论：核心思想、关键技术细节、算法流程

- **核心思想**：构建一个名为 **Playpen** 的环境，允许LLM在对话游戏中进行自我对弈，通过游戏内生的反馈（如是否猜中目标词、是否遵守规则、是否成功完成任务）作为学习信号，支持离线和在线学习。
- **关键技术细节**：
    - **对话游戏定义**：游戏由规则、初始实例（instance）和游戏树构成。每个实例由Game Master（GM）程序化中介，玩家各自被提示（prompted）成策略（policy）。轨迹（transcript）记录了多轮交互。
    - **对话游戏反馈（DGF）**：由游戏特定的反馈函数f评估完整轨迹。对于成功（如猜中词）或失败（如触犯规则）给出奖励或惩罚。该反馈可被程序化计算。
    - **学习算法**：
        - **SFT（监督微调）**：使用成功轨迹（来自clembench排行榜上多种模型的对话）进行模仿学习。将轨迹按玩家视角拆分，并采用“冷启动（Cold Start, CS）”策略：只训练700步（达到最小验证损失阈值），避免过拟合。
        - **DPO（直接偏好优化）**：从离线成功/失败轨迹中构造偏好对。两种变体：**对话级DPO**（整段成功vs失败对话对）和**轮次级DPO**（相同历史分支下的单轮正负样本对）。在最佳SFT模型上进一步训练。
        - **GRPO（组相对策略优化）**：在线强化学习方法。对每个游戏实例，当前策略生成8个完整轨迹（组），每个轨迹由游戏特定奖励函数评分（如Taboo用1/轮次奖励、Wordle用0/1奖励）。使用组内相对优势更新策略。GRPO训练时，另一个角色由教师模型（GPT-4o-mini）扮演，以稳定训练。训练从基础模型或SFT模型开始。
- **算法流程**（文字说明）：
    1. 初始化策略（基础模型或SFT模型）。
    2. 对每个游戏实例，让当前策略与环境（GM和教师模型）交互，生成一组轨迹。
    3. 对每个轨迹计算游戏奖励（如成功=1、失败=0；带长度惩罚等）。
    4. 计算组内相对优势（reward标准化）。
    5. 用GRPO目标函数更新策略（含KL正则化项，保持与参考策略接近）。
    6. 重复多轮（在实验中为5个epoch，共686个实例）。

## 3. 实验设计：数据集/场景、benchmark、对比方法

- **训练游戏**（7种，共686个实例，版本V0.9/V1.0）：
    - **Taboo**（描述词并避免禁用词）
    - **PrivateShared**（信息共享游戏）
    - **ImageGame**（指令给图/画图）
    - **ReferenceGame**（指代表达）
    - **Wordle** 及其两个变体（Wordle With Clue, Wordle With Critic）
- **评估场景**：
    - **域内测试**：以上7种游戏的新实例（版本V1.6）。
    - **域外测试**（8种未训练的游戏）：Codenames、Adventure Game、GuessWhat、MatchIt、Map Navigation（含3种变体）。
    - **通用NLP基准**：MMLU-Pro、Big-Bench Hard（BBH）、IFEval（指令遵循）。
    - **语言能力测试**：
        - 形式语言能力：GLUE Diagnostics。
        - 功能语言能力（认知/社交情感）：Natural Plan、LogiQA 2.0、CLadder、WinoGrande、EQ-Bench、LM-Pragmatics、SocialIQA、SimpleToM等。
- **对比方法**：
    - **Baseline**：原始 Llama-3.1-8B-Instruct（及Qwen2-7B-Instruct、Llama-3.1-70B-Instruct）。
    - **SFT (Cold Start, CS)** （最佳变体）。
    - **SFT(CS) + DPO (Dialogue)** （对话级）。
    - **SFT(CS) + DPO (Turn)** （轮次级）。
    - **GRPO**（从基础模型开始）。
    - **SFT(CS) + GRPO**（从SFT模型开始）。
- **评估指标**：主要指标 **clemscore** = 平均%有效游戏完成率 × 平均质量分。

## 4. 资源与算力

- **SFT训练**：1块NVIDIA A100 80GB或H100 95GB GPU。训练约700步（冷启动版本）。
- **DPO训练**：2块NVIDIA A5000（开发阶段），最终在1块RTX 3090 24GB上完成。
- **GRPO训练**：4块NVIDIA H100 80GB GPU。训练5个epoch，每个epoch含686个游戏实例，每组8个轨迹。约需并行推理和更新。
- **总体**：论文说明了计算资源（GPU型号、数量），但未给出精确训练总时长（如小时数），也未给出70B模型的GRPO实验（因资源限制未进行）。

## 5. 实验数量与充分性

- **实验数量**：非常多组实验。
    - SFT阶段：超过30种不同数据集配置实验，划分为9个主要实验（D1-D9），探索数据过滤、split策略、平衡、超参数等。
    - DPO阶段：探索了负样本数量、模型来源（全部/前10/同族）等。
    - GRPO阶段：2种初始化（基础和SFT）。
    - 对比了3种不同基础模型（8B、70B、Qwen2-7B），但70B和Qwen2只做了SFT和DPO（未做GRPO）。
    - 在7+8=15种游戏、7个通用/语言基准上评估。
- **充分性判断**：
    - **优点**：覆盖了SFT、DPO、GRPO三种主流后训练范式，且设置了域内/域外、多种语言能力评测，消融实验（如对比SFT变体WS、R、CS）充分。定性分析（错误原因分布）也增加了深度。
    - **不足**：
        - 未包含多轮训练方法（如ArCHer）；未使用推理模型（如DeepSeek-R1）或CoT提示；无人类交互实验。
        - GRPO仅在8B模型上执行（因资源限制），缺乏规模上的泛化验证。
        - 数据偏差：所有训练数据来自已有clembench运行（多为成功轨迹），可能引入选择偏差；DPO中“成功轨迹的所有轮次都假设正确”可能不真。
        - 超参数调优细节未全部公开（如GRPO的β、学习率等虽给出，但缺少详细的消融）。

## 6. 主要结论与发现

1. **SFT（模仿学习）** 显著提升域内游戏性能（+20.72 clemscore），但导致域外性能下降和通用能力衰退（IFEval、MMLU-Pro下降较大）。
2. **DPO** 相比SFT未能进一步改进，甚至在某些情况下造成更严重的域外退化及“似然偏移”问题。对话级DPO比轮次级DPO表现更差。
3. **GRPO（在线强化学习）** 是最稳健的方法：在域内性能略微提升（+5.50），在域外大幅提升（+9.34），且**没有损害通用语言能力**（MMLU-Pro、IFEval基本保持）。从SFT模型开始的GRPO可恢复SFT导致的域外退化，但域内提升有限。
4. 较大模型（70B）的SFT带来更大域外泛化（+7.03 clemscore），且对通用基准影响更小，但仍存在知识遗忘（MMLU-Pro下降）。
5. 定性分析表明：GRPO显著减少“超回合限制”和“格式错误”类错误，表现出更好的指令遵循和游戏机制理解能力。
6. 对话游戏反馈可作为强化学习的有效信号，尤其适用于在线、多轮设置，有助于平衡技能保留与能力提升。

## 7. 优点

- **创新性**：首次系统探究“对话游戏”作为LLM后训练反馈信号的潜力，提出Playpen统一框架，连接多种学习范式。
- **方法论完整**：同时实现了离线（SFT、DPO）和在线（GRPO）方法，并进行了公平对比。
- **评估全面**：不仅测试游戏本身，还评估形式/功能语言能力、通用知识、指令遵循等，避免“只顾训练任务”。
- **开源贡献**：代码、数据、基线模型均已公开，有利于后续研究。
- **可解释性**：定性错误分析（按类别统计）揭示了不同训练方法的行为差异。

## 8. 不足与局限

- **实验规模**：GRPO仅在8B模型上运行，70B或更大模型的效果未知；未使用推理模型（如DeepSeek-R1）或CoT提示。
- **DPO的简化假设**：正样本的每个轮次都被视为成功，未考虑中间轮次可能错误或需要修正。
- **未探索多轮训练方法**：如ArCHer、ReSpect等，这些更符合对话游戏的多轮结构。
- **未引入中间语言反馈**：如人类在游戏中可能会给出纠正性反馈，而本工作仅使用最终任务成功信号。
- **训练-测试不匹配**：GRPO中教师模型（GPT-4o-mini）与实际测试时使用的模型不同，可能引入分布偏移。
- **计算限制**：未评估GRPO在更大模型上的可扩展性和效率。
- **泛化性有限**：目前仅包含15种游戏，可能无法完全代表真实世界中的多样复杂互动。

（完）

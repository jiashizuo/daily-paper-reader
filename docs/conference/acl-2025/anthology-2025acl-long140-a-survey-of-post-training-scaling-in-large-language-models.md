---
title: A Survey of Post-Training Scaling in Large Language Models
title_zh: 大语言模型后训练扩展综述
authors: "Hanyu Lai, Xiao Liu, Junjie Gao, Jiale Cheng, Zehan Qi, Yifan Xu, Shuntian Yao, Dan Zhang, Jinhua Du, Zhenyu Hou, Xin Lv, Minlie Huang, Yuxiao Dong, Jie Tang"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.140.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 全面综述后训练扩展，涵盖强化学习微调
tldr: 本文系统综述了大语言模型后训练扩展的新范式，将后训练方法分为三大类：监督微调、强化学习从人类反馈（RLHF）和自我改进。文章详细讨论了这些方法如何帮助模型对齐，并总结了当前挑战和未来方向。作为一篇综述，它为该领域提供了全面的技术路线图。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.140/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 790, \"height\": 564, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.140/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1644, \"height\": 1635, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.140/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 796, \"height\": 584, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.140/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 786, \"height\": 532, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.140/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 794, \"height\": 468, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.140/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1659, \"height\": 683, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.140/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1658, \"height\": 609, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.140/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1658, \"height\": 719, \"label\": \"Table\"}]"
motivation: 预训练扩展面临数据枯竭和高计算成本，后训练对齐成为新焦点。
method: 将后训练扩展分类为监督微调、RLHF和自我改进三种方法论，并分析其原理与进展。
result: 综述了多种后训练方法的优缺点及适用场景。
conclusion: 后训练扩展是提升LLM能力的重要方向，未来需探索更高效的算法。
---

## Abstract
Large language models (LLMs) have achieved remarkable proficiency in understanding and generating human natural languages, mainly owing to the “scaling law” that optimizes relationships among language modeling loss, model parameters, and pre-trained tokens. However, with the exhaustion of high-quality internet corpora and increasing computational demands, the sustainability of pre-training scaling needs to be addressed. This paper presents a comprehensive survey of post-training scaling, an emergent paradigm aiming to relieve the limitations of traditional pre-training by focusing on the alignment phase, which traditionally accounts for a minor fraction of the total training computation. Our survey categorizes post-training scaling into three key methodologies: Supervised Fine-tuning (SFT), Reinforcement Learning from Feedback (RLxF), and Test-time Compute (TTC). We provide an in-depth analysis of the motivation behind post-training scaling, the scalable variants of these methodologies, and a comparative discussion against traditional approaches. By examining the latest advancements, identifying promising application scenarios, and highlighting unresolved issues, we seek a coherent understanding and map future research trajectories in the landscape of post-training scaling for LLMs.

---

## 论文详细总结（自动生成）

# 大语言模型后训练扩展综述：中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：传统的大语言模型（LLM）的成功高度依赖预训练阶段的“缩放定律”（Scaling Law），即通过增大模型参数和训练数据量来提升性能。然而，高质量互联网语料面临枯竭风险，且预训练所需极端计算量带来的边际收益递减，促使研究者寻求超越预训练的缩放新路径。
- **背景**：OpenAI o1 模型及近期工作表明，在**后训练阶段**（即对齐阶段，传统上只占总训练计算的不到1%）存在新的缩放定律。后训练缩放有望缓解预训练的资源瓶颈，成为实现通用人工智能（AGI）的关键方向。
- **整体含义**：本文首次系统综述后训练缩放的新范式，将后训练方法归纳为三大类：监督微调（SFT）、强化学习（RLxF）和测试时计算（TTC），并分析各自的可缩放变体，为后续研究提供路线图。

## 2. 论文提出的方法论：核心思想、关键技术细节

本文作为综述，没有提出新方法，而是对现有方法进行分类和比较。核心框架如下：

### 2.1 监督微调（SFT）的可缩放方法
- **核心思想**：通过可扩展的方式构造指令和响应数据，提升模型对齐能力。
- **指令生成**：分为上下文方法和进化方法。
  - **上下文方法**（如Web-Instruct、Backtranslation、Ditto、SOLID）：从网络或外部知识库获取文本，自动生成指令-响应对，依赖可靠知识源。
  - **进化方法**（如Evol-Instruct、Promptbreeder、DiverseEvol、Self-Instruct）：模拟自然进化迭代优化指令，自动增加难度与多样性。
- **响应生成**：包括采样、自博弈、自精炼、弱监督等方法。
  - **采样**（RFT、RAFT、STaR等）：生成多条候选响应，通过拒绝采样或投票选择高质量输出。
  - **自博弈**（SPIN、AMIE、Self-Talk等）：模型自我对抗迭代，提升策略。
  - **自精炼**（SCORE、SELF-ALIGN等）：通过自我反馈迭代改进输出。
  - **弱监督**（Burns et al. 2023等）：用弱模型输出训练强模型，实现弱到强泛化。

### 2.2 强化学习（RLxF）的可缩放方法
- **核心思想**：通过反馈信号（奖励）引导模型学习，减少人工标注依赖。
- **奖励信号来源分类**：
  - **合成奖励建模**（RLAIF、RLSF、Q*等）：利用AI生成偏好数据训练奖励模型，自动化程度高但可能有偏。
  - **环境反馈**（DigiRL、ENVISIONS、SANDBOX等）：在仿真环境（GUI、规则系统）中获取反馈，成本高但信号可靠。
  - **自我反馈**（RLCD、Agent Q、Self-Rewarding、Meta-Rewarding等）：模型自我评估生成奖励，易扩展但受限于自身能力。

### 2.3 测试时计算（TTC）的可缩放方法
- **核心思想**：通过增加推理阶段的计算量（如多次采样、搜索、验证）来提升性能。
- **主要方法**：
  - **采样**（Self-Consistency等）：多次生成取多数答案，随样本数性能提升。
  - **验证链式思维**（PRM、SelfCheck、DiVeRSe等）：逐步骤验证推理正确性。
  - **搜索**（Tree-of-Thought、Pathfinder、Graph of Thoughts等）：利用树/图结构探索推理空间。
  - **长上下文学习**（Many-Shot ICL等）：增加示例数量（可达2048 shot）提升性能。
  - **自我验证**（Self-Refine、Reflexion等）：模型自我纠错。

## 3. 实验设计

- **本文性质**：综述论文，**未进行新的实验**，而是总结现有文献的实验结果。
- **所引用的实验场景**：
  - 数学（GSM8K、MATH等）、代码生成（HumanEval、MBPP等）、智能体任务（AITW、WebArena等）。
- **对比方法**：在每类方法中都对比了传统不可缩放方法（如人类标注、简单CoT、ICL）与可缩放方法（如进化指令、自博弈、MCTS搜索等），突出了可缩放方法的优势与局限性。
- **评估指标**：主要引用标准benchmark（如准确率、通过率、任务完成率）及奖励模型指标（RewardBench）。

## 4. 资源与算力

- **论文未明确提及任何实验所使用的GPU型号、数量、训练时长等具体算力信息**。作为综述，本文不涉及新实验的算力开销，仅引用他人实验结论。

## 5. 实验数量与充分性

- **数量**：引用了大量工作（参考文献约200篇），覆盖SFT、RL、TTC三大领域的主要方法，包括经典方法和最新进展。
- **充分性与客观性**：
  - 综述覆盖面广，但**缺乏统一的系统性实验对比**（如所有方法在同一基准上的横向比较）。
  - 讨论中指出了各类方法的优缺点，但依赖于原始论文的自我报告结果，可能存在实验设定不一致、指标不统一等问题。
  - 论文自身未做消融实验或公平对比，因此读者需依赖原文进行评估。

## 6. 论文的主要结论与发现

1. **后训练缩放是预训练缩放的重要补充**，在预训练瓶颈期能有效提升LLM能力。
2. 三种后训练方法各有优劣势：
   - **SFT**可缩放方法在数据构造上实现自动化，但需注意数据多样性与模型崩塌风险。
   - **RL**通过反馈信号实现更强对齐，环境反馈和自反馈更具扩展性，但分别面临成本高和能力瓶颈。
   - **TTC**在推理阶段用计算换性能，采样、搜索、验证等方法可显著提升复杂任务表现。
3. 后训练缩放目前缺乏坚实的理论基础，依赖经验；合成数据可能导致模型崩塌；持续学习、主动探索、超对齐、评估基准等问题亟待解决。
4. **应用前景**：数学推理、代码生成、智能体控制等任务已取得显著进展。

## 7. 优点

- **首次系统分类**：将后训练缩放划分为SFT、RLxF、TTC三类，并进一步细分常规方法与可缩放方法，结构清晰。
- **覆盖全面**：引用了近年的热门工作（含2024年最新成果），反映了领域前沿。
- **分析深入**：对每类方法给出了“Takeaways”总结，对比了优劣，并指出了未来挑战（理论、数据、持续学习、评估等）。
- **实用性强**：适合作为研究者进入该领域的入门指南和参考手册。

## 8. 不足与局限

- **缺乏实验支持**：作为综述，没有自己的实验验证或横向对比，无法量化各方法相对性能。
- **分类边界模糊**：部分方法可能同时涉及多种类别（如自博弈既可用于SFT也可用于RL），分类不够严格。
- **忽略部分细节**：对具体方法的数学公式、训练超参数、实现细节的讨论较少，不利于复现。
- **偏重英文文献**：未提及非英文或特定文化背景下的后训练缩放研究。
- **未来方向讨论较泛**：虽列出若干挑战（理论、合成数据、持续学习等），但未给出具体解决路径或优先级。
- **应用覆盖不均**：数学、代码、智能体着墨较多，其他领域（如医疗、法律、创意生成）提及较少。

（完）

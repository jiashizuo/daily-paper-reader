---
title: "Igniting Creative Writing in Small Language Models: LLM-as-a-Judge versus Multi-Agent Refined Rewards"
title_zh: 激发小语言模型的创意写作：LLM作为评判者与多智能体细化奖励
authors: "Xiaolong Wei, Bo Lu, Xingyu Zhang, Zhejun Zhao, Dongdong Shen, Long Xia, Dawei Yin"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.868.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 使用RLHF和RLAIF进行小语言模型的创意写作
tldr: 小语言模型创意写作受限于SLM能力，SFT难以产生新颖内容。本文在RLAIF框架下探索两种奖励策略：基于奖励模型和基于多智能体拒绝采样。在中文贺卡生成任务上，多智能体方法显著提升了创造性和多样性。为低资源场景下的创意生成提供了有效途径。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.868/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1623, \"height\": 736, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.868/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 792, \"height\": 546, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.868/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1643, \"height\": 876, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.868/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1538, \"height\": 1071, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.868/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1175, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.868/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1054, \"height\": 559, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.868/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1053, \"height\": 558, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.868/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1336, \"height\": 462, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.868/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1454, \"height\": 364, \"label\": \"Table\"}]"
motivation: SLM创意写作能力不足，SFT缺乏新颖性，RLHF成本高。
method: 在RLAIF框架中比较两种奖励策略：奖励模型训练与多智能体拒绝采样。
result: 多智能体方法在创意性和多样性上显著优于基线。
conclusion: RLAIF能有效提升SLM的创意写作能力。
---

## Abstract
Large Language Models (LLMs) have demonstrated remarkable creative writing capabilities, yet their substantial computational demands hinder widespread use. Enhancing Small Language Models (SLMs) offers a promising alternative, but current methods like Supervised Fine-Tuning (SFT) struggle with novelty, and Reinforcement Learning from Human Feedback (RLHF) is costly. This paper explores two distinct AI-driven reward strategies within a Reinforcement Learning from AI Feedback (RLAIF) framework to ignite the creative writing of a 7B-parameter SLM, specifically for generating Chinese greetings. The first strategy employs a Reward Model (RM) trained on high-quality preference data curated by a novel multi-agent rejection sampling framework designed for creative tasks. The second, more novel, strategy utilizes a principle-guided LLM-as-a-Judge, whose reward function is optimized via an adversarial training scheme with a reflection mechanism, to directly provide reward signals. Comprehensive experiments reveal that while both approaches significantly enhance creative output over baselines, the principle-guided LLM-as-a-Judge demonstrably yields superior generation quality. Furthermore, it offers notable advantages in training efficiency and reduced dependency on human-annotated data, presenting a more scalable and effective path towards creative SLMs. Our automated evaluation methods also exhibit strong alignment with human judgments.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 论文的核心问题与整体含义

- **研究动机**：大型语言模型（LLM）在创意写作方面表现出色，但计算开销巨大，限制了广泛应用。小语言模型（SLM，参数<10B）效率更高，但创意写作能力不足。现有方法如监督微调（SFT）难以生成新颖内容，而基于人类反馈的强化学习（RLHF）需要昂贵的人工标注。
- **研究目标**：探索两种基于AI反馈的奖励策略，在强化学习从AI反馈（RLAIF）框架下，激发7B参数SLM（Qwen2.5-7B-Instruct）的创意写作能力，以生成高质量的中文贺词。
- **整体含义**：为SLM在创意任务上的应用提供了低成本、可扩展的解决方案，并对比了两种奖励机制的有效性。

## 2. 论文提出的方法论

- **核心思想**：在RLAIF框架下，使用两种不同的AI生成奖励信号来指导策略优化。第一种是训练一个奖励模型（RM），基于多智能体拒绝采样框架生成的优质偏好数据；第二种是直接使用原则引导的LLM-as-a-Judge，通过对抗训练和反思机制动态优化奖励信号。
- **关键技术细节**：
    - **多智能体拒绝采样框架**：由检索代理（Retrieval Agent）、正面代理（Positive Agent）、负面代理（Negative Agent）、裁判代理（Judge Agent）和反思代理（Reflect Agent）组成。检索代理从向量数据库中提取高质量示例作为上下文。正面/负面代理对候选回复进行辩论式分析，识别优缺点。裁判代理综合辩论结果做出初始判断。反思代理检查初始判断的逻辑一致性，最终形成偏好对（query, chosen, rejected），用于训练RM。
    - **LLM-as-a-Judge与对抗训练**：包含生成器（Generator）和检测器（Detector）。生成器试图产生难以区分的“坏”回复，检测器学习区分好坏。引入反思模块（Reflector）：当检测器误分类时，反思模块分析错误原因并提供针对性反馈，指导检测器优化，从而提升其鲁棒性。
    - **奖励信号集成**：将RM的输出或检测器的得分作为奖励信号，使用GRPO（Group Relative Policy Optimization）算法优化SLM策略。GRPO基于采样轨迹的奖励计算优势值，控制KL散度以稳定训练。
- **公式或算法流程**：RM训练使用Bradley-Terry损失：  
  \( \mathcal{L}_{RM} = - \mathbb{E}_{(p,r_c,r_r) \sim D_{pref}} [\log \sigma (RM(p,r_c) - RM(p,r_r))] \)  
  其中 \( r_c \) 为选中的回复，\( r_r \) 为拒绝的回复。GRPO优化通过采样轨迹、计算相对奖励和KL惩罚项更新策略。

## 3. 实验设计

- **任务与场景**：中文贺词生成，包括高频节日（如春节）和普通场景（如新车祝福），具有文化丰富性和高实用需求。
- **数据集**：
    - 检索语料库：23,442条高点击率/复制率的实例。
    - RM训练数据：10,000个用户查询经多智能体框架处理，得到7,896个偏好对，按80/20划分训练/测试集。
    - GRPO优化数据：4,000个独立查询，80/20划分。
    - 最终评估集：2,000对查询-回复，平衡包含1,000个“高质量”（高点击率）和1,000个“低质量”（低点击率）实例。
- **基准（Baselines）**：GPT-4o、Ernie-4.5、DeepSeek-V3、Qwen2.5-7B-Instruct、SFT微调后的Qwen2.5-7B-Instruct。
- **对比方法**：Qwen2.5-7B-Instruct（基线）、SFT微调、仅RM+RL、LLM-as-a-Judge+RL、SFT+RM+RL、SFT+LLM-as-a-Judge+RL。
- **评估指标**：
    - 自动评估：准确性、精确率、召回率、F1分数（基于二分类优秀率判定）。
    - 人类评估：5维度（语言质量30%、创造力30%、情感共鸣15%、文化恰当性15%、内容丰富度10%），每维度1-3分，加权总分≥2为优秀。
    - 评估框架一致性：计算自动评估（多智能体框架和对抗性框架）与人类评估的吻合率。

## 4. 资源与算力

- **硬件**：4块NVIDIA A100 GPU（每块80GB显存）。
- **训练配置**：
    - RM：使用LlamaFactory框架，LoRA微调，rank=16，学习率2e-4，训练5轮，batch size=16，梯度累积8步。
    - GRPO：使用Verl框架，batch size=32，最大提示长度256，最大回复长度512，学习率3e-7，KL系数0.001，类型low_var_kl，熵系数0，训练5轮。
- **说明**：文中未明确给出总训练时长或GPU总时数。

## 5. 实验数量与充分性

- **主要实验组**：
    - 两种奖励策略框架本身的性能对比（表1：多智能体框架 vs 对抗性框架在评估集上的准确率、精确率、召回率、F1）。
    - 不同模型在高频场景（表2）和普通场景（表3）的“优秀率”对比，跨越3种评估方式（Signal-1自动、Signal-2自动、人类评估）。
    - 消融实验（表4）：对多智能体框架分别去除正面代理、负面代理、裁判代理、反思代理；对对抗性框架去除反思代理。共6组消融。
    - 人类评估中各维度平均得分（表5），比较5种方法在5个维度上的平均分。
    - 自动评估与人类评估的吻合率分析（图2）。
- **充分性与公平性**：
    - 实验覆盖了多种对比方法，包括主流LLM和不同训练策略组合。
    - 使用人类评估作为黄金标准，并与自动评估进行一致性验证。
    - 消融实验验证了各模块的必要性，证据充分。
    - 评估标准清晰，训练/测试集分离，可重复。
    - 不足：仅使用单一任务（中文贺词）和单一基座模型（Qwen2.5-7B），泛化性待验证。

## 6. 论文的主要结论与发现

- 两种RLAIF方法（基于RM和LLM-as-a-Judge）均能显著提升SLM的创意写作能力，优于SFT基线。
- **LLM-as-a-Judge+RL**策略综合性能最佳，在高频和普通场景下均取得SOTA，包括在三个评估信号上的最高优秀率（例如高频场景下：Signal-1 92.4%, Signal-2 96.6%, 人类 95.0%）。
- LLM-as-a-Judge方法相比RM方法，具有训练效率更高、减少人工标注依赖、训练流程更简洁的优势。
- 自动评估框架（多智能体框架和对抗性框架）与人类评估高度一致（吻合率>70%），其中多智能体框架吻合率更高（80%-87%），可替代部分人工评估。

## 7. 优点

- **方法创新**：
    - 提出了多智能体协作的偏好数据生成框架，通过辩论和反思机制提升数据质量，减少单一模型偏差。
    - 提出基于原则引导的LLM-as-a-Judge结合对抗训练与反思机制，动态优化奖励信号，无需人工标注。
    - 系统性地比较了两种RLAIF奖励范式，并给出实际部署建议。
- **实验设计**：
    - 既包含自动评估又包含人类评估，且验证了二者的一致性，增强了可信度。
    - 消融实验细致分解了各组件贡献。
    - 覆盖高频和普通场景，评估全面。
- **实用性**：为资源受限场景下的SLM创意增强提供了有效且低成本的解决方案。

## 8. 不足与局限

- **任务和语言局限性**：仅针对中文贺词生成，其他创意写作任务（如故事、诗歌）或其他语言需要进一步验证。
- **模型规模局限**：仅实验了7B参数SLM，更小或更大规模模型的效果未知。
- **创意主观性**：“创造力”评分依赖人工定义的准则和LLM偏见，可能无法完全客观。
- **多智能体框架复杂度**：数据准备流程涉及多个代理串联，设计和运行较为复杂。
- **反射机制深度有限**：当前反射基于LLM分析，其纠错能力有待提升系统性。
- **偏见强化风险**：RLAIF过程可能放大隐式偏见（文化、社会），需额外关注伦理问题。
- **算力信息不完整**：未明确报告总训练时间或能耗，不利于可复现性。

（完）

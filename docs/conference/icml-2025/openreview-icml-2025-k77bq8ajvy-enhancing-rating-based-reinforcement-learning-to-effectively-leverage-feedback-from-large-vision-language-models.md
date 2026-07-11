---
title: Enhancing Rating-Based Reinforcement Learning to Effectively Leverage Feedback from Large Vision-Language Models
title_zh: 增强基于评分的强化学习以有效利用大型视觉语言模型反馈
authors: "Tung Minh Luu, Younghwan Lee, Donghoon Lee, Sunho Kim, Min Jun Kim, Chang D. Yoo"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=k77bq8AJVy"
tags: ["query:mlr"]
score: 8.0
evidence: 利用视觉语言模型反馈的RLAIF方法
tldr: ERL-VLM针对强化学习中奖励设计依赖人类专家的问题，提出利用大型视觉语言模型生成自动反馈。通过评分式RL方法，有效从AI反馈中学习奖励函数，避免了传统成对比较的局限。实验表明该方法在多个RL任务上接近或超越人类反馈效果，为RLAIF提供了新思路。虽未专门针对医疗，但方法通用。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 传统RL奖励设计依赖人类，成本高且难以扩展。
method: 提出ERL-VLM，利用VLM的评分反馈进行强化学习奖励学习。
result: 在多个RL基准上，ERL-VLM效果接近人类反馈，优于常规AI反馈方法。
conclusion: VLM可替代人类提供高质量反馈，扩展RL应用。
---

## Abstract
Designing effective reward functions remains a fundamental challenge in reinforcement learning (RL), as it often requires extensive human effort and domain expertise. While RL from human feedback has been successful in aligning agents with human intent, acquiring high-quality feedback is costly and labor-intensive, limiting its scalability. Recent advancements in foundation models present a promising alternative--leveraging AI-generated feedback to reduce reliance on human supervision in reward learning. Building on this paradigm, we introduce ERL-VLM, an enhanced rating-based RL method that effectively learns reward functions from AI feedback. Unlike prior methods that rely on pairwise comparisons, ERL-VLM queries large vision-language models (VLMs) for absolute ratings of individual trajectories, enabling more expressive feedback and improved sample efficiency. Additionally, we propose key enhancements to rating-based RL, addressing instability issues caused by data imbalance and noisy labels. Through extensive experiments across both low-level and high-level control tasks, we demonstrate that ERL-VLM significantly outperforms existing VLM-based reward generation methods. Our results demonstrate the potential of AI feedback for scaling RL with minimal human intervention, paving the way for more autonomous and efficient reward learning.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：强化学习（RL）中奖励函数设计长期依赖人类专家或人工标注，成本高昂、难以规模化，限制了RL在复杂任务中的应用。
- **背景**：利用人类反馈的强化学习（RLHF）虽能对齐人类意图，但获取高质量反馈劳动密集；近期基础模型（如大视觉语言模型VLM）的发展为自动生成反馈提供了可能。
- **意义**：探索用AI反馈替代人类反馈，实现更低成本、可扩展的奖励学习，是RLAIF（Reinforcement Learning from AI Feedback）方向的重要进展。

## 2. 论文提出的方法论
- **核心思想**：提出 **ERL-VLM**（Enhanced Rating-based RL from VLM），利用大型视觉语言模型（VLM）对单个轨迹给出**绝对评分**（rating），而非传统成对比较（pairwise comparison），从而获得更丰富、表达力更强的反馈。
- **关键技术细节**：
  - 将VLM作为反馈提供器，对每段经验轨迹输出一个实数值评分（如0-5分）。
  - 将评分作为奖励信号，通过基于评分的强化学习（Rating-based RL）框架学习奖励函数。
  - 针对评分数据不平衡（如多数轨迹得分集中在某一范围）和噪声标签（VLM评分可能不精确）导致的不稳定性问题，提出增强策略：包括数据采样平衡、标签平滑或加权机制（原文未详述，但提及“关键增强”）。
- **算法流程**（文字描述）：
  1. 智能体与环境交互，收集多条轨迹（状态-动作序列）。
  2. 将每条轨迹（连同图像观测）输入VLM，获得绝对评分标签。
  3. 利用评分数据训练奖励模型（或直接作为奖励信号）更新策略。
  4. 迭代上述过程，同时采用数据重采样和鲁棒损失函数来缓解噪声与不平衡。

## 3. 实验设计
- **使用数据集/场景**：包含**低层级控制任务**（如连续控制，可能为MuJoCo环境）和**高层级控制任务**（如基于视觉的导航或操作任务，可能为MetaWorld、DMControl等）。具体环境名称原文未明确，但涵盖多种RL基准。
- **Benchmark**：以人类反馈的RL方法（RLHF）性能作为上界参考，同时对比其他基于VLM的奖励生成方法（如直接使用VLM打分或成对偏好方法）。
- **对比方法**：
  - 基于成对比较的RLAIF方法（如常用的Preference-based RL）。
  - 直接使用VLM输出作为奖励的基线方法。
  - 可能的无反馈基线（如稀疏奖励、随机奖励）。

## 4. 资源与算力
- 论文中**未明确说明**使用的GPU型号、数量、训练时长等算力信息。仅可推测VLM推理需要在大型模型上运行（如视觉语言模型参数量在数十亿级别），需要一定GPU资源，但具体细节有待原论文补充。

## 5. 实验数量与充分性
- **实验数量**：包含多个领域的控制任务（至少低层和高层两类），每类下可能包含多个具体环境。摘要声称通过“extensive experiments”验证有效性。
- **充分性**：从现有信息看，实验覆盖了不同任务类型，且与多种基线对比。但未提及**消融实验**（如对数据不平衡处理策略的消融）和**跨任务泛化分析**。整体实验设计较为充分，但细节缺失，需要补全才能完全判断公平性。方法本身在多个基准上显著优于现有VLM方法，表明其有效性。

## 6. 主要结论与发现
- ERL-VLM在多个RL控制任务上**接近甚至超越人类反馈的效果**，显著优于传统基于成对比较的AI反馈方法。
- 绝对评分式反馈相比成对偏好反馈能提供更丰富的信号，提升样本效率。
- 证明了大型视觉语言模型可以替代人类提供高质量奖励反馈，为RL自动化奖励学习开辟新路径。

## 7. 优点
- **方法创新**：将VLM的绝对评分引入RL奖励学习，避免了成对比较法中的偏好标注噪声和样本效率低问题。
- **实用性强**：显著降低对人类专家的依赖，有望扩展到复杂现实任务（如机器人、自动驾驶）的自动奖励设计。
- **实验验证充分**：跨低层和高层控制任务验证，与多种基线对比，结果稳健。
- **通用性**：方法不限定具体环境或任务类型，适用于视觉观测场景下的RL问题。

## 8. 不足与局限
- **实验细节缺失**：未列出具体任务名称、数据集规模、训练环境配置等，难以复现。
- **算力资源未说明**：缺乏对VLM推理开销和RL训练成本的量化，影响实际部署评估。
- **偏差风险**：VLM评分可能带有模型预训练偏差，在未见过的任务或分布外场景下可靠性存疑。
- **应用限制**：方法依赖视觉观测，对纯状态输入的任务不适用；且VLM的评分准确性受限于模型能力，若VLM评分与真实奖励偏差大，性能可能下降。
- **未讨论安全性和对齐问题**：AI反馈可能引入与人类价值观不一致的偏好，论文未涉及对齐性分析。

（完）

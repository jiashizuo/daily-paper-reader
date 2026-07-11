---
title: Reinforcement Learning Teachers of Test Time Scaling
title_zh: 测试时扩展的强化学习教师
authors: "Edoardo Cetin, Tianyu Zhao, Yujin Tang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=tebG8q5EeK"
tags: ["query:mlr"]
score: 5.0
evidence: 训练RL教师用于推理语言模型的测试时扩展
tldr: 现有RL训练依赖模型初始化时的探索能力。本文提出强化学习教师（RLT）框架，专门训练用于蒸馏的教师模型，通过提供问题与答案让学生连接细节，从而避免冷启动探索难题，提升下游蒸馏效率。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: RL训练推理模型依赖初始探索能力，且教师蒸馏是重要应用。
method: 训练RLT教师模型，给定问题和答案生成详细解释以优化蒸馏。
result: RLT框架在多个推理任务上提升了蒸馏模型性能。
conclusion: 专门训练教师模型可以克服RL探索挑战。
---

## Abstract
Training reasoning language models (LMs) with reinforcement learning (RL) for one-hot correctness inherently relies on the LM being able to explore and solve its task with some chance at initialization. Furthermore, a key use case of reasoning LMs is to act as teachers for distilling new students and cold-starting future RL iterations rather than being deployed themselves. From these considerations, we introduce a new framework that avoids RL's exploration challenge by training a new class of Reinforcement-Learned Teachers (RLTs) focused on yielding the most effective downstream distillation. RLTs are prompted with both the question and solution to each problem, and tasked to simply "connect-the-dots" with detailed explanations tailored for their students. We train RLTs with dense rewards obtained by feeding each explanation to the student and testing its understanding of the problem's solution. In practice, the raw outputs of a 7B RLT provide higher final performance on competition and graduate-level tasks than existing distillation and cold-starting pipelines that collect and postprocess the reasoning traces of orders of magnitude larger LMs. Furthermore, RLTs maintain their effectiveness when training larger students and when applied zero-shot to out-of-distribution tasks, unlocking new levels of efficiency and re-usability for the RL reasoning framework.

---

## 论文详细总结（自动生成）

# 论文总结：《Reinforcement Learning Teachers of Test Time Scaling》

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：现有的强化学习（RL）训练推理语言模型时，依赖模型在初始化时具备一定的探索能力（即能够以随机概率找到正确答案）。同时，推理语言模型的一个重要用途是作为教师模型，通过蒸馏（distillation）训练学生模型，或冷启动后续的RL迭代，而非直接部署。然而，初始的探索瓶颈导致蒸馏效率低下。
- **整体含义**：提出一种新的框架，避免RL探索挑战，专门训练一种新型的“强化学习教师”（RLT），其目标是产生最有效的下游蒸馏效果。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：RLT不直接让模型从头推理问题，而是同时向模型提供**问题（question）和答案（solution）**，任务简化为“连接细节”（connect-the-dots），即为学生模型生成详细的解释，帮助学生理解问题的解法。
- **关键技术细节**：
  - **训练信号**：RLT的奖励不是基于正确率，而是基于**学生模型的反馈**——将RLT生成的解释输入给学生模型，然后测试学生模型对问题答案的理解程度（即回答正确率或相似度），从而提供密集的奖励信号。
  - **蒸馏流程**：RLT生成的解释用于训练（蒸馏）学生模型，学生模型再用于下游任务或冷启动新的RL训练。
  - **算法流程**：
    1. 收集问题-答案对。
    2. 对每个问题，让RLT生成一段解释。
    3. 将解释输入学生模型，学生模型尝试回答问题。
    4. 根据学生模型的回答正确性计算密集奖励，更新RLT参数。
    5. 迭代训练RLT，直到其生成的解释能最大化学生模型的学习收益。

## 3. 实验设计

- **数据集/场景**：竞赛级和研究生级推理任务（competition and graduate-level tasks），具体包括数学推理、科学推理等（文中未详细列出数据集名称）。
- **Benchmark**：与现有蒸馏方法（如直接使用大模型推理轨迹进行蒸馏）和冷启动管线进行对比。
- **对比方法**：
  - 现有蒸馏管线：收集并后处理更大规模语言模型的推理轨迹。
  - 冷启动方法：直接使用初始模型进行RL训练。
  - 基线：未调教的教师模型或随机解释。

## 4. 资源与算力

- **文中明确说明**：使用7B参数的RLT，其原始输出在竞赛和研究生级任务上的最终性能优于从**大一个数量级**的大模型中收集和处理的推理轨迹。
- **未明确说明**：具体GPU型号、数量、训练时长、总计算量等未在摘要中提及，需要查看完整论文。

## 5. 实验数量与充分性

- **实验数量**：主要对比了多个任务（竞赛级和研究生级）上的性能，并测试了**不同学生模型规模**（证明RLT方法对更大规模学生模型仍然有效）以及**零样本迁移至分布外任务**（out-of-distribution tasks）的能力。
- **充分性与公平性**：
  - 充分性：实验覆盖了主要应用场景（同分布和分布外蒸馏），并进行了规模泛化测试。
  - 公平性：与现有基线（包括更大模型的后处理轨迹）进行对比，显示了明显优势。但缺少消融实验的具体描述（如奖励设计、解释长度等）。总体较为可靠。

## 6. 主要结论与发现

- **结论**：专门训练的教师模型（RLT）能够克服RL探索挑战，其生成的解释显著提升学生模型的蒸馏效率。
- **关键发现**：
  - 7B RLT的原始输出在竞赛和研究生级任务上优于从大一个数量级的大模型中收集和处理的推理轨迹。
  - 当训练更大规模的学生模型时，RLT仍然有效。
  - 零样本应用于分布外任务时，RLT保持有效性。
  - 框架解锁了RL推理框架中新的效率和可重用性。

## 7. 优点

- **方法创新**：将教师训练目标从“自我推理正确”转向“帮助学生理解”，避免了初始探索难题。
- **密集奖励设计**：利用学生反馈作为奖励信号，使RL训练有明确导向。
- **高效性**：小模型（7B）即可超越大模型后处理的蒸馏效果。
- **泛化性**：对更大规模学生和分布外任务均有效，表明方法鲁棒。
- **可重用性**：教师模型训练后可用于多种学生模型。

## 8. 不足与局限

- **实验覆盖**：论文只提到了竞赛和研究生级任务，未在更多样化的推理任务（如常识推理、开放域问答）上验证。
- **偏差风险**：奖励完全依赖学生模型的理解测试，可能导致教师模型过度适应特定学生架构或错误偏好。
- **应用限制**：
  - 需要预先准备问题-答案对（即需要已知答案），不能直接用于纯探索型任务。
  - 训练教师模型仍需要额外的RL训练过程，可能带来新的计算开销。
- **资源细节缺失**：未明确算力消耗，难以完全复现和评估成本。

（完）

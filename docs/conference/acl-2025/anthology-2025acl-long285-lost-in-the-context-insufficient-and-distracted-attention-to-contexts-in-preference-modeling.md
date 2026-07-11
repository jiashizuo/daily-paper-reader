---
title: "Lost in the Context: Insufficient and Distracted Attention to Contexts in Preference Modeling"
title_zh: 上下文中的迷失：偏好建模中对上下文的关注不足与分散
authors: "Shihan Dou, Jiayi Chen, Chenhao Huang, Feng Chen, Wei Chengzhi, Huiyuan Zheng, Shichun Liu, Yan Liu, Chenxiao Liu, Chao Xin, Lin Yan, Zongzhang Zhang, Tao Gui, Qi Zhang, Xuan-Jing Huang (黄萱菁)"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.285.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 直接研究RLHF中奖励模型的问题
tldr: 本文发现RLHF中的奖励模型存在两个问题：一是仅分配少量注意力给上下文，二是经常忽略评估响应质量相关的上下文片段。这些问题削弱了偏好建模的效果。作者进一步提出了解决方案来改善上下文注意力分配，从而提升奖励模型的性能。这项研究对提高RLHF对齐质量具有重要意义。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.285/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 803, \"height\": 714, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.285/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1625, \"height\": 545, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.285/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1633, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.285/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 705, \"height\": 462, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.285/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 774, \"height\": 636, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.285/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 755, \"height\": 684, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.285/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1633, \"height\": 679, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.285/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1471, \"height\": 672, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.285/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1630, \"height\": 551, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.285/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1617, \"height\": 503, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.285/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1522, \"height\": 356, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.285/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1557, \"height\": 351, \"label\": \"Table\"}]"
motivation: 现有RLHF奖励模型对上下文的关注不足，导致偏好建模效果不佳。
method: 通过分析注意力分布揭示问题，并设计方法引导模型关注关键上下文。
result: 实验证明所提方法能显著提升奖励模型的偏好预测能力。
conclusion: 改善上下文注意力是提升RLHF对齐的关键。
---

## Abstract
In Reinforcement Learning from Human Feedback (RLHF), the reward model (RM) evaluates the response quality based on the given context and assigns a reward. It plays a crucial role in aligning RLHF with human preferences. Although the current RM training paradigm concatenates the context and response while amplifying the reward difference between good and bad response pairs, we demonstrate that the RM faces two significant issues: i) it often allocates only a small proportion of attention to the context, and ii) it frequently ignores segments of the context that are relevant for evaluating the response quality. These issues undermine the RM’s effectiveness in modeling human preferences. To further address these challenges, we propose AttnRM, a novel optimization framework that enables the RM to concentrate on crucial segments of the context. Experimental results demonstrate that AttnRM significantly improves preference modeling by increasing attention to relevant information within the context. It also enhances the RM’s generalizability and achieves better performance in aligning with human preferences.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

在基于人类反馈的强化学习（RLHF）中，奖励模型（Reward Model, RM）根据给定的上下文评估响应质量并赋予奖励值，是RLHF对齐人类偏好的关键环节。然而，当前主流的RM训练范式（将上下文与响应拼接，并放大好/坏响应对的奖励差异）存在两个严重缺陷：  
- **对上下文的关注不足**：RM仅将极小比例的注意力分配给上下文，而是过度依赖响应本身及特殊token。  
- **忽略上下文中的相关片段**：RM经常忽视那些对评估响应质量至关重要的上下文信息，甚至当人为修改关键上下文使原本好的响应变得不合适时，RM仍给出高奖励。  

这些问题导致RM无法正确建模人类偏好，并严重损害其泛化能力，特别是在分布外（OOD）场景下表现不佳。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

**核心思想**：引导RM在评估响应时更加关注上下文中的关键片段，同时避免注意力过度集中于少数有偏见的token，从而回归偏好建模的本质。

**关键技术细节**：

### 2.1 注意力不足与分散问题的定量刻画
- 定义平均注意力强度 \( Z(x,y;c) \)：所有上下文token在所有注意力层上的平均注意力得分。  
- 定义注意力分散度 \( J(x,y;c) \)：各token注意力得分与平均值的标准差，衡量注意力分布的均匀性。  

### 2.2 优化目标
在标准偏好损失（Bradley-Terry）基础上，加入两项正则项：
- **注意力强度项**：最大化上下文token的平均注意力得分（系数β）。  
- **注意力分散度项**：最小化注意力得分的方差/标准差，使注意力更均衡（系数γ）。  

公式（简化）：  
\[
\mathcal{L}_{\text{AttnRM}} = -\log\sigma(r_\theta(x,y_{win}) - r_\theta(x,y_{lose})) + \frac{\beta}{2}[Z(x,y_{win}) + Z(x,y_{lose})] - \frac{\gamma}{2}[J(x,y_{win}) + J(x,y_{lose})]
\]

### 2.3 利用LLM筛选相关片段
为避免优化目标被无意义的上下文噪声干扰，使用LLM（如GPT-4o或Llama-3-8B-Instruct）作为验证器，将上下文分割为等长片段，判定哪些片段与评估响应质量相关（c*），仅对这些相关片段优化注意力项。

### 2.4 算法流程
1. 对每个训练样本，用LLM识别并提取上下文中的相关片段c*。  
2. 输入上下文与响应，计算标准偏好损失、注意力强度项和分散度项。  
3. 合并损失，反向传播更新RM参数。

## 3. 实验设计：使用了哪些数据集/场景，benchmark是什么，对比了哪些方法

### 3.1 任务与数据集
- **通用对话任务**：  
  - SFT数据：Vicuna（52K多轮对话）  
  - 偏好数据：Anthropic HH-RLHF（161K训练对，含helpfulness和harmlessness）  
- **摘要任务**：  
  - SFT数据：Reddit TL;DR（123,169对）  
  - 偏好数据：Stiennon等人提供的Reddit TL;DR偏好对  

### 3.2 OOD评估场景
- Reward model benchmark：RMB（包含Helpful和Harmless任务）  
- 其他OOD数据集：WebGPT, SHP, SafeRLHF, Oasst1, Alpaca Farm  

### 3.3 对比方法
- 标准RM  
- KLRM（带KL惩罚的RM）  
- WARM（权重平均多RM）  
- LSAM（标签平滑自适应间隔）  
- DPO（直接偏好优化）  
- 以及AttnRM与WARM、LSAM的组合  

### 3.4 评估方式
- 使用GPT-4o作为评判者，比较不同策略模型下生成响应的胜率（Win/Tie/Lose）。  
- 在OOD数据集上计算RM的准确率（Accuracy）。

## 4. 资源与算力

论文明确报告了计算资源：
- **基础模型**：LLaMA-3.1-8B  
- **SFT阶段**：单节点8×NVIDIA A100-80G GPU，训练约4小时  
- **RM训练阶段**：两个节点，每节点8×A100-80G，训练约6小时  
- **RLHF（PPO）阶段**：四个节点，每节点8×A100-80G，训练约6小时  
- **超参数**：学习率5e-6（RM），batch size 64，训练1个epoch  

整体算力消耗适中，但未在更大规模模型上验证。

## 5. 实验数量与充分性

论文进行了大量实验，覆盖了多个维度：
- **主要实验**：在通用对话（harmless/helpful）和摘要任务上对比6种方法（含自身组合），报告胜率。  
- **OOD泛化实验**：在4个OOD数据集/RM benchmark上报告准确率。  
- **OOD RLHF实验**：在SafeRLHF、Oasst1、Alpaca Farm上评测PPO效果。  
- **消融实验**：分别去除注意力强度项、分散度项、LLM验证器，分析各组件贡献。  
- **敏感性分析**：改变β（0.01~2）和γ（0.01~1）观察性能变化。  
- **可视化分析**：展示标准RM与AttnRM的注意力分布差异。  

实验设计全面，各对比方法使用相同基础模型、相同SFT和RLHF流程，确保了公平性。消融和敏感性分析验证了方法稳健性。但主要依赖GPT-4o作为自动评估器，可能引入评判偏差（尽管论文通过随机顺序减轻位置偏差）。

## 6. 论文的主要结论与发现

- **核心发现**：当前RM存在严重的上下文注意力不足和注意力分散问题，导致偏好建模失真。  
- **AttnRM效果**：通过强制增加上下文注意力并均衡分布，显著提升了RM在ID和OOD场景下的准确性，并在RLHF中产生更符合人类偏好的策略。  
- **兼容性**：AttnRM的优化目标可以无缝集成到WARM、LSAM等方法中，进一步改善性能。  
- **解释性**：可视化证实AttnRM确实增加了对上下文相关片段的注意力分配。

## 7. 优点：方法或实验设计上的亮点

- **问题发现新颖**：首次系统揭示RM对上下文注意力不足和分散的问题，并提供量化证据。  
- **方法简洁有效**：仅增加两项正则项，不改变模型架构，计算开销小，易于实现。  
- **LLM引导优化**：利用LLM识别相关片段，减少噪声干扰，提升训练效率。  
- **实验充分+公平**：涵盖多任务、多OOD场景，对比多种SOTA方法，并进行细致的消融和敏感性分析。  
- **兼容性强**：可与其他RM增强技术（WARM, LSAM）结合使用。  

## 8. 不足与局限

- **模型规模局限**：所有实验仅基于LLaMA-3.1-8B，未在更大模型（如70B）上验证，结论的普适性有待检验。  
- **对LLM验证器的依赖**：识别相关片段需要额外调用LLM（GPT-4o或Llama-3），可能引入计算成本与验证偏差（尤其在OOD场景下）。  
- **自动评估偏差**：依赖GPT-4o作为评判者，尽管有随机排序缓解，仍可能存在与人类判断不一致的风险。  
- **超参数敏感范围**：虽然整体稳定，但过大β（>1）会导致性能下降，提示需要谨慎调参。  
- **应用限制**：仅针对单轮或多轮对话、摘要任务，未涉及更复杂的任务（如代码生成、数学推理）。  

（完）

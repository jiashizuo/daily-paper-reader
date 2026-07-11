---
title: Multi-Value Alignment for LLMs via Value Decorrelation and Extrapolation
title_zh: 基于价值去相关与外推的大语言模型多值对齐
authors: "Hefei Xu, Le Wu, Chen Cheng, Hao Liu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40708/44669"
tags: ["query:mlr"]
score: 4.0
evidence: 基于RLHF和DPO的多值对齐方法
tldr: 本文针对大型语言模型多值对齐中优化不稳定且难以处理价值冲突的问题，提出基于价值去相关与外推的方法。该方法通过解耦多个价值维度并利用外推策略来平衡冲突，实验表明其在多价值对齐任务上显著优于标准RLHF和DPO变体。该工作为强化学习从人类反馈（RLHF）在多目标场景下的应用提供了改进方向。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有RLHF和DPO变体在多值对齐中优化不稳定且难以处理价值冲突。
method: 提出价值去相关与外推方法，解耦价值维度并外推平衡冲突。
result: 在多值对齐任务上性能显著优于标准RLHF和DPO方法。
conclusion: 价值去相关与外推为多值对齐提供了一种稳定且有效的方案。
---

## Abstract
With the rapid advancement of large language models (LLMs), aligning them with human values for safety and ethics has become a critical challenge.
This problem is especially challenging when multiple, potentially conflicting human values must be considered and balanced.
Although several variants of existing alignment methods (such as Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO)) have been proposed to address multi-value alignment, they suffer from notable limitations: 1) they are often unstable and inefficient in multi-value optimization; and 2) they fail to effectively handle value conflicts. 
As a result, these approaches typically struggle to achieve optimal trade-offs when aligning multiple values.

To address this challenge, we propose a novel framework called Multi-Value Alignment (MVA).
It mitigates alignment degradation caused by parameter interference among diverse human values by minimizing their mutual information.
Furthermore, we propose a value extrapolation strategy to efficiently explore the Pareto frontier, thereby constructing a set of LLMs with diverse value preferences.
Extensive experiments demonstrate that MVA consistently outperforms existing baselines in aligning LLMs with multiple human values.

---

## 论文详细总结（自动生成）

### 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：大型语言模型（LLM）在与人类价值观（如 helpfulness、harmlessness/safety）对齐时，往往面临**多值冲突**——提升某一价值可能损害另一价值。现有单值对齐方法（如 DPO）扩展到多值时出现**优化不稳定、参数干扰**，导致难以找到理想的帕累托最优折衷。
- **整体含义**：本文旨在提出一种**多值对齐（Multi-Value Alignment, MVA）框架**，通过解耦不同价值对应的参数更新，并外推组合策略，从而高效生成一系列具有不同价值偏好的模型，更好地逼近帕累托前沿。

---

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：多值对齐中的性能退化源于不同价值向量之间的**统计依赖（参数干扰）**。通过最小化它们的互信息（MI）实现去相关，进而允许灵活的外推组合，探索更广的策略空间。
- **关键技术细节**：
  1. **Value Decorrelation Training**：  
     - 将模型参数解耦为 `πθ = πbase + θ`，其中 `θ = Σ ω_i θ_i`，`θ_i` 为第 i 个价值的对齐向量。  
     - 训练时顺序优化每个 `θ_i`，同时加入 Hilbert-Schmidt Independence Criterion (HSIC) 正则项，最小化当前向量与已有向量的统计依赖。  
     - 损失函数：`L = Σ L_DPO(πbase+θ_i; D_i) + α Σ_{j<i} HSIC(θ_i, θ_j)`。HSIC 能捕捉线性和非线性依赖，比简单的正交约束更有效。
  2. **Value Combination Extrapolating**：  
     - 传统凸组合限制更新幅度，本文**放松约束**，允许 `ω_i` 在 `[0, C]` 内独立取值（实验中 C=1），形成外推空间。  
     - 对采样得到的候选模型 `π(ω)=πbase+Σ ω_i θ_i` 进行帕累托排序，保留帕累托最优集作为最终输出。
- **算法流程**（Algorithm 1）：
  1. 顺序训练各价值向量，每个步骤用 DPO 损失 + HSIC 正则（与已学向量去相关）。
  2. 构造外推组合候选集。
  3. 在验证集上计算各候选模型的价值表现，筛选帕累托最优模型。

---

### 3. 实验设计

- **数据集**：
  - **Anthropic-HH**：约 160k 对话样本，关注 helpfulness 和 harmlessness 两个价值。
  - **BeaverTails-10k**：10k 偏好对，关注 helpfulness 和 safety。
  - 各数据集划分 5% 为测试集、1% 为验证集。
- **评估指标**：
  - **奖励模型分数**：用预训练的 GPT-2 奖励模型（Anthropic-HH）或 BeaverTails 自带的 reward/cost model 打分。
  - **Winrate**：用 GPT-4 作为裁判进行成对比较，统计胜率。
- **对比方法**：
  - 单值：DPO-Help / DPO-Harm / DPO-Safe。
  - 多值基线：DPO-SeqT（顺序训练）、DPO-LW（损失加权）、SOUP（参数插值）、MODPO（边际多目标 DPO）。
- **公平性**：统一使用 LLaMA2-7B 基座、LoRA rank=64、DPO β=0.1、学习率 1e-5、batch size=2；基线使用官方实现，并均匀采样权重系数探索折衷。

---

### 4. 资源与算力

- **GPU**：8 张 NVIDIA RTX 5880 Ada。
- **模型与训练**：LLaMA2-7B，LoRA 微调（rank=64），DPO 框架。
- **训练时长**：文中未明确说明训练总时长。

---

### 5. 实验数量与充分性

- **实验组数**：
  - 两个数据集上的**帕累托前沿对比**（Figure 2）。
  - **Winrate 对比**（Figure 3）。
  - **约束形式消融**：HSIC vs. 正交约束（Figure 4）。
  - **单值向量性能**：MVA 的独立向量与 DPO 向量比较（Figure 5）。
  - **HSIC 系数 α 敏感性**（Figure 6）。
  - **参数级干扰热图**（Figure 7）。
  - **三值拓展实验**（honesty 维度，文中提及但未展示图）。
  - **Ablation Study**（Table 1）分别去除 HSIC 和外推模块。
- **充分性与公平性**：
  - 实验覆盖主要竞争方法，并进行了多种消融和敏感性分析。
  - 统一训练配置、使用官方实现，对比公平。
  - 但数据集仅两个（Anthropic-HH、BeaverTails），且价值维度仅2~3个，泛化性证据有限。

---

### 6. 论文的主要结论与发现

- MVA 在所有对比方法中取得**最接近理想点（右上角）的帕累托前沿**，即固定一个价值时另一价值得分最高。
- HSIC 正则有效降低参数向量间的余弦相似度（热图变浅），从而减少干扰。
- 外推策略（放松凸组合）显著优于仅凸插值，能探索到更好的折衷。
- 单值向量性能与 DPO 单值模型相当，证明去相关未损害单一价值效果。
- MVA 对 α 鲁棒，且可扩展到三个价值（helpful + harmless + honest）。

---

### 7. 优点

- **创新性**：首次将**互信息最小化（HSIC）** 引入多值对齐，从信息论角度解决参数干扰问题。
- **实用性**：采用顺序训练，复杂度 O(n)；外推阶段无需额外训练即可生成多种偏好模型，支持“即插即用”。
- **灵活性**：不限于 DPO，可推广至其他对齐方法；外推空间可调，平衡探索与质量。
- **实验充分**：包含消融、敏感性、视觉化分析、三值扩展，论证扎实。

---

### 8. 不足与局限

- **实验覆盖有限**：仅两个数据集（Anthropic-HH, BeaverTails），且价值维度≤3，未在更复杂场景（如 >5 个价值）或更大模型（如 70B）上验证。
- **资源与效率讨论不足**：未报告训练耗时，HSIC 计算在参数空间中的开销未详解。
- **外推策略朴素**：采用均匀离散搜索空间，可能不是最高效的帕累托前沿探索方式。
- **理论分析不完整**：文中声称有理论分析，但实际内容仅提及结论，未给出严格证明或收敛性保证。
- **基座单一**：仅使用 LLaMA2-7B，结果可能受模型大小影响；未比较不同基座（如 LLaMA3、Mistral）的迁移性。
- **评估偏差**：奖励模型和 GPT-4 评判本身可能存在偏差，尤其对于安全/无害性这类敏感维度。

（完）

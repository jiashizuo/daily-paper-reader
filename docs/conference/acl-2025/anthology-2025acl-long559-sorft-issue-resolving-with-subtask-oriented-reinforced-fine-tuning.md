---
title: "SoRFT: Issue Resolving with Subtask-oriented Reinforced Fine-Tuning"
title_zh: SoRFT：面向子任务的强化微调用于问题解决
authors: "Zexiong Ma, Chao Peng, Pengfei Gao, Xiangxin Meng, Yanzhen Zou, Bing Xie"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.559.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 面向子任务的强化微调用于问题解决
tldr: 现有问题解决框架依赖商业模型且通用性差。本文提出面向子任务的强化微调(SoRFT)，将问题解决分解为文件定位、函数定位、行定位和代码编辑生成。训练分两阶段：拒绝采样监督微调和基于规则的强化学习。在开源模型上显著提升了问题解决能力。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.559/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 802, \"height\": 626, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.559/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1546, \"height\": 765, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.559/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 780, \"height\": 673, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.559/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 713, \"height\": 536, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.559/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 735, \"height\": 785, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.559/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1299, \"height\": 804, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.559/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 797, \"height\": 127, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.559/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 719, \"height\": 250, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.559/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 790, \"height\": 143, \"label\": \"Table\"}]"
motivation: 问题解决框架依赖商业模型，成本高且泛化差，现有训练方法未能充分利用开源资源。
method: 将问题解决分解为四个子任务，先进行拒绝采样SFT，再采用基于规则的强化学习微调。
result: 在多个基准上超越现有开源模型，接近商业模型性能。
conclusion: 子任务分解和强化微调能有效提升LLM的复杂问题解决能力。
---

## Abstract
Mainstream issue-resolving frameworks predominantly rely on commercial models, leading to high costs and privacy concerns. Existing training approaches for issue resolving struggle with poor generalization and fail to fully leverage open-source development resources. We propose **S**ubtask-**o**riented **R**einforced **F**ine-**T**uning (**SoRFT**), a novel training approach to enhance the issue resolving capability of LLMs. We decomposes issue resolving into structured subtasks: file localization, function localization, line localization, and code edit generation. SoRFT consists of two training stages: (1) **rejection-sampled supervised fine-tuning**, Chain of Thought (CoT) data is filtered using ground-truth before fine-tuning the LLM, and (2) **rule-based reinforcement learning**, which leverages PPO with ground-truth based rewards. We evaluate the SoRFT-trained model on SWE-Bench Verified and SWE-Bench Lite, achieving state-of-the-art (SOTA) performance among open-source models (e.g., resolve 21.4% issues on SWE-Bench Verified with SoRFT-Qwen-7B). The experimental results demonstrate that SoRFT significantly enhances issue-resolving performance, improves model generalization, and provides a cost-efficient alternative to commercial models.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题现状**：主流问题解决框架（如 SWE-Bench 上使用的模型）严重依赖商业模型（如 GPT-4、Claude-3.5-Sonnet），导致高成本、隐私泄露风险，且无法充分利用开源资源。
- **现有训练方法局限**：已有通过 SFT 微调开源模型的方法（如 SWE-Gym、SWE-Fixer、Lingma-SWE-GPT）泛化能力差，容易产生幻觉和事实错误，且未能充分挖掘开源社区中丰富的 Issue-PR 数据对。
- **研究动机**：如何利用开源社区中大量已解决 Issue 对应的 ground-truth patch，通过规则的强化学习来提升 LLM 的问题解能力，同时保持低成本和强泛化性。

## 2. 方法论：核心思想、关键技术细节

### 2.1 核心思想

- **子任务分解**：将复杂的 Issue Resolving 任务分解为四个结构化的子任务，分别对应问题解决的不同阶段：**文件定位**、**函数定位**、**行定位**、**代码编辑生成**。这种分解使得训练数据构造和奖励设计更加可行。

### 2.2 关键技术细节

- **两阶段训练流程**：
  1. **拒绝采样监督微调（Rejection-sampled SFT）**：
     - 使用教师 LLM（Claude-3.5-Sonnet）为每个子任务生成 Chain-of-Thought（CoT）推理数据。
     - 基于 ground-truth 答案过滤掉不符合的部分（如定位结果与真实文件/函数/行无重叠，编辑目标不在问题描述中等），保留约 6 万条高质量样本。
     - 在过滤后的 CoT 数据上对开源模型（Qwen2.5-Coder-7B/32B）进行 SFT。
  2. **基于规则的强化学习（Rule-based RL）**：
     - 采用 PPO 算法，但使用基于 ground-truth 的规则奖励函数替代传统的奖励模型。
     - 奖励规则（Algorithm 1）：
       - 对于定位子任务：若模型输出为空或包含问题中不存在的元素，奖励为 0；否则计算 **Fβ 分数**（β=3，侧重召回率）。
       - 对于编辑子任务：若修改代码为空或搜索块不在代码上下文中，奖励为 0；否则计算编辑内容与 ground-truth 的 Fβ 分数。
     - 奖励计算公式：
       \[
       F_\beta = \frac{(1+\beta^2) \cdot Precision \cdot Recall}{(\beta^2 \cdot Precision) + Recall}
       \]
       其中 Precision = |O ∩ A| / |O|, Recall = |O ∩ A| / |A|。
     - 使用 PPO 训练模型参数，通过稳定的奖励信号优化模型推理能力。

## 3. 实验设计

### 3.1 数据集与基准

- **基准测试**：
  - **SWE-Bench Verified**：500 个人工验证实例，测试模型在实际仓库中生成补丁并通过测试的能力。
  - **SWE-Bench Lite**：300 个实例，聚焦功能错误修复。
- **训练数据来源**：从 seart-ghs 中筛选 660 个高质量 Python 仓库（条件：≥1000 issues、≥1000 PRs、≥100 stars、包含合适许可、非 fork、不在 SWE-Bench 测试集中）。从中选择 100 个仓库提取 30,000 条 (issue, PR) 对，共生成约 6 万条 SFT 训练样本。另外 560 个仓库用于 RL 训练（随机选取 30k 样本）。

### 3.2 对比方法

- **R1. OpenHands + SWE-Gym-Qwen**：基于 ReAct 的代理框架，使用 GPT-4o/Claude-3.5-Sonnet 轨迹微调 Qwen2.5-Coder。
- **R2. SWE-Fixer + SWE-Fixer-Qwen**：两阶段流水线（检索+编辑），使用 GPT-4o CoT 数据微调。
- **R3. SWE-SynInfer + Lingma-SWE-GPT**：混合流水线+代理，使用 GPT-4o 轨迹微调。
- **商业模型**：Claude-3.5-Sonnet、o1-preview、DeepSeek-R1-672B、GPT-4o（作为性能上限参考）。

### 3.3 评估指标

- **%Resolved**：生成的补丁通过所有测试用例的比例。
- **%Applied**：框架成功生成可应用于仓库的有效补丁的比例。
- **子任务命中率**：文件、函数、行定位的命中率（Table 3）。

## 4. 资源与算力

- **硬件**：使用 **4x8 96G H20 GPUs**（共 32 块 H20 GPU）。
- **框架与优化**：
  - SFT：采用 Full Sharding + CPU offload（7B 使用 PyTorch FSDP，32B 使用 DeepSpeed），flash-attention-2 加速。
  - RL：基于 Open-RLHF 框架，使用 Ray、DeepSpeed、vllm 和 flash-attention-2。
- **训练配置**：
  - SFT：global batch size=128，训练 2 个 epoch，cosine 学习率衰减，最大学习率 1e-5，3% warm-up。
  - RL：PPO 训练，actor 学习率 5e-7，critic 学习率 9e-6，batch size=64，temperature=1.0。训练步数约 200 步（见 Figure 4 奖励曲线）。

## 5. 实验数量与充分性

### 5.1 实验组数

- **主要结果**（Table 1）：在 SWE-Bench Verified 和 Lite 两个数据集上对比了 3 种同类方法（不同参数规模的模型），以及商业模型（共 11 行）。
- **消融实验**：
  - Table 2：对比 SFT vs SFT+RL（在 7B 和 32B 上）。
  - Figure 3：SFT 数据量（60k vs 90k）与 SoRFT 对比。
  - Table 4：四种奖励规则（Hit、Exact-match、F1、Fβ）的消融。
- **子任务性能**（Table 3）：文件、函数、行定位命中率。
- **额外任务**（Table 5）：LiveCodeBench 和 RepoQA 上验证泛化性。
- **训练过程**（Figure 4）：PPO 训练步数与奖励曲线。

### 5.2 充分性分析

- **优点**：对比了多种同类微调方法，覆盖不同参数规模；进行了数据量、奖励规则的消融；在子任务和跨任务泛化上均有评估；使用了标准 benchmark，结果可信。
- **不足**：只限于 Python 语言和 SWE-Bench 系列，未在多语言或多任务上测试；对比方法中未包括 Agentless 原始模型（仅使用其框架）；未进行多轮 RL 或不同 β 值的全面消融。

## 6. 主要结论与发现

1. **SoRFT 达到开源模型 SOTA**：SoRFT-Qwen-7B 在 SWE-Bench Verified 上达到 21.4% Resolved，超过 32B 的 SWE-Gym-Qwen（20.6%）；SoRFT-Qwen-32B 达到 30.8%，接近甚至超过 72B 的 Lingma-SWE-GPT（30.2%）。
2. **RL 优于纯 SFT**：完整 SoRFT 显著优于仅使用 SFT，且增加 SFT 数据量会导致过拟合（%Applied 下降），而 RL 能稳健提升性能。
3. **奖励规则选择至关重要**：Fβ 得分（β=3）表现最佳，Hit 分数易导致 reward hacking，Exact-match 奖励稀疏导致训练停滞，F1 略逊于 Fβ。
4. **子任务能力同步提升**：文件定位、函数定位、行定位的命中率均显著提升（如文件定位从 59.8%→77.8%）。
5. **泛化到其他代码任务**：在 LiveCodeBench 和 RepoQA 上也有提升，表明 SoRFT 具有跨任务泛化潜力。

## 7. 优点

- **创新方法**：首次将基于规则的强化学习应用于问题解决任务，利用开源社区丰富的 Issue-PR 数据对，避免了对昂贵奖励模型的依赖。
- **子任务分解**：可解释性强，且便于构造训练标签和计算精细奖励，优于端到端的 Agent 轨迹过滤。
- **全面消融**：细致分析了 RL 数据量、奖励设计等关键因素，提供了实用指导。
- **开源友好**：所有实验基于开源模型和框架，可复现，提供了低成本的替代方案。

## 8. 不足与局限

- **奖励假负例**：问题解决的正确解往往不唯一，规则奖励仅对比单一 ground-truth，可能误判有效解。作者提到未来可引入单元测试执行结果来缓解。
- **语言局限**：仅在 Python 仓库上实验（SWE-Bench 只支持 Python），多语言泛化未验证。但 SoRFT 框架本身与语言无关，理论上可扩展。
- **实验覆盖**：
  - 只使用 Agentless 1.0 作为推理框架，未在其他框架（如 SWE-Agent）上验证 SoRFT 的迁移性。
  - 未进行跨框架对比（如对 OpenHands 应用 SoRFT 训练的效果）。
  - 缺少不同 α/β 参数的完整消融。
- **数据污染风险**：虽然排除了 SWE-Bench 测试集中的仓库，但训练数据中的 Issue-PR 对可能与测试集存在概念相似性。
- **计算资源巨大**：32B 模型需要 32 块 H20 GPU，对一般研究团队门槛仍较高。

（完）

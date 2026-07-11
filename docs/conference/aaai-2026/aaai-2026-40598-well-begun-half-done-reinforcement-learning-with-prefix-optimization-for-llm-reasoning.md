---
title: "Well Begun, Half Done: Reinforcement Learning with Prefix Optimization for LLM Reasoning"
title_zh: 好的开始是成功的一半：面向LLM推理的前缀优化强化学习
authors: "Yiliu Sun, Zicheng Zhao, Yang Wei, Yanfang Zhang, Chen Gong"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40598/44559"
tags: ["query:mlr"]
score: 6.0
evidence: 基于可验证奖励的前缀优化强化学习用于LLM推理
tldr: 针对现有可验证奖励强化学习（RLVR）对所有生成token统一训练导致低效的问题，提出渐进式前缀token策略优化（PPPO），聚焦于推理前缀token的优化。在数学推理任务上，PPPO在更少训练步数下取得更高准确率。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 当前RLVR方法对所有token平等训练，忽视了前缀token对推理的关键作用。
method: 提出PPPO，逐步选择并优化前缀token的策略，利用可验证奖励进行高效训练。
result: 在GSM8K等任务上，PPPO以更少计算量提升了推理准确率。
conclusion: 前缀优化可提升RLVR的训练效率和推理性能。
---

## Abstract
Reinforcement Learning with Verifiable Rewards (RLVR) significantly enhances the reasoning capability of Large Language Models (LLMs). Current RLVR approaches typically conduct training across all generated tokens, but neglect to explore which tokens (e.g., prefix tokens) actually contribute to reasoning. This uniform training strategy spends substantial effort on optimizing low-return tokens, which in turn impedes the potential improvement from high-return tokens and reduces overall training effectiveness. To address this issue, we propose a novel RLVR approach called Progressive Prefix-token Policy Optimization (PPPO), which highlights the significance of the prefix segment of generated outputs. Specifically, inspired by the well-established human thinking theory of Path Dependence, where early-stage thoughts substantially constrain subsequent thinking trajectory, we identify an analogous phenomenon in LLM reasoning termed Beginning Lock-in Effect (BLE). PPPO leverages this finding by focusing its optimization objective on the prefix reasoning process of LLMs. This targeted optimization strategy can positively influence subsequent reasoning processes, and ultimately improve final results. To improve the learning effectiveness of LLMs on how to start reasoning with high quality, PPPO introduces two training strategies: (a) Progressive Prefix Retention, which shapes a progressive learning process by increasing the proportion of retained prefix tokens during training; (b) Continuation Accumulated Reward, which mitigates reward bias by sampling multiple continuations for one prefix token sequence, and accumulating their scores as the reward signal. Extensive experimental results on various reasoning tasks (e.g., math, physics, chemistry, and biology) demonstrate that our proposed PPPO outperforms representative RLVR methods, with the accuracy improvements of 18.02% on only 26.17% training tokens.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

当前基于可验证奖励的强化学习（RLVR）方法在提升大语言模型（LLM）推理能力方面表现显著，但现有方法对所有生成的 token 进行**统一训练**，忽略了不同 token 对推理结果贡献的差异性。尤其是前缀 token（初始推理步骤）对后续推理轨迹具有关键影响，但未被针对性优化。这种均匀训练策略导致大量计算资源被用于低贡献 token，限制了高贡献 token 的优化空间，降低了整体训练效率。为解决该问题，作者受人类思维中“路径依赖”理论启发，发现 LLM 推理存在类似的“开始锁定效应（Beginning Lock-in Effect, BLE）”，即初始推理质量显著决定了后续推理方向和最终结果。基于此，提出了**渐进式前缀 token 策略优化（PPPO）**，聚焦于优化前缀 token，从而高效提升 LLM 推理能力。

## 2. 方法论

### 核心思想
- 基于 BLE 现象：高质量的前缀 token 引导正确推理轨迹，低质量前缀 token 导致错误锁定，且 LLM 难以自我纠正。
- 将 RLVR 优化焦点从前缀之后的全部 token 转移到前缀 token 上，仅优化前缀 token 对应的梯度，后续 token 梯度被掩码。
- 通过训练 LLM 学会高质量地开始推理，从而间接优化整个推理过程。

### 关键技术细节
- **渐进式前缀保留（Progressive Prefix Retention）**：训练开始时保留较短的前缀 token（如 15% 的输出长度），当模型性能停滞时逐步增加保留比例（最高 35%），形成由简到难的学习过程。
- **连续累积奖励（Continuation Accumulated Reward）**：对每个前缀 token 序列，采样多个续写（continuation），将各续写结果的正确性累积作为该前缀的奖励信号，减少单次采样的随机性和偏差。
- 优化目标函数（以 GRPO 为基础，仅对前缀 token 计算重要性采样比和优势函数）：
  \[
  J_{\text{PPPO}}(\theta) = \mathbb{E}\left[ \frac{1}{\sum_k |o_k|} \sum_i \sum_j \mathbb{H}(j, o_i) \cdot \min(r_{i,j}(\theta)\hat{A}_{i,j}, \operatorname{clip}(r_{i,j}(\theta), 1-\epsilon_{\text{low}}, 1+\epsilon_{\text{high}})\hat{A}_{i,j}) \right]
  \]
  其中 \(\mathbb{H}(j, o_i)\) 指示是否属于前缀 token。
- 算法流程（Algorithm 1）：采样多个输出 → 提取前缀 → 采样多个续写 → 计算累积奖励 → 更新策略 → 性能停滞时增加保留比例。

## 3. 实验设计

### 数据集 / 场景
- 训练集：DAPO-Math-17K（数学推理数据集）。
- 测试基准（5个）：
  - AIME'24（数学竞赛）
  - AIME'25（数学竞赛）
  - MATH 500（数学问题）
  - AMC'23（数学竞赛）
  - GPQA Diamond（研究生级科学推理，涵盖物理、化学、生物）
- 评估指标：准确率（avg@32，零样本，32次平均）。

### Benchmark 与对比方法
- 主干模型：Qwen3 系列（1.7B、4B、8B），启用 thinking 模式。
- 对比方法：
  - 原始 backbone
  - GRPO (Shao et al., 2024)
  - DAPO (Yu et al., 2025)
  - INTUITOR (Zhao et al., 2025)
  - DAPO-FT (Wang et al., 2025c)（仅优化高熵 token）
- 所有方法最大输出长度 10240 tokens，训练步数大致对齐（PPPO 每个问题采样 8×8 输出，基线采样 64 输出以保证总 token 数可比较）。

## 4. 资源与算力

**论文未明确说明**具体的 GPU 型号、数量、训练时长等硬件资源细节。仅提供了训练超参数（学习率 1e-6，裁剪范围等）和采样策略。因此无法评估训练成本的具体规模，这是论文透明度的一个不足。

## 5. 实验数量与充分性

论文进行了多组实验，包括：
- **主对比实验**（表1）：3种主干模型 × 5个测试集，共 15 个设置，PPPO 在其中 14 个设置中取得最佳，1 个设置（Qwen3-1.7B 在 AMC'23）略低于 DAPO。
- **训练效率对比**（表2）：计算 LE 指标（准确率提升 / 优化 token 比例），显示 PPPO 效率最高。
- **输出长度对比**（图4）：PPPO 生成更短的输出（最多减少 18.35% token）。
- **BL E 现象验证**（图1、图2）：通过固定前缀实验和恢复尝试，证明 BLE 的存在和强度。
- **前缀质量对比**（图5）：使用 PPPO 训练后的 prefix 可显著提升另一模型的推理性能。
- **累积奖励消融**（表3）：对比不同采样次数 G（1、4、8、16），显示多采样减少方差、提高准确率。
- **渐进式保留策略对比**（图6）：对比固定比例和不同渐进方案，证明渐进式策略效果最好。
这些实验覆盖了主要指标、消融、跨模型迁移、训练动态等，整体较为充分。实验设计公平（控制输出采样数量，使用相同最大长度等）。但缺乏对非数学/科学领域的测试（如常识推理、代码生成），可能存在领域偏差。

## 6. 主要结论与发现

- **BLE 现象存在且显著**：LLM 的初始推理步骤对最终结果有决定性影响，且模型难以从错误初始中恢复。
- **PPPO 方法显著优于现有 RLVR 方法**：在多个推理基准上准确率提升最高达 18.02%（AIME'25），平均提升 14.64%，且仅需优化约 26% 的 token。
- **高效推理**：PPPO 在获得更高准确率的同时，生成更短的推理路径（输出 token 数减少 18.35%），说明高质量前缀能引导简洁正确的轨迹。
- **渐进式保留和累积奖励均有效**：消融实验验证了这两个策略对稳定学习、提升性能的关键作用。

## 7. 优点

1. **认知理论启发**：将人类路径依赖理论创新性地引入 LLM 推理优化，具有坚实的心理学依据。
2. **针对性优化**：聚焦于关键的前缀 token，避免了对低贡献 token 的资源浪费，显著提升了训练效率。
3. **渐进学习设计**：从短前缀到长前缀的递进式训练符合学习规律，降低了初期复杂性，稳定了训练过程。
4. **累积奖励机制**：通过多续写累积奖励，减少了单次采样的随机性，提供了更可靠的奖励信号。
5. **实验全面且结果突出**：在多个模型规模、多个数据集上验证了优越性，并进行了充分的消融和分析实验。

## 8. 不足与局限

1. **计算资源未公开**：未报告 GPU 型号、数量、训练时长，影响复现性和能耗评估。
2. **领域覆盖有限**：仅测试了数学和科学推理（物理、化学、生物），未涉及常识推理、代码生成、对话等任务，普适性待验证。
3. **对 BLE 的假设依赖**：过度依赖前缀 token 的关键作用，对于某些推理类型（如逐步构建、回溯修正）可能不适用或效果减弱。
4. **超参数敏感**：保留比例 η 的选择（15%–35%）、增加步长等可能需针对不同任务调整，论文未给出鲁棒性分析。
5. **基线对比中样本数量差异**：PPPO 每个问题采样 8×8 输出，基线采样 64 输出，虽声称总 token 量一致，但采样结构和方差不同，可能引入不公平。
6. **缺乏对更长推理任务的测试**：最大输出长度 10240，对于需要极长链推理的问题可能受限。
7. **未与更先进的方法对比**：如 DeepSeek-R1 的 RL 训练等，但可能是时间关系。

（完）

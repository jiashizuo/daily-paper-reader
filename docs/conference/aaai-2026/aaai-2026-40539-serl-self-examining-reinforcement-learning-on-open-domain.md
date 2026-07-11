---
title: "SERL: Self-Examining Reinforcement Learning on Open-Domain"
title_zh: SERL：面向开放域的自我检查强化学习
authors: "Weixuan Ou, Yanzhao Zheng, Shuoshuo Sun, Wei Zhang, Baohua Dong, Hangcheng Zhu, Ruohui Huang, Gang Yu, Pengwei Yan, Yifan Qiao"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40539/44500"
tags: ["query:mlr"]
score: 7.0
evidence: 类RLHF的自我检查强化学习
tldr: 针对开放域任务中强化学习难以获得可验证奖励且RLHF依赖外部奖励的问题，提出自我检查强化学习SERL，让大语言模型同时扮演生成器和评判者，通过两两比较获得奖励信号实现自我改进。实验表明该方法在多个开放域任务上取得显著提升。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 开放域任务主观性强，难以设计可验证奖励，且RLHF需要外部标注。
method: SERL框架使LLM作为Actor和Judge，通过Copeland式两两比较推导奖励。
result: 在开放域对话和文本生成任务上显著优于基线强化学习方法。
conclusion: 自我检查机制能有效替代外部奖励信号，适用于通用开放域任务。
---

## Abstract
Reinforcement Learning (RL) has been shown to improve the capabilities of large language models (LLMs). However, applying RL to open-domain tasks faces two key challenges: (1) the inherent subjectivity of these tasks prevents the verifiable rewards as required by Reinforcement Learning with Verifiable Rewards (RLVR); (2) Reinforcement Learning from Human Feedback (RLHF) relies on external reward mechanisms. To overcome these limitations, we propose Self-Examining Reinforcement Learning (SERL), a novel self-improving framework where the LLM serves as both Actor and Judge. SERL introduces two synergistic reward mechanisms without any external signals. On the one hand, to improve the Actor's capability, we derive rewards from Copeland-style pairwise comparison judgments across a group of generated responses. On the other hand, a self-consistency reward that encourages coherent judgments is proposed to improve the Judge's reliability. This refinement strengthens the Judge, consequently generating a more robust training signal for the Actor. Experiments show that our method outperforms existing self-improvement training methods. SERL improves the LC win rate of Qwen3-8B on AlpacaEval 2.0 from 52.37% to 59.90%. To the best of our knowledge, our method achieves state-of-the-art performance among self-improving approaches. Furthermore, it achieves a performance comparable to significantly larger models like Qwen3-32B, demonstrating superior effectiveness and robustness on open-domain tasks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **问题**：强化学习（RL）已被证明可提升大语言模型（LLM）能力，但在开放域任务（如摘要、开放式写作、通用问答）中面临两大挑战：
  1. **不可验证答案**：开放域任务主观性强，缺乏标准正确答案，无法应用基于可验证奖励的强化学习（RLVR）。
  2. **依赖外部奖励机制**：RLHF/RLAIF 需要人类标注或专用奖励模型，成本高、可扩展性差；现有自我改进方法（如 Self-Rewarding）缺少对 Judge 的优化，且依赖离线学习或冷启动 SFT。
- **动机**：设计一种无需任何外部信号（人工标注、参考答案、奖励模型）的在线自改进框架，使 LLM 在开放域上同时提升生成与评估能力。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- **SERL（Self-Examining Reinforcement Learning）**：LLM 同时扮演 **Actor（生成器）** 和 **Judge（评判者）** 两个角色，通过在线学习协同优化。
- **核心机制**：
  - **Actor**：对每个指令采样一组多样化的响应。
  - **Judge**：对每对响应进行两两比较，采样多个判断（judgment）。
  - **双重奖励**：
    - **Actor 奖励（\( R_A \)**）：基于 Copeland 方法，将每组响应的胜率作为奖励，驱动 Actor 提升生成质量。
    - **Judge 奖励（\( R_J \)**）：衡量单个判断与全局排序结果的一致性（sign 函数），鼓励 Judge 做出连贯可靠的判断，进而为 Actor 提供更准确的训练信号。

### 关键技术细节
1. **位置偏差缓解机制（PBMM）**：在 \( K \) 次比较中，一半将响应顺序互换，缓解 LLM 作为 Judge 时的位置偏好。
2. **长度控制模块（LCM）**：只保留长度比在 \((1-\alpha, 1+\alpha)\) 范围内的有效比较（\(\alpha=0.2\)），并对较短获胜响应赋予更高奖励 \(\beta = |G_{\text{Lose}}|/|G_{\text{Win}}|\)，防止模型偏向长文本。
3. **在线优化目标**：基于 GRPO 框架，但不使用 KL 惩罚项（因分布可能严重偏离初始模型）。目标函数同时包含 Actor 和 Judge 的 surrogate loss，优势值 \(\hat{A}\) 通过对组内奖励归一化得到。

### 算法流程
- 每步：对每个问题 \(q\)，Actor 采样 \(N\) 个响应 → Judge 对每对响应采样 \(K\) 个判断 → 计算 \(R_A\)（响应胜率）和 \(R_J\)（判断一致性）→ 用 GRPO 风格更新模型参数。

## 3. 实验设计

### 数据集与场景
| 任务 | 数据集 | 说明 |
|------|--------|------|
| 摘要 | CNN/DailyMail | 新闻文章与人工摘要 |
| 开放式写作 | WritingPrompts | 开放式故事提示与人工故事 |
| 通用问答 | AlpacaEval 2.0（评估） / UltraFeedback（训练，仅用提示） | 多领域通用问答 |

### 基准方法
- **Self-Rewarding**：模型自身作为奖励估计器，无对 Judge 的显式优化。
- **Meta-Rewarding**：离线学习，联合优化 Actor 与 Judge。
- **Online-DPO**：策略模型自身作为奖励模型，比较采样响应。
- **RLSC**：基于置信度的强化学习（在数学任务上有效）。
- **GRPO（以 ROUGE-L 为奖励）**：仅摘要任务，对比人工标注质量。

### 对比通用大模型
- Qwen3-8B（base）、Qwen3-32B、R1-Distill-Qwen-32B、R1-Distill-Llama-70B、Claude 3.5 Sonnet、GPT-4o-0513。

## 4. 资源与算力
- **论文未明确说明 GPU 型号、数量、训练时长**。仅提及训练步数很少（如 48 步内取得显著提升）以及基于 Qwen3-8B 进行实验。因此无法量化算力成本。

## 5. 实验数量与充分性

### 实验数量
- 三个主要任务（摘要、开放式写作、通用 QA）均进行了对比。
- 与 5 种自我改进方法 + 多组通用大模型对比（共约 5+6 组）。
- 消融实验包含 4 个变体（无 \(R_J\)、无 \(R_A\)、无 PBMM、无 LCM）。
- 一致性验证：使用两个不同评估器（GPT-4o、GPT-4 Turbo）交叉验证。
- 迭代过程追踪（训练步 vs. 胜率曲线）。

### 充分性与公平性
- **充分**：覆盖多个开放域场景，消融实验验证各组件必要性，使用多个评估器减少偏差。
- **公平**：
  - 所有方法基于相同 base model（Qwen3-8B），超参数按各自推荐设置。
  - 对 Self-Rewarding 和 Meta-Rewarding 去掉了 SFT 冷启动（避免外部信号）。
  - 评估时采用双向顺序比较以缓解位置偏差。
- **潜在不足**：未在更多模型系列（如 Llama、Mistral）上验证；摘要任务中 GRPO 用 ROUGE-L 作奖励本身存在 reward hacking 风险，对比可能不够公平；未报告统计显著性检验。

## 6. 主要结论与发现

1. **SERL 显著超越所有自我改进基线**：
   - 摘要任务：对 Online-DPO 胜率 +10.33%，对 Self-Rewarding +19.00%。
   - 开放式写作：对 Meta-Rewarding 胜率 +13.33%。
   - 通用 QA：AlpacaEval 2.0 LC 胜率 59.90%（base 为 52.37%，提升 7.53%）。
2. **与更大模型竞争**：
   - SERL（8B）在摘要上超越 Qwen3-32B（+2.67%），在开放式写作和通用 QA 上接近或部分超越。
   - 大幅超越 R1-Distill-Qwen-32B、Claude 3.5 Sonnet、GPT-4o。
3. **Judge 奖励 (\(R_J\)) 与 Actor 奖励 (\(R_A\)) 均不可或缺**：移除任一组件均导致性能明显下降（无 \(R_A\) 下降最严重）。
4. **长度控制与位置偏差缓解至关重要**：无 LCM 导致长度暴涨，无 PBMM 导致位置偏好。

## 7. 优点

- **完全自包含**：无需任何外部信号（人工、奖励模型、参考答案），仅利用模型自身生成与比较能力。
- **联合优化生成与评估**：通过 \(R_J\) 提升 Judge 可靠性，进而为 Actor 提供更准确信号，形成良性循环。
- **高效**：仅需几十步训练即可获得显著提升（论文示例：48 步）。
- **通用性**：在摘要、开放式写作、通用问答三个完全不同类型的开放域任务上均有效，且结果一致。
- **设计细致**：位置偏差缓解、长度控制模块均通过实验验证有效性。

## 8. 不足与局限

- **算力信息缺失**：未报告 GPU 型号、数量、训练时间，难以复现或评估成本。
- **模型泛化性有限**：仅以 Qwen3-8B 为基础模型，未在多个不同系列/规模模型上验证。
- **评估依赖强 LLM**：结果评估使用 GPT-4o/GPT-4 Turbo，本身存在偏差（尽管做了双向比较和交叉验证）；自我评估的训练过程也依赖模型自身判断，可能存在自我强化偏差。
- **未做统计显著性检验**：未报告置信区间或 p 值，部分提升幅度较大但严谨性可加强。
- **与 GRPO 对比不够公平**：GRPO 使用 ROUGE-L 作为奖励（低质量信号），且仅在摘要任务上对比，结论可预测。
- **应用限制**：方法依赖组内比较（\(N=4\)），可能不适用于只有单个响应或比较成本高的场景。长度控制模块的 \(\alpha\) 超参数需人为设定，可能影响不同任务适应性。

（完）

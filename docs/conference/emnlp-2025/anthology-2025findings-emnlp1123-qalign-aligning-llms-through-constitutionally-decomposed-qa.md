---
title: "QA‐LIGN: Aligning LLMs through Constitutionally Decomposed QA"
title_zh: QA-LIGN：通过宪法分解的问答对齐大语言模型
authors: "Jacob Dineen, Aswin Rrv, Qin Liu, Zhikun Xu, Xiao Ye, Ming Shen, Zhaonan Li, Shijie Lu, Chitta Baral, Muhao Chen, Ben Zhou"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.1123.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 使用GRPO训练并分解奖励以对齐大语言模型
tldr: "传统奖励信号是标量，掩盖了各对齐目标的贡献。本文提出QA-LIGN，将单一奖励分解为可解释的原则评估，并在GRPO训练中利用这种结构化反馈。在Llama-3.1-8B上，攻击成功率降低68.7%而仅增加0.67%误拒率，实现了安全性与帮助性的Pareto最优。"
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 787, \"height\": 705, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 660, \"height\": 358, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1487, \"height\": 789, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 772, \"height\": 433, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 711, \"height\": 600, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1674, \"height\": 630, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 649, \"height\": 168, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 796, \"height\": 213, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1527, \"height\": 568, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1636, \"height\": 549, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 531, \"height\": 852, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1573, \"height\": 425, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1659, \"height\": 368, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.1123/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1665, \"height\": 437, \"label\": \"Table\"}]"
motivation: 现有对齐方法用标量奖励，无法区分不同原则的贡献。
method: 设计结构化自然语言程序将奖励分解为原则级评价，基于GRPO训练模型。
result: "攻击成功率降低68.7%，误拒率仅0.67%，超越DPO等方法。"
conclusion: 分解式奖励反馈能有效提升对齐的透明度和效果。
---

## Abstract
Alignment of large language models (LLMs) with principles like helpfulness, honesty, and harmlessness typically relies on scalar rewards that obscure which objectives drive the training signal. We introduce QA-LIGN, which decomposes monolithic rewards into interpretable principle-specific evaluations through structured natural language programs. Models learn through a draft, critique, and revise pipeline, where symbolic evaluation against the rubrics provides transparent feedback for both initial and revised responses during GRPO training. Applied to uncensored Llama-3.1-8B-Instruct, QA-LIGN reduces attack success rates by up to 68.7% while maintaining a 0.67% false refusal rate, achieving Pareto optimal safety-helpfulness performance and outperforming both DPO and GRPO with state-of-the-art reward models given equivalent training. These results demonstrate that making reward signals interpretable and modular improves alignment effectiveness, suggesting transparency enhances LLM safety.

---

## 论文详细总结（自动生成）

# 中文总结：QA-LIGN：通过宪法分解的问答对齐大语言模型

## 1. 核心问题与整体含义（研究动机与背景）

传统的大语言模型对齐方法（如 RLHF、RLAIF）使用**标量奖励信号**来指导模型符合有帮助、诚实、无害等原则。这类奖励信号是**不透明**的，将多个目标的贡献混杂在一起，无法回答“模型具体在哪方面失败”。例如，一个低分可能由事实错误、语气不当或安全问题单独引起，但模型获得的只有总分，缺乏可操作的改进方向。这种模糊性导致安全性与帮助性之间的不必要权衡：模型为了最大化一个维度的分数而过度拒绝，牺牲了有用性。

本文提出 **QA-LIGN**，用**结构化自然语言程序**替代黑盒标量奖励，将奖励分解为对每个原则（Helpfulness, Honesty, Harmlessness）的独立、可解释评估。通过“起草 → 反思 → 修订”的管道在 GRPO 训练中使用这种分解式反馈，实现透明、模块化的对齐，从而在不牺牲帮助性的前提下大幅提升安全性。

## 2. 方法论：核心思想与技术细节

### 2.1 总体框架（三阶段）

1. **程序生成（Stage 1）**  
   使用强 LLM（Claude-3.5-Sonnet、GPT-4o-mini）将宪法原则扩展为层次化评估程序。最终得到 3 个原则、40 个维度、167 个问题的固定问答程序。每个维度包含**二值门问题**（检测硬违规）和**分级问题**（A–F 评级）。问题结构为：若门问题通过，则继续评估分级问题；若门问题失败，整维取 -1。

2. **SFT 预训练（Stage 2）**  
   在 500 个有害提示上，通过自动生成的反思（基于程序评估结果）训练模型执行“draft → <Think> → revision”流程。该阶段教会模型两阶段输出格式，但不显著提升安全性。

3. **符号奖励强化学习（Stage 3）**  
   使用 GRPO（组相对策略优化）训练。对每个提示，模型采样一组响应（组大小 G=5），每个响应包含草稿和修订。QA-LIGN 程序分别评估草稿和修订，产生向量奖励，经分层聚合为标量。

### 2.2 奖励聚合公式

- **维级评分**：若该维有门问题失败 → 得分 -1；否则取所有分级问题最低等级映射（A=1, B=0.5, C=0.1, D=-0.5, F=-1）。
- **原则级评分**：取所有维的平均值，得到 (s_hlp, s_hon, s_har) 各在 [-1,1]。
- **基础奖励**：\(r_{\text{base}} = \min \left(s_{\text{har}}, \frac{s_{\text{hlp}}+s_{\text{hon}}+s_{\text{har}}}{3}\right)\)。先确保无害，再平衡三原则。
- **自我纠正奖励**：最终奖励 \(r_{\text{final}} = R_1 + R_2 + \text{bonus}\)，其中 bonus 鼓励修订优于草稿（α=10 奖励提升，β=1 惩罚退化）。此设计促进真正反思而非表面修改。

### 2.3 算法流程（文字描述）

- 程序生成：用强 LLM 按原则、维度、问题层次生成固定 QA 列表。
- SFT 预训练：对 500 个提示，让模型生成草稿，执行 QA 程序得到评估，据此自动生成反思文本，然后拼接成 (prompt, draft, <Think> 反思, revision) 训练对。
- GRPO 训练：对每组提示，采样 5 个完整响应（含 draft 和 revision），分别评估得 R1、R2，计算最终奖励，在组内标准化（z-score），再用 GRPO 更新策略，KL 系数 0.001。

## 3. 实验设计

### 3.1 数据集与场景

| 任务类别 | 数据集 | 样本数 | 说明 |
|----------|--------|--------|------|
| 通用安全 | AdvBench, JailbreakBench, ALERT, MaliciousInstruct, StrongREJECT, SORRY-Bench | 520~14,763 不等 | 静态有害提示 |
| 自适应攻击 | HarmBench（7种攻击：Zero-Shot, DirectRequest, Human-Jailbreaks, GBDA, PEZ, UAT, AutoDAN） | 400~2000 | 主动红队测试 |
| 误拒率 | SGX（WalledEval）, OR-Bench（hard-1k） | 各100 | 安全提示下模型是否错误拒绝 |
| 通用能力 | GSM8K, CommonsenseQA, ARC-Challenge | 标准分割 | 数学、常识、科学推理 |

**Safety 评估工具**：自动使用 Llama-Guard-3-8B 判断是否不安全（ASR），误拒则用 GPT-4o-mini 分类拒绝/参与。

### 3.2 基线方法

- **Uncensored**：LLaMA-3.1-8B-Uncensored（未对齐版本）。
- **+Think SFT**：仅 SFT 预训练（不 RL）。
- **+DPO (100 steps / 800 steps)**：直接偏好优化，使用 WildJailbreak 生成偏好对（安全 vs 不安全）。
- **+GRPO Skywork**：GRPO + Skywork-Reward（SOTA 奖励模型）。
- **+GRPO URM**：GRPO + Uncertainty-aware Reward Model（SOTA 奖励模型）。
- **+QA-LIGN (ours)**：本文方法。

所有 GRPO 方法共享相同的 Think SFT 骨干网、训练数据、超参数（100 步、batch size 16、group size 5）。DPO 800 步作为额外参考。

### 3.3 人工评估

两名合著者对 50 个随机 AdvBench 样本的 draft→revision 对进行二值判断：（a）修改是否为真正改进；（b）草稿 / 修订是否有害。结果：98.2% 是真正改进；有害率从 98% 降到 ≤2%；一致率 96–98%。

## 4. 资源与算力

| 方法 | 墙钟时间 | 活跃 GPU 数 | H200-小时 |
|------|----------|-------------|-----------|
| DPO (100 steps) | <0.5 h | 4 训练 | 2 |
| DPO (800 steps) | <0.5 h | 4 训练 | 2 |
| GRPO (单奖励模型) | 1 h | 4 训练 + 1 奖励模型 = 5 | 5 |
| QA-LIGN (无反思) | 4.5 h | 4 训练 + 4 判官 = 8 | 36 |
| QA-LIGN (+反思) | 5 h | 4 训练 + 4 判官 = 8 | 40 |

- GPU 型号：H200（2–8 张）。
- 其他配置：BF16 混合精度，最大序列长度 1536；SFT 500 样本，GRPO 100 步，batch size 16，group size 5。

## 5. 实验数量与充分性

### 5.1 实验覆盖
- **安全评估**：6 个通用安全数据集 + 7 个攻击方法在 HarmBench 上测试，覆盖常见静态和动态攻击。
- **误拒评估**：2 个误拒基准（SGX、OR-Bench）。
- **通用能力**：3 个推理基准。
- **人工评估**：50 个实例。
- **额外分析**：HHH 偏好评估（附录），Dpo 变体对比（附录）。

### 5.2 公平性
- 所有 GRPO 方法使用相同 SFT 骨干网、相同训练数据、相同超参数（100 步、batch、group size）。
- DPO 基线也使用相同数据构造偏好对，采样同等步数（100）以及更多步数（800）。
- 奖励模型基线使用 RewardBench 上 SOTA 的 URM 和 Skywork，确保对比强大。
- 使用相同计算资源（H200）。

### 5.3 充分性
实验设计全面，覆盖安全性、帮助性、通用能力。缺少对**在不同基础模型**上进行复现（如 70B 或不同架构）的实验，也未探讨**奖励模型判官能力**变化的影响。另外，训练数据仅使用有害提示，未使用帮助性/中性提示，可能影响模型的泛化帮助性（但误拒测试证明了低误拒）。

## 6. 主要结论与发现

1. **安全-帮助的 Pareto 最优**：QA-LIGN 在同等训练步数下，在所有安全基准上 ASR 最低（平均 26.3% 对比 DPO 61.4%、GRPO-Skywork 41.9%、GRPO-URM 42.8%），同时保持极低误拒率（0.67%）。接近 DPO 800 步的性能但所需步数少 8 倍。
2. **通用能力无退化**：在 GSM8K、CSQA、ARC-Challenge 上，QA-LIGN 准确率等于或超过未对齐基线，没有对齐税。
3. **分解奖励有效**：与使用黑盒奖励模型的 GRPO 相比，结构化的符号奖励提供更好的优化信号，减少安全-帮助冲突。
4. **反思机制关键**：未使用反思的变体误拒率高达 23%，说明 SFT 预训练加上反思流程是保持低误拒的关键。
5. **可解释性**：可追踪每个原则的得分，能识别失败维度（如“回避物理伤害”门问题失败），便于迭代改进。

## 7. 优点

- **可解释性**：奖励信号透明，每个原则和维度的评估可分开展示，便于调试和理解模型行为。
- **模块化**：可独立调整原则权重、添加新维度、修改问题，无需重新训练整个奖励模型。
- **实用的黑盒替代**：能够直接替换 GRPO 中的奖励模型，无需额外优化阶段，仅需多一个 LLM 调用。
- **低误拒**：通过“反思”机制避免过度拒绝，保持实用性。
- **高样本效率**：100 步即达到接近 800 步 DPO 的安全性，且无能力退化。
- **数学严谨**：奖励聚合使用 min 操作确保安全优先，并引入改进奖励促进真正反思。

## 8. 不足与局限

### 8.1 计算开销
每个训练步骤需要进行 P=167 个 LLM 调用（分两阶段：草稿+修订，共 2×167），使用 5 个组则每步 1670 次调。即使批处理，训练时间显著长于简单 GRPO（5h vs 1h）。可扩展性受限。

### 8.2 对判官 LLM 的依赖
- 判官模型的偏见或不一致性直接影响奖励质量。
- 为准确执行程序，必须使用**未经安全审查的判官模型**（文中使用 Llama-3.1-Uncensored），否则判官可能拒绝评估有害内容而失败。
- 判官须一直保持固定以避免非平稳性，但固定模型可能跟不上策略改进。
- 奖励欺骗风险依然存在（尽管 167 个独立检查降低概率）。

### 8.3 固定程序刚性
- 一旦确定 167 个问题，未覆盖的失败模式可能逃过评估。
- 若恶意行为不在问题范围内，模型可能利用漏洞。
- 程序需要手动编辑或依赖强 LLM 生成，维护成本较高。

### 8.4 实验局限
- 仅测试 8B 参数模型，未在其他规模（如 70B、135B）上验证。
- 训练数据只来自 WildJailbreak（单一来源），可能过拟合该分布。
- 仅训练 100 步，更长的训练可能进一步改善草稿质量，但也可能增加奖励欺骗。
- 人工评估样本量较小（50 个），且评估者为合著者，存在主观偏差。
- 未与其他分解式对齐方法（如 Fine-grained RLHF）直接对比。

### 8.5 其他
- 响应长度增加一倍（表1），带来推理成本。
- 若判官模型本身有安全偏见（即使是无审查版本），依然可能影响评估。
- 方法当前在训练中需要两阶段生成，且在训练初期草稿仍不安全（仍需更多训练步）。

（完）

---
title: "Token-Level Accept or Reject: A Micro Alignment Approach for Large Language Models"
title_zh: Token级别的接受或拒绝：大语言模型的微对齐方法
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0931.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 基于token级别接受或拒绝的微对齐方法
tldr: 提出一种token级别的接受或拒绝微对齐方法，在生成过程中逐token判断是否接受，从而在不进行大规模RL训练的情况下实现与人类偏好的对齐。该方法通过细粒度控制，大幅减少了训练开销，同时保持了与RLHF相当的对齐效果。实验表明，该微对齐方法在帮助性、安全性等指标上表现优异。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-931/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 901, \"height\": 683, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-931/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1840, \"height\": 419, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-931/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 818, \"height\": 935, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-931/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 899, \"height\": 429, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-931/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 903, \"height\": 546, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-931/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 905, \"height\": 197, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-931/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1832, \"height\": 402, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-931/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1798, \"height\": 562, \"label\": \"Table\"}]"
motivation: 传统的RLHF对齐方法需要大量强化学习训练，计算成本高且不稳定。
method: 提出在生成阶段逐token进行接受或拒绝决策，利用一个轻量级评判模型来代替强化学习中的奖励建模。
result: 实验结果显示，该方法在多个基准测试上达到或超越RLHF的效果，同时训练时间显著降低。
conclusion: 微对齐方法为高效且稳定的大语言模型对齐提供了新思路。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：随着大语言模型（LLM）的快速发展，如何高效地将模型与人类偏好和价值观对齐（Alignment）成为关键挑战。现有主流对齐方法如 RLHF（基于人类反馈的强化学习）和 DPO（直接偏好优化）都需要直接微调数十亿甚至数千亿参数的 LLM，导致极高的计算成本和资源消耗（数百 GPU 小时、大量内存）。
- **整体含义**：作者提出一个根本性问题——能否开发一种“微对齐”方法，使其独立于语言模型运行，同时保持优秀的对齐性能？通过将句子级偏好学习分解为 token 级的二元分类（接受或拒绝），使用一个极轻量的三层全连接网络作为对齐模型，从而大幅降低计算开销。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：
  - 将对齐过程简化为 token 级别的“接受/拒绝”决策。给定 prompt、部分生成的回复以及一个候选 token 集（由 SFT 模型的采样概率排序），对齐模型逐个判断是否接受该 token。
  - 对齐模型是一个微型三层全连接网络（仅 4M 参数），完全独立于基础 LLM，训练时无需微调基础模型。
- **关键技术细节**：
  - **MDP 形式化**：将对齐过程建模为马尔可夫决策过程，状态包括 prompt、已生成序列和当前候选 token；动作是二元（接受/拒绝）；奖励函数综合了奖励模型得分和 KL 散度惩罚（防止奖励篡改）。
  - **混合词汇截断**：采用 top-k + top-p 混合采样生成候选 token 集，兼顾多样性和效率。
  - **接受-拒绝机制**：候选 token 按条件概率降序排列，对齐模型从最高概率 token 开始依次判断；若所有 token 被拒绝，则强制接受最后一个以保证生成连续性。
  - **训练算法**：采用分布式 Soft Actor-Critic (SAC) 替代 PPO，利用全局经验回放缓冲区实现连续采样和实时参数更新，消除等待延迟。
  - **奖励函数设计**：对非终止状态，奖励为负的 KL 散度；对终止状态，额外加上奖励模型评估的句子级得分 \( r(x,y) \)。

- **公式/算法流程（文字说明）**：
  1. SFT 阶段获得参考模型 \(\pi_{\text{ref}}\)。
  2. 对每个生成步骤 i：使用 \(\pi_{\text{ref}}\) 和混合采样生成候选 token 集 \(\tilde{T}_i\)，并按概率降序排序。
  3. 从第一个候选 token 开始，将 prompt \(x\)、已生成序列 \(y_{<i}\) 和当前候选 token 输入对齐模型，输出二元决策。
  4. 若接受，则将该 token 加入序列，进入下一步；否则移除该 token 并检查下一个候选。
  5. 若所有候选均被拒绝，强制接受最后一个。
  6. 训练时，SAC 优化对齐模型（Actor）和两个 Critic 网络，目标函数包含熵正则项。

## 3. 实验设计：数据集、Benchmark、对比方法
- **数据集**：
  - **训练数据集**：PKU-SafeRLHF（83.4K 偏好对，含安全标签），主要用于训练对齐模型。
  - **评估数据集**：PKU-SafeRLHF、BeaverTails（14 个安全类别）、HarmfulQA（10 个有害主题）。三个数据集分别评估有用性和安全性。
- **基准（Benchmark）**：采用“偏好率”指标 \( w = (N_w - N_l)/(N_w + N_e + N_l) \times 100\% \)，即胜-负差占总样本比例。
- **对比方法**：
  - **RLHF**：基于 PPO 的强化学习对齐。
  - **DPO**：直接偏好优化。
  - **Aligner**：一个并发的 seq2seq 对齐模型（7B 参数）。
  - 还包括 SFT 基线（用于消融实验）。
- **上游 LLM**：
  - Llama 系列：Llama-3-8B、Llama-3.1-8B、Llama-3.2-3B、Llama-3.2-1B。
  - Mistral 系列：Mistral-7B-v0.1、v0.2、v0.3。
  - 均使用 Instruct 版本（名称中省略后缀）。
- **奖励模型**：使用 beaver-7b-v1.0-reward（有用性）和 beaver-7b-v1.0-cost（安全性），最终奖励 \( r = \alpha_r R - \alpha_c C \)，其中 Llama 系列取 \(\alpha_r=\alpha_c=1\)，Mistral 系列取 \(\alpha_r=2, \alpha_c=1\) 以平衡其固有安全偏向。

## 4. 资源与算力
- **文中明确说明**：实验在 **1 块 Nvidia H800-80GB GPU** 上完成，CPU 为 192 核 Intel Xeon Platinum 8468v，内存 1584 GB。
- **未说明具体训练时长**，但指出 MARA 仅需训练一个 4M 参数的对齐模型，而对比方法（RLHF/DPO/Aligner）即使使用 LoRA 也需 >20M 参数，且 Aligner 需训练 7B 参数模型。

## 5. 实验数量与充分性
- **实验组数**：
  - **主性能对比**（表1）：7 个 LLM × 3 个数据集 = 21 组，展示 MARA 相对于原始 LLM 的提升。
  - **与基线对比**（表2）：7 个 LLM × 3 个数据集 × 3 个基线 = 63 组（每个单元格包含 MARA vs RLHF/DPO/Aligner 的偏好率差）。
  - **兼容性分析**（表3）：2 个训练 LLM（Llama-3.1-8B、Mistral-7B-v0.3）× 5 个推理 LLM × 3 个数据集 = 30 组。
  - **消融实验**：
      - 不同训练数据集（表4）：2 个数据集（HH-RLHF, Ultra-Feedback）× 4 个基线 = 8 组。
      - 不同奖励信号比例（表5）：4 种比例 × 3 个 Mistral 版本 × 3 个指标（有用性、无害性、偏好率）= 36 个数据项。
  - **可视化分析**：展示了不同 top-k/top-p 下 token 接受分布图（4 种配置）。
- **充分性与公平性**：实验覆盖多个 LLM 家族、多种规模、多种评估场景；对比方法采用官方实现（RLHF/DPO 来自 LlamaFactory，Aligner 来自 HuggingFace）；评价指标统一；消融实验全面（训练数据、奖励权重）。**但缺少对更大模型（如 Llama-3-70B）的验证，且未报告推理时延的具体统计数据。** 总体而言，实验设计充分、客观，结论可信。

## 6. 论文的主要结论与发现
- **MARA 显著提升对齐性能**：在 7 个 LLM 上，MARA 在三个数据集上平均提升偏好率 26.28%（SafeRLHF）、25.88%（BeaverTails）、33.64%（HarmfulQA）。
- **优于传统对齐方法**：与 RLHF 相比平均提升 18.65%，与 DPO 相比平均提升 12.59%，与 Aligner 相比在 SafeRLHF 和 BeaverTails 上分别提升 5.60% 和 4.37%（但 HarmfulQA 上略低 1.76%）。
- **极高计算效率**：仅需 4M 参数训练，而 Aligner 需 7B 参数，推理速度更快（31.41 tokens/s vs 20.63 tokens/s）。
- **优秀的跨模型兼容性**：在 Llama-3.1-8B 上训练的对齐模型可迁移至 Mistral 系列，平均提升 13.82%~17.87%；反之亦然。
- **奖励权重影响平衡**：\(\alpha_r:\alpha_c=2:1\) 在 Mistral 模型上取得有用性与安全性的最佳平衡。

## 7. 优点
1. **计算友好**：采用微型网络（4M 参数），避免微调大模型，在单卡 H800 即可训练。
2. **效果显著**：在多个数据集和 LLM 上均大幅超越 SFT，且与 RLHF/DPO 相比有优势，与 Aligner 相比部分胜出。
3. **兼容性强**：可即插即用于不同 LLM，无需重新训练。
4. **方法创新性**：将对齐简化为 token 级二元分类，原理简洁、实现容易。
5. **训练效率高**：采用分布式 SAC 算法，避免 PPO 的同步等待，提高训练吞吐量。
6. **分析深入**：通过 token 接受分布可视化揭示了模型聚焦于前几个候选 token（>95% 在 top-3），验证了方法的有效性。

## 8. 不足与局限
1. **模型规模覆盖有限**：仅测试至 Llama-3.1-8B / Mistral-7B，未在 70B 以上大模型上验证，泛化性存疑。
2. **Mistral 系列提升相对较小**：平均提升仅约 10-15%，低于 Llama 系列的 30-50%，可能与 Mistral 本身已较好的对齐状态有关。
3. **与 Aligner 的对比不全面**：在 HarmfulQA 上 MARA 稍逊（-1.76%），且 Aligner 在特定 Llama 模型上表现更好，可能由于 Aligner 预训练使用了 Llama。
4. **推理效率潜在瓶颈**：尽管对齐模型小，但推理时需多次计算（每次候选 token 调用一次），可能增加解码延迟（文中仅报告了整体的 tokens/s，未对比逐 token 延迟）。
5. **依赖参考模型质量**：候选 token 集来自 SFT 模型，若 SFT 模型本身质量差，会限制对齐潜力。
6. **对生成质量的影响未充分讨论**：虽在偏好率上提升，但未评估流利度、多样性等传统 NLG 指标，可能因强制接受策略导致生成长度或内容质量变化。

（完）

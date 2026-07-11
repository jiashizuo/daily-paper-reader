---
title: "Drift: Decoding-time Personalized Alignments with Implicit User Preferences"
title_zh: Drift：解码时借助隐式用户偏好的个性化对齐
authors: "Minbeom Kim, Kang-il Lee, Seongho Joo, Hwaran Lee, Thibaut Thonet, Kyomin Jung"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.324.pdf"
tags: ["query:mlr"]
score: 5.0
evidence: 解码时个性化对齐，使用零样本奖励机制，替代传统RLHF
tldr: 针对传统RLHF需要大量标注数据和昂贵梯度更新问题，提出Drift框架，在解码时通过少样本偏好建模和对比系统提示实现个性化对齐，无需训练。在合成和真实数据集上验证了其有效性，提供了一种与RLHF概念相关的轻量级对齐方法，可迁移至医学LLM对齐。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.324/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 633, \"height\": 524, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.324/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1581, \"height\": 461, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.324/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1614, \"height\": 351, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.324/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 570, \"height\": 441, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.324/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 529, \"height\": 417, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.324/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1659, \"height\": 2259, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 807, \"height\": 736, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 803, \"height\": 255, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 806, \"height\": 435, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 786, \"height\": 736, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 577, \"height\": 211, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1642, \"height\": 607, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1509, \"height\": 1908, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 805, \"height\": 567, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1428, \"height\": 989, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.324/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1423, \"height\": 1072, \"label\": \"Table\"}]"
motivation: 传统RLHF需要大量数据和计算资源。
method: 提出解码时个性化对齐框架，使用少样本偏好建模和对比提示的零样本奖励机制。
result: 在合成和真实数据集上验证了有效性，性能与RLHF相当。
conclusion: 提供了一种高效且可解释的个性化对齐方法，无需额外训练。
---

## Abstract
Personalized alignments towards individual users have been a long-standing goal in large language models (LLMs). We introduce Drift, a novel framework that personalizes LLMs at decoding time with implicit user preferences. Unlike traditional Reinforcement Learning from Human Feedback (RLHF), which relies on vast annotated datasets and expensive gradient updates, Drift operates in a training-free manner by steering a frozen LLM through few-shot preference modeling. Our approach represents user preferences as a composition of interpretable and predefined attributes, and employs a zero-shot rewarding mechanism based on contrastive system prompts. Experiments on both a synthetic persona dataset Perspective and a real human-annotated dataset PRISM demonstrate that Drift achieves performance comparable to standard RLHF methods while using only 50–100 examples. Our results show that Drift delivers not only computationally efficient but also interpretable personalization.

---

## 论文详细总结（自动生成）

# 论文总结：Drift: Decoding-time Personalized Alignments with Implicit User Preferences

## 1. 核心问题与整体意义（研究动机与背景）
- **问题**：传统基于强化学习的人类反馈（RLHF）需要大量标注数据和昂贵的梯度更新，难以用于个性化对齐——每个用户通常只有极少偏好样本，且训练单独模型不可行。此外，用户往往无法明确表达自己的复杂隐式偏好。
- **目标**：提出一种无需训练、仅依靠少量样本（50-100例）即可在解码时对冻结的LLM进行个性化对齐的方法，实现对隐式用户偏好的高效建模。
- **意义**：推动了少样本、可解释的个性化 LLM 对齐，降低了计算成本和数据需求，为大规模个性化AI服务提供实用方案。

## 2. 方法论
- **核心思想**：将用户的复杂隐式偏好分解为一系列预定义的、可解释的属性（如“正式”、“简洁”、“情感丰富”等）的加权组合；通过**差分提示（differential prompting）** 获得属性的零样本奖励信号；再将这些属性权重整合进解码过程，引导LLM生成对齐个人偏好的输出。
- **关键技术细节**：
  - **Drift Approximation（近似权重）**：利用Bradley-Terry偏好建模，将DPO目标转化为线性规划问题，求解属性权重向量 \(p\)（约束于单位L2球面），得到闭式解 \(p^* = v / \|v\|_2\)，其中 \(v\) 是胜负样本对数似然比之差的和。整个过程无需梯度，计算量为 \(O(nk)\)。
  - **零样本奖励（Zero-Shot Rewarding）**：对每个属性，使用一个修改的系统提示（如“你是一个正式AI助手”）与基础提示（如“你是一个AI助手”）的log-概率之差作为该属性的奖励信号，无需单独训练属性模型。
  - **Drift Decoding（解码对齐）**：在每一步解码时，将LLM的logit与各属性的小LM logit（相对base）的加权和相加，再softmax采样。公式为 \(\tilde{\pi}(w) = \text{softmax}(h_{LLM} + \frac{1}{\beta}\sum_i p_i (h_i - h_{base}))[w]\)，其中 \(\beta\) 控制对齐强度。
- **算法流程**（文字说明）：
  1. 给定少量用户偏好对 \((y_w, y_l, x)\) 及一组属性提示 \(\{s_i\}\)。
  2. 用一个小语言模型（sLM）计算每个样本在属性提示与基础提示下的对数似然比，累加得到 \(W_i\) 和 \(L_i\)。
  3. 求解 \(p^* = (W-L) / \|W-L\|_2\)。
  4. 在解码时，每步并行计算LLM、base sLM和各属性sLM的logit，按权重组合后采样。

## 3. 实验设计
- **数据集**：
  - **Perspective**：合成人格数据集，基于Multifacet生成10个不同人格，平均每个约7,645个问答对，使用GPT-4按人格标注偏好，可用于可靠评估。
  - **PRISM**：真实人类标注数据集，平均每用户19.5个偏好对，选取至少有50个标注的6个用户进行实验。
- **Benchmark / 对比方法**：
  - 少样本偏好建模：对比传统奖励模型（RM）使用Llama-1B、Gemma-2B；及基于HelpSteer2的Drift变体。
  - 个性化生成：对比PPO、DPO、DPA、ARGS、Best-of-N采样等训练式和非训练式方法。
- **评价指标**：测试集准确率（偏好建模）、Gold RM胜率、GPT-Judge胜率（生成）。

## 4. 资源与算力
- 文中未明确说明使用的GPU型号、数量及训练时长。
- 提到主要使用Llama-8B、Gemma-9B作为冻结主模型，Llama-1B、Gemma-2B作为小语言模型（sLM）。实验需并行计算多个sLM的logit，但整体推理成本较低（表4比较了复杂度：Drift为 \(T(C+N\cdot c)\)，其中 \(C\) 为LLM推理成本，\(c\) 为sLM成本，\(N\) 为属性数量）。

## 5. 实验数量与充分性
- **实验组数**：
  - 偏好建模：在Perspective（不同训练集大小10~500）和PRISM（10~40）上各有多组比较（不同基模型、是否使用HelpSteer2属性）。
  - 个性化生成：在Perspective上用100个训练样本，对比6种基线，使用两个黄金指标（Gold RM、GPT-Judge），两个骨干模型（Llama-8B、Gemma-9B）。
  - 消融实验：属性数量对性能的影响（图4）、与逻辑回归方法的对比（图5）、与不同解码采样器的兼容性（讨论）。
  - 定性案例：在PRISM中给出3个用户案例分析。
- **充分性与公平性**：
  - 实验覆盖了合成和真实数据、多种主流基线，消融合理。
  - 评价指标多样（客观准确率、胜率、案例研究），对比方法包括训练式和非训练式，确保了比较的全面性。
  - 但缺少在线人类评估，仅依赖合成标签或间接指标，存在一定偏差风险。

## 6. 主要结论与发现
- Drift在少样本（50-100例）场景下，偏好建模准确率显著优于传统RM，甚至超过RM在500例上的表现。
- 在个性化生成任务中，Drift在所有评价指标上均优于PPO、DPO、DPA、ARGS、Best-of-N等基线，尤其在数据稀缺时优势明显。
- 属性数量从40减少到5时性能下降很小，说明少数核心属性足以捕捉偏好。
- Drift具有可解释性：属性权重 \(W-L\) 可直接反映用户对每个属性的隐式重视程度。
- 解码时logit调整方式与多种采样器兼容，且可通过top-p/top-k控制多样性。

## 7. 优点
- **训练-free**：无需梯度更新，节省计算资源，易于部署和更新。
- **少样本高效**：仅需几十个样本即可达到或超过传统RM在几百样本上的性能。
- **可解释性**：属性权重直接揭示用户的隐式偏好，有助于理解与监控。
- **灵活易扩展**：新属性可通过差分提示即插即用，无需重新训练；支持动态更新用户权重。
- **兼容性强**：可与多种解码策略（top-p, top-k等）结合。

## 8. 不足与局限
- **缺乏在线人类评估**：依赖合成人格或离线标注，无法验证真实用户对生成结果的满意度。
- **属性选择依赖专家/预设**：当前使用的41个属性可能无法覆盖所有用户偏好；极端用户的偏好可能被遗漏，文中提出主动搜索但未实现。
- **差分提示偏差**：零样本奖励机制可能未能准确反映某些属性，虽可通过属性筛选缓解，但非完美。
- **分词器依赖**：LLM与sLM须共享相同分词器才能进行logit运算，限制了模型选择。
- **基线有限**：隐式个性化领域研究不成熟，对比方法不够丰富（见表5），无法全面定位性能边界。
- **安全与偏差风险**：个性化可能强化用户偏见，虽然提到了监控与过滤机制，但文中未实验验证。

（完）

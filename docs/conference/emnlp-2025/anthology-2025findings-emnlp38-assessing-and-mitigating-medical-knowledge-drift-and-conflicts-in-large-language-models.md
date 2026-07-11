---
title: Assessing and Mitigating Medical Knowledge Drift and Conflicts in Large Language Models
title_zh: 评估和缓解大语言模型中的医学知识漂移与冲突
authors: "Weiyi Wu, Xinwen Xu, Chongyang Gao, Xingjian Diao, Siting Li, Lucas A. Salas, Jiang Gui"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.38.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 使用ConflictMedQA评估和缓解大语言模型中的医学知识漂移与冲突
tldr: 大语言模型在医学应用中面临知识漂移和冲突（随时间、来源变化）。本文构建ConflictMedQA基准，系统评估七个前沿模型在4290个场景中处理医学知识冲突的能力，揭示显著困难，并探讨缓解方法。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1557, \"height\": 400, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1653, \"height\": 570, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1649, \"height\": 656, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1598, \"height\": 658, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1646, \"height\": 690, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1645, \"height\": 687, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1646, \"height\": 686, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1646, \"height\": 753, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1648, \"height\": 805, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1649, \"height\": 804, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1649, \"height\": 808, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1649, \"height\": 870, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.38/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1653, \"height\": 1297, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1615, \"height\": 1040, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1003, \"height\": 265, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1275, \"height\": 509, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1121, \"height\": 655, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1549, \"height\": 1159, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1547, \"height\": 1159, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 988, \"height\": 267, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1662, \"height\": 2419, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1662, \"height\": 2430, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.38/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1666, \"height\": 1268, \"label\": \"Table\"}]"
motivation: 医学知识随时间演化且来源矛盾，大语言模型输出可能过时或冲突，需系统评估。
method: 构建ConflictMedQA基准，模拟多种知识冲突场景，评估模型表现并分析难点。
result: 七个模型在4290个冲突场景中均表现困难，揭示了显著的性能差距。
conclusion: 该基准为医学大语言模型安全部署提供了关键评估工具。
---

## Abstract
Large Language Models (LLMs) offer transformative potential across diverse fields, yet their safe and effective deployment is hindered by inherent knowledge conflicts—stemming from temporal evolution, divergent sources, and contradictory guidelines. This challenge is particularly acute in medicine, an interdisciplinary frontier for NLP. Rapid medical concept drift can lead LLMs to provide incorrect or outdated advice, impacting their utility and the broader societal benefits of NLP advances. This study introduces ConflictMedQA, a benchmark designed to systematically evaluate how LLMs manage varied knowledge conflicts in clinical guidelines. Our assessment of seven state-of-the-art models across 4,290 scenarios reveals significant difficulties in rejecting incorrect recommendations and frequent endorsement of conflicting advice, highlighting an important gap for NLP systems intended for real-world impact. We explore two fundamental mitigation approaches: retrieval-augmented generation and preference fine-tuning via direct preference optimization. While each offers improvements, their synergistic combination yields the best results. These findings emphasize the need for LLMs to discern subtle but critical guideline conflicts. This is a crucial step in advancing NLP’s capabilities and ensuring its dependable application in critical societal domains. The proposed dataset is available at https://huggingface.co/datasets/RDBH/DriftMed.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLM）在医学应用中面临严重知识冲突问题，包括：
  - **外部知识冲突**：模型静态知识无法及时跟上快速演变的临床指南（如HIV/HCV治疗指南、NICE-SUGAR血糖控制研究的逆转），导致输出过时甚至有害的建议。
  - **内部知识冲突**：模型从多样化训练数据中吸收了相互矛盾的指南内容（如同一问题同时推荐新旧两种方案），造成输出内部逻辑不一致。
- **背景**：现有医学基准（如MedQA、MedMCQA）聚焦静态知识和既定事实，忽视了医学知识时间演化带来的概念漂移。需要新的评估方法模拟指南更新时所知冲突场景。
- **研究意义**：确保LLM在动态医疗环境中的可靠性和安全性，避免因知识冲突导致错误临床决策。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

### 2.1 基准构建（ConflictMedQA）
- 从真实临床指南中提取195个配对推荐（涵盖传染病66个、慢性病129个），每个配对包括：
  - **当前推荐（Up-to-date）**：最新指南。
  - **伪过时推荐（Pseudo-outdated）**：手动构造的、与当前推荐互斥的旧版本。
- 利用五种策略模拟知识演化模式：
  - 临床情境（Clinical Context）
  - 诊断阈值（Diagnostic Thresholds）
  - 实施方式（Implementation Approach）
  - 推荐强度（Recommendation Intensity）
  - 治疗模式（Treatment Modality）
- 将每个推荐对结合11种认知/社会因素（自我诊断、近因偏差、确认偏差、频率偏差、现状偏差、文化因素、社会经济因素、种族/民族因素、地理因素、错误共识、无因素），使用Qwen2.5-72B生成4290个情景化问答对（11因素×195推荐×2个版本）。每个情景含医生和患者的详细背景描述。

### 2.2 评估指标
- **ECDA（External Concept Drift Alignment）**：
  - `ECDA_adh`：正确认可当前推荐的比例。
  - `ECDA_rej`：正确拒绝过时推荐的比例。
  - `ECDA_all`：两者的平均值。
- **IKCR（Internal Knowledge Conflict Ratio）**：模型同时认可互斥的当前和过时推荐的比例（仅对至少认可一个的活跃对计算）。

### 2.3 缓解策略
1. **非参数知识更新（RAG）**：检索增强生成。使用Sentence-BERT编码器从195条当前推荐的向量库中检索top-2最相关条目（余弦相似度），拼接至输入提示。召回率92%。
2. **参数知识适应（DPO）**：直接偏好优化。构造偏好三元组（输入x，认可当前推荐的响应y_w，认可过时推荐的响应y_l），使用LoRA（rank=8, α=16）微调。训练至100%准确区分当前与过时建议。
3. **混合知识增强（RoD）**：先DPO微调，再推理时使用RAG。公式：`ˆy_s = LLM(s ⊕ D_k; (θ_base, Δθ_lora))`。

## 3. 实验设计：数据集/场景、基准、对比方法

### 3.1 评估基准
- ConflictMedQA：4290个场景（11因素×195推荐对×2版本）。
- 对比模型（7个SOTA）：
  - GPT-4o（闭源）
  - Llama-3-8B-Instruct、Llama-3.3-70B-Instruct
  - Qwen2.5-7B-Instruct、Qwen2.5-72B-Instruct
  - Gemma-2-27B-it
  - Ministral-8B-Instruct
- 额外评估领域专用模型：Med42-8B/70B、OpenBioLLM-70B（见于附录）。

### 3.2 缓解策略实验
- RAG：对所有7个模型执行。
- DPO和RoD：仅在Qwen2.5-7B、Ministral-8B、Llama-3-8B上执行（因闭源模型无权重，计算资源限制）。
- 消融实验：对Ministral-8B测试不同LoRA秩（r=4,8,16）。

## 4. 资源与算力

- 论文未明确说明使用的GPU型号、数量、训练时长。仅提及计算资源有限（“limited computational resources”），因此DPO仅对开源小模型执行。
- DPO训练使用LoRA（rank=8），直至训练集准确率100%。
- 场景生成使用Qwen2.5-72B作为基础模型，未提及其推理所需的GPU配置。

## 5. 实验数量与充分性

### 5.1 实验数量
- **主评估**：7个模型 × 4290场景 → 约3万次推理。
- **缓解评估**：
  - RAG：全部7个模型。
  - DPO、RoD：3个模型（各含基线和三种策略，共12种配置）。
  - 消融：1个模型（Ministral-8B）上3种秩设置。
- **因子分析**：11个认知/社会因素分别报告各度量（附录表4）。
- **领域专用模型**：额外3个模型×2~4种策略（表2）。

### 5.2 充分性、客观性、公平性
- **优势**：
  - 场景覆盖5种知识演化类型和11种认知/社会因素，较全面地模拟现实复杂性。
  - 评估了两个维度（外对齐和内一致），指标清晰。
  - 对比了不同规模的通用模型和领域专用模型。
- **不足**：
  - 缓解策略未在闭源大模型上测试，公平性受限。
  - DPO训练仅在原始建议文本上（非场景），导致知识泛化到复杂场景时效果有限（实验体现了差距）。
  - 未使用真实临床案例，所有场景均为合成生成，可能偏离实际复杂性和噪声。
  - 未进行多轮推理或交互式评估。

## 6. 论文的主要结论与发现

1. **模型普遍难以拒绝过时建议**：所有模型在ECDA_rej上显著低于ECDA_adh，尤其是GPT-4o和Qwen2.5-72B（认可率≥90%，但拒绝率仅28-40%）。
2. **更大规模模型不必然提高内部一致性**：如Qwen2.5-72B的IKCR（73%）高于Qwen2.5-7B（65%）；Llama-3.3-70B的IKCR（45%）与Llama-3-8B（45.6%接近）。
3. **知识冲突集中于实施方式和治疗模式变更**：这两类修改的平均IKCR最高。
4. **RAG可改进认可率，但对拒绝率的提升具有模型依赖性**：对Ministral-8B和Llama-3-8B，RAG反而降低了ECDA_rej（分别从80%→61%，63%→30%）。
5. **DPO单独使用能降低IKCR，但对复杂场景的泛化有限**：DPO训练集准确率100%，但在ContextMedQA场景上IKCR仍远高于0。
6. **混合策略RoD效果最优**：在三个测试模型上，RoD的ECDA_all和IKCR均超过单独使用RAG或DPO，且提升幅度超过两者之和（协同效应）。
7. **认知/社会因素导致性能波动**：无因素条件性能最好，但各因素未系统性导向错误（附录表4）。

## 7. 优点：方法或实验设计上的亮点

- **基准设计新颖**：首次系统模拟医学知识时间演化引起的冲突，涵盖多种演化模式和现实认知/社会因素，比静态Benchmark更贴近实际部署挑战。
- **双维度评估**：同时评估与外部指南的对齐和内部一致性，提供更全面的可靠性画像。
- **缓解策略组合创新**：RAG+DPO的混合方法简单有效，且证明了协同效应，为实际部署提供可行路线。
- **大规模合成场景生成**：使用Qwen2.5-72B自动化生成4290个高质量情景，保证可复现性。
- **消融实验完整**：对LoRA秩进行了系统敲定，验证了参数有效性的敏感性。

## 8. 不足与局限

- **缓解策略覆盖不全**：DPO/RoD未在闭源大模型上验证，通用性存疑。
- **使用合成数据**：所有场景由LLM生成，可能缺乏真实临床案例中的噪音、错误和模糊性。
- **DPO训练数据简单**：仅使用原始推荐文本的训练，缺乏复杂上下文，导致泛化不足。
- **未评估计算成本**：RAG的检索延迟、DPO存储开销未讨论。
- **单一数据集**：仅基于195对推荐，规模较小，可能未覆盖所有知识演化类型。
- **缺乏实时更新评估**：未测试模型在连续知识更新过程的表现（如增量学习）。
- **伦理与安全考虑较少**：未讨论知识冲突导致的潜在患者伤害，也未提出临床部署的具体安全阈值。

（完）

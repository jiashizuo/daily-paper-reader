---
title: "RLKGF: Reinforcement Learning from Knowledge Graph Feedback Without Human Annotations"
title_zh: RLKGF：无人工标注的知识图谱反馈强化学习
authors: "Lian Yan, Chen Tang, Yi Guan, Haotian Wang, Songyuan Wang, Haifeng Liu, Yang Yang, Jingchi Jiang"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.344.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 无需人工标注的知识图谱反馈强化学习
tldr: 该论文针对RLHF中人类偏好标注瓶颈，提出RLKGF方法，利用知识图谱的语义和结构自动推导奖励信号，替代人工反馈。该方法无需任何人工标注即可为LLM提供推理偏好信号，在多个任务上验证了有效性。RLKGF为将RLHF扩展到缺乏人类标签的领域提供了创新解决方案。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.344/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 806, \"height\": 452, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.344/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1643, \"height\": 840, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.344/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1503, \"height\": 461, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.344/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 720, \"height\": 514, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.344/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 713, \"height\": 454, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.344/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1653, \"height\": 729, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.344/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 796, \"height\": 698, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.344/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 793, \"height\": 941, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.344/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 783, \"height\": 347, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.344/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 796, \"height\": 258, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.344/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 800, \"height\": 1013, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.344/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 799, \"height\": 725, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.344/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 800, \"height\": 241, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.344/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 799, \"height\": 763, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.344/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 798, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.344/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 797, \"height\": 431, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.344/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 728, \"height\": 823, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.344/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 730, \"height\": 1375, \"label\": \"Table\"}]"
motivation: RLHF依赖人类偏好标注，在领域应用中存在瓶颈。
method: 用知识图谱的推理路径生成奖励，替代人类反馈进行强化学习。
result: 无需人工标注即可有效对齐LLM，性能接近使用人工反馈的方法。
conclusion: 知识图谱可以作为人工反馈的替代，扩展RLHF的应用范围。
---

## Abstract
Reinforcement Learning from Human Feedback (RLHF) has been shown to effectively align large language models (LLMs) with human knowledge. However, the lack of human preference labels remains a significant bottleneck when applying RLHF to a downstream domain. Humans in RLHF play a critical role in injecting reasoning preferences into LLM, and we assume the reasoning process underlying human assessments may potentially be replaced by reasoning pathways derived from Knowledge Graphs (KGs). Inspired by this assumption, we propose Reinforcement Learning from Knowledge Graph Feedback (RLKGF), a novel method that leverages KG semantics and structure to derive RL rewards in the absence of manual annotations. Unlike Reinforcement Learning from AI Feedback (RLAIF), RLKGF directly integrates human priors encoded in KGs as the reward model, aligning LLM responses with expert knowledge without additional preference labeling or reward model training. RLKGF structures context-relevant facts into knowledge subgraphs and defines rewards by simulating information flow across semantic and logical connections between question and candidate response entities. Experiments on three public and one private medical dialogue dataset demonstrate that RLKGF significantly outperforms the competitive RLAIF in improving LLM diagnostic accuracy. The code is available at https://github.com/YanPioneer/RLKGF .

---

## 论文详细总结（自动生成）

# 论文《RLKGF: Reinforcement Learning from Knowledge Graph Feedback Without Human Annotations》详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：RLHF 能有效对齐大语言模型（LLM）与人类知识，但人类偏好标注成本高、标准不一致、存在主观偏差，成为在下游领域应用的瓶颈。
- **背景**：RLAIF 利用 LLM 自身生成偏好，但在医学等需要高准确度的领域，LLM 仍存在知识缺口和幻觉。知识图谱（KG）具有结构化的事实存储和无标注优势，其语义关联和逻辑连接可天然作为评分机制。
- **整体含义**：提出 RLKGF，直接使用 KG 作为奖励模型，自动为 LLM 响应提供反馈，无需人工标注或训练额外奖励模型，旨在替代 RLHF 中的人类角色。

## 2. 方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：将 KG 视为奖励模型，通过计算问题实体与候选响应实体在图中的语义相似性和结构可达性，得到奖励信号，用于 PPO 训练 LLM。
- **关键技术细节**：
  - **子图提取**：根据问题中的症状实体，在医学 KG 中构建个性化诊断子图 \( g = (v, e) \)，只考虑 `<disease, causes, symptom>` 三元组。
  - **结构信息评分（Link Criticality Score）**：使用带重启的随机游走（RWR）计算从问题实体出发到达候选疾病实体的概率。公式：  
    \( w'_i = c \cdot \tilde{A}_i w_i + (1-c) \cdot e_i \)，其中 \( c \) 为重启概率，\( \tilde{A}_i \) 为概率转移矩阵。得到可达性矩阵 \( W^* \)，经温度 Softmax 得到结构路径推理分数 \( R_p \)。
  - **语义信息评分（Semantic Relevance Score）**：使用 2 层 GCN 对子图节点进行消息传递，得到节点语义特征 \( Z \)。计算问题症状实体与候选疾病实体的余弦相似度矩阵 \( S^* \)，经 Softmax 得到语义相关分数 \( R_s \)。
  - **最终奖励**：\( R = \mu R_s + (1-\mu) R_p \)，其中 \( \mu \) 为可学习参数（实验发现固定小值更好）。
  - **强化学习训练**：采用 PPO-Clip 优化 LLM 策略，目标函数为 \( L^{CLIP}(\theta) = \mathbb{E}[\min(r(\theta)A^*, \text{clip}(r(\theta),1-\epsilon,1+\epsilon)A^*)] \)，其中 \( r(\theta) = \pi_{\theta_{\text{new}}} / \pi_{\theta_{\text{old}}} \)。

## 3. 实验设计
- **数据集**：
  - 三个公开医疗对话诊断数据集：MZ（710 样本，66 症状）、DXY（526 样本，41 症状）、GMD（2390 样本，118 症状）。
  - 一个自建中文数据集 MED-D：从电子病历构建，含 20 种疾病、351 症状、3992 样本。
- **Benchmark 与对比方法**：
  - RLAIF（使用 GPT-4o-mini、Qwen2.5-72B、DeepSeekV3 进行偏好标注）。
  - SFT（全参数微调与 LoRA）。
  - KG-based Prompt（将 KG 三元组或文本形式作为提示）。
  - RLKGF 自身变体：去掉 RWR 或 GCN 的消融，以及使用 GAT 代替 GCN 的变体。
- **骨干模型**：Qwen1.5-1.8B/4B-Chat、Qwen2.5-0.5B/1.5B/3B-Instruct、InternLM2/2.5-1.8B-Chat。

## 4. 资源与算力
- **计算资源**：使用一张 A800 80G GPU 进行训练和测试（代码基于 PyTorch）。
- **训练时长**：文中未明确给出具体训练时长，但指出模型在单 GPU 上可训练（骨干模型为 0.5B~4B 级别）。

## 5. 实验数量与充分性
- **实验组数**：
  - 主对比实验：7 种骨干模型 × 4 个数据集 × 两种方法（RLAIF vs RLKGF）——约 28 组。
  - 消融实验：4 个数据集 × 两种变体（w/o RWR, w/o GCN）——约 8 组（部分骨干）。
  - 不同语义聚合模型（GCN vs GAT）：7 种骨干 × 3 个数据集——约 21 组。
  - 重启概率 c 的影响：在 4 个数据集上测试 0.1~0.7。
  - 不同知识注入方法（FT, LoRA, KG Prompt 等）对比：覆盖 7 种骨干 × 4 个数据集。
  - RLAIF 使用不同 LLM（GPT-4o-mini, Qwen2.5-72B, DeepSeekV3）：部分骨干 × 3 个数据集。
  - 泛化实验（在 GMD 上训练，测试 DXY）。
- **充分性评估**：
  - 实验设计全面，覆盖多种模型规模、版本、数据集和对比方法。
  - 消融实验验证了结构信息和语义信息的贡献。
  - 控制了知识图谱完整性的影响（表 6），说明方法依赖 KG 质量。
  - 未做统计分析或误差棒，但多个数据集和模型上趋势一致，结论可靠。
  - 对比基准（RLAIF）采用当时先进的 LLM（GPT-4o-mini、Qwen2.5-72B、DeepSeekV3），公平性较好。

## 6. 主要结论与发现
- **RLKGF 显著优于 RLAIF**：在 GMD、DXY、MZ、MED-D 四个数据集上分别提升 5.67%、10.73%、8.38%、1.21%。
- **结构信息比语义信息更重要**：去掉 RWR 比去掉 GCN 导致更大性能下降。
- **GCN 优于 GAT**：在语义聚合上，GCN 比 GAT 平均提高 1.10%~3.15%。
- **较大的重启概率 c 更优**：c=0.7 时效果最好，因为允许更广的图探索。
- **RLAIF 中 GPT-4o-mini 优于其他开源模型**（Qwen2.5-72B、DeepSeekV3）在医疗诊断任务上。
- **RLKGF 泛化能力强于 SFT**：在 GMD 上训练后在 DXY 上测试，RLKGF 仍优于基线，而 SFT 反而退化。
- **RLKGF 接近 SFT 性能的 70%**，符合 RLAIF 中报告的经验规律，证明其有效性。

## 7. 优点
- **无需人工标注**：直接利用 KG 的结构与语义生成奖励，完全避免人类偏好标注成本。
- **无需训练额外奖励模型**：相比 RLHF 和 RLAIF，节省了训练奖励模型的开销。
- **可解释性**：奖励来自图上的语义相似度和结构可达性，有利于理解模型为何做出某决策。
- **鲁棒性好**：在多种骨干模型、多个数据集上稳定优于 RLAIF，且消融实验验证了各组件的必要性。
- **构建新数据集 MED-D**：从真实电子病历构建，避免了公开数据泄漏风险。

## 8. 不足与局限
- **依赖 KG 完整性与准确性**：如果 KG 缺失实体或关系，反馈质量下降（表 6 显示 KG 覆盖率低时诊断准确率低）。
- **领域限制**：仅在医疗诊断任务上验证，未在其它领域（如法律、金融）或其它任务（如摘要、对话）测试。
- **单轮对话**：当前只处理单轮问答，未利用多轮对话中的逐步推理优势。
- **反馈粒度**：主要关注实体级别的正确性，未考虑响应整体流畅性、连贯性等语言质量。
- **性能仍有提升空间**：虽然优于 RLAIF，但最优目标是 KG 直接评分（RLKGF Base），训练后的 LLM 仍未完全达到，说明知识注入仍需改进。
- **未讨论奖励范围设计与参数调整**：μ 作为可学习参数但实验中固定为小值，缺乏更细致的调参分析。

（完）

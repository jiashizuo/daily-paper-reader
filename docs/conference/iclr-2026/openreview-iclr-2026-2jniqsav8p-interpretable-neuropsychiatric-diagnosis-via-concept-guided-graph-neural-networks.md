---
title: Interpretable Neuropsychiatric Diagnosis via Concept-Guided Graph Neural Networks
title_zh: 基于概念引导图神经网络的可解释神经精神疾病诊断
authors: "Song Wang, Zhenyu Lei, Zhen Tan, Jundong Li, Javier Rasero, Aiying Zhang, Chirag Agarwal"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=2jNIqSav8p"
tags: ["query:fbn"]
score: 9.0
evidence: 使用rs-fMRI功能连接和图神经网络进行可解释的精神疾病诊断
tldr: 针对现有GNN黑箱问题，提出CONCEPTNEURO，基于概念引导的图神经网络进行青少年精神疾病诊断。将脑区功能连接建模为图，通过可解释的概念瓶颈实现可靠的临床预测。实验证明在焦虑、抑郁等诊断上准确且可解释，促进临床转化。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-2jniqsav8p/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1429, \"height\": 714, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-2jniqsav8p/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1398, \"height\": 441, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-2jniqsav8p/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 726, \"height\": 428, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-2jniqsav8p/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1391, \"height\": 493, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-2jniqsav8p/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1199, \"height\": 240, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-2jniqsav8p/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1227, \"height\": 494, \"label\": \"Table\"}]"
motivation: 现有GNN黑箱限制临床可靠性，亟需可解释诊断工具。
method: 提出CONCEPTNEURO，利用概念引导的图神经网络从rs-fMRI功能连接图中提取可解释特征进行疾病诊断。
result: 在青少年精神疾病数据集上实现高准确率且提供可解释诊断依据。
conclusion: 为精神疾病诊断提供可靠、可解释的AI工具，推进临床转化。
---

## Abstract
Nearly one in five adolescents currently live with a diagnosed mental or behavioral health condition, such as anxiety, depression, or conduct disorder, underscoring the urgency of developing accurate and interpretable diagnostic tools. Resting-state functional magnetic resonance imaging (rs-fMRI) provides a powerful lens into large-scale functional connectivity, where brain regions are modeled as nodes and inter-regional synchrony as edges, offering clinically relevant biomarkers for psychiatric disorders. While prior works use graph neural network (GNN) approaches for disorder prediction, they remain complex black-boxes, limiting their reliability and clinical translation. In this work, we propose CONCEPTNEURO, a concept-based diagnosis framework that leverages large language models (LLMs) and neurobiological domain knowledge to automatically generate, filter, and encode interpretable functional connectivity concepts. Each concept is represented as a structured subgraph linking specific brain regions, which are then passed through a concept classifier. Our design ensures predictions through clinically meaningful connectivity patterns, enabling both interpretability and strong predictive performance. Extensive experiments across multiple psychiatric disorder datasets demonstrate that CONCEPTNEURO-augmented GNNs consistently outperform their vanilla counterparts, improving accuracy while providing transparent, clinically aligned explanations. Furthermore, concept analyses highlight disorder-specific connectivity patterns that align with expert knowledge and suggest new hypotheses for future investigation, establishing CONCEPTNEURO as an interpretable, domain-informed framework for psychiatric disorder diagnosis.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）

- **背景**：近五分之一的青少年患有精神或行为障碍（如焦虑、抑郁、品行障碍），亟需准确且可解释的诊断工具。静息态功能磁共振成像（rs-fMRI）通过建模脑区间功能连接（FC）提供生物标志物，但现有基于图神经网络（GNN）的方法虽然预测精度高，却是“黑箱”模型，缺乏可解释性，难以获得临床信任并推广。
- **核心问题**：现有方法存在两个关键障碍：1）未能有效整合已有的神经影像学领域知识（如与疾病相关的脑区网络）；2）缺乏内在可解释性，仅依赖事后解释方法（如子图高亮）提供局部、实例级别的分析，无法给出全局、临床可理解的诊断依据。
- **论文目标**：提出 CONCEPTNEURO，一种基于概念引导的 GNN 框架，利用大语言模型（LLM）自动生成、筛选并编码可解释的功能连接概念，使诊断过程透明、与临床知识对齐，同时保持甚至提升预测性能。

## 2. 方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：采用概念瓶颈模型（Concept Bottleneck Model, CBM）架构，将预测过程通过一组人类可理解的概念进行中介。每个概念对应一组脑区之间的功能连接模式（如“杏仁核与前额叶皮层之间的连接增强”），这些概念由 LLM 自动生成，经筛选后与受试者的功能连接数据结合，形成概念分数，再输入分类器得出诊断。
- **关键技术细节**：
  - **概念生成**：利用 LLM（GPT-4.1）根据结构化提示生成候选概念。提示中包含从 NeuroQuery 获得的疾病相关术语（如焦虑症涉及“杏仁核、前额叶、脑岛”等），要求生成基于功能连接而非分数各向异性（FA）的短语。生成后的概念通过规则过滤（排除少于两个区域的、冗余的、无法映射到图谱的概念），形成候选集 \( \mathcal{S} \)。
  - **概念子图提取**：每个概念 \( c \) 定义为两个不相交的脑区集合 \( (V_c^1, V_c^2) \)，并带有方向先验 \( \delta_c \in \{-1, +1\} \)。对每个受试者 \( i \)，提取该概念对应的子图 \( G_c^i \)，包含所有跨集合的边（即 \( E_c = \{(u,v) | u \in V_c^1, v \in V_c^2\} \)），以及对应的邻接矩阵子矩阵 \( A_c^i \)。
  - **结构编码**：使用一层或两层的图神经网络（GNN）对每个概念子图进行编码。节点初始特征为 ROI 的 one-hot 编码与平均邻居度数的拼接。通过边加权消息传递更新节点表示（公式 (3)-(4)），最后用注意力池化得到概念子图嵌入 \( h_c^i \)（公式 (5)）。
  - **概念分数计算**：对每个受试者 \( i \)，其全图嵌入 \( z_i = g(G_i) \) 与概念子图嵌入 \( h_c^i \) 做点积，得到概念分数 \( s_{i,c} = z_i^\top h_c^i \)（公式 (6)），拼接成向量 \( s_i \in \mathbb{R}^{N_c} \)。
  - **分类器**：将概念分数向量 \( s_i \) 与全图嵌入 \( z_i \) 拼接（可选），通过一个多层感知机（MLP）得到类别 logits（公式 (7)），再经 softmax 输出预测（公式 (8)）。
  - **损失函数**：总损失包括交叉熵分类损失 \( \mathcal{L}_{cls} \)、稀疏性惩罚 \( \mathcal{L}_{sp} = \lambda_{sp} \|W\|_1 \)（鼓励模型只使用少量重要概念）、方向一致性惩罚 \( \mathcal{L}_{dir} \)（确保概念-类别映射符合先验方向，即超连接贡献为正、低连接贡献为负），见公式 (9)。
- **算法流程**（文字描述）：
  1. 使用 LLM 生成候选概念，过滤后得到概念集 \( \mathcal{S} \)（约几十个）。
  2. 对每个受试者，构建全图 FC 图 \( G_i \) 及每个概念对应的子图 \( G_c^i \)。
  3. 利用 GNN 编码器（共享参数）提取全图嵌入 \( z_i \) 和各子图嵌入 \( h_c^i \)。
  4. 计算概念分数向量 \( s_i \)。
  5. 通过 MLP 分类器得到预测，并计算总损失进行端到端训练。

## 3. 实验设计

- **数据集**：
  - **ABCD 研究**（Adolescent Brain Cognitive Development Study）：最大青少年神经影像纵向研究，基线 11,099 名 9-11 岁参与者，最终有效样本 7,844 名。使用 Glasser 图谱（皮质）和 Aseg 图谱（皮层下）进行脑区分割，功能连接为 Pearson 相关。诊断任务为**二分类**（是否患有特定障碍）。
  - **HCP-D 数据集**（Human Connectome Project-Development）：包含 528 名 5-21 岁参与者。同样使用 Glasser 图谱。诊断任务为**多分类**（11 类，症状严重度分数 0-10）。
- **诊断任务**：共五种疾病：焦虑症、强迫症（OCD）、注意缺陷多动障碍（ADHD）、对立违抗障碍（ODD）、品行障碍（Conduct Disorder）。ABCD 中每种疾病单独二分类；HCP-D 中 OCD 无标签，只做其他四种疾病的多分类。
- **基准方法**：对比四种主流 GNN 架构的 vanilla 版本：GCN、GAT、GraphSAGE、GIN。CONCEPTNEURO 分别与这些架构结合（即增强版本）。
- **评估指标与设置**：主要指标为分类准确率（Accuracy）。报告五次随机种子的均值与标准误差。训练采用 500 轮，早停法（patience=20），后处理等超参数详见附录 B。

## 4. 资源与算力

- 文中明确提到：所有实验在 **NVIDIA A6000 GPU（48GB 显存）** 上进行（见附录 B）。未说明使用的 GPU 数量、训练总时长或具体能耗。鉴于数据集规模（ABCD 约 7,800 样本，HCP-D 约 500 样本），训练应是可行的，但未提供详细算力消耗信息。

## 5. 实验数量与充分性

- **主要结果**：（1）表1：ABCD 上 4 种架构 × 5 种疾病 = 20 组对比实验；（2）表2：HCP-D 上 4 种架构 × 4 种疾病 = 16 组对比实验；（3）表3：专家验证（概念一致性与排名一致性）；（4）图2：概念重要性分布分析；（5）图3：消融实验（随机概念、仅 top-5 概念 vs 完整模型）在两种架构（GCN、GIN）上跨疾病进行。
- **充分性分析**：实验覆盖了多种 GNN 架构和多种疾病，消融实验验证了概念质量与多样性是关键。专家验证增加了临床相关性。整体实验设计合理，结果稳健。不足之处：HCP-D 数据集样本量较小（528），且多分类任务准确率偏低（20-56%），可能影响结论泛化力。没有在更大型、更多样的数据集上验证（如 UK Biobank）。未做统计显著性检验（如 t 检验），但多次随机种子重复一定程度上反映了稳定性。

## 6. 主要结论与发现

- CONCEPTNEURO 在所有 GNN 架构和所有疾病诊断任务上**一致优于**其 vanilla 版本，精度提升 2-5%（ABCD）和 5-10%（HCP-D）不等。例如，GCN 在焦虑症上准确率从 61.2% 提升至 65.8%，在 HCP-D 上 GAT 在 ODD 上从 35.0% 提升至 44.8%。
- **概念验证**：模型选择的概念与领域专家选择的概念在 top-10 达到 70-80% 一致性（Concept Agreement），排名一致性也随数量增加而提高，表明概念具有临床相关性。
- **概念分析**：通过重要性得分分布（图2）显示，最重要的概念（如“OFC-杏仁核连接改变”）得分分布集中且远离零，而最不重要的概念分布接近零，证明模型能识别出对分类决策关键的模式。
- **消融实验**：使用随机概念替换后，性能急剧下降至接近随机基线；仅使用 top-5 概念略低于完整模型，说明概念多样性和完整性对捕获疾病异质性至关重要。

## 7. 优点

- **创新性**：首次将 LLM 自动生成概念与 fMRI 功能连接分析结合，减少了手动标注概念的巨大成本，同时保持了临床友好性。
- **可解释性**：通过概念瓶颈层，每个预测都可回溯到具体的脑区连接模式（如“杏仁核-前额叶增强”），便于医生理解和验证。
- **架构无关性**：CONCEPTNEURO 可以轻松集成到任意 GNN 架构（GCN、GAT、GraphSAGE、GIN）中，且稳定提升性能，证明其通用性。
- **领域知识融合**：通过方向先验（超连接/低连接）和稀疏正则化，直接将临床假设融入模型，提高了可信度。
- **实验验证充分**：结合自动指标和专家验证，多维度证明概念质量和临床对齐性。

## 8. 不足与局限

- **数据集偏差**：仅使用 ABCD 和 HCP-D 两个公开数据集，可能存在人口统计、采集协议和诊断标签的偏差，不足以泛化到其他人群或临床环境。
- **概念生成质量依赖 LLM**：LLM 可能生成不完整或虚假的概念，尽管有过滤和专家验证，但风险依然存在。LLM 的“幻觉”可能引入误导性模式。
- **方向先验的假设**：方向先验（如某连接应为增强或减弱）假设在每个个体中一致，但精神疾病具有高度异质性，这种假设可能不完全成立。
- **未临床验证**：框架目前仅作为研究工具，未经临床前瞻性研究验证其实际有效性、安全性和公平性。
- **计算资源未详述**：单个 A6000 GPU 对于中等规模数据足够，但大规模部署或实时应用可能需要更多资源优化。
- **实验统计性**：未提供严格的显著性检验（如配对 t 检验），仅以标准误差表示不确定性。多类分类任务（HCP-D）准确率较低（20-56%），可能存在天花板效应或类别不平衡问题，论文未详细分析混淆矩阵或 F1 分数。

（完）

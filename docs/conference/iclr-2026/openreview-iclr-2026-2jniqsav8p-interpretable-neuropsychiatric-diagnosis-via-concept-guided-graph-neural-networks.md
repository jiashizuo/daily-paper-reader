---
title: Interpretable Neuropsychiatric Diagnosis via Concept-Guided Graph Neural Networks
title_zh: 基于概念引导图神经网络的可解释神经精神疾病诊断
authors: "Song Wang, Zhenyu Lei, Zhen Tan, Jundong Li, Javier Rasero, Aiying Zhang, Chirag Agarwal"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=2jNIqSav8p"
tags: ["query:fbn"]
score: 10.0
evidence: 使用概念引导的图神经网络从rs-fMRI功能连接进行可解释神经精神疾病诊断
tldr: 现有基于GNN的rs-fMRI精神疾病诊断模型多为黑箱，难以临床转化。本文提出CONCEPTNEURO，结合概念引导的图神经网络，利用rs-fMRI功能连接预测青少年精神健康状态，同时生成可解释的诊断依据。在多个公共数据集上，CONCEPTNEURO在保持高准确率的同时提供了透明决策过程，推动了AI在精神病学中的可信应用。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-2jniqsav8p/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1429, \"height\": 714}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-2jniqsav8p/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1398, \"height\": 441}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-2jniqsav8p/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 726, \"height\": 428}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-2jniqsav8p/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1391, \"height\": 493}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-2jniqsav8p/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1199, \"height\": 240}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-2jniqsav8p/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1227, \"height\": 494}]"
motivation: 现有GNN诊断模型缺乏可解释性，限制了其在精神疾病临床诊断中的可靠性。
method: 提出CONCEPTNEURO框架，利用概念引导图神经网络整合rs-fMRI功能连接与临床概念，实现可解释预测。
result: 在青少年精神健康数据集上取得高分类准确率，且诊断依据与临床知识一致。
conclusion: 可解释的AI诊断工具可增强医生信任，加速脑影像分析在精神病学的临床应用。
---

## Abstract
Nearly one in five adolescents currently live with a diagnosed mental or behavioral health condition, such as anxiety, depression, or conduct disorder, underscoring the urgency of developing accurate and interpretable diagnostic tools. Resting-state functional magnetic resonance imaging (rs-fMRI) provides a powerful lens into large-scale functional connectivity, where brain regions are modeled as nodes and inter-regional synchrony as edges, offering clinically relevant biomarkers for psychiatric disorders. While prior works use graph neural network (GNN) approaches for disorder prediction, they remain complex black-boxes, limiting their reliability and clinical translation. In this work, we propose CONCEPTNEURO, a concept-based diagnosis framework that leverages large language models (LLMs) and neurobiological domain knowledge to automatically generate, filter, and encode interpretable functional connectivity concepts. Each concept is represented as a structured subgraph linking specific brain regions, which are then passed through a concept classifier. Our design ensures predictions through clinically meaningful connectivity patterns, enabling both interpretability and strong predictive performance. Extensive experiments across multiple psychiatric disorder datasets demonstrate that CONCEPTNEURO-augmented GNNs consistently outperform their vanilla counterparts, improving accuracy while providing transparent, clinically aligned explanations. Furthermore, concept analyses highlight disorder-specific connectivity patterns that align with expert knowledge and suggest new hypotheses for future investigation, establishing CONCEPTNEURO as an interpretable, domain-informed framework for psychiatric disorder diagnosis.

---

## 论文详细总结（自动生成）

# 基于概念引导图神经网络的可解释神经精神疾病诊断：论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：近五分之一的青少年患有精神或行为健康问题（如焦虑、抑郁、品行障碍），迫切需要准确且可解释的诊断工具。静息态功能磁共振成像（rs-fMRI）能够通过功能连接（FC）提供大规模脑网络生物标志物，但现有基于图神经网络（GNN）的预测模型多为黑箱，缺乏可解释性，难以获得临床信任和转化。
- **整体含义**：论文旨在构建一个兼具预测准确性和内在可解释性的诊断框架，通过将临床概念显式嵌入GNN，使模型决策能够与神经生物学知识对齐，从而推动AI在精神病学中的可信应用。

## 2. 论文提出的方法论

- **核心思想**：引入概念瓶颈模型（CBM），利用大语言模型（LLM）自动生成、筛选和编码可解释的功能连接概念，每个概念表示为特定脑区之间的结构化子图，通过概念分类器进行疾病预测。
- **关键技术细节**：
  - **概念生成**：从NeuroQuery等神经影像资源收集疾病相关术语，作为LLM（GPT-4.1）的提示锚点，生成简洁的功能连接概念（如“杏仁核与前额叶皮层之间的过度连接”）。经过规则过滤（去重、去除无法映射到图谱的概念）得到候选概念集S。
  - **概念子图提取**：对每个概念c，定义其子图G_c^i = (V_c^1 ∪ V_c^2, E_c, A_c^i)，其中V_c^1和V_c^2为两组脑区，边集仅包含跨组连接。计算每个概念的平均连接强度\bar{s}_c，选出Top N_c个概念作为最终概念集。
  - **结构编码**：设计边缘加权消息传递框架，节点初始特征为ROI独热编码与邻居平均度数的拼接。经过T层消息传递后，使用注意力池化得到子图嵌入h_c^i。
  - **概念瓶颈分类器**：对每个受试者i，计算全局图嵌入z_i与每个概念嵌入h_c^i的点积作为概念得分s_{i,c}。将概念得分向量s_i输入MLP得到分类logits。损失函数包含交叉熵损失、ℓ1稀疏正则和方向一致性约束（若概念有先验方向δ_c，则约束权重符号）。
- **公式/算法流程**（文字说明）：
  1. 使用LLM生成候选概念 → 过滤得到S
  2. 对每个受试者，提取全脑图G_i和每个概念子图G_c^i
  3. 使用GNN编码器分别得到图嵌入z_i和概念嵌入h_c^i
  4. 计算概念得分s_{i,c} = z_i^T h_c^i
  5. 将s_i输入MLP得到预测logits，优化总损失L = L_cls + λ_sp||W||_1 + λ_dir·hinge

## 3. 实验设计

- **数据集**：
  - **ABCD数据集**：7,844名参与者（9-11岁），使用Glasser皮质图谱+Aseg皮下图谱，rs-fMRI预处理后计算皮尔逊相关得到功能连接矩阵。诊断标签为5种精神障碍（焦虑、OCD、ADHD、ODD、品行障碍）的二分类。
  - **HCP-D数据集**：528名参与者（5-21岁），同样使用Glasser图谱。标签为症状严重度评分（0-10），构成11类多分类任务（不包含OCD）。
- **基准方法**：对比了四种GNN架构的“香草”版本——GCN、GAT、GraphSAGE、GIN。
- **实验设置**：2层GNN，隐藏维度64，学习率1e-3，权重衰减1e-4，Adam优化器，训练500 epoch，批次64，早停耐心20。

## 4. 资源与算力

- 论文在附录B中明确说明：所有实验在NVIDIA A6000 GPU（48GB内存）上进行，未报告具体数量或训练时长。使用了单个GPU进行实验。

## 5. 实验数量与充分性

- **实验数量**：
  - 主实验：在ABCD数据集上对5种疾病进行4种GNN架构的对比（共20组）；在HCP-D数据集上对4种疾病进行4种架构对比（共16组）。所有结果均为5个随机种子的均值和标准误。
  - 消融实验：在GCN和GIN两种架构上，对5种疾病进行“随机概念”和“仅Top-5重要概念”两种消融（共10组）。
  - 专家分析：针对焦虑和OCD，在Top-3/5/10概念上与临床专家进行一致性比较。
  - 概念重要性分布可视化：展示了焦虑疾病中最重要和最不重要概念的相似度分布。
- **充分性评价**：实验覆盖了多种疾病、多种GNN架构、两个数据集（不同任务难度），并进行了消融和专家验证，设计较为全面。但存在以下不足：
  - 仅在两个数据集上验证，且均为青少年群体，缺乏成人或老年人群的泛化测试。
  - 未与基于其他概念生成方法（如手工概念、基于统计的概念）进行比较。
  - 未报告模型在不同性别、种族亚组上的性能差异，可能存在偏差风险。
  - 在HCP-D多分类任务中，准确率较低（如焦虑34.8%），但论文未深入讨论原因（如类别不平衡、标签噪声等）。
  - 未与其他可解释方法（如注意力机制、GNNExplainer等）进行可解释性定量对比。

## 6. 论文的主要结论与发现

- **CONCEPTNEURO显著优于香草GNN**：在所有数据集和疾病上，CONCEPTNEURO均提升了分类准确率，例如ABCD上GCN基线提升2%~5%，HCP-D上提升4%~12%。
- **概念与临床专家知识高度一致**：在Top-10概念上，模型与专家的概念一致性达70%~80%；在排名一致性上，Top-10时达78%~81%。
- **概念质量至关重要**：随机概念导致准确率接近随机，而仅使用Top-5概念虽部分提升但仍低于完整模型，说明概念多样性和质量均重要。
- **方向性先验有效**：通过方向一致性约束，模型能够利用已知的临床先验（如过度连接/连接减弱）提升预测稳定性。

## 7. 优点

- **创新性**：首次将LLM自动概念生成与GNN结合应用于脑功能连接分析，实现了从黑箱到概念层面的可解释诊断。
- **可解释性设计**：概念瓶颈层确保预测直接通过临床可理解的概念得分进行，且通过稀疏正则和方向约束增强临床可信度。
- **架构通用性**：框架与具体GNN架构无关，在GCN、GAT、GraphSAGE、GIN上均取得一致改进。
- **专家验证**：通过临床专家对概念排名的一致性评估，验证了模型发现的概念具有神经生物学意义。
- **实验扎实**：两个数据集、五种疾病、多种架构、消融实验，统计严谨（5个随机种子报告标准误）。

## 8. 不足与局限

- **数据集偏差**：仅为美国青少年人群（ABCD和HCP-D），可能无法推广到其他年龄段、种族或临床场景（如合并用药）。
- **LLM生成概念的质量**：概念依赖于LLM和过滤规则，可能产生虚假或遗漏重要概念；未评估不同LLM的影响。
- **方向性先验假设**：假设每个概念有统一的先验方向，但同一疾病中不同亚型或个体可能呈现相反连接模式，硬约束可能损失模型灵活性。
- **计算与可重复性**：未报告详细的训练时间或GPU型号数量，且代码库虽公开但未说明是否包含所有预处理步骤。
- **缺乏与现有可解释方法的定量对比**：如GNNExplainer、Grad-CAM等，未展示可解释性指标（如保真度、稳定性）。
- **临床转化局限**：框架仅为研究工具，未经前瞻性临床验证，且多分类任务（HCP-D）准确率偏低，实际应用价值需进一步评估。
- **未见副作用分析**：未讨论模型在非理想条件下（如运动伪影严重、数据缺失）的鲁棒性。

（完）

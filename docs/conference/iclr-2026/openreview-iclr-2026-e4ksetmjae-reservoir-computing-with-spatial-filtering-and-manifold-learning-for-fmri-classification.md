---
title: Reservoir Computing with Spatial Filtering and Manifold Learning for fMRI Classification
title_zh: 基于空间滤波和流形学习的储层计算用于fMRI分类
authors: "Artem Badarin, Nikita Kulagin, Andrey Andreev, Kurkin Semyon, Alexander E. Hramov"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=e4KSeTmjAe"
tags: ["query:fbn"]
score: 9.0
evidence: 使用储层计算和空间滤波对静息态fMRI进行抑郁症和自闭症分类
tldr: "针对静息态fMRI分类任务，提出将判别性空间滤波与储层计算相结合的参数化框架。储层编码时间依赖，空间滤波提取条件特异性模式，UMAP降维得到紧凑嵌入。在163名被试（97健康对照、66抑郁症）上达到87%准确率，优于传统方法和GNN，并泛化至自闭症谱系障碍分类。"
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-e4ksetmjae/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1241, \"height\": 648, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-e4ksetmjae/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1276, \"height\": 517, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-e4ksetmjae/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1388, \"height\": 733, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-e4ksetmjae/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 957, \"height\": 677, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-e4ksetmjae/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 880, \"height\": 677, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-e4ksetmjae/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 877, \"height\": 1080, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-e4ksetmjae/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1325, \"height\": 242, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-e4ksetmjae/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1386, \"height\": 478, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-e4ksetmjae/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1421, \"height\": 633, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-e4ksetmjae/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1236, \"height\": 825, \"label\": \"Table\"}]"
motivation: 提高静息态fMRI分类性能并推广至多种脑疾病。
method: 将判别性空间滤波与储层计算及UMAP流形学习结合。
result: 在抑郁症和自闭症分类上超越基线。
conclusion: 提供了一种简单有效的fMRI分类框架。
---

## Abstract
We introduce a parametric framework that couples discriminative spatial filtering with  reservoir computing to distinguish spatiotemporal structure in resting-state fMRI in two classes. Temporal dependencies are encoded in a reservoir, while supervised spatial filtering on reservoir states isolates condition-specific patterns; parametric Uniform Manifold Approximation and Projection (UMAP) then yields compact nonlinear embeddings fit on training data and evaluated with cross-subject validation. On 163 participants (97 healthy controls, 66 major depressive disorder), the method reaches 87\% accuracy, outperforming network-feature pipelines using LDA, SVM, kNN, and GNN. The framework also generalizes to autism spectrum disorder classification, achieving competitive accuracy on the ABIDE (NYU) benchmark and ranking among top state-of-the-art methods. Interpretability combines spatial-pattern maps with Shapley-value attribution, providing coherent, region-level explanations that consistently implicate cortical and subcortical areas associated with both major depressive disorder and autism spectrum disorder. The framework offers an interpretable route to modeling spatiotemporal organization in clinical and cognitive fMRI.

---

## 论文详细总结（自动生成）

# 基于空间滤波和流形学习的储层计算用于fMRI分类：详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：高维多变量时间序列（MTS）分类，特别是静息态功能磁共振成像（rs-fMRI）数据，需要同时捕获**时间依赖关系**和**空间结构**。传统储层计算（Reservoir Computing, RC）虽然能高效建模时间动态，但通常将储层状态聚合为单一向量，**丢失了空间信息**和细粒度的时间结构。
- **研究动机**：神经影像中信号的**空间来源**（脑区）具有语义意义，单纯的时间建模不足以区分精神疾病（如抑郁症、自闭症）的病理模式。现有RC改进（如对状态矩阵做PCA）仍偏重时间，未显式建模通道间的空间关系。
- **整体含义**：提出一种将**判别性空间滤波**（Common Spatial Patterns, CSP）与RC结合、并辅以**参数化流形学习**（UMAP）的框架，旨在同时优化时空特征，实现高性能且可解释的fMRI分类。

---

## 2. 论文提出的方法论

### 核心思想
- 将CSP应用于**储层状态**（而非原始信号），提取最判别性的时空模式。
- 使用**参数化UMAP**（P-UMAP，用神经网络学习映射）实现非线性降维，并支持对新样本（测试集）的投影，从而适配标准训练-测试流程。
- 最终由线性判别分析（LDA）完成分类。

### 关键技术细节（四阶段流水线）

1. **Stage I – CSP-I（输入空间滤波）**  
   - 对原始fMRI信号（\(K\)个脑区，\(T\)个时间点）应用CSP，提取\(M_{inp}=14\)个最判别空间成分。CSP通过最大化两类方差比获得投影矩阵\(F\)。公式：对每个类计算归一化协方差\(R_c\)，组合、白化后求解广义特征值问题，取最大/最小特征值对应的滤波器。
   - 正则化：对协方差矩阵加\(\alpha=10^{-3}\)确保数值稳定。

2. **Stage II – RC（储层计算）**  
   - 将CSP-I输出的\(M_{inp}\)维信号送入储层。储层状态更新：  
     \[
     h_t = (1-\gamma)h_{t-1} + \gamma \tanh(W h_{t-1} + G g_t + b)
     \]
     - \(\gamma\)：泄漏率（优化范围0.1-0.5）；\(\rho\)：谱半径（0.8-1.1）；\(W\)：稀疏随机循环矩阵；\(G\)：输入权重矩阵，设计为**完全空间分离**——每个输入分量只连接到特定神经元子群，保持空间特异性。
   - 储层大小\(N_h=308\)（经优化）。
   - 输出：\(N_h\)个神经元状态序列（长度\(T\)）。

3. **Stage III – CSP-II（输出空间滤波）**  
   - 对储层状态矩阵再次应用CSP，提取\(M_{out}=20\)个最判别特征。这一步在非线性变换后的时空空间中进行精细再滤波。

4. **Stage III-O – UMAP（参数化流形学习）**  
   - 对CSP-II输出的20维特征使用**参数化UMAP**（基于MLP训练），压缩至2-5维，学习紧凑非线性嵌入。超参数：邻居数\(N_n\in\{5,10,15,20\}\)，输出分量\(N_c\in\{2,3,4,5\}\)。
   - 关键优势：训练好的映射可应用于测试数据，实现out-of-sample投影。

5. **Stage IV – LDA（分类）**  
   - 将UMAP嵌入输入LDA（采用SVD求解），输出二分类概率。

### 可解释性方法
- 通过**SHAP值**量化最终分类器对每个CSP-II特征的贡献，然后利用CSP-II的模式矩阵（S_out）和神经元分组（由G决定）反向传播至原始脑区，得到每个AAL区域的重要性得分\(\mathbf{S_{SL}}\)。

---

## 3. 实验设计

### 数据集
- **MDD数据集**：163名参与者（97健康对照，66抑郁症），rs-fMRI（3T GE Discovery 750w，TR=2000ms，192卷），经标准预处理后使用AAL3图谱划分为139个脑区。
- **ASD数据集**：ABIDE (NYU)站点，共286名被试（135健康对照，151自闭症），删除3名低质量数据后保留，扫描参数：TR=2000ms，180卷，3T Allegra。

### Benchmark与对比方法
- **MDD基准方法**：均基于功能连接（FC）矩阵：
  - LDA、SVM（RBF核）、kNN（基于5种图论指标：平均节点强度、平均最短路径长度、聚类系数、小世界系数、边数）。
  - Graph Neural Network (GNN)：两层图卷积网络，直接处理FC矩阵。
- **ASD基准方法**：直接引用Xue et al. (2024) 提供的多种SOTA方法（dCSL, BolT, BrainGNN, CRNN, BrainTGL, LSTM, GRU等）。
- **消融实验**：对比CSP-RC-CSP-LDA（去掉UMAP）、CSP-RC-UMAP-LDA（去掉CSP-II）、RC-UMAP-LDA（去掉CSP）、CSP-UMAP-LDA（去掉RC）等变体，以及使用PCA/KPCA替代UMAP。

### 验证策略
- 10次**分层随机洗牌交叉验证**（Stratified Shuffle Split），每次训练/测试分割比例80%/20%，保持类别比例。所有时间序列按被试分配（subject-wise）。
- MDD实验：10个折叠，平均准确率作为最终指标。超参数网格搜索（泄漏率γ、谱半径ρ、CSP组件数、UMAP邻居数/分量数）。
- ASD实验：相同策略，仅优化RC参数，其他固定。

---

## 4. 资源与算力

- **论文未明确提及**所使用的GPU型号、数量或训练时长。仅定性提到RC具有“computational efficiency”（计算效率），并指出参数化UMAP通过神经网络实现，但未报告具体硬件配置或运行时间。
- **结论**：文中缺乏对算力资源的量化描述，这是实验报告的一个不足。

---

## 5. 实验数量与充分性

- **实验数量**：  
  - MDD：至少包含全模型与5种消融变体、3种传统ML基准、1种GNN基准，以及不同超参数网格搜索（约63种γ×ρ组合，加上UMAP参数优化）。  
  - ASD：与10余种SOTA方法比较，并报告了消融结果（但未在正文中详细列出ASD的消融表，仅给出最终性能）。
- **充分性**：  
  - **积极方面**：多个消融实验验证了CSP和UMAP的贡献；进行了统计显著性检验（配对t-test，p<0.001）；超参数优化覆盖关键变量；在两个不同疾病数据集上验证泛化性。  
  - **不足方面**：ASD仅使用单一站点（NYU），未在多站点或多扫描仪下评估，泛化性受限；未与端到端深度学习模型（如3D-CNN、Transformer）直接比较（基准中主要是基于FC的浅层方法）；未报告模型在不同信噪比或运动伪影下的鲁棒性。

---

## 6. 论文的主要结论与发现

- **性能优势**：在MDD数据集上达到**87%准确率**（F1=0.83），显著优于所有基准（GNN仅为64%）。ASD分类准确率67%（F1=0.70），与SOTA方法相当（dCSL 72%，BolT 71%），且F1最高之一。
- **UMAP关键作用**：通过对比有无UMAP的分布图，UMAP不仅提升平均准确率，还降低了方差（稳定性提高），统计显著（p=2.6×10⁻⁷）。
- **可解释性发现**：MDD分类重要脑区包括内侧额上回（DMN）、距状沟/枕下回（视觉处理）、外侧膝状体（丘脑中继）、旁中央小叶；ASD重要脑区包括双侧小脑Crus I/II、小脑X叶、眶额皮层（OFC）、右侧颞极。这些区域与文献报道的病理改变一致。
- **方法学结论**：将CSP应用于储层状态（而非原始数据）是关键创新，联合参数化UMAP提供了通用、可解释的时空建模框架。

---

## 7. 优点

1. **创新性**：首次提出将CSP应用于储层状态进行二次空间滤波，结合参数化UMAP实现非线性降维与out-of-sample扩展，解决了传统RC空间信息丢失和UMAP不可迁移的问题。
2. **计算效率**：RC训练仅需简单线性回归/分类器，整体框架相比全连接深度学习更轻量（但文中未给出具体时间对比）。
3. **可解释性**：通过反向加权SHAP值和CSP模式，提供从分类决策到单个脑区的完整归因，且结果与神经科学知识一致。
4. **验证充分**：在两个临床数据集（抑郁、自闭症）上均取得有竞争力性能，且进行了系统的消融分析和统计检验。
5. **鲁棒性**：UMAP嵌入稳定性高，对储层超参数（泄漏率、谱半径）不敏感（准确率在[0.82,0.85]之间小幅波动）。

---

## 8. 不足与局限

1. **算力与效率未量化**：未报告训练时间、GPU型号、内存占用，无法评估实际资源需求。
2. **数据集规模与多样性**：MDD仅163人，ASD仅单个站点（NYU），样本量偏小，可能存在过拟合风险；未在更大群体或多中心数据上验证。
3. **对比方法局限**：基准方法几乎全部基于功能连接网络，缺少与原生时空建模方法（如3D-CNN、LSTM-FCN、Transformer）的直接比较，削弱了“优于现有方法”的结论强度。
4. **ASD实验不完整**：未在ASD上展示消融结果（例如有无UMAP/CSP-II对ASD的影响），仅给出最终指标。
5. **超参数敏感性**：虽然RC参数不敏感，但CSP组件数、UMAP邻居数等仍需大量网格搜索，可能耗时。
6. **可解释性近似误差**：使用SHAP值反向传播至脑区涉及多次矩阵运算和平均，可能引入近似偏差，未验证稳定性。
7. **泛化性未验证**：仅在两个精神疾病数据集上测试，未在正常老化、认知任务等场景下评估框架通用性。

（完）

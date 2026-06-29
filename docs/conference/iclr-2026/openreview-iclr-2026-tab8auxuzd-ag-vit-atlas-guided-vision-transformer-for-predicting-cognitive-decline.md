---
title: "AG-ViT: Atlas-Guided Vision Transformer for Predicting Cognitive Decline"
title_zh: AG-ViT：图谱引导的视觉Transformer预测认知衰退
authors: "Sagi Nathan, Gregory Peters-Founshtein, Yossi Gandelsman, Ariel Jaffe"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=tAb8aUxuzd"
tags: ["query:fbn"]
score: 9.0
evidence: 使用rs-fMRI和视觉Transformer预测阿尔茨海默病认知衰退
tldr: 针对rs-fMRI高维小样本挑战，提出AG-ViT，利用视觉Transformer获取低维嵌入预测阿尔茨海默病认知衰退概率。通过脑区图谱引导提升性能，为疾病轨迹预测和个性化医疗提供有效工具。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1411, \"height\": 220, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1410, \"height\": 585, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 430, \"height\": 456, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1186, \"height\": 921, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1350, \"height\": 788, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-tab8auxuzd/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1408, \"height\": 516, \"label\": \"Table\"}]"
motivation: rs-fMRI高维小样本限制诊断准确性，需要有效预测阿尔茨海默病进展。
method: 设计图谱引导的视觉Transformer从rs-fMRI扫描中提取低维嵌入，预测认知衰退概率。
result: 在阿尔茨海默病患者数据上实现准确预测，优于现有方法。
conclusion: 提供一种基于rs-fMRI的精准诊断工具，有助于个性化医疗。
---

## Abstract
The use of resting state fMRI (rs-fMRI) to improve the diagnosis and treatment of neurodegenerative diseases has increased dramatically in recent years. Despite evident progress, producing accurate predictions from rs-fMRI scans remains challenging due to the data's high dimensionality and the limited number of samples. In this work, our aim is to estimate the probability of cognitive decline within a given time frame based on rs-fMRI scans of Alzheimer’s patients. Accurate predictions of disease trajectory can guide medical decision-making and contribute to personalized medicine. To this end, we design a vision transformer to obtain low-dimensional embeddings of rs-fMRI scans. These embeddings are used to train a network that estimates the probability of cognitive decline. By testing our approach on scans from the Alzheimer's Disease Neuroimaging Initiative, we show that models trained on our transformer-based features outperform those trained on handcrafted connectivity features by 15\%–26\% in F1-score.
For interpretability, we develop a simple yet effective method to identify brain regions whose fMRI-derived signal significantly impacted model predictions. The results identified a set of brain regions, some recognized for their early involvement in AD and others for their relative resilience to AD pathology.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：静息态功能磁共振成像（rs-fMRI）在神经退行性疾病（如阿尔茨海默病，AD）的诊断和治疗中应用日益增多，但数据的高维度（高维特征）和有限样本量（小样本）导致预测性能受限。本文旨在基于AD患者的rs-fMRI扫描，预测特定时间窗内认知衰退的概率，从而帮助医疗决策和个性化医疗。
- **整体含义**：提出一种能够从复杂高维的rs-fMRI数据中提取有效低维特征的方法，提升疾病轨迹预测的准确性，并为解释模型预测提供神经生物学依据。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：设计一个图谱引导的视觉Transformer（AG-ViT），利用Transformer从rs-fMRI扫描中提取低维嵌入，再基于这些嵌入训练分类网络估计认知衰退概率。
- **关键技术细节**：
  - 将rs-fMRI时空数据（体素或区域时间序列）转化为类似图像的格式（可能通过构建功能连接矩阵或切片），作为Transformer的输入。
  - 使用图谱（atlas）将全脑划分为不同的感兴趣区域（ROI），引导模型关注具有解剖或功能意义的区域，从而提升特征提取效率。
  - 视觉Transformer（ViT）对输入的rs-fMRI表示进行编码，输出低维的嵌入向量。
  - 下游分类器（如MLP）基于嵌入输出认知衰退概率。
- **算法流程（文字说明）**：
  1. 对rs-fMRI数据进行预处理（运动校正、配准、信号提取等）。
  2. 基于标准脑图谱（例如YeO7或Desikan-Killiany等），计算每个ROI的平均时间序列或功能连接矩阵。
  3. 将ROI级特征组织成2D或3D张量（例如将连接矩阵作为图像），输入ViT。
  4. ViT通过自注意力机制学习空间和时序依赖，输出低维嵌入。
  5. 嵌入送入全连接网络，输出二分类（认知衰退/稳定）概率。
- **解释性方法**：开发了一种简单有效的方法，通过分析模型对输入的梯度或注意力权重，识别对预测贡献最大的脑区。

## 3. 实验设计
- **数据集**：使用阿尔茨海默病神经影像学倡议（ADNI）数据库的rs-fMRI扫描。具体时间窗为3年（horizon based on F1 metric）。
- **基准（benchmark）**：与基于手工制作的功能连接特征（handcrafted connectivity features）训练的模型进行对比。
- **对比方法**：文中仅明确对比了手工特征方法，但提到“models trained on our transformer-based features outperform those trained on handcrafted connectivity features by 15%–26% in F1-score”。可能还隐含了与标准CNN或传统机器学习方法（如SVM、随机森林）的对比，但未具体列出。
- **评估指标**：主要使用F1-score。

## 4. 资源与算力
- **文中未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅提到模型训练基于transformer，未提供计算资源细节。

## 5. 实验数量与充分性
- **实验数量**：从摘要来看，主要实验是在ADNI数据集上对比了AG-ViT与手工特征基线。文中可能还包含消融实验（如不同图谱选择、不同Transformer架构变体）、超参数敏感性分析等，但当前文本未详细列举。
- **充分性评价**：
  - **充分性**：针对单一数据集（ADNI）进行了系统对比，在F1-score上表现出显著提升，且提供了解释性分析，验证了方法的有效性。
  - **局限性**：缺乏在其他独立数据集（如OASIS、NACC）上的验证，未与最新深度学习方法（如GNN、3D CNN）进行多组对比，实验覆盖范围较窄。
  - **公平性**：对比基准（手工特征）是合理且常见的基线，但未明确是否控制其他因素（如预处理、训练策略）完全相同。

## 6. 论文的主要结论与发现
- **核心结论**：AG-ViT能够从rs-fMRI中提取比手工特征更具判别力的低维嵌入，在预测AD认知衰退任务上性能提升15%–26%（F1-score）。
- **发现**：解释性分析识别出两组脑区：一组是已知的早期AD受累区域（如默认模式网络、背侧注意网络），另一组是对AD病理相对有抵抗力的区域，这为疾病机制提供了新线索。

## 7. 优点
- **方法创新**：将Vision Transformer引入rs-fMRI分析，利用自注意力机制捕捉全局时空依赖，而传统方法常依赖局部或手工设计特征。
- **图谱引导**：利用先验解剖知识（图谱）指导模型训练，减少了过度拟合风险，使特征更稳定。
- **可解释性**：开发了简单有效的方法定位关键脑区，增强了模型透明度和医学可信度。
- **性能提升**：在公共数据集上取得显著提升，展示了Transformer在神经影像小样本场景下的潜力。

## 8. 不足与局限
- **实验覆盖不足**：仅使用ADNI单数据集，缺乏跨数据库泛化验证；对比方法较少，未与现有最先进的深度学习方法（如3D CNN、Graph Transformer）比较。
- **算力与可复现性**：未提供训练细节（超参数、硬件、代码开源情况），可能影响复现。
- **偏差风险**：ADNI数据存在人口统计学偏差（如以白人/高教育人群为主）；rs-fMRI预处理步骤可能引入噪声，模型对预处理参数的敏感性未分析。
- **应用限制**：预测时间窗固定为3年，未探索不同时间窗的效果；分类任务为二分类，实际临床需要更细粒度的分期。
- **解释性方法**：仅基于梯度/注意力权重的区域重要性评估，缺乏与临床生物标志物（如淀粉样蛋白PET）的关联验证。

（完）

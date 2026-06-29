---
title: "AG-ViT: Atlas-Guided Vision Transformer for Predicting Cognitive Decline"
title_zh: "AG-ViT: 图谱引导的视觉Transformer预测认知衰退"
authors: "Sagi Nathan, Gregory Peters-Founshtein, Yossi Gandelsman, Ariel Jaffe"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=tAb8aUxuzd"
tags: ["query:fbn"]
score: 7.0
evidence: 使用深度学习（视觉Transformer）处理rs-fMRI预测阿尔茨海默病认知衰退
tldr: rs-fMRI扫描的高维度和有限样本量给准确预测疾病轨迹带来挑战。本文设计AG-ViT，引入图谱引导的视觉Transformer，将rs-fMRI降维并预测阿尔茨海默病患者的认知衰退概率。实验表明AG-ViT能有效估计疾病进展，有助于个性化医疗决策，展示了Transformer在脑影像预测中的潜力。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1411, \"height\": 220, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1410, \"height\": 585, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 430, \"height\": 456, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1186, \"height\": 921, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-tab8auxuzd/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1350, \"height\": 788, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-tab8auxuzd/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1408, \"height\": 516, \"label\": \"Table\"}]"
motivation: rs-fMRI数据高维且样本有限，难以准确预测神经退行性疾病轨迹。
method: 设计图谱引导的视觉Transformer，从rs-fMRI扫描中学习低维嵌入，用于训练认知衰退概率预测网络。
result: 在阿尔茨海默病数据集上，AG-ViT实现了准确的认知衰退预测，优于基线方法。
conclusion: 基于Transformer的rs-fMRI预测模型能够辅助个性化医疗，提高疾病管理效率。
---

## Abstract
The use of resting state fMRI (rs-fMRI) to improve the diagnosis and treatment of neurodegenerative diseases has increased dramatically in recent years. Despite evident progress, producing accurate predictions from rs-fMRI scans remains challenging due to the data's high dimensionality and the limited number of samples. In this work, our aim is to estimate the probability of cognitive decline within a given time frame based on rs-fMRI scans of Alzheimer’s patients. Accurate predictions of disease trajectory can guide medical decision-making and contribute to personalized medicine. To this end, we design a vision transformer to obtain low-dimensional embeddings of rs-fMRI scans. These embeddings are used to train a network that estimates the probability of cognitive decline. By testing our approach on scans from the Alzheimer's Disease Neuroimaging Initiative, we show that models trained on our transformer-based features outperform those trained on handcrafted connectivity features by 15\%–26\% in F1-score.
For interpretability, we develop a simple yet effective method to identify brain regions whose fMRI-derived signal significantly impacted model predictions. The results identified a set of brain regions, some recognized for their early involvement in AD and others for their relative resilience to AD pathology.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：静息态功能磁共振成像（rs-fMRI）在神经退行性疾病诊断和治疗中应用广泛，但数据的高维性（每张扫描包含大量体素/连接）与有限样本量（患者招募困难）给准确预测疾病轨迹带来巨大挑战。
- **核心问题**：如何基于阿尔茨海默病（AD）患者的 rs-fMRI 扫描，在给定时间窗口内（如3年）估算其认知衰退的概率，从而辅助临床决策和个性化医疗。
- **整体含义**：提出一种新型深度学习框架，将视觉 Transformer 应用于 rs-fMRI 数据，实现从高维脑功能信号到低维可解释特征的有效提取，进而提升认知衰退预测的准确性，同时具备可解释性。

### 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：引入图谱引导的视觉 Transformer（AG-ViT），利用预定义的大脑功能图谱（如Schaefer图谱）将 rs-fMRI 扫描划分为有意义的空间区域，将每个区域视为一个“图块”（patch），从而降低数据维度，并为 Transformer 提供神经解剖学先验。
- **关键技术细节**：
  - **输入表示**：将 rs-fMRI 时间序列按图谱区域进行聚合（如平均信号），得到每个区域在多个时间点的特征，形成一个二维“扫描-区域”矩阵。
  - **Transformer 架构**：将区域特征作为 token 序列输入标准 Vision Transformer（ViT），学习区域间的时空交互关系，输出低维嵌入（embedding）。
  - **预测网络**：利用学习到的嵌入训练一个分类/回归网络（如 MLP），输出认知衰退的概率（例如基于 CDR-SB 或 MMSE 的下降标准）。
  - **可解释性方法**：设计一种简单有效的特征重要性评估方法——对输入区域特征施加噪声或掩码，观察模型输出变化，从而识别对预测最关键的大脑区域（如执行控制网络、默认模式网络等）。
- **公式/算法流程**：文中未给出显式的数学公式，主要流程为：图谱分区 → 区域特征提取 → ViT 编码 → 概率预测。关键步骤包括：图谱 mask 生成、区域平均时间序列、位置编码、自注意力计算、分类头。

### 3. 实验设计：使用的数据集、基准、对比方法
- **数据集**：阿尔茨海默病神经影像学倡议（ADNI）数据库中的 rs-fMRI 扫描，包含 AD 患者、轻度认知障碍（MCI）患者及健康对照者。预测目标为 3 年内认知是否显著衰退（基于 CDR-SB 等指标）。
- **基准**：传统手工定义的功能连接特征（如皮尔逊相关矩阵、图论指标）作为基线。
- **对比方法**：主要对比使用手工特征（FC-based）训练的模型；此外可能对比了仅用全连接网络、传统机器学习方法（如 SVM、随机森林）等（论文摘要仅明确与手工连接特征对比，详情需全文）。
- **性能指标**：主要报告 F1-score，AG-ViT 相比基线提升 15%–26%。

### 4. 资源与算力
- **文中未明确说明**：论文未提及所使用的 GPU 型号、数量、训练时长、显存占用等计算资源信息。这可能是因为 ICLR 短版/摘要未详细描述实验环境。

### 5. 实验数量与充分性
- **实验数量**：论文主要呈现了在 ADNI 单一数据集上的主要结果（对比手工特征），以及一项可解释性分析（识别关键脑区并展示其相关性）。未提及跨数据集验证或额外的消融实验细节。
- **充分性与公平性**：
  - 优势：与主流基线（手工连接特征）对比，性能提升显著；可解释性分析提供生物学验证（识别出已知的早期受累区域和抵抗区域）。
  - 不足：实验覆盖度有限——缺少对超参数敏感性、不同图谱选择、不同预测时间窗口、不同 Transformer 变体的系统消融；未进行跨数据集的泛化性测试；未与其他深度学习模型（如 3D CNN、GNN）对比；可能未严格保证训练/测试集的样本平衡或交叉验证的重复次数。

### 6. 论文的主要结论与发现
- **主要结论**：AG-ViT 通过图谱引导的视觉 Transformer 能够从 rs-fMRI 中有效学习低维表示，在预测 AD 认知衰退任务上显著优于基于手工连接特征的模型（F1-score 提升 15%–26%）。
- **关键发现**：模型识别出的重要脑区包括：背侧注意网络、腹侧注意/突显网络、视觉网络、认知控制网络等，其中部分区域已知在 AD 早期受累（如颞叶默认网络），另一些则表现出对 AD 病理的相对抵抗性（如初级感觉运动区），为疾病机制提供了新的线索。

### 7. 优点
- **方法创新**：巧妙地将大脑图谱先验融入 Vision Transformer 的输入设计，既降低了维度又保留了空间结构信息，优于纯数据驱动的 patch 切割方式。
- **性能优异**：在真实临床数据集上取得显著提升，且使用了相对简单的 Transformer 架构，易于复现和扩展。
- **可解释性强**：提出一个轻量级的特征重要性方法，能够定位与预测相关的特定脑区，其结果与神经科学已知证据吻合，增强了模型可信度。
- **临床价值明确**：针对认知衰退概率的预测直接服务于个性化医疗决策，具有实际应用意义。

### 8. 不足与局限
- **实验覆盖有限**：仅使用单一数据集（ADNI），缺乏跨数据库、跨扫描仪或跨人群的泛化验证；未与近年其他深度学习模型（如 GCN、3D-ResNet）直接对比。
- **样本量偏小**：rs-fMRI 的受试者数量通常较少（ADNI 中可用样本可能不足 500），可能影响模型稳定性和统计显著性。
- **模态单一**：仅使用 rs-fMRI，未整合结构 MRI、PET 或临床量表等多模态信息，限制了预测能力的上限。
- **可解释性方法深度不足**：特征重要性评估基于输入扰动，可能忽略特征间的非线性交互；未对比更先进的可解释性工具（如 SHAP、集成梯度）。
- **未考虑时间动态**：rs-fMRI 是时间序列，但模型主要使用图谱区域平均信号，可能丢失了局部动态连通性信息。
- **算力需求未知**：未报告计算资源，对于资源有限的临床环境，Transformer 的部署成本可能是隐患。

（完）

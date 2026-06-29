---
title: "$\\text{BrainM}^3$: A Multi-Task Learning Framework Based on A Multi-Level Mixture- of-Experts for Cross-Disease and Cross-Domain Dementia Diagnosis"
title_zh: BrainM^3：基于多级混合专家的多任务学习框架用于跨疾病和跨领域痴呆诊断
authors: "Jing Zhang, Minheng Chen, Tong Chen, Xiaowei Yu, Chao Cao, Li Su, Tianming Liu, Dajiang Zhu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=SwNrMxesH2"
tags: ["query:fbn"]
score: 9.0
evidence: 使用多任务学习和混合专家模型基于脑连接特征进行痴呆诊断
tldr: 针对痴呆亚型诊断中的数据稀缺和领域偏移问题，提出BrainM^3多任务学习框架，采用多级混合专家（MoE）架构联合学习阿尔茨海默病、轻度认知障碍和路易体痴呆的诊断，通过分离疾病共享和特异性连接特征，提升了跨疾病和跨机构的泛化能力。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-swnrmxesh2/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1448, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-swnrmxesh2/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1441, \"height\": 676, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-swnrmxesh2/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1444, \"height\": 386, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-swnrmxesh2/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 551, \"height\": 481, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-swnrmxesh2/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 708, \"height\": 465, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-swnrmxesh2/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1449, \"height\": 1880, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-swnrmxesh2/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1467, \"height\": 440, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-swnrmxesh2/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1541, \"height\": 821, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-swnrmxesh2/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 810, \"height\": 263, \"label\": \"Table\"}]"
motivation: 解决痴呆亚型诊断中的数据稀缺和领域偏移问题。
method: 多任务学习结合多级混合专家，分离共享与特异性脑连接特征。
result: 在跨疾病和跨机构场景下表现优异。
conclusion: 为罕见痴呆亚型诊断提供了有效框架。
---

## Abstract
Accurate differential diagnosis of dementia subtypes is crucial due to their distinct clinical trajectories and treatment responses. However, rare subtypes such as Lewy Body Dementia (LBD) suffer from data scarcity, and domain shifts across institutions further hinder model generalization. To address these challenges, we propose $\text{BrainM}^3$, a Multi-task learning framework based on a Multi-level Mixture-of-Experts (MoE) architecture for cross-domain and cross-disease Brain modeling. Our model jointly learns Alzheimer’s disease (AD), mild cognitive impairment (MCI), and LBD diagnosis by disentangling disease-shared and specific brain connectivity features. At the domain level, a domain-aware Soft-MoE combined with adversarial training captures domain-invariant foundation brain representations, effectively mitigating scanner and cohort variability. At the task level, task-shared and task-specific Soft-MoEs enable mutual knowledge transfer and facilitate fine-grained pathological feature modeling. Experiments on multi-institutional datasets demonstrate that $\text{BrainM}^3$ consistently outperforms baselines under data heterogeneity. Moreover, our model offers interpretable insights into disease-relevant brain networks, offering potential clinical utility. Our work highlights the promise of an accurate and interpretable model for robust dementia diagnosis in real-world, cross-institution settings. Our code will be published based on acceptance.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：痴呆症（包括阿尔茨海默病AD、轻度认知障碍MCI、路易体痴呆LBD等）的准确鉴别诊断对临床治疗和预后评估至关重要。不同亚型具有不同的疾病轨迹和治疗响应，但罕见亚型（如LBD）面临严重的数据稀缺问题，同时不同机构采集的脑影像数据存在显著的领域偏移（scanner、protocol差异），导致模型泛化困难。
- **核心问题**：如何在数据稀缺、领域偏移的条件下，利用多任务学习（MTL）实现跨疾病、跨机构的鲁棒性痴呆诊断？
- **整体含义**：该工作首次探索了脑疾病研究中的异质特征多任务学习（heterogeneous-feature MTL）问题，提出了一个统一框架，通过分离疾病共享和特异性脑连接特征，在提升数据丰富任务（AD/MCI）性能的同时，也显著改善了数据稀缺任务（LBD）的诊断效果。

## 2. 方法论：核心思想、关键技术细节

### 核心思想
- 构建一个**多级混合专家（Multi-level Mixture-of-Experts, MoE）架构**，在域级别和任务级别分别进行特征解耦：
  - **域级别**：通过域共享Soft-MoE + 域对抗训练，学习域不变的脑基础表示。
  - **任务级别**：通过任务共享Soft-MoE和任务特异Soft-MoE，捕获共性与特异性病理模式，实现知识迁移。

### 关键技术细节
1. **脑子网络表示**：基于DTI结构连接（SC）矩阵（148×148，Destrieux图谱），将每个列向量（对应一个ROI与其连接模式）作为“脑子网络”token。通过MLP编码器映射为嵌入序列 H ∈ R^{R×D}。
2. **域共享MoE**：K个专家（MLP），门控网络对每个token计算软分配权重，输出加权和，得到域鲁棒的token序列 Ĥ。
3. **任务共享与特异MoE**：在域共享表示上，依次通过任务共享MoE（提取通用病理特征）和任务特异MoE（针对每个任务提取特异模式），并通过残差融合（求和）整合。
4. **全局表示**：使用注意力池化（可学习query）将序列聚合为全局向量，接任务分类头。
5. **域对抗学习**：在域共享MoE输出上施加梯度反转层（GRL），训练域分类器，迫使特征提取器产生域不变表示。
6. **训练目标**：L_total = L_dr + L_ds + λ·L_domain，其中L_dr和L_ds分别为数据丰富任务和数据稀缺任务的交叉熵损失，λ为平衡超参（实验中设为1）。

## 3. 实验设计

### 数据集
- **ADNI数据集**：公开，数据相对丰富。经质量控制后418名受试者（301 NC, 117 MCI）。任务：NC vs MCI二分类。
- **私有数据集**：来自某匿名机构，数据稀缺。147名受试者（23 NC, 77 LBD, 47 AD）。任务：三分类（NC vs AD vs LBD）及两两比较。
- 预处理：T1配准到DTI空间，FreeSurfer皮层分割，Destrieux图谱划分148个ROI，基于纤维追踪的数量计算连接强度。

### Benchmark
- 单任务基线：传统ML（SVM、XGBoost）、CNN/GNN（BrainNetCNN、FBNETGNN）、Transformer（VanillaTF、BrainNetTF）。
- 自身消融：将BrainM^3中域共享和任务共享模块移除，训练单任务版本作为公平对比。

### 对比结果
- 单任务设置下：BrainM^3（单任务版）在私有数据上所有指标最优（ACC 76.67, AUROC 84.54）。
- 多任务设置下：BrainM^3（多任务版）在ADNI上ACC提升14.19%（84.38 vs 70.16），AUROC提升5.88%；在私有数据上ACC 80.00, AUROC 88.13，全面超越所有基线。

## 4. 资源与算力

- 硬件：单张NVIDIA RTX 6000 GPU。
- 训练参数：batch size 16，epochs 128，Adam优化器，学习率1e-4。
- **特别说明**：论文未明确提及训练总时长、多GPU并行、显存消耗等具体算力开销，也未提供模型参数量。

## 5. 实验数量与充分性

### 实验类型与数量
- **主对比实验**：基于两个数据集（ADNI+私有），报告ACC、AUROC、SEN、SPE四个指标，对比8种方法（含自身消融变体）。
- **消融实验**：
  - 专家数量与结构消融（Table 2）：固定总专家数（2/4/8/16）下，变化域共享/任务共享/任务特异专家配比，共16种配置。
  - 域损失权重λ的敏感性分析（Fig. 5）：λ ∈ {0,0.5,1,2,3}。
  - GRL去除消融（文中描述）。
- **可解释性分析**：可视化top-5判别性子网络（ADNI与私有数据集分别展示），并提供与文献一致的神经科学解释。
- **混淆矩阵**（Fig. 4）：展示三分类混淆矩阵。

### 充分性与客观性评价
- **优点**：对比基线覆盖了传统ML、CNN/GNN、Transformer三大类型，消融实验考虑了多种专家配置和损失权重，可解释性分析有神经科学依据，设计较全面。
- **不足**：
  - 数据集数量有限（仅2个），且私有数据集样本量很小（147），泛化性未知。
  - 未在更多公开数据集（如OASIS、AIBL）上验证跨机构泛化能力。
  - 基线未包含最新的基于状态空间模型（如Mamba）或大语言模型（如Med-PaLM）的方法。
  - 消融实验仅在最佳配置下进行，未报告多次重复的统计显著性（如标准差或p值）。
  - 实验复现性受限于“代码将在录用后发布”；部分预处理细节在附录中但较简略。

## 6. 主要结论与发现

1. **多任务MoE架构有效**：同时学习数据丰富任务（AD/MCI）和数据稀缺任务（LBD）能显著提升后者的性能（私有数据AUROC从最佳单任务84.54提升至88.13）。
2. **域对抗训练缓解领域偏移**：λ=1时达到最佳，λ过大或过小均导致性能下降；移除GRL后性能下降，验证了域不变特征学习的重要性。
3. **可解释性揭示疾病相关脑网络**：模型识别出的top-5判别性子网络与已知病理学高度一致（如前扣带回、默认模式网络区域、岛叶、额上回等），且能区分AD与LBD的特异模式（如额上回在AD中萎缩更显著）。
4. **首次探索异质特征MTL在脑疾病诊断**：为真实临床中跨机构、跨疾病的建模提供了新框架。

## 7. 优点

- **创新性**：首次将多级MoE（域共享+任务共享+任务特异）与域对抗训练结合，用于异质特征多任务学习，解决数据稀缺和领域偏移双重挑战。
- **有效性**：在数据稀缺的LBD诊断上取得显著提升，优于所有单任务方法，体现出知识迁移的价值。
- **可解释性**：基于MoE的门控激活提供了疾病相关的脑子网络解释，具有临床实用性。
- **工程友好**：Soft-MoE替代硬选择，简化训练；整体框架端到端可训练。
- **实验设计严谨**：考虑了三种类型专家（域共享、任务共享、任务特异）的组合消融，并分析了损失权重敏感性。

## 8. 不足与局限

- **数据规模与多样性**：私有数据集仅147例，统计功效有限；ADNI数据集仅包含NC vs MCI二分类，未包含AD与LBD在同一平台上的对比。结果可能依赖于特定领域偏移模式（ADNI与私有数据各一组），无法保证在更多医院/扫描仪下的泛化性。
- **实验覆盖不足**：缺少以下评估：
  - 多域场景：仅两个域，域对抗训练在三个及以上域的有效性未知。
  - 模态扩展：仅使用结构连接（SC），未联合功能性连接（fMRI）或临床量表。
  - 与最新SOTA对比：未包含2024-2025年提出的图Transformer（如BrainNetTF的改进版）、状态空间模型或自监督方法。
  - 统计显著性：未报告多次运行的标准差或置信区间，结论可靠性需谨慎。
- **局限性**：
  - 模型复杂度：MoE模块参数较多（专家数最高16），在小样本下可能存在过拟合风险（文中未提供参数量或正则化细节）。
  - 可解释性分析主观：仅依靠激活分数排名，缺乏定量评估（如通道路径重要性验证）。
  - 代码未开放：影响可复现性。
  - 未讨论对隐私保护、联邦学习等现实部署问题的适配性。

（完）

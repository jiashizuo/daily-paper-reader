---
title: "MnemoDyn: Learning Resting State Dynamics from  $40$K FMRI sequences"
title_zh: MnemoDyn：从4万条fMRI序列学习静息态动态
authors: "Sourav Pal, Viet Luong, Hoseok Lee, Tingting Dan, Guorong Wu, Richard Davidson, Won Hwa Kim, Vikas Singh"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=zexMILcQOV"
tags: ["query:fbn"]
score: 8.0
evidence: 大规模rs-fMRI动态模型，使用多分辨率时间建模
tldr: 针对现有基于Transformer的rs-fMRI模型计算效率低、泛化差的问题，提出MnemoDyn，采用多分辨率时间建模在4万条rs-fMRI序列上预训练。该模型计算高效，在不同人群和扫描协议下泛化优秀，重建质量优于当前最佳。为大规模fMRI基础模型提供新方向。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-zexmilcqov/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1155, \"height\": 627, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zexmilcqov/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 735, \"height\": 437, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zexmilcqov/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1442, \"height\": 260, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zexmilcqov/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 737, \"height\": 241, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zexmilcqov/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1440, \"height\": 1348, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zexmilcqov/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1437, \"height\": 739, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1451, \"height\": 435, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1368, \"height\": 390, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 896, \"height\": 333, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 891, \"height\": 145, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 897, \"height\": 186, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1324, \"height\": 270, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 792, \"height\": 384, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 792, \"height\": 382, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 722, \"height\": 284, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1164, \"height\": 503, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zexmilcqov/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1450, \"height\": 389, \"label\": \"Table\"}]"
motivation: 现有rs-fMRI模型计算昂贵且泛化差，需要高效且通用的动态模型。
method: 提出MnemoDyn，采用多分辨率时间建模捕捉fMRI时间动态，在大规模数据上预训练。
result: 在重建任务上显著优于基于Transformer的方法，且计算更高效、泛化更强。
conclusion: 展示大规模预训练在rs-fMRI动态建模中的潜力，为下游应用提供强大基础模型。
---

## Abstract
We present a dynamical-systems based model for resting-state functional magnetic resonance imaging (rs-fMRI), trained on a dataset of roughly $40$K rs-fMRI sequences covering a wide variety of public and  available-by-permission datasets. While most existing proposals use transformer backbones, we utilize multi-resolution temporal modeling of the dynamics across parcellated brain regions. We show that MnemoDyn is compute efficient and generalizes very well across diverse populations and scanning protocols. When benchmarked against current state-of-the-art transformer-based approaches, MnemoDyn consistently delivers superior reconstruction quality.
Overall, we find that with such large-scale pre-training on (non-proprietary) rs-fMRI datasets, we get a highly performant model for various downstream tasks. Our results also provide evidence of the efficacy of the model on small sample size studies which has implications for neuroimaging studies at large where resting state fMRI is a commonly acquired imaging modality.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有基于 Transformer 的静息态功能磁共振成像（rs-fMRI）模型（如 BrainLM、Brain-JEPA）计算成本高、参数多，且对长序列（如整夜 fMRI）扩展性差；同时在小样本数据集上微调效果有限，难以在资源受限的临床环境中部署。
- **整体含义**：作者旨在构建一个**计算高效、泛化能力强**的 rs-fMRI 基础模型，替代依赖自注意力的 Transformer 架构，从而更有效地捕捉脑活动中的多尺度动态结构。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将 rs-fMRI 时间信号视为由**潜在动力系统**生成的轨迹，通过学习**演化算子**（而非自回归映射）来建模脑动力学。算子将初始状态和控制输入映射到完整的潜变量轨迹。
- **关键技术细节**：
  - **连续时间公式**：使用常微分方程（ODE）描述潜状态演化：  
    $\frac{dz(t)}{dt} = F(z(t), u(t); \theta)$，其中 $u(t)$ 为控制输入（可为零）。通过积分改写为 Volterra 型积分方程，进而表达为**非线性积分算子**。
  - **多分辨率核参数化**：采用小波基（如 db2）对积分核 $K(z(\tau); \theta)$ 进行多分辨率分解，将其表示为不同尺度、不同位置的小波基函数的线性组合，使算子能够同时捕获精细和粗粒度的时域依赖。
  - **伪微分算子 + 小波**：小波域中的伪微分算子具有稀疏的块对角表示，大幅降低计算复杂度。
  - **低秩参数分解**：采用 CP（Canonical Polyadic）张量分解，将高维算子的参数矩阵分解为低秩外积形式，减少自由参数并保留表达能力。
- **算法流程**：
  1. **预处理**：NIfTI → CIFTI 标准化时序 → 脑图谱分块（450 个 ROI）→ 鲁棒归一化。
  2. **预训练**：堆叠多个操作子块（每块含小波分解、低秩参数化、残差连接），使用去噪自编码或掩码自编码目标（Mask、Mask-JEPA），在 40K 序列上训练。
  3. **微调**：冻结预训练骨干，附加轻量级 MLP 分类/回归头，在目标任务上训练。

### 3. 实验设计：数据集、基准测试与对比方法

- **数据集**：
  - **预训练**：UK Biobank（约 40K 序列，序列长度 490）、HCP（约 1000 序列，长度 1200）。
  - **微调与评估**：HCP-Aging（年龄、性别、神经质、Flanker）、ADNI（NC vs MCI、Amyloid +/-）、Healthy Brain Network（HBN，年龄、性别）、ADHD-200（ADHD vs 正常对照）、ABIDE（自闭症 vs 对照）、NKIR（性别分类）。
- **基准测试**：重建质量（MSE、R²）、分类准确率（ACC）、F1 分数、回归 MSE。
- **对比方法**：BrainNetCNN、BrainGNN、BNT、BrainLM、Brain-JEPA。

### 4. 资源与算力

- 论文明确说明：MnemoDyn（92M 参数）可在**单张 A100 40GB GPU** 上约 **3 小时**完成预训练，最大内存占用约 40GB。相比之下，基线模型 BrainLM、Brain-JEPA 需要 **4 张 GPU** 才能训练。
- 实验中使用 AdamW 优化器、余弦退火调度、梯度裁剪等，均可在资源有限的条件下完成。

### 5. 实验数量与充分性

- **实验数量**：丰富且多层次：
  - 2 种预训练策略（Denoise、Mask / Mask-JEPA）。
  - 2 个预训练来源（UKB、HCP）。
  - 6 个下游任务数据集，涵盖分类（疾病、性别）、回归（年龄、认知评分）。
  - 消融研究：移除小波多分辨率、改变模型深度、改变预训练数据规模。
  - 零样本迁移测试（预训练模型直接用于小数据集）。
- **充分性与公平性**：对比方法均使用官方或论文报告的最佳结果，且在每个任务上报告多次运行的平均值和标准差。部分数据集（如 ABIDE）无法复现 Brain-JEPA 基线，但作者仍提供了 MnemoDyn 自身的结果，论证完整。整体实验设计客观、公平。

### 6. 论文的主要结论与发现

- MnemoDyn 在**重建质量**上全面优于 Transformer 基线（UKB 重建 R²=0.985，HCP 重建 R²=0.987）。
- 在**下游任务**（疾病诊断、认知预测）上，MnemoDyn 取得 SOTA 或大幅度提升（例如 ADNI NC/MCI 分类准确率 96.12% vs Brain-JEPA 76.84%）。
- **计算效率**极高：单 GPU 数小时完成预训练，而基线需要多 GPU 更长时间。
- **小样本泛化能力**：在零样本或少量微调场景下，仍能保持高重建质量和预测性能。
- 模型展现出**基础模型特性**：随模型深度和数据规模增加性能持续提升，且跨数据集、跨任务泛化强。

### 7. 优点：方法或实验设计上的亮点

- **方法创新**：将动力系统、算子学习、小波多分辨率分析有机融合，避免了注意力机制所需的 token 化、位置编码等繁琐设计，且天然适合脑信号的连续、多尺度特性。
- **高效性**：通过伪微分算子 + 低秩分解实现稀疏计算，单 GPU 即可处理 40K 序列。
- **实验完整性**：覆盖了多个异质数据集和多种任务类型，消融充分，统计严格（多次运行取均值和标准差）。
- **开放科学**：代码和预训练模型将公开发布，便于复现和进一步研究。

### 8. 不足与局限

- **模态限制**：仅使用分块后的 rs-fMRI 数据，未扩展到体素级或结合其他模态（EEG、PET、DTI），限制了更广泛的神经科学应用。
- **临床验证不足**：尽管在 ADNI、ABIDE 等数据集上表现优异，但未在真实临床场景（如手术规划、癫痫灶定位）中验证，不能直接用于医疗决策。
- **纵向研究缺失**：实验均为横截面任务，未探索随时间变化的纵向预测（如疾病进展监测）。
- **神经生理对应性**：多尺度算子虽提供结构解释性，但未建立与真实神经活动的严格对应关系，作者也承认这一局限性。
- **基线比较限制**：在 ABIDE 数据集上因可重复性问题未能与最强基线 Brain-JEPA 直接对比，部分削弱了跨数据集结论的全面性。
- **超参数敏感性**：小波家族、分解层数、低秩维度等超参数对性能有影响，论文只报告了 db2 和固定范围搜索，但未深入讨论鲁棒性。

（完）

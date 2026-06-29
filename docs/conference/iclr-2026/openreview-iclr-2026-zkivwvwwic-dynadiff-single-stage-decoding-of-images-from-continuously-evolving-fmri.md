---
title: "Dynadiff: Single-stage Decoding of Images from Continuously Evolving fMRI"
title_zh: "Dynadiff: 从连续演变的fMRI中单阶段解码图像"
authors: "Marlene Careil, Yohann Benchetrit, Jean-Remi King"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=ZkiVWvWwic"
tags: ["query:fbn"]
score: 7.0
evidence: fMRI与人工智能在医疗影像中的应用
tldr: 针对现有fMRI脑图像解码方法依赖复杂多阶段流水线且忽略时间动态的问题，本文提出Dynadiff单阶段扩散模型，直接从连续演变的fMRI记录中重建图像。该方法简化了训练流程，并在多个指标上超越先前最先进技术。这项工作推进了时间分辨的脑解码能力，为神经影像AI在医疗中的应用提供了新途径。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-zkivwvwwic/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1432, \"height\": 747, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zkivwvwwic/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 287, \"height\": 556, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zkivwvwwic/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 842, \"height\": 1298, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zkivwvwwic/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1424, \"height\": 1190, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zkivwvwwic/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1445, \"height\": 320, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zkivwvwwic/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 417, \"height\": 327, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zkivwvwwic/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1006, \"height\": 2062, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zkivwvwwic/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1005, \"height\": 2067, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zkivwvwwic/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1425, \"height\": 563, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-zkivwvwwic/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1451, \"height\": 215, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zkivwvwwic/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1071, \"height\": 280, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zkivwvwwic/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1119, \"height\": 219, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zkivwvwwic/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1453, \"height\": 362, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zkivwvwwic/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1450, \"height\": 156, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zkivwvwwic/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1452, \"height\": 586, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zkivwvwwic/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1457, \"height\": 558, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-zkivwvwwic/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1445, \"height\": 205, \"label\": \"Table\"}]"
motivation: 现有fMRI图像解码方法多阶段且忽略时间动态，限制时间分辨能力。
method: 提出Dynadiff单阶段扩散模型，直接从动态fMRI数据重建图像。
result: 在多个基准上超越现有方法，且训练更简单。
conclusion: Dynadiff实现了更高效、时间敏感的脑图像解码，推动了神经影像AI发展。
---

## Abstract
Brain-to-image decoding has been recently propelled by the progress in generative AI models and the availability of large ultra-high field functional Magnetic Resonance Imaging (fMRI). However, current approaches depend on complicated multi-stage pipelines and preprocessing steps that typically collapse the temporal dimension of brain recordings, thereby limiting time-resolved brain decoders. Here, we introduce Dynadiff (Dynamic Neural Activity Diffusion for Image Reconstruction), a new single-stage diffusion model designed for reconstructing images from dynamically evolving fMRI recordings. Our approach offers three main contributions. First, Dynadiff simplifies training as compared to existing approaches. Second, our model outperforms state-of-the-art models on time-resolved fMRI signals, especially on high-level semantic image reconstruction metrics, while remaining competitive on preprocessed fMRI data that collapse time. Third, this approach allows a precise characterization of the evolution of image representations in brain activity.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **现有问题**：当前脑图像解码方法依赖复杂多阶段流水线（如Brain-Diffuser、MindEye1/2），通常包括fMRI编码器、对比学习、扩散先验、字幕生成、候选筛选等多个独立模块；且预处理常将fMRI时间维度塌缩为“beta值”，丢失时序信息，限制时间分辨能力。
- **研究动机**：为克服多阶段训练复杂度高、忽略fMRI时间动态的局限，实现更简单、时间敏感的脑图像解码。
- **整体含义**：提出单阶段扩散模型Dynadiff，直接从连续演变的fMRI时间序列中重建图像，简化流程并提升时间分辨解码性能。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：直接微调预训练潜在扩散模型，将fMRI时间序列作为条件输入，通过脑模块提取嵌入替代原始图像嵌入，使用单一扩散损失联合训练脑模块和扩散模型的少量参数。
- **脑模块架构**：
  - 输入：fMRI时间序列 X ∈ ℝ^{C×T}（C个体素，T个时间点）。
  - 主体线性层：将每个体素映射至1552维（保持时间维度T）。
  - 时间特异性层：每个时间样本应用独立权重矩阵。
  - 归一化/激活/丢弃：LayerNorm → GELU → Dropout(p=0.5)。
  - 时间聚合层：线性层合并时间维度至单向量。
  - 输出层：线性映射至257×768（匹配CLIP图像嵌入形状）。
  - 总参数量约400M。
- **扩散模型适配**：
  - 使用与Brain-Diffuser相同的预训练扩散模型。
  - 脑模块输出替换图像嵌入，文本嵌入置空。
  - 仅微调交叉注意力层的LoRA适配器（rank=4, alpha=4，约25M参数），其余冻结。
- **训练细节**：
  - 损失：标准扩散损失 + 双三次采样（更频繁采样早期时间步）+ 偏移噪声。
  - 无分类器指导：10%训练迭代移除脑条件，替换为学习到的常数嵌入。
  - 优化器：AdamW（lr=1e-3, weight decay=0.01, betas=(0.9,0.999)）。
  - 学习率调度：线性warmup 1k步→余弦衰减。
- **推理**：DDIM 20步，CFG scale=3，从随机噪声开始去噪。

## 3. 实验设计
- **数据集**：Natural Scenes Dataset (NSD)：
  - 8位受试者，选用完成全部40次扫描的4位（sub1,2,5,7）。
  - 每受试者观看10,000张独特图像（每张重复3次），9,000训练/1,000测试。
  - 使用标准分辨率fMRI时间序列（TR=1.3s），仅做去趋势和z-score归一化，选nsdgeneral ROI。
- **基准方法**：Brain-Diffuser、MindEye1、MindEye2、WAVE（均按原论文复现，但调整输入以适配时间序列）。
- **评估指标**：
  - 低层：PixCorr、SSIM、AlexNet(2/5)
  - 高层/语义：CLIP、Inception、EfficientNet、SwAV、DreamSim、mIoU（语义分割IoU）
  - 均采用单次试验评估（不平均重复），每张测试图像随机选一次重复。
- **实验类型**：
  1. **主表对比**（Table 1）：单次试验性能，报告SEM。
  2. **时间分辨分析**（Figure 4,5）：训练固定窗口（t=3s,d=8s），测试时平移窗口；对比General模型（单一模型在不同偏移窗口测试）和Specialized模型（每个偏移窗口单独训练）。
  3. **窗口时长消融**（Figure 6）：d从1TR到6TR。
  4. **脑模块设计消融**（Table 2）：移除时间特异性层、时间聚合层位置变更。
  5. **扩散模型微调消融**（Table 3）：全量微调、线性层、交叉注意力层、冻结、LoRA。
  6. **跨受试者实验**（Appendix E）：联合训练多受试者、预训练后微调新受试者。
  7. **预处理消融**（Table 5）：fMRIPrep vs NSD作者预处理。
  8. **beta值对比**（Table 4）：将Dynadiff适配至beta值（单时间步）后与先前方法比较。

## 4. 资源与算力
- **训练硬件**：8张A100 GPU。
- **训练规模**：总batch size=320，约60k步，训练时长约2.5天。
- **优化策略**：DeepSpeed ZeRO stage 2 Offload，float16精度。

## 5. 实验数量与充分性
- **实验数量**：涵盖主对比、时间分辨、多组消融（窗口时长、模块组件、微调策略、预处理、跨受试者）、beta值对比，共计8组主要实验。
- **充分性**：指标覆盖低层和高层，与以往工作一致；报告SEM跨受试者；复现基线时调整输入维度并增加训练步数以公平对比；消融实验全面验证设计选择。
- **客观性**：使用公开数据集和标准评估协议；代码计划公开。但未针对所有基线进行超参数调优（保持原文默认），可能存在细微不公平。

## 6. 主要结论与发现
- **性能领先**：在时间序列fMRI上，Dynadiff在多数指标上超越所有基线，尤其在高层语义指标：CLIP比MindEye2高3.25点，DreamSim改善3.76点；低层指标也接近或更优（AlexNet2 +1.67, AlexNet5 +0.86）。
- **时间分辨能力**：General模型在偏移窗口内能泛化有限范围；但每个时间点的最佳解码来自Specialized模型。解码峰值出现于刺激呈现后约3s，符合HRF；在临近图像的时间窗口，会解码相邻图像。
- **窗口时长**：3TR（~3.9s）已接近最优，6TR仅有微小提升。
- **模块设计关键**：时间特异性层和时间聚合层对性能至关重要，移除或更改会显著降低指标。
- **微调策略**：LoRA on cross-attention（25M参数）是最佳选择；全模型微调导致过拟合。
- **跨受试者**：多受试者联合训练可达到与单受试者相当的性能，且在新受试者上微调时数据效率更高。

## 7. 优点
- **架构简化**：单阶段端到端训练，消除多阶段流水线（预训练编码器、对比学习、独立低/高层重建、候选筛选等）。
- **时间保留**：首次在NSD上利用原始fMRI时间序列实现高精度解码，支持时间分辨分析。
- **性能突出**：在多数指标上达到或超越当前SOTA，尤其高层语义重建。
- **设计可解释**：通过消融实验清晰揭示各组件贡献（时间特异性、聚合方式）。
- **跨受试可扩展**：多受试者预训练可降低新受试者数据需求，具有实际应用潜力。
- **实验全面**：覆盖多种对比、消融和分析，验证充分。

## 8. 不足与局限
- **数据偏差**：NSD图像分布可能存在典型类别偏差（Shirakawa et al., 2024），泛化至其他数据集需验证。
- **预处理依赖**：仍需手工去趋势和z-score归一化，未使用端到端脑基础模型替换，可能改进空间有限。
- **受试者特异性**：训练需要大量每受试者数据（约27,000 trials），无法零样本推广至新受试者。
- **计算成本**：需8×A100约2.5天，资源门槛较高。
- **仅静态图像**：目前仅处理静态图像解码，视频解码尚未实现。
- **时间分辨机制未深入**：虽展示了动态解码现象，但未对神经表征如何随时间变化提供因果解释或建模。
- **未探索更优扩散模型**：仅使用了与Brain-Diffuser相同的预训练扩散模型，未尝试SDXL等更先进生成模型。

（完）

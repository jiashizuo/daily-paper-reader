---
title: Efficient Modeling of Long-range fMRI Dynamics with a 2D Natural Image Autoencoder
title_zh: 利用2D自然图像自编码器高效建模fMRI长程动态
authors: "Peter Yongho Kim, Juhyeon Park, Jungwoo Park, Jubin Choi, Jungwoo Seo, Jiook Cha, Taesup Moon"
date: 2025-09-15
pdf: "https://openreview.net/pdf?id=qcfpBYe0dD"
tags: ["query:fbn"]
score: 9.0
evidence: 使用自编码器和Transformer对fMRI长程动态建模
tldr: fMRI高维4D信号的长程时空动态建模受限于内存，现有体素模型只能处理较短时间窗口。本文提出TABLeT，利用预训练的2D自然图像自编码器将每个fMRI体素压缩为连续令牌，再用Transformer进行高效长序列建模。在大规模基准上证明该方法在建模长程依赖性方面优于现有方法，为功能连接分析提供了新工具。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-qcfpbye0dd/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1164, \"height\": 1462, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-qcfpbye0dd/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1369, \"height\": 575, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-qcfpbye0dd/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 726, \"height\": 498, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-qcfpbye0dd/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1297, \"height\": 455, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-qcfpbye0dd/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1320, \"height\": 465, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-qcfpbye0dd/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 472, \"height\": 486, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-qcfpbye0dd/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1135, \"height\": 569, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-qcfpbye0dd/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1276, \"height\": 889, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-qcfpbye0dd/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1359, \"height\": 187, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-qcfpbye0dd/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1284, \"height\": 863, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-qcfpbye0dd/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1357, \"height\": 432, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-qcfpbye0dd/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1377, \"height\": 503, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-qcfpbye0dd/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1388, \"height\": 506, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-qcfpbye0dd/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1052, \"height\": 388, \"label\": \"Table\"}]"
motivation: fMRI高维信号使长程时空动态建模困难，现有体素模型内存开销大且只能处理短窗口。
method: 使用预训练2D自然图像自编码器将fMRI体素压缩为紧凑令牌，再通过Transformer编码器进行长序列建模。
result: 在大规模fMRI基准上有效建模长程依赖，优于现有方法。
conclusion: 所提方法降低了内存需求，使长程fMRI动态建模成为可能，有助于功能连接分析。
---

## Abstract
Modeling long-range spatiotemporal dynamics in functional Magnetic Resonance Imaging (fMRI) remains a key challenge due to the high dimensionality of the four-dimensional signals. 
Prior voxel-based models, although demonstrating excellent performance and interpretation capabilities, are constrained by prohibitive memory demands and thus can only capture limited temporal windows. 
To address this, we propose TABLeT (Two-dimensionally Autoencoded Brain Latent Transformer), a novel approach that tokenizes fMRI volumes using a pre-trained 2D natural image autoencoder. Each 3D fMRI volume is compressed into a compact set of continuous tokens, enabling efficient long-sequence modeling with a simple Transformer encoder. Across large-scale benchmarks including the UK-Biobank (UKB), Human Connectome Project (HCP), and ADHD-200 datasets, TABLeT outperforms existing models in multiple tasks, while demonstrating substantial gains in computational and memory efficiency over the state-of-the-art voxel-based method. 
Furthermore, we demonstrate that TABLeT can be pre-trained with a self-supervised masked token modeling approach, improving downstream tasks' performance.
Our findings suggest a promising approach for scalable spatiotemporal modeling of brain activity.

---

## 论文详细总结（自动生成）

# 论文总结：Efficient Modeling of Long-range fMRI Dynamics with a 2D Natural Image Autoencoder

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **问题**：功能磁共振成像（fMRI）数据是四维（3D空间+时间）高维信号，现有基于体素的方法（如 TFF、SwiFT）虽然性能优异且可解释，但受限于巨大的内存开销，只能同时处理少量时间帧（通常 20 帧），从而无法捕获秒级甚至更长的长程时空动态（如 BOLD-LFP 耦合、全局 arousal 波）。
- **背景**：现有方法分为 ROI 基方法（如 BrainNetCNN、BNT、meanMLP）和体素基方法（TFF、SwiFT）。ROI 基方法依赖 ROI 划分且丢失细粒度空间信息；体素基方法虽然保留完整信息，但计算成本高，难以扩展至长序列。
- **整体含义**：提出一种新的体素基建模范式，通过将 fMRI 体素压缩为紧凑的连续令牌，从而允许 Transformer 处理更长时间序列，同时保持低内存开销和高效率，最终提升下游预测性能。

## 2. 论文提出的方法论
### 核心思想
- 利用预训练的**2D自然图像自编码器（DCAE）** 对每个 fMRI 3D 体积进行令牌化，将整个体积压缩为仅 27 个连续令牌，再用简单的 Transformer 编码器处理长序列（T=256 帧）。
- 模型名为 **TABLeT**（Two-dimensionally Autoencoded Brain Latent Transformer）。

### 关键技术细节
1. **令牌化过程**（图 1a）：
   - 每个 fMRI 3D 体积（1×96×96×96）先复制为 3 通道模拟 RGB。
   - 沿三个轴向（矢状、冠状、轴向）分别切片，每片通过 DCAE 编码器（压缩比 32）得到潜在表示（C'×H/32×W/32）。
   - 每个轴向的处理结果基于 32 的补丁大小进行 reshape 和拼接，得到 D/32 × H/32 × W/32 个令牌（即 3×3×3 = 27 个令牌）。
   - 将三个轴向的令牌按空间位置拼接，最终每个体积得到 27 个令牌，每个令牌嵌入维度为 96×C'（C'=32，故为 3072 维）。
   - 令牌化仅执行一次并缓存，后续训练开销可忽略。

2. **Transformer 编码器**（图 1b）：
   - 输入 27×T 个令牌（T=256），先经线性投影降维，加上 [CLS] 令牌和层归一化。
   - 使用 12 层 Transformer，14 个注意力头，2 个 key-value 头（GQA），采用旋转位置编码（RoPE）和 PyTorch 的 F.scaled_dot_product_attention。
   - 训练时随机采样连续 256 帧，验证时用所有帧并分窗平均输出。

3. **自监督预训练：掩码令牌建模（Masked Token Modeling）**：
   - 模仿 SimMIM 和 VideoMAE：随机掩码 50% 的令牌，替换为 [MASK] 令牌，用 L1 损失预测掩码令牌。
   - 采用“管道掩码”（tube masking）：同一帧内的掩码模式重复到所有帧，防止模型通过跨帧相同位置“作弊”。

## 3. 实验设计
- **数据集**：
  - UKB（UK Biobank）：8178 名中老年受试者，静息态 fMRI。
  - HCP（Human Connectome Project）：1061 名健康青年。
  - ADHD-200：533 名儿童/青少年（含 ADHD 患者和健康对照）。
- **任务与评估指标**：
  - 分类（性别、ADHD 诊断）：准确率（ACC）、AUC、F1 分数。
  - 回归（年龄、智力）：MSE、MAE、皮尔逊相关系数 ρ。
- **基准方法**：
  - ROI 基：XGBoost、BrainNetCNN、BNT、meanMLP、Brain-JEPA。
  - 体素基：TFF（T=20）、SwiFT（T=20 和 T=50，后者为硬件极限）。
- **数据划分**：每数据集按分层抽样（0.7/0.15/0.15）生成 4 个随机分割，ADHD-200 每分割再用 3 个随机种子。

## 4. 资源与算力
- **GPU 型号**：论文提及使用 NVIDIA A100-40GB 和 RTX A6000 GPUs（附录 A）。
- **数量与训练时长**：未明确给出 GPU 总数和训练时间；但提供了每个模型的批次大小（batch size=4）和训练轮数（epochs）。例如 TABLeT 在 UKB-Sex 上训练 15 个 epochs，HCP 上 50 个 epochs，ADHD 上 50 个 epochs。
- **其他细节**：使用 fp16 混合精度训练（除 TFF 因 NaN 错误外）。超参数基于验证集搜索。

## 5. 实验数量与充分性
- **主要结果**：表 1 报告了三个数据集上所有任务的性能，包含均值和标准差。
- **消融实验**（共约 5 组）：
  - 预训练效果（表 2）：在 HCP 和 ADHD-200 上比较从头训练 vs 微调。
  - 令牌化器比较（表 3、图 3）：2D DCAE 与 3D fMRI 训练 DCAE 的重建质量（PSNR、SSIM、FC 矩阵误差）及下游性能。
  - 轴向聚合策略（表 4）：比较单轴 vs 三轴聚合。
  - 时间窗口 T 的影响（图 5）：50、80、128、256 帧对 HCP-Intelligence 和 ADHD 诊断的影响。
  - 内存与计算效率对比（图 4）：TABLeT 与 SwiFT 在不同 T 下的峰值内存和每 epoch 训练时间。
  - 可解释性分析（图 6）：利用 Integrated Gradients 可视化性别分类的贡献区域（mPFC、PCC/PCu、Thal.），与已知文献一致。
- **充分性评估**：实验设计较为完整，覆盖三个不同规模的数据集、多种任务、多个基线（包括充足的 ROI 基和体素基线）。但缺少在更多样化数据集（如不同 TR、不同扫描站点）上的泛化验证；Brain-JEPA 由于数据限制未在 ADHD-200 上进行对比；对比方法中未包括最新的大模型如 BrainLM 等（可能因为该论文发布时间较晚）。

## 6. 论文的主要结论与发现
- TABLeT 在大多数任务上达到最佳或次佳性能，尤其在长窗口（T=256）下对智力预测和 ADHD 诊断有明显提升。
- 相对于 SwiFT（T=50），TABLeT 节省 7.33 倍内存，训练速度快 3.8 倍；在相同内存预算下可支持近十倍的帧数（T=384）。
- 使用预训练的 2D 自然图像自编码器（不经过 fMRI 微调）优于直接训练的 3D fMRI 自编码器，重建质量和下游任务均更优。
- 自监督掩码令牌预训练能进一步提升下游性能（尤其在 HCP 上显著，ADHD-200 上提升较小）。
- 时间窗口长度与性能呈正相关（图 5），表明长程动态建模对复杂认知任务至关重要。

## 7. 优点
- **创新性**：首次将自然图像预训练的自编码器用于 fMRI 令牌化，无需额外训练即可实现高压缩比（1 体积 → 27 令牌），从而突破内存瓶颈。
- **高效性**：大幅降低计算和内存开销，使长序列建模成为可能（T=256 vs 以往 T≤50）。
- **可解释性**：作为体素基方法，通过 Integrated Gradients 可视化可追溯至原始脑区，与神经科学已知性别差异区域一致。
- **自监督预训练**：简单的掩码令牌建模即可提升迁移学习性能，且计算开销极小（直接在令牌空间操作）。
- **鲁棒性**：三轴聚合策略消除了单轴切片方向选择对性能的影响，使模型更稳定。

## 8. 不足与局限
- **帧独立令牌化**：每个 3D 体积独立处理，没有显式建模帧间时间依赖关系，可能破坏细微时间动态（论文自我承认）。
- **缺乏显式时空结构建模**：Transformer 处理所有令牌时不区分空间和时间位置（仅靠 RoPE 提供位置信息），未利用令牌间的空间/时间对齐。
- **预训练收益有限**：在 ADHD-200 小数据集上预训练增益不明显，可能因数据量较小或任务特性。
- **数据集覆盖有限**：仅使用 UKB、HCP、ADHD-200 三个数据集，且均为预处理至 MNI 空间的标准化数据，未测试在不同采集协议、不同分辨率下的泛化性。
- **没有与更近期的体素基基础模型对比**：如 BrainLM（2024）等可能已在更大规模数据上训练。
- **2D DCAE 缺乏可解释性**：虽然重建质量好，但无法像基于体素的方法那样直接解释特征，需要借助集成梯度等方法近似。

（完）

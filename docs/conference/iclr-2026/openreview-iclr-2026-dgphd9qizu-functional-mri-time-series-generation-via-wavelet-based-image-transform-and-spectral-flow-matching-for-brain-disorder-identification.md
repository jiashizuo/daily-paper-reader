---
title: Functional MRI Time Series Generation via Wavelet-Based Image Transform and Spectral Flow Matching for Brain Disorder Identification
title_zh: 基于小波图像变换和频谱流匹配的功能MRI时间序列生成用于脑疾病识别
authors: "Hwa Hui Tew, Junn Yong Loo, Leong Fang Yu, Julia K. Lau, Ding Fan, Hernando Ombao, Raphael CW Phan, Chee Pin Tan, Chee-Ming Ting"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=Dgphd9qizu"
tags: ["query:fbn"]
score: 7.0
evidence: 使用小波和频谱流匹配生成fMRI时间序列用于脑疾病识别
tldr: 针对fMRI数据获取成本高、生成模型难以模拟非平稳性和复杂时空动力学的问题，提出双频谱流匹配（DSFM）生成框架，通过级联双频表示生成逼真的BOLD信号。生成的fMRI时间序列在保留关键生理变异性后，用于下游脑疾病识别任务，提升了分类性能。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-dgphd9qizu/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1438, \"height\": 785, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dgphd9qizu/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1378, \"height\": 590, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dgphd9qizu/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 616, \"height\": 516, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dgphd9qizu/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1298, \"height\": 533, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dgphd9qizu/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1201, \"height\": 507, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dgphd9qizu/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 657, \"height\": 683, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dgphd9qizu/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1153, \"height\": 454, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1451, \"height\": 236, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1449, \"height\": 309, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1447, \"height\": 310, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1446, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1443, \"height\": 172, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 704, \"height\": 428, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1446, \"height\": 270, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1450, \"height\": 495, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1444, \"height\": 900, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dgphd9qizu/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1442, \"height\": 721, \"label\": \"Table\"}]"
motivation: 解决fMRI数据稀缺且难以生成真实时空动态的问题。
method: 提出双频谱流匹配，级联双频表示生成fMRI时间序列。
result: 生成的数据提升了脑疾病识别性能。
conclusion: 为fMRI数据增强提供了一种有效生成方法。
---

## Abstract
Functional Magnetic Resonance Imaging (fMRI) provides non-invasive access to dynamic brain activity by measuring blood oxygen level-dependent (BOLD) signals over time. However, the resource-intensive nature of fMRI acquisition limits the availability of high-fidelity samples required for data-driven brain analysis models. While modern generative models can synthesize fMRI data, they often remain challenging in replicating their inherent non-stationarity, intricate spatiotemporal dynamics, and physiological variations of raw BOLD signals. To address these challenges, we propose Dual-Spectral Flow Matching (DSFM), a novel fMRI generative framework that cascades dual frequency representation of BOLD signals with spectral flow matching. Specifically, our framework first converts BOLD signals into a wavelet decomposition map via a discrete wavelet transform (DWT) to capture globalized transient and multi-scale variations, and projects into the discrete cosine transform (DCT) space across brain regions and time to exploit localized energy compaction of low-frequency dominant BOLD coefficients. Subsequently, a spectral flow matching model is trained to generate class-conditioned cosine-frequency representation. The generated samples are reconstructed through inverse DCT and inverse DWT operations to recover physiologically plausible time-domain BOLD signals. This dual-transform approach imposes structured frequency priors and preserves key physiological brain dynamics. Ultimately, we demonstrate the efficacy of our approach through improved downstream fMRI-based brain network classification.

---

## 论文详细总结（自动生成）

# 基于小波图像变换和频谱流匹配的功能MRI时间序列生成用于脑疾病识别

## 论文详细中文总结

### 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：功能磁共振成像（fMRI）通过测量血氧水平依赖（BOLD）信号提供对动态脑活动的非侵入性观测，但数据采集成本高昂、样本有限且常存在类别不平衡。现有生成模型（如GAN、VAE、扩散模型）在合成fMRI数据时，难以准确复现原始BOLD信号内在的非平稳性、复杂时空动态以及生理变异性（如心跳、呼吸引起的噪声）。大多数方法仅生成功能连接（FC）矩阵或原始时间序列，无法充分捕捉脑网络的瞬态状态、多尺度振荡和跨频交互。
- **研究意义**：若能生成高质量、生理可信的fMRI时间序列，可用于数据增强，提升下游脑疾病分类模型的泛化能力和可靠性，推动计算机辅助临床诊断工具的实用化。

### 2. 方法论

#### 核心思想
提出 **双频谱流匹配（Dual-Spectral Flow Matching, DSFM）** 框架，级联两个频谱变换（离散小波变换DWT和离散余弦变换DCT），将fMRI时间序列转换为双重频谱（时-尺度和频率）图像表示，然后通过频谱流匹配（spectral flow matching）在DCT域生成类条件样本，最后逆变换重建BOLD信号。

#### 关键技术细节

1. **第一步：小波图像变换（DWT）**
   - 对每个脑区（ROI）的BOLD信号进行离散小波分解，得到多分辨率子带系数图（时-尺度图像），捕获全局瞬态和多尺度变异。
   - 将各子带上采样至原始时间长度并按尺度堆叠，形成二维表示 `W ∈ R^{D×T_ψ×C}`，其中C为分解层数（本文用5层Haar小波）。

2. **第二步：离散余弦变换（DCT）局部频谱编码**
   - 将每个子带图划分为不重叠的 `B×B` 块，对每块进行2D-DCT，保留低频系数以实现能量压缩（低频率BOLD主导），消除高频噪声。
   - 采用之字形展平将DCT系数按频率从低到高排序，形成一维频谱序列。

3. **第三步：频谱流匹配（DCT域）**
   - 区别于传统扩散模型（基于SDE、需数百步采样），引入**基于热耗散过程的概率流ODE**，并在DCT域将其对角化为逐模式独立ODE。
   - 条件扰动核：每个DCT模式k的均值和标准差按频率特征设计（低频衰减慢、高频衰减快），对应热扩散物理。
   - 条件速度场：通过**U-ViT（Vision Transformer）** 参数化速度场 `v_θ(z_t; t, k, c)`，使用**条件频谱流匹配损失**训练：
     \[
     L_{CSFM} = \mathbb{E}_{t, p(z_t|z_0), p_{data}(z_0)} \left\| v_\theta(z_t; t, k, c) - v(z_t|z_0; t, k) \right\|^2
     \]
   - 采用**无分类器指导（Classifier-Free Guidance）** 实现类条件生成，联合训练条件和无条件模型。

4. **第四步：信号重建**
   - ODE采样（自适应求解器）得到DCT系数 → 逆DCT → 逆DWT → 时域BOLD信号。

#### 关键公式（文字说明）
- DWT：用母小波基函数对信号进行卷积得到不同尺度和位移的系数。
- DCT：对每个图像块进行2D-DCT，低频系数位于左上角。
- 热扩散SPDE：`dx_t = η(t)Δ_c x_t dt + G(t)dW`，经DCT对角化后变为逐模式ODE。
- 条件速度场：`v(z_t|z_0) = μ̇ z_0 + σ̇ ε`，其中μ、σ为扩散过程的均值和标准差。

### 3. 实验设计

#### 数据集与场景
- **NetSim（仿真）**：50通道生物仿真BOLD数据，用于无条件生成对比。
- **MDD（抑郁症）**：250健康对照（HC）+227患者，AAL图谱116个ROI，232时间点。
- **ABIDE（自闭症）**：488ASD+537NC，Schaefer图谱100个ROI，200时间点。
- 预处理：使用DPARSF完成标准预处理，提取ROI平均BOLD信号；FC矩阵通过Ledoit-Wolf收缩估计+40%稀疏阈值。

#### 对比方法
- **无条件生成**：CoT-GAN, DiffTime, DiffWave, TimeVAE, TimeGAN, Diffusion-TS, T2I-Diff。
- **条件生成与分类**：Vanilla-GAN, 1D-DCGAN, 2D-DCGAN, WGAN, WGAN-GP, T2I-Diff（均基于FC或时间序列生成）。
- **分类器**：BrainNetCNN（图卷积网络）。

#### 评估指标
- 时间序列质量：cFID（Context-FID）、Correlational（相关误差）、Discriminative、Predictive。
- 分类性能：Accuracy, Precision, Recall, F1, ROC AUC。
- 神经生理合理性：静息态HRF（血流动力学响应函数）、PSD（功率谱密度）、FC图拓扑相似性（节点强度、边介数中心性）。

### 4. 资源与算力

- **GPU**：1× A100（80G）（附录G）。
- **训练时间**：约22小时40分钟（300k迭代），使用AdamW优化器、学习率2e-4。
- **推理时间**：生成全部样本约49分钟。
- **模型参数量**：130,844,352。

### 5. 实验数量与充分性

- **实验组数**：包括7组无条件生成对比、2个真实数据集的条件生成与分类对比、2组频率子带消融、6种配置消融（块大小、小波基、归一化、频谱表示、生成模型类型）、NEF步数影响、FC拓扑相似性对比等。总计约15+组核心实验。
- **充分性评估**：
  - 对比方法涵盖主流GAN、VAE、扩散、流匹配类别，基线充分。
  - 消融实验覆盖双频谱的各个组件（DWT、DCT、归一化、块大小、小波类型）以及不同生成框架（Fourier vs Wavelet；Flow Matching vs Diffusion）。
  - 分类实验采用5折交叉验证，报告均值和标准差，结果统计稳定。
  - 进行了神经生理学验证（HRF、PSD）和图可视化，保证生成信号可信。
  - 公平性：所有方法在同一预处理、同一分类器、同一交叉验证流程下比较，指标一致。
- **整体评价**：实验设计全面、客观、公平。不足：缺乏在更多脑疾病数据集（如ADHD、精神分裂症）上的验证；对比方法中缺少最新潜扩散模型（如LDM for time series）可能不完整，但已覆盖常用基线。

### 6. 主要结论与发现

1. **生成性能**：DSFM在无条件生成中达到具有竞争力的cFID（0.193），仅次于Diffusion-TS（0.105），但优于其他方法；在条件生成分类任务上，DSFM在MDD和ABIDE上均获得最高准确率（MDD: 70.84%, ABIDE: 71.54%），比T2I-Diff分别高出约4%和2%。
2. **生理合理性**：生成的BOLD信号在时域（HRF）、频域（PSD）和FC脑网络拓扑上高度匹配真实数据，L2误差低。
3. **频率重要性**：消融实验表明中频子带（0.01–0.06 Hz）对分类最关键；移除任何子带均导致性能下降，说明疾病特征分布在全频谱。
4. **组件有效性**：双频谱变换（DWT+DCT）优于单独使用傅里叶或小波；流匹配框架优于扩散框架；熵一致性缩放（ECS）归一化优于MinMax；块大小4×4较好平衡了速度与质量。
5. **数据增强效果**：仅用1×合成数据即可显著提升分类性能，更高倍数下性能稳定或略有下降，表明DSFM生成样本高质量且多样。

### 7. 优点

- **方法创新性**：首次联合小波变换（捕捉瞬态和多尺度）与DCT（局部低频压缩）用于fMRI生成，并设计谱域流匹配，避免了传统扩散模型的采样慢问题。
- **生成质量与下游性能双高**：不仅生成指标好，而且在脑疾病分类上提升显著，具有实际应用价值。
- **全面的验证**：进行了神经生理合理性分析（HRF、PSD、FC拓扑可视化），证明生成信号不仅统计匹配而且生物可信。
- **消融系统深入**：从频率子带、块参数、归一化策略到生成框架种类全面探究，使结论可信。

### 8. 不足与局限

- **模态与场景限制**：目前仅针对静息态fMRI，未拓展至任务态fMRI或其他神经成像模式（EEG、fNIRS、MEG）。作者在附录中承认此局限并计划未来拓展。
- **计算资源需求**：训练需要约22小时单卡A100，推理49分钟，对于资源有限的研究者可能不够友好。参数量130M，不算特别巨大，但推理时间偏长。
- **缺乏个体差异条件**：生成仅以疾病类别为条件，未纳入年龄、性别、病程等协变量，可能限制对群体异质性的捕捉。
- **实验覆盖待补充**：仅在两个疾病数据集上验证（MDD、ABIDE），未涉及其他常见神经精神疾病（如精神分裂症、ADHD、阿尔茨海默病），泛化性需进一步证明。
- **对比基线可能遗漏**：未与近期基于潜扩散的时间序列生成模型（如Time-Diffusion、LSGM等）或大型预训练时间序列模型（如TimesNet）对比，但整体基线尚可。
- **潜在偏差风险**：数据集来源单一（MDD来自中国 consortium，ABIDE为多家站点），可能存在站点效应或人口学偏差，但预处理已做统一。分类器为简单图CNN（BrainNetCNN），未尝试图Transformer等更先进模型，性能上限可能未完全发挥。

（完）

---
title: An Interpretable Contrastive GAN Approach for Identifying Heterogeneous Pathological Imaging Patterns
title_zh: 一种用于识别异质性病理成像模式的可解释对比GAN方法
authors: "Mingquan Zhang, Wenjian Bi"
date: 2025-09-17
pdf: "https://openreview.net/pdf?id=HDBkBANWNb"
tags: ["query:fbn"]
score: 6.0
evidence: 可解释对比GAN用于神经影像病理识别
tldr: 神经影像中疾病异质性常被混淆因子掩盖。本文提出InfoSepGAN，通过对比生成学习分离病理变异和背景变异，无需假设非病理变异同分布。在多个神经影像数据集上，InfoSepGAN成功识别出有意义的疾病亚型，提高了病理模式发现的可解释性。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1162, \"height\": 786, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1149, \"height\": 443, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1308, \"height\": 622, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1300, \"height\": 568, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1275, \"height\": 420, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1426, \"height\": 627, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1464, \"height\": 583, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1449, \"height\": 964, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1156, \"height\": 380, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 713, \"height\": 497, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 717, \"height\": 511, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1169, \"height\": 1372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1174, \"height\": 547, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-hdbkbanwnb/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1422, \"height\": 1222, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1379, \"height\": 802, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1465, \"height\": 974, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1429, \"height\": 335, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1121, \"height\": 688, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1457, \"height\": 591, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1460, \"height\": 442, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1460, \"height\": 441, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1455, \"height\": 365, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1455, \"height\": 366, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1333, \"height\": 420, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 759, \"height\": 321, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1321, \"height\": 422, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1328, \"height\": 350, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 965, \"height\": 279, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1035, \"height\": 567, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 966, \"height\": 562, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1445, \"height\": 566, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-hdbkbanwnb/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1586, \"height\": 1794, \"label\": \"Table\"}]"
motivation: 无监督方法易受混淆因子影响，现有半监督方法假设不切实际。
method: 提出InfoSepGAN，利用对比生成对抗网络分离病理与背景变异。
result: 在神经影像数据上识别出可解释的疾病亚型，优于现有方法。
conclusion: 对比生成框架能鲁棒地揭示神经疾病内在异质性。
---

## Abstract
Despite the rapid development of representation learning applied to neuroimaging, accurately disentangling the heterogeneity of neurological diseases remains a significant challenge. Typically, unsupervised approaches may capture disease heterogeneity that is dominated by confounding factors rather than pathological changes in brain structure or function. Existing semi-supervised methods can reveal disease-specific subtypes or dimensions by contrasting with a background population, but they usually rely on the assumption that non-pathological variations are identically distributed between background and target datasets—a condition often unmet in real-world data. To address this, we introduce InfoSepGAN, a contrastive generative framework designed to separate context (non-pathological) and attribute (pathological) factors between background and target datasets, reducing biases in learned disease-related representations when the assumption is violated. Furthermore, we regularize the learned imaging patterns for continuity, sparsity, and monotonicity, ensuring distinct and interpretable disease-related patterns along each dimension. Finally, InfoSepGAN employs a "synthetic twin" mechanism to perform subject-level counterfactual reconstruction, generating non-pathological counterparts for each patient and providing visualizations of disease-related regions. Experiments on both synthetic and real-world Alzheimer's disease datasets demonstrate that InfoSepGAN effectively extracts pathological imaging patterns while adjusting for potential confounders, outperforming recent baseline methods in both accuracy and interpretability.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：神经影像学是研究脑部疾病的重要手段，但神经系统疾病在患者间表现出显著的临床和神经生物学异质性。准确地解析这种异质性对于精准诊断和靶向治疗至关重要。
- **现有方法局限**：
  - 无监督学习方法直接在目标组中寻找亚型，但易受非病理变异（如年龄、扫描站点、仪器差异）主导，混淆因子会污染疾病相关表征。
  - 半监督学习方法通过对比背景组（健康对照）和目标组（患者）来揭示疾病特异性模式，但它们通常隐含假设：背景组和目标组中的非病理变异（context）同分布。在实际临床数据中，该假设常因抽样偏差/站点差异等被违反（例如对照组和患者组年龄分布不匹配）。此时非病理变异会被错误地编码进疾病特异性表征中。
- **本文目标**：引入一个对比生成框架 **InfoSepGAN**，在不依赖“非病理变异同分布”假设的前提下，鲁棒且可解释地分离出病理成像模式与背景变异，从而发现神经疾病的异质性。

## 2. 论文提出的方法论

### 核心思想
- 采用对比分析（Contrastive Analysis）框架，假设数据由两种潜在因子生成：
  - **context因子** \(z_c\)：背景组和目标组共享的（非病理）变异。
  - **attribute因子** \(z_a\)：仅存在于目标组中的（病理）变异。背景组的 attribute 固定为常数（如0）。
- 通过编码器 \(E_a\) 和 \(E_c\) 分别推断 \(z_a\) 和 \(z_c\)，生成器 \(G\) 合成图像，判别器 \(D\) 区分真实/合成样本。

### 关键技术细节
- **对抗生成损失（GAN Loss）**：包含背景判别器 \(D_{bg}\) 和目标判别器 \(D_{tar}\)，生成器由 \(G_{bg}\)（合成背景）和 \(G_{diff}\)（合成病理差异）组成，并强制 \(G_{diff}(0, x')=0\)。
- **信息正则化损失（Information Regularization Loss）**：最大化 \(z_c\) 与背景/目标合成样本的互信息，最大化 \(z_a\) 与目标合成样本的互信息，同时强制背景 attribute 为常数（KL散度为零）。使用变分下界近似。
- **重建损失（Reconstruction Loss）**：基于变分自编码器，采用 ℓ1 重建项（拉普拉斯似然），并加入 KL 先验正则项。
- **先验正则化（Prior Regularization）**：对 \(z_a\) 的后验与均匀分布之间的差异使用 Cramer–Wold 距离计算。
- **属性空间正则化（Attribute Space Regularization）**：确保病理模式具有医学意义：
  - **稀疏性（sparsity）**：病理改变仅影响局部脑区。
  - **模式分离（pattern separation）**：每个 \(z_a\) 维度对应唯一且正交的解剖变异。
  - **单调性（monotonicity）**：更严重的 attribute 值产生更强的病理改变。
  - **背景一致性（background consistency）**：attribute 为零时不产生病理变化。
  - **分解损失（decomposition loss）**：增强编码器对各个维度语义的学习。
- **合成孪生体（Synthetic Twin）**：将患者 attribute 置零后通过生成器重建得到其非病理对照，用于个体层面的反事实可视化。

### 总损失函数
\[
\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{Adv}} + \lambda_{\text{Info}}\mathcal{L}_{\text{Info}} + \lambda_{\text{recons}}\mathcal{L}_{\text{recons}} + \lambda_{\text{prior}}\mathcal{L}_{\text{prior}} + \mathcal{L}_{\text{regular}}
\]

## 3. 实验设计

### 数据集与场景
- **合成数据（Synthetic Data）**：生成 1800 个受试者（900 BG + 900 伪 TG），100个ROI特征。包含三种模拟萎缩模式，并引入不平衡混淆效应。设计了7个场景（Basic, Conf, Conf Ovlp, Conf Sev Ovlp, Conf DiffPop, Conf Sev DiffPop, Conf Extreme），逐步增加混淆的不平衡程度。
- **半合成数据（Semi-Synthetic Data）**：基于 UK Biobank (UKBB) 真实脑MRI 数据（30,858 名健康对照），提取 95 个 ROI 体积，在其中600人上施加模拟萎缩（保留真实生物变异）。分为两组：
  - **模式实验**：5个场景（Basic, Large Overlap, Large Noise, Mild, Scarce），改变萎缩模式的结构与强度。
  - **年龄混淆实验**：4个场景（No, Small, Middle, Large Age Gap），控制BG与伪TG的年龄分布重叠程度。
  两种实验均在有/无线性校正（年龄、性别、颅内容积）条件下进行。
- **真实数据（Real Data）**：ADNI数据集，包含 988 正常对照（BG）和 1599 轻度认知损害/AD（TG）。经过质量控制和标准化预处理，得到 72 个 ROI 体积特征。

### 对比方法
- 生成模型：SurrealGAN（SOTA半监督生成模型）
- 经典降维：NMF, opNMF, FA, LDA, cPCA
- 对比分析方法族：CAVAE, DoubleInfoGAN, MMCAVAE（均为非线性对比学习方法）

### 评估指标
- **Pattern-c-index (PCI)**：推断的 attribute 因子与 ground truth 严重度之间的 Concordance Index，为主要指标。
- **Pattern-agr-index (ACI)**：多次独立运行之间 attribute 因子的一致性，用于稳定性和超参数选择。
- **Pattern-Pearson-Correlations (PPC)** 和 **Pattern-Difference-Correlations (PDC)** 作为补充。

## 4. 资源与算力

论文中未明确提及使用的 GPU 型号、数量或训练时长。仅在附录 A.8 中给出了软件和优化器信息：PyTorch 实现，ADAM 优化器（β1=0.5, β2=0.999），生成器/编码器学习率 2×10⁻³，判别器 2×10⁻⁴，batch size 300，训练至少 30,000 epochs。权重裁剪和梯度裁剪用于稳定训练。未提及硬件部署细节。

## 5. 实验数量与充分性

- **实验数量**：非常丰富。
  - 合成数据：7 个混淆场景 + 泛化测试。
  - 半合成数据：5 个模式实验 + 4 个年龄混淆实验，每种又分有/无线性校正，共 18 个子实验 × 10 次独立运行。
  - 真实数据：ADNI 上选择最佳超参数（Da=2, Dc=5）重复 10 次，进行半分割复现、外部 UKBB 参考验证、以及无症状人群分析。
  - 对比分析基线：在相同设置下运行 10 次。
  - 消融实验：分别移除重建损失、背景一致性、先验、单调性、模式分离、信息正则化、context 模块。
  - 鲁棒性实验：将 6 个核心超参数以 50%~150% 缩放。
- **充分性**：实验设计覆盖多种难度、多种混淆情况、多种基线类型，包含统计显著性检验，且对泛化能力（训练/测试集）和跨数据集稳定性做了验证。消融和鲁棒性实验系统。因此实验非常充分且客观公平。

## 6. 主要结论与发现

- **合成数据**：在无混淆或平衡混淆时，InfoSepGAN 与 SurrealGAN 性能相近；在混淆逐渐不平衡时，InfoSepGAN 显著优于 SurrealGAN 及其他基线，证明其能处理非病理变异分布偏移。
- **半合成数据**：InfoSepGAN 在模式实验和年龄混淆实验中始终优于所有对比方法，且其性能在有/无线性校正时保持一致，表明模型能自适应地减轻混淆影响。
- **真实数据（ADNI）**：
  - 学习到的两个 attribute 因子对应两种不同的灰质萎缩模式：Attr1 为弥散性皮质萎缩（顶叶、枕叶、颞叶），Attr2 为局灶性内侧颞叶/皮层下萎缩，与 AD 已知病理一致。
  - 表现相似性分析（RSA）显示：attribute 特征与 AD 特异性变量（认知评分、CSF 生物标志物、APOE ε4）显著相关，而 context 特征主要与非临床变量（站点、扫描仪类型）相关，证明有效解耦。
  - 合成孪生体提供了个体化和群体水平的反事实可视化，与 VBM 结果高度一致。
- **消融与鲁棒性**：所有正则项和 context 模块对性能贡献显著，模型在超参数变化时表现稳定，且 ACI 可作为可靠的超参数选择指标。

## 7. 优点

- **方法创新**：首次将对比生成框架应用于神经影像异质性分析，显式建模 context 和 attribute 因子，不再依赖“非病理同分布”假设，更贴合真实临床数据。
- **可解释性强**：属性空间正则化（稀疏、模式分离、单调、背景一致、分解）确保每个维度对应有临床意义的、连续的、病理解剖学上的进展。
- **反事实重建**：合成孪生体机制能生成个体化的非病理对照，直观展示疾病影响区域，有助于临床解读。
- **实验严谨全面**：从完全合成到半合成、到真实数据，覆盖多种混淆场景；与多种基线（传统降维、SOTA 半监督、对比分析族）公平比较；消融/鲁棒性/泛化/外部验证均细致。
- **性能优越**：在不平衡混淆情况下大幅超越现有方法，且在有/无协变量校正时保持稳定，降低了对先验混淆知识的依赖。

## 8. 不足与局限

- **可识别性问题**：作者在讨论中明确指出，非线性生成模型（如 GAN、VAE）一般不具备正式的可识别性（identifiability），InfoSepGAN 无法保证恢复所有真实生成因子，这是所有对比分析方法的共同局限。
- **算力资源未报告**：缺少 GPU 型号、数量、训练时间等硬件信息，影响可复现性评估。
- **残余混淆**：在真实数据中，attribute 空间与扫描仪类型仍存在微弱关联（尽管远弱于 context 空间），可能源于诊断组与扫描协议的混杂。
- **应用范围有限**：仅验证于阿尔茨海默病（AD）数据，且输入为 ROI 体积特征（非全脑体素）。需要在其他神经疾病和模态（如 fMRI、DTI）中进一步验证。
- **超参数敏感性**：虽然鲁棒性实验显示整体稳定，但部分超参数（如 λ_info(za)）在困难场景中仍有较大的性能波动。超参数选择（如维度 Da, Dc）虽用 ACI 指导，但可能无法保证全局最优。
- **无监督属性**：模型不需标签，但未利用标签或临床评分来进一步约束，可能丢失某些临床相关信息。

（完）

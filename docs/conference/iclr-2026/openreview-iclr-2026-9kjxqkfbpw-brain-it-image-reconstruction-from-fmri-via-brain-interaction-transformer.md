---
title: "Brain-IT: Image Reconstruction from fMRI via Brain-Interaction Transformer"
title_zh: Brain-IT：通过大脑交互Transformer从fMRI重建图像
authors: "Roman Beliy, Amit Zalcher, Jonathan Kogman, navve wasserman, michal Irani"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=9KjXqkfbPw"
tags: ["query:fbn"]
score: 6.0
evidence: 使用fMRI和大脑交互Transformer进行图像重建，将AI应用于神经影像
tldr: 为了解决fMRI图像重建忠实度不足的问题，提出脑启发方法Brain-IT，核心是大脑交互Transformer（BIT），通过允许功能相似体素簇之间的有效交互，在跨被试训练中共享模型组件，降低了数据需求并提升了重建质量。实验表明该方法在重建忠实度上优于现有技术。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1409, \"height\": 909, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1451, \"height\": 645, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1281, \"height\": 541, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1306, \"height\": 699, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1138, \"height\": 592, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 596, \"height\": 345, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1139, \"height\": 444, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1145, \"height\": 2019, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1279, \"height\": 2285, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1278, \"height\": 2293, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1276, \"height\": 2279, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1327, \"height\": 1855, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1328, \"height\": 1843, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1326, \"height\": 1830, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1328, \"height\": 1846, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1366, \"height\": 1641, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1369, \"height\": 1645, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1314, \"height\": 1549, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1367, \"height\": 2014, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1454, \"height\": 1857, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 1372, \"height\": 946, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-9kjxqkfbpw/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1313, \"height\": 472, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-9kjxqkfbpw/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1439, \"height\": 847, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-9kjxqkfbpw/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 818, \"height\": 318, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-9kjxqkfbpw/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1447, \"height\": 292, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-9kjxqkfbpw/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1449, \"height\": 368, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-9kjxqkfbpw/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1448, \"height\": 541, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-9kjxqkfbpw/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1307, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-9kjxqkfbpw/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1449, \"height\": 342, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-9kjxqkfbpw/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 873, \"height\": 279, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-9kjxqkfbpw/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1159, \"height\": 282, \"label\": \"Table\"}]"
motivation: 提高从fMRI重建视觉刺激图像的忠实度。
method: 使用大脑交互Transformer促进功能相似体素簇的交互。
result: 在有限数据下实现了高质量重建。
conclusion: 为fMRI解码提供了一种高效、跨被试的模型。
---

## Abstract
Reconstructing images seen by people from their fMRI brain recordings provides a non-invasive window into the human brain. Despite recent progress enabled by diffusion models, current methods often lack faithfulness to the actual seen images. We present ``Brain-IT'', a brain-inspired approach that addresses this challenge through a Brain Interaction Transformer (BIT), allowing effective interactions between clusters of functionally-similar brain-voxels. These functional-clusters are shared by all subjects, serving as building blocks for integrating information both within and across brains. All model components are shared by all clusters \& subjects, allowing efficient training with limited amount of data. To guide the image reconstruction, BIT predicts two complementary localized patch-level image features: (i) high-level semantic features which steer the diffusion model toward the correct semantic content of the image; and (ii) low-level  structural features which help to initialize the diffusion process with the correct coarse layout of the image. BIT's design enables direct flow of information from brain-voxel clusters to localized image features. Through these principles, our method achieves image reconstructions from fMRI that faithfully reconstruct the seen images, and surpass current SotA approaches both visually and by standard objective metrics.  Moreover, with only 1-hour of fMRI data from a new subject, we achieve results comparable to current methods trained on full 40-hour recordings.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：从功能性磁共振成像（fMRI）信号重建人类观看的图像，现有方法（尤其基于扩散模型）虽能生成视觉上令人愉悦的图像，但**缺乏对真实所见图像的忠实度**，表现为结构偏离（如位置、颜色错误）或语义内容缺失/扭曲。
- **研究动机**：提升重建的**忠实性**，既保留语义内容又保持低层结构细节，从而为神经科学、脑机接口、视觉想象、梦境内容重组等应用提供更可靠的非侵入式窗口。
- **背景**：早期方法从fMRI手工提取特征；后来使用深度学习（CNN、VAE、GAN）；近期扩散模型提升了真实感，但依赖生成先验导致不忠实。现有方法大多将全脑压缩为单一全局嵌入，丢失了大脑功能的分布式和局部化特性，且跨被试整合能力有限。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：提出“Brain-IT”框架，核心是**大脑交互Transformer（BIT）**，模仿大脑组织原理——视觉信息分布在多个功能区（如颜色、形状、语义），且具有视网膜拓扑映射。通过将功能相似的体素聚类为共享于所有被试的**功能簇**，并利用注意力机制让这些簇之间直接交互，进而预测**局部化图像特征**（高层的语义特征和低层的结构特征），最后通过双分支生成模型重建忠实图像。
- **关键技术细节**：
  - **体素到簇映射（V2C）**：使用编码器（Beliy et al.）学习每个体素的嵌入，利用高斯混合模型（GMM）将全部被试的体素聚类为128个共享簇。
  - **BIT架构**：
    - **脑Token化器**：将每个簇内的fMRI激活值乘以可学习的体素嵌入和簇嵌入，通过图注意力层生成每簇一个**脑Token**（512维）。
    - **交叉Transformer模块**：包含自注意力（建模Token间关系）和交叉注意力（将脑Token信息提取到查询Token），每个查询Token对应一个输出图像特征（如VGG层的空间位置或CLIP空间Token）。
  - **双分支生成**：
    - **高层语义分支**：预测256个OpenCLIP ViT-bigG/14空间Token，用于条件化扩散模型（基于Stable Diffusion XL的unCLIP风格）。分为特征对齐（L2损失）和联合训练（标准扩散损失）两阶段。
    - **低层结构分支**：预测多层VGG特征（使用InfoNCE损失），推理时通过**深度图像先验（DIP）**反演得到粗粒度图像，作为扩散模型的初始噪声。
  - **训练数据增强**：除了NSD配对数据，还利用无标签COCO图像（~12万张），通过预训练的fMRI编码器生成预测fMRI响应，扩充训练集。
  - **转移学习**：所有模型组件共享，仅需为新被试优化可学习的体素嵌入（受冻结网络约束），实现高效适应。

## 3. 实验设计

- **数据集**：**Natural Scenes Dataset (NSD)**，包含8名被试、约73,000对fMRI-图像对，每名被试约9,000张独特图像，1,000张共享图像作为测试集。体素使用预处理版本（~40k个视觉皮层体素）。
- **Benchmark与评价指标**：
  - 低层指标：PixCorr（像素相关性）、SSIM（结构相似性，灰度）。
  - 高层指标：Alex(2)、Alex(5)、Incep、CLIP识别准确率（2-way）、EfficientNet-B1（Eff）和SwAV-ResNet50（SwAV）平均相关距离（越低越好）。
- **对比方法**：MindEye、Brain-Diffuser、Takagi & Nishimoto、DREAM、UMBRAE、NeuroVLA、MindBridge、NeuroPictor、MindEye2、MindTuner等主流SotA方法（表格1）。
- **实验场景**：
  - **40小时全量训练**（完整NSD数据）对比。
  - **转移学习**：仅用1小时、30分钟、15分钟新被试数据训练，与MindEye2、MindTuner的1小时结果对比。
  - **消融分析**：外部数据影响、功能vs解剖聚类、簇数量、双分支贡献、BIT vs MLP低层预测、脑Token选择性和语义选择性可视化。
  - **额外评估**：出分布数据集（NSD-Synthetic）定性测试。

## 4. 资源与算力

- **明确说明**：
  - 低层分支训练：1 块 H100 GPU，~12小时。
  - 语义分支第一阶段：1 块 H100 GPU，~8小时。
  - 语义分支第二阶段（联合训练）：4 块 H100 GPU，~10小时。
  - 采用混合精度训练（mixed precision），AdamW优化器，学习率5e-4（低层/语义第一阶段）或1e-5（联合训练），批量大小64/128/16（梯度累积4步）。

## 5. 实验数量与充分性

- **实验数量丰富**：
  - 主实验：在40小时和1小时两个数据量下，对比10种SotA方法，覆盖8项标准指标；此外还报告了SSIM-color、1000-way CLIP检索、LPIPS等3项非饱和指标。
  - 消融实验：至少包含6组不同消融（外部数据、聚类方法、簇数、分支贡献、BIT vs MLP、转移学习不同时长）。
  - 可解释性分析：脑Token的空间和语义选择性可视化（图S5、S6）。
  - 定性结果：大量示例图（附录多页）。
- **充分性与公平性**：遵循NSD公开的共享测试集，指标计算方式与先前论文一致（部分方法基于982张而非1000张测试集已注明）；定性比较展示了多方法并排结果；转移学习控制训练数据量一致。实验覆盖全面，结果客观可靠。

## 6. 主要结论与发现

- Brain-IT在所有标准指标上（7/8项）超越先前所有方法，尤其在低层指标（PixCorr、SSIM）上提升显著，证明其更忠实地保留了结构和语义。
- 在1小时数据下，Brain-IT的结果与先前方法在40小时数据下的性能相当，且明显优于同数据量的对比方法；15分钟数据仍可产生有意义的重建。
- 功能聚类优于解剖聚类；加入外部图像数据可进一步提升性能；簇数量在较大范围内稳健。
- 双支生成互补：低层分支提供结构线索，语义分支提供语义引导，组合后兼顾忠实度和逼真度。
- 脑Token表现出空间选择性（对侧组织）和语义选择性（如人脸、文字），说明BIT能有效利用分布式的脑功能信息。

## 7. 优点

- **方法创新性**：首次将功能体素簇与局部图像特征直接关联，避免了全局嵌入的信息损失；双分支设计结合了扩散模型的生成先验和DIP的结构约束，实现了高忠实度。
- **高效跨被试泛化**：所有组件共享，转移学习仅需优化少量体素嵌入，大大降低了对新被试的数据需求（1小时即可达到SotA性能），极具实用价值。
- **实验全面且严谨**：涵盖了主流方法、多种指标、消融、可解释性分析、外推测试，结果一致支持方法有效性。
- **可解释性贡献**：通过注意力图揭示了脑簇与图像空间/语义的映射关系，为神经科学研究提供了潜在工具。

## 8. 不足与局限

- **重建仍不完美**：附录图S9展示了一些失败案例，语义或结构细节有时错误，可能受fMRI信号本身分辨率限制。
- **指标饱和问题**：部分常用2-way识别指标接近上限（如Alex(5)达到99.5%），但非饱和指标（如1000-way CLIP、LPIPS）仍显示较大差距，提示当前评估体系不够全面。
- **依赖预训练组件**：需要预训练的fMRI编码器（Universal Encoder）来获得体素嵌入和生成合成fMRI，该编码器的质量可能影响最终结果。
- **计算资源**：尽管训练时间可接受（~30小时单卡+10小时多卡），但对实验室仍有一定门槛；推理需运行DIP（2K次迭代）和扩散采样，实时性较差。
- **被试范围有限**：仅使用NSD的8名被试，且主要结果报告4名常见被试；能否推广到其他数据集或临床人群未验证。
- **未讨论隐私或伦理**：虽然研究使用公开数据集，但fMRI解码涉及个人脑活动，未来应用需警惕隐私滥用风险。

（完）

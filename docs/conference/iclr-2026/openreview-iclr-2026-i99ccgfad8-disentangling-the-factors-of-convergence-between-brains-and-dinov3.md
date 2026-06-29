---
title: Disentangling the Factors of Convergence between Brains and DINOv3
title_zh: 解耦大脑与DINOv3收敛的因素
authors: "Joséphine Raugel, Marc Szafraniec, Huy V. Vo, Camille Couprie, Jérémy Rapin, Stéphane d'Ascoli, Patrick Labatut, Piotr Bojanowski, Valentin Wyart, Jean-Remi King"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=i99ccgfad8"
tags: ["query:fbn"]
score: 5.0
evidence: 使用fMRI比较大脑与DINOv3 AI模型的表征
tldr: 该论文系统研究AI模型（DINOv3）与人类大脑表征收敛的影响因素。通过训练不同配置的视觉Transformer，并与fMRI/MEG脑记录进行表征相似性、拓扑组织和时间动态的比较，发现模型架构、训练和数据共同驱动大脑相似性。工作为理解AI与大脑对齐提供了可解释框架。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1141, \"height\": 439, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1000, \"height\": 367, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1434, \"height\": 276, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1140, \"height\": 413, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1453, \"height\": 507, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1444, \"height\": 309, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1428, \"height\": 307, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1171, \"height\": 513, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1297, \"height\": 831, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1290, \"height\": 457, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1287, \"height\": 463, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1320, \"height\": 451, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1314, \"height\": 449, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1158, \"height\": 424, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1422, \"height\": 483, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1298, \"height\": 460, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1440, \"height\": 379, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1261, \"height\": 602, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-i99ccgfad8/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1266, \"height\": 628, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-i99ccgfad8/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1451, \"height\": 383, \"label\": \"Table\"}]"
motivation: 探究哪些因素驱动AI模型与大脑表征的相似性。
method: 训练不同配置的DINOv3，使用fMRI/MEG进行多维度比较。
result: 模型和数据均独立贡献大脑相似性。
conclusion: 提供了可解释的框架以理解AI与大脑对齐。
---

## Abstract
Many AI models trained on natural images develop representations that resemble those of the human brain. However, the factors driving this brain-model similarity remain poorly understood. To disentangle how the model, training and data independently lead a neural network to develop brain-like representations, we train a family of self-supervised vision transformers (DINOv3) that systematically vary these factors. We compare their representations of images to those of the human brain recorded through fMRI and MEG, providing high resolution in both spatial and temporal analyses. We assess the brain-model similarity with three complementary metrics focusing on representational similarity, topographical organization, and temporal dynamics. We show that all three factors - model size, training amount, and image type - independently and interactively impact each of these brain similarity metrics. In particular, the largest DINOv3 models trained with the most human-centric images reach the highest brain-similarity. These findings generalize across seven additional models. This emergence of brain-like representations in AI models follows a specific chronology during training: models first align with the early representations of the sensory cortices, and only align with the late and prefrontal representations of the brain with considerably more training. 
Finally, this developmental trajectory is indexed by structural and functional properties of the human cortex: representations acquired last by the models specifically align with cortical areas with the largest developmental expansion, thickness, least myelination and slowest timescales. 
Overall, these findings disentangle the interplay between architecture and experience in shaping how artificial neural networks come to see the world as humans do, thus offering a promising framework to understand how the human brain comes to represent its visual world.

---

## 论文详细总结（自动生成）

好的，以下是根据论文内容生成的结构化中文总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：诸多AI模型在自然图像上训练后会形成与人类大脑相似的内部表征，但导致这种“脑-模型相似性”（brain-model similarity）的**具体因素**及其**相互作用机制**尚不明确。
- **背景**：已有研究表明，AI模型（如DINOv3）的激活模式可以通过线性映射与大脑（fMRI/MEG）对相同图像的响应相匹配。然而，这些研究通常使用预训练模型，同时改变了架构、目标和数据，无法分离各因素的独立贡献。
- **核心问题**：**模型规模（model size）、训练数据量（training amount）和图像类型（image type）如何独立和交互地影响模型发展出类脑表征？**

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：通过系统变化三个关键因素（模型大小、训练量、图像类型），训练一组自监督视觉Transformer（DINOv3家族），并评估其表征与人类大脑表征（通过fMRI和MEG记录）的对齐程度。
- **关键技术细节**：
    - **表征相似性度量**：使用**线性编码模型**（ridge regression），将模型激活（X）线性映射到脑活动（Y），优化目标：\( \arg\min_W \|Y - XW\|_2^2 + \lambda \|W\|_2^2 \)。编码分数为预测值与真实值的Pearson相关系数R。
    - **三种互补指标**：
        1.  **编码分数（Encoding Score）**：整体线性预测能力（R值）。
        2.  **空间分数（Spatial Score）**：通过fMRI评估层级组织相似性——计算每个脑区的最佳编码层索引（k*）与该脑区距V1的欧氏距离之间的相关性。
        3.  **时间分数（Temporal Score）**：通过MEG评估时序动态相似性——计算每个模型层的最佳预测时间（T_max）与该层层索引之间的相关性。
- **统计方法**：交叉验证（5折），FDR校正的t检验，Wilcoxon检验。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：
    - **fMRI**：Natural Scenes Dataset（7T，8名被试，10,000张自然场景图像，4秒呈现）。
    - **MEG**：THINGS-MEG（4名被试，22,500张自然图像，1.5秒呈现）。
    - **训练图像类型**：人类中心图像（网络/街景/ImageNet）、卫星图像（SAT-493M）、细胞图像（ExtendedCHAMMI）。
- **基准（benchmark）**：不同模型之间的比较，主要是DINOv3家族内部以及与其他7种额外模型的对比（包括ResNet-50, ConvNeXt-Large, ViT-MAE, ViT-L/16, CLIP, SigLIP2, OWL-ViT）。
- **对比方法**：论文未提供传统意义上的“SOTA对比”，而是通过系统变化因素进行内部对比（不同大小、不同训练步数、不同图像类型），并验证泛化性。

### 4. 资源与算力

- **未明确说明**：论文没有提及具体使用的GPU型号、数量、训练时长等算力细节。仅提到训练了多个DINOv3变体（从Small到7B参数），训练步数从0到1e7步，数据量从10M到1.7B图像。无法评估算力开销。

### 5. 实验数量与充分性

- **实验数量**：大量且全面。
    - **模型规模**：4种（Small/Base/Large/Giant），每种训练10个检查点。
    - **图像类型**：3种（human, satellite, cellular），各自独立训练，控制数据量10M。
    - **脑区分析**：fMRI选取15个ROI，MEG选取多个时间窗口。
    - **泛化验证**：额外测试7种架构（有监督/无监督/CNN/Transformer/视觉语言模型），比较训练前与训练后。
- **充分性**：实验设计**非常充分**。
    - **变量控制**：独立变化一个因素，控制其他因素（如模型大小不同时保持训练数据相同；图像类型不同时保持架构和训练步数相同）。
    - **消融实验**：隐含在因素变化中（如未训练 vs 训练，人类图像 vs 非人类图像）。
    - **统计严格**：交叉验证、FDR校正、跨被试归一化。
- **客观与公平**：实验设计客观，对比公平（控制了数据量、架构等混淆变量）。

### 6. 论文的主要结论与发现

1. **三个因素独立且交互影响**：更大的模型、更多的训练数据和更接近人类经验的图像类型均独立提升脑-模型相似性，且三者存在交互效应（最大模型在人类中心数据上达到最高对齐）。
2. **训练过程中的层级发展顺序**：模型首先与感觉皮层（早期视觉区）的表征对齐（半程时间约2%训练量），随后才与前额叶皮层等高级区域对齐（需要更多训练）。空间分数和时间分数的半程时间分别约为4%和0.7%，表明时间结构最先出现。
3. **与皮层发育特性关联**：模型最后对齐的大脑区域（即需要最多训练才能匹配的区域）恰好是那些**皮层扩张最大、厚度最厚、髓鞘化最慢、内在时间尺度最长**的区域——即联合皮层，与人类发育中成熟最晚的脑区一致。
4. **泛化性**：上述模式在7种不同架构的视觉模型中得到验证（训练后数据比未训练数据更接近大脑）。
5. **非人类图像也能部分对齐**：卫星和细胞图像训练出的模型在早期视觉区仍显示一定的对齐，但整体低于人类图像训练的模型。

### 7. 优点：方法或实验设计上的亮点

- **系统解耦**：首次独立操控模型大小、训练量、数据类型三个关键因素，而非仅关注预训练模型，提供了**因果性解释**。
- **多模态脑记录**：同时使用fMRI（高空间分辨率）和MEG（高时间分辨率），实现时空维度互补。
- **三种互补指标**：编码分数、空间分数、时间分数从不同角度刻画相似性，增强了结论的鲁棒性。
- **动态发展轨迹**：追踪训练过程中相似性的演变，揭示“半程时间”概念，并与大脑发育梯度建立关联，具有理论意义。
- **泛化验证**：在多种模型上重复实验，增加了结果的普遍性。

### 8. 不足与局限

- **架构单一**：主要基于DINOv3（自监督ViT），其他架构虽有验证但非系统变化，可能受限于Transformer层级结构。
- **脑记录分辨率限制**：fMRI（体素级）和MEG（头皮级）难以捕捉精细的神经机制（如单细胞编码、局部回路）。
- **仅成人数据**：未涉及婴儿、儿童或发育中的大脑，无法直接验证发展轨迹的生物学对应。
- **任务被动观看**：fMRI/MEG实验中被试主要被动观看图像或执行简单任务，未考虑任务调制或注意力影响。
- **线性假设**：编码模型假设线性关系，可能忽略非线性脑-模型交互。
- **数据可重复性**：卫星和人类中心数据集被提及为专有，可能限制他人完全复现。
- **因素交互未穷尽**：仅独立变化三个因素，但未探索更多因素（如目标函数、数据多样性、正则化等）及其完全交互效应。

（完）

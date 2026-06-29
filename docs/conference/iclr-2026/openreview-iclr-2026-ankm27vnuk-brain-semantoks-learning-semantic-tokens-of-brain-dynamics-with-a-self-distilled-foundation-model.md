---
title: "Brain-Semantoks: Learning Semantic Tokens of Brain Dynamics with a Self-Distilled Foundation Model"
title_zh: Brain-Semantoks：通过自蒸馏基础模型学习脑动态语义标记
authors: "Sam Gijsen, Marc-Andre Schulz, Kerstin Ritter"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=ANkm27vNuk"
tags: ["query:fbn"]
score: 8.0
evidence: 自监督框架从fMRI学习脑动态的抽象表示
tldr: 现有fMRI基础模型关注低层重建，表示噪声且需微调。Brain-Semantoks采用语义分词器和自蒸馏框架，将噪声区域信号聚合成鲁棒语义标记，学习脑动态抽象表示。在多个下游任务中无需大量微调即可达到优异性能，推动fMRI基础模型发展。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-ankm27vnuk/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1164, \"height\": 536, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ankm27vnuk/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1383, \"height\": 624, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ankm27vnuk/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1429, \"height\": 325, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ankm27vnuk/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1435, \"height\": 359, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ankm27vnuk/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 645, \"height\": 363, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ankm27vnuk/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1164, \"height\": 738, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ankm27vnuk/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1425, \"height\": 296, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ankm27vnuk/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1306, \"height\": 474, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-ankm27vnuk/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1410, \"height\": 631, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1454, \"height\": 156, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1524, \"height\": 661, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1452, \"height\": 195, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 286, \"height\": 278, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 249, \"height\": 162, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 581, \"height\": 206, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 286, \"height\": 210, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1344, \"height\": 577, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1429, \"height\": 415, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1450, \"height\": 224, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 781, \"height\": 264, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1584, \"height\": 211, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1346, \"height\": 250, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 483, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 658, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 977, \"height\": 555, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 518, \"height\": 456, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1319, \"height\": 361, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-ankm27vnuk/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1383, \"height\": 464, \"label\": \"Table\"}]"
motivation: 现有fMRI基础模型基于低层重建，表示对噪声敏感且需大量微调。
method: 提出语义分词器聚合区域信号为鲁棒标记，结合自蒸馏框架学习抽象表示。
result: 在多个下游任务中表现优异，微调需求降低。
conclusion: 为fMRI基础模型提供更鲁棒、更通用的自监督方法。
---

## Abstract
The development of foundation models for functional magnetic resonance imaging (fMRI) time series holds significant promise for predicting phenotypes related to disease and cognition. Current models, however, are often trained using a mask-and-reconstruct objective on small brain regions. This focus on low-level information leads to representations that are sensitive to noise and temporal fluctuations, necessitating extensive fine-tuning for downstream tasks. We introduce Brain-Semantoks, a self-supervised framework designed specifically to learn abstract representations of brain dynamics. Its architecture is built on two core innovations: a semantic tokenizer that aggregates noisy regional signals into robust tokens representing functional networks, and a self-distillation objective that enforces representational stability across time. We show that this objective is stabilized through a novel training curriculum, ensuring the model robustly learns meaningful features from low signal-to-noise time series. We demonstrate that learned representations enable strong performance on a variety of downstream tasks even when only using a linear probe. Furthermore, we provide comprehensive scaling analyses indicating more unlabeled data reliably results in out-of-distribution performance gains without domain adaptation.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机与背景）

- **研究背景**：功能性磁共振成像（fMRI）数据具有高维度、低信噪比、样本量有限等特点，传统分析受限于统计功效。自监督学习（SSL）为训练“基础模型”提供了可能，但现有fMRI基础模型（如BrainLM、Brain-JEPA）主要采用**掩码重建范式**，关注低层、区域级信息，导致表示对噪声敏感、需要大量微调才能用于下游任务。
- **核心问题**：现有模型的目标与稳定表型预测不一致——重建BOLD信号会导致表示混杂噪声，难以跨数据集迁移。作者认为有效预测稳定表型需要**从重建转向抽象**，即学习能够忽略瞬时噪声和采集伪影的高层语义表示。
- **整体含义**：本文提出了Brain-Semantoks，一个强调抽象表示、利用神经科学先验（功能网络）和自蒸馏目标的fMRI基础模型，旨在提升下游任务的线性探测性能，并减少域适应需求。

## 2. 方法论：核心思想、关键技术细节

### 2.1 核心思想
- **范式转变**：从“重建低层信号”转向“学习稳定的脑动态语义表示”。通过自蒸馏（self-distillation）强制同一被试不同时间窗口的表示一致，从而捕捉表型特征。
- **语义分词器（Semantic Tokenizer）**：利用神经科学先验——大脑组织为功能网络，将多个脑区（ROI）的噪声时间序列聚合为每个网络的一个鲁棒语义标记，降低序列长度并提升语义信息密度。
- **训练课程（Training Curriculum）**：引入教师引导的时间正则化器（TTR），在训练初期引导模型先学习每个网络的时均表示，再逐步学习时间变异，稳定早期训练。

### 2.2 主要技术细节
- **输入表示**：fMRI时间序列 \( X \in \mathbb{R}^{C \times T} \)，\(C\)为ROI数量（采用Schaefer-400、Tian-III、Buckner-7共457个ROI），\(T\)为时间点。经过z-score标准化和重采样到2s TR。
- **语义分词器 \(G\)**：对于每个功能网络 \(n\)，独立的模块 \(g_n\) 将属于该网络的ROI子集 \(X_n \in \mathbb{R}^{C_n \times T}\) 切分为 \(P\) 个长时补丁（patch length=20），每个补丁通过一个**双分支卷积滤波器组**（标准卷积 + 结构化卷积）提取特征，再经LayerNorm、GELU、平均池化得到D维标记。所有网络标记拼接为 \( \mathbb{R}^{N \times P \times D} \)，\(N=9\)（7个Yeo皮层网络 + 1个子皮层 + 1个小脑）。
- **Transformer编码器**：使用Transformer（\(D=768\)，8层），接收展平的标记序列（长度 \(N \times P + 1\)，含[CLS]标记），加入正弦位置编码和可学习网络嵌入。学生和教师网络共享相同结构，教师权重为学生权重的指数移动平均（EMA）。
- **掩码策略（Slice Masking）**：采用**切片掩码**——按行（网络切片）或按列（时间切片）掩码整块区域，而非随机个体标记，迫使模型学习更复杂的跨网络和跨时间关系。掩码比例从 \(U[0.65, 0.85]\) 中采样。
- **自蒸馏损失**：
  - **全局[CLS]损失（\(L_{CLS}\)）**：约束两个不同时间视图的[CLS]嵌入一致（平方欧氏距离），并加入编码率正则化项 \(R_\epsilon\) 防止表示坍缩。
  - **网络标记损失（\(L_{Tok}\)）**：对掩码位置的网络标记，学生在潜在空间中预测教师输出（平方欧氏距离），在语义级别进行蒸馏。
  - **教师引导的时间正则化器（\(L_{TTR}\)）**：在训练前5%阶段，强制学生对每个网络时均标记与教师对齐，权重从0.5余弦衰减至0。总损失为加权和：\(L_{total} = L_{CLS} + \lambda_{Tok} L_{Tok} + \lambda_{TTR} L_{TTR}\)，\(\lambda_{Tok}=0.5\)，\(\lambda_{TTR}\)动态衰减。
- **下游评估**：冻结教师编码器，用线性探测（BN + 线性层）评估表示质量。输入为[CLS]标记与所有网络标记平均的拼接。

## 3. 实验设计

### 3.1 数据集与场景
- **预训练数据**：UK Biobank（UKB）的39,139次静息态fMRI记录（39,139 recordings），保留1,625次用于下游评估。预处理：带通滤波0.01–0.1Hz，z-score标准化，重采样至2s TR，得到180个时间点。
- **下游任务（共11个）**：
  - **人口统计学**：UKB年龄（5分类）、UKB性别（2分类）；HBN年龄（5分类）、HBN性别（2分类）。
  - **临床诊断**：ABIDE（自闭症谱系障碍，2分类）、SRPBS（精神分裂症 & 重性抑郁障碍，2分类）。
  - **认知/语言**：HBN的CELF（语言能力，3分类）、WISC（认知能力，3分类）；LEMON的CVLT（言语记忆，3分类）、TMT（执行功能，3分类）。
  - **情绪**：LEMON的MDBF（心境，3分类）。
- **额外任务**：UKB的Hariri情绪任务（任务态fMRI，预测块类型：形状 vs 面孔），用于评估跨时间尺度泛化。

### 3.2 Benchmark与对比方法
- **基础模型基线**：BrainLM（掩码重建）、Brain-JEPA（潜在空间重建），两者均在UKB上预训练。
- **监督基线**：功能连接+SVM（FC）、BolT（基于Transformer的分类器）、BNT（脑网络Transformer）、BrainMass（基于FC的预训练）。
- **评估协议**：线性探测（冻结特征训练线性层）和全模型微调。10折交叉验证重复，报告平衡准确率。

## 4. 资源与算力

- 论文明确说明：**预训练可在单GPU（<20GB显存）上在2小时内完成**（100 epochs）。未具体指定GPU型号（推测为消费级如RTX 3090或A5000级别）。
- 资源利用高效：语义分词器减少了序列长度，降低了内存消耗。
- **未提及**：微调或线性探测的具体计算资源需求。

## 5. 实验数量与充分性

- **丰富的实验组**：
  - **主实验**：在9个下游任务上对比Brain-Semantoks与BrainLM、Brain-JEPA（线性探测）；在11个任务上与监督基线+微调对比（表1、表2）。
  - **规模分析**：在不同预训练数据子集（占全量10%、25%、50%、100%）上训练，评估线性探测性能，观察幂律缩放行为（图2）。
  - **消融实验**：共5组（表4-8），包括：分词器设计（卷积类型、核大小）、TTR持续时间、掩码类型与比例、损失组件、空间标记数量、时间补丁大小、掩码比例、编码率正则化等。此外附录中还有 atlas 消融、时间分辨率消融、数据增强消融、crop长度消融等（表10-15）。
  - **可解释性分析**：通过掩码除单一网络外的所有标记，评估各功能网络对下游任务的预测重要性（图3）。
  - **任务态fMRI泛化**：在Hariri情绪任务上比较Brain-Semantoks与Brain-JEPA（表3）。
  - **分布外鲁棒性分析**：在SRPBS和ABIDE上按站点、MRI扫描仪、TR等分组评估（附录图6）。
- **充分性与公平性**：
  - 线性探测协议对基线进行了标准化（增加批归一化、多crop集成），保证了公平比较。
  - 所有主要结果使用3种随机种子，平均后报告。
  - 统计检验采用Wilcoxon符号秩检验，Holm-Bonferroni校正（附录表18-19），确保显著性。
  - 消融实验覆盖了几乎所有关键设计选择，且结论清晰。
- **不足**：部分消融（如语义分词器对比ROI线性投影）仅在图4中展示，未给出具体数值表；但整体实验充分。

## 6. 主要结论与发现

1. **线性探测性能显著优于现有fMRI基础模型**：在9个下游任务中，Brain-Semantoks在8个任务上取得最高准确率，尤其在临床诊断（自闭症、精神分裂症、抑郁症）上提升幅度大（表1）。
2. **即使线性探测也超越全监督方法**：在11个任务上与全模型微调及多种监督基线相比，Brain-Semantoks的线性探测性能平均最高（52.72%），接近微调（52.95%）（表2）。
3. **泛化到任务态fMRI**：在Hariri情绪任务上，Brain-Semantoks显著优于Brain-JEPA（表3）。
4. **预测性缩放定律**：性能随预训练数据量对数增长，且在多个分布外任务上未见饱和，表明更多未标记数据持续带来增益（图2）。
5. **语义分词器与TTR关键**：消融显示，ROI级线性投影导致训练早期部分坍缩（快速高信度预测），而语义分词器+TTR稳定训练并带来12%性能提升（图4）。
6. **可解释性**：不同功能网络对于不同任务的重要性符合神经科学知识（如默认模式网络对自闭症重要，小脑对抑郁症重要）。

## 7. 优点

- **新颖的抽象学习范式**：将fMRI基础模型从信号重建转向语义表示学习，更符合表型预测需求。
- **强神经科学先验**：语义分词器基于功能网络，既提升计算效率（减少序列长度），又增强表示语义性。
- **训练稳定性创新**：提出TTR课程，解决了自蒸馏在低信噪比fMRI上的不收敛问题。
- **优异的线性探测性能**：表示质量高，线性探测即可超越许多完全微调模型，降低域适应成本。
- **严格的实验设计**：全面对比基线、标准化评估协议、统计检验、多种子平均，结果可靠。
- **缩放分析**：首次系统展示fMRI基础模型的数据缩放定律，且证明跨数据集泛化能力随数据增加而增强。
- **可解释性工具**：利用切片掩码进行“in-distribution”可解释性分析。
- **计算效率高**：单GPU、<20GB显存、2小时完成预训练。

## 8. 不足与局限

- **依赖固定功能网络映射**：使用Yeo 7网络+子皮层+小脑，可能不适用于所有个体或异常大脑组织（如病变患者）。作者承认未来可探索数据驱动分组。
- **时间重采样限制**：将UKB原始TR（0.735s）重采样到2s以适应下游数据，可能丢失高频信息。附录A.4.2显示在原始高TR下预训练，部分疾病分类性能下降。
- **任务态fMRI评估有限**：仅在一个情绪任务上测试，且需构建特殊补丁处理时间尺度不匹配，通用性有待验证。
- **数据增强仅用简单退化**：未充分利用生理学启发的增强（如ROI混合、频率掩码），消融显示当前增强增益很小，暗示数据增强策略仍需改进（附录A.4.3）。
- **仅使用UKB预训练**：虽然规模最大，但仅一个数据集，可能存在特定采集成像偏差；未来可结合多源数据。
- **未进行全模型微调的所有任务**：表2仅对Brain-Semantoks在6个任务上微调，其他任务未报告微调结果，对比不够完整。
- **未探索大规模计算资源下的表现**：尽管单GPU高效，但未展示多GPU或更大模型缩放效果。
- **潜在偏差风险**：评估数据集中临床样本相对较小（如SRPBS），某些任务（如LEMON）样本量仅200+，统计稳定性有限。此外，所有评估均基于平衡准确率，未讨论其他指标（如F1、AUC）。

（完）

---
title: "TRIBE: TRImodal Brain Encoder for whole-brain fMRI response prediction"
title_zh: TRIBE：用于全脑fMRI响应预测的三模态脑编码器
authors: "Stéphane d'Ascoli, Jérémy Rapin, Yohann Benchetrit, Hubert Banville, Jean-Remi King"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=biegtqdqmg"
tags: ["query:fbn"]
score: 6.0
evidence: 多模态深度网络预测fMRI响应，人工智能医疗
tldr: 为建立统一认知模型，提出TRIBE多模态脑编码器，结合文本、音频、视频基础模型和Transformer，预测全脑fMRI响应。在Algonauts 2025竞赛中获第一，结果表明跨模态预测能力显著，为神经影像AI在认知科学中的应用提供新途径。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1422, \"height\": 959, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1333, \"height\": 730, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1425, \"height\": 825, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1429, \"height\": 576, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1434, \"height\": 780, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1394, \"height\": 526, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 712, \"height\": 563, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 835, \"height\": 1285, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 721, \"height\": 543, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-biegtqdqmg/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1034, \"height\": 751, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-biegtqdqmg/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1227, \"height\": 300, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-biegtqdqmg/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1508, \"height\": 399, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-biegtqdqmg/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1583, \"height\": 993, \"label\": \"Table\"}]"
motivation: 传统神经科学碎片化，缺乏跨模态统一认知模型。
method: 组合文本、音频、视频基础模型表示，使用Transformer处理时间演化，预测fMRI响应。
result: 在脑编码竞赛中获第一，跨模态预测性能大幅领先。
conclusion: 展示多模态基础模型在理解脑响应中的潜力，推动AI医疗和认知科学。
---

## Abstract
Historically, neuroscience has progressed by fragmenting into specialized domains, each focusing on isolated modalities, tasks, or brain regions. While fruitful, this approach hinders the development of a unified model of cognition. Here, we introduce TRIBE, the first deep neural network trained to predict brain responses to stimuli across multiple modalities, cortical areas and individuals. By combining the pretrained representations of text, audio and video foundational models and handling their time-evolving nature with a transformer, our model can precisely model the spatial and temporal fMRI responses to videos, achieving the first place in the Algonauts 2025 brain encoding competition with a significant margin over competitors. Ablations show that while unimodal models can reliably predict their corresponding cortical networks (e.g. visual or auditory networks), they are systematically outperformed by our multimodal model in high-level associative cortices. Currently applied to perception and comprehension, our approach paves the way towards building an integrative model of representations in the human brain. Our code is available at \url{https://anonymous.4open.science/r/algonauts-2025-C63E}.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）

- **碎片化的神经科学现状**：传统神经科学通过划分认知任务和脑区来推进研究，例如视觉、语言等独立领域，难以构建统一的认知模型。
- **跨模态整合的缺失**：大多数脑编码模型局限于单一模态（如仅视觉或仅语言），无法捕捉大脑如何整合多模态信息（如视听交互），且通常假设线性映射、为单个被试单独训练模型。
- **论文目标**：提出一种**非线性、多被试、多模态**的深度学习编码模型 TRIBE，预测被试观看视频时的全脑 fMRI 响应，旨在推动统一认知模型的发展。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用预训练的文本（Llama-3.2-3B）、音频（Wav2Vec-Bert-2.0）、视频（V-JEPA 2）基础模型提取时间演变的嵌入，通过 Transformer 编码器学习跨模态动态交互，并预测每个脑区的 BOLD 信号。
- **关键技术细节**：
  - **特征提取**：从视频中同步提取三类模态特征，采样频率均为 2 Hz。
    - 文本：将时间戳转录的上下文词（前 1024 个词）通过 Llama-3.2-3B，每词取令牌嵌入平均，按时间叠加得到 3072 维。
    - 音频：通过 Wav2Vec-Bert-2.0 得到 1024 维嵌入，从 50 Hz 重采样至 2 Hz。
    - 视频：每 4 秒 64 帧通过 V-JEPA 2，平均所有 patch 令牌得到 1408 维嵌入。
  - **模态压缩**：将每模态的层分为 2 组（相对深度 0.5-0.75 和 0.75-1），组内平均后通过线性层和 LayerNorm 映射到 1024 维，再拼接三模态得 3×1024 输入。
  - **Transformer 编码器**：8 层、8 头注意力，加可学习位置编码。输出经自适应平均池化压缩至每 TR（1.49 秒）一个嵌入。
  - **被试条件层**：使用线性投影为每个被试选择不同投影矩阵，输出 1000 维脑区信号。
  - **血流动力学延迟**：将目标信号相对于输入偏移 5 秒，注意力机制自动学习相关时间窗口（峰值在 5-10 秒）。
  - **模态 dropout**：训练时以概率 p 随机遮蔽某模态（保证至少一个保留），增强模型缺失模态时的鲁棒性。
- **训练细节**：AdamW 优化器，余弦学习率调度，批量大小 16，最大 15 轮，使用随机权重平均（SWA）。最终集成 1000 个不同超参数/种子模型（软投票）。

## 3. 实验设计

- **数据集**：Courtois NeuroMod 数据集，4 名被试观看 *Friends* 前六季及四部电影（*The Bourne Supremacy*、*Hidden Figures*、*The Wolf of Wall Street*、*Life*）。预处理：fMRIprep 至 MNI 空间，按 Schaefer 图谱（1000 个脑区）平均 BOLD，每 session 内 z 归一化。
- **评价指标**：每个脑区预测与真实 BOLD 的 Pearson 相关系数，取全脑平均作为“编码得分”。10% session 作为验证集（视频跨被试留出，防止泄漏）。
- **基准**：Algonauts 2025 竞赛（267 个团队），排名通过公共排行榜评估。另设内部消融比较。
- **对比方法**：仅与竞赛排名前 5 的团队比较（表 1），以及内部消融（单模态、双模态、无多被试、无 Transformer 等）。
- **噪声天花板**：利用重复观看的两部电影计算自相关 ρ_self，归一化 Pearson = ρ / sqrt(2/(1+ρ_self))，评估模型捕获可解释方差的比例。

## 4. 资源与算力

- **特征提取**：使用 128 块 NVIDIA V100 GPU（32GB），耗时 24 小时。
- **TRIBE 模型训练**：模型参数 980M，在单块 V100 GPU 上训练 24 小时。
- **集成**：1000 个模型，每个种子不同，但整体训练并未额外显著增加总时间（因单卡即可完成）。

## 5. 实验数量与充分性

- **消融实验丰富**：
  - 模态消融（图 4a）：单模态、双模态、三模态对比。
  - 结构消融（图 6a）：移除多被试训练或 Transformer 编码器。
  - 规模消融（图 6b）：不同训练 session 数量下的性能。
  - 上下文长度消融（图 6c）：不同语言模型上下文词数。
  - 层深度分析（图 7、8）：不同层对编码贡献。
  - 注意力机制分析（图 9）：学习到的血流动力学响应。
- **统计显著性**：对所有 1000 个脑区进行块置换检验（1000 次置换），所有脑区均显著（q(FDR) < 0.001）。
- **泛化性测试**：在 6 个跨域电影上测试（表 2），包括卡通、纪录片、无声黑白片等。
- **充分性评价**：实验设计全面，覆盖模型各个重要方面，采用公平的留出验证和竞赛标准流程。结论稳健。

## 6. 论文的主要结论与发现

- **竞赛成绩**：TRIBE 在 Algonauts 2025 竞赛中取得第一名（平均得分 0.2146），与第二名差距大于第二名与第五名之间的差距。
- **多模态优势**：三模态比任何双模态、单模态模型显著更好，尤其在联合皮层（前额叶、枕颞叶等）提升达 30%，但在初级视觉皮层略逊于纯视觉模型。
- **全脑预测能力**：所有 1000 个脑区均显著预测，平均归一化 Pearson 为 0.54，即捕获约一半可解释方差；听觉和语言皮层最高（>80%）。
- **关键设计贡献验证**：
  - 非线性（Transformer）优于线性映射。
  - 多被试训练优于单被试独立训练。
  - 模态 dropout 提高鲁棒性。
  - 数据量增加性能持续提升，未饱和。
- **跨域泛化**：模型对训练集外的电影（如动画片、纪录片）均有良好预测，但对无声电影的语言相关脑区预测较弱。

## 7. 优点

- **首次实现非线性、多被试、多模态的脑编码模型**，突破了线性假设、单被试、单模态的限制。
- **端到端学习跨模态动态整合**，无需手工设计时序响应函数，注意力机制自动学习血流动力学延迟。
- **使用预训练基础模型**：利用 Llama、Wav2Vec-Bert、V-JEPA 等 SOTA 模型，提取丰富语义/声学/视觉表示。
- **模态 dropout 和集成策略**：增强泛化性和鲁棒性。
- **在大型自然刺激数据集上验证**，结果具有生态效度，且代码开源提供可复现性。

## 8. 不足与局限

- **空间分辨率低**：仅使用 1000 个脑区粗划分，无法捕捉单个 voxel 级别或视网膜拓扑映射（视频嵌入丢弃空间信息），可能损失初级视觉皮层细节。
- **仅依赖 fMRI**：无法获得毫秒级神经动力学；后续可扩展到 MEG/EEG。
- **被试数量有限**：仅 4 名被试，对未见被试的零/少样本泛化能力未验证；需更大样本集（如 Human Connectome Project）。
- **无法预测自发性活动**：模型纯确定性输入-输出，无法反映默认模式网络等无刺激下的动态。
- **仅覆盖感知与理解**：未涉及行为、记忆、决策等更高级认知过程。
- **评估指标局限**：Pearson 相关系数仅反映线性相关性，可能忽略非线性匹配。
- **偏见风险**：训练数据仅来自特定电视节目和电影，可能引入文化或内容偏差；用于神经营销等场景需伦理谨慎。

（完）

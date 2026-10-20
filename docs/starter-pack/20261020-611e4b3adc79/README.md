<div class="dpr-topic-result-actions"><button type="button" data-topic-copy="docs/starter-pack/20261020-611e4b3adc79/papers.md">复制论文清单</button> <a href="docs/starter-pack/20261020-611e4b3adc79/papers.md" download data-no-router>下载 Markdown</a> <a href="docs/starter-pack/20261020-611e4b3adc79/papers.json" download data-no-router>下载 JSON</a> <button type="button" data-topic-continue="20261020-611e4b3adc79">继续生成阅读内容</button></div>

# hginff · 入门导读

> 本导读基于所列论文的标题、摘要和已有速览，不代表已阅读全部全文。近期窗口不是完整领域史；检索不保证覆盖全部相关论文。模型导读需结合原文核验。

检索窗口：arXiv &#91;2025-10-20, 2026-10-20&#41;；会议 &#91;2024-10-20, 2026-10-20&#41;（UTC，结束日不含）

## 方向概览

本导读聚焦双曲几何在脑影像与脑网络分析中的应用，核心研究问题是：如何利用负曲率空间（Lorentz 与 Poincaré 模型）表征脑网络与脑影像中的层级结构，并服务于疾病诊断、跨站点预测、跨模态对齐与元分析。输入论文显示三条主线：一是以 Lorentz 空间对 ROI—功能社区—全脑多层级关系建模，用于脑疾病诊断（HLBG）；二是将双曲残差编码或双曲图卷积嵌入 rs-fMRI/EEG 功能连接学习，用于跨站点 MDD 识别与抑郁识别；三是将文本、图像或视觉语义与神经响应映射到共享双曲空间，用于神经影像元分析与视觉—神经层级对齐。评测主要依赖 ABIDE-I、REST-MDD、公开 EEG 数据集及多站点 rs-fMRI 目标域，指标包括分类准确率与 AUC，并辅以生物标志物可解释性讨论。局限在于：多数工作未系统比较 Lorentz 与 Poincaré 模型，曲率学习机制披露有限，且输入中 fMRI 与功能连接研究数量少于 EEG 研究，关于核心—边缘结构与纯几何可视化分析的直接证据不足。本导读仅覆盖给定检索窗口内的 6 篇候选，不代表完整领域史。

依据：[Navigating Hierarchy: Hyperbolic Learning on Brain Graphs for Disorder Diagnosis](/20251020-20261019/2607.07077v1)；[Multi-Source Multi-View Graph Domain Adaptation with Hyperbolic Residual Encoding for Cross-Site MDD Identification from rs-fMRI](/20251020-20261019/2607.29531v1)；[MNM : Multi-level Neuroimaging Meta-analysis with Hyperbolic Brain-Text Representations](/20251020-20261019/2511.21092v1)；[HyNeuralMap: Hyperbolic Mapping of Visual Semantics to Neural Hierarchies](/20251020-20261019/2605.09392v1)；[SA-HGNN: Sample-Adaptive Hyperbolic Graph Neural Network for EEG-Based Depression Recognition](/20251020-20261019/2607.02063v1)；[HEEGNet: Hyperbolic Embeddings for EEG](/20251020-20261019/2601.03322v2)

## 双曲脑图学习与疾病诊断

该子方向把功能脑网络的层级组织显式编码进双曲空间。HLBG 将 ROI、功能社区与全脑网络表示投影到 Lorentz 双曲空间，并通过两条几何蕴含约束施加多层级关系，同时引入图感知 Mamba 捕获长程依赖，在 ABIDE-I 与 REST-MDD 上报告优于现有方法并识别疾病相关功能生物标志物。SA-HGNN 面向 EEG 抑郁识别，采用样本自适应图构建、双曲图卷积与注意力池化，在静息态与任务范式公开 EEG 数据集上验证对噪声的鲁棒性。两者共同体现“层级结构假设 + 双曲嵌入 + 诊断分类”的方法范式；证据主要来自各自摘要报告，未提供跨研究统一基准。

依据：[Navigating Hierarchy: Hyperbolic Learning on Brain Graphs for Disorder Diagnosis](/20251020-20261019/2607.07077v1)；[SA-HGNN: Sample-Adaptive Hyperbolic Graph Neural Network for EEG-Based Depression Recognition](/20251020-20261019/2607.02063v1)

## rs-fMRI 功能连接的双曲表征与跨站点适应

该方向关注多视图功能连接与站点分布偏移。给定工作构建 Pearson 相关、稀疏表示与 Granger 因果三类功能连接图，分别用视图特定图注意力网络编码，经双流自适应融合后加入轻量双曲残差编码进行曲率感知细化，并以类条件 Cauchy–Schwarz 对齐、对抗学习与置信伪标签实现多源无监督域适应；在七个无标签目标域上报告 73.60% 平均准确率与 71.90% AUC。该证据说明双曲编码可作为功能连接表征的细化组件，而非独立主干；摘要未说明曲率是否可学习，也未与纯欧氏多视图基线逐项对比。

依据：[Multi-Source Multi-View Graph Domain Adaptation with Hyperbolic Residual Encoding for Cross-Site MDD Identification from rs-fMRI](/20251020-20261019/2607.29531v1)

## 双曲跨模态对齐与神经影像元分析

该子方向将双曲几何用于模态间语义层级对齐。MNM 通过 Lorentz 模型把文献文本与脑激活图嵌入共享双曲空间，执行脑—文本语义对齐、文本—激活层级引导与脑激活内部层级保持，用于多层级神经影像元分析。HyNeuralMap 同样采用 Lorentz 模型，将视觉语义与 fMRI 神经响应映射到跨被试共享神经层级，以测地距离保持语义邻近与层级关系，在多标签语义预测与跨模态检索上报告优于欧氏基线。两项工作共同支持“负曲率作为层级归纳偏置”的论点，但均以摘要级结果呈现，缺乏对 Poincaré 模型的对照与曲率敏感性分析。

依据：[MNM : Multi-level Neuroimaging Meta-analysis with Hyperbolic Brain-Text Representations](/20251020-20261019/2511.21092v1)；[HyNeuralMap: Hyperbolic Mapping of Visual Semantics to Neural Hierarchies](/20251020-20261019/2605.09392v1)

## 双曲嵌入的泛化性与层级证据

HEEGNet 首先实证展示 EEG 数据具有双曲性，并说明双曲嵌入可改善泛化；其架构结合欧氏与双曲编码器，采用由粗到细的域适应策略，在视觉诱发电位、情绪识别与颅内 EEG 多个公开数据集上报告当前最优性能。该工作为“脑信号存在层级结构、双曲几何匹配该结构”提供了方法学论据，但对象为 EEG 而非 fMRI；将其结论外推到功能磁共振需谨慎。输入中未提供该文与 fMRI 功能连接研究之间的直接比较。

依据：[HEEGNet: Hyperbolic Embeddings for EEG](/20251020-20261019/2601.03322v2)

## 评测、进展与局限

评测方面，输入论文使用的数据包括 ABIDE-I、REST-MDD、七个无标签 rs-fMRI 目标域以及多个公开 EEG 数据集，任务覆盖自闭症/抑郁诊断、跨站点 MDD 分类、抑郁 EEG 识别、跨模态检索与元分析；指标以分类准确率和 AUC 为主。进展体现在：Lorentz 模型被反复用于多层级脑图与跨模态对齐；双曲组件可与图注意力、Mamba、域适应和残差编码组合；部分工作报告了生物标志物或可解释性分析。局限与证据缺口包括：缺少 Lorentz 与 Poincaré 的系统对照；曲率学习细节披露不足；fMRI/功能连接直接研究数量有限，核心—边缘结构与纯几何可视化分析在给定摘要中未见专门工作；各研究基准与预处理不一致，难以横向比较。以上判断仅基于输入标题、摘要与 TLDR，未补充外部事实。

依据：[Navigating Hierarchy: Hyperbolic Learning on Brain Graphs for Disorder Diagnosis](/20251020-20261019/2607.07077v1)；[Multi-Source Multi-View Graph Domain Adaptation with Hyperbolic Residual Encoding for Cross-Site MDD Identification from rs-fMRI](/20251020-20261019/2607.29531v1)；[MNM : Multi-level Neuroimaging Meta-analysis with Hyperbolic Brain-Text Representations](/20251020-20261019/2511.21092v1)；[HyNeuralMap: Hyperbolic Mapping of Visual Semantics to Neural Hierarchies](/20251020-20261019/2605.09392v1)；[SA-HGNN: Sample-Adaptive Hyperbolic Graph Neural Network for EEG-Based Depression Recognition](/20251020-20261019/2607.02063v1)；[HEEGNet: Hyperbolic Embeddings for EEG](/20251020-20261019/2601.03322v2)

## 建议阅读顺序

以下为建议学习顺序，不是公布时间排序。

1. [Navigating Hierarchy: Hyperbolic Learning on Brain Graphs for Disorder Diagnosis](/20251020-20261019/2607.07077v1) · 入门
   - 阅读理由：以 Lorentz 空间显式建模 ROI—社区—全脑层级，是理解双曲脑图学习与诊断任务的核心入口。
   - 公布时间：2026-07-08（日精度）
   - arxiv · 2026-07-08（日精度）：[原文](https://arxiv.org/pdf/2607.07077v1) / [PDF](https://arxiv.org/pdf/2607.07077v1)

2. [Multi-Source Multi-View Graph Domain Adaptation with Hyperbolic Residual Encoding for Cross-Site MDD Identification from rs-fMRI](/20251020-20261019/2607.29531v1) · 进阶
   - 阅读理由：展示双曲残差编码如何嵌入多视图功能连接与跨站点域适应流程，贴近 rs-fMRI 应用场景。
   - 公布时间：2026-07-31（日精度）
   - arxiv · 2026-07-31（日精度）：[原文](https://arxiv.org/pdf/2607.29531v1)

3. [MNM : Multi-level Neuroimaging Meta-analysis with Hyperbolic Brain-Text Representations](/20251020-20261019/2511.21092v1) · 进阶
   - 阅读理由：提供 Lorentz 模型下脑—文本跨模态层级对齐与元分析的完整思路，扩展对双曲表征用途的认识。
   - 公布时间：2025-11-26（日精度）
   - arxiv · 2025-11-26（日精度）：[原文](https://arxiv.org/pdf/2511.21092v1) / [PDF](https://arxiv.org/pdf/2511.21092v1)

4. [HyNeuralMap: Hyperbolic Mapping of Visual Semantics to Neural Hierarchies](/20251020-20261019/2605.09392v1) · 进阶
   - 阅读理由：以视觉—神经映射为例说明双曲几何相对欧氏空间在层级保持上的优势，可与前一工作对照阅读。
   - 公布时间：2026-05-10（日精度）
   - arxiv · 2026-05-10（日精度）：[原文](https://arxiv.org/pdf/2605.09392v1) / [PDF](https://arxiv.org/pdf/2605.09392v1)

5. [SA-HGNN: Sample-Adaptive Hyperbolic Graph Neural Network for EEG-Based Depression Recognition](/20251020-20261019/2607.02063v1) · 专题
   - 阅读理由：呈现双曲图卷积与注意力池化在脑网络层级提取中的组合方式，补充图神经网络视角。
   - 公布时间：2026-07-02（日精度）
   - arxiv · 2026-07-02（日精度）：[原文](https://arxiv.org/pdf/2607.02063v1) / [PDF](https://arxiv.org/pdf/2607.02063v1)

6. [HEEGNet: Hyperbolic Embeddings for EEG](/20251020-20261019/2601.03322v2) · 专题
   - 阅读理由：讨论脑信号双曲性与泛化性证据，适合作为方法学反思与跨模态外推的专题阅读。
   - 公布时间：2026-01-06（日精度）
   - arxiv · 2026-01-06（日精度）：[原文](https://arxiv.org/pdf/2601.03322v2) / [PDF](https://arxiv.org/pdf/2601.03322v2)
   - ICLR-2026-Accepted · 2026（年精度）：[官方论文集](https://proceedings.iclr.cc/paper_files/paper/2026/hash/79081c95482707d2db390542614e29cd-Abstract-Conference.html) / [原文](https://openreview.net/forum?id=CNDNRjpVIL)

任务：研究方向大礼包

固定窗口：arXiv &#91;2025-10-20, 2026-10-20&#41;；会议 &#91;2024-10-20, 2026-10-20&#41;（UTC，结束日不含）

本次候选评审上限 300，最终名单上限 100；本轮内容预算 10。

覆盖限制：仅检索配置范围内已有库存与预算内候选；向量/会议Top-k召回并非全库遍历，不保证找全相关论文。未核实录用、日期边界和缺失库存不能当作已覆盖。

缺失库存：eccv 2025、emnlp 2026、neurips 2026。

研究需求：收集将双曲几何应用于脑影像和脑网络分析的论文，重点关注 fMRI、静息态 fMRI 和脑功能连接。涵盖双曲表征学习、Lorentz 与 Poincaré 模型、双曲图神经网络、双曲注意力、曲率学习，以及脑网络层级组织、核心与边缘结构、可视化、疾病分析和多模态脑影像融合。 原始语义意图（必须保留已有的全部限定，仅在原需求内收窄）： connectome hyperbolic embedding and geometric analysis of functional connectivity neuroimaging fMRI Lorentz hyperbolic Find applications of hyperbolic geometry to computer aided diagnosis of brain disorders, neuroimaging based prediction, and multimodal neuroimaging fusion, prioritizing studies that use fMRI or functional connectivity. Find studies using hyperbolic embeddings to investigate hierarchical brain organization, core–periphery structure, relationships between brain regions, and brain network visualization, including geometric analysis methods that do not use deep learning. Find hyperbolic representation learning methods for neuroimaging and brain networks, including Lorentz models, Poincaré models, hyperbolic graph neural networks, hyperbolic attention, and curvature learning. Find studies applying hyperbolic geometry to neuroimaging, particularly functional magnetic resonance imaging &#40;fMRI&#41;, resting state fMRI, functional connectivity, and brain networks. 本次研究限定（方法或技术）：hyperbolic Lorentz Poincare Poincaré,fMRI rs-fMRI functional magnetic resonance imaging neuroimaging brain imaging brain network functional connectivity connectome 请生成符合原始语义意图及本次限定的英文检索词和语义查询，关键词最多4个，应体现正向限定条件，不要仅重复原来的宽泛方向，也不得丢掉原有范围限定。排除要求保留为评审语义，不宣称执行关键词NOT过滤。

本次细化：hyperbolic Lorentz Poincare Poincaré,fMRI rs-fMRI functional magnetic resonance imaging neuroimaging brain imaging brain network functional connectivity connectome

# hginff

以下为本次固定最终名单，按相关性评分降序；不代表全部相关论文。

1. [Navigating Hierarchy: Hyperbolic Learning on Brain Graphs for Disorder Diagnosis](https://arxiv.org/abs/2607.07077v1) · 分数 9
2. [Multi-Source Multi-View Graph Domain Adaptation with Hyperbolic Residual Encoding for Cross-Site MDD Identification from rs-fMRI](https://arxiv.org/abs/2607.29531v1) · 分数 9
3. [MNM : Multi-level Neuroimaging Meta-analysis with Hyperbolic Brain-Text Representations](https://arxiv.org/abs/2511.21092v1) · 分数 8
4. [HyNeuralMap: Hyperbolic Mapping of Visual Semantics to Neural Hierarchies](https://arxiv.org/abs/2605.09392v1) · 分数 8
5. [SA-HGNN: Sample-Adaptive Hyperbolic Graph Neural Network for EEG-Based Depression Recognition](https://arxiv.org/abs/2607.02063v1) · 分数 7
6. [HEEGNet: Hyperbolic Embeddings for EEG](https://arxiv.org/abs/2601.03322v2) · 分数 6

[按公布时间查看](#/starter-pack/20261020-611e4b3adc79/dates)

阅读内容：已完成 6，待补充 0。

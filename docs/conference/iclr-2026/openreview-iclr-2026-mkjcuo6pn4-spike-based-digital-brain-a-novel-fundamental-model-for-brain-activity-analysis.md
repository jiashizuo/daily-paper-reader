---
title: "Spike-based Digital Brain: a novel fundamental model for brain activity analysis"
title_zh: 基于脉冲的数字大脑：一种新颖的脑活动分析基础模型
authors: "Shaolong Wei, Qiyu Sun, Mingliang Wang, Liang Sun, Weiping Ding, Jiashuang Huang"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=Mkjcuo6PN4"
tags: ["query:fbn"]
score: 8.0
evidence: 基于脉冲的fMRI数字大脑模型
tldr: 现有模型忽略脑活动的生物脉冲特性，难以揭示动态依赖和因果交互。本文提出脉冲数字大脑（Spike-DB），将fMRI信号编码为脉冲序列，学习锚定区域与目标区域之间的时间驱动关系，实现高精度预测。该方法在多个fMRI数据集上优于传统模型，为脑功能分析提供了生物物理更真实的计算范式。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-mkjcuo6pn4/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1441, \"height\": 735, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mkjcuo6pn4/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1446, \"height\": 390, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mkjcuo6pn4/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1439, \"height\": 964, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mkjcuo6pn4/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1447, \"height\": 352, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mkjcuo6pn4/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1453, \"height\": 337, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-mkjcuo6pn4/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 723, \"height\": 297, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-mkjcuo6pn4/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1405, \"height\": 570, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mkjcuo6pn4/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1445, \"height\": 435, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mkjcuo6pn4/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 595, \"height\": 815, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mkjcuo6pn4/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 738, \"height\": 567, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mkjcuo6pn4/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 608, \"height\": 531, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-mkjcuo6pn4/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 768, \"height\": 320, \"label\": \"Table\"}]"
motivation: 传统时间序列模型忽略脑活动的生物脉冲特性，限制动态依赖挖掘。
method: 将fMRI信号编码为脉冲序列，利用脉冲神经网络学习区域间时间驱动关系。
result: 在fMRI预测任务中达到高精度，优于现有方法。
conclusion: 脉冲计算范式能更有效地捕捉fMRI中的动态因果交互。
---

## Abstract
Modeling the temporal dynamics of the human brain remains a core challenge in computational neuroscience and artificial intelligence. Traditional methods often ignore the biological spike characteristics of brain activity and find it difficult to reveal the dynamic dependencies and causal interactions between brain regions, limiting their effectiveness in brain function research and clinical applications. To address this issue, we propose a Spike-based Digital Brain (Spike-DB), a novel fundamental model that introduces the spike computing paradigm into brain time series modeling. Spike-DB encodes fMRI signals as spike trains and learns the temporal driving relationships between anchor and target regions to achieve high-precision prediction of brain activity and reveal underlying causal dependencies and dynamic relationship characteristics. Based on Spike-DB, we further conducted downstream tasks including brain disease classification, abnormal brain region identification, and effective connectivity inference. Experimental results on real-world epilepsy datasets and the Alzheimer's Disease Neuroimaging Initiative (ADNI) dataset show that Spike-DB outperforms existing mainstream methods in both prediction accuracy and downstream tasks, demonstrating its broad potential in clinical applications and brain science research. Our code is available at https://github.com/UAIBC-Brain/Spike-DB.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与研究动机

**研究背景**：人脑是极其复杂的动态系统，fMRI 是广泛使用的非侵入性脑成像技术，但 fMRI 信号信噪比低、易受干扰，传统方法（如 ICA、DCM）及基于连续值的深度模型（GNN、Transformer、对比学习）往往忽略了脑活动中的**生物脉冲（spike）特性**，难以捕捉区域间的**动态依赖和因果交互**。

**核心问题**：如何在建模脑活动时引入更符合生物神经系统的离散脉冲计算范式，实现高精度预测并揭示异常模式和有效连接？

## 2. 方法论：Spike-based Digital Brain（Spike-DB）

**核心思想**：将 fMRI 时间序列编码为脉冲序列，利用脉冲神经网络（SNN）学习锚定脑区对目标脑区的时间驱动关系，在脉冲表示空间中进行自监督预测。

**关键技术细节**：

- **脉冲神经元模型**：采用 IIR 滤波的 LIF 神经元，通过二阶 IIR 滤波器（式 4）模拟突触动力学，克服传统 LIF 忽视信号滤波的局限，更好地捕捉 fMRI 的高低频成分和长程依赖。
- **Spike 编码**：对 fMRI 数据 AF∈R^(N×T)，通过 Axon(·) 和 SN(·) 操作逐层转化为脉冲序列 X∈R^(N×T)。
- **锚定-目标脑区预测架构**：
  - 随机采样 K 个锚定脑区 X_anc，经锚定编码器 f_θ 得到表示 r_anc。
  - 剩余 N-K 个目标脑区 X_tar，经目标编码器 f̄_θ（参数通过 EMA 更新）得到表示 r_tar。
  - 预测器 z_ϕ 以 r_anc 和每个目标脑区的掩码 token 为输入，逐次预测所有目标脑区表示 r̂_tar。
  - 训练损失：脉冲发射率的 MSE（式 9）。
- **Spike 解码**：通过全连接层将预测的嵌入表示还原为 fMRI 时间序列 Y。
- **下游分类头**：在脉冲空间中对输出神经元的脉冲计数进行 argmax 分类（式 15-16）。

## 3. 实验设计

**数据集**：
- **癫痫数据集**（院内采集）：FLE（103 例）、TLE（89 例）、NC-E（114 例），各 240 时间点。
- **ADNI 数据集**：NC-A（73 例）、SMC（70 例）、EMCI（60 例），各 197 时间点。
- **额外 AMRD 数据集**：849 名受试者（384 多病 MD，465 正常 NC-M），230 时间点，用于鲁棒性验证。

**基准方法**：BrainLM、BrainMass、Brain-JEPA、BrainSymphony、Starformer、STCAL。

**评估任务**：
1. fMRI 时间序列预测（R²、RSE）
2. 脑疾病分类（ACC、F1）
3. 异常脑区识别（基于统计检验的配对 t 检验）
4. 有效连接（EC）推断（高斯脉冲扰动）
5. 消融实验（去掉脉冲机制、不同锚定区域数量 K）

## 4. 资源与算力

- **硬件**：单张 NVIDIA RTX 4090（24GB 显存）
- **训练配置**：epoch=100，优化器 AdamW（lr=1e-4），EMA 动量线性调度。
- **模型参数**：Spike-DB 参数量仅 2.7M，每 epoch 训练时间约 96.73 s（远低于 Brain-JEPA 22.0M/127.81s 和 BrainMass 14.4M/284.65s）。

## 5. 实验数量与充分性

- **实验组数**：涉及 3 个数据集、6 个子类型，共进行了：
  - 4 类预测实验（每个数据集单独训练模型）
  - 4 种分类任务（FLE vs NC-E, TLE vs NC-E, EMCI vs NC-A, SMC vs NC-A）
  - 异常区域检测（4 个疾病组）
  - 有效连接可视化（6 个预训练模型）
  - 两组消融实验（去脉冲 + 不同 K 值）
  - 额外在 AMRD 大数据集上验证
- **充分性评价**：所有结果均报告五次独立运行的均值±标准差，并进行显著性标注（p<0.05）。对比方法涵盖近期 SOTA，实验设计覆盖预测、分类、因果推断、可解释分析，**较充分且公平**。

## 6. 主要结论与发现

- **预测性能**：在所有数据集上 Spike-DB 的 R² 最高、RSE 最低，优于 BrainSymphony 等基线（例如癫痫数据 R² 0.979 vs 0.969，RSE 0.184 vs 0.202）。
- **分类能力**：在四组二分类任务中 ACC 和 F1 均最优（如 FLE vs NC-E 达 91.67% ACC）。
- **异常区域识别的临床一致性**：模型检测出的异常脑区（如颞叶癫痫的 HIP、SPG，AD 的 PHG、PCG、THA）与已有医学文献高度吻合。
- **有效连接推断**：患者组兴奋/抑制连接失衡，且连接数目显著少于正常组，符合癫痫和 AD 的神经生物学理论。
- **脉冲机制有效性**：消融实验证明去脉冲后性能显著下降；锚定区域数量 K 减少时模型性能下降，K=89（仅留一个目标）效果最佳。

## 7. 优点

- **生物合理性**：首次将脉冲计算范式引入 fMRI 时间序列建模，更贴近真实神经活动。
- **高性能与高效率**：参数量少（2.7M）、训练快，但预测精度和分类能力均超越连续值基线。
- **多任务泛化**：统一框架支持预测、分类、异常检测、有效连接推理，且在多个数据集上表现一致领先。
- **可解释性**：通过扰动实验和统计检验，可定位病理异常区域并量化因果连接，为临床提供理解。

## 8. 不足与局限

- **数据规模有限**：未在超大规模（如 UK Biobank 数万例）上验证，仅用中小型数据集。AMRD 虽达 849 例，但相比预训练领域仍有差距。
- **脉冲机制的复杂性**：对 spiking 神经元和 Transformer 的融合需要较深计算神经科学背景，可能限制工程推广。
- **单一模态限制**：仅使用 fMRI，未融合结构像、EEG 等多模态信息。
- **下游任务边界**：异常区域识别依赖于正态模型预测偏差，可能受预处理和阈值选择影响；有效连接仅基于固定幅度高斯脉冲，未探索不同扰动强度的鲁棒性。
- **分类任务泛化**：仅测试二分类，未探索多分类（如 FLE vs TLE vs NC）或回归量化（如 MMSE 分数）。

（完）

---
title: "BACE: Behavior-Adaptive Connectivity Estimation for Interpretable Graphs of Neural Dynamics"
title_zh: BACE：行为自适应连接估计用于神经动力学的可解释图
authors: "Mehrnaz Asadi, Sina Javadzadeh, Rahil Soroushmojdehi, S. Alireza Seyyed Mousavi, Terence Sanger"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=5iepz5XeW4"
tags: ["query:fbn"]
score: 4.0
evidence: 从神经记录学习上下文特定的有向连接，可用于功能连接建模
tldr: 理解脑区协调产生行为需要兼具预测性和可解释性的连接模型。本文提出BACE，从多区域颅内局部场电位中学习上下文特定的有向连接，通过可学习邻接矩阵和预测目标训练。在合成数据上准确恢复真实连接，为神经功能连接建模提供了可解释的框架，可迁移至fMRI分析。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-5iepz5xew4/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1451, \"height\": 583, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-5iepz5xew4/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1442, \"height\": 583, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-5iepz5xew4/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1371, \"height\": 924, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-5iepz5xew4/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1441, \"height\": 649, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-5iepz5xew4/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 843, \"height\": 325, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-5iepz5xew4/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 885, \"height\": 155, \"label\": \"Table\"}]"
motivation: 现有方法难以学习与行为相关且可解释的脑区间连接，需要端到端框架以同时实现预测和解释。
method: 提出BACE框架，通过区域时间编码器聚合微触点，学习行为上下文特定的有向邻接矩阵，以预测目标训练。
result: 在合成多变量时间序列上准确恢复真实有向交互，预测性能与现有方法相当。
conclusion: BACE提供了可解释的连接估计方法，可推广至其他模态如fMRI的功能连接分析。
---

## Abstract
Understanding how distributed brain regions coordinate to produce behavior requires
models that are both predictive and interpretable. We introduce Behavior-
Adaptive Connectivity Estimation (BACE), an end-to-end framework that learns
context-specific, directed inter-regional connectivity directly from multi-region intracranial
local field potentials (LFP). BACE aggregates many micro-contacts
within each anatomical region via per-region temporal encoders, applies a learnable
adjacency specific to each behavioral context, and is trained on a forecasting
objective. On synthetic multivariate time series with known graphs, BACE accurately
recovers ground-truth directed interactions while achieving forecasting
performance comparable to state-of-the-art baselines. Applied to human subcortical
LFP recorded simultaneously from eight regions during a cued reaching task,
BACE yields an explicit 8×8 connectivity matrix for each within-trial behavioral
context. The resulting behavioral context-specific graphs reveal behavior-aligned reconfiguration
of inter-regional influence and provide compact, interpretable adjacency
matrices for comparing network organization across behavioral contexts. By
linking predictive success to explicit connectivity estimates, BACE offers a practical
tool for generating data-driven hypotheses about the dynamic coordination
of subcortical regions during behavior.

---

## 论文详细总结（自动生成）

## 论文详细总结

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：理解大脑区域如何协调产生行为，需要兼具预测性和可解释性的模型。现有方法大多使用静态或未区分行为上下文的连接估计，难以捕捉快速的、行为依赖的脑区间有效连接。
- **研究动机**：颅内局部场电位（LFP）具有高时间分辨率，但多区域LFP建模面临三个挑战：①每个区域有多个微触点需聚合为区域级轨迹；②神经活动随行为上下文动态重配置；③触点空间布局高维且非欧几里得。现有管线常使用单一相关图或硬编码解剖连接，无法捕获行为特定的有向交互。
- **整体含义**：提出BACE框架，端到端地从多区域LFP中学习行为上下文特定的有向连接图，将预测与可解释性结合，为神经科学提供数据驱动假设生成工具。

### 2. 论文提出的方法论
- **核心思想**：以预测未来神经活动为目标，联合学习每个行为上下文的邻接矩阵，使预测误差驱动连接估计。如果连接模式能解释动态，则应能提升预测性能。
- **关键技术细节**：
  - **区域编码器**：每个区域用独立GRU编码多通道LFP（10通道），输出区域级时序嵌入，避免编码阶段跨区域泄漏。
  - **上下文特定图学习器**：为每个行为上下文 \(k\) 学习有向邻接矩阵 \(A^{(k)} \in \mathbb{R}^{N\times N}\)（\(N=8\)个区域）。参数化为 \(A^{(k)} = \text{Diag}(g^{(k)}) \bar{S}^{(k)}\)，其中 \(\bar{S}^{(k)}\) 是行归一化模式矩阵（零对角，每行L1范数为1），\(g^{(k)}\) 是行增益向量，分离“谁影响谁”与“影响强度”。添加L1稀疏正则化。
  - **图投影器**：将区域编码 \(H_i\) 通过消息传递更新：\(Z_{i,t} = W_{\text{self}} H_{i,t} + \sum_j A_{ij}^{(k)} W_{\text{neigh}} H_{j,t}\)，融合自身与邻居信息。
  - **自回归预测头**：使用注意力机制从编码序列获取上下文，并在每一步通过邻接矩阵反馈修正预测：\(\tilde{y}_{t-1} = \hat{y}_{t-1} + \alpha A^{(k)} \hat{y}_{t-1}\)。采用残差形式 \(\hat{y}_t = \hat{y}_{t-1} + \Delta \hat{y}_t\) 稳定多步预测。最后线性读出到原始通道空间。
- **训练损失**：加权MSE + 稀疏惩罚 + 连续性/速度/曲率正则项，端到端优化。

### 3. 实验设计
- **数据集**：
  - **合成数据**：两种套件，每种4个基准（D1-D4）。①结构化套件：稀疏邻接矩阵，行度数相同但非零位置不同；②随机非高斯套件：线性非高斯动力学系统生成，含自回归有色噪声。
  - **真实数据**：一名患有运动障碍的儿童在提示到达任务中记录的颅内LFP，8个皮层下区域（GPi前/后、VIM、STN，左右半球各10个触点），326个有效试验，每试分为Wait、React、Reach、Return四个行为段（各400ms，1kHz采样）。滑动窗口 \(T_{\text{in}}=100\)，\(T_{\text{out}}=20\)，步长20。
- **基准方法**：LSTM、NDT（Neural Data Transformer）、DCRNN、GWNet、AMAG。
- **评估指标**：MSE、\(R^2\)、Pearson相关系数。
- **对比公平性**：所有模型在同一数据划分（按试验级分割）下训练，使用相同超参数搜索范围，早停法选最优检查点。

### 4. 资源与算力
- **硬件**：单台工作站，AMD Ryzen Threadripper PRO 7955WX CPU (16核)，128 GiB RAM，NVIDIA RTX 4500 Ada GPU (24 GiB VRAM)。
- **训练时长**：BACE每epoch约9.8秒，具体总训练轮数未明确（早停法，patience=10）。
- **参数量与显存**：BACE参数量0.13M，峰值显存0.20 GB，在所有模型中最小（远小于LSTM 0.45M、NDT 0.63M、GWNet 0.48M等）。

### 5. 实验数量与充分性
- **实验分组**：
  - 合成数据：两大套件共8个数据集，评估边恢复F1@krow和权重相关系数。
  - 真实数据：与5种基线对比预测性能（表1），计算复杂度对比（表2）。
  - 可重复性分析：50次随机半分割，计算绝对邻接相关系数，Spearman-Brown校正。
  - 边缘显著性：1000次bootstrap重采样，FDR校正检测跨上下文边缘差异。
  - 空间组织分析：比较同侧/对侧连接强度、左右半球出度。
- **充分性**：实验覆盖了合成数据验证、真实数据预测、可重复性、统计推断和生物学合理性检验，较全面。但未包含消融实验（如去掉邻接参数化、去掉正则项等），也未在不同被试或不同任务上验证泛化性。

### 6. 论文的主要结论与发现
- **合成数据**：BACE可准确恢复真实有向连接（结构化套件F1@krow=1.0，相关系数0.89；非高斯套件F1@krow=0.98，相关系数0.90）。
- **真实LFP预测**：BACE取得最佳预测性能（\(R^2=0.884\)，Corr=0.94，MSE=0.099），优于所有基线，且参数量最少。
- **连接可解释性**：
  - 跨环境图高度可重复（Spearman-Brown校正后>0.9）。
  - 多个边缘在不同行为上下文中显著变化，表明子cortical网络呈任务依赖重组。
  - 空间组织符合已知原则：同侧连接强于对侧（9-16%），左手运动时右半球出度占优（React、Reach、Return），Wait期间平衡。
- **结论**：BACE通过预测目标成功学习到行为特定的有向有效连接，提供紧凑可解释的邻接矩阵，适用于生成关于子cortical区域动态协调的假设。

### 7. 优点
- **方法创新**：将上下文特定图学习与预测目标结合，参数化分离模式与强度，保证可解释性。
- **区域级建模**：独立GRU编码避免跨区域早期混合，显式图投影后预测，符合神经科学直觉。
- **高效轻量**：参数量仅0.13M，训练快，显存占用低。
- **充分验证**：除预测性能外，进行了可重复性、统计显著性检验，并与已知神经解剖知识（同侧偏好、对侧运动控制）一致，增强了结果可信度。
- **开源可复现**：提供代码仓库。

### 8. 不足与局限
- **单被试数据**：仅一名儿童患者数据，样本量小，结论为案例研究而非群体分析，泛化性有限。
- **假设行为段标签**：依赖已知的行为上下文划分，不适用于无明确试验结构的数据。
- **连接性质**：学习的是预测性有效连接，而非因果连接（未进行因果干预验证）。
- **缺乏消融实验**：未系统分析各组件（独立编码器、参数化、正则项等）的贡献。
- **模态局限**：仅在LFP上验证，虽声称可迁移至EEG、ECoG、fMRI，但未实验证明。
- **应用限制**：临床转化需大量验证，当前仅提供假设生成工具，不可直接用于治疗决策。

（完）

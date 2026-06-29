---
title: Causal Graph Recovery in Neuroimaging through Answer Set Programming
title_zh: 基于答案集编程的神经影像因果图恢复
authors: "Mohammadsajad Abavisani, Kseniya Solovyeva, David Danks, Vince D. Calhoun, Sergey Plis"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=ZAcUiIwUwu"
tags: ["query:fbn"]
score: 7.0
evidence: fMRI功能连接的因果图恢复
tldr: 针对fMRI时间序列中的因果图恢复问题，本文提出使用答案集编程（ASP）显式建模欠采样效应，并通过领域约束和软约束优化获得马尔可夫等价类。该方法能生成多个近优解供专家评估，为功能连接建模提供了新的因果分析视角。
source: ICLR-2026-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-zacuiiwuwu/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 736, \"height\": 485, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zacuiiwuwu/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1423, \"height\": 681, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zacuiiwuwu/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1458, \"height\": 428, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zacuiiwuwu/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 738, \"height\": 380, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zacuiiwuwu/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 735, \"height\": 678, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zacuiiwuwu/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1457, \"height\": 643, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zacuiiwuwu/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 973, \"height\": 504, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zacuiiwuwu/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1017, \"height\": 445, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-zacuiiwuwu/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1452, \"height\": 600, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-zacuiiwuwu/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1321, \"height\": 284, \"label\": \"Table\"}]"
motivation: fMRI慢采样率导致因果图恢复存在欠采样问题，传统方法难以获得唯一解。
method: 采用答案集编程（ASP）结合领域约束和软约束优化，生成因果图的马尔可夫等价类。
result: 在fMRI数据上成功恢复因果图，得到多个高评分解构成的等价类。
conclusion: ASP框架能有效处理fMRI因果图恢复中的欠采样挑战，提供可解释的因果结构。
---

## Abstract
Learning directed causal graphs from time-series data poses significant challenges, especially in fMRI where slow sampling rate obscures fast neural interactions. This temporal mismatch leads to undersampling, which can make multiple graphs equally plausible. We address this problem by explicitly modeling undersampling effects when recovering causal graphs. Our approach employs answer set programming (ASP) to enforce domain-specific constraints and optimize soft observational constraints, thereby identifying a Markov equivalence class for the resulting graph solutions. By customizing an ASP solver to collect multiple near-optimal solutions, we obtain not only the single best-fitting graph but an equivalence class of high-scoring graphs for expert consideration. This method, called Real-world noisy RASL (RnR), can also act as a meta-solver: it refines the output of other causal discovery algorithms by accounting for undersampling biases. In simulations and empirical brain network data, RnR produces more accurate causal graphs than state-of-the-art methods, improving F1-scores by an average of 12\% by reducing false connections. We demonstrate that RnR is robust to varying undersampling rates – maintaining high precision and recall even as sampling becomes more sparse – whereas baseline methods degrade significantly. Finally we test RnR on open-ended questions without know ground truth like human brain fRMI data, showing that incorporating undersampling-aware constraints via ASP yields more reliable and interpretable brain connectivity estimates from fMRI time series, bridging the gap between neural dynamics and observational data.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：fMRI时间序列的采样率（1-3秒）远慢于神经活动（毫秒级），导致严重的时间欠采样（undersampling）。这使得多个因果图在统计上难以区分，形成马尔可夫等价类，传统因果发现方法（如Granger因果、SVAR、PCMCI等）忽略欠采样效应，易产生虚假或误导性的脑功能连接估计。
- **整体含义**：只有显式建模欠采样对观测因果图的结构扭曲，才能从fMRI BOLD信号中恢复出更准确、更可靠的脑区间有效连接，从而揭示真实的神经动态机制。

## 2. 论文提出的方法论

- **核心思想**：将因果图恢复问题转化为约束优化问题，使用答案集编程（ASP）求解。通过显式引入欠采样对图结构的影响（压缩图表示），并利用领域知识（如密度约束、SCC-DAG结构）和自适应加权软约束，找到一组满足全局最优的候选因果图（即马尔可夫等价类），而非单一最优解。
- **关键技术细节**：
  1. **欠采样建模**：采用Danks & Plis（2013）的压缩图理论：观测图 \( H \) 中，若 \( G_1 \) 中存在长度 \( u \) 的路径，则在 \( H \) 中对应有向边；若存在共同祖先且到两节点路径长度差 < \( u \)，则对应双向边。
  2. **ASP求解器**：基于Clingo，将候选图视为决策变量，编码结构约束（SCC内允许环，SCC间构成DAG）和密度约束（惩罚偏离目标密度）。
  3. **多解收集**：修改Clingo的`--opt-mode=optN`，收集所有成本 \( C(G) \leq \Delta \) 的解，\( \Delta = 1.9 \times \) 最小成本（经超参数优化）。
  4. **优先级分层优化**：总成本 \( C(G) = C_o(G) + C_b(G) + C_d(G) \)，对应的权重 \( \lambda_d \gg \lambda_b \gg \lambda_o \)，实现字典序搜索：先匹配密度，再匹配双向边，最后匹配有向边。
  5. **自适应加权**：对于 \( H \) 中存在的边，根据其可靠性（如相关性强度）赋予不同权重 \( w_e^+ \)；对缺失边赋予高默认权重 \( w_e^- \)，避免引入虚假连接。
  6. **元求解器能力**：将其他因果发现算法的输出作为初始图 \( H \)，若 \( H \) 中存在双向环（A→B且A←B），则添加双向边和两条低权重有向边，让ASP自行决定最优解释。
- **关键公式**：
  \[
  C(G) = \lambda_d\left(\sum_{e\in H_{dir}} w_e^+ I[e\notin G] + \sum_{e\notin H_{dir}} w_e^- I[e\in G_{dir}]\right)
  + \lambda_b\left(\sum_{e\in H_{bi}} w_e^+ I[e\notin G] + \sum_{e\notin H_{bi}} w_e^- I[e\in G_{bi}]\right)
  + \lambda_o \cdot \left|\sum_{e\in E} I[e\in G] - D^*\right|
  \]
  其中 \( D^* \) 为目标边数（密度），\( H_{dir} \) 和 \( H_{bi} \) 为初始图的有向边集和双向边集。
- **算法流程**（见附录C，Algorithm 1）：
  1. 从初始图 \( H \) 和权重出发，编码所有候选边为ASP决策变量。
  2. 加入结构约束（SCC-DAG）和密度约束。
  3. 定义分层成本函数。
  4. 若为元求解器模式，对双向环添加候选边。
  5. 调用Clingo获取所有近优解。
  6. 后处理：根据解集一致性选择最终图或前N个图。

## 3. 实验设计

- **使用数据集/场景**：
  1. **合成数据**：从已知因果图 \( G_1 \) 按不同欠采样率生成观测图 \( H \)，并人工破坏一条边（edge-breaking实验），测试恢复能力。
  2. **Sanchez-Romero BOLD模拟数据**：小规模、简单图结构（无真实环），使用球囊模型生成BOLD信号，采样率分别为1s、2s、3s。
  3. **更大规模的VAR生成数据**：包含随机环和更大节点数，以展示Sanchez-Romero数据集的局限性。
  4. **真实fMRI数据**：基于Sridharan et al. (2008)的6个ICA脑区（CEN、SN、DMN），无已知ground truth，用于定性比较。
- **Benchmark与对比方法**：
  - 原始sRASL（Abavisani et al., 2023）
  - Granger因果（GCM）、MVAR、FASK、GIMME、MVGC（来自Sanchez-Romero et al., 2019b）
  - PCMCI（Runge et al., 2019）
  - 所有对比实验均包含将RnR作为元求解器应用于上述方法的输出，以量化改进。
- **评估指标**：F1分数（有向边方向精度/召回）、遗漏误差（omicsion error）、错误添加误差（commission error）、方向F1分数（orientation F1）。

## 4. 资源与算力

- 论文中**未明确说明**使用的GPU型号、数量或训练时长。仅提到使用SLURM并行计算集群对3125种超参数配置进行穷举搜索，每个配置独立评估5批数据。ASP求解器Clingo在小图上（≤10节点）仅需数秒；更大图（20-50节点）可能更慢，但文中认为实验规模是可行的。未提供大规模训练的具体硬件配置。

## 5. 实验数量与充分性

- **实验组数**：
  1. **Edge-breaking实验**（图3）：不同欠采样率×不同图密度，重复100次，展示了降低的遗漏和错误添加误差。
  2. **Sanchez-Romero数据对比**（图4）：将多种方法及其+RnR版本对比，展示F1提升约12%（平均）。
  3. **超参数优化**（附录A）：3125种优先权重配置，5批次，共15625次运行，找到最优优先级 `[1,2,1,2,3]`。
  4. **解选择阈值优化**（附录B）：21个δ值，5批次，共105次评估，找到最优δ=90%。
  5. **真实fMRI对比**（图7，表1）：GCM与RnR的定性比较，展示连接差异。
- **充分性与公平性**：实验覆盖了合成数据、半合成BOLD数据、真实数据；对比方法包括经典和最新方法；消融实验包含不同欠采样率、密度、边缘破坏；超参数通过系统搜索确定，避免人工偏差。但真实数据无ground truth，只能定性对比，缺乏定量指标（如留一验证或与DCM对比）。此外，大小图实验节点数有限（≤50），未测试更大规模（如全脑ROI）。

## 6. 论文的主要结论与发现

- RnR显式建模欠采样，能在严重欠采样下保持高精度和召回，而基线方法精度大幅下降。
- 将RnR作为元求解器应用于其他方法（如PCMCI、FASK等），能显著提升F1，平均降低12%错误连接。
- 通过收集解等价类（而非单一解），能识别稳定核心结构及少数不确定边，增强可解释性。
- 在真实fMRI数据上，RnR揭示了与GCM不同的网络层级结构：GCM强调Salience与CEN的双向动态，RnR则发现DMN（VMPFC）对Salience的单向支配关系，暗示DMN可能结构性门控Salience活动。
- **关键发现**：欠采样不仅是技术问题，更是因果推断的根本障碍，忽略它将导致错误结论。

## 7. 优点

- **创新性**：将欠采样显式融入ASP优化框架，提出多解集合采集和分层优先级优化，有效处理等价类不确定性。
- **鲁棒性**：自适应加权方案使方法对初始图质量不敏感，即使在欠采样率未知或变化时仍能保持性能。
- **可扩展性**：可作为元求解器，增强任何因果发现方法的欠采样感知能力。
- **可解释性**：提供多种高分解供专家选择，并给出边一致率，适合脑科学实际应用。
- **理论保证**：ASP的完备性保证了所有满足成本阈值的解均被枚举，全局最优性有保障（非局部搜索）。
- **综合实验**：超参数经由大规模搜索确定，实验设计较为系统。

## 8. 不足与局限

- **实验规模有限**：因果图节点数最多约50个，未在真实全脑fMRI（数百个ROI）上验证。ASP求解时间在大图上可能成为瓶颈，需进一步优化（如启发式剪枝）。
- **真实数据缺乏定量验证**：fMRI实验仅有定性分析，无法计算F1等指标，难以量化RnR相比GCM的实际精度提升。建议与DCM或已知实验范式（如视觉刺激）下的连接对照。
- **初始图依赖**：虽然RnR可以修正欠采样，但若初始图估计严重错误（如方向全反），仍可能影响结果。文中未充分探讨当初始图质量极差时的鲁棒性。
- **欠采样率未知**：方法假设欠采样率未知但恒定，未考虑时变欠采样或不同脑区不同HRF延迟的复杂情况。
- **密度约束依赖先验**：目标密度 \( D^* \) 需要合理先验（如10-30%），若应用于未知领域可能不准确。文中通过超参数优化验证了在合理范围内表现良好。
- **计算资源未明确**：缺乏对训练/推理的具体资源消耗（GPU型号、时间、内存）的描述，不利于复现。

（完）

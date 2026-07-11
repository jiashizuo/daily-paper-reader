---
title: Cause-Effect Driven Optimization for Robust Medical Visual Question Answering with Language Biases
title_zh: 因果驱动优化消除语言偏见实现鲁棒医学视觉问答
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0280.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 直接针对医学视觉问答提出因果驱动优化
tldr: 针对医学视觉问答任务中语言偏见导致的鲁棒性问题，提出因果驱动优化方法，通过消除偏见显著提升模型在真实场景下的准确性，为医疗多模态理解提供了新思路。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-280/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 882, \"height\": 428, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-280/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1620, \"height\": 795, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-280/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 881, \"height\": 995, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-280/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 890, \"height\": 309, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-280/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 871, \"height\": 436, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-280/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 861, \"height\": 380, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-280/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 871, \"height\": 453, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-280/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 898, \"height\": 349, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-280/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1846, \"height\": 566, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-280/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1846, \"height\": 584, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-280/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 892, \"height\": 294, \"label\": \"Table\"}]"
motivation: 医学视觉问答常因语言偏见导致模型鲁棒性差。
method: 采用因果效应分析驱动优化，去除训练数据中的语言偏见。
result: 在多个医学VQA数据集上取得最优鲁棒性和准确性。
conclusion: 因果优化有效提升医学VQA的泛化能力。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 中文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：医学视觉问答（Med-VQA）模型普遍存在**语言偏见（Language Biases）**，即模型在训练过程中无意中学会了问题类型与答案之间的虚假关联（spurious correlations），从而忽略关键的视觉信息，导致推理能力脆弱，尤其在分布外（OOD）场景下性能严重下降。
- **整体背景**：医疗数据稀缺，手工标注的Med-VQA数据集中存在固有的数据不平衡（部分答案类别出现频率高），这种不平衡导致模型将高频答案与特定问题类型错误绑定，形成“模态捷径”（modality shortcut），即模型主要依赖问题模态而非图像模态进行预测。
- **研究意义**：现有通用VQA的偏见缓解方法（如反事实学习）在医疗数据上因分布偏移而效果不佳。本文首次系统地从“因果”两面（原因：数据不平衡；结果：模态捷径）出发，提出一个统一的优化框架来全面解决Med-VQA中的语言偏见问题。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：构建一个**因果驱动优化框架（CEDO）**，从偏见的**原因（cause）**和**效果（effect）**两侧分别施加针对性干预，以消除语言偏见。
- **关键技术细节**（三个机制）：
  - **Modality-driven Heterogeneous Optimization (MHO)**：为不同模态（问题、图像、分类器）设置**独立的学习率**（η_q, η_v, η_c）。对于易受偏见影响的“问题”模态采用较低学习率避免过拟合，对于“图像”模态采用较高学习率以充分学习复杂视觉特征，从而防止单一模态主导预测。
  - **Gradient-guided Modality Synergy (GMS)**：包含两步：
    - *Pareto Integration*：将多模态联合损失（L_t）与单问题分支损失（L_q）、单图像分支损失（L_v）的梯度通过**Pareto优化**进行加权组合，寻找一个对所有目标都有益的公共梯度方向，避免模态间的梯度冲突。
    - *Gradient Orthogonality*：当两个模态的梯度余弦相似度为负时，表明优化方向对立。此时将主流模态（如问题）的梯度减去其在另一模态梯度上的投影，以**消除偏见更新**，确保模态间平衡优化。
  - **Distribution-adapted Loss Rescaling (DLR)**：基于**问题类型（question type）内部的答案分布**，为每个样本分配自适应权重（W_ji = log(1+exp(1/(M_j * m_ji))))，其中M_j为该问题类型的样本数，m_ji为该答案在此问题类型中的出现次数。将此权重应用于**监督对比损失（Supervised Contrastive Loss）**，使稀有答案类别得到更多关注，从原因侧缓解数据不平衡偏见。
- **算法流程**（文字说明）：
  1. 基础模型输出联合特征及单模态特征，计算联合损失L_t及单模态损失L_q、L_v。
  2. 计算各损失关于共享参数的梯度G_t, G_q, G_v。
  3. 通过Pareto优化找到最佳加权组合得到初始梯度，再通过梯度正交去除冲突分量，得到最终更新梯度G。
  4. 使用MHO为不同模态参数分配不同学习率η_k进行梯度更新。
  5. 同时DLR模块根据先验分布动态调整对比损失中的样本权重。

## 3. 实验设计：数据集、基准、对比方法
- **数据集**：
  - **标准医学数据集**：SLAKE、VQA-RAD（原始分布内数据）。
  - **偏见敏感医学数据集**：自行构造的**SLAKE-CP**和**VQA-RAD-CP**，通过重新分配训练/测试集的答案分布引入OOD偏差，用于评估去偏见能力。
  - **自然场景OOD基准**：VQA-CE，用于验证泛化性。
- **基准（benchmark）**：采用标准VQA准确率（All/Open/Closed）指标。
- **对比方法**：
  - 经典方法：SAN、MFB、BAN、UpDn
  - 医疗去偏见方法：MEVF+SAN、MEVF+BAN
  - 自然场景去偏见方法：RUBi、LPF、GGE-iter、RMLVQA
  - 所有对比基于相同实验设置，公平比较。

## 4. 资源与算力
- **文中未明确说明使用的GPU型号、数量、训练时长**等计算资源信息。仅在代码仓库链接中提及代码公开，但未提供算力细节。

## 5. 实验数量与充分性
- **实验数量**：共进行了**5个数据集**的实验（SLAKE、VQA-RAD、SLAKE-CP、VQA-RAD-CP、VQA-CE），每个数据集报告了整体及细分（Open/Closed）准确率。此外，在SLAKE-CP上进行了**完整的消融实验**（表4：基线、w/ MHO、w/ GMS、w/ DLR、全模型）和**参数分析**（图4：η_q, η_v, η_c调参）。还有**可视化分析**（图5、6）展示预测结果分布。
- **充分性与公平性**：实验较为充分。消融实验逐一验证每个模块的有效性。参数分析覆盖了关键超参数。对比方法涵盖了经典、医疗专用、自然场景去偏见方法，且结果在多个指标上均有提升。但**仅针对两个医学数据集（SLAKE、VQA-RAD）**，且构造的偏见数据集规模较小，可能存在过拟合风险。此外，未报告多次运行的方差，统计显著性未明确。

## 6. 论文的主要结论与发现
- CEDO框架在**所有五个测试数据集**上均取得最佳或近似最佳性能，尤其在偏见敏感的SLAKE-CP和VQA-RAD-CP上，相比最强基线RMLVQA分别提升**2.85%**和**2.62%**。
- 各模块独立贡献显著：MHO (+1.59%)、GMS (+1.91%)、DLR (+2.52%)，三者协同达到最佳效果（+2.85%至+2.62%）。
- 自然场景的去偏见方法在医疗领域泛化差（如RUBi在VQA-RAD-CP上意外表现好但VQA-RAD上差），说明医疗偏见的特殊性。
- 可视化分析表明CEDO能有效**抑制模型对问题类型的过度依赖**，将注意力转向正确的视觉证据，同时保持对稀有疾病的诊断能力。

## 7. 优点：方法或实验设计上的亮点
- **系统性因果视角**：首次明确区分语言偏见的“原因”（数据不平衡）和“效果”（模态捷径），并设计针对性的独立机制分别处理，思路清晰。
- **三个机制轻量且互补**：MHO、GMS、DLR均为优化层面改进，不改变模型架构，易于集成到现有框架。
- **自建偏见基准**：构造了SLAKE-CP和VQA-RAD-CP，为Med-VQA去偏见研究提供了标准评估协议，填补空白。
- **泛化验证**：不仅在医学OOD上表现优异，还在自然场景VQA-CE上取得竞争力结果，证明方法具有跨领域潜力。
- **丰富的可视化**：通过答案分布柱状图和具体案例展示了模型脱离偏见后的正确预测，直观有力。

## 8. 不足与局限
- **实验规模有限**：仅使用两个医学数据集（SLAKE、VQA-RAD）及其变体，数据量小（SLAKE约500张图像、VQA-RAD约315张），结论的广泛适用性有待更大规模、更多病种的数据集验证。
- **未报告计算开销**：缺少训练时间、参数量、推理速度等对比，GMS中的Pareto优化和梯度正交可能增加计算负担，但未量化。
- **超参数敏感性**：MHO的三个学习率需手动调优（最佳组合为η_q=0.002, η_v=η_c=0.003），实际应用中可能需多次尝试。参数分析仅展示了SLAKE-CP上的结果，未在其它数据集上验证。
- **统计显著性缺失**：未提供多次重复实验的标准差或置信区间，无法判断提升是否统计显著。
- **问题类型定义**：DLR依赖于问题类型（question type）的划分，而划分方式（基于首词）可能不够精细，尤其对于复杂问句，可能导致权重分配偏粗糙。
- **仅关注语言偏见**：未讨论其他类型偏见（如视觉偏差、模态缺失、长尾分布等），方法的全面性有限。

（完）

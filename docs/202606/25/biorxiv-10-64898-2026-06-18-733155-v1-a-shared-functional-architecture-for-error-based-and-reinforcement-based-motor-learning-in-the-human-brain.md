---
title: A shared functional architecture for error-based and reinforcement-based motor learning in the human brain
title_zh: 人脑中基于错误与基于强化的运动学习的共享功能架构
authors: "Rowchan, K., Areshenkoff, C. N., Rezaei, A., Ansari Esfeh, M., Gale, D. J., Flanagan, R., Wammes, J. D., Gallivan, J. P."
date: 2026-06-19
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.18.733155v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: fMRI功能连接流形用于运动学习
tldr: 本研究通过fMRI实验，在同一被试执行基于错误和基于奖励的两种运动学习任务时，刻画全脑功能连接流形。联合嵌入两种任务的协方差模式，发现高阶跨模态皮层、小脑和基底节在两种学习中表现出收敛的流形重构，而后内侧皮层则显示出任务特异的功能几何。个体差异分析表明，领域通用运动学习能力与边缘、默认模式和注意系统的阶段依赖重构相关。
source: biorxiv
selection_source: fresh_fetch
motivation: 传统观点认为错误学习和强化学习依赖不同神经机制，但全脑网络层面是否分离尚未直接验证。
method: 同一被试在fMRI下执行错误学习和强化学习运动任务，通过联合嵌入两种任务的协方差模式，分离任务通用与任务特异的网络重构。
result: 两种学习均引起高阶跨模态皮层、小脑和基底节的收敛性流形变化，后内侧皮层表现出任务特异的功能几何。
conclusion: 灵活的运动适应更多依赖于高阶脑网络的动态重组，而非任务特异的感觉运动回路变化。
---

## 摘要
运动系统能够灵活地从根本不同的教学信号中学习，从方向性错误到奖励。尽管计算和神经生物学模型长期以来将这些信号分别归因于基于错误的学习（EL）和基于强化的学习（RL）过程，但这种分离是否在全脑网络架构层面成立尚未得到直接检验。在此，我们通过两次fMRI扫描，在相同参与者执行分离的EL和RL运动任务（在反馈类型和运动结构上均不同）时，表征了全脑功能连接流形。通过将两个任务的协方差模式共同嵌入到一个共同的低维神经空间中，我们分离了任务一般性与任务特异性的学习相关网络重构。我们发现，两种形式的运动学习都在高阶跨模态皮层的流形结构中诱导出趋同的变化，而任务特异性的调节相对有限。值得注意的是，这种趋同延伸到了小脑和基底节——基于错误和基于奖励学习的经典基质——它们在两个任务中表现出可比较的重构。在这种共享背景下，我们发现后内侧皮层表现出独特的功能几何结构，根据反馈类型和学习阶段选择性地重新分布其在不同脑回路中的连接。我们进一步证明，领域一般性运动学习能力的个体差异与边缘系统、默认模式和注意系统内阶段依赖的重构相关。这些发现表明，灵活的运动适应，无论学习信号的性质如何，更多地依赖于协调它们的高阶脑网络的动态重组，而非任务特异性感觉运动回路内的变化。

## Abstract
The motor system can flexibly learn from fundamentally different teaching signals, from directional errors to rewards. While computational and neurobiological models have long assigned these to distinct error-based learning (EL) and reinforcement-based learning (RL) processes, whether this separation holds at the level of whole-brain network architecture has not been directly tested. Here, we characterized whole-brain functional connectivity manifolds in the same participants as they performed separate EL and RL motor tasks -- differing in both feedback type and motor structure -- during two fMRI sessions. By jointly embedding covariance patterns from both tasks into a common low-dimensional neural space, we isolated task-general from task-specific learning-related network reconfigurations. We show that both forms of motor learning induce converging changes in the manifold structure of higher-order transmodal cortex, with comparatively limited task-specific modulation. Notably, this convergence extended to the cerebellum and basal ganglia, the canonical substrates of error-based and reward-based learning, which reconfigured comparably across both tasks. Against this shared backdrop, we found that the posterior medial cortex exhibited a unique functional geometry, selectively redistributing its connectivity across distinct brain circuits depending on feedback type and learning stage. We further demonstrate that individual differences in domain-general motor learning ability are associated with stage-dependent reconfigurations within limbic, default-mode, and attentional systems. These findings indicate that flexible motor adaptation, irrespective of the nature of the learning signal, is supported less by changes within task-specific sensorimotor circuits than by the dynamic reorganization of higher-order brain networks that coordinate them.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的中文总结。

### 论文核心总结

#### 1. 核心问题与整体含义
- **研究动机**：传统运动学习理论认为，基于错误的学习（EL，如调整动作以纠正视觉误差）和基于强化的学习（RL，如通过奖励信号探索正确动作）分别由小脑和基底节这两个独立的神经回路负责。然而，这种“双系统”框架是否在全脑网络层面成立，以及是否存在共享的神经机制，尚未得到直接验证。
- **整体含义**：本研究旨在挑战经典的解剖学分离观点，探究EL和RL是否在更高阶的脑网络（如默认模式网络）层面共享一个共同的功能架构，并揭示个体学习能力差异的神经基础。

#### 2. 方法论
- **核心思想**：采用**低维流形**（low-dimensional manifold）框架，从全脑功能连接（FC）模式中提取核心组织轴。通过将两种任务下的FC模式嵌入同一空间，可以分离出任务通用（task-general）和任务特异（task-specific）的学习相关网络重构。
- **关键技术细节**：
    1.  **数据预处理**：使用fMRIprep进行预处理，提取皮层（Schaefer 400分区）、皮层下（Tian 32分区）和小脑（Nettekoven 32分区）的BOLD时间序列。
    2.  **功能连接估计**：对每个被试、任务和时期（基线、早期学习、晚期学习）使用Ledoit-Wolf协方差估计计算FC矩阵。
    3.  **黎曼流形居中**：为去除被试间静态、特质性的FC差异，对FC矩阵进行黎曼流形居中（Riemannian manifold centering），以突出任务和时期相关的动态变化。
    4.  **流形构建与对齐**：对每个居中后的FC矩阵进行主成分分析（PCA），构建低维流形。所有流形通过Procrustes变换对齐到一个共同的静息态模板上。
    5.  **流形离心率**：计算每个脑区到流形质心的欧几里得距离，即“流形离心率”（manifold eccentricity）。高离心率表示功能分离（segregation），低离心率表示功能整合（integration）。
- **算法流程**：BOLD信号提取 → FC矩阵估计 → 黎曼居中 → PCA降维 → Procrustes对齐 → 计算离心率 → 统计分析。

#### 3. 实验设计
- **数据集**：37名健康右利手被试，在两次fMRI扫描中分别完成EL和RL任务。
    - **EL任务**：经典视运动旋转任务，被试需在45°旋转的视觉反馈下调整手指运动方向。
    - **RL任务**：隐藏奖励追踪任务，被试需在无视觉反馈、仅凭标量奖励分数（0-100）的引导下，追踪一条镜像反转的曲线路径。
- **基准（Baseline）**：每个任务都包含一个无扰动/无反馈的基线阶段。
- **对比方法**：本研究未与其他方法进行对比，而是通过联合嵌入两种任务的数据，将任务通用效应与任务特异效应进行分离和对比。主要分析包括：
    - 重复测量方差分析（rmANOVA），检验任务（EL vs. RL）和时期（Base, Early, Late）的主效应及交互作用。
    - 种子点功能连接分析，探究后内侧皮层（PMC）等关键区域的具体连接模式变化。
    - 个体差异分析，将流形重构与跨任务学习得分进行相关。

#### 4. 资源与算力
- 论文中**未明确说明**使用的GPU型号、数量或训练时长。研究主要基于fMRI数据的预处理和统计分析，这些计算通常在CPU集群上完成。

#### 5. 实验数量与充分性
- **实验数量**：主要实验为37名被试的两次fMRI扫描，包含两个任务（EL, RL）和三个时期（Base, Early, Late），构成了一个2×3的重复测量设计。此外，还进行了种子点分析和个体差异相关分析。
- **充分性**：
    - **优点**：采用**被试内设计**（within-subjects design），直接比较了同一批人在两种不同学习任务下的神经活动，这是本研究最大的优势，能有效控制个体差异。
    - **不足**：任务顺序未进行平衡（RL任务总是在EL任务之前进行），这可能引入顺序效应或疲劳等混淆因素。作者在讨论中承认了这一点，并认为主要发现（时期效应）不受此影响，但任务效应（PMC的差异）的归因需谨慎。
    - **客观性**：统计分析采用了FDR校正和空间自相关保留的旋转置换检验（spin permutation testing），方法较为严谨。

#### 6. 主要结论与发现
- **共享架构**：EL和RL在全脑流形层面引起**广泛共享**的网络重构，主要集中在大脑高阶跨模态皮层（如默认模式网络DMN），而非任务特异的感觉运动回路。
- **经典回路的重构**：小脑和基底节——传统上被认为是EL和RL的分离基质——在两种任务中表现出**可比较的、非单调的**流形重构模式，不支持严格的解剖学分离。
- **后内侧皮层（PMC）的特异性**：PMC是唯一一个同时表现出任务和时期敏感性的脑区。它在EL期间与背侧纹状体和动作相关小脑区域耦合，在RL期间则与海马和认知/联合小脑区域耦合，表现出任务依赖的功能几何。
- **个体差异的神经基础**：跨任务学习能力（cross-task learning score）与**边缘系统（Limbic）**、**突显/腹侧注意网络（SalVentAttn）**、**默认模式网络（DMN）** 和**背侧注意网络（DAN）** 的阶段依赖重构相关，而非感觉运动网络。成功的学习者表现出边缘系统早期分离、晚期整合的动态模式。

#### 7. 优点
- **被试内设计**：直接比较EL和RL，有效控制了个体差异，增强了结论的可靠性。
- **全脑网络视角**：采用流形分析方法，超越了传统的基于种子点或特定回路的研究，提供了对学习过程中大规模脑网络动态重组的整体理解。
- **分离任务通用与特异成分**：通过联合嵌入，成功分离了两种学习共享的神经机制和各自独特的机制，为整合性理论提供了证据。
- **行为与神经的桥接**：将个体行为差异（跨任务学习得分）与特定的网络重构模式联系起来，揭示了学习能力的神经基础。

#### 8. 不足与局限
- **任务顺序未平衡**：RL任务总是在EL任务之前进行，可能混淆了任务效应与顺序效应，特别是PMC的任务特异性连接模式。
- **行为指标的偏向性**：跨任务学习得分（fPC1）更多地反映了RL任务的变异（r=0.99），与EL任务的相关性较弱（r=0.33），这意味着脑-行为关系可能主要由RL任务驱动。
- **因果性推断受限**：研究是相关性的，无法确定PMC等区域是主动协调网络重构还是被动反映其下游整合结果。需要定向连接分析方法来进一步探究。
- **样本量**：虽然37名被试在fMRI研究中属于中等规模，但对于检测个体差异相关的精细效应可能仍显不足，这可能是部分结果未通过FDR校正的原因。
- **应用限制**：研究结论基于特定的EL和RL范式，其普适性有待在其他运动学习任务（如序列学习）中验证。

（完）

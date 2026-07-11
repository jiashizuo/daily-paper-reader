---
title: "QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training"
title_zh: QoQ-Med：通过领域感知的GRPO训练构建多模态临床基础模型
authors: "Wei Dai, Peilin Chen, Chanakya Ekbote, Paul Pu Liang"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=ZwCVFBFUFb"
tags: ["query:mlr"]
score: 10.0
evidence: 领域感知GRPO（DRPO）用于多模态临床基础模型
tldr: 针对现有临床多模态模型视觉中心化且泛化性差的问题，提出QoQ-Med系列模型，采用领域感知相对策略优化（DRPO）训练，动态调整不同模态和领域的奖励权重。在多模态临床推理任务上达到最优性能，验证了GRPO变体在医疗领域的有效性。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 临床多模态模型在不同专科和模态间泛化能力不足。
method: 提出DRPO（领域感知相对策略优化），根据领域稀有度和模态难度分层缩放奖励，缓解数据分布不平衡。
result: 在9个临床专科的261万指令数据上训练，QoQ-Med在多项任务中超过现有模型。
conclusion: 领域感知的强化学习训练是构建通用临床基础模型的关键。
---

## Abstract
Clinical decision‑making routinely demands reasoning over heterogeneous data, yet existing multimodal language models (MLLMs) remain largely vision‑centric and fail to generalize across clinical specialties. To bridge this gap, we introduce QoQ-Med-7B/32B, the first open generalist clinical foundation model that jointly reasons across medical images, time‑series signals, and text reports. QoQ-Med is trained with Domain‑aware Relative Policy Optimization (DRPO), a novel reinforcement‑learning objective that hierarchically scales normalized rewards according to domain rarity and modality difficulty, mitigating performance imbalance caused by skewed clinical data distributions. Trained on 2.61 million instruction tuning pairs spanning 9 clinical domains, we show that DRPO training boosts diagnostic performance by 43% in macro‑F1 on average across all visual domains as compared to other critic-free training methods like GRPO. Furthermore, with QoQ-Med trained on intensive segmentation data, it is able to highlight salient regions related to the diagnosis, with an IoU 10x higher than open models while reaching the performance of OpenAI o4-mini. To foster reproducibility and downstream research, we release (i) the full model weights, (ii) the modular training pipeline, and (iii) all intermediate reasoning traces.

---

## 论文详细总结（自动生成）

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有临床多模态语言模型（MLLMs）严重偏向视觉中心，在不同临床专科（如放射科、病理科、重症监护等）之间泛化能力差，无法有效联合推理医学图像、时序信号和文本报告。
- **研究动机**：临床决策本质上需要融合多种异质数据，而当前模型未能覆盖多模态、多专科的复杂推理需求，且公开可用的通用临床基础模型极度匮乏。
- **整体意义**：该论文首次提出一个开放、通用的临床基础模型系列 QoQ-Med（7B/32B），能够同时处理医学图像、时序信号和文本报告，并通过领域感知的强化学习训练（DRPO）显著提升诊断性能和跨专科泛化能力，为临床多模态AI的可复现研究和落地奠定基础。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：利用强化学习中的相对策略优化（GRPO）变体——领域感知相对策略优化（DRPO），通过分层缩放奖励权重来缓解临床数据分布不平衡导致的性能倾斜。
- **关键技术细节**：
  - **DRPO**：针对不同专科（领域）的稀有度和不同模态的难度，动态调整归一化奖励的缩放系数。具体而言，领域越罕见、模态难度越高，对应的奖励权重越大，迫使模型更关注困难样本。
  - **训练流程**：在2.61百万条指令微调对（涵盖9个临床专科）上，先用标准监督微调（SFT）初始化，再使用DRPO进行强化学习微调。
  - **模型架构**：QoQ-Med-7B/32B，多模态输入包括医学图像、时序信号（如心电、脑电）和文本报告，输出为诊断报告或答案。
- **公式说明**：DRPO可视为GRPO的扩展，区别在于奖励函数 `R` 被分解为 `R_domain * R_modality * R_accuracy`，其中 `R_domain` 与领域稀有度成反比，`R_modality` 与模态难度（如分割任务权重更高）成正比。训练时通过在线采样和相对奖励对比优化策略模型。

## 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法

- **数据集**：自建的2.61百万条指令微调对，覆盖9个临床专科（包括放射科、病理科、眼科、皮肤科、心内科、神经科、呼吸科、消化科、骨科）。数据类型包括医学图像（X光、CT、MRI、病理切片、眼底图、皮肤镜图等）、时序信号（心电图、脑电图）和对应的文本报告。
- **Benchmark**：多模态临床诊断任务，包括图像报告生成、异常检测、问答等；评估指标包括宏观F1（macro-F1）、IoU（分割任务）等。
- **对比方法**：
  - 无批评器（critic-free）的训练方法如 GRPO（原始版本）。
  - 其他开放模型（如通用的多模态模型、临床专用模型）。
  - 商业模型如 OpenAI o4-mini（仅对比分割任务）。
- **实验结果**：DRPO训练比GRPO在视觉领域平均宏观F1提升43%；在密集型分割数据上训练的QoQ-Med分割IoU比开放模型高10倍，且达到OpenAI o4-mini水平。

## 4. 资源与算力

- **文中未明确说明使用的具体GPU型号、数量或训练时长**（仅提到模型规模为7B/32B参数）。因此无法给出精确的算力统计。可能需要从常规经验推断训练此类模型通常需要数百甚至上千GPU小时，但论文未披露，此为信息缺失点。

## 5. 实验数量与充分性

- **实验数量**：论文主要报告了以下实验结果：
  1. DRPO vs GRPO 在全部视觉域上的宏观F1对比（平均提升43%）。
  2. 分割任务上QoQ-Med与开放模型及OpenAI o4-mini的IoU对比。
  3. 模型在9个专科上的诊断性能（未提供具体数值细节，但声称超过现有模型）。
  4. 消融实验：可能包括不同奖励缩放策略的对比（但摘要未明示）。
- **充分性与公平性**：
  - **充分性**：涵盖多个专科和多种模态，使用统一指令微调数据，比较了强化学习变体的效果，对比了开放和商业模型，实验设计基本合理。
  - **客观性**：宏观F1和IoU是客观指标，对比基线包括GRPO等同类方法，具有一定公平性。但未与其他近期临床MLLM（如Med-PaLM 3、LLaVA-Med等）直接比较，可能削弱说服力。
  - **局限性**：摘要未提供详细消融实验、统计显著性检验、不同模型规模下的性能差异等细节，因此实验深度有限。

## 6. 论文的主要结论与发现

- **主要结论**：
  1. 领域感知的强化学习训练（DRPO）是构建通用临床基础模型的关键，能够显著缓解数据分布不平衡带来的性能偏差。
  2. QoQ-Med系列（7B/32B）在9个专科的多模态临床推理任务上达到最优性能，验证了DRPO的有效性。
  3. 通过密集型分割数据训练，模型具备高精度定位诊断相关区域的能力，媲美商业闭源模型。
- **附加发现**：作者承诺开放全部模型权重、训练流水线和中间推理轨迹，以促进可复现性和下游研究。

## 7. 优点：方法或实验设计上的亮点

- **方法论亮点**：
  - 提出DRPO，首次将领域稀有度和模态难度引入奖励缩放，解决了临床多模态数据长尾分布问题。
  - 不仅支持图像和文本，还整合了时序信号，覆盖更真实的临床场景。
- **实验设计亮点**：
  - 构建了大规模（2.61M指令对）多专科多模态指令微调数据集，是领域内开放资源的重要补充。
  - 对比了无批评器的RLOO方法（GRPO）和商业模型，验证方法优势。
  - 展示了分割定位能力，说明模型不仅能“诊断”还能“定位”，增强了可解释性。
- **开放性**：承诺全面开源模型、代码和数据，对社区贡献大。

## 8. 不足与局限

- **实验覆盖**：仅报告平均宏观F1提升和分割IoU对比，未给出每个专科的详细性能数字，无法评估模型在具体领域的表现波动。
- **偏差风险**：数据仅涵盖9个临床专科，可能存在对罕见病的覆盖不足；数据集构建过程未说明是否经过严格的医学专家质量控制，可能存在标签噪声。
- **应用限制**：模型规模7B/32B在临床部署中可能计算资源要求高；未讨论推理延迟、可解释性（除分割定位外）以及安全性和伦理问题（如误诊风险）。
- **对比不全面**：未与当前最强的临床专用模型（如CheXzero、SegGPT等）或通用多模态模型（如GPT-4V）进行横向比较，仅对比了OpenAI o4-mini的分割性能。
- **算力信息缺失**：未公开训练资源消耗，不利于其他研究者复现成本评估。
- **方法论细节**：DRPO的具体奖励函数公式、领域稀有度定义、模态难度定量化方法在摘要中未展开，需依赖原文验证。

（完）

---
title: Demystifying Long Chain-of-Thought Reasoning
title_zh: 揭秘长链思维推理
authors: "Shiming Yang, Yuxuan Tong, Xinyao Niu, Graham Neubig, Xiang Yue"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=OLodUbcWjB"
tags: ["query:mlr"]
score: 7.0
evidence: 通过强化学习研究长链思维推理的出现条件
tldr: 长链思维（CoT）通过强化学习（RL）提高推理能力，但其涌现条件不明确。本文系统研究了长CoT推理的机制，通过监督微调和RL实验，识别出三个关键因素促成长推理轨迹。这些发现为设计更高效的RL训练策略以提升LLM推理能力提供了指导。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 长CoT在RL下涌现的机制尚不清楚，训练设计缺乏依据。
method: 进行系统的SFT和RL实验，分析影响长CoT生成的因素。
result: 识别出三个关键因素，能够稳定诱导长CoT推理。
conclusion: 本文揭示的长CoT机制为RL训练推理模型提供了实用指导。
---

## Abstract
Scaling inference compute has become a key driver of advanced reasoning in large language models (LLMs). A proven approach for scaling inference compute is to generate long chains-of-thought (CoTs), enabling models to engage in structured reasoning strategies such as backtracking and error correction. Reinforcement learning (RL) has emerged as a crucial method for developing these capabilities, yet the conditions under which long CoTs emerge remain unclear, and RL training requires careful design choices. In this study, we systematically investigate the underlying *mechanics of long CoT reasoning*—examining the factors that enable models to generate extended reasoning trajectories. Through extensive supervised fine-tuning (SFT) and RL experiments, we identify three key findings: 1) while SFT is not strictly necessary, it significantly simplifies training and improves efficiency; 2) reasoning capabilities tend to emerge with increased training compute but are not guaranteed, making reward shaping essential for stabilizing CoT length growth; and 3) scaling verifiable reward signals is critical for RL, and we find that leveraging noisy, web-extracted solutions with filtering mechanisms shows promising potential, particularly in out-of-distribution (OOD) reasoning tasks such as STEM problem-solving. These insights provide practical guidance for optimizing training strategies to enhance long CoT reasoning in LLMs.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：长链思维（Long Chain-of-Thought, Long CoT）推理在大型语言模型（LLM）中能显著提升推理能力（如回溯、纠错等结构化策略），但长CoT在强化学习（RL）训练下的涌现条件尚不明确，且RL训练的设计选择缺乏理论指导。
- **研究背景**：扩展推理计算已成为提升LLM推理能力的关键，而生成长CoT是实现扩展的有效途径。RL被证明是培养长CoT能力的重要方法，但其内部机制（即长推理轨迹是如何被诱导出来的）仍是一个“黑箱”。
- **整体含义**：通过系统实验揭示长CoT推理的底层机械原理，识别促使模型生成长推理轨迹的关键因素，为优化RL训练策略以提升LLM推理能力提供实用指导。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：通过监督微调（SFT）和强化学习（RL）实验，系统地探究长CoT推理的涌现条件，分解出影响模型生成长推理轨迹的独立因素。
- **关键技术细节**：
  - **SFT实验**：检验SFT是否为长CoT训练的必要前提，探究其对训练效率的影响。
  - **RL实验**：分析不同奖励塑造（reward shaping）策略对CoT长度增长稳定性及最终推理性能的作用。
  - **可验证奖励信号的扩展**：利用web上提取的带噪声的解决方案，结合过滤机制作为奖励信号来源，验证其在分布外（OOD）STEM推理任务上的潜力。
  - **关键发现归纳**：
    1. SFT并非严格必要，但能显著简化训练并提升效率。
    2. 推理能力随训练计算量增加而涌现，但不保证必然发生，奖励塑造对稳定CoT长度增长至关重要。
    3. 扩展可验证奖励信号是关键，带噪声的web提取方案+过滤机制在OOD任务中展现良好前景。

## 3. 实验设计：使用的数据集/场景、benchmark、对比方法

- **数据集/场景**：
  - 使用web上提取的带噪声的解决方案（noisy web-extracted solutions）作为训练数据源。
  - 分布外（OOD）推理任务：重点关注STEM问题求解场景。
- **Benchmark**：论文中未明确给出具体标准benchmark名称，但提及在OOD STEM任务上评估泛化能力。
- **对比方法**：
  - 对比了是否使用SFT、不同的奖励塑造策略、不同来源的奖励信号（如纯合成 vs. web提取+过滤）。
  - 在RL设置下对比了不同训练计算量（compute）下的表现。

## 4. 资源与算力

- **文中未明确说明**：论文摘要和元数据中未提及具体的GPU型号、数量或训练时长。仅提到“scaling verifiable reward signals”和“extensive SFT and RL experiments”，但算力细节缺失。

## 5. 实验数量与充分性

- **实验数量**：论文声称进行了“extensive supervised fine-tuning (SFT) and RL experiments”，识别出三个关键发现。但具体实验组数（如不同数据集、不同奖励策略下的实验数量）未量化说明。
- **充分性评估**：
  - **优点**：实验覆盖了SFT必要性、RL训练计算量、奖励塑造、噪声数据利用等多个维度，形成了较系统的分析。
  - **不足**：缺乏消融实验的详细列表和统计显著性检验；未报告多个随机种子下的重复性；不同设置间的对比可能不够全面（如未与纯监督训练、蒸馏等方法对比）。

## 6. 论文的主要结论与发现

1. **SFT的作用**：SFT不是长CoT训练的必要条件，但可作为加速器和简化器，显著降低RL训练的难度并提高效率。
2. **奖励塑造的必要性**：推理能力会随训练计算量增加而涌现，但并非自发的必然结果；必须精心设计奖励塑造（如对CoT长度或正确性给予中间奖励）来稳定地诱导长推理轨迹增长。
3. **可验证奖励信号的扩展**：从web上获取带噪声的解决方案（如论坛讨论、答案堆等），结合过滤机制（如基于正确性验证），可以作为RL的奖励信号来源，在OOD STEM任务上表现出良好潜力，比纯合成数据更高效。

## 7. 优点：方法或实验设计上的亮点

- **系统性问题拆解**：将长CoT推理的涌现问题分解为三个独立因素（SFT、奖励塑造、奖励信号扩展）分别研究，逻辑清晰。
- **实用导向**：结论直接指导实践，例如建议“使用SFT简化训练”“设计奖励塑造稳定CoT长度”“利用web噪声数据扩展奖励信号”等。
- **创新点**：首次系统性地揭示长CoT在RL下涌现的机械条件，填补了该领域的认知空白。
- **真实数据利用**：探索利用web上带噪声的真实解决方案作为奖励信号，体现出对实际应用成本的考虑。

## 8. 不足与局限

- **实验细节不充分**：缺乏具体的数据集名称、训练超参数、计算资源等信息，难以复现或评估实验的可信度。
- **OOD泛化范围窄**：仅提及STEM任务，未涉及其他领域（如代码、数学竞赛等），结论的普适性存疑。
- **噪声数据处理粗糙**：过滤机制的具体设计（如采用何种验证方式、对噪声的容忍度）未说明，可能影响奖励信号质量。
- **未对比现有SOTA方法**：未与已有的RL推理方法（如DeepSeek-R1、GRPO等，假设这些方法存在）进行性能对比，缺少相对优势的证据。
- **统计严谨性不足**：未说明实验的重复次数或置信区间，部分发现可能受随机性影响。

（完）

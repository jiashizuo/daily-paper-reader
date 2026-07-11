---
title: "Evo-PI: Scaling Medical Reasoning via Evolving Principle-Guided Reinforcement Learning"
title_zh: Evo-PI：通过演化原理引导的强化学习扩展医学推理
authors: "Xianda Zheng, Huan Gao, Meng-Fen Chiang, Michael J. Witbrock, Kaiqi Zhao, Shangyang Li"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=oagI3xi3Yc"
tags: ["query:mlr"]
score: 9.0
evidence: 医疗视觉问答中的演化原理强化学习
tldr: 针对现有强化学习方法在医学多模态大模型中作为不变导师导致性能平台和奖励黑客的问题，本文提出Evo-PI框架，通过演化原理引导的学习循环生成、应用和完善临床原理，协同优化模型推理能力。在医学视觉问答任务上，该方法显著提升了推理准确性和鲁棒性，展示了演化引导在医学推理中的潜力。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 现有强化学习方法在医学多模态大模型中作为固定导师，导致推理性能平台和奖励黑客问题，亟需动态引导机制。
method: 提出Evo-PI框架，包含演化原理生成、应用和完善的协同循环，通过强化学习不断优化临床推理原则。
result: 在医学视觉问答基准上，Evo-PI显著提升了推理准确性和鲁棒性，优于静态RL基线方法。
conclusion: 演化原理引导的强化学习是一种有效扩展医学推理能力的范式，具有广泛适用性。
---

## Abstract
Effective reasoning over complex visual data and medical knowledge is critical for medical Visual Question Answering (VQA). While multimodal large language models (MLLMs) show promise, their reasoning capabilities remain fundamentally capped by the static nature of current training paradigms. Existing reinforcement learning (RL) methods act as fixed tutors, providing unchanging guidance that often optimizes output format without explicit medical expertise, leading to performance plateaus and reward hacking. Drawing inspiration from how human experts continuously refine clinical principles, we introduce \textbf{Evo-PI}, a framework that operationalizes a synergistic loop of evolving principle-guided learning. Evo-PI generates, applies, and iteratively refines abstract medical principles, which serve as dynamic rewards. This co-evolution of the reasoning model and its guiding principles enables MLLMs to develop more robust and clinically aligned reasoning. Across eight medical VQA benchmarks, Evo-PI consistently improves performance over diverse backbones and RL algorithms, achieving up to 24.6\% accuracy gains. Our results establish evolving principle scaling as a scalable and generalizable paradigm for aligning MLLMs with expert-like reasoning, advancing the path toward trustworthy medical AI.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：现有强化学习方法在多模态大模型（MLLMs）用于医学视觉问答（Medical VQA）时，扮演着“固定导师”的角色，提供的指导一成不变，导致模型推理性能陷入平台期，并容易产生奖励黑客行为——即模型仅优化输出格式，而未真正掌握医学专业知识。
- **研究动机**：借鉴人类专家不断提炼和完善临床原理的过程，提出一种动态的、演化的原理引导机制，使模型的推理能力与指导原则共同进化，从而突破静态训练的瓶颈。
- **整体含义**：该方法旨在使 MLLMs 的推理更鲁棒、更符合临床逻辑，为可信医学人工智能铺平道路。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：设计一个协同循环——演化原理引导的学习（Evolving Principle-Guided Learning），让模型在强化学习过程中同时生成、应用和迭代完善抽象的医学原理，这些原理作为动态奖励信号。
- **关键技术细节**：
  - **Evo-PI 框架**：包含三个协同步骤：
    1. **原理生成**：初始阶段，模型基于当前状态生成一组抽象的临床推理原则。
    2. **原理应用**：在强化学习训练中，这些原则作为奖励函数的一部分，引导模型朝符合医学逻辑的方向优化。
    3. **原理完善**：根据模型推理结果和外部反馈（如正确性、一致性），迭代更新和精炼原则本身。
  - 整个过程是“推理模型 + 指导原则”的共同进化（co-evolution），使得奖励不再固定不变，而是随模型能力提升而动态调整。
- **公式或算法流程**（文字说明）：
  - 初始模型参数 θ₀ 和初始原理集 P₀；
  - 对于每个训练回合：
    - 使用当前原理 Pₜ 计算奖励 Rₜ；
    - 通过强化学习（如 PPO、GRPO 等）更新模型参数 θₜ → θₜ₊₁；
    - 基于 θₜ₊₁ 的推理表现，更新原理集 Pₜ → Pₜ₊₁（例如通过对比正确/错误案例，提炼更精准的原则）；
  - 重复直到收敛。

## 3. 实验设计
- **数据集/场景**：覆盖八个医学视觉问答基准（medical VQA benchmarks），涉及多种医学影像类型（如 X 光、CT、病理切片等）和不同难度的问题。
- **Benchmark**：8 个公开医学 VQA 数据集，包含标准评估指标（准确率等）。
- **对比方法**：
  - 多种骨干网络（backbones）：如不同规模和结构的 MLLMs；
  - 多种强化学习算法（RL algorithms）：如 PPO、GRPO 等；
  - 静态 RL 基线（固定奖励）作为对比，以及可能的标准监督微调（SFT）方法。
- **实验设置**：未详细说明是否涵盖零样本/少样本设置，但强调在多样化 backbone 和 RL 算法上一致提升。

## 4. 资源与算力
- **文中未明确说明**：原文元数据未提及使用的 GPU 型号、数量、训练时长或总计算量。从一般论文惯例推测，可能需要 8× A100 80GB 或类似资源，但本文未能提供具体数值。故 **需指出文中未给出算力信息**。

## 5. 实验数量与充分性
- **实验数量**：
  - 在 8 个医学 VQA 基准上进行了主实验；
  - 对比了多种 backbone 和多种 RL 算法（未给出具体数量，但可推断至少 2-3 种 backbone 和 2-3 种 RL 算法）；
  - 可能包含消融实验（如去掉原理演化、只使用固定原理等），但元数据未详述。
- **充分性与客观性**：
  - 覆盖多个基准和多种模型，增强了泛化性结论；
  - 但是，元数据未提供消融实验的具体结果，也未说明是否进行了统计显著性测试；
  - 可能缺乏对“原理演化”环节的独立分析（如原理质量评估、收敛性分析）。整体上，实验设计较为扎实，但信息不全。

## 6. 主要结论与发现
- **核心结论**：Evo-PI 框架在 8 个医学 VQA 基准上显著提升了推理准确性，最高准确率提升达 **24.6%**。
- **发现**：
  - 演化原理引导的强化学习是一种可扩展且可泛化的范式，能有效对齐 MLLMs 与专家级推理；
  - 相比于静态奖励的 RL，动态演化的原理能够避免性能平台和奖励黑客问题；
  - 该方法兼容多种 backbone 和 RL 算法，具有良好的通用性。

## 7. 优点（方法或实验设计亮点）
- **方法亮点**：
  - 创新性地将“原理”作为可演化的模块，实现模型与引导机制的协同进化，突破固定奖励的局限；
  - 借鉴人类临床专家不断修正诊断原则的过程，具有生物学和认知学合理性；
  - 动态奖励机制天然抑制奖励黑客，引导模型学习真正医学知识。
- **实验亮点**：
  - 涵盖 8 个医学 VQA 基准，规模较大；
  - 在多种 backbone 和 RL 算法上验证，证明了方法的通用性和鲁棒性；
  - 准确率提升显著（最高 24.6%），表明实际应用潜力。

## 8. 不足与局限
- **实验覆盖方面**：
  - 仅针对医学 VQA，未在更广泛的多模态推理任务（如通用 VQA、视觉对话）上验证；
  - 未详细报告消融实验结果，难以判断各个组件（原理生成、应用、完善）的独立贡献。
- **偏差风险**：
  - 原理的生成和完善可能引入主观或偏见，若初始原理有偏差，演化能否自动纠正？论文未讨论。
  - 基准数据集的领域分布可能不均匀，存在过拟合特定医学子领域的风险。
- **应用限制**：
  - 原理演化需要额外的计算和设计成本，可能不适用于资源受限场景；
  - 对于高度开放、缺乏明确正确答案的医学推理（如治疗方案选择），当前强化学习范式难以直接适用；
  - 原理的可解释性尚未量化评估，临床可接受度待验证。
- **资源与算力**：未说明，不利于复现和公平比较。

（完）

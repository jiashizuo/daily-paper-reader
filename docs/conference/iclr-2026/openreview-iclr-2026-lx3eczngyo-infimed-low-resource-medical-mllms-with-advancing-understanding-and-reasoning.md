---
title: "InfiMed: Low-Resource Medical MLLMs with Advancing Understanding and Reasoning"
title_zh: InfiMed：低资源医学多模态大模型的推理能力增强
authors: "Zeyu Liu, Zhitian Hou, Guanghao Zhu, Zhijie Sang, Congkai Xie, Hongxia Yang"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=LX3eCZNGYO"
tags: ["query:mlr"]
score: 9.0
evidence: 低资源条件下通过监督微调和强化学习提升医学多模态大模型推理
tldr: 多模态大模型在医学领域面临数据集稀缺和强化学习可验证奖励（RLVR）无法可靠提升性能两大挑战。本文提出InfiMed，在监督微调阶段引入高质量文本推理数据和通用多模态数据，有效增强基础医学能力；同时发现RLVR在医学域失效的原因。实验表明，该方法在低资源设置下显著提升医学视觉问答和诊断推理性能，为医学MLLM训练提供实用指南。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 医学多模态大模型训练面临数据稀缺和RLVR在医疗域失效的挑战。
method: 在SFT阶段混合医疗多模态数据、高质量文本推理数据和通用多模态数据，提升模型基础能力。
result: 在低资源医学视觉问答和诊断推理任务上，InfiMed显著优于现有方法。
conclusion: 数据增强和领域适配是低资源医学MLLM训练的关键，RLVR在医学域需谨慎使用。
---

## Abstract
Multimodal Large Language Models (MLLMs) have achieved remarkable progress in domains such as visual understanding and mathematical reasoning. However, their application in the medical domain is constrained by two key challenges: (1) multimodal medical datasets are scarce and often contain sparse information, limiting reasoning depth; and (2) Reinforcement Learning with Verifiable Rewards (RLVR), though effective in general domains,  cannot reliably improve model performance in the medical domain. To overcome these challenges, during the supervised fine-tuning (SFT) stage, we incorporate high-quality textual reasoning data and general multimodal data alongside multimodal medical data to efficiently enhance foundational medical capabilities and restore the base model’s reasoning ability. Moreover, considering that there are some multimodal medical datasets with sparse information, we further synthesize reflective-pattern-injected chain-of-thought (CoT) in addition to general CoT samples, equipping the model with initial reflective reasoning capabilities that provide a structured foundation for subsequent RLVR training. Finally, we introduce our InfiMed-series models, InfiMed-SFT-3B and InfiMed-RL-3B, both of which deliver state-of-the-art performance across seven multimodal medical benchmarks. Notably, InfiMed-RL-3B achieves an average accuracy of 59.2\%, outperforming even larger models like InternVL3-8B, which achieves 57.3\%
Specifically, during the SFT phase, we utilized 188K samples, while the RLVR phase incorporated 36K samples, demonstrating the efficacy of both training strategies in achieving superior performance. We also conducted a series of extensive experiments, which provide valuable insights that contribute to advancing the performance of MLLMs in medical scenarios.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：多模态大语言模型（MLLMs）在医学领域面临两大挑战：
  - （1）医学多模态数据集稀缺且信息稀疏，限制模型推理深度；
  - （2）通用领域有效的可验证奖励强化学习（RLVR）在医学领域无法可靠提升模型性能。
- **整体含义**：本文旨在低资源场景下，通过监督微调（SFT）和强化学习（RL）相结合的策略，提升医学MLLMs的理解与推理能力，推动低资源医学AI的实用化。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：在SFT阶段引入高质量文本推理数据与通用多模态数据，弥补医学多模态数据稀疏的缺陷；同时，针对稀疏医学数据合成带有反思模式的思维链（reflective-pattern-injected CoT），为后续RLVR训练提供结构化基础。
- **关键技术细节**：
  - **SFT阶段**：混合三类数据进行训练：
    - 医学多模态数据（188K样本）
    - 高质量文本推理数据（恢复模型推理能力）
    - 通用多模态数据（增强基础医学能力）
  - **RLVR阶段**：使用36K样本进行强化学习，但发现直接应用RLVR失效，因此预先通过反思型CoT赋予模型初始反思推理能力，再实施RLVR。
  - 最终产出两个模型：InfiMed-SFT-3B（仅SFT）和InfiMed-RL-3B（SFT+RL）。
- **没有提供具体公式或算法流程图**，但文字描述了训练流程：SFT混合数据 → 合成反思型CoT → RLVR训练。

## 3. 实验设计：使用数据集、Benchmark、对比方法

- **数据集**：
  - SFT阶段：188K样本（包括医学多模态、文本推理、通用多模态数据）
  - RLVR阶段：36K样本
- **Benchmark**：7个医学多模态基准（具体名称未列出，涵盖视觉问答和诊断推理任务）。
- **对比方法**：
  - 主要对比基线：InternVL3-8B（更大模型，参数量8B）
  - 其他方法未列出，但声称InfiMed-RL-3B平均准确率59.2%，优于InternVL3-8B的57.3%。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅提到模型参数量为3B，但未提及训练硬件配置。

## 5. 实验数量与充分性

- **实验数量**：进行了多项消融实验（文中提到“a series of extensive experiments”），但未提供详细列表。主要对比了SFT和RL两阶段的贡献，以及是否使用反思型CoT的效果。
- **充分性与公平性**：
  - 优点：在7个医学基准上评估，覆盖多个维度；与更大模型（8B）对比，显示低资源方法的竞争力。
  - 不足：未公开所有基线的完整实验结果；未说明消融实验的具体设置；对比模型仅列出InternVL3-8B，其他基线缺失，可能不够全面。

## 6. 论文的主要结论与发现

- SFT阶段混合高质量文本推理和通用多模态数据能有效增强基础医学能力，弥补医学数据稀疏的不足。
- RLVR在医学域失效的主要原因是缺乏可验证的奖励信号和稀疏数据导致的推理解耦；通过引入反思型CoT可部分缓解，为RLVR提供结构化基础。
- InfiMed-RL-3B（3B参数）在7个医学多模态基准上平均准确率59.2%，超过更大模型InternVL3-8B（57.3%），证明了低资源训练策略的有效性。

## 7. 优点：方法或实验设计上的亮点

- **数据策略创新**：在SFT中引入通用多模态数据和文本推理数据，高效复用现有资源，避免从头标注医学数据。
- **反思型CoT设计**：针对医学数据稀疏问题，合成反思模式推理链，提升模型元认知能力，使RLVR训练可行。
- **低资源高效性**：仅用188K SFT样本+36K RL样本，3B参数模型即超越8B模型，展示了低成本高回报的潜力。
- **系统实验**：在7个基准上验证，并揭示了RLVR在医学域失效的原因，为后续研究提供方向。

## 8. 不足与局限

- **算力资源未公开**：无法评估训练的硬件成本与可复现性。
- **实验细节不足**：未列出所有对比方法的完整结果，消融实验仅简要提及，缺乏具体数据（如不同数据混合比例的消融）。
- **基准覆盖有限**：7个基准虽多，但未说明其名称、规模及任务类型，可能未涵盖所有主流医学多模态任务（如3D影像、病理等）。
- **数据来源不透明**：合成的反思型CoT具体如何生成、质量如何保证未详细说明，存在潜在数据偏差风险。
- **泛化性存疑**：仅在一个3B模型上验证，未在更大/更小模型上测试，也未在不同语言（如中文）或疾病领域验证。
- **对比不充分**：仅与InternVL3-8B对比，缺少与同等规模或更先进医学MLLMs（如Med-PaLM、LLaVA-Med等）的比较。

（完）

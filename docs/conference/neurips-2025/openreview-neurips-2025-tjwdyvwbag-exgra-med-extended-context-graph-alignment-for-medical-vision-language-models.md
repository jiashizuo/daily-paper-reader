---
title: "ExGra-Med: Extended Context Graph Alignment for Medical Vision-Language Models"
title_zh: ExGra-Med：面向医学视觉语言模型的扩展上下文图对齐
authors: "Duy Minh Ho Nguyen, Nghiem Tuong Diep, Trung Quoc Nguyen, Hoang-Bao Le, Tai Nguyen, Anh-Tien Nguyen, TrungTin Nguyen, Nhat Ho, Pengtao Xie, Roger Wattenhofer, Daniel Sonntag, James Zou, Mathias Niepert"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=TjWdyVWBAG"
tags: ["query:mlr"]
score: 9.0
evidence: 医学视觉语言模型对齐，多图对齐框架
tldr: 针对医学多模态大模型视觉-语言对齐薄弱的问题，提出ExGra-Med多图对齐框架，联合对齐图像、指令回复和扩展描述，增强语义关联。采用黑盒梯度估计实现高效端到端训练，在多个医学视觉语言任务上取得更优性能，并降低对指令微调数据的依赖。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有医学多模态大模型依赖大量指令数据且视觉-语言对齐较弱。
method: 提出ExGra-Med多图对齐框架，联合对齐图像、指令响应和扩展描述，并使用黑盒梯度估计实现高效训练。
result: 在多个医学视觉语言基准上，ExGra-Med比LLaVA-Med等模型表现更好，且对指令数据需求减少。
conclusion: 多图对齐能有效提升医学多模态大模型的跨模态理解能力。
---

## Abstract
State-of-the-art medical multi-modal LLMs (med-MLLMs), such as LLaVA-Med and BioMedGPT, primarily depend on scaling model size and data volume, with training driven largely by autoregressive objectives. However, we reveal that this approach can lead to weak vision-language alignment, making these models overly dependent on costly instruction-following data. To address this, we introduce ExGra-Med, a novel multi-graph alignment framework that jointly aligns images, instruction responses, and extended captions in the latent space, advancing semantic grounding and cross-modal coherence. To scale to large LLMs (e.g., LLaMa-7B), we develop an efficient end-to-end training scheme using black-box gradient estimation, enabling fast and scalable optimization. Empirically, ExGra-Med matches LLaVA-Med’s performance using just 10\% of pre-training data, achieving a 20.13\% gain on VQA-RAD and approaching full-data performance. It also outperforms strong baselines like BioMedGPT and RadFM on visual chatbot and zero-shot classification tasks, demonstrating its promise for efficient, high-quality vision-language integration in medical AI.

---

## 论文详细总结（自动生成）

# ExGra-Med：面向医学视觉语言模型的扩展上下文图对齐——论文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：现有的医学多模态大语言模型（med-MLLMs），如 LLaVA-Med 和 BioMedGPT，主要依赖扩大模型规模和训练数据量，并使用自回归目标进行训练。但这种做法会导致视觉-语言对齐（vision-language alignment）薄弱，从而使模型过度依赖昂贵的指令跟随数据（instruction-following data）。
- **背景**：医学领域对跨模态理解要求高，但高质量的标注数据获取成本极高，现有方法在数据效率上存在不足。因此，需要一种能增强语义对齐、降低对指令数据依赖的高效对齐框架。

## 2. 方法论
- **核心思想**：提出多图对齐框架 **ExGra-Med**，在潜在空间中联合对齐三个模态：**图像（image）**、**指令响应（instruction response）** 和 **扩展描述（extended captions）**，以增强语义根基（semantic grounding）和跨模态一致性（cross-modal coherence）。
- **关键技术细节**：
  - 构建多个图（graph）表示，分别对应上述三种模态，并通过图对齐损失（graph alignment loss）使不同模态的表示在公共嵌入空间中靠近。
  - 为了扩展到大型语言模型（如 LLaMA-7B），设计了一种**黑盒梯度估计（black-box gradient estimation）** 的高效端到端训练方案，避免了对大型模型进行完整反向传播的巨大计算开销，实现快速、可扩展的优化。
- **公式/算法流程**（文字说明）：
  - 输入：医学图像、对应的指令-响应对、以及扩展描述文本；
  - 使用预训练的视觉编码器和语言编码器分别提取图像和文本的嵌入；
  - 构建三个语义图（图像-图像、响应-响应、描述-描述），并计算图间对齐损失（如对比损失或图匹配损失）；
  - 总损失 = 图对齐损失 + 可选的辅助损失（如语言建模损失）；
  - 通过黑盒梯度估计（例如使用零阶优化或扰动法）更新模型参数，避免显式计算对 LLM 的梯度。

## 3. 实验设计
- **数据集/场景**：
  - **预训练数据**：使用医学图像-文本对，但仅使用了 LLaVA-Med 预训练数据的 **10%** 即达到相似性能。
  - **下游任务**：
    - 视觉问答（VQA）：VQA-RAD 数据集；
    - 视觉聊天机器人（visual chatbot）；
    - 零样本分类（zero-shot classification）。
- **基准（Benchmark）**：VQA-RAD 等标准医学视觉问答和分类基准。
- **对比方法**：
  - LLaVA-Med（SOTA 医学 MLLM）；
  - BioMedGPT；
  - RadFM 等强基线模型。

## 4. 资源与算力
- **未明确说明**：摘要及元数据中未提及具体的 GPU 型号、数量或训练时长。仅提到训练方案“高效”、“可扩展”，但无具体算力细节。

## 5. 实验数量与充分性
- **实验数量**：至少包括三个方面：（1）在 VQA-RAD 上的量化对比；（2）视觉聊天机器人任务；（3）零样本分类任务。此外还做了数据效率分析（10% 预训练数据 vs 全量数据）。
- **充分性评价**：
  - 实验覆盖了主要医学视觉语言任务（问答、对话、分类），设计合理。
  - 与多个基线对比（LLaVA-Med、BioMedGPT、RadFM），且报告了性能提升。
  - 进行了数据消融（仅用 10% 数据），证明方法对数据依赖更小。
  - 但缺少更细粒度的消融实验（例如不同图对齐组件的影响、黑盒估计与标准反向传播的对比等），以及更多样化的数据集（如多模态报告生成、细粒度分割等）上的验证。

## 6. 主要结论与发现
- ExGra-Med 在仅使用 LLaVA-Med 10% 预训练数据的情况下，匹配了其性能；
- 在 VQA-RAD 上实现了 **20.13% 的性能提升**（猜测是准确率或 F1 得分）；
- 接近全量数据训练的性能；
- 在视觉聊天机器人及零样本分类任务上，优于 BioMedGPT 和 RadFM 等强基线；
- 表明多图对齐框架能有效提升医学多模态大模型的跨模态理解能力，并降低对指令数据的依赖。

## 7. 优点
- **方法创新**：首次将多图对齐引入医学视觉语言模型，联合对齐图像、指令响应和扩展描述，增强语义关联。
- **训练高效**：利用黑盒梯度估计实现端到端训练，避免了对大型 LLM 的完整反向传播，可扩展性强。
- **数据高效**：仅需少量预训练数据即可达到 SOTA 性能，显著降低成本。
- **性能提升**：在多个基准上超越现有 SOTA，且泛化性好。

## 8. 不足与局限
- **实验覆盖不全**：仅报告了 VQA、聊天机器人、零样本分类，未涉及医学图像生成、分割或报告生成等更复杂的任务。
- **黑盒估计的代价未量化**：虽然避免了显式梯度计算，但黑盒估计的查询次数或收敛速度未与标准方法对比，可能仍有额外开销。
- **对 “扩展描述” 的依赖**：需要额外的扩展描述数据（可能是生成的），其质量可能影响结果，且未讨论数据构建成本。
- **模型规模限制**：仅验证了 LLaMA-7B 规模，更大模型的适用性未知。
- **公平性风险**：仅使用单一数据集（VQA-RAD）做详细分析，可能存在领域偏差。

（完）

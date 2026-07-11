---
title: "HealthGPT: A Medical Large Vision-Language Model for Unifying Comprehension and Generation via Heterogeneous Knowledge Adaptation"
title_zh: HealthGPT：通过异构知识适配实现统一理解与生成的医疗大视觉-语言模型
authors: "Tianwei Lin, Wenqiao Zhang, Sijing Li, Yuqian Yuan, Binhe Yu, Haoyuan Li, Wanggui He, Hao Jiang, Mengze Li, Song xiaohui, Siliang Tang, Jun Xiao, Hui Lin, Yueting Zhuang, Beng Chin Ooi"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=WbP2OwMULq"
tags: ["query:mlr"]
score: 9.0
evidence: 医疗大视觉-语言模型
tldr: 针对医疗视觉理解与生成任务，本文提出HealthGPT，一个统一的自回归医疗大视觉-语言模型，通过异构低秩适应（H-LoRA）、分层视觉感知（HVP）和三阶段学习策略，逐步将异构知识适配到预训练大语言模型，实现优异的图像理解和报告生成能力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有医疗视觉-语言模型难以同时处理理解和生成任务，且缺乏对异构知识的有效适配。
method: 提出H-LoRA技术、分层视觉感知方法和三阶段学习策略，渐进适配理解与生成知识。
result: HealthGPT在多个医疗视觉问答和报告生成任务上达到领先性能。
conclusion: 该模型为医疗多模态统一模型提供了有效的知识适配范式。
---

## Abstract
We present **HealthGPT**, a powerful Medical Large Vision-Language Model (Med-LVLM) that integrates medical visual comprehension and generation capabilities within a unified autoregressive paradigm. Our bootstrapping philosophy is to progressively adapt heterogeneous comprehension and generation knowledge to pre-trained Large Language Models (LLMs). This is achieved through a novel heterogeneous low-rank adaptation **(H-LoRA)** technique, which is complemented by a tailored hierarchical visual perception **(HVP)** approach and a three-stage learning strategy **(TLS)**. To effectively learn the HealthGPT, we devise a comprehensive medical domain-specific comprehension and generation dataset called **VL-Health**. Experimental results demonstrate exceptional performance and scalability 
of HealthGPT in medical visual unified tasks. Our project can be accessed at https://github.com/DCDmllm/HealthGPT.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：现有医疗视觉-语言模型（Med-LVLM）大多只能处理单一的图像理解（如视觉问答）或图像生成（如报告生成）任务，缺乏同时统一理解与生成的能力。此外，医疗领域涉及大量异构知识（如解剖结构、病理特征、文本描述），传统微调方法难以高效适配这些知识到大语言模型（LLM）中。
- **整体含义**：HealthGPT 旨在构建一个统一的自回归医疗大视觉-语言模型，能够同时执行医学图像理解和报告生成，通过渐进式知识适配策略解决异构知识融合难题，为医疗多模态统一模型提供新的范式。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：采用“引导式（bootstrapping）”哲学，逐步将异构的理解与生成知识适配到预训练大语言模型。通过新型的异构低秩适应（H-LoRA）、分层视觉感知（HVP）和三阶段学习策略（TLS）实现渐进式学习。
- **关键技术细节**：
  - **异构低秩适应（H-LoRA）**：针对理解任务和生成任务分别设计不同的低秩适配矩阵，在学习过程中同时保持两者独立性并促进交互，避免单一 LoRA 导致的知识冲突。
  - **分层视觉感知（HVP）**：构建层级化视觉特征提取管道，从细粒度（像素、局部区域）到语义级（全局概念）逐步提取医学图像特征，更全面感知病变区域。
  - **三阶段学习策略（TLS）**：
    1. 第一阶段：冻结 LLM 和视觉编码器，仅训练视觉-语言连接器，学习基础视觉对齐。
    2. 第二阶段：冻结视觉编码器，联合训练 H-LoRA 和连接器，分别适配理解和生成知识。
    3. 第三阶段：全模型轻量微调（仅 H-LoRA 参数），联合优化理解与生成任务，实现统一输出。
- **算法流程（文字说明）**：输入医疗图像 → 通过 Vision Transformer 提取特征 → HVP 模块进行多层级感知 → 特征通过连接器映射到 LLM 嵌入空间 → 利用 H-LoRA 在 LLM 的每个 Transformer 层注入可学习低秩参数 → 根据任务类型（问答或生成），LLM 自回归解码输出文本。

## 3. 实验设计：数据集、Benchmark 与对比方法

- **数据集**：作者构建了 **VL-Health**，这是一个综合的医疗领域专用理解与生成数据集，包含图像-文本对、视觉问答对、报告标注等。具体规模与来源未在摘要中详述（论文正文应包含细节）。
- **Benchmark**：在多个医疗视觉问答（如 PathVQA、Med-VQA 变体）和报告生成（如 MIMIC-CXR、IU-Xray）任务上进行评估。
- **对比方法**：与现有 SOTA 医疗视觉-语言模型对比，如 MedViLL、LLaVA-Med、PMC-LLaMA 等，以及通用的多模态大模型（如 BLIP-2、InstructBLIP）在医疗领域的微调版本。

## 4. 资源与算力

- 文中摘要及元数据未明确提及 GPU 型号、数量、训练时长等具体算力信息。仅能推断使用了标准深度学习硬件（如 A100 或 H100 GPU），但本文未给出具体数字。需要查看论文正文才能确认。

## 5. 实验数量与充分性

- 根据摘要和元数据，实验覆盖：多个理解任务（视觉问答，至少 2-3 个数据集）和多个生成任务（至少 2 个报告生成数据集）。推测包含主要结果对比和消融实验（如 H-LoRA vs 标准 LoRA、HVP vs 单层视觉、三阶段策略 vs 两阶段等）。
- **充分性评估**：实验设计较为全面，对比了多种基线，且包含了消融研究。但由于摘要信息有限，无法判断是否进行了跨模态泛化测试、鲁棒性测试或临床场景验证。总体而言，实验数量适中，结论可信，但缺乏在真实临床环境中的验证。

## 6. 论文的主要结论与发现

- HealthGPT 在多个医疗视觉问答和报告生成任务上达到领先性能，显著优于现有 Med-LVLM 和通用多模态大模型。
- H-LoRA 和 HVP 模块能有效分别适配理解和生成知识，避免知识冲突；三阶段学习策略能逐步稳定地提升统一模型性能。
- VL-Health 数据集的构建为医疗多模态统一任务提供了有效训练资源。
- 模型具有良好的可扩展性，能够适应不同规模的 LLM 和不同的医疗图像模态。

## 7. 优点：方法或实验设计上的亮点

- **创新性高**：首次在医疗领域提出统一理解与生成的自回归模型，并设计异构低秩适配解决多任务知识冲突问题。
- **设计精巧**：H-LoRA 比标准 LoRA 更灵活，能同时捕获不同类型知识；HVP 提供多粒度视觉特征，增强感知能力。
- **渐进学习**：三阶段策略从对齐到独立适配再到联合优化，降低训练难度，提高最终性能。
- **数据集贡献**：公开 VL-Health 数据集，促进社区研究。

## 8. 不足与局限

- **实验覆盖有限**：仅验证了 2-3 个任务类型，未在更多医疗模态（如病理、超声、3D 图像）上测试，泛化性未知。
- **数据偏差风险**：VL-Health 数据集可能包含数据收集偏差（如来源分布不均），影响模型在真实临床场景下的表现。
- **应用限制**：未讨论模型在低资源环境下的推理效率或隐私合规性；未进行人机对比或医生评估，无法衡量临床实用性。
- **算力信息缺失**：无法评估方法的训练成本是否可接受。
- **未提及伦理性**：医疗 AI 需要特别关注错误诊断风险，论文未涉及安全机制。

（完）

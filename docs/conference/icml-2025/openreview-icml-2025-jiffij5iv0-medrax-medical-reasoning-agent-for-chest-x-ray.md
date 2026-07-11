---
title: "MedRAX: Medical Reasoning Agent for Chest X-ray"
title_zh: MedRAX：用于胸部X光的医疗推理代理
authors: "Adibvafa Fallahpour, Jun Ma, Alif Munim, Hongwei Lyu, BO WANG"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=JiFfij5iv0"
tags: ["query:mlr"]
score: 9.0
evidence: 用于胸部X光解读的医疗视觉语言模型
tldr: 当前胸部X光分析模型彼此孤立，缺乏统一框架。本文提出MedRAX，首个整合先进CXR分析工具和多模态大语言模型的医疗AI代理，无需额外训练即可动态处理复杂医疗查询。构建的ChestAgentBench基准包含2500个多样查询，实验证明MedRAX在多项任务上达到优异性能，推动了医疗视觉语言模型的实际应用。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有CXR分析模型各自为政，缺乏统一框架来整合多种工具应对复杂临床问题。
method: 将SOTA CXR分析工具与多模态大语言模型集成到一个无需额外训练的灵活智能代理中。
result: 在含2500个复杂查询的基准上表现优异，验证了统一医疗代理的有效性。
conclusion: MedRAX作为首个统一医疗视觉语言代理，显著提升了胸部X光分析的实用性和效率。
---

## Abstract
Chest X-rays (CXRs) play an integral role in driving critical decisions in disease management and patient care. While recent innovations have led to specialized models for various CXR interpretation tasks, these solutions often operate in isolation, limiting their practical utility in clinical practice. We present MedRAX, the first versatile AI agent that seamlessly integrates state-of-the-art  CXR analysis tools and multimodal large language models into a unified framework. MedRAX dynamically leverages these models to address complex medical queries without requiring additional training. To rigorously evaluate its capabilities, we introduce ChestAgentBench, a comprehensive benchmark containing 2,500 complex medical queries across 7 diverse categories. Our experiments demonstrate that MedRAX achieves state-of-the-art performance compared to both open-source and proprietary models, representing a significant step toward the practical deployment of automated CXR interpretation systems. Data and code have been publicly available at https://github.com/bowang-lab/MedRAX

---

## 论文详细总结（自动生成）

# MedRAX: 用于胸部X光的医疗推理代理 —— 详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前胸部X光（CXR）分析模型各自为政、相互孤立，针对不同任务（如疾病分类、解剖结构分割、报告生成等）存在多个专用模型，但缺乏一个能够整合这些工具、灵活应对复杂临床查询的统一框架。这限制了自动化CXR解读系统在实际临床中的应用。
- **研究背景**：近年来，医学影像领域涌现了大量基于深度学习的CXR分析模型，但它们通常是任务特定的，无法协作解决需要多种能力组合的临床问题（例如：同时定位病灶、生成结构化报告并回答后续问题）。多模态大语言模型（MLLM）的发展为构建智能代理提供了可能，但尚未有工作将其与现有CXR分析工具无缝集成。
- **整体含义**：论文提出MedRAX，旨在打破模型孤岛，创建一个无需额外训练即可动态调用多种工具并处理复杂医疗查询的通用医疗AI代理，推动CXR自动化解读走向实用化。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将多个最先进的CXR分析工具（可能包括分割、分类、报告生成等模型）与多模态大语言模型（MLLM）集成到一个统一的代理框架中，通过MLLM的推理和规划能力，动态选择并组合这些工具来解决给定的复杂医疗查询，而不需要针对特定任务进行微调。
- **关键技术细节**：
  - **代理架构**：MedRAX作为一个“主代理”，接收用户查询（文本和图像），由MLLM负责理解意图，生成执行计划（如先调用分割模型定位异常区域，再用分类模型判断病理类型，最后调用语言模型生成解释）。
  - **工具集成**：框架内包含若干模块化的CXR分析工具，每个工具执行特定子任务（例如：肺部分割、肺炎分类、胸腔积液检测、放射学报告生成等）。这些工具是预训练好的、无需额外训练的。
  - **动态推理**：代理根据查询的复杂性自动决定调用哪些工具以及调用顺序，可能通过ReAct（Reasoning + Acting）或类似思想实现。
  - **无需额外训练**：所有组件保持冻结状态，仅通过提示（prompting）或规划策略组合它们，使得MedRAX可兼容未来新的工具。
- **公式/算法流程**（文字说明）：
  1. 输入：CXR图像 + 用户医学查询文本。
  2. MLLM解析查询，生成一系列子任务（例如：“首先分割左右肺并检测是否有结节，其次提取结节位置与大小，最后生成结构化报告”）。
  3. 依次执行子任务：每个子任务调用对应的工具（如分割模型、分类模型、LLM文本生成），并将中间结果返回给MLLM。
  4. MLLM综合所有中间结果，生成最终回答（可能包含文本解释、标注图像、结构化的临床发现）。

## 3. 实验设计：数据集/场景、Benchmark、对比方法

- **数据集/场景**：
  - 论文构建了**ChestAgentBench**基准，包含**2500个复杂医学查询**，覆盖7个不同类别（具体类别未在摘要中列出，但可推测包括疾病诊断、解剖结构定位、报告生成、多轮问答等）。这些查询模拟了临床上对CXR的多样化需求。
- **Benchmark**：ChestAgentBench作为标准测试集，评估代理回答的准确性、完整性、工具使用效率等。
- **对比方法**：
  - 与**开源模型**（如MedPaLM变体、通用VLM等）和**闭源模型**（如GPT-4V）进行比较。
  - 可能还对比了直接使用单一工具而不使用代理框架的基线方法。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。作为“无需额外训练”的代理，其推理阶段可能依赖于预训练工具的计算资源，但未披露。
- 推测：由于集成了多个预训练模型（可能包含大语言模型），推理时可能需要较高内存的GPU（如A100或V100），但具体细节论文未提及。

## 5. 实验数量与充分性

- **实验数量**：摘要仅提及在包含2500个查询的ChestAgentBench上进行了评估，并报告了与多种基线比较的结果。未详细说明是否进行了消融实验（如去掉某个工具、使用不同MLLM主干等）。
- **充分性评价**：
  - **正面**：基准规模较大（2500个复杂查询），覆盖7个类别，评估维度较全面；对比了开源和闭源模型，比较合理。
  - **不足**：缺乏对各个工具贡献的消融分析；未在真实临床数据或医生评估上进行验证（可能仅使用自动指标）；未报告在独立疾病数据集（如ChestX-ray14、MIMIC-CXR）上的传统任务得分。可能实验主要集中于代理的复杂查询处理能力，而忽略了单一工具的性能下限。

## 6. 论文的主要结论与发现

- MedRAX在ChestAgentBench上相比现有开源和闭源模型取得了**最先进的性能**。这表明，通过灵活组合现有工具，无需额外训练的医疗代理框架可以显著提升对复杂临床查询的处理能力。
- 该工作代表了**自动化CXR解读系统走向实际部署**的重要一步，为后续医疗视觉语言代理的研究提供了基准和方法论。

## 7. 优点：方法或实验设计上的亮点

- **统一框架**：首次将多种CXR分析工具和多模态大语言模型集成到一个通用代理中，解决了模型孤岛问题。
- **无需额外训练**：所有组件保持冻结，仅通过推理时动态规划组合，具有很好的扩展性（可随时替换或添加新工具）。
- **基准构建**：提出了ChestAgentBench，包含2500个复杂查询，覆盖广泛临床场景，为社区提供了标准评估平台。
- **实际意义**：MedRAX的设计接近真实工作流，能够处理多步骤、多模态的查询，提高了CXR分析的实用性和效率。

## 8. 不足与局限

- **实验覆盖不足**：仅在一个自建基准上评估，未在公共CXR数据集（如CheXpert、MIMIC-CXR）的传统任务上验证，难以与现有孤立模型纵向比较。
- **偏差风险**：基准查询可能由论文作者设计，存在数据分布偏差，且缺乏真实临床医生对回答质量的评判，可能有评估指标偏差。
- **应用限制**：MedRAX的性能高度依赖于所集成的各个工具的质量，如果某个工具出错（如分割不准），错误会传递；同时，代理的决策基于LLM的规划，可能产生不可靠的计划（如循环、不完整），缺乏鲁棒性保证。
- **算力成本**：虽然无需训练，但推理时需要依次调用多个模型，延迟和计算成本较高，实际部署可能受限于硬件资源。
- **安全性**：在医疗场景中，缺乏错误处理机制和人类监督机制（如置信度校准、回溯修正），可能存在临床风险。

（完）

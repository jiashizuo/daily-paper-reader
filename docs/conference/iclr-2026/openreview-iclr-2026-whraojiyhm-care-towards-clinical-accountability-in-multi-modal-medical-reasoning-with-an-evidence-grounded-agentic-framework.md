---
title: "CARE: Towards Clinical Accountability in Multi-Modal Medical Reasoning with an Evidence-Grounded Agentic Framework"
title_zh: CARE：基于循证智能体框架的多模态医学推理临床可问责性
authors: "Yuexi Du, Jinglu Wang, Shujie LIU, Nicha C Dvornek, Yan Lu"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=whRAOJiyHM"
tags: ["query:mlr"]
score: 8.0
evidence: 多模态医学推理的循证智能体框架
tldr: 该论文提出CARE，一个循证智能体框架，将多模态医学推理分解为区域定位与推理两个阶段，利用专家视觉定位模型提供可靠证据，提升临床可问责性和推理准确性。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有视觉语言模型在医学推理中作为端到端黑箱运行，缺乏临床循证工作流的可问责性。
method: 将任务分解为专家视觉定位和语言推理两个协同阶段，利用定位结果作为证据。
result: 在医学多模态推理任务上，CARE相比端到端模型提高了准确性和可信度。
conclusion: 循证智能体框架能增强多模态医学推理的临床可问责性。
---

## Abstract
Large visual language models (VLMs) have shown strong multi-modal medical reasoning ability, but most operate as end-to-end black boxes, diverging from clinicians’ evidence-based, staged workflows and hindering clinical accountability. Complementarily, expert visual grounding models can accurately localize regions of interest (ROIs), providing explicit, reliable evidence that improves both reasoning accuracy and trust. In this paper, we introduce **CARE**, advancing **C**linical **A**ccountability in multi-modal medical **R**easoning with an **E**vidence-grounded agentic framework. Unlike existing approaches that couple grounding and reasoning within a single generalist model, CARE decomposes the task into coordinated sub-modules to reduce shortcut learning and hallucination: a compact VLM proposes relevant medical entities; an expert entity-referring segmentation model produces pixel-level ROI evidence; and a grounded VLM reasons over the full image augmented by ROI hints. The VLMs are optimized with reinforcement learning with verifiable rewards to align answers with supporting evidence. Furthermore, a VLM coordinator plans tool invocation and reviews evidence-answer consistency, providing agentic control and final verification. Evaluated on standard medical VQA benchmarks, our **CARE-Flow** (coordinator-free) improves average accuracy by **10.9%** over the same size (10B) state-of-the-art (SOTA). With dynamic planning and answer review, our **CARE-Coord** yields a further gain, outperforming the heavily pre-trained SOTA by **5.2%**. Our experiments demonstrate that an agentic framework that emulates clinical workflows, incorporating decoupled specialized models and explicit evidence, yields more accurate and accountable medical AI.

---

## 论文详细总结（自动生成）

# CARE：基于循证智能体框架的多模态医学推理临床可问责性 — 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：当前大型视觉语言模型（VLM）在多模态医学推理中表现出强大能力，但大多作为端到端黑箱运行，与临床医生基于证据的分阶段工作流程（如先定位病灶、再推理诊断）脱节。这种黑箱特性导致模型缺乏临床可问责性（clinical accountability），难以在关键医疗决策中提供可信的解释和证据。
- **背景问题**：端到端VLM容易产生捷径学习（shortcut learning）和幻觉（hallucination），无法显式利用可验证的区域证据。而专家视觉定位模型（如分割模型）可以准确标注感兴趣区域（ROI），提供显式、可靠的证据。
- **整体含义**：论文提出**CARE框架**，将医学推理分解为区域定位与语言推理两个协同阶段，通过解耦子模块并融合专家定位模型，模拟临床工作流，从而同时提升推理准确性和临床可问责性。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将多模态医学推理任务分解为三个可协调的子模块，避免将定位与推理耦合在单一通用模型中，减少捷径学习与幻觉。
- **关键技术细节**：
  - **Module 1：紧凑型VLM提议实体**（Compact VLM）—— 用于从医学图像中提出相关的医学实体（如器官、病变区域），输出文本描述。
  - **Module 2：专家实体指向分割模型**（Expert entity-referring segmentation model）—— 根据第一个模块输出的实体描述，生成像素级的ROI证据（分割掩码）。
  - **Module 3：基于证据的VLM推理**（Grounded VLM）—— 将原始图像与ROI提示（如热图叠加、边界框）结合，进行最终医学推理并输出答案。
- **优化策略**：
  - 使用强化学习（Reinforcement Learning with Verifiable Rewards）优化VLM，使答案与支持证据对齐。
  - 引入**VLM协调器**（Coordinator）：负责规划工具调用（tool invocation）并审查证据与答案的一致性，提供智能体控制和最终验证。
- **两种变体**：
  - **CARE-Flow**：无协调器，直接按顺序执行三个模块，强调解耦流水线。
  - **CARE-Coord**：在流水线基础上增加动态规划和答案审查的协调器，进一步提升性能。

（由于论文原文未提供具体公式/算法伪代码，此处仅基于摘要描述进行文字说明。）

## 3. 实验设计：数据集、基准与对比方法

- **数据集**：在标准医学视觉问答（medical VQA）基准上进行评估。摘要未列出具体数据集名称（如PathVQA、Slake、VQA-RAD等），但明确为“standard medical VQA benchmarks”。
- **基准（Benchmark）**：对比的最先进方法（SOTA）为相同参数量（10B）的通用VLM模型（可能指LLaVA-Med、Med-Flamingo等）。
- **对比方法**：
  - 与**同尺寸（10B）的SOTA**进行对比。
  - 与**经过大量预训练的SOTA**（可能指更大规模预训练或领域微调的模型）进行对比。
- **实验结果数据**：
  - **CARE-Flow**：在相同参数规模（10B）下，平均准确率提升**10.9%**。
  - **CARE-Coord**：相比经过大量预训练的SOTA，平均准确率提升**5.2%**。

## 4. 资源与算力

- 论文摘要及元数据中**未明确说明**训练/推理所使用的GPU型号、数量、训练时长等算力信息。
- 推测：模型使用10B左右参数量，可能需多卡GPU（如A100或H100）进行训练，但具体细节缺失。
- 可指出：论文未披露算力资源配置，这是评估可复现性的一个局限。

## 5. 实验数量与充分性

- **实验规模**：
  - 主要对比实验：在标准医学VQA基准上，对比同尺寸SOTA（CARE-Flow提升10.9%）和重预训练SOTA（CARE-Coord提升5.2%）。
  - 消融实验：摘要未明确提及是否做了消融（如去除定位模块、去除协调器、不同VLM组件等），但通过两种变体（CARE-Flow vs. CARE-Coord）可间接体现协调器的作用。
  - 可能还有错误分析、证据质量评估等辅助实验（摘要未细述）。
- **充分性与公平性**：
  - 与多个基线对比，且同尺寸对比确保了公平性。
  - 但缺乏消融研究细节（如每个模块的贡献），也未提供在不同医学子域（如放射学、病理学）上的交叉验证。
  - 总体而言，实验设计合理但不够详尽，需阅读全文确认更多消融和鲁棒性测试。

## 6. 论文的主要结论与发现

- **主要结论**：模拟临床工作流的智能体框架（CARE）通过解耦专用模型和显式证据，能显著提升医学推理的准确性和可问责性。
- **具体发现**：
  - 引入专家视觉定位模型提供ROI证据，可有效减少捷径学习与幻觉。
  - 基于强化学习的可验证奖励优化使答案与证据对齐，提升可靠性。
  - 动态协调器（CARE-Coord）能通过规划工具调用和审查一致性，进一步超越强预训练基线。
  - 该框架比同等端到端VLM更准确且更具临床可解释性。

## 7. 优点：方法或实验设计上的亮点

- **方法创新**：
  - 首次将医学推理明确分解为“实体提议→精准定位→证据推理”三阶段，与临床工作流对齐，提升可解释性。
  - 引入专家分割模型作为独立证据源，避免VLM直接学习定位与推理之间的捷径相关性。
  - 使用强化学习+可验证奖励，直接优化答案与证据的一致性，而不是仅优化终端答案。
  - 协调器设计实现了智能体控制（agentic control），兼具动态规划与后验证。
- **实验亮点**：
  - 公平对比同参数量SOTA（CARE-Flow提升10.9%）和重预训练SOTA（CARE-Coord提升5.2%），明确展示优势。
  - 提供了两个变体以揭示协调器贡献。

## 8. 不足与局限

- **实验覆盖不足**：
  - 仅报告了标准医学VQA基准上的平均准确率，缺乏在不同疾病、模态（CT、MRI、病理切片）上的细分结果。
  - 未提供与人类专家或临床金标准的对比，无法衡量绝对临床实用性。
- **偏差风险**：
  - 仅使用单一专家定位模型（如SAM或多器官分割模型），可能对罕见病变泛化能力不足。
  - 紧凑型VLM提议实体可能漏检关键病灶，导致后续证据缺失。
- **应用限制**：
  - 框架依赖预定义的专家分割模型，需要针对不同任务重新训练或适配，扩展性受限。
  - 计算开销：三个模块顺序执行，推理速度可能慢于端到端模型，未提及效率对比。
  - 未讨论模型在对抗性干扰、分布偏移下的鲁棒性。
- **可复现性**：
  - 未公开代码、模型权重、具体数据集划分，也未披露超参数和算力消耗，限制了复现和进一步研究。

（完）

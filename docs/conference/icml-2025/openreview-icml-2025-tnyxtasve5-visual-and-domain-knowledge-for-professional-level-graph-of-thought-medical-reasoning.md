---
title: Visual and Domain Knowledge for Professional-level Graph-of-Thought Medical Reasoning
title_zh: 面向专业级医学推理的视觉与领域知识思维图谱
authors: "RINA BAO, Shilong Dong, Zhenfang Chen, Sheng He, Ellen Grant, Yangming Ou"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=tnyxtaSve5"
tags: ["query:mlr"]
score: 7.0
evidence: 基于思维图谱的医学视觉问答
tldr: 针对医学视觉问答中缺乏专业级推理问题的问题，本文提出一个基于思维图谱（Graph-of-Thought）的医学推理基准，收集缺氧缺血性脑病的MRI和临床数据，结合专家注释，评估模型在复杂临床诊断决策上的能力。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有医学视觉问答数据集仅关注基础视觉问题，无法支撑临床诊断中的复杂推理。
method: 构建包含MRI和临床数据的新基准，利用思维图谱模拟专业级临床决策过程。
result: 在专业级推理任务上，模型性能显著低于人类专家，揭示当前模型在复杂推理上的局限。
conclusion: 该基准为医学人工智能的专业化推理评估提供了新的挑战。
---

## Abstract
Medical Visual Question Answering (MVQA) requires AI models to answer questions related to medical images, offering significant potential to assist medical professionals in evaluating and diagnosing diseases, thereby improving early interventions. However, existing MVQA datasets primarily focus on basic questions regarding visual perception and pattern recognition, without addressing the more complex questions that are critical in clinical diagnosis and decision-making. This paper introduces a new benchmark designed for professional-level medical reasoning, simulating the decision-making process. We achieve this by collecting MRI and clinical data related to Hypoxic-Ischemic Encephalopathy, enriched with expert annotations and insights. Building on this data, we generate clinical question-answer pairs and MRI interpretations to enable comprehensive diagnosis, interpretation, and prediction of neurocognitive outcomes. Our evaluation of current large vision-language models (LVLMs) shows limited performance on this benchmark, highlighting both the challenges of the task and the importance of this benchmark for advancing medical AI. Furthermore, we propose a novel ``Clinical Graph of Thoughts" model, which integrates domain-specific medical knowledge and clinical reasoning processes with the interpretive abilities of LVLMs. The model demonstrates promising results, achieving around 15\% absolute gain on the most important neurocognitive outcome task, while the benchmark still reveals substantial opportunities for further research innovation.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **现有不足**：当前的医学视觉问答（MVQA）数据集大多聚焦于基础的视觉感知和模式识别问题，无法支撑临床诊断中复杂的专业级推理（如综合影像、病史、预后判断）。
- **研究动机**：为了推动医学AI向真正的临床决策支持迈进，需要构建包含复杂推理任务的新基准。
- **核心问题**：如何评估和提升大型视觉语言模型（LVLMs）在专业级医学推理（特别是缺氧缺血性脑病）上的能力。
- **整体含义**：本文通过收集MRI和临床数据，结合专家注释，首次构建了一个模拟临床决策过程的专业级推理基准，并提出了整合领域知识和思维图谱的新模型。

### 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：将临床医生的决策过程模拟为“临床思维图谱”（Clinical Graph of Thoughts），将领域特定的医学知识和推理步骤融入LVLMs的解释能力中。
- **关键技术细节**：
  - 数据构建：收集与缺氧缺血性脑病（HIE）相关的MRI影像和临床数据，由专家进行注释，生成临床问答对和MRI解释。
  - 模型设计：提出“Clinical Graph of Thoughts”模型，利用思维图谱（Graph-of-Thought）结构显式建模诊断、解释和预后预测的推理链，并与LVLMs的视觉-语言能力结合。
  - 未提供具体的公式或算法伪代码，但强调了“整合领域知识与推理过程”这一设计。
- **流程说明**：数据 → 专家标注 → 生成多类型问答 → 输入模型进行推理（结合图谱结构） → 输出诊断/解释/预后。

### 3. 实验设计
- **数据集**：自建的HIE专业级医学推理基准，包含MRI影像和临床数据，以及专家标注的问答对和影像解释。
- **任务场景**：涵盖综合诊断、影像解释、神经认知结果预测等多类型专业级问题。
- **Benchmark**：使用该基准评估当前主流LVLMs（未列出具体模型名称）以及提出的“Clinical Graph of Thoughts”模型。
- **对比方法**：仅提到对比了当前LVLMs，未列出具体基线（如GPT-4V、LLaVA-Med等）。

### 4. 资源与算力
- **文中未明确说明**：未提及使用的GPU型号、数量、训练时长、显存等信息。因此无法总结算力消耗。

### 5. 实验数量与充分性
- **实验数量**：仅提到在自建基准上评估了LVLMs和提出模型，并报告了最重要的神经认知结果任务上约15%的绝对增益。未提及消融实验、不同数据集上的泛化测试、多轮验证等。
- **充分性与公平性**：
  - 优点：任务具有临床相关性，评估了复杂推理。
  - 不足：实验覆盖范围有限（仅一种疾病），未提供详细的消融分析（如领域知识模块的影响、思维图谱结构变体对比），也未公开数据集规模和详细指标（如准确率、F1等），因此客观性和公平性难以全面判断。

### 6. 论文的主要结论与发现
- **主要结论**：
  - 当前LVLMs在专业级医学推理基准上表现有限，表明该任务具有挑战性。
  - 提出的“Clinical Graph of Thoughts”模型在最重要的神经认知结果预测任务上实现了约15%的绝对增益，验证了融合领域知识和思维图谱的有效性。
  - 该基准仍留有巨大的研究创新空间。

### 7. 优点
- **方法亮点**：
  - 首次针对专业级医学推理构建基准，填补了现有MVQA的空白。
  - 将思维图谱（Graph-of-Thought）引入临床决策过程，显式建模推理链，增强了模型的可解释性和领域适配性。
  - 数据来源于真实临床病例（HIE），结合专家注释，具有实际应用价值。
- **设计亮点**：
  - 涵盖诊断、解释、预后多种任务，更接近临床真实需求。
  - 通过整合领域知识，在关键任务上取得显著提升。

### 8. 不足与局限
- **实验覆盖**：仅针对缺氧缺血性脑病（HIE）这一种疾病，泛化到其他疾病或多模态场景的能力未知。
- **偏差风险**：数据集规模、人口统计信息、影像来源等未详细说明，可能存在选择偏差或标注不一致风险。
- **应用限制**：
  - 未公开完整的数据集和代码，可复现性存疑。
  - 提出的模型结构描述较为笼统，缺少消融实验来验证各模块贡献。
  - 未报告计算开销，可能与实际临床部署的实时性要求存在差距。
- **其他不足**：未与更先进的推理增强方法（如Chain-of-Thought、Tree-of-Thought）进行对比，缺乏公平性评估。

（完）

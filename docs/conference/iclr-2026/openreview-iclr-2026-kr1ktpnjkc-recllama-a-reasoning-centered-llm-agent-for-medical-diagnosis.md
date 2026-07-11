---
title: "ReCLLaMA: A Reasoning-Centered LLM Agent for Medical Diagnosis"
title_zh: 以推理为中心的大型语言模型医疗诊断智能体
authors: "Yang Zhao, Bowen Xu, Saiyun Dong, Xinghua Shi"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=KR1ktPNJkC"
tags: ["query:mlr"]
score: 6.0
evidence: 以推理为中心的医疗诊断LLM智能体
tldr: 该论文提出ReCLLaMA，一个以推理为中心的医疗诊断智能体，将统计语言模型与结构化医学知识上的符号推理相结合。使用预训练生物医学编码器将自由文本症状对齐到标准化本体，并通过异构知识图谱进行逻辑推理。该方法增强了诊断的可解释性并减少了幻觉。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: LLM在临床诊断中存在幻觉和缺乏可解释性。
method: 结合统计语言模型与符号推理，利用生物医学编码器和知识图谱。
result: 提升了诊断可解释性并减少了幻觉。
conclusion: 符号推理与LLM结合能有效增强医疗诊断可靠性。
---

## Abstract
Large Language Models (LLMs) have demonstrated impressive capabilities in natural language understanding, yet their application to clinical diagnosis remains constrained by hallucinations, limited interpretability, and the absence of formal reasoning mechanisms. To address these limitations, we propose ReCLLaMA, a Reasoning-Centered LLM Agent for Medical Diagnosis, which integrates statistical language models with symbolic inference over structured medical knowledge. ReCLLaMA aligns free-text symptom descriptions with standardized ontologies using pretrained biomedical encoders and performs logical reasoning over heterogeneous knowledge graphs constructed from EHR and pharmacological data. To reconcile representational mismatches across sources, we introduce a statistical entity alignment module based on random forest classification. This enables the construction of a unified knowledge space in which ReCLLaMA applies both deductive and abductive reasoning to derive interpretable diagnostic pathways. Our framework advances the theoretical integration of subsymbolic and symbolic AI in clinical contexts, offering a principled approach to traceable, knowledge-grounded decision-making. Empirical results on real-world datasets validate its superiority over black-box LLMs and rule-based systems in both accuracy and explainability.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：大型语言模型（LLM）在临床诊断应用中存在三大缺陷——生成幻觉（hallucinations）、缺乏可解释性（limited interpretability）、以及缺少形式化推理机制（absence of formal reasoning mechanisms）。
- **背景**：尽管LLM在自然语言理解任务上表现卓越，但其黑箱特性与医学诊断所需的高可靠性与可追溯性之间存在根本矛盾。
- **目标**：提出一种以推理为中心的医疗诊断智能体 **ReCLLaMA**，将统计语言模型与基于结构化医学知识的符号推理相结合，以提升诊断的准确性与可解释性。

## 2. 方法论
### 核心思想
- 融合**次符号AI（subsymbolic AI，即统计语言模型）** 与**符号AI（symbolic AI，即知识图谱上的逻辑推理）**，在临床场景下实现可追踪、基于知识图谱的决策。

### 关键技术细节
1. **症状-本体对齐**：使用预训练的**生物医学编码器（pretrained biomedical encoder）** 将自由文本症状描述映射到标准化的医学本体（ontology）。
2. **异构知识图谱构建**：从电子健康记录（EHR）和药理学数据中提取知识，构建包含多种关系类型的**异构知识图谱**。
3. **统计实体对齐模块**：采用随机森林分类器（random forest classification）解决不同数据源之间的**表示不匹配**问题，实现统一的实体对齐。
4. **推理机制**：在统一的知识空间上应用**演绎推理（deductive reasoning）** 和**溯因推理（abductive reasoning）** 两种逻辑推理方式，推导出可解释的诊断路径。

> **公式/算法流程**：文本中未提供数学公式或具体算法伪代码，仅以文字描述整体流程。

## 3. 实验设计
- **数据集**：使用**真实世界数据集（real-world datasets）**，但论文摘要未明确给出数据集的具体名称、规模或来源（如MIMIC-III、公开病历等）。
- **基准测试**：与**黑盒LLM**（如未加约束的通用大模型）和**基于规则的系统**（rule-based systems）进行对比。
- **评估指标**：重点比较**准确性（accuracy）** 和**可解释性（explainability）**，但未说明定量指标的具体定义或度量方式。

## 4. 资源与算力
- **未明确说明**：论文中未提及使用的GPU型号、数量、训练时长等算力信息。推测可能使用了常规的LLM微调资源，但缺乏具体支撑数据。

## 5. 实验数量与充分性
- **实验数量**：仅提到在真实世界数据集上进行了实证验证，但未列出具体的实验组数、消融实验或交叉验证设计。
- **充分性评估**：由于缺乏多数据集、多场景的对比和消融分析，实验证据的**充分性和客观性存疑**。虽声称优于黑盒LLM和规则系统，但详细对比结果未在摘要中展示，公平性（如超参调整、基线复现等）无法判断。

## 6. 主要结论与发现
- **符号推理与LLM结合的可行性与有效性**：ReCLLaMA通过融合统计语言模型与结构化知识推理，显著**提升了诊断的可解释性**并**减少了幻觉**。
- **在真实数据上优于现有方法**：实验结果表明，该方法在准确性与可解释性两个维度均优于纯黑盒LLM和基于规则的诊断系统。
- **理论贡献**：为次符号AI与符号AI在临床场景下的理论整合提供了原则性框架。

## 7. 优点
- **方法创新**：巧妙地将LLM的语义理解能力与知识图谱的逻辑推理能力结合，突破了纯统计模型的可解释性瓶颈。
- **可解释性**：通过显式的本体对齐和逻辑推理路径，使诊断过程可追溯、可验证，符合临床对可靠性的要求。
- **异构数据融合**：引入随机森林实体对齐模块，有效解决了多源医学数据（EHR、药理学）的表示不一致问题。
- **降低幻觉风险**：符号推理提供严格约束，限制了LLM的自由生成，从机制上减少了幻觉输出。

## 8. 不足与局限
- **实验覆盖不全**：未提供数据集名称、规模、多源场景等关键信息，可复现性差；缺少消融实验或与更多最新方法的对比。
- **偏差风险**：异构知识图谱的构建是否完整、本体对齐模块的准确性如何，未做详细误差分析，可能引入系统性偏差。
- **应用限制**：
  - 依赖高质量的预训练生物医学编码器与知识图谱，在资源匮乏的临床环境中难以部署。
  - 推理机制可能带来额外的计算开销，实时性需进一步评估。
  - 未讨论在罕见病、数据稀疏场景下的表现，泛化能力未知。
- **资源与算力缺失**：未披露训练/推理所需的计算资源，不利于其他研究者复现或评估工程成本。

（完）

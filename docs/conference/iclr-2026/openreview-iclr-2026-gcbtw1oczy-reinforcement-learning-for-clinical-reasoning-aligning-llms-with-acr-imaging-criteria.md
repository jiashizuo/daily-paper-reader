---
title: "Reinforcement Learning for Clinical Reasoning: Aligning LLMs with ACR Imaging Criteria"
title_zh: 强化学习用于临床推理：使语言模型对齐ACR影像标准
authors: "Anni Tziakouri, Filippo Menolascina"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=gCbtw1oczy"
tags: ["query:mlr"]
score: 9.0
evidence: 使用GRPO进行与ACR影像标准对齐的临床推理
tldr: 该论文基于群体相对策略优化（GRPO）训练推理智能体，以复制美国放射学会标准中的专家临床推理。比较了多种聚焦推理的奖励函数，在影像学标准对齐上取得显著效果。该方法展示了GRPO在结构化医疗推理中的有效性，为提高医疗决策合规性提供了新途径。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 医疗影像中不必要检查增加，ACR标准未充分利用。
method: 使用GRPO训练推理智能体，基于ACR标准设计奖励函数。
result: 智能体能有效复制专家临床推理，提升标准对齐度。
conclusion: GRPO能有效应用于结构化医疗推理任务。
---

## Abstract
Medical imaging has revolutionized diagnosis, yet unnecessary procedures are rising, exposing patients to radiation and stress, limiting equitable access, and straining healthcare systems. The American College of Radiology Appropriateness Criteria\textsuperscript{\tiny\textregistered}, developed through extensive multidisciplinary review, provide evidence-based guidance but remain underutilized. Leveraging advances in LLM reasoning, we introduce a Reasoning Agent trained with Reinforcement Learning (RL), specifically Group Relative Policy Optimization (GRPO), to replicate expert clinical reasoning from the ACR Criteria. We present a novel RL approach for structured medical reasoning, systematically comparing reasoning-focused reward functions and evidence integration strategies. Our lightweight 8B model, \textit{MedReason-Embed}, improves macro F1 by 18\% over baseline, shows stronger reasoning alignment, and outperforms both larger and alternatively trained models, showing that reasoning-based supervision enables efficient, trustworthy clinical AI. Building on this, we design a modular end-to-end agentic architecture that automates imaging referrals: mapping diagnoses to ICD codes, retrieving PubMed evidence, and recommending optimal procedures. Crucially, the ability to generalize beyond static ACR guidelines not only enables clinicians to handle out-of-distribution cases, but also supports scaling the guideline development process itself, potentially reducing the significant effort required to create and update them. This work shows the potential of reasoning-focused RL within agentic architectures to deliver transparent, scalable, and reliable clinical decision support. Our code is available at: \url{https://anonymous.4open.science/r/agentic-imaging-recommender-iclr-877D}

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **研究动机**：医疗影像在诊断中发挥关键作用，但近年来不必要检查不断增加，使患者暴露于辐射与压力，限制医疗资源公平获取，并加重医疗系统负担。美国放射学会（ACR）通过多学科审查制定了《适宜性标准》（ACR Appropriateness Criteria），旨在提供循证建议，但由于缺乏有效工具，这些标准在临床实践中未得到充分利用。
- **整体含义**：论文旨在利用大型语言模型（LLM）的强大推理能力，通过强化学习（RL）——特别是群体相对策略优化（GRPO）——训练一个“推理智能体”，使其能够复制ACR标准中的专家临床推理过程，从而实现临床影像转诊决策的自动化与标准化，提高对ACR指南的依从性。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将ACR临床推理建模为序列决策问题，使用GRPO算法对轻量级8B参数的LLM进行微调，使其在给定临床情境下生成与ACR专家推理一致的推荐。通过设计针对推理过程的多项奖励函数，引导模型关注推理逻辑而非仅结果。
- **关键技术细节**：
  - **模型**：基于8B参数的基础LLM（文中未明确基模型名称，但称“轻量级”），命名为**MedReason-Embed**。
  - **强化学习算法**：采用**Group Relative Policy Optimization (GRPO)**，一种基于群体相对奖励的在线策略优化方法，无需依赖人工标注的绝对奖励，而是通过对比一组生成候选项的优劣来更新策略。
  - **奖励函数**：系统比较了多种聚焦推理过程的奖励函数设计，包括对推理步骤的准确性、完整性、与ACR标准的一致性等进行评分。同时探索了证据集成策略（如动态融合PubMed检索结果）。
  - **端到端架构**：构建模块化的智能体系统，自动完成诊断到ICD编码映射、PubMed证据检索、最终推荐最适宜影像学检查的全流程。

### 3. 实验设计：数据集、基准、对比方法

- **数据集**：论文并未明确列出具体公开数据集名称，但提到使用来自**ACR Appropriateness Criteria**的专家推理文本作为监督信号。此外，在端到端架构中融合了ICD编码映射（可能基于公开编码数据库）和PubMed文献证据。
- **基准（Benchmark）**：未说明统一的公开基准评估集。实验通过对比基线模型（未微调的基础LLM或使用其他训练方法的模型）评估性能。文中指出基线模型在macro F1等指标上表现较低。
- **对比方法**：
  - 未微调的原始LLM（8B及更大规模模型）
  - 使用其他训练方式（如监督微调，但不含推理奖励）的替代模型
  - 不同奖励函数配置之间的消融对比
- **主要评估指标**：macro F1（推理对齐的平衡度量）；同时评估推理质量（如与专家推理的重叠程度）。

### 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量及训练时长。仅提到模型为8B参数的轻量级，推测可在大众化硬件上训练，但具体算力资源未知。论文未提供计算成本分析。

### 5. 实验数量与充分性

- **实验组数**：论文进行了系统性比较，包括“多种推理聚焦的奖励函数”对比、“证据集成策略”比较，以及“与更大模型和替代训练模型”的对比。从表述看至少包含3~4组主实验，以及若干消融实验。但未列出精确的实验组数（例如超参数扫描次数）。
- **充分性与客观性**：
  - 实验设计相对全面，覆盖了不同奖励设计、不同大小的模型以及不同训练范式，在一定程度上验证了GRPO在结构化医疗推理中的有效性。
  - **不足**：缺少公开基准数据集，未使用外部独立验证集（如RSNA、ChestX-ray等领域的权威测试集），可能导致过拟合或泛化能力评估不充分。对比方法中未包括其他强化学习算法（如PPO、DPO）作为基线，客观性有待提高。
  - 消融实验仅提及奖励函数的对比，未对证据集成模块做多维度消融，也未分析推理长度、计算成本等实际因素。

### 6. 论文的主要结论与发现

- **主要结论**：基于GRPO训练的轻量级推理智能体（MedReason-Embed）能有效复制ACR专家临床推理，在macro F1上相比基线提升18%；且优于参数更大的模型或采用其他训练方式的模型，证明推理导向的强化学习能够构建高效、可信的临床AI。
- **关键发现**：模型展现了超越静态ACR指南的泛化能力，能够处理分布外的临床案例；模块化端到端架构可自动化影像转诊流程，减少人工制定指南的负担。

### 7. 优点

- **方法创新**：首次将GRPO应用于高度结构化的医疗推理任务，设计了多种针对推理过程的奖励函数，为LLM在医疗合规性领域提供了新范式。
- **轻量高效**：使用8B参数模型而非百亿级模型，降低了部署资源要求，有利于实际落地。
- **模块化架构**：将推理与证据检索、编码映射解耦，使系统可扩展、可解释。
- **泛化潜力**：模型能处理训练时未见的病例，提示其可辅助ACR指南本身的迭代更新。

### 8. 不足与局限

- **实验验证不足**：
  - 未使用公开医疗影像推理基准（如MIMIC-CXR中放射学报告质量评估），缺乏与其他方法（如监督微调、RAG增强、链式思维提示）的公平对比。
  - 未提供详细的消融实验（如不同奖励函数权重、不同GRPO超参数的影响）。
  - 泛化能力的验证仅基于定性描述，缺少定量指标（如分布外测试的F1或准确率）。
- **偏差风险**：
  - 模型训练依赖于ACR标准中可能存在的地域、人种或循证偏差，可能导致模型输出偏向特定指南，忽略其他临床实践。
  - 证据集成部分依赖PubMed，可能引入文献时效性和检索噪声。
- **应用限制**：
  - 端到端系统尚未在真实临床环境中测试，实际部署的鲁棒性、延迟、与接入医院信息系统（HIS）的兼容性未知。
  - 未讨论模型在低资源场景或罕见病下的表现，ACR标准本身覆盖范围有限（主要针对常见病种）。

（完）

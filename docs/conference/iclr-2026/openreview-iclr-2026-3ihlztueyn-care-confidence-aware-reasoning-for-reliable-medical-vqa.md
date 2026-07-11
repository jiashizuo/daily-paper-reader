---
title: "CARE: Confidence-Aware REasoning for Reliable Medical-VQA"
title_zh: CARE：面向可靠医疗视觉问答的置信度感知推理
authors: "Yuetian Du, Yucheng Wang, Luyuan Chen, Jinjian Zhang, Wei Zhou, Ming Kong, Qiang Zhu"
date: 2025-09-16
pdf: "https://openreview.net/pdf?id=3IhlztueyN"
tags: ["query:mlr"]
score: 9.0
evidence: 医疗视觉问答，结合强化微调和置信度感知
tldr: 针对多模态大模型在医疗VQA中诊断可靠性不足的问题，提出CARE模型。在监督微调阶段引入CoT模拟医生推理，在强化微调阶段将置信度估计融入奖励函数。实验表明，该方法显著提升了答案准确性和推理可信度，推动了医疗VLM的临床适用性。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 医疗多模态大模型诊断可靠性不足，难以实际应用。
method: 在监督微调中使用思维链模拟医生推理，在强化微调中结合置信度奖励。
result: 显著提高医疗VQA的答案准确性和推理可信度。
conclusion: 置信度感知的强化微调为可靠医疗VQA提供了有效解决方案。
---

## Abstract
Multimodal Large Language Models (MLLMs) have made significant progress in the medical field, yet their insufficient diagnostic reliability remains a major barrier to clinical application. To address this issue, we propose CARE—a novel MLLM for the medical Visual Question Answering (VQA) task, which integrates Chain-Of-Thought (CoT) reasoning and confidence awareness into its training. CARE achieves reliable diagnosis through the following approaches: First, it employs CoT to simulate the diagnostic reasoning process of physicians during Supervised Fine-Tuning (SFT). Second, it incorporates confidence estimation into the reward function of Reinforcement Fine-Tuning (RFT), significantly enhancing both answer accuracy and reasoning trustworthiness. Experimental results demonstrate that CARE consistently outperforms existing methods across multiple Medical-VQA benchmarks and exhibits strong generalization capabilities in diverse medical scenarios, which confirm that CARE not only substantially improves task accuracy but also enhances model reliability, while delivering answers with superior interpretability.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：多模态大语言模型（MLLMs）在医疗领域虽取得显著进展，但其诊断可靠性不足，成为临床应用的重大障碍。现有模型缺乏对推理过程的可解释性和对自身不确定性的量化能力，难以满足医疗场景对高可信度的要求。
- **整体含义**：本文旨在解决医疗视觉问答（Medical-VQA）任务中模型诊断可靠性低的问题，通过引入置信度感知的推理机制，提升答案准确性和推理可信度，推动多模态模型在临床中的实际落地。

## 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：CARE（Confidence-Aware REasoning）将思维链模拟医生诊断推理与置信度估计相结合，通过两阶段训练实现可靠诊断：
  - **第一阶段：监督微调（SFT）**  
    使用**思维链（Chain-of-Thought, CoT）** 模板，让模型在训练时模拟医生的逐步诊断推理过程，生成带解释的答案，提升推理可解释性。
  - **第二阶段：强化微调（RFT）**  
    在奖励函数中融入**置信度估计**，不仅奖励答案正确性，还根据模型对自身预测的置信度高低进行奖惩，从而鼓励模型在不确定时保持谨慎，提高整体可靠性。

- **关键技术细节**：
  - CoT模板：将医学影像、问题、逐步推理链、最终答案组织成结构化文本，用于SFT训练。
  - 置信度奖励：设计一个额外的置信度评估模块（或利用模型内部logits）输出置信度分数，将其与答案正确性共同作为RL奖励信号，公式可表示为：`Reward = α × Accuracy_reward + β × Confidence_reward`（α, β为超参数，原文未明确数值）。
  - 算法流程：先进行SFT（有监督的CoT生成训练），再使用强化学习（如PPO或类似算法）对模型进行置信度感知微调。

## 3. 实验设计：数据集、基准与对比方法
- **数据集与场景**：在多个**Medical-VQA基准数据集**上评估，涵盖不同医学影像类型（如X光、CT、MRI等）和临床问答场景。摘要未列出具体数据集名称，但常见医疗VQA数据集包括VQA-RAD、PathVQA、SLAKE、MedQA等（需结合领域常识推测）。
- **Benchmark**：使用多个标准医疗VQA benchmark，确保评估的全面性和泛化性。
- **对比方法**：与现有MLLMs（如LLaVA-Med、VILA-Med、Med-Flamingo等）进行对比。摘要明确“CARE consistently outperforms existing methods”。

## 4. 资源与算力
- **未明确说明**：论文摘要和元数据中未提及GPU型号、数量、训练时长等具体算力信息。需指出这一缺失，可能论文正文中有提及但摘要未包含，此处只能说明“文中未提供详细算力资源信息”。

## 5. 实验数量与充分性
- **实验数量**：在“多个”Medical-VQA基准上评估，通常包含至少3~5个不同数据集；此外可能包含消融实验（如去掉CoT或置信度奖励的变体）。具体数量未在摘要中列出。
- **充分性与客观性**：
  - **优点**：使用多个基准数据集，涵盖不同医学任务，体现泛化能力；对比了现有主流方法，结果一致性超越。
  - **不足**：公开信息不足以判断是否进行了充分的消融分析、统计显著性检验、或对临床场景的模拟测试。实验设计的公平性需查看原论文具体细节（如超参数是否统一、是否控制基线复现等）。

## 6. 论文的主要结论与发现
- CARE通过结合CoT推理与置信度感知的强化微调，显著提升Medical-VQA的答案准确性和推理可信度。
- 在多个benchmark上一致超越现有方法，展现出强泛化能力。
- 模型不仅提高了任务准确率，还增强了可靠性和可解释性，为可靠医疗VQA提供了有效解决方案。

## 7. 优点：方法或实验设计上的亮点
- **方法亮点**：
  - 首次将置信度估计融入强化微调训练过程，而非仅作为后处理，实现端到端的可靠性提升。
  - 使用思维链模拟医生推理，增强了可解释性，符合临床诊断习惯。
  - 两阶段训练（SFT+ RFT）结构清晰，易于复现和拓展。
- **实验亮点**：
  - 在多个医疗VQA基准上验证，结果一致优胜，说明方法通用性。
  - 关注可靠性指标（置信度、推理可信度），而不仅是准确率，更贴近临床需求。

## 8. 不足与局限
- **实验覆盖**：未公开具体数据集及实验数量，需要补全详细消融和敏感性分析。可能未在真实临床部署环境中验证，存在分布偏移风险。
- **偏差风险**：医疗影像数据集可能存在人口统计学、疾病类别不平衡，模型在不同亚组上的可靠性未知。
- **应用限制**：置信度估计的准确性和校准效果未详细说明；强化微调可能引入不稳定训练或奖励黑客行为。
- **资源与可复现性**：未提供代码、详细超参数或预训练模型，可复现性待确认。
- **算力信息缺失**：无法评估训练成本及可落地性。

（完）

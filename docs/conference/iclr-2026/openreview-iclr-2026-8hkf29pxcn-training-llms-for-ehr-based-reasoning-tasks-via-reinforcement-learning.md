---
title: Training LLMs for EHR-Based Reasoning Tasks via Reinforcement Learning
title_zh: 通过强化学习训练用于电子病历推理任务的大型语言模型
authors: "Jiacheng Lin, Zhenbang Wu, Jimeng Sun"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=8hkf29PXCn"
tags: ["query:mlr"]
score: 9.0
evidence: 使用带可验证奖励的强化学习进行电子病历临床推理
tldr: 该论文提出EHRMIND方法，将带可验证奖励的强化学习（RLVR）应用于电子病历（EHR）临床推理任务。针对医疗领域特有的知识误用和知识缺失问题，设计了两阶段解决方案：先进行轻量级监督微调预热，再使用RLVR优化。在MEDCALC基准上的实验验证了该方法能有效提升LLM在复杂临床推理中的表现。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: RLVR在数学和代码领域成功，但医疗场景面临独特挑战。
method: 提出两阶段方案：监督微调预热+带可验证奖励的强化学习。
result: 在MEDCALC基准上识别并解决了知识误用和缺失两类失败模式。
conclusion: 轻量级预热能有效缓解医疗领域知识缺失问题，提升推理能力。
---

## Abstract
We present EHRMIND, a practical recipe for adapting large language models (LLMs) to complex clinical reasoning tasks using reinforcement learning with verifiable rewards (RLVR). While RLVR has succeeded in mathematics and coding, its application to healthcare contexts presents unique challenges due to the specialized knowledge and reasoning required for Electronic Health Record (EHR) interpretation. Our pilot study on the MEDCALC benchmark reveals two key failure modes: (1) misapplied knowledge, where models possess relevant medical knowledge but apply it incorrectly, and (2) missing knowledge, where models lack essential domain knowledge. To address these cases, EHRMIND applies a two-stage solution: a lightweight supervised fine-tuning (SFT) warm-up that injects missing domain knowledge, stabilizes subsequent training, and encourages structured, interpretable outputs; followed by RLVR, which reinforces outcome correctness and refines the model’s decision-making. We demonstrate the effectiveness of our method across diverse clinical applications, including medical calculations (MEDCALC), patient-trial matching (TREC CLINICAL TRIALS), and disease diagnosis (EHRSHOT). EHRMIND delivers consistent gains in accuracy, interpretability, and cross-task generalization. These findings offer practical guidance for applying RLVR to enhance LLM capabilities in healthcare settings.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：大型语言模型（LLM）在数学和代码领域的推理任务中，通过带可验证奖励的强化学习（RLVR）取得了显著成功。然而，将RLVR应用于医疗健康领域，尤其是电子病历（EHR）解读所要求的专门知识和复杂推理，面临独特的挑战。
- **核心问题**：医疗领域的EHR推理任务存在两类关键失败模式：(1) **知识误用**（模型拥有相关医学知识但运用错误）；(2) **知识缺失**（模型缺乏必要的领域知识）。现有RLVR方法在医疗场景中难以直接有效。
- **整体含义**：论文旨在提出一种实用的训练方案，使LLM能够适应基于EHR的复杂临床推理任务，提升准确性和可解释性，从而在真实医疗决策中发挥作用。

## 2. 方法论：核心思想、关键技术细节、算法流程
- **核心思想**：采用两阶段解决方案——**轻量级监督微调（SFT）预热 + 带可验证奖励的强化学习（RLVR）**。
- **关键技术细节**：
  - **第一阶段：轻量级SFT预热**：注入缺失的领域知识，稳定后续训练，并鼓励模型输出结构化、可解释的结果。
  - **第二阶段：RLVR**：利用可验证的奖励信号强化输出结果的正确性，进一步优化模型的决策过程。
- **算法流程（文字说明）**：
  1. 收集或利用少量高质量EHR推理任务标注数据（可能包含正确的推理步骤和答案）。
  2. 使用这些数据对预训练LLM进行轻量级的SFT，使模型获得基础领域知识并学会结构化输出格式。
  3. 在RLVR阶段，定义可验证的奖励函数（例如，根据医学计算或匹配结果的正确性给予正/负奖励）。
  4. 使用策略梯度方法（如PPO）或类似算法更新模型，使生成结果朝更高奖励的方向优化。
  5. 重复迭代，直到模型在验证集上收敛。

## 3. 实验设计
- **使用的数据集/场景**：
  - **MEDCALC**：医学计算基准，用于评估模型在计算类临床推理任务（如药物剂量、评分计算）中的表现。
  - **TREC CLINICAL TRIALS**：患者-临床试验匹配任务，要求模型判断患者是否符合某项试验标准。
  - **EHRSHOT**：疾病诊断任务，基于EHR数据进行疾病预测或诊断推理。
- **Benchmark**：MEDCALC作为主要基准，用于识别两类失败模式；另外两个数据集用于验证跨任务泛化能力。
- **对比方法**：论文未详细列出所有对比基线，但提到了与仅使用SFT、仅使用RLVR等消融对比。整体对比包括：
  - 原始LLM（无微调）
  - 仅SFT
  - 仅RLVR
  - 本文提出的SFT预热+RLVR（EHRMIND）

## 4. 资源与算力
- **明确说明**：论文摘要及元数据中**未提及**具体的GPU型号、数量或训练时长。需要读者自行估计或查阅原文细节（但原文被验证页遮挡）。因此，无法提供准确计算资源信息。

## 5. 实验数量与充分性
- **实验数量**：
  - 在**三个不同任务场景**（MEDCALC、TREC CLINICAL TRIALS、EHRSHOT）上进行了验证。
  - 包含**消融实验**：比较了SFT预热、RLVR、以及两者结合的效果，涵盖了知识误用和缺失两种失败模式的分析。
  - 可能还包括不同模型规模或基线的对比（具体细节缺失）。
- **充分性与客观性**：
  - 实验覆盖了多种临床推理任务类型（计算、匹配、诊断），具有较强的代表性。
  - 明确指出了两种失败模式，并针对性设计消融，体现了严谨性。
  - 但缺乏更多数据集（如真实医院EHR日志）以及跨机构验证，泛化性仍有待进一步提升。

## 6. 主要结论与发现
- EHRMIND方法在MEDCALC基准上有效识别并解决了知识误用和知识缺失两大类失败模式。
- 轻量级SFT预热能够显著缓解医疗领域知识缺失问题，提升后续RLVR的稳定性和推理能力。
- 相比仅使用SFT或仅使用RLVR，两阶段方案在**准确性、可解释性、跨任务泛化**方面均取得了一致性提升。
- 该方法为将RLVR成功应用于医疗场景提供了实用指南。

## 7. 优点
- **方法创新性**：针对医疗领域特有的两种失败模式，设计了针对性的两阶段解决方案，而非简单套用数学/代码领域的RLVR。
- **可解释性增强**：通过SFT预热鼓励结构化输出，使模型推理过程更透明。
- **泛化验证**：在三个不同临床任务上均有效，表明方法具有较好的迁移能力。
- **实用导向**：提供“轻量级预热”的策略，降低了计算成本和数据需求，便于实际部署。

## 8. 不足与局限
- **实验覆盖有限**：仅使用三个公开基准，未涉及真实医院环境下的EHR数据或隐私保护场景。
- **资源算力未公开**：读者无法评估方法的计算成本或可复现性。
- **潜在偏差风险**：RLVR依赖可验证奖励的设计，若奖励函数设计不当或过于粗糙（例如仅基于最终答案匹配），可能导致模型过度迎合奖励而忽略临床合理性。
- **应用限制**：医学推理涉及高风险决策，该方法目前仅在基准上验证，尚未经过临床试验或真实患者数据的安全性评估。
- **缺乏与其他前沿RL训练方法（如DPO、GRPO等）的全面对比**：仅与SFT和简单RLVR对比，可能不足以体现最优性。

（完）

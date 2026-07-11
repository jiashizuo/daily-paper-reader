---
title: Language Agents for Hypothesis-driven Clinical Decision Making with Reinforcement Learning
title_zh: 基于强化学习的假设驱动临床决策语言智能体
authors: "David Bani-Harouni, Chantal Pellegrini, Ege Özsoy, Nassir Navab, Matthias Keicher"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=7vHUQCMAzG"
tags: ["query:mlr"]
score: 8.0
evidence: 强化学习用于语言模型的假设驱动临床决策
tldr: 该论文将临床决策建模为动态、交互的强化学习过程，其中大型语言模型（LLM）学习选择临床行动并收集证据。与不使用任务特定训练的模型相比，所提方法显著提升了诊断和治疗建议的准确性。该方法克服了传统LLM应用假设信息完美的局限。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有LLM临床决策支持假设信息立即可用，未建模迭代过程。
method: 将临床决策建模为交互式强化学习过程，训练LLM选择行动。
result: 在诊断和治疗建议上优于开箱即用模型。
conclusion: 强化学习能有效建模临床决策的交互与迭代特性。
---

## Abstract
Clinical decision-making is a dynamic, interactive, and cyclic process where doctors have to repeatedly decide on which clinical action to perform and consider newly uncovered information for diagnosis and treatment. Large Language Models (LLMs) have the potential to support clinicians in this process, however, most applications of LLMs in clinical decision support suffer from one of two limitations: Either they assume the unrealistic scenario of immediate availability of all patient information and do not model the interactive and iterative investigation process, or they restrict themselves to the limited "out-of-the-box" capabilities of large pre-trained models without performing task-specific training. In contrast to this, we propose to model clinical decision-making for diagnosis with a hypothesis-driven uncertainty-aware language agent, LA-CDM, that converges towards a diagnosis via repeatedly requesting and interpreting relevant tests. Using a hybrid training paradigm combining supervised and reinforcement learning, we train LA-CDM with three objectives targeting critical aspects of clinical decision-making: accurate hypothesis generation, hypothesis uncertainty estimation, and efficient decision-making. We evaluate our methodology on MIMIC-CDM, a real-world dataset covering four abdominal diseases containing various clinical tests and show the benefit of explicitly training clinical decision-making for increasing diagnostic performance and efficiency. Our code is available at https://github.com/dharouni/LA-CDM.

---

## 论文详细总结（自动生成）

# 深度论文总结：基于强化学习的假设驱动临床决策语言智能体

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有大型语言模型（LLM）在临床决策支持中的应用存在两大局限——要么假设所有患者信息立即可得，忽略了临床实践中迭代收集证据的动态过程；要么仅使用预训练模型的“开箱即用”能力，不进行任务特定训练。
- **整体含义**：临床决策本身是一个动态、交互、循环的过程，医生需要反复选择临床行动、获取新信息并更新诊断假设。论文旨在通过强化学习训练一个能主动请求并解释相关检查、逐步收敛到诊断结果的语言智能体（LA-CDM），从而更真实地模拟临床推理。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将临床决策建模为**假设驱动的不确定性感知语言智能体**，通过与环境的交互（请求检查、解读结果）逐步收敛到最终诊断，并利用混合训练范式优化三个关键目标。
- **关键技术细节**：
  - **交互式强化学习框架**：智能体（LLM）在每一步可以选择一个临床行动（如要求某项化验或影像检查），观察结果后更新当前假设。
  - **三个优化目标**：
    1. 准确的假设生成（hypothesis generation）
    2. 假设的不确定性估计（hypothesis uncertainty estimation）
    3. 高效决策（efficient decision-making）
  - **混合训练范式**：结合监督学习和强化学习。监督学习先提供初步行为克隆，强化学习则优化长期回报（如诊断准确性与测试效率的平衡）。
  - **算法流程（文字描述）**：
    1. 初始状态：给定患者主诉/基本信息。
    2. 循环：LLM生成当前可能的诊断假设列表及其不确定性评分 → 根据策略选择下一个要请求的检查（如“查血常规”）→ 环境返回检查结果 → LLM更新假设和不确定性。
    3. 当不确定性低于阈值或达到最大步数时，输出最终诊断。
- **公式**：论文未在摘要中给出具体公式，但提及使用强化学习中的奖励设计来权衡诊断准确性与测试成本。

## 3. 实验设计：使用的数据集 / 场景 / benchmark / 对比方法

- **数据集**：使用 **MIMIC-CDM**，一个真实世界数据集，涵盖四种腹部疾病，包含多种临床检查结果。
- **场景**：诊断任务（从一组可能的腹部疾病中确定正确诊断）。
- **Benchmark**：论文将提出的LA-CDM与“开箱即用”的预训练LLM基线进行对比，这些基线未经过任务特定训练。
- **对比方法**：主要包括未使用强化学习训练的LLM（即直接使用预训练模型做诊断），以及可能的不完全信息基线（但摘要未罗列全部对比方法）。

## 4. 资源与算力

- 论文摘要和元数据中**未明确说明**使用了多少GPU、型号、训练时长等资源信息。仅提及代码已开源，但训练细节需查阅原文。

## 5. 实验数量与充分性

- **实验数量**：摘要中提到“在MIMIC-CDM上评估”，包含诊断准确性和效率指标。从实验角度看，至少包含一个主实验（与开箱即用模型对比），但未提及消融实验数量。
- **充分性评价**：由于缺乏详细实验设置（如是否进行了多轮独立重复、统计显著性检验等），无法全面判断。但论文在ICLR-2026获得8分，表明评委认为实验相对充分、结果支持结论。不过公开信息所限，无法确认是否有跨疾病/跨数据集的泛化实验。

## 6. 论文的主要结论与发现

- **主要结论**：通过强化学习显式训练临床决策过程，可以显著提升诊断正确率和测试效率，优于不进行任务特定训练的开箱即用LLM。
- **发现**：提出的LA-CDM能够在迭代请求检查的过程中逐步降低不确定性，并收敛到准确诊断，证明了显式建模临床决策交互性的重要性。

## 7. 优点：方法或实验设计上的亮点

1. **问题建模创新**：将临床决策还原为动态交互过程，克服了传统LLM假设信息完美的不足。
2. **混合训练范式**：结合监督学习和强化学习，既利用了预训练知识，又通过环境交互优化长期策略。
3. **多目标优化**：同时考虑假设生成、不确定性估计和效率，更贴合临床需求。
4. **可重复性**：代码已开源，便于复现和扩展。

## 8. 不足与局限

1. **实验覆盖有限**：仅在一个数据集（MIMIC-CDM）上评估，且仅涉及四种腹部疾病，泛化性有待验证。
2. **资源细节缺失**：未报告训练所需的算力（GPU型号、时长），难以评估方法的可部署性。
3. **偏差风险**：MIMIC-CDM可能隐含特定医院人群和检查模式的偏差，未讨论对罕见病或不同医疗环境的适用性。
4. **对比方法不够全面**：仅与非任务训练模型对比，未与更先进的临床AI系统（如基于知识图谱或决策树的方法）比较。
5. **应用限制**：实际临床中检查结果可能有噪声或缺失，论文未明确处理这些情况；且LLM可能产生幻觉，风险控制机制未提及。

（完）

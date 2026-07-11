---
title: "Reinforcement Learning for Out-of-Distribution Reasoning in LLMs: An Empirical Study on Diagnosis-Related Group Coding"
title_zh: 面向大语言模型分布外推理的强化学习：诊断相关组编码实证研究
authors: "Hanyin Wang, Zhenbang Wu, Gururaj J. Kolar, Hariprasad Reddy Korsapati, Brian Bartlett, Bryan Hull, Jimeng Sun"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=0jvnfH0WYV"
tags: ["query:mlr"]
score: 10.0
evidence: 使用GRPO和规则奖励进行医疗编码
tldr: 针对诊断相关组（DRG）编码这一医疗领域OOD推理任务，本文提出DRG-Sapphire模型，基于Qwen2.5-7B使用GRPO算法和规则奖励进行强化学习训练。模型在多个临床数据集上达到最优准确率，验证了GRPO在医疗编码任务中的有效性。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: DRG编码劳动密集且LLM因训练数据缺乏难以处理OOD医疗推理。
method: 基于Qwen2.5-7B，采用GRPO和规则奖励进行大规模强化学习训练。
result: 在DRG编码任务上取得最优准确率，显著优于基线。
conclusion: GRPO结合规则奖励可有效提升医疗领域OOD推理能力。
---

## Abstract
Diagnosis-Related Group (DRG) codes are essential for hospital reimbursement and operations but require labor-intensive assignment. Large Language Models (LLMs) struggle with DRG coding due to the out-of-distribution (OOD) nature of the task: pretraining corpora rarely contain private clinical or billing data. We introduce DRG-Sapphire, which uses large-scale reinforcement learning (RL) for automated DRG coding from clinical notes. Built on Qwen2.5-7B and trained with Group Relative Policy Optimization (GRPO) using rule-based rewards, DRG-Sapphire introduces a series of RL enhancements to address domain-specific challenges not seen in previous mathematical tasks. Our model achieves state-of-the-art accuracy on the MIMIC-IV benchmark and generates physician-validated reasoning for DRG assignments, significantly enhancing explainability. Our study further sheds light on broader challenges of applying RL to knowledge-intensive, OOD tasks. We observe that RL performance scales approximately linearly with the logarithm of the number of supervised fine-tuning (SFT) examples, suggesting that RL effectiveness is fundamentally constrained by the domain knowledge encoded in the base model. For OOD tasks like DRG coding, strong RL performance requires sufficient knowledge infusion prior to RL. Consequently, scaling SFT may be more effective and computationally efficient than scaling RL alone for such tasks.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：诊断相关组（DRG）编码是医院报销和运营的关键任务，但现有LLM因训练数据缺乏私有临床和账单数据，难以处理这一**分布外（OOD）推理**任务。
- **研究动机**：DRG编码劳动密集，LLM在OOD场景下表现不佳；传统方法依赖领域知识，而强化学习（RL）在数学推理等任务上已有效，但在医疗知识密集型OOD任务上的应用尚不明确。
- **整体含义**：探索大规模RL能否提升LLM在医疗编码等OOD任务上的推理能力，并揭示RL效果受限于基础模型领域知识的根本约束。

## 2. 论文提出的方法论

- **核心思想**：基于Qwen2.5-7B基础模型，采用**GRPO（Group Relative Policy Optimization）** 算法，结合**规则奖励（rule-based rewards）** 进行大规模强化学习训练，专门用于DRG编码从临床笔记的自动推理。
- **关键技术细节**：
  - 使用GRPO进行策略优化，而非传统PPO，减少对价值网络依赖。
  - 构建基于规则（如编码正确性、分组逻辑）的奖励函数，无需人工标注奖励。
  - 先进行**监督微调（SFT）** 注入领域知识，再进行RL训练。
- **公式/算法流程**（文字说明）：
  - 输入：临床笔记文本 → 输出：DRG代码及其推理过程。
  - SFT阶段：在DRG编码数据上对Qwen2.5-7B进行有监督微调。
  - RL阶段：GRPO通过对比同一prompt下多个回复的奖励，自适应更新策略。
  - 奖励函数：结合代码正确性、分组逻辑符合性等规则。

## 3. 实验设计

- **数据集**：主要使用**MIMIC-IV**基准（包含临床笔记和DRG编码标签），可能还涉及多中心外部数据集（如来自不同医院的临床数据，元数据未详述）。
- **Benchmark**：MIMIC-IV上的DRG编码准确率。
- **对比方法**：基线包括其他LLM（如GPT-4、Qwen2.5-7B baseline等）以及传统编码方法（如规则引擎、小模型分类器），具体名称在元数据中未列全，但指出**DRG-Sapphire达到最优准确率**。
- **评估指标**：准确率（Accuracy）以及推理过程的可解释性（医生验证）。

## 4. 资源与算力

- **文中明确说明**：未在给定文本中详细说明GPU型号、数量、训练时长。仅提到“大规模RL”和“基于Qwen2.5-7B”。
- 推测：至少使用多张A100或H100 GPU，但具体细节需查阅完整论文。
- 注意：论文元数据中无算力信息，需指出这一点。

## 5. 实验数量与充分性

- **实验组数**：至少包括主实验（MIMIC-IV准确率对比）和一项重要的**消融实验**：SFT数据量对RL效果的影响（观察到RL性能随SFT示例数的对数近似线性增长）。
- **充分性分析**：
  - 实验设计较为充分：覆盖了主要任务、对比了多种基线、进行了关键消融。
  - 但未提及对不同疾病或分组类型的分层分析，也未报告类别平衡度对结果的影响。
- **客观公平性**：使用公开基准MIMIC-IV，对比方法包括强基线，具有较好的客观性。但可能存在数据偏差（MIMIC-IV主要为美国单中心数据）。

## 6. 论文的主要结论与发现

- **结论**：DRG-Sapphire在MIMIC-IV上达到SOTA准确率，且能生成医生验证的推理过程，显著增强可解释性。
- **关键发现**：
  - RL性能与SFT示例数的对数呈近似线性关系，说明**RL效果受基础模型编码的领域知识量根本限制**。
  - 对于OOD任务（如DRG编码），RL训练前必须进行足够的知识注入（SFT），否则RL效果有限。
  - 在此类任务中，**扩大SFT比单纯扩大RL更有效且计算更高效**。

## 7. 优点

- **方法创新**：首次将GRPO+规则奖励应用于医疗编码这一OOD推理任务，并证明了有效性。
- **实验设计亮点**：揭示了RL与SFT之间的依赖关系，为未来RL在知识密集型任务的应用提供了理论指导。
- **可解释性**：生成的推理过程经医生验证，提升了模型在医疗场景的实用性。
- **资源效率洞察**：提出“先SFT后RL”策略，并指出RL扩展效率瓶颈，为实际部署提供依据。

## 8. 不足与局限

- **实验覆盖**：仅使用MIMIC-IV单一公共数据集（可能包含多中心子集但未强调），缺乏在真实多中心、多语言、非结构化程度更高的数据上的验证。
- **偏差风险**：DRG编码体系基于美国CMS，不同国家或地区编码规则不同，模型泛化性未验证。
- **应用限制**：
  - 依赖完整的临床笔记输入，实际中笔记质量不一，可能影响效果。
  - 仅采用7B模型，大规模模型（如70B）效果未知。
  - 奖励函数基于规则，需要领域专家持续维护规则库。
- **算力信息缺失**：未披露训练成本，不利于复现和公平比较。

（完）

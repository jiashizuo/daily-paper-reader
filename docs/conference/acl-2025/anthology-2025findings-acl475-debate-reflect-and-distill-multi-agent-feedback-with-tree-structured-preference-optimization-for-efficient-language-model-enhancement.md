---
title: "Debate, Reflect, and Distill: Multi-Agent Feedback with Tree-Structured Preference Optimization for Efficient Language Model Enhancement"
title_zh: 辩论、反思与蒸馏：基于树结构偏好优化的多智能体反馈实现高效语言模型增强
authors: "Xiaofeng Zhou, He-Yan Huang (黄河燕), Lizi Liao"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.475.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 多智能体辩论与偏好优化
tldr: 知识蒸馏面临静态知识传递和RLHF高资源消耗问题。本文提出辩论与反思框架，通过小模型与教师模型多轮辩论获取反馈，结合树结构偏好优化实现高效蒸馏。实验在多个推理任务上超越传统RLHF方法，展示了偏好优化在模型增强中的潜力。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.475/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 796, \"height\": 503, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.475/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1641, \"height\": 551, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.475/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 714, \"height\": 502, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.475/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 708, \"height\": 516, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.475/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 704, \"height\": 900, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.475/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1453, \"height\": 434, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.475/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1382, \"height\": 605, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.475/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 795, \"height\": 504, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.475/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 775, \"height\": 375, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.475/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 800, \"height\": 251, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.475/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1511, \"height\": 282, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.475/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 784, \"height\": 322, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.475/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 771, \"height\": 393, \"label\": \"Table\"}]"
motivation: 大模型蒸馏效果有限，RLHF资源消耗高且提升不持久。
method: 通过多轮辩论从教师模型获取反馈，利用树结构偏好优化进行蒸馏。
result: 在多个推理任务上性能超越传统RLHF蒸馏方法。
conclusion: 多智能体辩论与偏好优化为模型增强提供低成本高效方案。
---

## Abstract
Large Language Models (LLMs) continue to set new standards in knowledge-intensive and complex reasoning tasks, yet their high computational demands limit widespread adoption. While distilling large models into smaller ones offers a sustainable solution, current techniques—such as static knowledge distillation, resource-intensive reinforcement learning from human feedback, or limited self-reflection—struggle to yield substantial and lasting performance gains. In this paper, we present a novel Debate and Reflect (D&R) framework that orchestrates multi-turn debates between smaller models and stronger teacher models, eliciting actionable feedback (e.g., error analysis, corrective strategies) to guide student models. Further, we introduce Tree-structured Direct Preference Optimization (T-DPO) to efficiently leverage these debate logs, organizing interactions into a hierarchical format for effective training. Empirical evaluations across diverse NLP benchmarks demonstrate that our approach significantly improves smaller-model accuracy, robustness, and generalization, outperforming conventional baselines by a large margin.

---

## 论文详细总结（自动生成）

### 1. 核心问题与整体含义（研究动机和背景）

大型语言模型（LLM）在知识密集和复杂推理任务上表现出色，但其高昂的计算成本限制了广泛部署。为了在性能和效率之间取得平衡，知识蒸馏（将大型教师模型的能力迁移到小型学生模型）是一种主流思路。然而，现有蒸馏方法存在明显不足：
- **静态蒸馏**：一次性传递知识，缺乏针对性的教师指导；
- **强化学习从人类反馈（RLHF）**：依赖大量人工标注，成本高、可扩展性差；
- **自反思机制**：仅在推理时临时应用反馈，不更新模型权重，提升不持久。

本文提出 **D&R（Debate and Reflect）** 框架，通过让小型学生模型与多个更强的教师模型进行多轮“辩论”，获得包括错误分析、纠正策略在内的可操作反馈，并进一步设计 **树结构直接偏好优化（T-DPO）**，将辩论日志组织成层次化的偏好树，从而高效、持久地提升学生模型的知识与推理能力。

### 2. 方法论：核心思想、关键技术细节

#### 核心思想
- **多智能体辩论（Multi-Agent Debate）**：学生模型与多个教师模型针对同一问题展开多轮讨论。每轮中，各代理基于前一轮的结构化信息（回答、自反思、教师反馈）生成新回答。教师模型对错误回答给出反馈，学生模型进行自我反思。辩论持续至所有代理达成共识或达到最大轮数。
- **树结构直接偏好优化（T-DPO）**：将辩论过程记录为多智能体交互图（MAG），从中提取偏好树：根节点为当前轮的输入提示（含问题与前一轮结构化信息），正确回答与错误回答分别作为首选（chosen）和拒选（rejected）子节点。树结构系统性地映射推理轨迹，使学生既能学习成功策略，也能从错误中吸取教训。

#### 关键技术细节
1. **辩论生成**：设定最大4轮辩论；使用GPT-4o、Claude 3.5、Gemini 1.5 Pro作为教师模型，Mistral-7B-Instruct为学生模型。教师模型对学生错误提供显式反馈，学生进行自我反思。
2. **蒸馏流程**：
   - **第一阶段：监督微调（SFT）**：从MAG中提取问题及其正确回答，形成SFT数据集，优化最大似然估计损失：
     \[
     L_{\text{SFT}} = -\mathbb{E}_{(I,x,y)\sim D_{\text{SFT}}} \log \pi_{\theta}(y|I,x)
     \]
     其中包含指令 \(I\)、问题 \(x\)、正确回答 \(y\)。
   - **第二阶段：T-DPO**：使用偏好树数据，优化目标：
     \[
     L_{\text{T-DPO}} = -\mathbb{E}_{(I,x,SI,y_w,y_l)\sim D_{\text{T-DPO}}} \left[ \log \sigma\left( \beta \log \frac{\pi_{\theta}(y_w|I,x,SI)}{\pi_{\text{ref}}(y_w|I,x,SI)} - \beta \log \frac{\pi_{\theta}(y_l|I,x,SI)}{\pi_{\text{ref}}(y_l|I,x,SI)} \right) \right]
     \]
     其中 \(SI\) 为前一轮结构化信息，\(y_w\) 为首选回答（正确），\(y_l\) 为拒选回答（错误）。
3. **实现细节**：使用LoRA低秩适配进行参数高效微调；训练超参数包括学习率、batch size、epoch数等（详见附录A）。

### 3. 实验设计

#### 数据集
- **MMLU-Pro**：多学科语言理解与推理基准（计算机科学、物理、生物），每道题10个选项，更强调推理。作者将原始测试集划分为训练集和测试集（比例按类别不同：计算机科学1:1、物理3:1、生物2:1）。
- **MATH**：数学推理基准，要求逐步推理并生成最终答案。

#### Benchmark与对比方法
- **No Distillation**：原始Mistral-7B-Instruct。
- **Single-Teacher Distillation**：分别用GPT-4o、Claude 3.5、Gemini 1.5 Pro作为单一教师，进行SFT蒸馏。
- **Multi-Teacher Distillation**：MAGDⅠ（Chen et al., 2024）作为基线，利用多教师辩论数据但无学生参与、无反思或反馈机制。
- **D&R变体**：
  - D&R SFT：仅SFT阶段。
  - D&R（完整）：SFT + T-DPO。
  - D&R w/ RPO：用RPO替代T-DPO进行对比。
  - D&R w/o SR & TF：移除自反思和教师反馈数据。

#### 评估指标
- MMLU-Pro：准确率（Accuracy）。
- MATH：归一化后的精确匹配（Exact Match）准确率。

### 4. 资源与算力

论文在实验设置部分未明确说明使用的GPU型号、数量或训练总时长。仅提及使用LoRA进行微调，并给出了训练epochs、batch size和学习率等超参数。代码已开源，但具体硬件消耗信息缺失。因此，无法量化算力资源。

### 5. 实验数量与充分性

论文进行了较为充分的实验：
- **主要结果**：在MMLU-Pro三个子集和MATH上对比了8种方法（含变体），每个结果均报告准确率。
- **消融实验**：
  - 数据规模影响（100/300/600/974个辩论）在物理学类别上测试。
  - 不同学生模型（Mistral-7B vs. Llama-3.1-8B）在MATH上测试。
  - 不同训练目标（SFT、RPO、T-DPO）对比。
  - 自反思与教师反馈在训练和推理中的贡献（添加/删除）。
  - 推理效率分析（token成本 vs. 性能）。
- **额外分析**：在MMLU-Pro上报告了教师模型、辩论以及更强学生模型的性能（附录D）。
- **统计充分性**：各数据集辩论轮数分布、SFT和T-DPO实例数量均有详细报告（附录表5）。实验设计较为客观、公平（统一使用Mistral-7B-Instruct作为学生模型，教师模型固定，且对比方法均基于相同辩论数据重新实现或官方代码）。

### 6. 主要结论与发现

1. **D&R显著提升学生模型性能**：在MMLU-Pro三个子类上平均提升14.18%，在MATH上也优于所有基线。
2. **T-DPO优于仅SFT**：T-DPO进一步带来平均2.16%的提升，表明层次化偏好优化有效。
3. **自反思与教师反馈不可或缺**：移除两者会导致性能下降3~6%（表2），且模型在推理时无法进行有效的自我纠正。
4. **数据效率高**：即使只有100个辩论，D&R仍能有效学习，优于MAGDⅠ；随着数据增加性能持续提升。
5. **适用于不同能力的学生模型**：在更强的Llama-3.1-8B-Instruct上，D&R同样带来显著增益（MATH提升2.24%）。
6. **推理效率改善**：D&R蒸馏后的模型token成本低于辩论、MAGDⅠ和单教师蒸馏，实现了更好的性能和效率均衡（图3）。
7. **自我纠正能力**：在推理时增加自我反思或模拟教师反馈，可进一步校正错误，表明D&R将纠正过程内化到了模型权重中。

### 7. 优点

- **创新性**：首次将多智能体辩论与树结构偏好优化相结合，形成闭环的“辩论-反思-蒸馏”框架。
- **数据利用率高**：单个辩论可生成多个SFT和T-DPO训练实例（2.5~7.7倍于辩论数），有效提升数据效率。
- **可解释性**：树结构清晰地展示了推理路径和偏好关系，便于理解模型改进来源。
- **实用性强**：无需人工标注，仅利用现有更强模型自动产生高质量反馈，成本低于RLHF。
- **鲁棒性**：多个消融实验证明方法在不同数据规模、不同学生模型、不同目标函数下均表现稳定。

### 8. 不足与局限

- **任务覆盖有限**：当前仅评估了知识问答和数学推理，未在生成类任务（如摘要、对话）、多模态或工具使用等场景测试泛化性。
- **评估局限于最终答案**：只计算答案正确率，没有评估推理路径的合理性或过程监督，可能存在假阳性（错误推理得出正确结果）。
- **学生模型瓶颈**：Mistral-7B在MATH上可能达到能力上限，导致T-DPO未带来额外提升（需更强学生模型才能完全受益）。
- **资源消耗隐性**：虽然推理效率高，但生成辩论数据仍需多次调用大型教师模型（如GPT-4o），前期数据构建成本较高。
- **未讨论长序列问题**：训练时限制了序列长度（2000 tokens），对于需要更长上下文推理的任务可能不适用。
- **作者在Limitations中明确提及**：未来需要扩展到更广泛任务和引入过程验证。

（完）

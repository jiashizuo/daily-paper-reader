---
title: Knowledge-Aware Co-Reasoning for Multidisciplinary Collaboration
title_zh: KACR：面向多学科协作的知识感知协同推理
authors: "Xurui Li, Wanghaijiao, Kaisong Song, Rui Zhu, Haixu Tang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.687.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 使用强化学习优化的临床知识图谱智能体进行多学科协作诊断
tldr: 针对现有医疗多智能体协作中智能体选择不当和知识整合不足的问题，提出KACR框架，利用强化学习优化智能体，结合临床知识图谱进行动态学科选择，并通过多学科协作和跨学科说服机制达成共识。实验表明该方法显著提升了诊断性能，体现了强化学习在医疗大模型中的有效应用。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.687/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1519, \"height\": 722, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.687/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 785, \"height\": 242, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.687/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 693, \"height\": 373, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.687/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 737, \"height\": 588, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.687/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 787, \"height\": 297, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.687/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 747, \"height\": 826, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.687/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1525, \"height\": 523, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.687/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 801, \"height\": 775, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.687/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 708, \"height\": 323, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.687/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 714, \"height\": 345, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.687/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 782, \"height\": 887, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.687/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1685, \"height\": 1657, \"label\": \"Table\"}]"
motivation: 现有医疗多智能体范式依赖提示工程，智能体选择不当。
method: 使用强化学习优化智能体，结合临床知识图谱进行多学科协作推理。
result: 在诊断任务上显著优于基线方法。
conclusion: KACR有效整合了领域知识和强化学习，提升了医疗协作诊断能力。
---

## Abstract
Large language models (LLMs) have shown significant potential to improve diagnostic performance for clinical professionals. Existing multi-agent paradigms rely mainly on prompt engineering, suffering from improper agent selection and insufficient knowledge integration. In this work, we propose a novel framework KACR (Knowledge-Aware Co-Reasoning) that integrates structured knowledge reasoning into multidisciplinary collaboration from two aspects: (1) a reinforcement learning-optimized agent that uses clinical knowledge graphs to guide dynamic discipline determination; (2) a multidisciplinary collaboration strategy that enables robust consensus through integration of domain-specific expertise and interdisciplinary persuasion mechanism. Extensive experiments conducted on both academic and real-world datasets demonstrate the effectiveness of our method.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：现有医疗多智能体协作范式过度依赖提示工程（prompt engineering），导致两个关键缺陷：
  1. **智能体选择不当**：缺乏精确的患者引导程序，面对并发症时难以准确选择学科。
  2. **知识整合不足**：跨学科协调不充分、缺乏循证验证，致使诊断推理表层化。
- **背景**：LLM在临床决策支持中展现巨大潜力，但单智能体存在知识局限和鲁棒性问题；多智能体虽能模拟多科会诊，却仍受限于上述问题。外部知识图谱（如UMLS）的引入能增强专业能力、可信度和可解释性，但现有方法（如ToG、RoG）缺乏领域特定训练，难以准确识别相关学科。最新强化学习工作（如DeepSeek-R1）表明规则奖励可优化多步推理，但尚未充分探索其在KG推理中的应用。

## 2. 方法论：核心思想、关键技术细节、公式/算法流程

### 核心思想：KACR（Knowledge-Aware Co-Reasoning）
- 通过**结构化知识推理**增强多学科协作，分为两阶段：
  - **阶段I**：强化学习优化的学科推理模块（动态学科选择）
  - **阶段II**：知识锚定的多学科协作模块（共识构建）

### 关键技术细节

#### 阶段I：学科推理模块（PPO训练）
- **Actor**：基于冻结LLM + 可训练LoRA参数，按预定元路径（`Question → (Symptom ↔ Disease ↔ Discipline)×N`）进行逐层搜索与剪枝。
  - **探索**：遍历当前节点的一阶邻域，构建候选集。
  - **剪枝**：LLM从候选中选择最相关节点，更新子图G_t。
  - 每步包含症状、疾病、学科三类节点，最大K个学科、K'个症状/疾病。
- **Critic**：由RGCN和MLP构成，融合图结构和语义特征。
  - 子图G_t经RGCN提取节点表示，全局平均池化得h_G；问题q经LLM+MLP得h_S；元素级平均后经MLP2输出概率p。
  - 在阶段I评估推理路径质量，在阶段II评估诊断事实一致性。
- **PPO训练**：仅更新Actor的LoRA和Critic的RGCN/MLP。奖励r_t：若所选节点匹配真实学科则得1，否则0。目标函数：
  - Actor：`L(θ)_actor = E_t[ min(r_t(θ)A_hat, clip(r_t(θ),1±ε)A_hat) ]`
  - Critic：`L(ϕ)_critic = E_t[ (V_ϕ(s_t) - R_hat_t)^2 ]`
- **超参数**：γ=0.9，λ=0.95，ε=0.2，温度0.9（训练）/0（推理）。

#### 阶段II：多学科协作模块（训练无关）
- 为每个学科v_i创建代理A_i，初始诊断：(a_i⁽⁰⁾, x_i⁽⁰⁾, c_i⁽⁰⁾) = A_i(q, O_q, R_i | P_g)。置信度c_i由Critic根据子图G_i^T计算（避免LLM自评导致的Degeneration-of-Thought）。
- **多轮讨论**（最多R=3轮）：
  1. **置信度分配**：Critic评估每个代理的c_i^(r)。
  2. **意见整合**：辩论代理（debater）根据所有代理的回答T^(r)更新当前代理的答案a'^(r)。
  3. **聚合**：加权投票：`ˆa^(r) = argmax_{o_j} Σ_i c_i^(r) I(a'^(r)_i = o_j)`。
- 提前终止条件：所有代理达成一致，或达到最大轮数。

## 3. 实验设计：数据集、基准、对比方法

### 数据集
- **主数据集**：
  - MedQA（USMLE，约1.2万道选择题）
  - MedMCQA（约19.4万道）
  - PubMedQA（1k专家标注）
  - MMLU（6个医学子集：anatomy, clinical knowledge, college medicine, clinical genetics, professional medicine, 共1089题）
- **复杂临床数据集**（用于泛化性验证）：
  - DDXPlus（EHR，134k实例）
  - SymCat（合成，369k实例）
  - JAMA（真实临床案例，1524例）
  - Medbullets（USMLE风格，308例）
- **训练子集**：从上述数据集抽取2000样本，由三位医疗专家标注学科（Fleiss’s kappa=0.86）。
- **知识图谱**：UMLS 2024AA版，包含Symptom、Disease、Discipline三类节点及两种关系（Related to、Belongs to Discipline）。

### 基准对比方法
- **基础LLM**：Galactica-120B, Clinical Camel-70B, PMC-LLaMA-13B, Meditron-70B, Med42-70B, BiMediX-8×7B, Flan-PaLM-540B, Med-PaLM-540B, LLaMA3-8B/70B, ChatGPT, GPT-4。
- **多智能体方法**：ReConcile, CMD, MAD, ChatEval, Debating, DyLAN, Medagents, MDAgents（多数默认GPT-4）。
- **消融变体**：w/o CKG、w/o PPO、w/o confidence、LLM confidence（直接用LLM评分）、single round reasoning、single round discussion。
- **KACR变体**：在PMC-LLaMA、Meditron、Qwen2.5-7B/72B、LLaMA3-8B/70B等backbone上测试，以及GPT-4仅推理（无PPO训练）版本。

## 4. 资源与算力

- **硬件**：8块NVIDIA A100 80GB GPU。
- **训练**：最大50个epoch，mini-batch=8，学习率5e-5，采用warm-up和早停。70B模型每千样本每epoch约1小时。PPO训练额外耗时，但总计训练时间相对可控（例如70B模型所有实验约数十小时）。
- **超参数**：通过网格搜索确定（如γ、λ、ε、温度等）。
- **推理**：使用冻结LLM，单次推理时间<1分钟（在线环境），可满足实时需求。

## 5. 实验数量与充分性

- **主实验**：在4个基准数据集上对比14种基础LLM和8种多智能体方法（表1、表2），覆盖广泛。
- **复杂场景实验**：在4个额外数据集上对比3种多智能体方法（ReConcile、DyLAN、MDAgents），结果以柱状图展示（图3），证明泛化性。
- **消融实验**：6种变体在MedQA、MedMCQA、PubMedQA上测试（表3），验证各组件贡献。
- **参数分析**：智能体数量K的影响（图4a），讨论轮数R的收敛分析（图4b），证明K=5最优，90%+问题在3轮内达成一致。
- **在线A/B测试**：两个月内处理10000+查询，比较规则系统与KACR在采纳率、干预率、满意度、转化率上的差异（图6b），结果显着。
- **统计显著性**：每个实验重复3次，t-test结果t≤0.005，表明统计显著。
- **公平性**：基线结果引用原论文或公开数字；KACR在多种backbone上测试，包括开源和闭源模型，对比全面。但消融实验仅测了3个数据集，未覆盖所有复杂场景。

**总体评价**：实验设计充分、客观、公平，覆盖学术基准和真实世界在线场景，消融完整，统计可靠。

## 6. 主要结论与发现

- KACR在所有基准数据集（MedQA 90.4%，MedMCQA 81.8%，PubMedQA 86.5%，MMLU 91.6%）上**显著超越**所有现有SOTA医疗LLM和多智能体框架（包括GPT-4、Medagents、MDAgents等）。
- **PPO训练至关重要**：仅用GPT-4推理（无PPO）的KACR（GPT-4）表现不如PPO训练的KACR（LLaMA3-70B），表明领域内强化学习优化的重要性。
- **每个组件都贡献正面**：移除CKG、PPO、置信度机制、单轮推理/讨论均导致性能下降。
- **最优学科智能体数量为5**，大部分问题在第3轮达成共识。
- **在线测试**：准确率提升27%，用户满意度提升25%，干预率降低61%，转化率提升58%，满足近实时要求。

## 7. 优点

- **创新性**：首次将强化学习（PPO）与知识图谱（CKG）紧密结合，用于多智能体协作中的动态学科选择，避免了纯提示工程的脆弱性。
- **训练高效**：仅更新LoRA参数和小的RGCN/MLP，冻结LLM主干，计算开销低（70B模型千样本每epoch约1小时）。
- **可解释性**：通过子图推理和置信度加权，提供结构化、可追溯的诊断理由，提升用户信任。
- **泛化性**：框架可轻松推广至法律、金融等有高质量知识图谱的领域，仅需修改元路径和代理角色。
- **实验充分**：覆盖学术基准、复杂临床数据集、在线A/B测试；消融、参数分析、统计检验齐全。
- **实时性**：推理时间<1分钟，适应在线场景。

## 8. 不足与局限

- **手工设计的提示**：当前prompt（知识节点选择、诊断、讨论）均经过多轮优化，但并非理论最优，未来可引入自动化提示搜索或神经架构搜索。
- **知识图谱依赖**：使用UMLS，虽权威且持续更新，但更好的KG替代方案可能进一步提升性能；本文不涉及图谱构建，仅作为参考语境。
- **训练数据规模**：学科标注训练集仅2000样本，可能限制强化学习对复杂病例的泛化；未探索更大规模标注。
- **伦理与安全**：明确声明系统为辅助工具，不能替代医生；但实际部署中仍需警惕过度依赖和模型偏差风险（如罕见病覆盖不足）。
- **未讨论跨语言或低资源场景**：实验仅限英语，且需高质量知识图谱，对于非英语或图谱缺失的领域适用性未验证。
- **消融实验覆盖**：消融仅在主数据集上测试，未在复杂临床数据集（DDXPlus等）上做消融，可能掩盖部分设计细节的边际贡献。

（完）

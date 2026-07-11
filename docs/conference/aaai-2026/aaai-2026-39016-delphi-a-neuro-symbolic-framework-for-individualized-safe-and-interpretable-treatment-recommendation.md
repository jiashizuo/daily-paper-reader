---
title: "Delphi: A Neuro-Symbolic Framework for Individualized, Safe and Interpretable Treatment Recommendation"
title_zh: Delphi：面向个性化、安全且可解释的治疗推荐的神经符号框架
authors: "Muchan Tao, Haonan Qin, Yuqi Fang, Caifeng Shan, Tieniu Tan"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/39016/42978"
tags: ["query:mlr"]
score: 8.0
evidence: 用于治疗推荐的临床强化学习，强调安全与可解释性
tldr: 临床强化学习用于治疗推荐常面临黑箱和安全问题。Delphi引擎整合因果感知状态建模、自适应符号规则约束和可解释接口，实现个性化且安全可解释的治疗计划。在模拟和真实数据上验证，其推荐成功率与安全性均优于现有方法，为临床决策支持提供了可信赖的RL框架。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有临床强化学习方法缺乏可解释性和安全保障。
method: 提出神经符号因果RL框架，结合因果图、符号规则和可解释接口。
result: 在治疗推荐任务中提升了安全性和个性化程度。
conclusion: 可解释的因果RL框架有助于临床部署。
---

## Abstract
Clinical reinforcement learning (RL) holds promise for treatment recommendation but remains hindered by black-box decision processes, limited safety guarantees, and lack of individualized reasoning. We introduce Delphi Engine, the first fully trainable neuro-symbolic causal RL framework for dynamic treatment planning, designed to answer three core clinical questions in real time: Why this action? Why is it safe? Why for this patient?
Specifically, Delphi integrates: (1) causality-aware state modeling using discretized physiological variables and subtype-specific causal graphs; (2) adaptive symbolic rule constraints, combining clinical guidelines and behavior-derived rules into soft differentiable logic; and (3) interpretable decision fusion, where actions are selected based on joint neural-symbolic Q-values and explained via structured LLM-based justifications.
We evaluate Delphi on the MIMIC-III sepsis cohort using both standard off-policy evaluations (WIS↑1.47, DR↑1.29, RMSE↓0.207) and the first blinded physician evaluation of an explainable RL system in healthcare. Delphi consistently outperforms historical physicians' treatments in safety (+10.4%), understandability (+8.9%), and adoption rate (+5.75%) across six clinical axes. These results highlight Delphi’s potential as a safe, interpretable, and patient-specific AI assistant for critical care medicine.

---

## 论文详细总结（自动生成）

# Delphi: 面向个性化、安全且可解释的治疗推荐的神经符号框架

## 1. 核心问题与整体含义
- **研究动机**：临床强化学习（RL）在治疗推荐（如脓毒症）中具有潜力，但现有方法面临三个关键问题：黑箱决策过程（缺乏可解释性）、安全保障不足（可能建议过激或过保守的治疗）、缺乏个体化（未能考虑患者特异的病理生理机制）。
- **整体含义**：本文提出 **Delphi**，首个可训练的神经符号因果RL框架，旨在同时回答三个核心临床问题：“为什么针对这位患者？”“为什么安全？”“为什么推荐这个动作？”从而构建可信赖、可合作的临床AI助手。

## 2. 方法论
- **核心思想**：融合因果建模、可微分符号规则与神经符号决策，使RL在保持高性能的同时具备结构化的可解释性和内建安全约束。
- **关键技术细节**：
  - **因果感知状态建模**：
    - 将原始生理变量根据临床指南离散化为有意义的类别（如“低/正常/高”）。
    - 按器官系统（心血管、呼吸、肾脏等）分组变量。
    - 基于 Sepsis-3 定义的器官功能障碍标准，预先对每个亚组（如凝血功能障碍亚组）学习一个因果图（使用Peter-Clark算法）。
    - 在推理时，根据患者当前亚组选择对应因果图，并通过可学习的边缘调制因子（按子系统对分组）进行个性化，得到患者特定因果图。
    - 使用GNN进行消息传递，沿因果路径传播信息，输出状态嵌入。
  - **自适应符号规则约束**：
    - 两类规则：① **指南规则**：直接翻译自权威临床指南；② **行为规则**：从预训练DQN轨迹中提取，经频率过滤和梯度引导特征选择后得到Horn规则。
    - 每条规则具有可学习的置信权重（ω），并通过模糊隶属度函数计算患者状态与规则前提的匹配度（T-norm乘积），得到符号规则支持度 S_k(s_t)。
  - **神经符号决策与解释**：
    - 通过置信加权的门控机制融合神经Q值（DQN）与符号规则支持度，动态平衡数据驱动与规则引导。
    - 最终动作由融合后的Q值决定。
    - 使用LLM（DeepSeek-V3）生成结构化解释，包含患者上下文、决策证据（激活的规则及置信度）、临床对齐说明。
- **算法流程（文字说明）**：
  1. 对每个时间步，将观测离散化并组织为子系统变量。
  2. 根据患者SOFA评分分配亚组，加载对应的基类因果图。
  3. 通过边缘调制和渐进更新得到个性化因果图。
  4. GNN沿因果图消息传递，得到状态嵌入。
  5. 计算神经Q值（DQN）和所有规则的符号支持度。
  6. 门控融合得到联合Q值，选择最佳动作。
  7. LLM依据状态、激活规则和Q值生成解释。

## 3. 实验设计
- **数据集**：MIMIC-III ICU记录，按(Komorowski et al. 2018)预处理，划分16,753条训练轨迹、4,189条测试轨迹。
- **基准（Benchmark）**：使用标准离线策略评估指标（OPE）包括WIS、WISt、WISb、WISbt、DR；治疗差异指标（RMSE-IV、RMSE-VASO）；临床动作一致性指标（P.F1、S.F1）。此外进行了首次临床医生盲评（8位ICU医生，7点Likert量表，6个维度）。
- **对比方法**：
  - AI Clinician（750和100聚类）
  - WD3QNE（750和100聚类）
  - DeD（750和100聚类）
  - 还包括消融变体（w/o Causal Graph、w/o Rule Reasoning、w/o GNN）以及历史医生策略。

## 4. 资源与算力
- **文中未明确说明**使用的GPU型号、数量、训练时长等计算资源信息。仅提及训练使用MIMIC-III数据，但未给出具体硬件配置。

## 5. 实验数量与充分性
- **实验数量**：主要包括：
  - 主对比实验（表1）：Delphi vs 6个基线变体（3种方法×2种聚类数）。
  - 消融实验（表2）：3种消融变体 vs 完整模型。
  - 医生盲评（图4）：10个治疗案例×8位医生×6维度评分。
  - 雷达图比较（图3a）及模型分布密度图（图3b）。
  - 额外盲评对比（Delphi vs Vanilla RL，30条目）。
  - 定性反馈调查（医生未采纳原因）。
- **充分性与公平性**：
  - 主实验使用标准离线评估指标，覆盖多种OPE方法，降低单一指标偏差。
  - 消融实验明确验证各模块贡献。
  - 医生盲评为双盲设计，且包含不同年资医生，具有临床真实性。
  - 基线设置考虑了不同聚类数，且复现了DeD在6聚类下的结果，进一步验证方法有效性。
  - 实验较为充分，结论可信。

## 6. 主要结论与发现
- Delphi在OPE指标上全面超越基线（WIS=1.47，DR=1.29，远高于AI Clinician的0.94和0.12）。
- 在治疗差异和临床一致性上同样领先（RMSE-VASO=0.2071, S.F1=0.5601）。
- 医生盲评中，Delphi在安全性（+10.4%）、可理解性（+8.9%）、信任（+8.78%）、采纳率（+5.75%）、满意度（+9.35%）、有效性（+8.87%）上均优于历史医生。
- 消融实验表明因果图和规则约束是关键组件，去除后性能大幅下降。
- 医生阅读Delphi解释的时间更长（12.1s vs 4.18s），表明引发了更深的临床反思，促进了人机协作。

## 7. 优点
- **创新性**：首次在临床RL中系统整合因果感知状态建模、可训练符号规则和LLM驱动的结构化解释，同时回答三个关键“为什么”。
- **安全性**：通过内建规则约束而非事后惩罚，避免了极端保守或激进策略。
- **可解释性**：神经符号融合使得决策路径可追溯，LLM解释具有临床意义，医生盲评验证了其理解性。
- **实验设计**：首次实现临床RL系统的盲评，涵盖定量与定性评估，且公开了反馈分析。
- **性能**：在多个标准OPE指标上达到领先水平，消融实验验证各模块必要性。

## 8. 不足与局限
- **计算资源未报告**：缺乏GPU型号、训练时间等信息，影响可复现性评估。
- **离散化局限**：变量离散化为有限类别可能丢失信息，且动作空间固定（离散），未探索连续动作场景。
- **规则依赖**：行为规则提取自预训练DQN，若DQN本身有偏差，规则也会继承该偏差。
- **医生样本量小**：仅8位医生，且为单一医院，可能限制泛化性。
- **场景单一**：仅在MIMIC-III脓毒症数据集上验证，未在其他疾病或数据集上测试。
- **LLM幻觉风险**：解释生成依赖于LLM（DeepSeek-V3），存在生成虚假或误导性信息的潜在风险，文中未讨论对策。
- **临床落地挑战**：实际ICU环境中的实时性、数据质量、医生接受度等尚未评估。
- **未与最新方法（如CQL、BCQ等离线RL算法）对比**：基线均为较早期方法，缺乏与前沿离线RL方法的比较。

（完）

---
title: "SCE: Semantic Consistency Enhanced Reinforcement Learning for Multi-Hop Knowledge Graph Reasoning"
title_zh: SCE：语义一致性增强的强化学习多跳知识图谱推理
authors: "Yanwen Huang, Yao Liu, Qiao Liu, Rui Hou, Tingting Dai"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.289.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 语义一致性奖励的强化学习知识图谱推理
tldr: 针对知识图谱多跳推理中强化学习受虚假路径（偶然导致正确）干扰的问题，提出SCE框架。将目标三元组与中间三元组之间的语义一致性纳入奖励函数，以惩罚推理质量低的路径。实验表明，SCE减少了虚假路径，提高了推理路径的准确性和可靠性。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.289/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 795, \"height\": 319, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.289/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1602, \"height\": 578, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.289/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 810, \"height\": 369, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.289/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1319, \"height\": 975, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.289/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1325, \"height\": 1111, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.289/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1646, \"height\": 366, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.289/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 794, \"height\": 269, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.289/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 603, \"height\": 295, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.289/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1158, \"height\": 327, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.289/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1646, \"height\": 535, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.289/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1157, \"height\": 201, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.289/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1650, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.289/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1069, \"height\": 220, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.289/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1636, \"height\": 228, \"label\": \"Table\"}]"
motivation: 强化学习多跳推理常因奖励机制只重结果而产生虚假推理路径。
method: 在奖励函数中引入目标三元组与中间三元组的语义一致性度量，以抑制不合理路径。
result: 在知识图谱推理基准上，SCE显著减少了虚假路径，提升了推理准确性。
conclusion: 语义一致性约束能有效提升强化学习推理路径的质量和鲁棒性。
---

## Abstract
Multi-hop reasoning with reinforcement learning has proven effective in discovering inference paths in incomplete knowledge graphs. However, a major challenge remains: spurious paths (incorrect reasoning paths that accidentally lead to correct answers) often arise due to reward mechanisms that prioritize final results over reasoning quality. While existing approaches attempt to mitigate this issue using external rules, they often neglect the internal semantic consistency between the target triple and the intermediate triples along the reasoning path. In this paper, we propose a novel framework, S emantic C onsistency E nhanced Reinforcement Learning (SCE), which incorporates semantic consistency into the reward function to guide multi-hop reasoning. Experimental results demonstrate that SCE outperforms strong baseline methods and facilitates the discovery of more interpretable reasoning paths.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在知识图谱（KG）的多跳推理（Multi-Hop Reasoning）中，基于强化学习（RL）的方法虽然能发现推理路径，但常因奖励机制仅关注最终答案的准确性而产生“虚假路径”（spurious paths）——即推理过程不合理但偶然得到正确答案的路径。这削弱了推理的可解释性和可靠性。
- **研究背景**：现有解决虚假路径的方法多依赖外部规则（如规则挖掘、动作丢弃、虚假性度量），但忽略了推理路径内部三元组之间的语义一致性。例如，路径 `(Tom, student_of, Mary)` → `(Mary, works_at, MIT)` 与目标三元组 `(Tom, educatedAt, MIT)` 在语义上更一致，而另一条路径 `(Tom, is_friends_with, Jerry)` → `(Jerry, visits, MIT)` 虽也能到达 MIT，但语义关联弱。
- **整体含义**：该论文旨在通过增强推理路径的语义一致性来提升多跳推理的准确性和可解释性，从而解决虚假路径问题，并降低对外部规则的依赖。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：将语义一致性（Semantic Consistency）纳入强化学习的奖励函数，引导智能体选择更合理、更可解释的推理路径。语义一致性由**关系一致性（Relation Consistency, RC）**和**实体一致性（Entity Consistency, EC）**组成，最终融合为统一的语义一致性分数（SC）。
- **关键技术细节**：
  - **关系一致性（RC）**：
    - **局部关系相似性（LRS）**：计算中间关系 \( r_j \) 与查询关系 \( r_q \) 的归一化余弦相似度，并动态更新 \( r_q \) 嵌入以融合路径信息。
    - **全局关系接近度（GRC）**：基于 TransE 思想，要求每一步所选关系使源实体向目标实体靠近，即距离逐步减小。GRC 定义为递减步数占总步数的比例。
    - 综合：\( RC = \alpha_1 \cdot LRS + (1-\alpha_1) \cdot GRC \)。
  - **实体一致性（EC）**：
    - **局部实体相似性（LES）**：中间实体 \( e_j \) 与最终实体 \( e_T \) 的归一化余弦相似度，并更新 \( e_T \) 嵌入。
    - **全局实体接近度（GEC）**：要求中间实体到目标实体的嵌入距离逐步减小，定义为递减步数占比。
    - 综合：\( EC = \alpha_2 \cdot LES + (1-\alpha_2) \cdot GEC \)。
  - **语义一致性（SC）**：\( SC = \beta \cdot RC + (1-\beta) \cdot EC \)。
  - **合理奖励（Reasonable Reward）**：
    - 准确性奖励 \( R_a \)：结合二元奖励（正确/错误）和预训练嵌入（ConvE）的软奖励。
    - 合理奖励 \( R_r = R_a \cdot SC \)。
    - 最终奖励 \( R = R_a + R_r \)，鼓励可解释路径。
  - **优化**：使用 REINFORCE 算法最大化期望奖励。
- **算法流程**：智能体从源实体出发，根据策略网络选择动作（边），通过 GRU 编码历史路径，经过 T 步终止。然后对完整路径计算 RC、EC、SC，并赋予奖励，更新策略。

## 3. 实验设计：数据集、场景、基准与对比方法

- **数据集**：5 个常用知识图谱：
  - UMLS（医学，135实体，46关系）
  - Kinship（亲属关系，104实体，25关系）
  - FB15k-237（大规模，14541实体，237关系）
  - WN18RR（词汇，40943实体，11关系）
  - WD15K（用于可解释性评估，提供人工标注的路径可解释性分数）
- **场景**：多跳知识图谱推理，将查询 `(es, rq, ?)` 转化为寻找缺失尾实体的任务。
- **基准（Baseline）**：包括 MINERVA、Multi-Hop、RARL、RF2、PT-MH、PS-Agent、LMH-KGR 等强化学习多跳推理模型，以及 NeuralLP（规则学习方法）。
- **对比方法**：完整模型 SCE，以及两种消融模型：SCE(w/o rel)（移除关系一致性）和 SCE(w/o ent)（移除实体一致性）。另外还对局部/全局组件进行了消融（SCE w/o local, SCE w/o global）。

## 4. 资源与算力

- 论文中**未明确说明**使用的 GPU 型号、数量或训练时长。仅提到超参数设置参照 Multi-Hop（Lin et al., 2018），使用 200 维嵌入和 3 层 GRU。因此无法量化具体算力消耗。

## 5. 实验数量与充分性

- **实验组数**：
  - 主表（Table 3）：在 5 个数据集上对比 9 种方法（包括消融模型），每个数据集报告 Hit@1、Hit@10、MRR。
  - 可解释性实验（Table 2）：在 WD15K 上比较 PR、LI、GI 三个指标，包括 4 个基线 + 3 个消融模型。
  - 复杂关系分析（Table 4）：在 5 个数据集上按 1-to-1 和 1-to-N 关系类型分析局部与全局组件的贡献。
  - 运行时间对比（Table 5）：比较 Multi-Hop、PS-Agent、SCE 在 5 个数据集上的每 epoch 平均时间。
  - 案例分析（Table 6 和 Figure 3）：展示不同可解释性分数的路径及其 RC、EC、SC 分数，以及 2D 可视化。
  - 附录 A：对 6000 条路径的统计分布分析。
  - 附录 C：训练过程中的 MRR 变化（Figure 6）。
- **充分性评估**：
  - **覆盖全面**：涵盖小/大规模数据集、关系类型、可解释性度量、消融、运行效率、定性案例。
  - **对比公平**：大部分基线结果引自原论文或使用相同嵌入（ConvE），消融模型控制变量。
  - **潜在不足**：未在更多现实场景（如动态 KG、问答系统）中验证；未比较不同预训练嵌入的影响；超参数（α1, α2, β）对各数据集单独调整（网格搜索），可能存在过拟合风险。

## 6. 论文的主要结论与发现

1. **SCE 在性能上普遍优于最强基线**：在 UMLS、FB15k-237、WN18RR、WD15K 上取得最优或接近最优的 Hit@1、Hit@10、MRR；在 Kinship 上略低于部分基线，但差距很小。
2. **可解释性显著提升**：在 WD15K 上，SCE 的 PR（路径召回）、LI（局部可解释性）、GI（全局可解释性）均优于 Multi-Hop、PT-MH、PS-Agent 等模型，GI 达 9.7（乘以100），说明路径覆盖率和质量均高。
3. **关系一致性与实体一致性互补**：消融实验表明，移除任意一个都会导致性能下降，而两者联合使用效果最佳。
4. **外部规则方法效率低**：PS-Agent 因依赖规则挖掘，运行时间比 Multi-Hop 增加 100%–1329%；而 SCE 仅增加 9%–17%，效率更高。
5. **语义一致性分数与人类可解释性高度相关**：案例分析和统计分布显示，SC 分数随人工标注的可解释性分数单调递增，而单独的 RC 或 EC 分数不能有效区分。

## 7. 优点

- **方法创新**：首次从内部语义一致性（关系与实体两个层面）建模路径质量，而非仅依赖外部规则或嵌入相似度。
- **可解释性与性能兼顾**：在提升可解释性的同时，没有牺牲推理准确度，甚至有所提升。
- **轻量高效**：仅需少量额外计算（一致性分数计算），避免了规则挖掘的高开销。
- **消融设计完整**：分别验证关系、实体、局部、全局各组件贡献，实验设计细致。
- **定量验证充分**：不仅报告标准指标，还通过可解释性分数分布统计、案例可视化等验证方法的有效性。

## 8. 不足与局限

- **依赖预训练嵌入**：软奖励和一致性计算均使用预训练的 ConvE 嵌入，如果嵌入质量差或不适用于新领域，可能影响性能。
- **超参数敏感**：α1、α2、β 需根据数据集手动调优（网格搜索），增加了应用难度。
- **未完全消除虚假路径**：论文承认只能减少而非彻底解决虚假路径问题。
- **实验局限**：
  - 未在更大规模或动态知识图谱上测试，如 Wikidata（WD15K 较小）。
  - 未与其他类型的可解释推理方法（如神经符号方法）进行对比。
  - 可解释性评估仅依赖 WD15K 的人工标注，可能存在主观偏差。
- **缺乏理论分析**：未证明语义一致性奖励的收敛性质或最优性。
- **资源细节缺失**：未报告训练硬件和时长，不利于复现。

（完）

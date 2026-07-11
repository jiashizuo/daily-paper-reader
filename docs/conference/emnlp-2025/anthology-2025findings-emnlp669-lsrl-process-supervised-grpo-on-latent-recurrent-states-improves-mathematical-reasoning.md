---
title: "LSRL: Process-Supervised GRPO on Latent Recurrent States Improves Mathematical Reasoning"
title_zh: LSRL：潜在循环状态上过程监督的GRPO提升数学推理
authors: Hangliang Ren
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.669.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 过程监督的GRPO变体用于数学推理
tldr: 针对潜在循环语言模型隐状态轨迹不透明导致信用分配困难、数学推理精度受限的问题，提出LSRL，一种过程监督的GRPO变体。在每个潜在步骤提供密集奖励，使用GPT-4.1-nano评分器对局部解评分，以LoRA在单GPU上仅用500个GSM-8K问题更新策略。结果显示显著提升数学推理准确性，且训练高效。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.669/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 806, \"height\": 210, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.669/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 566, \"height\": 360, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.669/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1662, \"height\": 255, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.669/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 521, \"height\": 212, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.669/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 687, \"height\": 287, \"label\": \"Table\"}]"
motivation: 潜在循环语言模型的隐状态轨迹不透明，使得信用分配困难，限制了数学推理的准确性。
method: 提出LSRL，在GRPO基础上进行过程监督，解码每个递归深度并用GPT-4.1-nano评分器提供逐步骤密集奖励。
result: 在GSM-8K等数学推理基准上，LSRL相比基线显著提升准确性，且训练数据仅需500个样本。
conclusion: 过程监督的GRPO能有效解决潜在状态下的信用分配问题，显著提升数学推理能力。
---

## Abstract
Latent-recurrent language models solve tasks by iteratively refining hidden states rather than emitting chain-of-thought tokens, yet the opacity of those hidden trajectories hinders credit assignment and limits mathematical reasoning accuracy. We propose Latent-State Supervised Reinforcement Learning (LSRL), a process-supervised variant of Guided Reward Policy Optimization (GRPO) that delivers dense rewards at every latent step. We decode each recurrent depth of a 3.5-billion-parameter Huginn model and score the partial solutions with a GPT-4.1-nano grader aligned to final-answer correctness. Using LoRA adapters, we update the policy on a single NVIDIA L40S GPU with only 500 GSM-8K training problems. Relative to the depth-8 supervised Huginn baseline, LSRL improves absolute accuracy by +4.27 points on GSM-8K and +2.06 points on MathQA. These results demonstrate that rewarding latent steps provides an efficient route to stronger mathematical reasoning in latent-recurrent language models.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：潜在循环语言模型（LR-LM）通过迭代隐状态更新而非生成显式思维链标记来推理，但隐状态轨迹不透明导致信用分配（credit assignment）困难，限制了数学推理的准确性。例如，Huginn-3.5B模型在递归深度r=8时，GSM-8K上仅达到13.5%的准确率，即使深度增大到r=32也只有24.9%，远低于其在逻辑推理任务上的表现。
- **研究动机**：现有的监督微调仅在最终答案处给予单一奖励，忽略了中间潜状态的推理质量。而过程监督（如链式思维模型中的逐步骤奖励）已被证明能提升数学推理，但从未应用于潜状态。本文旨在通过过程监督的强化学习，为每个递归深度提供密集奖励，以解决潜状态中的信用分配问题。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：提出Latent-State Supervised Reinforcement Learning (LSRL)，一种基于GRPO的过程监督变体，在每个潜步骤提供密集奖励，引导模型优化中间推理路径。
- **关键技术细节**：
  - **奖励设计**：对每个潜状态解码得到的文本快照，由GPT-4.1-nano评分器评估内在质量（IQS）和数学进度（PS），并进行min-max归一化。步奖励为两者加权和（w=0.5），通过折扣因子γ=0.99累积得到过程奖励Rproc。最终奖励Rtot由二元结果奖励（正确匹配）+ 过程奖励加权组合（wf=0.7, wp=0.3）。
  - **生成流程**：对每个问题采样G=8条完整轨迹，每条轨迹包含r个中间文本快照和最终答案。调用GPT-4.1-nano两次（取平均）给每个快照评分，并检查最终答案正确性。
  - **GRPO目标**：计算组内优势（Ai = Ri - 组平均），使用裁剪的PPO-like损失函数，并加入KL散度惩罚（自适应β）。
  - **效率技术**：
    - **单次隐状态缓存**：在一次前向传播中收集所有中间潜状态，避免r次重复计算，减少约50%训练计算量。
    - **LoRA适配器**：仅在Huginn的Core块中的注意力机制和MLP投影层注入rank-8 LoRA，仅训练0.17%的参数，可在单GPU上微调。

## 3. 实验设计

- **数据集与基准**：
  - 训练数据集：从GSM-8K训练集中随机选取500个样本（仅用于RL阶段）。
  - 测试数据集：GSM-8K（小学算术）、MATH（竞赛级定理证明）、MathQA（多步算术）。均使用官方测试集，无测试集数据用于训练。
- **对比方法**：
  - Huginn-SFT-r8：深度8的监督基线（无RL）。
  - RL-Outcome：深度8模型，仅使用最终答案奖励的GRPO（无过程监督）。
  - LSRL（本文）：深度8模型，使用最终+过程奖励。
  - Huginn-SFT-r32：深度32的更强监督基线（4倍推理计算量）。
- **指标**：pass@1准确率，测试时使用贪婪解码（T=0）。

## 4. 资源与算力

- **GPU**：单张NVIDIA L40S级GPU（在int8精度下使用QLoRA进行量化训练）。
- **参数量**：Huginn模型为35亿参数，LoRA适配器仅训练约0.17%的参数。
- **超参数**：学习率2e-6（常数），优化器AdamW，每批次32个独特prompt（梯度累积4个微批次），每个prompt采样G=8条轨迹。训练数据仅500个GSM-8K样本，未提及具体训练时长，但强调可在单GPU上完成。

## 5. 实验数量与充分性

- **主要实验**：在三个标准数学推理基准（GSM-8K、MATH、MathQA）上进行了评估，并对比了三种基线（SFT-r8、RL-Outcome、SFT-r32）。
- **消融实验**：
  - 进行了浅递归深度（r=4）的消融：LSRL-r4与SFT-r4、RL-Outcome-r4对比，结果平坦（约8% GSM-8K），表明深度阈值重要性。
  - 定性轨迹分析：展示了LSRL与基线在中间步骤的对比，证明过程监督引导正确推理路径。
- **充分性评价**：实验设计较为全面：覆盖了不同难度的数学数据集，包含结果奖励消融和深度消融，并提供了可视化分析。但训练数据仅使用GSM-8K子集，未在其他数据集上训练，可能存在泛化不足。另外，MATH数据集上改进较小，说明实验未够深入探索复杂推理场景。

## 6. 论文的主要结论与发现

- **有效性**：相比SFT-r8，LSRL在GSM-8K上提升4.27个百分点，MathQA提升2.06个百分点，MATH提升1.33个百分点。其中过程监督贡献了约75%的提升（结果奖励仅贡献1.05个百分点）。
- **效率**：LSRL-r8在GSM-8K上恢复了SFT-r32约75%的性能，但仅消耗1/4的推理计算量（FLOPs）。
- **浅深度阈值**：深度r=4时过程监督无效，表明需要足够递归深度才能发挥奖励作用。
- **定性**：LSRL产生的中间推理更连贯、正确，减少了幻觉和无关内容。

## 7. 优点

- **方法创新性**：首次将过程监督奖励应用于潜状态，解决了潜循环模型中的信用分配瓶颈，且推理时无需生成中间token。
- **训练高效**：单次缓存、LoRA适配、单GPU训练仅需500样本，显著降低资源需求。
- **实验严谨**：包含结果奖励消融、深度消融、定性分析，验证了过程监督的贡献。
- **计算-精度权衡**：展示了潜状态递归扩展的优势：增加计算量而非参数量可提升性能，且过程监督进一步放大此优势。

## 8. 不足与局限

- **训练数据局限**：仅使用500个GSM-8K样本，未覆盖复杂数学领域（如几何、证明），导致MATH提升较小，且未采用课程学习或合成数据。
- **奖励模型局限**：GPT-4.1-nano作为评分器，可能对深层数学错误不敏感，且存在奖励黑客风险（模型学习表面特征而非真正推理）。
- **输出质量残留问题**：仍存在提示回显、冗余内容、单位混淆等错误，表明过程监督未完全解决推理问题。
- **泛化局限**：仅在数学推理上验证，未扩展到编程、因果推理等域；从GSM-8K到MATH的迁移有限。
- **实验覆盖**：未进行不同LoRA秩、不同折扣系数、更多递归深度（如r=16/32）的RL实验，也未报告训练时间或收敛曲线。

（完）

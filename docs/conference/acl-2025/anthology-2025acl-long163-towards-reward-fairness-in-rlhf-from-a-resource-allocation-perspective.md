---
title: "Towards Reward Fairness in RLHF: From a Resource Allocation Perspective"
title_zh: 迈向RLHF中的奖励公平：从资源分配的视角
authors: "Sheng Ouyang, Yulan Hu, Ge Chen, Qingyang Li, Fuzheng Zhang, Yong Liu"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.163.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 从资源分配视角解决RLHF中的奖励公平性
tldr: 该论文针对RLHF中奖励函数存在多种偏见导致奖励不公平的问题，提出了一种与偏见类型无关的方法，将偏好学习建模为资源分配问题，将奖励视为待分配的资源，在效用公平之间权衡。该方法无需针对每种偏见单独设计，却能有效缓解多种偏见，提升RLHF对齐的公平性。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.163/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 776, \"height\": 271, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.163/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 778, \"height\": 383, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.163/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1604, \"height\": 835, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.163/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 638, \"height\": 489, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.163/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1597, \"height\": 443, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.163/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 637, \"height\": 487, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.163/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 681, \"height\": 402, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.163/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1069, \"height\": 632, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.163/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1607, \"height\": 421, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.163/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1459, \"height\": 334, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.163/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 819, \"height\": 790, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.163/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 732, \"height\": 547, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.163/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 883, \"height\": 238, \"label\": \"Table\"}]"
motivation: RLHF中的奖励存在多种偏见，影响模型对齐的公平性。
method: 将偏好学习建模为资源分配问题，通过公平分配奖励来缓解偏见。
result: 在不针对偏见类型设计的情况下有效缓解多种奖励偏见。
conclusion: 资源分配视角为RLHF奖励公平性提供了通用解决方案。
---

## Abstract
Rewards serve as proxies for human preferences and play a crucial role in Reinforcement Learning from Human Feedback (RLHF). However, if these rewards are inherently imperfect, exhibiting various biases, they can adversely affect the alignment of large language models (LLMs). In this paper, we collectively define the various biases present in rewards as the problem of reward unfairness. We propose a bias-agnostic method to address the issue of reward fairness from a resource allocation perspective, without specifically designing for each type of bias, yet effectively mitigating them. Specifically, we model preference learning as a resource allocation problem, treating rewards as resources to be allocated while considering the trade-off between utility and fairness in their distribution. We propose two methods, Fairness Regularization and Fairness Coefficient, to achieve fairness in rewards. We apply our methods in both verification and reinforcement learning scenarios to obtain a fairness reward model and a policy model, respectively. Experiments conducted in these scenarios demonstrate that our approach aligns LLMs with human preferences in a more fair manner. Our data and code are available at https://github.com/shoyua/Towards-Reward-Fairness .

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题定义**：在 RLHF（基于人类反馈的强化学习）中，奖励模型作为人类偏好的代理，存在多种偏见（如长度偏见、类别偏见、社会偏见），导致奖励分配不公，即 **奖励不公平（Reward Unfairness）**。这种不公平会使得策略模型倾向于生成某些类型（如更长、更符合某种类别）的输出，而非真正符合人类偏好。
- **研究动机**：现有方法通常针对特定偏见设计专用缓解策略（如长度正则化），缺乏通用性。作者提出将各种偏见统一视为奖励不公平的表现，并从 **资源分配** 的视角出发，设计一种与偏见类型无关的通用方法。
- **核心目标**：在保持奖励能够有效区分偏好（效用）的同时，确保奖励在不同数据实体（如不同长度、类别、社会属性）之间分布公平，从而提升 LLM 对齐的公平性与质量。

## 2. 方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将偏好学习建模为 **资源分配问题**。奖励被视为可分配的资源，效用（Utility）衡量奖励区分偏好与非偏好的能力，公平性（Fairness）衡量奖励在不同实体间分布的一致性。目标是实现效用与公平的权衡。  
- **关键技术细节**：
  1. **公平性度量函数** \( f_\tau(a) \)：采用 Lan et al. 提出的统一公平性指标，满足连续性、齐次性（零次齐次）和单调性。公式为：
     \[
     f_\tau(a) = \text{sign}(1-\tau) \left[ \sum_{i} \left( \frac{a_i}{\sum_j a_j} \right)^{1-\tau} \right]^{1/\tau}
     \]
     其中 \( \tau \in \mathbb{R} \)，当 \( \tau = -1 \) 时即为 Jain 指数。
  2. **分配向量定义**：对于 Bradley-Terry 奖励模型，每个数据对 \((x,y_w,y_l)\) 的分配向量元素为 \( a_i = r_\phi(y_w) - r_\phi(y_l) \)；对于 DPO，则为隐式奖励的差值。
  3. **两种实现方法**：
     - **Fairness Regularization（FR）**：组合目标 \( \max U(a) + \alpha F(a) \)。
     - **Fairness Coefficient（FC）**：乘法目标 \( \max U(a) \cdot [F(a)]^\gamma \)。
  4. **应用场景**：
     - **验证场景（Fairness RM）**：训练公平奖励模型，将上述方法直接嵌入 Bradley-Terry 损失。
     - **强化学习场景（Fairness Policy）**：将公平正则化项加入到 DPO 的目标函数中，训练公平策略模型。

- **算法流程（文字描述）**：
  1. 定义批内所有偏好对的奖励差值向量 \( a \)。
  2. 计算效用函数 \( U(a) = \mathbb{E}[\log \sigma(a_i)] \)。
  3. 计算公平性函数 \( F(a) = f_\tau(a) \)。
  4. 根据所选方法（FR 或 FC）构建损失函数。
  5. 对奖励模型或策略模型进行梯度更新。

## 3. 实验设计

- **数据集**：
  - 奖励模型训练：HH-RLHF（Anthropic 的 Helpful & Harmless 数据）。
  - 策略模型训练：UltraFeedback Binarized 和 SHP。
  - 评估基准：
    - 奖励模型评估：Reward Bench（OOD）和 HH-RLHF（ID）。
    - 策略模型评估：AlpacaEval2（LC WR 和 WR）和 MT-Bench（总体得分）。
    - 社会偏见评估：CrowS-Pairs 数据集（测量对不同身份群体的奖励分布差异）。
- **对比方法**：
  - 奖励模型：Bradley-Terry RM（BT RM）作为基线。
  - 策略模型：DPO、KTO、R-DPO 作为基线，并与加上 FR/FC 的变体（FR DPO、FC DPO）比较。
  - 额外实验：使用不同公平性函数（不同 \(\tau\) 值）和不同正则化强度 \(\alpha\)、\(\gamma\) 进行消融。
- **评估指标**：准确率（验证场景）、LC WR 和 WR（AlpacaEval2）、整体得分（MT-Bench）、奖励分布图。

## 4. 资源与算力

- 文中明确说明：所有实验在 **8× H800 GPU** 机器上运行。
- 奖励模型训练：1 epoch，学习率 2×10⁻⁶。
- 策略模型训练：1 epoch，学习率 5×10⁻⁶。
- 未提及具体训练时长或 GPU 小时数。

## 5. 实验数量与充分性

- **实验数量**：
  - 主实验包含两个场景（验证和 RL），每个场景使用两种基础模型（LLaMA3-SFT 和 Qwen2.5-SFT），对比多种基线。
  - 消融实验包括：不同公平性函数（\(\tau\) 取 -5, -1, 0.5, 2, 10）、不同正则化强度（\(\alpha\) 和 \(\gamma\)）。
  - 额外实验：使用不同 RM 进行数据选择（图4）、长度与性能关系（图6）、社会偏见验证（图5）、长度维度上的奖励分布（图8）。
  - 总计约 10 余组量化表格和 9 张图表。
- **充分性评价**：
  - **充分**：覆盖了验证与 RL 两个核心场景，分别采用 ID 和 OOD 基准，并进行了消融、超参数敏感性和公平性分布可视化。
  - **客观公平**：对比方法均为公开基线（DPO, KTO, R-DPO），超参数统一，代码和数据已开源。
  - 不足：仅在两个基础模型上验证（LLaMA3-7B 和 Qwen2.5-7B），未在更大模型或更多领域数据集上测试。

## 6. 主要结论与发现

1. **统一视角有效**：将多种偏见归为奖励不公平并统一处理，无需针对每种偏见设计专用方法。
2. **公平奖励模型（FR RM / FC RM）** 在保持与 BT RM 相近准确率的同时，实现了更一致的奖励分布（跨类别、跨长度、跨社会属性），并在数据选择任务中展现出更高的采样效率。
3. **公平策略模型（FR DPO / FC DPO）** 在 AlpacaEval2 和 MT-Bench 上显著优于原始 DPO，且生成更短但质量更高的输出，部分缓解了长度偏见。
4. **方法鲁棒**：不同 \(\tau\) 值的公平性函数均能提升性能，且正则化强度 \(\alpha\) 存在最优值（约 0.1），过大则会损害效用。

## 7. 优点

- **创新性**：首次从资源分配视角系统定义奖励不公平问题，提出与偏见类型无关的通用解决方案，理论框架清晰。
- **简洁高效**：FR 和 FC 方法只需修改原损失函数，可无缝嵌入现有奖励模型和 DPO 框架，计算开销低。
- **实验全面**：不仅验证了标准基准，还通过可视化（奖励分布图）直观展示公平性改善，并额外测试社会偏见和长度偏见，增强了说服力。
- **代码开源**：提供了可复现的代码和数据，有利于后续研究。

## 8. 不足与局限

- **偏见覆盖有限**：论文主要验证了类别偏见、长度偏见和社会偏见，但奖励不公平可能还涉及奖励黑客（reward hacking）等更复杂问题，未充分讨论。
- **方法通用性未完全验证**：仅在 Bradley-Terry 和 DPO 上验证，未应用于 PPO、GRPO 等其他 RL 框架，也未在多任务或在线 RLHF 中测试。
- **模型规模限制**：实验基于 7B 参数模型，未在更大模型（如 13B、70B）上验证，结论的普适性有待确认。
- **公平性定义依赖资源分配视角**：将奖励分配公平性等同于分布一致性，忽略了不同实体可能具有内在重要性差异（如不同类别数据质量差异），可能导致过度平滑。
- **公平性-效用权衡依赖超参数**：\(\alpha\) 和 \(\gamma\) 需要通过验证集调节，实际应用中可能增加调参成本。

（完）

---
title: "Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning"
title_zh: 为什么智能体做出那个决策：面向强化学习的对比解释学习
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0074.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 强化学习决策的对比解释，有助于对齐中的可解释性
tldr: 本文提出对比解释学习方法，用于解释强化学习智能体的决策过程。通过生成对比案例，揭示了决策背后的原因，增强了模型的可解释性。该方法虽不直接针对医疗，但可迁移至医疗RL系统中的安全对齐和诊断推理解释。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-74/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1672, \"height\": 546, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-74/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1652, \"height\": 741, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-74/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 817, \"height\": 408, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-74/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1749, \"height\": 638, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-74/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 542, \"height\": 294, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-74/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 373, \"height\": 367, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-74/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 623, \"height\": 292, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-74/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 405, \"height\": 294, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-74/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 682, \"height\": 291, \"label\": \"Table\"}]"
motivation: 强化学习决策缺乏可解释性，不利于信任建立和错误分析。
method: 设计对比学习框架，从状态-动作对中学习最优解释。
result: 在标准RL环境中产生可理解的决策解释，准确率高。
conclusion: 为RL系统的可解释性提供了新方法，可用于医疗AI的对齐验证。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 核心问题与研究动机

- **问题**：深度强化学习（DRL）在复杂决策任务中表现出色，但其基于深度神经网络的决策过程缺乏可解释性，降低了用户信任，尤其在高风险关键领域（如自动驾驶、医疗等）中阻碍了实际应用。
- **现有不足**：现有可解释AI（xAI）方法多为分类任务设计，未充分考虑强化学习中“为什么选此动作而非其他动作”的对比性推理需求；扰动归因方法（如基于Q值/策略差异）依赖性不强，且常忽略非目标动作的信息；学习型方法（如Explainer）将所有非目标类别视为同一组，未利用动作间的对比关系。
- **整体目标**：提出一种自监督对比学习框架（VisionMask），生成动作级显著性图（saliency maps），通过对比目标动作与替代动作来解释RL智能体的决策，提升解释的忠实度、鲁棒性和稀疏性。

## 2. 方法论：核心思想与技术细节

- **核心思想**：利用两种对比信息（动作对比和特征对比）训练解释器，生成每个动作对应的像素级重要性掩码（masks）。关键逻辑：
  1. **动作对比**：将目标动作的掩码\( m_a \)与非目标动作的掩码\( m_{a'} \)视为负对，通过对比学习使掩码能区分不同动作的关键特征。
  2. **特征对比**：将目标动作掩码\( m \)与其反转掩码\( \tilde{m}=1-m \)视为负对，确保仅相关区域影响决策，无关区域（如背景）被屏蔽后策略输出应接近均匀分布。
- **架构**：解释器\( f_\theta \)采用类似DeepLabv3的语义分割网络，输入状态图像，输出K个（动作数）0~1间的显著性图\( M=\{m_0,...,m_{K-1}\} \)。每个掩码与原始状态叠加得到掩码状态\( s_i \)，并查询冻结的专家策略得到动作logits和概率。
- **训练损失**（公式用文字说明）：
  - **动作对比损失\( L_a \)**：包含正损失（最大化目标动作在掩码状态下的对数概率）和负损失（最小化目标动作在其他动作掩码下的对数概率）。
  - **特征损失\( L_{ne} \)**（负熵损失）：对反转掩码状态$ \tilde{s} $的动作分布施加负熵惩罚，使其趋于均匀分布，迫使掩码排除无关特征。
  - **面积损失\( L_{area} \)**：L1范数约束每个掩码的激活像素占比不超过最大面积比例\( a_{\max} \)，防止全选像素。
  - 总损失：\( L = L_a + \lambda_{ne} L_{ne} + \lambda_{area} L_{area} \)。

## 3. 实验设计

- **环境与数据集**：6个RL环境——Super Mario Bros (SMB)、Enduro、Seaquest、MsPacman（2D游戏）、Highway-env（自动驾驶模拟）、VizDoom（3D游戏）。每个环境收集状态-动作对，80%训练、10%验证、10%测试。
- **基准方法**：5种基线——LIME、RISE、Greydanus et al.（基于高斯模糊扰动）、SARFA、Explainer（学习型方法，与VisionMask最相似）。
- **对比维度**：
  - **忠实度**：Accuracy（掩码状态与原始状态动作是否一致）、Deletion（逐像素删除重要区域后目标动作概率下降AUC）、Insertion（逐像素添加重要区域后概率上升AUC）。
  - **鲁棒性**：局部Lipschitz估计（LLE）。
  - **复杂度/稀疏性**：Sparseness（基尼系数）。
- **人类研究**：63名参与者对9个状态-动作对（每个环境3个）结合VisionMask的显著性图给出反馈。

## 4. 资源与算力

- 文中未明确说明使用的GPU型号、数量或具体训练时长。仅在表2a脚注提到“Time is estimated by training 10 epochs”并给出约0.68小时（约41分钟）作为参考，但未提供完整训练轮数或硬件配置。
- 因此，无法准确评估计算资源需求。

## 5. 实验数量与充分性

- **定量实验**：在6个环境中对比5种基线，报告了5个指标（Accuracy、Deletion、Insertion、LLE、Sparseness），每个环境均给出完整结果（表1）。
- **消融实验**：针对面积正则化形式、最大面积比例、解释器骨干网络（DeepLabv3 vs FCN vs UNet）、参考值选择（背景、黑色、均值、模糊）、损失函数组件共5组消融实验（表2），每组包含多个指标。
- **定性分析**：可视化对比（图2）和人类研究（图3，63人，89%以上正面反馈）。
- **充分性评价**：实验覆盖多种类型环境、多维度评估指标，且包含消融和人类评价，整体较为充分。但基线未包括最新的RL专用解释方法（如基于Shapley值的方法），且仅在单一随机种子下报告结果？未说明多次重复实验，可能影响统计可靠性。

## 6. 主要结论与发现

- VisionMask在忠实度（Acc、Del、Ins）上全面优于所有基线，尤其是在SMB、Enduro、Seaquest、MsPacman、VizDoom、Highway环境中均取得最佳或次佳（蓝色标记）。
- 在鲁棒性方面，RISE因使用同类型扰动而得分最高，但稀疏性极低（接近0），说明其解释几乎无信息量。VisionMask达到鲁棒性与稀疏性的最佳平衡。
- 在可视化中，VisionMask能准确突出关键对象（如敌人、车辆、氧气条），而LIME/GRAD/SARFA常关注无关区域或产生模糊掩码。
- 人类研究表明89%以上用户认为VisionMask的解释有助于理解智能体决策。
- 消融实验验证了L1面积正则化、背景参考值、DeepLabv3骨干以及完整损失函数对性能的贡献。

## 7. 优点

- **方法创新**：首次将自监督对比学习引入RL解释，通过动作对比和特征对比两个通道提升解释质量，无需真实标注。
- **模型无关**：仅需访问智能体的输入和输出，不修改原策略，且适用于任何基于视觉的DRL模型。
- **解释可操作**：生成的显著性图可直接用于反事实分析（如移除某区域后动作改变），有助于理解因果关系。
- **评估全面**：采用多个指标（忠实度、鲁棒性、稀疏性）并包含人类评估，结果可靠。

## 8. 不足与局限

- **计算资源未明确**：缺乏GPU、训练时长、多次重复实验的详细信息，难以评估计算成本与复现性。
- **未验证对非视觉或高维语义特征的适用性**：论文仅关注像素级输入，未扩展到其他特征（如雷达、文本）。
- **基线选择局限性**：未与最新RL解释方法（如基于Shapley的SVERL、反事实策略）对比，仅与较旧、仅面向分类的LIME/RISE比较。
- **反事实分析依赖手工后处理**：论文示例中通过人为移除高亮度区域观察动作变化，未集成自动反事实生成机制。
- **环境多样性有限**：虽然覆盖2D、3D、自动驾驶，但均为模拟环境，缺乏真实机器人或连续控制场景。
- **人类研究样本量较小（63人）**，可能存在选择偏差；未报告用户是否来自AI/RL专业背景，可能影响泛化性。

（完）

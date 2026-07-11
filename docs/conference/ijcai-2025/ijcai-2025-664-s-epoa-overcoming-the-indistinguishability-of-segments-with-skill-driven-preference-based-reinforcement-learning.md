---
title: "S-EPOA: Overcoming the Indistinguishability of Segments with Skill-Driven Preference-Based Reinforcement Learning"
title_zh: S-EPOA：通过技能驱动的偏好强化学习克服片段不可区分性
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0664.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 偏好强化学习用于RLHF
tldr: 针对偏好强化学习中片段不可区分导致奖励学习困难的问题，该论文提出技能驱动的偏好强化学习方法S-EPOA。通过分解技能并利用技能信息指导偏好比较，有效区分相似片段。实验在模拟和机器人任务上验证了方法在偏好学习准确性和下游策略性能上的提升。该方法可迁移至RLHF场景以改善对齐质量。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1547, \"height\": 544, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 785, \"height\": 307, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1744, \"height\": 988, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1371, \"height\": 417, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1813, \"height\": 482, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 783, \"height\": 309, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-664/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1427, \"height\": 326, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-664/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 819, \"height\": 259, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-664/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 804, \"height\": 263, \"label\": \"Table\"}]"
motivation: 现有偏好强化学习在片段高度相似时难以区分，制约奖励建模精度。
method: 引入技能驱动机制，利用学习到的技能表示辅助偏好比较。
result: 在多个基准任务上，S-EPOA显著提升了偏好学习正确率和最终策略性能。
conclusion: 技能信息有效缓解了片段不可区分问题，为RLHF提供了更鲁棒的偏好学习范式。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# S-EPOA论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在偏好强化学习（Preference-based RL, PbRL）中，当需要人类对两个行为片段（segment）进行比较时，若两个片段高度相似，人类很难区分优劣，从而产生错误标签，降低奖励模型精度，最终影响策略性能。作者将此问题称为 **“片段的不可区分性”**（Indistinguishability of Segments）。
- **研究动机**：现有PbRL方法多假设人类能够提供高质量偏好反馈，忽略了实际中标签错误的问题；同时，经典查询选择方法（如 disagreement）倾向于选择“信息量大”但行为相近的片段，反而加剧了不可区分性。作者通过人类实验证实：随着片段回报差异减小，人类标签匹配率显著下降。
- **整体含义**：提出一种技能驱动的PbRL框架（S-EPOA），利用无监督技能发现产生行为差异大的策略，从而选择更容易区分的查询片段，提升奖励学习鲁棒性和效率。

## 2. 论文提出的方法论

### 核心思想
- 将技能发现（skill discovery）引入PbRL，分为两个阶段：
  1. **无监督技能预训练**：使用互信息最大化等方法学习一组多样化的技能策略 $\\pi(a|s,z)$，使得不同技能产生可区分的轨迹。
  2. **偏好驱动的在线训练**：基于学习到的技能空间设计新的查询选择机制，平衡信息增益与片段区分度，从而向非理想教师呈现更易区分的片段对。

### 关键技术细节
- **技能预训练**：最大化状态 $s$ 与技能 $z$ 之间的互信息，优化变分下界，使用内在奖励 $r_{\\text{int}} = \\log q_\\phi(s|z) - \\log p(s)$。
- **技能驱动的查询选择**：
  - 训练一个轨迹估计器 $R_\\theta(z)$，估计技能 $z$ 在估计奖励函数下的期望回报。
  - 定义选择准则：  
    $$I(\\sigma_0, \\sigma_1) = (1 + |R_\\theta(z_0)-R_\\theta(z_1)|) \\cdot (1 + \\text{Var}(P_\\psi[\\sigma_1 \\succ \\sigma_0]))$$
    其中第一项衡量技能差异，第二项衡量奖励模型不确定性。两者归一化后相加1平衡，选择 $I$ 最大的查询。
- **策略使用**：在线训练时，通过最大化轨迹估计器选取当前最优技能 $\\hat{z}_{\\text{task}}$，将策略 $\\pi(a|s,z_{\\text{task}})$ 用于与环境交互。
- **数据增强**：采用SURF的半监督数据增强技术（子片段采样 + 伪标签过滤），提升奖励学习样本效率。

### 算法流程（文字说明）
1. 无监督技能预训练，得到多技能策略。
2. 循环：
   - 每隔K步，更新轨迹估计器 $R_\\theta$。
   - 根据 $I$ 准则选择M个查询片段，向教师获取偏好标签，存入数据集 $\\mathcal{D}$。
   - 使用 $\\mathcal{D}$ 训练奖励模型 $\\hat{r}_\\psi$，并用其重标注回放缓存。
   - 选择当前最优技能 $\\hat{z}_{\\text{task}}$，用策略 $\\pi(a|s,\\hat{z}_{\\text{task}})$ 交互收集数据。
   - 用 $\\hat{r}_\\psi$ 训练critic和actor。

## 3. 实验设计

- **数据集/场景**：
  - **DMControl**：4个复杂运动任务（Cheetah_run, Walker_run, Quadruped_walk, Quadruped_run）。
  - **Metaworld**：3个机器人操作任务（Door_open, Button_press, Drawer_open）。
- **基准方法（Baselines）**：
  - PEBBLE（Lee et al., 2021b）—— 使用 disagreement 查询选择。
  - SURF（Park et al., 2022a）—— 半监督数据增强 + disagreement。
  - RUNE（Liang et al., 2022）—— 不确定性驱动的查询选择。
  - RIME（Cheng et al., 2024）—— 鲁棒PbRL方法。
  - SAC with ground-truth reward —— 性能上界（oracle）。
- **教师模型**：采用“带噪声的脚本教师”，当两个片段真实回报差异小于 $\epsilon \\cdot R_{\\text{avg}}$ 时随机分配标签，$\epsilon \\in \\{0.1, 0.2, 0.3\\}$ 模拟人类不可区分性。
- **技能发现方法**：默认使用APS（Liu and Abbeel, 2021a）；消融中对比DIAYN和CIC。
- **评估指标**：训练曲线（episode return vs timesteps）、查询区分度比率、人类实验匹配率。

## 4. 资源与算力

- 论文**未明确说明**使用的GPU型号、数量和训练时长。仅提及基于PyTorch实现，参数细节在附录中（未提供完整附录内容），未涉及具体算力消耗。

## 5. 实验数量与充分性

- **实验组数**：约7个任务（4+3），每个任务设置多个错误率（0.1, 0.2, 0.3），5个随机种子，共约7×3×5=105条学习曲线。此外还包括：
  - 人类实验（图2、图6）。
  - 查询区分度统计（Table 1）。
  - 查询可视化（图7）。
  - 消融实验（图5a–d）：组件分析、理想教师下效率、不同技能方法兼容性、数据增强影响、不同查询数量对比（Table 2）。
- **充分性评价**：实验覆盖多种任务类型（运动、操作）、多种错误率、多种基线方法，消融完整，统计可靠。人类实验补充定性验证。总体 **充分且客观**。但缺乏真实人类标注的在线实验（使用脚本教师模拟），可能存在模拟与真实偏差。

## 6. 论文的主要结论与发现

- **S-EPOA显著优于现有PbRL方法**，在非理想教师（各种错误率）下保持更高性能和更稳定收敛。
- **技能驱动的查询选择能选出更可区分的片段**：表1显示S-EPOA选中片段被区分比率更高；图6人类实验确认人类更容易区分S-EPOA的查询。
- **两种技术（技能预训练 + 技能查询选择）均有效**，组合使用效果最佳（图5a）。
- **S-EPOA兼容多种技能发现方法**（APS、DIAYN、CIC），表现一致。
- **即使在无错误理想教师下，S-EPOA也能提高学习效率**（图5b）。
- **查询效率高**：仅500次查询即可超越基线。

## 7. 优点

- **问题发现精准**：明确指出“片段不可区分性”是PbRL实际应用的瓶颈，并通过人类实验和理论（Proposition 1）支撑。
- **方法创新性强**：首次系统地将技能发现引入PbRL查询选择，设计兼具信息增益与区分度的准则。
- **实验设计严谨**：引入带错误率的脚本教师模拟真实不可区分性，消融实验全面，结果统计稳定。
- **实用性强**：兼容多种技能方法，可即插即用，数据增强进一步降低反馈需求。
- **可视化分析**：直观展示查询片段差异，增强说服力。

## 8. 不足与局限

- **对真实人类标注的验证不足**：仅进行了小规模人类实验（图2、图6）论证问题存在和查询区分度，但整体在线实验仍使用脚本教师。真实人类在线标注中的疲劳、非理性行为等未模拟。
- **应用场景有限**：目前仅在模拟环境（DMControl、Metaworld）测试，未涉及真实机器人、复杂游戏或RLHF场景。论文虽提到可迁移至RLHF，但未实验证明。
- **技能预训练依赖性**：需额外无监督阶段，增加了总训练步数；技能数量、维度等超参数敏感（未深入分析）。
- **理论分析较少**：仅给出Proposition 1的粗略论证，未提供严格收敛性或最优性保证。
- **算力消耗未报告**：无法复现资源需求。
- **偏差风险**：实验任务均为连续控制，离散动作空间任务（如Atari）未测试；脚本教师基于真实回报差异，而人类区分度可能受更多因素影响（视觉相似性、运动模式等）。

（完）

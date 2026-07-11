---
title: Teaching Text Agents to Learn Sequential Decision Making from Failure
title_zh: 从失败中教导文本智能体学习序列决策
authors: "Canasai Kruengkrai, Koichiro Yoshino"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.1526.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 从失败动作中学习的文本智能体强化学习方法
tldr: 针对文本强化学习智能体在交互中收集的失败动作导致策略退化问题，提出失败感知目标和扰动方法。通过将失败动作的奖励置零并利用失败轨迹构造成功轨迹，有效抑制了错误行为的学习，提升了任务成功率。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1526/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 751, \"height\": 966, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1526/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1659, \"height\": 503, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1526/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 744, \"height\": 1667, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1526/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 774, \"height\": 576, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1526/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 775, \"height\": 573, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1526/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 641, \"height\": 2448, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1526/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1629, \"height\": 1521, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1526/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1145, \"height\": 1429, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 768, \"height\": 464, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1400, \"height\": 686, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1658, \"height\": 375, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 670, \"height\": 271, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 761, \"height\": 362, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 771, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 692, \"height\": 491, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 693, \"height\": 1454, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 793, \"height\": 821, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 798, \"height\": 371, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 589, \"height\": 392, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1526/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1093, \"height\": 636, \"label\": \"Table\"}]"
motivation: 传统方法学习失败轨迹会强化错误行为，降低任务成功率。
method: 提出失败感知目标（零回报）和基于扰动的轨迹重构造方法。
result: 在多个文本环境任务中，该方法显著提高了成功率和样本效率。
conclusion: 利用失败动作反馈可有效提升文本RL智能体的决策能力。
---

## Abstract
Text-based reinforcement-learning agents improve their policies by interacting with their environments to collect more training data. However, these self-collected data inevitably contain intermediate failed actions caused by attempting physically infeasible behaviors and/or hallucinations. Directly learning a policy from such trajectories can reinforce incorrect behaviors and reduce task success rates. In this paper, we propose a failed action-aware objective that suppresses the negative impact of failed actions during training by assigning zero return based on textual feedback. Building on this objective, we introduce a perturbation method that leverages unsuccessful trajectories to construct new successful ones that share the same goal. This allows agents to benefit from diverse experiences without further interaction with the environment. Experiments in ALFWorld and ScienceWorld demonstrate that our method significantly outperforms strong baselines and generalizes across environments. Code is available at https://github.com/riken-grp/text-agent.

---

## 论文详细总结（自动生成）

# 论文总结：《Teaching Text Agents to Learn Sequential Decision Making from Failure》

## 1. 核心问题与整体含义（研究动机与背景）

- **问题**：在基于文本的强化学习环境中，智能体通过与环境的交互自行收集训练数据。但这些自收集数据中不可避免地包含**中间失败动作**（例如尝试物理上不可行的行为、或者模型幻觉导致的不存在物体或位置的引用）。直接使用这些含失败轨迹进行策略学习，会**强化错误行为**，降低任务成功率。
- **背景**：现有方法（如迭代动作建模 IAM）虽然能利用自收集的成功轨迹，但对待失败动作简单采用相同回报（均为1），无法区分有效与无效动作。同时，大量**失败轨迹**被直接丢弃，浪费了潜在学习信号。
- **本文目标**：提出一种**失败动作感知的强化学习目标**，抑制失败动作的负面影响；并进一步设计**轨迹扰动方法**，将失败轨迹与成功轨迹配对生成新的成功扰动轨迹，从而利用失败经验增强数据多样性，且不消耗额外环境交互。

## 2. 方法论

### 核心思想
- **失败感知目标（Failed Action-Aware Objective）**：基于环境提供的文本反馈（如“Nothing happens”）识别失败动作，在策略梯度目标中将其回报置零，避免强化错误行为；同时保留这些动作在历史中，允许智能体从失败中学习。
- **轨迹扰动（Trajectory Perturbation）**：将一条成功轨迹（无失败动作）与一条相同目标的失败轨迹配对，通过 diff 对比动作序列，生成一条新的**成功扰动轨迹**：保留失败轨迹中的部分动作并标注为失败（赋予失败消息），但整体以成功轨迹的终点为界，确保扰动轨迹以成功结束。

### 关键技术细节
1. **失败感知目标公式**：
   - 标准策略梯度目标：\( J(\theta) = \frac{1}{T}\sum_t \log p(a_t | \tilde{\tau}_{<t}) g_t \)，其中 \( g_t \) 为累积回报（成功轨迹中全为1）。
   - 本文提出：\( \hat{J}(\theta) = \frac{1}{T}\sum_t \log p(a_t | \tilde{\tau}_{<t}) A(o_t) \)，其中 \( A(o_t) = 0 \) 如果 \( o_t \in \mathcal{F} \)（失败消息集合），否则 \( A(o_t) = g_t \)。
   - 本质是**二元优势函数**：失败动作无优势，非失败动作保留全回报。

2. **轨迹扰动算法**：
   - 输入：成功轨迹 \( \tilde{\tau} \)（无失败）和失败轨迹 \( \tau' \)（共享相同目标，可能来自不同场景）。
   - 使用 Python `difflib.unified_diff` 比较两轨迹的动作序列。
   - 将失败轨迹中不同于成功轨迹的动作加入扰动轨迹，并标注上环境失败消息（如“Nothing happens”）。
   - 截断至成功轨迹结束点，确保最终状态是成功的。
   - 计算开销小于1秒/对。

3. **训练流程**：
   - 第一阶段：行为克隆（AM），使用少量专家演示（每类7条，共42条）初始化策略（GPT-2 medium）。
   - 第二阶段：在线强化学习（IAM/IAM-FA），与环境交互10次试验，每次400个episode。每轮后使用收集的成功轨迹（含失败动作）更新策略，使用失败感知目标。
   - 第三阶段（可选）：离线数据增强（DA），将每轮收集的成功/失败轨迹配对，生成扰动轨迹，额外训练2个epoch。

## 3. 实验设计

### 数据集/场景
- **ALFWorld**：6类家庭任务（Pick & Place, Examine in Light, Clean & Place, Heat & Place, Cool & Place, Pick Two & Place），训练集3553个任务，已见（seen）140个，未见（unseen）134个。包含模板目标（template）和人工标注目标（human-annotated）两种测试集。
- **ScienceWorld**：24类科学任务，训练1483个，已见194个，未见211个。

### Benchmark 与对比方法
- **对比方法**：
  - 基于黑盒专家策略的BUTLER（训练50K episode）。
  - 基于GPT-4的ExpeL（+Reflexion）。
  - 使用DPO的ETO（基于Llama-2-7B）。
  - 直接模仿学习的Seq2Seq。
  - 基线方法：AM（仅行为克隆），IAM（迭代动作建模，无失败感知）。
- **本文变体**：
  - IAM-FA：在IAM基础上使用失败感知目标。
  - IAM-FA+DA：在IAM-FA基础上增加轨迹扰动数据增强。

### 评估指标
- ALFWorld：成功率（%）。
- ScienceWorld：平均得分（0~100）。

### 实验充分性
- **主要结果**：在ALFWorld和ScienceWorld上均做了完整比较，覆盖模板/人工目标、seen/unseen分割，报告5次随机种子平均值。
- **消融实验**：
  - 去除失败感知目标（w/o \(\hat{J}\)）。
  - 不同数据增强策略（只用成功轨迹、只用失败轨迹、直接混合）。
  - 过滤失败动作（动作过滤或轨迹丢弃）替代失败感知目标。
- **跨环境泛化**：使用ScienceWorld额外验证，超参数完全不变。
- **不同LLM规模**：使用GPT-2 small (124M)、Pythia-410M、Llama-3.1-8B (LoRA) 测试，均优于基线。
- **时间曲线**：每轮试验的成功率展示（图5），IAM-FA每轮均优于IAM。
- **统计检验**：采用Mann-Whitney U检验（p<0.05）验证显著性。

## 4. 资源与算力

- **计算资源**：单张 NVIDIA A6000 GPU。
- **训练时间**：
  - AM（行为克隆）：约5分钟。
  - IAM / IAM-FA：约2小时（12分钟/试验 × 10试验）。
  - IAM-FA+DA：额外约30分钟（2 epoch）。
- **模型规模**：主要使用GPT-2 medium (355M)；扩展实验中包含GPT-2 small (124M)、Pythia-410M、以及Llama-3.1-8B（使用LoRA微调，约4小时）。

## 5. 实验数量与充分性

- **实验数量**：覆盖两个环境、多种任务类型、多个LLM规模、多种消融条件。每个条件运行5次随机种子。
- **充分性**：
  - 在ALFWorld上进行了详尽的表格分析（按任务类型、模板/人工目标、seen/unseen）。
  - 消融实验全面，验证了各组件贡献。
  - 在ScienceWorld上验证跨环境泛化，无需调参。
  - 统计显著性检验确保了结论的可靠性。
- **客观性**：对比方法结果引用原文，超参数尽量保持一致。IAM-FA+DA的代码已开源。

## 6. 主要结论与发现

1. **失败感知目标有效**：IAM-FA在ALFWorld上成功率显著高于IAM（见表2，例如模板-已见：82% vs 76%；人工-未见：44% vs 37%），且在ScienceWorld上也提升。
2. **轨迹扰动数据增强进一步改进**：IAM-FA+DA在所有设置下达到最佳（模板-已见87%，模板-未见78%，人工-已见51%，人工-未见55%），在ScienceWorld上平均分67.9（已见）和61.3（未见）。
3. **方法具有通用性**：在多个LLM规模（124M到8B）上均一致提升，且无需调参即可迁移到新环境。
4. **失败动作的利用优于过滤**：保留失败动作并赋予零回报，比直接过滤（动作或轨迹）效果更好（见表6），因为保留了状态上下文。
5. **样本效率高**：不增加环境交互次数，仅通过扰动重利用已有失败轨迹，即可提升性能。

## 7. 优点

- **简洁高效**：仅依赖环境确定的失败消息（如“Nothing happens”），无需额外奖励工程或状态评估模型，易于实现。
- **计算开销小**：扰动过程<1秒/对；整体训练时间仅比IAM略增。
- **数据利用充分**：无需丢弃失败轨迹，反而将其转化为有效训练样本，提升数据效率。
- **通用性强**：在多种LLM、多环境下均有效，无需调整超参数。
- **公平性**：与SOTA方法（ExpeL、ETO）比较时，使用更小的模型（GPT-2 355M vs Llama-2-7B）取得更好或相当结果，且无需GPT-4辅助。

## 8. 不足与局限

- **优势函数过于二元**：仅区分失败/非失败，无法对非失败动作中不同贡献（如达到子目标）进行细粒度指导。
- **目标匹配需求**：扰动方法需要成功与失败轨迹共享相同目标，在目标多样性高时可能无法配对。可扩展使用语义嵌入近似匹配，但未验证。
- **依赖确定性失败消息**：假设环境提供固定失败反馈（如“Nothing happens”），在反馈模糊或缺失的环境中，需要额外训练分类器，未在本工作中验证。
- **未扩展到具身智能体**：目前仅在纯文本环境验证，尚未在视觉或物理机器人任务评估。
- **实验覆盖有限**：仅在两个文本环境测试，更多环境（如Webshop、SciWorld其他子集）未涵盖。

（完）

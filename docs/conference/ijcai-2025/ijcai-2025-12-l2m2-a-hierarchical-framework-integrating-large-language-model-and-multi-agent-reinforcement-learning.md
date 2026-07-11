---
title: "L2M2: A Hierarchical Framework Integrating Large Language Model and Multi-agent Reinforcement Learning"
title_zh: L2M2：集成大语言模型与多智能体强化学习的分层框架
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0012.pdf"
tags: ["query:mlr"]
score: 5.0
evidence: 集成大语言模型与多智能体强化学习，与强化微调相关
tldr: 本文提出分层框架L2M2，融合大语言模型与多智能体强化学习，用于协同决策，其思想可借鉴到医疗大模型的强化学习后训练中，提升模型的交互与推理能力。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-12/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1832, \"height\": 1055, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-12/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 888, \"height\": 525, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-12/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 742, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-12/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 737, \"height\": 427, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-12/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1714, \"height\": 493, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-12/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 872, \"height\": 432, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-12/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 457, \"height\": 456, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-12/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 908, \"height\": 250, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-12/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 903, \"height\": 289, \"label\": \"Table\"}]"
motivation: 大语言模型在多智能体场景中缺乏协作能力。
method: 设计分层框架，上层LLM负责推理，下层多智能体RL执行。
result: 在复杂协作任务中优于单独使用LLM或RL的方法。
conclusion: 分层融合可增强LLM的决策与协作能力。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文总结：L2M2: A Hierarchical Framework Integrating Large Language Model and Multi-agent Reinforcement Learning

## 1. 核心问题与整体含义

- **研究动机**：多智能体强化学习（MARL）在复杂长时域协作任务中面临样本效率低、时间信用分配难、探索空间大、非平稳性等挑战。传统分层方法依赖手工设计的子任务和领域知识，泛化性差。
- **整体含义**：提出L2M2框架，将大语言模型（LLM）作为高层策略规划器，与低层MARL执行器结合，实现零样本规划，降低对领域知识的依赖，提升样本效率和泛化能力。

## 2. 方法论

- **核心思想**：采用两层分层架构：
  - **高层LLM智能体**：基于Llama 3.1-8B，通过零样本规划将全局状态转化为自然语言提示，生成宏动作（子任务）分配给低层RL智能体。
  - **低层RL智能体**：使用CTDE类MARL算法（如QMIX），在观测空间中接收来自高层的信息通道，执行原始动作，并同时获得环境奖励和子任务相关奖励。
- **关键技术细节**：
  - **环境翻译器** ω：将环境状态（智能体坐标、障碍物、可用子任务、距离等）转换为自然语言提示。
  - **动作空间**：LLM智能体输出每个RL智能体的下一时刻子任务（8方向移动）。
  - **反馈机制**：两级验证（硬检查格式、软检查动作合法性），失败时触发自纠正。
  - **奖励结构**：r = r_env + r_subgoal，平衡环境反馈与子任务进度。
- **算法流程**：每个时间步，LLM智能体接收全局状态，生成子任务；RL智能体按子任务执行原始动作，与环境交互获得奖励；高层以较低频率更新（每若干步一次）。

## 3. 实验设计

- **环境与场景**：
  - **VMAS**（2D物理仿真）：Navigation（无障碍，4个智能体到达共同目标）和 Passage（有障碍墙和随机通道，5个智能体）。
  - **MOSMAC**（基于StarCraft II）：复杂地形导航（128×128地图，4个坦克单位），分为有预定义子目标和无预定义子目标两种设置。
- **基准方法**：
  - 非分层MARL：QMIX（基础算法）。
  - 分层方法：HiSOMA（FALCON+QMIX）、RBC-MARL（基于规则路径选择器）。
  - L2M2使用Llama 3.1-8B作为高层策略。
- **评估指标**：平均胜率（win rate）和平均回报（return）。

## 4. 资源与算力

- 文中**未明确**说明使用的GPU型号、数量或具体训练时长。仅提到：
  - L2M2的RL训练步数远少于基线（VMAS Navigation 200k vs 1M；Passage 400k vs 1.5M；MOSMAC 100k vs 20M）。
  - 对于on-policy算法，因计算成本高，仅报告直接集成结果。
  - 所有实验使用Llama 3.1-8B，温度设为0，最大输出150 tokens。

## 5. 实验数量与充分性

- **实验数量**：覆盖两个环境（VMAS和MOSMAC），共4个具体场景；包含端到端训练和直接集成两种设置；对比了非分层、分层（HiSOMA、RBC）方法；对L2M2进行了动作分布可视化（KDE分析）。
- **充分性**：
  - 多次独立评估（如DI设置下5个种子）。
  - 消融不完整：未单独验证各组件（如反馈机制、不同LLM模型）的影响。
  - 公平性：基线和L2M2采用相同底层算法QMIX，但L2M2使用的训练步数少很多，直接对比时可能存在优势（样本效率高），但在绝对性能上仍需更多验证。
- **结论**：实验设计基本合理，但缺乏严格的统计显著性检验和更细粒度消融。

## 6. 主要结论与发现

- L2M2在VMAS Navigation上仅用20%训练样本达到与QMIX相当的性能（94.79%胜率），在Passage上显著优于基线（8.75% vs 6.25%）。
- 在MOSMAC有子目标场景，L2M2胜率98.75%，优于HiSOMA（94.38%）和RBC（83.13%）。
- 在无子目标挑战场景，L2M2通过策略迁移达到68.13%胜率，而HiSOMA仅14.68%，非分层MARL完全失败。
- KDE分析显示LLM智能体自动生成避开危险地形的导航路径，体现了零样本规划能力。

## 7. 优点

- **样本效率**：显著减少RL训练量（仅需15-20%）。
- **零样本泛化**：无需重新训练高层控制器即可适应新场景。
- **模块化设计**：高层LLM与低层RL可独立替换，支持端到端训练和直接集成。
- **环境翻译器**有效连接LLM与RL，实现自然语言到观测空间的转换。
- **动作空间可视化分析**直观展示了LLM智能体决策质量。

## 8. 不足与局限

- **计算开销**：每次LLM推理（即使温度0）仍带来延迟，文中未量化。
- **动作空间有限**：LLM只能选择离散的8方向移动，无法处理复杂连续动作。
- **缺乏严格消融**：未分析不同LLM模型规模、反馈机制、奖励分量等的影响。
- **实验覆盖有限**：仅测试两个环境，未在更大规模智能体或更复杂任务（如包含通信、对抗）上验证。
- **统计显著性**：未报告置信区间或假设检验，部分结果标准差较大（如无子目标场景L2M2标准差25.14%）。
- **应用限制**：依赖环境状态的可翻译性，对于非结构化或高维观测（如原始图像）可能难以直接应用。

（完）

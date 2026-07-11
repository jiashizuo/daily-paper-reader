---
title: The Evolving Landscape of LLM- and VLM-Integrated Reinforcement Learning
title_zh: LLM和VLM与强化学习融合的演进图景
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/1181.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 综述了LLM/VLM与强化学习的融合，直接涵盖RLHF和多模态
tldr: 本文全面综述了大语言模型（LLM）和视觉-语言模型（VLM）与强化学习（RL）的融合现状。系统梳理了RLHF等核心方法，并探讨了多模态推理、安全对齐等应用。该综述为医疗领域的强化微调研究提供了完整的背景和方法论框架。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1181/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 898, \"height\": 530, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1181/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 894, \"height\": 425, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1181/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 894, \"height\": 423, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-1181/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 892, \"height\": 423, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-1181/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1839, \"height\": 1071, \"label\": \"Table\"}]"
motivation: 当前LLM和VLM与RL的结合快速发展，缺乏系统性综述；本文旨在梳理该领域的演化路径和关键技术。
method: 全面调查了LLM/VLM与RL的集成方法，包括偏好优化、奖励建模、多模态交互等。
result: 归纳了主要技术流派和应用场景，指出了未来方向。
conclusion: 该综述为医疗大模型应用RLHF和RL微调提供了重要的参考。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：强化学习（RL）在顺序决策任务中表现出色，但仍面临依赖人工设计奖励、样本效率低、泛化能力差、可解释性有限等挑战。大语言模型（LLM）和视觉-语言模型（VLM）具备丰富的世界知识、强大的推理能力和多模态理解能力，将这些基础模型（FM）整合进RL中，有望弥补RL的先天不足，提升数据效率、泛化能力和可解释性。
- **背景**：该领域发展迅速，但缺乏统一系统的分类框架。现有综述多未涵盖最新的LLM代理和VLM应用，因此需要一篇新的综述来梳理方法、总结进展并指出未来方向。

### 2. 论文提出的方法论：核心思想、关键技术细节
- **核心思想**：提出一个三分法分类体系，将LLM/VLM在RL中的功能角色分为三大类：
  1. **LLM/VLM作为代理（Agent）**：FM作为策略生成器，直接输出动作。细分为：
     - 参数化代理（Parametric）：对FM进行参数高效微调（如LoRA）或全微调，利用RL优化策略。代表方法：AGILE、Retroformer、TWOSOME、POAD、GLAM等。
     - 非参数化代理（Non-parametric）：保持FM参数冻结，通过上下文学习（in-context learning）、记忆机制、经验重放等方式引导行动。代表方法：ICPI、Reflexion、REMEMBERER、ExpeL、RLingua等。
  2. **LLM/VLM作为规划器（Planner）**：FM生成高层子目标或计划，指导RL代理执行低级控制。细分为：
     - 全面规划（Comprehensive）：一次性生成完整的子目标序列。代表方法：SayTap、LMA3、PSL、Inner Monologue等。
     - 增量规划（Incremental）：逐步产生子目标，根据执行反馈实时调整。代表方法：SayCan、LLM4Teach、AdaRefiner、BOSS、LLaRP等。
  3. **LLM/VLM作为奖励（Reward）**：FM帮助设计或提供奖励信号。细分为：
     - 奖励函数（Reward Function）：LLM根据自然语言描述自动生成可执行的奖励函数代码。代表方法：Text2Reward、Eureka、Zeng et al.等。
     - 奖励模型（Reward Model）：LLM/VLM直接输出标量奖励，或辅助训练视觉/文本奖励模型。代表方法：Kwon et al.、PREDILECT、ELLM、RL-VLM-F、VLM-RM、MineCLIP等。
- **关键技术细节**：文中不涉及单一算法公式，但总结了每类方法的通用流程，例如参数化代理使用策略梯度优化（如PPO）微调FM；非参数化代理通过经验缓存和自反思改进决策；规划器利用FM的常识分解任务为子目标；奖励函数生成器迭代优化奖励代码，并通过RL训练验证。

### 3. 实验设计：使用的数据集/场景、benchmark、对比方法
- **综述性质**：本文是综述，本身不包含新实验。但归纳了引用论文的实验设置：
  - **任务场景**：涵盖单智能体/多智能体、单任务/多任务、在线/离线RL场景，包括机器人操控（如SayCan、PSL）、游戏（如Minecraft的MineCLIP、Werewolf）、文本游戏（如GLAM）、导航（LLaRP）等。
  - **Benchmark指标**：成功率（Success Rate）、累计奖励（Reward/Return）、样本效率（Sample Efficiency）、泛化能力（Generalization）、鲁棒性（Robustness）、与人类对齐度（Alignment）等。
  - **对比方法**：各论文通常对比基础RL算法（如PPO、DQN）、无FM辅助的基线、人类专家设计的奖励函数、其他LLM-based方法等。例如Eureka对比了人类设计的奖励和自动搜索；VLM-RM对比了真值奖励和人工标注奖励。
- **总结**：综述选择的论文均经过同行评审，覆盖了2020年后发布的主流模型（GPT-3、GPT-4、CLIP、PaLM等），确保了代表性。

### 4. 资源与算力
- **未明确说明**：综述本身未提及具体GPU型号、数量或训练时长。被引的部分论文（如Eureka、AGILE）可能涉及训练大量候选奖励或策略，但综述未汇总这些算力信息。
- **隐含成本**：文中指出高频调用LLM（如每步查询）或生成合成轨迹存在显著推理开销，但未提供具体量化。

### 5. 实验数量与充分性
- **数量**：综述引用了约40篇代表性论文（Table 1列出31篇方法具体信息），覆盖了三大角色的多个子类，实验场景多样，从简化文本环境到高维机器人任务均有涉及。
- **充分性与公平性**：
  - 各论文内部实验通常完整（含消融、泛化测试），例如Reflexion在多个代码生成和逻辑推理任务上评估；Eureka进行了多轮进化搜索并对比人类设计。
  - 但综述本身未对这些方法做统一的公平对比（如相同环境、相同指标），而是分类汇总，因此读者难以直接横向比较不同角色方法的优劣。
  - 总体而言，综述覆盖全面，实验多样性好，但缺乏跨方法的一致性评估。

### 6. 论文的主要结论与发现
- LLM/VLM整合RL在三个角色上均表现出显著优势：作为代理可提升策略适应性和样本效率；作为规划器可分解复杂任务、提高成功率；作为奖励可自动生成或学习奖励函数，减少人工依赖。
- 非参数化代理因无需微调而更具可扩展性，但长期规划能力较弱；参数化代理需更多计算但适应性更强。
- 全面规划与增量规划各有优劣，前者效率高但动态鲁棒性差，后者灵活性好但计算成本高。
- FM作为奖励的方法在多种任务上达到或超过人类专家设计的奖励，但受限于提示敏感性和幻觉。
- 未来关键挑战包括：接地问题（生成计划不可执行）、固有偏见、表示转换损失、高推理成本，以及缺乏系统性资源效率分析。

### 7. 优点：方法或实验设计的亮点
- **分类清晰**：三分法体系简洁而全面，有效区分了FM在RL中的不同作用，便于研究者定位自己的工作和发现空白。
- **覆盖广泛**：纳入近年涌现的LLM代理和VLM应用（如Werewolf、LangGround），补充了前人综述的不足。
- **未来方向具体**：明确提出了接地、偏见缓解、跨模态表示优化、非人类教师建议等四个值得深入的方向，具有指导意义。
- **汇总表格**：Table 1总结了31篇论文的模型、微调方式、角色、任务设置、RL作用、评估指标及代码链接，实用性强。

### 8. 不足与局限
- **实验设计不足**：作为综述，未进行系统性元分析或统一基准评估，无法量化不同方法的相对性能。
- **覆盖偏差**：可能遗漏了一些未纳入的近期工作（受空间限制），且偏重于LLM而非VLM的实例略多（VLM部分实例较少）。
- **偏见和计算成本讨论不深**：虽然指出了偏差和计算开销问题，但未提供缓解策略的详细比较或定量分析。
- **应用限制**：多数方法在模拟环境中验证，真实世界部署面临延迟、硬件约束、安全对齐等额外挑战，本文未深入探讨。
- **缺少对RLHF的详细讨论**：尽管RLHF是LLM微调的重要范式，但本文聚焦于FM增强RL，仅简要提及RLHF相关方法（如Kwon et al.），未将其作为主线。

（完）

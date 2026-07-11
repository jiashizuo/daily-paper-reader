---
title: "ReflecTool: Towards Reflection-Aware Tool-Augmented Clinical Agents"
title_zh: ReflecTool：面向反思感知的工具增强型临床智能体
authors: "Yusheng Liao, Shuyang Jiang, Yanfeng Wang, Yu Wang"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.663.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 医疗大语言模型临床智能体，工具增强
tldr: 现有LLM在医疗领域仅限于文本交互，无法处理多种临床信息。本文提出ReflecTool框架，利用领域特定工具增强临床智能体，并构建包含18个任务的综合基准CAB。ReflecTool通过反思机制有效利用工具，在五个关键临床维度上表现出色。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.663/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 687, \"height\": 693, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.663/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1613, \"height\": 1069, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.663/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 703, \"height\": 582, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.663/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 764, \"height\": 383, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.663/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1650, \"height\": 580, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.663/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1641, \"height\": 1108, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.663/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1632, \"height\": 934, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1659, \"height\": 460, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1666, \"height\": 1211, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1660, \"height\": 548, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 812, \"height\": 483, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 808, \"height\": 296, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 807, \"height\": 349, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 807, \"height\": 260, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1657, \"height\": 221, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1657, \"height\": 1397, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.663/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1038, \"height\": 2574, \"label\": \"Table\"}]"
motivation: 临床环境需要多样信息交互，但现有LLM仅限文本，且临床智能体局限于单一场景。
method: 提出ReflecTool框架，结合领域特定工具和反思机制，同时构建多维度临床智能体基准CAB。
result: 在CAB上各项任务优于基线，展示了多场景临床智能体的潜力。
conclusion: 反思感知和工具增强可提升临床智能体的泛化能力，推动医疗LLM的实际应用。
---

## Abstract
Large Language Models (LLMs) have shown promising potential in the medical domain, assisting with tasks like clinical note generation and patient communication. However, current LLMs are limited to text-based communication, hindering their ability to interact with diverse forms of information in clinical environments. Despite clinical agents succeeding in diverse signal interaction, they are oriented to a single clinical scenario and hence fail for broader applications. To evaluate clinical agents holistically, we propose ClinicalAgent Bench (CAB), a comprehensive medical agent benchmark consisting of 18 tasks across five key realistic clinical dimensions. Building on this, we introduce ReflectTool, a novel framework that excels at utilizing domain-specific tools within two stages. The first optimization stage progressively enlarges a long-term memory by saving successful solving processes and tool-wise experience of agents in a tiny pre-defined training set. In the following inference stage, ReflectTool can search for supportive successful demonstrations from already built long-term memory to guide the tool selection strategy, and a verifier improves the tool usage according to the tool-wise experience with two verification methods–iterative refinement and candidate selection. Extensive experiments on CAB demonstrate that ReflectTool surpasses the pure LLMs with more than 10 points and the well-established agent-based methods with 3 points, highlighting its adaptability and effectiveness in solving complex clinical tasks. Our code and datasets are available at https://github.com/BlueZeros/ReflecTool.

---

## 论文详细总结（自动生成）

# 论文详细总结：ReflecTool: Towards Reflection-Aware Tool-Augmented Clinical Agents

## 1. 核心问题与整体含义（研究动机与背景）

- **背景**：大型语言模型（LLMs）在医疗领域展现了潜力，如生成临床笔记和患者沟通。但现有LLMs仅限于文本交互，无法处理临床环境中多样的信息形式（如医学影像、电子健康记录EHR、数值数据等）。
- **问题**：已有的临床智能体（如EHRAgent、MMedAgent）虽能处理部分信号交互，但通常面向单一临床场景，工具范围狭窄，缺乏通用性和泛化能力。
- **整体含义**：本文旨在构建一个能综合运用多种领域工具、适应多个临床维度的通用临床智能体框架，并提供一个全面的评估基准。

## 2. 方法论：核心思想、关键技术细节、算法流程

### 2.1 核心思想
- 提出**ReflecTool**，一个反思感知的工具增强框架，通过两阶段（优化阶段 + 推理阶段）提升智能体对领域工具的选择和使用能力。
- 利用**长期记忆（Long-Term Memory）** 存储成功轨迹，**工具级经验（Tool-wise Experience）** 指导工具使用。
- 引入两种验证方法：**迭代精炼（Iterative Refinement）** 和**候选选择（Candidate Selection）**，以优化工具使用。

### 2.2 关键技术细节
- **优化阶段**：
  1. 智能体在少量训练样本上尝试解决问题，生成初始轨迹 \( C_1 \)。
  2. 通过与真实答案对比，反思生成建议 \( S \)。
  3. 基于建议生成精炼轨迹 \( C_2 \)；若成功，将 \( C_2 \) 存入长期记忆 \( M \)。
  4. 对比 \( C_1 \) 和 \( C_2 \) 中每个工具的使用，生成工具级建议，并合并到工具级经验 \( E \) 中。
- **推理阶段**：
  1. 输入查询 \( q \)，从长期记忆 \( M \) 中检索最相似的案例（使用BM25）。
  2. 智能体在检索到的示例指导下选择动作。
  3. 每次使用工具时，验证器根据工具级经验对动作进行优化：
     - **迭代精炼**：对当前动作进行多步精炼，直至最大步数或动作不再变化。
     - **候选选择**：采样多个候选动作，由验证器选择最佳动作。

### 2.3 算法流程（文字描述）
1. 初始化空长期记忆 \( M \) 和工具级经验 \( E \)。
2. 对每个任务输入 \( X \) 和答案 \( y \)：
   - 生成初始轨迹 \( C_1 \)。
   - 对比 \( C_1 \) 和 \( y \)，生成反思 \( S \)。
   - 生成精炼轨迹 \( C_2 \)；若成功，将 \( (X, C_2) \) 加入 \( M \)，并提取工具级建议更新 \( E \)。
3. 推理时，对查询 \( q \) 检索相似案例，结合 \( M(q) \) 和 \( E \) 生成动作，并通过验证器优化。

## 3. 实验设计：数据集、Benchmark、对比方法

### 3.1 提出的基准：ClinicalAgent Bench (CAB)
- 包含 **18个任务**，覆盖 **5个维度**：
  - **知识与推理（Knowledge & Reasoning）**：MedQA、MMLU、BioASQ、PubMedQA（共4个数据集）。
  - **多模态（MultiModal）**：VQA-RAD、SLAKE、OmniMedQA（共3个数据集）。
  - **数值分析（Numerical Analysis）**：MedCalc、EHRSQL、MIMIC-III、eICU（共4个数据集）。
  - **数据理解（Data Understanding）**：MedMentions、emrQA、LongHealthQA（共3个数据集）。
  - **可信度（Trustworthiness）**：MedHalt-Rht、MedVQA-Halt、EHR-Halt、LongHalt（共4个数据集）。
- 任务总数：18个，数据量分布见图1（比例：知识23.39%，多模态16.88%，数值24.03%，数据理解13.97%，可信度21.72%）。

### 3.2 对比方法
- **纯LLMs**：MedLlama3-8B、Qwen2-7B/72B、Llama3-8B、Llama3.1-8B/70B、GPT-3.5-turbo。
- **多模态LLMs**：MiniCPM-V-2.6、InternVL-Chat-V1.5、HuatuoGPT-Vision-7B/34B、GPT-4o-mini。
- **基于智能体的方法**：COT（无工具）、ReAct（带工具）、CRITIC、Reflexion（均使用自反思）。
- **本文方法**：ReflecTool（两种验证变体，迭代精炼和候选选择）。

### 3.3 实验设置
- 主干模型：Qwen2-7B和Qwen2-72B（4-bit GPTQ量化用于72B模型）。
- 推理时验证大小 \( n = 2 \)（主实验）。
- 所有智能体方法为 one-shot（提供一个成功示例格式）。

## 4. 资源与算力

- 文中明确提到：**所有实验在两个NVIDIA A100 80GB GPU上运行**（见附录D.1 Implementationes）。
- 未报告具体训练时长或总计算量（如GPU小时）。
- 优化阶段使用了“tiny pre-defined training set”（每个数据集200样本用于消融实验中的子集，但完整优化步数在分析中从0到200步变化）。

## 5. 实验数量与充分性

### 5.1 总体实验数量
- **主实验结果**：表2展示了8种LLMs、5种MLLMs、4种基线智能体方法、2种ReflecTool变体在CAB全部18个任务上的性能，覆盖5个维度。
- **消融实验**：表3对ReflecTool的四个模块（长期记忆、步骤动作反思、工具级反思、验证类型）进行了组合消融，共12种设置。
- **分析实验**（第5章）：
  - 优化步数影响（图3）：对比0/50/100/150/200步。
  - 验证规模影响（图4）：n=1,2,3,4。
  - 长期记忆影响（表4）：两种验证方法在不同few-shot设置下与基线对比。
  - 工具分布分析（图5）：可视化4种维度中工具使用比例。
  - 工具选择错误分析（表5、表6）：步骤级和任务级错误率。
  - 不同主干模型（Llama3-70B）验证（表7）。
  - 时间成本分析（表8）。

### 5.2 充分性与公平性
- **覆盖全面**：CAB覆盖5个关键临床维度，共18个任务，且包含多种数据格式（文本、图像、数值、数据库、长文档等）。
- **对比公平**：所有智能体方法共享相同的工具集和prompt模板；ReflecTool与基于自反思的方法（Reflexion）直接对比，并使用了相同的主干模型。
- **消融严谨**：分别评估了长期记忆、步骤反思、工具级反思、验证类型的作用，并分析了优化步数和验证规模的影响。
- **补充验证**：在Llama3-70B上验证了泛化性；分析了工具选择错误和时间效率。整体实验设计较充分、客观。

## 6. 主要结论与发现

1. **ReflecTool显著优于基线**：在CAB上，ReflecTool超过纯LLMs超过10个百分点，超过最强的智能体方法（Reflexion）约3个百分点（Qwen2-72B上总平均59.66% vs 56.37%）。
2. **两个验证变体各有优势**：迭代精炼在模型能力较低时更有效，候选选择在模型能力较强时更有效（见§5.2）。
3. **长期记忆贡献最大**：消融实验表明，移除长期内存导致性能下降约4-7个百分点。
4. **工具选择错误大幅减少**：ReflecTool的步骤级工具选择错误率仅为0.02-0.06%，远低于ReAct（1.44%）和Reflexion（0.92%）。
5. **工具使用更灵活、高效**：ReflecTool倾向于使用更多工具且更匹配任务类型；时间开销低于Reflexion（Qwen2-72B上47.90秒/样本 vs 57.27秒/样本）。

## 7. 优点（方法或实验设计亮点）

- **综合基准CAB**：首个覆盖五个关键临床维度、18个任务的临床智能体基准，且包含真实临床数据格式（EHR、影像、长文档等）。
- **双阶段反思机制**：优化阶段通过自我反思生成长期记忆和工具级经验；推理阶段通过检索和验证提升工具选择与使用质量。
- **两种验证策略**：针对不同模型能力设计了迭代精炼和候选选择，增加了方法的适用性。
- **公平的对比设置**：所有智能体方法使用相同工具集和one-shot示例，排除了设置差异。
- **深入的分析**：对优化步数、验证规模、工具分布、错误类型、不同主干模型、时间成本等进行了全面分析。
- **开源代码和数据集**：https://github.com/BlueZeros/ReflecTool，有利于复现和后续研究。

## 8. 不足与局限

- **基准覆盖有限**：尽管CAB包含18个任务，但可能仍无法完全代表真实临床场景的复杂性和多样性，需要持续更新。
- **工具与任务不完全匹配**：某些工具不一定与任务完美对应（如引入的MLLM工具在多模态任务外被禁用，但仍存在其他不匹配），可能带来挑战。
- **轨迹可靠性问题**：优化阶段中，成功轨迹并不保证中间过程的正确性，反思过程可能引入噪声，影响长期记忆质量。
- **未进行微调**：ReflecTool无需微调，但可以猜测微调可能进一步提升性能，文中未探索。
- **伦理与安全**：作者明确指出ReflecTool不替代医生，但模型仍可能产生幻觉，在临床应用中存在风险。
- **计算资源信息不完整**：未报告具体训练时长或推理总成本，只提到了GPU型号。
- **局限性表述**：文中提到“生成的轨迹并非总是最优”，表明反思过程需要进一步验证以确保一致性。

（完）

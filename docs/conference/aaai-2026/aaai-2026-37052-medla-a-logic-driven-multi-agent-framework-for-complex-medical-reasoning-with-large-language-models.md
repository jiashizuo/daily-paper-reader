---
title: "MedLA: A Logic-Driven Multi-Agent Framework for Complex Medical Reasoning with Large Language Models"
title_zh: MedLA：基于逻辑驱动的多智能体框架用于复杂医学推理
authors: "Siqi Ma, Jiajie Huang, Fan Zhang, Jinlin Wu, Yue Shen, Guohui Fan, Zhu Zhang, Zelin Zang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/37052/41014"
tags: ["query:mlr"]
score: 8.0
evidence: 基于逻辑树的多智能体医学推理
tldr: 复杂医学推理需要结构化多视角推理。MedLA框架让每个智能体基于三段论构建显式逻辑树，进行多轮图引导讨论。实验表明其在多个医学问答基准上优于现有多智能体方法，提高了推理的透明度和一致性，为医疗大模型的可靠推理提供了新方案。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有多智能体方法推理不透明，缺乏逻辑一致性。
method: 每个智能体基于三段论构建逻辑树，并通过图引导讨论进行迭代精炼。
result: 在医学问答任务上取得优于现有方法的性能。
conclusion: 逻辑驱动的多智能体推理增强了医学大模型的可信度。
---

## Abstract
Answering complex medical questions requires not only domain expertise and patient-specific information, but also structured and multi-perspective reasoning. Existing multi-agent approaches often rely on fixed roles or shallow interaction prompts, limiting their ability to detect and resolve fine-grained logical inconsistencies. To address this, we propose MedLA, a logic-driven multi-agent framework built on large language models. Each agent organizes its reasoning process into an explicit logical tree based on syllogistic triads (major premise, minor premise, and conclusion), enabling transparent inference and premise-level alignment. Agents engage in a multi-round, graph-guided discussion to compare and iteratively refine their logic trees, achieving consensus through error correction and contradiction resolution. We demonstrate that MedLA consistently outperforms both static role-based systems and single-agent baselines on challenging benchmarks such as MedDDx and standard medical QA tasks. Furthermore, MedLA scales effectively across both open-source and commercial LLM backbones, achieving state-of-the-art performance and offering a generalizable paradigm for trustworthy medical reasoning.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLM）在复杂医学推理任务中面临挑战，如幻觉、错误应用指南或无效因果链接。现有多智能体方法多依赖固定角色或浅层交互提示，无法检测和解决细粒度逻辑不一致。
- **研究动机**：需要一种结构化、可追溯、可对齐的多视角推理机制，以提高医疗问答的可信度与准确性。
- **整体含义**：提出基于三段论显式逻辑树的多智能体框架 MedLA，使推理过程透明、可审计，并通过多轮图引导讨论实现跨智能体错误纠正和矛盾解决，推动可信医疗推理范式。

---

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将每个智能体的推理过程组织为基于三段论（大前提、小前提、结论）的显式逻辑树，实现透明推理和前提级对齐；多个智能体进行多轮图引导讨论，迭代精炼逻辑树以达成共识。
- **关键技术细节**：
  - **三段论与逻辑树**：最小推理单元为三段论节点 `v:(pmaj ∧ pmin → C)`，通过串联或并联形成有向逻辑树 `T = (V, E)`，根节点为最终决策。
  - **智能体设计**：
    - **P-Agent（前提智能体）**：从问题和外部知识提取大前提（通用医学规则）和小前提（患者事实）。
    - **D-Agent（分解智能体）**：递归地将问题拆分为原子子问题（如基于排除法构建问题树）。
    - **M-Agent（医学智能体）**：并行运行多个，各自基于前提和子问题生成逻辑树（包含节点和边），可使用其他智能体的树进行讨论。
    - **C-Agent（可信度智能体）**：评估每个三段论节点的置信度（高/中/低），低置信度节点被标记用于后续讨论。
  - **逻辑推理工作流（三阶段）**：
    - **Phase A**：P-Agent 提取前提，D-Agent 分解问题。
    - **Phase B**：多个 M-Agent 并行生成逻辑树，C-Agent 校准节点；然后进入多轮讨论阶段：交换逻辑树、识别差异（尤其是低置信度节点），每个智能体根据反馈修订树（添加/删除前提、重新评分）。
    - **Phase C**：合并所有逻辑树生成最终答案，并输出推理链解释。
- **其他亮点**：无需微调或外部检索；LLM 通过提示词引导输出三段论文本块，无法直接输出结构化树。

---

### 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法

- **数据集与 Benchmark**：
  - **MedDDx**：鉴别诊断推理，分 Basic、Intermediate、Expert 三级难度，基于 STaRK-Prime（语义相似干扰项）。
  - **多选医学 QA 基准**：MMLU-Med、MedQA-US、BioASQ-Y/N，覆盖事实回忆、指南解释、临床决策。
  - **MedXpertQA**：专家级医学推理与理解基准（新增挑战）。
- **对比方法**：
  - **图基方法**：QAGNN、JointLK、DRAGON。
  - **多智能体投票系统**：Majority Voting、DyLAN、MedAgents、MDAgents。
  - **独立 LLM**：LLaMA-2/3/3.1-8B、Mistral-7B、MedAlpaca-7B、PMC-LLaMA-7B 等（含 CoT 变体）。
  - **RAG 方法**：Self-RAG、KG-Rank、KG-RAG、MedRAG。
  - **注：未包含需额外数据或微调大模型的方法（如 KGARevion）**。
- **评估指标**：准确率（Acc），三次独立运行平均±标准差。

---

### 4. 资源与算力

- **硬件**：8 卡 A100-80GB GPU，使用 vLLM v0.7.2。
- **训练时长**：**未明确说明总训练时长**（论文关注推理阶段，MedLA 无需额外微调或训练，仅需推理时间）。
- **推理时间**：在 BioASQ-Y/N 上，MedLA 耗时 3,657 秒（含逻辑图构建与修订），相比 Majority Voting（1,853 秒）约增加 2 倍，但低于需要离线微调的 KGARevion（10k+ 秒）。
- **结论**：资源和算力需求在可接受范围内，且不引入额外检索或微调开销。

---

### 5. 实验数量与充分性

- **实验数量**：
  - 在 MedDDx（3 个难度子集）、多选医学 QA 基准（3 个数据集）、MedXpertQA（新基准）上均进行测试。
  - 在两种骨干模型（LLaMA-3.1-8B、LLaMA-3.1-70B）上比较。
  - 消融实验（去掉 Revision loop、Credibility Agent、整个 Logic-tree 支架）。
  - 时间消耗分析（在 BioASQ-Y/N 上）。
  - 在商业模型 DeepSeek-r1 和 DeepSeek-v3 上也进行了验证。
- **充分性**：实验覆盖多个难度级别、多种基线和骨干模型，含消融与对比，整体较充分。但也存在局限性（见不足）。
- **客观性**：采用官方基准配置，多次独立运行取平均±标准差，与已发表基线准确对比。

---

### 6. 论文的主要结论与发现

- MedLA 在所有基准上显著优于现有方法，达到 SOTA；尤其在困难任务上提升更大（Expert 级别提升 +11.1 pp）。
- 在强骨干模型上（如 LLaMA-3.1-70B）仍能带来可观提升（+10.1 pp），说明逻辑树方法具有泛化性。
- 消融实验证明三个组件（逻辑树、可信度校准、多轮修订）均独立贡献精度。
- 无需微调或外部检索，仅靠结构化逻辑与多智能体协作即可超越 RAG 方法。
- 在商业 LLM（DeepSeek）上同样表现优异，验证了通用性。

---

### 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - 首次将三段论显式逻辑树引入多智能体医学推理，实现推理步骤的完全可追溯。
  - 多轮图引导讨论机制使智能体能比较和修正逻辑树，实现细粒度错误纠正。
  - 模块化设计，可灵活接入不同 LLM 骨干，无需微调或外知识库。
- **实验设计亮点**：
  - 在三个互补基准（鉴别诊断、标准 QA、专家推理）上全面评估。
  - 包含不同难度分级分析，揭示方法在困难任务上收益更大。
  - 消融实验清晰量化各组件贡献。
  - 在开放和商业 LLM 上均进行了验证，增强了结论的普适性。

---

### 8. 不足与局限

- **实验覆盖局限**：
  - 未在真实临床场景（如电子病历、患者交互）中测试，仅在标准化 QA 数据集上评估。
  - 与部分最新方法（如 KGARevion）的比较仅限于已发表结果，且未包含需要额外数据或微调的方法。
  - 只测试了英语数据，未涉及多语言或多模态（如影像）。
- **偏差风险**：
  - 所有实验基于固定提示词模板，未研究提示词敏感度。
  - 未分析不同医学子领域（如儿科、外科）的差异性。
- **应用限制**：
  - 推理延迟约为简单多数投票的 2 倍，在实时性要求高的场景可能需要优化。
  - LLM 输出文本块而非严格结构化树，可能引入解析误差。
- **消融实验范围**：仅消融了逻辑树、可信度、修订循环，未进一步分析 M-Agent 数量、讨论轮数等超参数影响。

（完）

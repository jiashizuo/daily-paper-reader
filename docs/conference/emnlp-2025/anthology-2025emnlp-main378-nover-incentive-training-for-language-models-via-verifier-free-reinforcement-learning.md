---
title: "NOVER: Incentive Training for Language Models via Verifier-Free Reinforcement Learning"
title_zh: NOVER：通过无验证器强化学习的语言模型激励训练
authors: "Wei Liu, Siya Qi, Xinyu Wang, Chen Qian, Yali Du, Yulan He"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.378.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 提出无验证器的强化学习激励训练，与GRPO概念相似
tldr: 本文提出NOVER框架，一种无需外部验证器的通用强化学习方法，仅根据模型输出的最终答案计算奖励，从而鼓励产生中间推理步骤。该方法克服了GRPO等依赖验证器的局限性，适用于更多领域。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 792, \"height\": 659, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1659, \"height\": 726, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 792, \"height\": 433, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1639, \"height\": 674, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 798, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 794, \"height\": 528, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 656, \"height\": 650, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 790, \"height\": 582, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 751, \"height\": 638, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 801, \"height\": 494, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 804, \"height\": 533, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 797, \"height\": 635, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 783, \"height\": 816, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 786, \"height\": 801, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.378/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 800, \"height\": 525, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.378/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1392, \"height\": 606, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.378/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 794, \"height\": 378, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.378/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 482, \"height\": 269, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.378/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 682, \"height\": 397, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.378/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 663, \"height\": 294, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.378/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 737, \"height\": 749, \"label\": \"Table\"}]"
motivation: 现有激励训练依赖外部验证器，限制应用领域。
method: 提出无验证器强化学习，仅用最终答案作为奖励信号。
result: 在数学和推理任务上取得与有验证器方法相当的性能。
conclusion: 无验证器RL可扩展强化后训练的适用范围。
---

## Abstract
Recent advances, such as DeepSeek R1-Zero, highlight the effectiveness of incentive training, a reinforcement learning paradigm that computes rewards solely based on the final answer part of a language model’s output, thereby encouraging the generation of intermediate reasoning steps. However, these methods fundamentally rely on external verifiers, which limits their applicability to domains like mathematics and coding, where such verifiers are readily available. Although reward models can serve as verifiers, they require high-quality annotated data and are costly to train.In this work, we propose NOVER , NO-VER ifier Reinforcement Learning, a general reinforcement learning framework that requires only standard supervised fine-tuning data with no need for an external verifier. NOVER enables incentive training across a wide range of text-to-text tasks and outperforms the model of the same size distilled from large reasoning models such as DeepSeek R1 671B by 7.7%. Moreover, the flexibility of NOVER enables new possibilities for optimizing large language models, such as inverse incentive training.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **问题**：现有的激励训练（Incentive Training）方法（如DeepSeek R1-Zero）依赖于外部验证器（verifier）来计算奖励，这使其主要适用于数学、代码等答案可客观验证的领域。对于需要复杂推理或开放生成的任务（如社会行为分析、创意写作），难以构建可靠的验证器，从而限制了激励训练的通用性。
- **背景**：虽然可以用奖励模型作为验证器，但训练高质量奖励模型需要大量标注数据和较高成本。传统强化学习从人类反馈（RLHF）也依赖训练好的奖励模型。因此，亟需一种无需外部验证器的通用激励训练框架。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：利用模型自身对标准SFT数据中正确答案的**推理困惑度（Reasoning Perplexity）**作为奖励的天然代理，无需外部验证器。通过计算条件于推理轨迹的正确答案的概率，鼓励模型生成有助于得出正确答案的中间推理步骤。
- **关键技术细节**：
  - **推理困惑度（Pr）**：给定提示p、模型生成的推理令牌t和答案令牌a，用代理模型πp以教师强制方式计算正确答案g的困惑度，并加入基于推理长度的归一化因子N(|t|)以缓解长度偏差。
  - **策略-代理同步（Policy-Proxy Sync）**：使用策略模型πθ自身作为代理模型πp，每隔Tsync步通过指数平滑同步参数：πp ← α·πp + (1-α)·πθ，保证代理与策略一致性，避免额外冻结模型的漂移。
  - **奖励设计**：
    - **格式奖励Rf**：要求输出包含<think>和<answer>标签。
    - **推理奖励Rr**：对组内各完成的推理困惑度排名进行离散化（只奖励前k名或按排名分布奖励），避免连续奖励的高方差。
    - **效率奖励Re**：鼓励用更少的推理令牌达到更好的困惑度，即同时满足Pr更低且|t|更短的条件。
  - **奖励组合**：条件组合，仅在Rf=1时计算Rr和Re，否则设为0（防止"代理诅咒"导致奖励黑客）。
  - **优化算法**：使用GRPO（Group Relative Policy Optimization）进行策略更新。

### 3. 实验设计：数据集、benchmark、对比方法

- **数据集**（覆盖四个领域，共7个数据集）：
  - **通用推理**：Natural Reasoning、GeneralThought-430K、WebInstruct-verified
  - **创意写作**：SS-GEN（社会故事生成）
  - **社交智能**：EmoBench（情绪理解）、ToMBench（心理理论）
  - **多语言**：OPUS book translation（16种语言64对语言对）
- **基准模型**：Qwen2.5-3B和7B基础版，加上CoT、SFT等变体；参照模型为Qwen2.5-Instruct系列、R1-Distill-Qwen-7B（从DeepSeek R1 671B蒸馏）。
- **对比方法**：
  - 基础模型直接输出
  - +CoT提示
  - +SFT（使用相同训练集）
  - 与LLM-as-a-Judge（严格/宽松提示）及预训练通用验证器（GV）对比
- **评估方式**：选择题用正则+文本匹配，开放题用Gemini-2.0-flash作为裁判（LLM-as-a-Judge）。

### 4. 资源与算力

- 论文明确提及：使用**2块H100 GPU**训练Qwen2.5-7B，最大生成长度1024 tokens， **1000步约需2小时**。
- 训练的大部分时间消耗在rollout（vLLM采样）上，计算推理奖励和效率奖励仅占总训练时间的约5%（见图9）。
- 所有实验基于LoRA高效微调（适配器参数仅为全模型的0.4%）。

### 5. 实验数量与充分性

- **实验数量**：包含：
  - 主要性能对比表（表1、表2），涉及两个规模(3B/7B)、多个数据集、多种基线。
  - 跨模型家族实验（Llama-3.1-8B、Mistral-7B）验证泛化性。
  - 假前提任务（FANToM）分析RL限制。
  - 消融实验：无同步、无效率奖励、无条件组合等，追踪训练稳定性（图5）。
  - 对比LLM-as-a-Judge和专用验证器（表4）。
  - 推理模式演化分析（图6）。
  - 逆激励训练创意写作实验及人工评估（图7、图8）。
- **充分性与公平性**：实验覆盖多个任务类型、多个模型规模、多个模型家族，并对比多种后训练范式（SFT、CoT、Instruct、蒸馏模型）。消融实验系统分析了各组件贡献。人工评估用于创意写作使评估更客观。
- **局限性**：作者承认在假前提任务上NOVER不如SFT，因为RL难以从基础模型未掌握的行为中自主生成奖励信号。同时，NOVER对基础模型已有能力（如指令跟随、部分CoT）有较高依赖。

### 6. 论文的主要结论与发现

- NOVER在全部七个数据集上一致超越所有基线（包括基础模型、CoT、SFT）。
- 与从DeepSeek R1 671B蒸馏的7B模型相比，NOVER平均高出7.7%。
- 无验证器方法避免了LLM-as-a-Judge和专用验证器的不稳定和奖励黑客问题。
- 效率奖励使模型学会自适应生成合适长度的推理，避免过度思考（reasoning explosion）或崩溃。
- 逆激励训练（将故事生成作为被激励的中间过程，以评分规则为最终目标）在创意写作上比标准NOVER进一步提升了14%的准确率。
- 训练稳定性依赖于策略-代理同步和条件奖励组合设计。

### 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - 首次提出完全无验证器的通用激励训练框架，突破了数学/代码领域的限制。
  - 利用模型自身困惑度作为天然奖励代理，无需额外标注或训练。
  - 策略-代理同步设计解决了代理与策略不一致的问题，且几乎不增加参数。
  - 条件奖励组合和离散化排名有效缓解奖励黑客。
  - 效率奖励明确鼓励简洁推理，与近期高效推理趋势一致。
- **实验亮点**：
  - 覆盖多样化开放任务（答、写、译、社会推理），验证通用性。
  - 跨模型规模、跨模型家族实验增强了结论稳健性。
  - 深入分析推理模式演化，揭示效率奖励如何塑造推理行为。
  - 提出逆激励训练新范式，并在创意写作中通过人工评估验证。

### 8. 不足与局限

- **实验覆盖**：
  - 主要基于Qwen2.5系列，对Llama和Mistral的比例较小，且需要使用instruct检查点，基础模型能力不足时可能无法直接应用。
  - 假前提任务（FANToM）表现不如SFT，表明RL在基础模型缺乏的拒绝模式上存在盲点。
- **偏差风险**：
  - 推理困惑度代理并非完美奖励，可能在某些场景下与真实质量不一致（论文已通过同步和条件奖励减轻但未完全消除）。
  - 使用LLM-as-a-Judge评估开放题存在评判偏差。
- **应用限制**：
  - 需要基础模型已具备一定的指令跟随和CoT生成能力（如Qwen2.5），否则难以有效激励。
  - 计算推理困惑度仍需对正确答案进行教师强制前向传播，虽然仅占5%训练时间，但仍需额外计算。
  - 逆激励训练只初步展示了潜力，在故事生成中仍可能出现幻觉（如叙述重复）。

（完）

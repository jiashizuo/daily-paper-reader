---
title: "ACECODER: Acing Coder RL via Automated Test-Case Synthesis"
title_zh: ACECODER：通过自动化测试用例合成优化代码模型强化学习
authors: "Huaye Zeng, Dongfu Jiang, Haozhe Wang, Ping Nie, Xiaotong Chen, Wenhu Chen"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.587.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 通过自动化测试用例合成进行强化学习微调
tldr: "现有代码模型主要依赖监督微调，强化学习的潜力未充分挖掘。本文提出ACECODER，通过自动化大规模测试用例合成，从现有代码数据生成(问题,测试用例)对，基于通过率构建偏好对训练奖励模型。实验表明，在Llama-3.1-8B-Ins和Qwen2.5-Coder-7B-Ins上通过最佳-of-32采样分别提升10和5个点，证明了强化学习微调在代码领域的有效性。"
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.587/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 837, \"height\": 939, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.587/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1661, \"height\": 1510, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.587/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1658, \"height\": 1172, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.587/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1652, \"height\": 908, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 807, \"height\": 375, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 610, \"height\": 355, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1654, \"height\": 1635, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1653, \"height\": 994, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1651, \"height\": 436, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1654, \"height\": 552, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1651, \"height\": 466, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1651, \"height\": 457, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1653, \"height\": 398, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1522, \"height\": 1493, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.587/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1533, \"height\": 1249, \"label\": \"Table\"}]"
motivation: 代码模型训练中强化学习的潜力被低估，主要缺乏可靠的奖励数据/模型，本文旨在解决此问题。
method: "设计自动化管道从代码数据生成(问题,测试用例)对，基于程序通过率构建偏好对，使用Bradley-Terry损失训练奖励模型。"
result: 在Llama-3.1-8B-Ins和Qwen2.5-Coder-7B-Ins上分别提升10和5个点（最佳-of-32采样）。
conclusion: 自动化测试用例合成可有效支持代码领域的强化学习微调，为未来研究提供新方向。
---

## Abstract
Most progress in recent coder models has been driven by supervised fine-tuning (SFT), while the potential of reinforcement learning (RL) remains largely unexplored, primarily due to the lack of reliable reward data/model in the code domain. In this paper, we address this challenge by leveraging automated large-scale test-case synthesis to enhance code model training. Specifically, we design a pipeline that generates extensive (question, test-cases) pairs from existing code data. Using these test cases, we construct preference pairs based on pass rates over sampled programs to train reward models with Bradley-Terry loss. It shows an average of 10-point improvement for Llama-3.1-8B-Ins and 5-point improvement for Qwen2.5-Coder-7B-Ins through best-of-32 sampling, making the 7B model on par with 236B DeepSeek-V2.5. Furthermore, we conduct reinforcement learning with both reward models and test-case pass rewards, leading to consistent improvements across HumanEval, MBPP, BigCodeBench, and LiveCodeBench (V4). Notably, we follow the R1-style training to start from Qwen2.5-Coder-base directly and show that our RL training can improve model on HumanEval-plus by over 25% and MBPP-plus by 6% for merely 80 optimization steps. We believe our results highlight the huge potential of reinforcement learning in coder models.

---

## 论文详细总结（自动生成）

## 论文结构化总结

### 1. 核心问题与整体含义（研究动机和背景）
- **背景**：现有代码生成模型（如 Code-Llama、Qwen2.5-Coder、DeepSeek-Coder）主要通过大规模预训练和监督微调（SFT）取得显著进展，但**强化学习（RL）的潜力尚未被充分挖掘**。RL 在数学推理等领域已被证明有效（如 DeepSeek-R1），但在代码领域面临两大挑战：
  - **缺乏可靠的奖励信号**：代码质量需通过执行测试用例来衡量，难以直接获得规则化奖励。
  - **缺乏大规模可靠的测试用例数据集**：现有数据集（如 APPS、TACO）依赖人工标注，规模有限或已被预训练数据覆盖。
- **本文目标**：通过**自动化大规模测试用例合成**，构建可靠的奖励数据和模型，从而解锁 RL 在代码模型训练中的潜力。

### 2. 方法论
- **核心思想**：从现有代码数据出发，自动生成高质量的（问题，测试用例）对；利用测试用例通过率构建偏好对，训练奖励模型（RM）；再将 RM 或规则化通过率作为奖励信号，通过 RL 微调策略模型。
- **关键技术细节**：
  1. **测试用例合成与过滤**：
     - 种子数据集：Magicoder-Evol-Instruct、Magicoder-OSS-Instruct、StackPyFunction（共约 124K 条目）。
     - 使用 GPT-4o-mini 将原始问题/程序对转换为**结构化的 LeetCode 风格问题**，并“想象”约 20 个测试用例。
     - 用 **Qwen2.5-Coder-32B-Instruct** 生成参考程序并执行测试用例，过滤掉参考程序无法通过的测试用例，保留 ≥5 个有效测试用例的问题，最终得到 **ACE CODE-87K** 数据集（87.1K 问题，1.38M 测试用例）。
  2. **偏好对构建**：
     - 从当前策略模型（如 Llama-3.1）对每个问题采样 N 个程序，根据通过率区分偏好对。
     - 筛选规则：正样本通过率 ≥0.8，且与负样本的通过率差值 ≥0.4，负样本通过率 >0。最终得到约 300K 偏好对（来自 46.6K 问题）。
  3. **奖励模型训练**：
     - 以 **Qwen2.5-Coder-7B-Instruct**（或 32B）为骨干，使用 Bradley-Terry 损失进行全参数微调。
     - 提取最后一层隐藏状态，通过线性头输出标量奖励。
  4. **强化学习微调**：
     - 采用 **Reinforce++** 算法（无需价值模型），奖励信号可选两种：
       - **基于 RM**：ACE CODE-RM 输出的标量奖励。
       - **基于规则**：测试用例通过的二进制奖励（全通过为 1，否则为 0）。
     - 从三种初始策略模型开始：Qwen2.5-7B-Instruct、Qwen2.5-Coder-7B-Base、Qwen2.5-Coder-7B-Instruct。

### 3. 实验设计
- **数据集与基准**：
  - **代码生成基准**：HumanEval(+)、MBPP(+)、BigCodeBench（含 Completion 和 Instruct 两个子集，以及 Hard 子集）、LiveCodeBench V4。
  - **奖励模型对比基准**：RewardBench（含 Coding、Chat、Math、Safety 等分类）。
- **对比方法**：
  - **同类 RL 方法**：RLEF、PPOCoder、StepCoder、DSTC、CodeGemma 等。
  - **其他奖励模型**：InternLM2-RM-8B、Skywork-Reward-Llama-3.1-8B、Skywork-Reward-Gemma-27B、NVIDIA-Nemotron-340B-Reward。
- **主要实验方案**：
  1. **Best-of-N 采样**：在三个推理模型（Mistral-7B-Instruct、Llama-3.1-8B-Instruct、Qwen2.5-Coder-7B-Instruct）上，分别用 ACE CODE-RM-7B/32B 选择最佳候选，评估 N=16/32/64 的效果。
  2. **RL 微调**：对三种初始模型，分别使用 RM 奖励和规则奖励进行 1 个 episode 的训练，评估在多个基准上的性能。
  3. **消融实验**：
     - 测试用例过滤对 RM 性能的影响。
     - RM 骨干网络（Llama-3.1 vs. Qwen2.5-Coder）的对比。
  4. **与其他 RM 的对比**：在 Best-of-16 设置下，对比 ACE CODE-RM 与其他公开 RM 在 Llama-3.1-8B-Instruct 上的表现。
  5. **RM-Bench 评估**：比较 ACE CODE-RM 与其他 RM 在更广泛的分类（Coding、Chat、Math、Safety 等）上的得分。

### 4. 资源与算力
- **奖励模型训练**：使用 8 张 NVIDIA A100 GPU，训练 24 小时（全参数微调，BF16 精度，batch size 128）。
- **强化学习微调**：使用 8 张 NVIDIA H100 GPU，训练约 6 小时（1 个 episode，约 80 个优化步骤，batch size 128）。
- **备注**：论文明确给出了训练硬件和时长，但未提供具体的数据预处理或推理阶段算力统计。

### 5. 实验数量与充分性
- **实验数量**：论文进行了多组实验，涵盖：
  - 3 种推理模型 × 2 种 RM 规模 × 3 个 N 值的 Best-of-N 评估（表 3，共 27 组结果）。
  - 3 种初始模型 × 2 种奖励类型的 RL 微调（表 4，共 6 组结果）。
  - 2 项消融实验（表 7、8）。
  - 1 组与其他 RM 的对比（表 5）。
  - 1 组 RM-Bench 全面评估（表 6）。
  - 人工案例研究（200 个测试用例）。
- **充分性与公平性**：
  - 覆盖了不同能力级别的推理模型（弱、中、强），以及不同初始策略模型（通用 Instruct、代码专用 Instruct、代码 Base）。
  - 对比了多种公开的 RL 方法和奖励模型，结果具有可比性。
  - 消融实验验证了测试用例过滤和骨干网络选择的重要性。
  - **不足**：RL 微调仅训练 1 个 episode，未探索更长的训练步数或更细粒度的奖励设计；未与其他 RL 方法（如 PPO、GRPO）在相同条件下进行直接比较（因作者采用 Reinforce++）；未测试在更大模型（如 70B+）上的表现。

### 6. 主要结论与发现
- **奖励模型有效**：ACE CODE-RM 在 Best-of-N 采样中显著提升推理模型的代码能力。例如，在 Llama-3.1-8B-Instruct 上平均提升 8.4 个点（N=64），在 Qwen2.5-Coder-7B-Instruct 上提升 2.6 个点；ACE CODE-RM-32B 进一步提升，使 7B 模型与 236B DeepSeek-V2.5 相当。
- **RL 微调带来一致提升**：在多个基准上，RL 微调（尤其是基于规则奖励）进一步改善了模型性能。从 Qwen2.5-Coder-7B-Base 开始训练，HumanEval-plus 提升 25%，MBPP-plus 提升 6%，仅需 80 步。
- **通用奖励模型难以胜任代码任务**：Skywork、InternLM2 等通用 RM 在 Best-of-N 中几乎无提升或下降，而 ACE CODE-RM 表现优越。
- **在 RM-Bench 上达到 SOTA**：ACE CODE-RM-32B 在 Coding、Chat、Normal、Hard 以及平均得分上领先所有对比模型（包括 340B 参数模型）。
- **自动化测试用例合成可行**：人工验证 200 个测试用例中仅 3 个无效，表明过滤方法有效。

### 7. 优点
- **方法自动化和可扩展性**：无需人工标注，通过提示工程和过滤即可合成大规模高质量测试用例，可轻松扩展至更多领域。
- **性能提升显著**：在多个基准上取得一致且大幅的提升，特别是在 Best-of-N 采样和从 Base 模型开始的 RL 训练中。
- **开源贡献**：发布了 ACE CODE-87K 数据集、ACE CODE-RM 模型以及 RL 训练代码，促进社区研究。
- **实验设计全面**：覆盖多种推理模型、初始策略、奖励类型、消融和对比，结论稳健。
- **R1 风格训练的验证**：展示了从 Base 模型直接进行 RL 训练的潜力，仅需少量计算即可大幅提升，为高效代码模型训练提供新思路。

### 8. 不足与局限
- **测试用例的局限性**：尽管通过了过滤，但测试用例仍可能包含简单或边缘情况覆盖不足的问题，导致通过不一定代表完全正确（如 RL 训练中的奖励噪声）。
- **RL 提升不够显著**：在强模型（Qwen2.5-Coder-7B-Instruct）上，RL 微调的提升相对较小（平均 0.7 点），作者推测奖励信号噪声可能限制了效果；另外仅训练 1 个 episode，未探索多轮迭代。
- **算力消耗未完全透明**：虽然训练算力给出，但数据合成阶段（GPT-4o-mini、Qwen2.5-32B 推理）的算力未统计，实际总成本可能更高。
- **未在更大规模模型上验证**：实验仅基于 7B/8B/32B 级别模型，方法在更大模型（如 70B+）上的效果未知。
- **仅关注 Python**：测试用例合成和评估仅针对 Python，迁移到其他编程语言（如 Java、C++）需额外适配。
- **RL 算法单一**：仅使用 Reinforce++，未与 PPO、GRPO 等主流算法进行系统比较，因此结论的泛化性需谨慎。

（完）

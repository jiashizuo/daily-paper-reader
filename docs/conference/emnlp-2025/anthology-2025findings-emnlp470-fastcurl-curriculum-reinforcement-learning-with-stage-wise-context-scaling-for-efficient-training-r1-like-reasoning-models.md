---
title: "FastCuRL: Curriculum Reinforcement Learning with Stage-wise Context Scaling for Efficient Training R1-like Reasoning Models"
title_zh: FastCuRL：借助阶段上下文缩放的课程强化学习高效训练类似R1的推理模型
authors: "Mingyang Song, Mao Zheng, Zheng Li, Wenjie Yang, Xuan Luo"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.470.pdf"
tags: ["query:mlr"]
score: 5.0
evidence: 研究课程强化学习和上下文缩放用于训练类似R1的推理模型，与GRPO训练流程相关
tldr: 针对大规模强化学习训练效率问题，研究了上下文长度和训练数据复杂度对R1蒸馏推理模型RL缩放的影响，提出FastCuRL方法，通过课程学习和阶段上下文缩放提升训练效率。实验表明该方法在保持性能的同时缩短了推理链，并减缓了熵崩溃，为GRPO类模型的高效训练提供了借鉴。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.470/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 807, \"height\": 482, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.470/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 800, \"height\": 661, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.470/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 773, \"height\": 513, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.470/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 805, \"height\": 534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.470/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1649, \"height\": 393, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.470/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1653, \"height\": 366, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.470/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1645, \"height\": 666, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.470/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 781, \"height\": 521, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.470/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 781, \"height\": 656, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.470/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 778, \"height\": 243, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.470/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1660, \"height\": 614, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.470/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1664, \"height\": 515, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.470/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1660, \"height\": 256, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.470/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1607, \"height\": 254, \"label\": \"Table\"}]"
motivation: 大规模强化学习训练效率低，上下文长度和复杂度影响显著。
method: 提出课程强化学习与阶段上下文缩放的FastCuRL方法。
result: 有效提升了训练效率，生成了更简洁的思维链，并减缓了熵崩溃。
conclusion: FastCuRL为R1-like模型的RL训练提供了高效方案。
---

## Abstract
Improving training efficiency continues to be one of the primary challenges in large-scale Reinforcement Learning (RL). In this paper, we investigate how context length and the complexity of training data influence the RL scaling training process of R1-distilled reasoning models, e.g., DeepSeek-R1-Distill-Qwen-1.5B . Our experimental results reveal that: text-green (1) simply controlling the context length and selecting the training data based on the input prompt length can effectively improve the training efficiency of RL scaling, achieving better performance with more concise CoT; text-blue (2) properly scaling the context length helps mitigate entropy collapse; text-red and (3) carefully choosing the context length facilitates achieving efficient LLM training and reasoning . Inspired by these insights, we propose FastCuRL , a curriculum RL framework with stage-wise context scaling to achieve efficient LLM training and reasoning. Extensive experimental results demonstrate that FastCuRL-1.5B-V3 significantly outperforms state-of-the-art reasoning models on five competition-level benchmarks and achieves 49.6% accuracy on AIME 2024. Furthermore, FastCuRL-1.5B-Preview surpasses DeepScaleR-1.5B-Preview on five benchmarks while only using a single node with 8 GPUs and a total of 50% of training steps.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

*   **问题**：大规模强化学习（RL）训练大型语言模型（LLM）时，训练效率是关键挑战。特别是类似DeepSeek-R1的推理模型，其长链思维（CoT）导致巨大的计算开销，且存在“过度思考”（overthinking）现象（如重复、冗余的推理步骤），拉低效率并影响性能。
*   **已有工作的不足**：以DeepScaleR为代表的连续增加上下文长度训练R1蒸馏模型，但在初期阶段（如8K上下文）有大量输出被截断（约42%的裁剪率），而在后期阶段（如24K上下文）则出现熵崩溃（entropy collapse），模型探索能力下降。
*   **研究目标**：探索**上下文长度**和**训练数据复杂度**如何影响RL训练过程，进而提出一种更高效的方法——既能保持甚至提升推理性能，又能生成更简洁的CoT、减缓熵崩溃，并大幅降低计算资源消耗。

## 2. 方法论

*   **核心思想**：提出 **FastCuRL**（Curriculum Reinforcement Learning with Stage-wise Context Scaling），一种课程式强化学习框架，通过**阶段式上下文缩放**交替进行**CoT压缩（长到短）** 和**扩展（短到长）**，逐步提炼高质量推理路径，同时利用**复杂度感知的数据选择**提升训练效率。
*   **关键技术细节**：
    *   **强化学习算法**：采用 **GRPO**（Group Relative Policy Optimization），无需Critic模型，降低计算开销。在GRPO基础上引入**熵奖励项**（entropy bonus），以维持探索能力，减缓熵崩溃。公式包含：优势函数 \( A_i \) 的计算（基于组内奖励归一化）、KL散度惩罚、以及熵项 \( \alpha H(\pi_\theta(o_i|q)) \)。
    *   **复杂度感知数据选择**：基于假设“更复杂的输入提示（prompt）往往需要更长的输出”，将原始训练集按输入平均长度划分为三个子集：L1（短CoT）、L2（原始）、L3（长CoT）。训练时在不同阶段选用不同复杂度子集，以控制有效上下文利用率和裁剪率。
    *   **阶段式上下文缩放**：设计多阶段训练，每阶段设置不同max上下文长度（如8K→16K→24K→16K→16K），并搭配不同数据子集。核心是“压缩-扩展-再压缩-再扩展”的循环，在缩短冗余CoT的同时保持质量，最后在最优上下文长度（约16K）稳定训练。
*   **公式/算法流程**（文字说明）：
    *   初始化模型为DeepSeek-R1-Distill-Qwen-1.5B。
    *   对每个训练阶段：设定上下文长度（如8K、16K等）和对应数据子集（L1/L2/L3）。
    *   使用GRPO + 熵惩罚进行RL训练，每次从当前策略采样16个回答，计算奖励（基于答案正确性和格式规范）。
    *   交替进行“压缩阶段”（使用较短上下文和简单数据）和“扩展阶段”（使用较长上下文和复杂数据），循环迭代。
    *   最终阶段使用固定最优上下文长度（16K）进行微调，调整KL和熵系数以进一步提升性能。

## 3. 实验设计

*   **数据集**：使用DeepScaleR提供的数学竞赛数据集（40,207条），来自AIME(1984-2023)、AMC、Omni-MATH、Still等。并按输入长度分为L1、L2、L3用于阶段训练。
*   **基准（Benchmark）**：五个竞赛级数学推理基准——**MATH 500**、**AIME 2024**、**AMC 2023**、**Minerva Math**、**OlympiadBench**。
*   **评估指标**：**Pass@1**（采样温度0.6，top-p 1.0，每问题生成k=16个回答，计算平均正确率）。
*   **对比方法**：
    *   Qwen2.5-Math-7B-Instruct
    *   RStar-Math-7B
    *   Eurus-2-7B-Prime
    *   Qwen2.5-7B-SimpleRL
    *   DeepSeek-R1-Distill-Qwen-1.5B
    *   Still-3-1.5B-Preview
    *   DeepScaleR-1.5B-Preview
    *   （以及FastCuRL自身的多个版本：Preview、V2、V3）
*   **主要结果**：FastCuRL-1.5B-V3在所有五个基准上取得最佳平均值61.6，其中AIME 2024达49.6%，显著超越所有对比方法。FastCuRL-1.5B-Preview在训练步数减少50%的情况下超越DeepScaleR-1.5B-Preview。

## 4. 资源与算力

*   **硬件**：单节点，**8块GPU**（具体型号未明确说明，推测为常见训练卡如NVIDIA A100/RTX 4090等）。
*   **训练步数与时长**：
    *   FastCuRL-1.5B-Preview：约860步（归一化后）
    *   V2：约1710步
    *   V3：约2620步
    *   对比DeepScaleR：约1750步，且使用了8、16、32 GPU的多节点设置。
    *   作者强调FastCuRL仅使用**DeepScaleR 50%的训练步数**，且硬件资源更低（单节点8 GPU，DeepScaleR需更多GPU）。
*   **说明**：文中未提供具体GPU型号及训练总时间（小时），但给出了训练步数和硬件规模，已足够体现资源节约。

## 5. 实验数量与充分性

*   **实验组数**：
    *   复杂度验证实验（3组）：在8K上下文下比较L1、L2、L3的性能、裁剪率、输出长度。
    *   多阶段实验共11组（Exp-1到Exp-11）：包括3阶段、4阶段、5阶段的不同上下文组合，以及不同KL/熵系数设置。
    *   上下文长度扫描实验：在4K到24K七个点上观察熵变化。
    *   消融实验：对比是否添加熵惩罚或KL散度对输出长度和奖励的影响。
    *   最终对比：5个基准、多个baseline、多种FastCuRL版本。
*   **充分性与公平性**：
    *   **优点**：实验设计系统，逐步验证了数据复杂度、上下文长度、阶段策略、超参数的影响。消融实验和扫描实验提供了机制理解。对比方法均为公开前沿模型。
    *   **局限性**：仅基于1.5B模型，未在更大模型（如7B、70B）上验证；数据选择仅按输入长度简单划分，未探索更精细的复杂度度量；训练超参数（如温度、学习率）固定，可能未针对所有阶段最优。

## 6. 主要结论与发现

1.  **简单控制上下文长度和基于输入长度的数据选择可显著提升RL训练效率**，获得更简洁的CoT和更好性能。
2.  **适当缩放上下文长度有助于缓解熵崩溃**，维持模型探索能力；过短或过长的上下文都会导致熵快速下降或性能饱和。
3.  **存在最优上下文长度**（对1.5B模型约16K），在该长度下训练稳定性与性能最佳。
4.  FastCuRL通过“压缩-扩展”循环训练，在减少50%计算资源的同时，超越了DeepScaleR（使用更多步骤和更多GPU）的性能，且生成了更短的推理链（减少50%以上输出长度），“wait”等反思行为频率也降低，表明冗余减少。
5.  **熵曲线**显示FastCuRL保持较长探索阶段，避免过早收敛，最终性能更高。

## 7. 优点

*   **简单高效**：方法基于直观的洞察（输入长度与输出复杂度相关），实现简单，却带来显著效率提升。
*   **资源友好**：单节点8 GPU即可完成训练，步骤减半，极大降低门槛，便于复现和应用。
*   **可解释性**：详细分析了熵、裁剪率、输出长度等训练动态，论证了阶段式上下文缩放的工作原理。
*   **性能卓越**：在多个竞赛级基准上全面超越同类小模型，甚至超越部分7B模型。
*   **开源**：代码、训练数据、模型均已公开，促进社区发展。

## 8. 不足与局限

*   **模型规模单一**：仅验证了1.5B参数模型，能否推广到更大或更小的模型尚不清楚，这是最主要的局限。
*   **数据选择方法粗糙**：仅基于输入长度简单划分，未考虑问题类型、推理复杂度等更本质的指标，可能有偏差（如长输入不一定等价于高推理复杂度）。
*   **缺少自适应机制**：上下文长度和阶段切换是人工预设的，未探索动态/自适应调整策略，可能不是最优解。
*   **超参数敏感**：KL和熵系数的调节对最终性能影响大（如Exp-10和Exp-11），但文中仅做了有限搜索，未给出通用规则。
*   **实验覆盖有限**：基准仅限于数学竞赛，未在代码、科学推理等其他强推理任务上验证。
*   **评估指标局限**：Pass@1基于采样16次平均，未报告更严格的指标（如pass@k, majority vote等），也未与其他模型在相同采样数下对比（可能DeepScaleR等也使用类似设置，但文中未明确统一）。

（完）

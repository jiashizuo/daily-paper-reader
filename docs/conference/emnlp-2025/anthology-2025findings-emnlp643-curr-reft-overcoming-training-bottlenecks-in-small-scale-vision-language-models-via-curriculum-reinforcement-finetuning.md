---
title: "Curr-ReFT: Overcoming Training Bottlenecks in Small-scale Vision-Language Models via Curriculum Reinforcement Finetuning"
title_zh: Curr-ReFT：通过课程强化微调克服小规模视觉语言模型的训练瓶颈
authors: "Huilin Deng, Ding Zou, Xinghao Zhao, Rui Ma, Yanming Guo, Yang Cao, Yu Kang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.643.pdf"
tags: ["query:mlr"]
score: 5.0
evidence: 针对视觉语言模型的课程强化微调，可应用于医疗视觉语言模型
tldr: 本文提出Curr-ReFT，一种课程强化微调方法，解决小规模视觉语言模型在分布偏移下的视觉幻觉和稀疏奖励问题。通过分阶段课程训练和强化学习，在视觉推理任务上显著提升模型泛化能力。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.643/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 792, \"height\": 208, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.643/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1629, \"height\": 574, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.643/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 782, \"height\": 369, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.643/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 787, \"height\": 346, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.643/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 800, \"height\": 720, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.643/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 804, \"height\": 534, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 818, \"height\": 274, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 825, \"height\": 191, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 817, \"height\": 511, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 828, \"height\": 662, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1601, \"height\": 624, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 816, \"height\": 608, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 803, \"height\": 331, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 812, \"height\": 286, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 772, \"height\": 418, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.643/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 803, \"height\": 459, \"label\": \"Table\"}]"
motivation: 小规模VLM在分布偏移下易出现视觉幻觉和灾难性遗忘。
method: 提出课程强化微调，分阶段逐步增加任务难度并结合RL优化。
result: 在视觉推理基准上大幅超越SFT和标准RL方法。
conclusion: 课程RL有效增强小规模VLM的鲁棒性和推理能力。
---

## Abstract
State-of-the-art vision-language models (VLMs) require massive scaling that limits practical deployment. Small-scale VLMs offer a practical alternative but face out-of-domain (OOD) collapse when trained with traditional supervised fine-tuning (SFT). Through GeneralPoints experiments, we identify that OOD collapse is due to SFT’s tendency to induce visual hallucinations under distribution shifts, whereas Reinforcement Learning’s (RL) bidirectional reward-driven mechanism with iterative error correction refines visual perception. Although RL-based post-training effectively mitigates OOD degradation, it faces a critical sparse reward dilemma in complex visual reasoning tasks. To this end, we propose Curriculum Reinforcement Finetuning (Curr-ReFT), comprising two sequential stages: (1) Structured Curriculum Reinforcement Learning, which progressively evolves task formats and reward functions to match models’ growing capabilities; and (2) Rejected Sampling-based Self-improvement, which maintains the fundamental capabilities of VLMs through selective learning from high-quality examples. Extensive experiments demonstrate that Curr-ReFT achieves state-of-the-art performance across various visual tasks in both in- and out-of-domain settings and benchmarks.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：小规模视觉语言模型（VLM，<10B参数）在传统监督微调（SFT）下，会在分布偏移（out-of-domain, OOD）场景中出现严重的性能退化（即“OOD collapse”），表现为视觉幻觉。虽然基于强化学习（RL）的微调能有效缓解OOD退化，但在复杂视觉推理任务中面临**稀疏奖励**的困境，导致模型收敛到次优策略，产生训练瓶颈。
- **整体含义**：本文旨在提出一种新的后训练范式，使小规模VLM在保持域内（in-domain）高性能的同时，能显著提升域外泛化能力和推理鲁棒性，从而缩小与大规模模型的差距，降低部署门槛。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：通过**课程强化微调（Curr-ReFT）** 分两阶段训练：
  1. **结构化课程强化学习（Curr-RL）**：逐步增加任务复杂度和奖励难度，缓解稀疏奖励问题。
  2. **拒绝采样自改进（Rejected Sampling Self-improvement）**：通过LLM-as-Judge选择高质量响应进行SFT，保持通用能力。

- **关键技术细节**：
  - **Curr-RL**采用GRPO算法（DeepSeek-R1-Zero中的组相对策略优化），无需额外critic网络。
  - **课程三阶段**：
    - **Stage 1 – 二值决策**：将问题重构为“是/否”形式，输出空间最小化，奖励为0/1二值。
    - **Stage 2 – 多项选择**：包括单选和多选，多选引入部分正确奖励（正确集完全匹配得1，部分匹配得0.2）。
    - **Stage 3 – 开放生成**：针对检测任务设计**IoU奖励**（匹配框IoU>0.5则得1分+格式分），针对分类任务设计**类别重叠奖励**（预测类别与真值类别的交集/并集比例）。
  - **拒绝采样阶段**：使用GPT-4o对Curr-RL后的模型在通用领域数据（科学、常识、数学等）生成的回答进行打分（0-100），筛选≥85分的回答构成精选数据集，再进行一次SFT。

- **算法流程**（文字描述）：
  1. 初始化基座VLM（如Qwen2.5-VL-3B）。
  2. 依次进行三阶段GRPO训练，每个阶段使用对应格式的数据和奖励函数。
  3. 使用训练后的模型在通用领域数据上采样N个答案，由GPT-4o评分，保留最高分且≥85的样本。
  4. 在精选数据集上执行SFT，得到最终模型。

### 3. 实验设计

- **使用的数据集**：
  - **视觉任务（检测、分类、多模态数学）**：各5000训练、1000域内测试、1000域外测试。检测和分类数据来自RefCOCO、RefCOCOg；数学数据来自Math360K、Geo170K。
  - **域外测试集**：检测用RefGTA，分类用Pascal-VOC，数学用CLEVR-70k-Counting。
  - **公共基准**：MathVista、MATH、AI2D、MMVet、MMBench、OCRBench、LLaVABench、GeneralPoints（用于验证RL vs SFT的OOD性能）。
  - **扩展领域**：医学图像VQA（VQA-RAD、PathVQA、OmniMedVQA、MMMU）和代码生成（HumanEval）。

- **Benchmark**：上述公共基准均采用官方或广泛采用的评估方式（准确率、Pass@1等）。检测任务以IoU>0.5为正确。

- **对比方法**：
  - 大规模VLMs：Qwen2.5-VL系列、InternVL系列、LLaVA-32B、InterVL2-26B等。
  - 强化学习方法：Vision-R1-7B、VLM-R1、Perception-R1、LISA-7B。
  - 自身消融：Base、+SFT、+RL、+Curr-RL、+ReFT、+RL-ReFT、+Curr-ReFT，以及课程顺序变化（Reverse、Mix）和单独奖励形式（Judge、Choice）。

### 4. 资源与算力

- **GPU型号**：NVIDIA A800。
- **训练规模**：
  - Qwen2.5-VL-3B使用**8 GPU**，batch size=8。
  - Qwen2.5-VL-7B使用**16 GPU**。
- **超参数**：RL（GRPO）学习率2e-5，拒绝采样阶段学习率2e-7，SFT学习率1e-6；最大像素数量401408；GRPO训练步数2500。
- **训练时长**：论文中**未明确说明**具体训练时长。

### 5. 实验数量与充分性

- **实验数量**：包含多组核心对比（表1-3）、公共基准对比（表4）、消融实验（表4a、4b）、扩展实验（表5、6、7）、GeneralPoints附加实验（表2）。合计约10张表格，覆盖多种任务、模型尺寸、领域。
- **充分性与公平性**：
  - 消融全面：分别验证了SFT、RL、Curr-RL、ReFT四个主要组件及其组合，还分析了课程顺序和奖励类型的影响。
  - 跨模型、跨领域扩展：在InternVL、Qwen2-VL等多个基座上验证，并推广到医学和代码任务，增强普适性。
  - 对比方法均为近期SOTA，使用相同或类似评估协议，公平性较好。
  - 不足之处：未与更多大规模（>32B）模型在相同小模型设置下比较，但已在公共基准中与大模型并列显示。

### 6. 论文的主要结论与发现

1. **RL优于SFT**：在域外视觉任务上，RL显著优于SFT（表1、表2），RL通过双向反馈和多轮纠错逐步精炼视觉感知，而SFT倾向于记忆训练模式。
2. **Curr-RL缓解稀疏奖励**：与标准RL相比，Curr-RL在数学、检测、分类任务上均有提升（域内+4~6%，域外+4~10%），且训练更稳定、收敛更快（图5）。
3. **拒绝采样保持通用能力**：ReFT在语言类基准（MMVet、MMBench、LLaVABench）上提升显著，但会轻微损害视觉感知任务；结合Curr-RL后（Curr-ReFT）可实现兼顾。
4. **小模型匹敌大模型**：Curr-ReFT-7B在LLaVABench等基准上达到甚至超过LLaVA-32B水平，缩小了与小规模模型的性能差距。
5. **课程顺序至关重要**：正向课程（简单→复杂）优于随机混合或反向课程（表4a）。

### 7. 优点

- **方法论创新**：提出“课程强化微调”范式，将课程学习与RL结合，创新性地通过任务格式演进和分层奖励缓解稀疏奖励问题。
- **实用性**：针对小规模VLM设计，降低了部署门槛；提出的奖励函数（IoU奖励、类别重叠奖励）清晰可验证，易于推广。
- **实验全面**：覆盖多种视觉推理任务、多个基座模型、多个公共基准，并扩展到医学和代码领域，验证了方法鲁棒性。
- **数据开源**：提供了12k示例的课程数据集，促进复现和后续研究。

### 8. 不足与局限

- **任务格式限制**：早期课程使用二值和选择格式，可能使模型偏向简短回答，影响开放生成任务的多样性。
- **灾难性遗忘风险**：阶段间过渡若无显式保留机制，可能遗忘早期学到的技能（尽管拒绝采样阶段部分缓解）。
- **手工课程设计**：三阶段课程为人工设计，可能在不同领域或模态下非最优，缺乏自动课程调度。
- **计算资源**：训练需8-16张A800 GPU，对于小规模团队仍有门槛，但相比大规模模型已较低。
- **未充分探讨**：对奖励函数的设计选择、课程粒度、更复杂长期任务的泛化性未深入分析。

（完）

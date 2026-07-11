---
title: "Unilaw-R1: A Large Language Model for Legal Reasoning with Reinforcement Learning and Iterative Inference"
title_zh: Unilaw-R1：基于强化学习和迭代推理的法律推理大语言模型
authors: "Hua Cai, Shuang Zhao, Liang Zhang, Xuli Shen, Qing Xu, Weilin Shen, Zihao Wen, Tianke Ban"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.915.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 基于RL微调的法律大模型推理
tldr: 针对法律领域大模型缺乏推理能力的问题，提出Unilaw-R1法律推理大模型。构建高质量CoT数据集，采用两阶段训练策略（SFT+RL），迭代推理增强。实验显示Unilaw-R1在法律推理任务上达到先进性能，且参数仅7B，部署成本低。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1401, \"height\": 850, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1647, \"height\": 758, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1426, \"height\": 309, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 693, \"height\": 537, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 809, \"height\": 472, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 786, \"height\": 635, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1608, \"height\": 705, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 716, \"height\": 723, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 718, \"height\": 729, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.915/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1606, \"height\": 686, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.915/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 800, \"height\": 255, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.915/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1563, \"height\": 630, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.915/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 802, \"height\": 416, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.915/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 738, \"height\": 292, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.915/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 832, \"height\": 679, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.915/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 804, \"height\": 416, \"label\": \"Table\"}]"
motivation: 现有法律大模型面临法律知识不足、推理逻辑不可靠、泛化弱等挑战。
method: 构建约17K蒸馏CoT样本，采用两阶段训练（SFT后RL）及迭代推理策略。
result: 在多个法律推理基准上Unilaw-R1超越同等规模模型，接近大模型性能。
conclusion: 结合高质量数据和两阶段RL训练能有效提升领域专用LLM的推理能力。
---

## Abstract
Reasoning-focused large language models (LLMs) are rapidly evolving across various domains, yet their capabilities in handling complex legal problems remains underexplored. In this paper, we introduce Unilaw-R1, a large language model tailored for legal reasoning. With a lightweight 7-billion parameter scale, Unilaw-R1 significantly reduces deployment cost while effectively tackling three core challenges in the legal domain: insufficient legal knowledge, unreliable reasoning logic, and weak business generalization. To address these issues, we first construct Unilaw-R1-Data, a high-quality dataset containing ~17K distilled and screened chain-of-thought (CoT) samples. Based on this, we adopt a two-stage training strategy combining Supervised Fine-Tuning (SFT) and Reinforcement Learning (RL), which significantly boosts the model’s performance on complex legal reasoning tasks and supports interpretable decision-making in legal AI applications. To assess legal reasoning ability, we also introduce Unilaw-R1-Eval, a dedicated benchmark designed to evaluate models across single- and multi-choice legal tasks. Unilaw-R1 demonstrates strong results on authoritative benchmarks, outperforming all models of similar scale and achieving performance on par with the much larger DeepSeek-R1-Distill-Qwen-32B (54.9%). Following domain-specific training, it also showed significant gains on LawBench and LexEval, exceeding Qwen-2.5-7B-Instruct (46.6%) by an average margin of 6.6%. Code is available at: https://github.com/Hanscal/Unilaw-R1.

---

## 论文详细总结（自动生成）

# 详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有大语言模型（LLM）在法律推理领域面临三大挑战：①法律知识不足导致推理逻辑不可靠；②法律数据碎片化增加预处理复杂性并削弱推理；③黑盒模型缺乏透明度和可追溯性。此外，法律推理需同时满足成文法的外部有效性和程序内部一致性。
- **整体含义**：本文旨在构建一个轻量级（7B参数）的法律推理专用大模型Unilaw-R1，通过高质量数据集、两阶段训练（SFT+RL）和迭代推理策略，提升模型在法律复杂推理任务上的准确性和可解释性，以较低部署成本实现接近大模型（如32B）的性能。

## 2. 论文提出的方法论

- **核心思想**：结合数据蒸馏构建高质量CoT推理数据集，采用“监督微调（SFT）→ 强化学习（GRPO）”两阶段训练，并引入迭代多智能体推理机制，增强模型的法律推理能力和泛化性。
- **关键技术细节**：
  - **数据构建**：基于JEC-QA和自有的国家司法考试题，使用DeepSeek-R1进行蒸馏生成CoT推理轨迹，经Answer Check（精确匹配参照答案）、Chain Rewriting（重构推理链）、Explanation Generation（为错误答案生成解释）、Reasoning Selection（LLM-as-Judge评分，依据五条标准：逻辑一致性、法律适用正确性等）四步过滤，得到约17K高质量样本（Unilaw-R1-Data）。
  - **训练方法**：
    - **SFT阶段**：基于Qwen2.5-7B-Instruct，使用LoRA高效参数调优，学习`<think>...</think>`和`<answer>...</answer>`格式的推理轨迹。
    - **RL阶段**：采用GRPO算法，组大小G=4，优化目标含重要性采样比、裁剪和KL散度惩罚。奖励函数包含三项权重求和：
      - 准确率奖励（α=0.9）：基于正则提取的答案与参考答案精确匹配；
      - 格式奖励（β=0.1）：输出必须严格包含一对`<think>`和一对`<answer>`标签且无额外内容；
      - 法律有效性奖励（γ=0.1）：使用指令模型（Qwen2.5-7B-Instruct）评估推理链是否符合法律三段论、引用规范等，得分0/1/2。
  - **迭代推理**：在推理阶段，采样k=10个候选答案，通过Assessor Agent（评估每步质量）和Reviser Agent（根据反馈修正）进行最多3轮迭代，最后通过ORM（outcome reward model）选择top-k链，再用self-consistency得出最终答案。

## 3. 实验设计

- **数据集与场景**：
  - **Unilaw-R1-Eval**：800个多选题（426单选+374多选，来自2015-2021年国家司法考试自建数据），按知识驱动和案例驱动分类，涵盖14个法律子领域（刑法、民法、行政法、诉讼法等）。
  - **LawBench**：20个任务，三个认知层级（记忆、理解、应用），含多种题型。
  - **LexEval**：14,150条，23个法律任务，评估六种认知能力。
- **基准模型**：DeepSeek-R1（671B）、DeepSeek-V3（671B）、DeepSeek-R1-Distill-Qwen-32B/14B/7B、Qwen-2.5-32B/14B/7B-Instruct、Unilaw-R1-SFT、Unilaw-R1-RL等。
- **评估指标**：Accuracy和F1（对Unilaw-R1-Eval），其他基准采用自动评估方法。

## 4. 资源与算力

- 文中明确说明：所有训练和测试结果在配备**8×96GB NVIDIA H20 GPU**的机器上完成。SFT阶段使用LoRA rank=8，RL阶段GRPO组大小=4。具体训练时长未给出。

## 5. 实验数量与充分性

- **主要实验**：在三个基准（Unilaw-R1-Eval、LawBench、LexEval）上与10多个基线模型对比，报告了平均准确率。Unilaw-R1在7B规模上达到平均53.2%，优于所有同规模模型，接近32B水平。
- **消融实验**：
  - 对比不同推理策略（Zero-shot CoT、Best-of-k、Majority Vote、Iterative Inference 1-3轮），显示迭代推理显著提升性能，尤其第一轮增益最大。
  - 对比不同RL奖励组合（Acc&Fmt vs. Acc&Fmt&Legal），后者收敛更快且准确率更高，验证了法律有效性奖励的作用。
  - 在Qwen2.5-7B-Instruct上也进行了同样的推理策略消融，结果趋势一致。
- **充分性评估**：实验设计较为全面，覆盖多个数据集和多种推理方式，消融实验关键，但仅在7B模型上训练，未验证更大基座模型的扩展性；仅使用多选题，未覆盖生成式任务。

## 6. 论文的主要结论与发现

- Unilaw-R1（7B参数）通过两阶段训练（SFT+RL）和迭代推理，在多个法律基准上达到平均53.2%准确率，超越所有同规模模型，性能可比肩DeepSeek-R1-Distill-Qwen-32B（54.9%）。
- 法律有效性奖励函数的加入带来更快的收敛和更高的最终准确率。
- 迭代推理在第一轮获得最大增益（平均准确率从39.5%提升至50.5%），后续迭代改进有限。
- 提出的Unilaw-R1-Data和Unilaw-R1-Eval数据集为法律推理研究提供了可靠的基础和评估工具。

## 7. 优点

- **轻量高效**：仅7B参数，部署成本低，性能却接近32B模型，有实用价值。
- **数据质量高**：多阶段过滤（精确匹配+LLM评分）确保CoT推理链准确且符合法律逻辑。
- **训练框架新颖**：SFT + RL（GRPO）结合领域专用奖励函数（法律有效性、格式、准确率），有效提升专业推理能力。
- **推理增强机制**：迭代多智能体（Assessor-Reviser）框架，模仿同行评审，增强了输出的可解释性和准确性。
- **实验设计较全面**：覆盖多个基准、多种基线、推理策略消融和奖励消融，分析充分。

## 8. 不足与局限

- **训练数据覆盖有限**：仅限于客观法律多选题，未涵盖生成式任务（如法律咨询、文书撰写），模型在复杂生成场景下的能力未知。
- **单模态架构**：仅文本输入，无法处理含图表、表格的文档，限制了实际应用（如卷宗分析）。
- **CoT推理评价不足**：当前仅与参考答案进行精确匹配，缺乏对中间推理步骤（如三段论结构）的自动评估，可能掩盖推理过程中的错误。
- **未探索更大基座模型扩展性**：仅在7B模型上训练，未验证在更大参数规模（如14B/32B）上能否延续优势。
- **迭代推理计算成本较高**：需要多次采样、评估和修正，增加了推理延迟。
- **法律通用性有待验证**：数据主要来源于中国国家司法考试，对其他国家法律体系或实践场景的适用性未知。

（完）

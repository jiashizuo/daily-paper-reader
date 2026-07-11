---
title: "Wait, that’s not an option: LLMs Robustness with Incorrect Multiple-Choice Options"
title_zh: 等等，那不是选项：大语言模型在错误多选题下的鲁棒性
authors: "Gracjan Góral, Emilia Wiśnios, Piotr Sankowski, Paweł Budzianowski"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.75.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: LLM在医疗决策任务上的鲁棒性
tldr: 该论文研究了大语言模型在面对无有效选项的多选题时的表现，特别是在医疗决策等高stakes任务中。通过系统评估，发现经过后训练对齐的模型倾向于选择无效选项，而基础模型反而表现出更好的拒绝能力。研究揭示了对齐技术可能无意中损害模型的反思判断能力。该工作为理解LLM在医疗等关键领域的可靠性提供了新视角。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.75/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1513, \"height\": 838, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.75/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1630, \"height\": 410, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.75/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 698, \"height\": 828, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.75/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 803, \"height\": 436, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.75/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 716, \"height\": 951, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.75/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 806, \"height\": 425, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.75/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 532, \"height\": 596, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1378, \"height\": 1254, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 782, \"height\": 508, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 800, \"height\": 358, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 786, \"height\": 285, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 772, \"height\": 214, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 784, \"height\": 251, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1606, \"height\": 427, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1060, \"height\": 847, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 736, \"height\": 778, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1306, \"height\": 753, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1658, \"height\": 272, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 758, \"height\": 290, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 756, \"height\": 289, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 762, \"height\": 216, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1622, \"height\": 1992, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1598, \"height\": 1572, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.75/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1027, \"height\": 1669, \"label\": \"Table\"}]"
motivation: 现有对齐技术可能损害LLM在无效选项下的判断能力，需要评估。
method: 提出了一个评估框架，测试LLM在包含无效选项的多选题上的表现，涉及算术、领域知识和医疗任务。
result: 发现对齐模型倾向于选择无效选项，而基础模型拒绝能力随规模提升，人类评估也验证了这一点。
conclusion: 对齐技术虽意在增强有用性，但可能损害模型的反思判断，需要在医疗等场景中谨慎部署。
---

## Abstract
This work introduces a novel framework for evaluating LLMs’ capacity to balance instruction-following with critical reasoning when presented with multiple-choice questions containing no valid answers. Through systematic evaluation across arithmetic, domain-specific knowledge, and high-stakes medical decision tasks, we demonstrate that post-training aligned models often default to selecting invalid options, while base models exhibit improved refusal capabilities that scale with model size. Our analysis reveals that alignment techniques, though intended to enhance helpfulness, can inadvertently impair models’ reflective judgment–the ability to override default behaviors when faced with invalid options. We additionally conduct a parallel human study showing similar instruction-following biases, with implications for how these biases may propagate through human feedback datasets used in alignment. We provide extensive ablation studies examining the impact of model size, training techniques, and prompt engineering. Our findings highlight fundamental tensions between alignment optimization and preservation of critical reasoning capabilities, with important implications for developing more robust AI systems for real-world deployment.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

本论文研究了大语言模型（LLM）在回答多选题时，如果所有给定选项都是错误的，模型是否具备**反思判断（reflective judgment）**能力——即不仅仅遵循指令（helpfulness），而是能够批判性地评估选项的有效性，甚至拒绝回答或给出正确答案。  
研究动机源于现实场景中用户可能给出误导性指令（如不正确的选项），模型若盲目遵循指令可能导致严重错误，尤其是在医疗、安全等高风险领域。现有对齐技术（如RLHF、DPO）旨在提升模型的帮助性和安全性，但可能无意中损害模型的批判性推理能力。论文通过系统评估揭示了这一张力，并探讨了模型规模、训练阶段、提示工程等因素的影响。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 核心思想
- 定义**反思判断（reflective judgment）**：模型覆盖“帮助性”行为，批判性地评估指令，当指令导致错误时能够覆盖默认行为。
- 在多选题中故意移除所有正确选项，测试模型是否能够识别并拒绝选择，或者给出正确答案。

### 关键技术细节
- 构建三类数据集：基本算术（BAD）、MMLU子集（领域知识）、MedMCQA（医疗决策）。
- 设计三种**反射条件**（reflection conditions）：
  - **Easy**：明确告知“正确答案可能不在选项中”。
  - **Standard**：无额外提示。
  - **Hard**：强制要求必须选择一个选项。
- 引入**反射判断分数（RJ score）**：衡量模型识别无正确选项或提供正确答案的比例。
- 控制实验：设置baseline（一个正确选项+一个错误选项）以测量模型的基础能力。
- 位置偏差处理：对每个问题两种选项顺序取平均。

## 3. 实验设计：使用的数据集、基准、对比方法

### 数据集
- **BAD (Basic Addition Dataset)**：三个难度级别（个位数、两位数、三位数加法），每级约100题。
- **MMLU子集**：400题，涵盖STEM、人文、社科、其他四大领域。
- **MedMCQA子集**：200题，来自麻醉、病理、放射、外科四科。

### 基准（Baseline）
- 对每个问题给出一个正确+一个错误选项，测量模型标准准确率。

### 对比方法/模型
- **闭源模型**：GPT-4o, GPT-4o-mini, o1-mini, Claude 3系列（Haiku, Sonnet, Opus, 3.5 Sonnet）, Gemini 1.5 Flash/Pro。
- **开源模型**：Llama 3.1 (8B, 70B, 405B), Qwen2-Math-7B (Base/RLHF), Qwen2.5 (7B, 14B, 32B, 对应Instruct版本), DeepSeekMath-7B (Base, Instruct, RLHF)。
- 对比了不同的训练阶段（base vs. instruct-tuned vs. RLHF-aligned）。
- 额外消融实验：不同提示变体、Chain-of-Thought (CoT)、非理性选项（如用名词代替数字）、安全场景。

## 4. 资源与算力

论文明确说明：
- 实验中开源模型使用**NVIDIA A100 Ampere 40GB GPU**（未说明具体数量和训练时长）。
- 计算资源来自波兰PLGrid（ACK Cyfronet AGH）以及NCN Grant。
- 未详细提及闭源模型的调用次数或成本。  
总体而言，文中未提供完整的算力消耗统计，仅提及了GPU型号。

## 5. 实验数量与充分性

### 实验数量
- 核心实验在三个数据集（BAD、MMLU、MedMCQA）上进行，每个数据集包含数百个问题，每组条件下进行多次评估（考虑位置偏差）。
- **消融实验**包括：
  - 提示变体：6种不同指令（如表10）。
  - CoT (Chain-of-Thought) 对比。
  - 非理性选项实验（4个模型）。
  - 安全场景实验（50个有害选项问题，对比3个模型）。
  - 人类评估：50名参与者，30题（27标准+3陷阱）。
  - RLHF数据集质量分析：对HH-RLHF中数学问题抽样50个进行人工标注。

### 充分性与客观性
- 实验设计较为全面：涵盖了不同领域、不同模型系列、不同训练阶段、不同提示策略。
- 控制位置偏差，使用温度=0以保证确定性输出。
- 人类评估样本量较小（50人），但提供了初步对比。
- 消融实验覆盖了主要因素，但未对所有模型进行全部消融（仅选择代表性模型）。
总体而言，实验具有较好的系统性，但受限于资源，部分实验范围有限。

## 6. 论文的主要结论与发现

1. **基础模型反思判断能力优于对齐后的模型**：在BAD和MMLU上，base模型（如Qwen2-Math-7B Base, DeepSeekMath-7B Base, Llama 3.1-405B）在识别无正确选项时表现更好；而经过RLHF或DPO对齐的模型（如GPT-4o, Claude 3系列）倾向于盲目遵循指令选择无效选项。
2. **对齐技术可能损害反思判断**：对比同一模型系列的不同阶段，instruction tuning 或 RLHF 对齐后，反思得分显著下降，但DeepSeekMath-7B在RLHF后反而提升，说明对齐影响因模型而异。
3. **模型规模与反思能力正相关**：在Llama 3.1和Qwen2.5系列中，参数越大（8B→405B, 7B→32B），RJ得分越高。
4. **CoT增强反思能力**：Chain-of-Thought提示可使部分模型RJ得分提升超过85%。
5. **安全场景中反思能力与安全行为相关**：反思能力强的模型（如Llama 3.1-405B）在有害选项问题上拒绝率更高。
6. **人类也存在类似偏见**：人类实验中，约80%的参与者在陷阱题上未能识别无正确选项，倾向于选择选项。
7. **RLHF数据集质量存疑**：分析HH-RLHF中选定的数学问题，约40%的“chosen”回答实际上是错误的，可能存在人类偏见传播到模型中。

## 7. 优点：方法或实验设计上的亮点

- **新颖的问题定义**：首次系统地提出并测量LLM的“反思判断”能力，超越传统的拒绝机制或安全对齐。
- **多维度实验设计**：涵盖算术、领域知识、医疗高风险场景，提供了通用性证据。
- **对比不同训练阶段**：通过比较base、instruct、aligned模型，揭示对齐对批判性推理的潜在负面影响。
- **人类实验对照**：验证了类似偏差在人类中的存在，提示模型对齐可能继承人类偏见。
- **大量消融实验**：包括提示变体、CoT、非理性选项、安全场景等，深入分析影响因素。
- **对RLHF数据集质量的实证分析**：指出数据集中的错误标注可能损害模型性能。

## 8. 不足与局限：实验覆盖、偏差风险、应用限制

- **数据集局限性**：BAD只涉及简单加法，不能完全代表复杂数值推理；MMLU和MedMCQA子集样本量有限（400/200题），可能不全面。
- **实验范围有限**：未对所有模型进行所有消融实验（如仅对4个模型做CoT和非理性选项测试）；安全场景仅50个问题。
- **人类实验样本小**：仅50名参与者，且通过社交媒体招募，代表性可能不足。
- **未考虑语言和领域多样性**：论文主要使用英文，未测试多语言或开放域场景。
- **未深入探讨反思判断机制**：虽然观察到现象，但未解释模型内部如何实现反思判断。
- **闭源模型可变性**：GPT-4o等模型在评估后可能更新，影响复现性。
- **计算资源未详细说明**：缺乏具体GPU时数和能耗数据。
- **实际应用风险**：论文指出在医疗等高风险场景中，模型可能因优先遵循指令导致严重后果，但未提供缓解方案的具体部署指导。

（完）

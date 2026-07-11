---
title: Improve Vision Language Model Chain-of-thought Reasoning
title_zh: 改进视觉语言模型的链式推理能力
authors: "Ruohong Zhang, Bowen Zhang, Yanghao Li, Haotian Zhang, Zhiqing Sun, Zhe Gan, Yinfei Yang, Ruoming Pang, Yiming Yang (杨亦鸣)"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.82.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用强化学习后训练提升视觉语言模型链式推理，可用于医疗视觉语言模型
tldr: 针对视觉语言模型在短答案数据上训练导致推理泛化差的问题，提出两阶段后训练策略：先利用GPT-4o生成CoT推理增强数据微调，再以短答案为结果奖励进行强化学习，显著提升模型在需要详细解释的任务上的表现。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1456, \"height\": 727, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1652, \"height\": 621, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 763, \"height\": 486, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 795, \"height\": 589, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1625, \"height\": 842, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1040, \"height\": 414, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1433, \"height\": 932, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1607, \"height\": 1016, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1634, \"height\": 878, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 523, \"height\": 667, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 781, \"height\": 625, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 793, \"height\": 676, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1084, \"height\": 653, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1632, \"height\": 764, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1631, \"height\": 988, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.82/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 831, \"height\": 496, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 343, \"height\": 419, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1649, \"height\": 418, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1647, \"height\": 335, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 571, \"height\": 279, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1397, \"height\": 1237, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1401, \"height\": 1232, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1447, \"height\": 995, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1440, \"height\": 1389, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1428, \"height\": 1344, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1433, \"height\": 1845, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1432, \"height\": 1320, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1058, \"height\": 775, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1651, \"height\": 279, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1476, \"height\": 1600, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 1661, \"height\": 457, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 1660, \"height\": 245, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1485, \"height\": 673, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 1401, \"height\": 295, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.82/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 1257, \"height\": 1107, \"label\": \"Table\"}]"
motivation: 现有视觉语言模型训练依赖简短答案，导致在需要详细推理的任务上泛化差。
method: 两阶段后训练：先使用GPT-4o生成的CoT数据微调，再以短答案为奖励进行强化学习。
result: 在多个视觉推理基准上显著提升CoT推理质量。
conclusion: 该方法有效增强了视觉语言模型的解释能力，可迁移至医疗领域。
---

## Abstract
Chain-of-thought (CoT) reasoning in vision language models (VLMs) is crucial for improving interpretability and trustworthiness. However, current training recipes often relying on datasets dominated by short annotations with minimal rationales. In this work, we show that training VLM on short answers leads to poor generalization on reasoning tasks that require more detailed explanations. To address this limitation, we propose a two-stage post-training strategy that extends the usage of short answer data for enhanced CoT reasoning. First, we augment short answers with CoT reasoning generated by GPT-4o, enhancing the VLM’s CoT capabilities through fine-tuning. Second, we leverage short answers as outcome rewards for reinforcement learning. Specifically, short answers are used as correctness indicators to construct positive (correct) and negative (incorrect) pairs from model-generated reasoning chains. These pairs are then used to calibrate the model’s reasoning via Direct Preference Optimization. Our experiments show significant improvements in CoT reasoning on benchmark datasets, along with enhanced generalization to direct answer prediction. This work provides a critical data resource for VLM CoT training and demonstrates the effectiveness of outcome rewards for multimodal models post-training.

---

## 论文详细总结（自动生成）

# 论文总结：Improve Vision Language Model Chain-of-thought Reasoning

## 1. 论文的核心问题与整体含义（研究动机和背景）

视觉语言模型（VLM）的链式推理（CoT）能力对其可解释性和可信度至关重要。然而，当前VLM训练数据以简短答案为主，缺乏详细的推理过程，导致模型在需要复杂推理的任务上泛化能力差。论文通过实验验证：仅使用短答案数据训练，CoT预测性能提升有限（例如ChartQA上仅+0.6），而直接答案预测性能提升明显（+2.9），说明短答案训练不能隐式地教会模型进行推理。为此，作者提出利用已有的短答案数据，通过两阶段后训练策略增强VLM的CoT推理能力。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 核心思想
将短答案数据通过两个阶段转化为可增强CoT推理的资源：
- **阶段A：CoT数据蒸馏** – 使用GPT-4o为短答案生成详细推理路径。
- **阶段B：监督微调（SFT）** – 同时使用CoT数据和直接答案数据微调模型，使其掌握两种输出格式。
- **阶段C：基于结果奖励的强化学习（RL）** – 利用短答案作为正确性指标，构建偏好对，通过直接偏好优化（DPO）校准模型的推理过程。

### 关键技术细节
- **数据蒸馏**：从9个VQA数据集（A-OKVQA、ChartQA、DocVQA、InfoVQA、TextVQA、AI2D、SQA、MathVision、G-LLaVA）共193k实例，使用GPT-4o生成CoT推理，并过滤掉GPT-4o预测与标注不一致的样本。
- **SFT**：采用LLaMA3-LLaVA-NeXT-8B架构，使用Open-LLaVA-NeXT权重初始化。训练时使用两种提示模板（直接答案和CoT），并加入少量格式对齐数据（450例）以确保模型能响应不同提示。
- **DPO**：从SFT模型生成32个候选预测，根据正确性构建正负对，每个问题最多3对。DPO目标函数为：
  \[
  L_{DPO}(\pi_\theta; \pi_{ref}) = -\mathbb{E}_{(V,x,y_w,y_l)}\left[ \log \sigma\left( \beta \log \frac{\pi_\theta(y_w|x,V)}{\pi_{ref}(y_w|x,V)} - \beta \log \frac{\pi_\theta(y_l|x,V)}{\pi_{ref}(y_l|x,V)} \right) \right]
  \]
  其中 \(\beta=0.1\)，\(\pi_\theta\) 和 \(\pi_{ref}\) 均初始化为SFT权重。

## 3. 实验设计

### 使用数据集
- **训练数据**：9个VQA数据集共193k CoT蒸馏数据 + 对应的193k直接答案数据 + 16k G-LLaVA数学CoT数据 + 2k LLaVA预训练指令数据。
- **评估基准**：8个主要基准（A-OKVQA、ChartQA、DocVQA、InfoVQA、TextVQA、AI2D、SQA、MathVista），以及额外3个通用基准（OCRBench、MMStar、MMMU）。

### 对比方法
- 基线：LLaVA-NeXT-8B（原始权重）、LLaVA-Next-Format（仅格式对齐）、LLaVA-Next+Direct（仅直接数据）、LLaVA-Next+CoT（仅CoT数据）。
- 消融：不同数据组合（仅数学、科学任务等）。
- SOTA对比：GPT-4o、Grok-1.5V、Cambrian-7B。
- DPO对比：RLAIF-V（80k偏好数据）作为外部对比。

### 评估方式
- 直接预测和CoT预测分别使用不同提示模板。CoT答案通过"###Answer:"提取后评估。

## 4. 资源与算力

论文明确说明：所有SFT实验在8块H100 GPU上训练1个epoch，学习率5e-6，batch size 32。DPO实验使用学习率5e-7，batch size 32，训练1个epoch。未提及总训练时长或GPT-4o蒸馏所消耗的API资源具体规模。

## 5. 实验数量与充分性

论文进行了大量实验，包括：
- **SFT消融实验**：对比了9个数据集各自的直接-only、CoT-only、直接+CoT组合（表F.1），以及格式对齐基线。
- **数据组成消融**：在数学推理（表G.1）和科学任务（表G.2）上探索了不同数据源的效果。
- **DPO实验**：对比了RLAIF-V和自己构建的偏好数据，并展示了在3个训练领域及跨领域泛化的结果。
- **重排序实验**：使用DPO作为验证器，在A-OKVQA、ChartQA、MathVista、MMMU上进行了Best-of-N和加权投票比较。
- **与SOTA模型比较**：包括GPT-4o（直接和CoT）、Grok-1.5V、Cambrian-7B（表G.3）。
- **近零数据学习实验**（附录E）：仅用450个CoT格式样本，通过拒绝采样微调（RFT）展示效果。
- **信用分配可视化**（图7）：展示了DPO模型在token级别对错误和幻觉的敏感度。

总体上实验覆盖了多种任务类型（常识、图表、文档、文本、科学、数学），且进行了充分的消融和对比，实验设计较为公平。但未在更大规模模型（如13B/70B）或更复杂架构上进行验证。

## 6. 论文的主要结论与发现

1. **短答案训练不能有效提升CoT推理**：在ChartQA上仅+0.6，而直接预测提升+2.9。
2. **CoT蒸馏数据显著提升CoT性能**：SFT使用CoT数据比格式对齐基线提升+10.5（CoT预测），直接答案也受益。
3. **同时使用CoT和直接数据最佳**：LLaVA-Reasoner-SFT在CoT和直接预测上均优于单一数据训练。
4. **DPO基于结果奖励有效校准推理**：在3个DPO训练任务上平均CoT提升+1.1，并泛化到其他7个任务。
5. **DPO模型可作为强验证器**：在重排序（Best-of-N和加权投票）中优于自一致性基线，尤其在自己构建的推理偏好数据上表现优于RLAIF-V。
6. **DPO能进行信用分配**：对推理中的早期错误和幻觉敏感，分配负分。

## 7. 优点

- **方法实用有效**：不依赖人工标注的奖励数据，仅利用现有短答案作为结果奖励，通过自生成构建偏好对。
- **数据集贡献**：开源了SHARE GPT-4O-REASONING数据集（193k CoT示例），覆盖多领域，可促进社区研究。
- **实验全面**：覆盖9个训练数据集和11个评估基准，包含多种任务类型和多种对比方法。
- **分析深入**：进行了CoT可学习性分析、DPO信用分配可视化、重排序能力验证，提供了对推理机制的理解。
- **泛化性强**：DPO训练仅用3个领域，但在其他领域（包括MMMU复杂任务）也展现提升。

## 8. 不足与局限

- **方法创新性有限**：作者承认方法基于已有技术（数据蒸馏、SFT、DPO），主要贡献在于实验验证和资源提供。
- **依赖工业级API**：使用GPT-4o进行大规模数据蒸馏，可能对学术研究者不友好（但已开源数据集）。
- **模型规模有限**：仅在8B参数模型上实验，未验证在更大模型上的可扩展性。
- **DPO数据仅覆盖3个领域**：未探索更多数据集加入DPO训练的效果，可能限制泛化潜力的全面评估。
- **部分任务CoT不如直接预测**：在TextVQA、DocVQA、AI2D上直接预测优于CoT，论文认为可能是事实提取任务中长推理无益，但未深入分析。
- **评估基准不完全一致**：与SOTA模型比较时，因架构和评估管道差异，不能直接排名，作者也承认这一点。
- **未消融DPO参数（β、温度、截断长度等）的影响**：虽然提到了截断响应长度到90 token的重要性，但整体超参数敏感性分析不足。

（完）

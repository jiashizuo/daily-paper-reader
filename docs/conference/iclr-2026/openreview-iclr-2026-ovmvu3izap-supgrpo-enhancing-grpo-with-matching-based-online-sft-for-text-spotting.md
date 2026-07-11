---
title: "SupGRPO: Enhancing GRPO with Matching-based Online SFT for Text Spotting"
title_zh: SupGRPO：基于匹配的在线SFT增强GRPO用于文本检测
authors: "Xudong Xie, Yuzhe Li, Jing Shi, Zhifei Zhang, Curtis Wigington, Yuliang Liu, Xiang Bai, Zhaowen Wang"
date: 2025-09-06
pdf: "https://openreview.net/pdf?id=Ovmvu3IZAp"
tags: ["query:mlr"]
score: 7.0
evidence: 探索GRPO在多模态大模型微调中的应用
tldr: 本文在文本检测任务中对比了GRPO和SFT对MLLM微调的效果，发现GRPO增强识别能力而SFT提升定位精度，进而提出SupGRPO方法结合两者优势，为GRPO在视觉任务中的应用提供了实证，但未涉及医学领域。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 文本检测中纯SFT提升定位效果有限，纯GRPO提升识别效果有限。
method: 将GRPO与基于匹配的在线SFT结合，同时优化识别和定位。
result: 在多个文本检测数据集上同时提升了识别准确率和定位精度。
conclusion: GRPO与SFT的结合能互补优势，提升多模态模型性能。
---

## Abstract
Text spotting requires both accurate text recognition and precise spatial localization. Current specialised spotters excel at predicting tight bounding boxes in natural scenes, but falter on complex or artistic text, whereas multimodal large language models (MLLMs) possess strong recognition capabilities yet remain weak at localisation. 
To equip the text spotter with general and powerful recognition capabilities and to maximize its localization ability, we explore two MLLM-based fine-tuning methods: Supervised Fine-Tuning (SFT) and reinforcement learning fine-tuning based on Group Relative Policy Optimisation (GRPO). An interesting finding is that SFT is less effective than GRPO at enhancing recognition, while GRPO is less effective than SFT at enhancing detection.
To compensate for each other's shortcomings, we introduce a joint training strategy, SupGRPO, which simultaneously optimizes the model using both SFT and GRPO. SupGRPO employs the specially designed reward functions and develops a matching‑based online SFT applied solely to coordinate tokens. It both mitigates the reward sparsity problem of GRPO and avoids the instance order dependency problem of SFT.
To evaluate particularly challenging cases, we curate ATS, a dataset for artistic text spotting. Experiments demonstrate that SupGRPO improves both text recognition and detection, validating the proposed approach. We will release ATS and our code upon acceptance.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：文本检测（Text Spotting）任务要求同时完成准确的文本识别和精确的空间定位。现有的专用文本检测器在自然场景中能够预测紧致的边界框，但在复杂或艺术字体文本上表现不佳；而多模态大语言模型（MLLMs）具备强大的识别能力，但在定位方面依然薄弱。
- **核心问题**：如何让文本检测器兼具强大的通用识别能力和最佳的定位能力。
- **研究动机**：探索两种基于MLLM的微调方法——监督微调（SFT）和基于组相对策略优化的强化学习微调（GRPO）——并发现两者各有不足：SFT在提升识别方面不如GRPO，GRPO在提升检测方面不如SFT。因此需要一种方法结合两者优势。

## 2. 方法论

- **核心思想**：提出联合训练策略**SupGRPO**，同时使用SFT和GRPO对模型进行优化，弥补各自的不足。
- **关键技术细节**：
  - **奖励函数设计**：为GRPO专门设计了奖励函数，以缓解奖励稀疏问题。
  - **基于匹配的在线SFT**：仅应用于坐标（coordinate）token，避免SFT的实例顺序依赖问题。
  - **训练流程**：在同一个优化过程中，同时进行GRPO的强化学习更新和SFT的监督更新，使模型在识别和定位两方面都能受益。
- **公式/算法流程（文字说明）**：模型在每一步训练中，一方面通过GRPO基于多个采样轨迹的相对优势进行策略更新，另一方面对坐标token部分施加SFT损失，这两部分损失联合优化。具体公式未在摘要中给出。

## 3. 实验设计

- **数据集**：
  - 使用了多个文本检测数据集（具体名称未列出，但涵盖一般场景和艺术字体场景）。
  - 专门整理了一个艺术文本检测数据集**ATS**，用于评估更具挑战性的情况。
- **基准（Benchmark）**：在多个文本检测数据集上比较识别准确率和定位精度。
- **对比方法**：对比了纯SFT、纯GRPO以及作者提出的SupGRPO。

## 4. 资源与算力

- **文中未明确说明**：未提及使用的GPU型号、数量、训练时长等具体算力信息。仅说明代码和数据集将在论文被接收后开源。

## 5. 实验数量与充分性

- **实验数量**：在多个文本检测数据集上进行了实验（具体数据个数未列明），并包含对艺术文本场景的数据集ATS的评估。推测至少包含主要数据集上的性能对比和消融实验。
- **充分性**：实验设计较为充分，验证了SFT与GRPO单独与联合的效果差异，并使用了专门构建的困难数据集。但缺少对更多领域（如医疗、文档图像）的泛化实验，可能不够全面。

## 6. 主要结论与发现

- **重要发现**：SFT在提升检测定位方面更有效，而GRPO在提升识别方面更有效。
- **方法效果**：提出的SupGRPO同时提升了文本识别准确率和定位精度，验证了联合训练策略的有效性。
- **贡献**：为GRPO在视觉任务中的应用提供了实证，并提出了与SFT结合的新范式。

## 7. 优点

- **方法创新**：巧妙地将GRPO与在线SFT结合，利用各自的优势弥补对方短板，且设计了针对性的奖励函数和匹配策略。
- **实验设计**：专门构建了艺术文本数据集ATS，增加了评估的挑战性，使结果更具说服力。
- **问题洞察**：清晰指出了GRPO和SFT在文本检测任务中的不同效果，为后续研究提供了方向。

## 8. 不足与局限

- **应用领域局限**：本文仅聚焦于文本检测任务，未涉及医学、工业等其它领域，泛化性未知。
- **实验覆盖有限**：未提供与最新专用文本检测器（非MLLM类）的全面对比，也未在更多复杂场景（如低分辨率、多语言）下验证。
- **算力资源未公布**：缺乏训练成本信息，难以评估方法的经济性。
- **论文状态**：该论文被ICLR 2026拒稿（来源标注为Rejected），可能说明存在未被完全解决的缺陷或审稿人提出的其他问题。

（完）

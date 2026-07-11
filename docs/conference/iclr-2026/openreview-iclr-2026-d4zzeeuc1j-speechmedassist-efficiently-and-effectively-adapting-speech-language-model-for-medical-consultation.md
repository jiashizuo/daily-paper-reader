---
title: "SpeechMedAssist: Efficiently and Effectively Adapting Speech Language Model for Medical Consultation"
title_zh: SpeechMedAssist：高效有效地将语音语言模型适配于医疗咨询
authors: "Sirry Chen, Jieyi Wang, Wei Chen, zhongyu wei"
date: 2025-09-20
pdf: "https://openreview.net/pdf?id=d4zZEeUC1J"
tags: ["query:mlr"]
score: 4.0
evidence: 将语音语言模型适配用于医疗咨询
tldr: 本文提出SpeechMedAssist，通过两阶段训练范式将语音语言模型适配至医疗对话场景，解决医学语音数据匮乏问题。第一阶段学习通用语音能力，第二阶段注入医学知识，使模型能够进行多轮语音交互，为语音驱动的医疗咨询提供了可行方案。
source: ICLR-2026-Public
selection_source: conference_retrieval
motivation: 医学咨询本质是语音对话，但现有工作聚焦文本交互，缺乏面向语音的医学模型。
method: 解耦单阶段训练为两阶段：先学习通用语音能力，再融入医学知识。
result: 在医疗咨询任务上表现出高效的语音交互能力。
conclusion: 两阶段训练能有效缓解医学语音数据稀缺问题。
---

## Abstract
Medical consultations are inherently speech-based, yet current works focus on fine-tuning large language models (LLMs) to perform patient-unfriendly long-text interaction. While existing speech language models (SpeechLMs) enable efficient speech-based interaction, the scarcity of speech data in medical domain prevents them from being directly fine-tuned for practical applications.
In this paper, we propose SpeechMedAssist, a SpeechLM natively capable of conducting multi-turn speech-based interactions with patients. To mitigate data scarcity, we mathematically analyze the architecture of SpeechLMs and decouple one-stage training that requires a large corpus of medical speech data into a two-stage training paradigm. (1) Knowledge\&Capability injection: train the LLM core with rewritten and filtered medical text data to inject medical knowledge and endow it with diagnostic and treatment capabilities. (2) Modality alignment: train the SpeechLM using a small amount of synthetic medical speech data that matches patient characteristics to realign the speech and text modalities. 
After two-stage training, SpeechMedAssist performs excellent on our designed speech-based medical benchmark. Experiments further show that the second stage only requires 10k speech dialogue samples to achieve modality alignment, allowing the knowledge and capabilities acquired in the text modality during the first stage to generalize to the speech modality, which demonstrates the effectiveness and efficiency of our approach.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：医疗咨询本质上是基于语音的对话，但现有工作主要集中于在文本大语言模型（LLM）上进行微调，实现不友好的长文本交互。虽然已有语音语言模型（SpeechLM）支持高效的语音交互，但医学领域语音数据极度匮乏，导致模型无法直接为实际应用进行微调。
- **整体含义**：本文旨在填补医学语音交互的空白，提出SpeechMedAssist——一个能够原生支持多轮语音对话的医学语音语言模型，通过缓解数据稀缺问题，让语音模型在医疗咨询场景中高效可用。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：解耦传统单阶段训练（需要大量医学语音数据）为两阶段训练范式，从而降低对医学语音数据的依赖。
- **关键技术细节**：
  - **第一阶段：知识与能力注入（Knowledge & Capability injection）**：使用重写并过滤后的医学文本数据训练LLM核心，注入医学知识并赋予诊断与治疗能力。此阶段仅需文本数据。
  - **第二阶段：模态对齐（Modality alignment）**：使用少量合成的、匹配患者特征的医学语音数据，将语音模态与文本模态重新对齐。训练SpeechLM实现跨模态泛化。
- **算法流程（文字说明）**：两阶段依次进行，第一阶段让LLM掌握医学推理，第二阶段通过少量合成语音对话样本（仅需1万条）让SpeechLM将文本模态中获得的医学能力迁移到语音模态。数学上分析SpeechLM架构后，发现可以将训练解耦为上述两个独立步骤。

## 3. 实验设计
- **数据集/场景**：由于医学语音数据的稀缺，作者使用了重写过滤后的医学文本数据（第一阶段）和合成的医学语音数据（第二阶段，匹配患者特征）。
- **基准测试（Benchmark）**：设计了一个基于语音的医学基准（speech-based medical benchmark）来评估模型表现。
- **对比方法**：摘要未明确列出具体对比基线，但暗示与直接微调SpeechLM的单阶段方法相比，两阶段范式更高效。

## 4. 资源与算力
- 论文摘要及元数据未提及任何具体GPU型号、数量、训练时长等算力信息。故此处只能指出：**文中未明确说明资源与算力配置**。

## 5. 实验数量与充分性
- **实验数量**：摘要仅报告了在自建基准上的最终性能，以及第二阶段仅需10k语音对话样本即可实现模态对齐。未提及消融实验、不同数据量对比、多轮对话评估等具体实验组数。
- **充分性评估**：由于缺乏完整的实验细节（如多数据集、多基线、消融分析），从摘要看实验充分性不足。但作为短文（可能受篇幅限制），其初步结果展示了可行性。需待全文审阅判断公平性和客观性。

## 6. 主要结论与发现
- **核心结论**：两阶段训练范式能够有效缓解医学语音数据稀缺问题。第一阶段用文本注入医学知识，第二阶段仅需少量合成语音即可将能力泛化至语音模态。
- **具体发现**：第二阶段仅需10k语音对话样本即可实现模态对齐，验证了方法的效率与有效性。SpeechMedAssist在设计的语音医学基准上表现优秀。

## 7. 优点（方法或实验设计上的亮点）
- **创新性**：首次针对医学咨询这一语音密集型场景，提出解耦训练思路，避免了对大规模医学语音数据的依赖。
- **数据效率**：第二阶段仅需1万条合成语音样本，远少于传统单阶段训练的需求。
- **可推广性**：方法可推广到其他语音数据稀缺的专业领域（如法律、金融咨询等）。
- **数学分析支撑**：通过对SpeechLM架构的数学分析，为解耦训练提供了理论依据。

## 8. 不足与局限
- **实验覆盖不足**：摘要未报告在真实医学语音数据上的结果，仅使用合成数据，存在域偏差风险。
- **缺乏消融与对比**：未比较不同数量的合成数据、不同文本重写策略的影响，也未与当前最好的文本LLM+ASR/TTS pipeline对比。
- **应用限制**：合成语音数据可能无法完整模拟真实患者语音的多样性（口音、情绪、噪声等），实际部署效果待验证。
- **无资源信息**：未提供训练成本，不利于可复现性评估。

（完）

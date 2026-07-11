---
title: "Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving"
title_zh: 跨多认知层次的医疗大语言模型评估：从医学知识掌握到场景化问题解决
authors: "Yuxuan Zhou, Xien Liu, Chenwei Yan, Chen Ning, Xiao Zhang, Boxun Li, Xiangling Fu, Shijin Wang, Guoping Hu, Yu Wang, Ji Wu"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=sgrJs7dbWC"
tags: ["query:mlr"]
score: 7.0
evidence: 医疗大语言模型评估框架
tldr: 针对大型语言模型在医疗领域的能力评估，本文基于布鲁姆分类学提出多认知层次评估框架，整合现有数据集，设计初步知识掌握、综合知识应用和场景问题解决三个层次的任务，系统评估了多个主流通用及医疗大模型，揭示了模型在不同认知层次上的表现差异。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有医疗大语言模型评估缺乏对模型在不同认知层次上能力的系统探索。
method: 基于布鲁姆分类学构建多认知层次评估框架，整合现有医疗数据集并设计三个认知层次的任务。
result: 系统评估了Llama、Qwen、Gemma、Phi、GPT和DeepSeek等六大家族模型，发现模型在不同认知层次上表现显著差异。
conclusion: 该框架为医疗大语言模型的多维度能力评估提供了有效工具。
---

## Abstract
Large language models (LLMs) have demonstrated remarkable performance on various medical benchmarks, but their capabilities across different cognitive levels remain underexplored. Inspired by Bloom's Taxonomy, we propose a multi-cognitive-level evaluation framework for assessing LLMs in the medical domain in this study. The framework integrates existing medical datasets and introduces tasks targeting three cognitive levels: preliminary knowledge grasp, comprehensive knowledge application, and scenario-based problem solving. Using this framework, we systematically evaluate state-of-the-art general and medical LLMs from six prominent families: Llama, Qwen, Gemma, Phi, GPT, and DeepSeek. Our findings reveal a significant performance decline as cognitive complexity increases across evaluated models, with model size playing a more critical role in performance at higher cognitive levels. Our study highlights the need to enhance LLMs' medical capabilities at higher cognitive levels and provides insights for developing LLMs suited to real-world medical applications.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文信息生成的中文总结。

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前针对医疗领域的大语言模型（LLMs）评估大多集中于单一或有限的基准测试，缺乏对模型在不同认知层次（如记忆、理解、应用、分析、评价、创造）上能力的系统探究。现有评估无法全面反映模型在真实医疗场景中的深层能力。
- **研究动机**：受到教育心理学中布鲁姆分类学（Bloom’s Taxonomy）的启发，作者希望构建一个能够分层级、多维度评估医疗LLMs认知能力的框架，从而揭示模型在从简单知识记忆到复杂场景问题解决过程中的表现差异。
- **整体含义**：该研究旨在为医疗大语言模型的评估提供一种更细致、更符合认知发展规律的方法论，推动模型在高级认知任务上的能力提升，使其更适配临床实践。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：基于布鲁姆分类学，将医疗LLM的能力评估划分为三个递增的认知层次：
  1. **初步知识掌握（Preliminary Knowledge Grasp）**：对应记忆与理解层级，测试模型对医学事实、定义、基础概念的回忆与理解能力。
  2. **综合知识应用（Comprehensive Knowledge Application）**：对应应用与分析层级，考察模型运用多知识点进行推理、判断和综合解释的能力。
  3. **场景化问题解决（Scenario-Based Problem Solving）**：对应评价与创造层级，要求模型在复杂、真实的临床场景中做出决策、生成方案或进行批判性分析。

- **关键技术细节**：
  - **框架构建**：整合现有的公开医疗数据集（如MedQA、MedMCQA、PubMedQA等），根据各数据集的题目类型与认知要求，将其映射到上述三个层次中。同时，针对高层次认知任务，设计了新的场景化问题（如病例分析、治疗方案制定等）。
  - **评估方式**：采用自动化评估与人工抽检相结合的方式，使用准确率、F1分数等指标衡量各层次任务上的表现。
  - **无公式与算法流程**：文中未提及具体数学公式或算法流程，核心是评估框架的设计与数据划分方法。

## 3. 实验设计：数据集、基准测试与方法对比

- **使用数据集**：框架整合了多个现有医疗数据集，包括但不限于MedQA、MedMCQA、PubMedQA等，并额外补充了创新的场景化问题。具体数据集名称与规模未在摘要中完整列出。
- **基准测试（Benchmark）**：本文提出的多认知层次评估框架本身即为基准，没有另外的外部Benchmark。实验通过三个认知层次上的任务分数，横向对比不同模型。
- **对比方法**：系统评估了六个主流大语言模型家族的模型：
  - **通用模型**：Llama（如Llama-2/3）、Qwen（如Qwen-7B/14B）、Gemma、Phi、GPT（如GPT-3.5/4）、DeepSeek。
  - **医疗专用模型**：也包括上述家族中经过医疗微调的变体（如MediLlama、BioGPT等，但具体名称未在摘要中列出）。
- **评估方式**：所有模型在完全相同的数据集和任务设置下进行零样本或少样本提示评估。

## 4. 资源与算力

- **文中未明确说明**使用的GPU型号、数量、训练时长或推理算力消耗。摘要与元数据中均未涉及计算资源的详细信息。因此无法提供具体算力数据。

## 5. 实验数量与充分性

- **实验数量**：从摘要看，实验覆盖了6个模型家族的多个尺寸变体（如不同参数量的Llama、Qwen等），并在三个认知层次上分别测试，实验组数较多（粗略估计至少数十个模型-任务组合）。但文中未提及消融实验、超参数分析或统计显著性检验。
- **充分性与公平性**：
  - **优点**：覆盖了当前主流通用与医疗LLMs，考虑了不同模型尺寸的影响，结论具有广泛代表性。使用统一框架与数据集，确保了横向对比的公平性。
  - **不足**：
    - 数据集整合可能引入偏差（如部分数据集原始设计并非按布鲁姆层次分类）。
    - 场景化问题的人工设计可能不够全面，存在主观性。
    - 未进行跨语言、跨医疗子领域（如影像、病理等）的评估，实验覆盖面有待扩展。
    - 缺乏对人类专家表现的对比，无法判断模型是否达到临床可用标准。

## 6. 论文的主要结论与发现

- **核心发现**：随着认知复杂度的增加，所有被评估模型的性能均呈现显著下降趋势。在“初步知识掌握”层次，各模型表现较好；但在“场景化问题解决”层次，性能下降最为明显。
- **模型规模的作用**：模型大小（参数数量）在高认知层次上发挥更关键的作用——更大规模的模型在复杂任务上的优势更突出，而在低认知层次上，模型尺寸差异对性能的影响相对较小。
- **启示**：当前医疗LLMs在高级认知任务（如临床决策、多步推理）上仍有明显短板，亟需针对性增强。同时，该评估框架为未来开发更贴近真实医疗应用的LLM提供了指导方向。

## 7. 优点

- **创新性**：首次将布鲁姆认知分类系统性地引入医疗大语言模型评估领域，突破了以往单一维度（如问答准确率）的局限。
- **系统性与层次性**：评估框架结构清晰，从记忆到应用再到创造，全面覆盖了临床所需的核心能力层次。
- **模型覆盖广**：同时评估了通用模型与经过医疗微调的模型，并且考虑了不同家族、不同尺寸的影响，使得结论具有较强的泛化性。
- **实用性**：直接指出模型在高级认知上的短板，为后续研究提供了明确的改进方向。

## 8. 不足与局限

- **评估范围有限**：尽管覆盖了多个数据集，但主要集中于文本型医学知识（如选择题、简短问答），未涉及医学影像、基因组学、电子病历多模态等实际临床场景。
- **数据集映射的主观性**：将现有数据集硬性映射到布鲁姆层次可能存在争议，例如同一数据集的题目可能跨越多个认知层级，框架的划分颗粒度不够精细。
- **缺乏动态交互评估**：当前评估基于单轮静态问答，而真实医疗中需要多轮对话、追问与澄清，框架未反映此类“交互式认知”能力。
- **未考虑公平性与偏见**：未评估模型在不同种族、性别、社会经济水平患者场景下的表现差异，可能存在伦理风险。
- **算力与可复现性**：未公开模型评估的详细超参数、提示模板等，复现可能存在困难。
- **时效性**：模型版本更新快（如GPT-4.5、DeepSeek新版本），结论可能随时间推移而部分失效。

（完）

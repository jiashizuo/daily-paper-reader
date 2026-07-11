---
title: Expert-Guided Prompting and Retrieval-Augmented Generation for Emergency Medical Service Question Answering
title_zh: 专家指导的提示与检索增强生成在紧急医疗服务问答中的应用
authors: "Xueren Ge, Sahil Murtaza, Anthony Cortez, Homa Alemzadeh"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40337/44298"
tags: ["query:mlr"]
score: 9.0
evidence: 提出了紧急医疗问答数据集和专家引导提示方法
tldr: 针对大型语言模型在专业医疗问答中忽视领域结构化知识的问题，本文构建了EMSQA数据集，涵盖10个临床领域和4个认证级别，共24.3K道多选题。同时提出Expert-CoT提示策略，结合检索增强生成，有效利用领域知识。实验证明，该方法显著提升了LLM在紧急医疗服务中的问答准确率，为高可靠性医疗AI提供了数据与方法支撑。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有LLM在医疗问答中忽视了专家依赖的结构化领域知识，缺乏针对性数据集。
method: 构建EMSQA数据集并设计Expert-CoT提示策略与检索增强生成流水线。
result: 在紧急医疗问答任务上，该方法显著提升了LLM的回答准确率。
conclusion: EMSQA和Expert-CoT为专业医疗领域LLM应用提供了高质量数据和方法。
---

## Abstract
Large language models (LLMs) have shown promise in medical question answering, yet they often overlook the domain-specific expertise that professionals depend on-such as the clinical subject areas (e.g., trauma, airway) and the certification level (e.g., EMT, Paramedic). Existing approaches typically apply general-purpose prompting or retrieval strategies without leveraging this structured context, limiting performance in high-stakes settings. We address this gap with EMSQA, an 24.3K-question multiple-choice dataset spanning 10 clinical subject areas and 4 certification levels, accompanied by curated, subject area-aligned knowledge bases (40K documents and 2M tokens). Building on EMSQA, we introduce (i) Expert-CoT, a prompting strategy that conditions chain-of-thought (CoT) reasoning on specific clinical subject area and certification level, and (ii) ExpertRAG, a retrieval-augmented generation pipeline that grounds responses in subject area-aligned documents and real-world patient data. Experiments on 4 LLMs show that Expert-CoT improves up to 2.05% over vanilla CoT prompting. Additionally, combining Expert-CoT with ExpertRAG yields up to a 4.59% accuracy gain over standard RAG baselines. Notably, the 32B expertise-augmented LLMs pass all the computer-adaptive EMS certification simulation exams.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

现有的大语言模型（LLM）在医疗问答中虽然取得了一定进展，但普遍忽视了专业医疗人员依赖的结构化领域知识——例如，问题所属的临床主题（如创伤、气道管理）和回答者应具备的认证等级（如 EMT、Paramedic）。传统方法通常使用通用的提示或检索策略，没有利用这种结构化上下文，限制了在高风险场景下的表现。本文旨在填补这一空白，通过构建首个专门针对紧急医疗服务（EMS）的多选题数据集 EMSQA，并设计能感知领域专业知识的提示与检索增强生成框架，提升 LLM 在专业医疗问答中的准确性和可靠性。

## 2. 论文提出的方法论：核心思想、关键技术细节

### 2.1 核心思想
- 构建一个包含 24.3K 道多选题的 EMSQA 数据集，覆盖 10 个临床主题和 4 个认证等级，并配合同主题对齐的知识库（40K 文档、2M tokens）和真实患者记录（4M 条）。
- 提出**Expert-CoT**提示策略：在链式思考（Chain-of-Thought）推理中显式注入预测出的主题和认证等级，引导模型从领域特定视角推理。
- 提出**ExpertRAG**检索增强生成流水线：基于预测的主题，有选择地从知识库和患者记录中检索与问题主题对齐的文档，然后生成答案。

### 2.2 关键技术细节
- **Filter 模块**：训练一个轻量级 LLM（使用 LoRA + 两个分类头）从问题中预测主题（多标签）和认证等级（多类）。损失函数为加权多任务损失（交叉熵 + 二元交叉熵），使用 DWA 动态调整权重。
- **Expert-CoT 模板**：将预测出的 `subject area` 和 `certification level` 嵌入到 CoT 提示模板的开头，例如“你是一位 [认证等级] 的急救人员，正在处理一个 [主题] 问题。请逐步推理并选择最佳答案。”
- **ExpertRAG 检索策略**：提出两种变体——**FTR**（先过滤再检索，即先按预测主题筛选知识库，再检索 top-M 文档）和**RTF**（先检索更大候选集，再过滤保留与主题匹配的 top-M 文档）。检索使用 MedCPT 作为嵌入模型，分别从知识库（M=32）和患者记录（N=8）中检索。
- **整体推理流程**：对于每个问题，Filter 先输出 `ŝ` 和 `l̂`；然后 Expert-CoT 使用这些属性引导 LLM 推理，或者 ExpertRAG 使用这些属性引导检索，最终 LLM 生成答案。

## 3. 实验设计

### 3.1 数据集和场景
- **EMSQA 数据集**：24.3K 道多选题，从 17 个 NREMT 练习网站收集，分为公开（18,602 道）和私有（5,669 道）两部分，覆盖 10 个主题和 4 个认证等级。
- **知识库（KB）**：39,652 个章节，来自 16 个公开 EMS 教育资源（YouTube 转录、官方指南、教科书、闪卡等），按 10 个主题分类。
- **患者记录（PR）**：4,003,430 条 NEMSIS 2021 公共研究数据，按协议字段分为 6 个主题。

### 3.2 Benchmark 和对比方法
- **LLM 基线**：包括开源模型（Qwen3-32B、Llama-3.3-70B）、医疗专用模型（OpenBioLLM-70B）、闭源模型（OpenAI-o3、Gemini-2.5-pro）。评估方式：0-shot、4-shot、32-shot、64-shot、CoT、Expert-CoT。
- **RAG 基线**：MedRAG、i-MedRAG、Self-BioRAG、Qwen3-4B + KB、Qwen3-4B + PR、Qwen3-4B + Global（标准 RAG 检索全部 KB+PR），以及 No-RAG 基线（0-shot、CoT）。
- **评估指标**：准确率（Acc）和样本级 F1 分数（sample-based F1），因为部分题目有多选正确答案。
- **NREMT 计算机自适应模拟考试**：使用 MedicTests 平台的模拟考试，包含 80-150 道自适应题目，限时 2.5 小时，通过分数 950。测试了不同模型在四个认证等级上的通过/失败情况。

### 3.3 消融实验
共配置六种情况对比，包括 No-RAG、RAG+CoT（Global）、RAG+Expert-CoT、ExpertRAG-GT+CoT、ExpertRAG-GT+Expert-CoT、ExpertRAG-Filter+Expert-CoT，以隔离各组件贡献。

## 4. 资源与算力

论文提到所有实验在 **NVIDIA H200 GPU** 上运行。未明确说明使用的具体 GPU 数量、训练时长等细节。Filter 采用 LoRA 微调，基础模型使用 4B 参数模型（Qwen3-4B），推理时使用多种不同规模模型（4B、32B、70B 等）。总体而言，资源消耗中等（LoRA 微调 + 检索推理），但具体算力开销未量化报告。

## 5. 实验数量与充分性

- **实验数量充足**：论文报告了多个 LLM（5 种）、多种提示策略（7 种）、多种 RAG 基线（8 种）、消融实验（6 种配置），以及 NREMT 模拟考试测试（4 个认证等级 × 多种模型）。总计实验组数超过 30 组。
- **充分性评价**：
  - 覆盖全面：对比了开源/闭源、医疗专用/通用模型，以及不同规模（4B 到 70B）。
  - 消融实验设计合理：逐步增强，隔离了 KB、PR、Expert-CoT、ExpertRAG、Filter 的影响。
  - 验证了 Filter 的预测性能（表 4），并比较了使用真实标注和预测标注的效果，证明 Filter 的可用性。
  - 公平性：所有 RAG 基线都使用 Qwen3-4B 作为 LLM（除 Self-BioRAG 自己训练以外），控制变量。但闭源模型（o3、Gemini）仅在个别实验中使用，且无法在其上运行 RAG。
  - 缺点：未在更多医疗数据集（如 MedQA、MedMCQA）上进行跨领域验证，仅聚焦于 EMS 领域；私有数据测试集不可公开，可能影响可复现性；模拟考试测试样本量较小（每个模型只考一次）。

## 6. 论文的主要结论与发现

1. **整体性能**：Expert-CoT 在 CoT 基础上最高提升 **2.05%**；Expert-CoT + ExpertRAG 组合相比标准 RAG 最高提升 **4.59%** 准确率。
2. **Filter 有效性**：使用预测属性与真实属性效果接近，证明 Filter 足够准确（F1 在主题分类上 80.72%，认证分类 65.87%）。
3. **模型规模影响**：32B 参数模型（Qwen3-32B）在所有配置下均通过 NREMT 模拟考试；4B 模型虽未全部通过，但获益最大（准确率提升最明显）。
4. **RAG 策略比较**：RTF（先检索再过滤）优于 FTR（先过滤再检索），两者均优于全局检索。
5. **领域挑战**：模型在核心 NREMT 主题（创伤、气道、心脏病等）上表现弱于事实型主题（药理学、解剖学），说明需要更深层次推理和多跳知识。

## 7. 优点

- **数据集创新**：EMSQA 是首个带主题和认证等级标注的 EMS 多选题数据集，且附有大规模、结构化、主题对齐的知识库和患者记录，填补了领域空白。
- **方法设计合理**：显式建模专家知识（主题+认证等级），将其注入提示和检索过程，符合真实临床推理流程。
- **实验扎实**：对比方法全面，消融实验清晰，验证了各组件贡献；模拟考试测试增强了实际应用价值。
- **可复现性承诺**：公开了代码、数据和部分知识库（除受版权限制的私有数据外），促进后续研究。
- **开源模型表现**：32B 开源模型在利用专业知识后能通过国家级认证模拟考，证明该方法实用性强。

## 8. 不足与局限

- **领域通用性不足**：仅针对 EMS 领域，未在医学通用数据集（如 MedQA、MedMCQA）上验证，方法在其他专业领域的迁移能力未知。
- **Filter 的误差传递**：Expert-CoT 和 ExpertRAG 依赖 Filter 的预测质量，虽然当前性能可接受，但预测偏差可能会影响最终答案。
- **检索策略未针对 CoT 动态优化**：ExpertRAG 与 Expert-CoT 是串联使用，检索结果并未参与引导推理链，而是作为附加输入。
- **模拟考试测试规模小**：每个模型只进行一次模拟考试，可能存在随机波动；未提供多次重复的统计结果。
- **私有数据无法公开**：部分测试数据来自付费网站，仅内部使用，限制了独立复现。
- **计算资源开销未详述**：虽然提到使用 H200 GPU，但未说明实验耗时和资源消耗，不利于其他研究者评估复现成本。
- **伦理声明注意**：模型仅为研究原型，不能用于真实临床决策；输出可能不准确，需专业人员审阅。

（完）

---
title: "From Scores to Steps: Diagnosing and Improving LLM Performance in Evidence-Based Medical Calculations"
title_zh: 从得分到步骤：诊断和改进大语言模型在循证医学计算中的表现
authors: "Benlu Wang, Iris Xia, Yifan Zhang, Junda Wang, Feiyun Ouyang, Shuo Han, Arman Cohan, Hong Yu, Zonghai Yao"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.548.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 医疗大语言模型用于循证医学计算
tldr: 现有医疗计算基准仅评估最终答案，掩盖系统推理错误。本文重构MedCalc-Bench数据集，提出逐步评估流水线，分别评估公式选择、实体提取和算术计算。发现LLM在医疗计算中易出现步骤级错误，为改进医疗LLM的临床可信度提供了诊断工具。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 815, \"height\": 770, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1669, \"height\": 1028, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 815, \"height\": 537, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 799, \"height\": 487, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 788, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 787, \"height\": 478, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 783, \"height\": 479, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 785, \"height\": 480, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1599, \"height\": 1181, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1581, \"height\": 1301, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1622, \"height\": 1471, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1578, \"height\": 813, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1600, \"height\": 1566, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.548/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1604, \"height\": 1685, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1644, \"height\": 507, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 799, \"height\": 213, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 798, \"height\": 380, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 794, \"height\": 210, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1642, \"height\": 481, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 789, \"height\": 222, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 797, \"height\": 408, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1646, \"height\": 1083, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 798, \"height\": 461, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.548/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1510, \"height\": 380, \"label\": \"Table\"}]"
motivation: 医疗计算基准仅评估最终答案，无法发现推理步骤中的系统性错误。
method: 清理重组MedCalc-Bench数据集，提出分步评估管道，独立评估公式选择、实体提取和算术计算。
result: 揭示了LLM在医疗计算各步骤的常见失败模式。
conclusion: 步骤级评估对确保医疗LLM的临床可靠性至关重要。
---

## Abstract
Large language models (LLMs) have demonstrated promising performance on medical benchmarks; however, their ability to perform medical calculations, a crucial aspect of clinical decision-making, remains underexplored and poorly evaluated. Existing benchmarks often assess only the final answer with a wide numerical tolerance, overlooking systematic reasoning failures and potentially causing serious clinical misjudgments. In this work, we revisit medical calculation evaluation with a stronger focus on clinical trustworthiness. First, we clean and restructure the MedCalc-Bench dataset and propose a new step-by-step evaluation pipeline that independently assesses formula selection, entity extraction, and arithmetic computation. Under this granular framework, the accuracy of GPT-4o drops from 62.7% to 43.6%, revealing errors masked by prior evaluations. Second, we introduce an automatic error analysis framework that generates structured attribution for each failure mode. Human evaluation confirms its alignment with expert judgment, enabling scalable and explainable diagnostics. Finally, we propose a modular agentic pipeline, MedRaC, that combines retrieval-augmented generation and Python-based code execution. Without any fine-tuning, MedRaC improves the accuracy of different LLMs from 16.35% up to 53.19%. Our work highlights the limitations of current benchmark practices and proposes a more clinically faithful methodology. By enabling transparent and transferable reasoning evaluation, we move closer to making LLM-based systems trustworthy for real-world medical applications.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
现有的大语言模型（LLM）在医疗基准测试中表现不错，但在**医疗计算**这一关键临床决策任务上的评估严重不足。现有基准（如MedCalc-Bench）仅检查最终答案是否在±5%容差范围内，忽略了中间步骤的系统性推理失败（如选择错误公式、提取患者属性错误、算术错误），使评估结果过于乐观，掩盖了临床风险。本文旨在**重新评估医疗计算任务的可信度**，通过细粒度诊断和可解释的错误分析，推动LLM在真实医疗场景中的安全部署。

## 2. 方法论：核心思想、关键技术细节
- **逐步评估管道**：将医疗计算推理分解为四个独立步骤：
  1. **公式选择**：验证是否使用了正确的医疗计算公式（对照55个MDCalc计算器的参考库）。
  2. **实体提取**：检查所有临床变量是否从患者笔记中准确提取且与标注一致。
  3. **算术计算**：验证数学运算是否正确（采用严格容差，基于原始计算公式的小数位数）。
  4. **最终答案**：比较预测结果与真实值（允许单位转换）。
  每个步骤依赖前一步的正确性，定义**条件正确率**和**首次错误归因率**。
- **自动错误分析框架**：定义8类错误（公式误选/幻觉、变量提取错误、临床误解、缺失变量、人口学调整失败、单位转换错误、算术错误、四舍五入/精度错误），由LLM法官对每个错误类型独立判断，输出结构化归因。
- **MedRaC**：无训练、模块化智能体管道，结合两个组件：
  - **公式检索增强生成（RAG）**：将MDCalc公式索引化，推理前检索相关公式注入提示。
  - **Python代码执行**：让LLM生成Python代码计算，消除算术和舍入错误。

## 3. 实验设计
- **数据集**：MedCalc-Bench（1,048例临床计算病例），经人工清洗后保留940个有效病例。
- **基准对比方法**：
  - 直接回答（Direct）
  - 思维链（CoT）
  - 单样本示例（One-shot）
  - 自我反思（Self-Refine）
  - MedPrompt（k=3近邻检索）
  - MedRaC（本文方法）
- **评估指标**：使用LLM自动逐步评估（公式/提取/计算/答案各步骤正确率）。
- **额外人类验证**：46例样本由专家和非专家标注，比较与LLM法官的一致性。
- **消融实验**：分别去除RAG和代码组件，测试记忆缩放（公式库从55扩展至785）。

## 4. 资源与算力
- **所有实验均为推理模式（无训练）。**
- 开源模型使用**两张NVIDIA RTX A6000 GPU**进行本地推理。
- GPT模型使用默认设置；其他开源模型设置：temperature=0.6, top-p=0.95, repetition penalty=1.0。
- LLM评估管道使用DeepSeek-chat作为评估器，错误类型检查使用DeepSeek-reasoner。

## 5. 实验数量与充分性
- **主实验**：在9种LLM（从Phi-4-mini到GPT-4o）上对比6种策略，报告规则型和计算型准确率。
- **消融实验**：RAG消融（对比有无检索）、代码消融（对比有无代码执行）、记忆缩放（3种嵌入模型，55 vs 785公式库）。
- **人类评估**：46例样本，计算专家-专家、专家-非专家、LLM-专家的一致性。
- **错误类型分析**：对4种模型（Llama3.1-8B、gpt-4o-mini、Qwen3-4B、Qwen3-8B）统计8类错误计数，并对比Zero-shot CoT和MedRaC。
- **充分性评价**：实验覆盖了多种模型规模、多种推理策略，并包含消融和人类验证，较充分。但仅在一个英语数据集上进行，且未测试多语言或真实EHR噪声场景。

## 6. 主要结论与发现
1. **现有评估高估了LLM的医疗计算能力**：GPT-4o在逐步评估下正确率从62.7%降至43.6%，揭示了隐藏的错误。
2. **LLM法官与专家评价高度一致**：在公式、提取、计算、答案各步骤一致率分别为90.2%、78.3%、88.1%、97.8%，接近甚至超过人类专家对。
3. **MedRaC显著提升准确性**：无微调情况下，不同LLM的准确率提升幅度达16.35%~53.19%，尤其在计算密集型领域（如肾病学：39.7%→90.4%）。
4. **错误主要源于公式误选、算术错误和人口学调整失败**，RAG和代码分别针对性解决。
5. **检索增强对公式选择至关重要**：无RAG时准确率从64.68%暴跌至25.64%；公式库扩展至785后仍保持高检索精度（top-2 100%）。

## 7. 优点
- **细粒度评估**：首次将医疗计算任务分解为公式、提取、计算三阶段并独立验证，提供可解释的诊断。
- **结构化错误分类**：8类错误覆盖常见失败模式，支持自动化归因。
- **实用性强**：MedRaC无需微调，即插即用，直接提升性能。
- **人类验证可靠**：LLM法官与专家判断一致性高，证明评估管道的临床可信度。
- **严谨的消融实验**：分别验证RAG和代码的贡献，证明了模块化设计的有效性。

## 8. 不足与局限
- **基准局限性**：仅覆盖结构化、单轮任务，未涉及模糊语境、上下文切换或异常处理。
- **语言与数据限制**：仅英文、经策划的临床笔记，未测试多语言或真实EHR噪声场景。
- **LLM-as-Judge偏差**：虽经人类验证，但LLM判断仍可能犯错，尤其在细微临床误解上。
- **MedRaC假设**：依赖准确的公式库和结构化变量提取，在实际部署中可能不可得。
- **未考虑实时人工监督**：论文主要关注自动评估与提升，未讨论临床部署中的人机协作。
- **实验仅在一个数据集上进行**（MedCalc-Bench），泛化性有待验证。

（完）

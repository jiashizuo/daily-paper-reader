---
title: "Trustworthy Medical Question Answering: An Evaluation-Centric Survey"
title_zh: 可信医疗问答：以评估为中心的综述
authors: "Yinuo Wang, Baiyang Wang, Robert E. Mercer, Frank Rudzicz, Sudipta Singha Roy, Pengjie Ren, Zhumin Chen, Xindi Wang"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.1398.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 关于使用LLM的医疗问答可信度综述
tldr: 本文系统综述了医疗问答系统中大语言模型的可信度六个维度：事实性、鲁棒性、公平性、安全性、可解释性和校准。分析了当前方法的不足，并提出了未来研究方向，为构建可靠的医疗QA系统提供全面参考。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.1398/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1655, \"height\": 1146, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.1398/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1619, \"height\": 2505, \"label\": \"Table\"}]"
motivation: 医疗QA系统的可信度对患者安全和临床决策至关重要。
method: 对六个可信度维度的现有研究进行系统分类和评估。
result: 总结了各维度的方法和挑战，并提出评估框架。
conclusion: 实现全面可信度需多维度协同改进。
---

## Abstract
Trustworthiness in healthcare question-answering (QA) systems is important for ensuring patient safety, clinical effectiveness, and user confidence. As large language models (LLMs) become increasingly integrated into medical settings, the reliability of their responses directly influences clinical decision-making and patient outcomes. However, achieving comprehensive trustworthiness in medical QA poses significant challenges due to the inherent complexity of healthcare data, the critical nature of clinical scenarios, and the multifaceted dimensions of trustworthy AI. In this survey, we systematically examine six key dimensions of trustworthiness in medical QA, i.e., Factuality, Robustness, Fairness, Safety, Explainability, and Calibration. We review how each dimension is evaluated in existing LLM-based medical QA systems. We compile and compare major benchmarks designed to assess these dimensions and analyze evaluation-guided techniques that drive model improvements, such as retrieval-augmented grounding, adversarial fine-tuning, and safety alignment. Finally, we identify open challenges—such as scalable expert evaluation, integrated multi-dimensional metrics, and real-world deployment studies—and propose future research directions to advance the safe, reliable, and transparent deployment of LLM-powered medical QA.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

该论文旨在系统综述医疗问答（Medical QA）系统中大语言模型（LLMs）的可信度问题。随着LLMs（如Med-PaLM、ChatDoctor）在医疗场景中的广泛应用，其回答的可靠性直接影响患者安全和临床决策。然而，现有LLM在医疗QA中仍存在事实幻觉、过度自信、偏见和不安全建议等关键信任失败。该综述聚焦于六个核心可信度维度——事实性（Factuality）、鲁棒性（Robustness）、公平性（Fairness）、安全性（Safety）、可解释性（Explainability）和校准（Calibration），以评估为中心，分析现有评估方法、基准数据集以及评估引导的模型改进技术，旨在为构建更安全、可靠、透明的医疗QA系统提供路线图。

---

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

本文为综述性论文，并未提出全新的方法，而是构建了一个**评估驱动的框架**，核心思想是：通过系统评估各维度的表现，将评估结果作为反馈指导模型或系统的针对性优化。关键技术细节包括：

- **评估维度分类**：将可信度分解为6个维度，每个维度对应多种评估方法（见图1）。例如：
  - **事实性**：基于参考的指标（如准确率、F1）、证据追溯检查、对抗性基准（如Med-HALT）和专家人工评审。
  - **鲁棒性**：通过扰动（如MedFuzz）、对抗性测试、分布偏移测试来衡量性能下降。
  - **公平性**：使用配对提示（仅改变人口统计属性）、偏见特定基准、医生评审等。
  - **安全性**：通过有害查询测试、MedSafetyBench基准、伦理准则检查（如AMA原则）。
  - **可解释性**：评估解释的存在性和质量（如BLEU/ROUGE、人工评分），并区分可信度与忠实度。
  - **校准**：比较置信度与准确率，使用期望校准误差（ECE）、校准拒绝测试等。

- **评估引导的系统改进**：论文基于评估结果，总结了针对各维度的优化策略（如第3节）：
  - **事实性**：检索增强生成（RAG），如Almanac系统；采用负缺失信息评分系统（NMISS）。
  - **鲁棒性**：对抗训练（如字符/词级扰动）；MedFuzz配合扰动-演示弱点采样（PDWS）进行微调。
  - **公平性**：数据多样化（如欠表示群体增强）、对抗性去偏、约束训练、提示工程（如“对所有患者使用性别中立解释”）。
  - **安全性**：监督微调（SFT）和基于人类反馈的强化学习（RLHF）与直接偏好优化（DPO）；实时安全过滤器。
  - **可解释性**：思维链（Chain-of-Thought）提示、混合模型（先小模型生成解释大纲）、交互式自我反思。
  - **校准**：温度缩放、解码参数调整（降低采样温度）、显式提示、集成方法、辅助置信预测器。

- **跨维度互动**（2.7节）：论文分析了各维度之间的相互影响，例如幻觉与校准错误的下界关系、鲁棒性训练降低幻觉、公平性与安全性相互加强等。

---

### 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法

作为综述，本文没有提出自己的实验，而是收集和比较了现有基准数据集和评估工具。表1列出了各维度的代表性基准，包括：

| 维度        | Benchmark示例                                                                 | 数据格式                                |
|-------------|------------------------------------------------------------------------------|-----------------------------------------|
| 事实性      | Med-HALT、MedHallBench、MedHallu                                           | 多项选择、是非题、开放问答、视觉问答等   |
| 鲁棒性      | MedFuzz                                                                     | 多项选择（对抗扰动）                     |
| 公平性      | BiasMedQA、EquityMedQA                                                      | 多项选择（含认知偏差）                   |
| 安全性      | MedSafetyBench                                                              | 开放问答（有害指令）                     |
| 可解释性    | MedExQA、PubMedQA、DR.BENCH、MedExpQA、MediQ、MedXpertQA                    | 多项选择、开放问答、推理分类等           |
| 综合或工具  | TrustLLM（18类评估）、HELM（透明报告）                                         | 统一管道                                 |

论文引用了多个评估研究，如Singhal等人的Med-PaLM（USMLE准确率67.6%/86.5%）、Almanac使用RAG、Moradi和Samwald的对抗训练框架等，但并未进行方法间直接对比，而是综述性地描述各类方法的效果。

---

### 4. 资源与算力：论文中未明确说明算力消耗

论文中**没有提及**训练或评估所用的GPU型号、数量、训练时长等具体算力信息。作为综述，它不涉及原始实验，因此算力资源不在讨论范围内。仅在致谢部分提到资助信息，但未涉及计算资源。

---

### 5. 实验数量与充分性：作为综述，未陈述自身实验

本文**没有进行任何新的实验**，而是系统整理和评论了现有研究。因此，不存在“实验数量”或“消融实验”等。但从综述的角度，它覆盖了2020-2025年间主要会议（ACL, EMNLP, NeurIPS等）和医学期刊（JAMA, Nature Medicine等）的相关文献，涵盖了六个维度的评估方法与优化技术，并给出了表1这样的基准汇总。其充分性体现在：
- 各维度均有多个基准和方法实例。
- 讨论了跨维度互动（2.7节）。
- 指出了当前评估的局限和未来方向（第5节）。

然而，缺乏对方法效果的定量比较（如表格或性能数字），这使得读者难以直接判断哪种方法更优。作为综述，这是合理的，但可能影响实用性。

---

### 6. 论文的主要结论与发现

- **主要结论**：医疗QA系统的可信度是多维度的，仅评估单一维度不足以确保安全。评估不仅要度量性能，还要作为反馈驱动系统改进（评估-优化循环）。
- **关键发现**：
  - 各维度之间存在强相关（例如幻觉与校准误差共存；公平性与安全性相互加强），可通过联合评估和优化实现协同收益。
  - 当前评估严重依赖人工专家评审，难以规模化；现有基准覆盖范围有限（如语言、专科、疾病谱）；缺乏真实部署环境的评估。
  - 评估引导的优化（如RAG、对抗微调、DPO）能有效提升特定维度表现。
- **未来方向**：开发自动或半自动专家代理；构建动态、多语言、多专科的演进基准；设计多目标综合可信度评分；进行端到端临床工作流模拟评估。

---

### 7. 优点：方法或实验设计上有哪些亮点

- **系统全面**：首次将医疗QA的可信度分解为六个连续维度，并提供了统一的评估分类体系（图1和表1）。
- **强调评估驱动**：不同于许多仅分类的综述，该论文明确展示了如何将评估结果转化为具体改进策略（第3节），形成了闭环思路。
- **跨维度分析**：第2.7节详细讨论了各维度间的相互影响和协同作用，为多目标优化提供了理论依据，这是大多数综述缺失的。
- **基准汇总清晰**：表1按维度整理了代表性基准的数据格式和评估焦点，便于读者快速定位。
- **指出了真实世界评估的差距**：如第5节强调静态基准无法模拟多轮对话、临床环境变化等，并呼吁进行部署研究。

---

### 8. 不足与局限：包括实验覆盖、偏差风险、应用限制等

- **缺乏定量对比**：作为综述，没有提供各方法在统一指标下的性能比较，因此难以量化各方法的优劣。
- **覆盖范围局限**：论文自我承认（Limitations部分）仅关注医疗QA，排除通用领域LLM；主要限于英文资源；文献检索截止到2025年，可能遗漏最新工作。
- **人工评估依赖**：许多关键维度（如安全性的细微伦理判断、可解释性的忠实度）仍依赖人类专家，论文指出这是不可扩展的瓶颈。
- **基准盲区**：现有基准多偏向常见疾病和西方人口统计，对罕见病、非英语语言、跨文化情境覆盖不足。
- **应用限制**：评估主要集中在单轮问答，忽略了真实临床中的多轮对话、澄清请求、上下文变化等动态交互。此外，部署后错误成本差异巨大（无害不准确 vs 严重医疗事故），当前评估无法区分。
- **偏见风险**：论文主要引用英文文献，可能隐含地域和语言偏见；对某些维度（如公平性）的讨论主要基于美国医疗体系。

（完）

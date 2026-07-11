---
title: "Factuality Beyond Coherence: Evaluating LLM Watermarking Methods for Medical Texts"
title_zh: 超越连贯性的事实性：评估医疗文本的LLM水印方法
authors: "Rochana Prih Hastuti, Rian Adam Rajagede, Mansour Al Ghanim, Mengxin Zheng, Qian Lou"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.818.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 专门评估医疗文本上的LLM水印方法
tldr: 现有水印评估忽略医疗文本中的事实风险。本文提出专为医疗场景设计的评估流程，同时衡量事实准确性和连贯性。实验发现水印会无意中改变关键医学术语，导致幻觉。该工作为医疗LLM安全部署提供了重要评估工具。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.818/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1325, \"height\": 680, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.818/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 638, \"height\": 745, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.818/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 785, \"height\": 655, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.818/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 789, \"height\": 648, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.818/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 744, \"height\": 582, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.818/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 748, \"height\": 591, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.818/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 698, \"height\": 1268, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.818/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1005, \"height\": 515, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.818/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 997, \"height\": 777, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1656, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1648, \"height\": 630, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 809, \"height\": 233, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 808, \"height\": 232, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 806, \"height\": 262, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 689, \"height\": 137, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 705, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 571, \"height\": 612, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 721, \"height\": 540, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 642, \"height\": 288, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 631, \"height\": 178, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 622, \"height\": 178, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.818/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 804, \"height\": 1226, \"label\": \"Table\"}]"
motivation: 水印在医疗文本中可能改变关键术语，引发事实准确性风险，但现有基准忽视这一点。
method: 提出医疗聚焦的评估流程，联合衡量事实准确性和连贯性。
result: 发现水印会导致医疗术语被误改，增加幻觉风险。
conclusion: 医疗LLM水印必须考虑事实性，现有方法存在安全漏洞。
---

## Abstract
As large language models (LLMs) are adapted to sensitive domains such as medicine, their fluency raises safety risks, particularly regarding provenance and accountability. Watermarking embeds detectable patterns to mitigate these risks, yet its reliability in medical contexts remains untested. Existing benchmarks focus on detection-quality tradeoffs and overlook factual risks. In medical text, watermarking often reweights low-entropy tokens, which are highly predictable and often carry critical medical terminology. Shifting these tokens can cause inaccuracy and hallucinations, risks that prior general-domain benchmarks fail to capture.We propose a medical-focused evaluation workflow that jointly assesses factual accuracy and coherence. Using GPT-Judger and further human validation, we introduce the Factuality-Weighted Score (FWS), a composite metric prioritizing factual accuracy beyond coherence to guide watermarking deployment in medical domains. Our evaluation shows current watermarking methods substantially compromise medical factuality, with entropy shifts degrading medical entity representation. These findings underscore the need for domain-aware watermarking approaches that preserve the integrity of medical content.

---

## 论文详细总结（自动生成）

# 论文中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有LLM水印方法的评估主要关注检测能力与文本质量的权衡，但忽略了在医疗等高风险领域中事实准确性（factuality）的风险。水印方法通常对所有token一视同仁，而医疗文本中低熵token（如疾病名称）承载关键事实信息。重加权这些token以嵌入水印可能导致语义改变、事实错误甚至幻觉。
- **研究动机**：随着LLM被应用于医疗领域，水印技术作为溯源和问责的手段至关重要，但其在医疗场景下的可靠性尚未得到验证。现有基准（如WaterBench）仅评估通用质量（连贯性、语义相似度），没有考虑领域特异性的事实风险。
- **整体含义**：当前水印方法在医疗文本中会严重损害事实完整性，需要开发领域感知的水印方法，并采用专门的事实性评估流程。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：提出一个医疗聚焦的评估工作流，同时衡量水印文本的连贯性（coherence）和事实准确性（factuality），并引入**事实加权分数（Factuality-Weighted Score, FWS）**作为统一指标，优先考虑事实性而非单纯连贯性。
- **关键技术细节**：
  - **评估维度**：包含三个质量方面：①连贯性（语言流畅清晰）；②相关性/完整性（上下文信息保留）；③事实准确性（医学术语语义正确）。
  - **GPT-Judger**：使用GPT-4o作为LLM评估器，对以上三个维度进行细粒度评分（1-5 Likert量表）。
  - **传统自动指标**：连贯性用Perplexity、SimCSE；准确性用ROUGE-2、ROUGE-L、F1、AlignScore。
  - **FWS公式**：\( FWS = \alpha (Rel + FactAcc) + \beta (Coh) \)，其中 \(\alpha=0.4, \beta=0.2\)，强调事实性（相关性和准确性权重是连贯性的2倍）。通过敏感性分析验证该加权选择。
  - **人类评估**：6名受访者（含研究生和医疗从业者）对KGW水印方法在QA任务上的输出进行评分，计算皮尔逊相关系数以验证GPT-Judger与人类判断的一致性。

## 3. 实验设计

- **数据集**：
  - **HealthQA**（Zhu et al., 2019）：用于文本补全和问答任务（各选取200个样本，控制输入/输出长度）。
  - **MeQSum**（Abacha & Demner-Fushman, 2019）：用于摘要任务（选取输入≤60词、摘要≥10词的样本）。
- **基准（Benchmark）**：无专门的外部基准，论文自身提出的FWS作为统一评估指标。对比了传统自动指标和GPT-Judger评分。
- **对比方法**：
  - **后处理方法**（Post-hoc）：LogRank、DetectGPT。
  - **生成时水印**（Generation-time）：KGW（logit-based）、SWEET（针对低熵token改进）、DiPmark（分布保持）、EXP-edit（采样修改）。
- **部署工具**：MarkLLM工具包，默认参数。

## 4. 资源与算力

- **模型大小**：主模型Meditron-7B（医疗领域适配的Llama-2-7B），额外测试MedLlama-3-8B和BioMistral-7B。
- **硬件**：AMD Ryzen Threadripper PRO 3955WX（16核）CPU + 两张NVIDIA GeForce RTX 3090 GPU（每张24GB VRAM）。
- **训练时长**：未明确说明训练时长，仅提及实验运行于上述工作站。
- **其他**：GPT-Judger使用OpenAI GPT-4o-2024-08-06，总API费用约60美元。

## 5. 实验数量与充分性

- **实验组数**：
  - **RQ1**：检测质量（TPR、AUROC、PPL、SimCSE）在3个任务、3个模型上对比6种方法，结果如Table 2。
  - **RQ2**：任务导向性能（ROUGE-2、ROUGE-L、F1、AlignScore）在3个任务上对比4种生成时方法（Table 3）。
  - **RQ3**：GPT-Judger质量维度评分（Figure 2）和FWS比较（Table 4）；敏感性分析（Table 5）和人类相关性（Table 6）。
  - **RQ4**：熵分布分析（Figure 3, 4）、实体幻觉统计（Table 7）及示例（Table 13）。
  - **附录补充**：额外模型分析（Table 8, 9）、超参数影响（Figure 5, Table 11, 12）。
- **充分性评价**：
  - **优点**：覆盖三个典型医疗任务、多种水印类型、两个评估视角（自动+GPT-Judger+人类）。人类评估虽只针对QA任务，但验证了FWS与人类判断的相关性。
  - **不足**：人类评估样本量小（6人，每人评10%数据），仅覆盖一种水印（KGW）和一个任务（QA）。模型仅限7B-8B规模，未测试更大模型（如70B）。缺乏对水印参数（如δ, γ）对事实性影响的系统分析。

## 6. 论文的主要结论与发现

- **RQ1**：后处理方法保持文本质量但检测率低；生成时方法检测率高但质量有损，其中SWEET和DiPmark在检测与质量间平衡较好。
- **RQ2**：传统任务指标（ROUGE、F1、AlignScore）差异微小（<1%），不足以充分区分事实性退化。
- **RQ3**：FWS基于GPT-Judger能提供更清晰的区分度（分数范围0.369-0.556 vs 自动指标0.135-0.197），与人类判断相关性高（GPTJ-Human相关系数0.839 vs Auto-Human 0.256）。事实性维度比连贯性更重要。
- **RQ4**：水印导致token熵分布向低/中熵区域偏移约10%，降低模型对疾病实体的置信度。新实体引入率11-13%，幻觉率增加0.6-3.2%。例如，EXP-edit在文本补全中事实准确性下降37%。
- **核心发现**：当前水印方法显著损害医疗事实性，必须开发领域感知的水印策略。

## 7. 优点

- **问题细化**：首次系统评估水印对医疗文本事实性的影响，填补了通用基准的空白。
- **方法论创新**：提出FWS这一复合指标，将事实性置于连贯性之上，并验证其与人类判断的强相关性。
- **多维度评估**：整合传统自动指标、GPT-Judger和人类评估，兼顾效率和可靠性。
- **深入分析退化原因**：从熵分布和实体幻觉层面揭示事实性退化的机制，提供可解释的洞见。
- **可复现性**：提供代码和实验数据（GitHub），便于后续研究。

## 8. 不足与局限

- **实验覆盖有限**：
  - 人类评估仅限QA任务和单一水印（KGW），结论的泛化性有待验证。
  - 模型规模仅7B-8B，未测试更大模型（如Meditron-70B），无法确认结论是否随规模扩展。
  - 未覆盖其他医疗任务（如诊断、报告生成、对话）。
- **评估方法依赖GPT-4o**：GPT-Judger可能引入自身偏见，且成本较高。未与多个LLM评估器对比。
- **水印参数未系统调优**：所有方法使用默认参数，未探讨参数对事实性的影响（仅附录对KGW/SWEET的δ,γ做了检测率分析，但未分析事实性）。
- **事实性度量局限**：FWS的加权系数（α=0.4, β=0.2）虽经敏感性分析，但最佳权重可能因任务而异。人类评估样本量小（6人），可能无法充分代表医疗专家判断。
- **其他退化因素未探索**：仅分析熵偏移和实体幻觉，其他可能因素（如句法结构、逻辑连贯性）未被考虑。
- **伦理声明**：指出水印可能被滥用导致误信，但未讨论防止误用的具体建议。

（完）

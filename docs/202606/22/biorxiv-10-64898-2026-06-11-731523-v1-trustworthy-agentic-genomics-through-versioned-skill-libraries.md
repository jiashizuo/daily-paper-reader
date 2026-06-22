---
title: Trustworthy agentic genomics through versioned skill libraries
title_zh: 通过版本化技能库实现可信赖的智能体基因组学
authors: "Corpas, M., Iacoangeli, A., Bourdenx, M., Aldraimli, M., Skene, N., Fatumo, S., Guio, H."
date: 2026-06-15
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.11.731523v1.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: 智能体AI，大语言模型，自动化分析，基因组学
tldr: 基因组学正在采用自主AI智能体，但缺乏信任机制。本研究通过大规模评估发现，可信赖性是流水线架构的属性，而非模型本身。将验证过的决策逻辑编码为版本化技能并作为代码执行，可使药物基因组学映射精确、可审计且跨模型一致，将所有残余错误限制在输入解释步骤。执行消除了临床映射中的祖先梯度，将其转移到输入调用者的可审计完整性上。
source: biorxiv
selection_source: fresh_fetch
motivation: 基因组学采用自主AI智能体速度快于建立信任标准，需要确定可信赖性在智能体流水线中的正确位置。
method: "在44,550次评分评估中，对9个前沿大语言模型在110个药物基因组学案例上进行基准测试，并测试来自三个祖先多样性群体的7,000多个个体的真实星等位基因单倍型。"
result: 可信赖性是流水线架构的属性；检索增加致死类错误，而执行技能使映射精确且模型不变；未受保护的模型解释沿祖先梯度退化。
conclusion: 可信赖的基因组解释需将正确性从随机模型转移到版本化技能作为代码执行，模型仅负责输入解释，为大规模可信赖智能体基因组解释提供可泛化架构。
---

## 摘要
基因组学正在采用自主AI智能体，这些智能体能够根据自然语言指令解读基因组，但其速度超过了建立信任手段的速度。我们报告了首次大规模对照评估，旨在确定在智能体基因组流程中，正确性必须存在于何处，才能使系统在临床规模上值得信赖。利用药物基因组学（一个错误可测量且有时致命的领域），我们对9个前沿大语言模型进行了基准测试，涉及110个药物基因组学案例的44,550次评分评估，并测试了模型对来自三个不同祖先人群的7,000多名个体的真实星等位基因双倍型的解读。事实证明，可信赖性是流程架构的属性，而非模型的属性。让模型进行推理是随机且不安全的，而通过检索将其基于正确指南反而矛盾地增加了致命类错误。将经过验证的决策逻辑编码为版本化技能并作为代码执行，使得药物基因组学映射变得精确、可审计且跨模型一致，将所有残余错误限制在单个输入解读步骤中。在个体基因组上，无防护的模型解读会沿着祖先梯度退化；执行则从临床映射中消除了这一梯度，将其转移到输入调用者的可审计完整性上。这为大规模可信赖的智能体基因组解读建立了一种可推广、可审计的架构。

亮点
O_LI正确性必须被执行，而非推理或检索，才能值得信赖
C_LI
O_LI检索提高了表型准确性，但增加了致命类错误；技能则不会
C_LI
O_LI执行使临床映射精确且模型不变；错误停留在输入阶段
C_LI
O_LI确定性输入调用者是实现全正确输出答案的预测路径
C_LI

简而言之
Corpas及其同事表明，可信赖的智能体基因组解读并非来自让语言模型正确推理生物学，而是来自将其限制在解读输入上，同时由版本化、经过验证的技能以执行代码的形式进行推理。在9个大语言模型和110个药物基因组学案例中，执行技能使临床映射变得确定性、可审计且模型不变。

意义
基因组学采用自主的、语言模型中介的智能体的速度，超过了建立信任所需标准的速度。在一个具有致命类后果的药物基因组学基准测试中，我们表明智能体的可信赖性不是模型的属性，而是智能体如何被约束的属性：正确性必须从随机模型中移出，进入作为代码执行的版本化技能，而模型则被限制在解读异构输入上。这为该领域提供了一种可转移的架构，用于可信赖的智能体基因组解读，一种预测的部署路径，使得每个输出的答案都是正确的（执行经过验证的技能，确定性调用输入，并对不可约的残余进行弃权），以及一种将基因组技能开发为经过验证、可执行、版本化单元（而非提示）的方法。遵循其他地方描述的验证框架，我们使用“临床级”来表示确定性、可审计性、可追溯到版本化组件以及群体不变性能，所有这些都在技能约束执行下实现。我们区分了群体性能的两种含义：执行的临床映射通过构造是群体不变的，已在欧洲、拉丁美洲和东非血统个体中得到验证；而模型对真实、祖先多样双倍型的解读则不是，它会沿着祖先梯度退化，这正是映射必须被执行而非推理的原因。我们不声称完全的临床验证，这还需要非标准输入、真实世界的基因组和临床数据、人类对照以及多站点一致性。

## Abstract
Genomics is adopting autonomous AI agents that interpret genomes from natural-language instructions faster than it is building the means to trust them. We report the first large-scale controlled evaluation of where, in an agentic genomic pipeline, correctness must reside for the system to be trustworthy at clinical scale. Using pharmacogenomics, a domain where errors are measurable and sometimes lethal, we benchmarked nine frontier large language models across 44,550 scored evaluations on 110 pharmacogenomic cases, and tested model interpretation of real star-allele diplotypes from more than 7,000 individuals in three ancestrally diverse populations. Trustworthiness proved to be a property of pipeline architecture, not of the model. Letting the model reason was stochastic and unsafe, and grounding it in the correct guidelines by retrieval paradoxically increased lethal-class errors. Encoding the validated decision logic as a versioned skill and executing it as code made the pharmacogenomic mapping exact, auditable and identical across models, confining all residual error to a single input-interpretation step. On individual genomes, unguarded model interpretation degraded along an ancestry gradient; execution removes this gradient from the clinical mapping, relocating it to the auditable completeness of the input caller. This establishes a generalisable, auditable architecture for trustworthy agentic genome interpretation at scale.

HighlightsO_LICorrectness must be executed, not reasoned or retrieved, to be trustworthy
C_LIO_LIRetrieval raises phenotype accuracy yet increases lethal-class errors; skills do not
C_LIO_LIExecution makes the clinical mapping exact and model-invariant; error stays at input
C_LIO_LIA deterministic input caller is the predicted route to all-correct emitted answers
C_LI

In briefCorpas and colleagues show that trustworthy agentic genome interpretation comes not from making language models reason correctly about biology, but from confining them to interpreting input while versioned, validated skills do the reasoning as executed code. Across nine large language models and 110 pharmacogenomics cases, executing the skill makes the clinical mapping deterministic, auditable and model-invariant.

SignificanceGenomics is adopting autonomous, language-model-mediated agents faster than it is building the standards needed to trust them. On a pharmacogenomic benchmark with lethal-class consequences, we show that an agents trustworthiness is not a property of the model but of how the agent is constrained: correctness must be moved out of the stochastic model into a versioned skill executed as code, with the model confined to interpreting heterogeneous input. This gives the field a transferable architecture for trustworthy agentic genome interpretation, a predicted route to deploying it so that every emitted answer is correct (execute the validated skill, call the input deterministically, and abstain on the irreducible residual), and a way to develop genomic skills as validated, executable, versioned units rather than prompts. Following a validation framework described elsewhere, we use clinical-grade to mean determinism, auditability, traceability to versioned components and population-invariant performance, all achieved under skill-constrained execution. We distinguish two senses of population performance: the executed clinical mapping is population-invariant by construction, verified across European, Latin American and East African origin individuals, whereas the models interpretation of real, ancestrally diverse diplotypes is not, degrading along an ancestry gradient, which is precisely why the mapping must be executed rather than reasoned. We do not claim full clinical validation, which would additionally require non-canonical inputs, real-world genomic and clinical data, human comparators and multi-site concordance.
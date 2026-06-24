---
title: "Orion: Towards Lab Automation with Computer-Using Agents"
title_zh: Orion：迈向使用计算机代理的实验室自动化
authors: "Ma, C., Trinh, L., Bucci, M., Regev, A., Wang, H."
date: 2026-06-16
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.13.732095v1.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: 用于生物医学图像分析的AI代理
tldr: "实验室发现依赖计算工作流，但受限于软件操作和知识整合。Orion是一个计算机使用AI代理，结合大语言模型、终端执行和GUI控制，自动完成生物医学图像分析与解释。在基准测试中，Orion在数据库检索任务上准确率超90%，学会使用CellProfiler和QuPath进行定量分析，并在100小时自主探索中生成52份研究报告，其中22个假说被科学家优先验证。"
source: biorxiv
selection_source: fresh_fetch
motivation: 现有实验室计算工作流依赖人工操作专业软件和视觉检查，效率低下，需要自动化代理来加速生物医学图像分析与知识发现。
method: Orion结合大语言模型、终端执行、GUI控制和自适应多步推理，在共享计算环境中操作软件、查看图像和挖掘网络资源。
result: "在基准测试中，Orion在数据库检索任务上准确率超90%，学会使用CellProfiler和QuPath，并在100小时自主探索中生成52份报告，其中22个假说被优先验证。"
conclusion: 计算机使用AI代理能显著扩展实验室自动化范围，提供从实验图像到定量分析、报告和生物学假说的可扩展、可审计路径。
---

## 摘要
实验室发现越来越依赖于将实验数据与分析、解释和后续假设连接起来的计算工作流。然而，这些工作流仍然受到劳动密集型专用软件使用、通过图形用户界面进行视觉检查以及跨多个来源的知识整合的限制。在这里，我们提出了Orion，一个用于生物医学图像分析和解释的计算机使用AI代理，通过自动化实验室工作的计算层来迈向实验室自动化。Orion在共享计算环境中结合了大型语言模型与终端执行、GUI控制和自适应多步推理。它可以检查视觉数据、操作标准科学软件、挖掘网络资源并执行端到端的分析和解释工作流，而无需定制的软件集成。在基准测试中，Orion在生物医学数据库和文献检索任务上实现了超过90%的准确率，学会了分别使用流行工具CellProfiler和QuPath进行细胞和组织图像的定量分析，并促进了实验成像数据中的自主发现。在100小时的大规模扰动成像数据集自主探索中，Orion生成了52份研究报告，其中人类科学家审查后优先考虑了22个合理的机制假设。这些结果表明，使用计算机的AI代理可以显著扩展实验室自动化的范围，提供从实验成像数据到定量分析、报告和生物学基础假设的可扩展且可审计的路径。

## Abstract
Laboratory discovery increasingly depends on computational workflows that connect experimental data to analysis, interpretation and follow-up hypotheses. Yet these workflows remain constrained by labor-intensive use of specialized software, visual inspection through graphical user interfaces, and integration of knowledge across multiple sources. Here, we present Orion, a computer-using AI agent for biomedical image analysis and interpretation that moves towards lab automation by automating this computational layer of laboratory work. Orion combines large language models with terminal execution, GUI control and adaptive multi-step reasoning in a shared computing environment. It can inspect visual data, operate standard scientific software, mine web resources and conduct end-to-end analysis and interpretation workflows without requiring bespoke software integrations. Across benchmarks, Orion achieved over 90% accuracy on biomedical database and literature retrieval tasks, learned to use the popular tools CellProfiler and QuPath for quantitative analysis of cellular and tissue images, respectively, and facilitated autonomous discovery in experimental imaging data. In 100 hours of autonomous exploration of a large-scale perturbation imaging dataset, Orion generated 52 research reports, of which human scientist review prioritized 22 plausible mechanistic hypotheses. These results show that computer-using AI agents can substantially expand the reach of laboratory automation, providing a scalable and auditable route from experimental imaging data to quantitative analysis, reports and biologically grounded hypotheses.



O_FIG O_LINKSMALLFIG WIDTH=200 HEIGHT=45 SRC="FIGDIR/small/732095v1_ufig1.gif" ALT="Figure 1">
View larger version (20K):
org.highwire.dtl.DTLVardef@476af5org.highwire.dtl.DTLVardef@bf1ac4org.highwire.dtl.DTLVardef@765c18org.highwire.dtl.DTLVardef@983419_HPS_FORMAT_FIGEXP  M_FIG Overview of Orion

Orion operates within a digital lab environment, using both graphical user interfaces and terminals just like a human scientist. This dual approach allows Orion to interact seamlessly with scientific software while also viewing figures and web databases to capture their nuanced visual information.

C_FIG
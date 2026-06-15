---
title: A Computational Perspective on the No-Strong-Loops Principle in Brain Networks
title_zh: 大脑网络中无强循环原则的计算视角
authors: "Hadaeghi, F., Fakhar, K., Khajehnejad, M., Hilgetag, C."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.1101/2025.09.24.678310v2.full.pdf"
tags: ["query:fmri-brain-network"]
score: 6.0
evidence: 脑网络组织，连接不对称性，脑网络计算建模
tldr: 哺乳动物大脑皮层网络遵循“无强环路”原则，即前馈连接强于反馈连接。本研究通过计算分析和储层计算模型发现，连接不对称性支持高工作记忆容量，而增加互惠性会降低记忆容量和表征多样性。在稀疏、模块化和层次化网络中限制互惠性可获得最佳性能，并在多种灵长类和啮齿类动物连接组中得到验证。该发现为人工神经网络设计提供了生物启发式原则。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究大脑皮层“无强环路”原则（前馈连接强于反馈）对信息处理的计算优势，尤其是对工作记忆的影响。
method: 使用储层计算模型，系统比较不同拓扑结构（随机、小世界、核心-外围等）和互惠性约束下的网络性能，并在哺乳动物连接组上验证。
result: 连接不对称性显著提升工作记忆容量和表征多样性；稀疏、模块化、层次化网络在限制互惠性时性能最优。
conclusion: 限制互惠性连接是大脑实现稳定高效信息处理的进化策略，可为人工神经网络设计提供指导。
---

## 摘要
哺乳动物大脑的皮层网络表现出非随机组织，其中相互投射虽然广泛存在，但强度上系统性地不对称：前馈连接始终强于其反馈对应物，尤其是在感觉皮层中。这种“无强循环”原则被认为可以防止失控的兴奋并维持稳定性，但其实际计算影响仍不清楚。在这里，我们使用计算分析和建模表明，连接不对称性支持高工作记忆容量，而增加互惠性会降低循环神经网络储层计算模型中的记忆容量和表征多样性。我们系统检查了受哺乳动物皮层连接启发的合成架构，发现稀疏、模块化和层次化网络相对于随机、小世界或核心-外围图实现了优越性能，但仅在互惠性受到约束时。在定向哺乳动物（猕猴、狨猴、大鼠和小鼠）连接组上验证后，这些结果表明限制互惠模式在稀疏网络中产生功能优势，与大脑中稳定、高效信息处理的进化策略一致。这些发现为人工神经系统提出了一个受生物学启发的设计原则。

## Abstract
Cerebral cortical networks in the mammalian brain exhibit a non-random organization in which reciprocal projections, although widespread, are systematically asymmetric in strength: feedforward connections are consistently stronger than their feedback counterparts, particularly in sensory cortices. This "no-strong-loops" principle is thought to prevent runaway excitation and maintain stability, yet its actual computational impact remains unclear. Here, we use computational analysis and modeling to show that connectivity asymmetry supports high working-memory capacity, whereas increasing reciprocity reduces memory capacity and representational diversity in reservoir-computing models of recurrent neural networks. We systematically examine synthetic architectures inspired by mammalian cortical connectivity and find that sparse, modular, and hierarchical networks achieve superior performance, relative to random, small-world, or core-periphery graphs, but only when reciprocity is constrained. Validated on directed mammalian (macaque, marmoset, rat, and mouse) connectomes, these results indicate that restricting reciprocal motifs yields functional benefits in sparse networks, consistent with an evolutionary strategy for stable, efficient information processing in the brain. These findings suggest a biologically-inspired design principle for artificial neural systems.
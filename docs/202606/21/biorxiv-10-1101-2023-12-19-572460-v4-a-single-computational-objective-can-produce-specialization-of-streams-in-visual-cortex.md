---
title: A single computational objective can produce specialization of streams in visual cortex
title_zh: 单一计算目标即可产生视觉皮层中的流特化
authors: "Finzi, D., Margalit, E., Kay, K., Yamins, D. L. K., Grill-Spector, K."
date: 2026-06-20
pdf: "https://www.biorxiv.org/content/10.1101/2023.12.19.572460v4.full.pdf"
tags: ["query:fmri-brain-network"]
score: 6.0
evidence: 使用fMRI数据和神经网络模型研究视觉皮层功能分化
tldr: 视觉皮层分为背侧、外侧和腹侧流，传统观点认为这些流分别支持不同视觉行为。本研究使用自监督Topographic深度人工神经网络，仅通过局部空间约束学习通用视觉表征，成功预测了大脑响应、空间分离和功能分化，表明功能组织可源于单一计算目标。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究视觉皮层功能分区的根本原因，挑战传统观点认为不同视觉流分别支持不同行为的假说。
method: 训练自监督Topographic深度人工神经网络，通过局部空间约束鼓励邻近单元相似响应，并利用大规模fMRI数据验证。
result: 模型成功预测了大脑响应、空间分离和功能分化，而针对特定行为训练的模型效果较差。
conclusion: 视觉流的功能组织可能源于学习通用视觉表征的单一原则，而非专门支持不同行为。
---

## 摘要
人类视觉皮层被组织成背侧、外侧和腹侧流。一个长期存在的假说认为，流的功能组织是为了支持不同的视觉行为而出现的。在这里，我们使用基于神经网络的计算模型和大量fMRI数据集来研究视觉流出现的原因。我们发现，针对特定流视觉行为训练的模型难以捕捉大脑反应和组织。相反，一种自监督的地形深度人工神经网络（鼓励邻近单元做出相似反应）成功预测了跨流的大脑反应、空间分离和功能分化。这些发现挑战了主流观点，即流是为了分别支持不同行为而进化出来的，反而表明功能组织可以源于单一原则：在局部空间约束下学习普遍有用的视觉表征。

## Abstract
Human visual cortex is organized into dorsal, lateral, and ventral streams. A long-standing hypothesis is that the functional organization into streams emerged to support distinct visual behaviors. Here, we use a neural network-based computational model and a massive fMRI dataset to investigate why visual streams emerge. We find that models trained for stream-specific visual behaviors poorly capture brain responses and organization. Instead, a self-supervised Topographic Deep Artificial Neural Network, which encourages nearby units to respond similarly, successfully predicts brain responses, spatial segregation, and functional differentiation across streams. These findings challenge the prevailing view that streams evolved to separately support different behaviors and suggest instead that functional organization can arise from a single principle: learning generally useful visual representations subject to local spatial constraints.
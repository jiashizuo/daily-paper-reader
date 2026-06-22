---
title: Incorporation of single-neuron projectome-based connectivity motifs enhances the cortex-specific performance of artificial neural networks
title_zh: 基于单神经元投射组连接基序的融入增强了人工神经网络的皮层特异性性能
authors: "Sun, Y., Yao, W., Zhang, J., Song, W., Zhao, X., Hao, C., Chen, X., Zeng, S., Jia, S., Yang, Y., Xiao, X., Poo, M.-m., Xu, B., Zhang, T."
date: 2026-06-17
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.12.732007v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 7.0
evidence: 脑连接组基序启发人工神经网络设计
tldr: 自然神经网络的连接模式可启发人工神经网络设计。本研究分析小鼠单神经元投射组，发现不同皮层区域存在独特的三节点连接基序。开发CINA算法将自然基序融入RNN和Transformer，发现皮层特异性基序提升相关任务性能，并增强模块化与小世界特性。
source: biorxiv
selection_source: fresh_fetch
motivation: 探索自然神经网络连接基序能否优化人工神经网络架构，并验证不同皮层基序的功能特异性。
method: 分析小鼠单神经元投射组的三节点基序分布，开发CINA算法将基序融入RNN和Transformer（Motif-Transformer）。
result: 皮层平均基序提升RNN抗噪分类与运动学习性能；皮层特异性基序进一步优化相关任务，且偏置增强效应；Motif-Transformer提升问答与脑信号解码。
conclusion: 自然连接基序可驱动人工神经网络涌现模块化与小世界特性，证实皮层基序的功能特异性。
---

## 摘要
自然神经网络的组织原则可以启发人工神经网络（ANN）的新架构设计。对小鼠大脑单神经元连接组的分析揭示了不同皮层区域和海马结构中三节点连接基序的独特分布。我们开发了一种连接组信息神经网络算法（"CINA"），将自然连接基序融入以循环神经网络（RNN）和基于Transformer的大语言模型（LLM）为代表的人工神经网络算法中。我们发现，与随机连接的RNN相比，融入皮层基序的平均分布提高了RNN在抗噪声分类和运动学习基准任务中的性能。值得注意的是，融入皮层特异性基序进一步提升了RNN在与该皮层功能相关的任务中的表现，并且通过人为增加基序分布的偏差可以增强这种效果。在LLM上使用Motif-Transformer进行自然语言问答和脑信号解码任务时，类似的实验结果得到了验证。图论分析表明，融入自然基序促使ANN中出现模块化和小世界特性。总之，我们不仅展示了连接组启发的ANN架构优化，还揭示了特定皮层中基序分布的功能意义。

## Abstract
The organizational principles of natural neural networks could inspire the new architecture design of artificial neural networks (ANNs). Analysis of single-neuron connectomes of mouse brains revealed distinct profiles of three-node connectivity motifs in various cortical areas and hippocampal formation. A connectome-informed neural network algorithm ("CINA") was developed to incorporate natural connectivity motifs into ANN algorithms represented by recurrent neural network (RNN) and transformer-based large language model (LLM). We found that incorporation of the average profile of cortical motifs improved the RNNs performance in noise-resistant categorization and motor learning benchmark tasks, as compared with RNNs with random connectivity. Notably, incorporating cortex-specific motifs further elevated the RNNs performance in tasks related to the cortical function, and this effect was enhanced by artificially increasing the bias in the motif profile. Similar experimental results were verified on an LLM using Motif-Transformer for natural language question answering and brain-signal decoding tasks. Graph-theoretic analyses showed that incorporating natural motifs drove the emergence of modular and small-world properties in ANNs. Together, we demonstrated not only connectome-inspired optimization of ANN architecture but also functional significance of specific motif profiles in various cortices.
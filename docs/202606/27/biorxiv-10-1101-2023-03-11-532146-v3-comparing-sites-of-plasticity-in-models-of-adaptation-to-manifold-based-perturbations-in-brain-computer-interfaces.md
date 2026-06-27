---
title: Comparing sites of plasticity in models of adaptation to manifold-based perturbations in brain-computer interfaces
title_zh: 脑机接口中基于流形扰动的适应模型中可塑性位点的比较
authors: "Payeur, A., Orsborn, A. L., Lajoie, G."
date: 2026-06-27
pdf: "https://www.biorxiv.org/content/10.1101/2023.03.11.532146v3.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: 脑机接口、神经群体活动、适应
tldr: 运动皮层神经活动在熟练行为中位于低维流形上，该结构如何约束后续学习尚不清楚。脑机接口实验发现，与流形对齐的扰动引发快速适应，错位扰动则导致慢速适应。本研究使用线性循环网络模型比较不同可塑性位点的假设，发现循环权重方差是控制差异适应的关键参数，并提出了区分可塑性位点贡献的实验方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 探究神经活动低维流形结构如何约束后续学习，并解释脑机接口实验中不同方向扰动导致适应速度差异的机制。
method: 构建线性循环网络模型，通过梯度下降训练，比较不同可塑性位点（如输入、循环、输出权重）对对齐与错位扰动的适应差异。
result: 所有可塑性位点均能产生差异适应，其强度受循环权重方差调控，且不同位点敏感性不同；Hessian分析揭示错位扰动引入浅曲率方向导致梯度下降缓慢。
conclusion: 循环权重方差是控制差异适应的关键参数，结合可塑性位点共同决定适应速度，提出的实验测试有助于区分不同位点的贡献。
---

## 摘要
在训练有素的行为中，运动皮层的神经群体活动位于一个低维流形上。这提出了一个问题：这种结构如何约束后续学习。在非人灵长类动物的脑机接口实验中，与该子空间对齐的扰动引发了快速适应，而未对齐的扰动则导致较慢的适应。已有几种理论解释被提出以说明这种差异适应，它们在可塑性位点上有所不同。我们使用一个在其不动点运行并通过梯度下降训练的最小线性递归网络来比较这些假设。所有候选可塑性位点都能产生一定程度的差异适应，其强度取决于递归权重的方差，且不同位点的敏感性不同。Hessian分析揭示了未对齐的扰动如何通过引入浅曲率方向来重塑损失景观，梯度下降沿这些方向进行缓慢。我们进一步提出了一项实验测试，以帮助区分不同可塑性位点在适应过程中的贡献。总体而言，我们的结果将递归权重的方差确定为控制差异适应的关键参数，同时可塑性位点也起作用。

## Abstract
During well-trained behaviors, neural population activity in motor cortex lies on a low-dimensional manifold. This raises the question of how such structure constrains subsequent learning. In brain-computer interface experiments in nonhuman primates, perturbations aligned with this subspace induced rapid adaptation, whereas misaligned perturbations induced slower adaptation. Several theoretical accounts have been proposed to explain this differential adaptation, differing in the locus of plasticity. We compare these hypotheses using a minimal linear recurrent network operating at its fixed point and trained by gradient descent. All candidate plasticity sites are able to produce some degree of differential adaptation, whose strength depends on the variance of recurrent weights, with different sensitivities across sites. Hessian analysis reveals how misaligned perturbations reshape the loss landscape by introducing directions of shallow curvature along which gradient descent proceeds slowly. We further propose an experimental test to help distinguish the contributions of different plasticity sites during adaptation. Overall, our results identify the variance of recurrent weights as a key control parameter governing differential adaptation, alongside the site of plasticity.
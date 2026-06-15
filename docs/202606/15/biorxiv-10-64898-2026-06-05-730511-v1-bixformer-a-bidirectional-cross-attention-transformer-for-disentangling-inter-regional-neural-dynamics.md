---
title: "BiXformer: A Bidirectional Cross Attention Transformer for Disentangling Inter-Regional Neural Dynamics"
title_zh: BiXformer：一种用于解缠区域间神经动力学的双向交叉注意力Transformer
authors: "El Sayed, O., Han, Y., Dragoi, T., Economo, M. N., DePasquale, B."
date: 2026-06-10
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.05.730511v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 7.0
evidence: 双向交叉注意力变压器用于神经动力学
tldr: 神经记录技术可同时测量多个脑区活动，但脑区间双向、有时滞的通信（前馈与反馈信号叠加）使数据解读困难。BiXformer通过方向性掩码注意力将交互分解为因果和非因果流，无需线性或平稳性假设即可恢复低维潜在动态并估计通信延迟。在合成数据上准确恢复延迟，在真实神经行为记录中揭示与感觉反馈和运动信号共存的时序结构，为复杂神经回路中的动态定向通信提供了灵活框架。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有方法难以分离脑区间叠加的前馈与反馈信号，且依赖线性或平稳性假设，无法处理双向时滞通信。
method: 提出BiXformer，利用方向性掩码交叉注意力将交互分解为因果（前馈）和非因果（反馈）流，恢复低维潜在动态并估计延迟。
result: 在合成数据上准确恢复已知延迟；在真实记录中揭示与感觉反馈和运动信号共存的时序结构。
conclusion: BiXformer为揭示复杂神经回路中动态定向通信提供了灵活且可解释的框架。
---

## 摘要
高通量神经记录技术的进步使得能够在行为动物中同时测量多个脑区的活动，产生前所未有的规模和丰富度的数据集。由于区域间通信的双向性和时间偏移特性，前馈和反馈信号在神经群体中叠加，解释这些数据仍然具有挑战性。我们引入了BiXformer，一种双向交叉注意力Transformer，通过使用方向性掩码注意力将区域间通信分解为因果和非因果流，从而解缠这些相互作用。通过在注意力头内施加时间约束，BiXformer恢复低维、有向的潜在动力学，并估计通信延迟，而不依赖于线性或平稳性假设。我们在具有已知真实延迟的合成数据集上验证了该模型，展示了潜在结构和区域间时序的准确恢复。应用于运动任务期间的同时神经-行为记录和多区域神经记录，BiXformer揭示了与感觉反馈和运动相关信号共存一致的可解释、时间结构化成分。这些结果确立了BiXformer作为揭示复杂神经回路中动态、有向通信的灵活框架。

## Abstract
Advances in high-throughput neural recording technologies enable simultaneous measurement of activity across multiple brain regions in behaving animals, producing datasets of unprecedented scale and richness. Interpreting these data remains challenging due to the bidirectional and temporally offset nature of inter-regional communication, where feedforward and feedback signals are superimposed within neural populations. We introduce BiXformer, a bidirectional cross-attention transformer that disentangles these interactions by decomposing inter-regional communication into causal and acausal streams using directionally masked attention. By enforcing temporal constraints within attention heads, BiXformer recovers low-dimensional, directed latent dynamics and estimates communication delays without relying on linearity or stationarity assumptions. We validate the model on synthetic datasets with known ground-truth delays, demonstrating accurate recovery of both latent structure and inter-regional timing. Applied to simultaneous neural-behavioral recordings and multi-region neural recordings during a movement task, BiXformer reveals interpretable, temporally structured components consistent with the coexistence of sensory feedback and motor-related signals. These results establish BiXformer as a flexible framework for uncovering dynamic, directed communication in complex neural circuits.
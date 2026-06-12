---
title: "DigiMus: a connectome-informed spiking framework for multi-region mouse neural-behavior modeling"
title_zh: DigiMus：一种基于连接组的多区域小鼠神经行为建模脉冲框架
authors: "Liu, Y., Zhang, X., Chen, X., Hao, C., Yao, W., Zhang, J., Sun, Y., Zhang, T."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.09.731075v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: 基于连接组的小鼠大脑建模脉冲框架
tldr: 现有小鼠神经行为模型多依赖任务数据，缺乏生物回路约束。DigiMus结合LIF脉冲动力学与脑区特异性基序正则化，利用约50个脑区38481个神经元形态学数据指导循环耦合。在18个认知任务和3个神经解码数据集上，DigiMus在复杂决策任务中优于TCN、LSTM和Transformer，并在真实数据上产生小幅改进。该框架为多脑区神经行为建模提供了模块化、连接组信息的工作流。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有模型缺乏生物回路约束，难以反映真实神经机制。
method: 结合LIF脉冲动力学与脑区特异性基序正则化，利用连接组数据指导循环耦合。
result: 在复杂决策任务中优于基线模型，真实数据上产生小幅改进。
conclusion: 连接组结构先验可塑造神经序列模型，提供模块化建模工作流。
---

## 摘要
计算模型越来越多地被用于关联小鼠大脑结构、神经活动和行为，但大多数模型仍然从任务数据中学习，受到生物电路组织的约束有限。这里我们提出DigiMus，一种基于连接组的脉冲框架，用于多区域小鼠神经行为建模。DigiMus将漏积分点火脉冲动力学与脑区特异性基序正则化结合在一个可训练的序列建模架构中，使得源自约50个脑区38,481个重建神经元形态的定向三节点电路基序能够在学习过程中指导循环耦合。我们在18个基于规则的认知任务（涵盖感觉运动映射和感知决策）以及三个涉及听觉辨别、固定间隔舔食和视觉解码的小鼠神经解码数据集上评估了DigiMus。在合成任务中，与TCN、LSTM和Transformer基线相比，DigiMus表现出稳定的性能，在更复杂的决策设置中优势更强。在真实神经数据集中，DigiMus的单区域实例在无结构序列基线上产生了微小、一致且依赖于数据集的改进，同时在训练后的连接中保留了基序先验特征。内部状态分析进一步将任务依赖的状态动态与行为错误模式联系起来。这些结果表明，连接组衍生的结构先验可以塑造神经序列模型，并将DigiMus确立为一个模块化的、基于连接组的小鼠神经行为建模和假设生成工作流程，而非完整的数字重建。

## Abstract
Computational models are increasingly used to relate mouse brain structure, neural activity and behavior, but most models still learn from task data with limited constraints from biological circuit organization. Here we present DigiMus, a connectome-informed spiking framework for multi-region-capable mouse neural-behavior modeling. DigiMus combines leaky integrate-and-fire spiking dynamics with brain-region-specific motif regularization in a trainable sequence-modeling architecture, allowing directed three-node circuit motifs derived from 38,481 reconstructed neuronal morphologies across approximately 50 brain regions to guide recurrent coupling during learning. We evaluate DigiMus on 18 rule-based cognitive tasks spanning sensorimotor mapping and perceptual decision-making, and on three mouse neural decoding datasets involving auditory discrimination, fixed-interval licking and visual decoding. Across synthetic tasks, DigiMus showed stable performance relative to TCN, LSTM and Transformer baselines, with stronger advantages in more complex decision-making settings. In real neural datasets, single-region instantiations of DigiMus produced small, consistent and dataset-dependent improvements over a structure-free sequence baseline, while retaining motif-prior signatures in trained connectivity. Internal state analyses further linked task-dependent state dynamics to behavioral error patterns. These results suggest that connectome-derived structural priors can shape neural sequence models, and establish DigiMus as a modular, connectome-informed workflow for mouse neural-behavior modeling and hypothesis generation, rather than a complete digital reconstruction.
---
title: Searchlight Optimization Using Representational Similarity Analysis for Subject-Level Voxel Selection in Emotional State Decoding
title_zh: 基于表征相似性分析的搜索光优化用于情绪状态解码中的个体水平体素选择
authors: "Wang, X., Zweerings, J., Lührs, M., Cong, F., Mathiak, K., Linden, D. E. J., Goebel, R., Ciarlo, A., Mehler, D. M. A."
date: 2026-06-22
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.16.729835v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 7.0
evidence: 使用表征相似性分析进行fMRI体素选择
tldr: fMRI分析中识别信息性体素是关键步骤，现有方法依赖预定义ROI或激活标准，难以捕捉精细表征差异。本文提出结合GLM单变量分析与RSA多变量优化的搜索光框架，通过贝叶斯优化自动调参，在情绪想象数据集上验证。结果表明，RSA优化比单变量选择更匹配目标表征结构，且比基于分类器的方法更好保留情绪状态表征几何，同时保持判别能力。该框架为多条件fMRI研究提供了高效、鲁棒的体素选择方案。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有体素选择方法难以捕捉多条件fMRI中精细的表征差异，影响情绪状态解码精度。
method: 提出搜索光优化框架，先进行GLM单变量分析，再结合RSA多变量细化，并用贝叶斯优化自动调参。
result: 在情绪想象数据集上，RSA优化比单变量选择更匹配目标表征结构，且比分类器方法更好保留表征几何。
conclusion: 该框架能有效识别条件敏感体素，支持多条件fMRI中情绪脑状态的精确多变量分析。
---

## 摘要
识别信息性体素是功能磁共振成像（fMRI）中关键但具有挑战性的步骤，尤其是在涉及多个相关条件的多变量分析中。现有方法通常依赖于预定义的感兴趣区域（ROI）或基于激活的标准，这可能不足以捕捉细粒度的表征差异。这一挑战在实验设置和干预（如神经反馈训练）中尤为突出，因为体素不仅被测量为神经反应，还基于其先前观察到的活动模式被用作干预目标。在本研究中，我们提出了一种个体水平的搜索光优化框架，该框架将基于体素的一般线性模型（GLM）单变量分析与基于表征相似性分析（RSA）的多变量细化相结合，以识别既与任务相关又对条件敏感的体素。为增强实际适用性，该框架进一步引入了基于贝叶斯优化的数据驱动超参数调整步骤，从而能够从小型试点数据集中高效识别高性能配置，并在应用于更大样本时保持一致的性能。使用包含四种情感条件的情感想象fMRI数据集对所提出的框架进行了评估。结果表明，与单独使用单变量选择相比，多变量细化改善了经验表征结构与目标表征结构之间的一致性。与基于分类器的体素选择方法相比，基于RSA的方法在保持判别能力的同时，更好地保留了情绪状态的表征几何结构。这些发现突显了所提出的RSA框架的有效性、效率和鲁棒性，为在多条件fMRI研究中识别条件敏感体素提供了实用解决方案，并支持对情感脑状态进行更精确的多变量研究。

## Abstract
Identifying informative voxels is a critical, yet challenging step in functional magnetic resonance imaging (fMRI), particularly for multivariate analyses involving multiple related conditions. Existing approaches often rely on predefined regions of interest (ROIs) or activation-based criteria, which may be insufficient for capturing fine-grained representational differences. This challenge becomes particularly relevant in experimental settings and interventions such as neurofeedback training, where voxels are not only measured as neural responses but also used as targets for intervention based on their previously observed activity patterns. In this study, we propose a subject-level searchlight optimization framework that integrates voxel-wise general linear model (GLM)-based univariate analysis with representational similarity analysis (RSA)-based multivariate refinement to identify voxels that are both task-relevant and condition-sensitive. To enhance practical applicability, the framework further incorporates a data-driven hyperparameter tuning step based on Bayesian optimization, enabling efficient identification of high-performing configurations from small pilot datasets, with consistent performance when applied to larger samples. The proposed framework was evaluated using an emotion imagery fMRI dataset with four affective conditions. Results demonstrate that the multivariate refinement improves alignment between empirical and target representational structures compared with univariate selection alone. Compared with a classifier-based voxel selection approach, the RSA-based approach better preserves the representational geometry of emotional states while maintaining discriminative capacity. These findings highlight the effectiveness, efficiency, and robustness of the proposed RSA framework, providing a practical solution for identifying condition-sensitive voxels and supporting more precise multivariate investigation of affective brain states in multi-condition fMRI studies.
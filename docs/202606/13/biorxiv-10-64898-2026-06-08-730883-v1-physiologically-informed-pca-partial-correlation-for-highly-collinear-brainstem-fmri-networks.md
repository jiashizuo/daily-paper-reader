---
title: Physiologically Informed PCA-Partial Correlation for highly Collinear Brainstem fMRI Networks
title_zh: 基于生理学信息的PCA-偏相关方法用于高度共线性脑干fMRI网络研究
authors: "Sozzi, S., Callara, A. L., Cauzzo, S., Scilingo, E. P., Binda, P., Vanello, N."
date: 2026-06-11
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.08.730883v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: fMRI功能连接方法用于脑干网络
tldr: 脑干功能连接研究因节点高度共线性和间接交互作用而面临挑战。标准双变量方法易产生假阳性，而偏相关受多重共线性限制。本文提出生理信息驱动的PCA正则化偏相关方法，通过主成分分析处理脑干协变量以缓解共线性。模拟和真实fMRI数据表明，该方法能生成更稀疏、生理上更合理的连接矩阵，与皮尔逊方法互补，有助于区分直接与间接效应。
source: biorxiv
selection_source: fresh_fetch
motivation: 脑干网络高度共线性导致标准FC方法产生假阳性，而偏相关受多重共线性限制，亟需针对性的直接连接估计方法。
method: 提出PCA正则化偏相关（PCA-ρ_PC），对脑干协变量进行主成分分析以缓解多重共线性并建模共享调节方差。
result: 相比传统方法，PCA-ρ_PC生成更稀疏、生理上更合理的脑干连接矩阵，在模拟和真实数据中均表现更优。
conclusion: PCA-ρ_PC与皮尔逊方法互补，可有效区分直接与间接效应，为高共线性多变量神经影像分析提供新途径。
---

## 摘要
基于静息态功能磁共振成像的功能连接方法广泛应用于研究皮层组织，但脑干尽管在生理和病理条件下都起着关键作用，却相对未被充分探索。高度共线性的网络中，强相互连接的节点和广泛存在的神经调节影响会导致间接或中介相互作用，使得直接脑干功能连接的估计变得困难。标准的双变量方法无法在这种复杂拓扑结构中恢复真实的网络结构，导致假阳性相互作用。另一方面，偏相关可以潜在地估计直接功能连接，但多重共线性问题和碰撞器引起的伪相关限制了其在高维场景中的应用。本文提出一个基于生理学信息的框架，其中用于偏相关估计的条件策略专门针对脑干及其在网络内以及与全脑区域的直接相互作用的研究。具体而言，我们采用了PCA正则化偏相关方法，其中PCA应用于脑干协变量以减轻多重共线性并建模共享的调节方差。我们证明，与传统（正则化）方法相比，PCA-偏相关提高了脑干功能连接的鲁棒性和可解释性，产生了更稀疏且生理上更合理的连接组。模拟和真实fMRI数据都表明，Pearson方法和PCA正则化方法可能相互补充，以揭示高度共线性设置中直接与间接效应的模式，为未来在广泛的多变量神经影像应用中的扩展铺平道路。

## Abstract
Functional connectivity (FC) approaches from resting-state fMRI (rs-fMRI) are amply spread to investigate the cortical organization, yet the brainstem remains relatively underexplored despite its pivotal roles in both physiological and pathological conditions. The highly collinear network, in which the strongly interconnected nodes and the widespread neuromodulatory influences induce indirect or mediated interactions, make the estimation of direct brainstem FC challenging. Standard bivariate methods fail to recover the true network structure in such complex topologies, causing false positive interactions. On the other hand, partial correlation can potentially estimate the direct FC, but multicollinearity issues and collider-induced spurious correlations limit its application in high-dimensional scenarios. Here, we propose a physiologically informed framework in which the conditioning strategy for partial correlation estimation is tailored for the investigation of the brainstem and its direct interactions within the network and with whole-brain regions. Specifically, we employed a PCA-regularized partial correlation (PCA-{rho}_PC) approach, where PCA is applied to the brainstem covariates to mitigate multicollinearity and model shared modulatory variance. We show that PCA-{rho}_PC improves the robustness and interpretability of brainstem FC, yielding sparser and more physiologically plausible connectomes compared with conventional (regularized) approaches. Both simulation and real fMRI data raise the possibility that Pearson's and PCA-regularized approaches may complement each other in an effort to unravel the pattern of direct vs. indirect effects in highly collinear settings, paving the way for future extensions in a wide range of multivariate neuroimaging applications.
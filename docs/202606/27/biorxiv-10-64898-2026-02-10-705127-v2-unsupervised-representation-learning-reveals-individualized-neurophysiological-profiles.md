---
title: Unsupervised Representation Learning Reveals Individualized Neurophysiological Profiles
title_zh: 无监督表示学习揭示个体化神经生理特征
authors: "Lapatrie, M., da Silva Castanheira, J., Aydin, I., Baillet, S."
date: 2026-06-26
pdf: "https://www.biorxiv.org/content/10.64898/2026.02.10.705127v2.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 7.0
evidence: 无监督表征学习用于神经信号，MEG个体化特征提取
tldr: 脑电活动包含个体特异性特征，但现有监督方法难以区分稳定生物学特征与可利用的个体差异。本文提出无参与者标签的自编码器框架，仅用静息态MEG片段重建训练，无需解剖信息即可在14秒内达到高区分度，跨会话泛化且年龄预测更准，为可解释的神经生理画像提供新范式。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有神经生理画像依赖监督学习，难以区分稳定生物学特征与个体差异，需无监督方法。
method: 提出无参与者标签的自编码器，仅用静息态MEG片段重建训练，从潜在空间提取画像。
result: "120秒内准确率93.3%，14秒仍有效；跨会话准确率49.5%；年龄预测r²=0.318。"
conclusion: 无监督表示学习可生成可解释、可泛化的个体神经生理画像，优于传统方法。
---

## 摘要
人脑活动包含稳定且个体特有的特征，这些特征可持续数月乃至数年，形成神经生理特征。大多数基于模型的特征提取方法使用参与者标签或有监督目标，这使得难以确定成功的区分是反映了稳定的生物学特性还是可被利用的特异性。我们引入了一种参与者无关的自编码器框架，该框架以重建作为唯一训练目标，从短时静息态脑磁图（MEG）片段中提取特征。在没有参与者标签的情况下，从学习到的潜在空间中出现了具有区分性的特征。在会话内，自编码器特征在120秒时达到93.3%的准确率，当源重建中不包含参与者特定的解剖结构时，即使记录短至14秒，其性能也超过了功能连接、频谱和对比基线。在跨记录会话中，区分能力高于随机水平（预训练自编码器的会话间准确率为49.5%）。这些特征在预测年龄方面也比基线更准确（r^2=0.318），并且解码器能够在频谱和连接空间中进行基于扰动的敏感性分析。这确立了参与者无关的表示学习作为一种可扩展且可解释的特征提取方法。

## Abstract
Human brain activity contains stable, individual-specific features that persist over months to years, forming neurophysiological profiles. Most model-based profiling approaches use participant labels or supervised objectives, making it difficult to determine whether successful differentiation reflects stable biology or exploitable idiosyncrasies. We introduce a participant-agnostic autoencoder framework that derives profiles from brief resting-state magnetoencephalography (MEG) segments using reconstruction as sole training objective. Discriminative profiles emerged from the learned latent space without participant labels. Within-session, autoencoder profiles reached 93.3% accuracy at 120 s, exceeding functional-connectivity, spectral, and contrastive baselines with recordings as short as 14 s when participant-specific anatomy was withheld from source reconstruction. Differentiation generalized above chance across recording sessions (between-session accuracy 49.5% for the pretrained autoencoder). Profiles also predicted age more accurately than baselines (r^2=0.318), and the decoder enabled perturbation-based sensitivity analyses in spectral and connectivity spaces. This establishes participant-agnostic representation learning as a scalable and interpretable profiling.
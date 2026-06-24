---
title: Stimulus identity rather than emotion drives EEG classification on the FACED dataset
title_zh: 刺激身份而非情绪驱动FACED数据集上的EEG分类
authors: "Gerster, M., Sirotina, E., Orlovskii, A., Hertz, A., Champaud, J., Guarino, D., Tulli, S."
date: 2026-06-16
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.12.731889v1.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 7.0
evidence: EEG分类分析
tldr: FACED数据集是最大的公开EEG情感数据集，但研究发现其分类性能主要反映刺激身份而非情感。线性分类器和深度学习模型在未感受到指定情感的试次上表现相当，使用自我报告标签时准确率下降，减少刺激数量后准确率反而提升。问题源于每类刺激少、使用刺激分配标签以及时间分割交叉验证。提出五项建议以缓解混淆。
source: biorxiv
selection_source: fresh_fetch
motivation: 验证FACED数据集上的EEG分类是否真正反映情感状态，而非刺激身份等混淆因素。
method: 使用线性分类器LinearSVC和深度学习模型CLISA，比较不同标签（刺激分配vs自我报告）和不同数据子集下的分类性能。
result: 分类性能在未感受到指定情感的试次上仍高，自我报告标签降低准确率，减少刺激数量后准确率提升。
conclusion: FACED数据集存在刺激身份混淆，建议增加刺激多样性、确保时间独立性和验证标签有效性。
---

## 摘要
可靠的基准数据集对于推进基于脑电图的情绪识别至关重要。细粒度情感计算脑电图数据集（FACED）是最大的公开可用脑电图情绪数据集（123名受试者，九种情绪类别），也是一个广泛采用的基准。我们证明，FACED上的受试者内和跨受试者分类主要反映的是刺激身份而非情绪。使用线性分类器（LinearSVC）和深度学习模型（CLISA），我们显示：（1）在受试者报告感受到与未感受到指定情绪的实验试次中，分类性能相当；（2）当用个体自我报告替换刺激分配标签时，准确率下降；（3）当减少到每种情绪一个视频时，尽管丢弃了三分之二的数据，准确率反而提高。这些结果反映了FACED中的三个设计选择：每个类别刺激数量少、刺激分配标签以及用于交叉验证的视频内时间分割。这些因素共同使得数据集容易受到时间自相关和刺激身份混淆的影响。为指导未来工作，我们提出五项建议——涵盖刺激多样性、时间独立性和标签验证——用于减轻这些混淆的情绪解码研究设计。

## Abstract
Reliable benchmark datasets are critical for advancing EEG-based emotion recognition. The Finer-grained Affective Computing EEG Dataset (FACED) is the largest publicly available EEG emotion dataset (123 subjects, nine emotion categories) and a widely adopted benchmark. We demonstrate that both intra-subject and cross-subject classification on FACED primarily reflects stimulus identity rather than emotion. Using a linear classifier (LinearSVC) and a deep learning model (CLISA), we show that (1) classification performance is comparable for trials where subjects reported feeling versus not feeling the assigned emotion; (2) accuracy drops when stimulus-assigned labels are replaced with individual self-reports; and (3) accuracy increases when reducing to one video per emotion despite discarding two-thirds of the data. These results reflect three design choices in FACED: few stimuli per category, stimulus-assigned labels, and within-video temporal splits for cross-validation. Together, these make the dataset susceptible to temporal autocorrelation and stimulus-identity confounds. To guide future work, we propose five recommendations -- spanning stimulus diversity, temporal independence, and label validation -- for emotion-decoding study designs that mitigate these confounds.
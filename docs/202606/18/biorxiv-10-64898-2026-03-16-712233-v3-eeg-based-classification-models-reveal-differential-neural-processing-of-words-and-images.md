---
title: EEG-based classification models reveal differential neural processing of words and images
title_zh: 基于脑电的分类模型揭示词语和图像的差异化神经加工过程
authors: "Morakabati, N. R., Thiha, A. S., Schechtman, E."
date: 2026-06-15
pdf: "https://www.biorxiv.org/content/10.64898/2026.03.16.712233v3.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 7.0
evidence: 基于EEG的分类模型揭示神经处理差异
tldr: 本研究利用EEG数据训练SVM分类器，探究大脑对图像和词汇的类别表征。实验发现图像试次的分类准确率显著高于词汇试次，且所有类别对在图像条件下均可区分，而词汇条件下仅一对可区分。顶叶和左颞电极对图像分类贡献更大，图像类别模式可跨被试泛化。该方法为神经解码提供了有效工具。
source: biorxiv
selection_source: fresh_fetch
motivation: 利用EEG数据解码大脑对图像和词汇的类别表征，比较两种刺激的神经处理差异。
method: 30名被试观看五类物体（动物、工具、食物、场景、车辆）的图像和词汇，使用SVM对EEG数据进行分类。
result: 图像试次分类准确率显著高于词汇试次；图像条件下所有类别对可区分，词汇条件下仅一对可区分；顶叶和左颞电极贡献更大。
conclusion: EEG数据结合SVM可有效解码类别级神经表征，尤其适用于图像刺激，为研究清醒及离线状态下的神经表征提供方法支持。
---

## 摘要
背景采用神经影像数据的机器学习方法有助于监测神经表征的激活。具体而言，这些方法可用于识别参与处理特定类别项目的脑网络。该方法已应用于神经影像数据，包括功能性磁共振成像数据和脑电图数据。

新方法本文提出了一种利用脑电图研究类别表征的任务和分析流程。参与者（N=30）观看属于五个类别（动物、工具、食物、场景和车辆）的物体图像和词语，并在同一类别的项目连续呈现时做出反应。

结果我们在参与者内部对脑电图数据训练支持向量机，发现图像试验和词语试验均产生了显著的类别分类准确率，其中图像试验的准确率高于词语试验。在成对比较类别时，图像试验中所有类别对在统计上均可区分，而词语试验中仅有一对可区分。顶叶和左颞叶电极对图像分类的贡献大于额叶和右颞叶电极。图像试验的类别特异性活动模式也能在参与者之间泛化。

与现有方法的比较我们的数据和分析流程产生了较高的分类准确率，主要针对图像试验，这支持了脑电图数据在神经解码中的实用性。

结论这些方法有助于探索清醒状态下以及可能离线状态下类别水平神经表征的激活和再激活。

## Abstract
BackgroundMachine learning methods employing neuroimaging data are useful for monitoring the activation of neural representations. Specifically, they can be used to discern the brain networks engaged in processing specific categories of items. This approach has been employed on neuroimaging data, including functional magnetic resonance imaging data and electroencephalography (EEG) data.

New methodHere, we present a task and an analytical pipeline for investigating category representations using EEG. Participants (N = 30) viewed a series of images and words of objects belonging to five categories (Animals, Tools, Food, Scenes, and Vehicles) and responded when items from the same category were presented consecutively.

ResultsWe trained support vector machines on EEG data within participants and found that both image trials and word trials yielded significant category classification accuracy, with image trials achieving higher accuracy than word trials. When comparing categories in a pair-wise fashion, all pairs were statistically distinguishable for image trials, whereas only one pair was distinguishable for word trials. Parietal and Left Temporal electrodes contributed more to image classification than Frontal and Right Temporal electrodes. Category-specific activity patterns also generalized across participants for image trials.

Comparison with existing methodsOur data and analytic pipeline yielded high classification accuracies, primarily for image trials, providing support for the utility of EEG data for neural decoding.

ConclusionsThese methods can be instrumental for exploring the activation and reactivation of neural representations at the category level during wakefulness and, potentially, during offline states.
---
title: A multimodal human-computer interaction dataset for neurocognitive user state evaluation
title_zh: 用于神经认知用户状态评估的多模态人机交互数据集
authors: "Zhang, S., Bai, X., Hartley-O'Dwyer, C., Warren, H., Beyer, F., Noreika, V."
date: 2026-06-19
pdf: "https://www.biorxiv.org/content/10.1101/2025.09.03.673947v2.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 7.0
evidence: 包含EEG的多模态神经认知状态评估数据集
tldr: 针对计算机用户神经认知状态（如警觉性）的监测需求，本文构建了SENSE-42多模态数据集。42名受试者在模拟桌面环境中执行日常任务，同步采集脑电、心电、呼吸等生理信号及主观问卷、行为数据。该数据集支持用户状态监测、行为分析和生理计算研究。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有数据集缺乏对自发神经认知状态波动的多模态记录，尤其是结合真实桌面任务与主观报告的数据。
method: 在模拟桌面环境中，42名受试者执行应用切换、文件管理等任务，每5分钟采集主观警觉性问卷，同步记录EEG、ECG、呼吸及键盘鼠标行为。
result: 数据集包含2小时/人的高分辨率生理、主观和行为数据，以及睡眠质量个体差异评估。
conclusion: SENSE-42为神经认知状态监测、行为分析和生理计算提供了标准化多模态基准数据集。
---

## 摘要
我们介绍了神经认知状态评估模拟环境（SENSE-42），这是一个在用户与台式计算机交互过程中收集的多模态数据集。该数据集旨在研究与计算机用户紧张警觉性相关的神经认知状态的自发波动，记录了42名参与者每次2小时的会话。在模拟桌面环境中，参与者执行了现实世界的日常任务，包括应用程序切换、文件管理、打字和网页浏览。高分辨率数据记录了生理（脑电图、心电图、呼吸）和主观警觉性模态。每隔五分钟，通过七个问题报告警觉状态，涉及嗜睡（卡罗林斯卡嗜睡量表）、心理和时间需求、感知表现、努力和挫折感（NASA任务负荷指数）以及注意力。行为数据包括键盘、鼠标和网络摄像头输入。收集了关于计算机使用经验、习惯和偏好的人口统计信息。此外，使用匹兹堡睡眠质量指数和埃普沃思嗜睡量表评估了睡眠质量的个体差异。SENSE-42数据集可为未来用户状态监测、行为分析和生理计算研究做出贡献。

## Abstract
We introduce the Simulated Environment for Neurocognitive State Evaluation (SENSE-42), a multimodal dataset collected during user interactions with desktop computers. It is designed for studying spontaneous fluctuations in the neurocognitive state related to the tonic alertness of computer users, with recordings from 42 participants over 2-hour sessions. Within a simulated desktop environment, participants performed real-world routine tasks, including application switching, file management, typing, and web browsing. High-resolution data were recorded across physiological (electroencephalography, electrocardiography, respiration) and subjective modalities of alertness. At five-minute intervals, alertness state was reported using seven questions, addressing sleepiness (Karolinska Sleepiness Scale), mental and temporal demand, perceived performance, effort and frustration (NASA Task Load Index), as well as attentiveness. Behavioural data included keyboard, mouse and webcam inputs. Demographic information for the experience, habits, and preferences of computer usage was collected. In addition, individual differences in sleep quality were evaluated using the Pittsburgh Sleep Quality Index and the Epworth Sleepiness Scale. The SENSE-42 dataset can contribute to future research in user state monitoring, behavioural analysis and physiological computing.
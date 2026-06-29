---
title: "VoxelPrompt: A Vision Agent for End-to-End Medical Image Analysis"
title_zh: VoxelPrompt：面向端到端医学图像分析的视觉智能体
authors: "Andrew Hoopes, Neel Dey, Victor Ion Butoi, John Guttag, Adrian V Dalca"
date: 2025-09-15
pdf: "https://openreview.net/pdf?id=DLqs8GnD96"
tags: ["query:fbn"]
score: 6.0
evidence: 端到端神经影像医学图像分析系统
tldr: 放射学分析常需组合多个专用工具，流程繁琐。本文提出VoxelPrompt，集成语言模型与可适应视觉网络，根据用户提示生成代码自动执行分割、测量等分析步骤。在多种神经影像任务上评估，VoxelPrompt能有效自动化定量流程，如肿瘤生长测量，展示了AI辅助诊疗的潜力。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-dlqs8gnd96/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1459, \"height\": 1372, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dlqs8gnd96/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1389, \"height\": 800, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dlqs8gnd96/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1453, \"height\": 1940, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dlqs8gnd96/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1428, \"height\": 820, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dlqs8gnd96/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 521, \"height\": 476, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dlqs8gnd96/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1452, \"height\": 308, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dlqs8gnd96/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1458, \"height\": 361, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-dlqs8gnd96/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1460, \"height\": 274, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-dlqs8gnd96/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1393, \"height\": 539, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dlqs8gnd96/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1438, \"height\": 777, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dlqs8gnd96/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1437, \"height\": 247, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dlqs8gnd96/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1225, \"height\": 462, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-dlqs8gnd96/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 889, \"height\": 222, \"label\": \"Table\"}]"
motivation: 放射科任务需手工组合多个专用工具，效率低且易错。
method: 结合语言模型生成代码调用联合训练的视觉网络，支持3D多模态输入。
result: 在神经影像任务上自动完成定量分析，如肿瘤生长测量。
conclusion: 端到端视觉智能体能显著简化临床图像分析流程。
---

## Abstract
We present VoxelPrompt, an end-to-end vision system that tackles composite radiological tasks. Given a user prompt, VoxelPrompt integrates a language model that generates executable code to invoke a novel, jointly-trained vision network. This adaptable network can integrate any number of volumetric (3D) inputs across heterogeneous real-world clinical modalities to segment and characterize diverse anatomy and pathology. Predicted code employs this network to carry out analytical steps to automate practical quantitative pipelines, such as measuring the growth of a tumor across visits, which often require practitioners to painstakingly combine multiple specialized but brittle tools. We evaluate VoxelPrompt using diverse neuroimaging tasks and show that it can delineate hundreds of anatomical and pathological features, measure complex morphological properties, and perform open-language analysis of lesion characteristics. VoxelPrompt performs these objectives with an accuracy similar to that of specialist single-task models for image analysis, while facilitating a broad range of biomedical workflows.

---

## 论文详细总结（自动生成）

# VoxelPrompt 论文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

放射科医师和科研人员经常需要回答复杂的、多步骤的临床问题，例如追踪一个特定病灶在多次随访中的生长情况、量化某解剖结构的细微不对称性，或整合来自多个序列的图像信息。当前工作流存在根本性障碍：现有专用工具对某一特定分割或分类任务表现良好，但数据假设严格，无法灵活适应个性化、边缘化的真实临床需求。用户被迫手动组合多个脆弱、任务特定的模型，并针对每次研究编写大量的后处理和指标提取代码。VoxelPrompt旨在解决这一“集成壁垒”，提供一个端到端的视觉系统，让用户通过自然语言描述复杂任务，系统自动生成并执行完整分析流水线，从而大幅降低AI在放射学实践中的采用门槛。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：联合训练一个语言模型和一个视觉网络，通过语言模型生成可执行的Python代码，调用视觉网络完成图像分析步骤，实现从自然语言提示到定量/定性输出的端到端流程。
- **关键组件**：
  - **语言模型 α**：基于LLaMA架构的16层Decoder-only Transformer，随机初始化。它将用户提示和输入图像的元数据（如采集日期）编码为状态序列，并迭代地生成代码指令。代码执行后的输出（打印的文本、图像嵌入等）被嵌入并反馈到下一轮状态中，直到预测到停止token。
  - **视觉网络 m**：U-Net风格的3D卷积网络，含6个层级。它能够根据语言模型生成的嵌入token φ 进行条件化，输出分割图或图像嵌入。关键创新点包括：
    - **原生几何处理**：输入图像保持原始空间分辨率和体素间距，不统一重采样到固定高分辨率，节省显存和计算。仅在网络内部通过注意力机制进行跨体积交互时，才将中间特征图重采样到共用的低分辨率网格。
    - **跨体积条件交互**：对于多输入（如多次扫描、多对比度），在每一卷积块后执行基于注意力的体素级特征交互。首先将特征重采样到共用网格，拼接条件嵌入 φ，经MLP后利用Transformer层计算跨体积注意力，最后重采样回原始几何。
  - **Python执行环境**：内置Voxel库（提供体积操作和形态学函数），语言模型生成的代码调用 `encode`、`segment` 等函数，执行后保留变量状态。
- **训练**：联合训练语言模型和视觉网络，损失函数为语言模型token预测的交叉熵损失与分割Dice损失的加权和。训练时每个样本包含一个任务模板、输入体积、目标代码和分割真值。通过模板和同义词组自动生成多样化的自然语言提示。
- **训练数据**：整合15个公开数据集，共6925例3D脑部MRI和CT扫描（4852训练，213验证，1860测试），涵盖185个双侧解剖结构和14类病理。病理标注来自BraTS、ISLES、ATLAS、WMH等以及自行标注的罕见案例。此外还使用条件合成方法在健康脑中生成多样化病变。

## 3. 实验设计

- **评估任务与数据集**：
  - **零样本病理分割**：在4个未见过的病理数据集上测试（BraTS-MEN脑膜瘤、PediMS多发性硬化病变、EPISURG切除术腔、BHSD出血），使用单个固定提示。
  - **全脑解剖分割**：在22-45个ROI上与SynthSeg、SAMSEG、SAT对比。
  - **纵向分析**：利用ADNI 100名受试者（阿尔茨海默病与对照组）两年间隔数据，测量海马萎缩和脑室扩张效应量。
  - **端到端定量分析**：构造后处理基线，对比体积、不对称性、宽度、CT密度等指标的绝对误差。
  - **消融实验**：多任务训练效能、原生分辨率效率、多输入交互机制、病变合成增益。
- **对比方法**：
  - 零样本分割：BiomedParse v2、SAT、MoME。
  - 解剖分割：SynthSeg v2、SAMSEG、SAT。
  - 纵向分析：FreeSurfer-longitudinal、SAMSEG-longitudinal、SynthSeg。
  - 端到端定量：自行封装的上述分割模型+后处理代码。
  - 病理表征：单任务分类器、RadFM（微调）。
- **公平性考虑**：对每个基线采用其最优的提示策略和预处理流程，报告最佳结果。消融实验控制变量一致。

## 4. 资源与算力

论文明确提到使用**1块NVIDIA A100 GPU**进行训练，batch size为1，梯度累积10步，初始学习率1e-4，采用Adam优化器。未说明训练总时长，但提到训练过程中若验证精度连续10^5步无提升则学习率减半，共进行4次学习率衰减后停止。由于训练集包含6925例3D体积，且模型为联合训练，推测训练时间可能需要数天至数周，但论文未明确给出具体天数。

## 5. 实验数量与充分性

- **实验组数**：论文包含大量实验，主要结果图（图3）涵盖零样本分割、解剖分割、纵向效应检测、端到端精度；图4展示多任务消融、效率对比、抗噪声鲁棒性；图5展示病变合成效果；附录D包含病理表征分类。总计至少在5类主要场景上进行了量化评估，每类包含多个子任务。
- **充分性**：实验覆盖了零样本泛化、多任务竞争力、计算效率、鲁棒性等关键方面。零样本测试涉及4个完全不同病理类型，解剖分割与多个SOTA对比，纵向分析使用效应量而非简单准确率，消融实验分别验证了多任务训练、原生分辨率、跨体积交互、合成数据等核心设计。但缺乏在更多模态（如PET、SPECT）上的评估，且所有实验局限于脑部，未推广到身体其他部位。
- **客观性与公平性**：对比方法均选择其最优配置，VoxelPrompt使用统一模板提示，未进行针对性调优。零样本分割中尝试了多种提示变体并选择最高Dice。但VoxelPrompt的训练数据中包含部分病理（如脑膜瘤经过训练），而其他方法可能完全未见过这些数据集，存在一定不公平。此外，与多任务模型的对比仅选取了17个ROI，未能覆盖全部185个结构。

## 6. 论文的主要结论与发现

1. **单一模型可完成多样化的放射学分析**：VoxelPrompt在零样本分割、解剖分割、纵向分析、定量测量和病理特征描述上均达到或超越专用模型性能。
2. **多任务训练能增强异常分割**：VoxelPrompt在病理分割上比单任务专家模型平均Dice提升4.3%，而解剖结构分割精度几乎持平（-0.1%）。
3. **原生分辨率处理显著提升效率**：相比统一重采样到1mm³各向同性，原生分辨率推理时间减少2倍，显存降低2.4倍，在5个输入体积场景下避免了90%的OOM错误。
4. **注意力跨体积交互更鲁棒**：在部分图像被严重损坏时，注意力机制Dice仅下降0.6%，而最大值/均值池化分别下降4.6%/5.4%。
5. **合成病变增强提升零样本泛化**：加入合成病变后，四个病理数据集的平均Dice提升27.7%。

## 7. 优点：方法或实验设计上的亮点

- **端到端流程自动化**：用户只需自然语言提示，系统自动生成代码、执行分析、输出结果，透明且可追溯。
- **模型联合训练**：语言模型和视觉网络从零开始联合训练，无需预训练大语言模型，实现轻量级部署。
- **原生几何处理**：不依赖固定分辨率，适应临床实际中不同设备、不同扫描参数，显著节省资源。
- **丰富的数据合成与增强策略**：利用病变合成和模板提示词替换生成大规模训练对，提升了泛化性和鲁棒性。
- **全面的评估体系**：覆盖零样本、多任务、纵向、定量、定性等多个维度，并包含多个消融实验验证设计选择。

## 8. 不足与局限

- **训练提示的局限性**：当前提示由模板生成，格式固定，对全新表述或任务的泛化能力有限，无法处理开放域指令。
- **领域局限**：仅针对脑部神经影像，未在胸部、腹部等其他放射学领域验证。
- **部分数据集较小**：部分罕见病变（如囊肿、乳头状瘤）训练样本极少，可能影响泛化。
- **计算资源报告不完整**：未提供训练总时长，缺乏与LLM基线的参数量和训练成本对比。
- **公平性瑕疵**：零样本实验中VoxelPrompt对脑膜瘤数据集有训练数据，而基线可能完全未见；端到端对比中基线为“自定义代码封装”，可能未采用最优后处理策略。
- **无法处理非模板化的复杂问答**：例如“为什么这个病灶会强化？”这类需要临床推理的问题当前无法支持。
- **未与最新VLM（如GPT-4V）进行定性对比**：虽说明大多数VLM限于2D和问答，但若有简单的文本分析对比会更好。

（完）

---
title: Online Iterative Self-Alignment for Radiology Report Generation
title_zh: 放射学报告生成的在线迭代自对齐方法
authors: "Ting Xiao, Lei Shi, Yang Zhang, HaoFeng Yang, Daisy Zhe Wang, Chenjia Bai"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.1348.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 将强化学习微调应用于医疗大模型的放射学报告生成
tldr: 针对放射学报告生成中高质量标注数据有限的问题，提出在线迭代自对齐方法，通过自生成数据、自评估偏好和自对齐三个阶段，利用强化学习减少过拟合风险，提升报告质量与泛化能力。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1348/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1475, \"height\": 801, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1348/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 799, \"height\": 283, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1348/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1656, \"height\": 518, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1348/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1639, \"height\": 631, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1348/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1652, \"height\": 631, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1348/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1655, \"height\": 560, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1348/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1655, \"height\": 430, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1348/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1638, \"height\": 136, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1348/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1158, \"height\": 225, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1348/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 906, \"height\": 617, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1348/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 939, \"height\": 376, \"label\": \"Table\"}]"
motivation: 现有放射学报告生成模型依赖监督微调，但高质量标注数据有限，导致过拟合和泛化问题。
method: 提出在线迭代自对齐方法，包括自生成多样化数据、自评估多目标偏好数据和自对齐三个阶段。
result: 在多个放射学报告数据集上，该方法在自动评估指标和人工评估中均优于现有方法。
conclusion: 在线迭代自对齐有效提升了放射学报告的准确性和多样性，降低了数据依赖。
---

## Abstract
Radiology Report Generation (RRG) is an important research topic for relieving radiologists’ heavy workload. Existing RRG models mainly rely on supervised fine-tuning (SFT) based on different model architectures using data pairs of radiological images and corresponding radiologist-annotated reports. Recent research has shifted focus to post-training improvements, aligning RRG model outputs with human preferences using reinforcement learning (RL). However, the limited data coverage of high-quality annotated data poses risks of overfitting and generalization. This paper proposes a novel Online Iterative Self-Alignment (OISA) method for RRG that consists of four stages: self-generation of diverse data, self-evaluation for multi-objective preference data, self-alignment for multi-objective optimization and self-iteration for further improvement. Our approach allows for generating varied reports tailored to specific clinical objectives, enhancing the overall performance of the RRG model iteratively. Unlike existing methods, our framework significantly increases data quality and optimizes performance through iterative multi-objective optimization. Experimental results demonstrate that our method surpasses previous approaches, achieving state-of-the-art performance across multiple evaluation metrics.

---

## 论文详细总结（自动生成）

# 论文总结：Online Iterative Self-Alignment for Radiology Report Generation

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：放射学报告生成（Radiology Report Generation, RRG）旨在自动生成放射影像的文字描述，以减轻放射科医生负担。现有主流方法依赖监督微调（SFT），使用放射科医生标注的图像-报告对进行训练。然而，高质量标注数据规模有限，导致模型易过拟合、泛化能力不足。最近的后训练方法（如基于强化学习的偏好对齐）虽能改善输出质量，但受限于固定数据集的覆盖范围，且部分方法依赖大型基础模型（如8B参数）来生成偏好数据，成本高昂。
- **核心挑战**：如何让轻量级RRG模型摆脱固定数据集限制，通过自身生成的数据实现持续自我提升？作者提出的 **在线迭代自对齐（Online Iterative Self-Alignment, OISA）** 方法，让模型在无外部数据介入的情况下，通过自生成、自评估、自对齐和自迭代四个阶段，不断扩展数据覆盖、优化多目标偏好对齐，从而提升报告质量。

## 2. 方法论：核心思想与关键技术
### 总体框架
OISA包含两个模块（偏好数据构建PDC、多目标对齐MOA）和四个步骤，形成迭代闭环：
```
π_ref → [自生成 → 自评估 → 自对齐] → π_θw → 更新π_ref → 下一轮迭代
```

### 关键技术细节
1. **自生成（Self-Generation）**：  
   - 初始模型π_ref（即SFT模型PromptMRG）接收图像x，并辅以一个**one-hot权重向量ŵ**作为条件输入（ŵ中仅第k维为1，其余为0），生成偏向第k个目标的报告。通过改变ŵ，产生覆盖不同目标（如流畅性、临床准确性）的多样化报告集。
   - 对生成报告进行去重：先按患者级别保留BERTScore最高的报告，再按疾病标签分组，进一步去除相似度高的报告，得到候选报告集Y。

2. **自评估（Self-Evaluation）**：  
   - 对每个偏好维度k，使用对应的自动评估指标Mk（如RadCliQ、RadGraphF1、GREEN）对候选报告打分。
   - 采用分层抽样策略：按疾病组内排序，根据指标得分选择Top Kc作为**被选中回应**（chosen），并从剩余报告中随机选择作为**被拒绝回应**（rejected），构建偏好对。最终得到多目标偏好数据集 D = [D1, D2, …, DN]。

3. **自对齐（Self-Alignment）**：  
   - 采用**多目标直接偏好优化（Multi-Objective Direct Preference Optimization, MODPO）** 算法。MODPO扩展了DPO，通过引入权重向量w（可灵活调整各目标重要性）同时对齐多个偏好。
   - 训练过程：先为每个偏好维度k通过DPO训练边际奖励模型R_k，然后使用MODPO损失函数依次优化政策模型π_θw：
     \[
     L_{MODPO} = -\mathbb{E}_{D_k} \left[ \log \sigma\left( \beta w_k \log \frac{\pi_{\theta_w}(y_w|x,w)}{\pi_{sft}(y_w|x,w)} - \beta w_k \log \frac{\pi_{\theta_w}(y_l|x,w)}{\pi_{sft}(y_l|x,w)} - \frac{1}{w_k} w_{-k}^\top (R_{-k}(x,y_w) - R_{-k}(x,y_l)) \right) \right]
     \]
     其中w_k为第k个目标的权重，R_{-k}为除第k个外的其他边际奖励。

4. **自迭代（Self-Iteration）**：  
   - 将更新后的政策模型π_θw设为新的参考模型π_ref，重复上述步骤。每轮迭代中，模型自身生成质量更高的偏好数据，并进一步优化多目标对齐，实现持续改进。

### 理论分析
基于线性奖励假设（r_θ(x,y)=θ^T φ(x,y)），作者证明迭代MODPO的次优性差距受限于数据覆盖程度，而迭代过程通过收集新策略生成的高质量数据，能不断收紧界限，保证理论上的改进。

## 3. 实验设计
### 数据集
- **MIMIC-CXR**：最大公共胸部X光数据集，含337,110张图像和227,835份报告。按7:1:2划分训练/验证/测试集。
- **IU-Xray**：含7,470张胸部X光图像和3,955份报告。遵循PromptMRG设置，在全集上测试。

### 评估指标
- **NLG指标**：BLEU1、BLEU4、BERTScore（越高越好）。
- **放射学指标**：RadGraphF1、CheXbertF1、GREEN（越高越好）；RadCliQ（越低越好）。

### 对比方法
- **传统RRG方法**：R2Gen、CMN、CMN+RL、PromptMRG（基线）、MPO。
- **VLM方法**：CheXagent（8B）、MedVersa（7B）、MiniGPT-Med（7B）。

### 实验设置
- 基线模型：PromptMRG（约220M参数）。
- 三轮迭代，每轮60个epoch。
- 偏好数据集：三个目标（RadCliQ、RadGraphF1、GREEN），每个目标10,000对。
- 权重空间：{0.2, 0.4, 0.6, 0.8, 1.0}，β=0.5。

## 4. 资源与算力
- **硬件**：单张NVIDIA RTX 4090 GPU（24GB显存）。
- **训练时间**：每epoch约15分钟（偏好数据训练），每轮60 epoch，三轮共约45小时。SFT阶段每epoch约62.39分钟（数据量227K），但OISA偏好数据仅10K，算力消耗远小于SFT。
- **模型参数**：OISA模型约230.1M（略大于基线的219.9M）。
- **推理时间**：约0.905秒/报告（与PromptMRG的0.874秒接近，远快于VLM方法如MedVersa的5.11秒）。

**注**：论文未明确给出总GPU小时数，但根据信息可估算约为45小时。

## 5. 实验数量与充分性
- **实验覆盖**：在两个数据集（MIMIC-CXR、IU-Xray）上评估，报告了三个迭代轮次、四种权重配置的完整结果（表1、表2）。
- **对比充分性**：与6种传统方法、3种VLM方法对比，涵盖了不同规模和设计范式。
- **消融分析**：通过迭代轮次的对比（图2、图3）验证了自迭代的有效性；超参数β分析（表5）展示了鲁棒性。
- **多目标可视化**：图3展示了多目标帕累托前沿随迭代向右上移动，证明模型实现了多目标权衡优化。
- **理论保障**：提供了线性奖励假设下的次优性界限证明。

整体实验设计客观、公平，对比方法均采用原始论文参数或官方代码，测试集划分对齐。实验数量充分，结论可靠。

## 6. 主要结论与发现
- OISA方法在所有评估指标上显著超过基线PromptMRG，并随迭代次数增加持续提升。
- 在MIMIC-CXR上，第三轮迭代取得最佳结果：RadGraphF1 0.273、GREEN 0.341、RadCliQ 2.54，超越所有对比方法（包括8B参数的VLM模型）。
- 多目标对齐能力：通过调整权重向量w，模型能灵活偏向特定目标（如临床准确性），且在均匀权重下达到综合最优。
- 偏好数据质量迭代提升：图2显示，随着迭代，chosen报告在三个放射学指标上的分布均向更优方向移动。

## 7. 优点
- **创新性**：首次将**在线迭代自对齐**应用于RRG，让轻量级模型自行生成并改进偏好数据，突破了固定数据集限制。
- **多目标优化**：采用MODPO算法，支持灵活调整不同临床目标的偏好权重，产生帕累托最优的折中方案，适应多样化临床需求。
- **理论支撑**：在线迭代过程有严格的次优性界限分析，证明了数据覆盖的改善如何提升对齐效果。
- **高效性**：仅需单张消费级GPU（RTX 4090），模型规模仅230M，远小于VLM方法（如7B/8B），但取得了可比或更优的性能，实用性强。
- **实验严谨**：在双数据集、多轮迭代、多目标权重下进行了全面评估，可视化清晰说明迭代增益。

## 8. 不足与局限
- **模型架构单一**：实验仅基于PromptMRG一个轻量级RRG模型，未验证方法在其他架构（如不同编码器-解码器、不同大小模型）上的泛化性。
- **偏好指标依赖自动评估**：使用现有自动指标（RadCliQ、RadGraphF1、GREEN）代表人类偏好，但这些指标未必完全匹配真实放射科医生的评估标准，存在**偏差风险**。作者也承认未来需要定义更细粒度的临床相关指标。
- **计算约束**：尽管资源需求较低，但三轮迭代仍需约45小时训练时间，对于超大规模模型或更多轮次，计算成本可能上升。未探索收敛性（如是否需要更多轮次）。
- **临床应用限制**：模型生成报告的安全性、事实错误率等未经过人机工效学或医生盲评验证。自动指标提升是否转化为临床有效改善仍需进一步研究。
- **未考虑多语言/多模态**：仅针对英文胸部X光报告，未扩展到其他语言或图像模态。

（完）

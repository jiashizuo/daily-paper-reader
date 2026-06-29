---
title: "FCN-LLM: Empower LLM for Brain Functional Connectivity Network Understanding via Graph-level Multi-task Instruction Tuning"
title_zh: FCN-LLM：通过图级多任务指令微调赋能大语言模型理解脑功能连接网络
authors: "Xingcan Hu, Wei Wang, Li Xiao"
date: 2025-09-19
pdf: "https://openreview.net/pdf?id=lytfpSh21t"
tags: ["query:fbn"]
score: 9.0
evidence: 利用大语言模型理解rs-fMRI脑功能连接网络
tldr: 现有方法未对齐fMRI功能连接与文本，限制LLM理解脑网络。FCN-LLM通过多尺度FCN编码器和图级多任务指令微调，使LLM能直接理解功能连接。在临床任务上表现优异，实现脑网络理解的文本对齐，为可解释诊断和报告生成奠定基础。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/openreview/openreview-iclr-2026-lytfpsh21t/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1115, \"height\": 746, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-lytfpsh21t/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1444, \"height\": 485, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-lytfpsh21t/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1235, \"height\": 438, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-lytfpsh21t/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1428, \"height\": 1103, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-lytfpsh21t/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1577, \"height\": 1074, \"label\": \"Figure\"}, {\"url\": \"assets/figures/openreview/openreview-iclr-2026-lytfpsh21t/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1448, \"height\": 1060, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1441, \"height\": 441, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1447, \"height\": 475, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1235, \"height\": 484, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 487, \"height\": 197, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 545, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1110, \"height\": 296, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 576, \"height\": 216, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 707, \"height\": 291, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1371, \"height\": 1196, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1319, \"height\": 499, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 938, \"height\": 587, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 795, \"height\": 362, \"label\": \"Table\"}, {\"url\": \"assets/tables/openreview/openreview-iclr-2026-lytfpsh21t/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1441, \"height\": 241, \"label\": \"Table\"}]"
motivation: 现有方法无法直接对齐功能连接与文本，限制LLM在脑网络理解中的应用。
method: 提出多尺度FCN编码器结合图级多任务指令微调，使LLM理解功能连接。
result: 在临床任务上超越现有方法，实现文本对齐的可解释预测。
conclusion: 为LLM在脑连接组分析和疾病诊断中的应用提供新范式。
---

## Abstract
Large Language Models (LLMs) have achieved remarkable success in language understanding and reasoning, and their multimodal extensions enable comprehension of images, video, and audio. Inspired by this, foundation models for brain functional connectivity networks (FCNs) derived from resting-state fMRI have shown promise in clinical tasks. However, existing methods do not align FCNs with the text modality, limiting the ability of LLMs to directly understand FCNs. To address this, we propose FCN-LLM, a framework that enables LLMs to understand FCNs through graph-level, multi-task instruction tuning. Our approach employs a multi-scale FCN encoder capturing brain-region, functional subnetwork, and whole-brain features, projecting them into the LLM’s semantic space. We design multi-paradigm instruction tasks covering 19 subject-specific attributes across demographics, phenotypes, and psychiatric conditions. A multi-stage learning strategy first aligns FCN embeddings with the LLM and then jointly fine-tunes the entire model to capture high-level semantic information. Experiments on a large-scale, multi-site FCN database show that FCN-LLM achieves strong zero-shot generalization on unseen datasets, outperforming conventional supervised and foundation models. This work introduces a new paradigm for integrating brain functional networks with LLMs, offering a flexible and interpretable framework for neuroscience.

---

## 论文详细总结（自动生成）

# 论文结构化总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：大型语言模型（LLM）在语言理解和推理上表现优异，其多模态扩展（如图像、视频、音频）也已取得显著成功。然而，脑功能连接网络（FCN）作为从静息态fMRI中提取的关键神经成像数据，尚未与文本模态对齐，导致LLM无法直接理解FCN中包含的丰富脑活动信息。现有FCN基础模型仍依赖任务特定微调或独立分类器，未能实现真正的零样本泛化，也无法利用LLM语义空间进行跨模态知识迁移。
- **整体含义**：本文提出FCN-LLM框架，首次将FCN与文本模态对齐，使LLM能够直接理解FCN，并用于人口学、表型、精神疾病等多种属性预测，开创了脑网络与LLM整合的新范式，提升可解释性和灵活性。

## 2. 方法论

- **核心思想**：通过多尺度FCN编码器提取脑区域、功能子网络和全脑三个层次的特征，经MLP投影到LLM的语义空间；设计多范式指令调优任务（预测、判断、比较），涵盖19个主体属性；采用两阶段学习策略（先对齐FCN嵌入与LLM空间，再联合微调整个模型以捕获高层语义）。
- **多尺度FCN编码器**：
  - **脑区域级**：将FCN矩阵的行视为ROI级特征向量（维度D=116）。
  - **功能子网络级**：根据Yeo等划分的7个功能子网络，对每个子网络内ROI特征取平均得到子网络级特征向量（N=7）。
  - **全脑级**：对FCN矩阵取绝对值并阈值化得到邻接矩阵，用两层GCN（图卷积网络）平滑后经平均池化得到全脑级特征向量。
  - **融合**：将三者拼接为统一特征向量，通过MLP映射到LLM输入空间，生成124个FCN token（116+7+1）。
- **多范式指令调优任务**：
  - **预测范式**：根据FCN直接预测属性值（如年龄、性别、疾病诊断等）。
  - **判断范式**：判断给定候选答案是否与FCN一致（二分类）。
  - **比较范式**：对两个主体的FCN进行比较，判断属性匹配或数值高低，引入对比学习思想。
- **两阶段学习**：
  - **阶段I（预训练）**：冻结LLM，仅训练多尺度FCN编码器，使用滑动窗口（窗口长度100，步长20）生成约230万增强指令调优对，对齐FCN与文本空间。
  - **阶段II（微调）**：联合微调解码器和LLM，使用原始FCN的高质量数据（约42.6万对），提升高层语义理解；为防止过拟合，仅训练1个epoch。

## 3. 实验设计

- **数据集与场景**：
  - 使用10个多站点公开rs-fMRI数据集：HBN、HCP、QTIM、GSP、ABIDE、ADHD、MDD、SRPBS（前8个用于训练/内部测试，80/20拆；后两个ABIDE II和CNP用于零样本测试）。
  - 共19个属性：人口学（性别、年龄、惯用手）、临床诊断（9种精神疾病合并为6类）、认知功能（FIQ、VIQ、PIQ）、表型（12种HCP表型指标）。
- **Benchmark与对比方法**：
  - 监督模型：GCN、HGCN、BrainNetCNN、BrainGNN、Transformer、BNT（Brain Network Transformer）。
  - 基础模型：BrainNPT、PTGB、CINP、BrainMass。
  - 评估指标：分类任务用ACC、MCC、F1；回归任务用MAE和PCC。
- **具体设置**：AAL图谱（116 ROI），Yeo 7子网络，2层GCN（隐藏层256维，输出116维，阈值为0.5），LLM采用Qwen2.5-3B和7B。

## 4. 资源与算力

- **文中明确说明**：
  - 使用8块A100 GPU（每块40GB显存）。
  - DeepSpeed ZeRO2训练。
  - BF16和TF32混合精度。
  - 阶段I训练1个epoch，阶段II训练1个epoch（以防止过拟合）。
  - 具体训练时长未在文本中提及。但标注了总样本量：阶段I约230万对，阶段II约42.6万对。

## 5. 实验数量与充分性

- **实验组数**：
  - 内部测试集上对比了11种方法（6种监督+4种基础模型+FCN-LLM两种规模）。
  - 零样本测试集上对比了2种最佳监督模型+4种基础模型+2种FCN-LLM。
  - 消融实验：
    - 不同微调epoch的影响（图3a）。
    - 多尺度特征组合的贡献（图3b）：ROI、子网络、全脑三层次组合。
    - 比较范式任务的消融（表9）。
    - 可视化注意力图分析脑疾病生物标志物（图4）。
- **充分性评估**：
  - 覆盖了多种任务（分类、回归）、多种数据集（域内和域外零样本），对比基线全面（包括最近的基础模型）。
  - 消融实验验证了各组件有效性，且展示了过拟合现象（图3a）并调整了超参数。
  - **不足**：仅在一个LLM家族（Qwen2.5）上实验，未测试其他LLM（如LLaMA、GPT等）；零样本测试仅两个数据集；未报告多次运行的标准差或统计显著性检验。但整体设计公平，超参数调优一致（监督模型使用网格搜索，基础模型使用线性探测或SVM）。

## 6. 主要结论与发现

- FCN-LLM在内部测试集上优于所有非监督方法（包括基础模型），并在认知功能预测的MAE和表型预测的PCC上甚至超过了最佳监督模型BNT。
- 在零样本测试集（ABIDE II和CNP）上，FCN-LLM大幅超越所有对比方法（包括监督模型和基础模型），ACC提升约20个百分点（例如ABIDE II上ACC达53%+ vs 35%+），证明了强大的泛化能力。
- 多尺度特征编码有效：子网络特征对疾病分类更重要，全脑特征对性别分类更重要。
- 比较范式任务贡献显著：疾病分类ACC提升2.25%。
- 两阶段学习中第二阶段微调需谨慎，过多epoch会导致过拟合（零样本性能下降）。
- 可通过可视化注意力图识别不同精神疾病（ADHD、MDD、ASD）的异常子网络连接模式，提供可解释性。

## 7. 优点

- **方法创新**：首次将FCN与LLM文本空间对齐，引入图级多任务指令调优，尤其是比较范式将对比学习自然地融入LLM，避免结构特定设计。
- **通用性与可解释性**：支持任意文本查询，提示灵活；通过注意力图提供脑区生物标志物可视化，有临床潜力。
- **零样本能力**：利用LLM语义空间和灵活的prompt设计，对未见数据集直接推理，且可通过调整候选标签适应不同分类设定。
- **实验设计公平**：对比了多种监督和基础模型，消融实验充分，数据集多站点覆盖广泛。
- **开源承诺**：代码将在论文接收后公开。

## 8. 不足与局限

- **实验局限**：
  - 仅使用Qwen2.5系列LLM，未验证其他LLM的泛化性。
  - 零样本测试仅两个数据集，且CNP样本较少（261例），泛化结论的稳健性有待更多数据集验证。
  - 内部测试集和零样本测试集的数据分布差异可能较大（如ABIDE II仅含HC和ASD两类），需更多异质场景。
  - 未报告多次实验的均值和标准差，结果可能存在波动性。
- **方法局限**：
  - 阶段II微调容易过拟合（需要限制epoch=1），说明模型对高质量数据规模敏感，训练策略仍需优化。
  - 多尺度编码器依赖先验子网络划分（Yeo 7网络），可能不适用于其他图谱或个体差异。
  - 仅基于静态FCN（Pearson相关性），未考虑动态连接或高阶交互。
  - MLP投影方式较为简单，未来可探索Q-Former等更精细的对齐模块。
- **应用限制**：
  - 当前仅处理rs-fMRI的FCN，未扩展到任务态fMRI、结构MRI或其他神经成像模态。
  - 模型规模较大（3B/7B参数），在实际临床场景的部署和推理成本较高。
  - 可解释性可视化仍需临床专家验证。

（完）

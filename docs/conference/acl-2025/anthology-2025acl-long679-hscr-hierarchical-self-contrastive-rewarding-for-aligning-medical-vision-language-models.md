---
title: "HSCR: Hierarchical Self-Contrastive Rewarding for Aligning Medical Vision Language Models"
title_zh: HSCR：分层自我对比奖励用于对齐医疗视觉语言模型
authors: "Songtao Jiang, Yan Zhang, Yeying Jin, Zhihang Tang, Yangyang Wu, Yang Feng, Jian Wu, Zuozhu Liu"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.679.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 医疗视觉语言模型对齐，使用分层自我对比奖励
tldr: 现有医疗视觉语言模型(Med-VLM)存在模态不对齐问题，导致不可靠的临床响应。本文提出分层自我对比奖励(HSCR)，利用Med-VLM自身能力以高采样概率生成不偏好响应，并通过分析视觉token丢弃后的logit偏移识别模态耦合token。该方法无需外部标注，生成高质量偏好数据并捕获上下文感知偏好，有效提升Med-VLM对齐效果。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.679/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 800, \"height\": 472, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.679/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1647, \"height\": 640, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.679/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1670, \"height\": 429, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.679/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1648, \"height\": 360, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.679/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1638, \"height\": 587, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.679/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1658, \"height\": 391, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.679/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 800, \"height\": 440, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.679/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1655, \"height\": 1161, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.679/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1645, \"height\": 707, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.679/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1664, \"height\": 431, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.679/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1643, \"height\": 228, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.679/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1653, \"height\": 283, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.679/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1655, \"height\": 341, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.679/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1656, \"height\": 364, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.679/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 894, \"height\": 703, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.679/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1678, \"height\": 223, \"label\": \"Table\"}]"
motivation: 医疗视觉语言模型存在模态不对齐问题，影响临床可信度，需低成本生成偏好数据并捕获细微偏好。
method: 利用模型自身高概率采样生成不偏好响应，通过视觉token dropout的logit偏移识别模态耦合token，构建分层对比奖励。
result: 在多个Med-VLM任务上有效提升对齐效果，减少模态不对齐导致的错误。
conclusion: HSCR提供了一种经济高效的方法来对齐Med-VLM，无需人工标注，且能捕获上下文感知偏好。
---

## Abstract
Medical Vision-Language Models (Med-VLMs) have achieved success across various tasks, yet most existing methods overlook the modality misalignment issue that can lead to untrustworthy responses in clinical settings. In this paper, we propose Hierarchical Self-Contrastive Rewarding (HSCR), a novel approach that addresses two critical challenges in Med-VLM alignment: 1) Cost-effective generation of high-quality preference data; 2) Capturing nuanced and context-aware preferences for improved alignment. HSCR first leverages the inherent capability of Med-VLMs to generate dispreferred responses with higher sampling probability. By analyzing output logit shifts after visual token dropout, we identify modality-coupled tokens that induce misalignment and derive an implicit alignment reward function. This function guides token replacement with hallucinated ones during decoding, producing high-quality dispreferred data. Furthermore, HSCR introduces a multi-level preference optimization strategy, which extends beyond traditional adjacent-level optimization by incorporating nuanced implicit preferences, leveraging relative quality in dispreferred data to capture subtle alignment cues for more precise and context-aware optimization. Extensive experiments across multiple medical tasks, including Med-VQA, medical image captioning and instruction following, demonstrate that HSCR not only enhances zero-shot performance but also significantly improves modality alignment and trustworthiness with just 2,000 training entries. Code is released on https://github.com/jiangsongtao/HSCR.

---

## 论文详细总结（自动生成）

好的，以下是根据您提供的论文内容生成的详细中文总结。

---

### 论文详细总结

#### 1. 论文的核心问题与整体含义
- **核心问题**：医疗视觉语言模型（Med-VLMs）在多种任务中表现优异，但普遍存在模态不对齐问题——模型倾向于依赖文本先验而非真实视觉信息，导致幻觉和不可信的临床响应。此外，现有偏好优化方法在医疗领域面临两大挑战：① 高质量偏好数据生成成本高，且外部模型（如GPT-4o）生成的偏好数据采样概率低，优化信号弱；② 相邻级别（正确 vs 错误）的偏好差距过大，模型容易饱和，无法学习细微的上下文感知偏好。
- **整体含义**：本文提出分层自我对比奖励（HSCR），一种新颖的、无需外部标注的偏好优化框架，旨在同时解决上述两个挑战。通过利用Med-VLM自身的生成行为暴露模态不对齐，并设计多级偏好优化，显著提升模型的对齐质量和可信度，为低成本、可拓展的医疗AI系统奠定了基础。

#### 2. 论文提出的方法论
- **核心思想**：HSCR包含三个步骤：**令牌级自我对比奖励数据生成**、**相似性感知偏好重排序**、以及**分层多级偏好优化**。
- **关键技术细节**：
  - **令牌级自我对比奖励**：对视觉令牌进行70%的丢弃（Visual Token Dropout），计算原始视觉输入与丢弃后输入的对数概率差异，定位“模态耦合令牌”（即对视觉信息高度敏感、易导致幻觉的令牌）。通过对比解码，将这些令牌替换为低关联的“幻觉令牌”，生成一组不同错误程度的非偏好响应。
  - **相似性感知重排序**：计算每个非偏好响应与偏好响应（真实标签）的语义相似度，按降序重排序，并保证相邻响应间相似度差异至少0.1，从而构建质量等级明确的偏好列表。
  - **分层多级偏好优化**：
    - **显式偏好学习**：让模型在偏好响应与每个非偏好响应之间做区分（传统DPO式）。
    - **隐式偏好学习**：让模型在所有非偏好响应之间也进行排序，捕捉不同错误程度之间的细微差异。
    - 总损失函数为显式损失与隐式损失之和。
- **公式/算法流程**（以文字说明）：
  - 显式损失：对于每个非偏好响应 \(y_{lj}\)，计算 \(\log\sigma(\gamma\log\frac{\pi_\theta(y_w|x)}{\pi_{sft}(y_w|x)} - \gamma\log\frac{\pi_\theta(y_{lj}|x)}{\pi_{sft}(y_{lj}|x)})\)。
  - 隐式损失：对于每对非偏好响应 \((y_{lj}, y_{lm})\)，计算类似形式的损失，鼓励模型优先选择质量更高的非偏好响应。
  - 总损失 = 显式损失之和 + 隐式损失之和。

#### 3. 实验设计
- **数据集/场景**：
  - **Med-VQA**：Rad-VQA、SLAKE、PathVQA（包含开放式和封闭式问题）。
  - **图像描述与指令跟随**：LLaVA-Med评估数据集（PMC-15M派生，涵盖放射、MRI、组织学、大体、CT五种模态）。
  - **通用多模态**：AMBER基准（CHAIR、Object Coverage、Hallucination Rate、Cognition指标）。
- **Benchmark**：零样本设置下，比较准确率（封闭式）/召回率（开放式）或GPT-4评分（描述任务）。
- **对比方法**：
  - 通用VLM：LLaVA1.5、SQ-LLaVA、ST-LLaVA、VCD、LiPO。
  - 医疗专用VLM：LLaVA-Med1.5、Med-Flamingo、PMC-VQA。
  - 其他：GPT-4o作为参考（非开源）。
  - 消融实验对比了GPT-4o偏好数据生成、不同掩码策略、不同掩码比例、显式/隐式偏好成分等。

#### 4. 资源与算力
- **明确说明**：
  - GPU：8 × NVIDIA 3090-24GB。
  - 训练轮次：2 epochs。
  - 批次大小：每个GPU 2，总批次16。
  - 精度：Bf16。
  - 学习率：5e-7，无权重衰减。
  - 训练数据：仅2000条条目（从指令微调阶段采样）。
- **未明确**：总训练时长（小时数）未提及。

#### 5. 实验数量与充分性
- **实验组数**：包含主表（表1-2）、消融实验（表3-6）、通用多模态实验（表8）、附加分析（图3-7），共约7-8组不同角度实验。
- **充分性评价**：
  - 覆盖了三个主要医疗VQA数据集、五种模态的描述任务、以及通用多模态基准。
  - 消融实验全面：对比了不同数据生成源（GPT-4o vs HSCR）、是否使用隐式/显式偏好、不同掩码策略（像素/补丁/潜空间/视觉令牌丢弃）、不同掩码比例（0.3-0.9）。
  - 还分析了表征分布、注意力图等定性结果。
  - **公平性**：与多个SOTA方法在同一设置下比较，且使用相同基座模型（LLaVA-Med1.5）确保公平。但未与后续其他医疗偏好优化方法（如MMedPO）直接比较，可能是时间原因。
- **结论**：实验设计较为充分，客观性强，提供了多维度的证据支持方法有效性。

#### 6. 论文的主要结论与发现
- HSCR在零样本Med-VQA任务上达到开源SOTA，在Rad-VQA、SLAKE、PathVQA上均显著优于LLaVA-Med1.5（最高提升6.97%）。
- 仅用2000条训练数据，在描述和指令跟随任务上同样取得一致性提升（如Rad-VQA描述任务提升10.4%）。
- 隐式偏好学习比显式偏好学习提供更丰富的梯度信号（提升更大），两者结合效果最佳。
- 视觉令牌丢弃是最有效的掩码策略，因其直接破坏进入LLM的视觉信息，更易暴露模态不对齐。
- HSCR有效缩小了文本与图像表示之间的模态差距（可视化证实），增强了模型对视觉信息的关注（注意力图分析）。
- 方法在通用多模态任务（AMBER）上也优于DPO，表明其泛化能力。

#### 7. 优点
- **成本低**：无需外部MLLM或人工标注，完全利用模型自身行为生成偏好数据，仅需2000条目。
- **数据质量高**：生成的偏好数据具有高采样概率，优化信号强。
- **多级优化**：首次引入隐式偏好学习，在非偏好响应间捕捉细微排名信号，优于传统二元/相邻级优化。
- **鲁棒性强**：对掩码比例不敏感（0.5-0.9均有效），且在多种医疗模态和通用任务上表现一致。
- **可解释性**：通过注意力图谱和表示分布可视化，直观展示了对齐改善。

#### 8. 不足与局限
- **数据稀缺**：医疗高质量配对数据仍然有限，模型对罕见疾病或复杂场景的泛化能力未充分验证。
- **验证范围**：实验主要在公开基准上，缺乏与真实临床工作流的整合验证，实际可靠性需要进一步评估。
- **计算资源**：虽训练数据少，但8卡3090的硬件需求可能对部分研究组仍有门槛。
- **未与其他近期医疗偏好优化方法（如MMedPO、ST-LLaVA）详细对比**（可能因时间线），需要后续补充。
- **掩码策略中的“视觉令牌丢弃”需在推理时额外前向一次**，带来微小计算开销。

（完）

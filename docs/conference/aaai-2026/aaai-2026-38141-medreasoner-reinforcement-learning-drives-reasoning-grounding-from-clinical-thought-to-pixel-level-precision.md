---
title: "MedReasoner: Reinforcement Learning Drives Reasoning Grounding from Clinical Thought to Pixel-Level Precision"
title_zh: MedReasoner：强化学习驱动从临床推理到像素级精准定位
authors: "Zhonghao Yan, Muxi Diao, Yuxuan Yang, Ruoyan Jing, Jiayuan  Xu, Kaizhou Zhang, Lele Yang, Yanxi Liu, Kongming Liang, Zhanyu Ma"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38141/42103"
tags: ["query:mlr"]
score: 9.0
evidence: 强化学习用于医学视觉语言推理定位
tldr: 针对多模态大语言模型在医学影像定位中依赖显式空间提示、无法处理隐式临床查询的问题，提出MedReasoner框架，定义统一医学推理定位任务，构建含像素级掩码和隐式查询的基准数据集，并利用强化学习驱动从临床推理到像素级精度的定位能力。实验证明该方法在隐式查询场景下显著优于现有微调方法。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有医学影像定位管线依赖显式空间提示，无法应对临床隐式查询。
method: 定义UMRG任务，构建U-MRG-14K数据集，并采用强化学习优化推理定位。
result: 在隐式查询任务上达到新高度，显著超越监督微调基线。
conclusion: 强化学习能有效将临床推理融入医学视觉定位，提升鲁棒性和灵活性。
---

## Abstract
Accurately grounding regions of interest (ROIs) is critical for diagnosis and treatment planning in medical imaging. While multimodal large language models (MLLMs) combine visual perception with natural language, current medical-grounding pipelines still rely on supervised fine-tuning with explicit spatial hints, making them ill-equipped to handle the implicit queries common in clinical practice. This work makes three core contributions. We first define Unified Medical Reasoning Grounding (UMRG), a novel vision–language task that demands clinical reasoning and pixel-level grounding. Second, we release U-MRG-14K, a dataset of 14K samples featuring pixel-level masks alongside implicit clinical queries and reasoning traces, spanning 10 modalities, 15 super-categories, and 108 specific categories. Finally, we introduce MedReasoner, a modular framework that distinctly separates reasoning from segmentation: an MLLM reasoner is optimized with reinforcement learning, while a frozen segmentation expert converts spatial prompts into masks, with alignment achieved through format and accuracy rewards. MedReasoner achieves state-of-the-art performance on U-MRG-14K and demonstrates strong generalization to unseen clinical queries, underscoring the significant promise of reinforcement learning for interpretable medical grounding.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：现有医学影像定位管线严重依赖显式空间提示（如边界框、点），而临床实践中医生常使用隐式查询（例如“从不规则阴影中能推断出什么？”）。多模态大语言模型（MLLMs）虽然具备视觉-语言交互能力，但输出停留在图像级，无法直接实现精确的像素级定位。
- **背景**：已有医学视觉问答（VQA）数据集只提供图像级语义标签；大规模分割数据集提供像素级掩码但缺少语言注释；二者均不包含隐式查询。因此需要一种新任务，要求模型从隐式临床描述推理出目标区域并进行精确定位。
- **研究意义**：解决临床推理与空间定位的鸿沟，提升医学影像诊断的自动化与可解释性，推动MLLMs从“理解”走向“精准定位”。

## 2. 方法论
### 核心思想
- 提出**Unified Medical Reasoning Grounding (UMRG)** 任务：给定医学图像与隐式临床查询，模型需输出推理链、边界框（B）、两个关键点（P1, P2）以及像素级分割掩码（M）。
- 提出**MedReasoner**框架：将语言推理与像素分割完全解耦，分为：
  - **Clinical Reasoning Module (CRM)**：基于MLLM（默认Lingshu-7B），通过强化学习（GRPO）训练，输出结构化的`<think>…</think><answer> bbox, points </answer>`。
  - **Anatomical Segmentation Module (ASM)**：使用冻结的MedSAM2，将CRM输出的空间提示（边界框+两个关键点）转换为高分辨率掩码。
### 关键技术细节
- **奖励函数**（驱动RL训练）：
  - **格式奖励**：检查`<think>`与`<answer>`的结构有效性。
  - **精度奖励**：
    - 边界框：IoU、对齐误差（L1）、尺度一致性（面积与纵横比的log差异）
    - 关键点：pDice（基于点对构成圆的Dice）、对齐误差、角度一致性（余弦相似度）
  - **平滑与惩罚**：对IoU/pDice/Rangle用对数平滑，对齐/尺度用指数平滑，并根据空间合理性（有效性分数）进行软加权降权。
- **训练算法**：GRPO在保持参考策略的同时优化CRM，避免监督微调中的“短语过拟合”和高昂标注成本。

## 3. 实验设计
- **数据集**：**U-MRG-14K**（自建），14K样本，10种模态，15个超类，108个细分类。包含隐式查询、CoT推理轨迹、像素级掩码。测试集随机分出2.5K样本。
- **对比方法**：
  - 通用MLLMs：GPT-4o、Gemini-2.5-flash、Qwen2.5VL-7B/72B、InternVL3-8B/78B
  - 医学专用MLLMs：MedR1-2B、MiniInternVL-4B、MedGamma-4B、HuatuoGPT-7B、Lingshu-7B、Chiron-o1-8B
  - 定位专用MLLMs：VLMR1-REC-3B、SegZero-7B、SAM4MLLM-8B
- **评估范式**：所有方法均作为CRM，将输出传给固定ASM（MedSAM2），统一比较边界框IoU、关键点pDice、最终掩码Dice。
- **消融实验**：奖励类型（Base/Hard/Soft）、分割骨干（MedSAM/SAM-Med2D/MedSAM2）、推理策略（Direct vs Reasoning）。

## 4. 资源与算力
- 文中**未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅提及使用GRPO训练，但无详细硬件配置。

## 5. 实验数量与充分性
- **实验数量**：主实验表2（对比10余种模型），消融实验表3（奖励类型）、表4（分割骨干）、表5（推理策略），以及定性结果图4。
- **充分性**：覆盖了通用/医学/定位三类模型，消融覆盖核心设计（奖励、骨干、推理策略），对比公平（统一ASM、相同用户提示）。实验设计合理，结果具有说服力。
- **客观性**：所有指标均为客观数值指标（IoU/pDice/Dice），无人工评分偏倚。

## 6. 主要结论与发现
- MedReasoner-7B 在UMRG任务上全面领先第二名Qwen2.5VL-72B，IoU提升14.10，pDice提升14.16，Dice提升8.07。
- 强化学习（特别是软奖励变体Soft）显著优于监督微调，消除了所有拒绝回答情况，且无需显式标注CoT。
- 推理策略（先推理再定位）在隐式查询下优于直接输出，证明了推理链的必要性。
- 解耦设计使ASM可灵活替换（MedSAM2最佳），且CRM单独训练不影响分割能力。

## 7. 优点
- **模块化设计**：CRM与ASM完全解耦，可独立升级，易拓展到未来模型和模态。
- **无需显式空间标注**：通过RL框架，模型仅需格式和精度奖励即可学会定位，避免昂贵的人工CoT和掩码对语言模型注释。
- **数据集创新**：U-MRG-14K首次将隐式临床查询、推理轨迹与像素级掩码结合，填补了医疗推理定位数据空白。
- **奖励函数精细**：多维度（IoU、pDice、角度、尺度等）平滑与惩罚机制，提升训练稳定性和精度。

## 8. 不足与局限
- **复杂类别困难**：所有模型（包括MedReasoner）在组织学（Histology）等超类上表现仍较差，隐式查询的泛化性有限。
- **RL对奖励设计敏感**：硬奖励（Hard）表现劣于软奖励（Soft），表明当前奖励方案可能不是最优，且对不同任务需手动调整。
- **冻结ASM限制**：ASM（MedSAM2）固定，可能无法适应非常罕见或特殊形态的病变区域。
- **计算资源未报告**：缺乏算力细节（如GPU型号、训练时间），影响可复现性评估。
- **未评估跨模态迁移**：实验仅在UMRG-14K内部测试，未验证到其他领域或全新临床场景的零样本能力。

（完）

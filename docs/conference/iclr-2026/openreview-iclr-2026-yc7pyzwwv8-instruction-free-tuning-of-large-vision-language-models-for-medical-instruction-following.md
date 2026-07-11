---
title: Instruction-Free Tuning of Large Vision Language Models for Medical Instruction Following
title_zh: 面向医学指令跟随的大视觉语言模型无指令微调
authors: "Myeongkyun Kang, Soopil Kim, Xiaoxiao Li, Sang Hyun Park"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=Yc7PYzWWV8"
tags: ["query:mlr"]
score: 5.0
evidence: 用于医学视觉语言模型的无指令微调
tldr: 本文提出无指令微调方法，利用动量代理指令替代人工或自动生成的指令，仅通过图像-输出对微调医学视觉语言模型，降低了高质量指令数据需求，保留了模型遵循指令的能力，并提升了跨形态任务表现。
source: ICLR-2026-Rejected-Public
selection_source: conference_retrieval
motivation: 医学领域构建大规模指令-图像-输出三元组数据困难。
method: 提出动量代理指令，在微调时替代显式指令，仅使用图像-输出对。
result: 在多个医学视觉任务上保持甚至提升指令跟随能力。
conclusion: 无指令微调能有效减少对专家注释指令的依赖。
---

## Abstract
Large vision language models (LVLMs) have demonstrated impressive performance across various tasks, but struggle in domains with limited data, such as medicine. While visual instruction tuning addresses this by fine-tuning models with instruction-image-output triplets, constructing large-scale and high-quality datasets remains challenging in domains requiring expert knowledge. To address this, we introduce an instruction-free tuning that reduces reliance on handcrafted or auto-generated instructions, leveraging only image-output pairs during fine-tuning. Specifically, we propose a momentum proxy instruction as a replacement for explicit instructions, preserving the instruction-following capability of the pre-trained LVLM while promoting refined updates for parameters that remain valid during inference. Consequently, the fine-tuned LVLM can flexibly respond to domain-specific instructions, even when explicit instructions are absent during fine-tuning. Additionally, we incorporate a response shuffling strategy to mitigate the model's over-reliance on previous words, facilitating more effective fine-tuning. Our approach achieves state-of-the-art accuracy on multiple-choice visual question answering tasks across SKINCON, WBCAtt, and CBIS datasets, significantly enhancing fine-tuning efficiency in medical domains.

---

## 论文详细总结（自动生成）

# 论文总结：面向医学指令跟随的大视觉语言模型无指令微调

## 1. 核心问题与整体含义（研究动机和背景）
- **研究动机**：大型视觉语言模型（LVLM）在多种任务上表现出色，但在医学等数据稀缺领域中面临挑战。传统的视觉指令微调依赖高质量的“指令-图像-输出”三元组数据，然而在需要专家知识的医学领域，构建大规模、高质量的三元组数据集非常困难。
- **背景**：现有的方法要么依赖人工标注的指令，要么使用自动生成的指令（如基于GPT的生成），但这些方式成本高、可控性差，且可能引入噪声。因此，研究者希望减少对显式指令的依赖，仅利用更容易获取的图像-输出对（即仅需图像和对应的正确答案/输出）进行微调，同时保持模型原有的指令跟随能力。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：提出一种**无指令微调（Instruction-Free Tuning）** 方法，在微调阶段完全不使用显式指令，而是引入**动量代理指令（Momentum Proxy Instruction）** 来替代。
- **关键技术细节**：
  - **动量代理指令**：在训练过程中动态生成一个隐式的指令表示（类似动量更新的方式），用于模拟原本应由指令提供的上下文，从而在无显式指令条件下指导模型学习。
  - **保留预训练 LVLM 的指令跟随能力**：通过代理指令的引入，模型参数更新时能保持对指令的敏感度，使得推理时仍能正确响应未见过的医学指令。
  - **响应打乱策略（Response Shuffling）**：为了避免模型过度依赖前文词语（即自回归生成中的局部过拟合），在训练时对输出序列进行随机打乱，强制模型学习更鲁棒的特征映射。
- **算法流程（文字说明）**：
  1. 取一批图像-输出对（无显式指令）。
  2. 将图像输入 LVLM，同时输入一个占位符或空指令，利用动量代理指令生成机制产生当前步骤的代理指令嵌入。
  3. 将代理指令与图像特征融合，送入语言解码器进行输出预测，与真实输出计算损失（如交叉熵）。
  4. 对输出序列进行响应打乱，重新排列 tokens 的顺序，再计算损失。
  5. 通过反向传播更新模型参数，并同时更新动量代理指令的缓存（如动量平均方式）。
  6. 推理时，LVLM 按照标准流程接收外部指令，由于代理指令在微调阶段已经模仿了指令模式，模型能够正常跟随指令。

## 3. 实验设计
- **数据集**：在三个医学视觉问答数据集上进行评估：
  - **SKINCON**（皮肤病变图像）
  - **WBCAtt**（白细胞图像）
  - **CBIS**（乳腺X光图像）
- **Benchmark**：多个选择题视觉问答（VQA）任务，评价指标为准确率。
- **对比方法**：文中未列出具体对比方法名称，但从摘要描述可知，与现有最先进方法（可能是基于指令微调的方法）进行比较，本方法取得了最佳准确率。

## 4. 资源与算力
- 论文中**未明确说明**使用的 GPU 型号、数量、训练时长等具体算力信息。仅从摘要无法推断。

## 5. 实验数量与充分性
- **实验数量**：仅在三个数据集上进行评估，没有提及消融实验的数量（如是否对动量代理指令的不同设计、响应打乱策略的变体等进行系统消融）。信息有限，难以判断充分性。
- **充分性评估**：从现有描述看，实验覆盖了三个不同医学影像领域，具有一定多样性，但缺乏对更大规模、更多任务（如图像描述、生成等）的验证。由于是短文（可能为ICLR 2026被拒稿），实验细节可能不足。**不足**：未展示与其他无指令或低指令方法的详细对比，也未报告不同模型规模的结果。

## 6. 主要结论与发现
- 提出的无指令微调方法在三个医学VQA数据集上均取得了**最先进的准确率**。
- 该方法显著提高了医学领域微调效率，降低了对手工或自动生成指令的依赖。
- 动量代理指令可以有效保留预训练LVLM的指令跟随能力，且改进的响应打乱策略有助于更有效的微调。

## 7. 优点
- **创新性**：提出“无指令微调”范式，仅利用易获取的图像-输出对，降低了医学数据构建门槛。
- **高效性**：节省了指令生成的人力或计算成本。
- **通用性**：适用于多种医学成像任务，且不依赖特定模型架构。
- **保留能力**：动量代理指令的设计巧妙避免了因缺少显式指令导致的指令跟随能力退化。

## 8. 不足与局限
- **信息不完整**：提供的文本仅有摘要和元数据，缺乏详细的实验设置、超参数、基线方法、消融实验等，难以全面评估方法可靠性。
- **验证范围有限**：仅在三个数据集、任务类型为选择题VQA上测试，未验证在开放生成、报告生成等更复杂任务上的效果。
- **可能的风险**：无指令微调可能在某些需要严格遵循特定医学指令的场景下表现不佳（如需要输出结构化报告），代理指令的隐含表示可能无法覆盖所有指令类型。
- **可重复性**：由于缺乏开源代码和详细参数，暂时无法复现。
- **缺乏偏差分析**：未讨论医学数据中可能的偏见（如种族、疾病分布）对结果的影响。

（完）

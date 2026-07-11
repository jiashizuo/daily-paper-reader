---
title: "MMedPO: Aligning Medical Vision-Language Models with Clinical-Aware Multimodal Preference Optimization"
title_zh: "MMedPO: 通过临床感知多模态偏好优化对齐医疗视觉语言模型"
authors: "Kangyu Zhu, Peng Xia, Yun Li, Hongtu Zhu, Sheng Wang, Huaxiu Yao"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=e6vlZdLlIK"
tags: ["query:mlr"]
score: 9.0
evidence: 医疗视觉语言模型对齐，使用临床感知偏好优化
tldr: 医疗视觉语言模型存在模态不对齐导致的幻觉问题。MMedPO提出一种考虑临床相关的多模态偏好优化方法，通过构建更难的偏好样本增强对齐效果。实验表明该方法显著减少了幻觉并提高了事实性。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 医疗视觉语言模型因模态不对齐产生幻觉，现有偏好优化缺乏临床相关性。
method: 提出MMedPO，在偏好优化中引入临床相关性的硬负样本构建。
result: 在多个医疗视觉语言模型任务上，MMedPO降低了幻觉，提升了事实性。
conclusion: 考虑临床相关性可有效提升医疗视觉语言模型的对齐质量。
---

## Abstract
The advancement of Large Vision-Language Models (LVLMs) has propelled their application in the medical field. However, Medical LVLMs (Med-LVLMs) encounter factuality challenges due to modality misalignment, where the models prioritize textual knowledge over visual input, leading to hallucinations that contradict information in medical images. Previous attempts to enhance modality alignment in Med-LVLMs through preference optimization have inadequately addressed clinical relevance in preference data, making these samples easily distinguishable and reducing alignment effectiveness. In response, we propose MMedPO, a novel multimodal medical preference optimization approach that considers the clinical relevance of preference samples to enhance Med-LVLM alignment. MMedPO curates multimodal preference data by introducing two types of dispreference: (1) plausible hallucinations injected through target Med-LVLMs or GPT-4o to produce medically inaccurate responses, and (2) lesion region neglect achieved through local lesion-noising, disrupting visual understanding of critical areas. We then calculate clinical relevance for each sample based on scores from multiple Med-LLMs and visual tools, enabling effective alignment. Our experiments demonstrate that MMedPO significantly enhances factual accuracy in Med-LVLMs, achieving substantial improvements over existing preference optimization methods by 14.2% and 51.7% on the Med-VQA and report generation tasks, respectively. Our code are available in https://github.com/aiming-lab/MMedPO}{https://github.com/aiming-lab/MMedPO.

---

## 论文详细总结（自动生成）

# 论文总结：MMedPO: 通过临床感知多模态偏好优化对齐医疗视觉语言模型

## 1. 论文的核心问题与整体含义
- **研究动机**：大型视觉语言模型（LVLMs）在医疗领域应用日益广泛，但医疗LVLMs（Med-LVLMs）面临严重的**事实性挑战**，主要源于**模态不对齐**——模型过度依赖文本知识而非视觉输入，导致产生与医学图像事实相矛盾的**幻觉**。
- **整体含义**：现有偏好优化方法在构建偏好数据时**缺乏临床相关性**，使得正负样本容易区分，对齐效果不佳。论文旨在通过引入临床感知的多模态偏好优化，从根本上缓解医疗场景下的幻觉问题，提升模型的事实准确性。

## 2. 论文提出的方法论
- **核心思想**：MMedPO 是一种新型多模态医疗偏好优化方法，通过构建**临床相关**的偏好样本，增强 Med-LVLM 的模态对齐能力。
- **关键技术细节**：
  - **偏好数据构建**：引入两种负样本（dispreference）：
    1. **似是而非的幻觉注入（Plausible Hallucinations）**：利用目标 Med-LVLM 或 GPT-4o 生成医学上不准确的回答，模拟真实场景中的幻觉。
    2. **病灶区域忽略（Lesion Region Neglect）**：通过对肺部等关键病灶区域添加局部噪声，破坏模型对重要视觉区域的理解。
  - **临床相关性计算**：对每个样本，基于多个**医疗大语言模型（Med-LLMs）** 和**视觉工具**的评分，计算临床相关性分数，从而指导更有效的对齐。
  - **算法流程**：文本描述——① 构造包含正样本（原始正确回答）和上述两种负样本的偏好对；② 利用外部医学模型和视觉评估工具为每个样本分配临床相关性权重；③ 在偏好优化阶段（如DPO或类似方法）中，根据相关性分数加权优化，使模型更关注临床意义上重要的错误类型。

## 3. 实验设计
- **数据集与场景**：
  - **Med-VQA**（医学视觉问答）任务
  - **报告生成（Report Generation）** 任务
- **基准测试**：对比现有**偏好优化方法**（未具体罗列方法名称，但提及了“现有方法”）。
- **对比结果**：MMedPO 在 Med-VQA 上提升了 **14.2%**，在报告生成任务上提升了 **51.7%**，性能显著优于已有方法。

## 4. 资源与算力
- **文中未明确说明**所使用的 GPU 型号、数量、训练时长等算力资源。因此无法评估计算开销。

## 5. 实验数量与充分性
- **实验数量**：摘要仅提及了两个主要任务（Med-VQA 和报告生成）的最终性能对比，**未明确报告消融实验、不同模型规模或不同负样本组合的详细比较**。
- **充分性判断**：实验覆盖了问答和生成两大典型任务，结果提升显著，但**缺少更全面的消融分析**（如对不同负样本类型单独效果、临床相关性权重的敏感性分析），以及更多公开基准数据集上的验证。整体实验设计**基本充分**，但细节披露不足，客观性和公平性有待论文全文进一步确认。

## 6. 论文的主要结论与发现
- MMedPO 能**显著减少 Med-LVLM 的幻觉**，并**大幅提升事实准确性**。
- 引入**临床相关性**对偏好样本进行加权，是增强对齐效果的关键。
- 所提出的两种负样本构建策略（幻觉注入和病灶噪声）有效模拟了实际临床中的典型错误模式。

## 7. 优点
- **方法新颖**：首次系统地将临床相关性引入多模态偏好优化，解决了现有方法忽视临床意义的问题。
- **负样本设计巧妙**：似是而非的幻觉和局部病灶噪声直击医疗影像诊断中的典型瑕疵，易于生成且具有高训练价值。
- **效果显著**：在两个任务上均有大幅提升，尤其报告生成任务提升超过50%，表明方法在实际临床应用中的潜力。
- **代码开源**：提供 GitHub 仓库，便于复现和扩展。

## 8. 不足与局限
- **实验覆盖有限**：仅展示了两个任务的结果，未在更多医疗子领域（如病理、放射科不同部位）验证泛化性。
- **依赖外部模型**：幻觉注入需要 GPT-4o 或目标 Med-LVLM 参与，临床相关性计算依赖多个 Med-LLM 和视觉工具，引入额外复杂性和潜在的偏差风险。
- **未报告算力需求**：无法判断训练成本是否可接受。
- **缺乏详细的消融实验**：未明确说明各组件（两类负样本、临床相关性权重）的独立贡献，可能导致方法的最佳配置不清晰。
- **可能与现有偏好优化框架的兼容性**未深入讨论，例如是否适用于基于强化学习的偏好优化方法。

（完）

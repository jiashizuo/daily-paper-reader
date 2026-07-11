---
title: Modality-Fair Preference Optimization for Trustworthy MLLM Alignment
title_zh: 模态公平的偏好优化用于可信的多模态大语言模型对齐
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0046.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: 模态公平的偏好优化用于多模态大模型对齐
tldr: 该论文针对多模态大语言模型（MLLM）对齐中的模态偏差问题，提出了模态公平的偏好优化方法。通过考虑不同模态的贡献，实现了更可信的对齐。实验表明该方法在多个多模态任务上提升了公平性和安全性。与RLHF和RLAIF方法密切相关，可迁移至医疗视觉语言模型的对齐。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-46/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 886, \"height\": 363, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-46/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 894, \"height\": 498, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-46/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1480, \"height\": 883, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-46/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1466, \"height\": 710, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-46/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 889, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-46/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 833, \"height\": 326, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-46/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 874, \"height\": 312, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-46/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 880, \"height\": 428, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-46/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1476, \"height\": 210, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-46/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1481, \"height\": 742, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-46/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 754, \"height\": 298, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-46/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 736, \"height\": 195, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-46/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 735, \"height\": 206, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-46/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 715, \"height\": 234, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-46/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 731, \"height\": 153, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-46/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 829, \"height\": 195, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-46/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 809, \"height\": 258, \"label\": \"Table\"}]"
motivation: 现有MLLM对齐方法忽视了模态间的公平性，导致模态偏差。
method: 设计模态公平偏好优化损失，平衡视觉和语言模态的偏好信号。
result: 在多个基准上显著改善了跨模态一致性并减少了有害生成。
conclusion: 模态公平偏好优化是实现可信MLLM对齐的关键策略。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：多模态大语言模型（MLLMs）在视觉和文本编码器分开训练时，常出现模态不对齐问题，导致模型生成与输入图像不符的内容（幻觉现象），严重损害实际应用中的可信度。
- **现有方法不足**：当前的偏好优化方法（如DPO）主要依赖文本偏好优化，忽视了图像模态的贡献。实验发现，即使输入图像严重失真，模型仍倾向于给出被偏好的文本答案，且视觉token注意力主要集中在背景而非关键对象，表明模型更像是在记忆文本偏好，而非真正实现模态对齐。
- **核心问题**：如何在偏好优化中实现文本和图像模态的公平对齐，以避免单纯记忆文本模式，提升MLLM的可信度。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：提出**模态公平偏好优化（MFPO）**，通过联合优化文本和图像偏好，实现模态间的公平对齐，防止模型过度依赖文本线索。
- **关键技术步骤**：
  1. **图像偏好数据生成**：
     - 利用多部图（multipartite graph）从文本偏好数据中提取top-K关键词，并计算语义和位置权重。
     - 使用改进的Segment Anything Model (SAM)将关键词映射到图像关键区域，并对其施加扩散噪声，生成受扰动的“拒绝图像”（dispreferred image）。仅扰动关键区域，保持图像其他部分不变，以产生细粒度差异。
  2. **损失函数设计**：
     - **文本偏好对齐损失** \( L_{\text{text}} \)：标准DPO损失，优化文本响应。
     - **图像偏好对齐损失** \( L_{\text{image}} \)：比较原始图像和扰动图像下对同一偏好响应的概率，鼓励模型依赖于图像信息。
     - **边际损失** \( L_{\text{margin}} \)：惩罚偏好响应奖励下降的情况，提升训练稳定性。
     - 总损失 \( L_{\text{total}} = L_{\text{text}} + L_{\text{image}} + L_{\text{margin}} \)。
  3. **易到难迭代对齐策略**：
     - 基于语义熵（semantic entropy）对训练样本进行难度排序（易、中、难），然后逐步从简单样本过渡到困难样本进行训练，以提高联合模态训练的稳定性。
- **算法流程**：先构建多模态偏好数据集（包含文本和图像偏好），再按上述损失联合优化，并采用迭代对齐策略。

## 3. 实验设计

- **数据集和基准**：
  - **可信度评估**：使用三个基准：
    - **MMHalBench**：评估响应质量和幻觉率（HalRate）。
    - **Object HalBench**：使用CHAIRs（句子级）和CHAIRi（对象级）指标衡量常见对象幻觉。
    - **AMBER**：评估生成任务，包括CHAIR变体、对象覆盖率和认知幻觉率。
  - **通用能力评估**：LLaVA-Bench（包含对话和详细描述两个子任务）。
- **对比方法**：
  - 基线MLLMs：LLaVA-v1.5、LLaVA-v1.6、Qwen-VL-Chat、MiniGemini-34B等。
  - 偏好反馈方法：DPO、mDPO、RLHF-V、POVID、HA-DPO、HALVA等。
  - 反馈无关方法：VCD、OPERA、HACL等。
  - 大规模模型：GPT-4V、MiniGemini-34B。
- **实验设置**：基于LLaVA-v1.5和LLaVA-v1.6作为骨干，在第三阶段应用MFPO（前两阶段为标准LLaVA训练）。文本偏好数据来自RLHF-V。

## 4. 资源与算力

- 论文**未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅在实现细节中提到使用LLaVA官方代码和标准训练流程，但未量化资源消耗。

## 5. 实验数量与充分性

- **实验组数**：大量实验覆盖三个可信度基准和一个通用基准；包含主要结果表（表1、2、3）、消融实验（表4-8）及多项分析实验。
- **消融实验**：
  - 损失组成（表4）：分别去掉文本损失、图像损失、边际损失的效果。
  - 边际损失参数（表5）：不同margin值（0, 0.2, 0.4）。
  - 损失比例（表6）：不同权重比例。
  - 训练策略（表7）：易到难 vs. 端到端。
  - 图像偏好数据构建方法（表8）：全局噪声、随机区域噪声 vs. 细粒度。
- **其他分析实验**：
  - 噪声级别影响（图8）。
  - 关键词选择和SAM准确性的人工评估（86%和90%以上准确率）。
  - 与mDPO的进一步比较（表9）。
- **充分性与公平性**：实验设计较为完善，消融实验覆盖了关键组件，对比方法全面（包括多个SoTA），结果报告了多个指标。但未提供多次运行的标准差，可能影响统计可靠性；且仅在LLaVA系列模型上验证，泛化性有限。

## 6. 主要结论与发现

- MFPO显著提升了MLLM的可信度：7B模型（LLaVA-v1.5-7B+MFPO）在MMHalBench、Object HalBench、AMBER上达到甚至超越13B、34B乃至GPT-4V的性能。
- 联合优化文本和图像偏好，比单独优化任一模态效果更好；边际损失和易到难策略进一步提升了训练稳定性和性能。
- 细粒度的图像偏好数据（仅扰动关键区域）比粗粒度噪声更有效，能引导模型关注图像内容而非仅记忆文本。
- 通用感知能力（LLaVA-Bench）也得到提升，表明MFPO不仅降低幻觉，还增强了模型整体表现。

## 7. 优点

- **方法创新**：首次系统分析并解决MLLM偏好优化中的模态不平衡问题，提出专门的图像偏好数据生成和联合损失。
- **数据构建精细**：利用多部图+关键词+SAM实现区域级细粒度扰动，避免全局噪声导致的简单区分。
- **训练策略稳定**：易到难迭代对齐有效处理联合优化中的不稳定性。
- **实验结果突出**：7B模型达到甚至超越大模型水平，证明了方法的有效性；消融实验充分验证了各组件的贡献。
- **通用性验证**：同时评估了可信度和通用能力，显示方法不损害甚至提升其他能力。

## 8. 不足与局限

- **实验范围有限**：仅在LLaVA-v1.5和v1.6上验证，未在其他架构（如Qwen-VL、CogVLM等）上测试，泛化性存疑。
- **数据依赖**：依赖文本偏好数据（如RLHF-V）和SAM进行区域映射，若文本偏好数据质量不高或关键词提取失败，可能影响效果。
- **计算资源未报告**：缺失GPU型号、训练时间等信息，影响可复现性评估。
- **统计严谨性不足**：未报告多次运行的标准差或置信区间，无法判断结果波动性。
- **噪声级别调优**：扩散噪声步数（t）需要手动选择（实验最优为500步），可能在不同数据集或模型上需要重新调整。
- **伦理风险**：未讨论该方法可能被滥用于生成更逼真的虚假内容，或加剧模态偏差的潜在风险。

（完）

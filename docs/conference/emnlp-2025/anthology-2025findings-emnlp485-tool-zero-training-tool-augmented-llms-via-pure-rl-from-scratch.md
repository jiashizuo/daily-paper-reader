---
title: "Tool Zero: Training Tool-Augmented LLMs via Pure RL from Scratch"
title_zh: "Tool Zero: 从零开始通过纯强化学习训练工具增强大语言模型"
authors: "Yirong Zeng, Xiao Ding, Yutai Hou, Yuxian Wang, Li Du, Juyi Dai, Qiuyang Ding, Duyu Tang, Dandan Tu, Weiwen Liu, Bing Qin (秦兵), Ting Liu"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.485.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 从零开始的纯强化学习训练工具增强大语言模型
tldr: 当前工具增强大语言模型依赖监督微调，泛化能力有限。本文探索纯强化学习范式从零训练模型，提出动态泛化引导的奖励设计。实验表明该方法能有效激发模型内在推理能力，并提升对未见工具的泛化性。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.485/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 801, \"height\": 572, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.485/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1403, \"height\": 520, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.485/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1568, \"height\": 1017, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.485/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 761, \"height\": 533, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.485/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 634, \"height\": 394, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.485/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1470, \"height\": 736, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.485/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1566, \"height\": 342, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.485/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 774, \"height\": 254, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.485/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1532, \"height\": 1060, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.485/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1458, \"height\": 484, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.485/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 805, \"height\": 494, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.485/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 796, \"height\": 1011, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.485/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 552, \"height\": 465, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.485/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1269, \"height\": 216, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.485/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1601, \"height\": 377, \"label\": \"Table\"}]"
motivation: 监督微调在工具使用上泛化不足，纯强化学习可能激发模型推理能力。
method: 提出动态泛化引导的规则强化学习奖励设计，逐步调整奖励策略。
result: 实验证明纯RL可有效训练工具增强LLM，提升工具泛化能力。
conclusion: 纯RL是训练工具增强LLM的有前景方向，有望减少对领域数据集的依赖。
---

## Abstract
Training tool-augmented LLMs has emerged as a promising approach to enhancing language models’ capabilities for complex tasks. The current supervised fine-tuning paradigm relies on constructing extensive domain-specific datasets to train models. However, this approach often struggles to generalize effectively to unfamiliar or intricate tool-use scenarios. Recently, reinforcement learning (RL) paradigm can endow LLMs with superior reasoning and generalization abilities. In this work, we address a key question: Can the pure RL be used to effectively elicit a model’s intrinsic reasoning capabilities and enhance the tool-agnostic generalization? We propose a dynamic generalization-guided reward design for rule-based RL, which progressively shifts rewards from exploratory to exploitative tool-use patterns. Based on this design, we introduce the Tool-Zero series models. These models are trained to enable LLMs to autonomously utilize general tools by directly scaling up RL from Zero models (i.e., base models without post-training). Experimental results demonstrate that our models achieve over 7% performance improvement compared to both SFT and RL-with-SFT models under the same experimental settings. These gains are consistently replicated across cross-dataset and intra-dataset evaluations, validating the effectiveness and robustness of our methods.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 核心问题与整体含义

- **研究动机**：当前工具增强大语言模型（LLM）主要依赖监督微调（SFT）范式，通过构建大规模领域特定数据集进行训练。然而，SFT模型倾向于模仿表面模式而非内化推理过程，导致在面对未见过的新工具、新格式或多步场景时泛化能力严重不足（例如，模型能处理自然语言翻译但无法识别代码转译场景）。
- **核心问题**：能否使用**纯强化学习（Pure RL）**（无需SFT阶段）从零基础模型（Zero model）开始训练，有效激发模型内在推理能力，实现工具无关的泛化（tool-agnostic generalization）？
- **整体含义**：论文首次将纯规则基础的RL范式扩展到工具学习领域，旨在解决SFT范式的泛化瓶颈，为训练自主、通用的工具增强型AI Agent提供新路径。

## 2. 方法论

- **核心思想**：提出**动态泛化引导的奖励设计（GG-GRPO）**，用于Group Relative Policy Optimization（GRPO）框架。该设计通过渐进式奖励策略，平衡探索（鼓励广泛尝试工具使用模式）与利用（收敛到精确的任务解决方案），从而激发模型内在推理能力并提升工具泛化。
- **关键技术细节**：
    - **奖励分解**：总奖励 \( R_{\text{final}} = R_{\text{format}} + R_{\text{tool}} \)。其中 \( R_{\text{format}} \) 检查输出是否包含正确顺序的特殊标记（`<think>...</think><answer>...</answer>`）。
    - **通用规则奖励（\( r_{\text{general}} \)）**：在训练早期使用。将模型回答与真实答案按分隔符分词，计算重叠率：\( r_{\text{general}} = -0.5 + \frac{|Y \cap Y^*|}{|Y^*|} \in [-0.5, +0.5] \)。允许部分正确响应获得部分奖励，鼓励广泛探索。
    - **严格AST奖励（\( r_{\text{strict}} \)）**：在训练后期使用。通过抽象语法树（AST）比较生成的工具调用与参考结构是否一致（\( r_{\text{ast}} = 1/0 \)）。同时加入两个工具专用信号：多工具协作奖励（+0.3）和参数值错误惩罚（+0.3）。
    - **动态切换**：通过 Sigmoid 函数 \( R_{\text{tool}} = \sigma(t,m) \cdot r_{\text{strict}} + (1 - \sigma(t,m)) \cdot r_{\text{general}} \) 实现渐进过渡，避免突然变化导致训练不稳定。参数包括陡度 \( \kappa \) 和过渡中点 \( m \)。
    - **数据准备**：使用ToolACE和xLAM数据集，进行数据过滤（滤除无效工具调用）、多轮增强（四种策略生成多轮对话）和工具名称掩码（将函数名、参数名替换为通用标识，如`func_1`、`param_1`），减少对命名模式的过拟合。
- **算法流程**：采用GRPO，每组问题生成G个完成序列，计算优势函数 \( A_i = \frac{r_i - \text{mean}(\{r\})}{\text{std}(\{r\})} \)，最大化裁剪后的重要性采样目标，并去除KL散度正则化。

## 3. 实验设计

- **数据集/场景**：
    - 主基准：BFCL-v3（包含Non-live、Live、Multi-Turn子集，Live数据避免污染）
    - 其他基准：API-Bank、Nexus Raven、Tool-Alpaca、Seal-Tools（覆盖不同工具场景、格式和领域）
    - 训练数据：ToolACE（通用工具调用）、xLAM（组合式工具调用）
- **对比方法**：
    - Vanilla模型：Llama-3.1-8B-Instruct、Qwen2.5-7B/32B-Instruct等
    - SFT模型：ToolACE-8B、xLAM-7B-r/fc、Hammer2.1-7b
    - API闭源模型：GPT-3.5/4/4o-mini/4o、Gemini-2.0系列
    - R1-like模型（RL with SFT）：DeepSeek-R1、QwQ-32B、Tool-N1系列、ToolRL-7B
    - 本文模型：Tool-Zero-7B、Tool-Zero-32B（基于Qwen2.5 Base，纯RL训练）
- **评估指标**：BFCL使用AST评估和可执行函数准确率；其他基准使用函数与参数匹配F1分数。

## 4. 资源与算力

- 论文明确提到：使用公开的MindSpeed-RL训练框架（基于Ascend生态）。
- 算力配置：**5×8块Ascend 910b NPU**（共40块）。
- 训练时长：**约28小时**完成GG-GRPO训练（针对7B模型，含5个8卡节点）。
- 注意：论文未详细说明32B模型的训练资源与时长，但推测需要更多算力。

## 5. 实验数量与充分性

- **实验数量**：共开展多组实验，包括：
    - 主实验（表3）：BFCL-v3上对比十余种方法的整体性能（涵盖SFT、闭源、R1-like和本文方法）。
    - 多基准实验（表4）：5个不同基准上的性能排名。
    - 消融实验（图4）：分别去除渐进奖励、多工具信号、值错误信号、工具掩码，以及纯SFT、纯GRPO对比。
    - 超参数分析（图5）：调整过渡中点 \( t_m \) 和陡度 \( \kappa \)。
    - 数据与骨干泛化性实验（表5）：使用不同基座模型（Base vs Instruct，Coder）和不同训练数据（xLAM vs ToolACE），以及多轮增强消融。
    - 规模扩展性实验（表9）：1.5B、3B、7B、32B模型对比；算法对比GG-PPO vs GRPO。
- **充分性评价**：实验设计较为全面，涵盖了主流基准、多种基线对比、多维度消融、超参数影响和规模分析。控制变量清晰，结果具有统计学意义。不过，缺乏对更多随机种子重复实验的说明，但大致可认为公平客观。

## 6. 主要结论与发现

- **纯RL优于SFT及SFT+RL**：Tool-Zero-7B在BFCL-v3上总体准确率达65.22%，比SFT模型ToolACE-8B（58.42%）高7.14个百分点，比RL-with-SFT模型ToolRL-7B（58.38%）高6.84个百分点。在多个基准上，Tool-Zero模型表现更稳定、更一致。
- **动态奖励策略有效**：渐进式奖励（PRS）使性能从59.96%提升至62.54%；工具专用信号（多工具、值错误）贡献显著；工具掩码也有提升。
- **基座选择：Base模型优于Instruct模型**：Qwen2.5-7B Base训练出的模型显著优于Instruct版本，表明Base模型可塑性更强，更易激发推理能力。
- **多轮数据增强至关重要**：在xLAM上使用多轮增强后，Multi-Turn得分从16.18提升到32.38。
- **可扩展性有限**：1.5B和32B模型表现相对较低，但3B和7B表现强劲，表明方法在中等规模上效果最佳，极大规模上需进一步优化。

## 7. 优点

- **方法创新性**：首次将纯RL（R1-Zero风格）扩展到通用工具学习领域，提出了渐进式泛化引导的奖励设计，有效解决探索-利用困境。
- **工具无关泛化能力**：通过名称掩码、通用奖励设计，模型能适应未见过的工具名称、格式和领域，减少对特定数据分布的依赖。
- **无需SFT阶段**：直接从零基础模型开始训练，简化了训练流程，避免了SFT可能引入的分布偏差和模式模仿。
- **实验严谨性与全面性**：在多个公开基准上评估，对比多种前沿基线，并进行充分的消融分析和超参数研究，验证了各组件贡献。
- **鲁棒性**：在跨数据集、不同骨干模型和不同训练数据上均表现出一致的改进，说明方法具有较强鲁棒性。

## 8. 不足与局限

- **计算成本高**：渐进式奖励策略增加了RL训练的计算负担，尤其是32B模型，对资源受限硬件不友好。文中提及32B训练未给出具体算力，但推断成本较高。
- **评估数据集的局限性**：作者承认BFCL、API-Bank等基准存在设计偏好（如调用链过长），可能不完全反映真实复杂场景。工具集重叠度分析显示各基准工具重叠率低，模型仍需面对大量未见工具。
- **可扩展性不完全**：1.5B模型性能相对较差，32B模型也未达到预期强势提升，表明方法在极端规模上存在优化空间。超参数调整（如过渡中点）对性能敏感，可能需要针对不同模型调整。
- **奖励设计的潜在偏差**：通用奖励（基于分词重叠）可能过于粗略，不能完全捕捉语义等价；严格AST奖励可能对格式错误过于敏感。
- **缺乏对多轮对话复杂场景的详细分析**：虽然包含多轮子集，但未充分测试长历史依赖或复杂分支场景。
- **缺乏随机种子重复实验**：未报告多次运行的标准差，难以评估结果变异性。

（完）

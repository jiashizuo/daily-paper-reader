---
title: "PAFT: Prompt-Agnostic Fine-Tuning"
title_zh: PAFT：提示无关的微调方法
authors: "Chenxing Wei, Mingwen Ou, Ying He, Yao Shu, Fei Yu"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.37.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 强化学习微调提升提示鲁棒性
tldr: "微调后的LLM对提示措辞变化敏感。PAFT提出提示无关微调方法，通过动态生成多样合成提示并在训练中持续采样，迫使模型学习任务本质。在SFT和RLFT设置下，PAFT在问答、数学推理等任务上提升泛化能力7%，展示了强化学习微调在鲁棒性方面的优势。"
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 729, \"height\": 494, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1485, \"height\": 722, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1636, \"height\": 374, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1635, \"height\": 374, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1638, \"height\": 374, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 635, \"height\": 504, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 636, \"height\": 504, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1652, \"height\": 681, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 628, \"height\": 482, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.37/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1567, \"height\": 1173, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1490, \"height\": 295, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 797, \"height\": 305, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1652, \"height\": 336, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 758, \"height\": 368, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1233, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1453, \"height\": 559, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 453, \"height\": 269, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1645, \"height\": 237, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1647, \"height\": 423, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1648, \"height\": 220, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.37/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1551, \"height\": 893, \"label\": \"Table\"}]"
motivation: 微调导致LLM对提示措辞过拟合，轻微变化即性能下降。
method: 动态生成多种合成提示并在训练中持续采样，结合SFT和RLFT训练，学习任务基本原理而非表面模式。
result: "在多个基准上泛化能力提升7%，包括问答、数学推理和工具使用。"
conclusion: 通过动态提示变化可有效缓解微调中的提示过拟合问题。
---

## Abstract
Fine-tuning large language models (LLMs) often causes overfitting to specific prompt wording, where minor phrasing variations drastically reduce performance. To address this, we propose Prompt-Agnostic Fine-Tuning (PAFT), a method that enhances robustness through dynamic prompt variation during training. PAFT first generates diverse synthetic prompts, then continuously samples from this set to construct training instances, forcing models to learn fundamental task principles rather than surface-level patterns. Across systematic evaluations using both supervised fine-tuning (SFT) and reinforcement learning fine-tuning (RLFT), PAFT consistently demonstrates improved performance on benchmarks for question answering, mathematical reasoning, and tool use. It achieves 7% higher generalization accuracy on unseen prompts than standard methods with similar training efficiency. Notably, models trained with PAFT attain 3.2× faster inference speeds due to reduced prompt sensitivity. Ablation studies further validate effectiveness of PAFT, while theoretical analysis reveals that PAFT can effectively enhance the cross-domain generalization ability of LLM.

---

## 论文详细总结（自动生成）

# 中文总结：PAFT: Prompt-Agnostic Fine-Tuning

## 1. 核心问题与整体含义（研究动机和背景）
当前大语言模型（LLM）微调（如SFT、RLFT）常采用固定指令提示（prompt），导致模型对特定提示措辞产生过拟合。实验表明，微调后模型对提示的微小变化（如替换一个词、调整标点）极为敏感，准确率可大幅下降（例如从86.27%降至66.93%）。这种脆弱性严重影响了LLM在实际应用中的可靠性和公平性。为此，论文提出**Prompt-Agnostic Fine-Tuning (PAFT)**，通过动态变化训练提示，迫使模型学习任务的基本原理而非表面模式，从而提升对未见提示的泛化能力。

## 2. 方法论
### 核心思想
PAFT通过两个阶段解耦模型性能与特定提示措辞：
- **候选提示构建**：利用多种商业LLM（10种）通过零样本和少样本策略生成大量多样化的合成提示，覆盖不同语言风格和指令结构。提示集按8:1划分为训练集和测试集，确保测试提示在训练中从未出现。
- **动态微调**：在训练过程中，每K个步骤（默认K=4）从候选集中随机采样一个提示，与当前数据实例组合成输入。算法使用SGD/AdamW等梯度优化器更新参数。这种持续变化迫使模型学习任务本质而不是过拟合单一提示模式。

### 关键技术细节
- **候选提示生成**：使用零样本和少样本模板，结合多个LLM（如GPT-4、Qwen等）产生约400个训练提示。
- **动态采样策略**：每K步更换提示，确保一个epoch内模型接触多种提示。
- **理论支撑**：基于域适应理论（Ben-David et al., 2010），通过最小化训练提示集与测试提示集之间的MMD（最大均值差异）上界，降低领域差异，提升泛化能力。

## 3. 实验设计
### 数据集与场景
覆盖多种任务类型：
- **推理与阅读理解**：HellaSwag, PIQA, Winogrande, RACE-mid, RACE-high
- **代码生成**：HumanEval
- **工具使用**：T-Eval
- **多轮对话与多语言**：Xstory_cloze
- **数学推理**：GSM8K, Geometry3k

### 基准与对比方法
- **Base Model**：原始预训练模型（LLaMA3-8B等）
- **User**：使用人工设计提示进行微调
- **TopAccuracy**：使用训练集中准确率最高的提示
- **BATprompt**：使用鲁棒性优化后的提示
- **ZOPO**：使用零阶优化选择的最优提示
- **PAFT**：本文方法

### 微调范式
- SFT：采用LoRA（rank=8）在LLaMA3-8B、LLaMA-3.1-8B、LLaMA-3.2-3B、Qwen2.5-7B上实验
- RLFT：采用GRPO在Qwen2.5-7B（GSM8K）和Qwen2.5-VL-7B（Geometry3k）上实验

## 4. 资源与算力
论文未明确给出训练所使用GPU的总数量和具体训练总时长。但提到所有实验在**NVIDIA A100, V100, 4090, L40** GPU集群上进行。附录中提供了训练时间对比（表10）：在单个RTX 4090上，PAFT与基线方法的训练时间接近（约2.98~3.38小时），表明PAFT未引入额外计算开销。候选提示生成仅消耗约11.75k tokens，成本极低。

## 5. 实验数量与充分性
### 实验数量
- 主要实验结果表1：5个推理任务上的性能对比（均值、标准差、Top比例）
- 表2：5个额外任务（HumanEval, Xstory_cloze, Geometry3k, T-Eval, GSM8K）
- 表3：推理时间对比
- 表4：最小准确率与条件准确率（50个未见提示 + 10个对抗性提示）
- 表5：超参数K和T的消融
- 图3-9：分布图、缩放律、MMD分析等
- 附录包含更多基线提示、训练配置、提示示例等
### 充分性与公平性
- 测试提示集与训练提示集完全分离（包含LLM生成和人工编写的提示），避免了数据泄露。
- 对比了多种强基线（手动、最准确、鲁棒优化、零阶优化），并在SFT和RLFT两种框架下验证。
- 消融实验覆盖超参数鲁棒性、训练提示数量、不同模型等。
- 实验整体充分、客观，结论可靠。

## 6. 主要结论与发现
- **显著提升提示鲁棒性**：PAFT在所有任务上标准差最低，平均准确率最高（表1：平均87.57% vs 第二好的83.32%）。
- **泛化能力增强**：在未见提示上准确率提升约7%（与标准方法相比），最小准确率和条件准确率大幅提高（表4）。
- **推理加速**：由于对提示不敏感，模型输出更简洁，推理速度提升约3.2倍（表3）。
- **训练效率保持**：训练时间与标准LoRA微调几乎一致（表10），生成候选提示成本极低（约11.75k tokens）。
- **少量提示即可有效**：仅需约10个高质量提示即可获得良好性能（图8缩放律）。
- **理论验证**：通过MMD上界分析证实，增加训练提示数量可减小训练与测试提示分布的差异，提升跨域泛化。

## 7. 优点
- **方法新颖**：首个系统性地针对微调中提示鲁棒性问题的训练框架，覆盖SFT和RLFT。
- **实用性强**：无需人工设计提示，训练成本不增加，推理效率大幅提升。
- **理论支撑扎实**：用域适应理论解释和指导方法设计。
- **实验全面**：覆盖多种任务、多种模型、多种微调范式，并包含详细消融和对抗性测试。
- **开源友好**：基于LoRA等轻量方法，可扩展性好。

## 8. 不足与局限
- **随机采样策略可能非最优**：当前动态提示选择采用随机采样，未探索更高效的课程学习或重要性采样策略。
- **未集成对抗学习**：未在训练中生成对抗性提示以进一步提高鲁棒性，且对抗训练稳定性问题尚待解决。
- **依赖外部LLM生成提示**：虽成本低，但生成的提示质量受限于所用LLM，可能存在偏差。
- **理论分析深度有限**：域适应理论部分仅提供MMD上界，未深入讨论泛化边界的紧致性。
- **实验覆盖仍有限**：未涵盖所有可能的真实场景（如多语言、长文本、多模态等），且对抗性提示集规模较小（10个）。
- **实际部署风险**：虽然鲁棒性增强，但未测试对恶意对抗攻击的防御能力，安全边界不明确。

（完）

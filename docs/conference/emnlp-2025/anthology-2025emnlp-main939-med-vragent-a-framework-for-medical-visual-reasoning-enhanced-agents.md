---
title: "Med-VRAgent: A Framework for Medical Visual Reasoning-Enhanced Agents"
title_zh: Med-VRAgent：医学视觉推理增强智能体框架
authors: "Guangfu Guo, Xiaoqian Lu, Yue Feng"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.939.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 使用视觉语言模型和PPO微调的医学视觉推理智能体
tldr: 针对视觉语言模型在医学推理中存在的幻觉、描述模糊和定位不准等挑战，提出了Med-VRAgent框架，该框架创新性地融合了视觉引导机制、自奖励范式和蒙特卡洛树搜索，并通过PPO进行微调。在多个医学视觉问答基准上的实验结果表明，该方法显著优于现有技术，有效提升了医学视觉推理的准确性和可靠性，为医疗AI诊断提供了有力的支撑。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.939/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 791, \"height\": 440, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.939/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1615, \"height\": 874, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.939/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 804, \"height\": 461, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.939/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 798, \"height\": 680, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.939/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1656, \"height\": 809, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.939/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1600, \"height\": 908, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 794, \"height\": 219, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 800, \"height\": 340, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 804, \"height\": 497, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 797, \"height\": 591, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1649, \"height\": 347, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 799, \"height\": 233, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 791, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 795, \"height\": 314, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 587, \"height\": 314, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.939/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 942, \"height\": 365, \"label\": \"Table\"}]"
motivation: 现有视觉语言模型在医学推理中存在幻觉和定位不准等问题。
method: 提出Med-VRAgent智能体框架，融合视觉引导、自奖励和MCTS，并使用PPO微调VLM。
result: 在多个医学视觉问答基准上超越现有方法，显著提升推理性能。
conclusion: 所提框架有效改善了医学视觉推理的准确性和可靠性。
---

## Abstract
Vision-language models (VLMs) achieve promising results in medical reasoning but struggle with hallucinations, vague descriptions, Inconsistent logic and poor localization. To address this, we propose a agent framework named Medical Visual Reasoning Agent ( Med-VRAgent ). The approach is based on Visual Guidance and Self-Reward paradigms and Monte Carlo Tree Search (MCTS). By combining the Visual Guidance with tree search, Med-VRAgent improves the medical visual reasoning capabilities of VLMs. We use the trajectories collected by Med-RAgent as feedback to further improve the performance by fine-tuning the VLMs with the proximal policy optimization (PPO) objective. Experiments on multiple medical VQA benchmarks demonstrate that our method outperforms existing approaches.

---

## 论文详细总结（自动生成）

# 论文《Med-VRAgent: A Framework for Medical Visual Reasoning-Enhanced Agents》详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：现有的视觉语言模型（VLM）在医学推理中虽然表现良好，但存在严重的**幻觉**（输出偏离视觉输入）、**描述模糊**、**逻辑不一致**和**定位不准确**等问题，这在临床场景中构成风险。
- **背景**：医学图像分析（如放射学报告生成、视觉问答）要求精细的图像-文本对齐和对局部结构（如ROI、空间分布病灶）的准确理解。现有方法如Chain-of-Thought（CoT）、视觉提示、检索增强生成（RAG）等虽有一定改进，但仍面临领域特定性、高劳动成本、单一ROI局限、缺乏细粒度反馈以及检索引入噪声等问题。
- **目标**：提出一种多模态智能体框架，通过视觉引导、自反馈和蒙特卡洛树搜索（MCTS）来增强VLM的医学视觉推理能力，并利用PPO微调进一步提升性能。

## 2. 方法论：核心思想、关键技术细节

### 2.1 核心思想
- 设计**教师（Teacher）-学生（Student）-评估者（Assessor）** 三元智能体体系，结合**视觉提取模块**（Visual Extraction）和**检索增强反思模块**（Retrieval-Augmented Reflection, RAR），通过MCTS搜索高质量推理路径，并使用PPO对教师和评估者模型进行微调。

### 2.2 关键技术细节

- **视觉提取模块**：
  - 使用Grounding DINO作为视觉提取器，基于问题和图像生成ROI集合：`ROI = {ROI_i} = (边界框, 置信度, 实体标签)`。
  - **视觉Token编辑（VTE）**：在VLM前K（≤3）个自注意力层，通过向ROI对应的patch嵌入添加方向向量（公式3-4），提升ROI区域的注意力权重，增强区域感知。

- **教师-学生-评估者机制**：
  - **Teacher**（`T_model`）：根据ROI、历史引导-答案对和评估者反馈，生成下一步引导`G_{ij+1}`。
  - **Student**（`S_model`）：基于ROI和引导生成中间答案`A_{ij}`；搜索完成后，最优路径组合成最终答案。
  - **Assessor**（`A_model`）：采用5分评分系统，给出反馈`F_ij`和奖励`R_ij`，基于自奖励范式。

- **检索增强反思（RAR）**：
  - 当Student在引导下未能完成时，启用反思阶段。
  - **检索阶段**：使用MMed-RAG的领域感知检索器，结合图像和文本查询，通过FAISS检索Top-K候选，再经交叉注意力排序得到最终知识集`K_ij`。
  - **重写阶段**：Student结合原始答案、引导、ROI、反馈和检索知识，生成优化答案`A*_ij`。

- **蒙特卡洛树搜索（MCTS）**：
  - 四阶段：选择（UCB公式）、扩展（从Teacher采样N个引导）、评估（Assessor评分）、反向传播。
  - **优化策略**：
    - **早停**：节点评分>4或KL散度/语义相似度达到阈值时停止扩展。
    - **Alpha-Beta剪枝**：维持上下界，剪掉超出范围的子树。
    - **反思触发**：早停反复触发或扩展次数超限仍未达4分时，调用RAR。

- **训练策略**：
  - 使用PPO对Teacher和Assessor进行微调，最大化期望奖励，同时限制更新幅度。
  - 损失函数为`L_PPO(θ)`，利用Med-VRAgent收集的轨迹`T = (动作, 观测, 奖励)`进行优势估计。

## 3. 实验设计

### 3.1 数据集与场景

| 数据集 | 模态 | 规模 | 任务类型 |
|--------|------|------|----------|
| IU-Xray | X-ray | 590测试 | 报告生成 |
| MIMIC-CXR | Chest X-ray | 500测试 | 报告生成 |
| VQA-RAD | X-ray, CT | 451 QA对 | 视觉问答 |
| GMAI-MMbench | 38模态 | 4个临床任务 | 视觉问答 |

### 3.2 对比方法

- **训练方法**（基于LLaVA-Med v1.5）：Zero-shot、SFT、Self-Rewarding、DPO、STLLaVA-Med、MMedPO。
- **推理方法**（基于DeepSeek-VL-7B和MiniCPM-V2）：CoT、ToT、Visual CoT。
- **解码/RAG方法**（基于LLaVA-Med v1.5）：Greedy Decoding、BeamSearch、DoLa、OPERA、VCD、MedDr、FactMM-RAG、RULE、MMed-RAG。

### 3.3 评价指标

- VQA-RAD：开放问题用召回率，封闭问题用精确率。
- GMAI-MMbench：准确率（AR、BVR、BCR、CR及平均）。
- 报告生成：BLEU-1/2/3/4平均、ROUGE-L、METEOR。

## 4. 资源与算力

- 文中明确说明：使用**4张Nvidia A6000 GPU**进行PPO微调，训练时长**7–8小时**。
- 使用LoRA（`lora_r=16, lora_alpha=32`），微调基于官方训练脚本和`peft`、`trl`库。
- 解码温度设为0.7，其他实验未详细说明算力消耗。

## 5. 实验数量与充分性

- **主实验**：共3组（训练策略对比、推理策略对比、解码/RAG对比），覆盖4个数据集。
- **消融实验**：6组以上：
  - 组件消融（图3）：去除视觉提取、Assessor、Teacher等对准确率的影响。
  - 宽度/深度优化（图4）：固定与自适应策略对比。
  - 自适应检索策略消融（表5）：Filter/Rerank组合。
  - VTE消融（表7）：单独边界框、单独编辑、两者均用。
  - 教师引导消融（表8）：逐步增加引导、答案、反馈。
  - GREEN评估（表9）：采用LLM作为评估者的初步实验。
- **案例研究**：图5展示了一个实际报告生成对比，验证了Med-VRAgent减少幻觉并接近真实标注。
- **充分性**：实验设计较为全面，覆盖了不同任务、不同模型、不同方法类型，消融实验验证了各模块的必要性，对比方法均为当前主流或SOTA，客观性较强。

## 6. 主要结论与发现

- Med-VRAgent在**所有基准数据集上均达到新的SOTA**：
  - VQA-RAD：开放问题35.70，封闭问题68.72（比MMedPO高1.67和1.08）。
  - MIMIC-CXR：BLEU 13.90，ROUGE-L 13.53，METEOR 9.58。
  - GMAI-MMbench（DeepSeek-VL）：平均46.74%，超过Visual CoT（43.51%）3.23%。
  - IU-Xray（RAG场景）：BLEU 33.45，超过MMed-RAG（31.38）2.07。
- 自适应MCTS策略（平均宽度1.74，深度2.23）在准确率（46.74%）和推理时间（36.7秒）上均优于固定策略（46.68%，45.7秒）。
- 视觉Token编辑（VTE）和教师引导均显著提升性能，去除后准确率分别下降3.53%和1.38%。

## 7. 优点

- **创新性**：首次将蒙特卡洛树搜索与视觉引导、自反馈机制深度融合于医学视觉推理，形成完整的智能体管线。
- **高效性**：教师和评估者仅需一次PPO微调，即可在不同任务上泛化，节省计算资源；自适应MCTS在保证精度的同时降低推理耗时。
- **模块化设计**：各组件（视觉提取、VTE、反思、评估）可独立替换或改进，易于扩展。
- **全面性验证**：在报告生成、视觉问答等多种任务上，与多种SOTA方法（包括强化学习、检索增强、解码策略）进行对比，均取得领先结果。
- **可解释性**：通过案例展示，Med-VRAgent能给出结构化、精准的医学描述，并减少幻觉。

## 8. 不足与局限

- **资源消耗**：尽管做了优化，MCTS仍需要较多的节点扩展和推理计算，在超大规模数据集或实时场景下可能受限。
- **搜索完备性**：由于计算限制，无法穷举所有推理路径，可能遗漏最优解。
- **领域可迁移性**：当前框架针对医学图像设计，直接迁移到其他领域（如自然场景）可能需要额外适配。
- **图像质量敏感性**：在复杂或低质量图像上，视觉引导效果可能减弱，仍可能出现不准确推理。
- **未验证临床实用性**：仅基于公开数据集评估，在真实临床环境中的表现和可靠性尚未测试。
- **检索噪声**：虽然采用自适应检索，但外部知识库的质量和相关性仍可能引入噪声，影响反射效果。
- **公平性风险**：训练数据来源于公开数据集，可能存在偏见，需进一步评估对特定人群的泛化能力。

（完）

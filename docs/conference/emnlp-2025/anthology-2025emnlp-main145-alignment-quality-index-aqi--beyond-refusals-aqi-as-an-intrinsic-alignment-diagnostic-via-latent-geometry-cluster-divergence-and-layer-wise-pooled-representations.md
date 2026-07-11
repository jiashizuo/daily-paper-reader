---
title: "Alignment Quality Index (AQI) : Beyond Refusals: AQI as an Intrinsic Alignment Diagnostic via Latent Geometry, Cluster Divergence, and Layer wise Pooled Representations"
title_zh: 对齐质量指数（AQI）：超越拒绝——通过潜在几何、簇散度和分层汇聚表征进行内在对齐诊断
authors: "Abhilekh Borah, Chhavi Sharma, Danush Khanna, Utkarsh Bhatt, Gurpreet Singh, Hasnat Md Abdullah, Raghav Kaushik Ravi, Vinija Jain, Jyoti Patel, Shubham Singh, Vasu Sharma, Arpita Vats, Rahul Raja, Aman Chadha, Amitava Das"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.145.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 提出LLM对齐诊断指标，涵盖医疗等高危领域
tldr: 该论文针对当前LLM对齐评估依赖拒绝率等行为代理指标的盲点，提出了对齐质量指数（AQI）。AQI通过潜在几何、簇散度和分层汇聚表示来内在评估模型对齐质量，不依赖特定提示。在医疗等高危领域验证了AQI的可靠性，为alignment诊断提供了新的工具。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1651, \"height\": 327, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 725, \"height\": 217, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1609, \"height\": 505, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1576, \"height\": 147, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1315, \"height\": 626, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1368, \"height\": 806, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1356, \"height\": 839, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 776, \"height\": 554, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 777, \"height\": 557, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1044, \"height\": 771, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1297, \"height\": 712, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1130, \"height\": 743, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 786, \"height\": 489, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 1075, \"height\": 662, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 782, \"height\": 492, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 784, \"height\": 482, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 1064, \"height\": 652, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 784, \"height\": 485, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 782, \"height\": 505, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 1051, \"height\": 530, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 773, \"height\": 257, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 1584, \"height\": 710, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 1505, \"height\": 877, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 1476, \"height\": 867, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 795, \"height\": 408, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 782, \"height\": 474, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.145/fig-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 793, \"height\": 402, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1234, \"height\": 224, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 564, \"height\": 168, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 568, \"height\": 163, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 483, \"height\": 200, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1587, \"height\": 1245, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1627, \"height\": 1736, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1619, \"height\": 2100, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1622, \"height\": 1116, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1647, \"height\": 808, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 736, \"height\": 297, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 788, \"height\": 338, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 790, \"height\": 290, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 793, \"height\": 200, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 794, \"height\": 334, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 788, \"height\": 359, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 793, \"height\": 269, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 837, \"height\": 400, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 798, \"height\": 481, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 798, \"height\": 482, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 798, \"height\": 458, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 798, \"height\": 281, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.145/table-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 618, \"height\": 202, \"label\": \"Table\"}]"
motivation: 现有评估方法依赖行为代理指标，存在被越狱和随机性等盲点。
method: 提出AQI，利用潜在几何、簇散度和分层汇聚表示作为内在对齐诊断指标。
result: 在多个高保真场景下（包括医疗）验证了AQI与人类判断的一致性。
conclusion: AQI提供了一种无需提示的对齐质量内在评估方法，适用于高风险领域。
---

## Abstract
Alignment is no longer a luxury; it is a necessity. As large language models (LLMs) enter high-stakes domains like education, healthcare, governance, and law, their behavior must reliably reflect human-aligned values and safety constraints. Yet current evaluations rely heavily on behavioral proxies such as refusal rates, G-Eval scores, and toxicity classifiers, all of which have critical blind spots. Aligned models are often vulnerable to jailbreaking, stochasticity of generation, and alignment faking. To address this issue, we introduce the **Alignment Quality Index (AQI)**. This novel geometric and prompt-invariant metric empirically assesses LLM alignment by analyzing the separation of safe and unsafe activations in latent space. By combining measures such as the *Davies-Bouldin score (DBS)*, *Dunn index (DI)*, *Xie-Beni index (XBI)*, and *Calinski-Harabasz index (CHI)* across various formulations, AQI captures clustering quality to detect hidden misalignments and jailbreak risks, even when outputs appear compliant. AQI also serves as an early warning signal for alignment faking, offering a robust, decoding-invariant tool for behavior-agnostic safety auditing. Additionally, we propose the **LITMUS** dataset to facilitate robust evaluation under these challenging conditions. Empirical tests on LITMUS across different models trained under DPO, GRPO, and RLHF conditions demonstrate AQI’s correlation with external judges and ability to reveal vulnerabilities missed by refusal metrics. We make our implementation publicly available to foster future research in this area.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：当前大型语言模型（LLM）的对齐评估过度依赖**行为代理指标**（如拒绝率、G-Eval分数、毒性分类器），这些指标存在盲点：无法检测**越狱攻击**、**生成随机性**导致的波动，以及**对齐伪装**（模型表面合规但内部仍编码不安全倾向）。随着LLM进入医疗、法律、教育等高危领域，可靠的对齐评估成为刚需。
- **整体含义**：论文提出一种**内在、提示无关、解码无关**的几何度量**对齐质量指数（AQI）**，通过分析隐空间中安全/不安全激活的分离程度来诊断模型真实对齐质量，而非依赖表面输出。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：对齐应体现在模型内部表示的几何结构上——安全与不安全输入应在隐空间中形成可分离的簇。AQI通过量化簇内紧致性与簇间分离性来评估对齐。
- **关键技术细节**：
  - **分层汇聚表示**：对LLM各层的MLP激活进行加权求和（通过可学习的稀疏注意力权重α(l)），得到汇聚嵌入\(\tilde{h}(x,y)=\sum_l \alpha^{(l)} h^{(l)}(x,y)\)，避免最终层过平滑。
  - **几何指标**：组合**Xie-Beni指数（XBI）**（衡量局部紧致性与簇间最小距离，越低越好）和**Calinski-Harabasz指数（CHI）**（衡量全局分离度，越高越好）。
  - **AQI计算公式**：\(\text{AQI} = \lambda \cdot (1/\text{XBI}) + (1-\lambda) \cdot \text{CHI}\)，默认λ=0.5。AQI越高表示对齐越好。
  - **训练**：仅优化分层注意力权重α(l)（冻结LLM），使用对比分离损失推动安全/不安全嵌入在隐空间中远离。
  - **关键特性**：解码无关、行为无关、可检测对齐伪装和早期漂移。

### 3. 实验设计：数据集、基准、对比方法

- **数据集**：
  - **LITMUS**：自建基准，含5000安全+5000不安全单行提示，安全来自MMLU，不安全来自HH-RLHF、OpenAI Moderation、HateCheck等。另有500个越狱变体。
  - **LITMUS-P**：对LITMUS每个提示用GPT-4o改写5次，测试对抗性释义鲁棒性。
  - 其他：OpenAssistant、ShareGPT、Anthropic Red Teaming。
- **对比方法**：
  - 行为度量：**G-Eval**（GPT-4评分）、**LLM Judge Score**（模型偏好比较）。
  - 模型：Llama-2-Chat 7B及其变体（DPO、RLHF、SFT、对抗暴露）。
  - 额外在9个模型（TinyLLaMA至LLaMA-65B）上验证跨模型缩放性。
- **实验场景**：
  - 越狱攻击下的AQI退化。
  - 安全无关微调（ShareGPT）导致的漂移。
  - 解码温度变化下的稳定性。
  - 对齐伪装检测（模拟训练/部署环境）。
  - 跨模型、跨LoRA、跨MoE专家的敏感性。
  - 公理维度对齐审计（基于Value Imprint框架）。

### 4. 资源与算力

- 论文**未明确说明训练或推理使用的GPU型号、数量与时长**。仅提到对单个A100 GPU，batch size=256、L=30、d=4096时，AQI计算可在2秒内完成。但未提供完整训练/微调的资源消耗。

### 5. 实验数量与充分性

- **实验数量丰富**：主实验覆盖4种对齐训练范式（表2），三个核心案例（越狱、漂移、稳定性），附录包含跨9种模型缩放（表13）、批大小/提示多样性校准（表14）、LoRA敏感性（图10）、MoE专家AQI（图9）、公理维度AQI（表16）、对齐伪装检测（表20）、T2I模型（表21）等大量消融和分析。
- **充分性与公平性**：
  - 实验**客观**：AQI与G-Eval/Judge Score的Pearson/Spearman相关系数报告（表2），显示强相关性。
  - **消融充分**：探讨了批大小、提示类型、XBI截断、层池化（softmax vs sparsemax）等影响。
  - 局限：所有实验基于单一LLaMA-2-7B变体及少数其他架构，未涵盖更多样化模型族（如Mistral、Gemma等仅在附录部分提及）。数据集LITMUS为自建，可能引入偏差。对比方法仅包含两种行为度量，未与更多内在度量（如探针、因果追踪指标）对比。

### 6. 论文的主要结论与发现

- **AQI可揭示行为度量遗漏的隐藏不对齐**：在越狱攻击中，G-Eval和Judge Score因回避措辞而虚高，AQI则持续很低（表3）；在安全无关微调后，AQI提前下滑而行为度量不变（表4）；不同解码温度下，AQI几乎不变（表5）。
- **AQI与外部判断高度相关**：Pearson ≥0.76，Spearman ≥0.73（表2）。
- **AQI可作为早期预警信号**：在越狱等场景中，AQI的下降比拒绝率或毒性分数的变化出现更早（图7）。
- **跨模型缩放性**：更大模型通常有更高AQI，且更鲁棒（表13、17、18）。
- **对齐伪装可被AQI检测**：模拟训练/部署差异时，伪装服从样本的隐表示与不安全样本聚拢，AQI暴露这一崩溃（表20）。

### 7. 优点：方法或实验设计上的亮点

- **创新性**：首次将聚类有效性指数（XBI、CHI）引入对齐评估，从几何角度诊断内在对齐，而非依赖表面行为。
- **解码无关性**：直接分析激活层，稳定可靠，不受采样随机性影响。
- **可解释性**：分层注意力权重揭示对齐信号出现的深度；UMAP可视化显示簇分离情况。
- **广泛验证**：覆盖越狱、漂移、随机性、对齐伪装、跨模型、LoRA、MoE、公理维度、多模态（T2I）等多种场景，实验设计全面。
- **开源友好**：提供代码与LITMUS数据集，可复现。

### 8. 不足与局限

- **假设潜在可聚类性**：安全/不安全输入可能并不总是几何可分（如混合意图、讽刺），可能低估对齐或产生伪簇。
- **二元安全标签限制**：无法处理分级危害、上下文相关的拒绝或多维对齐（公平性、忠诚度）。
- **跨模型不可比**：AQI是模型相对的，不同架构间的原始值不能直接比较，需归一化。
- **对离群值和批组成敏感**：极端激活或比例失衡会扭曲簇度量。
- **计算开销**：需提取多层激活并计算成对距离，对实时审计可能昂贵（但论文提出了草图加速策略）。
- **缺乏因果归因**：AQI只指示何处不对齐，不解释原因（但附录提供了与因果追踪结合的思路）。
- **文本模态局限**：扩展至多模态或检索增强模型需额外工作（附录已有初探）。
- **实验覆盖的局限性**：主要基于LLaMA-2-7B及其变体，未在更多模型族（如GPT-4、Claude）上验证；行为度量仅对比G-Eval和Judge Score，未与激活探测等方法比较。
- **数据集偏差**：LITMUS由特定来源构建，可能无法代表所有安全性挑战。

（完）

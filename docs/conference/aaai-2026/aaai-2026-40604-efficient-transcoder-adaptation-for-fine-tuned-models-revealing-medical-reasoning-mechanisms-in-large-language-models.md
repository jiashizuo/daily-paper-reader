---
title: "Efficient Transcoder Adaptation for Fine-Tuned Models: Revealing Medical Reasoning Mechanisms in Large Language Models"
title_zh: 高效转码器适应微调模型：揭示大语言模型中的医学推理机制
authors: "Zhouxing Tan, Hanlin Xue, Yulong Wan, Ruochong Xiong, Xu Chu, Xiang Li, Junfei Liu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40604/44565"
tags: ["query:mlr"]
score: 5.0
evidence: 医学大语言模型与可解释性
tldr: 针对大语言模型在医疗领域缺乏透明性的问题，提出医疗微调冻结注意力层和后期适应转码器，仅微调前馈网络并通过转码器高效揭示推理机制。方法比从头训练快1000倍以上，为跨领域可解释性提供低成本方案。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 大语言模型决策不透明限制了其在医疗等高安全领域的部署。
method: 提出FTFA冻结注意力层微调FFN，结合PAT高效适配预训练转码器。
result: 效率提升超过1000倍，有效揭示医学推理机制。
conclusion: 冻结注意力层微调配合转码器适配是实现医学LLM可解释性的高效方法。
---

## Abstract
Large language models (LLMs) suffer from a lack of decision-making transparency, limiting their deployment in high-stakes domains such as healthcare. We propose a mechanistic interpretability framework that introduces two novel paradigms: Medical Fine-Tuning with Frozen Attention Layers (FTFA) and Posterior Adaptation Transcoders (PAT). FTFA freezes attention layers while fine-tuning only feed-forward network (FFN) parameters, enabling PAT to efficiently adapt pre-trained transcoders on the same data. This approach achieves over 1000× efficiency improvement compared to training transcoders from scratch. We theoretically justify this methodology and demonstrate its cost-effectiveness for cross-domain transfer. Transcoders are sparse autoencoders that replace MLP layers to provide interpretable feature representations. By substituting MLP layers of both base Gemma2-2b and its medical fine-tuned variant with per-layer transcoders, we enable feature-level attribution analysis. Through systematic pruning and node merging of resulting attribution graphs, we construct human-interpretable decision pathways. Our analysis reveals that LLMs employ two parallel mechanisms for medical diagnosis: pattern matching and multi-hop reasoning, with fine-tuned models demonstrating enhanced correct reasoning patterns. This work provides a practical framework for training transcoders on fine-tuned models at minimal cost, enabling broader application of mechanistic interpretability across domains and potentially guiding model training through transcoder-based analysis.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型在医疗等高安全领域部署时缺乏决策透明度，其链式思维推理可能不忠实于真实内部计算，亟需可解释性方法揭示模型内部推理机制。
- **背景**：现有可解释性研究（如稀疏自编码器、转码器）主要针对基础模型，而针对领域微调模型从头训练转码器计算成本极高，直接应用基础模型转码器无法捕捉领域适配变化。
- **整体含义**：提出一种高效、低成本的解释性框架，通过冻结注意力层微调（FTFA）和后续转码器适配（PAT），在保持或提升模型性能的同时，实现跨领域可解释性分析，揭示医学诊断中并行推理机制。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：将微调限制在MLP（前馈网络）层，冻结注意力层，使转码器能够高效适配；利用神经正切核理论证明转码器微调可近似从头训练。
- **关键技术细节**：
  - **FTFA（Medical Fine-Tuning with Frozen Attention Layers）**：只更新MLP参数，冻结所有注意力组件，保持原始注意力行为，确保表征变化仅源于MLP，便于后续转码器分析。
  - **PAT（Posterior Adaptation Transcoders）**：基于已训练的基础模型转码器，在微调数据集上进一步微调（仅需少量数据和计算），代替从头训练。其损失函数包括MLP输出一致性和稀疏正则项。
  - **公式**：
    - 转码器训练损失：`L_TC = ||MLP(x) - TC(x)||₂² + λ||θ_TC(x)||₁`
    - FTFA微调目标：`L(θ_MLP) = E_{(x,y)~D}[ℓ(f(x; θ_Attn^0, θ_MLP), y)]`
    - 利用NTK证明：当网络宽度趋于无穷时，微调后的转码器输出几乎处处等于目标MLP输出。
- **算法流程**：
  1. 在基础模型上预训练转码器（替代所有MLP层）。
  2. 采用FTFA策略，冻结注意力层，在医疗数据集上只微调MLP参数获得微调模型。
  3. 利用PAT，在相同数据集上微调基础模型的转码器，得到适配的转码器。
  4. 通过激活分析、直接对数归因等方法构建属性图，合并语义相似特征，揭示推理路径。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：
  - MEDQA（多选问答，10178条）
  - Symptom2Disease（症状-疾病匹配，853条）
  - DDXPlus（问答式诊断，13310条）
  - 另有CUPCase医疗诊断基准用于性能评估。
- **基准**：医疗诊断任务（准确率、BERTScore）；对比基础模型（Gemma2-2b）、全参数微调（SFT）、其他通用模型（Llama-3.2-3B, Llama-3.1-8B, Qwen2.5-7B-Instruct）及专用医疗模型（II-Medical-8B, MedFound-7B）。
- **对比方法**：
  - 直接使用基础模型转码器于微调模型（FT-Base-16k-26L）
  - 从头训练转码器（18层模型，每层16k-524k特征）
  - 本文的PAT方法（Ours-16k-26L）

### 4. 资源与算力

- **文中明确说明**：
  - 从头训练转码器：约需**1B训练 token** 和 **210 GPU小时（H100）**。
  - 本文PAT方法：仅需**1M token** 和 **0.2 GPU小时（H100）**，效率提升超过1000倍。
  - 未提及使用的GPU具体型号、数量等更多细节。

### 5. 实验数量与充分性

- **实验组数**：
  - **性能对比**（Q1）：在单一医疗基准上对比了7种模型+3种微调策略的准确率和BERTScore。
  - **内部表征分析**（Q2）：PCA移位分析（8种疾病）、特征分布分析（按医学相关性和推理正确性分类）。
  - **转码器精度与效率**（Q3）：对比了不同转码器配置的Top-1误差和KL散度。
  - **案例研究**（Q4）：具体分析HIV病例的推理图，展示基模与FTFA模型的差异。
- **充分性评价**：实验设计相对完整，覆盖性能、表征变化、方法效率、机制揭示四个维度。但：
  - 性能对比仅在一个基准上进行，缺乏更多医疗任务（如诊断对话、临床笔记分析）的验证。
  - 案例研究仅展示一个代表案例，缺乏大规模统计验证。
  - 消融实验（如不同冻结策略、不同微调数据规模）未明确呈现。
- **公平性**：对比方法均为公开或标准方法，指标选择客观（准确率、BERTScore、KL散度），但未比较其他可解释性方法（如注意力分析、梯度解释）。

### 6. 论文的主要结论与发现

- FTFA不仅保持模型性能，反而提升准确率（+1.48）和BERTScore（+5.15），优于全参数微调。
- 直接应用基础模型转码器到微调模型几乎无效（Top-1误差接近100%），而PAT方法在精度和KL散度上接近从头训练。
- 内部表征分析显示：常见疾病（如糖尿病）微调后移位小，少见病（如HIV、偏头痛）移位大；FTFA增加了医疗相关特征激活，减少了错误推理特征。
- 通过属性图揭示LLM采用**两种并行推理机制**：模式匹配（症状直接关联疾病）和多跳推理（通过中间概念链）。基模中错误的多跳推理常占主导，FTFA后模型转向正确因果推理路径。
- 方法可跨领域迁移，为低资源可解释性研究提供实用框架。

### 7. 优点

- **效率显著**：PAT相比从头训练节省>1000倍计算和数据资源，使可解释性应用于微调模型变得现实。
- **理论支撑**：利用NTK理论证明有限宽度下微调转码器的可行性，确保方法可靠性。
- **揭示新机制**：首次在医学领域发现模式匹配与多跳推理的双通道机制，并展示微调如何优化推理路径。
- **模块化设计**：冻结注意力层、只改MLP层的方法天然适配转码器结构，便于后续解释。
- **开源代码**：提供GitHub仓库，可复现实验。

### 8. 不足与局限

- **案例研究依赖性**：机制分析主要基于少量代表性案例（如HIV），未进行大规模统计验证，可能受选择偏差影响。
- **模型规模有限**：仅验证于Gemma2-2b（2B参数），未在更大模型（如7B、70B）或不同架构上验证通用性。
- **理论假设限制**：NTK证明假设无限宽度，实际模型宽度有限且含稀疏约束，理论保证可能不完全成立。
- **实验覆盖不足**：仅在一个医疗诊断基准上评估性能，缺乏多任务（如临床问答、报告生成）验证；消融实验不充分。
- **可解释性方法本身局限**：转码器可能无法完全捕捉所有重要特征，且属性图构建涉及手动合并，引入主观性。
- **伦理声明**：强调模型非临床用途，但未讨论潜在错误推理导致风险的安全措施。

（完）

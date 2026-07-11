---
title: "MedS³: Towards Medical Slow Thinking with Self-Evolved Soft Dual-sided Process Supervision"
title_zh: MedS³：面向医学慢思考的自进化软双边过程监督
authors: "Shuyang Jiang, Yusheng Liao, Zhe Chen, Ya Zhang, Yanfeng Wang, Yu Wang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40395/44356"
tags: ["query:mlr"]
score: 8.0
evidence: 使用自进化过程监督和MCTS进行医疗临床推理
tldr: 该论文提出MedS3框架，通过蒙特卡洛树搜索构建可验证规则的推理轨迹，并引入软双边过程监督，实现小参数量医疗语言模型向强推理能力的自进化。针对当前医疗语言模型在细粒度监督和任务覆盖上的不足，MedS3从少量课程采样实例开始，在多个医疗域数据集上进行自我演化，最终使小模型具备接近大模型的临床推理能力，且可部署。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有医疗语言模型缺乏细粒度的过程监督，且依赖大模型部署困难。
method: 提出MedS3，利用MCTS生成验证推理轨迹，并通过软双边过程监督训练小模型自进化。
result: 小模型在五个医疗域的16个数据集上取得了与大模型相当的推理性能。
conclusion: MedS3展示了自我进化过程监督在医疗临床推理中的有效性，便于实际部署。
---

## Abstract
Medical language models face critical barriers to real-world clinical reasoning applications. 
However, mainstream efforts, which fall short in task coverage, lack fine-grained supervision for intermediate reasoning steps, and rely on proprietary systems, are still far from a versatile, credible and efficient language model for clinical reasoning usage.
To this end, we propose MedS3, a self-evolving framework that imparts robust reasoning capabilities to small, deployable models. 
Starting with 8,000 curated instances sampled via a curriculum strategy across five medical domains and 16 datasets, we use a small base policy model to conduct Monte Carlo Tree Search (MCTS) for constructing rule-verifiable reasoning trajectories. 
Self-explored reasoning trajectories ranked by node values are used to bootstrap the policy model via reinforcement fine-tuning and preference learning. 
Moreover, we introduce a soft dual process reward model that incorporates value dynamics: steps that degrade node value are penalized, enabling fine-grained identification of reasoning errors even when the final answer is correct.
Experiments on eleven benchmarks show that MedS3 outperforms the previous state-of-the-art medical model by +6.45 accuracy points and surpasses 32B-scale general-purpose reasoning models by +8.57 points.
Additional empirical analysis further demonstrates that MedS3 achieves robust and faithful reasoning behavior.

---

## 论文详细总结（自动生成）

### 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：现有医疗语言模型（Medical LLMs）在真实临床推理应用中存在三大障碍：任务覆盖不足、缺乏对中间推理步骤的细粒度监督、依赖封闭源大模型（如GPT-4、o1）进行蒸馏导致可部署性差且存在幻觉风险。
- **整体含义**：本文旨在为小型可部署模型（如8B参数级）赋予强健的逐步推理能力，使其在不依赖大模型的情况下，通过自我进化实现可信、高效的临床推理。

---

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：构建自进化框架MedS³，利用蒙特卡洛树搜索（MCTS）构建可验证规则的推理轨迹，再通过强化微调（RLFT）和偏好学习（DPO）提升策略模型，并引入软双边过程奖励模型（Soft Dual-sided PRM）进行细粒度步骤监督。
- **关键技术细节**：
  - **MCTS引导的进化**：构建n-ary树，每轮包含节点选择（UCB公式）、节点扩展（基于Reason节点生成后续步骤）、节点Rollout（多次模拟求平均准确率作为节点值）、反向传播（更新节点访问次数和值）。终止条件：树中正确节点数达到阈值τ=3，或超出探索预算。
  - **策略模型训练**：首先用正确叶节点对应的完整推理轨迹进行SFT；第二迭代中加入步骤级DPO，使用正确步骤与错误步骤对进行偏好优化。
  - **软双边PRM训练**：为每个训练样本的步骤生成软标签，通过前向和后向视角综合判断：若当前步骤导致节点值退化（即 \(v_i < v_{i-1}\)），则施加惩罚（公式7），鼓励PRM识别误导性步骤。损失函数采用二元交叉熵。
  - **迭代训练流程**：两轮迭代，结合课程采样器（先拒绝采样过滤全正确实例，再采样准确率最低的困难样本），保证数据效率。
- **公式示例**：
  - UCB公式：\(\text{UCB}(T) = v_C + \gamma \sqrt{\frac{\ln n_{T_{\text{parent}}}}{n_T}}\)
  - 节点值更新：\(v_k = \frac{1}{2}\left(v_k + \frac{\sum_{\text{ch}} v_{\text{ch}} n_{\text{ch}}}{\sum_{\text{ch}} n_{\text{ch}}}\right)\)
  - 软标签：\(y_i = \begin{cases} \lceil v_i - \beta \cdot \max(0, v_{i-1} - v_{i+1}) \rceil & v_i < v_{i-1} \\ \lceil v_i \rceil & \text{otherwise} \end{cases}\)
  - PRM损失：\(\mathcal{L}_{V_\theta} = \mathbb{E}_{T_k \sim D_{V_\theta}} \sum_{i=1}^k \left[ y_i \log \hat{y}_i + (1-y_i)\log(1-\hat{y}_i) \right]\)

---

### 3. 实验设计：数据集、场景、基准、对比方法
- **数据集**：种子数据来自16个公开医疗数据集，划分为5个维度（临床诊断QA、自然语言推理、知识密集型QA、长上下文QA、生物医学QA），共约8000个实例经课程采样。
- **评估基准**：11个域内基准（MedQA-5op、PubMedQA、MedMCQA、BioASQ、MMLU医学子集、BioMRC、PubHealth、HealthFact、DDX-Plus、DrugDose、SEER分类）以及3个域外基准（MedCalc、MedXpert、Rare Disease Confirmation）。
- **对比方法**：
  - 大型通用模型：GPT-4o-mini、GPT-3.5-turbo、QwQ-32B-preview、R1-Distill-Qwen32B
  - 小型通用模型：Qwen2.5-7B、Llama3-8B、Llama3.1-8B、R1-Distill-Llama8B
  - 小型医疗模型：MedLlama3、Med42、OpenBioLLM、UltraMedical3/3.1-8B、m1-7B-32K、HuatuoGPT-o1-8B
- **评估协议**：所有基线使用CoT推理，MedS³使用PRM计算最小步骤值并结合Best-of-N（N=32）选择最终回答。

---

### 4. 资源与算力
- 论文中**未明确说明**使用的GPU型号、数量或训练时长。仅提及基础模型为Llama3.1-8B-Instruct，且框架设计为小模型自进化，通常可部署在低资源设备上。未提供具体算力开销信息。

---

### 5. 实验数量与充分性
- **实验数量**：在11个域内基准和3个域外基准上进行评估，对比了三大类共约15个基线模型。消融实验包含5种设置（SFT、+DPO、+H-S label PRM、+H-D label PRM、+S-D label PRM），以及不同初始化对比。额外分析包括：缩放特性（迭代次数、测试时采样数）、反思行为比例、推理风格对比（蒸馏 vs RL vs MCTS+PRM）。
- **充分性与客观性**：实验覆盖全面，既包括传统考试题QA（MedQA等），也包括真实临床诊断任务（DDX-Plus、SEER、药物剂量）。域外泛化测试验证了鲁棒性。消融实验清楚展示了每个模块的贡献。对比方法选择具有代表性，包括开源和闭源模型，且实验使用了标准评估协议（CoT、Best-of-N）。整体设计较为客观公平。

---

### 6. 论文的主要结论与发现
- MedS³在11个域内基准上平均达到73.10%准确率，超越所有同等参数级医疗模型（+6.45分）和32B级通用推理模型（+8.57分）。
- 软双边标签PRM比硬标签或单侧标签PRM提升更显著（+4.7分 vs. 无PRM）。
- 两轮自我进化持续提升性能，且测试时间缩放（增加采样数）呈现对数线性增长，无明显饱和。
- MedS³产生的幻觉内容比例低于其他合成数据训练模型（如HuatuoGPT-o1、R1-Distill-Llama8B），归功于PRM对误导步骤的惩罚。
- 反思行为（Reflect）在PRM引导的推理中比例更高，表明模型学会了自我纠正。

---

### 7. 优点：方法或实验设计上的亮点
- **方法论亮点**：
  - 首次提出面向医疗推理的步骤级自进化框架，无需大模型蒸馏。
  - 软双边标签PRM创新性地结合前向（未来正确性）和后向（步骤是否退化）判断，实现对中间错误步骤的精细惩罚，比传统PRM更符合临床推理的逐步置信构建。
  - MCTS探索与课程采样结合，仅用少量高质量种子数据即可获得显著提升，数据高效。
  - 支持推理时灵活缩放（Best-of-N），适用于资源受限设备。
- **实验设计亮点**：
  - 覆盖5大医疗任务类型，16个数据集，确保训练多样性。
  - 域外泛化测试（MedCalc、MedXpert、罕见病确认）验证了真实场景适应性。
  - 消融实验包含多种标签变体，验证了软双边标签的必要性。
  - 对反思行为进行量化分析，展示了模型的自我纠错能力。

---

### 8. 不足与局限：包括实验覆盖、偏差风险、应用限制等
- **实验覆盖**：虽然包括了DDX-Plus等临床诊断任务，但未涉及实际电子病历（EHR）数据或实时临床决策支持场景，离真实医院部署仍有距离。
- **偏差风险**：训练数据主要来自公开学术数据集（如MedQA、PubMedQA），可能存在语言、地区、疾病类型的偏差（如以英文和北美临床指南为主），未覆盖低资源语言或罕见病。
- **应用限制**：
  - 模型基于8B参数，尽管可部署，但推理时Best-of-N（N=32）需多次前向传播，对延迟敏感场景仍不理想。
  - 软双边PRM的惩罚系数β通过简单网格搜索确定（设为1.0），可能需针对不同任务调优，泛化能力需进一步验证。
  - 论文未提供训练时长、GPU资源等信息，难以复现和评估实际成本。
  - 仅使用两轮自我进化，更迭轮次是否可持续提升未知（可能存在过拟合风险）。
- **其他**：对比方法中部分大型模型（如GPT-4o-mini）并未使用微调，只使用零样本CoT，公平性存在一定争议；但论文主要聚焦于小模型之间的比较，结论仍具参考价值。

（完）

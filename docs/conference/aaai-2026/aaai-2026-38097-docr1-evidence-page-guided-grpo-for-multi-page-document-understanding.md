---
title: "DocR1: Evidence Page-Guided GRPO for Multi-Page Document Understanding"
title_zh: DocR1：面向多页文档理解的证据页面引导GRPO
authors: "Junyu Xiong, Yonghui Wang, Weichao Zhao, Chenyu Liu, Bing Yin, Wengang Zhou, Houqiang Li"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38097/42059"
tags: ["query:mlr"]
score: 9.0
evidence: 将GRPO与证据感知奖励相结合用于多页文档理解
tldr: 多页文档理解需要细粒度视觉理解和跨页推理，现有方法难以应对。本文提出DocR1，采用证据页面引导的GRPO（EviGRPO），通过证据感知奖励机制促使模型先定位相关页面再生成答案。配合两阶段标注流程和课程学习，DocR1在多页文档问答基准上显著优于先前方法，展示了强化学习在复杂文档理解中的潜力。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 多页文档理解对MLLM构成挑战，需要细粒度视觉和跨页推理能力。
method: 提出证据页面引导的GRPO框架EviGRPO，结合证据感知奖励和课程学习。
result: 在多页文档问答基准上，DocR1显著优于现有方法。
conclusion: DocR1验证了GRPO在复杂文档理解中的有效性和泛化能力。
---

## Abstract
Understanding multi-page documents poses a significant challenge for multimodal large language models (MLLMs), as it requires fine-grained visual comprehension and multi-hop reasoning across pages. While prior work has explored reinforcement learning (RL) for enhancing advanced reasoning in MLLMs, its application to multi-page document understanding remains underexplored. In this paper, we introduce DocR1, an MLLM trained with a novel RL framework, Evidence Page-Guided GRPO (EviGRPO). EviGRPO incorporates an evidence-aware reward mechanism that promotes a coarse-to-fine reasoning strategy, guiding the model to first retrieve relevant pages before generating answers. To support this, we design a rigorous two-stage annotation pipeline and a curriculum learning strategy that enables effective training with limited supervision. Using this pipeline, we construct two datasets: EviBench, a high-quality training set with 4.8k examples, and ArxivFullQA, a benchmark with 8.6k QA examples over full scientific papers. Extensive experiments across a wide range of benchmarks demonstrate that DocR1 achieves state-of-the-art performance on multi-page tasks while maintaining strong results on single-page benchmarks.

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：多页文档理解（如科学论文、合同、报告）要求多模态大语言模型（MLLM）具备细粒度视觉理解和跨页多跳推理能力，但现有MLLM主要针对单页文档，缺乏对多页场景的有效处理。
- **背景**：虽然强化学习（RL）已被用于提升LLM/MLLM的推理能力（如DeepSeek-R1、VisualRFT、Vision-R1），但尚未有工作将RL应用于多页文档理解。多页任务的核心挑战在于：需要先检索相关页面，再在分散内容上进行推理。
- **论文目标**：提出DocR1，一个专门为多页文档理解设计的MLLM，通过新的RL框架EviGRPO实现“粗到细”的推理策略，先定位证据页面再生成答案，从而提升多页文档问答性能。

## 2. 论文提出的方法论
### 核心思想
- **EviGRPO**（Evidence Page-Guided GRPO）：在原始GRPO基础上引入证据感知奖励，鼓励模型模仿人类阅读行为——先形成全局理解，再检索相关页面，最后基于选中页面进行细粒度推理。
- **推理输出格式**：模型必须依次输出 `<think>...</think>`（思考过程）、`<evidence_page>...</evidence_page>`（每个页面的相关性判断，T/F序列）、`<answer>...</answer>`（最终答案）。

### 关键技术细节
- **奖励函数设计**：总奖励 \( r_i = r_{\text{format}}^i + r_{\text{acc}}^i + r_{\text{evi}}^i \)。
  - 格式奖励 \( r_{\text{format}}^i \)：输出必须严格遵循上述格式，否则为0。
  - 答案准确性奖励 \( r_{\text{acc}}^i \)：基于ANLS评分。
  - 证据页面奖励 \( r_{\text{evi}}^i \)：采用F1分数衡量预测证据页面集 \( P_i \) 与真实集 \( G_i \) 的重叠，并强制预测的页面数必须与实际输入图片数 \( N \) 相等（否则为0），防止奖励攻击。
- **优势计算**：像GRPO一样，对组内奖励做均值-标准差归一化得到优势值 \( A_i \)。
- **优化目标**：带KL散度正则和裁剪的GRPO目标函数（公式(4)），约束策略更新。

### 算法流程（文字描述）
1. 对于每个训练样本（问题 \( q \) + \( N \) 张文档图片），当前策略生成 \( G \) 个候选回答。
2. 对每个回答计算格式、答案准确性和证据页面三个奖励，求和得到总奖励。
3. 组内归一化得到每个回答的优势值。
4. 通过带KL散度和裁剪的策略梯度更新模型参数。

### 数据构建
- **两阶段标注流水线**：第一阶段用Gemini 2.5 Flash生成初始答案（含推理、证据页面、最终答案），仅保留答案匹配GT的样本；第二阶段用同一模型再次验证，只有两次输出一致的样本才被保留。
- **训练集EviBench**：包含1.3k单页样本（来自13个公开数据集）和3.5k多页样本（来自DUDE、MP-DocVQA、TATDoc、SlideVQA、Multihiertt、ArxivFullQA_train），共4.8k样本。
- **测试集ArxivFullQA**：基于DocMatrix构建，包含8.6k QA对，覆盖科学论文的7种问题类型（事实、推理、比较、摘要、程序、动机、结果）。

### 训练策略
- **两阶段课程学习**：第一阶段在单页数据上训练1个epoch，使模型熟悉输出格式和粗到细推理风格；第二阶段在多页数据上继续训练1个epoch，提升跨页推理能力。
- 初始化使用Qwen2.5-VL-Instruct（7B），因为它已具备一定推理能力，可跳过GRPO的“冷启动”阶段。

## 3. 实验设计
### 数据集与基准
- **单页基准**：6个公开数据集：DocVQA、InfographicVQA、WikiTableQuestions、TabFact、TextVQA、VisualMRC。
- **多页基准**：6个公开数据集（DUDE、MP-DocVQA、TATDoc、MultiChartQA、MultiHiertt、SlideVQA） + 自建ArxivFullQA。评估指标统一为ANLS。

### 对比方法
- 单页上对比：UReader、TextMonkey、DocOwl系列、Qwen2.5-VL-Instruct。
- 多页上对比：LLaVA-NeXT-Inter、LEOPARD-Idefics2、mPlug-DocOwl2、LLaVA-oneVison、InternVL3-Instruct（38B）、Qwen2.5-VL-Instruct（32B和7B），以及基线Qwen2.5-VL-Instruct 7B。
- 消融实验对比：SFT、标准GRPO、不同数据组成、不同页面选择格式（PSF-1、PSF-2）、混合训练vs课程训练。

## 4. 资源与算力
- **GPU**：8×NVIDIA A100。
- **训练设置**：batch size 16，每样本生成G=8个候选，KL惩罚系数β=0.04，输入图像分辨率限制为1024×28×28。
- **训练时长**：文中未明确说明具体训练时长，只提到两个阶段各训1个epoch。

## 5. 实验数量与充分性
- **实验数量**：涵盖主实验（7个多页基准+6个单页基准）、消融实验（训练范式、数据组成、训练策略、页面选择格式、证据页面召回率），共约10余组对比。
- **充分性**：实验设计较为全面，消融覆盖了方法的核心组件（奖励、数据、策略）。所有对比均在同一初始化模型（Qwen2.5-VL-7B-Instruct）上公平进行。评测指标选择ANLS（多页）和常见指标（单页），具有客观性。
- **潜在局限**：仅使用7B参数量模型，未在更大尺寸（如32B）上验证泛化性；仅聚焦问答任务，未测试其他文档理解任务（如信息抽取、表格理解）；训练数据量较小（4.8k），可能限制跨领域泛化。

## 6. 论文的主要结论与发现
- DocR1在多页文档理解基准上平均得分59.36，比基线Qwen2.5-VL-Instruct 7B高6.93分，且超越更大模型（38B/32B），证明了RL框架的有效性和数据效率。
- 在单页基准上性能保持甚至小幅提升，表明方法不会牺牲单页能力。
- 证据页面召回率平均提升38.77%，说明粗到细推理机制能准确定位关键页面。
- 课程学习（先单页后多页）优于直接混合训练，体现了先激活格式和推理基础的策略价值。
- EviGRPO优于标准GRPO和SFT，说明证据感知奖励对多页推理至关重要。

## 7. 优点
- **方法简洁有效**：仅用有限标注（4.8k样本）即可显著提升多页推理，数据效率高。
- **可解释性强**：模型显式输出思考过程、证据页面和最终答案，便于理解和验证。
- **构建新基准**：ArxivFullQA（8.6k样本）填补了科学论文多页问答基准的空白。
- **两阶段标注流水线**通过自检提升数据质量，减少噪声。
- **奖励设计细致**：证据页面奖励采用F1分数并强制输出个数匹配，有效防止奖励攻击。

## 8. 不足与局限
- **算力需求较高**：仍需要8×A100进行训练，且未报告训练时间，可能对小团队不友好。
- **模型规模局限**：仅实验了7B模型，不清楚更大模型是否增益更大或存在边际递减。
- **任务覆盖有限**：只评估了视觉问答任务，未涉及文档分类、信息抽取、表格计费等常见文档理解任务。
- **数据域偏斜**：训练数据主要来自公开基准和ArXiv论文，可能对表格密集、手写体等真实场景泛化不足。
- **课程学习策略简单**：单页和多页各固定1个epoch，未探索更优的轮次配置或动态调度。
- **奖励函数依赖精确证据页面标注**：对于需要跨多个页面综合推理的问题，证据页面标注可能存在主观性或歧义，可能影响奖励准确性。

（完）

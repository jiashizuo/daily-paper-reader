---
title: "Thinker: Training LLMs in Hierarchical Thinking for Deep Search via Multi-Turn Interaction"
title_zh: Thinker：通过多轮交互训练LLM进行层次化深度搜索思考
authors: "Jun Xu, Xinkai Du, Yu Ao, Peilong Zhao, Yang Li, Ling Zhong, Lin Yuan, Zhongpu Bo, Xiaorui Wang, Mengshu Sun, Zhengke Gui, Dalong Zhang, Zhaoyang Wang, Wang Qiwei, Yangyang Hou, Zhiying Yin, Haofen Wang, Huajun Chen, Lei Liang, Jun Zhou"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40709/44670"
tags: ["query:mlr"]
score: 7.0
evidence: 基于层次化思维的端到端强化学习推理
tldr: 现有端到端强化学习忽视推理过程监督，导致逻辑不严谨。Thinker提出层次化思维模型，将复杂问题分解为子问题，通过多轮交互进行深度搜索，使推理过程可监督可验证。实验证明其提升了推理的连贯性和准确性，适用于需要外部知识检索的复杂任务。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 端到端强化学习缺乏对推理过程的有效监督。
method: 提出层次化思维模型，分解问题为子问题并多轮交互，使推理过程可验证。
result: 在复杂推理任务上提高了逻辑连贯性和答案准确性。
conclusion: 层次化可监督推理框架为强化学习后训练提供了新途径。
---

## Abstract
Efficient retrieval of external knowledge bases and web pages is crucial for enhancing the reasoning abilities of LLMs.
Previous works on training LLMs to leverage external retrievers for solving complex problems have predominantly employed end-to-end reinforcement learning. However, these approaches neglect supervision over the reasoning process, making it difficult to guarantee logical coherence and rigor.
To address these limitations, we propose Thinker, a hierarchical thinking model for deep search through multi-turn interaction, making the reasoning process supervisable and verifiable.
It decomposes complex problems into independently solvable sub-problems, each dually represented in both natural language and an equivalent logical function to support knowledge base and web searches. 
Concurrently, dependencies between sub-problems are passed as parameters via these logical functions, enhancing the logical coherence of the problem-solving process. 
To avoid unnecessary external searches, we perform knowledge boundary determination to check if a sub-problem is within the LLM's intrinsic knowledge, allowing it to answer directly.
Experimental results indicate that with as few as several hundred training samples, the performance of Thinker is competitive with established baselines. 
Furthermore, when scaled to the full training set, Thinker significantly outperforms these methods across various datasets and model sizes.

---

## 论文详细总结（自动生成）

### 论文详细中文总结

#### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：现有的大语言模型（LLM）在处理需要外部知识检索和复杂推理的任务时，通常采用端到端强化学习训练，但这种方式忽略了推理过程的可监督性，导致逻辑连贯性和严谨性不足。具体表现为：子问题交织、层次不清、粒度不一致、搜索效率低等问题。
- **研究动机**：受人类专家结构化思维（先分解问题，再逐一解决）的启发，论文旨在提出一种可监督、可验证的层次化推理框架，以提高 LLM 在深度搜索任务中的逻辑性和效果。
- **整体含义**：通过将复杂问题分解为原子子问题、采用自然语言与逻辑函数的双表示、引入知识边界判断等手段，使得推理过程更加透明、可控，并能有效利用外部知识库和搜索引擎。

#### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：层次化思维（Hierarchical Thinking）——广度分解（Breadth Decomposition）+ 深度求解（Depth Solving）。将复杂问题拆解为可独立解决的子问题，每个子问题拥有双表示（自然语言 Step 与逻辑函数 Action），并通过函数参数传递依赖关系。
- **关键技术细节**：
  - **广度分解**：将原问题一次性分解为 n 个原子粒度的子问题，每个子问题使用四种逻辑函数之一（Retrieval、Math、Deduce、Output），依赖通过变量 `#n`、`o_n`、`s_n` 传递。
  - **深度求解**：针对需要检索的子问题，迭代执行搜索、聚焦（Focusing）和推理（Reasoning），直到获得答案或达到最大轮次。
  - **知识边界确定**：先让模型利用内部知识生成答案，然后通过两种置信度评估（Prompt-based 和 Likelihood-based）进行双验证，仅当两者都判定为 True 时才采纳内部答案，否则启动外部检索。
    - **Prompt-based 评估**：通过提示让模型自我反思，输出二元判断。
    - **Likelihood-based 评估**：取生成序列中所有 token 的最小概率作为置信度分数 C，与阈值 τ 比较。
  - **多轮交互训练**：采用监督微调（SFT），将完整的多轮交互序列（System + User + Assistant 多轮）拼接，仅对 Assistant 的响应 token 计算交叉熵损失。
- **算法流程**（文字说明）：
  1. 输入复杂问题，通过广度分解生成原子子问题列表（每个子问题包含 Step 和 Action）。
  2. 对每个子问题，先进行知识边界确定：若模型内部知识可自信回答，则直接输出；否则进入深度求解。
  3. 深度求解中：生成检索查询 → 执行检索 → 应用聚焦与推理 → 若未得到答案则生成新的查询或逻辑函数，循环直至条件满足。
  4. 所有子问题解答后，通过 Deduce 或 Output 函数综合得到最终答案。

#### 3. 实验设计：数据集、基准、对比方法
- **数据集**（共 7 个）：
  - 单跳 QA：NQ、TriviaQA、PopQA
  - 多跳 QA：HotpotQA、2WikiMultiHopQA、MuSiQue、Bamboogle
  - 其中 NQ、HotpotQA 作为训练集，其他作为测试集。
- **基准**：各数据集上的 Exact Match (EM) 和 F1 分数。
- **对比方法**：分为三类：
  - 非检索范式：Naive Generation、Chain-of-Thought (CoT)
  - 检索增强架构：Naive RAG、IRCoT、Search-o1
  - 强化学习方法：R1-Gen、Search-R1、ZeroSearch、StepSearch、ReSearch
  - 所有方法使用相同基座模型（Qwen2.5-3B/7B-Instruct）和检索器（E5-base-v2）。

#### 4. 资源与算力
- **未明确说明**：论文在实现细节部分未提及使用的 GPU 型号、数量或训练时长。仅在消融实验中提到使用 71K 训练样本（来自 NQ 和 HotpotQA），以及 FlashRAG 进行索引和嵌入预处理。未提供算力开销的具体数据。

#### 5. 实验数量与充分性
- **实验数量**：主要实验包括：
  - 主结果表（表1）：2 种模型大小 × 7 数据集 × 约 11 个基线 → 充分对比。
  - 消融研究（表3）：移除深度求解、知识边界、聚焦&推理、逻辑函数 → 4 组。
  - 敏感性分析（表4-5、表7）：样本数量（1%~100%）、深度搜索轮次（1~5）、知识边界缩减率。
  - 知识增强图（KAG）实验（表6）：在自建语料上与 Search-R1、ReSearch 对比。
  - 强化学习扩展实验（图4）：SFT+RL 对比，训练奖励、响应长度、EM/F1 曲线。
- **充分性评价**：实验设计较为全面，覆盖了不同模型大小、不同复杂度数据集、多个消融维度、样本效率、深度搜索轮次、知识边界影响以及 RL 后训练。对比方法在同一基座模型和检索设置下进行，保证了公平性。实验充分且客观。

#### 6. 论文的主要结论与发现
- **主要结论**：Thinker 在所有 7 个数据集上显著优于现有的深度搜索方法，尤其在 3B 模型上平均 EM 提升 7.9%（对比 ReSearch）。样本效率极高：仅用 1% 训练样本（数百条）即可达到接近 SOTA 的性能。
- **关键发现**：
  - 广度分解 + 深度求解有效降低了单次检索的复杂度，提升了多跳问题准确率。
  - 知识边界确定模块可减少约 16%-18% 的不必要检索，且判断准确率超过 96%。
  - 双表示（逻辑函数）在配合图检索（KAG）时可进一步提升 3-4% 的 EM/F1。
  - SFT + RL 训练可比纯 SFT 提升 EM 约 2.7%（0.452→0.479），且更短的输出长度约束（8K）最终表现优于 16K。

#### 7. 优点：方法或实验设计上的亮点
- **方法亮点**：
  - 提出层次化思维，将复杂问题分解为原子子问题，使推理过程可监督、可验证。
  - 双表示（自然语言 + 逻辑函数）同时支持纯文本检索和结构化知识库检索，灵活性强。
  - 知识边界确定模块有效减少噪声和计算开销，提高效率。
  - 多轮交互训练框架兼容监督学习和强化学习，可灵活迁移到专业领域。
- **实验设计亮点**：
  - 在多个规模和类型的数据集上评估，覆盖单跳和多跳。
  - 做了详细的消融和敏感性分析，验证了每个组件的贡献。
  - 对比方法全面，且控制了基座模型和检索器的一致性。

#### 8. 不足与局限
- **实验覆盖**：所有数据集均为英文 Wikipedia 领域，未验证中文或其他语言、专业领域（如法律、医疗）的效果。虽然附录中提及医疗诊断示例，但缺乏定量实验。
- **偏差风险**：训练数据仅来自 NQ 和 HotpotQA，可能引入数据集偏差；测试集与训练集可能存在分布重叠（如 HotpotQA 既用于训练也用于测试？但论文提到使用 NQ 和 HotpotQA 训练，其他测试，需注意 HotpotQA 作为测试集时是否所有方法都用相同训练数据？实际上表1中 HotpotQA 所在列标记为 †，表示 in-domain，因此可能存在一定的过拟合风险，但对比方法同样在 HotpotQA 上训练过？需要核实：ReSearch 等也在类似数据集训练，因此公平性尚可）。
- **应用限制**：方法依赖于逻辑函数预定义（四种），对于非结构化或开放式问题可能不灵活。知识边界确定的阈值 τ 需要手动调整，且可能过于保守或激进。
- **资源与复现**：未公开训练所需的计算资源，复现难度较大。且 KAG 部分依赖私有框架（未开源），结果难以完全复现。
- **强化学习部分**：仅进行了有限步数的 RL 训练（<700步），未探索更大规模 RL 的效果，结论的泛化性有限。

（完）

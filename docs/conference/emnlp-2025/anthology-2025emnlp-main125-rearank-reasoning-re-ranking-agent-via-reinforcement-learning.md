---
title: "REARANK: Reasoning Re-ranking Agent via Reinforcement Learning"
title_zh: REARANK：基于强化学习的推理重排序智能体
authors: "Le Zhang, Bo Wang, Xipeng Qiu (邱锡鹏), Siva Reddy, Aishwarya Agrawal"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.125.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用强化学习训练推理重排序智能体
tldr: 该论文提出REARANK，一个基于LLM的列表式推理重排序智能体。通过强化学习和数据增强进行训练，仅需179条标注样本即在多个信息检索基准上达到与GPT-4相当的性能，在推理密集型基准上甚至超越GPT-4，展示了强化学习增强LLM推理能力的有效性。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.125/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 780, \"height\": 823, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.125/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 794, \"height\": 342, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.125/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1333, \"height\": 418, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.125/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 727, \"height\": 513, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.125/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1604, \"height\": 527, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.125/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 791, \"height\": 506, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.125/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 769, \"height\": 393, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.125/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1641, \"height\": 727, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.125/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1657, \"height\": 554, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.125/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 805, \"height\": 381, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.125/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1657, \"height\": 514, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.125/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 802, \"height\": 375, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.125/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 585, \"height\": 167, \"label\": \"Table\"}]"
motivation: 现有重排序方法缺乏显式推理能力，且需要大量标注数据。
method: 提出REARANK，一个基于LLM的列表式推理重排序智能体，利用强化学习和数据增强训练。
result: 仅用179条标注样本即达到GPT-4级性能，在推理密集型任务上超越GPT-4。
conclusion: 强化学习能高效训练LLM进行推理重排序，显著降低数据需求。
---

## Abstract
We present REARANK, a large language model (LLM)-based listwise reasoning rerank- ing agent. REARANK explicitly reasons be- fore reranking, significantly improving both performance and interpretability. Leveraging reinforcement learning and data augmentation, REARANK achieves substantial improvements over baseline models across popular informa- tion retrieval benchmarks, notably requiring only 179 annotated samples. Built on top of Qwen2.5-7B, our REARANK-7B demonstrates performance comparable to GPT-4 on both in- domain and out-of-domain benchmarks and even surpasses GPT-4 on reasoning-intensive BRIGHT benchmarks. These results under- score the effectiveness of our approach and highlight how reinforcement learning can en- hance LLM reasoning capabilities in reranking.

---

## 论文详细总结（自动生成）

## 论文详细中文总结

### 1. 核心问题与整体含义（研究动机和背景）

- **研究背景**：信息检索（IR）系统通常采用“初检索+重排序”两阶段架构，其中重排序阶段对于提升最终结果质量至关重要。近年来，大型语言模型（LLM）作为重排序智能体显示出巨大潜力，但现有方法存在以下关键挑战：
  - LLM未针对排序目标进行优化，缺乏显式推理过程，可解释性差；
  - 高质量标注排序数据稀缺且昂贵（通常需要数万乃至数十万标注查询）；
  - 高性能重排序智能体往往依赖GPT-4等大型专有模型，带来高昂计算成本和推理延迟；
  - 零样本方法无法从重排序交互信号中学习。

- **核心问题**：如何利用少量标注数据（179条查询）训练一个具备显式推理能力、性能媲美GPT-4且计算高效的轻量级列表式重排序智能体。

### 2. 提出的方法论

- **核心思想**：提出REARANK，一个基于LLM的列表式推理重排序智能体。通过强化学习（RL）激励显式推理过程，利用列表式重排序中丰富的顺序信号进行优化；同时设计数据增强方法，从极少量标注种子生成大量多样化的训练实例。

- **关键技术细节**：
  - **列表式重排序策略**：给定查询\(q\)和初始排序\(\tau\)，对窗口大小\(w=20\)的段落子集应用LLM排列函数\(h\)，通过滑动窗口（步长\(w/2\)）迭代重排全部段落（\(n=100\)），最终仅需约10次LLM调用即可得到top-10结果。
  - **强化学习框架（GRPO）**：采用Grouped Policy Optimization算法，对每个输入采样一组输出序列\(G\)，基于奖励计算优势值。目标函数包括策略梯度项和KL散度惩罚项，公式为：
    \[
    J_{GRPO}(\theta) = -\frac{1}{|G|} \sum_{i=1}^{|G|} \frac{1}{|o_i|} \sum_{t=1}^{|o_i|} \left( \frac{\pi_\theta(o_{i,t}|x, o_{i,<t})}{[\pi_\theta(o_{i,t}|x, o_{i,<t})]_{\text{nograd}}} \hat{A}_{i,t} - \beta D_{KL}[\pi_\theta \| \pi_{\text{ref}}] \right)
    \]
    其中优势值\(\hat{A}_{i,t}\)为组内奖励的Z-score归一化。
  - **奖励设计**：组合奖励包括：
    - 主奖励：归一化NDCG@10（相对初始状态的改进分数），使用min-max归一化减少方差：
      \[
      r_{\text{rank}} = \frac{r_{\text{rerank}} - r_{\text{init}}}{r^* - r_{\text{init}}}
      \]
    - 格式奖励：鼓励输出包含`<think>`和`<answer>`标签，且格式正确。
      最终奖励 \(r = 0.8 \cdot r_{\text{rank}} + 0.1 \cdot r_{\text{format1}} + 0.1 \cdot r_{\text{format2}}\)。
  - **数据增强（初始状态扩展）**：从MS MARCO-V2中仅选取179条带有细粒度相关性标注（0-3分）的查询，对每个查询从其BM25 top-100结果中重复50次随机采样20个段落作为候选集，过滤后得到约12k个训练实例。

### 3. 实验设计

- **数据集与基准**：
  - 域内（In-domain）：TREC-DL19、TREC-DL20（源自MS MARCO-V1）。
  - 域外（Out-of-domain）：BEIR（包含Covid、NFCorpus、DBPedia、SciFact、Signal、News、Robust04等7个子集）。
  - 推理密集型：BRIGHT（涵盖StackExchange、Coding、Theorem-based、Biology、Economics、Psychology、Robotics等12个子领域）。

- **对比方法**：
  - 零样本基线：BM25、RankQwen2.5-7B、RankGPT-3.5、RankGPT-4。
  - SFT基线：RankZephyr-7B（在105k合成数据上蒸馏）。
  - 推理语言模型：RankQwen3-32B、RankQwen3-235B-A22B、Rank-R1-7B（并发的基于RL的setwise重排序方法）。
  - 所有重排序模型均在BM25 top-100结果上运行，窗口大小20，滑动步长10，评估指标为nDCG@10。

### 4. 资源与算力

- **训练资源**：在8块NVIDIA H100 GPU上进行训练，训练步数超过160步，使用VeRL框架，批量大小128，每次rollout 32个样本。
- **推理效率**：REARANK-7B（基于Qwen2.5-7B）每查询仅需约10次LLM调用即可完成100个段落的完整重排序。
- **未明确说明的内容**：未提及训练总时长、显存占用、推理延迟的具体数字，但通过与DeepSeek-R1的对比（约90-120秒/20段落）间接表明其高效性。

### 5. 实验数量与充分性

- **主要实验组数**：共呈现5个主要表格和多个分析图：
  - Table 1：域内（2个数据集）+ BEIR（7个数据集）结果。
  - Table 2：BRIGHT（12个子任务）结果。
  - Table 3：消融研究（6种设置：推理提示、数据过滤、三种奖励函数、直接SFT）。
  - Table 4：推理开关影响（在Qwen3-32B和REARANK上对比）。
  - Table 5：推理迁移能力（AIME 2024和AMC数学推理）。
  - 额外分析：奖励函数曲线对比（图4）、推理长度与性能关系（图6）、多遍重排序效果（图7）。
- **充分性与公平性**：实验设计较为全面，覆盖域内、域外、推理密集型场景；对比了零样本、SFT、RL等多种训练策略；消融实验验证了每个组件贡献；推理迁移实验证明了泛化性。但是，对比的基线中Rank-R1仅使用7B模型，而REARANK也使用7B，但Rank-R1使用了72k标注数据（远大于REARANK的179），对比体现数据效率。与GPT-4的对比是在相同提示模板下进行，较为公平。总体而言实验充分、客观。

### 6. 主要结论与发现

- REARANK-7B在域内基准（TREC-DL）上比RankQwen2.5-7B基线提升6.5%的nDCG@10，在域外（BEIR）提升4.5%，在推理密集型（BRIGHT）提升2.7%。
- 仅使用179条标注查询训练的REARANK-7B性能与GPT-4相当（甚至超越GPT-4在BRIGHT上的表现），并超越使用105k合成数据的SFT方法RankZephyr和72k数据的并发RL方法Rank-R1。
- REARANK的推理能力是通过RL从重排序任务中习得的，而非单纯依赖预训练：关闭推理时性能显著下降，而Qwen3-32B的推理仅带来微小改进。
- RL学到的推理策略具有迁移性：在AIME 2024和AMC数学推理任务上分别提升1.05和1.25个百分点的Pass@1。
- 归一化NDCG奖励相比绝对或差分NDCG更有效，能持续提升奖励值并产生更长的推理链。
- 推理长度与重排序性能之间无明确相关性，且多次重排序可能引入噪音（推理开启时多次重排序反而降低BRIGHT性能）。

### 7. 优点

- **数据效率极高**：仅需179条标注查询，通过数据增强生成多样训练实例，大幅降低标注成本。
- **显式推理增强**：生成的推理过程（`<think>`标签）提升可解释性，且通过RL有效学习重排序策略，而非简单模仿。
- **紧凑模型高性能**：基于7B参数模型，即可达到GPT-4级别性能，适合本地部署和低延迟场景。
- **列表式优于集合式**：列表式重排序提供丰富的顺序信号（而非二元相关信号），训练时奖励更稳定，推理时一次处理整个窗口，效率更高。
- **消融和迁移分析扎实**：验证了数据过滤、归一化奖励、RL对比SFT等关键因素，并证明推理能力可迁移至数学任务，增强了方法可信度。

### 8. 不足与局限

- **解释忠实性未评估**：生成的推理内容可能包含幻觉，论文未进行人工评估或自动化可信度检查。
- **依赖初始检索质量**：性能严重依赖BM25提供的候选集质量，若初始检索较差（如罕见查询），改进空间有限。
- **推理长度–性能关系不明确**：未发现正相关，说明长推理未必带来更好结果，可能在某些场景中浪费计算。
- **多遍重排序效果不稳定**：推理开启时多次重排序在部分基准上甚至损害性能，表明当前方法不适合迭代改进。
- **BRIGHT性能提升相对较小**：相比基线提升2.7% nDCG@10，虽超越GPT-4但绝对值仍较低，且未达到Qwen3-32B的水平。
- **领域覆盖有限**：BEIR和BRIGHT虽多样，但可能未覆盖法律、医学等专业领域，泛化性需进一步验证。

（完）

---
title: "TreeRL: LLM Reinforcement Learning with On-Policy Tree Search"
title_zh: TreeRL：基于在线策略树搜索的LLM强化学习
authors: "Zhenyu Hou, Ziniu Hu, Yujiang Li, Rui Lu, Jie Tang, Yuxiao Dong"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.604.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 基于在线策略树搜索的LLM强化学习框架
tldr: 针对LLM强化学习中缺乏密集过程奖励和分布不匹配问题，提出TreeRL框架。该框架将在线策略树搜索融入RL训练，自动生成中间监督信号，无需单独训练奖励模型。实验表明，TreeRL在推理任务上显著提升了性能。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 771, \"height\": 369, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1661, \"height\": 452, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1557, \"height\": 570, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 731, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 733, \"height\": 543, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1631, \"height\": 1756, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 752, \"height\": 545, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 637, \"height\": 430, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 468, \"height\": 616, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1653, \"height\": 1069, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.604/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1654, \"height\": 1077, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.604/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1640, \"height\": 819, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.604/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 822, \"height\": 421, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.604/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1658, \"height\": 318, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.604/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 762, \"height\": 1102, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.604/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 794, \"height\": 233, \"label\": \"Table\"}]"
motivation: 现有方法依赖独立奖励模型，存在分布不匹配和奖励黑客问题。
method: 提出TreeRL，将在线策略树搜索与RL结合，利用树搜索提供密集过程奖励。
result: 在推理基准上，TreeRL优于传统链式采样和独立奖励模型方法。
conclusion: TreeRL是一种高效且无需额外奖励模型的LLM强化学习框架。
---

## Abstract
Reinforcement learning (RL) with tree search has demonstrated superior performance in traditional reasoning tasks. Compared to conventional independent chain sampling strategies with outcome supervision, tree search enables better exploration of the reasoning space and provides dense, on-policy process rewards during RL training but remains under-explored in On-Policy LLM RL. We propose TreeRL, a reinforcement learning framework that directly incorporates on-policy tree search for RL training. Our approach includes intermediate supervision and eliminates the need for separate reward model training. Existing approaches typically train a separate process reward model, which can suffer from distribution mismatch and reward hacking. We also introduce a cost-effective tree search approach that achieves higher search efficiency under the same generation token budget by strategically branching from high-uncertainty intermediate steps rather than using random branching. Experiments on challenging math and code reasoning benchmarks demonstrate that TreeRL achieves superior performance compared to traditional ChainRL, highlighting the potential of tree search for LLM. TreeRL is open-sourced at https://github.com/THUDM/TreeRL .

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **动机**：现有的大语言模型（LLM）强化学习方法通常采用**独立链式采样**（Independently Multiple Chain Sampling）并仅依赖**最终结果奖励**（outcome supervision），这种方法无法提供密集的、在线策略的中间过程信号，导致探索效率低、训练信号稀疏。  
- **背景**：树搜索（Tree Search）在 AlphaZero 等传统推理任务中取得了巨大成功，但在 LLM 强化学习中尚不成熟——已有工作多将树搜索用于推理时增强或离线数据生成，而**在线策略（on-policy）的树搜索 RL 训练**依然空白。  
- **挑战**：经典 MCTS 在现代 LLM 推理引擎中效率低下（PassRate 低于独立采样）；离线树搜索衍生的过程奖励模型存在分布偏移和奖励黑客（reward hacking）问题。  
- **核心问题**：如何将**在线树搜索**高效集成到 LLM 强化学习中，同时提供**无额外奖励模型**的密集过程监督，以提升复杂推理能力。

### 2. 论文提出的方法论

#### 核心思想
提出 **TreeRL** 框架，整合 **EPTree**（熵引导的高效树搜索）与 RL，实现在线树搜索的同时自动生成过程监督信号，无需单独训练奖励模型。

#### 关键技术细节
1. **熵引导树搜索（EPTree）**  
   - **初始化**：对每个问题生成 M 条初始链（独立采样）。  
   - **分叉点选择**：基于**交叉熵**（token 级别的模型不确定性）选出树上熵最高的 N 个 token 作为分叉点，避免在低信息区域浪费标记。  
   - **展开**：从每个选定分叉点继续生成 T 条完整响应，形成新分支。  
   - **迭代**：重复该过程 L 次，构成 (M,N,L,T)-树。  
   - **优势**：相比 MCTS 需要大量迭代，EPTree 只需 2 次迭代即可构建多样化树，且生成响应多样性比等预算下的 i.i.d 采样高约 2 倍（图 4）。

2. **过程监督奖励设计**  
   - **值估计**：每个中间步骤（节点 sₙ）的值 V(sₙ) 定义为该节点所有叶子中正确结果的占比。  
   - **全局优势（GA）**：V(sₙ) − V(root)，反映该步骤相对于整体正确率的提升潜力。  
   - **局部优势（LA）**：V(sₙ) − V(p(sₙ))，衡量该步骤相对于父步骤的改进程度。  
   - **最终奖励**：R(sₙ) = GA(sₙ) + LA(sₙ)，并引入**降权因子** 1/√|L(sₙ)|（非叶子步骤重复出现时降低权重，防止过拟合）。  
   - **理论联系**：该形式等价于广义优势估计（GAE）的一种特例（仅考虑直接父节点和根节点）。

3. **RL 训练流程**（算法 1）  
   - 使用 EPTree 生成 M 棵树 → 提取所有叶子及对应前缀路径作为序列。  
   - 对每个步骤计算过程奖励。  
   - 使用策略梯度（如 GRPO / RLOO 风格的基线）更新策略模型 π_θ。  
   - 训练数据来自公开数学数据集（MATH-train, NuminaMath）。

### 3. 实验设计

| 维度 | 说明 |
|------|------|
| **数据集/场景** | 6 个挑战性推理基准：**MATH500**、**Omni-MATH-500**、**AIME2024**、**AMC**、**OlympiadBench**、**LiveCodeBench**（代码推理）。另外增加一般性评估：MMLU-Pro、Arena-Hard、IFEval。 |
| **Benchmark** | 贪婪解码下的**准确率**（Accuracy）；树搜索阶段使用 **PassRate**（至少一个正确响应的比率）。 |
| **对比方法** | - **ChainRL**（传统独立链式采样的 RL）<br>- **MCTS**（蒙特卡洛树搜索）<br>- **Multi-chain i.i.d sampling**（基线）<br>- 还对比了 GPT-4o、Llama-3.1/3.3、Qwen-2.5 系列、GLM4 等 SOTA 模型。 |
| **训练细节** | 基础模型：Qwen-2.5-14B 和 GLM4-9B；先进行 SFT（2 epoch）作为初始化；RL 训练使用学习率 1.5e-6，KL 系数 β=1e-4，温度 1.2，top-p 0.95，最大长度 8192。每次梯度更新使用 16 个 prompt，TreeRL 每 prompt 生成 30 条响应（(6,2,1,2) 树参数），ChainRL 生成 16 条。 |

### 4. 资源与算力

**文中未明确说明具体的 GPU 型号、数量及训练时长**，仅给出训练配置（如 batch size、学习率等）。实验基于 Qwen-2.5-14B 和 GLM4-9B，训练规模属于中等水平，但缺乏详细的算力报告。

### 5. 实验数量与充分性

- **实验组数**：包括主实验（6 个推理基准 + 3 个一般基准）、树搜索性能对比（图 1、图 4、表 4）、消融实验（表 2、表 3）、训练过程动态对比（图 6、图 10、图 11）、以及跨模型（Qwen 和 GLM）的验证。  
- **消融内容**：  
  - 熵引导 vs. 随机分叉（表 2）  
  - 全局/局部优势组合及降权因子（表 3）  
  - 不同树参数 (M,N,L,T) 的探索（表 4）  
  - 训练样本数量影响（表 3）  
- **充分性评价**：实验设计较为全面：覆盖多个难度级别的推理任务，对比了多种基线，并进行了充分的消融。但未直接在更大规模模型（如 70B+）或更多领域（如自然语言推理）上验证，存在一定局限。  
- **客观性**：所有评估均使用标准开源基准，采用多次评估（如 AIME 32 次）以减少方差，较为公平。

### 6. 论文的主要结论与发现

1. **EPTree 效率更高**：在相同推理预算下，EPTree 的 PassRate 显著优于 MCTS 和独立多链采样（如 Qwen-14B 上提升约 3-5 个点），且生成响应多样性更高。  
2. **TreeRL 优于 ChainRL**：在全部 6 个推理基准上，TreeRL 的平均准确率高于 ChainRL（Qwen-14B 上平均 44.5% vs. 41.6%，GLM4-9B 上 29.3% vs. 27.2%），尤其在 OlympiadBench、Omni-MATH 等困难任务上提升显著。  
3. **过程监督信号有效**：消融实验表明，同时使用全局和局部优势并加降权因子效果最好；去掉任一组件或减少训练样本数均导致性能下降（表 3）。  
4. **一般任务泛化**：在 MMLU-Pro、Arena-Hard、IFEval 上，TreeRL 与 ChainRL 性能接近，表明推理能力提升未显著损害通用能力。

### 7. 优点

- **方法论新颖**：首次提出将**在线策略树搜索**直接融入 LLM 强化学习，填补了该领域空白。  
- **无需额外奖励模型**：通过树结构自动生成过程监督信号，避免了分布偏移和奖励黑客问题。  
- **高效的树搜索算法**：EPTree 利用熵引导分叉，仅需 2 次迭代即可产生高质量多样树，比 MCTS 更适配现代推理引擎。  
- **充分的实验验证**：覆盖数学、代码推理，并进行了多维消融，结果稳定可信。  
- **开源贡献**：代码开源，便于复现和后续研究。

### 8. 不足与局限

- **推理效率仍是瓶颈**：EPTree 需要 2+ 次迭代，比独立采样慢约 2 倍，当前 LLM 推理引擎缺乏树搜索的特殊优化。  
- **过程奖励设计有待深化**：文中指出需进一步研究步骤重要性权重、更广义的树结构信号以及步骤级别奖励归一化。  
- **模型规模局限**：实验仅基于 9B 和 14B 模型，未验证在 70B+ 或更大模型上的有效性。  
- **任务覆盖不够广**：主要聚焦数学、代码等强推理任务，未在开放式文本生成、对话等场景验证。  
- **算力报告缺失**：缺乏 GPU 型号、数量、训练时长等资源信息，不利于实际部署评估。

（完）

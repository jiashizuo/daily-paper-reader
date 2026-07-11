---
title: "MuTIS: Enhancing Reasoning Efficiency through Multi Turn Intervention Sampling in Reinforcement Learning"
title_zh: MuTIS：通过多轮干预采样提升强化学习推理效率
authors: "Wenshuo Zhao, Haoxing Zhai, Xinyu Qiu, Zhenting Qi, Shuhe Li, Linchao Zhu"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.690.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 多轮干预采样的强化学习推理效率
tldr: 针对大推理模型过度思考导致计算开销大的问题，提出多轮干预采样框架MuTIS。在RL训练中通过多轮干预减少冗余推理步骤，尤其针对小模型。实验表明MuTIS在保持性能的同时显著降低了推理长度和计算成本。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 308, \"height\": 394, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1644, \"height\": 409, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 787, \"height\": 363, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 795, \"height\": 388, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1635, \"height\": 770, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 773, \"height\": 382, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 788, \"height\": 1012, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 784, \"height\": 364, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 785, \"height\": 596, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.690/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 62, \"height\": 76, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.690/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 836, \"height\": 213, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.690/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 809, \"height\": 191, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.690/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1662, \"height\": 529, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.690/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 807, \"height\": 256, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.690/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 807, \"height\": 632, \"label\": \"Table\"}]"
motivation: 推理模型过度思考导致大量计算浪费，小模型尤其容易陷入重复循环。
method: 在RL训练中引入多轮干预采样机制，动态截断或精简推理步骤。
result: 在多个推理基准上，MuTIS有效减少推理长度，同时保持甚至提升准确性。
conclusion: 多轮干预采样是缓解推理模型过度思考的有效策略，提升效率。
---

## Abstract
Recently, large reasoning models (LRMs) have demonstrated state-of-the-art performance across a wide range of benchmarks. However, a common challenge for these models is the “overthinking” problem, which leads to excessive reasoning steps and significant computational overhead. Furthermore, the issues with long Chain-of-Thought (CoT) are especially pronounced in smaller models ( ≤ 3B parameters). Aside from producing excessively verbose “reflection words”, they often exhibit repetition and get trapped in unproductive generation loops. Existing solutions typically involve either using flexible reasoning chains as training data or leveraging the model’s latent space to bypass intermediate reasoning steps, but none of these methods have considered directly optimizing reasoning trajectories during the sampling phase of training. In our work, we introduce the Multi-Turn Intervention Sampling Framework (MuTIS). Our framework leverages multi-turn interventions to produce concise reasoning chains. It fine-tunes reasoning models through reinforcement learning, demonstrably breaking the accuracy-efficiency trade-off. It also demonstrates strong scalability, exhibiting excellent performance on 7B models. Code is available at https://github.com/Edric-Zhao/MuTIS/tree/main.

---

## 论文详细总结（自动生成）

### 1. 核心问题与整体含义（研究动机和背景）
- 大型推理模型（LRMs）存在严重的“过度思考”问题，即生成过多冗余的推理步骤，导致大量计算资源浪费。
- 这一问题在**小规模模型（≤3B参数）** 中尤为突出：不仅产生冗长的“反思词”，还容易陷入无意义的重复循环，既无法正确求解，又耗尽 token 预算。
- 现有解决方案（如使用灵活推理链作为训练数据、利用潜在空间跳过中间步骤）均未在**训练采样阶段直接优化推理轨迹**。
- 因此，论文提出 **多轮干预采样框架（MuTIS）** ，在强化学习训练中通过多轮截断和引导，迫使模型生成更简洁的推理链，同时提升准确率。

### 2. 方法论：核心思想、关键技术细节
- **核心思想**：将单次生成为整体的推理过程分解为 *多轮决策过程*，每一轮设置 token 上限，当模型输出超过限制时强制截断并插入干预提示（“Warning! Your previous action is invalid. Please try again:”），让模型从断点处继续，直到给出最终答案或达到最大轮数。
- **技术细节**：
  - 建模为 **马尔可夫决策过程（MDP）**：状态 $s_t$ 包含初始问题、历史生成段和干预提示；动作 $a_t$ 为当前轮生成的文本段 $\tau_t$；转移由截断和提示插入决定；奖励 $R_{final}$ 为二进制（正确=1，错误或超限=0）。
  - 使用 **PPO 算法**进行强化学习训练。
  - 每轮最大长度设为 2000 tokens，总预算（如 3 轮×2000）接近基线模型完成大多数任务的平均 token 数，确保干预发生在生成过程中而非简单延长。
- **算法流程**（文字说明）：
  1. 初始化状态为问题 $I$。
  2. 模型生成一段响应 $\tau'_t$。
  3. 若包含终止短语（如“Final Answer:”）则提取答案并结束；否则：
     - 若 $\tau'_t$ 长度超过 $Len_{max}$，则截断，将截断后的文本和干预提示拼接到历史中。
     - 更新状态，进入下一轮。
  4. 达到最大轮数 $T$ 时结束并计算奖励。
  5. 使用所有轮次生成的完整序列和奖励更新模型参数。

### 3. 实验设计
- **数据集**：
  - **训练数据**：OpenR1-Math-220k（过滤后约 6 万样本，剔除多选题、过长答案、多变量问题等）；额外使用 LIMO 子集（817 条）验证。
  - **评估基准**（5 个数学推理数据集）：Math500、AMC23、OlympiadBench、Minerva、AIME24。
- **对比方法**：
  - 原始模型（DeepSeek-R1-Distill-1.5B、DeepScaleR-1.5B-Preview、DeepSeek-R1-Distill-7B）。
  - CCoT：在提示后加“be concise”。
  - Fixed Budget：提示“Limit answer length to [max_tokens] words”。
  - 单轮/多轮消融：固定总 token 预算（6000），比较 1 轮（1×6000）、3 轮（3×2000，即 MuTIS）、5 轮（5×1200）。
- **评估方式**：均使用贪婪解码（无随机性），保证公平。

### 4. 资源与算力
- 文中**未明确说明**具体使用的 GPU 型号、数量、训练时长等算力信息。
- 仅提及基于 veRL 框架和 Search-R1 的多轮生成代码库。

### 5. 实验数量与充分性
- **主要实验**：在 5 个数学数据集上对比准确率和 token 消耗（表 2, 3）。
- **额外实验**：
  - 不同 token 限制下的准确率曲线（图 5）。
  - 重复现象频率分析（图 4）。
  - 反思词频率变化（表 5）。
  - RL 训练过程中响应长度和回合数变化（图 6）。
  - 消融实验：单轮 vs 3 轮 vs 5 轮（表 4）。
  - 7B 模型上的可扩展性验证（表 3, 图 8）。
- **充分性评价**：实验覆盖多维度（准确率、效率、重复、反思词、训练动态），且采用贪婪解码、一致超参数，设计较为客观公平。但未在更大模型（如 32B）上测试，略有限制。

### 6. 主要结论与发现
- **MuTIS 能同时提升准确率并显著降低 token 消耗**，打破准确率-效率折衷。
  - 例如：R1-Distill-1.5B 在 Math500 上准确率从 69.4% 提升至 74.6%，token 从 10083 降至 3060。
- **有效缓解重复和过度思考**：重复响应比例从 46.6% 降至 10.8%；正确问题的思考长度分布明显左移。
- **小模型中的反思词（如“Wait”）大幅减少**，表明这些词多是“无效噪音”，而非真正有意义的自我验证。
- **RL 训练中模型自动学会更简洁推理**：平均响应长度从 5000 tokens 降至 1500，平均回合数从 2.5 降至 1.25。
- **方法具有可扩展性**：在 7B 模型上也获得类似收益。

### 7. 优点
- **创新性**：首次在 RL 训练采样阶段引入多轮干预，直接优化推理轨迹，不同于以往通过提示或潜在空间的方法。
- **实用性**：显著减少推理成本（token 消耗降低 50% 以上），同时提升准确率，兼具效率与性能。
- **严谨性**：设计多组消融实验，控制总 token 预算以公平对比单轮/多轮效果；使用贪婪解码消除随机性。
- **可扩展与开源**：在 7B 模型上验证有效性，并公开代码。

### 8. 不足与局限
- **算力与规模限制**：未在更大模型（如 32B）上充分探索，论文提到“computational constraints prevented exploring full potential on larger models”。
- **训练稳定性**：训练过程中响应长度出现波动，可能需要更有效的 KL 散度约束来稳定训练。
- **领域局限**：仅以数学推理为测试场景，通用问题（如常识推理、代码生成）的泛化能力未验证。
- **超参数敏感性**：干预提示和轮数/ token 预算的选择可能影响性能，文中虽做了消融但未深入讨论系统化调优。

（完）

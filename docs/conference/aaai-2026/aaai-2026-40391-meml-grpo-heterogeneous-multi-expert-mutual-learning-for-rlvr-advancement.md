---
title: "MEML-GRPO: Heterogeneous Multi-Expert Mutual Learning for RLVR Advancement"
title_zh: MEML-GRPO：面向RLVR提升的异构多专家相互学习
authors: "Weitao Jia, Jinghui Lu, Haiyang Yu, Siqi Wang, Guozhi Tang, An-Lan Wang, Weijie Yin, Dingkang Yang, Yuxiang Nie, Bin Shan, Hao Feng, Irene Li, Kun Yang, Han Wang, Jingqun Tang, Teng Fu, Changhong Jin, Chao Feng, Xiaohui Lv, Can Huang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40391/44352"
tags: ["query:mlr"]
score: 9.0
evidence: 直接提出GRPO变体，引入多专家相互学习
tldr: 该论文提出MEML-GRPO框架，针对GRPO在强化学习验证奖励中面临奖励稀疏问题，通过引入异构多专家提示系统提示来生成多样化响应，并设计专家间相互学习机制以促进知识共享，大幅增加找到正确答案的概率。实验表明该方法在推理任务上显著提升，推进了RLVR的发展。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 标准RLVR和GRPO在困难任务中面临奖励稀疏问题，零奖励导致无学习信号。
method: 提出MEML-GRPO，利用多专家提示生成更多样化响应，并引入专家间相互学习实现知识迁移。
result: 在推理任务上显著提高了正确率，缓解了奖励稀疏问题。
conclusion: MEML-GRPO有效增强了GRPO性能，为RLVR提供更鲁棒的框架。
---

## Abstract
Recent advances demonstrate that reinforcement learning with verifiable rewards (RLVR) significantly enhances the reasoning capabilities of large language models (LLMs). However, standard RLVR faces challenges with reward sparsity, where zero rewards from consistently incorrect candidate answers provide no learning signal, particularly in challenging tasks. To address this,we propose Multi-Expert Mutual Learning GRPO (MEML-GRPO), an innovative framework that utilizes diverse expert prompts as system prompts to generate a broader range of responses, substantially increasing the likelihood of identifying correct solutions. Additionally, we introduce an inter-expert mutual learning mechanism that facilitates knowledge sharing and transfer among experts, further boosting the model’s performance through RLVR. Extensive experiments across multiple reasoning benchmarks show that MEML-GRPO delivers significant improvements, achieving an average performance gain of 4.89% with Qwen and 11.33% with Llama, effectively overcoming the core limitations of traditional RLVR methods.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

**核心问题**：标准强化学习验证奖励（RLVR）在复杂推理任务中面临严重的**奖励稀疏**问题——当模型初始策略完全无法生成正确答案时，所有候选答案的奖励为零，导致没有有效的学习信号，RLVR训练陷入停滞。此外，现有RLVR方法（如GRPO）依赖模型自身轨迹进行同策略学习，难以探索超出当前能力的新知识，仅能偏向已有推理路径。

**整体含义**：论文提出一种创新的多专家相互学习框架（MEML-GRPO），通过引入异构预训练模型产生多样化、互补的推理路径，为RLVR提供更多正确信号，并设计专家间的知识迁移机制，从而突破单一模型的性能天花板，显著提升推理能力。

## 2. 论文提出的方法论

### 2.1 核心思想
利用多个异构专家模型（如DeepSeek-r1、Doubao-1.5-thinking等）生成不同风格的推理轨迹，通过系统提示（system prompt）将这些多样化知识注入同一个策略模型，并通过强化学习实现专家间的相互学习，同时引入难例积累机制处理所有专家均失败的极端情况。

### 2.2 关键技术细节

- **多专家微调（Multi-Expert Fine-tuning, MEF）**  
  - 针对每个问题，用N个异构专家模型分别生成答案，形成多专家数据集 \( D_{ME} \)。  
  - 每个专家对应一个独特的系统提示 \( P_i \)，如“你是DeepSeek专家，请回答上述问题”。  
  - 在基础LLM上进行监督微调，最大化条件对数似然：  
    \[
    \mathcal{L}_{MEF} = -\sum_{j=1}^M \sum_{i=1}^N \log p_\theta(A_j^{(i)} | Q_j, P_i)
    \]

- **强化专家间学习（Reinforced Inter-Expert Learning, RIEL）**  
  - **响应采样与组内优势估计**：每个专家为每个问题采样G个响应，计算每个响应的优势 \( A_{ig} = r(O_{ig}) - \frac{1}{G}\sum_{g'} r(O_{ig'}) \)。GRPO损失扩展为：  
    \[
    \mathcal{L}_{GRPO} = \frac{1}{N} \sum_i \mathbb{E}[ -\log \pi_\theta(O_{ig}|Q,P_i) \cdot \max(A_{ig}, 0) ]
    \]
  - **专家间互学习（KL散度正则化）**：对每个问题，识别**最优专家** \( E^+ \) 和**最差专家** \( E^- \)（基于平均奖励），令最差专家学习最优专家的输出分布，损失为：  
    \[
    \mathcal{L}_{KL} \approx \log p_\theta(O^+ | Q, P^-) - \log p_\theta(O^+ | Q, P^+)
    \]
  - **难例积累SFT缓冲**：当某专家对某个问题产生的G个响应中错误数超过K个（如K=6），则以概率 \( K/G \) 将 (Q, P_i, 正确答案) 存入容量为B的缓冲区，缓冲区满后执行SFT更新：  
    \[
    \mathcal{L}_{SFT} = -\sum_{(Q,P_i,O_{gt}) \in \mathcal{B}} \log p_\theta(O_{gt} | Q, P_i)
    \]

### 2.3 整体训练目标
\[
\mathcal{L}_{total} = \mathcal{L}_{GRPO} + \lambda_1 \mathcal{L}_{KL} + \lambda_2 \mathcal{L}_{SFT}
\]

## 3. 实验设计

### 3.1 数据集与场景
- **数学推理**：GSM8K、MathQA  
- **常识推理**：StrategyQA  
- 除真实推理路径（Expert0，基于正确回答）外，还使用DeepSeek-r1（Expert1）和Doubao-1.5-thinking（Expert2）生成异构推理轨迹。

### 3.2 评估指标
- 精确匹配准确率（exact-match accuracy）。

### 3.3 对比方法
- **SFT基线**：Expert X-SFT（单个专家微调）、MoE-SFT（多专家合并微调）  
- **RLVR基线**：Expert X-GRPO、Expert X-Dr.GRPO（改进版GRPO）、MoE-SFT-GRPO、MoE-SFT-Dr.GRPO  
- **本文方法**：MEML-GRPO（在MoE-SFT基础上加上RIEL训练）

### 3.4 训练与推理配置
- 模型：Qwen2.5-1.5B-Math 和 Llama3.2-1B-Instruct  
- 所有RL模型：8个rollout/提示，学习率1e-6，训练1 epoch  
- 所有SFT模型：学习率1e-5，训练1 epoch  
- 推理：使用贪心搜索，无采样

## 4. 资源与算力

文中明确说明：
- **硬件**：所有训练实验在**8张A800 GPU**上进行。
- **训练时长**：未给出具体时间，但提到总训练时间仅比单专家基线增加20-30%（得益于vLLM并行分批rollout和分页注意力机制），远低于理论上的N倍（N=3）。
- **内存**：峰值内存约60GB，与传统GRPO相当。

## 5. 实验数量与充分性

### 已开展实验
- **主实验（Table 4）**：在3个数据集上，对2种基座模型，对比了12种以上的RLVR方法（包括单专家和多专家设置），每个方法下再分Expert0/1/2三种子设置，总计约30余个准确率结果。
- **消融实验（Table 5）**：针对MoE、难例SFT（HSFT）、专家间互学习（IML）三个组件进行组合消融，验证各自贡献。
- **多数投票对比（Table 6）**：将MEML-GRPO的单个专家与多数投票（MV）对比，证明互学习的有效性。
- **训练奖励动态（Figure 2）**：展示了Llama3.2模型在三个数据集上的训练奖励曲线，与单专家GRPO对比。
- **定性示例（Table 3）**：展示了不同专家对同一问题的推理路径差异。

### 充分性与客观性评估
- **优点**：对比基线全面，包括最新Dr.GRPO；消融设计清晰；奖励曲线可视化表明MEML-GRPO能获得更高奖励。
- **不足**：
  - 仅在1B/1.5B小模型上测试，未在更大模型（如7B/70B）上验证，泛化性存疑。
  - 数据集仅三个（两个数学、一个常识），缺乏代码、逻辑推理等多样化场景。
  - 异构专家仅限于三种（DeepSeek-r1、Doubao-1.5-thinking、真实答案），未探索更多或不同组合。
  - 未说明基线方法的超参数调优是否公平（如学习率、rollout数等是否对齐）。

## 6. 论文的主要结论与发现

1. MEML-GRPO在所有实验设置下均**显著超越**单专家和多专家的GRPO/Dr.GRPO基线，平均提升在Qwen上达4.89%，在Llama上达11.33%。
2. 多专家微调（MEF）本身能提供一定多样性，但帮助有限；核心提升来自**强化互学习（RIEL）**和**难例积累SFT**。
3. 互学习训练后，单个专家的性能甚至可以**超过多数投票**，表明知识成功迁移，同时推理时只需部署一个模型，无额外推理成本。
4. 训练奖励曲线显示MEML-GRPO持续获得更高奖励，表明有效应对了奖励稀疏问题。

## 7. 优点

- **创新性**：首次将**异构多专家知识**与**GRPO相结合**，设计互学习机制，突破了同策略RLVR的探索限制。
- **实用性**：推理时只需一个模型+一个最佳专家提示，避免集成模型的高额开销；训练开销控制合理（仅增加20-30%时间）。
- **鲁棒性**：难例积累机制确保即使所有专家失败，仍能从正确答案中获得梯度更新。
- **实验设计**：对比方法全面（包括最新Dr.GRPO），消融实验清晰展示各组件贡献。

## 8. 不足与局限

- **规模局限**：仅在1B/1.5B小模型上验证，在更大模型上的效果和稳定性未知。
- **专家依赖**：需要预先使用多个异构模型生成数据，可能带来额外成本；专家选择对结果有影响，未深入探讨。
- **场景覆盖**：仅包含数学和常识推理，未测试代码、科学推理等更复杂任务。
- **消融不足**：对超参数 \(\lambda_1, \lambda_2\) 的敏感性未报告，缓冲区容量B和阈值K的设定依据未给出，可能影响复现。
- **偏差风险**：所用异构专家模型可能本身存在数据偏差，导致某些推理风格被过度放大；互学习可能传播专家间的错误。
- **论文尚未正式发表**（标注AAAI-26，属于已接收或预印本），可能存在未公开的代码细节。

（完）

---
title: Steering LLM Reasoning Through Bias-Only Adaptation
title_zh: 通过仅偏置自适应引导LLM推理
authors: "Viacheslav Sinii, Alexey Gorbatovski, Artem Cherepanov, Boris Shaposhnikov, Nikita Balagansky, Daniil Gavrilov"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.467.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 使用强化学习微调偏置向量
tldr: "全参数强化微调虽然有效但代价高昂。本文证明每层仅训练一个d维偏置向量（参数增加0.0016%），即可在数学推理任务上达到全RL微调的准确率。该发现大幅降低了强化微调所需参数预算和通信成本，为高效推理微调提供了新思路。"
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.467/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1665, \"height\": 567, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.467/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1656, \"height\": 1165, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.467/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1663, \"height\": 1117, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.467/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 807, \"height\": 315, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.467/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 729, \"height\": 556, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.467/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1653, \"height\": 889, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.467/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 725, \"height\": 542, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.467/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1288, \"height\": 1679, \"label\": \"Table\"}]"
motivation: 全参数强化微调成本高，需探索参数高效的RL微调方法。
method: 冻结所有基础权重，仅用强化学习每层训练一个d维偏置向量，引导推理方向。
result: "在8B模型上，仅用0.0016%额外参数即匹配全RL微调的数学推理准确率。"
conclusion: 极少量可训练参数足以实现高质量的链式推理强化微调。
---

## Abstract
We show that training a single d -dimensional steering vector per layer with reinforcement learning, while freezing all base weights, matches the accuracy of fully RL-tuned reasoning models on mathematical-reasoning tasks.On an 8 billion-parameter model this adds only ≈ 0.0016% additional parameters and reproduces performance across a range of base models and mathematical-reasoning benchmarks.These results tighten the upper bound on the parameter budget required for high-level chain-of-thought reasoning, indicating that millions of adapter weights are unnecessary.The minimal trainable footprint reduces optimizer memory and inter-GPU communication, lowering the overall cost of fine-tuning.Moreover, a logit-lens analysis shows that the learned vectors amplify coherent token directions, providing clearer insight into the model’s internal computations.

---

## 论文详细总结（自动生成）

# 论文结构化总结：Steering LLM Reasoning Through Bias-Only Adaptation

## 1. 核心问题与整体含义（研究动机和背景）
大型语言模型通过强化学习（RL）进行推理训练（如DeepSeek-R1）虽然效果显著，但全参数微调成本极高：需要存储大量优化器状态、传输大量参数，且内部计算机制难以理解。本文的核心问题是：**是否只需极少量可训练参数就能达到全量RL微调在数学推理上的性能？** 作者证明，每层仅训练一个d维偏置向量（steering vector）——仅增加约0.0016%的参数——即可匹配全RL微调的准确率。这大幅降低了强化微调的成本门槛，并支持了“推理训练只是放大基座模型已有能力”的观点。

## 2. 方法论
- **核心思想**：冻结Transformer所有基座权重，只在每一层的残差流末尾添加一个可学习的d维向量\( s_\ell \)，并仅用RL训练这些向量。这些向量被解释为“方向放大器”，引导模型向正确的推理方向偏移。
- **技术细节**：
  - 训练采用在线RL（类似DeepSeek-R1的GRPO框架），使用RLOO目标函数（Reinforce with Leave-One-Out baseline）。
  - 每个prompt采样N个答案，根据最终答案是否在`\boxed{}`中给予二值奖励（正确=1，错误=0）。
  - 策略梯度更新：\(\nabla_\theta J = \mathbb{E}_{x \sim D, y \sim \pi_\theta(x)} [a(x,y) \nabla_\theta \log \pi_\theta(y|x)]\)，其中baseline为平均奖励。
  - 向量实现：`h_{ℓ,t} ← h_{ℓ,t} + v_ℓ`，对每个token位置加相同的向量（位置无关）。
- **与BitFit/LoRA的区别**：比BitFit（只调bias）更小，比LoRA（需训练低秩矩阵，参数更多）更极端。LoRA在附录中作为对比，可视为“自适应steering vector”。

## 3. 实验设计
- **训练数据集**：DeepScaleR（数学推理），部分实验也使用GSM8K和MATH的训练集。
- **评估基准**：AIME24/25、AMC23、MATH500、MinervaMath、OlympiadBench（共6个）。在附加实验中还使用GSM8K和MATH。
- **对比方法**：
  - Base（无训练）、Full-Tune（全参数微调）、Steering（本方法）、LoRA（rank=4）。
  - 外部基线：SimpleRL-Zoo、Open-Reasoner、Oat-Zero、R1-Distill。
- **模型集**：Qwen2.5-1.5B/7B/14B、Qwen2.5-Math-1.5B/7B、LLaMa3.1-8B、LLaMa3.1-8B-It。
- **评估方式**：PASS@1（MATH500/MinervaMath/OlympiadBench），AVG@32（AIME/AMC）；平均三个种子。

## 4. 资源与算力
- **硬件**：16块H100 GPU。
- **训练时长**：
  - Qwen2.5-1.5B：约9小时
  - Qwen2.5-Math-1.5B：约2.5小时
  - LLaMa3.1-8B-It：约9小时
  - LLaMa3.1-8B（base）：约120小时
- **资源节省对比**（以Qwen2.5-14B为例）：
  - 参数量：Full-Tune 14.7B vs Steering 245K（优化器内存从13.8GB降至240KB）
  - 每步时间：9.94s vs 0.11s，总体时间（314步）52 min vs 34s。

## 5. 实验数量与充分性
- **多种模型**：涵盖4个系列、4种规模（1.5B~14B），包括instruction-tuned和非instruction版本。
- **多基准**：6+个数学基准，覆盖不同难度（AMC/AIME/竞赛）。
- **对比充分**：与Base、Full-Tune、LoRA、以及4个外部工作比较；还做了训练/测试集交叉验证（GSM8K训→MATH测，反之亦然）。
- **稳定性**：每个实验3个随机种子报告均值和标准差（表中给出）。
- **公平性**：所有训练在同一框架下，超参数分别调优；对比方法引用已发表结果（表1中标注）。**实验设计客观、公平**，覆盖了常见消融维度。

## 6. 主要结论与发现
1. **极少参数即可匹敌全微调**：在多个模型和基准上，Steering向量准确率与Full-Tune相当（仅LLaMa3.1-8B base恢复约70%）。
2. **资源节省巨大**：优化器内存降至KB级，参数广播时间减少近一小时/epoch。
3. **可解释性强**：通过Logit-lens分析，发现不同层的向量分别放大编程词汇（早期）、验证性词汇（中层）、因果连接词（晚期），对应于推理任务的不同阶段。
4. **支持“推理训练放大已有能力”假说**：因为固定向量只能放大已有方向，不能创造新特征，而效果堪比全微调。

## 7. 优点
- **极端的参数效率**：仅0.0016%参数可训练，实际训练需求接近零。
- **训练成本极低**：优化器状态可忽略，通信时间减少~90%（对分布式训练友好）。
- **可解释性**：向量可直接被Logit-lens分析，揭示了推理微调改变了哪些内部表示方向。
- **方法简洁**：无需修改模型架构，仅添加加法偏置，易于部署。
- **理论基础**：为推理训练的“放大假说”提供了直接证据。

## 8. 不足与局限
- **领域局限**：仅在数学推理任务上验证，未覆盖其他推理类型（如常识、逻辑、代码）或非推理任务。
- **部分模型未达到全微调**：LLaMa3.1-8B base上Steering仅恢复70%收益，需引入LoRA才能完全弥补。
- **Logit-lens局限性**：只观察单层输出对token logits的影响，未考虑后续层变换，可能解释不完整。
- **位置无关性**：每层对所有token加相同向量，理论上缺乏token特异性，可能造成上限（LoRA因位置相关而弥补）。
- **训练设置有限**：论文承认未进行广泛的超参数搜索（学习率、采样数等），且在线RL设置单一。
- **可扩展性未知**：最大模型14B，未验证更大规模（如70B+）下是否依然有效。

（完）

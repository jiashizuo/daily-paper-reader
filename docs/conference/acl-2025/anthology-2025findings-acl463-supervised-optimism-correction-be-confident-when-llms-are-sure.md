---
title: "Supervised Optimism Correction: Be Confident When LLMs Are Sure"
title_zh: 监督乐观校正：在LLM确信时保持自信
authors: "Junjie Zhang, Rushuai Yang, Shunyu Liu, Ting-En Lin, Fei Huang, Yi Chen, Yongbin Li, Dacheng Tao"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.463.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 连接监督微调和离线RL的LLM乐观校正方法
tldr: 针对LLM推理中波束搜索因Q值估计膨胀导致的过度乐观问题，从理论上建立了监督微调与离线强化学习的联系。提出监督乐观校正（SOC），在SFT中引入隐式价值正则化辅助损失，有效修正了低估步骤，提升了推理质量。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.463/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1635, \"height\": 813, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.463/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 802, \"height\": 392, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.463/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 807, \"height\": 370, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.463/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 770, \"height\": 958, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.463/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 765, \"height\": 981, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.463/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1652, \"height\": 890, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.463/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1655, \"height\": 875, \"label\": \"Table\"}]"
motivation: 波束搜索在LLM推理中因Q值高估导致错误累积。
method: 提出SOC，在SFT中添加隐式Q值正则化辅助损失，修正价值估计。
result: 在多个生成任务上，SOC优于标准SFT和波束搜索，减少推理错误。
conclusion: SOC通过连接SFT与离线RL理论有效缓解了LLM推理中的过度乐观问题。
---

## Abstract
In this work, we establish a novel theoretical connection between supervised fine-tuning and offline reinforcement learning under the token-level Markov decision process, revealing that large language models indeed learn an implicit Q -function for inference.Through this theoretical lens, we demonstrate that the widely used beam search method suffers from unacceptable over-optimism, where inference errors are inevitably amplified due to inflated Q -value estimations of suboptimal steps. To address this limitation, we propose **S**upervised **O**ptimism **C**orrection (SOC), which introduces a simple yet effective auxiliary loss for token-level Q -value estimations during supervised fine-tuning. Specifically, the auxiliary loss employs implicit value regularizationto boost model confidence in expert-demonstrated responses, thereby suppressing over-optimism toward insufficiently supervised responses.Extensive experiments on mathematical reasoning benchmarks, including GSM8K, MATH, and GAOKAO, showcase the superiority of the proposed SOC with beam search across a series of open-source models.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题背景**：大型语言模型（LLM）在复杂推理任务（如数学推理）中，常用监督微调（SFT）配合搜索式解码（如波束搜索）来生成高质量答案。然而，SFT 以局部 token 级最大似然为目标，而波束搜索以全局序列评分为导向，两者之间存在目标不一致。
- **核心发现**：通过将 LLM 生成过程建模为 token 级马尔可夫决策过程（MDP），论文理论上证明了 SFT 与离线强化学习（Offline RL）等价，LLM 学习了一个隐式的 Q 函数。波束搜索依赖该隐式 Q 值进行序列选择，但由于 Q 值估计误差（尤其是对欠监督状态的过高估计），导致波束搜索出现“过度乐观”（over-optimism）问题，即偏爱 Q 值虚高的低质量路径，放大推理错误。
- **整体含义**：该工作揭示了 SFT 与离线 RL 之间的理论联系，并指出波束搜索的乐观偏差源于 Q 值估计误差，为改进推理解码提供了新视角。

## 2. 论文提出的方法论

- **核心思想**：在 SFT 阶段引入一个简单的辅助损失（称为 V 损失），对隐式 Q 值施加正则化，提升模型对专家演示轨迹的置信度，抑制对欠监督状态的高估，从而在推理时修正波束搜索的乐观偏差。
- **关键技术细节**：
  - **隐式 Q 函数**：LLM 的 logits 经 softmax 后得到策略 πθ，其 logits 可视为隐式 Q 函数，满足 πθ(a|s) = exp(Qθ(s,a)) / Σ exp(Qθ(s,a′))。
  - **SFT 目标**：最小化交叉熵损失 LSFT = E[−Σ π⋆(a|s) log πθ(a|s)]，等价于最小化隐式 Q 的估计误差。
  - **辅助 V 损失**：LV = E[−log Σ exp Qθ(s,a)]，即对每个状态 s 的 log-partition function（即隐式价值函数 V(s)）最大化，提升 expert 状态的价值估计。
  - **总体目标**：Loverall = LSFT + λ·LV，λ 为超参数（论文默认 0.2）。
- **公式与算法流程（文字说明）**：
  - 训练时，模型同时优化标准 next-token 预测损失和 V 损失。V 损失的梯度 ∇θLV = E[−Σ Q̃θ(s,a) ∂Qθ/∂θ]，其中 Q̃ 为归一化 Q 值，使得高 Q 值的动作获得更大梯度，从而提升其 Q 值估计。
  - 推理时，使用标准波束搜索（beam width k），选择 top-k 候选序列，但此时由于训练时隐式 Q 值已得到修正，波束搜索更倾向于 expert 演示轨迹，减少对低质量路径的误选。

## 3. 实验设计

- **数据集**：
  - 训练集：STEP-DPO-10K 的过滤版本（DATA-α，约10.3K样本）和 MATH 中难度最高（level 5）的过滤版本（DATA-β，约2.8K样本）。
  - 测试集：GSM8K（1.3K样例）、MATH-500（500样例）、GAOKAO2023En（高考数学英文版，用于零样本评估）。
- **Benchmark**：数学推理任务，采用 pass@1 准确率（波束搜索 width=5 和贪婪解码两种设置）。
- **对比方法**：
  - 基线：预训练基础模型（Qwen-2-1.5B-Base, Qwen-2.5-3B-Base, Qwen-2.5-7B-Base）。
  - SFT：分别使用 DATA-α 和 DATA-β 进行标准 SFT。
  - SOC：在相同 SFT 设置下添加辅助 V 损失。
- **评估设置**：使用 few-shot CoT 提示（4-shot 或 zero-shot），输出答案格式要求放入 `\boxed{}` 中，对比波束搜索与贪婪解码结果。

## 4. 资源与算力

- 论文未明确说明训练所用的 GPU 型号、数量及训练时长。仅提及使用了 Qwen 系列开源模型（1.5B/3B/7B）进行实验，未报告具体硬件配置。

## 5. 实验数量与充分性

- **实验数量**：论文在主表中报告了三个模型（1.5B/3B/7B）在两种训练数据集（DATA-α、DATA-β）上的结果，每个模型测试三个基准，共 3×2×3=18 组主实验；此外还包含波束宽度消融（图3，不同宽度）、λ 消融（表2，三个 λ 值）、以及多种 prompt 模板（两种模板取优）等，共计约 6 组补充实验。
- **充分性与公平性**：
  - 实验覆盖了不同规模（1.5B~7B）和不同数据集质量（小规模高质量 vs 大规模一般质量）的情况，具有较好的代表性。
  - 对比方法为自身 SFT 基线（控制变量），且使用相同 prompt 模板取最优，比较公平。
  - 但未与其它主流优化方法（如 DPO、PPO、Best-of-N 等）对比，仅与标准 SFT 比较，可能削弱方法新颖性的说服力。消融实验对 λ 和波束宽度进行了系统分析，设计合理。

## 6. 论文的主要结论与发现

- **理论发现**：SFT 等价于最大熵离线 RL，LLM 的 logits 是隐式 Q 函数；波束搜索的过度乐观源于 Q 值高估，尤其在欠监督状态。
- **方法有效性**：SOC 在几乎所有设置下都显著提升了波束搜索的性能，尤其在 3B/7B 模型上提升幅度可达 20%+（如 GSM8K: 79.9→83.7，MATH-500: 41.0→60.4，GAOKAO: 28.6→51.4）。
- **波束宽度影响**：SOC 在小波束宽度下也能取得更优结果，减少了搜索空间和计算成本。
- **λ 鲁棒性**：λ=0.2 效果最佳，且 λ 在 0.1~0.3 范围内性能稳定。

## 7. 优点

- **理论创新**：首次将 SFT 与离线 RL 严谨联系，并形式化波束搜索的乐观偏差，具有较高的理论深度。
- **方法简洁高效**：SOC 仅需在 SFT 中添加一个辅助损失项，无需修改模型架构、无需外部奖励模型或 verifier，训练和推理成本几乎不变。
- **实验验证充分**：在多个模型规模、多个数据集上验证了泛化性，消融实验系统。
- **实用性强**：针对的是实际部署中常用的波束搜索解码，改进明显且易于实现。

## 8. 不足与局限

- **对比基线有限**：仅与标准 SFT 比较，未与 DPO、PPO、SPIN、Best-of-N 等近期流行方法对比，缺乏更广泛的性能参照。
- **未验证多模态场景**：论文只聚焦文本 LLM，未涉及视觉语言模型（VLM）等其他模态，适用范围有待扩展。
- **缺少算力报告**：未说明训练资源，不利于复现和评估实际成本。
- **理论分析依赖较强假设**：如确定性环境、稀疏奖励、γ=1 等，与实际推理场景存在差异。
- **对复杂长链推理的鲁棒性未充分测试**：仅数学推理一种任务，未在其他需要长链推理的领域（如代码生成、定理证明）验证。

（完）

---
title: "T-REG: Preference Optimization with Token-Level Reward Regularization"
title_zh: T-REG：基于Token级奖励正则化的偏好优化
authors: "Wenxuan Zhou, Shujian Zhang, Lingxiao Zhao, Tao Meng"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.1353.pdf"
tags: ["query:mlr"]
score: 8.0
evidence: RLHF的token级奖励正则化
tldr: 传统RLHF使用序列级稀疏奖励，优化困难。本文提出T-REG方法，在token级别引入奖励正则化，实现更细粒度的信用分配。实验表明该方法能有效提升LLM的指令遵循能力和生成质量，为RLHF提供了一种更高效的训练范式。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1353/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1649, \"height\": 424, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1353/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1526, \"height\": 552, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1353/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 778, \"height\": 587, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1353/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 672, \"height\": 536, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1353/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 830, \"height\": 655, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1353/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1152, \"height\": 574, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1353/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 767, \"height\": 384, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1353/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1334, \"height\": 676, \"label\": \"Table\"}]"
motivation: RLHF中稀疏的序列级奖励导致优化困难，需细粒度奖励信号。
method: 在token级别引入连续或离散奖励，并通过正则化约束缓解稀疏性问题。
result: 在多种任务上提升了模型对齐质量和生成效果。
conclusion: Token级奖励正则化是一种有效的RLHF改进策略。
---

## Abstract
Reinforcement Learning from Human Feedback (RLHF) has been pivotal in enabling Large Language Models (LLMs) to effectively follow instructions and produce meaningful alignment by leveraging human preference data. Traditionally, RLHF involves generating responses to a query and using a separate reward model to assign a score to the entire completion. This approach, however, presents challenges, as it provides a single, sparse reward at the end of a sequence, making optimization difficult for the model, in which both training and generation occur auto-regressively at token levels. While recent methods have attempted to address this by assigning token-level discrete or continuous rewards, these often rely on either a trained credit assignment model or AI annotators, which raises concerns about the quality and reliability of the token-level rewards. In this paper, we propose T-REG, which utilizes both sequence-level and token-level rewards for preference optimization. T-REG employs self-generated token-level rewards, derived through opposite prompting, as a weak supervision signal to guide the model in distributing sequence-level rewards at the token level, thereby achieving more effective token-level credit assignment and improving alignment performance. Experiments on the instruction following benchmarks, including Alpaca Eval 2 and Arena-Hard, show that our method consistently outperforms baseline methods by up to 3.8% and 4.4%, respectively.

---

## 论文详细总结（自动生成）

# 论文总结

## 一、论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：传统RLHF（基于人类反馈的强化学习）在训练大语言模型时，仅使用**序列级（sequence-level）稀疏奖励**——即整个回复只获得一个最终分数。这种方式使得模型难以识别哪些token对最终奖励贡献最大，导致信用分配（credit assignment）困难，优化效率低。
- **背景**：已有工作尝试引入token级奖励（如通过训练信用分配模型或利用AI标注器），但这些方法生成的自动标注奖励存在噪声大、可靠性差的问题。
- **整体含义**：本文提出T-REG（Token-level Reward Regularization），将**序列级奖励优化**与**自生成的token级奖励**相结合，利用token级奖励作为正则化信号，引导模型更精细地分配序列级奖励，从而提升对齐性能。

## 二、论文提出的方法论

### 核心思想
- 保留DPO等偏好优化算法的序列级优化框架，同时引入自生成的token级奖励作为弱监督信号，对模型隐式学习的token级奖励进行**正则化**。
- 自生成token级奖励通过**对比提示（contrastive prompting）** 实现：利用LLM自身的自精炼能力，对同一输出分别生成“更好”和“更差”的改写版本，然后计算两个版本下token概率的对数差作为token级奖励。

### 关键技术细节
1. **token级奖励计算**  
   对于每个token \(y_t\)，使用参考模型 \(\pi_{\text{ref}}\) 计算：
   \[
   \hat{r}(x, y_{<t}, y_t) = \sigma\left(\log \frac{\pi_{\text{eval}}(y_t \mid x_{\text{better}}, y_{<t})}{\pi_{\text{eval}}(y_t \mid x_{\text{worse}}, y_{<t})}\right) - 0.5
   \]
   其中 \(x_{\text{better}}\) 和 \(x_{\text{worse}}\) 是两种方向相反的提示模板，用于引导模型生成更优/更差的回复。\(\sigma\) 将值裁剪到 [0,1] 再减0.5，使得奖励范围在 [-0.5, 0.5]。

2. **正则化损失**  
   \[
   L_{\text{reg}} = -\sum_{t=1}^T \beta \hat{r}_{\text{token}}(y_t \mid x, y_{<t}) \log \pi(y_t \mid x, y_{<t})
   \]
   该损失相当于**加权语言模型损失**：对高奖励token增加其概率，低奖励token降低其概率。

3. **最终损失函数**  
   \[
   L_{\text{DPO-REG}} = L_{\text{DPO}} + \alpha \cdot \mathbb{E}_{(x,y_w,y_l)}\left[ w(x,y_w,y_l) \cdot (L_{\text{reg}}(x,y_w) + L_{\text{reg}}(x,y_l)) \right]
   \]
   其中 \(w = \sigma(r_{\text{DPO}}(x, y_l) - r_{\text{DPO}}(x, y_w))\) 是序列权重，基于序列级奖励差异动态调整正则化强度，避免正则化过度主导优化。

### 算法流程
- 输入：偏好数据集 \(\mathcal{D} = \{(x, y_w, y_l)\}\)，策略模型 \(\pi_\theta\)，参考模型 \(\pi_{\text{ref}}\)。
- 对于每个batch：  
  1. 通过对比提示生成token级奖励 \(\hat{r}_{\text{token}}\)。  
  2. 计算DPO损失和正则化损失。  
  3. 使用梯度下降更新 \(\theta\)。

## 三、实验设计

### 使用的数据集 / 场景
- **训练数据**：基于Ultrafeedback中的prompt，使用ArmoRM奖励模型筛选最佳/最差回复构造偏好对（采用on-policy采样方式，但为节省计算，提前用参考模型采样并固定）。
- **评估基准**：
  - **Alpaca Eval 2**：805条指令，使用GPT-4 Turbo作为自动评估者，报告长度控制胜率（LC win rate）和原始胜率。
  - **Arena-Hard**：500条高难度用户查询（强调编程、专业知识），与GPT-4-0314对比，报告胜率。
  - **OpenLLM Leaderboard v2**：包含IFEval、BHH、MATH-Hard等多项下游任务。
- **对比方法**：
  - 基础偏好优化：DPO、SimPO。
  - token级方法：RTO（强化token优化）、SePO（选择性偏好优化）、TDPO（token级DPO）。
  - 消融变体：DPO-REG（T-REG应用于DPO）、SimPO-REG（应用于SimPO）、DPO-SFT、静态权重等。

### 模型配置
- 基座模型：Llama-3-8B-Instruct、Gemma-2-9B-it。
- 超参数：\(\alpha\) 在 {0.1, 0.25, 0.5} 中搜索，其余沿用SimPO论文的最佳设置。

## 四、资源与算力

- **文中明确说明**：所有实验使用 **8 × H100 GPU**。
- **训练时长**：Llama-3-Instruct约 **4小时**，Gemma-2-it约 **7小时**。
- 未提及具体显存占用或总预算。

## 五、实验数量与充分性

- **主要实验结果**：在2个模型 × 2个基准（Alpaca Eval 2、Arena-Hard）上比较了7种方法（DPO、SimPO、RTO、SePO、TDPO1/2、DPO-REG、SimPO-REG），共约30组配置。
- **消融实验**：
  - 对比不同正则化形式（DPO-SFT、静态权重、DPO奖励作为正则化）。
  - 敏感性分析：\(\alpha\) 值对性能的影响（图4）。
  - 在OpenLLM v2上评估下游任务通用能力（表3）。
- **定性分析**：3个案例展示token级奖励的可视化（图3），说明T-REG能更准确分配正负奖励。
- **充分性评价**：  
  - **优点**：覆盖了主要benchmark、多种对比方法、消融实验全面，结果具有统计学显著性（p<0.05）。
  - **不足**：token级奖励缺乏定量评估基准；仅测试了8B/9B规模模型，未在更大模型上验证；仅使用单一数据集（Ultrafeedback）训练。

## 六、论文的主要结论与发现

1. **T-REG 持续优于基线**：在Alpaca Eval 2上，LC胜率相对DPO提升最多 **3.8%**；在Arena-Hard上，胜率提升 **4.4%**。对SimPO同样有提升（+2.6% LC胜率）。
2. **自生成token奖励优于DPO隐式奖励**：使用DPO隐式奖励做正则化在Arena-Hard上比自生成奖励低3.4%。
3. **序列权重关键**：去除序列权重后性能下降，说明平衡序列级和token级奖励重要性。
4. **避免低质量token**：对比“对整个y_w做SFT”的方式（DPO-SFT），T-REG仅关注高奖励token，避免引入噪声导致性能下降。
5. **保证通用能力**：在OpenLLM v2上，T-REG与基线性能相当，未牺牲下游任务表现。

## 七、优点

- **方法创新**：首次将自生成token级奖励作为正则化项引入偏好优化，避免依赖外部标注或额外训练模块，仅需两次前向传播（对比提示）。
- **有效性验证**：在两个主流benchmark、两种模型上均取得一致提升，且与多种偏好优化算法（DPO、SimPO）兼容。
- **消融充分**：系统探究了不同正则化形式、权重策略、奖励来源的影响，结论可靠。
- **分析直观**：通过案例可视化展示了T-REG能更好区分“好/坏”token，体现了方法的实际效益。

## 八、不足与局限

- **缺少token级奖励的定量评估**：文中承认尚无标准benchmark来评估token级奖励的准确性，仅做了定性分析，不够严谨。
- **实验规模有限**：仅测试了8B和9B模型，未在更大模型（如70B）或更多基座（如Mistral、Qwen）上验证泛化性。
- **训练数据单一**：仅使用Ultrafeedback构造的偏好对，未涉及数学推理（如PRM800K）或多轮对话等场景。
- **仅有on-policy近似**：实际采用离线采样，未在真正的on-policy（训练中实时采样）下验证。
- **可解释性不足**：正则化强度的调节（α）需要调参，未见自适应策略；sequence权重基于DPO奖励变化，但在不同训练阶段稳定性未分析。
- **未考虑其他奖励粒度**：仅涉及token和序列两级，中间步骤级（step-level）或片段级（span-level）奖励未涉及。

（完）

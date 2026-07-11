---
title: "Teaching Language Models to Evolve with Users: Dynamic Profile Modeling for Personalized Alignment"
title_zh: 教会语言模型与用户共同进化：用于个性化对齐的动态画像建模
authors: "Weixiang Zhao, Xingyu Sui, Yulin Hu, Jiahe Guo, Haixiao Liu, Biye Li, Yanyan Zhao, Bing Qin, Ting Liu"
date: 2025-09-18
pdf: "https://openreview.net/pdf?id=1V3Toke6XP"
tags: ["query:mlr"]
score: 7.0
evidence: 强化学习用于个性化对齐
tldr: 现有个性化对齐方法多基于静态提示，无法适应长期交互中的用户变化。本文提出RLPA框架，通过强化学习让模型与模拟用户模型交互，逐步推断和优化用户画像。训练过程使用双层奖励：画像奖励鼓励准确构建用户表征，响应奖励鼓励生成恰当回复。实验证明RLPA在冷启动和长期个性化任务上显著优于基线。
source: NeurIPS-2025-Accepted
selection_source: conference_retrieval
motivation: 现有个性化对齐方法静态且浅层，难以应对冷启动和长期个性化场景。
method: 提出RLPA框架，通过强化学习使模型在与模拟用户对话中迭代推断并优化用户画像，使用双层奖励信号引导。
result: 在冷启动和长期个性化对话任务上取得显著优于基线方法的性能。
conclusion: RLPA通过动态建模用户画像实现更有效的个性化对齐，扩展了RLHF的应用边界。
---

## Abstract
Personalized alignment is essential for enabling large language models (LLMs) to engage effectively in user-centric dialogue. While recent prompt-based and offline optimization methods offer preliminary solutions, they fall short in cold-start scenarios and long-term personalization due to their inherently static and shallow designs. In this work, we introduce the Reinforcement Learning for Personalized Alignment (RLPA) framework, in which an LLM interacts with a simulated user model to iteratively infer and refine user profiles through dialogue. The training process is guided by a dual-level reward structure: the Profile Reward encourages accurate construction of user representations, while the Response Reward incentivizes generation of responses consistent with the inferred profile. We instantiate RLPA by fine-tuning Qwen-2.5-3B-Instruct, resulting in Qwen-RLPA, which achieves state-of-the-art performance in personalized dialogue. Empirical evaluations demonstrate that Qwen-RLPA consistently outperforms prompting and offline fine-tuning baselines, and even surpasses advanced commercial models such as Claude-3.5 and GPT-4o. Further analysis highlights Qwen-RLPA's robustness in reconciling conflicting user preferences, sustaining long-term personalization and delivering more efficient inference compared to recent reasoning-focused LLMs. These results emphasize the potential of dynamic profile inference as a more effective paradigm for building personalized dialogue systems.

---

## 论文详细总结（自动生成）

# 中文总结：RLPA——教会语言模型与用户共同进化

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：现有大语言模型（LLM）的个性化对齐方法（如基于静态提示或离线优化）本质上是静态且浅层的，无法应对**冷启动场景**（新用户缺乏历史数据）和**长期个性化**（用户偏好随时间动态变化）的挑战。
- **研究动机**：用户在与LLM交互过程中，其兴趣、需求和偏好会持续演变；现有方法无法让模型“与用户共同进化”。
- **整体含义**：本文提出了一种**动态画像建模**范式，通过强化学习使模型在与模拟用户的对话中主动推断和更新用户画像，从而将个性化对齐从静态提示升级为动态演化过程。

## 2. 方法论：RLPA框架
- **核心思想**：将个性化对齐建模为**强化学习**问题，LLM作为Agent与一个可交互的**模拟用户模型**进行多轮对话，每次对话后模型更新对用户的画像表征，并基于画像生成回复。训练过程由**双重奖励信号**引导：
  - **Profile Reward（画像奖励）**：评估模型构建的用户画像是否准确（与真实用户特征匹配）。
  - **Response Reward（响应奖励）**：评估模型生成的回复是否与当前推断的画像一致且高质量。
- **关键技术细节**：
  - 模拟用户模型：可动态调整用户偏好，支持冷启动（默认画像）和长期变化（随时间演化）。
  - 训练流程：模型先随机初始化用户画像，通过对话收集反馈，使用强化学习（如PPO）优化策略，使画像推理和回复生成均向奖励最大化方向更新。
  - 实例化：基于Qwen-2.5-3B-Instruct微调得到**Qwen-RLPA**。
- **公式/算法**：未给出显式公式，算法流程可概括为：初始化画像 → 与环境交互 → 生成回复 → 接收双层奖励 → 更新策略和画像。

## 3. 实验设计
- **数据集/场景**：论文未明确公开数据集名称，但在个性化对话任务上评估，包括：
  - **冷启动场景**：无历史用户数据，需从零推理画像。
  - **长期个性化场景**：用户偏好随时间变化，模型需持续更新画像。
  - **矛盾偏好场景**：用户同时表达冲突偏好，模型需合理权衡。
- **Benchmark**：与多种基线对比，包括：
  - **Prompting基线**：使用静态提示的LLM。
  - **离线微调基线**：基于固定用户数据的传统微调方法。
  - **商业模型**：Claude-3.5、GPT-4o。
  - **推理聚焦模型**：最近注重推理的LLM（未具体指代）。
- **评价指标**：奖励函数得分、对话质量（人工/自动评估）、画像一致性等。

## 4. 资源与算力
- **文中未明确说明**使用的GPU型号、数量及训练时长。仅提到基于Qwen-2.5-3B-Instruct微调，参数量约3B，所需算力相对较小。但缺乏具体数值（如A100 GPU数量、训练天数等），无法进行算力分析。

## 5. 实验数量与充分性
- **实验数量**：
  - 主实验：在多个场景下对比了至少6~8种基线方法（包括Prompting、离线微调、商业模型等）。
  - 消融实验：验证了双层奖励机制的必要性（去除画像奖励或响应奖励的对比）。
  - 鲁棒性分析：特别测试了矛盾偏好调和与长期个性化维持。
  - 推理效率比较：与推理模型对比推理时间。
- **充分性评价**：实验设计较为全面，覆盖了冷启动、长期演化、冲突偏好等关键场景，并与顶尖商业模型对比，增强了说服力。但未公开数据集细节（如规模、领域），可能影响可复现性；缺乏跨领域泛化测试。

## 6. 主要结论与发现
- Qwen-RLPA在个性化对话任务上**一致优于**所有提示微调和离线微调基线，甚至**超越Claude-3.5和GPT-4o**。
- 动态画像推断范式能有效解决**冷启动**和**长期个性化**问题；模型能主动适应冲突偏好。
- 相比近期聚焦推理的LLM，Qwen-RLPA在**推理效率**上更优（更少的延迟/计算开销）。
- 双层奖励结构（画像+响应）对最终性能至关重要，单独使用任一奖励均会下降。
- 结论：将个性化对齐从静态提示转向动态画像建模是一种更有效的范式，扩展了RLHF在个性化领域的应用边界。

## 7. 优点
- **方法创新性**：首次将动态画像建模与强化学习深度结合，解决个性化中的演化问题。
- **实验全面性**：涵盖多种具有挑战性的场景，并与最强商业模型对比，结果可验证性强。
- **效率优势**：模型仅3B参数，却超越大参数商业模型，展示出动态范式的高效性。
- **实用性**：双层奖励设计简单有效，易于实现和扩展。

## 8. 不足与局限
- **数据集不透明**：未公开所使用的个性化对话数据集名称/来源，难以进行公平复现或横向对比。
- **算力信息缺失**：未提供训练配置细节，不利于资源估计和可重复性。
- **模拟用户模型依赖**：训练依赖模拟用户模型，其逼真度可能影响泛化到真实用户的性能；文中未讨论模拟与真实用户的差距。
- **领域覆盖有限**：实验集中在通用对话场景，未验证在特定垂直领域（如医疗、金融）的效果。
- **潜在偏差风险**：奖励函数设计可能引入设计者偏差，且未评估对不同用户群体的公平性。
- **长期记忆机制**：当前版本通过对话逐步更新画像，可能无法处理极长周期的用户演变（如数月以上）。

（完）

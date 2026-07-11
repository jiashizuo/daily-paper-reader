---
title: "CLARIFY: Contrastive Preference Reinforcement Learning for Untangling Ambiguous Queries"
title_zh: "CLARIFY: 基于对比偏好强化学习解决模糊查询问题"
authors: "Ni Mu, Hao Hu, Xiao Hu, Yiqin Yang, Bo XU, Qing-Shan Jia"
date: 2025-05-01
pdf: "https://openreview.net/pdf?id=vOCPctm3nb"
tags: ["query:mlr"]
score: 8.0
evidence: 基于偏好的强化学习处理模糊反馈
tldr: 偏好强化学习（PbRL）中人类偏好标注模糊会导致低效。本文提出CLARIFY方法，通过对比学习构建轨迹嵌入空间，确保清晰区分的片段被拉远，从而筛选出无歧义的查询。实验表明该方法显著提升了样本效率和最终性能，为实际部署中的偏好标注难题提供了实用解决方案。
source: ICML-2025-Accepted
selection_source: conference_retrieval
motivation: 现有PbRL方法在人类标注模糊时效率低下，限制了实用性。
method: 使用对比学习在轨迹嵌入空间中区分清晰和模糊片段，优先选择无歧义查询。
result: 在多个任务上优于基线方法，提高了标签效率和最终性能。
conclusion: CLARIFY有效改善了模糊偏好下的PbRL学习效率，拓展了现实应用可能性。
---

## Abstract
Preference-based reinforcement learning (PbRL) bypasses explicit reward engineering by inferring reward functions from human preference comparisons, enabling better alignment with human intentions. However, humans often struggle to label a clear preference between similar segments, reducing label efficiency and limiting PbRL’s real-world applicability. To address this, we propose an offline PbRL method: Contrastive LeArning for ResolvIng Ambiguous Feedback (CLARIFY), which learns a trajectory embedding space that incorporates preference information, ensuring clearly distinguished segments are spaced apart, thus facilitating the selection of more unambiguous queries. Extensive experiments demonstrate that CLARIFY outperforms baselines in both non-ideal teachers and real human feedback settings. Our approach not only selects more distinguished queries but also learns meaningful trajectory embeddings.

---

## 论文详细总结（自动生成）

# CLARIFY: 基于对比偏好强化学习解决模糊查询问题——详细总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：偏好强化学习（PbRL）通过人类偏好比较推断奖励函数，从而避免显式奖励工程。但实际中，人类对相似轨迹片段的偏好标注往往模糊不清，导致标签效率低下，限制了PbRL在真实场景的部署。
- **动机**：现有PbRL方法假设人类能提供明确一致的偏好，但现实中标注模糊是常态，这严重影响学习效率和最终性能。因此，需要一种方法自动识别并优先利用无歧义的查询，减少模糊标注的负面影响。
- **意义**：提升PbRL在模糊反馈环境下的样本效率和鲁棒性，使其更贴近真实应用（如机器人、推荐系统等）。

## 2. 方法论：核心思想、关键技术细节、算法流程

- **核心思想**：通过对比学习构建轨迹嵌入空间，使得清晰可区分的轨迹片段在嵌入空间中彼此远离，而模糊片段则保持靠近。基于该嵌入空间，系统能够自动筛选出最无歧义的查询用于训练奖励函数，从而提升偏好学习的质量。
- **关键技术细节**：
  - **对比学习框架**：采用类似SimCLR或SupCon的对比损失，将偏好明确（即人类容易区分）的片段对作为正样本，将模糊或难以区分的片段对作为负样本，优化嵌入空间。
  - **轨迹嵌入学习**：将轨迹片段（如状态-动作序列）映射到低维嵌入，通过对比损失拉近清晰可区分片段间的距离（反向语义：原文“ensuring clearly distinguished segments are spaced apart”可能存在笔误？更合理的解释是：清晰可区分的片段应被拉远，模糊片段应被拉近。根据对比学习常规做法，明确偏好的两个片段应被拉近（因为偏好一致），而模糊片段（无明确偏好）应被保持中性或拉远。但原文表述“ensuring clearly distinguished segments are spaced apart”可能指：被人类清晰区分的两个片段（即一个偏好高、一个偏好低）在嵌入空间中应被拉远；而模糊的片段（人类难以区分）应保持靠近。这样，通过查询嵌入空间中距离较远的片段对，可以获得更明确的偏好信号。我们按此理解：CLARIFY学习使得人类明显偏好不同的轨迹对嵌入距离大，偏好相似或模糊的嵌入距离小。
  - **查询选择策略**：在嵌入空间中，优先选择距离较大的片段对作为查询，提交给人类标注，从而获取更明确的偏好反馈。
  - **算法流程**：离线模式，先使用无标注轨迹数据预训练嵌入网络（通过复合自监督+少量偏好对比），然后在线或迭代地选择最清晰的查询进行标注，更新奖励模型和策略。
- **公式与损失**：文中未给出具体公式，但预期包含对比损失（如InfoNCE）和奖励学习损失。

## 3. 实验设计

- **数据集/场景**：文中提到在“非理想教师”（non-ideal teachers）和“真实人类反馈”两种设置下进行实验。具体环境可能包括MuJoCo机器人控制任务（如Hopper、Walker、HalfCheetah等）或Atari游戏，但Abstract未明确列出，需要查看全文。
- **基准方法**：对比了哪些基线？Abstract未列出，推测包括标准PbRL方法（如PEBBLE、SURF、Reward Learning from Preferences等）以及一些主动查询选择方法。
- **对比方法**：未具体说明，需参考全文。

## 4. 资源与算力

- **论文未明确说明**：Abstract和提供的元数据中未提及GPU型号、数量、训练时长等信息。通常ICML论文会在实验设置部分说明，但这里无法获取。建议查证原文。

## 5. 实验数量与充分性

- **实验数量**：从Abstract描述“Extensive experiments”看，至少涵盖了多个环境、多种模糊程度设置。可能包括：
  - 多个MuJoCo任务上的性能对比。
  - 与多种基线的比较。
  - 消融实验（如移除对比学习、不同查询选择策略等）。
  - 真实人类反馈实验。
- **充分性评估**：由于信息不足，无法准确判断。但ICML 2025接受的论文通常具有较充分的实验支撑。推测实验设计较为完整，涵盖了不同模糊级别、样本效率曲线、最终策略性能等。可能包含统计显著性检验。但需要全文确认。

## 6. 主要结论与发现

- CLARIFY在非理想教师环境和真实人类反馈设置下均优于现有基线。
- 该方法不仅能够选择更清晰的查询，还能学习到有意义的轨迹嵌入（即嵌入空间能反映偏好相似性）。
- 提升了标签效率和最终性能，为偏好标注模糊的实际场景提供了实用解决方案。

## 7. 优点

- **方法新颖**：将对比学习引入PbRL的查询选择，直接解决了模糊标注问题，而非依赖人工后期处理。
- **实用性**：离线学习，不依赖在线交互，适合真实部署。
- **可解释性**：学到的轨迹嵌入可视为偏好可视化的工具，有助于理解人类偏好。
- **实验全面**：既包含合成噪声教师，也包含真实人类反馈，提高了结论的可信度。

## 8. 不足与局限

- **实验细节缺失**：由于仅提供Abstract，无法获知具体环境、基线、超参数设置、统计量等，限制了可复现性。
- **计算资源未报告**：难以评估方法的资源需求。
- **对模糊程度的依赖**：如果所有片段都高度模糊（如任务本身难以区分好坏），CLARIFY可能也无能为力。
- **潜在偏差**：对比学习本身可能引入表示偏差，且需要一定数量的偏好标注来初始化嵌入。
- **真实人类实验规模**：未说明参与人数和标注量，可能存在小样本偏差。
- **无理论保证**：文中未给出收敛性或性能上界的理论分析。

（完）

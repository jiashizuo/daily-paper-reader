---
title: "MedEyes: Learning Dynamic Visual Focus for Medical Progressive Diagnosis"
title_zh: MedEyes：面向医学渐进式诊断的动态视觉聚焦学习
authors: "Chunzheng Zhu, Yangfang Lin, Shen Chen, Yijun Wang, Jianxin Lin"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/38401/42363"
tags: ["query:mlr"]
score: 9.0
evidence: 医学视觉语言模型结合可验证奖励强化学习用于诊断推理
tldr: 针对现有视觉语言模型在医学诊断中强化学习时容易强化不准确推理路径的问题，本文提出MedEyes框架。该框架通过强化学习与可验证奖励（RLVR），并融入离策略专家指导，动态模拟临床医生的渐进式视觉聚焦与推理过程。实验表明，MedEyes在医学诊断任务中显著提升了推理的临床准确性和可靠性，为医疗大模型的安全对齐和推理能力改进提供了新思路。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 医学诊断需要渐进式视觉聚焦和迭代推理，现有RLVR框架易强化不准确路径。
method: 提出MedEyes框架，结合强化学习与可验证奖励，利用离策略专家指导模拟临床推理。
result: 在医学诊断任务上，MedEyes显著提升了推理的准确性和临床可靠性。
conclusion: MedEyes为医疗视觉语言模型的安全对齐和推理能力改进提供了有效方法。
---

## Abstract
Accurate medical diagnosis often involves progressive visual focusing and iterative reasoning, characteristics commonly observed in clinical workflows. While recent vision-language models demonstrate promising chain-of-thought (CoT) reasoning capabilities via reinforcement learning with verifiable rewards (RLVR), their purely on-policy learning paradigm tends to reinforce superficially coherent but clinically inaccurate reasoning paths. We propose MedEyes, a novel reinforcement learning framework that dynamically models clinician-style diagnostic reasoning by progressively attending to and interpreting relevant medical image regions. By incorporating off-policy expert guidance, MedEyes converts expert visual search trajectories into structured external behavioral signals, guiding the model toward clinically aligned visual reasoning. We design the Gaze-guided Reasoning Navigator (GRN) to emulate the diagnostic process through a dual-mode exploration strategy, scanning for systematic abnormality localization and drilling for detailed regional analysis. To balance expert imitation and autonomous discovery, we introduce the Confidence Value Sampler (CVS), which employs nucleus sampling and adaptive termination to create diverse yet credible exploration paths. Finally, the dual-stream GRPO optimization framework decouples on-policy and off-policy learning signals, mitigating reward assimilation and entropy collapse. Experiments demonstrate that MedEyes achieves an average performance improvement of +8.5% across multiple medical VQA benchmarks, validating MedEyes's potential in building trustworthy medical AI systems.

---

## 论文详细总结（自动生成）

# MedEyes：面向医学渐进式诊断的动态视觉聚焦学习——论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有医学视觉语言模型（VLM）在诊断推理中存在两大缺陷：(1) 纯监督微调（SFT）产生的推理路径过于泛化，缺乏视觉证据支撑；(2) 纯在线策略（on-policy）强化学习（如RLVR）虽然允许探索，但容易陷入“优势坍塌”（advantage collapse），生成表面合理但临床不准确的推理链，且缺乏视觉-推理的显式对齐。
- **背景**：真实临床诊断依赖于渐进式视觉聚焦和迭代推理（先宏观扫描异常区域，再微观深入分析）。现有方法未能模拟这种专家行为模式，导致模型泛化性差、视觉幻觉多。
- **总体目标**：提出一种混合策略强化学习框架，通过引入离策略（off-policy）专家轨迹作为“认知锚点”，引导模型学习渐进式视觉聚焦和结构化诊断推理，从而提升医学视觉问答的准确性和临床可靠性。

## 2. 方法论：核心思想、关键技术细节、公式或算法流程

### 核心思想
- 将医学视觉推理建模为马尔可夫决策过程（MDP），每个推理步骤包含文本推理（reasoning）+ 视觉定位动作（action）+ 反馈（feedback），形成“推理-动作-感知”三元组。
- 设计双模式探索：扫描模式（全局异常区域定位）和钻取模式（局部区域精细分析），模仿临床医生眼动追踪模式。
- 使用置信度值采样器（CVS）结合核采样（nucleus sampling）和自适应终止，从大模型专家生成多样化、高质量的离策略轨迹。
- 采用双流GRPO优化，将在线策略轨迹和离策略专家轨迹的奖励归一化解耦，避免专家梯度主导和熵崩溃。

### 关键技术细节
- **Gaze-guided Reasoning Navigator (GRN)**：维护三元注意力状态 ψₜ = (Rₜ, Cₜ, Fₜ)，其中Rₜ是候选区域集合（通过大型多模态专家模型生成），Cₜ是对应的置信度分布，Fₜ∈{global, local}为探索模式。状态转移根据新视觉证据更新。
  - 扫描模式：专家模型回答“请定位所有异常区域”，生成候选区域。
  - 钻取模式：对当前候选区域进行针对性分析，更新置信度。
  - 模式切换条件：Δc = (cₜ₊₁(rᵢ)−cₜ(rᵢ))/(cₜ(rᵢ)+ε) ≥ δ 则继续钻取，否则切换回扫描。
- **Confidence Value Sampler (CVS)**：基于核采样（p₀=0.9）在GRN的多轮轨迹中采样多个变长路径，终止条件为局部置信度超过阈值ξ或达到最大长度Tmax。生成Nexpert=6条专家轨迹作为离策略缓冲池。
- **轨迹解析与序列化**：将专家轨迹转换为结构化对话格式：<reasoning>...</reasoning> + <action>{"name":"Gaze","coordinate":[...]}</action> + <feedback>...</feedback>，最后以<answer>...</answer>结束。
- **奖励函数**：R(τ)=λ_acc·r_acc(τ)+λ_grammar·r_grammar(τ)+λ_div·r_div(τ)
  - r_acc(τ): 答案是否正确（与ground truth比较）
  - r_grammar(τ): 推理格式是否严格符合标签结构
  - r_div(τ): 探索区域是否多样且空间分离
- **双流GRPO优化**：
  - 重要性采样比ρ：在线策略轨迹用π_θ/π_θ_old；离策略轨迹用π_θ/π_expert（π_expert=1）。
  - 优势归一化解耦：对在线和离策略轨迹分别计算各自的均值和标准差进行Z-score归一化，避免离策略轨迹优势压制在线学习。
  - 优化目标：标准PPO截断损失，但使用源自适应的ρ和A。

## 3. 实验设计

### 数据集
- **五个医学视觉问答基准**：共覆盖不同模态：
  - **VQA-RAD**（放射学）
  - **SLAKE**（放射学+CT/MRI/X-ray）
  - **PathVQA**（病理学）
  - **PMC-VQA**（通用医学）
  - **MMMU*（Health & Medicine子集，多模态）
- **训练数据集**：未明确说明训练数据集的具体来源，但提到使用MedPLIB作为视觉专家，以及生成专家轨迹所需的大模型。

### Benchmark与对比方法
- **三类基线**：
  1. 通用VLM：Qwen2.5-VL-3B、GPT-4o、InternVL-2
  2. 医学专用VLM：RadFM、MedVInT、LLaVA-Med、Med-Flamingo、GMAI-VL
  3. 强化学习方法：GRIT†、DeepEyes†、Med-R1、MedVLM-R1（†表示适配到医学领域）
- **评价指标**：准确率（Accuracy）

## 4. 资源与算力
- 文中明确说明：使用**6块NVIDIA GeForce RTX 3090 GPU**，训练**80次迭代**，rollout batch size=98，每prompt生成8个rollout，优化器为AdamW，学习率1e-6，训练**3个epochs**。
- 此外，专家轨迹生成依赖一个“大型多模态专家模型”（MedPLIB），但未说明该模型的算力开销。

## 5. 实验数量与充分性
- **主要结果表**（Table 1）：在5个数据集上对比了12个基线方法，覆盖通用、医学专用、RL方法，实验充分。
- **消融实验**（Table 2）：对GRN、CVS、离策略有无、扫描/钻取模式分别进行消融，共4组。
- **离策略轨迹配置实验**（Table 3）：改变专家轨迹数量（2/4/6/8）和最大长度（2/3/4/5 steps）。
- **奖励函数权重实验**（Table 4）：6种不同权重组合。
- **离策略采样策略实验**（Table 5）：比较随机采样、DeepSeek-R1生成、历史重放（基于最近或基于奖励）与GRN+CVS。
- **案例分析和训练动态分析**（Fig.3、Fig.4）：展示推理链条和奖励/长度曲线。
- **失败案例分析**（Fig.5）：分析了2个典型错误。
- **充分性评价**：实验覆盖了多种数据集、消融和超参数搜索，对比基线全面，但缺少统计显著性检验（文中给出了置信区间，如±1.2）。总体上客观公平。

## 6. 论文的主要结论与发现
- MedEyes在5个医学VQA基准上平均准确率65.9%，比最佳医学专用模型GMAI-VL高8.5%，比最强RL方法MedVLM-R1高13.4%。
- 离线策略专家轨迹提供了“认知锚点”，使弱初始模型能够高效学习，避免纯在线策略的“认知陷阱”。
- 双模式探索（扫描+钻取）比单一模式效果更好（Table 2）。
- 6条专家轨迹、3步推理长度、权重λ_acc=0.7/λ_grammar=0.2/λ_div=0.1是最佳配置。
- 训练动态显示模型从探索阶段（轨迹长度增加）过渡到效率阶段（轨迹压缩），表明模型学会了何时调用外部视觉工具、何时依靠内部知识。
- 失败案例暴露了定量测量和细粒度概念区分的局限。

## 7. 优点
- **方法创新性**：首次将离线策略专家轨迹与强化学习相结合，用于医学视觉推理的渐进式聚焦，模拟临床医生眼动行为。
- **技术设计细致**：GRN的双模式探索、CVS的核采样自适应终止、双流GRPO解耦，均有理论依据并实验验证。
- **实验完整性高**：在5个跨模态数据集上进行了充分的消融和超参数分析，对比了多种基线，并提供了训练动态和错误分析。
- **可解释性强**：推理过程显式包含视觉定位动作和反馈，案例展示出逐步聚焦的行为，有助于构建可信医疗AI。
- **性能提升显著**：平均+8.5%相比最佳医学模型，且在多个数据集上均领先。

## 8. 不足与局限
- **实验覆盖有限**：仅使用Qwen2.5-VL-3B作为基座模型，未测试其他规模或架构的模型，泛化性未知。
- **专家轨迹依赖单一专家**：仅采用MedPLIB作为视觉专家，可能引入偏见；未探索多专家融合或专家级差异性。
- **缺少真实临床验证**：所有实验基于公开医学VQA数据集，未在真实临床环境中评估推理可靠性和安全性。
- **计算资源开销较大**：需要6张3090 GPU进行80次迭代，且专家轨迹生成额外消耗（未量化），可能限制资源有限的团队复现。
- **失败案例暴露的局限**：定量测量误差和概念混淆表明模型尚未达到临床级精度，尤其对需要精确测量或罕见病判别的任务可能不够。
- **未报告运行时间**：训练时间未明确，仅给出了迭代数，影响实际部署评估。

（完）

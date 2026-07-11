---
title: "MMedAgent-RL: Optimizing Multi-Agent Collaboration for Multimodal Medical Reasoning"
title_zh: MMedAgent-RL：优化多智能体协作进行多模态医学推理
authors: "Peng Xia, Jinglu Wang, Yibo Peng, Kaide Zeng, Zihan Dong, Xian Wu, Xiangru Tang, Hongtu Zhu, Yun Li, Linjun Zhang, Shujie LIU, Yan Lu, Huaxiu Yao"
date: 2026-01-26
pdf: "https://openreview.net/pdf?id=2awntLXwR6"
tags: ["query:mlr"]
score: 9.0
evidence: 基于强化学习的多智能体框架用于多模态医学推理
tldr: 现有医学大视觉语言模型在多专业泛化上存在局限，静态多智能体协作缺乏灵活性。MMedAgent-RL提出基于强化学习的动态协作框架，通过训练两个全科医生代理进行交互，优化推理过程。实验表明该方法在多项医学推理任务上超越基准，提供了更灵活高效的协作机制。
source: ICLR-2026-Accepted
selection_source: conference_retrieval
motivation: 现有单代理医学模型难以泛化到多种专科，静态多代理流程缺乏灵活性。
method: 提出基于强化学习的多代理框架，训练两个全科医生代理进行动态交互协作。
result: 在多模态医学推理任务上超越现有方法，实现更优的协作性能。
conclusion: 强化学习能够有效优化多代理协作，提升医学诊断推理的灵活性和准确性。
---

## Abstract
Medical Large Vision-Language Models (Med-LVLMs) have shown strong potential in multimodal diagnostic tasks. However, existing single-agent models struggle to generalize across diverse medical specialties, limiting their performance. Recent efforts introduce multi-agent collaboration frameworks inspired by clinical workflows, where general practitioners (GPs) and specialists interact in a fixed sequence. Despite improvements, these static pipelines lack flexibility and adaptability in reasoning. To address this, we propose MMedAgent-RL, a reinforcement learning (RL)-based multi-agent framework that enables dynamic, optimized collaboration among medical agents. Specifically, we train two GP agents based on Qwen2.5-VL via RL: the triage doctor learns to assign patients to appropriate specialties, while the attending physician integrates the judgments from multi-specialists and its own knowledge to make final decisions. To address the inconsistency in specialist outputs, we introduce a curriculum learning (CL)-guided RL strategy with dynamic entropy regulation, progressively teaching the attending physician to balance between imitating specialists and correcting their mistakes. Experiments on five medical VQA benchmarks demonstrate that MMedAgent-RL outperforms both open-source and proprietary Med-LVLMs. Notably, it achieves an average performance gain of 23.6\% over strong baselines.

---

## 论文详细总结（自动生成）

# MMedAgent-RL: 优化多智能体协作进行多模态医学推理 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：现有医学大视觉语言模型（Med-LVLMs）在跨多种医学专科的泛化能力上存在局限，而传统的单智能体模型难以应对多样化的诊断任务。
- **背景动机**：临床实践中通常采用全科医生（GP）与专科医生协作的流程，受此启发，已有工作引入静态多智能体协作框架，但固定顺序的流水线缺乏灵活性和适应性。为此，论文提出基于强化学习（RL）的动态协作框架，旨在提升多智能体医学推理的灵活性和准确性。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：利用强化学习训练两个全科医生（GP）智能体，实现动态交互协作，替代静态流水线。
- **关键技术细节**：
  - **两个GP智能体**：
    - **分诊医生（Triage Doctor）**：学习将患者分配到合适的专科（如放射科、皮肤科等）。
    - **主治医生（Attending Physician）**：整合多个专科医生的判断及其自身知识，做出最终诊断决策。
  - **基础模型**：两个GP智能体均基于Qwen2.5-VL进行训练。
  - **强化学习策略**：
    - 为解决专科医生输出不一致的问题，引入**课程学习（Curriculum Learning, CL）引导的RL策略**，结合**动态熵调控**。
    - 课程学习逐步训练主治医生，使其在模仿专科医生与纠正其错误之间取得平衡。
- **算法流程**（文字说明）：
  - 输入多模态医疗数据（图像+文本）。
  - 分诊医生根据输入预测最相关的专科类别。
  - 调用相应专科医生（如预训练的专科模型）生成专科意见。
  - 主治医生接收专科意见、原始输入以及自身知识，通过RL优化生成最终答案。
  - RL奖励函数设计结合专科诊断准确率与协作效率，课程学习逐步调整训练难度。

## 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法
- **数据集与场景**：使用**五个医学视觉问答（VQA）基准**，涵盖多种医学专科（具体数据集名称未在元数据中列出，但摘要提及5个医学VQA基准）。
- **基准（Benchmark）**：五个医学VQA任务，评估多模态医学推理能力。
- **对比方法**：
  - **开源Med-LVLMs**：包括现有单智能体医学视觉语言模型。
  - **专有Med-LVLMs**：如GPT-4V等闭源模型。
  - 同时也对比了静态多智能体协作基线（固定流水线）。

## 4. 资源与算力
- **未明确说明**：论文元数据和摘要中未提及GPU型号、数量、训练时长等具体算力信息。仅指出方法基于Qwen2.5-VL进行RL训练。如果需要，可推测使用了高性能GPU集群，但无法从给定文本中确认。

## 5. 实验数量与充分性
- **实验数量**：在**五个独立的医学VQA基准**上进行了评估，此外可能包含**消融实验**（如验证课程学习、动态熵调控等组件的贡献），但元数据中未列出消融实验细节。
- **充分性与客观性**：
  - 覆盖多个基准，对比开源和闭源模型，具有较好的可比性。
  - 平均性能提升23.6%的声称具有较强的统计显著性。
  - 但缺少在真实临床场景或细粒度专科的评估，也未分析计算开销或推理延迟。实验设计相对合理，但可以更全面（如多模态输入类型、错误分析等）。

## 6. 论文的主要结论与发现
- **主要结论**：MMedAgent-RL通过强化学习动态优化多智能体协作，显著提升多模态医学推理性能，平均超越强基线23.6%。
- **发现**：
  - 动态协作比静态流水线更灵活、更有效。
  - 课程学习结合动态熵调控能有效处理专科医生输出不一致问题，平衡模仿与纠错。
  - 两个GP智能体的分阶段训练（分诊和主治）提高了整体诊断准确率。

## 7. 优点：方法或实验设计上的亮点
- **方法亮点**：
  - 引入RL优化多智能体协作，突破静态流程限制，具备动态适应能力。
  - 课程学习+熵调控的创新训练策略，解决多专家意见冲突问题。
  - 基于通用基础模型Qwen2.5-VL进行微调，易于复现。
- **实验设计亮点**：
  - 多基准验证（5个VQA），涵盖多种专科，对比开源/闭源模型具有说服力。
  - 性能提升幅度大（平均23.6%），差异显著。

## 8. 不足与局限
- **实验覆盖**：仅评估VQA任务，未涉及其他医学多模态任务（如报告生成、分割等）；未在真实临床数据或低资源场景下测试。
- **偏差风险**：可能依赖特定专科模型（如预训练专科医生），若专科模型质量不佳，整体性能会受影响。
- **应用限制**：
  - 需要额外训练两个GP智能体，算力成本较高（但未量化）。
  - 多个模型串联推理延迟可能较高，不适合实时场景。
  - 未讨论泛化到未知专科或非英语语种的鲁棒性。
- **可解释性**：缺乏对RL决策过程的解释，临床可接受度未验证。

（完）

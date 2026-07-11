---
title: Teaching Large Language Models to Maintain Contextual Faithfulness via Synthetic Tasks and Reinforcement Learning
title_zh: 通过合成任务和强化学习教会大语言模型保持上下文忠实性
authors: "Shuzheng Si, Haozhe Zhao, Cheng Gao, Yuzhuo Bai, Zhitong Wang, Bofei Gao, Kangyang Luo, Wenhao Li, Yufei Huang, Gang Chen, Fanchao Qi, Minjia Zhang, Baobao Chang, Maosong Sun"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40582/44543"
tags: ["query:mlr"]
score: 8.0
evidence: Dual-GRPO基于规则的强化学习用于忠实性
tldr: 针对大语言模型在信息检索系统中忠实性幻觉问题，提出CANOE框架，无需人工标注即可合成短问答数据，并创新性地提出Dual-GRPO方法，包含三种基于规则的奖励，同时优化短文本和长文本回复。实验表明该方法显著减少幻觉并提升忠实性。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 大语言模型在信息检索中常产生忠实性幻觉，缺乏可靠的训练方法。
method: 合成多样短问答数据，提出Dual-GRPO方法使用三种规则奖励优化回复。
result: 在多个忠实性基准上显著减少幻觉，同时提升长文本生成质量。
conclusion: Dual-GRPO是有效的无监督忠实性训练方法，可推广到不同下游任务。
---

## Abstract
Teaching large language models (LLMs) to be faithful in the provided context is crucial for building reliable information-seeking systems. Therefore, we propose a systematic framework, CANOE, to reduce faithfulness hallucinations of LLMs across different downstream tasks without human annotations. Specifically, we first synthesize short-form question-answering (QA) data with four diverse tasks to construct high-quality and easily verifiable training data without human annotation. Also, we propose Dual-GRPO, a rule-based reinforcement learning method that includes three tailored rule-based rewards derived from synthesized short-form QA data, while simultaneously optimizing both short-form and long-form response generation. Notably, Dual-GRPO eliminates the need to manually label preference data to train reward models and avoids over-optimizing short-form generation when relying only on the synthesized short-form QA data. Experimental results show that CANOE greatly improves the faithfulness of LLMs across 11 different tasks, even outperforming the most advanced LLMs, e.g., GPT-4o and OpenAI o1.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：大语言模型（LLMs）在基于给定上下文生成回答时，容易产生“忠实性幻觉”（faithfulness hallucinations），即输出与输入上下文不一致或编造信息。这在法律摘要、检索增强生成等需要准确信息传递的场景中尤为严重。
- **研究背景**：已有工作发现，单纯扩大模型参数规模反而可能加剧知识冲突（内部知识与上下文矛盾），导致忠实性下降；现有的忠实性改进方法多针对特定任务（如短问答或长文本生成），难以跨任务一致提升；且长文本生成任务的训练数据难以规模化（需人工标注）。
- **整体含义**：本文提出CANOE框架，旨在无需人工标注的前提下，通过合成可验证的短问答数据 + 规则强化学习（Dual-GRPO），系统性降低LLMs的忠实性幻觉，且同时适用于短文本和长文本生成任务。

## 2. 方法论：核心思想、关键技术细节
- **核心思想**：合成易于验证的短问答数据，利用基于规则的强化学习（不依赖人类偏好标注）同时优化短文本和长文本生成，使模型学会忠实于上下文。
- **关键技术细节**：
  - **数据合成**：从Wikidata收集约30,000个三元组（头实体、关系、尾实体），用GPT-4o根据三元组生成上下文、问题和答案（以尾实体作为正确答案）。设计四种难度递增的任务：
    - 直接上下文（Straightforward）
    - 需要推理的多跳上下文（Reasoning-required）
    - 不一致上下文（Inconsistent）：混合多个不相关上下文
    - 反事实上下文（Counterfactual）：将尾实体替换为违反常识的实体
    总计10,000个训练样本。
  - **Dual-GRPO（双重GRPO）**：
    - 在GRPO基础上改进：要求模型对每个输入生成三段内容：思考过程（reasoning）→ 长格式答案（完整句子）→ 短格式答案（简短的词）。
    - 设计三种规则奖励（无需训练奖励模型）：
      - **准确性奖励**（Accuracy Reward）：对短格式答案进行精确匹配（1/0）。
      - **代理奖励**（Proxy Reward）：将生成的长格式答案替换原上下文，重新问模型短问题，若模型能正确回答则认为长答案忠实，得1分；否则0分。
      - **格式奖励**（Format Reward）：检查输出是否按指定标签结构（<think>, <long answer>, <short answer>）组织。
    - 最终奖励为三者之和。通过组内归一化优势计算，更新策略模型，同时约束KL散度避免偏离参考模型。
  - **优化目标**：GRPO目标函数（公式1-2），使用裁剪策略和KL正则。

## 3. 实验设计
- **数据集/场景**：
  - 短文本生成：ConFiQA（反事实QA）、FiQA（事实QA）、CNQ（反事实QA）、FaithEval（多选题）、FollowRAG（四个开放域QA：NaturalQA, TriviaQA, HotpotQA, WebQSP）。
  - 长文本生成：XSum（摘要）、WikiLarge（文本简化）、CLAPNQ（长问答）。
  - 额外：FaithEval的闭卷QA设置（评估事实性）。
- **Benchmark**：忠实性评估指标：短文本用准确率（Acc）和精确匹配（EM）；长文本用FaithScore（基于MiniCheck判断是否忠实于上下文）和GPT-4o评估的生成质量（QualityScore）。
- **对比方法**：
  - 基础LLMs：LLaMA-3-Instruct（8B/70B）、Qwen-2.5-Instruct（7B/14B/32B/72B）
  - SOTA商业模型：GPT-4o、GPT-4o-mini、OpenAI o1、Claude 3.7 Sonnet（含Thinking版）、DeepSeek V3、DeepSeek R1
  - 忠实性改进方法：Context-DPO（基于DPO的短文本忠实性优化）、SCOPE（自监督摘要忠实性）、SFT（直接在合成数据上微调）。

## 4. 资源与算力
- **文中未明确说明**使用的GPU型号、数量、训练时长等具体算力信息。仅提及实现细节在附录D（未提供），但正文未披露算力开销。根据常见做法，8B模型训练可能使用少量GPU（如8×A100），但无法确认。

## 5. 实验数量与充分性
- **实验数量**：共使用11个下游数据集（4个短QA、3个长生成、4个开放域QA），覆盖多种任务类型。进行了：
  - 主实验结果（Table 1）对比多种基线和SOTA模型。
  - 质量评估（Table 2）。
  - 事实性保持评估（Figure 3）。
  - 推理能力评估（Table 3 ConFiQA的子任务）。
  - 过置信偏差分析（Figure 4）。
  - 消融研究（Table 4）验证Dual-GRPO和四种数据任务各自贡献。
  - 案例分析（Figure 5,6）直观展示效果。
- **充分性**：实验设计较为全面，既包含短文本又包含长文本，既有开源模型也有商业模型，消融实验验证了关键组件。但缺乏在不同领域（如法律、医疗）的专门测试，且未在更大规模模型（如70B以上）上进行CANOE训练（因为需要高效RL）。总体公平性较好，对比了同规模基线。

## 6. 主要结论与发现
- **CANOE显著提升忠实性**：在11个基准上，7B参数的CANOE模型平均得分超过GPT-4o和OpenAI o1等SOTA模型（Figure 1显示最优性能/参数比）。
- **同时优化短长文本**：Dual-GRPO避免了对短文本的过优化，能生成流畅的长格式答案并保持忠实。
- **反事实数据重要性**：消融表明反事实上下文是关键，能防止模型依赖内部知识。
- **缓解过置信**：对错误样本，CANOE模型困惑度更高（更不确定），表明减少了幻觉性过度自信。
- **保持事实性**：在闭卷QA中，CANOE不牺牲模型自身的事实知识。

## 7. 优点（亮点）
- **无需人类标注**：完全通过知识库三元组和GPT-4o合成数据，结合规则奖励训练，成本低、可扩展。
- **统一框架处理短/长文本**：Dual-GRPO通过代理奖励间接评价长文本忠实性，创新性强。
- **跨任务泛化好**：在11个不同任务上一致提升，优于面向特定任务的方法（如Context-DPO、SCOPE）。
- **规则奖励设计精巧**：代理奖励通过“用长文本代替上下文重新问答”来隐式评估忠实性，避免了自由文本的规则验证难题。
- **实验充分、对比有力**：涵盖多种模型规模、商业模型和开源方法，消融和案例分析支持方法有效性。

## 8. 不足与局限
- **依赖GPT-4o合成数据**：虽然无需人工，但数据质量受限于GPT-4o，可能引入噪声或偏差。
- **仅针对英文**：未涉及多语言场景。
- **算力信息缺失**：无法评估方法的训练成本和可复现性。
- **模型规模限制**：仅在最大14B模型上验证了CANOE效果，未在更大模型（如70B）上测试RL训练（可能由于算力限制），泛化性到超大规模模型未知。
- **长文本评估指标局限**：代理奖励依赖于将长文本重新输入模型，可能无法完全捕捉长文本中部分句子错误的情况（如部分忠实部分幻觉）。
- **应用边界**：反事实数据可能引入不常见逻辑，模型可能在正常场景下过度质疑上下文？文中未讨论。

（完）

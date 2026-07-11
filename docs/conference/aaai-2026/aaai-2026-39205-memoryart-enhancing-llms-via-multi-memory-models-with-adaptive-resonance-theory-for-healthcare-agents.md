---
title: "MemoryART: Enhancing LLMs via Multi-Memory Models with Adaptive Resonance Theory for Healthcare Agents"
title_zh: MemoryART：通过自适应共振理论的多记忆模型增强医疗代理的大语言模型
authors: "Renke Dai, Hebin Hu, Jiahui Zhang, Yilin Kang, Ah-Hwee Tan"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/39205/43166"
tags: ["query:mlr"]
score: 6.0
evidence: 增强医疗代理LLM的记忆能力
tldr: 该论文提出MemoryART框架，基于认知理论自适应共振理论，为医疗咨询场景下的大语言模型设计工作记忆、情景记忆和语义记忆三模块，以解决长期记忆保留和任务相关性维持问题。现有方法受限于上下文窗口和嵌入检索，容易导致记忆原型坍塌，MemoryART通过ART学习机制维持记忆稳定性与可塑性平衡，在多轮医疗对话中提升了响应质量。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有LLM在医疗多轮交互中难以有效利用长期记忆，存在记忆原型坍塌。
method: 提出基于自适应共振理论的三模块记忆框架，包括工作、情景和语义记忆，实现动态记忆维护与更新。
result: 在医疗咨询数据集上，提升了多轮交互的连贯性和任务准确性。
conclusion: MemoryART为医疗LLM提供了有效的长期记忆机制，增强现实场景适用性。
---

## Abstract
Though promising in healthcare consultation applications, large language models (LLMs) face critical limitations in retaining and utilizing long-term memory across multi-turn interactions. In particular, existing memory enhancing paradigms are constrained by limited context windows and embedding-based retrieval, often failing to maintain task relevance and still suffering from memory prototype collapse in multi-turn healthcare consultation. To address these challenges, we propose a cognitively-inspired memory framework named MemoryART, which is grounded in Adaptive Resonance Theory (ART)—a cognitive and learning theory of how humans and animals adapt to dynamic environments. MemoryART employs three memory modules—working memory, episodic memory, and semantic memory to support task-aware memory organization and dynamic retrieval. Specifically, episodic memory provides the storage of specific experiences along with contextual clues, which is crucial for managing patient-specific information and perfect for multi-turn healthcare consultation interactions. Building upon this concept, MemoryART leverages multi-channel competitive learning and resonance matching to enable efficient and interpretable episodic memory encoding, alleviating issues of prototype collapse and noisy memory associations. For evaluation, we construct a long-term medical dialogue benchmark called MediLongChat using a LLM-based generation pipeline. The resulting dataset features realistic, multi-disease chat histories, each exceeding 100K tokens across 20–30 dialogues, simulating real-world healthcare interaction patterns. Our experimental results show that MemoryART outperforms mainstream approaches in memory-intensive tasks, achieving SOTA results and significantly reducing token consumption across five popular LLMs, confirming its effectiveness and efficiency in providing scalable, reliable memory for LLMs in healthcare.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLMs）在医疗咨询等多轮交互场景中，难以有效保留和利用长期记忆。现有记忆增强范型（如上下文学习 ICL、检索增强生成 RAG）受限于固定上下文窗口和基于嵌入（embedding）的检索，常导致检索内容语义相似但任务不相关，且容易发生记忆原型坍塌（prototype collapse）——即不同对话内容被压缩成过于相似的表示，降低了记忆的可解释性和系统性能。
- **研究动机**：医疗诊断需要模型准确理解临床症状并长期保留患者个人病史、生活习惯等细节信息，现有记忆机制在持续交互中表现不足，亟需一种更持久、自适应且任务感知的记忆系统。
- **整体含义**：论文旨在通过认知科学中的自适应共振理论（Adaptive Resonance Theory, ART）构建一种新的多记忆模型，提升LLMs在医疗多轮对话中的记忆组织与动态检索能力，最终改善诊断准确性和交互连贯性。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：基于ART理论设计一个包含三种记忆模块（工作记忆、情景记忆、语义记忆）的框架——MemoryART。其中情景记忆模块采用多通道竞争学习与共振匹配机制，实现高效、可解释的情景记忆编码，避免原型坍塌。
- **关键技术细节**：
  - **工作记忆**：有限容量的缓冲区，存储最近N轮对话的元组（查询、响应、时间戳），采用滑动窗口策略更新。
  - **情景记忆**：采用融合ART网络（Fusion ART）构建层次化记忆痕迹：
    - 三层结构：F1（属性层）、F2（事件层）、F3（情节层）。每个事件是多通道属性向量 \( x_t = \{ x_t^{(1)}, ..., x_t^{(K)} \} \)。
    - **编码过程**：新输入事件 \( x_t \) 首先与所有存储事件计算选择分数（Choice Function）：
      \[
      T_i = \frac{\sum_{k=1}^K \gamma^{(k)} \cdot \text{Sim}^{(k)}(x^{(k)}, x_i^{(k)})}{\alpha + \sum_{k=1}^K \|x_i^{(k)}\|}
      \]
      选出top-k候选事件，再对其所属情节进行共振匹配（Resonance Condition）：若与情节原型 \( w_j \) 的整体相似度超过警戒阈值 \( \rho \)，则并入该情节并更新原型；否则创建新情节。
    - **检索过程**：类似编码，但仅检索匹配事件，不更新原型。
  - **语义记忆**：分为静态知识（LLM预训练参数）和动态知识（可编辑的用户画像与代理画像），支持个性化适应。
- **算法流程**：见论文Algorithm 1，描述编码与检索的步骤，包括候选集选择、共振判断、事件追加/原型更新等。

### 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法

- **数据集**：
  - **MediLongChat**：论文自建的长时医疗对话基准，包含多疾病聊天记录，每条历史超过10万token（20–30轮对话），通过LLM生成管线构建，涉及疾病-并发症、疾病-症状等原始数据。
  - **LoCoMo**：已有的长时对话记忆基准，用于评估LLM的长期记忆能力。
- **评估任务**（MediLongChat上）：
  - **In-dialogue Reasoning (IDR)**：单轮对话内的事实提取（如日期、疾病等）。
  - **Cross-dialogue Reasoning (CDR)**：跨多轮对话的关系推理（如时间间隔、疾病关联等）。
  - **Synthesis Reasoning (SR)**：根据当前症状和完整病史推理并发症（多项选择）。
- **对比方法**：TiM、MemGPT、MemoryBank、A-Mem、MemoryOS，以及无记忆的基线（Baseline：分割对话输入）。
- **评价指标**：IDR和CDR使用F1和BLEU-1；SR使用准确率；LoCoMo使用F1和BLEU-1，按单跳、多跳、时间、开放域四类问题分别报告。

### 4. 资源与算力

- 论文未明确说明使用的GPU型号、数量、训练时长等算力资源。仅提及代码已开源（GitHub链接），但未提供实验硬件细节。

### 5. 实验数量与充分性

- **实验数量**：
  - 在MediLongChat上测试了5种LLM（Deepseek-R1、Qwen3-235B、Ernie-4.5-turbo、GPT-4o mini、GPT-4.1 mini），每种LLM搭配5种对比方法（加Baseline和MemoryART共7种设置），报告了SR准确率、IDR和CDR的F1/BLEU。
  - 在LoCoMo上以GPT-4o-mini为基础，对比6种方法，报告4类问题的F1/BLEU。
  - 消融实验：改变检索事件数量k（图3）和语义通道数量m（图4），分析对IDR/CDR性能的影响。
- **充分性**：实验覆盖多种主流LLM和多种记忆方法，并包含消融研究，设计较全面。但缺少对超参数（如警戒阈值ρ、通道权重γ）的敏感性分析；仅在单一LLM上进行了LoCoMo实验，可能缺乏泛化性。总体而言，实验设计较为客观公平（采用标准指标，对比SOTA方法）。

### 6. 论文的主要结论与发现

- **主要结论**：MemoryART在MediLongChat和LoCoMo两个基准上均达到SOTA性能，显著优于现有记忆增强方法（如MemoryOS、A-Mem等），同时保持较低token消耗（MemoryART token数约116K，远低于MemoryOS的2.2M+）。
- **具体发现**：
  - 在CDR任务上MemoryART比最佳基线（MemoryOS）F1提升+14.88（表1中某LLM设置）。
  - 在LoCoMo的多跳和时序任务上F1分别提升+6.01和+7.44（相对于MemoryOS）。
  - 基线（无记忆）在SR任务上表现较好，原因是记忆机制可能引入噪声；但MemoryART仍超越所有对比方法。
  - IDR任务中，所有记忆方法均不及基线，因为编码检索过程打乱了局部上下文；但MemoryART在CDR上优势明显，说明其跨对话聚合能力。
- **消融分析**：检索事件数量k和语义通道数m的增加有助于提升性能，但超过一定值后收益递减或出现下降，提示需要校准。

### 7. 优点：方法或实验设计上有哪些亮点

- **方法亮点**：
  - 将ART理论引入LLM记忆系统，实现自组织、增量学习，无需依赖大量标注数据。
  - 多通道竞争学习和共振匹配机制有效避免原型坍塌，保持记忆多样性。
  - 三种记忆模块（工作、情景、语义）明确分工，符合认知科学理论，支持任务感知的动态检索。
  - 算法可解释性强（基于相似度和阈值匹配），计算效率高（token消耗显著低于其他方法）。
- **实验设计亮点**：
  - 构建了高质量、长文本的医疗对话数据集MediLongChat，覆盖多疾病、多轮交互，贴近真实场景。
  - 设计了三种不同难度和类型的推理任务（IDR、CDR、SR），全面评估记忆系统的不同能力。
  - 对比了多种先进基线（MemGPT、A-Mem、MemoryOS等），并测试了多个主流LLM，增强了结果的可信度。

### 8. 不足与局限

- **实验覆盖的局限**：
  - 仅在一个LLM（GPT-4o-mini）上进行了LoCoMo实验，缺乏对其他LLM在该基准上的验证。
  - 未提供算力资源详情，难以复现成本评估。
  - 无对超参数（如警戒阈值、学习率等）的敏感性分析，可能影响应用的鲁棒性。
- **方法本身的局限**：
  - 情景记忆的任务相关性部分依赖手动设计（如语义通道的定义），限制了框架对更多样化任务的泛化能力。
  - 当前仅处理文本数据，未涉及多模态（如医学图像、生理信号）。
  - 在IDR任务上低于无记忆基线，说明记忆机制可能引入局部上下文干扰，需要进一步优化编码/检索策略。
- **应用风险**：医疗领域对错误容忍度极低，虽然MemoryART提高了准确率，但仍有误差风险；且可解释性需临床验证。此外，数据集由LLM自动生成，可能存在不真实或偏差，需人工审核。

（完）

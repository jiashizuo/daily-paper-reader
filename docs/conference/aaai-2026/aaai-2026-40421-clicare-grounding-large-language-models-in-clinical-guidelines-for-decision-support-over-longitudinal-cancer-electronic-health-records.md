---
title: "CliCARE: Grounding Large Language Models in Clinical Guidelines for Decision Support over Longitudinal Cancer Electronic Health Records"
title_zh: CliCARE：基于临床指南的大语言模型决策支持在纵向癌症电子健康记录中的应用
authors: "Dongchen Li, Jitao Liang, Wei Li, Xiaoyu Wang, Longbing Cao, Kun Yu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40421/44382"
tags: ["query:mlr"]
score: 6.0
evidence: 医学大语言模型用于临床决策支持
tldr: 针对大语言模型在临床决策支持中处理长病历困难、临床幻觉和评估不可靠的问题，提出CliCARE框架，将临床指南融入检索增强生成，在纵向癌症电子健康记录上实现更准确的时序分析和可信决策支持。实验表明该方法有效降低幻觉并增强可解释性。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 临床决策支持中LLM面临长序列处理、临床幻觉和评估不可靠三大挑战。
method: 提出CliCARE框架，通过融入过程化临床指南的检索增强生成来减少幻觉，并设计评估指标。
result: 在癌症EHR数据集上表现优异，有效降低幻觉并提升决策支持准确性。
conclusion: 将临床指南作为知识源可显著增强LLM在医疗决策中的可靠性。
---

## Abstract
Large Language Models (LLMs) hold significant promise for improving clinical decision support and reducing physician burnout by synthesizing complex, longitudinal cancer Electronic Health Records (EHRs). However, their implementation in this critical field faces three primary challenges: the inability to effectively process the extensive length and fragmented nature of patient records for accurate temporal analysis; a heightened risk of clinical hallucination, as conventional grounding techniques such as Retrieval-Augmented Generation (RAG) do not adequately incorporate process-oriented clinical guidelines; and unreliable evaluation metrics that hinder the validation of AI systems in oncology.
To address these issues, we propose CliCARE, a framework for Grounding Large Language Models in Clinical Guidelines for Decision Support over Longitudinal Cancer Electronic Health Records. The framework operates by transforming unstructured, longitudinal EHRs into patient-specific Temporal Knowledge Graphs (TKGs) to capture long-range dependencies, and then grounding the decision support process by aligning these real-world patient trajectories with a normative guideline knowledge graph. This approach provides oncologists with evidence-grounded decision support by generating a high-fidelity clinical summary and an actionable recommendation.
We validated our framework using large-scale, longitudinal data from a private Chinese cancer dataset and the public English MIMIC-IV dataset. In these settings, CliCARE significantly outperforms baselines, including leading long-context LLMs and Knowledge Graph-enhanced RAG methods. The clinical validity of our results is supported by a robust evaluation protocol, which demonstrates a high correlation with assessments made by oncologists.

---

## 论文详细总结（自动生成）

# CliCARE 论文详细总结

## 1. 核心问题与整体含义（研究动机和背景）
- **背景**：大语言模型（LLM）有潜力通过综合复杂、纵向的癌症电子健康记录（EHR）来改善临床决策支持并减少医生倦怠。然而，在关键临床领域部署LLM面临三大挑战：
  - **长上下文处理困难**：患者记录可跨越数年、超过20,000 token，且为多条目、非结构化，LLM难以进行准确的时序推理。
  - **临床幻觉风险高**：传统检索增强生成（RAG）仅检索孤立文本片段，无法捕捉过程导向的临床指南，导致不可靠的推荐。
  - **评估不可靠**：传统自动指标（如ROUGE、BLEU）不能反映临床有效性、事实准确性和安全性，阻碍AI系统在肿瘤学中的验证。
- **整体含义**：需要构建一个鲁棒的框架，确保LLM在临床决策支持中可靠、安全且基于专家医学知识，以增强（而非取代）医生角色。

## 2. 方法论：核心思想、关键技术细节
### 2.1 核心思想
提出**CliCARE**框架，将LLM扎根于临床指南中对纵向癌症EHR进行决策支持。核心思路：
- 将非结构化、纵向EHR转换为**患者特定时序知识图谱（TKG）**，显式捕获长期依赖关系；
- 将真实患者轨迹与**规范化指南知识图谱**对齐，实现证据支持的决策；
- 输出**高保真临床摘要**和**可操作的建议**。

### 2.2 关键技术细节
#### (1) EHR到TKG转换
- **事件提取**：
  - 使用**Longformer**模型（预训练于临床文本）处理历史记录，生成压缩摘要（患者既往史）；最新的临床记录作为现病史。
  - 通过**BERT**提取关键临床事实（诊断确认、分期更新、治疗方案等）为离散事件。
- **TKG实例化**：
  - 构建静态生物医学知识图谱（GB）。
  - 通过**实体链接函数**将患者提取实体映射到GB标准概念，形成带时间戳的TKG：`G_t = (E_t, R_t, T)`。
  - 使用分层时间戳粒度：宏观 encounter 有精确时间，内部事件通过相对时间关系连接。

#### (2) 轨迹-指南对齐（Trajectory-Guideline Alignment）
该过程无训练，通过四步融合实现：
- **知识形式化**：从权威临床实践指南（CPG）构建规范化指南知识图谱`G_g`，包含抽象概念（癌症、临床情况、治疗）及逻辑关系。
- **相似性匹配**：
  - 将患者TKG转换为时序轨迹`Tr_p`；枚举指南图谱中所有可能路径`{Pa_k}`。
  - 使用**BERT**计算轨迹与候选路径的余弦相似度，聚合每步最佳匹配得到分数：
    ```
    Score(Tr_p, Pa_k) = sum_{j=1..l} max_{e_i in Tr_p} cos_sim(f_BERT(desc(s_j)), f_BERT(desc(e_i)))
    ```
  - 选择最高分路径`Pa*`。
- **LLM-based重排序**：
  - 以零样本方式将患者轨迹、Top-N候选路径及其分数输入**LLM临床推理器**，输出重排序列表，增强临床合理性。
- **对齐扩展（Bootstrapping）**：
  - 以最高置信度对齐对作为种子集`A'`，迭代扩展：对未对齐的患者事件`e_u`，选择指南节点`ŝ`使得与种子对的一致性分数最大化（基于BERT语义相似性衡量）。
  - 最终融合患者证据与指南知识，作为决策支持的上下文。

#### (3) 最终生成
- 对齐后的融合表示直接作为LLM的上下文，生成**临床摘要**和**临床推荐**。
- 框架支持通用大模型（如Gemini 2.5 Pro）和经微调的专用小模型（如Qwen-3-8B）。

## 3. 实验设计
### 3.1 数据集
| 数据集 | 来源 | 规模 | 特征 |
|--------|------|------|------|
| **CancerEHR**（私有中文） | 辽宁省肿瘤医院 | 2,000患者 | 纵向记录（可超过20年），单患者可达20,000 token，含医嘱、检验、手术记录等 |
| **MIMIC-Cancer**（公共英文） | MIMIC-IV过滤癌症患者 | 子集 | 类似癌症进展，语言和结构不同，用于泛化性测试 |

### 3.2 任务
- **临床摘要（TCS）**：回顾性总结患者历史。
- **临床推荐（TCR）**：前瞻性给出治疗建议。

### 3.3 对比方法（Baselines）
- **标准RAG**：使用Mistral-7B、Mistral-Instruct-v0.1-7B、BioMistral-7B、Qwen3-8B；通用模型：Deepseek-R1、Gemini 2.5 Pro、GPT-4.1、Claude-4.0-Sonnet。
- **上下文感知RAG**：BriefContext（Map-Reduce策略）。
- **KG增强RAG**：GNN-RAG、KG2RAG、MedRAG（医疗聚焦）。
- **其他**：所有RAG均结合所述开源或通用模型。

### 3.4 评估方法
- 设计**专家验证的LLM-as-a-Judge**协议：
  - 四维度评分（1-5分）：事实准确性、完整性与彻底性、临床合理性、可操作性与相关性。
  - 评委集成：GPT-4.1、Claude 4.0 Sonnet、Gemini 2.5 Pro平均分；随机打乱顺序减少偏差。
  - 三位资深肿瘤学家验证：Spearman秩相关系数约0.7，验证评委可靠性。

## 4. 资源与算力
- **计算配置**：4× NVIDIA A800 GPU。
- **训练参数**：
  - 批大小：1；最大上下文长度：20,000 tokens。
  - 学习率：5×10⁻⁵，余弦调度；BF16混合精度。
  - 训练周期：3 epochs（1800训练样本，10%验证）。
- **说明**：仅对专用模型进行微调（如Qwen-3-8B的CliCARE版本），通用模型直接使用。

## 5. 实验数量与充分性
- **主要实验**：
  - 表1：CliCARE vs 四种RAG变体（StandardRAG, BriefContext, MedRAG, KG2RAG, GNN-RAG）在两种数据集上的TCS/TCR得分。
  - 表2：8个模型（共6种开源+通用）的Standard RAG vs CliCARE对比，含增益量。
  - 表3：消融实验（去掉对齐扩展/重排序/压缩）对Qwen-3-8B和Gemini 2.5 Pro在两种数据集上。
  - 表4：按EHR长度（短/中/长）分层的性能分析。
  - 评估方法验证：Spearman相关系数实验。
- **充分性评价**：
  - 积极方面：多个模型、多种RAG变体、消融、长度分析、专家验证，覆盖较全面。
  - 局限性：仅两个数据集（一个私有不可复现）；未在更多医学领域（如心血管、罕见病）测试；消融中压缩在简单数据上表现反常，说明方法敏感度未深度分析；无样本量小统计检验。

## 6. 主要结论与发现
- **CliCARE显著优于所有基线**：
  - 结合Gemini 2.5 Pro在CancerEHR上获得TCS=4.976, TCR=4.965（满分5），远超BriefContext（4.527）等。
  - 即使使用小模型Qwen-3-8B，CliCARE也大幅提升（+1.688分），克服长上下文失败。
- **结构化知识是复杂EHR的关键**：
  - 几乎所有模型在使用CliCARE后性能大幅提升，尤其是复杂CancerEHR数据集；在简单MIMIC-Cancer上增益较小但稳定。
- **消融实验揭示模块作用**：
  - 对复杂数据，所有组件不可或缺；对简单数据，TKG压缩可能丢失有用信息（移除后分数上升）。
- **长度分析**：
  - 小模型（Qwen-3-8B）在长记录上性能下降；强大模型（Gemini）在长记录上得分最高，表明CliCARE有效组织长上下文并使高级模型利用丰富信息。
- **评估可靠性**：专家验证的LLM-as-a-Judge与临床医生高度相关，可作为可扩展的代理。

## 7. 优点
- **系统性解决多个挑战**：同时处理长上下文、幻觉和评估不可靠问题。
- **创新方法**：
  - TKG转换显式捕捉时序依赖，优于文本检索。
  - 轨迹-指南对齐通过语义匹配、LLM重排序和bootstrap扩展实现深度扎根，无需额外训练。
- **灵活性**：既支持通用大模型，也支持专用小模型微调，适应成本、隐私等部署困境。
- **可扩展评估**：专家验证的LLM-as-a-Judge协议提供可靠、可复现的自动评估。
- **开源代码**：提供GitHub仓库。

## 8. 不足与局限
- **领域覆盖有限**：仅测试于癌症EHR（两种数据集），未验证在心血管、神经等领域的泛化性。
- **私有数据集不可复现**：CancerEHR为私有数据，研究结果难以完全独立验证。
- **评估方法仍有偏差风险**：虽然专家验证，但LLM评委仍存在内在偏见（如位置偏见、自我增强），仅通过ensemble和随机化部分缓解。
- **依赖外部知识图**：指南知识图构建和维护需要专家持续投入，更新延迟可能影响时效性。
- **消融实验中异常行为**：在简单数据集（MIMIC-Cancer）上移除压缩反而提升，说明方法对数据复杂度敏感，需进一步调优或自适应机制。
- **计算资源需求高**：使用4张A800 GPU进行微调；通用模型推理也需大量资源。
- **未讨论实时性**：端到端处理长记录（20k tokens）的延迟未报告，影响临床实时使用。
- **样本量**：2000患者可能不足以覆盖所有癌症分型与治疗模式，存在分布偏移风险。

（完）

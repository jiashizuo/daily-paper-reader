---
title: "RPO: Retrieval Preference Optimization for Robust Retrieval-Augmented Generation"
title_zh: RPO：面向鲁棒检索增强生成的检索偏好优化
authors: "Shi-Qi Yan, Quan Liu, Zhen-Hua Ling"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.261.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 使用奖励模型的检索偏好优化用于RAG
tldr: RAG生成质量依赖检索上下文质量，但LLM难以评估外部知识与内部记忆的冲突。本文提出检索偏好优化(RPO)，通过隐式检索相关性表示集成到奖励模型中，自适应利用多源知识。轻量有效，缓解知识冲突。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.261/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 829, \"height\": 890, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.261/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1396, \"height\": 623, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.261/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 500, \"height\": 446, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.261/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 657, \"height\": 472, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.261/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1515, \"height\": 866, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.261/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1648, \"height\": 970, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.261/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 780, \"height\": 370, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.261/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 781, \"height\": 369, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.261/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 781, \"height\": 262, \"label\": \"Table\"}]"
motivation: RAG中LLM无法正确评估检索上下文质量，导致知识冲突，需要对齐方法。
method: 推导隐式检索相关性表示，集成到奖励模型中，通过偏好优化自适应利用多源知识。
result: 在多个RAG基准上减少知识冲突，提升生成鲁棒性。
conclusion: RPO为RAG提供了轻量有效的偏好对齐方法，可泛化至不同检索器。
---

## Abstract
While Retrieval-Augmented Generation (RAG) has exhibited promise in utilizing external knowledge, its generation process heavily depends on the quality and accuracy of the retrieved context. Large language models (LLMs) struggle to evaluate the correctness of non-parametric knowledge retrieved externally when it differs from internal memorization, leading to knowledge conflicts during response generation. To this end, we introduce the **R**etrieval **P**reference **O**ptimization (RPO), a lightweight and effective alignment method to adaptively leverage multi-source knowledge based on retrieval relevance. An implicit representation of retrieval relevance is derived and incorporated into the reward model to integrate retrieval evaluation and response generation into a single model, solving the problem that previous methods necessitate the additional procedure to assess the retrieval quality. Notably, RPO is a RAG-dedicated alignment approach that quantifies the awareness of retrieval relevance in training, first overcoming mathematical obstacles. Experiments on four datasets demonstrate that RPO outperforms RAG by 4-10% in accuracy without any extra component, exhibiting its robust generalization.

---

## 论文详细总结（自动生成）

## 论文详细中文总结

### 1. 论文的核心问题与整体含义（研究动机和背景）
- **核心问题**：检索增强生成（RAG）依赖外部检索到的非参数知识，但当外部知识与LLM内部参数化记忆不一致时，LLM难以判断检索质量，导致知识冲突，生成结果易受错误或无关检索影响（过度依赖检索）。
- **研究动机**：现有自适应RAG方法（pre-eval 或 post-eval）需要额外调用API或LLM来评估检索质量，增加计算开销，且生成器过度依赖评估器，影响性能。需要一种轻量、集成的方法，将检索评估隐式融入生成过程。
- **整体含义**：提出 **RPO（Retrieval Preference Optimization）**，一种专为RAG设计的偏好对齐方法，通过对检索相关性的隐式建模，实现自适应利用多源知识，提升鲁棒性和效率。

### 2. 方法论
- **核心思想**：在奖励模型中引入检索相关性项，将检索评估与生成集成到单一模型中，无需显式评估步骤。通过强化学习优化，使LLM根据检索质量自适应决定是否优先采用外部知识。
- **关键技术细节**：
  - **数学限制分析**：证明现有DPO应用于RAG时存在三个问题：优化目标与冲突缓解不一致、配分函数无法消除、对非参数知识的过度倾向。
  - **新奖励模型**：提出包含生成奖励和检索奖励的奖励函数 `r(x, y, R)`，并推导出RPO的损失函数（公式9），其中检索奖励项 `(c)` 根据答案偏好正负向调节。
  - **长度归一化**：采用平均对数概率避免检索上下文长度对奖励的影响。
  - **数据构建**：分为两步。首先，通过比较有无检索的生成答案，筛选出知识冲突样本（一个正确一个错误）。然后，先进行SFT初步训练，再用RPO偏好优化。
- **算法流程**（Algorithm 1）：
  1. 对每个问题，分别生成无检索答案 `y_p` 和有检索答案 `y_{n+p}`。
  2. 筛选冲突样本（`Acc(y_n) + Acc(y_p) = 1`）作为SFT数据集。
  3. 用SFT微调模型得到 `π_SFT`。
  4. 再次用 `π_SFT` 生成并筛选冲突样本作为RPO训练集。
  5. 用RPO损失（公式9）优化得到最终策略 `π_RPO`。

### 3. 实验设计
- **数据集**：
  - **PopQA**（长尾子集，1399个稀有实体查询）
  - **Natural Questions (NQ)**（307K训练，7.8K开发，7.8K测试）
  - **TriviaQA**（95K问答对）
  - **RGB**（检索增强生成基准，含噪声鲁棒性、负向拒绝等）
- **评测指标**：准确率（Accuracy）
- **对比方法**：
  - **基模型**：LLaMA2-7B、LLaMA3-8B-Instruct
  - **基线**：普通RAG、RAG+SFT、RAG+DPO、CRAG、Self-RAG、InstructRAG、AstuteRAG（使用ChatGPT）
  - **自适应类别**：Pre-Eval（CRAG）、Post-Eval（Self-RAG）、Integrated-Eval（RPO）
- **实验设置**：
  - 推理：vLLM，temperature=0.0，top_p=1.0，max_tokens=100
  - 训练：4×A100，SFT（1 epoch, batch_size=4, grad_accum=32, lr=2e-5），RPO（超参数同DPO原始设置）

### 4. 资源与算力
- 文中明确提到：使用 **4张A100 GPU** 进行训练。
- SFT 和 RPO 的具体训练时长未报告，仅给出了超参数设置（如 epochs、batch size、学习率等）。

### 5. 实验数量与充分性
- **实验组数**：
  - **主实验**：在4个数据集上对比了7种以上方法，两种基模型（LLaMA2-7B、LLaMA3-8B-Instruct）。
  - **消融实验**：移除检索奖励项（等价DPO）、移除偏好优化（仅SFT）、移除SFT（仅RPO）——共4组对比。
  - **鲁棒性实验**：模拟低质量检索（所有检索信息错误），比较RAG、SFT、DPO、RPO的准确率。
  - **训练数据过滤影响**：对比SFT时有/无数据过滤。
  - **知识选择性能分析**：按知识冲突四类簇（图3）展示RPO前后准确率变化。
- **充分性评价**：
  - 实验覆盖了多个主流数据集和不同规模模型，消融实验完整，鲁棒性测试合理，结果呈现清晰。但未在所有数据集上展示消融结果（如仅PopQA上报告部分消融），总体较充分。
  - 比较公平：基线结果均使用一致的检索结果复现或直接引用原文，控制变量。

### 6. 主要结论与发现
- RPO在四个数据集上均显著优于普通RAG和现有自适应RAG方法（LLaMA3上提升6.4%~10.6%准确率，LLaMA2上提升5.1%~23.3%）。
- RPO仅需一次API/LM调用（与RAG相同），而其他自适应方法需多次调用，推理效率更高。
- 消融证实检索奖励项（即RPO与DPO的区别）和SFT阶段均不可或缺。
- 在低质量检索环境下，RPO仍保持较好性能（准确率23.5%，比RAG提升26.3%），DPO提升仅3.7%，说明RPO对错误检索具有更强的鲁棒性。
- 训练数据过滤（只选择冲突样本）有效，不加过滤反而导致性能下降，说明模型已具备潜在评估能力，SFT仅用于激活该能力而非学习新知识。

### 7. 优点
- **方法创新性**：首次从数学上证明现有偏好优化方法在RAG中的局限性，并设计专用对齐方法，隐式集成检索评估到生成中。
- **轻量高效**：推理时无需额外评估步骤，计算开销与普通RAG一致。
- **理论扎实**：给出完整奖励模型推导和DPO不足的数学证明。
- **实验全面**：涵盖多种数据集、模型、消融、鲁棒性分析，结果具有说服力。

### 8. 不足与局限
- **奖励函数设计**：文中承认可能存在更优的奖励函数，当前设计仍无法完全防止奖励黑客。
- **训练数据领域偏置**：仅基于NQ数据集训练，可能无法覆盖多种领域，导致泛化偏置。
- **未报告完整训练时长**：影响可复现性评估。
- **未与其他大规模模型（如GPT-4）直接对比**：仅对比了7B和8B规模模型，对更大模型的扩展性未知。
- **仅针对知识冲突场景**：对于检索完全正确或完全错误外的混合情况，详细分析较少。

（完）

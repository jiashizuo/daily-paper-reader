---
title: "LSSF: Safety Alignment for Large Language Models through Low-Rank Safety Subspace Fusion"
title_zh: LSSF：通过低秩安全子空间融合实现大语言模型安全对齐
authors: "Guanghao Zhou, Panjia Qiu, Cen Chen, Hongyu Li, Jason Chu, Xin Zhang, Jun Zhou"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.1479.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 通过低秩子空间融合的安全重对齐
tldr: LLM微调可能破坏已有安全能力，而现有对齐多依赖微调。本文提出LSSF框架，通过构建低秩投影矩阵提取安全向量的主成分，实现无需微调的安全重对齐。该方法在保持模型性能的同时高效恢复安全机制，为RLHF之外的安全对齐提供了轻量级替代方案。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 801, \"height\": 318, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1646, \"height\": 500, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1602, \"height\": 515, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 795, \"height\": 335, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 756, \"height\": 313, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1564, \"height\": 322, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1619, \"height\": 443, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1632, \"height\": 530, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1635, \"height\": 534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.1479/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1635, \"height\": 532, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1479/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1651, \"height\": 353, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1479/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1653, \"height\": 353, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1479/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1655, \"height\": 288, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1479/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1652, \"height\": 296, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1479/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1655, \"height\": 299, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1479/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 798, \"height\": 274, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.1479/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1654, \"height\": 275, \"label\": \"Table\"}]"
motivation: 微调可能削弱LLM安全能力，且现有方法计算开销大。
method: 构建低秩投影矩阵提取安全向量主成分，通过子空间融合实现重对齐。
result: 无需微调即可有效恢复模型安全性，保持原有性能。
conclusion: 低秩子空间融合是一种高效的安全对齐方法。
---

## Abstract
The safety mechanisms of large language models (LLMs) exhibit notable fragility, as even fine-tuning on datasets without harmful content may still undermine their safety capabilities. Meanwhile, existing safety alignment methods predominantly rely on the fine-tuning process, which inadvertently leads to the increased complexity and computational resources required. To address these issues, we introduce LSSF, a novel safety re-alignment framework with Low-Rank Safety Subspace Fusison. Our proposed method exploits the low-rank characteristics of safety information in LLMs by constructing a low-rank projection matrix to extract the principal components of safety vectors. Notably, this projection matrix represents the low-rank safety subspace of the LLMs, which we have observed to remain stable during fine-tuning process and is isolated from the model’s general capabilities. These principal components are used to effectively restore safety alignment when combined with fine-tuned LLMs through linear arithmetic. Additionally, to account for the varying encoding densities of safety information across different layers of LLMs, we propose a novel metric called safety singular value entropy. This metric quantifies the encoding density and allows for the dynamic computation of the safety-critical rank for each safety vector. Extensive experiments demonstrate that our proposed post-hoc alignment method can effectively restore the safety alignment of fine-tuned models with minimal impact on their performance on downstream tasks.

---

## 论文详细总结（自动生成）

# 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：大语言模型（LLM）在微调后，其安全机制（safety alignment）极易被削弱，即使仅使用不包含有害内容的良性数据集进行微调，也可能导致模型拒绝有害请求的能力显著下降。现有安全对齐方法（如VLGuard、Lisa等）大多依赖于微调过程，不仅增加了训练复杂度和计算资源需求，还可能抑制模型在通用任务上的性能。
- **整体含义**：论文旨在提出一种**后处理（post-hoc）** 的安全重对齐方法，在不进行额外微调的前提下，利用LLM中安全信息的低秩特性，通过线性算术融合恢复被微调破坏的安全能力，同时最小化对下游任务性能的影响。

## 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：LLM的安全信息在秩层面是**稀疏且孤立**的，与模型通用能力方向正交。基于此，论文构建一个**低秩投影矩阵**提取安全向量的主成分（principal components），并通过线性算术将这些主成分与微调后模型参数融合，以校正安全方向的漂移。
- **关键技术细节**：
  1. **安全向量（Safety Vector）**：定义安全模型参数与不安全模型参数的差值：`θ_safe = θ_unsafe + δ_safe`。通过对安全模型进行有害数据微调得到逆安全向量 `-δ_safe`。
  2. **低秩正交分解**：在安全模型上，使用校准数据集 `D_anchor`（包含有害查询和拒绝回答）计算线性层激活矩阵，进行标准化后执行奇异值分解（SVD），得到左奇异向量构成的正交基。
  3. **安全奇异值熵（Safety Singular Value Entropy）**：受香农熵启发，量化每个奇异值的信息贡献，公式为 `Hρ = -∑ (σ_i²/∑σ_j²) log(σ_i²/∑σ_j²)`。通过设定熵保留阈值η，动态确定每个安全向量需要保留的秩r。
  4. **低秩投影矩阵**：由前r个左奇异向量构成投影矩阵 `P(r) = U(r)U(r)^T`，并对奇异向量按奇异值大小加权（α缩放因子），得到加权投影矩阵`P'(r)`。
  5. **线性算术**：将加权后的低秩安全主成分与下游微调模型参数进行线性加法：`θ'_DST = θ_safe + δ_DST + α·P'(r)·δ_safe`，从而抵消安全漂移。

## 3. 实验设计

- **数据集与场景**：
  - **校准数据集**：从PKU-SafeRLHF中选取128个有害查询（其接受和拒绝回答均标记为unsafe），输入安全模型获取拒绝回答，用于SVD分解。
  - **下游微调数据集**：
    - **LoRA微调**：AG's News和Yahoo Answers（多分类任务）。
    - **全微调**：Medical QA中文医疗对话数据集（文本生成任务）。
  - **安全性评估数据集**：AdvBench（520个有害请求）、HarmfulQA（196个有害问题）、CATQA（550个有害问题）。使用Llama-Guard3-8B评估拒绝率。
  - **通用能力评估**：MBPP、GSM8K、BBH、MMLU、IFEval。
- **Benchmark与对比方法**：
  - **NA-SFT**：仅使用微调数据，无安全对齐。
  - **VLGuard**：在微调过程中混入安全数据。
  - **Lisa**：将微调分为对齐和用户数据两个状态，引入近端约束。
  - **RESTA**：后处理对齐，直接算术组合安全向量，并使用DARE合并。
  - **DARE**：模型融合基线，用于低秩主成分实验。
- **评估指标**：
  - 分类：准确率（ACC）。
  - 生成：BLEU、ROUGE-L。
  - 安全：Llama-Guard3-8B判定的拒绝率。

## 4. 资源与算力

- 论文明确提到：所有微调任务均在**8块Nvidia A100 GPU**上完成。LoRA微调时设置r=16，学习率1e-5，训练10个epoch。全微调类似。未明确说明训练总时长或GPU小时数。

## 5. 实验数量与充分性

- **实验数量**：论文进行了多组实验，包括：
  - 主实验：在Qwen2.5-7B-Instruct和Llama3.1-8B-Instruct上，覆盖LoRA（两个分类数据集）和全微调（一个生成数据集），对比五种基线方法（NA-SFT、VLGuard、Lisa、RESTA、Ours），共约3×5=15组主结果（每个模型+任务）。
  - 低秩安全主成分实验：在Llama3.1-8B-Instruct上，对比DARE，评估通用能力六个benchmark和安全两个benchmark。
  - 消融实验：奇异值熵阈值η与安全秩r的关系、左奇异向量权重α的影响。
  - 鲁棒性实验：校准数据集数量敏感度（16/32/64/128/256/512）、数据构成（不同比例有害/安全数据混合）、不同参数规模模型（3B/7B/14B）。
  - 可视化：多个层的安全向量与低秩主成分热力图对比。
- **充分性评价**：实验较为充分，覆盖了多模型、多任务、多基线、多消融维度，并提供了鲁棒性分析。对比方法全面，涵盖了微调中对齐和后处理对齐两大类。实验设计公平，超参数统一。

## 6. 论文的主要结论与发现

- 低秩安全子空间在微调过程中保持稳定，且与模型通用能力方向隔离。因此，仅使用安全向量的低秩主成分即可有效校正安全漂移，避免引入抑制通用能力的成分。
- 提出的LSSF方法在所有任务和模型上均能**恢复接近100%的安全拒绝率**，同时下游任务性能（ACC、BLEU、ROUGE-L）几乎不下降，显著优于RESTA、Lisa等基线。
- 安全奇异值熵能够根据不同层和不同权重矩阵的编码密度，动态确定最优剪枝秩，实现安全与效用的平衡。
- 对校准数据集数量、数据构成比例、模型参数规模均表现出良好的鲁棒性。

## 7. 优点

- **免微调对齐**：无需重新训练或引入安全数据，显著降低计算开销和复杂度。
- **低秩分离性好**：利用安全信息的低秩和独立特性，避免了对通用能力的干扰，优于直接使用安全向量（如RESTA）或强制正则化（如Lisa）。
- **动态秩选择**：基于奇异值熵自适应确定每个安全向量保留的秩，兼顾不同层的信息密度差异。
- **方法通用性**：独立于具体模型架构（可扩展到更大模型、多模态、MoE），实验验证了在不同参数规模（3B、7B、14B）上的一致性。

## 8. 不足与局限

- **实验覆盖有限**：未能评估更大规模模型（如Llama-3.1-405B-Instruct），未在多模态或MoE架构上验证，论文已在局限中承认。
- **假设依赖**：高度依赖“安全信息具有低秩性且与通用能力正交”这一假设，若模型架构或训练过程破坏这一特性，方法可能失效。
- **校准数据需求**：需要少量有害查询及其安全拒绝回答进行SVD计算，虽然数量少（128），但获取此类数据仍可能涉及隐私或伦理问题。
- **安全评估的局限性**：仅使用Llama-Guard3-8B自动评估拒绝率，未采用人工审计或对抗性测试，可能高估安全性（如未检测到语义层面的有害响应）。
- **后处理对齐的局限性**：方法本质是“修复”安全漂移，而非预防；若微调造成安全方向发生复杂非低秩变化，可能无法完全恢复。

（完）

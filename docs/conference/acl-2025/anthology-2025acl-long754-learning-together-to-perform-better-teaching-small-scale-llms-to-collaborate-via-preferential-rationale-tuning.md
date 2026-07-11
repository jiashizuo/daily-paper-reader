---
title: "Learning Together to Perform Better: Teaching Small-Scale LLMs to Collaborate via Preferential Rationale Tuning"
title_zh: 共同学习以更好表现：通过偏好理由调优教授小规模LLM协作
authors: "Sohan Patnaik, Milan Aggarwal, Sumit Bhatia, Balaji Krishnamurthy"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.754.pdf"
tags: ["query:mlr"]
score: 6.0
evidence: 面向小LLM的偏好理由调优
tldr: 该论文针对小规模语言模型推理能力提升问题，提出COLLATE框架。该框架通过偏好学习机制，让模型从多样化的理由池中选择最优输出，从而在不需要从大模型蒸馏的情况下增强推理能力。实验表明该方法有效提升了小模型的复杂推理表现，为资源受限场景下的LLM推理增强提供了新路径。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.754/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1631, \"height\": 536, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.754/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 790, \"height\": 587, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1591, \"height\": 741, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1566, \"height\": 404, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1590, \"height\": 625, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1661, \"height\": 366, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1660, \"height\": 294, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1656, \"height\": 1605, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1662, \"height\": 747, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1585, \"height\": 384, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1175, \"height\": 292, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 712, \"height\": 220, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1523, \"height\": 435, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1406, \"height\": 435, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1274, \"height\": 224, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.754/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 807, \"height\": 202, \"label\": \"Table\"}]"
motivation: 小模型在不依赖大模型蒸馏的情况下提升推理能力的方法不足。
method: 提出COLLATE框架，用偏好理由调优让小模型从理由池中选择最佳输出。
result: 小模型在推理任务上表现提升，无需大模型数据。
conclusion: 偏好理由调优是增强小模型推理的有效策略，具有实用价值。
---

## Abstract
LLMs such as GPT-4 have shown a remarkable ability to solve complex questions by generating step-by-step rationales. Prior works have utilized this capability to improve smaller and cheaper LMs (say, with 7B parameters). However, various practical constraints, such as copyright and legal issues, owing to lack of transparency in the pre-training data of large (often closed) models, prevent their use in commercial settings. Little focus has been given to improving the innate reasoning ability of smaller models without distilling information from larger LLMs. To address this, we propose COLLATE, a trainable framework that tunes a (small) LLM to generate those outputs from a pool of diverse rationales that selectively improves the downstream task. COLLATE enforces multiple instances of the same LLM to exhibit distinct behavior and employs them to generate rationales to obtain diverse outputs. The LLM is then tuned via preference optimization to choose the candidate rationale which maximizes the likelihood of ground-truth answer. COLLATE outperforms several trainable and prompting baselines on 5 datasets across 3 domains - maths problem solving, natural language inference, and commonsense reasoning. We show the efficacy of COLLATE on LLMs from different model families across varying parameter scales (1B to 8B) and demonstrate the benefit of multiple rationale providers guided by the end task through ablations. Code is released here (https://github.com/Sohanpatnaik106/collate).

---

## 论文详细总结（自动生成）

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：如何在不依赖大型（通常是闭源）语言模型（如GPT-4、PaLM等）的情况下，提升小规模语言模型（<8B参数）的逐步推理（step-by-step rationale）生成能力，从而改善下游任务表现？
- **研究动机**：
  - 大模型（如GPT-4）在生成推理链方面表现出色，但商业使用受限于版权、法律和成本问题（如OpenAI禁止使用其输出训练其他模型）。
  - 现有方法多依赖蒸馏大模型的理由（rationale）来训练小模型，但在闭源限制下不可行；而直接监督微调或自提升方法（如SPIN）在缺乏GT理由注释时效果有限。
- **整体含义**：作者提出**COLLATE**框架，让小模型通过“自我协作”和“偏好优化”来学会选择更好的推理理由，从而在没有大模型指导的情况下实现推理能力的自我提升。这为资源受限环境下的LLM部署提供了可行路径。

## 2. 方法论：核心思想、关键技术细节

- **核心思想**：利用同一小LLM的多个实例（通过不同数据切片训练出行为差异化的“理由提供者”），生成多样化的推理理由；然后基于下游任务（用GT答案的似然作为效用分数）对理由进行排序，并通过直接偏好优化（DPO）训练模型，使其倾向于生成能最大化GT答案似然的理由。
- **关键技术细节**：
  1. **多模式指令微调（Multi-Mode IFT）**：
     - 训练基础模型 `MIFT` 以支持三种模式：I→A（指令直接生成答案）、I→R（指令生成理由）、[I;R]→A（指令+理由生成答案），使用不同的提示模板（§3.1，公式1-3）。
  2. **多样化理由提供者（Distinct Rationale Providers）**：
     - 克隆 `MIFT` 为S个实例（论文默认S=2），每个实例在不同随机数据切片上通过DPO优化（以GT理由作为偏好输出），得到行为各异的理由提供者 `RPs`（§3.2，公式4-5）。
  3. **任务导向的偏好理由调优（Task-Based Preferential Rationale Tuning）**：
     - 对当前任务数据集 `DT`（无GT理由），每个 `RP` 生成一个理由 `^R_T_s`。
     - 用 `MIFT` 计算每个理由下GT答案的似然 `l_s` 作为“有用性分数”，选出最优理由（`^R_T_w`）和最差理由（`^R_T_e`）。
     - 使用DPO将最优理由训练为偏好输出，最差理由作为非偏好输出；公式8。
     - **样本过滤**：仅当最优理由带来的GT似然高于不用理由时，才将该样本用于DPO（公式9）。
     - 迭代进行（论文进行2次迭代），每次更新理由提供者。

## 3. 实验设计

- **数据集与场景**：
  - 数学问题求解：GSM8K（7.5k训练/1.3k测试）
  - 自然语言推理：WinoGrande（40k/1.7k）、PIQA（16k/3k）
  - 常识推理：CSQA（9.7k/1.2k）、HellaSwag（39.9k/10k）
- **评测方式**：将模型生成的推理理由与任务指令一起作为输入，对基础LLM进行监督微调（SFT），以最终的准确率作为理由质量的指标。评估时只使用一个最优理由提供者（基于CoT验证集上的似然选取）。
- **对比方法**（三类基线）：
  1. **提示式推理增强**：CoT、CoT-Self-Consistency、Tree-of-Thought、Exchange-of-Thought（均用于推理链生成）。
  2. **任务特定SFT**：无理由的SFT、Distilling Step-by-Step（用MIFT生成的SFT理由）。
  3. **训练驱动理由增强**：SPIN（DPO基于GT答案）、Self-Rewarding LMs（用大模型评分）。
- **消融实验**：验证“多样化理由提供者”“似然基理由选择”“样本过滤”各自的重要性（表4）。
- **额外实验**：不同规模模型（OLMo-1B、Phi3-3.8B、Qwen1.5-4B、Open-LLaMA-7B、LLaMA3-8B）；数据集增加AIME、CROW、HotpotQA；Few-shot评估；人类评估；Perplexity分析等。

## 4. 资源与算力

- **明确说明**：
  - GPU：8 × 80GB A100 GPUs
  - 批量大小：总共16（每GPU 2），学习率1e-5，bf16精度
  - 优化器：AdamW + 余弦退火
  - 使用DeepSpeed ZeRO-2、梯度检查点
  - 训练时间：文中未具体给出每轮时长，但提及IFT训练2轮，DPO训练5轮（理由提供者阶段）+ 任务导向DPO每迭代10轮共2迭代20轮。

## 5. 实验数量与充分性

- **实验组数**：非常充分——覆盖5个主要数据集×多种基线（约10种方法）、多个模型家族/规模（5种不同LLM）、消融实验（5个变体）、额外数据集（3个）、人类评估（75样本）、Perplexity分析、Few-shot评估、迭代效果分析等。
- **公平性**：所有对比方法使用相同LLM骨干（open-llama-v2-7b）；评估方式统一（SFT后准确率）；消融实验逐一控制变量；实验结果在多个维度呈现，具有统计意义。
- **充分性**：实验设计全面，有效验证了COLLATE的通用性和各个组件的必要性。唯一可能不足是未在更多超大规模（>10B）模型上验证，但论文聚焦小模型，范围合理。

## 6. 主要结论与发现

- **COLLATE显著优于所有基线**：在GSM8K上比最佳基线SPIN高约5%，在PIQA上高约7.5%，在HellaSwag/CSQA上也有提升。
- **不依赖大模型即可提升小模型推理**：相比蒸馏方法，COLLATE仅用模型自身实力达到同等甚至更优效果。
- **消融实验证实三个组件均不可或缺**：多样化理由提供者、似然基理由选择、样本过滤缺一不可。
- **跨模型/跨规模泛化好**：在1B~8B参数、不同系列模型上均取得一致增益。
- **人类评估显示质量合理**：72%的样本最终理由正确有用；84%情况下似然选择与人类偏好一致。
- **可缩小与GPT-4o的性能差距**：例如GSM8K上LLaMA3-8B+COLLATE与GPT-4o的差距相对缩小49%。

## 7. 优点

1. **创新性**：提出“自我协作+偏好优化”范式，避免依赖外部大模型，解决了商业部署的合规问题。
2. **方法鲁棒**：多模式IFT和迭代DPO设计精巧，样本过滤机制确保数据质量。
3. **实验充分**：覆盖多种任务、模型、规模、消融和人类评估，结果说服力强。
4. **实用性强**：训练开销集中于离线阶段，推理时只需生成一条理由（与CoT相当），适合实际部署。
5. **可扩展性**：支持增加理由提供者数量（S=3时性能更优），并可推广至更多任务。

## 8. 不足与局限

1. **随机数据分裂**：理由提供者通过随机划分训练数据获得，未探索更优的专家化分配（如按任务领域聚类），可能导致行为不够专业化。
2. **迭代次数固定**：DPO迭代次数（2次）及理由提供者数量（默认2）为超参数，文中未研究自动确定最优值的方法。
3. **S=2的局限性**：虽然S=3时效果更好，但最优数量可能因任务而异，需额外调参。
4. **模型规模上限**：目前仅在≤8B模型上验证，未对更大模型（≥13B）进行评估，无法推断方法是否同样有效。
5. **评估指标单一**：主要依赖准确率，未深入分析理由质量（如逻辑完备性、步骤正确性），人类评估样本量较小（75）。
6. **可能存在的偏差**：似然基选择假设MIFT本身较准确，若MIFT存在系统性偏差，可能影响选择质量。
7. **缺少对计算成本的详细对比**：未比较训练总耗时或成本，仅比较推理时Token数量。

（完）

---
title: Towards Medical Complex Reasoning with LLMs through Medical Verifiable Problems
title_zh: 迈向通过医疗可验证问题实现大语言模型的复杂医疗推理
authors: "Junying Chen, Zhenyang Cai, Ke Ji, Xidong Wang, Wanlong Liu, Rongsheng Wang, Benyou Wang"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.751.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 医疗可验证问题与验证器引导的推理微调
tldr: 该论文针对医疗领域推理验证困难的问题，提出医疗可验证问题（MVPs）和医疗验证器，可自动检查模型输出正确性。基于此设计两阶段方法：先用验证器引导搜索复杂推理轨迹，再用轨迹微调LLM。实验表明该方法显著提升了医疗LLM在复杂推理任务上的表现，为医疗推理增强提供了可验证奖励训练的高效途径。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.751/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1540, \"height\": 518, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.751/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1576, \"height\": 588, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.751/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1493, \"height\": 1009, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.751/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 671, \"height\": 350, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.751/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1585, \"height\": 513, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.751/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 785, \"height\": 463, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 766, \"height\": 1592, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1651, \"height\": 1066, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1582, \"height\": 946, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 796, \"height\": 238, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1328, \"height\": 314, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 799, \"height\": 308, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 798, \"height\": 259, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1147, \"height\": 358, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1330, \"height\": 340, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 702, \"height\": 252, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 672, \"height\": 216, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1604, \"height\": 213, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 802, \"height\": 316, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 796, \"height\": 568, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 795, \"height\": 785, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.751/table-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 792, \"height\": 997, \"label\": \"Table\"}]"
motivation: 医疗推理验证困难，现有方法多聚焦数学领域。
method: 提出医疗可验证问题及验证器，两阶段方法：验证器引导搜索推理轨迹后微调。
result: 提升了医疗LLM的复杂推理能力，在多个医疗问答基准上取得改进。
conclusion: 可验证问题框架能有效增强医疗领域的推理能力，具有推广价值。
---

## Abstract
The breakthrough of OpenAI o1 highlights the potential of enhancing reasoning to improve LLM. Yet, most research in reasoning has focused on mathematical tasks, leaving domains like medicine underexplored. The medical domain, though distinct from mathematics, also demands robust reasoning to provide reliable answers, given the high standards of healthcare. However, verifying medical reasoning is challenging, unlike those in mathematics. To address this, we propose Medical Verifiable Problems with a medical verifier to check the correctness of model outputs. This verifiable nature enables advancements in medical reasoning through a two-stage approach : (1) using the verifier to guide the search for a complex reasoning trajectory for fine-tuning LLMs, (2) applying reinforcement learning (RL) with verifier-based rewards to enhance complex reasoning further. Finally, we introduce HuatuoGPT-o1 , a medical LLM capable of complex reasoning, which outperforms general and medical-specific baselines using only 40K verifiable problems. Experiments show complex reasoning improves medical problem-solving and benefits more from RL. We hope our approach inspires advancements in reasoning across medical and other specialized domains. Code, datasets, and models are publicly available at https://github.com/FreedomIntelligence/HuatuoGPT-o1 .

---

## 论文详细总结（自动生成）

# 论文总结：Towards Medical Complex Reasoning with LLMs through Medical Verifiable Problems

## 1. 论文的核心问题与整体含义（研究动机和背景）
- **研究动机**：大语言模型（LLMs）在数学推理任务上已取得显著进展（如OpenAI o1、DeepSeek-R1），但医疗领域同样需要深度、可靠的推理能力。然而，医疗推理缺乏像数学问题那样清晰可验证的步骤（如唯一答案），导致验证困难，制约了推理增强方法（如强化学习）的应用。
- **核心问题**：如何为医疗推理提供可验证性，从而利用验证信号引导模型学习复杂推理（即长链思维+反思行为），提升医疗问题解答的准确性和可靠性。
- **整体含义**：论文提出**医疗可验证问题（Medical Verifiable Problems, MVPs）**，将闭卷考试选择题转化为开放但具唯一标准答案的问题，并构建自动验证器；基于此设计两阶段训练方法，训练出具备复杂推理能力的医疗LLM **HuatuoGPT-o1**，在多项医疗基准上超越通用和专用模型，验证了可验证框架在医疗领域的有效性。

## 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程
- **核心思想**：通过构造可验证的医疗问题，使模型能够利用验证器提供二元反馈（正确/错误），从而像数学推理一样引导模型进行搜索和强化学习，学习长链思维和反思行为。
- **关键技术细节**：
    1. **医疗可验证问题（MVPs）构造**：
        - 从MedQA-USMLE和MedMCQA训练集收集192K道选择题。
        - 筛选挑战性问题（三个小模型均答错的、短问题排除），确保唯一答案（去除多选/“不正确选项”等），并利用GPT-4o过滤模糊问题。
        - 用GPT-4o将选择题重写为开放式问题，保留标准答案，最终获得40K MVPs数据集 D = {(x, y*)}。
        - 构建医疗验证器：使用GPT-4o作为验证器（也可微调小模型），通过提示比较模型输出与标准答案，返回 True/False。
    2. **两阶段训练方法**：
        - **Stage 1: 学习已验证的推理轨迹**：
            - 给定MVPs元组 (x, y*)，初始LLM（GPT-4o）生成初始思维链 e0 和答案 y0。
            - 若验证器认为错误，则随机选择四种搜索策略之一（Exploring New Paths, Backtracking, Verification, Correction）基于先前推理生成新的推理 ei 和答案 yi，迭代直到验证正确（最大深度N=3，最多T=3次尝试）。
            - 成功轨迹 [e0, y0, ..., ei, yi] 被GPT-4o重新格式化为自然语言的长思维链 ˆe（模拟人类反思过程），再生成正式回应 ˆy。共合成20K SFT数据 DSFT = {(x, ˆe, ˆy)}。
            - 监督微调（SFT）训练LLM以输出长思维链后跟正式回答。
        - **Stage 2: 基于验证奖励的强化学习（RL）**：
            - 使用PPO算法，奖励函数结合验证分数（正确=1，错误=0.1，未产生思考行为=0）和KL散度惩罚（β=0.03）。
            - 在剩余20K MVPs上进行on-policy训练，进一步提升复杂推理能力。
    3. **模型**：HuatuoGPT-o1-8B和70B，分别基于LLaMA-3.1-8B-Instruct和70B-Instruct。

## 3. 实验设计：使用了哪些数据集 / 场景，它的 benchmark 是什么，对比了哪些方法
- **数据集**：
    - 训练：MedQA-USMLE训练集、MedMCQA训练集（共192K选择题，筛选出40K MVPs，其中20K用于SFT，20K用于RL；另加入4K未转换的选择题增强泛化）。
    - 评估：标准医疗基准：MedQA（USMLE测试集）、MedMCQA（验证集）、PubMedQA（测试集）。此外，还评估MMLU-Pro的健康/生物学子集、GPQA的遗传学/分子生物学子集。中文医疗：MedQA中文版、CMExam、CMMLU医学部分。化学：ChemBench、MMLU-Pro化学部分、GPQA化学部分。
- **对比方法**：
    - 通用LLMs：Qwen-2.5, LLaMA-3.1, Gemma 2, Yi, Mistral, GLM-4。
    - o1-like LLMs：DeepSeek-R1-Distill (8B, 70B), QwQ-32B。
    - 医疗专用LLMs：UltraMedical, OpenBioLLM, BioMistral, HuatuoGPT-2等。
- **消融实验**：分析复杂CoT vs 简单CoT vs 无CoT、有无RL、不同RL算法（DPO, RLOO, PPO）、不同backbone（Qwen2.5）、跨语言（中文）、跨领域（化学）等。

## 4. 资源与算力：如果文中有提到，请总结使用了多少算力（GPU 型号、数量、训练时长等）。若未明确说明，也请指出这一点
- 论文未明确给出训练所需的具体GPU型号、数量和训练时长。附录C提到PPO训练过程（HuatuoGPT-o1-8B）约400步，但未给出硬件和时间信息。
- 推理效率对比中（附录J）提到使用vLLM和4×NVIDIA A800 80GB GPU进行70B模型测试，但训练资源未说明。
- 因此，资源细节不充分，无法准确量化算力需求。

## 5. 实验数量与充分性：大概做了多少组实验，这些实验是否充分、是否客观、公平
- **实验数量**：较多，包括：
    - 主实验（Table 1）：8B和70B尺度对比多种模型在5个医疗基准上的结果。
    - 消融实验（Table 2）：分析CoT类型、RL算法、不同SFT数据量等。
    - 不同backbone实验（Table 4/8）：基于LLaMA-3.1和Qwen2.5。
    - 跨语言适应（Table 5）：中文医疗，对比通用中文模型和专用模型。
    - 跨领域适应（Table 6）：化学，对比通用和o1-like模型。
    - 验证器可靠性评估（Figure 4）：GPT-4o验证器 vs 微调8B验证器 vs 精确匹配。
    - RL训练曲线（Figure 5）：奖励和生成长度变化。
    - 搜索深度分析（Table 9,10）等。
- **充分性**：实验覆盖了主要基准、消融、迁移性、验证器可靠性，较为充分。对比模型涵盖了通用、专用和o1-like模型，公平性较好（同参数规模比较）。但缺少与更大模型（如GPT-4o本身）的直接对比，也未在真实临床场景中评估。
- **客观性**：采用标准评估集，使用5次平均（GPQA），验证器由人工标注验证（200样本，准确率>94%）。消融实验设计合理，结论可信。

## 6. 论文的主要结论与发现
- **医疗可验证问题有效**：将闭卷选择题转化为开放但可验证的问题，结合自动验证器，能像数学推理一样引导模型学习复杂推理。
- **复杂CoT显著提升性能**：在SFT阶段使用复杂CoT比简单CoT或无CoT提升约4.3平均点；且复杂CoT在RL阶段带来更大增益（3.6 vs 2.6 vs 1.1）。
- **RL进一步优化**：PPO优于DPO和RLOO，说明on-policy和价值模型有助于学习更优推理路径。
- **HuatuoGPT-o1达到SOTA**：8B模型在医疗基准上平均提升约8点，70B模型超越所有同参数规模通用和专用模型，包括DeepSeek-R1-Distill-70B。
- **方法可迁移**：在中文医疗和化学领域均取得显著改进，验证了框架的通用性。

## 7. 优点：方法或实验设计上有哪些亮点
- **方法创新**：首次将可验证问题引入医疗领域，解决医疗推理验证难题，为RL在医疗中的应用铺平道路。
- **数据轻量高效**：仅用40K MVPs，8B模型即取得显著提升，避免大规模预训练或蒸馏成本。
- **搜索策略多样**：设计了四种反思性搜索策略（回溯、新路径、验证、修正），使学习到的推理轨迹更丰富。
- **验证器可靠**：GPT-4o验证器准确率>96%，且微调8B验证器也能>90%，为低成本复现提供可能。
- **实验充分**：跨语言、跨领域、不同backbone、多种RL算法对比、验证器可靠性分析等，全面论证方法有效性。

## 8. 不足与局限：包括实验覆盖、偏差风险、应用限制等
- **依赖高质量选择题**：MVPs从医学考试选择题改造，数据来源受限；其他领域可能缺乏类似题库，影响泛化。
- **RL扩展性不足**：论文未尝试大规模RL训练（如数十万步），且发现过多训练步骤可能导致性能退化（输出混乱），稳定性待提升。
- **验证器依赖GPT-4o**：虽然微调小验证器可行，但论文主要使用GPT-4o作为验证器，可能产生API成本；小验证器的准确性低于GPT-4o，存在偏差风险。
- **评估局限**：仅使用选择题形式评估，未在开放式医疗对话或真实临床场景中测试，实际应用效果存疑。
- **计算资源未明确**：论文未提供训练所需的具体GPU/时间，不利于复现和公平比较。
- **伦理声明**：模型可能产生幻觉或不准确内容，当前不适合临床应用。

（完）

---
title: Towards Adapting Open-Source Large Language Models for Expert-Level Clinical Note Generation
title_zh: 面向专家级临床笔记生成的开源大语言模型适配
authors: "Hanyin Wang, Chufan Gao, Bolun Liu, Qiping Xu, Guleid Hussein, Mohamad El Labban, Kingsley Iheasirim, Hariprasad Reddy Korsapati, Chuck Outcalt, Jimeng Sun"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.findings-acl.626.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 医疗大模型中使用RLHF生成临床笔记
tldr: 针对医疗数据隐私和计算成本问题，本文对开源LLaMA-2模型进行领域适应，通过持续预训练、监督微调和强化学习（结合AI和人类反馈）生成高质量临床笔记。提出的DistillDirect方法实现了在线优化，在临床文本摘要任务上达到专家级水平，证明了RLHF在医疗大模型中的应用潜力。
source: ACL-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1658, \"height\": 685, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 810, \"height\": 1336, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 788, \"height\": 903, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1365, \"height\": 279, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1620, \"height\": 1002, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 806, \"height\": 1417, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 782, \"height\": 830, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 781, \"height\": 829, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 767, \"height\": 812, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1555, \"height\": 1447, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 1641, \"height\": 681, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-findings/anthology-2025.findings-acl.626/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1574, \"height\": 1103, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.626/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1647, \"height\": 1253, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.626/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1642, \"height\": 867, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.626/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1643, \"height\": 902, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.626/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1646, \"height\": 555, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.626/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1646, \"height\": 1150, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.626/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1645, \"height\": 1150, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.626/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1586, \"height\": 306, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.626/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 1583, \"height\": 1555, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-findings/anthology-2025.findings-acl.626/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1589, \"height\": 510, \"label\": \"Table\"}]"
motivation: 医疗场景需本地化小模型，但现有开源模型在临床笔记生成上质量不足。
method: 采用持续预训练、监督微调和基于AI与人类反馈的强化学习（DistillDirect）对LLaMA-2进行适配。
result: 模型生成的临床笔记质量接近专家水平，私有数据上表现优异。
conclusion: 结合RLHF的领域适应可有效提升开源LLM的临床文本生成能力。
---

## Abstract
Proprietary Large Language Models (LLMs) such as GPT-4 and Gemini have demonstrated promising capabilities in clinical text summarization tasks. However, due to patient data privacy concerns and computational costs, many healthcare providers prefer using small, locally-hosted models over external generic LLMs. This study presents a comprehensive domain- and task-specific adaptation process for the open-source LLaMA-2 13 billion parameter model, enabling it to generate high-quality clinical notes from outpatient patient-doctor dialogues. Our process incorporates continued pre-training, supervised fine-tuning, and reinforcement learning from both AI and human feedback. We introduced a new approach, DistillDirect, for performing on-policy reinforcement learning with Gemini 1.0 Pro as the teacher model. Our resulting model, LLaMA-Clinic, can generate clinical notes comparable in quality to those authored by physicians. In a blinded physician reader study, the majority (92.8%) of individual evaluations rated the notes generated by LLaMA-Clinic as “acceptable” or higher across all three criteria: real-world readiness, completeness, and accuracy. In the more challenging “Assessment and Plan” section, LLaMA-Clinic received the same score as the notes authored by physicians. We highlight key considerations for future clinical note-generation tasks, emphasizing the importance of pre-defining a best-practice note format, rather than relying on LLMs to determine this for clinical practice.

---

## 论文详细总结（自动生成）

# 论文总结：Towards Adapting Open-Source Large Language Models for Expert-Level Clinical Note Generation

## 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：临床笔记（clinical note）的撰写是医疗工作者日常工作中的重大负担。尽管 GPT-4、Gemini 等专有大语言模型（LLM）在临床文本摘要任务中表现出色，但由于患者数据隐私（如 HIPAA 合规性）、数据安全、成本以及对训练数据透明度的担忧，医疗机构更倾向于使用本地部署的小型开源模型，而非依赖外部通用模型。
- **核心问题**：如何系统性地适配开源 LLM（以 LLaMA-2-13B 为例），使其能够从门诊医患对话中生成高质量的临床笔记，达到或接近医生撰写的水平。
- **整体含义**：本研究展示了一条完整的开源模型“领域+任务”适配路线，并提供了公开的数据集和关键实践指南，为医疗机构利用自身数据微调本地模型提供了可行的“操作手册”。

## 2. 方法论：核心思想、关键技术细节

- **整体框架**：采用四阶段流水线：继续预训练（Continued Pretraining, CP）→ 监督微调（Supervised Fine-Tuning, SFT）→ 基于 AI 反馈的强化学习（RLAIF）→ 基于人类反馈的强化学习（RLHF）。所有训练均使用 LoRA 低秩适配方法。
- **核心创新——DistillDirect**：
  - 针对传统蒸馏 DPO（Distilled DPO）是离线、离策略的缺点（即偏好数据来自外部模型而非当前策略，导致分布偏移），提出 **DistillDirect**，实现在线、在策略的 RLAIF。
  - 具体流程：在每个训练周期，从当前策略 πθt 采样一个响应作为“被拒绝”样本，同时从教师模型（Gemini 1.0 Pro）获取一个响应作为“偏好”样本，然后用 DPO 损失优化模型。
  - DPO 损失函数：-log σ( β log (πθ(y⁺|x)/πθ₀(y⁻|x)) / (πθ₀(y⁺|x)/πθ(y⁻|x)) )，其中 πθ₀ 是 SFT 基线模型。
- **RLHF**：在 DistillDirect 之后，利用医生对当前模型输出进行偏好标注（三位内科医生），进一步进行在线、在策略的 DPO 训练。
- **关键设置**：
  - 只生成“主观”（Subjective）和“评估与计划”（Assessment and Plan）两部分，不生成“客观”部分（因体格检查结果在实际对话中常缺失，且实验室数据可直接从电子病历导入）。
  - 先由医生共同定义“最佳实践”笔记格式，然后用该格式指导模型生成，而非让模型自动决定格式。

## 3. 实验设计

- **数据集**：
  - **ACI-BENCH**：最大的公开门诊对话-笔记数据集，含 207 个案例（原始质量参差不齐）。经医生修改为统一“最佳实践”格式后用于训练和测试。
  - **Dialogue-G**：基于 MTSamples 公开合成笔记，用 Gemini Pro 反向生成对话，再重新生成标准格式笔记，共 1,291 对。
  - **MIMIC-IV**：用于继续预训练。使用了完整出院小结（Discharge-long, 12 亿 token）和仅“住院过程”部分的短版（Discharge-short, 2 亿 token）。
- **基准（Benchmark）**：以 GPT-4 零样本/少样本结果、Meditron、LLaMA3-Med42、MeLLaMA 等医学 LLM 作为对比基线。
- **评估方法**：
  - 自动指标：ROUGE-1/2/L/LSUM（衡量与 Gemini Pro 生成参考笔记的词汇相似度）。
  - 人类评估：四位内科医生进行双盲评分，维度包括：现实世界就绪度（real-world readiness）、完整性（completeness）、准确性（accuracy）。评分 1-5 分。
  - 还评估了 LLaMA-Clinic 与医生撰写笔记、Gemini Pro 之间的差异。
- **对比方法**：
  - 无指令的 LLaMA-2 基础/聊天模型；
  - 多个医学 LLM（Meditron-7B、LLaMA3-Med42-8B、MeLLaMA-13B-chat）；
  - 仅 SFT、仅 SFT + DistillDirect、加入继续预训练的不同组合。

## 4. 资源与算力

- **计算环境**：
  - 继续预训练：4 张 Nvidia A6000 或 4 张 A100 GPU，使用 FSDP 混合精度训练，单 epoch。
  - SFT：同样 4 张 GPU，FSDP，3 epoch。
  - RLAIF（DistillDirect）：单张 A100 80GB，纯 BF16，微批次大小 1，梯度累积 8，1 epoch/轮，共 3 轮。
  - RLHF：类似 RLAIF 设置，每轮 3 epoch，共 2 轮。
- **时间成本**（见附录图6A）：
  - 继续预训练：约 48 A100 GPU 小时（短摘要版）。
  - SFT：约 6 A100 GPU 小时。
  - RLAIF：约 9 A100 GPU 小时。
  - RLHF（医生标注 + 训练）：医生标注约 39 人时，训练约 2.5 GPU 小时。
  - 总开发时间（仅直接步骤）：约 55.5 GPU 小时 + 约 39 医生人时（不含试错成本）。
- **推理成本**：基于 2024 年 5 月定价，LLaMA-Clinic 推理成本约为 Gemini 1.0 Pro 的 1/3.75（假设 100 万次请求/年）。

## 5. 实验数量与充分性

- **实验组数**：
  - 继续预训练：探索了长/短语料、纯 bf16 与混合精度、不同学习率和调度器，共约 6 组实验（含失败重试）。
  - SFT + RLAIF：对 8 个模型（4 个 13B + 4 个 7B）在 3 种学习率（2e-5, 5e-6, 5e-7）、不同 epoch/轮、以及生成参数（温度 1.0 vs 0.6）下进行了系统性消融，报告了多张表格（附录表1-5）。
  - RLHF：仅 2 轮 DPO，受限于医生时间。
  - 最终用户研究：40 个对话，每位医生评 80 次（主观和评估与计划分开），共 240 次评分（4 位医生 × 3 组 × 3 维度）。
- **充分性评价**：
  - **优点**：覆盖了多种预训练方案、训练策略和学习率，消融实验详细，且对超参数进行了有限搜索。自动指标和人类评估相结合。
  - **不足**：因医生资源有限，RLHF 仅进行 2 轮，未探索更多轮次；最终评估仅 4 位医生，样本量小；对比基线主要是医学通用模型，缺乏与其他同类临床笔记生成系统的比较（如其他机构微调的开源模型）；未提供统计显著性检验（人为决定不做是因为 reviewer pool 小）。

## 6. 主要结论与发现

- **性能对比**：LLaMA-Clinic 生成的笔记在双盲评审中，92.8% 的评分达到“可接受”或以上；在“评估与计划”部分的现实世界就绪度评分与医生撰写笔记持平，完整性评分甚至更高。
- **关键发现 1**：**预定义最佳实践笔记格式至关重要**。直接使用 ACI-BENCH 原始参考笔记（质量参差不齐）会导致训练不稳定和生成质量下降。
- **关键发现 2**：**继续预训练未带来显著收益**。实验发现，带有继续预训练的模型在 ROUGE 上并不优于直接 SFT+RLAIF 的模型，甚至可能因灾难性遗忘而降低指令遵循能力。使用短摘要版（Discharge-short）效果优于长版，但总体仍不如跳过 CP 的模型。
- **关键发现 3**：**DistillDirect（在策略 RLAIF）显著提升了 ROUGE 分数**，且比 SFT 提升更大，但训练稳定性很依赖学习率和 epoch 数，LR=5e-6 且 1 epoch/轮是稳定设置。
- **关键发现 4**：**开源模型可以接近甚至达到专家级水平**，且推理成本远低于专有模型。
- **副作用**：初步安全评估显示，LLaMA-Clinic 和医生撰写笔记均无严重伤害风险（评分“无”和“低”），但 Gemini Pro 有一个案例被评为“轻中度”伤害和“中等”可能性。

## 7. 优点

- **方法论创新**：提出 DistillDirect，解决离线蒸馏 DPO 的分布偏移问题，实现 RLAIF 的在策略学习，并成功与 RLHF 相结合。
- **实践指导性强**：不仅给出算法，还公开了完整的“操作手册”（包括数据准备、训练细节、超参数选择经验、稳定性问题及解决方案），对医疗机构的落地非常有价值。
- **数据集开源**：提供了合成的 Dialogue-G 数据集（1291 对）和医生偏好反馈数据集，推动社区发展。
- **评估严谨**：采用双盲医生评审，且考虑了现实工作流（允许医生编辑），更具实际意义。评估了错误可能带来的危害。
- **成本分析透明**：给出了开发时间和推理成本的估算，帮助决策。

## 8. 不足与局限

- **数据量小**：最大公开对话数据集 ACI-BENCH 仅 207 例，模型训练数据规模有限（<1500 对话），可能限制泛化性。
- **对话质量假设**：ACI-BENCH 的对话是合成的，包含所有必要信息；真实场景下对话可能不完整，影响模型输入质量。
- **医生资源限制**：RLHF 仅 2 轮，最终评估仅 4 位医生，无法进行统计检验或更广泛的偏好收集；医生来源单一（同一医疗机构的内科），可能引入偏倚。
- **格式泛化性**：“最佳实践”格式由该机构内科医生定义，不适用于其他专科（如骨科、外科），通用性有限。
- **风险评价不完整**：安全评估仅基于一位医生的主观判断，未纳入实际临床测试。
- **计算资源探索有限**：继续预训练的收益未得到证实，但可能因为数据量太小或任务特殊性；未尝试更大模型（如 70B）或完整参数微调（因资源限制）。
- **偏见风险**：使用 Gemini Pro 作为教师模型并生成参考笔记，可能引入该模型的内在偏见和错误；医生偏好数据也可能反映个人风格偏好而非客观质量。

（完）

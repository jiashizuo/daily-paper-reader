---
title: "Localizing Before Answering: A Benchmark for Grounded Medical Visual Question Answering"
title_zh: 先定位后回答：面向接地医疗视觉问答的基准
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0853.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 医疗视觉问答基准
tldr: 该论文针对医疗视觉问答任务中模型缺乏对答案的定位能力的问题，提出了一个需要先定位再回答的基准。通过设计包含定位子任务的评估数据集，促使模型在回答前先定位相关区域。实验表明该基准能更全面评估医疗VQA模型性能。贡献在于推动了医疗视觉语言模型的精细化评估。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-853/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1741, \"height\": 685, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-853/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 815, \"height\": 739, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-853/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 902, \"height\": 403, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-853/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 887, \"height\": 394, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-853/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1833, \"height\": 543, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-853/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 893, \"height\": 960, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-853/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1821, \"height\": 499, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-853/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 781, \"height\": 409, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-853/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 532, \"height\": 386, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-853/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1841, \"height\": 773, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-853/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 878, \"height\": 389, \"label\": \"Table\"}]"
motivation: 现有医疗VQA基准缺乏对答案定位的约束，导致模型可能通过捷径学习。
method: 构建包含定位子任务的基准数据集，要求模型先生成定位再输出答案。
result: 实验证明该基准能有效区分模型定位能力并揭示现有模型不足。
conclusion: 先定位后回答的范式提升了医疗VQA的可靠性与可解释性。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

好的，请查收以下对论文《Localizing Before Answering: A Benchmark for Grounded Medical Visual Question Answering》的详细中文总结：

## 论文详细中文总结

### 1. 核心问题与整体含义（研究动机与背景）
-   **背景**：当前医学大型多模态模型（LMMs）在回答疾病相关问题时常出现**幻觉**，即生成的答案与图像证据矛盾。作者发现模型存在两种“**捷径学习**”：
    -   **文本捷径**：模型依赖语言模式（如“肺”与“肺炎”的共现频率）而非视觉内容来回答。
    -   **视觉捷径**：模型注意力分散到与问题无关的图像区域，而非正确的病理区域。
-   **目标**：为了解决上述问题，论文旨在：
    -   构建一个专门评估LMMs**定位能力**和**幻觉鲁棒性**的基准。
    -   提出一种**先定位后回答**的新框架，以提升模型视觉推理的可靠性和可解释性。

### 2. 方法论：Localize-before-Answer (LobA) 框架
-   **核心思想**：强制模型在回答前先定位并分割出问题所指的解剖学区域，然后基于该定位结果重新调整注意力，使答案严格基于视觉证据。
-   **关键技术细节**：
    1.  **Grounded Text Generation（接地文本生成）**：
        -   训练LMM生成包含特殊标记 `<SEG>` 的文本（例如“右肺下叶的位置在 `<SEG>`”），要求模型先输出定位，再给出答案。
        -   提取 `<SEG>` 对应的隐藏状态 `h_seg`，并将其作为查询输入到**分割解码器**（基于MedSAM），生成对应区域的**分割掩码 `M`**。
    2.  **Self-prompting via Attention Highlighter（通过自提示的注意力高亮）**：
        -   **Attention Reweighting**：将分割掩码 `M` 插值到视觉骨干的patch尺度，然后对属于感兴趣区域的**注意力logits**施加额外权重（乘上超参数β > 0），从而迫使模型将更多注意力集中在正确区域。
        -   **Contrastive Decoding**：对比突出区域前后（`p_hl` vs `p_bh`）的token概率，通过公式 `p = softmax((1+α)log p_hl - α log p_bh)` 进行解码，进一步减弱无关文本和图像区域的干扰。
-   **损失函数**：整体损失 `L = λ_text * L_text + λ_seg * L_seg`，其中 `L_text` 是文本交叉熵损失，`L_seg` 是分割任务的BCE和DICE损失。

### 3. 实验设计
-   **数据集**：基于MIMIC-CXR和VinDr-CXR构建了**HEAL-MedVQA**基准，包含**67,000**个QA对，并由三位认证放射科医生对病理区域的解剖结构进行了**像素级分割标注**。
-   **评估协议**：
    -   **Textual Perturbation Test (TPT)**：在问题中随机替换关键实体（解剖部位或疾病），统计答案从“是”变为“否”的比例，衡量模型对**文本捷径**的抗拒能力。
    -   **Visual Perturbation Test (VPT)**：将图像中查询的解剖区域（如左肺下叶）替换为另一张无相关疾病图像中的相同区域，统计答案变化比例，衡量模型对**视觉捷径**的抗拒能力。
-   **对比方法**：
    -   **闭源模型**：Gemini-1.5, GPT-4-O, GPT-4-Vision。
    -   **开源模型**：CheXagent, BioMedGPT, MedFlamingo, LLaVA-Med, LISA。
    -   **对抗技术**：Prompt Highlighter (PH), Visual Contrastive Decoding (VCD), Contrastive Region Guidance (CRG)，均以LLaVA-Med为基座。
-   **评价指标**：多标签微F1分数、精确率、召回率用于VQA准确性；TPT和VPT分数用于鲁棒性评估。

### 4. 资源与算力
-   **模型微调**：所有开源模型均使用LoRA在单张**80GB A100 GPU**集群上进行微调。
-   **框架**：使用Transformer、PyTorch和DeepSpeed框架。
-   **训练时长**：论文未明确报告具体训练时长。

### 5. 实验数量与充分性
-   **实验数量**：论文报告了：
    -   **表2**：在MIMIC和VinDr两个数据集上，针对Yes/No和Open-ended两种问题形式，对比了8个基线模型和3个对抗方法，进行了**12组主要实验**。
    -   **表3**：文本扰动测试，对**8个模型+论文方法**进行了2个数据集（表3实为MIMIC和VinDr上分别对Anatomy和Disease的TPT，但分析性数字实际是表3内容）。
    -   **表4**：视觉扰动测试，对**8个模型+论文方法**进行了2个数据集。
    -   **表5**：消融实验，对LobA的三个组件（基座、定位生成、自提示）在TPT、VPT和VQA F1分数上进行了**4组消融**。
    -   此外还包含定性可视化比较（图6）。
-   **充分性与公平性**：实验较为充分。开源模型使用相同LoRA微调，闭源模型使用API直接评估，评估指标多样。但未对闭源模型进行同等的对抗训练微调，部分对比可能存在不公平。

### 6. 主要结论与发现
-   **HEAL-MedVQA是一个具有挑战性的基准**：闭源模型（GPT-4、Gemini）在二元问题上的准确率低于65%，在开放问题上低于10%，证明了现有模型对捷径的高度依赖。
-   **LobA框架显著优于SOTA**：LobA在VQA准确性和鲁棒性上均超过所有对比方法和先进对抗技术。例如，在开放问题上，LobA将F1分数相比Prompt Highlighter**提升了3.19%**（VinDr）和**3.63%**（MIMIC）。
-   **TPT和VPT揭示了模型的脆弱性**：通过T和VPT分数，清晰地量化了模型对文本和视觉捷径的敏感度。LobA在TPT和VPT上均取得最高分（例如TPT达79.2%，VPT达73.4%），表明其定位引导机制能有效对抗幻觉。

### 7. 优点
-   **创新的评估协议**：提出的TPT和VPT直接量化了LMMs在文本和视觉上的捷径学习程度，是评估幻觉鲁棒性的有力新工具。
-   **端到端的定位-回答框架**：LobA无需推理时依赖人工标注即可自动定位，且其自提示机制同时作用于视觉骨干和语言解码器，从根源上减少了幻觉。
-   **高质量的基准数据集**：包含大规模、医生标注像素级分割掩码的67K QA对，填补了现有Medical VQA数据集在深度幻觉评估上的空白。

### 8. 不足与局限
-   **泛化性有限**：所有实验仅在**胸部X光片**上进行，未验证该方法能否推广到其他医学影像模态（如CT、MRI）。解剖结构固定性和疾病特异性可能限制了方法的普适性。
-   **分割质量依赖性**：LobA的性能很大程度上取决于分割解码器（MedSAM）输出的质量。如果分割失败或边界错误，自提示机制可能放大误导信息。
-   **闭源模型未微调**：对比实验中，闭源模型（Gemini、GPT-4）是在零样本条件下评估的，而开源模型和LobA都在特定数据集上微调过。这种比较可能高估了开源方法对闭源方法的优势。
-   **对抗测试的覆盖度**：TPT和VPT只测试了单一替换情况，未考虑更复杂的多实体扰动组合或更隐蔽的捷径模式，其作为鲁棒性评估的全面性有待进一步验证。

（完）

---
title: Towards Statistical Factuality Guarantee for Large Vision-Language Models
title_zh: 面向大视觉语言模型的统计事实性保障
authors: "Zhuohang Li, Chao Yan, Nicholas J Jackson, Wendi Cui, Bo Li, Jiaxin Zhang, Bradley A. Malin"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.emnlp-main.576.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 统计保真的大视觉语言模型，应用于医学放射报告生成
tldr: 大视觉语言模型在医学放射报告生成中存在幻觉问题。本文提出ConfLVLM框架，基于归纳预测和不确定性度量对生成内容进行统计保真检验，可实现有限样本下的分布自由保障。在医学放射报告场景的实验表明该方法有效过滤不可靠声明，提升输出可靠性。
source: EMNLP-2025-Main
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1595, \"height\": 906, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 586, \"height\": 634, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 586, \"height\": 632, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 587, \"height\": 634, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 786, \"height\": 641, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 796, \"height\": 534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 798, \"height\": 534, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 779, \"height\": 269, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 700, \"height\": 1102, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 802, \"height\": 300, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 801, \"height\": 301, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 804, \"height\": 301, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 701, \"height\": 288, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-014.webp\", \"caption\": \"\", \"page\": 0, \"index\": 14, \"width\": 581, \"height\": 313, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-015.webp\", \"caption\": \"\", \"page\": 0, \"index\": 15, \"width\": 576, \"height\": 311, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-016.webp\", \"caption\": \"\", \"page\": 0, \"index\": 16, \"width\": 575, \"height\": 309, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-017.webp\", \"caption\": \"\", \"page\": 0, \"index\": 17, \"width\": 635, \"height\": 1484, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-018.webp\", \"caption\": \"\", \"page\": 0, \"index\": 18, \"width\": 633, \"height\": 1484, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-019.webp\", \"caption\": \"\", \"page\": 0, \"index\": 19, \"width\": 635, \"height\": 1488, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-020.webp\", \"caption\": \"\", \"page\": 0, \"index\": 20, \"width\": 806, \"height\": 712, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-021.webp\", \"caption\": \"\", \"page\": 0, \"index\": 21, \"width\": 807, \"height\": 721, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-022.webp\", \"caption\": \"\", \"page\": 0, \"index\": 22, \"width\": 805, \"height\": 712, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-023.webp\", \"caption\": \"\", \"page\": 0, \"index\": 23, \"width\": 791, \"height\": 927, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-024.webp\", \"caption\": \"\", \"page\": 0, \"index\": 24, \"width\": 790, \"height\": 940, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-025.webp\", \"caption\": \"\", \"page\": 0, \"index\": 25, \"width\": 790, \"height\": 931, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-026.webp\", \"caption\": \"\", \"page\": 0, \"index\": 26, \"width\": 1447, \"height\": 1949, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-027.webp\", \"caption\": \"\", \"page\": 0, \"index\": 27, \"width\": 1636, \"height\": 671, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-main/anthology-2025.emnlp-main.576/fig-028.webp\", \"caption\": \"\", \"page\": 0, \"index\": 28, \"width\": 1630, \"height\": 879, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.576/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 679, \"height\": 480, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.576/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 785, \"height\": 519, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-main/anthology-2025.emnlp-main.576/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 804, \"height\": 524, \"label\": \"Table\"}]"
motivation: 大视觉语言模型在图像生成文本时易产生幻觉，尤其是在医疗等安全关键领域，需提供严格的事实性保障。
method: 提出ConfLVLM框架，将每个生成细节作为假设，通过不确定性度量进行统计假设检验，从而过滤不可靠声明。
result: 在通用场景理解和医学放射报告生成等三个领域实验，验证了框架能有效提升事实性。
conclusion: ConfLVLM为LVLM提供了统计保真保证，适用于安全关键应用。
---

## Abstract
Advancements in Large Vision-Language Models (LVLMs) have demonstrated impressive performance in image-conditioned text generation; however, hallucinated outputs–text that misaligns with the visual input–pose a major barrier to their use in safety-critical applications. We introduce ConfLVLM, a conformal-prediction-based framework that achieves finite-sample distribution-free statistical guarantees to the factuality of LVLM output. Taking each generated detail as a hypothesis, ConfLVLM statistically tests factuality via efficient heuristic uncertainty measures to filter out unreliable claims. We conduct extensive experiments covering three representative application domains: general scene understanding, medical radiology report generation, and document understanding. Remarkably, ConfLVLM reduces the error rate of claims generated by LLaVa-1.5 for scene descriptions from 87.8% to 10.0% by filtering out erroneous claims with a 95.3% true positive rate. Our results further show that ConfLVLM is highly flexible, and can be applied to any black-box LVLMs paired with any uncertainty measure for any image-conditioned free-form text generation task while providing a rigorous guarantee on controlling hallucination risk.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
大视觉语言模型（LVLM）在图像条件文本生成中表现出色，但其生成的文本常出现“幻觉”（hallucination）——即与视觉输入不一致的错误或捏造内容。这一问题严重阻碍了LVLM在安全关键领域的应用，如医疗、自动驾驶等。现有缓解方法（如训练调优、解码改进或基于启发式的后处理）要么资源消耗大，要么缺乏严格的统计保证。因此，本文旨在提出一个能提供有限样本、分布自由统计保真性保证的框架，以控制LVLM输出的幻觉风险。

## 2. 方法论
### 核心思想
将LVLM生成的自由文本分解为一系列独立声明（claims），每个声明作为一个可检验的假设。通过共形预测（conformal prediction）框架，基于预定义的一致性分数（conformity scores）评估每个声明的可信度，并过滤掉不可靠的声明，从而保证最终输出的错误率以高概率受控。

### 关键技术细节
- **流程**：  
  1. **初始假设生成**：从LVLM采样初始响应。  
  2. **分解**：使用分解算子 D 将响应拆分为独立声明集合 C。  
  3. **假设检验**：定义过滤算子 F(C; τ) = {C_j : r(C_j, I) > τ}，其中 r 为评分函数。  
  4. **合并**：将过滤后的声明合并为最终响应 Y*。  
- **校准**：在标定数据集上，计算每个样本的一致性分数 S(C, I) = inf{τ : L(F(C;τ), I) ≤ λ}，然后取 ⌈(n+1)(1-α)⌉ / n 分位数作为阈值 ˆτ。  
- **评分函数**：  
  - **内部分数**：文本对数概率、图像条件对数概率、对数概率比值。  
  - **外部分数**：使用预训练模型（如CLIP、BiomedCLIP、LayoutLMv3）计算声明与图像的相似度。  
- **损失函数**：根据错误类型（对象幻觉、属性错误、数量错误等）加权累加。例如对象错误权重为3，其他为1。

### 理论保证
基于Split Conformal Prediction的定理：在可交换性假设下，有 P(L(ˆF(C_{n+1}), I_{n+1}) ≤ λ) ≥ 1-α。若损失函数单调，还有上界。

## 3. 实验设计
### 数据集与场景
- **场景理解**：MSCOCO验证集（500张图像，每张至少3个物体）。  
- **医学报告生成**：MIMIC-CXR（500张胸部X光图像，每例不同患者）。  
- **文档理解**：SROIE发票扫描图像（500张）。

### 评估的LVLM
- 场景理解：LLaVA-1.5, Phi-3.5-vision-instruct, Llama-3.2-11B-Vision, GPT-4o-mini  
- 医学报告：LlaVa-Med, CvT2DistilGPT2, MAIRA-2  
- 文档理解：LLaVA-NeXT, Phi-3.5-vision-instruct

### 对比方法
- **基线**：Vanilla LVLM（无过滤）、随机过滤（随机删除比例为α的声明）。  
- **启发式方法**（附录）：Woodpecker, Chain-of-Verification (CoVe), Visual Contrastive Decoding (VCD), Instruction Contrastive Decoding (ICD)。

### 评估指标
- 经验覆盖（empirical coverage）、过滤声明比例、弃权率、TPR/F1（声明级别）、响应准确率等。

## 4. 资源与算力
论文未明确说明使用的GPU型号、数量、训练时长等具体算力信息。实验中LVLM均为预训练模型，框架本身不需要重新训练，仅需少量标定计算（推理时使用LVLM或外部模型计算分数）。

## 5. 实验数量与充分性
- **实验组数**：三个领域共8个LVLM，5种评分函数，多种α和λ参数组合，每个设置重复50次随机分割（标定/测试），共计超过81,000条声明。  
- **消融实验**：校准数据大小的影响（50~400样本）、错误容忍度λ的调节、不同评分函数的对比。  
- **注释可靠性验证**：使用GPT-4o辅助标注，并请人类标注员（ICC=0.85）及另一LVLM（Gemini-1.5-pro，ICC=0.81）进行交叉验证，证明标注质量高。  
- **结论**：实验设计覆盖全面、结果客观，统计上验证了框架的有效性和灵活性。

## 6. 主要结论与发现
- ConfLVLM能精准达到用户指定的经验覆盖水平，而Vanilla LVLM的实际覆盖远低于期望。  
- 以LLaVA-1.5为例，使用CLIP-ViT-Large评分函数，在α=0.1, λ=0时，错误率从87.8%降至10.0%，TPR达95.3%，F1为0.504，远优于随机过滤（TPR=0.104）。  
- 外部评分模型（如CLIP、BiomedCLIP、LayoutLMv3）通常比内部分数更高效（更少过滤内容），尤其是在专业领域。  
- 错误容忍度λ提供了灵活的风险-效用权衡，用户可根据需求调整。  
- 框架适用于任何黑盒LVLM，无需重新训练。

## 7. 优点
- **统计保证**：首次为LVLM输出事实性提供有限样本、分布自由的严格概率保证。  
- **黑盒兼容**：适用于任意架构的LVLM，无需模型内部访问或微调。  
- **灵活可控**：用户可同时指定误差率α和容忍度λ，精细调节风险与信息量。  
- **实用性强**：已在三个不同领域（通用、医学、文档）验证，且评分函数可替换为更合适的模型。  
- **注释验证严格**：人类与AI双重验证标注可靠性。

## 8. 不足与局限
- **可交换性假设**：框架假设标定集与测试集可交换，在实际应用中若发生分布漂移（如域迁移）可能不成立。论文提到未来可引入OOD检测或更新标定集来缓解。  
- **效用-保证权衡**：提高覆盖（降低α）会导致更多内容被过滤，信息量减少。论文承认需要更好平衡，例如训练更优的评分函数。  
- **计算开销**：虽然无需重训练，但分解声明和计算评分可能需要额外调用LVLM或外部模型，尤其在长响应时增加延迟。  
- **实验覆盖**：未考虑视频或复杂交互场景，仅在静态图像上测试。医学报告生成中仅使用GPT-4o作为标注员（但经人类交叉验证）。

（完）

---
title: "CABIN: Debiasing Vision-Language Models Using Backdoor Adjustments"
title_zh: CABIN：利用后门调整去偏视觉语言模型
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0055.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 去偏视觉语言模型可用于医疗VLM
tldr: 针对视觉语言模型容易学习虚假关联的问题，提出CABIN方法，通过后门调整机制消除数据中的混杂偏差。在多个VLM基准上降低了偏置并维持了准确性。该方法可应用于医疗视觉语言模型以提高公平性和鲁棒性。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-55/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 872, \"height\": 402, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-55/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1839, \"height\": 722, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-55/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 794, \"height\": 727, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-55/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 775, \"height\": 393, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-55/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 892, \"height\": 482, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-55/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1825, \"height\": 1245, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-55/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 892, \"height\": 493, \"label\": \"Table\"}]"
motivation: VLM依赖虚假关联导致性能不稳定且不公平。
method: 利用后门调整对训练数据进行因果干预，削弱混杂因素。
result: 在去偏任务上优于现有方法。
conclusion: 后门调整是一种有效的VLM去偏框架，可提升模型泛化能力。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文总结：CABIN: Debiasing Vision-Language Models Using Backdoor Adjustments

## 1. 论文的核心问题与整体含义（研究动机和背景）

**研究动机**：视觉语言模型（VLMs，如CLIP）虽然具备强大的零样本推理能力，但会从训练数据中继承社会刻板偏见（如性别、种族、年龄等）。这使得模型在分类、检索等下游任务中对不同人口群体产生不公平的结果（例如对“医生”的预测偏向男性，对“护士”偏向女性）。现有去偏方法通常依赖专门的面部数据集进行微调或重训练，容易过拟合且泛化性差。

**核心问题**：如何在不依赖于特定面部数据集、不损害VLM原有零样本能力的前提下，有效且鲁棒地消除模型中的敏感属性偏差？

**整体含义**：论文提出一种基于因果推断的后门调整（backdoor adjustment）框架CABIN，通过识别并消除图像嵌入中与敏感属性相关的混淆因子，实现公平且保留性能的去偏。

## 2. 论文提出的方法论

### 核心思想
将敏感属性（性别、种族、年龄等）视为图像（X）与预测（Y）之间的混淆因子（B），通过因果结构模型（SCM）中的后门路径 X ← B → Y 解释偏差来源。通过阻断该路径，即调整X和B的独立性，实现无偏预测。

### 关键技术细节
1. **Mapper训练**：训练一个轻量级的神经网络（瓶颈结构），将文本嵌入映射到图像嵌入空间，使得文本描述（如“a photo of a male/female nurse”）通过Mapper后能模拟图像嵌入对敏感属性的变化。训练数据来自LAION-400M（通用图文对，非面部数据集）。损失函数包括：
   - 对齐损失 \( L_{align} \)：最小化匹配图文对的嵌入距离。
   - 差异损失 \( L_{diff} \)：对比损失，区分匹配与不匹配对。
   - 使用PCGrad动态平衡两项损失权重 λ。

2. **敏感属性方向提取**：对于每个敏感属性组（如性别），计算成对文本提示（仅性别不同）经Mapper后的嵌入差，构成方向向量集合 \( S_{A_i} \)，代表该属性在联合嵌入空间中的变化子空间。

3. **中性化图像嵌入**：从原始图像嵌入中减去其在所有敏感属性方向上的投影，得到中性化嵌入 \( \tilde{\phi}(x) \)，使之与敏感属性近似独立。

4. **后门调整**：基于中性化嵌入，对每个敏感属性类别计算条件概率 \( P(Y | \tilde{\phi}(X), a_j^i) \)，再根据测试集中该类别的先验概率 \( P(a_j^i) \) 加权求和，得到最终无偏预测：
   \[
   P(Y | set(X)) = \sum_{a_j^i} P(Y | \tilde{\phi}(X), a_j^i) \cdot P(a_j^i)
   \]
   该过程不依赖特定任务，可应用于分类和检索。

### 算法流程（文字描述）
- 步骤1：使用LAION数据集训练Mapper，使文本嵌入可近似转化为图像嵌入。
- 步骤2：对每个敏感属性，用Mapper生成不同类别文本的嵌入，计算成对差分向量。
- 步骤3：从图像嵌入中减去这些差分向量方向上的投影，得到中性化嵌入。
- 步骤4：在中性化嵌入上运行VLM，结合属性先验概率通过后门调整公式生成最终预测。

## 3. 实验设计

**数据集**：
- 去偏评估：FACET、PATA、Flickr30K（包含性别、种族、年龄标注的通用或面部数据集）。
- 额外通用数据集：FairFace、MS-COCO、Pascal-Sentence。
- 分类任务：FACET、ImageNet。
- 检索任务：Flickr30K。

**基准方法**：
- Vanilla CLIP（未经任何去偏的基模型）。
- DeAR（基于加性残差的去偏方法）。
- SFID（统一去偏方法，同时处理多模态多任务）。

**对比指标**：
- 公平性：Skew指标体系（MaxSkew↑、MinSkew↓、MaxSkew@k、MinSkew@k），衡量不同属性类别间的预测置信度差异。
- 性能：分类准确率（Accuracy）、检索召回率（R@1、R@5、R@10）。

**模型架构**：CLIP的ResNet50和ViT-B/32两种骨干网络。

## 4. 资源与算力

论文中明确说明：
- 训练Mapper时从LAION-400M中随机采样了1000万对图文数据。
- 未具体说明使用的GPU型号数量或训练时长。
- 但强调Mapper为轻量网络（bottleneck结构），参数少，训练成本较低。

## 5. 实验数量与充分性

**实验数量**：
- 公平性评估（Table 2）：覆盖3个核心数据集（FACET、PATA、Flickr30K）外加3个通用数据集（FairFace、MS-COCO、Pascal-Sentence），每个数据集分别评估性别、种族、年龄三个敏感属性。在每个设定下报告4个Skew指标，每个结果统计了重复运行。
- 性能评估（Table 3）：报告了FACET、ImageNet分类准确率以及Flickr30K检索召回率，各方法重复运行并给出均值±标准差。
- 消融实验（Figure 4）：考察损失权重λ从0到1变化对公平性和性能的影响。
- 可视化（Figure 3）：GradCAM热力图对比原始CLIP与CABIN的注意力差异。

**充分性**：
- 实验覆盖了多个数据集、多个敏感属性、两个主干网络、两种任务（分类+检索），对比了主流去偏方法。
- 使用了统计显著性检验（配对t检验+Holm-Bonferroni校正），结果p<0.05，说明差异显著。
- 参数敏感性分析展示了权衡，但仅测试了λ=0、0.5、1三个点，未做更细粒度搜索。

总体而言，实验较为充分、客观，结果一致性高；但在超参数调节和更多真实场景验证上仍有拓展空间。

## 6. 论文的主要结论与发现

- CABIN在所有数据集和敏感属性上持续降低了Skew偏差（MaxSkew下降、MinSkew上升），显著优于Vanilla CLIP、DeAR和SFID。
- 在保持准确性和召回率方面，CABIN与原始CLIP几乎持平，仅轻微下降（远小于其他去偏方法），实现了公平性与性能的良好平衡。
- 可视化表明CABIN使模型注意力从面部等敏感特征转向任务相关区域（如医疗器具、运动场景）。
- 后门调整框架可任务无关地应用于分类和检索，无需重新训练。

## 7. 优点

1. **因果框架清晰**：用SCM建模偏差来源，后门调整理论严谨。
2. **无依赖面部数据集**：Mapper仅使用通用图文对训练，避免过拟合，泛化性强。
3. **任务无关性**：同一套权重可同时用于分类和检索，无需针对任务修改。
4. **轻量高效**：仅需一个轻量Mapper和简单投影操作，不需模型微调或重训练。
5. **多属性支持**：能同时处理性别、种族、年龄等多种敏感属性。
6. **实证充分**：在多个数据集、两个架构、多种指标上验证，统计检验显著。

## 8. 不足与局限

1. **实验覆盖局限**：
   - 仅测试了CLIP模型，未验证在其他VLM（如ALIGN、BLIP）上的有效性。
   - 未涉及视频、VQA、图像生成等任务，尽管声称任务无关，但仅验证了分类和检索。
2. **偏差风险**：
   - 方向向量基于有限且固定的属性类别对，可能遗漏其他隐性敏感属性（如肤色、发型）。
   - 属性先验概率来自测试集分布，若测试集分布有偏，可能引入新偏差。
3. **参数依赖**：Mapper训练的超参数（λ、边缘μ、训练数据量）需手动或PCGrad自动平衡，对结果敏感。
4. **计算量**：虽然Mapper轻量，但需要大规模图文对（1千万）训练，仍有成本。
5. **应用限制**：假设图像中敏感属性可通过文本模拟提取，对于非人像任务（如物体识别中的场景偏见）可能不适用。
6. **未开源**（论文声称代码已公开，但分析时需确认实际可用性）。

（完）

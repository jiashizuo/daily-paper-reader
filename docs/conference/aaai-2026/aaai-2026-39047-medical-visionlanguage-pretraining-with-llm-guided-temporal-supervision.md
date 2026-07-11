---
title: Medical Vision–Language Pretraining with LLM-Guided Temporal Supervision
title_zh: 基于LLM引导的时间监督的医学视觉语言预训练
authors: "Liang Bai, Zhi Wang, Huimin Yan, Xian Yang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/39047/43009"
tags: ["query:mlr"]
score: 8.0
evidence: 基于LLM时间监督的医学视觉语言预训练
tldr: 针对医学视觉语言预训练忽略时间线索的问题，提出TAMM框架，利用大语言模型自动生成粗粒度趋势标签和细粒度推理文本，注入时间语义。无需人工标注即可引导视觉语言对齐，增强对临床进展的理解。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 现有医学视觉语言预训练依赖静态图文对，缺乏时间线索，限制了临床推理能力。
method: 提出TAMM，利用LLM从相邻临床报告中生成趋势标签和推理文本，作为弱监督信号进行视觉语言对齐。
result: 在多个医学影像数据集上，TAMM提升了时间敏感的临床推理性能。
conclusion: 利用LLM自动生成的时间监督可有效增强医学视觉语言模型对临床进展的理解。
---

## Abstract
Medical vision–language pretraining typically relies on static image–text pairs, overlooking temporal cues vital for understanding clinical progression. This limits model sensitivity to evolving semantics and reduces their effectiveness in real-world clinical reasoning. To address this challenge, we propose TAMM—a temporal alignment framework that leverages weak but semantically rich supervision from large language models (LLMs). Given temporally adjacent clinical reports, LLMs automatically generate (i) coarse-grained trend labels (e.g., improving or worsening), and (ii) fine-grained rationales explaining the supporting clinical evidence. These complementary signals inject temporal semantics without requiring manual annotation, and guide vision–language representation learning to capture trend-sensitive cross-modal alignment and rationale-grounded coherence. Experiments on multiple medical benchmarks demonstrate that TAMM improves retrieval and classification performance while yielding more interpretable, temporally consistent embeddings. Our results highlight the potential of leveraging LLM-derived supervision to equip vision–language models with temporal awareness critical for clinical applications.

---

## 论文详细总结（自动生成）

# 基于LLM引导的时间监督的医学视觉语言预训练（TAMM）——详细中文总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：现有医学视觉语言预训练（VLP）方法多依赖静态的单次就诊图文对，忽略了临床实践中至关重要的时间线索（如病情进展、恢复或恶化）。这导致模型对演化语义不敏感，限制了其在真实临床推理中的有效性。
- **研究动机**：临床诊断常需比较前后影像与报告以追踪疾病变化，但人工标注时间趋势成本高、不一致且难以规模化。论文旨在利用大语言模型（LLM）从相邻临床报告中自动生成弱监督信号，注入时间语义，使视觉语言模型能够捕捉时序动态。
- **整体含义**：通过LLM生成的粗粒度趋势标签和细粒度推理文本，为跨时间点的图文对齐提供语义指导，无需人工标注，从而提升模型在时序推理任务上的表现和可解释性。

## 2. 论文提出的方法论：核心思想与关键技术细节

### 核心思想
TAMM（Temporal Alignment for Medical vision–Language Modeling）框架，利用LLM从相邻报告对中提取两种互补的时间监督信号：
- **粗粒度趋势标签**：改善（+1）、稳定（0）、恶化（-1）
- **细粒度推理文本**（rationale）：描述支持该趋势的临床证据（例如“肺不透明度减小”）

这些信号通过三个关键模块融入预训练：

### 关键技术细节
1. **LLM引导的时间信号提取**  
   - 对每对相邻报告 (T<sub>i,t</sub>, T<sub>i,t+1</sub>)，用LLM生成趋势标签 y<sub>i,t</sub> 和 rationale s<sup>reason</sup><sub>i,t</sub>。  
   - 采用**双向提示策略**：同时询问逆序报告对得到反事实标签 y<sup>counter</sup><sub>i,t</sub>，仅保留满足 y<sup>counter</sup> = -y 的方向一致性样本，过滤噪声。

2. **趋势感知表示对齐（Trend-Aware Representation Alignment）**  
   - 使用图像编码器（ViT-B/16）和文本编码器（Bio-ClinicalBERT）提取全局和细粒度特征。  
   - 计算相邻时刻的表示差分：Δx = x<sup>g</sup><sub>i,t+1</sub> - x<sup>g</sup><sub>i,t</sub>，Δr 类似。  
   - 将差分向量送入共享的趋势分类器，预测三类趋势，与LLM伪标签计算交叉熵损失（L<sup>trend</sup><sub>img</sub> 和 L<sup>trend</sup><sub>text</sub>），平均得到 L<sub>trend</sub>。

3. **推理条件的时间表示学习（Rationale-Conditioned Temporal Representation Learning）**  
   - 将前向和后向的 rationale 编码为语义嵌入 e<sup>reason</sup> 和 e<sup>counter</sup>。  
   - 利用视觉语言融合模型 f<sub>VLM</sub>，基于 rationale 嵌入预测相邻时刻的图像 patch 特征（如 ˆX<sub>i,t+1</sub> = f<sub>VLM</sub>(X<sub>i,t</sub>, e<sup>reason</sup>)）。  
   - 双向对齐损失 L<sub>consistency</sub>（L2距离）强制预测特征与实际特征一致。

4. **整体目标**  
   - 结合CLIP风格的全局对比损失 L<sub>global</sub>（InfoNCE）和时序损失 L<sub>temporal</sub> = L<sub>trend</sub> + λ<sub>cons</sub> L<sub>consistency</sub>，总损失 L<sub>total</sub> = L<sub>global</sub> + L<sub>temporal</sub>。  
   - 趋势标签和rationale作为软约束（非硬标签），降低噪声敏感度。

## 3. 实验设计：数据集、基准与对比方法

### 预训练数据
- **MIMIC-CXR**：胸部X光影像和自由文本报告，按患者整理为序列（最多连续4次就诊），共约92,255个序列。

### 下游任务与基准
| 任务类型 | 数据集 | 评价指标 |
|----------|--------|----------|
| 跨模态检索 | MIMIC-5×200 | P@1, P@2, P@5, P@10（双向） |
| 零样本分类 | RSNA Pneumonia, COVIDx | Accuracy, F1 |
| 时间图像分类 | Chest ImaGenome → MS-CXR-T | 对5种病理的宏观准确率 |
| 时间句子相似性分类 | MS-CXR-T (RadGraph子集) | Accuracy（零样本） |

### 对比方法
- **非时序模型**：MGCA, MedCLIP, PRIOR, MAVL, CARZero  
- **时序模型**：Med-ST, ALTA

## 4. 资源与算力
- **GPU**：4块 NVIDIA A40 GPU  
- **训练轮数**：8 epochs  
- **优化器**：AdamW（权重衰减 1×10<sup>-6</sup>）  
- **学习率**：初始 1×10<sup>-5</sup>，余弦退火调度（40% warm-up），最终 1×10<sup>-8</sup>  
- **图像预处理**：缩放至256×256，随机裁剪至224×224  
- **初始化**：使用预训练MGCA权重加速收敛

（论文明确说明了算力资源。）

## 5. 实验数量与充分性
- **主要实验组**：共6个表格/图，涵盖：  
  - 标准视觉语言基准（交叉检索、零样本分类）  
  - 时序理解任务（时间图像分类、时间句子相似性）  
  - 消融研究（移除各损失项对时序任务的影响）  
  - 敏感性分析（λ<sub>cons</sub> 对检索精度的影响）  
  - 案例研究（检索结果定性对比）
- **重复性**：需微调的任务（零样本分类、时间图像分类）使用3个不同随机种子并报告均值±标准差；无需微调的任务（检索、句子相似性）仅报告单次结果（因零样本推理无训练随机性）。
- **充分性**：实验覆盖了主流基准和时序特有任务，消融验证了各组件贡献，敏感性分析合理选取超参数；对比方法包括最先进的非时序和时序模型，实验设置公平。但缺少跨数据集泛化测试（如使用不同医院数据）及在更大规模时序数据集上的验证；另外，仅使用MIMIC-CXR预训练，未验证在其他影像模态（如CT、MRI）的适用性。

## 6. 论文的主要结论与发现
- TAMM在所有标准视觉语言任务和时序任务上均超越基线，尤其显著提升了时序理解能力（时间图像分类提升5-10%，句子相似性提升5%以上）。
- 消融表明：趋势对齐损失对时序任务贡献最大，一致性损失次之，全局对齐损失影响相对较小，但三者互补。
- LLM生成的伪标签尽管存在噪声，但通过双向一致性过滤和软约束设计，有效增强了模型的时间敏感性和可解释性。
- 案例研究显示TAMM能够检索到语义更匹配的影像和报告，减少误诊（如将心肥大误判为胸腔积液）。

## 7. 优点
- **方法创新**：首次将LLM生成的时间趋势标签和rationale作为弱监督信号用于医学视觉语言预训练，无需人工标注。
- **双向验证**：LLM提示时采用方向一致性检查，减少噪声，提高标签质量。
- **软约束设计**：趋势标签和rationale不作为硬目标，而是通过对比和重构损失融入，增强对噪声的鲁棒性。
- **全面实验**：涵盖标准基准和时序特有任务，消融和敏感性分析充分，结果一致性高。
- **可解释性**：rationale引导的表示学习使模型能关注临床相关的文本变化，提升语义对齐的透明性。
- **性能提升显著**：在多个任务上达到或接近最优，尤其时序任务提升幅度大。

## 8. 不足与局限
- **实验覆盖有限**：仅使用MIMIC-CXR一个预训练数据集，未评估在其他医院或影像模态（如CT、MRI）的泛化能力；时序任务仅涉及胸部X光，未扩展到更广泛的医学领域。
- **偏差风险**：LLM生成的伪标签可能继承训练数据中的偏见（如对某些疾病或人群的倾向），论文未分析这种偏差对下游公平性的影响。
- **时序序列长度限制**：预训练仅使用最多4次连续就诊，无法建模更长程的病情变化（如慢性病数年随访）。
- **计算资源**：虽然报告了GPU数量和训练轮数，但未说明单次训练耗时、模型参数量（ViT-B/16 + Bio-ClinicalBERT 规模已知），也缺少对推理速度的评估。
- **对比方法选择**：仅对比了少量近年方法，未与更近期的医学VL预训练模型（如Temporal Med-CLIP变体）比较；另外，时序基线Med-ST和ALTA设计目标不完全一致，可能未完全公平对比。
- **无交叉验证**：由于预训练和下游任务共用同一数据源（MIMIC-CXR），存在数据泄漏风险？论文声称使用不相交的基准数据集（如MIMIC-5×200为子集），但需要更明确的独立性说明。
- **实际部署考虑**：未讨论模型在低资源环境（如无GPU）或实时临床场景中的可行性。

（完）

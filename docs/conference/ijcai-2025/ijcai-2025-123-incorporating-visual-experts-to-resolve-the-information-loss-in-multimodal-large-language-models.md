---
title: Incorporating Visual Experts to Resolve the Information Loss in Multimodal Large Language Models
title_zh: 融入视觉专家以解决多模态大语言模型的信息损失
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0123.pdf"
tags: ["query:mlr"]
score: 4.0
evidence: 融入视觉专家模型以解决多模态大语言模型的信息损失
tldr: 提出将视觉专家模型融入多模态大语言模型，以解决视觉信息在跨模态传递中的损失问题。通过引入预训练的视觉专家模块，模型能更好地保留细粒度视觉特征，在图像描述、视觉问答等任务上取得性能提升。该方法不局限于医疗领域，但可迁移至医学视觉语言模型。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-123/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 876, \"height\": 650, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-123/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1819, \"height\": 780, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-123/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1548, \"height\": 385, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-123/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 864, \"height\": 221, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-123/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 861, \"height\": 250, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-123/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1581, \"height\": 248, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-123/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 841, \"height\": 196, \"label\": \"Table\"}]"
motivation: 现有MLLM在视觉信息压缩后丢失关键细节，影响下游视觉理解任务。
method: 在MLLM中插入视觉专家模块，该模块直接提供原始视觉特征以补充信息损失。
result: 在多个视觉语言基准上提高了准确率，特别是在需要细粒度视觉理解的场景中。
conclusion: 融入视觉专家可有效缓解MLLM的信息损失问题，为构建更强大的医学视觉语言模型提供技术参考。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

# 论文《Incorporating Visual Experts to Resolve the Information Loss in Multimodal Large Language Models》详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）

- **问题**：当前多模态大语言模型（MLLMs）普遍采用 CLIP 类视觉编码器提取图像特征，但 CLIP 训练于简短的图像-文本对，仅能捕获粗粒度语义，导致大量视觉细节（如小物体、位置、文档文字等）丢失，形成“信息损失”困境。
- **背景**：虽然数据驱动方法（如 LLaVA、MiniGPT-4、mPLUG-DocOwl 等）通过收集各类指令数据提升了下游性能，但均未从根本上解决视觉感知能力受限的问题。已有部分工作（如 LLaMA-Adapter v2）仅将视觉工具用于推理阶段，未充分利用其信息并忽视工具引入的噪声。
- **整体含义**：本文提出一种新的视觉感知增强框架 IVE，通过混合专家机制聚合多种视觉专家（多编码器 + 显式结构化知识），在训练和推理阶段共同补充被 CLIP 遗漏的视觉信息，从而在更广泛的多模态对话任务中取得性能提升。

## 2. 方法论

### 核心思想
在标准 MLLM 流水线中嵌入两个互补模块：
- **多任务编码器**：融合多个专用视觉编码器的潜在嵌入，以互补方式捕获全局语义、低层细节和文档相关特征。
- **结构知识增强模块**：利用现成视觉工具（物体检测器、OCR）提取图像中的显式结构信息（物体类别、边框、文本），作为先验知识输入 LLM，并在训练时让 LLM 学会去噪利用。

### 关键技术细节

#### (a) 多任务编码器
- **语义信息编码器**：使用 EVA-CLIP_g + Q-Former，提取全局语义，输出 m 个查询嵌入。
- **低层信息编码器**：使用 VQGAN 编码器 + Perceiver Resampler，提取像素级细节，输出 n 个嵌入（本文 n=32）。
- **文档相关信息编码器**：使用 Pix2Struct-Large 编码器 + 6 层 Perceiver Resampler，输出 k 个嵌入（本文 k=64）。
- **融合**：三个编码器输出的嵌入分别通过线性投影层对齐到共同语言特征空间，然后拼接为最终潜在嵌入 \( f_{lxi} \)。

#### (b) 结构知识增强
- **工具**：RAM（识别物体类别） + Grounding DINO（定位边框）→ 得到实例列表 [(c0, x0, y0, x1, y1), ...]；EasyOCR → 得到文本列表 [t0, t1, ...]。
- **处理**：将上述结构化数据按模板格式化为文本字符串，与潜在嵌入一同送入 LLM。
- **关键创新**：结构知识在**训练阶段**即被引入，而非仅推理阶段。这使 LLM 学会抑制工具引入的噪声，提取有用信息。

#### (c) 训练流水线（三阶段）
1. **预训练**：仅训练语义信息编码器中的 Q-Former 和投影层，使用 3 亿图像-文本对和 LLaVA-CC3M-Pretrain-595K。其他编码器冻结，输入分辨率 224×224。
2. **多任务微调**：使用 LoRA（秩=64）微调 LLM，同时训练 Q-Former、Perceiver Resampler 及其投影层。输入分辨率提高（语义 448×448、低层 256×256、文档 1024×1024）。优化器 AdamW，余弦学习率。
3. **特定微调**：在特定任务训练集上进一步微调，以适应其独特分布。

## 3. 实验设计

### 使用的数据集
- **训练**：预训练阶段 3 亿图像-文本对 + LLaVA-CC3M-Pretrain-595K；多任务阶段包含通用 VQA（VQAv2、OKVQA）、OCR VQA（TextVQA、OCRVQA）、文档/图表 VQA（DocVQA、ChartQA、WTQ）、指代表达（RefCOCO）、图像描述（COCO Caption）以及指令数据（LLaVA-Instruct-150K）。
- **评估**：VQAv2 test、OKVQA test、TextVQA val、OCRVQA test、DocVQA val、ChartQA test、WTQ test、MME Benchmark。

### 对比方法
BLIP-2、InstructBLIP、Shikra、mPLUG-DocOwl、Qwen-VL-Chat、LLaVA-1.5、mPLUG-Owl2、SPHINX-Intern2、CogVLM、GIT2、Pix2Struct-Large 等。

### 评价指标
分类准确率（Acc）；MME 分为 Perception 和 Cognition 两个子分数。

## 4. 资源与算力

论文**未明确说明**使用的 GPU 型号、数量及训练总时长。仅在实现细节中提及批次大小（预训练阶段全局批次 2048）、学习率策略和优化器。未提供硬件配置。

## 5. 实验数量与充分性

共进行了以下主要实验：
- **直接传输性能**（表 1）：在 7 个 VQA 基准上与 8 种 SOTA 对比，覆盖通用、OCR、文档/图表三类任务。
- **微调性能**（表 2）：在 4 个 VQA 数据集上与 5 种专用模型对比。
- **MME 评估**（表 3）：与 4 种模型比较感知和认知子任务得分。
- **消融实验**（表 4、5）：分别验证多任务编码器的三个组件（语义→+低层→+文档）、结构知识增强的两种使用策略（仅推理 vs. 训练+推理），以及使用真实标签替换检测结果以验证去噪效果。

**充分性评价**：实验覆盖全面，消融设计合理（逐步添加组件、对比策略差异、噪声控制验证），比较对象均为同期 SOTA，结果统计清晰。但缺少在更大规模 LLM（如 13B/70B）上的验证，也未报告统计显著性测试。

## 6. 主要结论与发现

1. **融合多任务编码器显著提升**：逐步添加低层编码器和文档编码器后，在几乎所有 VQA 基准上均有提升，尤其文档相关任务（ChartQA +3.1%，DocVQA +2.1%）。
2. **结构知识增强必须在训练阶段引入**：仅推理时加入会导致性能下降（如 VQAv2 -1.0%，OKVQA -0.4%），而训练+推理则带来稳定提升（如 OKVQA +2.3%，ChartQA +3.5%），证明 LLM 学会了去噪。
3. **使用真实标签时两种策略差距缩小**（表 5）：说明学习去噪而非简单对齐格式是 IVE 效果的关键。
4. **整体对比**：在 7B 参数规模下，IVE 在 OKVQA（60.3%）、TextVQA（62.0%）、DocVQA（64.1%）等任务上超越或持平 Qwen-VL-Chat、LLaVA-1.5 等基线。

## 7. 优点

- **创新性**：首次系统性地在 MLLM 训练和推理阶段同时引入多种视觉专家（多编码器 + 结构化工具），与仅用推理或单一专家的做法形成对比。
- **信息互补设计**：语义、低层、文档三种编码器从不同粒度捕获信息，显式结构化知识提供可解释的先验。
- **噪声处理策略**：通过在训练阶段引入工具输出，让 LLM 自主过滤噪声，实用性强。
- **实验完整性**：消融实验清晰揭示了各组件贡献和训练策略差异，并设计了标签替换实验验证机制而非简单对齐。
- **实用性好**：额外参数仅 979M（约总参数 7B 的 14%），计算开销可控。

## 8. 不足与局限

- **计算资源未报告**：缺乏 GPU 类型、数量、训练时间等硬件信息，影响可复现性评估。
- **专家类型有限**：仅使用了三种编码器和三种工具，未来可探索更多专用专家（如分割、3D、医学图像等）。
- **模型规模单一**：仅在 7B LLM 上实验，未验证在更大模型上的扩展性。
- **图表/文档图像的特殊处理**：对图表和文档图像自动过滤检测结果，引入人工先验，可能限制了通用性。
- **潜在偏差风险**：使用的工具（RAM、Grounding DINO、EasyOCR）自身可能存在识别错误或偏见，这些错误可能被 MLLM 学习或放大。
- **统计显著性未报告**：虽数值提升，但未提供置信区间或 p 值，部分提升可能不显著。
- **应用限制**：对中文、医学等特定领域未做测试，需进一步验证迁移性。

（完）

---
title: "MultiMedBench: A Scenario-Aware Benchmark for Evaluating Knowledge Editing in Medical VQA"
title_zh: MultiMedBench：面向医学视觉问答知识编辑的场景感知基准
authors: "Shengtao Wen, Haodong Chen, Yadong Wang, Zhongying Pan, Xiang Chen, Yu Tian, Bo Qian, Dong Liang, Sheng-Jun Huang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40679/44640"
tags: ["query:mlr"]
score: 6.0
evidence: 医学视觉问答知识编辑基准
tldr: 本文针对医学视觉问答中知识编辑评估缺失的问题，提出首个多模态医学知识编辑基准MultiMedBench。该基准涵盖理解与推理两类任务，定义可靠性、通用性和局部性三维指标，并支持跨范式评估。实验揭示了现有模型在多模态医学知识更新中的不足，为医疗多模态领域的后续研究提供了标准化测试平台。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 医学多模态场景下知识编辑评估缺乏，现有阅读器在视觉推理方面存在不足。
method: 构建MultiMedBench，包含理解与推理任务，定义三维指标支持跨范式评估。
result: 实验揭示了现有模型在多模态医学知识更新中的不足。
conclusion: MultiMedBench为医学多模态知识编辑提供了标准化评估平台。
---

## Abstract
Knowledge editing (KE) provides a scalable approach for updating factual knowledge in large language models without full retraining. While previous studies have demonstrated effectiveness in general domains and medical QA tasks, little attention has been paid to KE in multimodal medical scenarios. Unlike text-only settings, medical KE demands integrating updated knowledge with visual reasoning to support safe and interpretable clinical decisions. To address this gap, we propose MultiMedBench, the first benchmark tailored to
evaluating KE in clinical multimodal tasks. Our framework spans both understanding and reasoning task types, defines a three-dimensional metric suite (reliability, generality, and locality), and supports cross-paradigm comparisons across general and domain-specific models. We conduct extensive experiments under single-editing and lifelong-editing settings. Results suggest that current methods struggle with generalization and long-tail reasoning, particularly in complex clinical workflows. We further present an efficiency analysis (e.g., edit latency, memory footprint), revealing practical trade-offs in real-world deployment across KE paradigms. Overall, MultiMedBench not only reveals the limitations of current approaches but also provides a solid foundation for developing clinically robust knowledge editing techniques in the future.

---

## 论文详细总结（自动生成）

# 论文详细中文总结

## 1. 核心问题与整体含义（研究动机和背景）
- **核心问题**：现有知识编辑（KE）研究主要集中在通用领域或纯文本医学问答，缺乏对**多模态医学场景**（如结合图像与文本的临床诊断）中知识编辑的系统性评估。
- **研究动机**：医疗领域知识更新频繁（新疗法、指南修订），多模态大模型（MLLMs）若仅依赖静态训练数据会逐渐过时；而传统微调代价高、易灾难性遗忘。知识编辑虽可在不重训模型下注入新知，但当前方法在**多模态融合、视觉推理、临床安全**方面评估缺失。
- **整体含义**：多模态医学知识编辑需要模型不仅记住新事实，还要能结合图像理解、时空推理，且编辑行为必须可追溯、副作用可控。为此，作者提出首个专用基准**MultiMedBench**，旨在系统暴露现有方法缺陷，推动临床稳健的KE技术发展。

## 2. 论文提出的方法论
### 核心思想
- 构建包含**理解（Understanding）** 与**推理（Reasoning）** 两类任务的多模态医学VQA数据集，并设计**三维评价指标**（可靠性、通用性、局部性）来衡量编辑效果与副作用。
- 通过**零样本过滤**策略保留仅让模型答错的样本，确保评估聚焦于模型缺陷，提高区分度。

### 关键技术细节
1. **任务设计**：
   - **理解**：基于单帧或少量图像，结合临床描述进行病灶定位、特征分析等。
   - **推理**：基于多帧或多视图图像，进行跨时间、多角度推理（如疾病进展、治疗评估）。
   - 每种任务包含**单帧（Single-frame）** 和**多帧（Multi-frame）** 模态输入。

2. **数据构建流程**（图3）：
   - **可靠性子集**：来自MedFrameVQA（推理）和PMC-VQA（理解）的原始样本，经Radiology-Infer-Mini零样本过滤得到模型答错样本。
   - **通用性子集**：使用DeepSeek-v3对原问题改写语义等价变体。
   - **局部性子集**：文本局部性来自Natural Questions，视觉局部性来自VQAv2（通用域自然图像）。

3. **编辑方法选择**：
   - **Prompt**：通过输入提示注入知识，不修改参数。
   - **LoRA**：低秩适配器微调语言部分。
   - **WISE**：外部记忆增强，通过可寻址内存覆盖旧知识。
   - **GRACE**：参数注入，添加新参数矩阵编码知识。
   - 所有编辑仅应用于**语言组件**，视觉编码器冻结。

4. **评价指标**：
   - **可靠性（Reliability）**：编辑后模型在目标样本上的准确率。
   - **通用性（Generality）**：在语义等价位上的准确率。
   - **局部性（Locality）**：在无关任务（文本/视觉）上的准确率保持度。

### 公式/算法流程（文字说明）
- 给定基础模型 \( f_\theta \)，编辑描述 \((x_e, y_e)\)，编辑后模型需满足：
  - 在编辑范围内（\(x_e\) 及其等价位）输出 \(y_e\)；
  - 在编辑范围外（无关输入）保持原预测。
- 单编辑测试立即评估；终身编辑按顺序注入50/250/500/750/1000条知识，观察性能稳定性。

## 3. 实验设计
### 使用的数据集/场景
- **基准数据集**：MultiMedBench（包含理解子集MultiMedBench_U和推理子集MultiMedBench_R）。数据来源：PMC-VQA、MedFrameVQA、MedXpertQA、OmniMedVQA。
- **场景**：单编辑（一次注入一个事实）和终身编辑（连续注入多个事实）。

### 对比方法
- **Prompt**、**LoRA**、**WISE**、**GRACE**，代表三类不同范式（外部引导、参数微调、记忆增强、参数注入）。

### 模型
- **通用MLLM**：LLaVA-OneVision、Qwen2-VL（均使用Qwen2-7B语言骨干，不同视觉编码架构）。
- **医学域MLLM**：HuatuoGPT-7B。

### 评估方式
- 表2：在三个模型上报告可靠性、通用性、文本局部性、视觉局部性。
- 图4：终身编辑下Qwen2-VL的可靠性/通用性变化曲线。
- 图6：效率分析（编辑时间、峰值GPU内存）。

## 4. 资源与算力
- **文中未明确说明**所使用的GPU型号、数量、训练时长。
- 仅提及**所有编辑方法仅应用于语言组件，视觉编码器冻结**，以及进行了效率分析（图6），但未给出具体硬件配置。
- 因此，无法评估其算力消耗的具体规模。

## 5. 实验数量与充分性
- **实验数量**：表2包含3个模型 × 4种方法 × 2种任务类型（理解/推理）× 单编辑设置，共24组主要结果。另有终身编辑实验（4种方法在1个模型上5个编辑数量点）和效率对比（4种方法2个指标）。
- **充分性**：
  - 覆盖了不同模型规模、不同编辑范式、单/多编辑场景，对比全面。
  - 但缺乏**消融实验**（如编辑层数、记忆容量对性能的影响），也**缺少在多模态融合组件上的干预实验**（仅编辑语言部分）。
  - 数据集来源均基于公开资源，且仅保留模型答错样本，可能引入**选择偏差**（编辑难度分布不均匀）。
- **公平性**：所有方法在相同条件下运行，视觉编码器冻结，确保可比性；但Prompt方法依赖模型本身推理能力，其他方法依赖参数修改，公平性基础存在差异。

## 6. 主要结论与发现
1. **整体性能差异显著**：Prompt在可靠性和通用性上表现好但对无关任务干扰大；参数化方法（LoRA、WISE、GRACE）局部性完美但通用性差，且效果依赖模型架构（如LoRA在QWen2-VL上崩溃）。
2. **理解 vs 推理**：编辑效果不仅受任务难度影响，更与方法-任务对齐有关。GRACE在推理任务上可靠性极高但通用性极低，暗示“记忆而非理解”。
3. **终身编辑**：参数化方法虽局部性保持完美，但可靠性和通用性出现**剧烈波动**（阶跃性遗忘），而Prompt虽稳定但局部性持续低下。存在“稳定但泄漏”与“可控但易变”的根本矛盾。
4. **效率**：Prompt在时间和内存上最轻量，LoRA最重（参数高效但计算开销大）；WISE和GRACE居中。

## 7. 优点
- **首创性**：首个专门面向多模态医学知识编辑的基准，填补领域空白。
- **系统化评价框架**：三维指标（可靠性、通用性、局部性）全面衡量编辑效果与副作用。
- **任务层次清晰**：理解与推理两层级覆盖基础视觉识别到复杂多步诊断推理。
- **跨范式对比**：涵盖Prompt、微调、记忆增强、参数注入等主流范式，分析深入。
- **效率分析**：指出实际部署中的时间/内存权衡，对临床应用有参考价值。
- **质量控制**：人工抽查20%样本，一致性<7%，保证了数据质量。

## 8. 不足与局限
- **任务类型较单一**：仅关注VQA，未涉及报告生成、多轮对话、知识图谱等更复杂的临床场景。
- **模型范围有限**：仅基于Qwen2-7B系列，未测试更大规模或不同架构的模型（如基于LLaMA3或GPT-4V级别）。
- **编辑机制解释性不足**：未分析编辑为何在不同任务上表现差异（如GRACE在推理上高可靠性但低通用性的内部机制）。
- **数据偏差风险**：零样本过滤只保留模型答错样本，编辑难度分布可能偏离真实临床分布；且所有样本来自英文数据集，缺乏中文或其他语言验证。
- **安全性评估缺失**：虽提及安全合规，但未定量评估编辑是否引入新的幻觉或违反医学伦理。
- **未覆盖3D/时序图像**：多帧任务仍为2D序列，未涉及CT/MR三维重建或超声视频等更复杂模态。
- **终身编辑实验仅在一个模型上（Qwen2-VL）进行**，结论普遍性受限。

（完）

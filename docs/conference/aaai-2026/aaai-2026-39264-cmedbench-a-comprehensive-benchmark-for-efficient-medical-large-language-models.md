---
title: "CMedBench: A Comprehensive Benchmark for Efficient Medical Large Language Models"
title_zh: CMedBench：高效医学大语言模型的综合基准
authors: "Shengbo Gao, Jinyang Guo, Lixian Su, Yifu Ding, Shiqiao Gu, Aishan Liu, Yuqing Ma, Zhiwang Zhang, Xianglong Liu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/39264/43225"
tags: ["query:mlr"]
score: 7.0
evidence: 压缩医学大语言模型的综合评估基准
tldr: 针对压缩模型在医疗场景下的评估缺失，提出CMedBench基准，从医学知识、应用能力、可信度、压缩组合和计算效率五个维度全面评估被压缩的医学大模型。实验揭示了压缩与性能的权衡，为部署高效医疗LLM提供指导。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 压缩技术可降低医疗LLM部署成本，但缺乏全面评估基准。
method: 构建CMedBench，包含五个核心维度的评估任务和多样化模型测试。
result: 通过大量实验分析了压缩对医疗LLM各方面的影响，发现了重要权衡。
conclusion: CMedBench为高效医疗LLM的评估和选择提供了可靠工具。
---

## Abstract
Large Language Models (LLMs) hold significant potential for enhancing healthcare applications, yet their deployment is hindered by high computational and memory demands. Model compression techniques offer solutions to reduce these demands, but their impact on medical LLMs remains underexplored. In this paper, we introduce CMedBench, the first comprehensive benchmark for evaluating compressed LLMs in medical contexts. CMedBench assesses five core dimensions: Medical Knowledge Ability, Medical Application Ability, Trustworthiness Maintenance, 
Compression Cross Combination, and Computational Efficiency. Through extensive empirical studies, we analyze the trade-offs between model efficiency and clinical performance across diverse models, datasets, and compression strategies. Our findings highlight critical limitations in current evaluation practices and provide a robust framework for aligning compression strategies with medical requirements. CMedBench serves as a vital resource for researchers and practitioners, guiding the development of efficient, trustworthy, and clinically effective LLMs for healthcare applications.

---

## 论文详细总结（自动生成）

# CMedBench: 高效医学大语言模型的综合基准

## 1. 核心问题与整体含义（研究动机和背景）

- **核心问题**：大型语言模型在医疗领域潜力巨大，但其高昂的计算和内存需求严重阻碍了在资源受限、隐私敏感的真实医疗环境中的部署。模型压缩技术是降低这些需求的可行方案，然而，压缩对医学LLM在知识、应用、可信度和效率等多方面的影响尚未得到系统研究。
- **主要挑战**：
    - **挑战1 - 碎片化医学评估**：现有评估仅关注孤立的医学任务，未能涵盖医学应用对高级推理、跨学科沟通、可信赖性（如真实性、隐私性、鲁棒性）等多样化要求。
    - **挑战2 - 压缩医学LLM评估缺失**：模型压缩对部署至关重要，但缺乏标准化的评估框架来指导在不同医疗场景（如临床诊断、远程医疗、实时监测）中找到最佳的性能-效率平衡。
- **研究动机**：填补上述空白，提供一个全面的基准来系统评估压缩对医学LLM的影响。

## 2. 方法论：核心思想、关键技术细节、公式与流程

- **核心思想**：构建一个多维度、系统化的基准框架——**CMedBench**，用于全面评估被压缩的医学LLM。该框架不仅关注任务性能，更强调部署可行性和可信度。
- **五大评估维度（Tracks）**：
    1.  **Track 1: Medical Knowledge Ability (医学知识能力)**
        - 评估基础医学知识（GMK）、高级医学知识（AMK）和生物医学文献理解（BLC）。
        - **关键指标：压缩性能分数 (CPS)**
          $$CPS = \frac{1}{NT} \sum_{n,t} \log_2 \left(1 + \frac{Pc_{n,t}^{\text{task}}}{P_{n,t}^{\text{task}}}\right)$$
          - 其中 \( P_{n,t}^{\text{task}} \) 是原模型在任务 t 上的性能，\( Pc_{n,t}^{\text{task}} \) 是压缩模型的性能。使用 \(\log_2(1+x)\) 变换来防止极端值扭曲整体分数。
    2.  **Track 2: Medical Application Ability (医学应用能力)**
        - 评估跨学科医学解释（AME）、临床诊断辅助（CDA）和专家级理解与推理（EUR）。
        - 同样采用 **CPS** 指标，评估模型在复杂场景下应用知识的能力。
    3.  **Track 3: Trustworthiness Maintenance (可信度维护)**
        - 评估真实性、安全性、隐私性、伦理性、鲁棒性和公平性六个方面。
        - **关键指标：可信度分数 (TWY)**
          $$TWY = \frac{1}{NT} \sum_{n,t} \exp\left[ d_{\text{sub}}^n \cdot (Pc_{\text{sub}_{n,t}} - P_{\text{sub}_{n,t}})\right]$$
          - 使用 \(\exp(x)\) 变换并引入任务特定指数 \( d_{\text{sub}}^t \) 确保非负和公平评估。
    4.  **Track 4: Compression Cross Combination (压缩交叉组合)**
        - 评估不同压缩策略在不同模型架构和规模上的性能。量化模型规模、架构对压缩敏感性的影响。
        - **关键指标：交叉组合分数 (CCS)**
          $$CCS = \frac{1}{NM} \sum_{n,m} \log_2 \left(1 + \frac{Pc_{\text{set}_{n,m}}}{P_{\text{set}_n}}\right)$$
          - 评估特定模型 (n) 在特定压缩方法 (m) 下的性能保持情况。
    5.  **Track 5: Computational Efficiency (计算效率)**
        - 评估计算资源消耗（VRAM、参数Bits）和推理加速（TTFT首令牌时间、ACT平均完成时间、TPS每秒令牌数）。
        - **关键指标：计算效率分数 (CES)**
          $$CES = \frac{1}{NT} \sum_{n,t} \frac{Pc_{\text{eff}_{n,t}}}{P_{\text{eff}_{n,t}}}$$
          - 直接比较原模型与压缩模型在效率指标上的提升比例。

## 3. 实验设计

- **使用的数据集**：
    - **Track 1 (医学知识)**：MMLU-Health, MedQA, PubMedQA.
    - **Track 2 (医学应用)**：MedexQA, MedMCQA, CareQA, MedBullets, Jmed, MedXpertQA（包含多个子集如BE、CLS、CP、OT、SP、R、U）。
    - **Track 3 (可信度)**：TrustLLM框架下的真实性、安全性、隐私性、伦理性、鲁棒性、公平性相关数据集。
    - **Track 4 (压缩组合)**：MMLU-Health。
    - **Track 5 (效率)**：在A800 GPU上使用vLLM框架测量。
- **基准与模型**：
    - 核心测试模型（Track 1-3）：Meditron-7B, HuatuoGPT-o1-8B, LLaMA3-8B, Qwen2.5-7B。
    - 跨规模测试模型（Track 4）：LLaMA3, LLaMA3.1, Qwen2.5, HuatuoGPT-o1, Meditron 系列（7B ~ 72B参数）。
- **对比的压缩方法**：
    - **量化 (Weight-only Quantization)**：GPTQ（4bit, 8bit）, AWQ（4bit, 8bit）。
    - **量化 (Weight-Activation Quantization)**：SmoothQuant（4bit, 8bit）。
    - **非结构化稀疏 (Unstructured Sparsity)**：Wanda（50%, 75%稀疏度）。
    - **结构化稀疏 (Structured Sparsity)**：ShortGPT（约25%层被剪枝）。

## 4. 资源与算力

- 论文明确提到用量化效率评估是在 **A800 GPU** 上使用 **vLLM** 框架进行的。但**未明确说明**训练或评估所消耗的具体算力总量（如GPU数量、总训练时长）。该研究主要聚焦于**训练后压缩**，因此主要开销在评估阶段，而非训练阶段。具体的资源消耗细节在文中提及较少。

## 5. 实验数量与充分性

- **实验数量**：非常充分。覆盖了 **14个模型架构**（多种规模），**31个数据集**（来自5个维度，其中Track 2就包含11个子数据集），以及**11种不同的压缩设置**。实验报告了详细的结果表格（如表1、2、3）和可视化图表（图2、3）。
- **充分性与客观性**：
    - 实验设计**非常全面**，从多个角度（知识、应用、可信度、效率、架构敏感性）评估了压缩影响。
    - **公平性**：论文指出所有压缩方法的超参数都遵循官方配置以确保原始实现保真度。
    - 各维度内部的实验结果呈现清晰（如CPS/CCS值和归一化比率），便于对比和发现趋势。

## 6. 主要结论与发现

- **重量级量化（AWQ/GPTQ）效果最佳**：4位或8位重量级量化在大幅提升计算效率（显著减少VRAM和加速推理）的同时，能**近乎无损地保持**医学知识、应用能力和大部分可信度（如真实性、安全性、伦理性）。推荐在部署时采用。
- **权重-激活量化（SmoothQuant）在低比特下表现不佳**：在4位设定下，SmoothQuant性能显著下降，表明激活值压缩仍是一个挑战。
- **非结构化稀疏（Wanda）性能保持较好但加速受限**：Wanda在50%稀疏度下性能保持尚可，但由于主流框架（如vLLM）缺乏对稀疏算子的硬件支持，其**效率提升有限**。
- **结构化稀疏（ShortGPT）性能损失大，但对大模型更友好**：ShortGPT导致严重的性能下降，尤其是对小模型。然而，随着模型规模增大，大模型展现出更强的韧性，表明大模型具有更多**层冗余**。
- **可信度呈现分化趋势**：真实性和安全性、伦理性的变化趋势与性能保持一致。**鲁棒性和公平性**出现不可预测的变化（公平性甚至有提升趋势），强调了需要系统性评估。
- **架构敏感性**：基于相同基础架构的模型对压缩展现出**相似的敏感性**。例如，基于LLaMA3.1/LLaMA3的模型压缩表现与基于Qwen2.5的模型不同。

## 7. 优点

1.  **首创性**：CMedBench是首个专门针对医疗场景中**压缩LLM**的综合评估基准，填补了领域空白。
2.  **评估维度全面**：不仅关注任务性能（知识/应用），还首次系统地评估了传统评估忽略的**可信度**和**计算效率**，与临床部署需求紧密结合。
3.  **设计细致合理**：提出了多个专用指标（CPS, TWY, CCS, CES），通过非线性变换（log, exp）来处理性能比率，避免了部分极端值的影响，使得评估结果更鲁棒和可解释。
4.  **实验规模宏大**：覆盖了多种代表性模型、压缩方法和大量数据集，提供了丰富且可比的实验结果。Track 4（交叉组合）的设计非常有价值，揭示了模型架构、规模与压缩策略之间的相互作用。
5.  **实用指导性强**：明确给出了针对不同场景的部署建议（如优先使用重量级量化），可直接指导从业人员选择压缩方案。

## 8. 不足与局限

1.  **方法覆盖不全面**：如论文自身所述，主要聚焦于 **训练后压缩**（Post-training quantization/sparsity）技术，未涵盖更广泛的压缩方法，如知识蒸馏、低秩分解（LoRA等）、渐进式剪枝等。迅速发展的压缩领域可能有其他有效方案未被评估。
2.  **效率评估的侧重**：计算效率评估主要针对**量化**方法。对于稀疏化方法，由于硬件支持不足，其实际的效率提升潜力（尤其是在优秀算子支持下的潜力）未被充分展现，可能低估了类似Wanda等方法的实际效益。
3.  **公平性/鲁棒性评估的局限性**：虽然评估了可信度，但在鲁棒性和公平性方面的评价维度可能不够深入，例如未具体说明测试的后门攻击或特定的公平性偏见测试集。观察到的公平性“提升”可能源于小样本或特定测试集，结论的泛化性有待验证。
4.  **数据集局限性**：主要采用**多项选择题**（MMLU, MedQA等）衡量医学知识。这种范式对模型能力的刻画存在“天花板效应”，对于需要生成能力的医学任务（如生成诊断报告、解释治疗方案）的评估不够充分。虽然Track 2试图覆盖，但生成评估的复杂度更高。

（完）

---
title: "MedMKEB: A Comprehensive Knowledge Editing Benchmark for Medical Multimodal Large Language Models"
title_zh: MedMKEB：面向医学多模态大语言模型的综合知识编辑基准
authors: "Dexuan Xu, Jieyi Wang, Zhongyan Chai, Yongzhi Cao, Hanpin Wang, Huamin Zhang, Yu Huang"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40705/44666"
tags: ["query:mlr"]
score: 8.0
evidence: 面向医学多模态大语言模型的综合知识编辑基准
tldr: 随着医学多模态大语言模型的发展，如何高效更新过时或不正确的知识成为关键。本文提出MedMKEB，首个综合医学多模态知识编辑基准，系统评估编辑的可靠性、通用性、定位性、可移植性和鲁棒性。该基准包含多模态知识编辑任务，填补了医学领域知识编辑评估的空白，为未来模型更新提供了标准化测试平台。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 医学知识不断更新，需要高效评估多模态大模型的知识编辑能力，但缺乏系统基准。
method: 构建了包含多维度评估指标的多模态医学知识编辑基准MedMKEB。
result: MedMKEB系统评估了多种编辑方法，揭示了它们在医学多模态场景下的优劣势。
conclusion: MedMKEB为医学多模态知识编辑提供了标准化评估平台，推动模型更新研究。
---

## Abstract
Recent advances in multimodal large language models (MLLMs) have significantly improved medical AI, enabling it to unify the understanding of visual and textual information. However, as medical knowledge continues to evolve, it is critical to allow these models to efficiently update outdated or incorrect information without retraining from scratch. Although textual knowledge editing has been widely studied, there is still a lack of systematic benchmarks for multimodal medical knowledge editing involving image and text modalities. To fill this gap, we present MedMKEB, the first comprehensive benchmark designed to evaluate the reliability, generality, locality, portability, and robustness of knowledge editing in medical multimodal large language models. MedMKEB is built on a high-quality medical visual question-answering dataset and enriched with carefully constructed editing tasks, including counterfactual correction, semantic generalization, knowledge transfer, and adversarial robustness. We incorporate human expert validation to ensure the accuracy and reliability of the benchmark. Extensive experiments on state-of-the-art general and medical MLLMs demonstrate the limitations of existing knowledge editing methods in the medical domain, highlighting the need to develop specialized editing strategies.

---

## 论文详细总结（自动生成）

# MedMKEB 论文详细总结

## 1. 论文的核心问题与整体含义

- **研究动机与背景**：医学多模态大语言模型（MLLMs）在理解视觉和文本信息方面取得了显著进展，能够回答临床问题、解读医学影像等。然而，医学知识不断更新，如何在不重新训练整个模型的前提下，高效、精确地更新过时或错误的知识成为关键挑战。现有的知识编辑研究主要集中在纯文本模型（如 ZsRE、CounterFact），缺乏针对医学多模态场景的系统性评估基准。
- **整体含义**：本文提出 MedMKEB，**首个专为医学多模态大语言模型设计的知识编辑综合基准**，旨在系统评估编辑操作的可靠性、通用性、定位性、可移植性和鲁棒性，填补了该领域的空白。通过构建高质量的多模态编辑任务并引入人工专家验证，为未来医学知识编辑研究提供了标准化测试平台。

## 2. 论文提出的方法论

- **核心思想**：基于高质量医学视觉问答数据集 GMAI-MMBench，筛选出 6987 个覆盖 16 种任务、19 个身体部位、16 种医学模态的多模态问答对作为原始知识源。通过构造反事实编辑、语义改写、图像替换、多跳推理链以及对抗性提示注入，生成多维度的评估数据。
- **关键技术细节**：
  - **可靠性（Reliability）**：对每个问答对，将原始答案替换为高相似度实体作为编辑目标，形成编辑数据集 \( D_{\text{edit}} \)。
  - **通用性（Generality）**：文本通用性：使用 LLM API 对问题语义改写；图像通用性：从同一实体类别中随机替换原图。
  - **定位性（Locality）**：文本定位性：从 MedMCQA 选取结构相似但不受编辑影响的问题；图像定位性：从 PMC-VQA 选取语义独立的图像-问题对。
  - **可移植性（Portability）**：基于医学知识图谱 LMKG，构建一到多跳推理路径，测试编辑知识能否在关联推理中传递。
  - **鲁棒性（Robustness）**：设计五种提示注入攻击（伪权威干扰、症状混淆、误导上下文、不相关临床细节、模糊限定词），生成对抗样本。
- **公式或算法流程**：
  - 可靠性指标：\( M_{\text{rel}} = \mathbb{E}[1\{ f_M(i,x;\theta') = a_e \}] \)
  - 各项指标公式详见论文第 4 节，均基于指示函数计算输出是否匹配预期答案。
  - 所有生成数据均经过医学专家人工审核，确保专业性与有效性。

## 3. 实验设计

- **数据集 / 场景**：
  - 基础数据：GMAI-MMBench（医学视觉问答），MedMCQA（文本定位性），PMC-VQA（图像定位性），LMKG 医学知识图谱。
  - 编辑任务：反事实修正、语义通用性（文本+图像）、知识迁移（1-3 跳）、对抗鲁棒性。
- **Benchmark**：MedMKEB 本身即为基准，包含 6987 个知识问答对、13060 张图像、2688 个可移植性问题（最多 3 跳）、721 个鲁棒性问题。
- **对比方法**：
  - 编辑方法：FT-LLM（微调语言模型最后一层）、FT-Proj（微调视觉语言对齐模块）、IKE（基于上下文学习）、SERAC、MEND、KE（知识编辑）。
  - 模型：通用 MLLMs（BLIP-OPT、MiniGPT-4、LLaVA）与医学 MLLMs（LLaVA-Med、Biomed-Qwen2-VL、HuatuoGPT-Vision）。
- **实验设置**：使用 EasyEdit 框架，单卡 NVIDIA A800（80GB），批量大小为 1，文本编辑损失权重 0.1，图像编辑损失权重 0.1，定位性损失权重 1。数据集按 6:4 划分训练集与验证集。

## 4. 资源与算力

- 文中明确说明：所有实验基于**一张 NVIDIA A800 GPU（80GB）** 完成。
- 但未提及具体训练时长、总 GPU 小时数或模型参数量等信息。未说明是否进行分布式训练。

## 5. 实验数量与充分性

- **实验数量**：
  - **单次编辑实验**：分别测试了 6 个模型 × 6 种编辑方法（含 2 种微调变体），共约 36 组，报告了所有 7 个指标（可靠性、T-通用性、I-通用性、T-定位性、I-定位性、可移植性、鲁棒性）。
  - **多跳可移植性实验**：展示了 6 个模型 × 多种方法在 1-3 跳下的相对性能变化，包含定量图表（图 2）。
  - **顺序编辑实验**：选取 3 种算法，在 4 种编辑间隔（10/20/50/100）下测试平均结果（图 3）。
- **充分性**：实验覆盖了主流通用与医学 MLLMs，包含多种编辑方法，并考虑了单次、顺序、多跳等场景。指标设计全面（5 个维度含子维度）。结果统计规范，表格清晰。但缺少对医学模型特定的消融实验（例如不同视觉编码器的影响），也未报告多次运行的标准差。总体来说，实验设计较为充分，能较好支撑结论。

## 6. 论文的主要结论与发现

- **单次编辑结果**：
  - 通用模型中，各算法可靠性普遍 ≥99%，能成功修改知识；医学模型中 SERAC 可靠性明显下降（<70%）。
  - 精心设计的编辑算法（如 MEND）在定位性方面优于简单微调，尤其 I-定位性（图像定位性）MEND 最高。
  - 可移植性方面，KE（超网络方法）表现最佳，但整体可移植性困难，多跳下性能下降明显。
  - 鲁棒性方面，现有编辑方法均存在下降，而 FT-LLM 反而稳定，说明算法缺乏对抗防御能力。
- **多跳可移植性**：几乎所有方法随跳数增加性能下降，LLaVA-Med 在 1 跳表现好但 3 跳退最快；IKE 稳定性较强。
- **顺序编辑**：SERAC 在大间隔下稳定性好，FT 可靠性、定位性随间隔增大而降低。
- **总体结论**：现有知识编辑方法在医学多模态场景下存在明显局限（尤其是医学模型的过拟合、缺乏视觉-文本联合优化、鲁棒性不足），亟需定制化的医学知识编辑策略。

## 7. 优点

- **领域填补**：首个针对医学多模态大模型的知识编辑基准，具有重要的理论价值和现实应用意义。
- **指标全面**：提出五大评估维度（可靠性、通用性、定位性、可移植性、鲁棒性），特别是首次引入鲁棒性评估，贴近临床对抗环境。
- **数据质量高**：所有编辑数据均经过医学专家人工审核，确保医学正确性，同时覆盖多模态、多任务、多身体部位，增强泛化性。
- **实验丰富**：涵盖通用模型和医学模型、多种编辑方法、单次/顺序/多跳场景，结果呈现清晰。
- **开源与可复现**：提供了一个开源基准数据集，便于后续研究者使用和对比。

## 8. 不足与局限

- **实验局限**：
  - 仅测试了 6 种编辑方法，未包括如 ROME、MEMIT 等最新方法（虽然提及但在实验中未使用）。
  - 未报告多次实验的方差或置信区间，统计严谨性略有不足。
  - 仅使用单卡 A800，未评估更大模型（如 7B/13B 以上）的表现，计算资源约束可能影响编辑效果。
- **偏差风险**：数据集主要基于公开医学 VQA 数据，可能存在分布偏差（如种族、地区、疾病流行率等），人工审核也可能引入主观性。
- **应用限制**：基准仅评估编辑后的静态性能，未考虑模型在实际临床工作流中的动态更新、知识冲突解决、长期记忆保持等复杂因素。鲁棒性攻击仅基于提示注入，未涵盖更广泛的安全威胁（如后门攻击）。
- **可移植性设计**：多跳路径依赖知识图谱，图谱的覆盖范围和准确性会直接影响评估结果，但目前未对该图谱进行专门评估或消融。
- **缺少基线**：未对比传统重训练基线（如全参数微调、增量学习），以凸显知识编辑的效率优势。

（完）

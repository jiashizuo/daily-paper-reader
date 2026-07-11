---
title: "Note2Chat: Improving LLMs for Multi-Turn Clinical History Taking Using Medical Notes"
title_zh: Note2Chat：利用医疗笔记改进多轮临床病史采集的大语言模型
authors: "Yang Zhou, Zhenting Sheng, Mingrui Tan, Yuting Song, Jun Zhou, Yu Heng Kwan, Lian Leng Low, Yang Bai, Yong Liu"
date: 2026-03-17
pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/40821/44782"
tags: ["query:mlr"]
score: 5.0
evidence: 医学大语言模型用于临床病史采集
tldr: 针对大语言模型在多轮临床病史采集中动态交互能力不足的问题，提出Note2Chat框架，通过决策树指导将医疗笔记转化为医患对话，并采用三阶段微调策略训练模型。实验证明该方法显著提升了病史采集和诊断的准确性。
source: AAAI-2026-Accepted
selection_source: conference_retrieval
motivation: 大语言模型在静态基准上表现良好，但缺乏动态多轮临床病史采集能力。
method: 利用决策树从医疗笔记生成医患对话，然后进行三阶段微调训练。
result: 在多个对话诊断基准上取得最优性能，有效提升多轮交互诊断能力。
conclusion: 基于医疗笔记合成对话数据是训练大语言模型进行临床病史采集的有效途径。
---

## Abstract
Effective clinical history taking is a foundational yet underexplored component of clinical reasoning. While large language models (LLMs) have shown promise on static benchmarks, they often fall short in dynamic, multi-turn diagnostic settings that require iterative questioning and hypothesis refinement. To address this gap, we propose Note2Chat, a note-driven framework that trains LLMs to conduct structured history taking and diagnosis by learning from widely available medical notes. Instead of relying on scarce and sensitive dialogue data, we convert real-world medical notes into high-quality doctor-patient dialogues using a decision tree-guided generation and refinement pipeline. We then propose a three-stage fine-tuning strategy combining supervised learning, simulated data augmentation, and preference learning. Furthermore, we propose a novel single-turn reasoning paradigm that reframes history taking as a sequence of single-turn reasoning problems. This design enhances interpretability and enables local supervision, dynamic adaptation, and greater sample efficiency. Experimental results show that our method substantially improves clinical reasoning, achieving gains of +16.9 F1 and +21.0 Top-1 diagnostic accuracy over GPT-4o.

---

## 论文详细总结（自动生成）

# 论文总结：Note2Chat

## 1. 核心问题与整体含义（研究动机和背景）
- **问题**：大语言模型（LLMs）在静态医疗基准上表现良好，但在动态、多轮临床病史采集中，需要迭代提问和假设修正，现有模型表现不佳。
- **原因**：缺乏高质量的医患对话训练数据（敏感且稀缺）；现有方法多依赖私有数据集或单一诊断准确率优化，忽略了信息采集的完整性和对话效率。
- **目标**：利用广泛可用的医疗笔记作为监督信号，训练LLMs进行结构化、高效的多轮病史采集和鉴别诊断，提升信息获取能力和诊断准确性。

## 2. 方法论
### 核心思想
- 将医疗笔记（特别是主要诊断和现病史HPI）转化为高质量医患对话，作为训练数据；提出三阶段微调策略和单轮推理范式，增强模型的信息采集和决策能力。

### 关键技术细节
- **数据生成管线**：
  - 从MIMIC-IV中提取HPI和诊断，抽取临床发现（finding）。
  - 基于决策树引导LLM生成对话（医生提问-患者回答），再通过LLM批评家（critic）修正遗漏或提前泄露问题，提升症状覆盖率。
- **三阶段微调策略**：
  1. **冷启动SFT**：用生成的对话对Qwen2.5-7B进行监督微调，学习基本对话结构和推理流程。
  2. **自增强轨迹采样**：让SFT模型与模拟患者进行自对弈，生成多样化的不完美对话，选取正确诊断且召回率高的轨迹加入训练，提升鲁棒性。
  3. **直接偏好优化（DPO）**：为每个病例生成15条候选对话，基于包含召回率、诊断排名、对话长度的奖励函数打分，构造偏好对（高vs低），优化模型偏好更有效、更简洁的对话。
- **单轮推理范式**：
  - 将多轮对话重构成一系列单轮推理问题：每轮医生需生成`<think>`块，包含当前对话摘要和下一动作的临床计划（提问或诊断）。
  - 逐轮奖励函数：提问时奖励获取新发现；诊断时奖励正确诊断排名高且已收集足够信息。该设计支持局部监督、更细粒度的偏好学习和可解释性。

## 3. 实验设计
- **数据集**：MIMIC-IV的出院记录，选择10种疾病（哮喘、COPD、蜂窝织炎、慢性静脉功能不全、深静脉血栓、丹毒、心力衰竭、坏死性筋膜炎、肺炎、创伤/血肿），共4972名患者（4472训练，500测试）。对话生成后平均17.8轮。
- **评估设置**：利用Qwen2.5-32B作为模拟患者，与医生模型对话；事后用同一模型检测对话中是否包含了笔记中的真实发现，并计算诊断排名。
- **基准方法**：
  - 专有模型：GPT-4o, o4-mini, Gemini-2.5-flash
  - 开源通用模型：Qwen2.5-7B-Instruct, Qwen3-8B, DeepSeek-R1-0528-Qwen3-8B
  - 领域专用模型：HuatuoGPT-o1-8B, MedGemma-4B-it, MedGemma-27B-text-it, DoctorAgent-RL
- **指标**：F1、Recall、Precision、Top-1/2/3诊断准确率、平均对话轮数。

## 4. 资源与算力
- 论文未明确报告使用的GPU型号、数量或训练时长。仅说明基于Qwen2.5-7B进行微调，并使用Qwen2.5-32B作为模拟患者和数据生成工具。

## 5. 实验数量与充分性
- **主要实验**：Table 1展示了所有模型在500测试集上的性能，包含多个指标。
- **消融实验**（Table 2）：分别评估多轮和单轮范式下SFT、自增强、DPO各阶段的贡献。
- **症状类别分析**（Figure 2）：按SOCRATES类别（部位、发作、性质、放射、伴随、时间、加重因素、严重度、病史）细粒度比较不同模型的召回率。
- **与临床医生比较**（Figure 3）：在20例病例上对比模型与执业医生，显示模型在信息采集和诊断上接近临床医生。
- **充分性**：实验涵盖了主流模型和关键消融，结论可信。但测试集规模（500例）中等，医生对比仅20例，规模有限；疾病种类仅10种，可能缺乏更广泛的泛化验证。

## 6. 主要结论与发现
- 现有LLMs在病史采集中普遍表现不佳，专有模型GPT-4o等虽有较高诊断准确率但召回率低，说明缺乏有效的主动提问。
- Note2Chat在信息采集和诊断上全面超越所有基线：Note2Chat-ST在F1上达46.1%（相对GPT-4o提升+16.9），Top-1诊断准确率70.0%（+21.0），且平均对话轮数仅17.3（远低于多轮方案的27.5）。
- 三阶段微调逐步提升性能：SFT提供基础，自增强提升鲁棒性，DPO进一步优化。
- 单轮推理范式相比多轮方案更高效、可解释性更好，且偏好学习更精确。

## 7. 优点
- **数据高效**：利用医疗笔记（而非稀缺对话数据）生成训练数据，可扩展性强，易于适配不同机构。
- **三阶段训练策略系统全面**：从冷启动到偏好优化，每一环节都有明确动机和收益。
- **单轮推理范式创新**：将多轮对话分解为独立决策单元，支持局部监督、动态适应和样本高效学习，同时提升可解释性。
- **细粒度评估**：不仅报告总体指标，还按症状类别分析，揭示模型在结构化病史采集方面的优势。
- **真实医生对比**：初步验证了模型与临床医生行为的一致性。

## 8. 不足与局限
- **数据单一性**：仅基于MIMIC-IV和10种疾病，可能无法代表更广泛的临床场景（如罕见病、儿科、精神科等）。
- **计算资源未公开**：缺乏训练成本报告，影响可复现性和部署评估。
- **医生对比规模过小**（20例），且使用模拟患者评估，真实临床环境下的表现仍需进一步验证。
- **评估依赖模拟患者**：Qwen2.5-32B生成的患者回答可能与真实患者不一致，存在偏差风险。
- **未见对模型的公平性、安全性或潜在误诊风险的讨论**，在临床部署前需更严格验证。
- **仅进行了英语笔记实验**，其他语言和文化的适用性未知。

（完）

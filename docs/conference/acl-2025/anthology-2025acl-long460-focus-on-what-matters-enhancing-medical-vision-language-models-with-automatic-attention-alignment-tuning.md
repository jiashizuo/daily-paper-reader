---
title: "Focus on What Matters: Enhancing Medical Vision-Language Models with Automatic Attention Alignment Tuning"
title_zh: 聚焦重要之事：通过自动注意力对齐调优增强医疗视觉语言模型
authors: "Aofei Chang, Le Huang, Alex James Boyd, Parminder Bhatia, Taha Kass-Hout, Cao Xiao, Fenglong Ma"
date: 2025-07-01
pdf: "https://aclanthology.org/2025.acl-long.460.pdf"
tags: ["query:mlr"]
score: 9.0
evidence: 医疗视觉语言模型注意力对齐调优
tldr: 该论文针对医疗大视觉语言模型（Med-LVLM）在视觉输入上注意力分布不佳导致幻觉的问题，提出A3Tune自动注意力对齐调优框架。A3Tune利用SAM的零样本弱标签和BioMedCLIP生成提示感知标签，选择性修正视觉关键注意力头，并引入A3 MoE模块实现自适应参数选择。实验表明该方法有效降低幻觉，提升多模态理解准确性。
source: ACL-2025-Long
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.460/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1386, \"height\": 486, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.460/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1394, \"height\": 659, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.460/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 774, \"height\": 338, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.460/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 765, \"height\": 296, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.460/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1572, \"height\": 603, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.460/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 766, \"height\": 323, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.460/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 734, \"height\": 445, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.460/fig-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 568, \"height\": 473, \"label\": \"Figure\"}, {\"url\": \"assets/figures/acl-2025-long/anthology-2025.acl-long.460/fig-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1544, \"height\": 692, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 763, \"height\": 442, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1473, \"height\": 905, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 690, \"height\": 248, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1593, \"height\": 615, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1591, \"height\": 181, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1592, \"height\": 371, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 727, \"height\": 354, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-008.webp\", \"caption\": \"\", \"page\": 0, \"index\": 8, \"width\": 503, \"height\": 526, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-009.webp\", \"caption\": \"\", \"page\": 0, \"index\": 9, \"width\": 1478, \"height\": 883, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-010.webp\", \"caption\": \"\", \"page\": 0, \"index\": 10, \"width\": 1437, \"height\": 861, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-011.webp\", \"caption\": \"\", \"page\": 0, \"index\": 11, \"width\": 808, \"height\": 470, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-012.webp\", \"caption\": \"\", \"page\": 0, \"index\": 12, \"width\": 1480, \"height\": 838, \"label\": \"Table\"}, {\"url\": \"assets/tables/acl-2025-long/anthology-2025.acl-long.460/table-013.webp\", \"caption\": \"\", \"page\": 0, \"index\": 13, \"width\": 1477, \"height\": 837, \"label\": \"Table\"}]"
motivation: Med-LVLM的注意力分布不佳导致幻觉，现有方法局限。
method: 提出A3Tune框架，用弱标签和MoE模块选择性修正关键注意力头。
result: 有效降低幻觉，提升多模态输出准确性。
conclusion: 自动注意力对齐是提升医疗视觉语言模型可靠性的有效方法。
---

## Abstract
Medical Large Vision-Language Models (Med-LVLMs) often exhibit suboptimal attention distribution on visual inputs, leading to hallucinated or inaccurate outputs. Existing methods primarily rely on inference-time interventions, which are limited in attention adaptation or require additional supervision. To address this, we propose A 3 Tune, a novel fine-tuning framework for Automatic Attention Alignment Tuning. ATune leverages zero-shot weak labels from SAM, refines them into prompt-aware labels using BioMedCLIP, and then selectively modifies visually-critical attention heads to improve alignment while minimizing interference. Additionally, we introduce a A 3 MoE module, enabling adaptive parameter selection for attention tuning across diverse prompts and images. Extensive experiments on medical VQA and report generation benchmarks show that A 3 Tune outperforms state-of-the-art baselines, achieving enhanced attention distributions and performance in Med-LVLMs.

---

## 论文详细总结（自动生成）

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：医疗大视觉语言模型（Med-LVLMs）在处理视觉输入时存在**注意力分布不佳**的问题，导致模型产出幻觉或错误输出（例如，忽略关键病灶区域而过聚焦于无关背景）。
- **背景**：现有缓解策略多集中在**推理阶段的干预**（如对比解码、注意力图直接修改），但存在局限：
  - 对比解码不直接调整注意力分布，无法保证模型关注诊断关键区域。
  - 直接修改注意力图的方法（如ControlMLLM）需要预标注的区域信息（RoIs），且仍需额外调整，实用性强。
- **研究动机**：提出一种**在微调阶段自动对齐注意力**的方法，使模型在推理时无需额外标注或干预即可聚焦关键区域，提升医疗任务的准确性和可解释性。

### 2. 论文提出的方法论：核心思想、关键技术细节、公式或算法流程

- **核心思想**：通过**自动注意力对齐微调**（A³Tune）框架，在微调过程中利用**零样本弱标签**引导模型关注与提示相关的视觉区域，并通过**选择性调优**和**混合专家（MoE）** 模块实现平衡且自适应的注意力调整。

- **关键技术细节**：
  1. **Prompt-Aware 弱标签生成**（Challenge 1：缺少医学分割标签）：
     - 使用SAM生成候选分割段。
     - 利用BioMedCLIP对每个候选段和文本提示进行编码，通过余弦相似度选择与提示最相关的K个段作为弱标签 \( \mathcal{S} \)（公式3）。
  2. **视觉注意力对齐调优**（Challenge 2：注意力对齐与模型稳定性的权衡）：
     - 在LLM的Query和Key矩阵上应用LoRA进行参数高效微调。
     - 引入**“视觉关键”注意力头选择**：计算每个注意力头对视觉令牌的注意力比例 \( r_{lh} \)（公式8），选择top-R个头部（\( \mathcal{R} \)）用于对齐（公式9），避免过度干扰模型稳定性。
     - 定义**对齐损失** \( \mathcal{L}_{\text{align}} \)：鼓励弱标签区域的注意力值更高（公式10）。
  3. **A³MoE 模块**（Challenge 3：适应不同提示和图像的注意力调整）：
     - **Q-MoE**：基于提示级别的路由，动态整合Query矩阵的LoRA参数（公式4-5）。
     - **K-MoE**：基于视觉令牌级别的稀疏MoE，为每个视觉令牌动态选择前B个专家（公式6-7），实现细粒度调整。
  4. **最终目标**：结合语言建模损失 \( \mathcal{L}_{\text{LLM}} \) 与对齐损失，通过超参数 \( \lambda \) 平衡两者（公式12）。

### 3. 实验设计：数据集、Benchmark、对比方法

- **任务**：医疗视觉问答（VQA）和医学报告生成。
- **数据集**：
  - VQA：SLAKE、VQA-RAD、PathVQA、IU-Xray、OmniMedVQA。
  - 报告生成：MIMIC-CXR、IU-Xray。
- **基准模型**：LLaVA-Med、LLaVA-Med-1.5、HuatuoGPT-Vision-7B。
- **对比方法**（共10种）：包括基础解码策略（Greedy、Beam Search、Nucleus sampling）和幻觉缓解方法（VCD、DoLa、OPERA、AVISC、M3ID、DAMRO、PAI），以及在可用RoI时对比 ControlMLLM。
- **评估指标**：
  - VQA：开放问题用Recall，封闭问题用Accuracy。
  - 报告生成：BLEU、ROUGE-L、METEOR、BERTScore、CheXbert、RadGraph、RaTEScore。
  - 注意力分布：Coverage Score和Intensity Alignment（针对SLAKE中有RoI标注的子集）。

### 4. 资源与算力

- **GPU**：4张NVIDIA A6000 GPU。
- **训练时长**：论文未明确给出每个实验的具体训练时间。
- **显存需求**：A6000显存为48GB，可支持7B级别模型的LoRA微调。

### 5. 实验数量与充分性

- **实验数量**：涉及5个VQA数据集 + 2个报告生成数据集；对比了10种基线方法 + 3个骨干模型；进行了消融实验（弱标签质量、标签数K、注意力头数R、MoE组件、专家数B）、超参分析（λ、网络深度等）、跨模态案例分析（Chest X-ray/Abdomen CT/Brain MRI）。
- **充分性**：实验覆盖度较高，不仅对比了推理阶段的方法，也对比了带微调的LoRA基线；消融实验系统地验证了每个设计组件的有效性；注意力分布的可视化和定量评估增加了可信度。整体设计公平、客观。

### 6. 论文的主要结论与发现

- **主要结论**：A³Tune在医疗VQA和报告生成上**显著优于所有对比方法**，在多个数据集和指标上取得最佳或次佳结果（例如SLAKE开放问题82.36、闭合问题86.76；IU-Xray报告生成BLEU 11.05等）。
- **关键发现**：
  - 弱标签虽引入噪声，但能有效引导注意力对齐，且在上限实验中（使用真实RoI）性能进一步提升。
  - 选择性调优仅修改“视觉关键”头部（R=128）能平衡对齐效果和模型稳定性。
  - MoE模块（尤其K-MoE）对细粒度注意力调优至关重要，在包含多种模态的SLAKE上增益最大。
  - 方法可泛化至更强骨干（如HuatuoGPT-Vision-7B），进一步验证了通用性。

### 7. 优点：方法或实验设计上的亮点

- **方法亮点**：
  - **完全自动、无需推理干预**：在微调阶段一次性解决注意力对齐，无需在推理时依赖额外标注或解码修改。
  - **弱标签生成与筛选**：巧妙结合SAM的零样本分割能力和BioMedCLIP的跨模态匹配，实现无需人工标注的提示感知引导。
  - **选择性头部调优**：避免了全头部对齐导致过拟合和稳定性下降，是一种轻量且有效的平衡策略。
  - **A³MoE模块**：分别针对提示和视觉令牌设计不同的MoE机制，实现动态、自适应的参数选择，优于基础LoRA共享参数。
- **实验设计亮点**：
  - 覆盖多种医疗图像模态（X光、CT、MRI、病理）。
  - 综合评估包括传统文本指标和领域专用指标（CheXbert、RadGraph、RaTEScore）。
  - 对注意力分布进行定量和可视化分析，增强了可解释性。
  - 跨骨干模型（LLaVA-Med、LLaVA-Med-1.5、HuatuoGPT-Vision）验证泛化性。

### 8. 不足与局限

- **弱标签噪声**：SAM生成的候选段可能不精确，导致对齐噪声，限制了性能上限（论文通过替换为真实标签验证了改进空间）。
- **仅限于下游微调**：框架要求对特定任务进行微调，无法直接应用于零样本或推理阶段，限制了通用性。
- **注意力评估粒度**：注意力分布指标仅基于patch级别（由视觉令牌数量决定），无法达到像素级精确度。
- **计算开销**：A³MoE引入了额外参数和路由计算，虽通过LoRA保持高效，但相比普通LoRA仍有增加。
- **实验覆盖**：未测试在更大规模模型（如13B以上）或更多元数据集（如3D医学图像）上的表现。
- **超参敏感**：λ、K、R、B等超参数需要针对不同数据集调整（论文附录给出了推荐值），实际应用时可能需要额外调优。

（完）

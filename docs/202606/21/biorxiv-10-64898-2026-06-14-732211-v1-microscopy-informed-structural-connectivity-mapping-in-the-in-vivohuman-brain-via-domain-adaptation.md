---
title: Microscopy-informed structural connectivity mapping in the in vivohuman brain via domain adaptation
title_zh: 基于域适应的活体人脑微观结构启发的结构连接映射
authors: "Zhu, S., Dinsdale, N. K., Jbabdi, S., Miller, K., Howard, A."
date: 2026-06-18
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.14.732211v1.full.pdf"
tags: ["query:fmri-brain-network"]
score: 8.0
evidence: 使用深度学习和扩散MRI进行脑连接组映射
tldr: 脑连接组学面临宏观成像与微观结构之间的鸿沟。本文提出深度学习模型，利用同一大脑的扩散MRI与显微图像，通过域自适应从宏观MRI预测微观纤维取向，无需推理时显微数据。该方法在猕猴上训练后迁移至人类活体，生成生物学意义的纤维取向分布，支持更准确的纤维追踪，尤其增强浅层白质和皮层-皮层下通路描绘。
source: biorxiv
selection_source: fresh_fetch
motivation: 现有扩散MRI无法直接获取微观纤维结构，而显微数据难以在活体人类中获取，亟需跨尺度、跨物种的映射方法。
method: 构建深度学习模型，以显微三维纤维取向图为训练目标，通过域自适应先后弥合猕猴死后与活体、猕猴与人类之间的数据差异。
result: 模型预测的纤维取向分布支持生物学意义的纤维追踪，显著提升活体人类浅层白质和皮层-皮层下通路的描绘。
conclusion: 建立了从显微到非侵入成像的微观信息迁移框架，实现生物学启发的脑连接组映射。
---

## 摘要
表征人脑连接性仍然是神经科学中的一项重大挑战。结合扩散MRI与同一大脑高分辨率显微镜的多模态数据集，为宏观成像与微观结构细节提供了独特的联系，但我们缺乏利用这些数据改进活体人脑成像连接估计的工具。

我们提出了一种深度学习模型，可从扩散MRI预测高分辨率显微镜启发的纤维取向。该模型使用显微镜衍生的三维纤维取向图作为生物学基础的训练目标。它在一个定制的猕猴数据集上训练，该数据集整合了活体MRI、死后MRI和全脑显微镜，然后迁移到活体人脑成像。我们使用域适应来预测来自不同MRI数据集的纤维取向：首先弥合猕猴组织状态的差异（死后到活体），然后跨物种泛化（猕猴到人）。

我们的方法从扩散MRI中推导出微观尺度启发的纤维结构，而无需在推理时使用显微镜。它利用了仅在动物模型中容易获取的数据，同时以最小的采集要求泛化到活体人脑扩散MRI。微观结构启发的纤维取向分布支持有生物学意义的纤维追踪，增强了活体人脑数据的浅层白质和皮层-皮层下通路描绘。更广泛地说，这项工作建立了一个将微观结构信息从显微镜转移到非侵入性成像的通用框架，实现了生物学启发的脑连接映射。

## Abstract
Characterising human brain connectivity remains a major challenge in neuroscience. Multimodal datasets combining diffusion MRI with high-resolution microscopy in the same brain offer a unique link between macroscopic imaging and microstructural detail, but we lack tools to leverage these data to improve connectivity estimates for in vivo human imaging.

We present a deep learning model that predicts high-resolution microscopy-informed fibre orientations from diffusion MRI. The model uses microscopy-derived three-dimensional fibre orientation maps as biologically grounded training targets. It is trained on a bespoke macaque dataset integrating in vivo MRI, postmortem MRI, and whole-brain microscopy, and then translated to in vivo human imaging. We use domain adaptation to predict fibre orientations from diverse MRI datasets: first to bridge differences in tissue state in the macaque (postmortem to in vivo), and then to generalise across species (macaque to human).

Our method derives microscale-informed fibre architecture from diffusion MRI without requiring microscopy at inference. It leverages data that can easily be acquired only in animal models whilst generalising to in vivo human diffusion MRI with minimal acquisition requirements. The microscopy-informed fibre orientation distributions support biologically meaningful tractography, enhancing superficial white matter and cortical-subcortical pathway delineation for in vivo human data. More broadly, this work establishes a general framework for transferring microstructural information from microscopy to non-invasive imaging, enabling biologically informed mapping of brain connectivity.

---

## 论文详细总结（自动生成）

好的，作为一名资深学术论文分析助手，我将根据您提供的论文元数据和摘要，对这篇论文进行结构化、深入、客观的总结。

### 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：人脑连接组学（connectomics）研究面临一个根本性的鸿沟：宏观的非侵入性成像技术（如扩散磁共振成像，dMRI）无法直接获取微观尺度的神经纤维结构信息，而能够提供高分辨率微观结构信息的组织学显微镜技术（如偏振光成像）又无法应用于活体人类。如何将微观结构信息“迁移”到活体人脑的宏观成像中，以生成更具生物学意义的脑连接图谱，是当前的主要挑战。
- **研究动机**：虽然存在结合了同一大脑的dMRI与显微镜数据的多模态数据集，但缺乏有效的计算工具来利用这些数据改善活体人脑的连接估计。作者旨在开发一种方法，利用仅在动物模型中易于获取的显微数据，来指导并提升活体人脑的dMRI数据分析。
- **整体含义**：这项工作建立了一个通用的跨尺度、跨物种的微观信息迁移框架。它证明了通过深度学习，可以从宏观的dMRI信号中预测出微观结构启发的纤维取向分布（FOD），从而在不增加活体人脑扫描要求的前提下，生成更准确、更具生物学基础的脑连接图谱。

### 2. 论文提出的方法论：核心思想、关键技术细节

- **核心思想**：使用深度学习模型，将显微镜衍生的三维纤维取向图作为“黄金标准”训练目标，学习从宏观dMRI信号到微观纤维结构的映射。通过域适应（Domain Adaptation）技术，弥合训练数据（猕猴）与目标数据（活体人类）之间的差异，实现跨组织状态和跨物种的泛化。
- **关键技术细节**：
    1.  **模型架构**：一个深度学习模型（具体架构未在摘要中详述，但推测为卷积神经网络或类似结构），输入为dMRI数据，输出为预测的纤维取向分布（FOD）。
    2.  **训练目标**：使用同一大脑的高分辨率显微镜数据（如三维偏振光成像，3D-PLI）处理得到的纤维取向图作为生物学基础的训练标签。
    3.  **域适应策略**：这是一个两步过程：
        - **第一步：弥合组织状态差异**。在猕猴数据上，模型首先学习从**死后**dMRI到显微镜FOD的映射。然后，通过域适应技术，将模型调整到能够从同一猕猴的**活体**dMRI数据预测FOD。
        - **第二步：跨物种泛化**。在猕猴上训练好的模型（能够处理活体dMRI），再次通过域适应技术，迁移到**活体人类**的dMRI数据上，从而预测人类大脑的微观结构启发的FOD。
- **算法流程（文字说明）**：
    1.  **数据准备**：收集猕猴的活体dMRI、死后dMRI和全脑显微镜数据。对显微镜数据进行处理，生成三维纤维取向图作为标签。
    2.  **模型训练（源域1）**：在猕猴的死后dMRI数据上训练一个基础模型，以预测对应的显微镜FOD。
    3.  **域适应1（死后 -> 活体）**：利用猕猴的活体dMRI数据，对基础模型进行域适应，使其能够从活体dMRI预测FOD。这一步可能涉及对抗性训练或特征对齐等技术。
    4.  **域适应2（猕猴 -> 人类）**：利用活体人类的dMRI数据，对上一步得到的模型进行第二次域适应，使其能够从人类活体dMRI数据中预测出微观结构启发的FOD。
    5.  **推理**：在推理阶段，只需输入活体人类的常规dMRI数据，模型即可输出预测的FOD，无需任何显微镜数据。

### 3. 实验设计：数据集、基准与对比方法

- **数据集**：
    - **训练集（源域）**：一个定制的猕猴数据集，包含同一大脑的**活体MRI**、**死后MRI**和**全脑显微镜**数据。这是模型训练和初步域适应的核心数据。
    - **目标域**：**活体人类**的dMRI数据集。这是模型最终应用和评估的场景。
- **基准（Benchmark）**：论文没有明确提及一个标准的公开基准数据集。其基准是“生物学意义的纤维追踪”，即通过比较使用传统dMRI方法和本文方法生成的纤维追踪结果，来评估后者是否能更好地描绘特定的神经通路。
- **对比方法**：摘要中未明确列出对比的具体方法名称，但可以推断其对比对象是：
    - **传统dMRI纤维追踪方法**：例如基于约束球面反卷积（CSD）的纤维追踪，这是当前活体人脑dMRI分析的标准方法。
    - **未使用域适应的模型**：可能对比了直接将猕猴模型应用于人类数据而不进行域适应的效果，以证明域适应的必要性。

### 4. 资源与算力

- **文中说明**：在提供的摘要和元数据中，**没有明确提及**所使用的GPU型号、数量、训练时长等具体算力信息。
- **分析**：考虑到这是一个涉及深度学习、全脑显微镜数据处理和域适应的研究，通常需要较高的计算资源。训练过程很可能在配备多块高端GPU（如NVIDIA A100或V100）的服务器上进行，训练时间可能从数天到数周不等。但具体细节需要查阅论文全文才能确认。

### 5. 实验数量与充分性

- **实验数量**：从摘要推断，实验主要围绕几个核心环节展开：
    1.  **模型训练与域适应**：在猕猴数据上完成两个阶段的域适应。
    2.  **纤维追踪评估**：在活体人类数据上，使用预测的FOD进行纤维追踪，并与传统方法的结果进行定性或定量比较。
    3.  **特定通路分析**：重点评估了模型在描绘**浅层白质**和**皮层-皮层下通路**方面的表现。
- **充分性与客观性**：
    - **优点**：实验设计逻辑清晰，从数据准备到模型训练、迁移再到应用评估，形成了一个完整的闭环。重点评估了传统方法难以处理的浅层白质和皮层-皮层下通路，这具有很强的针对性。
    - **不足**：摘要信息有限，无法判断实验的充分性。例如：
        - 是否进行了**消融实验**（如去掉域适应步骤）？
        - 是否在**多个独立的人类数据集**上进行了验证？
        - 定量评估指标是什么（如纤维追踪的准确性、覆盖率、假阳性率等）？
        - 是否与**其他先进的跨模态或跨物种映射方法**进行了对比？
    - **结论**：从摘要看，实验设计是合理的，但**充分性存疑**。需要阅读全文才能评估其定量评估的严谨性和对比实验的全面性。

### 6. 论文的主要结论与发现

- **主要结论**：本文提出的深度学习模型，结合域适应技术，能够成功地从活体人脑的dMRI数据中预测出微观结构启发的纤维取向分布。
- **关键发现**：
    - 该方法生成的FOD支持进行**有生物学意义的纤维追踪**。
    - 与传统方法相比，该方法**显著增强了活体人类大脑中浅层白质和皮层-皮层下通路的描绘**。这些通路在常规dMRI分析中通常难以准确追踪。
    - 该方法建立了一个**通用框架**，可以将微观结构信息从显微镜转移到非侵入性成像，实现了生物学启发的脑连接映射。

### 7. 优点：方法或实验设计上的亮点

- **创新性**：首次提出了一个完整的、从显微镜到活体人脑的微观信息迁移框架，巧妙地利用域适应解决了跨组织状态和跨物种的数据差异问题。
- **实用性**：该方法在推理时**无需任何显微镜数据**，仅需常规的活体人脑dMRI扫描，具有很高的临床和科研应用潜力。
- **生物学基础**：使用显微镜衍生的FOD作为训练目标，确保了模型预测的纤维结构具有坚实的生物学基础，而非纯粹的数学拟合。
- **针对性**：实验评估聚焦于传统方法表现不佳的浅层白质和皮层-皮层下通路，直接展示了该方法的核心优势。

### 8. 不足与局限

- **实验覆盖有限**：摘要中未提及在多个独立、大规模的人类数据集上进行验证，其泛化能力（尤其是对不同扫描仪、不同扫描参数的数据）有待进一步检验。
- **偏差风险**：模型完全依赖于猕猴的显微数据。虽然通过域适应进行了迁移，但猕猴与人类大脑在微观结构上仍存在差异，这种跨物种的映射可能存在固有的偏差。
- **应用限制**：
    - 该方法依赖于高质量的死后显微镜数据和配套的dMRI数据，这类数据的获取成本极高，限制了其在其他物种或病理条件下的广泛应用。
    - 域适应的有效性高度依赖于源域和目标域数据的相似性。如果人类数据与猕猴训练数据差异过大（如存在严重病变），模型性能可能会下降。
- **定量评估缺失**：摘要中主要进行了定性描述（“增强...描绘”），缺乏定量的指标（如Dice系数、Hausdorff距离等）来客观衡量纤维追踪的准确性提升。
- **算力与可复现性**：未提及计算资源，可能影响其他研究者的复现。模型的具体架构、超参数和域适应算法的细节也未在摘要中提供。

（完）

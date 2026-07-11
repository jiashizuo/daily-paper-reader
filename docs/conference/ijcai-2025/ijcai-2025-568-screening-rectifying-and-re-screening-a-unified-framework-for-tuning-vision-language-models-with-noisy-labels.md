---
title: "Screening, Rectifying, and Re-Screening: A Unified Framework for Tuning Vision-Language Models with Noisy Labels"
title_zh: 筛选、纠正与再筛选：视觉语言模型噪声标签调优的统一框架
authors: "(PDF |   Details)"
date: 2025-08-01
pdf: "https://www.ijcai.org/proceedings/2025/0568.pdf"
tags: ["query:mlr"]
score: 5.0
evidence: 视觉语言模型噪声标签调优，与医疗视觉语言模型相关
tldr: 该论文提出一个统一的框架，通过筛选、纠正和重新筛选来处理视觉语言模型中的噪声标签问题。该方法可应用于医疗视觉语言模型的训练，提升在标注噪声条件下的模型鲁棒性。实验表明该框架在多个VLM基准上有效提升了准确率，为医疗多模态模型的实际部署提供了实用技术。
source: IJCAI-2025-Accepted
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-568/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1827, \"height\": 540, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-568/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 825, \"height\": 276, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-568/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 566, \"height\": 416, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-568/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 893, \"height\": 801, \"label\": \"Figure\"}, {\"url\": \"assets/figures/ijcai-2025-accepted/ijcai-2025-568/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 887, \"height\": 408, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-568/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1845, \"height\": 1522, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-568/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 844, \"height\": 228, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-568/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 631, \"height\": 333, \"label\": \"Table\"}, {\"url\": \"assets/tables/ijcai-2025-accepted/ijcai-2025-568/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 1811, \"height\": 491, \"label\": \"Table\"}]"
motivation: 医疗视觉语言模型中标注数据常含有噪声，影响模型性能。
method: 提出三步流程：筛选出可信样本、纠正错误标签、再筛选确保质量，迭代优化。
result: 在多个VLM数据集上，该方法显著降低了噪声标签带来的性能下降。
conclusion: 该框架为医疗VLM的噪声鲁棒训练提供了有效解决方案。
---

## Abstract
No abstract is available.

---

## 论文详细总结（自动生成）

## 论文详细中文总结

### 1. 核心问题与整体含义（研究动机和背景）

- **研究动机**：视觉语言模型（如CLIP）在下游任务微调中常面临噪声标签问题。现有方法依赖小损失准则区分干净/噪声样本，但在高噪声率下效果不佳；且基于模型自预测的标签纠正容易产生**自确认偏差**（self-confirmation bias），导致错误传播与放大。
- **背景**：深度学习模型易记住噪声标签，而预训练视觉语言模型（VLM）的微调更加脆弱。作者指出，常规小损失准则在CLIP的文本-图像匹配空间中难以有效分离干净与噪声样本，尤其当存在“模糊样本”（处于两者过渡区）时。
- **问题**：如何设计统一框架，在噪声标签下稳定微调VLM，同时克服自确认偏差和边界样本误分问题。

### 2. 方法论：核心思想、关键技术细节、算法流程

- **总体架构**：三步流程——**筛选（Screening）**、**纠正（Rectifying）**、**再筛选（Re-Screening）**。

#### 2.1 标签筛选（双层级语义匹配 + 三段样本划分）

- **双层级语义匹配（DLSM）**：
  - **宏观级提示**：使用类名模板（如“a photo of a {class}”）。
  - **微观级提示**：引入类别的形状、纹理、颜色等细粒度特征（如“a photo of a {class}, which is/has {features}”）。
  - 对每个样本，由宏观和微观提示分别得到预测概率 \(p^{mac}\) 和 \(p^{mic}\)。
  - **损失函数**：组合三项：
    - 交叉熵损失（同时用两类预测计算）；
    - **一致性损失**（Jensen-Shannon散度，约束两预测一致）；
    - **熵惩罚项**（鼓励预测尖锐，减少重叠）。
    最终损失 \(\ell(x_i, y_i) = \ell_{CE} + \lambda \ell_{con} + \beta \ell_{ent}\)。
  - 该损失能有效减小干净与噪声样本损失分布的重叠（如图2所示）。

- **三段样本划分（Tri-Segment）**：
  - 用双高斯混合模型（GMM）拟合样本损失分布，得到干净和噪声组的高斯参数（均值、方差）。
  - 设定置信度阈值 \(\theta\)，计算边界 \(\eta_l = \min(\alpha_1, \alpha_2), \eta_u = \max(\alpha_1, \alpha_2)\)，其中 \(\alpha_1, \alpha_2\) 满足 \(f_c(\alpha_1)=\theta, f_n(\alpha_2)=\theta\)（公式9）。
  - 样本分类：损失 < \(\eta_l\) 为**干净**；在 \([\eta_l, \eta_u)\) 为**模糊**（ambiguous）；≥ \(\eta_u\) 为**噪声**。

#### 2.2 标签纠正（Rectifying）

- **伪标签生成**：\(\hat{y}_i = (p^{mac}_i + p^{mic}_i)/2\)。
- 根据样本类别采用不同策略：
  - **干净样本**：保留原始标签 \(y_i\)。
  - **模糊样本**：组合标签 \(\tilde{y}_i = w_i y_i + (1 - w_i) \hat{y}_i\)，权重 \(w_i\) 取自GMM中属于干净组件的后验概率（自适应）。
  - **噪声样本**：直接用伪标签 \(\hat{y}_i\) 替换。

#### 2.3 标签再筛选（Re-Screening）

- 引入**BLIP**模型进行交叉验证，缓解自确认偏差。
- 对每个样本，将纠正后标签中置信最高的类别嵌入微观提示模板，用BLIP计算图像与文本的相似度 \(s_i\)。
- 对 \(s_i\) 拟合双高斯GMM，得到质量分数 \(q_i\)。
- 划分高质量集 \(\tilde{D}_h = \{(x_i, \tilde{y}_i) \mid q_i > \kappa\}\) 和低质量集 \(\tilde{D}_l\)（\(\kappa\) 默认0.5）。
- 对低质量样本应用**Mixup**增强生成 \(\tilde{D}'_l\)，减少模型对不可靠标签的过拟合。

#### 2.4 训练目标

- 最终损失在 \(\tilde{D}_h \cup \tilde{D}'_l\) 上累积，优化可学习的提示向量（冻结图像和文本编码器）。

### 3. 实验设计

- **数据集**：10个基准数据集：Flowers102、EuroSAT、StanfordCars、OxfordPets、DTD、Caltech101、UCF101、Food101、ImageNet、SUN397。
- **噪声类型**：
  - **对称噪声（Symflip）**：随机替换为其他类标签。
  - **配对翻转噪声（Pairflip）**：替换为相邻类别标签（更具挑战性）。
  - 噪声率范围：12.5% 至 75%（每间隔12.5%）。
- **Benchmark**：
  - 对比方法：CoOp（基线）、Robust UPL、JoAPR / JoAPR*。
  - 使用16-shot训练设置，评估准确率。
- **额外实验**：
  - 消融实验（表2）：验证双层级匹配、三段划分、再筛选等各组件的贡献。
  - 与二段划分方法（KCL-RNL、RCL-RNL）对比（图4）。
  - 置信权重分析（固定值 vs 自适应，表3）。
  - 超参数分析（\(\theta\) 灵敏度，图5）。
  - 极端噪声实验（100%噪声率，表4）。
  - 鲁棒损失（GCE）对比（图4）。

### 4. 资源与算力

- **文中未明确说明使用的GPU型号、数量及总训练时长**。
- 实现细节中提到：采用ResNet-50作为视觉编码器，Transformer作为文本编码器；可学习提示Token数为16；SGD优化器，学习率0.002，余弦退火；最大轮次200（ImageNet为50），第一轮使用热身学习率1e-5。未报告具体硬件配置与运行时间。

### 5. 实验数量与充分性

- **实验规模**：在10个数据集、12种噪声设定下，分别与4种对比方法比较（表1共120个结果对）。消融实验在2个数据集上进行（DTD和OxfordPets，表2含10余组）。额外对比图4包含4个子图，超参数分析2个图，极端噪声实验2个数据集。
- **充分性**：覆盖了多个领域（细粒度、场景、纹理、动作等），噪声类型多样且噪声率跨度大，对比了当前主流方法，进行了消融与参数分析。实验设计较为全面、公平（使用了相同的16-shot和测试集设置）。
- **客观性**：所有对比方法均采用论文报告的最佳设置或公开实现，结果复现性较好。

### 6. 主要结论与发现

- 所提出框架在绝大多数设定下（10个数据集×12种噪声）取得**最高准确率**，平均性能显著优于JoAPR、Robust UPL等现有方法。
- **双层级语义匹配**有效降低了干净与噪声样本的损失分布重叠，提升筛选准确率。
- **三段划分**（干净/模糊/噪声）比传统二段划分更精细，纠正策略更合理，性能提升显著。
- **再筛选**步骤（借助BLIP交叉验证）能有效缓解自确认偏差，在极端噪声（100%）下仍保持鲁棒性。
- 自适应置信权重优于固定权重，超参数 \(\theta\) 在0.01附近最优。

### 7. 优点（方法或实验设计亮点）

- **方法创新**：首次将“双层级语义匹配 + 三段划分 + 交叉验证再筛选”统一用于VLM噪声标签微调，框架系统且思路清晰。
- **解决核心难点**：通过一致性约束和熵惩罚缓解了单级提示的过拟合与欠拟合问题；再筛选引入外部BLIP模型，有效打破自确认循环。
- **实验全面**：10个数据集涵盖多种视觉语义，噪声类型与噪声率覆盖广；消融实验逐层验证各组件贡献，分析细致。
- **极端情况验证**：100%噪声率实验证明了方法的极限鲁棒性，区别于大部分方法仅在中低噪声下测试。
- **实用性强**：基于Prompt Tuning，参数量少，适合小样本场景。

### 8. 不足与局限

- **计算开销**：需额外调用BLIP模型进行特征相似度计算，且需多次拟合GMM，相比CoOp等基线增加了推理/训练复杂度。论文未提供时间或显存对比。
- **超参数敏感**：\(\lambda\)、\(\beta\)、\(\theta\)、\(\kappa\) 等需要手动调优，不同数据集可能需调整，文中仅在DTD上分析了\(\theta\)，缺少多数据集超参数鲁棒性分析。
- **对细粒度任务的挑战**：作者在结论中指出高噪声率和细粒度设置下仍有提升空间（如StanfordCars上整体准确率低于其他数据集），未进一步分析原因。
- **依赖外部模型**：再筛选依赖BLIP的质量，若BLIP在目标领域（如医疗、遥感）表现不佳，可能导致再筛选失效。
- **真实噪声场景**：实验使用合成的Symflip/Pairflip噪声，未在真实标注噪声数据集（如WebVision、Clothing1M）上验证，泛化性需进一步确认。

（完）

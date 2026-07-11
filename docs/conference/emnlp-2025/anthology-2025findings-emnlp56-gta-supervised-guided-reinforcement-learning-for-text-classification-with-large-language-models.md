---
title: "GTA: Supervised-Guided Reinforcement Learning for Text Classification with Large Language Models"
title_zh: GTA：监督引导的强化学习用于大语言模型文本分类
authors: "Min Zeng, Jingfei Sun, Xueyou Luo, Shiqi Zhang, Li Xie, Caiquan Liu, Xiaoxin Chen"
date: 2025-11-01
pdf: "https://aclanthology.org/2025.findings-emnlp.56.pdf"
tags: ["query:mlr"]
score: 7.0
evidence: 监督引导的强化学习用于文本分类
tldr: 针对纯强化学习微调探索效率低、收敛慢，而监督微调性能上限有限的问题，提出Guess-Think-Answer (GTA)框架，将SFT的高效训练与RL的能力增益统一。模型先生成临时猜测（交叉熵损失优化），再反思生成最终答案，RL奖励同时塑造最终输出和反思过程。实验显示在文本分类任务上达到更高性能，验证了SFT与RL结合的有效性。
source: EMNLP-2025-Findings
selection_source: conference_retrieval
figures_json: "[{\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.56/fig-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1596, \"height\": 643, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.56/fig-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1516, \"height\": 101, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.56/fig-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 760, \"height\": 325, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.56/fig-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 792, \"height\": 480, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.56/fig-005.webp\", \"caption\": \"\", \"page\": 0, \"index\": 5, \"width\": 1561, \"height\": 806, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.56/fig-006.webp\", \"caption\": \"\", \"page\": 0, \"index\": 6, \"width\": 1564, \"height\": 581, \"label\": \"Figure\"}, {\"url\": \"assets/figures/emnlp-2025-findings/anthology-2025.findings-emnlp.56/fig-007.webp\", \"caption\": \"\", \"page\": 0, \"index\": 7, \"width\": 1568, \"height\": 655, \"label\": \"Figure\"}]"
tables_json: "[{\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.56/table-001.webp\", \"caption\": \"\", \"page\": 0, \"index\": 1, \"width\": 1450, \"height\": 93, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.56/table-002.webp\", \"caption\": \"\", \"page\": 0, \"index\": 2, \"width\": 1648, \"height\": 1195, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.56/table-003.webp\", \"caption\": \"\", \"page\": 0, \"index\": 3, \"width\": 1142, \"height\": 897, \"label\": \"Table\"}, {\"url\": \"assets/tables/emnlp-2025-findings/anthology-2025.findings-emnlp.56/table-004.webp\", \"caption\": \"\", \"page\": 0, \"index\": 4, \"width\": 720, \"height\": 176, \"label\": \"Table\"}]"
motivation: 纯强化学习微调探索效率低收敛慢，监督微调性能上限有限，需平衡效率与能力。
method: 提出Guess-Think-Answer框架，先用交叉熵损失优化临时猜测，再用RL奖励同时优化反思过程和最终答案。
result: 在文本分类任务上，GTA框架相比纯SFT或纯RL方法取得更高性能。
conclusion: SFT与RL结合可有效提升文本分类任务的效率和效果，验证了统一训练范式的潜力。
---

## Abstract
In natural language processing (NLP) tasks, pure reinforcement learning fine-tuning methods often suffer from inefficient exploration and slow convergence; while supervised fine-tuning (SFT) methods, although efficient in training, have limited performance ceiling and less solid theoretical foundation compared to reinforcement learning. To address efficiency-capability trade-off, we propose the Guess-Think-Answer (GTA) framework that combines the efficiency of SFT with the capability gains of RL in a unified training paradigm. GTA works by having the model first produce a provisional guess (optimized via cross-entropy loss), then reflect on this guess before generating the final answer, with RL rewards shaping both the final output and the format of the entire GTA structure. This hybrid approach achieves both faster convergence than pure RL and higher performance ceiling than pure SFT. To mitigate gradient conflicts between the two training signals, we employ loss masking and gradient constraints. Empirical results on three text classification benchmarks demonstrate that GTA substantially accelerates convergence while outperforming both standalone SFT and RL baselines.

---

## 论文详细总结（自动生成）

# GTA: 监督引导的强化学习用于大语言模型文本分类 — 论文详细总结

## 1. 论文的核心问题与整体含义（研究动机和背景）

- **核心问题**：在自然语言处理中，纯强化学习（RL）微调方法存在探索效率低、收敛慢的问题；而监督微调（SFT）虽训练高效，但性能天花板有限，且理论基础弱于RL。如何平衡效率与能力是当前挑战。
- **研究动机**：链式思考（CoT）推理可提升模型性能，但SFT需要大量人工标注推理链，成本高且质量不均。RL理论上能自动探索推理过程，但直接应用于文本分类易陷入低效探索。作者希望结合SFT的高效性和RL的理论优势，在统一训练框架中实现更优性能。
- **整体含义**：提出Guess-Think-Answer（GTA）框架，将模型输出分解为猜测（Guess）、思考（Think）、答案（Answer）三阶段，分别用SFT和RL优化，有效解决了效率-能力权衡问题。

## 2. 论文提出的方法论

### 核心思想
- 将传统CoT推理过程结构化：模型先生成一个直觉猜测（Guess），然后对猜测进行显式推理（Think），最后输出整合后的最终答案（Answer）。
- 采用**统一单阶段训练**：Guess部分使用交叉熵损失（SFT）进行监督；Think和Answer部分以及整体输出格式通过RL（GRPO算法）优化。

### 关键技术细节
1. **提示设计**：<guess>…</guess>、<think>…</think>、<answer>…</answer> 标签分别对应三个阶段。
2. **损失函数**：
   - SFT损失：仅对Guess段内的token计算交叉熵损失，其他位置掩码（mask）。
   - RL损失：基于GRPO算法，使用规则化奖励（包括格式正确性 R_format 和分类正确性 R_accuracy），奖励总和 R_total = R_format + R_accuracy。RL损失对答答案段和思考段进行优化，Guess段被掩码以避免干扰。
   - 总损失：L_total = λ1 * L_SFT + λ2 * L_RL，实验中λ1=λ2=1。
3. **损失掩码策略**：确保SFT和RL损失只作用于各自对应的输出段，减少梯度冲突。
4. **梯度冲突缓解**：当两个损失的梯度余弦相似度为负（即冲突）时，仅保留RL损失的梯度进行更新。

### 算法流程（文字描述）
- 输入文本 → 模型按GTA格式生成<guess>、<think>、<answer>。
- 训练时：对<guess>计算交叉熵损失；对<think>和<answer>以及整体格式，使用GRPO计算RL损失（基于组内优势）。
- 两个损失加权求和，并应用梯度冲突检测：若梯度方向不一致，则仅采用RL梯度。

## 3. 实验设计

### 使用的数据集/场景
- **SST-5**：斯坦福情感树库，5类情感，训练8544/测试2210。
- **Amazon**（Massive Scenario子集）：18类意图分类，训练11514/测试2974。
- **Emotion**：6类情感（英文推文），训练16000/测试2000。
- **BBC News**：5类新闻主题，训练1225/测试1000。

### Benchmark
- 对比方法：**SFT**（标准监督微调）、**GRPO**（纯RL基线，采用组相对策略优化）、**GTA**（本文方法）。
- 基座模型：Qwen2.5 3B、Qwen3 4B、Llama3.2 3B。

### 主要对比实验
- 在所有四个数据集上，对三个模型分别报告准确率和加权F1分数。
- 消融实验：将Guess段也替换为RL训练，对比GTA(RL) vs GTA(SFT+RL)。
- 零样本推理对比：Qwen3基座模型开启/关闭think模式。
- 收敛性分析：绘制GTA与GRPO在SST-5、Amazon、Emotion上的奖励曲线，并延长训练至10000步。

## 4. 资源与算力

- **硬件**：多节点集群，每个节点配备4块NVIDIA L40s GPU（每块48GB显存）。
- **分布式**：使用DeepSpeed ZeRO Stage 2进行协调。
- **精度与批大小**：bfloat16精度，每设备batch size=4。
- **RL配置**：每个prompt生成16个候选答案，重要性采样复用因子4，KL惩罚系数β=0.01。
- **训练轮数**：每个数据集训练3-4个epoch。未明确给出总训练时长或GPU小时数。

**注**：论文未报告具体训练时间或总GPU算力消耗。

## 5. 实验数量与充分性

- **实验数量**：包含3个模型×4个数据集共12组主对比实验；1组消融；1组零样本探索；3个数据集×2个规模的收敛曲线；1组长训练步骤分析；并提供了推理案例分析。
- **充分性**：
  - 覆盖多个领域（情感、意图、新闻、情绪）和不同类别数（5~18），展示了泛化能力。
  - 使用三个不同系列模型（Qwen2.5、Qwen3、Llama3.2），避免单一模型偏差。
  - 消融实验验证了Guess监督的必要性。
  - 收敛分析和长训练证明GTA不仅收敛快，且性能上限更高。
- **公平性**：对比方法SFT和GRPO均使用相同基座模型，训练配置尽量保持一致（除GTA特有的结构和损失）。但RL基线GRPO未采用GTA的提示模板，这可能影响比较的公平性（因为GTA的模板本身可能带来收益）。不过消融实验中的GTA(RL)已控制模板相同。

## 6. 论文的主要结论与发现

- **GTA在所有数据集上一致优于SFT和GRPO**，平均准确率提升1~2个百分点（绝对值），F1类似。
- **收敛速度显著加快**：GTA在少数几步内即可达到较高奖励值，而GRPO需要数千步才能相近；即使训练至10000步，GRPO仍未追上GTA性能。
- **猜测阶段的有效性**：消融实验显示，将Guess替换为RL训练后性能下降，说明监督信号在引导初始预测上起到关键作用。
- **零样本分析**：即使基座模型，启用think模式也能提升性能，验证了推理步骤的价值。
- **案例分析**：模型能通过推理纠正错误猜测，并显式指出标签集不包含错误类别，减轻幻觉。

## 7. 优点

1. **创新框架设计**：巧妙地将SFT和RL融合在一个三段式输出结构中，各司其职，互补优势。
2. **损失掩码与梯度冲突缓解**：工程上有效解决了多任务学习中的梯度干扰问题，使联合训练稳定。
3. **无需人工标注推理链**：RL自动探索推理过程，降低标注成本。
4. **收敛效率高**：显著快于纯RL方法，实用性更强。
5. **性能提升稳健**：在多个模型和数据集上一致优于基线，且消融实验验证设计。
6. **可解释性**：模型输出显式推理过程，便于分析错误和调整。

## 8. 不足与局限

1. **实验规模受限**：仅验证在3B和4B参数模型上，未在更大模型（如7B、13B）或更广泛场景（如生成式任务）测试，泛化性有待验证。
2. **未处理数据噪声**：作者承认未对公开数据做预处理或高质量子集筛选，可能影响结果上限。
3. **提示模板的干扰**：GTA的自定义提示格式可能与SFT/GRPO的默认格式不同，部分性能提升可能来自模板设计而非方法本身（但消融实验部分控制了这一变量）。
4. **梯度冲突处理过于简单**：仅采用余弦相似度正负判断来丢弃SFT梯度，可能丢失有益信息；更精细的梯度融合方法可能进一步提升性能。
5. **缺少统计显著性检验**：未报告多次运行的方差或显著性p值，无法判断提升是否统计可靠。
6. **RL奖励设计单一**：仅使用格式和正确性二元奖励，未引入更细粒度或模型奖励，可能限制RL探索空间。
7. **资源信息不完整**：未给出具体训练时长或GPU小时数，难以评估实际计算成本。

（完）

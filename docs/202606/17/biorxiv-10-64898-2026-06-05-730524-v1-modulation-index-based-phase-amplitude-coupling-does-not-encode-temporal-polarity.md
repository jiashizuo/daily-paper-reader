---
title: Modulation index-based phase-amplitude coupling does not encode temporal polarity
title_zh: 基于调制指数的相位-振幅耦合不编码时间极性
authors: "Keshavarzi, M."
date: 2026-06-09
pdf: "https://www.biorxiv.org/content/10.64898/2026.06.05.730524v1.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 6.0
evidence: EEG相位-振幅耦合分析
tldr: 相位-振幅耦合（PAC）常用调制指数（MI）量化神经振荡交互，但MI无法区分时间极性。通过反转低频相位180度，MI值不变而偏好相位旋转180度，表明MI仅反映振幅调制强度，不保留时间极性信息。研究建议结合相位敏感指标进行机制解释。
source: biorxiv
selection_source: fresh_fetch
motivation: 检验调制指数（MI）能否区分交叉频率耦合中相反的时间组织。
method: 结合数学分析与EEG数据，反转低频振荡相位180度后计算MI。
result: MI在相位反转后不变，而偏好相位旋转180度，表明MI不编码时间极性。
conclusion: MI不能单独支持时间对齐或方向性推断，需补充相位敏感指标。
---

## 摘要
背景：相位-振幅耦合（PAC）被广泛用于量化不同时间尺度神经振荡之间的相互作用，并常被解释为反映慢速和快速神经活动之间具有时间意义的协调。
新方法：结合经验脑电图数据与数学分析，我们通过将低频振荡的相位反转180度，测试了基于调制指数（MI）的PAC是否能区分跨频率耦合的相反时间组织。
结果：相位反转后MI保持不变，而偏好相位恰好旋转了180度。因此，跨频率耦合的相反时间组织产生了相同的MI值。
与现有方法的比较：与偏好相位和完整的相位分箱振幅分布不同，MI量化了相位依赖的振幅调制强度，但不保留关于时间极性或相位方向的信息。
结论：基于调制指数的PAC不编码时间极性，因此其本身无法支持关于时间对齐、相位极性或方向性的推断。寻求时间组织机制解释的研究应使用相位敏感测量来补充MI。

## Abstract
BackgroundPhase-amplitude coupling (PAC) is widely used to quantify interactions between neural oscillations across timescales and is often interpreted as reflecting temporally meaningful coordination between slow and fast neural activity.

New methodCombining empirical EEG data with mathematical analysis, we tested whether modulation index (MI)-based PAC distinguishes opposite temporal organisations of cross-frequency coupling by inverting the phase of the low-frequency oscillation by 180{degrees}.

ResultsMI remained unchanged after phase inversion, whereas preferred phase rotated by exactly 180{degrees}. Thus, opposite temporal organisations of cross-frequency coupling yielded identical MI values.

Comparison with existing methodsUnlike preferred phase and the full phase-binned amplitude profile, MI quantifies the strength of phase-dependent amplitude modulation but does not retain information about temporal polarity or phase direction.

ConclusionsModulation index-based PAC does not encode temporal polarity and therefore cannot, on its own, support inferences about temporal alignment, phase polarity, or directionality. Studies seeking mechanistic interpretation of temporal organisation should complement MI with phase-sensitive measures.
---
title: Speech Synthesis from Electrocorticography during Imagined Speech Using a Transformer-Based Decoder and a Pretrained Vocoder
title_zh: 基于Transformer解码器和预训练声码器的想象言语脑皮层电图语音合成
authors: "Komeiji, S., Shigemi, K., Mitsuhashi, T., Iimura, Y., Suzuki, H., Sugano, H., Shinoda, K., Yatabe, K., Tanaka, T."
date: 2026-06-13
pdf: "https://www.biorxiv.org/content/10.1101/2024.08.21.608927v4.full.pdf"
tags: ["query:eeg-llm-agent"]
score: 7.0
evidence: 用于想象语音的脑机接口
tldr: 针对想象语音合成缺乏同步音频训练数据的问题，提出利用发音语音音频作为替代训练目标。采用Transformer解码器从ECoG生成对数梅尔频谱图，并用预训练Parallel WaveGAN转换为波形。在13名参与者实验中，合成语音与代理目标的动态时间规整对齐皮尔逊相关系数达0.74-0.84，证明发音语音音频可作为有效训练目标。
source: biorxiv
selection_source: fresh_fetch
motivation: 想象语音ECoG合成缺乏同步音频，而发音语音音频可作为替代训练目标。
method: 利用发音语音音频作为想象语音的代理训练目标，采用Transformer解码器生成对数梅尔频谱图，并用预训练Parallel WaveGAN合成波形。
result: 13名参与者实验中，合成语音与代理目标的DTW对齐皮尔逊相关系数达0.74-0.84。
conclusion: 发音语音音频可作为想象语音合成的有效训练目标，解决无行为输出时的训练难题。
---

## 摘要
从想象言语期间记录的脑皮层电图信号合成语音仍然是一个挑战，因为缺乏用于训练的同步音频信号。为了解决这个问题，我们提出了一种训练框架，利用在发声言语任务期间记录的音频作为想象言语信号的替代真实值，基于语言内容的一致性。我们采用基于Transformer的解码器从想象言语ECoG生成对数梅尔频谱图，然后使用预训练的Parallel WaveGAN将其转换为波形音频。在涉及13名参与者的ECoG记录实验中，合成语音与代理目标之间的动态时间规整对齐皮尔逊相关系数范围为0.74至0.84。这些结果表明，发声言语音频可以作为重建想象言语的有效训练目标，为在缺乏行为输出的情况下训练解码器提供了一种可行的解决方案。

## Abstract
Synthesizing speech from Electrocorticogram (ECoG) signals recorded during imagined speech remains a challenge due to the absence of synchronized audio signals for training. To address this, we propose a training framework that utilizes audio recorded during overt speech tasks as a surrogate ground truth for imagined speech signals, based on the consistency of the linguistic content. We employed a Transformer-based decoder to generate log-mel spectrograms from imagined speech ECoG, which were then converted into waveform audio using a pre-trained Parallel WaveGAN. In experiments involving ECoG recordings from 13 participants, the synthesized speech achieved dynamic time warping-aligned Pearson correlation coefficients ranging from 0.74 to 0.84 with the proxy targets. These results demonstrate that overt speech audio can serve as an effective training target for reconstructing imagined speech, offering a viable solution for training decoders in the absence of behavioral output.
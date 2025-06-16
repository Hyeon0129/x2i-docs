---
sidebar_position: 4
title: Model Updates
hide_table_of_contents: true
---



### Stay up to date with the latest model support updates for Tenstorrent.


<div class="model-month">
  <h2>May 2025</h2>

  <div class="model-update">
    <div class="model-date">May 26</div>
    <div class="model-content">
      <strong>Llama 3.1-8B</strong><br/>
      Added support for Llama 3.1 8B on Blackhole P100, P150, 2xP150.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">May 26</div>
    <div class="model-content">
      <strong>Mistral 7B</strong><br/>
      Added support for Mistral 7B in <a href="https://github.com/tenstorrent/tt-metal/tree/main/models/tt_transformers" target="_blank"> models/tt_transformers.</a><br/>
      Integrated Mistral 7B into the <a href="https://github.com/tenstorrent/vllm/tree/dev/tt_metal" target="_blank"> vLLM fork.</a>
    </div>
  </div>
  

  <div class="model-update">
    <div class="model-date">May 5</div>
    <div class="model-content">
      <strong>Llama 3.2-90B-Vision</strong><br/>
      Added support for Llama 3.2 90B Vision on QuietBox.
    </div>
  </div>
</div>

<div class="model-divider"></div>

<div class="model-month">
  <h2>April 2025</h2>

  <div class="model-update">
    <div class="model-date">Apr 22</div>
    <div class="model-content">
      <strong>TT-Transformers</strong><br/>
      Added support for non-uniform data format configurations in decoder layers.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Apr 7</div>
    <div class="model-content">
      <strong>Llama 3.1-70B – Galaxy</strong><br/>
      Achieved 45 t/s/u decode mode on Galaxy with batch size 32 and sequence length 128.<br/>
      Optimizations: DRAM prefetching, SubDevices, CCL via TT-Fabric.
    </div>
  </div>
</div>

<div class="model-divider"></div>

<div class="model-month">
  <h2>March 2025</h2>

  <div class="model-update">
    <div class="model-date">Mar 24</div>
    <div class="model-content">
      <strong>TT-Transformers</strong><br/>
      Moved llama3 demos to <code>tt_transformers</code>. Added hybrid data/tensor parallelism.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Mar 24</div>
    <div class="model-content">
      <strong>Whisper</strong><br/>
      Added support for Whisper (distil-large-v3) model on N150.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Mar 10</div>
    <div class="model-content">
      <strong>QwQ-32B</strong><br/>
      Added support for QwQ-32B on QuietBox.
    </div>
  </div>
</div>

<div class="model-divider"></div>

<div class="model-month">
  <h2>February 2025</h2>

  <div class="model-update">
    <div class="model-date">Feb 24</div>
    <div class="model-content">
      <strong>DeepSeek R1 Distill Llama 3.3 70B</strong><br/>
      Added support for DeepSeek R1 Distill Llama 3.3 70B on QuietBox.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Feb 24</div>
    <div class="model-content">
      <strong>Qwen 2.5</strong><br/>
      Added support for Qwen2.5-7B on N300 and Qwen2.5-72B on QuietBox.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Feb 24</div>
    <div class="model-content">
      <strong>Llama 3.1/3.2</strong><br/>
      Overhauled demo script with simplified causal generation. Added support for input overrides.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Feb 10</div>
    <div class="model-content">
      <strong>Llama 3.1/3.2</strong><br/>
      Enabled HuggingFace model format support.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Feb 10</div>
    <div class="model-content">
      <strong>Llama 3.2-11B-Vision</strong><br/>
      Added text-only prompt processing and vLLM fork support.
    </div>
  </div>
</div>

<div class="model-divider"></div>

<div class="model-month">
  <h2>January 2025</h2>

  <div class="model-update">
    <div class="model-date">Jan 13</div>
    <div class="model-content">
      <strong>Llama 3 series</strong><br/>
      Integrated into vLLM fork. Enabled max context prefill (131072) on N150/N300.
    </div>
  </div>
</div>


<div class="model-month">
  <h2>December 2024</h2>

  <div class="model-update">
    <div class="model-date">Dec 16</div>
    <div class="model-content">
      <strong>Llama 3.1/3.2</strong><br/>
      Added support for batch size 32 and the maximum context length (131072 tokens).<br/>
      Added full hardware compatibilty for the 1B/3B/8B/11B/70B models (all models are now compatible with N150, N300, QuietBox, Galaxy except for 70B which is only supported on QuietBox and Galaxy due to its large size).
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Dec 02</div>
    <div class="model-content">
      <strong>Llama 3.1/3.2</strong><br/>
      Improved the decode performance of the 1B/3B/8B/11B text models (for 8B, increased from ~23 t/s/u to ~28 t/s/u) by using BFP4 weights (instead of BFP8) for FF1 and FF3 in the MLP.<br/>
      Added the option to specify custom model configurations, with two defaults for performance and accuracy already provided.
    </div>
  </div>
</div>

<div class="model-divider"></div>

<div class="model-month">
  <h2>November 2024</h2>

  <div class="model-update">
    <div class="model-date">Nov 18</div>
    <div class="model-content">
      <strong>Llama 3.2 - 1B/3B/11B</strong><br/>
      Created a new shared codebase for the Llama3 family of models, with newly added support for Llama3.2-1B/3B/11B.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Nov 18</div>
    <div class="model-content">
      <strong>Llama 3/3.1 - 70B</strong><br/>
      Added support for the <code>ttnn.experimental.rotary_embedding_llama</code> op in decode mode, eliminating unnecessary device transfers of rotation matrices.
    </div>
  </div>
</div>

<div class="model-divider"></div>

<div class="model-month">
  <h2>October 2024</h2>

  <div class="model-update">
    <div class="model-date">Oct 21</div>
    <div class="model-content">
      <strong>Llama 3/3.1 - 70B</strong><br/>
      Enabled prefill workloads to pad to multiples of 1024 instead of powers of 2, improving overall performance for longer sequences.
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Oct 07</div>
    <div class="model-content">
      <strong>Llama 3.1 - 8B</strong><br/>
      Added support for continuous batching<br/>
      Added paged caching support for PagedAttention<br/>
      Added a demo which runs with TT-NN tracing (23 t/s/u decode on main)
    </div>
  </div>
</div>

<div class="model-divider"></div>

<div class="model-month">
  <h2>September 2024</h2>

  <div class="model-update">
    <div class="model-date">Sep 23</div>
    <div class="model-content">
      <strong>Llama 3/3.1 - 70B</strong><br/>
      Added support for 128K context length using PagedAttention<br/>
      Added a continuous batching demo for running multiple batches of users consecutively<br/>
      Added the option to enable TT-NN tracing
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Sep 09</div>
    <div class="model-content">
      <strong>Mixtral7Bx8</strong><br/>
      <em>Note: This feature is available as of release <a href="https://github.com/tenstorrent/tt-metal/tree/v0.52.0-rc1" target="_blank">v0.52.0-rc1</a></em><br/>
      Added support for any user prompt size up to a maximum of 32k tokens
    </div>
  </div>
</div>

<div class="model-divider"></div>

<div class="model-month">
  <h2>August 2024</h2>

  <div class="model-update">
    <div class="model-date">Aug 26</div>
    <div class="model-content">
      <strong>Falcon7B</strong><br/>
      Added data parallel demo for a single Galaxy (32 chips)<br/>
      Refactored all modules and tests to use ttnn multi-device tensors
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Aug 26</div>
    <div class="model-content">
      <strong>Llama 3.1 - 8B</strong><br/>
      <em>Note: Release <a href="https://github.com/tenstorrent/tt-metal/tree/v0.51.0-rc33" target="_blank">v0.51.0-rc33</a></em><br/>
      Added multi-batching support to the demo for running multiple batches of users consecutively
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Aug 26</div>
    <div class="model-content">
      <strong>Mixtral7Bx8</strong><br/>
      Improved end-to-end performance through optimizations to the attention mask in flash decoding
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Aug 12</div>
    <div class="model-content">
      <strong>Llama 3.1 - 8B</strong><br/>
      Added support for flash decoding
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Aug 12</div>
    <div class="model-content">
      <strong>Mistral7B</strong><br/>
      Updated the demo to support multiple batches of users
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Aug 12</div>
    <div class="model-content">
      <strong>Mamba-2.8B</strong><br/>
      Updated the demo to use the full prefill graph instead of processing a single token of the prompt at a time using decode
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Aug 12</div>
    <div class="model-content">
      <strong>Mixtral7Bx8</strong><br/>
      Added support for decode with 32K context length using flash decoding<br/>
      Fused mixture of experts into a single operation using <code>ttnn.moe</code>
    </div>
  </div>
</div>

<div class="model-divider"></div>

<div class="model-month">
  <h2>July 2024</h2>

  <div class="model-update">
    <div class="model-date">Jul 29</div>
    <div class="model-content">
      <strong>Llama 3.1 - 8B</strong><br/>
      Added support for LLaMA 3.1 - 8B<br/>
      Runs fast prefill for sequence lengths of up to 512 tokens<br/>
      Supports a maximum context length of 8K tokens
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Jul 29</div>
    <div class="model-content">
      <strong>Llama 3/3.1 - 70B</strong><br/>
      Added support for LLaMA 3.1 70B (new scaled rotary position embeddings)<br/>
      Prefill and decode now support 8K context length with batch size 16
    </div>
  </div>

  <div class="model-update">
    <div class="model-date">Jul 29</div>
    <div class="model-content">
      <strong>Mistral7B</strong><br/>
      Added prefill support for 4K context length, using scaled dot product attention
    </div>
  </div>
</div>

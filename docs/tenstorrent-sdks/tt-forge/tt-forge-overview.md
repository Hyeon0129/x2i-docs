---
sidebar_position: 1
title: TT-Forge Overview
hide_table_of_contents: true
---


# TT-Forge Overview
TT-Forge is Tenstorrent’s MLIR-based compiler, designed to bridge modern machine learning frameworks with Tenstorrent’s NPU hardware. It enables models from **PyTorch, 
TensorFlow, JAX, and ONNX** to be compiled into optimized binaries that run natively on Tenstorrent accelerators. As the top layer in the Tenstorrent software stack, it provides a unified path from high-level frameworks to hardware-level execution.


To support this, [**TT-Forge**](https://github.com/tenstorrent/tt-forge) is composed of several subcomponents—each responsible for a specific part of the compilation pipeline. These modules work together to ingest models, lower them into intermediate representations, and generate deployable binaries for NPU execution:


- [**TT-Torch**](https://github.com/tenstorrent/tt-torch) : Converts PyTorch models into StableHLO format using Torch-MLIR.
- [**TT-XLA**](https://github.com/tenstorrent/tt-xla) : Connects JAX models via OpenXLA (PJRT interface).
- [**TT-Forge-fe**](https://github.com/tenstorrent/tt-forge-fe) : Accepts multiple formats and optimizes model graphs (built on Apache TVM).
- [**TT-MLIR**](https://github.com/tenstorrent/tt-mlir) : Core compiler backend that lowers operations into Tenstorrent-specific instructions.
- [**TT-TVM**](https://github.com/tenstorrent/tt-tvm) : Customized TVM integration for broader framework support.

:::note
Together, TT-Forge ensures compatibility and performance across frameworks, compiling models into deployable binaries for NPU execution.
:::

<br />

<img src="https://docs.tenstorrent.com/tt-forge-fe/imgs/compiler_arch/tt-forge_overview.svg" />

<br />
<br />
<br />
<br />

#  Why is TT-Forge needed?

Tenstorrent NPUs have a distinct architecture and do not follow the CUDA-based GPU ecosystem. As a result, AI models developed for platforms like NVIDIA GPUs cannot run on Tenstorrent hardware without adaptation. **TT-Forge addresses this gap by acting as a compiler** that automatically transforms and optimizes models—originally written in PyTorch, TensorFlow, JAX, or ONNX—into a graph-based intermediate representation tailored for Tenstorrent accelerators. This eliminates the need for manual rewriting or low-level tuning, and enables seamless, high-performance deployment of existing AI models on Tenstorrent devices.

<br />

## Getting Started
To get started with TT-Forge:
 - Step 1. [Install the required drivers and firmware](/docs/gettingstarted/installation_guide)
 - Step 2. [Set up the TT-Forge environment](/docs/tenstorrent-sdks/tt-forge/tt-forge-fe-installation)
 - Step 3. [Run basic examples](/docs/tenstorrent-sdks/tt-forge/run-your-first-model)


---
sidebar_position: 1
title: System Requirements
hide_table_of_contents: true
---

# System Requirements

This page outlines the minimum system requirements to operate Tenstorrent NPUs.

## 1. Hardware Requirements (Wormhole & Blackhole)

| Requirement                     | Minimum                                                         |
|---------------------------------|-----------------------------------------------------------------|
| **CPU**                         | x86_64 architecture                                             |
| **Motherboard**                 | PCI Express 4.0 x16 slot                                        |
| **Memory**                      | 64 GB                                                           |
| **Storage**                     | 100 GB (≥2 TB recommended)                                      |
| **Power Connectors**            | Wormhole: 4+4-pin EPS12V , Blackhole: 12+4-pin                  |
| **Operating Temperature Range** | 0C - 75C                                                        |
| **Operating System**            | Ubuntu version 22.04 (Jammy Jellyfish) recommended              |

<br />

## 2. Platform-Specific Requirements

| Model      | PCIe Requirement       |
|------------|------------------------|
| Wormhole   | PCI Express 4.0 x16    |
| Blackhole  | PCI Express 5.0 x16    |

:::note
Cards are designed to operate at full performance in their respective recommended slots: PCIe 4.0 x16 for Wormhole and PCIe 5.0 x16 for Blackhole.  
While they may function in slots with lower lane count (e.g., x8 or x4) or older generations (e.g., PCIe 3.0), doing so can lead to reduced bandwidth and degraded performance
:::

<br />

## 3. Software Requirements

| Component        | Requirement                   |
|------------------|-------------------------------|
| Operating System | **Ubuntu 22.04 LTS (Jammy Jellyfish) recommended**             |
| Internet Access  | Required for driver and software stack installation.                   |


:::note
Only **Ubuntu 22.04 LTS** is officially validated for Tenstorrent software.  
Other Linux distributions (e.g., Debian, Fedora) may work, but compatibility is not guaranteed and issues may occur during SDK installation or usage.
:::

<br />

## 4. Supported Data Precision Formats

| Format                          | Bit Depth (Wormhole & Blackhole)                        | Bit Depth  (Big RISC-V Cores, Blackhole Only)        |
|---------------------------------|-------------------------------------------------|--------------------------------------|
| **Floating Point**           | FP8, FP16, BFLOAT16, FP32 (Output Only)            | FP8, FP16, BFLOAT16, FP32, FP64      |   
| **Block floating point**        | BLOCKFP2, BLOCKFP4, BLOCKFP8                    | N/A                                  |
| **Integer**                     | INT8, INT32 (Output Only)                       | INT8, INT16, INT32, INT64            |
| **Unsigned Integer**            | UINT8                                           | N/A                                  |
| **TensorFloat**                 | TF32                                            | N/A                                  |
| **Vector**                      | VTF19, VFP32                                    | VFP64                                |
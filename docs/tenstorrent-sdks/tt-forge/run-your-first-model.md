---
sidebar_position: 4
title: Run Your First Model
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { useState } from 'react';

# Run Your First Model with TT-Torch

<br />


This guide will walk you through running your first AI model using TT-Torch on Tenstorrent NPU hardware. We'll use a pre-trained ResNet model for image classification as an example to demonstrate how to compile and run models with TT-Torch.

:::info Important
Before proceeding, make sure you have already installed TT-Torch and set up your Tenstorrent NPU environment. If you haven't done this yet, please follow the [TT-Torch Installation Guide](/docs/tenstorrent-sdks/tt-forge/tt-torch-installation) first.
:::

<br />

# 1. Understanding the Example

We'll use the **ResNet-152** model from the TT-Torch demos. This model is a deep convolutional neural network that can classify images into 1,000 different categories. The example will:

 - **Load a pre-trained ResNet-152 model**
 - **Compile it for Tenstorrent hardware using TT-Torch**
 - **Process and classify sample images**
 - **Display the top 5 prediction results**

<br />

# 2. Setting Up the Environment

## 2.1 Activate the TT-Torch Environment

First, navigate to your TT-Torch installation directory and activate the environment:

```bash title="bash"
cd /opt/tt-torch
source env/activate
```

<br />

# 3. Running the ResNet Demo

The TT-Torch repository includes a ResNet demo that classifies images. From the project root, run:

```bash title="bash"
python demos/resnet/resnet50_demo.py --run_default_img
```
<br />

# Result
When running this on the default image (http://images.cocodataset.org/val2017/000000039769.jpg):
![alt text](./img/cat.png)

The output is ResNet's top 5 predictions:
```bash title="output"
Top 5 Predictions
-------------------------------
tabby: 0.58984375
tiger cat: 0.2236328125
Egyptian cat: 0.0235595703125
pillow: 0.005340576171875
remote control: 0.0042724609375
```

:::tip Understanding the Results 
The output shows the top 5 predictions for the image with confidence scores:

This means the model is most confident that the image contains a tabby cat (58.9% confidence), followed by a tiger cat (22.3% confidence), and so on.
:::

<br />


# 4. Multi-Device Execution

To run the model across multiple NPUs in parallel, use:

```bash title="bash"
python demos/resnet/resnet50_data_parallel_demo.py --use_simplified_manager
```

```bash title="output"
(venv) root@test:/opt/tt-torch# python demos/resnet/resnet50_data_parallel_demo.py --use_simplified_manager
2025-05-29 05:37:20.478 | INFO     | SiliconDriver   - Opened PCI device 0; KMD version: 1.34.0, IOMMU: disabled
  Detecting chips (found 2)                                                                                                                                                                                   
2025-05-29 05:37:20.525 | INFO     | SiliconDriver   - Opened PCI device 0; KMD version: 1.34.0, IOMMU: disabled
2025-05-29 05:37:20.528 | INFO     | SiliconDriver   - Opened PCI device 0; KMD version: 1.34.0, IOMMU: disabled
2025-05-29 05:37:20.530 | INFO     | SiliconDriver   - Harvesting mask for chip 0 is 0x220 (physical layout: 0x101, logical: 0x220, simulated harvesting mask: 0x0).
2025-05-29 05:37:20.537 | INFO     | SiliconDriver   - Opened PCI device 0; KMD version: 1.34.0, IOMMU: disabled
2025-05-29 05:37:20.597 | INFO     | SiliconDriver   - Harvesting mask for chip 1 is 0x210 (physical layout: 0x201, logical: 0x210, simulated harvesting mask: 0x0).
2025-05-29 05:37:20.604 | INFO     | SiliconDriver   - Detected PCI devices: [0]
2025-05-29 05:37:20.604 | INFO     | SiliconDriver   - Using local chip ids: {0} and remote chip ids {1}
2025-05-29 05:37:20.606 | INFO     | SiliconDriver   - Software version 6.0.0, Ethernet FW version 6.14.0 (Device 0)
2025-05-29 05:37:20.607 | INFO     | SiliconDriver   - Software version 6.0.0, Ethernet FW version 6.14.0 (Device 1)
Using simplified device manager
/opt/tt-torch/env/venv/lib/python3.10/site-packages/torch/fx/experimental/const_fold.py:264: UserWarning: Attempted to insert a get_attr Node with no underlying reference in the owning GraphModule! Call GraphModule.add_submodule to add the necessary submodule, GraphModule.add_parameter to add the necessary Parameter, or nn.Module.register_buffer to add the necessary buffer
  new_node = root_const_gm.graph.get_attr(in_node.target)
WARNING: Input 777 is not contiguous. Converting to contiguous in-place.
WARNING: Input 0 is not contiguous. Converting to contiguous in-place.
WARNING: Input 0 is not contiguous. Converting to contiguous in-place.
WARNING: Input 0 is not contiguous. Converting to contiguous in-place.

****************************************
Results from Device: <tt_mlir.Device object at 0x7ff81d5112b0>
Image URL: http://images.cocodataset.org/val2017/000000039769.jpg
Top 5 Predictions
-------------------------------
tabby: 0.58984375
tiger cat: 0.2236328125
Egyptian cat: 0.0235595703125
pillow: 0.005340576171875
remote control: 0.0042724609375

Image URL: https://farm5.staticflickr.com/4106/4962771032_82d3b7ccea_z.jpg
Top 5 Predictions
-----------------------------------
zebra: 0.85546875
ostrich: 0.001190185546875
hartebeest: 0.0006866455078125
Arabian camel: 0.000461578369140625
cheetah: 0.0003948211669921875

Image URL: https://farm5.staticflickr.com/4039/4184303499_115369327f_z.jpg
Top 5 Predictions
-----------------------------------
pizza: 0.7890625
frying pan: 0.002044677734375
plate: 0.00128936767578125
English setter: 0.00109100341796875
spatula: 0.000640869140625

Image URL: https://farm5.staticflickr.com/4117/4902338213_9c6fb559b8_z.jpg
Top 5 Predictions
--------------------------------
park bench: 0.76953125
swing: 0.0086669921875
rocking chair: 0.003387451171875
ashcan: 0.002899169921875
pot: 0.00122833251953125

Image URL: https://farm4.staticflickr.com/3744/10085008474_8d72a9dc5e_z.jpg
Top 5 Predictions
----------------------------------
electric locomotive: 0.7109375
passenger car: 0.042724609375
freight car: 0.00543212890625
steam locomotive: 0.004638671875
bullet train: 0.000812530517578125

****************************************
****************************************
```



:::tip
This leverages the `DeviceManager` module to distribute the workload across multiple chips.
:::



---
<br />

# 5. Understanding the Key Code

Let's look at the key parts of the demo code:

## 5.1 Model Loading

This code loads a pre-trained **ResNet-152** model with ImageNet weights, converts it to `bfloat16` precision , and sets it to evaluation mode.

```python title="python"
# Load the pre-trained model
weights = models.ResNet152_Weights.IMAGENET1K_V2
model = models.resnet152(weights=weights).to(torch.bfloat16).eval()
```

<br />


## 5.2 Compiler Configuration

This code configures the TT-Torch compiler with optimizations and compiles the model for Tenstorrent hardware.

```python title="python"
# Configure the TT-Torch compiler
cc = CompilerConfig()
cc.enable_consteval = True
cc.consteval_parameters = True
options = BackendOptions()
options.compiler_config = cc

# Compile the model for Tenstorrent hardware
tt_model = torch.compile(model, backend=backend, dynamic=False, options=options)
```

<br />

## 5.3 Image Processing and Inference

This code preprocesses the image and runs inference using the compiled model.

```python title="python"
# Process the image
img = preprocess(img)
img = torch.unsqueeze(img, 0)
img = img.to(torch.bfloat16)

# Run inference
top5, top5_indices = torch.topk(tt_model(img).squeeze().softmax(-1), topk)
```

<br />



---
sidebar_position: 5
title: Get the Sandbox ID
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1. Get the Sandbox ID

To connect to a running sandbox, you first need to retrieve its ID. You can do this by calling the `Sandbox.list()` method.

<Tabs>
  <TabItem value="javascript" label="JavaScript & TypeScript">

```javascript
import { Sandbox } from "@e2b/code-interpreter";

// Get all running sandboxes
const runningSandboxes = await Sandbox.list();

if (runningSandboxes.length === 0) {
  throw new Error("No running sandboxes found");
}

// Get the ID of the sandbox you want to connect to
const sandboxId = runningSandboxes[0].sandboxId;
```

  </TabItem>
  <TabItem value="python" label="🐍  Python">

```python
from e2b.code_interpreter import Sandbox

# Get all running sandboxes
running_sandboxes = Sandbox.list()

if len(running_sandboxes) == 0:
    raise Exception("No running sandboxes found")

# Get the ID of the sandbox you want to connect to
sandbox_id = running_sandboxes[0].sandbox_id
```
  </TabItem>
</Tabs>

## xogus
Basic button (default):

    <Button
      onClick={() => console.log('Clicked')}
    >
      Watch now 7 Days free
    </Button>

Large secondary button with icon:

    <Button
      size="large" 
      type="secondary"
      onClick={() => console.log('Clicked')}
      icon
    >
      view international programming
    </Button>

And you *can* **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

If you define a fenced code block with a language flag it will be rendered as a regular Markdown code snippet:

```javascript
import React from 'react';
```

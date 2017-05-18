# webpack-event-plugin
Inspired by [on-build-webpack](https://github.com/kossnocorp/on-build-webpack) but allows for adding a callback after user specified webpack event hooks.

## Installation
```
npm install --save-dev webpack-event-plugin
```

## Usage
``` javascript
var WebpackEventPlugin = require('webpack-event-plugin');

// ...  
plugins: [
  new WebpackEventPlugin([
    {
      hook: 'after-emit',
      callback: (compilation) => {
        console.log('Files emitted!');
      }
    }
  ])
]
// ...
```

## Available event hooks
https://webpack.js.org/api/plugins/compiler/#event-hooks

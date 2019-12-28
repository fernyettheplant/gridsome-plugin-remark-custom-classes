# gridsome-plugin-remark-classes

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)
[![buddy pipeline](https://app.buddy.works/jefer590/gridsome-plugin-remark-classes/pipelines/pipeline/231166/badge.svg?token=6e8dcf75b06e1172ac5a72d9170909b7bb8a6168588aaae14313b498478e4642 "buddy pipeline")](https://app.buddy.works/jefer590/gridsome-plugin-remark-classes/pipelines/pipeline/231166)

**Heavily** based on [chrisg86/gatsby-remark-classes](https://github.com/chrisg86/gatsby-remark-classes).

This **Gridsome Remark plugin** will help you to add css classes to your markdown elements

## Installation

```shell script
# npm
npm install --save @jefer590/gridsome-plugin-remark-classes

#yarn
yarn add @jefer590/gridsome-plugin-remark-classes
```

## Usage
In the `gridsome.config.js` file, add the plugin in the remark object in transformers: 

```javascript
module.exports = {
  transformers: {
      // Add markdown support to all file-system sources
      remark: {
        plugins: [
          ['@jefer590/gridsome-plugin-remark-classes', {
            classMap: {
              'heading[depth=1]': 'text-3xl',
              'heading[depth=2]': ['text-2xl', 'font-sans'],
              'heading[depth=3]': 'text-xl'
            }
          }]
        ]
      }
    }
}
```

Using the rules above, the following markdown:
```markdown
# Title 1

## Title 2

### Title 3
```

Will render this HTML:
```html
<h1 class="text-3xl">Title 1</h1>
<h2 class="text-2xl">Title 2</h2>
<h3 class="text-xl">Title 3</h3>
```

## classMap property
Please check [syntax-tree/mdast](https://github.com/syntax-tree/mdast#nodes) for the node list and have a look at the [Support section of unist-util-select](https://github.com/syntax-tree/unist-util-select#support)

const { selectAll } = require('unist-util-select')

const applyClassesToNode = (node, cssClasses) => {
  node.data = node.data || {}
  node.data.hProperties = node.data.hProperties || {}
  node.data.hProperties.className = node.data.hProperties.className || []

  // Set up Classes
  if (Array.isArray(cssClasses)) {
    node.data.hProperties.className.push(...cssClasses)
  } else {
    node.data.hProperties.className.push(cssClasses)
  }

  return node
}

module.exports = ({ classMap = {} }) => {
  return async (ast) => {
    Object.entries(classMap)
      .forEach(([selector, cssClasses]) => {
        const nodes = selectAll(selector, ast)

        nodes.forEach((node) => {
          node = applyClassesToNode(node, cssClasses)
        })
      })
  }
}

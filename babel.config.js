module.exports = {
  presets: [
    '@vue/app'
  ],
  'env': {
    'development': {
      'plugins': ['dynamic-import-node']
    },
    "test": {
      "plugins": ["transform-require-context"]
    }
  }
}

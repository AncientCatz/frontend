module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        }
      ]
    }
  }
}

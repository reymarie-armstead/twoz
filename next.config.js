const webpack = require('webpack')
const dotenv = require('dotenv')

dotenv.load()

module.exports = {
  webpack: (config, { buildId, dev }) => {
    config.plugins = [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env': Object.keys(process.env).reduce((o, k) => {
          o[k] = JSON.stringify(process.env[k])
          return o
        }, {})
      })
    ]
    return config
  }
}

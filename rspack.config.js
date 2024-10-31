const path = require('path');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { javascript } = require('webpack');


const DIST_PATH = path.resolve(__dirname, 'public/dist')
const production = process.env.NODE_ENV === 'production'
const development = !production
/**
 * 
 * @param {*} target 
 * @returns {import('@babel/core').ConfigFunction}
 */
const getConfig = target => ({
  context: __dirname,
  devtool:false,
  name: target,
  mode: development ? 'development' : 'production',
  target,
  entry: `./src/client/main-${target}.js`,
  module: {
    parser: {
      javascript: {
        
      }
    },
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            configFile: path.resolve(__dirname,'./babel.config.js'),
            caller: { target },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  externals:
    target === 'node' ? ['@loadable/component', nodeExternals()] : undefined,

  optimization: {
    // this will lead to runtime error
    runtimeChunk: target !== 'node',
    minimize:false
  },

  output: {
    path: path.join(DIST_PATH, target),
    filename: production ? '[name]-bundle-[chunkhash:8].js' : '[name].js',
    publicPath: `/dist/${target}/`,
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
  },
  plugins: [new LoadablePlugin()],
})

module.exports = [getConfig('web'), getConfig('node')]

import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {ESBuildPlugin} from 'esbuild-loader';

const config: Configuration = {
  mode: 'development',
  entry: './src/entry.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx', // Or 'ts' if you don't need tsx
        target: 'es6'
      }
    },]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ESBuildPlugin(),
  ]
}

export default config;

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


//Generate HtmlWebpackPlugin Function
const generateHtmlWebpackPlugin = (filename, chunks, title, template, description) => {
  return new HtmlWebpackPlugin({
    filename,
    chunks,
    title,
    template,
    description
    
  });
}



module.exports = {
  entry:{
    'home' : './src/pages/home.js',
    'schedule': './src/pages/schedule.js',
    'booking': './src/pages/booking.js',
    'training': './src/pages/training.js',
    'connection': './src/pages/connection.js',
    'details': './src/pages/details.js',
    'cart': './src/pages/cart.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3000
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024
          }
        }
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "usage",
                  "corejs": 3
                }
              ]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    generateHtmlWebpackPlugin(
      'home.html',
      ['home'],
      'Raux-design | Home',
      'src/page-template.hbs',
      'Home Page',
      //minify: false,
      
    ),
    generateHtmlWebpackPlugin(
      'schedule.html',
      ['schedule'],
      'Raux-design | Schedule',
      'src/page-template.hbs',
      'Schedule Page',
      //minify: false,
      
    ),
    generateHtmlWebpackPlugin(
      'booking.html',
      ['booking'],
      'Raux-design | Booking',
      'src/page-template.hbs',
      'Booking Page'
    ),
    generateHtmlWebpackPlugin(
      'training.html',
      ['training'],
      'Raux-design | Training',
      'src/page-template.hbs',
      'Training Page'
    ),
    generateHtmlWebpackPlugin(
      'connection.html',
      ['connection'],
      'Raux-design | Connection',
      'src/page-template.hbs',
      'Connection Page'
    ),
    generateHtmlWebpackPlugin(
      'details.html',
      ['details'],
      'Raux-design | Details',
      'src/page-template.hbs',
      'Details Page'
    ),
    generateHtmlWebpackPlugin(
      'cart.html',
      ['cart'],
      'Raux-design | Cart',
      'src/page-template.hbs',
      'Cart Page'
    ),
  ]


};
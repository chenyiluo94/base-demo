const path = require('path');
const { override, fixBabelImports, addLessLoader, useBabelRc, disableEsLint, addWebpackAlias } = require('customize-cra');
const theme = require('./src/css/theme.js');
module.exports = override(
  // 非线上环境加vconsole
  // fixBabelImports('import', {
  //     libraryName: 'antd-mobile',
  //     style: true,
  //     // style: 'css',
  // }),
  // 添加less-loader配置
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  }),
  // 添加修饰器 根目录下创建.babelrc
  useBabelRc(),
  // 禁用默认eslint，使用自定义eslint,根目录下创建.eslintrc.js
  disableEsLint(),
  // alias
  addWebpackAlias({
    'src': path.join(__dirname, 'src'),
    '@src': path.join(__dirname, 'src'),
    '@app': path.join(__dirname, 'src'),
    '@actions': path.join(__dirname, 'src/redux/actions'),
    '@reducers': path.join(__dirname, 'src/redux/reducers'),
    '@apis': path.join(__dirname, 'src/apis'),
    '@utils': path.join(__dirname, 'src/utils'),
    '@components': path.join(__dirname, 'src/components'),
    '@components_taiping': path.join(__dirname, 'src/components_taiping'),
    '@partials': path.join(__dirname, 'src/partials'),
    '@partials_taiping': path.join(__dirname, 'src/partials_taiping'),
    '@configs': path.join(__dirname, 'src/configs'),
    '@config': path.join(__dirname, 'src/configs/config.js'),
    '@ajax': path.join(__dirname, 'src/configs/ajax.js'),
    '@reg': path.join(__dirname, 'src/configs/regular.config.js'),
    '@images': path.join(__dirname, 'src/images'),
    '@middleware': path.join(__dirname, 'src/middleware'),
    '@pages': path.join(__dirname, 'src/pages')
  }), (config) => {
		config.devtool = false
		if (process.env.NODE_ENV === 'development') {
			config.devtool = "source-map"
		}
    return config
  })
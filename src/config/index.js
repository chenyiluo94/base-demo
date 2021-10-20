// 常用配置
const site_name = '下载项目'
const dev_url = process.env.NODE_ENV === 'development' ? '' : ''; // 接口地址
const base_path = ""; //接口 共用路径
const factory_path = '/bizapi/module'  // 页面工厂 path
const factory_base = '/bizapi'
const pro_url = ''; // 线上接口地址，同域为空
const base_url = process.env.NODE_ENV === 'production' ? pro_url : dev_url;

const client = 'H5';
module.exports = {
  site_name,
  base_url,
  base_path,
  client,
  factory_path,
  factory_base,
}

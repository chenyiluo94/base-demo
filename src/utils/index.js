import qs from 'qs'
export const get_search = (data) => {
  return qs.stringify(data, {
    sort: function (a, b) {
      let len = a.length;
      for (let i = 0; i < len; i++) {
        if (a[i] !== b[i]) {
          a = a[i] || '';
          b = b[i] || '';
          break;
        }
      }
      return a.charCodeAt() - b.charCodeAt()
    }
  })
}
//获取链接里面参数 获取到的是一个全部参数的对象
export const getUrlParam = (searchP) => {
  var params = {}
  var search = window.location.hash
  if (searchP) {
    search = window.location.search.replace('/', '')
  }
  search = /\?/.test(search) && search.split("?")[1]
  var searchs = /\&/.test(search) ? search.split("&") : [search]
  for (var i = 0; i < searchs.length; i++) {
    if (/\=/.test(searchs[i])) {
      var item = searchs[i].split("=")
      params[item[0]] = item[1]
    }
  }
  return params
}
export default {
  get_search,
  getUrlParam
}

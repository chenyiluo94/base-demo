import React from 'react';
import { Route } from 'react-router-dom'
import utils from '@utils'
import log from '@utils/log'
import { UserAgent } from '@utils/useragent'
import share from 'src/utils/share'
// import { loginJump } from 'src/utils/loginCtrl'
import { store } from 'src/utils'
import { getShareCfg, shareTable } from 'src/config/share.js'
// import { setdotRfCookie, setPageCookie } from 'src/utils/cookie.js'
import { isBx, addfeature } from 'src/utils/bx_sdk'
import ErrorTrapping from '@components/common/ErrorTrapping'
// import Cookies from 'js-cookie';
// import qs from 'querystringify'
// import Url from 'url-parse'

class Approute extends React.Component {
  constructor(props) {
    super(props);
    this.pageShare = this.pageShare.bind(this)
    this.state = {}
    this.params = {}
    this.mainHost = ''
    this.params1 = utils.getUrlParam('search');
    this.params2 = utils.getUrlParam();
    this.allParams = {
      ...this.params1,
      ...this.params2
    }
  }
  async pageShare() {
    const shareCfg = await getShareCfg(this.props)
    const shareOpt = shareCfg.share
    const reg = new RegExp(this.props.location.pathname.substr(1), 'i')
    const canBxShare = shareTable.find((item) => reg.test(item.pathname))
    if (isBx && canBxShare) { // 官网app
      return addfeature({
        share: {
          title: shareOpt.title,
          desc: shareOpt.desc,
          img: shareOpt.imgUrl,
          url: shareOpt.link || window.location.href
        }
      });
    } else {
      return share.wx_jssdk_share_entry({
        location: this.props.location,
        share: shareOpt
      })
    }
  }
  componentWillMount() {
    //添加fr&channel的cookie覆盖逻辑
    // setPageCookie();
    this.setClientStore()
    //this.storeMiniInfo();
  }
  componentDidMount() {
    // loginJump(this.props.location.search)
    this.pageShare();
    if (UserAgent.env.ios && UserAgent.env.UCBrowser) {
      document.activeElement.blur()
    }
    // 设置打点
    document.addEventListener('DOMContentLoaded', () => {
      var loadTime = window.performance.timing.domContentLoadedEventStart - window.performance.timing.navigationStart;
      log({ ps: 'loadtime_' + loadTime / 1000 + 's', tp: 'loadtime' })
      this.commonDotLog()
      window.addEventListener('hashchange', () => {
        this.commonDotLog()
      }, false)
    }, false)

    // utils.set_log()
    document.body.style.overflowY = 'auto'
  }

  componentWillUnmount() {
    // setPageCookie();
    if (isBx) { // 官网app
      return addfeature({})
    }
  }
  commonDotLog() {
    if (this.props.location.pathname === '/') {
      // log({ ps: '/index', tp: 'page' })
    } else {
      log({ ps: window.location.hash.substr(1), tp: 'page' })
    }
  }
  setClientStore() {
    const params = utils.get_url_params(this.props.location.search)
    let client = store.session_get('client') || {}
    if (params.source && params.source != client.value) {
      store.session_set('client', {
        value: params.source || ''
      })
    }
  }
  render() {
    return (<Route {...this.props}></Route>)
  }
}
export default ErrorTrapping(Approute)

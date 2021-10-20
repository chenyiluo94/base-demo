/**
 * axios 封装
 * 统一处理请求/拦截/异常/参数
 */
import { Toast } from 'antd-mobile';
import axios from 'axios';
import config from '../config/index'
import utils from 'src/utils'
import Cookies from 'js-cookie';

let cancel;
let promiseArr = {};

const CancelToken = axios.CancelToken;
// 请求拦截器
axios.interceptors.request.use(conf => {
    // set header
    conf.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    conf.headers['Accept'] = 'application/json, text/plain, */*';
    // 发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[conf.url] && !conf.ext.repeat_req) {
        promiseArr[conf.url]('取消重复请求:' + conf.url);
        promiseArr[conf.url] = cancel;
    } else {
        promiseArr[conf.url] = cancel;
    }
    return conf;
}, error => {
    return Promise.reject(error)
});
// 响应拦截器即异常处理
axios.interceptors.response.use(
    (response) => {
        return { ...response.data }
    }, (error) => {
        // 可加入登录超时等的判断 https://xiaozhuanlan.com/topic/8295076341
        try {
            if (error && error.response) {
                switch (error.response.status) {
                    case 401:
                        error.message = '未授权，请重新登录';
                        break;
                    case 404:
                        error.message = '网络错误，请确认手机已连接上WiFi或蜂窝移动网络并重试';
                        break;
                    case 500:
                        error.message = '服务器端出错';
                        break;
                    default:
                        error.message = error.response.data.msg || `网络错误，请确认手机已连接上WiFi或蜂窝移动网络并重试`;
                }
            } else {
                if (error.message.indexOf('取消重复请求') === -1) {
                    //error.message = '连接到服务器失败';
                    error.message = '';
                }
            }
        } catch (e) {
            error.message = '网络错误，请确认手机已连接上WiFi或蜂窝移动网络并重试';
        }
        if (error.message && error.message.indexOf('取消重复请求') === -1) {
            Toast.hide();
            if (!(UserAgent.app.weixin && window.wx)) { // 微信里不提示
                Toast.info(error.message);
            }
        }
        return Promise.reject(error);
    });
const baseURL = config.base_url + config.base_path;
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 1000 * 60 * 3;
axios.defaults.withCredentials = true;
axios.defaults.responseType = 'json';
const ajax = async (method = 'POST', url = '', data = {}, ext = {}) => {
    // ext
    if (ext.base_url !== undefined) {
        axios.defaults.baseURL = ext.base_url;
    }
    let datas = '';
    const params = utils.get_search(data);
    datas = params
    const req = {
        method,
        data: datas,
        url,
        ext,
        cancelToken: new CancelToken(c => {
            cancel = c;
        })
    };
    return new Promise((resolve, reject) => {
        axios(req).then(res => {
            try {
                resolve(res)
            } catch (e) {
                if (url.indexOf('trail') > -1) {
                    log({ tp: 'server', ps: 'detail_trial_interfail' })
                }
                Toast.info('抱歉，发生异常错误。请稍后再试', 2);
            }
        }).catch(error => {
            if (url.indexOf('trail') > -1) {
                log({ tp: 'server', ps: 'detail_trial_interfail' })
            }
            reject(error)
        });
        if (ext.base_url !== undefined) {
            axios.defaults.baseURL = baseURL;
        }
    });
};
export const ErrorCode = {
    succ: 200,
    net: ''
}
export default {
    post(url, data, ext) {
        return ajax('post', url, data, ext);
    },
    get(url, data, ext) {
        return ajax('get', url, data, ext);
    }
};

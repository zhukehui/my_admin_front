import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import store from '@/store'
import {getToken} from '@/utils/auth'

console.log(getToken('token'))
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 100000, // request timeout
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "withCredentials": true
  }
})

// // request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    console.log('sessionid ' + getToken('jsessionid'))
    console.log('sessionid ' + store.getters.token)
    // if (getToken('jsessionid')) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['jsessionid'] = getToken('jsessionid')
      // console.log('sessionid ' + getToken('jsessionid'))
      // config.headers['cookie'] = getToken('jsessionid')
    // }
    config.headers['token'] = getToken('jsessionid')
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 0, it is judged as an error.
    if (res.errorCode !== 0) {
      Message({
        message: res.errorMessage || '登录失败！',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.errorCode === 500002 ) {
        // to re-login
        MessageBox.confirm('您的登录已超时，您可以继续留在当前页面或者重新登录', '确认登出', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            // this.$router.push({ path: this.redirect || '/login' })
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

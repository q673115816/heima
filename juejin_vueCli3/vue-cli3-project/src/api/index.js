import axios from 'axios'
import router from '../router'
import {
  Message
} from 'element-ui'
const service = axios.create({
  // 设置超时时间
  timeout: 60000,
  baseURL: process.env.BASE_URL
})

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const responseCode = response.status
  if (responseCode === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, (error) => {
  // 断网 或者 请求超时 状态
  if (!error.response) {
    // 请求超时状态
    if (error.message.includes('timeout')) {
      console.log('超时了')
      Message.error('请求超时，请检查网络是否连接正常')
    } else {
      // 可以展示断网组件
      console.log('断网了')
      Message.error('请求失败，请检查网络是否已连接')
    }
    return
  }

  // 服务器返回不是2开头的情况，会进入这个回调
  // 可以根据后端返回的状态码进行不同的操作
  const responseCode = error.response.status
  switch (responseCode) {
    // 401:未登陆
    case 401:
      // 跳转登陆页
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
      //   403: token过期
    case 403:
      // 弹出错误信息
      Message({
        type: 'error',
        message: '登陆信息过期，请重新登陆'
      })
      localStorage.removeItem('token')
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }, 1000);
      break
      //   404: 请求不存在
    case 404:
      Message({
        type: 'error',
        message: '网络请求不存在'
      })
      break
    default:
      Message({
        type: 'error',
        message: error.response.data.message
      })
      break
  }
  return Promise.reject(error)
})

// post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置
// 即设置post的请求头为application/x-www-form-urlencoded;charset=UTF-8
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default service

export const uploadFile = formData => {
  const res = service.request({
    method: 'post',
    url: '/upload',
    data: formData,
    headers: {
      'content-Type': 'multipart/form-data'
    }
  })
  return res
}

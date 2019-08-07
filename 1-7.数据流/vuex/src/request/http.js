import axios from './config'
export function get (url, payload) {
  return axios.get(url, {
    params: payload
  })
}

export function post (url, payload) {
  return axios.post(url, {
    params: payload
  })
}

import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
// import store from '../store'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 15000
})

service.interceptors.request.use(config => {
  console.log('--- fetch-request(config): ---\n')
  console.log(config)
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  console.log('--- fetch-request-error: ---\n')
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(response => {
  console.log('--- fecth-response(response): ---\n')
  console.log(response)
  return response.data
}, error => {
  console.log('--- axios-response-error ---\n')
  console.log(error)// for debug
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service

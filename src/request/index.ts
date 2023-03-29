/*
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-29 16:12:20
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-29 17:11:12
 */
import axios from "axios";
// 创建axios实例
const service = axios.create({
  baseURL: "https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
})

//请求拦截
service.interceptors.request.use((config) => {
  console.log({ config })
  config.headers = config.headers || {}
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token')
  }
  return config
})

//响应拦截
service.interceptors.response.use((res) => {
  console.log({ res })
  const code: number = res.data.data.code
  console.log({ code });

  if (code != 200) {
    return Promise.reject(res.data)
  }
  return res.data
}, (err) => {
  console.log(err)
})

export default service;
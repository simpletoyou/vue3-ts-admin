/*
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-29 16:25:51
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-31 22:16:37
 */
import service from "./index";
interface loginData {
  username: string,
  password: string
}
// 登录接口
export function login(data: loginData) {
  return service({
    url: "/login",
    method: "post",
    data
  })
}
// 商品列表接口
export function getGoodsList() {
  return service({
    url: "/getGoodsList",
    method: 'get'
  }
  )
}

// 用户列表接口
export function getUserList() {
  return service({
    url: "/getUserList",
    method: 'get'
  }
  )
}

// 角色列表接口
export function getRoleList() {
  return service({
    url: "/getRoleList",
    method: 'get'
  }
  )
}
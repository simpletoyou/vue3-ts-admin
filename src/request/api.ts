/*
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-29 16:25:51
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-29 16:56:52
 */
import service from "./index";
interface loginData {
  username: string,
  password: string
}
export function login(data: loginData) {
  return service({
    url: "/login",
    method: "post",
    data
  })
}
/*
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-29 15:49:00
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-29 15:51:06
 */
export interface LoginFormInt {
  username: string
  password: string
}
export class LoginData {
  ruleForm:LoginFormInt = {
    username:"",
    password:""
  }
}
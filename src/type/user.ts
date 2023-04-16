/*
 * @Description:
 * @version:
 * @Author: ChenShuShu
 * @Date: 2023-03-31 22:22:08
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-04-01 14:59:54
 */
export interface ListInt {
  id: number;
  nickName: string;
  userName: string;
  role: RoleInt[];
}
interface RoleInt {
  role: number;
  roleName: string;
}
interface SelectDataInt {
  role: number;
  nickName: string;
}
interface RoleListInt {
  authority: number[];
  roleId: number;
  roleName: string;
}

interface ActiveInt {
  id: number;
  nickName: string;
  userName: string;
  role: number[];
}

export class InitData {
  list: ListInt[] = []; //存放接口返回的用户列表数据
  selectData: SelectDataInt = {
    role: 0,
    nickName: "",
  };
  roleList: RoleListInt[] = []; //存放接口返回的角色列表数据
  isShow = false;
  active: ActiveInt = {
    id: 0,
    nickName: "",
    userName: "",
    role: [],
  };
}

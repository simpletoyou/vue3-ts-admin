export interface ListInt {
  userId: number,
  id: number,
  title: string,
  introduce: string
}
interface selectDataInt {
  title: string,
  introduce: string,
  page: number,//页码
  count: number,//总条数
  pagesize: number//默认一条显示几条数据
}
export class InitData {
  list: ListInt[] = []//展示的内容数据，接收后台返回的数据
  selectData: selectDataInt = {
    title: "",
    introduce: "",
    page: 1,
    count: 0,
    pagesize: 10
  }
}
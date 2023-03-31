<!--
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-31 14:15:56
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-31 22:05:17
-->
<template>
  <div>
    <div class="select-box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="selectData.title" placeholder="标题" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="selectData.introduce" placeholder="详情" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="dataList.comList" border style="width: 100%">
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="title" label="标题" />
        <el-table-column prop="introduce" label="详情" />
      </el-table>
      <el-pagination layout="prev, pager, next" :total="selectData.count" @current-change="currentChange"
        @size-change="sizeChange" :page-size="selectData.pagesize" />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs, computed, watch } from 'vue'
import { getGoodsList } from '../request/api'
import { InitData, ListInt } from "../type/goods"


export default defineComponent({
  setup() {

    const data = reactive(new InitData())
    let allData: ListInt[] = []
    getGoodsList().then((res) => {
      data.list = res.data
      allData = res.data
      data.selectData.count = res.data.length
    });
    const dataList = reactive({
      comList: computed(() => {
        return data.list.slice((data.selectData.page - 1) * data.selectData.pagesize, data.selectData.page * data.selectData.pagesize)
      })
    })
    const currentChange = (page: number) => {
      data.selectData.page = page
    }
    const sizeChange = (pagesize: number) => {
      data.selectData.pagesize = pagesize
    }
    const onSubmit = () => {
      console.log(data.selectData.title);
      console.log(data.selectData.introduce);
      let arr: ListInt[] = []//定义数组，存放筛选后表格数据
      if (data.selectData.title || data.selectData.introduce) {
        //判断是否有筛选条件
        if (data.selectData.title) {
          arr = data.list.filter(v => {
            return v.title.indexOf(data.selectData.title) !== -1
          })
        }
        if (data.selectData.introduce) {
          arr = data.list.filter(v => {
            return v.introduce.indexOf(data.selectData.introduce) !== -1
          })
        }
      } else {
        arr = data.list
      }
      data.list = arr
      data.selectData.count = arr.length

    }
    // 监听输入框的两个属性
    watch([() => data.selectData.title, () => data.selectData.introduce], () => {
      if (data.selectData.title == '' && data.selectData.introduce == '') {
        data.list = allData
        // 页码高亮需要默认第一页
        // //data.selectData.page = 1
        // // currentChange(1)
        data.selectData.count = allData.length
      }
    })
    return { ...toRefs(data), currentChange, sizeChange, dataList, onSubmit }
  }
})
</script>

<style scoped></style>
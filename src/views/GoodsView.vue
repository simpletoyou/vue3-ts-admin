<!--
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-31 14:15:56
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-31 21:29:54
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
        @size-change="sizeChange" />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { getGoodsList } from '../request/api'
import { InitData } from "../type/goods"


export default defineComponent({
  setup() {

    const data = reactive(new InitData())
    getGoodsList().then((res) => {
      data.list = res.data
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
    return { ...toRefs(data), currentChange, sizeChange, dataList }
  }
})
</script>

<style scoped></style>
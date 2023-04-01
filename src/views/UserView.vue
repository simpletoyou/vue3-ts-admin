<template>
  <div>
    <div class="select-box">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="selectData.nickName" placeholder="用户名" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="selectData.role" class="m-2" placeholder="请选择" size="large">
            <el-option label="全部" :value="0"></el-option>
            <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="list" border style="width: 100%">
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="nickName" label="姓名" />
        <el-table-column prop="role" label="角色">
          <!-- 插槽 -->
          <template #default="scope">
            <span v-for="item in scope.row.role" :key="item.role">{{ item.roleName }}&nbsp;</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { List } from 'lodash';
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import { getUserList, getRoleList } from '../request/api';
import { InitData, ListInt } from '../type/user';

export default defineComponent({
  setup() {
    const data = reactive(new InitData())
    onMounted(() => {
      getUser()
      getRole()
    })
    const getUser = () => {
      getUserList().then((res) => {
        data.list = res.data

      })
    }
    const getRole = () => {
      getRoleList().then((res) => {
        console.log({ res });
        data.roleList = res.data

      })
    }
    const onSubmit = () => {
      let arr: ListInt[] = []//定义数组，存放筛选后表格数据
      if (data.selectData.role || data.selectData.nickName) {
        //判断是否有筛选条件
        if (data.selectData.nickName) {
          arr = data.list.filter(v => {
            return v.nickName.indexOf(data.selectData.nickName) !== -1
          })
        }
        if (data.selectData.role) {
          arr = (data.selectData.nickName ? arr : data.list).filter(v => {
            return v.role.find(v => v.role === data.selectData.role)
          })
        }
      } else {
        arr = data.list
      }
      data.list = arr
    }
    // 监听输入框的两个属性
    watch([() => data.selectData.nickName, () => data.selectData.role], () => {
      if (data.selectData.nickName == '' || data.selectData.role == 0) {
        getUser()
      }
    })
    return { ...toRefs(data), onSubmit }
  }
})
</script>

<style scoped></style>
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
        <!-- 操作 -->
        <el-table-column prop="role" label="操作">
          <template #default="scope">
            <el-button type="primary" @click="changeUser(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 编辑弹窗 -->
    <el-dialog v-model="isShow" title="Shipping address">
      <el-form :model="active">
        <el-form-item label="姓名" label-width="50px">
          <el-input v-model="active.nickName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="角色" label-width="50px">
          <el-select multiple v-model="active.role" placeholder="请选择角色">
            <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isShow = false">Cancel</el-button>
          <el-button type="primary" @click="confirmChange()">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>


  </div>
</template>

<script lang="ts">
import { it } from 'element-plus/es/locale';
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

    const changeUser = (item: ListInt) => {
      console.log({ item })
      data.active = {
        id: item.id,
        nickName: item.nickName,
        userName: item.userName,
        role: item.role.map((v: any) => v.role || v.roleId)
      }
      data.isShow = true
    }

    const confirmChange = () => {
      console.log(data.active)
      let obj: any = data.list.find((v) => { return v.id === data.active.id })

      obj.nickName = data.active.nickName
      obj.role = data.roleList.filter((v) => data.active.role.indexOf(v.roleId) != -1)
      data.list.forEach(item => {
        if (item.id === obj.id) {
          item = obj
        }
      })
      data.isShow = false
    }


    // 监听输入框的两个属性
    watch([() => data.selectData.nickName, () => data.selectData.role], () => {
      if (data.selectData.nickName == '' || data.selectData.role == 0) {
        getUser()
      }
    })
    return { ...toRefs(data), onSubmit, changeUser, confirmChange }
  }
})
</script>

<style scoped></style>
<!--
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-29 13:37:42
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-29 17:12:25
-->
<template>
  <div class="login-box">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="70px" class="demo-ruleForm">
      <h2>后台管理系统</h2>

      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button class="login-btn" @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { LoginData } from '../type/login'

import type { FormInstance, FormRules } from 'element-plus'

import { login } from '../request/api'

import { useRouter } from 'vue-router'


export default defineComponent({
  setup() {
    const data = reactive(new LoginData())
    console.log(new LoginData())
    const rules = {
      username: [
        {
          required: true,
          massage: 'Please enter the username',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          massage: 'Please enter the password',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 10,
          message: 'Length should be 3 to 10',
          trigger: 'blur'
        }
      ]
    }
    // 登录
    const ruleFormRef = ref<FormInstance>()
    const router = useRouter()
    const submitForm = (formEl: FormInstance | undefined) => {
      // 对表单输入进行验证
      // valid 布尔类型，为true表示数据输入验证成功，反之失败
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          console.log('submit!')
          // 调用登录接口
          login(data.ruleForm).then((res) => {
            console.log({ res });
            // 保存token
            localStorage.setItem('token', res.data.token)
            // 跳转到首页
            router.push('/')
          })
        } else {
          console.log('error submit!')
          return false
        }
      })
      console.log({ formEl });

    }
    // 重置
    const resetForm = () => {
      data.ruleForm.username = ''
      data.ruleForm.password = ''
    }
    // const resetForm = (formEl: FormInstance | undefined) => {
    //   if (!formEl) return
    //   formEl.resetFields()
    // }
    return { ...toRefs(data), rules, resetForm, ruleFormRef, submitForm }
  }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url("../assets/bg.jpeg") no-repeat;
  background-size: 100% 100%;
  padding: 1px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }


  .demo-ruleForm {
    width: 500px;
    margin: 200px auto;
    background-color: #FFF;
    padding: 40px 20px 10px;
    border-radius: 20px;

  }

  .login-btn {
    width: 45%;
  }
}
</style>
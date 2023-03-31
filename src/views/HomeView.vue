<!--
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-31 00:37:27
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-31 14:06:58
-->
<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <img src="../assets/logo.png" class="logo" alt="">
          </el-col>
          <el-col :span="16">
            <h2>后台管理系统</h2>
          </el-col>
          <el-col :span="4">
            <span class="quit-login">退出登录</span>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
      
      >
       
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>商品列表</span>
        </el-menu-item>
        
      </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  // components: {
  //   HelloWorld,
  // },
});
</script>

<style lang="scss" scoped>
.el-header {
  height: 80px;
  background: #666;
  color: #FFF;

  .logo {
    height: 04px;

  }

  h2,
  .quit-login {
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  
}
.el-aside {
  .el-menu {
    height: calc(100vh - 80px);


  }
  }
</style>
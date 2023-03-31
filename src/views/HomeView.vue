<!--
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-31 00:37:27
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-31 15:24:16
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
          <!-- router 开启路由模式，通过el-menu-item index来进行跳转 -->
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
            default-active="/goods" text-color="#fff" router>
            <el-menu-item :index="item.path" v-for="item in list" :key="item.path">
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 设置路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { useRouter } from "vue-router"

export default defineComponent({
  name: 'HomeView',
  // components: {
  //   HelloWorld,
  // },
  setup() {
    const router = useRouter()
    console.log(router.getRoutes())
    const list = router.getRoutes().filter(v => v.meta.isShow)
    console.log({ list })
    return { list }
  }
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
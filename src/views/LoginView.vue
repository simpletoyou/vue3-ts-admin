<!--
 * @Description: 
 * @version: 
 * @Author: ChenShuShu
 * @Date: 2023-03-29 13:37:42
 * @LastEditors: ChenShuShu
 * @LastEditTime: 2023-03-29 13:49:39
-->
<template>
  <div class="login-box">
    <h1>This is the login page.</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url("../assets/bg.jpeg") no-repeat;
  background-size: 100% 100%;
  h1 {
    text-align: center;
    color: #FFF;
  }
}
</style>
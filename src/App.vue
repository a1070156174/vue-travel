<!--
 * @Author: your name
 * @Date: 2020-08-20 21:28:32
 * @LastEditTime: 2020-08-20 21:49:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \travle\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>

<template>
<div>
  <el-menu mode="horizontal">
    <el-menu-item index="1"><a href="#/">Home</a></el-menu-item>
    <el-menu-item index="2" disabled >Calculation</el-menu-item>
  </el-menu>

  <div id="myApp">
    <router-view />
  </div>

  <footer>
    Copyright &copy; 2021 - Khankitty
  </footer>
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#myApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

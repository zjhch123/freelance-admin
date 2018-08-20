<template>
<div id="app">
  <el-container>
    <el-header class="header-nav">
      <HeaderNav />
    </el-header>
    <el-main class="main-section">
      <div class="main">
      <router-view></router-view>
      </div>
    </el-main>
  </el-container>
</div>
</template>
<script>
import HeaderNav from '@/components/HeaderNav'
export default {
  name: 'app',
  mounted() {
  },
  
  components: {
    HeaderNav
  }
}
</script>
<style lang="scss">
html {
  background: #f0f2f5;
  min-width: 1440px;
}
body {
  margin: 0;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header-nav {
  padding: 0;
  background-color: #545c64;
  
}
.main-section {
  min-height: 700px;
  .main {
    background: white;
    padding: 20px 32px;
  }
}
</style>

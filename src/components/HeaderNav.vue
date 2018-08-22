<template>
  <div class="header-container">
    <a href="javascript:;" class="u-logo">Freelancer</a>
    <el-menu
      :default-active="defaultIndex"
      class="header-menu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item class="menu-item" index="/"><router-link class="router" to="/">首页</router-link></el-menu-item>
      <el-menu-item class="menu-item" index="/verify"><router-link class="router" to="/verify">用户审核</router-link></el-menu-item>
      <el-menu-item class="menu-item" index="/recommend"><router-link class="router" to="/recommend">首页推荐</router-link></el-menu-item>
      <el-menu-item class="menu-item" index="/message"><router-link class="router" to="/message">发送消息</router-link></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  computed: {
    defaultIndex() {
      return this.$router.history.current.path
    }
  },
}
</script>
<style lang="scss" scoped>
.header-container {
  display: flex;
  align-items: center;
  .u-logo {
    font-size: 16px;
    color: white;
    display: block;
    height: 60px;
    line-height: 60px;
    text-decoration: none;
    padding: 0 32px;
  }
  .header-menu {
    .menu-item {
      padding: 0;
      .router {
        display: block;
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
      }   
    }
  }
}
</style>


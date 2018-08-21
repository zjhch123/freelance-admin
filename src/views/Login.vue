<template>
  <div class="login">
    <h1>Login</h1>
    <el-form class="form" ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      const username = this.username
      const password = this.password
      fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'x-csrf-token': Cookie.get('csrfToken'),
          'content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          username, password
        }),
        credentials: 'include',
      }).then(res => res.json())
        .then(res => {
          if (res.code === 200) {
            this.$router.push({
              name: 'index'
            })
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  width: 500px;
  margin: auto;
  h1 {
    text-align: center;
  }
  .form {
    margin-top: 40px;
  }
}
</style>

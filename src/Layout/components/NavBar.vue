<template>
  <div class="navbar">
    <div class="header-title" style="text-align:center;margin-top:10px;">{{msg}}</div>
    <div class="navbar">
      <el-dropdown class="btn-dropdown">
        <el-button type="primary">
          用户
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native.prevent="handleRegistered">注册</el-dropdown-item>
          <el-dropdown-item @click.native.prevent="handleLogin">登录</el-dropdown-item>
          <el-dropdown-item @click.native.prevent="handleLogout">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  // 声明接收属性：这个属性就会成为组件对象的属性
  data () {
    return {
      msg: 'Lynn的Vue DEMOS'
    }
  },
  methods: {
    handleRegistered () {
      setTimeout(() => {
        this.$router.push({
          path: '/registered',
          query: this.otherQuery
        })
        this.loading = false
        console.log('0')
      }, 1000)
    },
    handleLogin () {
      setTimeout(() => {
        this.$router.push({
          path: '/login',
          query: this.otherQuery
        })
        this.loading = false
        console.log('1')
      }, 1000)
    },
    handleLogout () {
      setTimeout(() => {
        this.$router.push({
          path: '/login',
          query: this.otherQuery
        })
        this.loading = false
        console.log('2')
      }, 1000)
    }
  }
}
</script>

<style scoped>
.el-dropdown{
  float: right;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

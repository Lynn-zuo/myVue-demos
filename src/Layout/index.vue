<template>
  <div class="layout">
    <el-container>
      <!--左侧导航栏-->
      <div class="siderbar">
        <SideBar />
      </div>
      <!--右侧内容-->
      <el-container class="right">
        <NavBar />
        <!--主要显示区域-->
        <el-main>
          <AppMain />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar,
    AppMain
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height:100%;
  display: flex;
  overflow:auto;
  .siderbar {
    left: 0;
    bottom: 0;
  }
}
.right {
  display: flex;
  margin-left:-5px; // 内容宽度随侧边栏变化
  justify-content: flex-start;
}
.el-main {
  background-color: lightyellow;
}
.el-footer {
  background-color: lightsteelblue;
}
</style>

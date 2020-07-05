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
        <el-footer></el-footer>
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
  height:100vh;
  display: flex;
  .siderbar {
    left: 0;
    bottom: 0;
  }
}
el-container.right {
  display: flex;
  height:100vh;
  margin-left:0rem; // 内容宽度随侧边栏变化
  justify-content: flex-start;
  el-main{
    overflow:hidden;
  }
}
</style>

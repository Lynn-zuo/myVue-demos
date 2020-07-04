<template>
  <div class="sidebar">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 15px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      router
      default-active="/login"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      style="height: 100vh;"
    >
      <el-submenu index="/home">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">主页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home">天气查询</el-menu-item>
          <el-menu-item index="/Todos">待做列表</el-menu-item>
          <el-menu-item index="/counter">计数器</el-menu-item>
          <el-menu-item index="/gragh">图表统计</el-menu-item>
          <el-menu-item index="/table">表格筛选</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/test">
        <i class="el-icon-menu"></i>
        <span slot="title">测试用例</span>
      </el-menu-item>
      <el-menu-item index="/message">
        <i class="el-icon-s-comment"></i>
        <span slot="title">消息管理</span>
      </el-menu-item>
      <el-menu-item index="/music">
        <i class="el-icon-headset"></i>
        <span slot="title">音乐播放</span>
      </el-menu-item>
      <el-submenu index="/piture">
        <template slot="title">
          <i class="el-icon-picture"></i>
          <span slot="title">图库</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/carousel">轮播</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/config">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span slot="title">配置管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/config">大小写转换</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/gitlink">
        <template slot="title">
          <i class="el-icon-s-help"></i>
          <span slot="title">外部链接</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">选项1</el-menu-item>
          <el-menu-item index="6-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
i.el-icon-headset{
  color:dimgrey;
  border: 1rem;
}
.sidebar {
  display: inline-block;
  overflow-y: scroll;
  .el-radio-group {
    width:75px;
  }
  .el-menu {
    height: 100vh;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 199px;
  min-height: 500px;
}
</style>

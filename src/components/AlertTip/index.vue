<template>
  <div id="dialog" class="dialog_container">
    <section class="alert_container">
      <div class="alert_content">
        <div class="tip_icon">
          <i class="el-icon-warning"></i>
          <span>提示信息</span>
        </div>
        <p class="tip_text">{{alertText}}</p>
      </div>
      <button class="confirm" @click="closeTip">确认</button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    alertText: String
  },
  methods: {
    closeTip () {
      // 分发自定义事件（事件名:closeTip）
      this.$emit('closeTip')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog_container {
  position: fixed;
  z-index: 9999;
  left:50%;
  top:50%;
  width: 310px;
  height: 185px;
  transform: translate(-50%, -50%);
  section.alert_container {
    background:seagreen;
    width:100%;
    height:100%;
    overflow: hidden;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    .alert_content{
      height: 80%;
      background: #fff;
      text-align: center;
      .tip_icon {
        i.el-icon-warning {
            margin-top: 30px;
            color:dimgrey;
        }
        span {
          color:dimgray;
          font-size:0.88em;
        }
      }
      p {
        font-weight: 300;
        font-size: 1.1em;
        color:black;
        padding: 15px 40px 20px 40px;
        margin: 0;
      }
    }
    button.confirm {
      display:block;
      height: 25px;
      width:45px;
      margin:5px auto;
      background-color:seagreen;
      border:none;
    }
  }
}
</style>

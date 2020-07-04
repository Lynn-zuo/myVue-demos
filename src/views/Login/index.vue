<template>
<body>
  <div class="bodystyle">
    <div class="loginOrregistered">
      <el-dropdown>
        <button class="el-dropdown-link">
          登录/注册<i class="el-icon-arrow-down el-icon--right"></i>
        </button>
        <el-dropdown-menu slot="dropdown" style="background:transparent;border:none;">
          <el-dropdown-item><router-link to="/login" style="text-decoration: none;color:gray;">登录</router-link></el-dropdown-item>
          <el-dropdown-item><router-link to="/registered" style="text-decoration: none;color:gray;">注册</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <section class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">Vue-program</h2>
          <div class="login_header_title">
            <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登陆</a>
            <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login">
            <!--短信登录-->
            <div :class="{on: !loginWay}">
              <section class="login_message1">
                <input type="tel" maxlength="11" v-model="phone" placeholder="手机号">
                <!--加：动态增加样式；${}加在大括号外侧-->
                <button :disabled="!rightPhone" class="get_vertification" :class="{right_phone: rightPhone}" @click.prevent="getCode()">
                {{computeTime ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
              </section>
              <section class="login_vertification1">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册账号的手机号，登陆时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <!--密码登录-->
            <div :class="{on: loginWay}">
              <section>
                <section class="login_message2">
                  <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
                </section>
                <section class="login_vertification2">
                  <input type="password" maxlength="8" placeholder="密码" v-if="!showPwd" v-model="pwd">
                  <input type="text" maxlength="8" placeholder="密码" v-else v-model="pwd">
                  <!--<span class="show-pwd" @click="showPwd">
                    <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                  </span>-->
                  <div style="display:inline-block;">
                    <div class="switch_button" :class="showPwd?'on':'off'"  @click="showPwd=!showPwd">
                      <div class="switch_circle" :class="{right:showPwd}"></div>
                      <span class="switch_text" :class="{right:showPwd}">{{showPwd?'abc':'...'}}</span>
                    </div>
                  </div>
                </section>
                <section class="login_message2">
                  <input class="vertificate" type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                  <img class="get_vertification" src="../../assets/captcha.jpg" style="width:60px;height:25px;text-align:center;display:inline-block;margin-bottom:-6px;" alt="captcha">
                </section>
              </section>
            </div>
            <!--登录-->
            <button class="login_submit">登录</button>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <!--返回-->
        <a href="javascript:;" class="go_back" @click="$router.back()">
          <i class="iconfront icon-jiantou2"></i>
        </a>
      </div>
      <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
    </section>
  </div>
</body>
</template>

<script>
// import { validUsername } from '@/utils/validate'
// import SocialSign from './components/SocialSignin'
import AlertTip from '@/components/AlertTip'

export default {
  components: {
    AlertTip
  },
  data () {
    return {
      loginWay: true, // true代表短信登录
      computeTime: 0, // 倒计时的时间
      phone: '', // 手机号
      showPwd: false, // 是否显示密码
      pwd: '', // 密码
      code: '', // 短信验证码
      name: '', // 用户名
      captcha: '', // 图形验证码
      alertText: '', // 提示文本
      alertShow: false // 上是否显示警告信息
    }
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    // 异步获取短信验证
    getCode (computeTime) {
      // alert('------')
      // 如果没有触发计时
      if (!computeTime) {
        // 开始计时
        this.computeTime = 60
        const intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            // 停止计时
            clearInterval(intervalId)
          }
        }, 1000)
        // 发送ajax请求（向指定手机号发送验证码短信）
      }
    },
    showAlert (alertText) {
      this.alertShow = true
      this.alertText = alertText
    },
    // 异步登录
    login () {
      // 前台表单验证
      if (this.loginWay) { // 短信登录
        const {rightPhone, phone, code} = this
        if (!rightPhone) {
          // 手机号不正确
          this.showAlert('手机号不正确 !')
        } else if (!/^\d{6}$/.test(code)) {
          // 验证码必须是六位
          this.showAlert('验证码必须是六位 !')
        } else { // 到主页
        }
      } else { // 密码登录
        const {name, pwd, captcha} = this
        if (!name) {
          // 用户名必须指定
          this.showAlert('用户名必须指定 !')
        } else if (!this.pwd) {
          // 密码必须指定
          this.showAlert('密码必须指定 !')
        } else if (!this.captcha) {
          // 验证码必须指定
          this.showAlert('验证码必须指定 !')
        } else { // 到主页
        }
      }
    },
    // 关闭alert提示框
    closeTip () {
      this.alertText = ''
      this.alertShow = false
    }
    // 获取新的图形验证码
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
$bg:#283443;
$bgi:url("../../assets/city.jpg");
$dark_gray:#3d3e3f;
$gray:#5b6266;
$light_gray:#fff;
$cursor: #fff;
body {
  display:flex;
  margin: 0 auto;
  height:100vh; // vh可以获得当前视窗的高度，vw
  width: 100%;
  max-height:150%;
  max-width:150%;
  overflow: hidden;
  background-image: $bgi;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content:center;
  .bodystyle {
    filter:alpha(opacity=80);
    -moz-opacity:0.8;
    -khtml-opacity: 0.8;
    opacity: 0.8;
  }
  .loginOrregistered {
    position:absolute;
    z-index:2000;
    top:2.0rem;
    right:5%;
    button {
      background: transparent;
      border: none;
      color: $light_gray;
    }
    .el-dropdown {
      font-size:18px;
      color:$light_gray;
      border:1px solid $dark_gray;
      border-radius:5px;
      padding:2px 3px 7px 3px;
    }
  }
}
section.loginContainer {
  width:100%;
  height:100%;
  color:#fff;
  .loginInner {
    position: relative;
    padding:3px 3px 0;
    width: 18rem;
    margin: auto;
    overflow: hidden;
    .login_header {
      font-size: 28px;
      text-align: center;
      margin-top:50px;
      margin-bottom:10px;
      .login_header_title {
        margin-top:50px;
        margin-bottom:45px;
        font-size: 18px;
      }
      a {
        color:#fff;
        text-decoration: none;
        margin-left: 15px;
      }
      a:hover{
        color:cadetblue;
      }
      a.on {
        color:aquamarine;
        text-decoration: underline;
      }
    }
    .login_content {
      justify-content:center;
      .on {
        display:none;
      }
      section.login_hint {
        font-size: 14px;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      input {
        display: inline-block;
        height: 35px;
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 2px 1px 0px 5px;
        color: #fff;
        caret-color: $cursor;
        margin: 2px 0px 0px 1px;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
      section.login_message1 {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        color: #454545;
        margin-bottom: 10px;
        input {
          width: 63%;
        }
      }
      section.login_vertification1 {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        color: #454545;
        margin-bottom: 10px;
        input {
          width: 98%;
        }
      }
      section.login_message2 {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        color: #454545;
        margin-bottom: 10px;
        input {
          width: 98%;
        }
        input.vertificate {
          width:72%;
        }
      }
      section.login_vertification2 {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        color: #454545;
        margin-bottom: 10px;
        .switch_button {
          font-size:12px;
          width: 42px;
          height: 14px;
          display: flex;
          align-items:center;
          border-radius: 100px;
          border: 1px solid $gray;
          margin-left:5px;
          margin-top:8px;
          &.on {
            background-color:lightskyblue;
          }
          .switch_circle {
            width: 14.7px;
            height: 14.7px;
            display:inline-block;
            border-radius: 100px;
            border: 1px solid $gray;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
            transition: transform .3s;
            &.right {
              transform: translateX(28px);
              background-color: $light_gray;
            }
          }
          span.switch_text {
            display:inline-block;
            margin-left:7px;
            margin-bottom:5px;
            color: $gray;
            &.right {
              margin-left:-12px;
              margin-bottom:2px;
            }
          }
        }
        input {
          width: 78%;
        }
      }
      button.get_vertification {
        background-color: transparent;
        border-color:transparent;
        color: $gray;
        &.right_phone { // 加&之后成功显示效果
          color: $light_gray;
        }
      }
      button.login_submit {
        background-color:#339999;
        border-color:#339999;
        color: #fff;
        font-size: 15px;
        height: 30px;
        width: 80px;
        display: block;
        margin: 35px auto;
      }
    }
    a.about_us {
      color:#fff;
      width:53px;
      display: block;
      text-decoration: none;
      font-size: 12px;
      margin: 100px auto;
    }
    a:hover {
      color:cadetblue;
    }
  }
}
</style>

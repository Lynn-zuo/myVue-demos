<template>
  <body>
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
    <div class="registered">
      <h1>{{ msg }}</h1>
      <!--登陆表单-->
      <form name="registered" action="">
        <div class="items userId">
          <label>账号：</label>
          <input class="items-input" type="text" v-model="username" placeholder="手机号/邮箱/用户名">
        </div>
        <div class="items userName">
          <label>昵称：</label>
          <input class="items-input" type="text" placeholder="选择一个合适的昵称">
        </div>
        <div class="items userPwd">
          <label>密码：</label>
          <input class="items-input" type="password" placeholder="密码" v-model="password">
        </div>
        <div class="items confirmPwd">
          <label>确认密码：</label>
          <input class="items-input" type="password" placeholder="确认密码" v-model="password2">
        </div>
        <div class="items sexInfo">
          <label>性别：</label>
          <input class="item-sexInfo" type="radio" id="female" v-model="sex" value="女"><label>女</label>
          <input class="item-sexInfo" type="radio" id="male" v-model="sex" value="男"><label>男</label>
        </div>
        <div class="items cityInfo">
          <label>城市：</label>
          <select v-model="cityId">
            <option value="">未选择</option>
            <option :value="city.id" v-for="(city, index) in allCities" :key="index">{{city.name}}</option>
          </select>
        </div>
        <div class="infoSubmit">
          <input type="submit" value="注册">
        </div>
      </form>
      <div class="time">
        <p>显示格式化的日期时间:{{date}}</p>
        <p>过滤后：{{date | dateString}}</p>
      </div>
    </div>
  </body>
</template>

<script>
import moment from 'moment'
export default {
  name: 'registered',
  data () {
    return {
      msg: '注册',
      username: '',
      password: '',
      password2: '',
      sex: '女',
      allCities: [{id: 1, name: 'BJ'}, {id: 2, name: 'SH'}, {id: 3, name: 'GD'}],
      cityId: '2',
      date: new Date() // 时间
    }
  },
  filters: {
    // 定义局部时间过滤器
    dateString: function (value, format) {
      return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.username, this.password)
    }
  },
  mounted () {
    let _this = this // 声明一个变量指向Vue实例this,保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date() // 修改数据date
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
  overflow: hidden;
  background-image: $bgi;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content:center;

}
.loginOrregistered {
  position:absolute;
  z-index:2000;
  top: 2.0rem;
  right:5%;
  button {
    background-color: transparent;
    border: none;
    color: $light_gray;
  }
  .el-dropdown {
    font-size:18px;
    color:$light_gray;
    border:1px solid $dark_gray;
    border-radius:5px;
    padding:2px 3px 7px 3px;;
  }
}
.registered {
  filter:alpha(opacity=80);
  -moz-opacity:0.8;
  -khtml-opacity: 0.8;
  opacity: 0.8;
  h1 {
    margin:5rem auto;
    width:80px;
    color:cadetblue;
  }
  // 表单样式
  form {
    display:flex;
    flex-direction:column;
    justify-content: center;
    width: 21rem;
    margin:-2rem auto;
    color:cadetblue;
    // 表单信息行样式
    .items {
      margin-top:15px;
      width:20rem;
      // 输入框样式
      input.items-input {
        width: 70%;
        display: inline-block;
        height: 35px;
        background: transparent;
        border: 1px solid $gray;
        -webkit-appearance: none;
        border-radius: 2px;
        padding: 2px 1px 0px 5px;
        color: #fff;
        caret-color: $cursor;
        margin: 2px 0px 0px 29px;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
      // 性别输入框样式
      input.item-sexInfo {
        margin-left: 29px;
      }
      // 城市信息选择框样式
      select {
        margin-left: 29px;
        width: 78px;
        height: 28px;
        background: transparent;
        border-radius: 3px;
        color: $light_gray;
        padding-left: 3px;
      }
    }
    .confirmPwd {
      input.items-input {
        margin-left: -3.5px;
      }
    }
    // 注册样式
    .infoSubmit {
      margin: 20px auto;
      width: 70px;
      font-size:16px;
      input {
        width:70px;
        height:28px;
      }
    }
  }
  // 时间样式
  .time{
    margin-top:18px;
  }
}
</style>

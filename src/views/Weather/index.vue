<template>
  <div class="weather_wrap">
    <div class="weather-container">
      <div class="search_form">
        <h2>城市天气查询</h2>
      </div>
      <el-input type="text" v-model="city" placeholder="请输入城市名"
        @keyup.native.enter="searchWeather">
        <el-button slot="append" icon="el-icon-search" @click="searchWeather">搜索</el-button>
      </el-input>
      <div class="hotkey">
        <a href="javascript:;" @click="changeCity('北京')">北京</a>
        <a href="javascript:;" @click="changeCity('上海')">上海</a>
        <a href="javascript:;" @click="changeCity('杭州')">杭州</a>
        <a href="javascript:;" @click="changeCity('深圳')">深圳</a>
        <a href="javascript:;" @click="changeCity('广州')">广州</a>
      </div>
    </div>
    <ul class="weather_list">
      <li v-for="item in weatherList" :key="item.value">
        <div class="info_type"><span class="iconfont">{{item.type}}</span></div>
        <div class="info_temp">
          <b>{{item.low}}</b>~<b>{{item.high}}</b>
        </div>
        <div class="info_feng">
          <b>{{item.fengxiang}}</b><b>{{item.fengli.match(/[1-9]+级/)[0]}}</b>
        </div>
        <div class="info_date">{{item.date}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      city: '',
      weatherList: []
    }
  },
  methods: {
    /*
      请求地址：http://wthrcdn.etouch.cn/weather_mini
      请求方法：get
      请求参数：city
      相应内容：天气信息

      1.点击回车
      2.查询数据
      3.渲染数据
    */
    searchWeather () {
      // console.log(this.city)
      // 调用接口
      // 保存this
      var that = this
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
        .then(function (response) {
          that.weatherList = response.data.data.forecast
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    changeCity (city) {
      this.city = city
      this.searchWeather()
    }
  }
}
</script>

<style lang="scss" scoped>
.weather_wrap {
  width:55rem;
  margin:auto;
  text-align:center;
  background: lightyellow;
  padding-top: 3rem;
}
.weather-container {
  height: 160px;
  width: 55rem;
  text-align: center;
  color: #2c3e50;
  margin-top: 0 20px;
  padding: 0;
  margin: 10px;
  .el-input {
    width: 60%;
  }
  .hotkey {
    margin-top: 0.5rem;
    a {
      text-decoration: none;
      color:rgb(59, 160, 243);
      margin-right: 0.6rem;
    }
    a:hover {
      text-decoration:none;
      color:rgb(66, 83, 88);
    }
  }
}
ul.weather_list {
  display: inline-flex;
  color:lightblue;
  li:not(:last-child) { // 除了最后一个li标签，添加右边框
    border-right: 1px solid lightskyblue;
  }
  li {
    list-style: none;
    text-align: center;
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    .info_type {
      font-size: 1rem;
      font-weight: bold;
    }
    .info_temp {
      margin-top: 0.3rem;
      font-size: 0.65rem;
    }
    .info_feng {
      margin-top: 0.3rem;
      font-size: 0.65rem;
    }
    .info_date {
      margin-top: 0.3rem;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
}
</style>

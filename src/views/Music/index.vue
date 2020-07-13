<template>
  <div class="wrap">
    <!--播放器主体区域-->
    <div class="play_wrap" id="player">
      <div class="head">
        <span>听音乐</span>
        <!--添加搜索栏表单-->
        <div class="search">
          <input type="text" autocomplete="on" v-model="query" @keyup.enter="searchMusic"/>
          <i class="fa fa-search" id="i-advanced-search-i" @click="searchMusic"></i>
        </div>
      </div>
      <div class="main">
        <!--搜索歌曲列表-->
        <div class="song_wrap">
          <ul class="song_list">
            <li v-for="item in musicList" :key="item.id" @click="playMusic(item.id)">
              <a href="javascript:;"></a>
              <b>{{item.name}}</b>
              <span v-if="item.mvid!=0" @click="playMv(item.mvid)"><i></i></span>
            </li>
          </ul>
          <img src="" class="switch_btn" alt="">
        </div>
        <!--歌曲信息容器-->
        <div class="play_on" :class="{playing:isPlaying}">
          <img src="" class="play_bar" alt="">
          <!--黑胶碟片-->
          <img src="" class="disc autoRotate" alt="">
          <!--歌曲封面-->
          <img :src="musicCover" class="cover autoRotate" alt="">
        </div>
        <!--歌曲评论列表-->
        <div class="comment_wrap">
          <h4 class="title">热门留言</h4>
          <div class="comment_list">
            <dl class="coment_item" v-for="item in hotComments" :key="item.commentId">
              <dt><img :src="item.user.avatarUrl" alt=""></dt>
              <dd class="name">{{item.user.nickname}}</dd>
              <dd class="detail">{{item.content}}</dd>
            </dl>
          </div>
        </div>
      </div>
      <!--歌曲进度条-->
      <div class="audio_on">
        <audio class="myaudio" ref="audio" @play="play" @pause="pause" :src="musicUrl" controls autoplay loop></audio>
      </div>
      <div class="video_on">
        <video src=""></video>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // 1.歌曲搜索接口
  // 请求地址：https://autumnfish.cn/search
  // 请求方法：get
  // 请求参数：keywords(查询的关键字)
  // 响应内容：歌曲搜索结果
  // 2.歌曲url获取
  // 请求地址：https://autumnfish.cn/song/url
  // 请求方法：get
  // 请求参数：id(歌曲id)
  // 响应内容：歌曲的url地址
  // 3.歌曲封面获取
  // 请求地址：https://autumnfish.cn/song/detail
  // 请求方法：get
  // 请求参数：ids(歌曲id)
  // 响应内容：歌曲详情，包括歌曲封面图片
  // 4.热门评论获取
  // 请求地址：https://autumnfish.cn/comment/hot?type=0
  // 请求方法：get
  // 请求参数：id(歌曲id,type固定为0)
  // 响应内容：歌曲的热门评论
  // mv地址获取
  // 请求地址：https://autumnfish.cn/mv/url
  // 请求方法：get
  // 请求参数：id(mvid, 为0说明没有)
  // 响应内容：mv的地址
  data () {
    return {
      query: '', // 查询关键字
      musicList: [], // 歌曲数组
      musicUrl: '', // 歌曲地址
      musicCover:'', // 歌曲封面
      hotComments: [], // 歌曲评论
      isPlaying: false // 动画播放状态
    }
  },
  methods: {
    // 歌曲搜索
    searchMusic () {
      var that = this
      axios.get('https://autumnfish.cn/search?keywords=' + this.query)
        .then(function (response) {
          // console.log(response)
          that.musicList = response.data.result.songs
          console.log(that.musicList)
        }, function (err) {
          console.log(err)
        }
      )
    },
    // 歌曲播放
    playMusic (musicId) {
      // console.log(musicId)
      var that = this
      // 歌曲地址获取
      axios.get('https://autumnfish.cn/song/url?id=' + musicId)
        .then(function (response) {
          // console.log(response)
          // console.log(response.data.data[0].url)
          that.musicUrl = response.data.data[0].url
          // console.log(that.musicUrl)
        }, function (err) { }
      )
      // 歌曲详情获取
      axios.get('https://autumnfish.cn/song/detail?ids=' + musicId)
        .then(function(response){
          // console.log(response)
          // console.log(response.data.songs[0].al.picUrl)
          that.musicCover = response.data.songs[0].al.picUrl
        }, function(err){}
      )
      // 热门评论获取
      axios.get('https://autumnfish.cn/comment/hot?type=0&id=' + musicId)
        .then(function(response){
          // console.log(response)
          console.log(response.data.hotComments)
          that.hotComments = response.data.hotComments
        }, function(err){ })
    },
    // 歌曲播放
    play () {
      // console.log("play")
      this.isPlaying = true
    },
    // 歌曲暂停
    pause () {
      // console.log("pause")
      this.isPlaying = false
    },
    // 播放mv
    playMv (mvid) {
      axios.get('https://autumnfish.cn/mv/url?id=' + mvid)
        .then(function (response) {
          console.log(response)
        }, function (err) {})
    }
  }
}
</script>

<style lang="scss" scoped>
.play_wrap {
  width: 50rem;
  margin: 0 auto;
}
.head {
  height:3.3rem;
  background:rgb(76, 159, 241);
  position: relative;
  display: flex;
  color:whitesmoke;
  span {
    font-size: 1.3rem;
    line-height:3rem;
    margin-left: 1.5rem;
  }
  .search{
    width: 12rem;
    height: 1.8em;
    padding-left: 0.8rem;
    margin-top: 0.5rem;
    position: absolute;
    right:1rem;
    border: 1px solid #ccc;
    background-color:lightblue;
    border-radius: 1em;
    input {
      width: 10rem;
      height: 1.3rem;
      margin-top: 0.2rem;
      border: none;
      background: transparent;
      outline-offset: 0em;
      &:focus{
        outline:none; // 取消outline--
      }
    }
    i {
      position: relative;
      margin-left: 0.2rem;
      color: #B2B2B2;//这里可以更改图标的颜色
    }
  }
}
.main {
  background: lightblue;
  height: 25rem;
  display: flex;
  .song_wrap {
    flex: 1;
    overflow: hidden;
    height: 24rem;
    margin-left: -1.5rem;
    border-right: 0.1rem solid rgb(70, 72, 73);
    ul.song_list {
      overflow-x: hidden;
      overflow-y: scroll;
      height: 32rem;
      width: 8rem;
      padding-right: 1rem;
      font-size: 0.7rem;
      font-weight: lighter;
      list-style: none;
      &::-webkit-scrollbar{
        display:none;
      }
      li {
        width: 20rem;
        overflow: hidden;
        margin-bottom: 0.3rem;
        span{
          width:2px;
          height:2px;
          margin-right:1px;
          background: blue;
          z-index:20;
        }
      }
    }
  }
  .play_on {
    flex: 2;
    height: 24rem;
    border-right: 0.1rem solid rgb(70, 72, 73);
    .cover{
      display: block;
      position:relative;
      width: 6rem;
      height: 6rem;
      border-radius: 6rem;
      margin: 5rem auto;
    }
  }
  .playing .autoRotate{
    animation: rotateMove 6s linear infinite;
  }
  @keyframes rotateMove {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .comment_wrap {
    flex: 1;
    overflow: hidden;
    height: 24rem;
    margin-right: 1rem;
    h4 {
      margin-top: 0.5rem;
      margin-left: 1rem;
    }
    .comment_list {
      overflow-x: hidden;
      overflow-y: scroll;
      height: 32rem;
      margin-top: -1.2rem;
      overflow: scroll;
      &::-webkit-scrollbar{
        display:none;
      }
      dl dt img {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        margin-left: 1rem;
      }
      dl dd.name {
        font-size: 0.7rem;
        margin-top: -2.6rem;
        margin-left: 3.5rem;
      }
      dl dd.detail {
        font-size: 0.6rem;
        margin-left: 3.5rem;
        margin-bottom: 2rem;
      }
    }
  }
}
.audio_on {
  height: 2.5rem;
  background: #F1F3F4;
  .myaudio {
    width: 100%;
    height: 100%;
    border-radius: 0;
    &:focus{
      outline:none; // 取消outline--
    }
  }
}
</style>

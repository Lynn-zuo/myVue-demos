<template>
  <div class="carousel">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="(pic, index) in pictures" :key="index">
        <h3>{{ index }}</h3>
        <img :src="pic.imgurl" class="image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default{
  data () {
    return {
      pictures: [
        {imgurl: require('@/assets/tech2.jpg')},
        {imgurl: require('@/assets/StarSky1.jpg')},
        {imgurl: require('@/assets/tech2.jpg')},
        {imgurl: require('@/assets/StarSky1.jpg')}
      ]
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 30px;
    margin: 0;
  }
  /*.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }*/
</style>

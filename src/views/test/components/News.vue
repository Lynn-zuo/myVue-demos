<template>
  <div class="news">
    <ul>
      <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newsArr: ['message01', 'message02', 'message03', 'message04']
    }
  }
}
</script>

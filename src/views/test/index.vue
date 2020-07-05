<template>
  <div class="test">
    <ul>
      <router-link class="testlink" to="/test/components/News">News</router-link>
      <router-link class="testlink" to="/test/components/Messages">Messages</router-link>
    </ul>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.test {
  background: lightyellow;
  padding-top:3rem;
  padding-bottom: 4rem;;
}
.test .testlink {
  margin:9px 9px;
  text-decoration: none;
}
</style>

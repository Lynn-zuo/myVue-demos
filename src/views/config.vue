<template>
  <div class="config">
    <h1>{{ msg }}</h1>
    <p v-upper-text="msg1"></p>
    <p v-lower-text="msg2"></p>
  </div>
</template>

<script>
export default {
  name: 'config',
  directive: {
    'upper-text' (p, binding) {
      p.textContent = binding.value.toUpperCase()
    },
    'lower-text' (p, binding) {
      p.textContent = binding.value.toLowerCase()
    }
  },
  data () {
    return {
      msg1: 'asdPWGDJofaodnsov',
      msg2: 'asdPWGDJofaodnsov'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-size: 16px;
}
</style>

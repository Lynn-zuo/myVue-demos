
<template>
  <div class="wrap">
    <div class="application">
      <p>click {{count}} times, count is {{evenOrodd}}.</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementAsync">increment async</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState('counter', ['count']), // mapState()返回值：{count(){return this.$store.state['count]}}
    ...mapGetters('counter', {evenOrodd: 'evenOrodd'}) // mapGetters()返回值：{evenOrodd(){return this.store.getters['evenOodd']}}
  },
  methods: {
    ...mapActions('counter', ['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    /*
    // 增加
    increment () {
      // 通知vuex去增加
      this.$store.dispatch('increment') // 触发store中对应的action调用
    },
    decrement () {
      // 通知vuex去减少
      this.$store.dispatch('decrement') // 触发store中对应的action调用
    },
    // 如果是奇数才增加
    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd')
    },
    // 过一秒才增加
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    }
    */
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.application{
  background: lightyellow;
  width: 60rem;
  margin: auto;
  text-align: center;
  padding-top:3rem;
  padding-bottom: 4rem;;
}
</style>

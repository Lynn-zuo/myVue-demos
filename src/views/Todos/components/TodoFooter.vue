<template>
  <div class="todo-f">
    <ul class="todo-footer">
      <input type="checkbox" v-model="isAllCheck"/>
      <span>
        <span> 已完成{{completeCount}} </span>
        / 全部{{totalCount}}
      </span>
      <button class="btn btn-danger" v-show="completeCount" @click="clearAllCompleted">清除已完成任务</button>
    </ul>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters('todos', ['totalCount', 'completeCount']), // 将模块的空间名称字符串作为第一个参数传递给mapGetters函数
    isAllCheck: {
      get () {
        return this.$store.getters.isAllComplete // 传不过来
      },
      set (value) { // value是当前checkbox最新的值,bollean类型
        // this.selectAllTodos(value)
        this.$store.dispatch('todos/selectAllTodos', value) // 添加模块的空间名称字符串作为参数前缀
      }
    }
  },
  methods: {
    ...mapActions('todos', ['clearAllCompleted']) // 将模块的空间名称字符串作为第一个参数传递给mapActions函数
  }
}
</script>
<style scoped>
.todo-f input {
  vertical-align: middle;
  margin-left: -6px;
  position: relative;
  top: -1px;
}
.todo-f button {
  height:22px;
  margin:9px 18px;
  background-color:rgb(241, 83, 83);
  border: none;
  border-radius:3px;
  float: right;
}
</style>

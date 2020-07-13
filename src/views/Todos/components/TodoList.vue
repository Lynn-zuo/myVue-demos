<template>
  <div class="todo-l">
    <ul class="todo-main">
      <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import {mapState} from 'vuex'
import storageUtil from '../../../utils/storageUtil'

export default {
  // props: {
  //   todos: Array,
  //   deleteTodo: Function
  // }
  computed: {
    ...mapState('todos', ['todos']) // 将模块的空间名称字符串作为第一个参数传递给mapState函数
  },
  watch: {
    todos: {
      deep: true, // 深度监视
      handler: storageUtil.saveTodos // 保存todos到localstorage
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style scoped>
.todo-l ul.todo-main {
  width:27rem;
  margin-left: 1rem;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
</style>

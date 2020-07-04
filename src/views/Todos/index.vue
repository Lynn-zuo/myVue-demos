<template>
  <div class="todo-container" style="border: 1px solid #ddd;font-size:14px;width:500px;margin: auto;">
    <div class="todo-wrap" style="width:468px;margin:15px;">
      <TodoHeader/>
      <TodoList/>
      <todo-footer/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
// import storageUtil from '@/utils/storageUtil'
export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  // data () {
  //   return {
  //     /* todos: [
  //       {title: '吃饭', complete: 'true'},
  //       {title: '睡觉', complete: ''},
  //       {title: 'coding', complete: 'true'}
  //     ] */
  //     todos: []
  //   }
  // },
  mounted () {
  // 发送命令给actions：异步从localStorage读取todos数据并显示
    this.$store.dispatch('todos/reqTodos')
  }
  // watch: { // 监视
  //   todos: {
  //     deep: true, // 深度监视
  //     handler: function (value) {
  //       // 将todos最新的值的JSON数据，保存到localStorage
  //       // window.localStorage.setItem('todos_key', JSON.stringify(value))
  //       storageUtil.saveTodos(value)
  //       // handler: storageUtil.savaTodos
  //     }
  //   }
  // }

  // methods: {
  //   addTodo (todo) {
  //     this.todos.unshift(todo)
  //   },
  //   // 删除一条已完成
  //   deleteTodo (index) {
  //     this.todos.splice(index, 1)
  //   },
  //   // 删除所有选中的todo，不需要传参
  //   deleteCompleteTodos () {
  //     this.todos = this.todos.filter(todo => !todo.complete)
  //   },
  //   // 全选/全不选,需要传参
  //   selectAllTodos (check) {
  //     this.todos.forEach(function (todo, todos) {
  //       todo.complete = check
  //     })
  //   }
  // }
}
</script>

<style scoped>
.todo-container {
  font-size: 13px;
  width: 600px;
  margin: auto;
}
.todo-container .todo-wrap {
  background-color:blanchedalmond;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
</style>

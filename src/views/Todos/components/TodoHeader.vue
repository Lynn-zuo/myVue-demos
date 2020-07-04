<template>
  <div class="todo-h" style="font-size:13px;">
    <ul>
      <input type="text" placeholder="请输入你的任务名称，按回车键确定"
      v-model="title" @keyup.enter="addItem"/>
    </ul>
  </div>
</template>
<script>
export default {
  // props: {
  //   addTodo: Function
  // },
  data () {
    return {
      title: '' // 组件内部使用的状态，不存在共享--->不需要vuex管理
    }
  },
  methods: {
    addItem () {
      // 1.检查输入的合法性
      const title = this.title.trim()
      if (!title) {
        alert('必须输入合法数据！')
        return
      }
      // 2.根据输入生成一个对象
      const todo = {
        title,
        complete: false
      }
      // 3.添加到todos
      // this.addTodo(todo)
      this.$store.dispatch('todos/addTodo', todo) // // 添加模块的空间名称字符串作为参数前缀
      // 4.清除输入
      this.title = ''
    }
  }
}
</script>
<style scoped>
.todo-h input {
  width:420px;
  height:30px;
  border:1px solid #ddd;
  margin-left:-20px;
  padding-left:9px;
  border-radius:5px;
}
</style>

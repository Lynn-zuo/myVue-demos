<template>
  <div class="todo-i">
    <li class="todo-item" @mouseenter="handleShow(true)" @mouseleave="handleShow(false)" :style="{background:bgColor}">
      <label>
        <input type="checkbox" v-model="todo.complete" />
        <span>{{todo.title}}---{{todo.complete}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number
  },
  data () {
    return {
      bgColor: 'blanchedalmond',
      isShow: false
    }
  },
  methods: {
    handleShow (isEnter) {
      console.log(isEnter)
      if (isEnter) {
        this.bgColor = '#aaaaaa'
        this.isShow = true
      } else {
        this.bgColor = 'blanchedalmond'
        this.isShow = false
      }
    },
    deleteItem () {
      // const {todo, index, deleteTodo} = this
      // if (window.confirm(`确认删除${todo.title}吗？`)) {
      //   deleteTodo(index)
      // }
      this.$store.dispatch('todos/deleteTodo', this.index) // 添加模块的空间名称字符串作为参数前缀
    }
  }
}
</script>

<style scoped>
.todo-i {
  width: 410px;
  margin: 10px auto;
  text-align: center;
}
.todo-i li {
  list-style: none;
  height:36px;
  padding: 0px;
  border-bottom:1px solid #ddd;
}
.todo-i li label {
  float: left;
  cursor: pointer;
}
.todo-i li label input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float:right;
  margin-top:3px;
}
li:before {
  content: initial;
}
</style>

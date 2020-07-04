/*
使用localStorag存储数据的工具模块
1. 函数---1个
2. 对象---多个
需要向外暴露一个或多个功能
*/
const TODO_KEY = 'todo_key'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODO_KEY, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]')
  }
}

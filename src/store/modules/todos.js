import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED, RECEIVE_TODOS} from '../mutation-types'
import storageUtil from '../../utils/storageUtil'

// 状态对象
const state = {
  todos: []
}

// 接收组件通知触发Mutaion调用间接更新状态的方法的对象
const actions = {
  // 添加todo
  addTodo ({commit}, todo) {
    // 提交mutation的请求
    commit(ADD_TODO, {todo})
  },
  // 删除todo
  deleteTodo ({commit}, index) {
    // 提交mutation的请求
    commit(DELETE_TODO, {index})
  },
  // 全选或全不选
  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check})
  },
  // 删除全部选中的
  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  },
  // 异步获取todos并更新状态
  reqTodos ({commit}) {
    // 模拟
    setTimeout(() => {
      // 读取数据
      const todos = storageUtil.readTodos()
      // 提交mutation
      commit(RECEIVE_TODOS, todos)
    }, 100)
  }
}

// 包含多个由action触发去直接更新状态的方法的对象
const mutations = {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL_TODOS] (state, {check}) {
    state.todos.forEach(todo => todo.complete = check)
  },
  [CLEAR_ALL_COMPLETED] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [RECEIVE_TODOS] (state, todos) {
    state.todos = todos // 注意这里是todos不是todo
  }
}

// 包含所有基于state的getter计算属性的对象
const getters = {
  // 总数量
  totalCount (state) {
    return state.todos.length
  },
  // 完成的数量
  completeCount (state) {
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.complete ? 1 : 0)
    }, 0)
  },
  // 判断是否全部选中
  isAllComplete (state, getters) {
    return getters.totalCount === getters.completeCount && getters.totalCount > 0
  }
}

export default{
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

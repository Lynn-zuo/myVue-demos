// 状态对象
const state = {
  count: 0 // 初始化状态
}

// 包含多个getter计算属性函数的对象
const getters = {
  // 不需要调用，只需要读取属性值
  // evenOrodd (state) {
  //   return state.count % 2 === 0 ? '偶数' : '奇数'
  // }
  evenOrodd: state => state.count % 2 === 0 ? '偶数' : '奇数'
}

// 包含多个更新state函数的对象
const mutations = {
  // 增加的mutation
  INCREMENT (state) {
    state.count++
  },
  // 减少的mutation
  DECREMENT (state) {
    state.count--
  }
}

// 包含多个对应事件回调函数的对象
const actions = {
  // 增加的action
  increment ({
    commit
  }) {
    // 提交增加的mutation
    commit('INCREMENT')
  },
  // 减少的action
  decrement ({
    commit
  }) {
    // 提交减少的mutation
    commit('DECREMENT')
  },
  // 带条件的action
  incrementIfOdd ({
    commit,
    state
  }) {
    // 提交带条件的的mutation
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  // 异步的action
  incrementAsync ({
    commit
  }) {
    // 在action中直接就可以执行异步代码
    setTimeout(() => {
      // 提交异步增加的mutation
      commit('INCREMENT')
    }, 1000)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

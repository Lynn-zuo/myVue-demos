import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import todos from './modules/todos'

Vue.use(Vuex)

// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

export default new Vuex.Store({
  // state, // 状态对象
  // mutations, // 包含多个更新state函数的对象
  // actions, // 包含多个对应事件回调函数的对象
  // getters, // 包含多个getter计算属性函数的对象
  modules: {
    counter,
    todos
  }
})

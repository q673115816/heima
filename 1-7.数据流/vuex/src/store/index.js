import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  },
  mutations: {
    increment (state, payload) {
      // 变更状态
      state.count++
      console.log(payload)
    }
  },
  actions: {
    syncIncrement (context, payload) {
      setTimeout(() => {
        console.log(payload)
        context.commit({
          type: 'increment',
          hellosync: payload.hello
        })
      }, 1000)
    }
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

import foo from './foo'
import bar from './bar'

import products from './modules/products'
import cart from './modules/cart'

import test from './modules/test'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    foo,
    bar,
    products,
    cart,
    test
  },
  state: {
    count: 0,
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  },
  getters: {
    getPostsById (state) {
      return state.posts.filter((ele, index) => index === 1)
    }
  },
  mutations: {
    increment (state, payload) {
      // 变更状态
      state.count++
      console.log(payload)
    },
    popPosts (state, payload) {
      state.posts.shift()
    }
  },
  actions: {
    syncIncrement (context, payload) {
      setTimeout(() => {
        console.log(payload)
        context.commit({
          type: 'increment',
          helloSync: payload.hello
        })
      }, 1000)
    },
    syncPopPosts ({ commit }, payload) {
      setTimeout(() => {
        commit('popPosts')
        console.log(this.state.posts)
      }, 500)
    }
  }
})

export default store

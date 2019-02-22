import { BUY } from '@/api/shop'

const state = {
  list: [],
  checkoutStatus: null
}

const getters = {
  cartProducts (state, getters, rootState) {
    return state.list.map((cart) => {
      const item = rootState.products.list.find((product) => product.id === cart.id)
      return {
        title: item.title,
        price: item.price,
        id: item.id,
        inventory: cart.inventory
      }
    })
  },
  cartTotal (state, getters) {
    return getters.cartProducts.reduce((prev, curr) => prev + curr.price * curr.inventory, 0)
  }
}

const mutations = {
  updateList (state, payload) {
    const item = state.list.find((ele) => ele.id === payload.id)
    item.inventory++
  },
  pushList (state, payload) {
    state.list.push({
      id: payload.id,
      inventory: 1
    })
  },
  clearList () {
    state.list = []
  }
}

const actions = {
  syncAddProductToCart ({
    commit,
    state
  }, payload) {
    const {
      id,
      inventory
    } = payload
    if (inventory) {
      const item = state.list.find((ele) => ele.id === id)
      if (item) {
        commit('updateList', {
          id
        })
      } else {
        commit('pushList', {
          id
        })
      }
    }
    commit('products/addCart', {
      id: payload.id
    }, {
      root: true
    })
  },
  syncBUY ({
    commit,
    state
  }, payload) {
    const saveList = [...state.list]
    commit('clearList')
    BUY(saveList,
      () => {
        console.log('true')
        state.checkoutStatus = 'success'
      },
      () => {
        console.log('false')
        state.list = saveList
        state.checkoutStatus = 'false'
        setTimeout(() => {
          state.checkoutStatus = null
        }, 1000)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

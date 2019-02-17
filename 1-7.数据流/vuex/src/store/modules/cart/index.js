export default {
  namespaced: true,
  state: {
    list: [],
    checkoutStatus: null
  },
  getters: {
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
  },
  mutations: {
    updateList (state, payload) {
      const item = state.list.find((ele) => ele.id === payload.id)
      item.inventory++
    },
    pushList (state, payload) {
      state.list.push({
        id: payload.id,
        inventory: 1
      })
    }
  },
  actions: {
    syncAddProductToCart ({ commit, state }, payload) {
      console.log(payload)
      const {
        id,
        inventory
      } = payload
      console.log(id, inventory)

      if (inventory) {
        const item = state.list.find((ele) => ele.id === id)
        if (item) {
          console.log(111)

          commit('updateList', {
            id
          })
        } else {
          console.log(222)

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
    }
  }
}

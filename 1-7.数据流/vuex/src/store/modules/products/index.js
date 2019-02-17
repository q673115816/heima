import { getAllProducts } from '@/api/shop'

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    getList (state, payload) {
      state.list = [...payload.list]
    },
    addCart (state, payload) {
      const { id } = payload
      const item = state.list.find((ele) => ele.id === id)
      if (item.inventory) {
        item.inventory--
      }
    }
  },
  actions: {
    syncGetList ({ commit }, payload) {
      getAllProducts()
        .then((res) => {
          commit('getList', { list: res })
        })
    }
  }
}

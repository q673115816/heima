export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    asyncgetData ({ state, commit }, payload) {
      this._vm.$fetch('test.getList', payload)
        .then(res => {
          const { data } = res
          if (data.code === 200) {
            state.list = state.list.concat(data.data)
          }
        })
    }
  },
  mutations: {
  },
  getters: {
    getItemByIndex (state) {
      return function (index = 0) {
        return state.list[index]
      }
    }
  }
}

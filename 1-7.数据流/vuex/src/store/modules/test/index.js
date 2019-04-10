export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    asyncgetData ({ state }) {
      this._vm.$fetch('test.getList')
        .then(res => {
          console.log(res)
          const { data } = res
          if (data.code === 200) {
            state.list = data.data
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

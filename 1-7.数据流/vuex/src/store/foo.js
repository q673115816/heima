export default {
  namespaced: true,
  state: {
    name: 'foo'
  },
  getters: {
    getName (state) {
      return state.name
    }
  }
}

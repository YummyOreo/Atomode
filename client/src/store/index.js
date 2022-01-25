import { createStore } from 'vuex'

export default createStore({
  state: {
    itemList: [],
    pickedUp: false,
    pickedUpId: null
  },
  mutations: {
    setPickedUp(state, value) {
      state.pickedUp = value
    },
    addItem(state, item) {
      state.itemList.push(item)
    },
    setPickedUpId(state, id) {
      state.pickedUpId = id
    }
  },
  actions: {
    addItem({ commit, state }) {
      let newItem = "this " + (state.itemList.length + 1)
      commit("addItem", newItem)
    }
  },
  getters: {
    
  },
  modules: {
  }
})

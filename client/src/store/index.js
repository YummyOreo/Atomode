import { createStore } from 'vuex'

const board = {
  namespaced: true,
  state: {
    itemList: [],
    pickedUp: false,
    pickedUpId: null,
    popupNameToggle: false,
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
    },
    setPopupNameToggle(state, value) {
      state.popupNameToggle = value
    },
  }, actions: {
    togglePopupName({ commit, state }) {
      commit("setPopupNameToggle", !state.popupNameToggle)
    },
  }
}

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {
    
  },
  modules: {
    board
  }
})

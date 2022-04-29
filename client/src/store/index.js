import { createStore } from 'vuex'

const board = {
  namespaced: true,
  state: {
    itemList: {},
    pickedUp: false,
    pickedUpId: null,
    popupNameToggle: false,
    scale: 1
  },
  mutations: {
    setScale(state, value) {
      state.scale = value
    },
    setPickedUp(state, value) {
      state.pickedUp = value
    },
    addItem(state, item) {
      item.id = Object.keys(state.itemList).length
      console.log(Object.keys(state.itemList).length)
      state.itemList[Object.keys(state.itemList).length] = item
    },
    setPickedUpId(state, id) {
      state.pickedUpId = id
    },
    setPopupNameToggle(state, value) {
      state.popupNameToggle = value
    },
    deleteItem(state, id) {
      state.itemList[id] = null
    }
  }, actions: {
    togglePopupName({ commit, state }) {
      commit("setPopupNameToggle", !state.popupNameToggle)
    }
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
<template>
  <div class="popup">
      <div class="popup-inner">
            <input class="popup-entry select-none" v-model="name" @keypress="keyPessCheck($event)" placeholder="Enter Name">
            <span id="error" class="popup-error select-none">oeuoeuoeuo</span>
            <button class="popup-enter select-none" @click="enterClick">
              <span id="popup-enter-text">Enter</span>
              <div class="popup-enterHover select-none">
              </div>
            </button>
            
      </div>
  </div>
</template>

<script>
export default {
  name: 'PopupText',
  data() {
    return {
      name: ''
    }
  },
	methods: {
    keyPessCheck($event) {
      if ($event.key === "Enter") {
        this.addButton()
      }
    },
    enterClick() {
        this.addButton()
    },
    addButton() {
      let error = document.getElementById("error")
      if (this.name == "") {
          error.innerHTML = "Please provide a name"
          setTimeout(() => { 
            error.innerHTML = ""
          }, 15000)
          return
        } else if (this.name.length <= 2) {
          error.innerHTML = "Name must be over 2 characters long"
          setTimeout(() => { 
            error.innerHTML = ""
          }, 15000)
          return
        }
        console.log(this.name)
        this.$store.dispatch("board/togglePopupName")
        this.$store.commit("board/addItem", this.name)

        setTimeout(() => { 
          let element = document.getElementById(this.$store.state.board.itemList.length - 1)

          element.style.position = "absolute"

          var x = (window.innerWidth / 2) - 50;
          var y = (window.innerHeight / 2) - 100;

          element.style.left = x + "px"
          element.style.top = y + "px"

          element.style.transform = `scale(${this.$store.state.board.scale})`;
        }, 0.1);

        
    }
  }
}
</script>

<style>
  @import url("../../assets/css/board/popupText.css");

</style>
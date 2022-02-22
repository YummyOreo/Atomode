<template>
  <div class="popup">
      <div class="popup-inner">
            <input class="popup-entry select-none" v-model="name" @keypress="keyPessCheck($event)" placeholder="Enter Name">
            <p id="error" class="popup-error select-none"></p>
            <button class="popup-enter select-none" @click="enterClick">
                Enter
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
          }, 10000)
          return
        } else if (this.name.length <= 2) {
          error.innerHTML = "Name must be over 2 characters long"
          setTimeout(() => { 
            error.innerHTML = ""
          }, 10000)
          return
        }
        console.log(this.name)
        this.$store.dispatch("board/togglePopupName")
        this.$store.commit("board/addItem", this.name)

        setTimeout(() => { 
          let element = document.getElementById(this.$store.state.board.itemList.length - 1)

          var x = (window.innerWidth / 2) - 50;
          var y = (window.innerHeight / 2) - 100;

          element.style.left = x + "px"
          element.style.top = y + "px"
        }, 0.1);

        
    }
  }
}
</script>

<style>
  @import url("../../assets/css/board/popupText.css");

</style>
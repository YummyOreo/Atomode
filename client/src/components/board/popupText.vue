<template>
  <div class="popup" @click="closePopup">
      <div class="popup-inner">
            <input class="popup-entry select-none" v-model="name" @keypress="keyPessCheck($event)" placeholder="Enter Name">
            <div class="popup-dropdown">
              <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="popup-dropdown-svg">
              <path d="M2 2L12.6667 16L24 2" stroke="#FFFBFC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div id="popup-dropdown-dividor"></div>
              <div id="popup-dropdown-colorSelected"></div>
              <ul class="popup-dropdown-menue">
                <li style="border-bottom: 1px solid #121212;"></li>
                <li class="popup-dropdown-menue-item">
                  <div class="item-color item-red"></div>
                </li>
                <li class="popup-dropdown-menue-item">
                  <div class="item-color item-yellow"></div>
                </li>
                <li class="popup-dropdown-menue-item">
                  <div class="item-color item-blue"></div>
                </li>
                <li class="popup-dropdown-menue-item">
                  <div class="item-color item-darkblue "></div>
                </li>
                <li class="popup-dropdown-menue-item">
                  <div class="item-color item-purple"></div>
                </li>
              </ul>
            </div>
            <button class="popup-enter select-none" @click="enterClick($event)">
                <span id="popup-enter-text">Enter</span>
                <div div class="popup-enterHover select-none">
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
          window.alert("Please provide a name");
          return
        } else if (this.name.length <= 2) {
          window.alert("Name must be over 2 characters long");
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
    },
    closePopup($event) {
        if ($event.target.className != "popup") return
        this.$store.dispatch("board/togglePopupName")
    }
  }
}
</script>

<style>
  @import url("../../assets/css/board/popupText.css");
  @import url("../../assets/css/board/colors.css");

</style>
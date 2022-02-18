<template>
  <div class="popup-text">
      <div class="popup-text-inner">
          <slot />
            <input class="popup-text-entry" v-model="name">
            <button class="popup-text-enter select-none" @click="enterClick">
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
    enterClick() {
        if (this.name == "") {
          console.log("no message")
          return
        } else if (this.name.length <= 2) {
          console.log("must be over 2 chars long")
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

        }, 0.1);
    }
  }
}
</script>

<style>
  @import url("../../assets/css/board/popupText.css");

</style>
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
        } else if (this.name.length <= 3) {
          console.log("must be over 3 chars long")
          return
        }
        console.log(this.name)
    }
  }
}
</script>

<style>
  @import url("../../assets/css/board/popupText.css");

</style>
<template>
  <div @mousemove="mouseMoved">

    <ul>
      <li
        v-for="(item, index) in $store.state.itemList" :key="index"
        class="draggable select-none"
        :id="index"
        @mousedown="drag(index)"
        @mousemove="draging(index)"
        @mouseup="drop(index)"
      >
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name: 'DragCanvas',
	methods: {
    drag(index) {
      let element = document.getElementById(index)
      element.style.position = "absolute"

      this.$store.commit("setPickedUp", true)
      this.$store.commit("setPickedUpId", index)
    },
    draging(index) {
      if (this.$store.state.pickedUp == false) return
      if (this.$store.state.pickedUpId != index) return
      let element = document.getElementById(index)
      element.style.left = event.clientX - 100 + "px";
      element.style.top = event.clientY - 100 + "px";
    },
    drop(index) {
      this.$store.commit("setPickedUp", false)
      this.$store.commit("setPickedUpId", null)
    },
    mouseMoved() {
      if (this.$store.state.pickedUppickedUp == true) {
        let element = document.getElementById(this.$store.state.pickedUpId)
          if (event.clientX - 100 + "px" != element.style.left) {
            console.log("yay");

            this.$store.commit("setPickedUp", false)
            this.$store.commit("setPickedUpId", null)
          }
      }
    },
  }
}
</script>

<style>
  @import url("../../assets/css/drag/dragComponent.css");
</style>
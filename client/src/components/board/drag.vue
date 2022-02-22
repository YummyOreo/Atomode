<template>
  <div class="draggable-canvas">

    <ul>
      <li
        v-for="(item, index) in $store.state.board.itemList" :key="index"
        class="draggable select-none"
        :id="index"
        @mousedown="drag(index)"
        @mousemove="draging(index)"
        @mouseup="drop(index)"
        @mouseout="drop(index)"
      >
      {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name: 'DragCanvas',
  data() {
    return {
      cal: 100,
      scale: 1
    }
  },
	methods: {
    drag(index) {
      let element = document.getElementById(index)
      element.style.position = "absolute"

      this.$store.commit("board/setPickedUp", true)
      this.$store.commit("board/setPickedUpId", index)
    },
    draging(index) {
      if (this.$store.state.board.pickedUp == false) return
      if (this.$store.state.board.pickedUpId != index) return
      let element = document.getElementById(index)
      element.style.left = event.clientX - this.cal + "px"
      element.style.top = event.clientY - this.cal + "px"
    },
    drop(index) {
      this.$store.commit("board/setPickedUp", false)
      this.$store.commit("board/setPickedUpId", null)
    },
  }
}
</script>

<style>
  @import url("../../assets/css/board/dragComponent.css");
</style>
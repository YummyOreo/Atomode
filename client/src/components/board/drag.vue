<template>
  <div>

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
      element.style.left = event.clientX - 100 + "px";
      element.style.top = event.clientY - 100 + "px";
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
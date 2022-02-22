<template>

  <div>
      <navbar/>
      <main>
        <div class="content-center select-none">
          <dragcanvas/>
        </div>
      </main>


      <bottembar />
      <popuptext v-if="$store.state.board.popupNameToggle" />

  </div>
</template>

<script>

export default {
  name: 'Drag',
  components: {
      'navbar': require('@/components/Navbar.vue').default,
      'dragcanvas': require('@/components/board/drag.vue').default,
      'bottembar': require('@/components/board/Bottembar.vue').default,
      'popuptext': require('@/components/board/popupText.vue').default,
  },
  methods: {
    add() {
      this.$store.dispatch("board/addItem")

      setTimeout(() => { 
        let element = document.getElementById(this.$store.state.board.itemList.length - 1)

        element.style.position = "absolute"

        var x = (window.innerWidth / 2) - 50;
        var y = (window.innerHeight / 2) - 100;

        element.style.left = x + "px"
        element.style.top = y + "px"
      }, 0.1);
    },
  },
}
</script>

<style>

  * {
    padding: 0;
    margin: 0;
  }

</style>

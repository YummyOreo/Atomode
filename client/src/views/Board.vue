<template>

  <div @mousewheel="shink" class="full">
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
import { useHead } from '@vueuse/head'

export default {
  name: 'Drag',
  components: {
      'navbar': require('@/components/Navbar.vue').default,
      'dragcanvas': require('@/components/board/drag.vue').default,
      'bottembar': require('@/components/board/Bottembar.vue').default,
      'popuptext': require('@/components/board/popupText.vue').default,
  },
  methods: {
    shink(event) {
      
      event.preventDefault();

      let scale = this.$store.state.board.scale + event.deltaY * -0.001;

      if (scale > 1) return

      var arrayLength = this.$store.state.board.itemList.length;
      for (var i = 0; i < arrayLength; i++) {

          let element = document.getElementById(i)

          scale = Math.min(Math.max(.125, scale), 4);

          this.$store.commit("board/setScale", scale)

          // Apply scale transform
          element.style.transform = `scale(${this.$store.state.board.scale})`;
      }
    },
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
  setup() {
    useHead({
      title: 'Andromeda | Board',
      meta: [
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://andromeda-test-drag.netlify.app/#/board',
        },
        {
          property: 'og:title',
          content: 'Andromeda | Board',
        },
        {
          property: 'og:description',
          content: 'A draggable board, WIP',
        },
        {
          property: 'og:image',
          content: 'https://cdn.discordapp.com/attachments/901535491839639622/913175836956442664/helpbingus.png',
        },
      ],
    })
  }
}
</script>

<style>

  * {
    padding: 0;
    margin: 0;
  }

  .full {
    width: 100%;
    height: 100vh;
  }

</style>
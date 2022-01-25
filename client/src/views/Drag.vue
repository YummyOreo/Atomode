<template >

  <navbar/>
  <main>
    <div class="content-center select-none">
    
      <div class="addButton">
        <button @click="add">
          <div class="svg-wrapper-1 ">
            <div class="svg-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
              </svg>
            </div>
          </div>
          <span>Add</span>
        </button>
      </div>

      <dragcanvas/>
    </div>
  
  </main>
  
    
</template>

<script>

export default {
  name: 'Drag',
  components: {
      'navbar': require('@/components/Navbar.vue').default,
      'dragcanvas': require('@/components/drag/drag.vue').default,
  },
  methods: {
    add() {
      this.$store.dispatch("addItem")

      setTimeout(() => { 
        let element = document.getElementById(this.$store.state.itemList.length - 1)

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
  @import url("../assets/css/drag/addButton.css");
  @import url("../assets/css/navbar/navbar.css");

  * {
    padding: 0;
    margin: 0;
  }

  .addButton {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
  }


</style>

<template >
  <div @mousemove="mouseMoved">
    <ul>
		<a href="#">home</a>
    <p
    	@click="add"
    >
      +
    </p>
      <li
        v-for="(item, index) in itemList"
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
  name: 'Home',
  data: () => {
    return {
      itemList: [],
      pickedUp: false,
      pickedUpId: null,
    };
  },
  methods: {
    drag(index) {
      let element = document.getElementById(index)
      element.style.position = "absolute"

      this.pickedUp = true
      this.pickedUpId = index
    },
    draging(index) {
      if (this.pickedUp == false) return
      if (this.pickedUpId != index) return
      let element = document.getElementById(index)
      element.style.left = event.clientX - 100 + "px";
      element.style.top = event.clientY - 100 + "px";
    },
    drop(index) {
      this.pickedUpId = null
      this.pickedUp = false
    },
    mouseMoved() {
      if (this.pickedUp == true) {
        let element = document.getElementById(this.pickedUpId)
          if (event.clientX - 100 + "px" != element.style.left) {
            console.log("yay");

            this.pickedUpId = null
            this.pickedUp = false
          }
      }
    },
    add() {
      this.itemList.push("this " + (this.itemList.length + 1))

      setTimeout(() => { 
        let element = document.getElementById(this.itemList.length - 1)

        element.style.position = "absolute"

        var x = window.innerWidth / 2;
        var y = window.innerHeight / 2;

        element.style.left = x + "px"
        element.style.top = y + "px"

      }, 0.1);
    },
  }
}
</script>

<style>

  * {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;

    border-radius: 40px;
    
    background: #010400;
    box-shadow:  6px 6px 12px #010300,
                -6px -6px 12px #010500;
   

    color: #62bbc1;

    width: 200px;
    height: 200px;
    text-align: center;

    padding: 10px;
  }

  li:hover {
    cursor: pointer;

    background: #212529;
    box-shadow:  6px 6px 12px #1c1f23,
             -6px -6px 12px #262b2f;

  }

</style>

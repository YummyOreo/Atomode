<template>
    <ul>
		<a href="#">home</a>
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
</template>

<script>

export default {
  name: 'Home',
  data: () => {
    return {
      itemList: ["apple", "bannanannanannanan"],
      pickedUp: false,
    };
  },
  methods: {
    drag(index) {
      let element = document.getElementById(index)
      element.style.position = "absolute"

      this.pickedUp = true
    },
    draging(index) {
      if (this.pickedUp == false) return
      let element = document.getElementById(index)
      element.style.left = event.clientX - 250 + "px";
      element.style.top = event.clientY - 10 + "px";
    },
    drop(index) {
      let element = document.getElementById(index)

      this.pickedUp = false
    }
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

    background-color: rgb(26, 62, 87);
    color: white;

    width: 500px;
    text-align: center;

    padding: 10px;
  }

  li:hover {
    cursor: pointer;

    background-color: rgb(35, 77, 107);
  }

</style>

<template>
  <div class="popup" @click="closePopup">
      <div class="popup-inner">
            <input
            	class="popup-entry select-none"
            	v-model="name"
            	@keypress="keyPessCheck($event)"
            	placeholder="Enter Name"
            >
            <div class="popup-dropdown" @click="dropdowToggle($event)">
              <svg
              	width="26"
              	height="18"
              	viewBox="0 0 26 18"
              	fill="none"
              	xmlns="http://www.w3.org/2000/svg"
              	class="popup-dropdown-svg"
              >
              <path
              	d="M2 2L12.6667 16L24 2"
              	stroke="#FFFBFC"
              	stroke-width="3"
              	stroke-linecap="round"
              	stroke-linejoin="round"
              />
              </svg>
              <div id="popup-dropdown-dividor"></div>
              <div id="popup-dropdown-colorSelected"></div>
            <ul class="popup-dropdown-menue" v-if="dropdown">
                <li style="border-bottom: 1px solid #121212;"></li>
                <li class="popup-dropdown-menue-item" @click="selectColor('red')">
                  <div class="item-color item-red"></div>
                </li>
                <li class="popup-dropdown-menue-item" @click="selectColor('yellow')">
                  <div class="item-color item-yellow"></div>
                </li>
                <li class="popup-dropdown-menue-item" @click="selectColor('blue')">
                  <div class="item-color item-blue"></div>
                </li>
                <li class="popup-dropdown-menue-item" @click="selectColor('darkblue')">
                  <div class="item-color item-darkblue "></div>
                </li>
                <li class="popup-dropdown-menue-item" @click="selectColor('purple')">
                  <div class="item-color item-purple"></div>
                </li>
              </ul>
            </div>
            <button class="popup-enter select-none" @click="enterClick($event)">
                <span id="popup-enter-text">Enter</span>
                <div div class="popup-enterHover select-none">
                </div>
            </button>
            
      </div>
  </div>
</template>

<script>
export default {
  name: 'PopupText',
  data() {
    return {
      name: '',
      type: 'none',
      dropdown: false
    }
  },
	methods: {
    keyPessCheck($event) {
      if ($event.key === "Enter") {
        this.addButton()
      }
    },
    enterClick() {
        this.addNode()
    },
    addNode() {
      let error = document.getElementById("error")
      if (this.name == "") {
        window.alert("Please provide a name");
        return
      } else if (this.name.length <= 2) {
        window.alert("Name must be over 2 characters long");
        return
      } else if (this.type === "none") {
        window.alert("Please select a type");
        return
      }
      console.log(this.name)
      this.$store.dispatch("board/togglePopupName")
      this.$store.commit("board/addItem", {"name": this.name, "type": this.type})

      let element = document.getElementById("popup-dropdown-colorSelected")
      element.style.backgroundColor = "#161618"

      setTimeout(() => { 
        let element = document.getElementById(Object.keys(this.$store.state.board.itemList).length - 1)

        element.style.position = "absolute"

        var x = (window.innerWidth / 2) - 50;
        var y = (window.innerHeight / 2) - 100;

        element.style.left = x + "px"
        element.style.top = y + "px"

        element.style.transform = `scale(${this.$store.state.board.scale})`;

        element.classList.add(this.typeToColorClass(this.type));
      }, 0.1);
    },
    closePopup($event) {
        if ($event.target.className != "popup") return
        this.$store.dispatch("board/togglePopupName")
    },
    dropdowToggle($event) {
      // checks if its within the popup toggle
      const classNames = ["popup-dropdown-svg", "popup-dropdown"]
      const classIds = ["popup-dropdown-dividor", "popup-dropdown-colorSelected"]

      const className = $event.target.className.baseVal || $event.target.className
      const classId = $event.target.id

      const checkClassName =  classNames.some(e => e === className);
      const checkIds =  classIds.some(e => e === classId);
      
      if ((checkIds || checkClassName) == false) return

      // toggles it
      this.dropdown = !this.dropdown
      
      let svgElement = document.getElementsByClassName("popup-dropdown-svg")

      if (!this.dropdown) {
        svgElement[0].style.transform =  'rotate(0deg)';
        return;
      }
      svgElement[0].style.transform = 'rotate(180deg)';
    },
    typeToColorClass(type) {
      return "item-" + type;
    },
    typeToColor(type) {
      if (type == "red") return "#C3414B"
      if (type == "yellow") return "#EC9B82"
      if (type == "blue") return "#49A7EF"
      if (type == "darkblue") return "#3F4A86"
      if (type == "purple") return "#947CA4"
      console.log("Error \n No type provided")
      return "#C3414B"
    },
    selectColor(type) {
      this.type = type;

      let element = document.getElementById("popup-dropdown-colorSelected")
      element.style.backgroundColor = this.typeToColor(this.type)

      this.dropdown = !this.dropdown
      
      let svgElement = document.getElementsByClassName("popup-dropdown-svg")

      if (!this.dropdown) {
        svgElement[0].style.transform =  'rotate(0deg)';
        return;
      }
      svgElement[0].style.transform = 'rotate(180deg)';
    }
  }
}
</script>

<style>
  @import url("../../assets/css/board/popupText.css");
  @import url("../../assets/css/board/colors.css");

</style>
<template>
	<div class="bottembar">
		<ul class="bottembar-list">
			<li class="bottembar-element">
				<div class="addDivButton select-none">
					<button @click="add" class="addButton">
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
			</li>

		</ul>
	</div>

</template>

<script>
export default {
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
  	@import url("../../assets/css/drag/addButton.css");
  	@import url("../../assets/css/drag/Bottembar.css");

</style>
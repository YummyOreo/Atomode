<template>
	<div class="bottembar">
		<ul class="bottembar-list">
			<li class="bottembar-element">
				<button @click="add" class="bottembar-addButton content-center">
					<img
						class="bottembar-addButton-image"
						src="../../assets/images/bottemBar/Add-button.png"
						alt=""
					>
					<img
						class="bottembar-addButton-imageHover"
						src="../../assets/images/bottemBar/Add-button-hover.png"
						alt=""
					>
				</button>
			</li>

		</ul>
	</div>

</template>

<script>
export default {
	methods: {
    add() {
		this.$store.dispatch("board/togglePopupName")
		setTimeout(() => {
			const element = document.getElementsByClassName("bottembar-addButton")
			element[0].classList.add('click-annimation');
			element[0].classList.add("click-annimation2")
			setTimeout(() => {
				element[0].classList.remove('click-annimation');
				element[0].classList.remove("click-annimation2")
			}, 900);
		}, 150);
    },
  },
}
</script>

<style>
  	@import url("../../assets/css/board/addButton.css");
  	@import url("../../assets/css/board/Bottembar.css");

</style>
<template>
	<div class="bottembar">
		<ul class="bottembar-list">
			<li class="bottembar-element">
				<button @click="add" class="bottembar-addButton content-center">
					<img class="bottembar-addButton-image" src="../../assets/images/bottemBar/Add-button.png" alt="">
					<img class="bottembar-addButton-imageHover" src="../../assets/images/bottemBar/Add-button-hover.png" alt="">
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
    },
  },
}
</script>

<style>
  	@import url("../../assets/css/board/addButton.css");
  	@import url("../../assets/css/board/Bottembar.css");

</style>
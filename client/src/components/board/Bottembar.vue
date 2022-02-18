<template>
	<div class="bottembar">
		<ul class="bottembar-list">
			<li class="bottembar-element">
				<div class="addDivButton select-none">
					<button @click="add" class="addButton">
						<div class="svg-wrapper-1 ">
							<div class="svg-wrapper">
								<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
							width="38.000000pt" height="38.000000pt" viewBox="0 0 338.000000 338.000000"
							preserveAspectRatio="xMidYMid meet">

							<g transform="translate(0.000000,338.000000) scale(0.100000,-0.100000)"
							fill="#FFFBFC" stroke="none">
							<path d="M1633 2890 c-117 -17 -244 -104 -306 -210 -47 -81 -57 -145 -57 -371
							l0 -208 -237 -3 -238 -3 -72 -34 c-171 -80 -271 -263 -242 -443 28 -179 161
							-320 337 -357 29 -6 143 -11 252 -11 l200 0 0 -188 c0 -137 4 -204 16 -247 31
							-121 108 -216 218 -271 221 -109 465 -26 573 194 l38 76 3 218 3 218 189 0
							c104 0 213 5 242 11 223 47 372 261 337 482 -19 121 -91 228 -197 296 -84 53
							-134 61 -364 61 l-208 0 0 213 c0 116 -5 231 -10 255 -49 210 -261 353 -477
							322z m165 -279 c18 -12 41 -40 52 -61 19 -36 20 -60 20 -315 0 -301 4 -328 56
							-362 25 -16 59 -19 319 -23 l292 -5 37 -29 c94 -71 88 -218 -11 -286 -36 -25
							-38 -25 -329 -30 -392 -7 -364 21 -364 -360 0 -297 -4 -316 -80 -366 -35 -23
							-47 -26 -103 -22 -76 5 -116 29 -146 91 -20 41 -21 60 -21 310 l0 267 -34 38
							-34 37 -299 5 c-265 4 -302 7 -336 24 -86 43 -116 173 -58 253 51 71 63 73
							375 73 308 0 330 4 366 62 19 31 20 50 20 303 0 149 4 285 10 304 11 38 41 74
							85 103 42 27 138 21 183 -11z"/>
							</g>
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
		this.$store.dispatch("board/togglePopupName")
    },
  },
}
</script>

<style>
  	@import url("../../assets/css/board/addButton.css");
  	@import url("../../assets/css/board/Bottembar.css");

</style>
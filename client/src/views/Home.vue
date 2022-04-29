<template>
  <navbar/>
</template>

<script>

export default {
  name: 'Atomode | Home',
  components: {
      'navbar': require('@/components/Navbar.vue').default,
  },
}
</script>

<style>
  @import url("../assets/css/main.css");
</style>

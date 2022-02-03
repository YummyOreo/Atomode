<template>
  <navbar/>
</template>

<script>

export default {
  name: 'Home',
  components: {
      'navbar': require('@/components/Navbar.vue').default,
  },
}
</script>

<style>
  @import url("../assets/css/main.css");
</style>

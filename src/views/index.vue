<script setup>
import navBar from '../components/navBar.vue'
import home from '../components/home.vue'
</script>

<template>
  <suspense>
    <home></home>
  </suspense>
</template>

<style scoped>
* {
  margin: 0!important;
  padding: 0!important;
}
</style>

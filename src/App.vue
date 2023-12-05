<template>
  <div id="app">
    <index/>
  </div>
</template>

<script setup>
import index from './views/index.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
.row {
  display: flex;
  width: calc(100vw - 28px);
}
</style>

<script setup>
import {computed} from "vue";
import {useWindowScroll} from "@vueuse/core";

const { x, y } = useWindowScroll()

const shouldFixTop = computed(() => {
  return y.value >= 70
})

</script>

<template>
  <div class="recent-post" :class="{ 'fixed-top': shouldFixTop }">
    recentPost
  </div>
</template>

<style scoped>
.recent-post{
  width: 300px;
  height: 450px;
  background-color: #1a1a1a;
  margin-top: 20px;
  margin-left: 30px;
  border-radius: 15px;
}
.fixed-top {
  position: fixed;
  top: 0;
  margin-left: 30px;
}
</style>
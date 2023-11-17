<script setup>
import { useWindowScroll } from '@vueuse/core'
import { computed } from "vue";

const { x, y } = useWindowScroll()

const shouldFixTop = computed(() => {
  return y.value >= 70
})

</script>

<template>
  <div class="card" :class="{ 'fixed-top': shouldFixTop }">
    <div class="img"></div>
    <div class="content">
      <p class="text">Haut-Ai</p>
      <p class="text">不知道写什么</p>
      <div class="demo">
        浏览 归档 文章
      </div>
    </div>
  </div>
</template>

<style scoped>
.card{
  width: 300px;
  margin: 20px auto;
  background-color: pink;
  height: 300px;
}
.img{
  width: 35%;
  height: 35%;
  position: relative;
  top: 30px;
  left: 50%;
  transform: translate(-50%);
  background-color: #1a1a1a;
}
.content{
  width: 100%;
  height: 50%;
  position: relative;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
}
.text{
  text-align: center;
}
.demo{
  width: 100%;
  height: 50px;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
.fixed-top {
  position: fixed;
  top: 0;
  left: 45px;
}
</style>
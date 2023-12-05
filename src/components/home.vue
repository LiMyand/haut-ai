<script setup>
import navBar from '../components/navBar.vue'
import { getOne } from "../api/apiService.js";
import { ref } from "vue";
import carouselVue from "./carousel/carouselVue.vue";
const { data } = await getOne();
const backgroundImage = ref(new URL('../assets/myphoto.png', import.meta.url).href);

console.log(data);

</script>

<template>
  <div class="text-center background" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <nav-bar></nav-bar>
    <div class="title-content">
      <h1 class="title">
        Haut-Ai
      </h1>
      <hr class="divider" />
      <div class="content">
        <span>{{ data.hitokoto }}</span>
      </div>
    </div>
    <div class="row margin">
      <div class="col-md-7">
        <div class="custom-div">
          <div class="card-show-1 carousel-parent">
            <carousel-vue></carousel-vue>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="custom-div">
          <div class="card-show-2">
            <div><i></i>网站咨询</div>
            <div>人数 17</div>
            <div>人数 17</div>
            <div>人数 17</div>
            <div>人数 17</div>
            <div>人数 17</div>
            <div>人数 17</div>
            <div>人数 17</div>
            <div>人数 17</div>
            <div>人数 17</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container text-center">
    <div class="row">
      <div class="col-sm-8">col-sm-8</div>
      <div class="col-sm-4">col-sm-4</div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0!important;
  margin: 0!important;
}
.background {
  width: 100%;
  height: 75vh;
  background-image: v-bind('url(' + backgroundImage + ')');
  background-size: cover;
  background-position: center;
}
.title-content {
  padding: 20px;
}
.title {
  height: 2em;
  line-height: 2em;
  text-align: center;
  font-size: 3em;
  color: #333;
  margin-bottom: 0.5em; /* 调整标题和分隔线之间的距离 */
}
.divider {
  border: 0;
  height: 2px;
  background: antiquewhite;
  margin: 0.5em 0; /* 调整分隔线和内容之间的距离 */
}
.content {
  text-align: center;
  font-size: 1.2em;
  color: white;
  height: 3em;
  line-height: 3em;
}
.margin {
  margin-top: 3em!important;
}
.custom-div {
  width: 95%;
  border-radius: 10px;
}
.card-show-1, .card-show-2 {
  margin: 10px;
  border-radius: 10px;
  width: 100%;
  background-color: greenyellow;
  height: 200px;
}
.card-show-2 {
  overflow-y: auto;
  max-height: 100%; /* 或者你希望的最大高度 */
  scrollbar-width: none; /* 针对 Firefox 浏览器 */
}
.card-show-2::-webkit-scrollbar {
  display: none;
}
.carousel-parent {
  height: 200px;
  width: 100%;
  overflow: hidden;  /* 防止内容溢出 */
}
@media (min-width: 1200px) { /* 576px 是Bootstrap中sm的断点 */
  .card-show-1 {
    width: 650px;
    background-color: rgba(229, 217, 217, 0.4);
    height: 200px;
    float: right;
    position: relative;
    left: -20px;
  }
  .card-show-2 {
    width: 500px;
    background-color: rgba(229, 217, 217, 0.4);
    height: 200px;
    float: left;
  }
}
/* 当屏幕宽度大于等于sm */
@media (min-width: 768px) { /* 576px 是Bootstrap中sm的断点 */
  .custom-div {
    width: 100%;
  }
}
</style>
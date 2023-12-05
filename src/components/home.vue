<script setup>
import navBar from '../components/navBar.vue';
import homeHeader from '../components/homeHeader.vue';
import { ref } from "vue";

const backgroundImage = ref(new URL('../assets/myphoto.png', import.meta.url).href);


</script>

<template>
  <div class="text-center background" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
  <nav-bar></nav-bar>
    <suspense>
      <home-header></home-header>
    </suspense>
  </div>
  <div class="header">
    <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
  <div class="row">
    <div class="col-8">
      <div class="container float-md-end">
        <div class="image-box">
          <img src="../assets/myphoto.png" alt="Image">
        </div>
        <div class="text-box">
          <p>这是文字内容</p>
        </div>
      </div>
      <div class="container float-md-end">
        <div class="image-box">
          <img src="../assets/myphoto.png" alt="Image">
        </div>
        <div class="text-box">
          <p>这是文字内容</p>
        </div>
      </div>
      <div class="container float-md-end">
        <div class="image-box">
          <img src="../assets/myphoto.png" alt="Image">
        </div>
        <div class="text-box">
          <p>这是文字内容</p>
        </div>
      </div>
      <div class="container float-md-end">
        <div class="image-box">
          <img src="../assets/myphoto.png" alt="Image">
        </div>
        <div class="text-box">
          <p>这是文字内容</p>
        </div>
      </div>
    </div>
    <div class="col-4">col-4</div>
  </div>
</template>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Lato:300:400);
* {
  padding: 0!important;
  margin: 0!important;
}
.background {
  width: 100%;
  height: 75vh;
  background-size: cover;
  background-position: center;
}

body {
  margin:0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}

.header {
  position:relative;
  text-align:center;
  top: -50px;
  color:white;
}
.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}
/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}
.container {
  position: relative;
  height: 200px;
  right: 3em;
  display: flex;
  width: 750px;
  align-items: stretch; /* 确保子元素填满高度 */
  padding: 10px!important;
  border-radius: 10px;
  border: 1px solid #ccc
}
.container:not(:first-child) {
  margin-top: 20px!important;
}
.image-box {
  flex: 1; /* 占据可用空间 */
}

.image-box img {
  height: 100%; /* 图片高度填满容器 */
  width: 300px; /* 自动调整宽度以保持图片比例 */
  background-size: cover;
  border-radius: 10px;
}
.text-box {
  flex: 2; /* 文本部分占据剩余空间 */
  padding: 20px; /* 文本的内边距 */
}
</style>
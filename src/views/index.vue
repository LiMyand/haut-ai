<script setup>
import { ref, onMounted, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import card from '../components/card.vue'
import recentPost from '../components/right/recentPost.vue'

let headerTem = ref(['首页', '关于', '联系', '归档', '文章', '友链'])
const { width, height } = useWindowSize()
const showRight = computed(() => width.value > 1200);
const showLeft = computed(() => width.value > 768);
onMounted(() => {

})

</script>

<template>
  <div class="header">
    <ul>
      <li v-for="item in headerTem" :key="item">{{item}}</li>
    </ul>
  </div>
  <div class="container">
    <div class="left" v-show="showLeft">
      <card></card>
    </div>
    <div class="middle">
      <router-view></router-view>
    </div>
    <div class="right" v-show="showRight">
      <recentPost></recentPost>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  width: 100%;
  height: 50px;
  border-bottom: #1a1a1a 1px solid;
}
.header ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
.header ul li {
  list-style: none;
  text-align: center;
  line-height: 50px;
  padding-left: 30px;
}
.container {
  display: flex;
  justify-content: space-between;
}

.left, .right {
  flex-basis: 25%;
}

.middle {
  flex-basis: 50%;
  flex-grow: 1;
}

/* Responsive adjustments */
@media (max-width: 800px) {
  .middle {
    flex-basis: 85%;
  }
}

@media (max-width: 600px) {
  .middle {
    flex-basis: 100%;
  }
}
</style>
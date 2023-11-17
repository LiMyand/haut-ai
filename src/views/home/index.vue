<script setup>
import { ref, onMounted, computed } from 'vue'

const list = ref(['首页', '关于', '联系', '首页', '关于', '联系'])

</script>

<template>
  <div>
    <div v-for="(item, index) in list" :key="index" class="item-artical">{{ item }}</div>
  </div>
</template>

<style scoped>
.item-artical{
  width: 85%;
  line-height: 50px;
  padding: 20px;
  background-color: #b0b1dc;
  border-radius: 15px;
  margin: 20px auto;
}
</style>
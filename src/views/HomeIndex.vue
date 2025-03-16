<script lang="ts" setup>
import { ref } from "vue";

const flag = ref(1);

const HandleClick = () => {
  flag.value += 1;
};
</script>

<template>
  <div class="home-page">
    <h1>主页</h1>
    {{ flag }}
    <div>{{ Date.now() }}</div>
    <el-button @click="HandleClick">点击</el-button>
  </div>
</template>

<style lang="less" scoped></style>

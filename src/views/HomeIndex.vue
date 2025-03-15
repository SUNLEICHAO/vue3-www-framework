<script setup>
import { ref } from "vue";
import { useMouse } from "@/hooks/useMouse.js";
const { x, y } = useMouse();

const flag = ref(1);

const HandleClick = () => {
  flag.value += 1;
};
</script>

<template>
  <div class="home-page">
    <h1>主页</h1>
    <!-- <h2>x，y当前坐标为{{ x }}, {{ y }}</h2> -->
    {{ flag }}
    <div>{{ Date.now() }}</div>
    <el-button @click="HandleClick">点击</el-button>
  </div>
</template>

<style lang="less" scoped></style>

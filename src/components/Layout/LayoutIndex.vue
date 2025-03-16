<script setup lang="ts">
import { RouterView } from "vue-router";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutFooter from "./LayoutFooter.vue";
</script>

<template>
  <div class="page-basic-layout">
    <LayoutHeader class="page-basic-header" />
    <RouterView class="page-basic-body" />
    <LayoutFooter class="page-basic-footer" />
  </div>
</template>

<style lang="less" scoped>
.page-basic-layout {
  min-height: 100vh;
  min-width: 1080px;
  display: flex;
  flex-direction: column;
}

.page-basic-body {
  flex: 1;
  background-color: #f8fafc;
}
</style>

<script lang="ts" setup>
const year = new Date().getFullYear();
const BEIAN = "京ICP备2008018686号-0";
</script>

<template>
  <footer class="page-footer">Copyright © 2023-{{ year }} demo.com All Rights Reserved. {{ BEIAN }}</footer>
</template>

<style type="text/css" lang="less" scoped>
.page-footer {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #999;
  text-align: center;
}
</style>

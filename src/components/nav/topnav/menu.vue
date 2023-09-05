<template>
  <div class="top-menu">
    <a
      class="link"
      v-for="item in urls"
      :href="item.link"
      :key="item.id"
      target="_blank"
    >
      {{ item.sysname }}
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const urls = [
      {
        id: 1,
        sysname: "百度",
        link: "https//:baidu.com",
      },
      {
        id: 2,
        sysname: "淘宝",
        link: "https//:taobao.com",
      },
    ];
    return {
      urls,
    };
  },
});
</script>
<style lang="less" scoped>
.top-menu {
  overflow: hidden;
}
.link {
  padding: 3px 5px;
  margin-right: 10px;
  text-decoration: none;
  color: inherit;
  float: right;
}
</style>

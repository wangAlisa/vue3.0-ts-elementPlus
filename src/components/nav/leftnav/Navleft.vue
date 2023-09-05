<template>
  <el-menu
    defult-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <Menu :menuList="menulist" />
  </el-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menu from "./Menu.vue";

export default defineComponent({
  components: {
    Menu,
  },
  methods: {
    handleOpen() {
      console.log("handleOpen");
    },
    handleClose() {
      console.log("handleclose");
    },
  },

  setup() {
    const menulist: any[] = [
      {
        id: 1,
        title: "首页",
        icon: "el-icon-s-home",
        path: "/home",
        children: [],
      },
      {
        id: 2,
        title: "表格管理",
        icon: "el-icon-s-grid",
        path: "/table",
        children: [
          {
            id: "2-1",
            title: "基础表格",
            icon: "el-icon-menu",
            path: "basics",
            children: [],
          },
          {
            id: "2-2",
            title: "复杂表格",
            icon: "el-icon-s-grid",
            path: "complex",
            children: [],
          },
        ],
      },
    ];
    return {
      menulist,
    };
  },
});
</script>
<style lang="less" scoped></style>

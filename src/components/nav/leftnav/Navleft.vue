<template>
  <el-menu
    :collapse="false"
    :unique-opened="true"
    :defult-active="state.currentMenu"
    active-text-color="#4dbcff"
  >
    <Menu :menuList="menulist" />
  </el-menu>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed, reactive } from "vue";
import Menu from "./Menu.vue";

export default defineComponent({
  components: {
    Menu,
  },

  setup() {
    interface MENU {
      id: number | string;
      title: string;
      icon: string;
      path: string;
      children: MENU[];
    }
    const menulist: MENU[] = [
      {
        id: 1,
        title: "首页",
        icon: "",
        path: "/home",
        children: [],
      },
      {
        id: 2,
        title: "表格管理",
        icon: "Menu",
        path: "/table",
        children: [
          {
            id: "2-1",
            title: "基础表格",
            icon: "",
            path: "/table/basics",
            children: [],
          },
          {
            id: "2-2",
            title: "复杂表格",
            icon: "",
            path: "/table/complex",
            children: [],
          },
        ],
      },
    ];

    const store = useStore();
    let state = reactive({
      currentMenu: computed(() => store.getters.GET_CURRENTMENU),
    });
    return {
      menulist,
      state,
    };
  },
});
</script>
<style lang="less" scoped></style>

<template>
  <div class="top">
    <h3 class="sys-name">后台管理系统</h3>
    <Menu class="menu"></Menu>
    <Logout class="layout"></Logout>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menu from "./menu.vue";
import Logout from "./logout.vue";

export default defineComponent({
  components: {
    Menu,
    Logout,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.top {
  display: flex;
  h3 {
    width: 150px;
  }
  .menu {
    flex: 1;
  }
  .layout {
    width: 200px;
  }
}
</style>

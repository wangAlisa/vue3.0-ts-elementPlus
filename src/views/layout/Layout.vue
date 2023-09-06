<template>
  <TopNav class="topanv"></TopNav>
  <div class="layout">
    <Leftnav class="leftnav"></Leftnav>
    <div class="context">
      <Breadcrumb />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Leftnav from "@/components/nav/leftnav/Navleft.vue";
import TopNav from "@/components/nav/topnav/Navtop.vue";
import Breadcrumb from "@/components/nav/breadcrumb/Breadcrumb.vue";

export default defineComponent({
  components: {
    Leftnav,
    TopNav,
    Breadcrumb,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.topanv {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #ccc;
}
.layout {
  display: flex;
  .leftnav {
    width: 140px;
  }
  .context {
    flex: 1;
  }
}
</style>

<template>
  <div class="menu">
    <template v-for="m in state.menuList">
      <el-sub-menu
        v-if="m.children && m.children.length > 0"
        :index="m.id"
        :key="m.id"
      >
        <template v-slot:title>
          <component :is="m.icon" style="font-size: 12px" />
          <span>{{ m.title }}</span>
        </template>
        <el-menu-item-group>
          <my-nav :menuList="m.children"></my-nav>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item :key="m.id" :index="m.id" @click="gotoRoute(m)" v-else>
        <component :is="m.icon" />
        <span>{{ m.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "my-nav",
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    gotoRoute(item: { path: string }) {
      this.router.push({
        path: item.path,
      });
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props: any) {
    let router = useRouter();
    let state = reactive({
      menuList: props.menuList,
    });
    return {
      state,
      router,
    };
  },
});
</script>
<style lang="less" scoped>
.menu {
  font-size: 12px;
  width: 140px;
}
</style>

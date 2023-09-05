<template>
  <div>
    <template v-for="m in state.menuList" :key="m.id">
      <el-sub-menu v-if="m.children && m.children.length > 0" :index="m.id">
        <template v-slot:title>
          <i class="iconfont theme-color" :class="m.icon"></i>
          <span class="theme-color">{{ m.title }}</span>
        </template>
        <el-menu-item-group>
          <my-nav :menuList="m.children"></my-nav>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item
        :key="m.title"
        :index="m.id"
        @click="gotoRoute(m.path)"
        v-else
        class="theme-bg"
      >
        <i class="iconfont theme-color" :class="m.icon"></i>
        <span class="theme-color">{{ m.title }}</span>
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
<style lang="less" scoped></style>

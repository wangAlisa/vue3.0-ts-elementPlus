<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(route, i) in state.crumbList"
        :key="i"
        :to="{
          path: !route.children || route.children.length == 0 ? route.path : '',
        }"
      >
        <span v-if="route.name != 'home'">{{ route.meta.name }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    let store = useStore();
    let state = reactive({
      crumbList: computed(() => store.getters.getCrumbList),
    });
    return {
      state,
    };
  },
});
</script>
<style lang="less" scoped>
.breadcrumb {
  line-height: 50px;
  padding: 5px 20px;
  font-size: 12px;
  color: #ccc;
}
</style>

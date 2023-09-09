<template>
  <div>{{ cnum }}</div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    num: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    let cnum = ref(props.num);
    let childv = ref("子组件");

    const changefn = function (): void {
      childv.value = "子组件来了";
      emit("changemsg", "惊喜来了");
    };

    watch(
      () => props.num,
      (newprops) => {
        cnum.value = newprops;
      }
    );

    return {
      changefn,
      childv,
      cnum,
    };
  },
});
</script>
<style lang="less" scoped></style>

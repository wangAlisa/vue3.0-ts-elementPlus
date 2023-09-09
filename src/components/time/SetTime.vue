<template>
  <span>{{ time }}</span>
</template>
<script lang="ts">
import { useTime } from "@/hooks/setTime";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { dt, formatDateTime } = useTime();
    let time = formatDateTime(dt);
    return { time, dt, formatDateTime };
  },
});
</script>
<style lang="less" scoped></style>

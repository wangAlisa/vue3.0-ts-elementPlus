<template>
  <Btn ref="content" @changemsg="changemsg" :num="num" />
  <div @click="getContent">defineExpose{{ "-" + msg }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Btn from "@/components/buttom/Bnt.vue";

export default defineComponent({
  components: {
    Btn,
  },
  setup() {
    let num = ref<number>(10); // 给子组件传值
    let msg = ref("点击有惊喜");
    let content = ref<InstanceType<any>>(null);

    let getContent = () => {
      num.value = num.value + 1; // 给子组件传新值
      if (content.value.childv) {
        console.log(content.value.childv); // 输出值为: 子组件
        content.value.changefn(); // 调用子组件方法
      }
    };

    const changemsg = (val: string) => {
      msg.value = val; // 更改msg的值
      console.log(content.value.childv); // 再次输出值为: 子组件来了
    };

    return {
      content,
      getContent,
      changemsg,
      msg,
      num,
    };
  },
});
</script>
<style lang="less" scoped></style>

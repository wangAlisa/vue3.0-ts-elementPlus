<template>
  <div class="home">
    <div class="title"><span>vue3.0+ts</span>后台</div>
    <div class="title">vue/cli脚手架搭箭的项目框架</div>
    <div>
      <a
        class="go-contact"
        href="https://www.jianshu.com/p/86ec59f1ca7a"
        target="_blank"
      >
        实践过程中遇到的问题汇总文档</a
      >
    </div>
    <div>
      <a
        class="go-contact"
        href="https://github.com/wangAlisa/vue3.0-ts-elementPlus"
        target="_blank"
        >github源码</a
      >
    </div>
    <div>
      <a
        class="go-contact"
        href="https://element-plus.org/zh-CN/"
        target="_blank"
        >element plus 官网</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.home {
  text-align: center;
}
.title {
  font-size: 40px;
  font-weight: 600;
  margin: 50px 0 30px;
  span {
    color: red;
  }
}
.go-contact {
  color: rgb(0, 89, 255);
  font-size: 24px;
  margin-bottom: 30px;
  display: block;
}
</style>

<template>
  <div>
    <div class="title">简洁/实用<span>vue3.0+ts</span> 现成模板</div>
    <div>
      <router-link class="go-contact" to="/contact">点击获取源码</router-link>
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

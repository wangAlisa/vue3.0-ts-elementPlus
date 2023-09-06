<template>
  <div class="user-msg">
    <el-dropdown>
      <span class="user-name">{{ userName }}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const userName = inject("userName");
    console.log(userName, "userName");
    let router = useRouter();
    let logout = function () {
      window.localStorage.clear();
      router.push({
        path: "/login",
      });
    };
    return {
      logout,
      userName,
    };
  },
});
</script>
<style lang="less" scoped>
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}
.user-msg {
  .user-name {
    padding: 20px 80px;
    border: none !important;
    &:hover {
      border: none !important;
    }
  }
}
</style>

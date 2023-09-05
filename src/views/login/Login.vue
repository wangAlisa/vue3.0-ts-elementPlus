<template>
  <div class="demo">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
          v-model="ruleForm.name"
          autocomplete="off"
          placeholder="随便输入"
        />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
          placeholder="随便输入"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance, FormRules } from "element-plus";
export default defineComponent({
  setup() {
    let ruleForm = reactive({
      name: "",
      pass: "",
    });
    let router = useRouter();
    const ruleFormRef = ref<FormInstance>();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let validatePass = function (rule: any, value: any, callback: any) {
      if (!value) {
        return callback(new Error("请输入密码"));
      }
      callback();
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let checkName = function (rule: any, value: any, callback: any) {
      if (!value) {
        return callback(new Error("请输入用户名"));
      }
      callback();
    };

    let rules = reactive<FormRules>({
      pass: [{ validator: validatePass, trigger: "blur" }],
      name: [{ validator: checkName, trigger: "blur" }],
    });

    let submitForm = function (formEl: FormInstance | undefined) {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          router.push({
            path: "/home",
          });
          window.localStorage.setItem("token", "is token");
        } else {
          return false;
        }
      });
    };

    return {
      ruleForm,
      rules,
      submitForm,
      ruleFormRef,
    };
  },
});
</script>
<style lang="less" scoped>
.demo {
  &-ruleForm {
    width: 300px;
    padding-top: 100px;
    margin: 0 auto;
  }
}
</style>

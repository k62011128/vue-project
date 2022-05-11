<template>
  <div class="login-wrapper">
    <div class="login-header">
      <img src="../assets/logo.png" alt="Vue" class="logo">
      <div class="name">Vue3练手项目</div>
    </div>
    <div class="login-body">
      <el-form :model="ruleForm" :rules="rules" class="login-form">
        <el-form-item label="账号" prop="username">
          <!--        prop对应rules的key,表示检测输入是否符合要求-->
          <el-input v-model.trim="ruleForm.username" autocomplete="off" type="text">

          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="ruleForm.password" autocomplete="off" type="password">

          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  name: 'Login',
  components: {},
  setup(props, {emit}) {
    const state = reactive({
          ruleForm: {
            username: '',
            password: ''
          },
          rules: {
            username: [
              {required: true, message: 'username is required!', trigger: 'blur'},//blur表示输入框失去焦点时才会触发校验
              {max: 20, message: 'username is too long!', trigger: 'blur'}
            ],
            password: [
              {required: true, message: 'password is required!', trigger: 'blur'},
              {max: 30, message: 'password is too long!', trigger: 'blur'}
            ]
          }
        }
    )
    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  margin-top:5rem;

  .login-header {
    font-size: 0;
    display: flex;
    justify-content: center;

    .logo {
      width: 5rem;
      height: 5rem;
      margin-right: 1rem;
    }

    .name {
      font-size: 3rem;
      line-height: 5rem;
    }
  }

  .login-body {
    width: 70%;
    margin: 2rem auto 0;

    .login-form {
      width: 40%;
      margin: 0 auto;
    }
  }

}


</style>

<template>
  <div class="login-wrapper">
    <div class="login-header">
      <img src="../assets/logo.png" alt="Vue" class="logo">
      <div class="name">Vue3练手项目</div>
    </div>
    <div class="login-body">
      <el-form :model="ruleForm" :rules="rules" class="login-form" ref="loginForm">
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
          <el-button type="primary" style="width: 100%;" @click="submitForm">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {localGet, localSet, reqLogin} from "@/api";
import {defineComponent, reactive, ref, toRefs, VueElement} from "vue";
import {useRouter} from "vue-router";
import { ElMessage } from 'element-plus'
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
    const router = useRouter();
    if(localGet('token')!=='null') {
      location.href='/'
    }
    const loginForm=ref(null)
    const submitForm = async (formEl=undefined) => {
      (loginForm.value! as VueElement & {validate: (valid: any) => boolean}).validate(async (valid: boolean) => {
        if (valid) {
          let res = await reqLogin(state.ruleForm.username, state.ruleForm.password)
          const {token}:{token:string} = res as any
          if(token==='admin'){
            localSet('token',token)
            localSet('username',state.ruleForm.username)
            location.href='/'
          }else {
            ElMessage.error('login failed,please check your input!')
          }
        }
      });
    }
    return {
      ...toRefs(state),
      submitForm,
      loginForm
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

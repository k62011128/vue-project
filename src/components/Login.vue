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
          <el-input v-model.trim="ruleForm.password" autocomplete="off" type="password" @keyup.enter="loginEnter">
          </el-input>
        </el-form-item>
        <el-form-item>
          <button style="width: 100%;" @click="submitForm" ref="btn" class="btn">
            登录
          </button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {localGet, localSet, reqLogin} from "@/api";
import {defineComponent, onMounted, reactive, ref, toRefs, VueElement} from "vue";
import {useRouter} from "vue-router";
import {ElMessage} from 'element-plus'
import {pathMap} from "@/utils";

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
          },
          title: '登录'
        }
    )
    const btn = ref(null)
    const router = useRouter();
    if (localGet('token') !== 'null') {
      location.href = '/'
    }
    router.afterEach((to: any, from, failure) => {
      state.title = pathMap[to.name]
      document.title = state.title
    })
    const loginForm = ref(null)
    const submitForm = async (formEl = undefined) => {
      (loginForm.value! as VueElement & { validate: (valid: any) => boolean }).validate(async (valid: boolean) => {
        if (valid) {
          let res = await reqLogin(state.ruleForm.username, state.ruleForm.password)
          const {token}: { token: string } = res as any
          if (token === 'admin') {
            localSet('token', token)
            localSet('username', state.ruleForm.username)
            location.href = '/'
          } else {
            ElMessage.error('login failed,please check your input!')
          }
        }
      });
    }
    const loginEnter = () => {
      (btn.value! as { click: any }).click()
    }
    onMounted(() => {
      document.title = state.title
    })
    return {
      ...toRefs(state),
      submitForm,
      loginForm,
      btn,
      loginEnter,
    }
  }
});


</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 5rem;
  background-color: #e493d0;
  background-image: radial-gradient(closest-side, rgba(235, 105, 78, 1), rgba(235, 105, 78, 0)),
  radial-gradient(closest-side, rgba(243, 11, 164, 1), rgba(243, 11, 164, 0)),
  radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
  radial-gradient(closest-side, rgba(170, 142, 245, 1), rgba(170, 142, 245, 0)),
  radial-gradient(closest-side, rgba(248, 192, 147, 1), rgba(248, 192, 147, 0));
  background-size: 130vmax 130vmax,
  80vmax 80vmax,
  90vmax 90vmax,
  110vmax 110vmax,
  90vmax 90vmax;
  background-position: -80vmax -80vmax,
  60vmax -30vmax,
  10vmax 10vmax,
  -30vmax -10vmax,
  50vmax 50vmax;
  background-repeat: no-repeat;
  animation: 10s movement linear infinite;

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

      .btn {
        border: none;
        height: 2rem;
        border-radius: 1rem;
        color: #fcfcfc;
        font-size: 1rem;
        letter-spacing: 0.5rem;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
        background-color: rgba(65, 184, 131, 0.8);
        cursor: pointer;
      }
    }
  }

  @keyframes movement {
    0%, 100% {
      background-size: 130vmax 130vmax,
      80vmax 80vmax,
      90vmax 90vmax,
      110vmax 110vmax,
      90vmax 90vmax;
      background-position: -80vmax -80vmax,
      60vmax -30vmax,
      10vmax 10vmax,
      -30vmax -10vmax,
      50vmax 50vmax;
    }
    25% {
      background-size: 100vmax 100vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      60vmax 60vmax;
      background-position: -60vmax -90vmax,
      50vmax -40vmax,
      0vmax -20vmax,
      -40vmax -20vmax,
      40vmax 60vmax;
    }
    50% {
      background-size: 80vmax 80vmax,
      110vmax 110vmax,
      80vmax 80vmax,
      60vmax 60vmax,
      80vmax 80vmax;
      background-position: -50vmax -70vmax,
      40vmax -30vmax,
      10vmax 0vmax,
      20vmax 10vmax,
      30vmax 70vmax;
    }
    75% {
      background-size: 90vmax 90vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      70vmax 70vmax;
      background-position: -50vmax -40vmax,
      50vmax -30vmax,
      20vmax 0vmax,
      -10vmax 10vmax,
      40vmax 60vmax;
    }
  }
}

@keyframes movement {
  0%, 100% {
    background-size: 130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax;
    background-position: -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax;
  }
  25% {
    background-size: 100vmax 100vmax,
    90vmax 90vmax,
    100vmax 100vmax,
    90vmax 90vmax,
    60vmax 60vmax;
    background-position: -60vmax -90vmax,
    50vmax -40vmax,
    0vmax -20vmax,
    -40vmax -20vmax,
    40vmax 60vmax;
  }
  50% {
    background-size: 80vmax 80vmax,
    110vmax 110vmax,
    80vmax 80vmax,
    60vmax 60vmax,
    80vmax 80vmax;
    background-position: -50vmax -70vmax,
    40vmax -30vmax,
    10vmax 0vmax,
    20vmax 10vmax,
    30vmax 70vmax;
  }
  75% {
    background-size: 90vmax 90vmax,
    90vmax 90vmax,
    100vmax 100vmax,
    90vmax 90vmax,
    70vmax 70vmax;
    background-position: -50vmax -40vmax,
    50vmax -30vmax,
    20vmax 0vmax,
    -10vmax 10vmax,
    40vmax 60vmax;
  }
}
</style>

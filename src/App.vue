<template>
    <div class="common-layout" style="height: 100%">
      <el-container style="height: 100%" v-if="loginState">
        <el-aside width="auto">
          <Aside/>
        </el-aside>
        <el-container>
          <el-header height="70px">
            <Header :username="username" @changeLoginState="changeLoginState"></Header>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>
            Footer
          </el-footer>
        </el-container>
      </el-container>
      <el-container v-else>
        <router-view></router-view>
      </el-container>
    </div>
</template>

<script>
import {computed, defineComponent, onMounted, reactive, toRefs} from "vue";
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import {useRouter} from "vue-router";
import {localGet} from "@/api";

export default defineComponent({
  name: 'App',
  components: {
    Aside,
    Header
  },
  setup(props, {emit}) {
    const router = useRouter();
    const state = reactive({
      loginState: false,
      username:null
    })

    if (localGet('token')!=='null')
    {
      state.loginState = true
      state.username=localGet('username')
    }
    else
      router.push({path: '/login'})

    const changeLoginState=()=>{
      state.loginState=!state.loginState
    }
    onMounted(() => {
      // console.log('App is mounted')
    })
    return {
      ...toRefs(state),
      changeLoginState
    }
  }
});
</script>

<style scoped lang="scss">

</style>

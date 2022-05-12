<template>
    <div class="common-layout" style="height: 100%">
      <el-container style="height: 100%" v-if="state.loginState">
        <el-aside width="auto">
          <Aside/>
        </el-aside>
        <el-container>
          <el-header>
            <Header></Header>
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
import {computed, defineComponent, onMounted, reactive} from "vue";
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
      loginState: false
    })

    if (localGet('token'))
      state.loginState = true
    else
      router.push({path: '/login'})

    onMounted(() => {
      // console.log('App is mounted')
    })
    return {
      state
    }
  }
});
</script>

<style scoped lang="scss">

</style>

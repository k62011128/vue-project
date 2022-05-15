<template>
  <div class="wrapper">
    <div class="left">
      {{title}}
    </div>
    <div class="right">
      <el-popover
          placement="bottom"
          :width="50"
          trigger="hover"
      >
        <div style="text-align:center; margin: 0">
          <el-button type="primary" @click="logOut">退出</el-button>
        </div>
        <template #reference>
          <div class="popover">
            <el-avatar :size="40" :src="circleUrl"/>
            <span style="margin-left: 0.3rem">欢迎使用本后台系统，{{ username }}</span>
          </div>

        </template>
      </el-popover>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs} from "vue";
import {localSet} from "@/api";
import {useRouter} from "vue-router";
import {pathMap} from "@/utils";

export default defineComponent({
  name: 'Header',
  components: {},
  props: {
    username: String
  },
  setup(props, {emit}) {
    const state = reactive({
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      username: props.username!.slice(1, props.username!.length - 1),
      title:null
    })
    const router = useRouter();
    const logOut=()=>{
      localSet('token',null)
      localSet('username',null)
      emit('changeLoginState')
      router.push({path: '/login'})
    }
    router.afterEach((to:any, from, failure)=>{
      state.title=pathMap[to.name]
      document.title=state.title!
    })
    return {
      ...toRefs(state),
      logOut
    }
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .left {
    width: 3rem;
  }

  .right {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;


    .popover {
      width: 15rem;
      line-height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.5rem;
    }
  }
}
</style>

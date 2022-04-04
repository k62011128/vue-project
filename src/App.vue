<template>
  <div class="common-layout" style="height: 100%">
    <el-container style="height: 100%">
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
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Aside from "@/components/Aside";
import Header from "@/components/Header";
export default defineComponent({
  name: 'App',
  components: {
    Aside,
    Header
  },
  setup(props, {emit}) {
  }
});
</script>

<style scoped lang="scss">

</style>

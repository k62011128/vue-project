<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside width="auto">
        Aside
      </el-aside>
      <el-container>
        <el-header>
          Header
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

export default defineComponent({
  name: 'App',
  components: {},
  setup(props, {emit}) {
  }
});
</script>

<style scoped lang="scss">

</style>

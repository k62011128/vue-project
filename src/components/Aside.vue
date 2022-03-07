<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon><location /></el-icon>
      <template #title>
        <span>Navigator One</span>
      </template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import menu from "@/config/menu";
export default defineComponent({
  name: ' Aside',
  data(){
    return {
      menu
    }
  },
  components: {
    Location,
    Document,
    IconMenu,
    Setting
  },
  setup(props, {emit}) {
  }
});
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<template>
  <el-menu
      class="el-menu-vertical-demo"
  >
    <h3>通用后台管理系统</h3>
    <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path">
      <el-icon><component :is="item.icon"></component></el-icon>
      <template #title>{{item.label}}</template>
    </el-menu-item>

    <el-sub-menu v-for="item in hasChildren">
      <template #title>
        <el-icon><component :is="item.icon"></component></el-icon>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item v-for="(subItem,subIndex) in item.children" :index="subItem.path" :key="subItem.path">
        <el-icon><component :is="subItem.icon"></component></el-icon>
        <template #title>{{subItem.label}}</template>
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import menu from "@/config/menu";
export default defineComponent({
  name: ' Aside',
  data(){
    return {
      menu
    }
  },
  components: {
  },
  setup(props, {emit}) {
  },
  computed:{
     noChildren():any{
       return this.menu.filter((item:any)=>!item.children)
     },
    hasChildren():any{
      return this.menu.filter((item:any)=>item.children)
    }
  }
});
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
h3{
  padding-top: 10px;
  line-height: 30px;
}
</style>

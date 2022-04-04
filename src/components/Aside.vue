<template>
  <el-menu
      class="el-menu-vertical-demo lef-nav"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <h3>通用后台管理系统</h3>
    <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path" @click="clickMenu(item)">
      <el-icon><component :is="item.icon"></component></el-icon>
      <template #title>{{item.label}}</template>
    </el-menu-item>

    <el-sub-menu v-for="item in hasChildren">
      <template #title>
        <el-icon><component :is="item.icon"></component></el-icon>
        <span>{{item.label}}</span>
      </template>
      <el-menu-item v-for="(subItem,subIndex) in item.children" :index="subItem.path" :key="subItem.path" @click="clickMenu(subItem)">
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
  },
  methods:{
    clickMenu(item:any):any{
      this.$router.push({
       name:item.name
     })
    }
  }
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.lef-nav{
  height: 100%;
  border: none;
  h3{
    color: aqua;
    text-align: center;
    padding-top: 10px;
    line-height: 30px;
  }
}

</style>

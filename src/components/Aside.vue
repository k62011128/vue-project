<template>
  <el-menu
      class="el-menu-vertical-demo lef-nav"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff"
      router="true"
  >
    <h4>通用后台管理系统</h4>
    <el-menu-item v-for="item in noChildren" :route="item.path">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-sub-menu v-for="item in hasChildren">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item v-for="item2 in item.children" :route="item2.path">
        <el-icon>
          <component :is="item2.icon"></component>
        </el-icon>
        <span>{{ item2.label }}</span>
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import menu from "@/config/menu";

export default defineComponent({
  name: ' Aside',
  components: {},
  setup(props, {emit}) {
    const noChildren = computed(() => {
      return menu.filter((item: any) => !item.children)
    })
    const hasChildren = computed(() => {
      return menu.filter((item: any) => item.children)
    })
    return {
      menu,
      noChildren,
      hasChildren
    }
  }
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.lef-nav {
  height: 100%;
  border: none;

  h4 {
    &:hover{
      color: #fa9ee5;
    }
    color: #ffffff;
    text-align: center;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    line-height: 1.5rem;
  }

}

</style>

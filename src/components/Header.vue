<template>
  <div>
    <el-button type="primary" :icon="Search">Search</el-button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { Search } from '@element-plus/icons-vue'
export default defineComponent({
  name: ' Header',
  components: {
    Search
  },
  setup(props, {emit}) {
  }
});
</script>

<style lang="scss" scoped>

</style>

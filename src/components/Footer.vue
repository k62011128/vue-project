<template>
  <div>
    看都看了，不点个star吗？
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  name: 'Footer',
  components: {},
  setup(props, {emit}) {
    const state = reactive({})
    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang="scss" scoped>

</style>

<template>
  <div>
    {{title}}
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: ' test',
  components: {},
  props: {title: String},
  setup(props, {emit}) {
  },
  created(){

  }
});
</script>

<style lang="scss" scoped>

</style>

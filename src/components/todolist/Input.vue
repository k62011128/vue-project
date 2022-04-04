<template>
  <input type="text" placeholder='在此输入要做的事' v-model="inputValue">
  <button @click="$emit('change',inputValue)">添加</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: ' Input',
  components: {},
  emits:['change'],
  data(){
    return {
      inputValue:''
    }
  }
});
</script>

<style lang="scss" scoped>

</style>

<template>
  <input type="text" placeholder='在此输入要做的事' v-model="inputValue">
  <button @click="$emit('getNew',inputValue)">添加</button>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue";

export default defineComponent({
  name: ' Input',
  setup(props,{emit}){
     const state=reactive({
       inputValue:null
     })
    return {
       ...toRefs(state)
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
